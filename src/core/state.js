import { SCENARIOS } from '../data/scenarios.js';
import { BADGES } from '../data/badges.js';
import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { calculateMindsetMetrics } from './scoring.js';
import { sound } from './audio.js';

const STORAGE_KEY = 'mln111_philosophy_in_life_v1';

class StateManager {
  constructor() {
    this.listeners = [];
    this.state = this.loadState();
  }

  getDefaultState() {
    return {
      xp: 0,
      completedScenarios: {}, // scenarioId -> { optionId, isDialectical, answeredAt }
      detectiveSolved: {},    // caseId -> { solvedAt, xp }
      sliderCompleted: false, // Quy luật lượng chất interactive experiment
      unlockedBadges: [],     // array of badge IDs
      activeBadgePopup: null,
      currentView: 'landing', // 'landing' | 'map' | 'scenario' | 'detective' | 'slider'
      activeScenarioId: null,
      activeCaseId: null
    };
  }

  loadState() {
    // Khi run lại từ đầu sẽ không lưu/khôi phục tiến trình làm bài trước đó.
    // Dọn dẹp sạch dữ liệu cũ trong localStorage/sessionStorage để mỗi lần chạy ứng dụng luôn bắt đầu mới.
    try {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Storage cleanup notice:', e);
    }
    return this.getDefaultState();
  }

  saveState() {
    // Không lưu tiến trình bài làm vào localStorage vĩnh viễn.
    // Dữ liệu chỉ duy trì trong phiên chạy hiện tại (in-memory) để phục vụ chấm điểm và hiển thị trong phiên.
    this.notify();
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.listeners.forEach(cb => cb(this.state));
  }

  // Answer a scenario
  recordScenarioAnswer(scenarioId, optionId) {
    const scenario = SCENARIOS.find(s => s.id === scenarioId);
    if (!scenario) return null;

    const option = scenario.options.find(o => o.id === optionId);
    if (!option) return null;

    const prevEntry = this.state.completedScenarios[scenarioId];
    const isDialectical = option.isDialectical;

    this.state.completedScenarios[scenarioId] = {
      optionId,
      isDialectical,
      answeredAt: new Date().toISOString()
    };

    if (!prevEntry) {
      const points = isDialectical ? 50 : 25;
      this.state.xp += points;
    } else if (!prevEntry.isDialectical && isDialectical) {
      // Nâng cấp từ đáp án thường (25 XP) lên đáp án biện chứng (50 XP)
      this.state.xp += 25;
    }

    // Play feedback sound
    if (isDialectical) {
      sound.playDialecticalSuccess();
    } else {
      sound.playWarning();
    }

    // Check badges
    this.checkBadges();
    this.saveState();

    return { scenario, option };
  }

  // Record Detective Case solved
  recordDetectiveSolved(caseId) {
    const caseData = DETECTIVE_CASES.find(c => c.id === caseId);
    if (!caseData) return;

    const isFirst = !this.state.detectiveSolved[caseId];
    this.state.detectiveSolved[caseId] = {
      solvedAt: new Date().toISOString(),
      xp: caseData.philosophicalVerdict.xpAwarded
    };

    if (isFirst) {
      this.state.xp += caseData.philosophicalVerdict.xpAwarded;
    }

    sound.playFanfare();
    this.checkBadges();
    this.saveState();
  }

  // Record Slider completed
  recordSliderLeap() {
    this.state.sliderCompleted = true;
    this.state.completedScenarios['C2-M3-SLIDER'] = {
      optionId: 'B',
      isDialectical: true,
      answeredAt: new Date().toISOString()
    };
    this.state.xp += 60;
    this.checkBadges();
    this.saveState();
  }

  // Check badges achievement triggers
  checkBadges() {
    const completedCount = Object.keys(this.state.completedScenarios).length;
    const solvedCases = Object.keys(this.state.detectiveSolved).length;
    const newlyUnlocked = [];

    const unlock = (badgeId) => {
      if (!this.state.unlockedBadges.includes(badgeId)) {
        this.state.unlockedBadges.push(badgeId);
        const b = BADGES.find(x => x.id === badgeId);
        if (b) newlyUnlocked.push(b);
      }
    };

    // 1. First Thinker
    if (completedCount >= 1) unlock('first-thinker');

    // 2. Master of Contradiction (C2-M3-Q002 solved dialectically)
    if (this.state.completedScenarios['C2-M3-Q002']?.isDialectical) {
      unlock('master-of-contradiction');
    }

    // 3. Quantity -> Quality (Slider Leap)
    if (this.state.sliderCompleted) {
      unlock('quantity-to-quality');
    }

    // 4. Philosophy Detective
    if (solvedCases >= 1) {
      unlock('philosophy-detective');
    }

    // 5. Truth Seeker (C2-M5-Q002 solved dialectically)
    if (this.state.completedScenarios['C2-M5-Q002']?.isDialectical) {
      unlock('truth-seeker');
    }

    // 6. Practical Thinker (C2-M1-Q001 or Case 2)
    if (this.state.completedScenarios['C2-M1-Q001']?.isDialectical || this.state.detectiveSolved['CASE-002']) {
      unlock('practical-thinker');
    }

    // 7. Dialectical Thinker (Mastered >= 6 scenarios and >= 2 cases)
    if (completedCount >= 6 && solvedCases >= 1) {
      unlock('dialectical-thinker');
    }

    if (newlyUnlocked.length > 0) {
      this.state.activeBadgePopup = newlyUnlocked[0];
      sound.playFanfare();
    }
  }

  dismissBadgePopup() {
    this.state.activeBadgePopup = null;
    this.saveState();
  }

  resetProgress() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    this.state = this.getDefaultState();
    this.notify();
  }

  getProfile() {
    return calculateMindsetMetrics(this.state, SCENARIOS);
  }

  getTotalProgressPercent() {
    const totalItems = SCENARIOS.length + DETECTIVE_CASES.length;
    const completed = Object.keys(this.state.completedScenarios).length + Object.keys(this.state.detectiveSolved).length;
    return Math.min(100, Math.round((completed / totalItems) * 100));
  }
}

export const stateManager = new StateManager();
