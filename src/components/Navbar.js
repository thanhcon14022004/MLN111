import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderNavbar(container, onNavigate, onOpenModal, onResetProgress) {
  const state = stateManager.state;
  const isMuted = sound.isMuted();

  container.innerHTML = `
    <header class="site-header">
      <div class="container header-content">
        <!-- Minimalist Brand -->
        <div class="brand-logo" id="nav-brand-btn">
          <div class="brand-icon">Φ</div>
          <div class="brand-text">
            <h1 style="font-size: 1.05rem;">MLN111 – TRIẾT HỌC TRONG ĐỜI SỐNG</h1>
            <p style="font-size: 0.7rem; color: var(--accent-gold);">C. MÁC &amp; V.I. LÊNIN</p>
          </div>
        </div>

        <!-- Clean Minimalist Nav -->
        <div class="nav-actions">
          <button class="nav-btn" id="nav-map-btn">
            <span>🗺️ Hành Trình</span>
          </button>

          <button class="nav-btn" id="nav-detective-btn">
            <span>🔍 Phá Án</span>
          </button>

          <button class="nav-btn" id="nav-handbook-btn">
            <span>📖 Sổ Tay</span>
          </button>

          <button class="nav-btn" id="nav-profile-btn" style="border-color: rgba(56, 189, 248, 0.4); color: var(--accent-cyan);">
            <span>🧠 Hồ Sơ Tư Duy</span>
          </button>

          <div class="xp-counter" title="Điểm kinh nghiệm">
            <span>✨</span>
            <span id="nav-xp-val">${state.xp} XP</span>
          </div>

          <button class="nav-btn" id="nav-reset-btn" title="Làm lại từ đầu (Đặt lại điểm và bài làm về 0)" style="border-color: rgba(239, 68, 68, 0.35); color: #fca5a5;">
            <span>↺ Làm Lại</span>
          </button>

          <button class="nav-btn" id="nav-sound-toggle-btn" title="${isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}">
            <span id="sound-icon-symbol">${isMuted ? '🔇' : '🔊'}</span>
          </button>
        </div>
      </div>
    </header>
  `;

  // Attach event handlers
  document.getElementById('nav-brand-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('landing');
  });

  document.getElementById('nav-map-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('map');
  });

  document.getElementById('nav-detective-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('detective');
  });

  document.getElementById('nav-handbook-btn').addEventListener('click', () => {
    sound.playClick();
    onOpenModal('handbook');
  });

  document.getElementById('nav-profile-btn').addEventListener('click', () => {
    sound.playClick();
    onOpenModal('profile');
  });

  const resetBtn = document.getElementById('nav-reset-btn');
  if (resetBtn && onResetProgress) {
    resetBtn.addEventListener('click', () => {
      sound.playClick();
      onResetProgress();
    });
  }

  document.getElementById('nav-sound-toggle-btn').addEventListener('click', () => {
    const muted = sound.toggleMute();
    document.getElementById('sound-icon-symbol').textContent = muted ? '🔇' : '🔊';
    sound.playClick();
  });
}
