import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderDetectiveBureau(container, caseId, onBackToMap, onSelectOtherCase) {
  // If no caseId specified, pick first or solved state
  const activeCase = DETECTIVE_CASES.find(c => c.id === caseId) || DETECTIVE_CASES[0];
  
  // Track assignments: clueId -> categoryId
  const assignments = {};
  let selectedClueId = null;
  let validationResult = null; // null | { isAllCorrect: boolean, errors: [] }
  let isCaseSolved = !!stateManager.state.detectiveSolved[activeCase.id];

  // Pre-fill if already solved
  if (isCaseSolved) {
    activeCase.clues.forEach(clue => {
      assignments[clue.id] = clue.correctCategory;
    });
    validationResult = { isAllCorrect: true, errors: [] };
  }

  function renderView() {
    // Unassigned clues
    const unassignedClues = activeCase.clues.filter(c => !assignments[c.id]);

    let unassignedHTML = '';
    unassignedClues.forEach(clue => {
      const isSelected = selectedClueId === clue.id;
      unassignedHTML += `
        <div class="clue-chip ${isSelected ? 'active-selection' : ''}" data-clue-id="${clue.id}">
          <span>📌</span>
          <span>${clue.text}</span>
        </div>
      `;
    });

    if (unassignedClues.length === 0 && !isCaseSolved && !validationResult?.isAllCorrect) {
      unassignedHTML = `<div style="color: #94a3b8; font-style: italic;">Đã xếp tất cả manh mối vào bảng. Hãy bấm nút Kiểm tra bên dưới!</div>`;
    }

    // Category Buckets
    let bucketsHTML = '';
    activeCase.categories.forEach(cat => {
      // Clues in this bucket
      const cluesInBucket = activeCase.clues.filter(c => assignments[c.id] === cat.id);

      let chipsInBucketHTML = '';
      cluesInBucket.forEach(clue => {
        let errorHighlight = '';
        if (validationResult && !validationResult.isAllCorrect) {
          if (clue.correctCategory !== cat.id) {
            errorHighlight = 'style="border-color: #ef4444; background: rgba(239, 68, 68, 0.2);"';
          }
        }

        chipsInBucketHTML += `
          <div class="clue-chip" data-clue-id="${clue.id}" ${errorHighlight}>
            <span>🔍</span>
            <span style="flex-grow: 1;">${clue.text}</span>
            <button class="remove-clue-btn" data-remove-id="${clue.id}" style="color: #94a3b8; padding: 2px 6px; font-weight: bold;" title="Bỏ ra">✕</button>
          </div>
        `;
      });

      bucketsHTML += `
        <div class="category-bucket ${selectedClueId ? 'ready-to-assign' : ''}" data-bucket-id="${cat.id}" style="border-top: 4px solid ${cat.color};">
          <div class="bucket-header">
            <div class="bucket-name" style="color: ${cat.color};">${cat.name}</div>
            <div class="bucket-desc">${cat.desc}</div>
          </div>
          <div class="bucket-clues-list">
            ${chipsInBucketHTML.length > 0 ? chipsInBucketHTML : '<div style="color: #64748b; font-size: 0.8rem; text-align: center; margin: auto;">Thả hoặc bấm chọn manh mối vào đây</div>'}
          </div>
        </div>
      `;
    });

    // Case Selector Tabs
    let caseTabsHTML = '';
    DETECTIVE_CASES.forEach(c => {
      const isCur = c.id === activeCase.id;
      const solved = !!stateManager.state.detectiveSolved[c.id];
      caseTabsHTML += `
        <button class="nav-btn ${isCur ? 'active' : ''}" data-switch-case="${c.id}" style="${isCur ? 'border-color: var(--accent-crimson); background: rgba(239, 68, 68, 0.2);' : ''}">
          <span>${c.code}</span>
          ${solved ? '<span style="color: var(--accent-emerald);">✓</span>' : ''}
        </button>
      `;
    });

    // Verdict Box if solved
    let verdictHTML = '';
    if (validationResult?.isAllCorrect || isCaseSolved) {
      const v = activeCase.philosophicalVerdict;
      verdictHTML = `
        <div class="verdict-box animate-slide-up">
          <img src="./assets/images/cases/seal-verdict-solved.svg" alt="Huy hiệu phá án" style="width: 110px; height: 110px; float: right; margin: 0 0 1rem 1.5rem; filter: drop-shadow(0 0 18px rgba(251, 191, 36, 0.6));" />
          <div class="verdict-badge">🏆 VỤ ÁN ĐÃ ĐƯỢC PHÁ GIẢI HOÀN TOÀN!</div>
          <h3 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.4rem;">
            ${v.headline}
          </h3>
          <div style="font-size: 0.9rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 1rem;">
            Khái niệm triết học cốt lõi: ${v.concept}
          </div>
          <div class="verdict-analysis-text">
            ${v.analysis}
          </div>
          <div style="display: flex; gap: 1rem; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
            <span style="color: #a7f3d0; font-weight: 700;">+${v.xpAwarded} XP Đã cộng vào hồ sơ!</span>
            <button class="btn-primary" id="detective-continue-btn">
              <span>TIẾP TỤC KHÁM PHÁ →</span>
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="container detective-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="detective-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div style="display: flex; gap: 0.5rem;">
            ${caseTabsHTML}
          </div>
        </div>

        <!-- Case Dossier Header -->
        <div class="dossier-card">
          <div class="dossier-header-bar">
            <span class="stamp-confidential">HỒ SƠ ĐIỀU TRA MẬT</span>
            <span style="font-weight: 700; color: #fecaca; font-size: 0.85rem;">
              BỘ MÔN MLN111 • PHILOSOPHY DETECTIVE BUREAU
            </span>
          </div>

          <div class="detective-intro-body">
            <!-- Mandatory Case Image -->
            <div class="detective-image-box">
              <img src="${activeCase.image}" alt="${activeCase.title}" style="width: 100%; max-height: 320px; object-fit: cover;" />
            </div>

            <!-- Case Story context -->
            <div>
              <div style="color: var(--accent-crimson); font-size: 0.85rem; font-weight: 800; letter-spacing: 0.05em; margin-bottom: 0.4rem;">
                ${activeCase.code} • ${activeCase.dossierLevel}
              </div>
              <h2 style="font-size: 1.6rem; margin-bottom: 0.6rem; color: #ffffff;">${activeCase.title}</h2>
              <p style="color: var(--accent-gold); font-size: 0.95rem; margin-bottom: 1.2rem;">${activeCase.subtitle}</p>
              
              <div class="detective-story-box">
                <strong style="color: #f87171; display: block; margin-bottom: 0.3rem;">Bối cảnh điều tra:</strong>
                ${activeCase.backgroundStory}
              </div>
            </div>
          </div>
        </div>

        <!-- Investigation Interactive Board -->
        <div class="investigation-board">
          <div class="board-title">
            <div>
              <h3 style="font-size: 1.3rem; color: #ffffff;">Bàn Phân Loại Manh Mối Triết Học</h3>
              <p style="font-size: 0.85rem; color: #94a3b8;">
                Hướng dẫn: <strong>Bấm vào một manh mối</strong> ở khay bên dưới, sau đó <strong>bấm vào ô danh mục tương ứng</strong> để ghim manh mối.
              </p>
            </div>
            ${!isCaseSolved && !validationResult?.isAllCorrect ? `
              <button class="btn-primary" id="validate-clues-btn" style="background: linear-gradient(135deg, #dc2626, #ef4444); box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);">
                <span>🔍 KIỂM TRA PHÂN LOẠI</span>
              </button>
            ` : ''}
          </div>

          <!-- Unassigned Clues Tray -->
          <div class="unassigned-clues-section">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold); display: flex; align-items: center; gap: 0.4rem;">
              <span>📁</span>
              <span>Khay Manh Mối Cần Phân Loại (${unassignedClues.length}):</span>
            </div>
            <div class="clues-grid">
              ${unassignedHTML}
            </div>
          </div>

          <!-- Target Buckets -->
          <div class="categories-bucket-grid">
            ${bucketsHTML}
          </div>

          <!-- Error Alert if validation failed -->
          ${validationResult && !validationResult.isAllCorrect ? `
            <div style="margin-top: 1.5rem; padding: 1rem 1.5rem; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); color: #fca5a5; font-size: 0.95rem;">
              ⚠️ Vẫn còn manh mối bị xếp sai danh mục hoặc chưa xếp hết! Hãy đọc kỹ định nghĩa các phạm trù và thử lại.
            </div>
          ` : ''}

          <!-- Verdict Section -->
          ${verdictHTML}
        </div>
      </div>
    `;

    // Event listeners
    document.getElementById('detective-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    // Switch case buttons
    container.querySelectorAll('[data-switch-case]').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        const nextId = btn.getAttribute('data-switch-case');
        onSelectOtherCase(nextId);
      });
    });

    // Clue click to select
    container.querySelectorAll('.unassigned-clues-section .clue-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.playClick();
        const clueId = chip.getAttribute('data-clue-id');
        selectedClueId = (selectedClueId === clueId) ? null : clueId;
        renderView();
      });
    });

    // Target bucket click to assign
    container.querySelectorAll('.category-bucket').forEach(bucket => {
      bucket.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-clue-btn')) return;
        if (selectedClueId) {
          const bucketId = bucket.getAttribute('data-bucket-id');
          assignments[selectedClueId] = bucketId;
          selectedClueId = null;
          sound.playClueSnap();
          validationResult = null;
          renderView();
        }
      });
    });

    // Remove clue from bucket
    container.querySelectorAll('.remove-clue-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.playClick();
        const clueId = btn.getAttribute('data-remove-id');
        delete assignments[clueId];
        validationResult = null;
        renderView();
      });
    });

    // Validate Clues Button
    const validateBtn = document.getElementById('validate-clues-btn');
    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        // Check if all clues assigned
        const allAssigned = activeCase.clues.every(c => assignments[c.id]);
        if (!allAssigned) {
          alert('Vui lòng xếp toàn bộ manh mối vào các danh mục trước khi kiểm tra!');
          return;
        }

        // Check correctness
        let errors = [];
        activeCase.clues.forEach(c => {
          if (assignments[c.id] !== c.correctCategory) {
            errors.push(c.id);
          }
        });

        if (errors.length === 0) {
          validationResult = { isAllCorrect: true, errors: [] };
          isCaseSolved = true;
          stateManager.recordDetectiveSolved(activeCase.id);
          renderView();
        } else {
          sound.playWarning();
          validationResult = { isAllCorrect: false, errors };
          renderView();
        }
      });
    }

    const continueBtn = document.getElementById('detective-continue-btn');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });
    }
  }

  renderView();
}
