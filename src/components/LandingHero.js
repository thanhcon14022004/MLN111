import { sound } from '../core/audio.js';
import { stateManager } from '../core/state.js';

export function renderLandingHero(container, onNavigate) {
  const hasProgress = stateManager.state.xp > 0 || 
    Object.keys(stateManager.state.completedScenarios).length > 0 ||
    Object.keys(stateManager.state.detectiveSolved).length > 0;

  container.innerHTML = `
    <section class="hero-fullscreen animate-fade-in">
      <!-- Ambient Background Glow -->
      <div class="hero-ambient-bg"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="hero-grid-main">
          
          <!-- LEFT COLUMN: Content, Headline, Quote & Actions -->
          <div>
            <!-- Badge -->
            <div class="hero-badge-tag">
              <span>🏛️</span>
              <span>MÔN HỌC MLN111 • TRIẾT HỌC MÁC – LÊNIN</span>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-headline-h1">
              TRIẾT HỌC <br />
              <span class="text-gold-gradient">TRONG ĐỜI SỐNG</span>
            </h1>

            <!-- Slogan -->
            <p class="hero-slogan-text">
              "Học triết học bằng cách nhìn vào chính cuộc sống."
            </p>

            <!-- Philosophy Quote Card -->
            <div class="hero-quote-box">
              <p>
                "Các nhà triết học chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là cải tạo thế giới."
              </p>
              <div class="author">— C. MÁC &amp; PH. ĂNG-GHEN</div>
            </div>

            <!-- Primary Action Buttons -->
            <div class="hero-cta-buttons">
              <button class="btn-primary" id="hero-start-btn" style="padding: 0.95rem 2.2rem; font-size: 1.05rem;">
                <span>${hasProgress ? '🚀 TIẾP TỤC HỌC TẬP' : '🚀 BẮT ĐẦU HỌC TẬP'}</span>
                <span style="font-size: 1.2rem;">→</span>
              </button>
              ${hasProgress ? `
                <button class="btn-secondary" id="hero-reset-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(239, 68, 68, 0.4); color: #fca5a5;">
                  <span>↺ LÀM LẠI TỪ ĐẦU</span>
                </button>
              ` : ''}
              <button class="btn-secondary" id="hero-detective-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem;">
                <span>🔍 PHÒNG PHÁ ÁN (DETECTIVE)</span>
              </button>
            </div>

            <!-- Quick Chapter Roadmap Navigation -->
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; color: #64748b; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.6rem;">
                LỘ TRÌNH KHÁM PHÁ NHANH:
              </div>
              <div class="hero-quick-roadmap">
                <button class="roadmap-pill-btn" data-nav-chapter="1">
                  Chương 1: Khái Luận
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="2" style="border-color: rgba(16, 185, 129, 0.4); color: #6ee7b7;">
                  Chương 2: Biện Chứng Duy Vật
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="3">
                  Chương 3: Duy Vật Lịch Sử
                </button>
                <button class="roadmap-pill-btn" data-nav-detective="true" style="border-color: rgba(239, 68, 68, 0.4); color: #fca5a5;">
                  Phòng Phá Án
                </button>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Full-Height Classic Portrait of Lenin, Engels & Marx -->
          <div>
            <div class="hero-portrait-frame">
              <img 
                src="./assets/images/portraits/marx-engels-lenin.png" 
                alt="Chân dung V.I. Lênin, Ph. Ăng-ghen và C. Mác" 
                class="hero-portrait-img" 
              />
              <div class="hero-portrait-caption">
                <div class="cap-names">V.I. LÊNIN • PH. ĂNG-GHEN • C. MÁC</div>
                <div class="cap-sub">NHỮNG NGƯỜI SÁNG LẬP &amp; PHÁT TRIỂN CHỦ NGHĨA MÁC – LÊNIN</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  // Attach event handlers
  document.getElementById('hero-start-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('map');
  });

  const heroResetBtn = document.getElementById('hero-reset-btn');
  if (heroResetBtn) {
    heroResetBtn.addEventListener('click', () => {
      sound.playClick();
      stateManager.resetProgress();
      onNavigate('map');
    });
  }

  document.getElementById('hero-detective-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('detective');
  });

  // Quick Roadmap buttons
  container.querySelectorAll('[data-nav-chapter]').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      onNavigate('map');
    });
  });

  container.querySelectorAll('[data-nav-detective]').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      onNavigate('detective');
    });
  });
}
