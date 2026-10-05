import { sound } from '../core/audio.js';

export function renderBadgeUnlockPopup(container, badge, onDismiss) {
  if (!badge) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="badge-popup-overlay" id="badge-popup-backdrop">
      <div class="badge-popup-card">
        <div class="badge-popup-icon">${badge.icon}</div>
        <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em; color: #cbd5e1; text-transform: uppercase;">
          🎉 BẠN VỪA MỞ KHÓA HUY HIỆU MỚI!
        </div>
        <h3 class="badge-popup-title">${badge.name}</h3>
        <div style="font-size: 0.95rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 0.8rem;">
          ${badge.nameVi}
        </div>
        <p style="font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin-bottom: 1.5rem;">
          ${badge.desc}
        </p>
        <button class="btn-primary" id="claim-badge-btn" style="width: 100%; justify-content: center;">
          <span>TUYỆT VỜI, TIẾP TỤC!</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('claim-badge-btn').addEventListener('click', () => {
    sound.playClick();
    onDismiss();
  });

  document.getElementById('badge-popup-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'badge-popup-backdrop') {
      sound.playClick();
      onDismiss();
    }
  });
}
