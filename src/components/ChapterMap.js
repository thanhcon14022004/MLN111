import { CHAPTERS, SPECIAL_MODULES } from '../data/chapters.js';
import { SCENARIOS } from '../data/scenarios.js';
import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderChapterMap(container, onSelectScenario, onSelectDetective, onResetProgress) {
  const state = stateManager.state;
  const completedScenarios = state.completedScenarios;
  const detectiveSolved = state.detectiveSolved;
  const totalCompleted = Object.keys(completedScenarios).length + Object.keys(detectiveSolved).length;
  const totalItems = SCENARIOS.length + DETECTIVE_CASES.length;
  const progressPercent = stateManager.getTotalProgressPercent();

  let chaptersHTML = '';

  CHAPTERS.forEach(ch => {
    // Filter scenarios for this chapter
    const chScenarios = SCENARIOS.filter(s => s.chapter === ch.id);
    const completedInChapter = chScenarios.filter(s => completedScenarios[s.id]).length;
    const isFinished = completedInChapter === chScenarios.length && chScenarios.length > 0;

    let scenariosCardsHTML = '';

    chScenarios.forEach(sc => {
      const isCompleted = !!completedScenarios[sc.id];
      const isDialectical = completedScenarios[sc.id]?.isDialectical;
      const isSlider = sc.type === 'slider';

      scenariosCardsHTML += `
        <div class="scenario-item-card ${isCompleted ? 'completed' : ''}" data-id="${sc.id}">
          <div class="scenario-thumb-wrapper">
            <img class="scenario-item-img" src="${sc.image}" alt="${sc.title}" loading="lazy" onerror="this.style.opacity='0.4'" />
            <div class="scenario-status-badge">
              ${isCompleted 
                ? (isDialectical 
                    ? '<span class="badge-pill" style="background: rgba(16, 185, 129, 0.9); color: #064e3b;">✓ Đạt</span>' 
                    : '<span class="badge-pill" style="background: rgba(245, 158, 11, 0.9); color: #451a03;">✓ Đã Làm</span>')
                : (isSlider 
                    ? '<span class="badge-pill" style="background: rgba(236, 72, 153, 0.9); color: #ffffff;">⚡ Tương Tác</span>'
                    : '<span class="badge-pill" style="background: rgba(30, 41, 59, 0.85); color: #94a3b8;">Chưa làm</span>')
              }
            </div>
          </div>
          <div>
            <div class="topic-tag">${sc.topic}</div>
            <h4>${sc.title}</h4>
            <p style="font-size: 0.8rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${sc.situation}
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.75rem; margin-top: 0.5rem;">
            <span style="font-size: 0.75rem; color: #64748b; font-weight: 600;">${sc.philosophyConcept}</span>
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 700;">Khám phá →</span>
          </div>
        </div>
      `;
    });

    chaptersHTML += `
      <section class="glass-panel chapter-card animate-slide-up">
        <div class="chapter-top">
          <div class="chapter-heading">
            <div class="ch-code">${ch.code}</div>
            <h3>${ch.title}</h3>
            <p>${ch.desc}</p>
          </div>
          <div style="text-align: right;">
            <span class="badge-pill" style="background: rgba(56, 189, 248, 0.12); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">
              ${ch.badge}
            </span>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; font-weight: 700; color: ${isFinished ? 'var(--accent-emerald)' : '#cbd5e1'};">
              ${completedInChapter} / ${chScenarios.length} Hoàn thành
            </div>
          </div>
        </div>

        <!-- Scenarios Grid -->
        <div class="scenario-grid">
          ${scenariosCardsHTML}
        </div>
      </section>
    `;
  });

  // Philosophy Detective Cases
  const specialModule = SPECIAL_MODULES[0];
  let detectiveCasesHTML = '';

  DETECTIVE_CASES.forEach(cs => {
    const isSolved = !!detectiveSolved[cs.id];

    detectiveCasesHTML += `
      <div class="scenario-item-card ${isSolved ? 'completed' : ''}" data-case-id="${cs.id}" style="border-left: 4px solid var(--accent-crimson);">
        <div class="scenario-thumb-wrapper">
          <img class="scenario-item-img" src="${cs.image}" alt="${cs.title}" loading="lazy" onerror="this.style.opacity='0.4'" />
          <div class="scenario-status-badge">
            ${isSolved 
              ? '<span class="badge-pill" style="background: rgba(16, 185, 129, 0.9); color: #064e3b;">✓ ĐÃ PHÁ ÁN</span>'
              : '<span class="badge-pill" style="background: rgba(239, 68, 68, 0.9); color: #ffffff;">🕵️ ĐANG MỞ</span>'
            }
          </div>
        </div>
        <div>
          <div class="topic-tag" style="color: var(--accent-crimson);">${cs.code} • ${cs.dossierLevel}</div>
          <h4>${cs.title}</h4>
          <p style="font-size: 0.8rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${cs.backgroundStory}
          </p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.75rem; margin-top: 0.5rem;">
          <span style="font-size: 0.75rem; color: #fca5a5; font-weight: 600;">Phân loại manh mối</span>
          <span style="font-size: 0.85rem; color: var(--accent-crimson); font-weight: 700;">Vào phá án →</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container animate-fade-in" style="padding-bottom: 5rem;">
      <div class="journey-header" style="padding: 1.8rem 0 1.2rem; text-align: center;">
        <div style="display: inline-flex; align-items: center; justify-content: center; gap: 1.2rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
          <img src="./assets/images/portraits/marx-lenin-banner.svg" alt="C. Mác & V.I. Lênin" style="height: 52px; max-width: 130px; object-fit: contain; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);" />
          <div style="text-align: left;">
            <h2 style="font-size: 1.7rem; margin: 0; color: #ffffff;">Bản Đồ Hành Trình MLN111</h2>
            <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Học thuyết Triết học Mác – Lênin qua các tình huống đời sống thực tế</p>
          </div>
        </div>
        ${totalCompleted > 0 ? `
          <div style="margin-top: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
            <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3);">
              Tiến trình: ${totalCompleted}/${totalItems} (${progressPercent}%)
            </span>
            <button class="nav-btn" id="map-reset-btn" style="border-color: rgba(239, 68, 68, 0.35); color: #fca5a5; font-size: 0.8rem; padding: 0.3rem 0.8rem;">
              <span>↺ Làm lại từ đầu</span>
            </button>
          </div>
        ` : ''}
      </div>

      <div class="chapter-track">
        ${chaptersHTML}

        <!-- Special Module: Detective Bureau -->
        <section class="glass-panel chapter-card animate-slide-up" style="border: 2px solid rgba(239, 68, 68, 0.35); background: linear-gradient(180deg, rgba(13, 18, 31, 0.95), rgba(69, 10, 10, 0.2));">
          <div class="chapter-top">
            <div class="chapter-heading">
              <div class="ch-code" style="color: var(--accent-crimson);">${specialModule.badge}</div>
              <h3>${specialModule.titleVi} (${specialModule.title})</h3>
              <p>${specialModule.desc}</p>
            </div>
            <div style="text-align: right;">
              <span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: var(--accent-crimson); border: 1px solid rgba(239, 68, 68, 0.4);">
                HỒ SƠ ĐIỀU TRA
              </span>
              <div style="margin-top: 0.5rem; font-size: 0.85rem; font-weight: 700; color: #fca5a5;">
                ${Object.keys(detectiveSolved).length} / ${DETECTIVE_CASES.length} Vụ án đã phá
              </div>
            </div>
          </div>

          <div class="scenario-grid">
            ${detectiveCasesHTML}
          </div>
        </section>
      </div>
    </div>
  `;

  // Attach click listeners to regular scenarios
  container.querySelectorAll('.scenario-item-card[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      sound.playClick();
      const id = card.getAttribute('data-id');
      onSelectScenario(id);
    });
  });

  // Attach click listeners to detective cases
  container.querySelectorAll('.scenario-item-card[data-case-id]').forEach(card => {
    card.addEventListener('click', () => {
      sound.playClick();
      const caseId = card.getAttribute('data-case-id');
      onSelectDetective(caseId);
    });
  });

  const mapResetBtn = document.getElementById('map-reset-btn');
  if (mapResetBtn && onResetProgress) {
    mapResetBtn.addEventListener('click', () => {
      sound.playClick();
      onResetProgress();
    });
  }
}
