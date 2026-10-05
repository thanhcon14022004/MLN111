import { SCENARIOS } from '../data/scenarios.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderScenarioPlayer(container, scenarioId, onBackToMap, onNextScenario) {
  const scenario = SCENARIOS.find(s => s.id === scenarioId);
  if (!scenario) {
    container.innerHTML = `<div class="container" style="padding: 4rem 0;"><p>Không tìm thấy tình huống.</p></div>`;
    return;
  }

  const state = stateManager.state;
  const previousAnswer = state.completedScenarios[scenario.id];
  let selectedOption = previousAnswer 
    ? scenario.options.find(o => o.id === previousAnswer.optionId) 
    : null;

  function renderView() {
    let optionsHTML = '';
    scenario.options.forEach(opt => {
      let extraClass = '';
      if (selectedOption) {
        if (selectedOption.id === opt.id) {
          extraClass = opt.isDialectical ? 'selected-dialectical' : 'selected-warning';
        }
      }

      optionsHTML += `
        <button class="option-btn ${extraClass}" data-opt-id="${opt.id}" ${selectedOption ? 'disabled' : ''}>
          <div class="opt-letter">${opt.id}</div>
          <div style="flex-grow: 1;">${opt.text}</div>
          <span class="opt-badge-tag">${selectedOption && selectedOption.id === opt.id ? (opt.isDialectical ? '✓ Đạt Biện Chứng' : '⚠️ Lệch Lạc') : 'Phương Án'}</span>
        </button>
      `;
    });

    let feedbackStepperHTML = '';
    if (selectedOption) {
      const outcomeImg = selectedOption.isDialectical 
        ? './assets/images/outcomes/outcome-dialectical-success.svg' 
        : './assets/images/outcomes/outcome-subjective-failure.svg';

      feedbackStepperHTML = `
        <div class="feedback-stepper animate-slide-up">
          <!-- STAGE 1: YOUR CHOICE -->
          <div class="feedback-step-card step-choice">
            <div class="step-label">
              <span>🎯</span>
              <span>1. LỰA CHỌN CỦA BẠN (YOUR CHOICE)</span>
            </div>
            <p style="font-size: 1rem; color: #f8fafc; font-weight: 600;">
              Lựa chọn [${selectedOption.id}]: ${selectedOption.text}
            </p>
          </div>

          <!-- STAGE 2: CONSEQUENCE WITH DEDICATED OUTCOME IMAGE -->
          <div class="feedback-step-card step-consequence">
            <div class="step-label">
              <span>⚡</span>
              <span>2. HỆ QUẢ ĐỜI THỰC (CONSEQUENCE)</span>
            </div>
            <img class="outcome-image-banner" src="${outcomeImg}" alt="Hình ảnh kết quả tương ứng" />
            <div class="consequence-narrative-box">
              <span class="narrative-tag">DIỄN BIẾN &amp; HỆ QUẢ THỰC TẾ:</span>
              <p style="font-size: 1.02rem; color: #fde68a; line-height: 1.75; margin-top: 0.35rem;">
                ${selectedOption.consequence}
              </p>
            </div>
          </div>

          <!-- STAGE 3: PHILOSOPHY ANALYSIS -->
          <div class="feedback-step-card step-analysis">
            <div class="step-label">
              <span>🔍</span>
              <span>3. LĂNG KÍNH TRIẾT HỌC MÁC – LÊNIN (PHILOSOPHY ANALYSIS)</span>
            </div>
            <p style="font-size: 1rem; color: #e9d5ff; line-height: 1.75; margin-bottom: 0.8rem;">
              ${selectedOption.philosophicalLens}
            </p>
            <div style="border-top: 1px dashed rgba(168, 85, 247, 0.3); padding-top: 0.8rem; font-size: 0.92rem; color: #cbd5e1;">
              <strong>Cơ sở lý luận MLN111:</strong> ${scenario.explanation}
            </div>
          </div>

          <!-- STAGE 4: WHAT YOU JUST LEARNED -->
          <div class="feedback-step-card step-learned">
            <div class="step-label">
              <span>💡</span>
              <span>4. BÀI HỌC PHƯƠNG PHÁP LUẬN CỐT LÕI (WHAT YOU JUST LEARNED)</span>
            </div>
            <p style="font-size: 1.05rem; color: #a7f3d0; font-weight: 600; line-height: 1.75;">
              "${scenario.coreLesson}"
            </p>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="stepper-actions">
            <button class="btn-secondary" id="retry-scenario-btn">
              <span>↺ Thử chọn phương án khác</span>
            </button>
            <button class="btn-primary" id="continue-scenario-btn">
              <span>TIẾP TỤC HÀNH TRÌNH →</span>
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="container scenario-player-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="scenario-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div style="display: flex; gap: 0.6rem; align-items: center;">
            <span class="concept-pill">${scenario.philosophyConcept}</span>
            <span class="badge-pill" style="background: rgba(255,255,255,0.06); color: #94a3b8;">
              ${scenario.difficulty.toUpperCase()}
            </span>
          </div>
        </div>

        <!-- Main Scenario Card -->
        <div class="scenario-card-main">
          <!-- Mandatory Large Visual -->
          <div class="scenario-visual-box">
            <img class="scenario-large-image" src="${scenario.image}" alt="${scenario.title}" />
          </div>

          <!-- Meta Bar -->
          <div class="scenario-meta-bar">
            <span style="font-weight: 700; color: #cbd5e1; font-size: 0.85rem;">
              Chương ${scenario.chapter} • ${scenario.topic}
            </span>
            <span style="font-size: 0.8rem; color: #94a3b8;">Mã tình huống: ${scenario.id}</span>
          </div>

          <!-- Body -->
          <div class="scenario-body">
            <h2 class="scenario-title">${scenario.title}</h2>

            <!-- Real-life situation context -->
            <div class="situation-story-box">
              <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.4rem;">
                📌 Tình huống đời sống:
              </strong>
              ${scenario.situation}
            </div>

            <!-- The Dilemma Question -->
            <div class="question-box">
              <div class="question-title">
                <span>❓</span>
                <span>${scenario.question}</span>
              </div>

              <!-- Options Grid -->
              <div class="options-grid">
                ${optionsHTML}
              </div>
            </div>

            <!-- Dynamic 4-Stage Feedback -->
            ${feedbackStepperHTML}
          </div>
        </div>
      </div>
    `;

    // Attach listeners
    document.getElementById('scenario-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    if (!selectedOption) {
      container.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const optId = btn.getAttribute('data-opt-id');
          const result = stateManager.recordScenarioAnswer(scenario.id, optId);
          selectedOption = result.option;
          renderView();

          // Smooth scroll to feedback
          setTimeout(() => {
            const feedbackEl = container.querySelector('.feedback-stepper');
            if (feedbackEl) {
              feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }, 100);
        });
      });
    } else {
      const retryBtn = document.getElementById('retry-scenario-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          sound.playClick();
          selectedOption = null;
          renderView();
        });
      }

      const continueBtn = document.getElementById('continue-scenario-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', () => {
          sound.playClick();
          onNextScenario(scenario.id);
        });
      }
    }
  }

  renderView();
}
