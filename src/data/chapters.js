export const CHAPTERS = [
  {
    id: 1,
    title: 'Khái Luận Về Triết Học',
    titleEn: 'Introduction to Philosophy',
    code: 'CHAPTER 1',
    badge: 'THẾ GIỚI QUAN',
    desc: 'Khám phá cội nguồn của tri giác, vấn đề cơ bản của triết học và sự đối đầu giữa duy vật vs duy tâm.',
    accentColor: '#38bdf8',
    gradient: 'from-sky-500 to-indigo-600',
    icon: 'compass',
    totalScenarios: 5,
    modules: [
      { id: '1.1', title: 'Triết học & Nguồn gốc' },
      { id: '1.2', title: 'Vấn đề cơ bản của triết học' },
      { id: '1.3', title: 'Duy vật vs Duy tâm' },
      { id: '1.4', title: 'Biện chứng vs Siêu hình' },
      { id: '1.5', title: 'Vai trò Triết học Mác – Lênin' }
    ]
  },
  {
    id: 2,
    title: 'Phép Biện Chứng Duy Vật',
    titleEn: 'Materialist Dialectics',
    code: 'CHAPTER 2 (TRỌNG TÂM)',
    badge: 'HẠT NHÂN LÝ LUẬN',
    desc: 'Linh hồn của triết học Mác: Vật chất - Ý thức, 2 nguyên lý, 3 quy luật (Lượng-Chất, Mâu thuẫn, Phủ định) và 6 cặp phạm trù.',
    accentColor: '#10b981',
    gradient: 'from-emerald-500 to-teal-600',
    icon: 'infinity',
    totalScenarios: 15,
    modules: [
      { id: '2.1', title: 'Vật chất & Ý thức' },
      { id: '2.2', title: 'Hai nguyên lý biện chứng' },
      { id: '2.3', title: 'Ba quy luật cơ bản' },
      { id: '2.4', title: 'Sáu cặp phạm trù' },
      { id: '2.5', title: 'Lý luận nhận thức & Thực tiễn' }
    ]
  },
  {
    id: 3,
    title: 'Chủ Nghĩa Duy Vật Lịch Sử',
    titleEn: 'Historical Materialism',
    code: 'CHAPTER 3',
    badge: 'XÃ HỘI & CON NGƯỜI',
    desc: 'Quy luật phát triển xã hội: Hình thái KT-XH, Tồn tại XH - Ý thức XH, và bản chất con người trong đời sống hiện đại.',
    accentColor: '#f59e0b',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'users',
    totalScenarios: 3,
    modules: [
      { id: '3.1', title: 'Hình thái KT-XH & LLSX - QHSX' },
      { id: '3.2', title: 'Tồn tại XH & Ý thức XH' },
      { id: '3.3', title: 'Bản chất con người & Thực tiễn' }
    ]
  }
];

export const SPECIAL_MODULES = [
  {
    id: 'detective',
    title: 'Philosophy Detective',
    titleVi: 'Nhà Điều Tra Triết Học',
    badge: 'SPECIAL INTERACTIVE LAB',
    desc: 'Phá án đời sống thực tế bằng phương pháp luận triết học: Phân loại manh mối vào Nguyên nhân, Kết quả, Bản chất, Hiện tượng!',
    accentColor: '#ef4444',
    icon: 'search',
    totalCases: 3
  }
];
