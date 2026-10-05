import { HANDBOOK_ENTRIES } from '../data/handbook.js';
import { sound } from '../core/audio.js';

export function renderHandbookModal(container, onClose) {
  let chaptersHTML = '';

  HANDBOOK_ENTRIES.forEach(ch => {
    let topicsHTML = '';
    ch.topics.forEach(t => {
      topicsHTML += `
        <div style="background: rgba(30, 41, 59, 0.45); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1rem;">
          <h4 style="font-size: 1.05rem; color: var(--accent-cyan); margin-bottom: 0.4rem;">
            📌 ${t.title}
          </h4>
          <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 0.6rem;">
            <strong>Lý thuyết cốt lõi:</strong> ${t.summary}
          </p>
          <div style="background: rgba(251, 191, 36, 0.08); border-left: 3px solid var(--accent-gold); padding: 0.6rem 0.9rem; font-size: 0.84rem; color: #fde68a;">
            💡 <strong>Vận dụng vào đời sống:</strong> ${t.lifeLesson}
          </div>
        </div>
      `;
    });

    chaptersHTML += `
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.4rem; margin-bottom: 1rem;">
          Chương ${ch.chapter}: ${ch.chapterTitle}
        </h3>
        <div>${topicsHTML}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="modal-overlay open" id="handbook-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 800px;">
        <button class="modal-close-btn" id="handbook-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.7rem; margin-bottom: 0.3rem;">Sổ Tay Triết Học Bỏ Túi</h2>
          <p style="font-size: 0.85rem; color: #94a3b8;">
            Tóm lược kiến thức môn MLN111 gắn liền trực tiếp với bài học thực tiễn đời sống.
          </p>
        </div>

        <div>
          ${chaptersHTML}
        </div>
      </div>
    </div>
  `;

  document.getElementById('handbook-close-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });
  document.getElementById('handbook-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'handbook-modal-overlay') {
      sound.playClick();
      onClose();
    }
  });
}
