import { stateManager } from '../core/state.js';
import { generateRadarChartSVG } from '../core/scoring.js';
import { DIMENSIONS } from '../data/archetypes.js';
import { sound } from '../core/audio.js';

export function renderProfileModal(container, onClose) {
  const profile = stateManager.getProfile();
  const archetype = profile.archetype;
  const radarSVG = generateRadarChartSVG(profile.dimensionScores, 300);

  let dimensionsListHTML = '';
  DIMENSIONS.forEach(dim => {
    const val = profile.dimensionScores[dim.key] || 50;
    dimensionsListHTML += `
      <div style="margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.3rem;">
          <span style="color: #cbd5e1;">${dim.name}</span>
          <span style="color: ${dim.color};">${val}%</span>
        </div>
        <div style="width: 100%; height: 8px; background: #1e293b; border-radius: 4px; overflow: hidden;">
          <div style="width: ${val}%; height: 100%; background: ${dim.color}; border-radius: 4px; transition: width 0.8s ease;"></div>
        </div>
        <div style="font-size: 0.72rem; color: #64748b; margin-top: 0.2rem;">${dim.desc}</div>
      </div>
    `;
  });

  let strengthsHTML = '';
  archetype.strengths.forEach(s => {
    strengthsHTML += `<li style="margin-bottom: 0.3rem;">✓ ${s}</li>`;
  });

  container.innerHTML = `
    <div class="modal-overlay open" id="profile-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 820px;" id="certificate-print-area">
        <button class="modal-close-btn" id="profile-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 2rem;">
          <span class="badge-pill" style="background: rgba(56, 189, 248, 0.12); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">
            CHỨNG NHẬN TƯ DUY TRIẾT HỌC • MLN111
          </span>
          <h2 style="font-size: 1.8rem; margin: 0.5rem 0 0.2rem;">Hồ Sơ Tư Duy Triết Học Của Bạn</h2>
          <p style="font-size: 0.85rem; color: #94a3b8;">
            Được phân tích từ quá trình xử lý tình huống thực tế và phá án điều tra triết học.
          </p>
        </div>

        <!-- Main Archetype Banner -->
        <div style="background: rgba(30, 41, 59, 0.7); border: 2px solid ${archetype.accentColor}; border-radius: var(--radius-md); padding: 1.8rem; margin-bottom: 2rem; position: relative; overflow: hidden;">
          <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
            <div style="font-size: 4rem; filter: drop-shadow(0 0 15px rgba(255,255,255,0.2));">
              ${archetype.icon}
            </div>
            <div style="flex-grow: 1;">
              <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; color: ${archetype.accentColor};">
                HÌNH MẪU TƯ DUY (ARCHETYPE)
              </div>
              <h3 style="font-size: 1.6rem; color: #ffffff; margin-bottom: 0.3rem;">
                ${archetype.title}
              </h3>
              <p style="color: var(--accent-gold); font-size: 0.92rem; font-style: italic; margin-bottom: 0.6rem;">
                "${archetype.tagline}"
              </p>
              <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
                ${archetype.description}
              </p>
            </div>
          </div>

          <div style="margin-top: 1.2rem; padding-top: 1.2rem; border-top: 1px solid rgba(255,255,255,0.08); display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <strong style="font-size: 0.82rem; color: var(--accent-cyan); display: block; margin-bottom: 0.4rem;">
                ĐIỂM MẠNH TƯ DUY:
              </strong>
              <ul style="list-style: none; padding: 0; font-size: 0.82rem; color: #94a3b8;">
                ${strengthsHTML}
              </ul>
            </div>
            <div>
              <strong style="font-size: 0.82rem; color: var(--accent-gold); display: block; margin-bottom: 0.4rem;">
                LỜI KHUYÊN PHÁT TRIỂN:
              </strong>
              <p style="font-size: 0.82rem; color: #94a3b8; line-height: 1.5;">
                ${archetype.lifeAdvice}
              </p>
            </div>
          </div>
        </div>

        <!-- 5-Dimensional Radar & Progress Bars -->
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: center;">
          <div style="text-align: center;">
            <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.5rem;">Biểu Đồ Radar 5 Chiều</h4>
            <div style="display: flex; justify-content: center;">
              ${radarSVG}
            </div>
            <div style="font-size: 0.78rem; color: #64748b; margin-top: 0.5rem;">
              Điểm tổng hợp trung bình: <strong style="color: var(--accent-cyan);">${profile.averageScore}%</strong>
            </div>
          </div>

          <div>
            <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 1rem;">Chi Tiết Từng Chiều Tư Duy</h4>
            ${dimensionsListHTML}
          </div>
        </div>

        <!-- Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 1rem;">
          <div style="font-size: 0.8rem; color: #64748b;">
            * Kết quả phản ánh mức độ vận dụng lăng kính triết học Mác - Lênin trong các tình huống mô phỏng.
          </div>
          <div style="display: flex; gap: 0.8rem;">
            <button class="nav-btn" id="profile-reset-btn" style="border-color: rgba(239, 68, 68, 0.4); color: #fca5a5;">
              <span>↺ Làm Lại Từ Đầu</span>
            </button>
            <button class="nav-btn" id="print-certificate-btn">
              <span>🖨️ In / Lưu Chứng Nhận</span>
            </button>
            <button class="btn-primary" id="profile-done-btn">
              <span>ĐÓNG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Listeners
  document.getElementById('profile-close-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });
  document.getElementById('profile-done-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });
  document.getElementById('profile-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'profile-modal-overlay') {
      sound.playClick();
      onClose();
    }
  });

  const profileResetBtn = document.getElementById('profile-reset-btn');
  if (profileResetBtn) {
    profileResetBtn.addEventListener('click', () => {
      sound.playClick();
      if (confirm('Bạn có muốn làm lại từ đầu không? Toàn bộ tiến trình làm bài và điểm số sẽ được đặt lại về 0.')) {
        stateManager.resetProgress();
        onClose();
      }
    });
  }

  document.getElementById('print-certificate-btn').addEventListener('click', () => {
    sound.playClick();
    window.print();
  });
}
