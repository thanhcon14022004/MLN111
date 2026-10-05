import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderInteractiveSlider(container, onBackToMap) {
  let hours = 30;
  let hasTriggeredLeap = false;

  function getStateData(h) {
    if (h < 25) {
      return {
        stage: 'KHỞI ĐẦU CHƯA THẤY KẾT QUẢ',
        icon: '🐢',
        img: './assets/images/slider/stage-beginner.svg',
        color: '#94a3b8',
        title: '0h – 25h: Giai đoạn bắt đầu',
        desc: 'Mỗi dòng code, từ vựng hay khái niệm đều lạ lẫm. Bạn cảm thấy bối rối, làm gì cũng vấp váp và có cảm giác mình "không có năng khiếu". Nhiều người nản chí bỏ cuộc ngay tại đây!',
        statusBadge: 'LƯỢNG TÍCH LŨY RẤT ÍT'
      };
    } else if (h < 60) {
      return {
        stage: 'TÍCH LŨY TRONG GIỚI HẠN ĐỘ',
        icon: '🌱',
        img: './assets/images/slider/stage-measure.svg',
        color: '#38bdf8',
        title: '25h – 60h: Trong phạm vi "ĐỘ" (Measure)',
        desc: 'Lượng tri thức và giờ thực hành đang âm thầm tăng lên. Tuy nhiên về "Chất" (năng lực tư duy phản xạ) vẫn chưa có biến đổi căn bản. Đây là sự kiên trì cần thiết mà mọi chuyên gia đều phải đi qua.',
        statusBadge: 'TRONG PHẠM VI "ĐỘ"'
      };
    } else if (h < 80) {
      return {
        stage: 'TIẾN SÁT ĐIỂM NÚT',
        icon: '🔥',
        img: './assets/images/slider/stage-node.svg',
        color: '#f59e0b',
        title: '60h – 79h: Chuẩn bị chạm "ĐIỂM NÚT"',
        desc: 'Áp lực và khối lượng bài tập dồn dập. Các mắt xích tư duy bắt đầu kết nối với nhau. Năng lượng tích lũy sắp đạt tới giới hạn chịu đựng của chất cũ!',
        statusBadge: 'SÁT ĐIỂM NÚT (80h)'
      };
    } else {
      return {
        stage: 'BƯỚC NHẢY ĐÃ KÍCH HOẠT!',
        icon: '⚡🚀',
        img: './assets/images/slider/stage-leap.svg',
        color: '#10b981',
        title: '80h – 100h: BƯỚC NHẢY VỌT VỀ CHẤT (Leap)',
        desc: 'BÙNG NỔ! Lượng tích lũy đã vượt qua Điểm Nút (80h). Bạn thực hiện Bước Nhảy vọt: Kỹ năng từ chỗ ngập ngừng chắp vá đã biến đổi căn bản thành phản xạ tinh thông tự nhiên! Chất cũ mất đi, chất mới cao cấp hơn ra đời!',
        statusBadge: 'BƯỚC NHẢY VỌT THÀNH CÔNG!'
      };
    }
  }

  function renderView() {
    const data = getStateData(hours);
    const isLeapActive = hours >= 80;

    container.innerHTML = `
      <div class="container animate-fade-in" style="padding: 2.5rem 0 5rem;">
        <!-- Nav Header -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="slider-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <span class="badge-pill" style="background: rgba(236, 72, 153, 0.15); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.3);">
            PHÒNG THÍ NGHIỆM TƯƠNG TÁC: QUY LUẬT LƯỢNG – CHẤT
          </span>
        </div>

        <div class="slider-lab-card">
          <!-- Visual Dynamic Stage Area with SVG Stage Illustration -->
          <div class="lab-visual-area">
            ${isLeapActive ? `
              <div class="leap-blast-overlay">
                <div class="leap-burst-badge">💥 BƯỚC NHẢY!</div>
              </div>
            ` : ''}

            <div class="lab-state-avatar" style="width: 100%; max-width: 520px;">
              <img src="${data.img}" alt="${data.title}" style="width: 100%; max-height: 160px; object-fit: contain; margin-bottom: 1.2rem; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.5));" />
              <div class="lab-state-title" style="color: ${data.color};">
                ${data.title}
              </div>
              <p class="lab-state-desc" style="margin: 0 auto;">${data.desc}</p>
            </div>
          </div>

          <!-- Slider Controls -->
          <div class="slider-control-box">
            <div class="slider-labels-row">
              <span style="color: #94a3b8;">Thời gian tích lũy:</span>
              <span style="color: var(--accent-gold); font-size: 1.3rem; font-weight: 800;">
                <span id="slider-val-display">${hours}</span> Giờ Học / Rèn Luyện
              </span>
            </div>

            <!-- Range input -->
            <input 
              type="range" 
              class="slider-input-track" 
              id="hours-slider-input" 
              min="0" 
              max="100" 
              step="1" 
              value="${hours}" 
            />

            <!-- Markers -->
            <div class="node-markers">
              <div class="node-point-flag">
                <span>ĐIỂM NÚT (80h)</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 1.2rem;">
                <span>0h (Khởi đầu)</span>
                <span>40h (Phạm vi Độ)</span>
                <span>80h (Điểm Nút)</span>
                <span>100h (Chất mới)</span>
              </div>
            </div>
          </div>

          <!-- Philosophy Breakdown Box -->
          <div style="background: rgba(30, 41, 59, 0.5); border-radius: var(--radius-md); padding: 1.8rem; border-left: 4px solid var(--accent-cyan); margin-top: 2rem;">
            <h4 style="font-size: 1.15rem; color: var(--accent-cyan); margin-bottom: 0.6rem;">
              📚 Phân tích quy luật Lượng – Chất (MLN111):
            </h4>
            <ul style="padding-left: 1.5rem; line-height: 1.8; color: #cbd5e1; font-size: 0.95rem;">
              <li><strong>Chất:</strong> Tính quy định khách quan vốn có, làm cho sự vật là nó chứ không phải là cái khác (ở đây là trình độ kỹ năng phản xạ).</li>
              <li><strong>Lượng:</strong> Tính quy định về số lượng, quy mô, tốc độ (ở đây là số giờ học tập, số bài toán đã giải: 0h – 100h).</li>
              <li><strong>Độ:</strong> Khoảng giới hạn (0h – 79h) mà trong đó sự thay đổi về lượng chưa làm thay đổi căn bản về chất.</li>
              <li><strong>Điểm nút:</strong> Cột mốc giới hạn (80h) mà tại đó lượng tích lũy đã đủ để làm biến đổi về chất.</li>
              <li><strong>Bước nhảy:</strong> Sự chuyển hóa đột biến về chất (từ người mới ngập ngừng sang người thành thạo).</li>
            </ul>
          </div>

          <!-- Methodological Takeaway -->
          <div style="margin-top: 1.5rem; text-align: center; padding: 1.2rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md);">
            <p style="font-size: 1rem; color: #a7f3d0; font-weight: 600;">
              💡 <strong>Bài học cuộc sống:</strong> Muốn có sự thay đổi về chất, trước hết phải kiên trì tích lũy từng chút một về lượng; tránh nóng vội đốt cháy giai đoạn (bệnh tả khuynh) và tránh bảo thủ trì trệ không dám bứt phá (bệnh hữu khuynh)!
            </p>
          </div>
        </div>
      </div>
    `;

    // Attach listeners
    document.getElementById('slider-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    const sliderInput = document.getElementById('hours-slider-input');
    sliderInput.addEventListener('input', (e) => {
      hours = parseInt(e.target.value, 10);
      document.getElementById('slider-val-display').textContent = hours;

      if (hours >= 80 && !hasTriggeredLeap) {
        hasTriggeredLeap = true;
        sound.playLeapBoom();
        stateManager.recordSliderLeap();
      } else if (hours < 80) {
        hasTriggeredLeap = false;
      }

      renderView();
      // Keep input focused
      const newInput = document.getElementById('hours-slider-input');
      if (newInput) newInput.focus();
    });
  }

  renderView();
}
