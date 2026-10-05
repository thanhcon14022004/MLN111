import { BADGES } from '../data/badges.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderBadgesModal(container, onClose) {
  const state = stateManager.state;
  const unlockedBadges = state.unlockedBadges;

  let badgesHTML = '';
  BADGES.forEach(b => {
    const isUnlocked = unlockedBadges.includes(b.id);
    badgesHTML += `
      <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="badge-icon">${b.icon}</div>
        <h4 style="color: ${isUnlocked ? '#ffffff' : '#64748b'};">${b.name}</h4>
        <div style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 0.3rem;">${b.nameVi}</div>
        <p style="margin-bottom: 0.6rem;">${b.desc}</p>
        <div style="font-size: 0.72rem; color: ${isUnlocked ? 'var(--accent-emerald)' : '#64748b'}; font-weight: 600; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 0.4rem;">
          ${isUnlocked ? '✓ ĐÃ MỞ KHÓA' : `Điều kiện: ${b.requirement}`}
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="modal-overlay open" id="badges-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 800px;">
        <button class="modal-close-btn" id="badges-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.7rem; margin-bottom: 0.3rem;">Bảng Vinh Danh Huy Hiệu</h2>
          <p style="font-size: 0.85rem; color: #94a3b8;">
            Bạn đã mở khóa <strong>${unlockedBadges.length}</strong> / <strong>${BADGES.length}</strong> danh hiệu triết học.
          </p>
        </div>

        <div class="badges-grid">
          ${badgesHTML}
        </div>
      </div>
    </div>
  `;

  document.getElementById('badges-close-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });
  document.getElementById('badges-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'badges-modal-overlay') {
      sound.playClick();
      onClose();
    }
  });
}
