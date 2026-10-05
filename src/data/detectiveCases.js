export const DETECTIVE_CASES = [
  {
    id: 'CASE-001',
    code: 'CASE #001',
    title: 'Vụ án Sinh Viên A: Đến lớp 100% nhưng vì sao vẫn trượt môn?',
    subtitle: 'Giải mã hiện tượng tảng băng trôi trong học tập học đường',
    image: './assets/images/cases/case-student-mystery.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#ef4444',
    backgroundStory: 'Sinh viên A luôn có mặt ở giảng đường từ rất sớm, ngồi ngay bàn đầu, điểm danh chuyên cần đạt 100%. Mọi bạn bè đều nghĩ A là một tấm gương sáng. Thế nhưng khi công bố điểm thi kết thúc học phần MLN111, A chỉ đạt 2.0/10 (Điểm F) và phải học lại. Với tư cách là "Nhà điều tra Triết học", bạn hãy bóc tách các manh mối để tìm ra chân tướng sự việc!',
    categories: [
      { id: 'hien_tuong', name: 'HIỆN TƯỢNG', desc: 'Biểu hiện bề ngoài quan sát được', color: '#38bdf8' },
      { id: 'ban_chat', name: 'BẢN CHẤT', desc: 'Mối liên hệ sâu xa bên trong quy định kết quả', color: '#a855f7' },
      { id: 'nguyen_nhan', name: 'NGUYÊN NHÂN', desc: 'Hành vi trực tiếp sinh ra hậu quả', color: '#f59e0b' },
      { id: 'dieu_kien', name: 'ĐIỀU KIỆN', desc: 'Môi trường thúc đẩy nguyên nhân phát tác', color: '#10b981' },
      { id: 'ket_qua', name: 'KẾT QUẢ', desc: 'Biến đổi tất yếu cuối cùng xuất hiện', color: '#ef4444' }
    ],
    clues: [
      {
        id: 'clue-1',
        text: 'Có mặt đầy đủ 100% các buổi học, ngồi ngay bàn đầu giảng đường',
        correctCategory: 'hien_tuong',
        hint: 'Đây chỉ là hành vi vật lý bề ngoài mà mắt thường nhìn thấy được.'
      },
      {
        id: 'clue-2',
        text: 'Lối học vẹt, chép máy móc không có tư duy phản biện hay đào sâu quy luật',
        correctCategory: 'ban_chat',
        hint: 'Yếu tố nội tại cốt lõi chi phối toàn bộ chất lượng tiếp thu tri thức.'
      },
      {
        id: 'clue-3',
        text: 'Thức đêm lướt điện thoại đến 3h sáng khiến lên lớp mất tập trung và buồn ngủ',
        correctCategory: 'nguyen_nhan',
        hint: 'Tác động trực tiếp làm suy giảm khả năng ghi nhận kiến thức.'
      },
      {
        id: 'clue-4',
        text: 'Phòng trọ ồn ào, thường xuyên bị rủ rê chơi game và không có góc học yên tĩnh',
        correctCategory: 'dieu_kien',
        hint: 'Yếu tố hoàn cảnh khách quan bên ngoài hỗ trợ nguyên nhân phát tác.'
      },
      {
        id: 'clue-5',
        text: 'Nhận điểm F (2.0/10) trên bảng điểm và buộc phải đăng ký học lại',
        correctCategory: 'ket_qua',
        hint: 'Biến đổi cuối cùng sinh ra từ chuỗi tác động trước đó.'
      }
    ],
    philosophicalVerdict: {
      headline: 'KẾT LUẬN CỦA NHÀ ĐIỀU TRA TRIẾT HỌC',
      concept: 'Cặp phạm trù Bản chất - Hiện tượng & Nguyên nhân - Kết quả',
      summary: 'Vụ án đã được phá giải hoàn toàn nhờ phương pháp biện chứng duy vật!',
      analysis: 'Trong vụ án này, sự có mặt 100% trên lớp chỉ là "Hiện tượng" bề nổi. Hiện tượng này thậm chí đã xuyên tạc "Bản chất" (tư duy học tập thụ động, rỗng ruột). Điểm F là "Kết quả" tất yếu sinh ra từ "Nguyên nhân" thức đêm lướt mạng kết hợp với "Điều kiện" phòng trọ ồn ào. C.Mác từng dạy: Nếu hiện tượng và bản chất trùng khít nhau thì mọi khoa học đều trở nên thừa thãi. Muốn tiến bộ thực chất, con người phải cải tạo bản chất chứ không thể dựa vào sự đối phó hiện tượng bề ngoài!',
      xpAwarded: 150,
      badgeUnlock: 'Philosophy Detective'
    }
  },
  {
    id: 'CASE-002',
    code: 'CASE #002',
    title: 'Khủng hoảng Startup X: Đốt sạch 50 triệu và cái bẫy duy ý chí',
    subtitle: 'Giải mã bi kịch giữa ý chí chủ quan và điều kiện vật chất khách quan',
    image: './assets/images/cases/case-startup-crisis.svg',
    dossierLevel: 'CẤP ĐỘ: TRUNG BÌNH',
    accentColor: '#f59e0b',
    backgroundStory: 'Một nhóm sinh viên năm 2 gom góp 50 triệu đồng tiền tiết kiệm để xây dựng app giao đồ ăn độc quyền cho ký túc xá. Nhóm tin chắc rằng với khẩu hiệu "Đam mê cháy bỏng và làm việc 18 tiếng/ngày", họ sẽ đánh bại mọi đối thủ. Tuy nhiên chỉ sau 60 ngày, app cạn sạch vốn, khách hàng than phiền app lỗi triền miên và dự án tuyên bố giải thể.',
    categories: [
      { id: 'dieu_kien_khach_quan', name: 'ĐIỀU KIỆN KHÁCH QUAN (VẬT CHẤT)', desc: 'Hiện thực kinh tế - xã hội bên ngoài độc lập với ý muốn', color: '#0ea5e9' },
      { id: 'y_thuc_chu_quan', name: 'Ý THỨC CHỦ QUAN', desc: 'Ước muốn, niềm tin và ý chí tinh thần', color: '#ec4899' },
      { id: 'luc_luong_san_xuat', name: 'LỰC LƯỢNG SẢN XUẤT', desc: 'Trình độ công nghệ và năng lực kỹ thuật thực tế', color: '#10b981' },
      { id: 'ban_chat_sai_lam', name: 'BẢN CHẤT SAI LẦM', desc: 'Căn bệnh triết học cốt lõi dẫn đến đổ vỡ', color: '#f59e0b' },
      { id: 'ket_qua_tat_yeu', name: 'KẾT QUẢ TẤT YẾU', desc: 'Hậu quả thực tiễn không thể tránh khỏi', color: '#ef4444' }
    ],
    clues: [
      {
        id: 'clue-2-1',
        text: 'Thị trường đã có các ông lớn Grab, ShopeeFood chiếm lĩnh với nguồn vốn hàng ngàn tỷ',
        correctCategory: 'dieu_kien_khach_quan',
        hint: 'Bối cảnh kinh tế thị trường hiện thực không thể thay đổi bằng ý muốn.'
      },
      {
        id: 'clue-2-2',
        text: 'Khẩu hiệu "Chỉ cần đam mê mãnh liệt và thức khuya là chắc chắn thành công"',
        correctCategory: 'y_thuc_chu_quan',
        hint: 'Ý chí tinh thần được phóng đại vượt quá cơ sở thực tế.'
      },
      {
        id: 'clue-2-3',
        text: 'Đội ngũ lập trình chỉ là sinh viên năm 2 chưa có kinh nghiệm xử lý tải cao, server thường xuyên sập',
        correctCategory: 'luc_luong_san_xuat',
        hint: 'Năng lực công cụ và trình độ tay nghề của người lao động.'
      },
      {
        id: 'clue-2-4',
        text: 'Mắc bệnh chủ quan duy ý chí: Lấy mong muốn chủ quan áp đặt lên quy luật khách quan',
        correctCategory: 'ban_chat_sai_lam',
        hint: 'Căn bệnh triết học căn bản mà triết học Mác cảnh báo gay gắt.'
      },
      {
        id: 'clue-2-5',
        text: 'Dự án cạn kiệt dòng tiền, app bị gỡ khỏi kho ứng dụng sau đúng 60 ngày',
        correctCategory: 'ket_qua_tat_yeu',
        hint: 'Hậu quả vật chất cụ thể cuối cùng.'
      }
    ],
    philosophicalVerdict: {
      headline: 'KẾT LUẬN CỦA NHÀ ĐIỀU TRA TRIẾT HỌC',
      concept: 'Mối quan hệ giữa Vật chất và Ý thức & Chống bệnh chủ quan duy ý chí',
      summary: 'Vụ án Startup X phơi bày hậu quả tai hại khi coi thường điều kiện vật chất!',
      analysis: 'Nhóm sáng lập đã rơi vào căn bệnh kinh điển: "Chủ quan duy ý chí". Họ tưởng rằng ý thức và nhiệt huyết có thể thay thế cho điều kiện vật chất (nguồn vốn, thị phần) và trình độ của lực lượng sản xuất (năng lực kỹ thuật). Theo triết học Mác – Lênin: Vật chất quyết định ý thức, ý thức chỉ có thể cải tạo thế giới khi dựa trên việc tôn trọng và tuân thủ các quy luật khách quan. Nhiệt huyết mà thiếu tri thức khoa học sẽ chỉ dẫn tới sự phá sản tốn kém!',
      xpAwarded: 180,
      badgeUnlock: 'Practical Thinker'
    }
  },
  {
    id: 'CASE-003',
    code: 'CASE #003',
    title: 'Nghịch lý Tự động hóa: Robot thế chỗ hay Mâu thuẫn LLSX và QHSX?',
    subtitle: 'Giải mã làn sóng đình công tại một doanh nghiệp công nghệ cao',
    image: './assets/images/cases/case-ai-labor.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#38bdf8',
    backgroundStory: 'Một xưởng sản xuất cơ khí chính xác đầu tư dàn robot tự động và AI kiểm định chất lượng hiện đại nhất khu vực. Năng suất máy móc tăng gấp 5 lần. Tuy nhiên, ban giám đốc lập tức ra thông báo: Cắt giảm 40% lương của công nhân vận hành, sa thải hàng loạt thợ lành nghề và hủy bỏ toàn bộ tiền thưởng. Hệ quả là công nhân đồng loạt đình công, dàn máy tiền tỷ nằm đắp chiếu.',
    categories: [
      { id: 'luc_luong_sx', name: 'LỰC LƯỢNG SẢN XUẤT MỚI', desc: 'Công cụ lao động và công nghệ tiên tiến', color: '#38bdf8' },
      { id: 'quan_he_sx_cu', name: 'QUAN HỆ SẢN XUẤT CŨ KỸ', desc: 'Cách thức quản lý, sở hữu và phân phối lạc hậu', color: '#f43f5e' },
      { id: 'hien_tuong_be_noi', name: 'HIỆN TƯỢNG BỀ NỔI', desc: 'Biểu hiện tranh chấp trước mắt', color: '#fbbf24' },
      { id: 'mau_thuan_bien_chung', name: 'MÂU THUẪN BIỆN CHỨNG', desc: 'Bản chất đối kháng giữa 2 mặt của phương thức sản xuất', color: '#a855f7' },
      { id: 'giai_phap_bien_chung', name: 'GIẢI PHÁP BIỆN CHỨNG', desc: 'Con đường khôi phục sự phù hợp theo quy luật', color: '#10b981' }
    ],
    clues: [
      {
        id: 'clue-3-1',
        text: 'Hệ thống cánh tay robot tự động và thuật toán thị giác máy tính AI chính xác từng micromet',
        correctCategory: 'luc_luong_sx',
        hint: 'Yếu tố công cụ kỹ thuật hiện đại trong nền sản xuất.'
      },
      {
        id: 'clue-3-2',
        text: 'Chính sách bóc lột cắt giảm lương, đẩy gánh nặng chuyển đổi công nghệ lên vai người lao động',
        correctCategory: 'quan_he_sx_cu',
        hint: 'Quan hệ tổ chức quản lý và phân phối sản phẩm thô thiển.'
      },
      {
        id: 'clue-3-3',
        text: 'Công nhân tức giận đình công, từ chối vận hành khiến dàn máy móc bị tê liệt',
        correctCategory: 'hien_tuong_be_noi',
        hint: 'Sự kiện bùng phát trực tiếp nhìn thấy được ở cổng nhà máy.'
      },
      {
        id: 'clue-3-4',
        text: 'Quan hệ sản xuất cũ trở thành xiềng xích trói buộc và phá hủy chính sự phát triển của Lực lượng sản xuất',
        correctCategory: 'mau_thuan_bien_chung',
        hint: 'Quy luật khách quan của chủ nghĩa duy vật lịch sử bị vi phạm nghiêm trọng.'
      },
      {
        id: 'clue-3-5',
        text: 'Tái cấu trúc chính sách phân phối, chia sẻ lợi ích năng suất và đào tạo nâng cao tay nghề cho công nhân',
        correctCategory: 'giai_phap_bien_chung',
        hint: 'Tạo lập sự phù hợp mới giữa quan hệ sản xuất và trình độ của lực lượng sản xuất.'
      }
    ],
    philosophicalVerdict: {
      headline: 'KẾT LUẬN CỦA NHÀ ĐIỀU TRA TRIẾT HỌC',
      concept: 'Quy luật Quan hệ sản xuất phù hợp với trình độ phát triển của Lực lượng sản xuất',
      summary: 'Vụ án chứng minh công nghệ không có lỗi, lỗi nằm ở quan hệ sản xuất lạc hậu!',
      analysis: 'Vụ án này là hình ảnh thu nhỏ sống động của quy luật cốt lõi trong Chủ nghĩa duy vật lịch sử: Lực lượng sản xuất (Robot, AI) là yếu tố cách mạng nhất, luôn đòi hỏi phát triển. Nhưng Quan hệ sản xuất (chính sách phân phối, quản lý của chủ sở hữu) lại xơ cứng, bảo thủ, coi người lao động như công cụ rẻ tiền. Khi QHSX không còn phù hợp với trình độ LLSX, nó biến thành lực cản kìm hãm, làm tê liệt toàn bộ dây chuyền sản xuất. Muốn giải quyết triệt để, phải cải tổ quan hệ sản xuất để thiết lập lại sự phù hợp biện chứng!',
      xpAwarded: 220,
      badgeUnlock: 'Dialectical Thinker'
    }
  }
];
