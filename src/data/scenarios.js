export const SCENARIOS = [
  // ==========================================
  // CHAPTER 1: KHÁI LUẬN VỀ TRIẾT HỌC
  // ==========================================
  {
    id: 'C1-Q001',
    chapter: 1,
    module: '1.1',
    topic: 'Triết học là gì & Nguồn gốc triết học',
    philosophyConcept: 'Nguồn gốc nhận thức và nguồn gốc xã hội của triết học',
    difficulty: 'easy',
    image: './assets/images/chapter1/intro-philosophy.svg',
    title: 'Đêm ngắm sao và những trăn trở về tồn tại',
    situation: 'Vào một đêm cắm trại xa thành phố, Nam – sinh viên năm nhất – nhìn lên bầu trời ngàn sao và tự hỏi: "Vũ trụ này từ đâu mà có? Vì sao con người lại tồn tại trên Trái Đất này? Mình sinh ra để làm gì và tương lai sẽ đi về đâu?". Đây không phải là bài toán giải tích hay công thức vật lý, mà là cảm giác kinh ngạc sâu xa trước tự nhiên và xã hội.',
    question: 'Theo triết học Mác – Lênin, nguồn gốc sâu xa dẫn đến sự ra đời của những suy tư triết học trên là gì?',
    options: [
      {
        id: 'A',
        text: 'Chỉ do trí tưởng tượng phong phú và sự rảnh rỗi của một số cá nhân đặc biệt trong xã hội.',
        isDialectical: false,
        consequence: 'Bạn xem triết học như một thú vui viển vông, tách rời khỏi nhu cầu sinh tồn và cải tạo thế giới của loài người.',
        philosophicalLens: 'Quan điểm này rơi vào chủ nghĩa chủ quan, coi triết học là sản phẩm tư biện tách rời thực tiễn vật chất.'
      },
      {
        id: 'B',
        text: 'Xuất phát từ nguồn gốc nhận thức (nhu cầu khái quát thế giới quan) và nguồn gốc xã hội (phân công lao động, trí thức xuất hiện).',
        isDialectical: true,
        consequence: 'Bạn hiểu rằng triết học sinh ra từ chính thực tiễn sinh tồn: con người cần hệ thống hóa nhận thức về thế giới khi xã hội có sự phân công lao động trí óc và chân tay.',
        philosophicalLens: 'Chuẩn xác theo MLN111: Triết học ra đời khi tư duy con người đạt trình độ trừu tượng hóa (nhận thức) và xã hội xuất hiện của cải dư thừa, phân chia giai cấp (xã hội).'
      },
      {
        id: 'C',
        text: 'Do các đấng thần linh cài đặt sẵn vào tâm trí con người từ khi sinh ra.',
        isDialectical: false,
        consequence: 'Bạn phó thác nguồn gốc tư duy con người cho siêu nhiên, từ bỏ năng lực nhận thức duy vật khoa học.',
        philosophicalLens: 'Đây là thế giới quan duy tâm khách quan thần bí, trái ngược hoàn toàn với triết học Mác – Lênin.'
      },
      {
        id: 'D',
        text: 'Triết học chỉ là sự sao chép nguyên xi lại các định lý của khoa học tự nhiên cụ thể.',
        isDialectical: false,
        consequence: 'Bạn đồng nhất triết học với các khoa học cụ thể, làm mất đi vai trò khái quát thế giới quan và phương pháp luận chung nhất.',
        philosophicalLens: 'Khoa học cụ thể nghiên cứu từng lĩnh vực riêng biệt, còn triết học nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy.'
      }
    ],
    explanation: 'Triết học Mác – Lênin khẳng định triết học chỉ ra đời khi hội tụ đủ 2 nguồn gốc: Nguồn gốc nhận thức (con người đạt năng lực trừu tượng hóa, khái quát hóa để giải thích thế giới thành hệ thống) và Nguồn gốc xã hội (nền sản xuất phát triển dẫn tới phân công lao động, lao động trí óc tách khỏi lao động chân tay, chế độ tư hữu và giai cấp xuất hiện).',
    coreLesson: 'Những câu hỏi lớn về cuộc sống không phải vô bổ, mà là nhu cầu tự nhiên của con người để xây dựng kim chỉ nam (thế giới quan) dẫn đường cho hành động.',
    dimensionScores: { connection: 15, contradiction: 10, objective: 20, practice: 15, depth: 20 }
  },
  {
    id: 'C1-Q002',
    chapter: 1,
    module: '1.2',
    topic: 'Vấn đề cơ bản của triết học',
    philosophyConcept: 'Bản thể luận: Vật chất & Ý thức - Mối quan hệ giữa tư duy và tồn tại',
    difficulty: 'medium',
    image: './assets/images/chapter1/basic-question.svg',
    title: 'Trí tuệ nhân tạo (AI) và câu hỏi về bản chất tư duy',
    situation: 'Khi thảo luận về các mô hình ngôn ngữ lớn (LLM) và AI tạo sinh, nhóm bạn tranh cãi gay gắt: Tuấn cho rằng "Ý thức và tư duy chỉ là phần mềm vô hình, tồn tại độc lập với bộ não hay máy chủ". Trong khi đó, Lan phản bác: "Ý thức không thể tồn tại nếu không có bộ não người bằng xương thịt cùng sự tương tác với thế giới vật chất bên ngoài".',
    question: 'Cuộc tranh luận của Tuấn và Lan đang chạm trực tiếp vào mặt nào của "Vấn đề cơ bản của triết học"?',
    options: [
      {
        id: 'A',
        text: 'Mặt thứ hai: Con người có thể nhận thức được thế giới hay không (Khả tri luận).',
        isDialectical: false,
        consequence: 'Bạn nhầm lẫn giữa vấn đề "nhận thức được hay không" với vấn đề "nguồn gốc và cái nào có trước giữa vật chất và ý thức".',
        philosophicalLens: 'Mặt thứ hai trả lời câu hỏi: Tư duy của con người có thể phản ánh đúng hiện thực khách quan hay không.'
      },
      {
        id: 'B',
        text: 'Mặt thứ nhất (Bản thể luận): Giữa vật chất và ý thức, cái nào có trước, cái nào có sau, cái nào quyết định cái nào?',
        isDialectical: true,
        consequence: 'Bạn xác định chính xác nền tảng căn bản nhất: Giải quyết mối quan hệ giữa tư duy và tồn tại là tiêu chí phân định Chủ nghĩa duy vật và Chủ nghĩa duy tâm.',
        philosophicalLens: 'Theo Ăngghen: Vấn đề cơ bản lớn của mọi triết học, đặc biệt là triết học hiện đại, là vấn đề quan hệ giữa tư duy và tồn tại (giữa ý thức và vật chất).'
      },
      {
        id: 'C',
        text: 'Chỉ là sự bất đồng ngôn ngữ giao tiếp đời thường, không liên quan đến triết học.',
        isDialectical: false,
        consequence: 'Bạn bỏ lỡ cơ hội nhận diện triết học đang ẩn mình ngay trong các cuộc tranh luận công nghệ hiện đại nhất.',
        philosophicalLens: 'Mọi câu hỏi về trí tuệ, ý thức máy tính đều bắt rễ sâu sắc từ vấn đề cơ bản của triết học.'
      },
      {
        id: 'D',
        text: 'Vấn đề quy luật giá trị và kinh tế thị trường.',
        isDialectical: false,
        consequence: 'Bạn chuyển nhầm sang phạm trù kinh tế chính trị thay vì triết học cơ bản.',
        philosophicalLens: 'Đây là nội dung của Kinh tế chính trị Mác - Lênin, không phải vấn đề bản thể luận của triết học.'
      }
    ],
    explanation: 'Vấn đề cơ bản của triết học gồm 2 mặt: Mặt thứ nhất (Bản thể luận) trả lời: Vật chất và ý thức, cái nào có trước, cái nào sinh ra cái nào? Chủ nghĩa duy vật khẳng định vật chất có trước quyết định ý thức. Mặt thứ hai (Nhận thức luận) trả lời: Con người có khả năng nhận thức thế giới không?',
    coreLesson: 'Muốn giải quyết bất kỳ hiện tượng mới nào (như AI, thế giới ảo), hãy bắt đầu từ câu hỏi nền tảng: Điều kiện vật chất khách quan nào đã sản sinh ra nó?',
    dimensionScores: { connection: 10, contradiction: 15, objective: 20, practice: 15, depth: 20 }
  },
  {
    id: 'C1-Q003',
    chapter: 1,
    module: '1.3',
    topic: 'Chủ nghĩa duy vật vs Chủ nghĩa duy tâm',
    philosophyConcept: 'Thế giới quan duy vật biện chứng vs Duy tâm trong đời sống',
    difficulty: 'medium',
    image: './assets/images/chapter1/destiny-choice.svg',
    title: 'Điểm số và quẻ bói đầu kỳ',
    situation: 'Trước kỳ thi quan trọng, Mai lo lắng đi xem bói tarot. Thầy bói phán: "Kỳ này số em vướng sao xấu, dù học thế nào cũng chỉ đạt điểm C hoặc trượt". Mai rơi vào hoang mang, tin rằng mọi thứ do số mệnh tiền định nên bỏ bê ôn tập, nằm nhà lướt mạng chờ "số phận an bài".',
    question: 'Thái độ và hành vi của Mai thể hiện lập trường triết học nào và hệ quả thực tiễn ra sao?',
    options: [
      {
        id: 'A',
        text: 'Duy tâm khách quan: Tin vào lực lượng siêu nhiên vô hình định đoạt, dẫn đến thụ động, buông xuôi và thất bại tất yếu.',
        isDialectical: true,
        consequence: 'Bạn vạch trần được sự mê tín: tin vào số mệnh hư ảo đã hủy hoại chính hành động thực tế ôn luyện của Mai.',
        philosophicalLens: 'Duy tâm khách quan coi ý niệm, số phận, thượng đế là thứ có trước và quyết định thế giới vật chất, ru ngủ ý chí đấu tranh cải tạo đời sống.'
      },
      {
        id: 'B',
        text: 'Duy vật biện chứng: Tôn trọng hoàn cảnh tâm lý khách quan của bản thân.',
        isDialectical: false,
        consequence: 'Bạn hiểu sai bản chất duy vật: Duy vật biện chứng đòi hỏi nhìn vào thực tế năng lực và hành động tích lũy kiến thức, chứ không dựa vào bói toán.',
        philosophicalLens: 'Duy vật không chấp nhận bất kỳ thế lực số mệnh siêu nhiên nào chi phối số phận con người.'
      },
      {
        id: 'C',
        text: 'Duy tâm chủ quan: Coi cảm giác cá nhân là tất cả.',
        isDialectical: false,
        consequence: 'Chưa chính xác: Mai đang tin vào một thế lực số mệnh bên ngoài chi phối (Duy tâm khách quan), chứ không phải tin rằng bản thân tạo ra thế giới.',
        philosophicalLens: 'Duy tâm chủ quan cho rằng cảm giác, ý thức của cá nhân sinh ra vạn vật; còn duy tâm khách quan gán quyền năng cho một thực thể bên ngoài (số phận, thần linh).'
      },
      {
        id: 'D',
        text: 'Là cách giải tỏa stress khoa học nhất nên khuyến khích nhân rộng.',
        isDialectical: false,
        consequence: 'Bạn biến sự mê tín thành giải pháp khoa học, gây hại cho kết quả học tập và tinh thần tự chủ.',
        philosophicalLens: 'Khoa học chỉ ra rằng điểm số là kết quả tất nhiên của quá trình tích lũy kiến thức và phương pháp ôn luyện thực tế.'
      }
    ],
    explanation: 'Chủ nghĩa duy tâm khách quan thừa nhận sự tồn tại của thế giới hiện thực nhưng coi nguồn gốc của nó là một "ý niệm tuyệt đối", "thần linh" hay "số mệnh". Trong đời sống, tư tưởng định mệnh khiến con người thụ động, buông xuôi, trông chờ may rủi thay vì hành động thực tiễn cải tạo hoàn cảnh.',
    coreLesson: 'Không có "số phận" nào quyết định điểm số hay tương lai bạn ngoài quá trình bạn hành động và tích lũy tri thức trong thực tế khách quan.',
    dimensionScores: { connection: 10, contradiction: 15, objective: 20, practice: 20, depth: 15 }
  },
  {
    id: 'C1-Q004',
    chapter: 1,
    module: '1.4',
    topic: 'Phương pháp Biện chứng vs Phương pháp Siêu hình',
    philosophyConcept: 'Phương pháp tư duy biện chứng: Xem xét sự vật trong vận động, biến đổi và liên hệ',
    difficulty: 'medium',
    image: './assets/images/chapter1/dialectics-metaphysics.svg',
    title: 'Chiếc nhãn "Học sinh cá biệt"',
    situation: 'Thời cấp 3, Hoàng từng ham chơi và có một kỳ học bạ bị xếp loại yếu. Khi lên đại học, Hoàng quyết tâm thay đổi, ngày đêm học tập và tích cực tham gia nghiên cứu. Tuy nhiên, một số bạn học cũ khi gặp lại vẫn bảo: "Bản chất thằng đấy từ xưa đã lười biếng, có cố mấy cũng chỉ là màu mè diễn xuất thôi!".',
    question: 'Cách đánh giá của những người bạn cũ phản ánh phương pháp tư duy nào?',
    options: [
      {
        id: 'A',
        text: 'Phương pháp siêu hình: Nhìn con người cô lập, xơ cứng, bất biến, coi quá khứ là bản chất vĩnh viễn không thể thay đổi.',
        isDialectical: true,
        consequence: 'Bạn nhận rõ hạn chế chết người của lối nghĩ siêu hình: chụp mũ, định kiến, không chịu thấy con người luôn vận động và phát triển.',
        philosophicalLens: 'Phương pháp siêu hình xem xét sự vật trong trạng thái cô lập, tĩnh tại, chỉ thấy cây mà không thấy rừng, đồng nhất trạng thái tạm thời với bản chất vĩnh viễn.'
      },
      {
        id: 'B',
        text: 'Phương pháp biện chứng: Nhìn nhận thực tế khách quan một cách sắc sảo.',
        isDialectical: false,
        consequence: 'Bạn nhầm định kiến với tư duy biện chứng. Biện chứng phải thấy sự vật luôn vận động và chuyển hóa không ngừng.',
        philosophicalLens: 'Tư duy biện chứng đòi hỏi đặt sự vật trong dòng chảy biến đổi liên tục, thấy được xu hướng phát triển cái mới tiến bộ.'
      },
      {
        id: 'C',
        text: 'Phương pháp phân tích tâm lý học lâm sàng hiện đại.',
        isDialectical: false,
        consequence: 'Bạn gán mác chuyên môn cho một thói quen tư duy bảo thủ, phiến diện.',
        philosophicalLens: 'Đây là thói quen tư duy siêu hình thông thường trong đời sống, không phải phương pháp khoa học.'
      },
      {
        id: 'D',
        text: 'Phương pháp phủ định sạch trơn quá khứ.',
        isDialectical: false,
        consequence: 'Họ không phủ định quá khứ, ngược lại họ đang tôn sùng quá khứ để áp đặt lên hiện tại.',
        philosophicalLens: 'Những người bạn cũ đang đóng băng hiện thực quá khứ lên hiện tại, đó là biểu hiện điển hình của phương pháp siêu hình.'
      }
    ],
    explanation: 'Phương pháp biện chứng xem xét sự vật trong mối liên hệ ràng buộc, trong sự vận động, biến đổi và phát triển không ngừng; còn phương pháp siêu hình xem xét sự vật trong trạng thái cô lập, tĩnh tại, bất biến. Con người là thực thể đang phát triển, không thể dùng một sai lầm trong quá khứ để đóng đinh tương lai.',
    coreLesson: 'Đừng bao giờ phán xét một con người hay sự việc bằng cái nhìn tĩnh tại, siêu hình. Mọi thứ đều đang vận động và có tiềm năng chuyển hóa mạnh mẽ.',
    dimensionScores: { connection: 20, contradiction: 15, objective: 15, practice: 15, depth: 20 }
  },
  {
    id: 'C1-Q005',
    chapter: 1,
    module: '1.5',
    topic: 'Triết học Mác – Lênin và vai trò',
    philosophyConcept: 'Thế giới quan khoa học và phương pháp luận cách mạng của triết học Mác - Lênin',
    difficulty: 'hard',
    image: './assets/images/chapter1/marxist-role.svg',
    title: 'Khủng hoảng định hướng của sinh viên Gen Z',
    situation: 'Giữa thời đại bùng nổ thông tin mạng, trào lưu "kiếm tiền nhanh", áp lực "peer pressure" và nỗi sợ bị AI thay thế, nhiều bạn trẻ cảm thấy mất phương hướng, hoang mang không biết tin vào điều gì. Minh tự hỏi: "Học triết học Mác – Lênin thời nay có thực sự giúp ích gì cho cuộc sống và nghề nghiệp tương lai của mình không?".',
    question: 'Vai trò cốt lõi nhất của Triết học Mác – Lênin đối với con người trong xã hội hiện đại là gì?',
    options: [
      {
        id: 'A',
        text: 'Cung cấp các công thức kiếm tiền và mánh khóe làm giàu cấp tốc.',
        isDialectical: false,
        consequence: 'Bạn biến triết học thành cẩm nang kỹ năng làm giàu bề nổi, hạ thấp bản chất khoa học của triết học.',
        philosophicalLens: 'Triết học không phải khoa học kỹ thuật cụ thể hay cẩm nang kiếm tiền vi mô.'
      },
      {
        id: 'B',
        text: 'Là thế giới quan khoa học và phương pháp luận cách mạng, trang bị "lăng kính" đúng đắn để định hướng hành động và tư duy độc lập.',
        isDialectical: true,
        consequence: 'Bạn nắm giữ vũ khí tư duy tối thượng: Không bị dẫn dắt bởi thông tin giả, biết nhìn thấu bản chất vấn đề và kiên định trước biến động xã hội.',
        philosophicalLens: 'Triết học Mác - Lênin trang bị thế giới quan duy vật biện chứng và phương pháp luận biện chứng duy vật - kim chỉ nam định hướng con người trong hoạt động nhận thức và thực tiễn.'
      },
      {
        id: 'C',
        text: 'Chỉ là một môn học điều kiện để qua môn tốt nghiệp đại học, không có giá trị thực tiễn.',
        isDialectical: false,
        consequence: 'Bạn tự tước đi năng lực tư duy phản biện tầng sâu, dễ bị thao túng bởi các hiện tượng tâm lý đám đông bề nổi.',
        philosophicalLens: 'Mác từng nói: "Các nhà triết học chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là cải tạo thế giới".'
      },
      {
        id: 'D',
        text: 'Thay thế toàn bộ kiến thức của tất cả các chuyên ngành khoa học tự nhiên và xã hội khác.',
        isDialectical: false,
        consequence: 'Bạn rơi vào sai lầm coi triết học là "khoa học của mọi khoa học" như thời cổ đại/trung cổ.',
        philosophicalLens: 'Triết học Mác – Lênin không thay thế khoa học cụ thể, mà gắn bó hữu cơ và đóng vai trò phương pháp luận soi đường cho khoa học cụ thể.'
      }
    ],
    explanation: 'Triết học Mác – Lênin đóng vai trò là thế giới quan khoa học và phương pháp luận cách mạng chung nhất cho hoạt động nhận thức và cải tạo thế giới. Nó giúp người học thoát khỏi sự mê muội giáo điều, nhìn thấy quy luật khách quan của xã hội, rèn luyện tư duy phản biện sắc bén và vững vàng trước mọi thách thức thời đại.',
    coreLesson: 'Học triết học không phải học thuộc chữ nghĩa, mà là rèn luyện "bộ vi xử lý não bộ" để nhìn thấu quy luật vận động của chính cuộc sống.',
    dimensionScores: { connection: 20, contradiction: 20, objective: 20, practice: 20, depth: 20 }
  },

  // ==========================================
  // CHAPTER 2: PHÉP BIỆN CHỨNG DUY VẬT
  // ==========================================
  // MODULE 2.1: VẬT CHẤT & Ý THỨC
  {
    id: 'C2-M1-Q001',
    chapter: 2,
    module: '2.1',
    topic: 'Vật chất và ý thức',
    philosophyConcept: 'Điều kiện vật chất khách quan quyết định ý thức & Chống chủ quan duy ý chí',
    difficulty: 'medium',
    image: './assets/images/chapter2/material-consciousness.svg',
    title: 'Ước mơ GPA 4.0 và ca làm thêm 8 tiếng',
    situation: 'An là sinh viên năm ba có hoàn cảnh gia đình khó khăn. Để trang trải học phí và tiền trọ đắt đỏ, An phải làm ca đêm tại cửa hàng tiện lợi 8 tiếng/ngày. Tuy nhiên, An đặt mục tiêu học kỳ này phải đạt GPA tuyệt đối 4.0 và giật học bổng loại Xuất sắc bằng cách "chỉ ngủ 2 tiếng mỗi đêm và dùng ý chí để vượt qua cơn buồn ngủ". Sau 3 tuần, An kiệt sức nhập viện và trượt bài kiểm tra giữa kỳ.',
    question: 'Sai lầm căn bản của An theo quan điểm triết học Mác – Lênin là gì?',
    options: [
      {
        id: 'A',
        text: 'Chưa đủ nỗ lực, cần uống thêm nước tăng lực để ý chí tiếp tục chiến thắng cơ thể.',
        isDialectical: false,
        consequence: 'Bạn tiếp tục đẩy cơ thể vào nguy hiểm tính mạng, mù quáng coi thường giới hạn sinh học vật chất.',
        philosophicalLens: 'Cực đoan coi ý chí tinh thần có thể bất chấp quy luật vật lý/sinh học là bệnh chủ quan duy ý chí nặng nề.'
      },
      {
        id: 'B',
        text: 'Mắc bệnh chủ quan duy ý chí: Tuyệt đối hóa sức mạnh ý thức, bất chấp điều kiện vật chất khách quan (sức khỏe sinh học, giới hạn thời gian 24h).',
        isDialectical: true,
        consequence: 'Bạn thức tỉnh nhận ra: Muốn thành công, ý chí phải dựa trên việc phân bổ thời gian khoa học, chọn lọc môn học và bảo vệ sức khỏe vật chất.',
        philosophicalLens: 'Vật chất quyết định ý thức: Điều kiện sinh học, dinh dưỡng, thời gian là tiền đề vật chất khách quan. Mọi ý chí xa rời điều kiện vật chất tất yếu dẫn đến thất bại cay đắng.'
      },
      {
        id: 'C',
        text: 'Đáng lẽ nên bỏ học hoàn toàn để đi làm kiếm tiền cho chắc ăn.',
        isDialectical: false,
        consequence: 'Bạn rơi vào thái cực đối lập: thụ động, đầu hàng hoàn cảnh vật chất, dập tắt hoàn toàn năng lực phấn đấu của ý thức.',
        philosophicalLens: 'Đây là chủ nghĩa duy vật máy móc tầm thường, phủ nhận tính năng động sáng tạo của ý thức con người.'
      },
      {
        id: 'D',
        text: 'Do nhà trường ra đề thi quá khó và không có lòng trắc ẩn với sinh viên nghèo.',
        isDialectical: false,
        consequence: 'Bạn đổ lỗi cho hoàn cảnh bên ngoài thay vì tự nhìn nhận chiến lược hành động phi khoa học của bản thân.',
        philosophicalLens: 'Đổ lỗi bên ngoài phản ánh thói quen né tránh nhận thức quy luật khách quan và tự thân điều chỉnh.'
      }
    ],
    explanation: 'Theo triết học Mác – Lênin, vật chất quyết định ý thức: nguồn gốc, nội dung và bản chất của ý thức đều do thế giới vật chất quy định. Bệnh chủ quan duy ý chí xuất hiện khi con người hành động xuất phát từ mong muốn chủ quan phi thực tế, ảo tưởng rằng ý chí có thể vượt qua mọi quy luật khách quan mà không cần điều kiện vật chất bảo đảm.',
    coreLesson: 'Mọi ước mơ vĩ đại đều phải bắt đầu từ việc tôn trọng điều kiện khách quan: sức khỏe, thời gian và năng lực thực tế. Hãy xuất phát từ hiện thực khách quan trước khi cất cánh!',
    dimensionScores: { connection: 15, contradiction: 20, objective: 25, practice: 15, depth: 15 }
  },
  {
    id: 'C2-M1-Q002',
    chapter: 2,
    module: '2.1',
    topic: 'Vật chất và ý thức',
    philosophyConcept: 'Tính năng động sáng tạo và sự tác động trở lại của ý thức đối với vật chất',
    difficulty: 'medium',
    image: './assets/images/chapter2/subjective-dynamism.svg',
    title: 'Cải tạo nghịch cảnh bằng tư duy sáng tạo',
    situation: 'Cùng ở trong hoàn cảnh phải đi làm thêm kiếm sống như An, nhưng Bình lại chọn cách tiếp cận khác: Bình ngồi rà soát lại quỹ thời gian, tìm một công việc làm thêm liên quan trực tiếp đến ngành học (viết nội dung kỹ thuật số), học cách ghi chép phương pháp Pomodoro và lập nhóm ôn tập cùng bạn bè. Bình vừa có tiền sinh hoạt, vừa duy trì học lực giỏi.',
    question: 'Hành động của Bình minh họa cho nguyên lý triết học nào?',
    options: [
      {
        id: 'A',
        text: 'Tôn trọng khách quan đồng thời phát huy tối đa tính năng động chủ quan của ý thức thông qua hoạt động thực tiễn có tổ chức.',
        isDialectical: true,
        consequence: 'Bạn chứng kiến sức mạnh đích thực của triết học Mác: Ý thức đúng đắn khi biến thành kế hoạch thực tiễn sẽ trở thành lực lượng vật chất cải tạo hoàn cảnh sống.',
        philosophicalLens: 'Ý thức không tự biến đổi thế giới trực tiếp, nhưng thông qua hoạt động thực tiễn của con người, ý thức định hướng, tổ chức và cải tạo hiện thực vật chất.'
      },
      {
        id: 'B',
        text: 'Vật chất không còn vai trò gì, chỉ cần ý chí thông minh là đủ.',
        isDialectical: false,
        consequence: 'Bạn lại quay về bẫy duy tâm, quên rằng Bình vẫn phải dựa trên việc phân bổ giờ làm và sinh hoạt thực tế.',
        philosophicalLens: 'Ý thức chỉ phát huy tác dụng khi tuân thủ và vận dụng các quy luật vật chất khách quan.'
      },
      {
        id: 'C',
        text: 'Hoàn toàn do Bình may mắn gặp được công việc nhàn hạ hơn người khác.',
        isDialectical: false,
        consequence: 'Bạn quy kết mọi thành quả của sự tư duy sáng tạo về yếu tố may rủi ngẫu nhiên.',
        philosophicalLens: 'Cơ hội chỉ đến và biến thành kết quả khi có sự chủ động chuẩn bị và tư duy định hướng từ trước.'
      },
      {
        id: 'D',
        text: 'Bình không cần học triết học vẫn làm được nên triết học không có ý nghĩa.',
        isDialectical: false,
        consequence: 'Bạn không nhận ra rằng Bình đang vô thức vận dụng đúng đắn phép biện chứng duy vật vào cuộc sống.',
        philosophicalLens: 'Dù con người có ý thức được hay không, các quy luật biện chứng vẫn chi phối mọi hoạt động đời sống.'
      }
    ],
    explanation: 'Triết học Mác – Lênin khẳng định: Ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua hoạt động thực tiễn của con người. Ý thức đúng đắn sẽ phản ánh đúng quy luật khách quan, từ đó định hướng hành động hiệu quả, biến tri thức thành sức mạnh vật chất cải tạo thực tại.',
    coreLesson: 'Không thể thay đổi hoàn cảnh bằng than vãn hay ảo tưởng. Hãy dùng trí tuệ để hiểu rõ quy luật và lập kế hoạch hành động cải tạo hoàn cảnh từng bước một.',
    dimensionScores: { connection: 15, contradiction: 15, objective: 20, practice: 25, depth: 15 }
  },

  // MODULE 2.2: HAI NGUYÊN LÝ CỦA PHÉP BIỆN CHỨNG
  {
    id: 'C2-M2-Q001',
    chapter: 2,
    module: '2.2',
    topic: 'Hai nguyên lý của phép biện chứng duy vật',
    philosophyConcept: 'Nguyên lý về mối liên hệ phổ biến và quan điểm toàn diện',
    difficulty: 'medium',
    image: './assets/images/chapter2/universal-connection.svg',
    title: 'Vì sao bài thi bị điểm kém?',
    situation: 'Khi nhận kết quả bài kiểm tra giữa kỳ bị điểm D, giảng viên gọi Minh lên và mắng gay gắt: "Cậu bị điểm kém chỉ vì cậu là kẻ lười biếng, không có tư chất học đại học!". Nhưng trong thực tế, tuần trước thi Minh bị sốt cao, phòng trọ bên cạnh liên tục hát karaoke ầm ĩ khiến cậu mất ngủ, và phương pháp ôn tập của Minh thiên về học vẹt thay vì giải quyết vấn đề.',
    question: 'Lời phán xét của giảng viên đã vi phạm nguyên tắc phương pháp luận nào của phép biện chứng duy vật?',
    options: [
      {
        id: 'A',
        text: 'Vi phạm quan điểm toàn diện, rơi vào cách nhìn phiến diện, quy chụp một nguyên nhân duy nhất và bỏ qua vô vàn mối liên hệ khách quan tác động đến kết quả.',
        isDialectical: true,
        consequence: 'Bạn học được cách phân tích vấn đề theo hệ thống: Để đánh giá đúng một sự việc hay con người, phải đặt họ trong tổng thể các mối liên hệ qua lại.',
        philosophicalLens: 'Nguyên lý mối liên hệ phổ biến đòi hỏi: Khi xem xét sự vật phải có quan điểm toàn diện, xem xét tất cả các mặt, các mối liên hệ nội tại và bên ngoài, tránh cái nhìn một chiều, phiến diện.'
      },
      {
        id: 'B',
        text: 'Hoàn toàn đúng đắn vì người làm việc lớn không được phép đổ lỗi cho bất kỳ yếu tố nào.',
        isDialectical: false,
        consequence: 'Bạn cổ súy cho lối tư duy võ đoán, phiến diện, triệt tiêu động lực tìm giải pháp cải thiện của người học.',
        philosophicalLens: 'Tư duy cực đoan bỏ qua hoàn cảnh thực tế là biểu hiện của phương pháp siêu hình thô thiển.'
      },
      {
        id: 'C',
        text: 'Vi phạm quy luật phủ định của phủ định.',
        isDialectical: false,
        consequence: 'Bạn dùng sai phạm trù: Vấn đề ở đây là cách nhìn nhận các mối liên hệ xung quanh sự kiện, không phải chu kỳ phát triển phủ định.',
        philosophicalLens: 'Đây là bài học trực tiếp từ nguyên lý về mối liên hệ phổ biến và quan điểm toàn diện.'
      },
      {
        id: 'D',
        text: 'Giảng viên đã áp dụng chính xác phương pháp lịch sử - cụ thể.',
        isDialectical: false,
        consequence: 'Ngược lại hoàn toàn: Giảng viên đã bỏ qua bối cảnh lịch sử - cụ thể (bị sốt, ồn ào, phương pháp) để chụp mũ bản chất.',
        philosophicalLens: 'Quan điểm lịch sử - cụ thể đòi hỏi xem xét sự vật trong điều kiện, hoàn cảnh và thời gian cụ thể của nó.'
      }
    ],
    explanation: 'Nguyên lý về mối liên hệ phổ biến chỉ ra rằng không có sự vật, hiện tượng nào tồn tại cô lập. Mọi sự vật đều nằm trong mối liên hệ ràng buộc, tác động qua lại với các sự vật khác. Từ nguyên lý này rút ra quan điểm toàn diện và quan điểm lịch sử - cụ thể: muốn nhận thức đúng sự vật phải xem xét các mối liên hệ của nó, phân biệt liên hệ bên trong và bên ngoài, trực tiếp và gián tiếp.',
    coreLesson: 'Khi đối mặt với một thất bại hay khó khăn, đừng phiến diện tự trách móc một chiều. Hãy vẽ ra toàn bộ mạng lưới các mối liên hệ để tháo gỡ từng nút thắt.',
    dimensionScores: { connection: 25, contradiction: 15, objective: 20, practice: 15, depth: 15 }
  },
  {
    id: 'C2-M2-Q002',
    chapter: 2,
    module: '2.2',
    topic: 'Hai nguyên lý của phép biện chứng duy vật',
    philosophyConcept: 'Nguyên lý về sự phát triển và quan điểm phát triển',
    difficulty: 'hard',
    image: './assets/images/chapter2/development-spiral.svg',
    title: 'Hành trình vượt dốc của thủ khoa từng trượt môn',
    situation: 'Khi bước chân vào trường đại học, Khang từng bị sốc văn hóa học tập và trượt môn Lập trình cơ bản. Thay vì tuyệt vọng bỏ cuộc, Khang nhìn nhận môn học trượt đó như một tín hiệu cảnh báo rằng phương pháp học thuộc lòng thụ động của cấp 3 đã hoàn toàn lỗi thời. Khang tái cấu trúc toàn diện cách học: tự xây dự án thực tế, hỏi đáp cùng cộng đồng lập trình và đến năm thứ 4 trở thành thủ khoa tốt nghiệp.',
    question: 'Nhận thức và hành động của Khang thể hiện nội dung căn bản nào của "Nguyên lý về sự phát triển"?',
    options: [
      {
        id: 'A',
        text: 'Phát triển là đường thẳng tắp, ai từng thất bại thì mãi mãi không thể phát triển.',
        isDialectical: false,
        consequence: 'Bạn đồng nhất thất bại tạm thời với sự chấm dứt phát triển, rơi vào bi quan siêu hình.',
        philosophicalLens: 'Phép siêu hình coi phát triển chỉ là sự tăng giảm thuần túy về số lượng theo đường thẳng.'
      },
      {
        id: 'B',
        text: 'Phát triển là quá trình đi lên quanh co, phức tạp theo đường xoắn ốc; thất bại là mắt xích tất yếu để bộc lộ mâu thuẫn, từ đó kế thừa cái tích cực và tạo ra bước tiến mới ở trình độ cao hơn.',
        isDialectical: true,
        consequence: 'Bạn có được tâm thế vững như bàn thạch: Thất bại hôm nay không phải dấu chấm hết, mà là dưỡng chất cần thiết cho bước nhảy vọt ngày mai.',
        philosophicalLens: 'Phát triển theo quan điểm biện chứng là quá trình tự thân vận động đi lên, từ thấp đến cao, không diễn ra theo đường thẳng mà quanh co, có thụt lùi tạm thời nhưng khuynh hướng chung là tiến bộ.'
      },
      {
        id: 'C',
        text: 'Phát triển là việc xóa bỏ hoàn toàn tất cả những gì thuộc về quá khứ mà không cần kế thừa.',
        isDialectical: false,
        consequence: 'Bạn rơi vào phủ định siêu hình (phủ định sạch trơn), phủ nhận tính kế thừa của sự phát triển.',
        philosophicalLens: 'Phát triển biện chứng luôn mang tính kế thừa: giữ lại, cải tạo các hạt nhân hợp lý của giai đoạn cũ.'
      },
      {
        id: 'D',
        text: 'Thành công của Khang chứng minh năng khiếu bẩm sinh quyết định 100%.',
        isDialectical: false,
        consequence: 'Bạn phủ nhận toàn bộ quá trình biến đổi chất lượng và nỗ lực chuyển hóa phương pháp học của Khang.',
        philosophicalLens: 'Năng khiếu chỉ là mầm mống khả năng, phát triển là kết quả của quá trình giải quyết mâu thuẫn trong thực tiễn.'
      }
    ],
    explanation: 'Nguyên lý về sự phát triển khẳng định: Mọi sự vật hiện tượng đều vận động theo khuynh hướng đi lên, cái mới ra đời thay thế cái cũ, cái tiến bộ thay thế cái lạc hậu. Quá trình phát triển không diễn ra theo một đường thẳng tắp phẳng lặng mà diễn ra quanh co, phức tạp, bao hàm cả những bước thụt lùi tạm thời (đường xoắn ốc).',
    coreLesson: 'Đừng sợ thất bại tạm thời. Hãy coi khủng hoảng là tín hiệu báo rằng mô hình cũ đã hết hạn sử dụng và đã đến lúc bạn phải nâng cấp bản thân lên một tầm cao mới.',
    dimensionScores: { connection: 20, contradiction: 20, objective: 15, practice: 20, depth: 25 }
  },

  // MODULE 2.3: BA QUY LUẬT CƠ BẢN
  {
    id: 'C2-M3-SLIDER',
    chapter: 2,
    module: '2.3',
    topic: 'Ba quy luật cơ bản của phép biện chứng',
    philosophyConcept: 'Quy luật chuyển hóa từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại',
    difficulty: 'medium',
    image: './assets/images/chapter2/quantity-quality.svg',
    title: 'Phòng thí nghiệm Lượng – Chất: Bí mật của 100 giờ rèn luyện',
    type: 'slider',
    situation: 'Khi bạn bắt đầu học một kỹ năng mới (như Lập trình, Ngoại ngữ, hay Kỹ năng thuyết trình), trong 20-30 giờ đầu tiên, bạn cảm thấy rất bối rối, làm gì cũng vấp váp, điểm số không nhích lên bao nhiêu và có cảm giác mình "dậm chân tại chỗ". Nhiều người bỏ cuộc ở giai đoạn này vì nghĩ mình không có năng khiếu. Nhưng triết học Mác – Lênin chỉ ra một quy luật vũ trụ đang âm thầm vận hành dưới bề mặt!',
    question: 'Kéo thanh trượt từ 0 đến 100 giờ tích lũy rèn luyện để quan sát ranh giới giữa LƯỢNG (số giờ học) và CHẤT (năng lực kỹ năng) biến đổi như thế nào:',
    sliderConfig: {
      min: 0,
      max: 100,
      step: 5,
      default: 25,
      nodePoint: 80, // Điểm nút
      measureRange: [0, 80], // Độ
      labels: {
        0: '0h (Khởi đầu)',
        40: '40h (Trong giới hạn Độ)',
        80: '80h (Điểm nút)',
        100: '100h (Bước nhảy vọt)'
      }
    },
    options: [
      {
        id: 'A',
        text: 'Nóng vội muốn giỏi ngay sau 5 giờ, nếu không thấy tiến bộ thì lập tức bỏ cuộc (Bệnh tả khuynh, đốt cháy giai đoạn).',
        isDialectical: false,
        consequence: 'Bạn cả đời mãi là người mới bắt đầu: chưa đủ lượng đã đòi đổi chất, luôn thất vọng và bỏ dở giữa chừng.',
        philosophicalLens: 'Tả khuynh: Muốn thực hiện bước nhảy khi lượng chưa tích lũy đến điểm nút, dẫn đến phá vỡ sự vật.'
      },
      {
        id: 'B',
        text: 'Kiên trì tích lũy về lượng trong phạm vi "Độ", khi lượng đạt tới "Điểm nút" thì dũng cảm thực hiện "Bước nhảy" để biến đổi căn bản về "Chất".',
        isDialectical: true,
        consequence: 'Bạn thấu hiểu nghệ thuật của sự kiên nhẫn vĩ đại: 80 giờ tích lũy âm thầm là điều kiện không thể thiếu để tạo nên bước nhảy thăng hoa ngoạn mục!',
        philosophicalLens: 'Quy luật Lượng - Chất: Chất là tính quy định khách quan vốn có, lượng là tính quy định về số lượng, quy mô. Sự tích lũy dần dần về lượng trong giới hạn độ khi đạt tới điểm nút sẽ dẫn tới bước nhảy, làm chất cũ mất đi, chất mới ra đời.'
      },
      {
        id: 'C',
        text: 'Cứ học vô định hình mãi mãi không cần kiểm tra, không cần thi cử, không cần bứt phá (Bệnh hữu khuynh, bảo thủ trì trệ).',
        isDialectical: false,
        consequence: 'Bạn tích lũy lượng mãi mà không dám đối mặt với bài thi hay dự án thực tế, khiến tri thức bị thui chột.',
        philosophicalLens: 'Hữu khuynh: Lượng đã tích lũy đủ tới điểm nút nhưng không dám thực hiện bước nhảy, duy trì chất cũ lạc hậu.'
      }
    ],
    explanation: 'Quy luật chỉ ra cách thức của sự vận động và phát triển: Mọi sự vật đều là sự thống nhất giữa chất và lượng. Độ là khoảng giới hạn mà trong đó sự thay đổi về lượng chưa làm thay đổi căn bản về chất. Điểm nút là giới hạn mà tại đó sự tích lũy về lượng đủ để làm thay đổi về chất. Bước nhảy là giai đoạn chuyển hóa căn bản về chất do sự tích lũy về lượng trước đó mang lại.',
    coreLesson: 'Đừng nản lòng khi thấy mình nỗ lực mà kết quả chưa hiển hiện ngay. Bạn đang ở trong "Độ". Hãy kiên trì tích lũy đủ lượng, "Điểm nút" và "Bước nhảy" chất lượng chắc chắn sẽ đến!',
    dimensionScores: { connection: 15, contradiction: 20, objective: 25, practice: 20, depth: 25 }
  },
  {
    id: 'C2-M3-Q002',
    chapter: 2,
    module: '2.3',
    topic: 'Ba quy luật cơ bản của phép biện chứng',
    philosophyConcept: 'Quy luật thống nhất và đấu tranh của các mặt đối lập (Quy luật mâu thuẫn - Hạt nhân của phép biện chứng)',
    difficulty: 'hard',
    image: './assets/images/chapter2/contradiction-study-work.svg',
    title: 'Nghịch lý: Muốn vừa học sâu vừa muốn kiếm tiền',
    situation: 'Hoàng đứng trước mâu thuẫn gay gắt: Để có chuyên môn sâu, Hoàng cần dành trọn thời gian nghiên cứu và đọc tài liệu; nhưng để không trở thành gánh nặng của bố mẹ và có tiền sinh hoạt, Hoàng cần đi làm part-time. Hai nhu cầu này liên tục giằng xé thời gian và năng lượng của Hoàng, như hai mặt đối lập trong một cơ thể.',
    question: 'Triết học Mác – Lênin chỉ ra cách thức giải quyết mâu thuẫn trên như thế nào để tạo động lực phát triển?',
    options: [
      {
        id: 'A',
        text: 'Né tránh mâu thuẫn bằng cách buông xuôi cả hai, nằm nhà chơi game cho đỡ đau đầu.',
        isDialectical: false,
        consequence: 'Bạn tiêu diệt chính động lực sinh tồn và phát triển của bản thân, rơi vào bế tắc thoái hóa.',
        philosophicalLens: 'Mâu thuẫn là khách quan và phổ biến, không thể né tránh. Không giải quyết mâu thuẫn sẽ dẫn tới tiêu vong.'
      },
      {
        id: 'B',
        text: 'Nhận diện hai mặt đối lập vừa thống nhất (cùng phục vụ mục tiêu trưởng thành tự lập) vừa đấu tranh (tranh chấp thời gian), tìm cách giải quyết mâu thuẫn bằng giải pháp biện chứng (tìm việc gắn với chuyên môn, quản trị thời gian tối ưu).',
        isDialectical: true,
        consequence: 'Bạn biến áp lực thành động lực: Chính mâu thuẫn giữa kiếm sống và học vấn đã tôi luyện bạn thành người có khả năng thích ứng cao, vừa có nghề vừa vững lý luận.',
        philosophicalLens: 'Quy luật mâu thuẫn là hạt nhân của phép biện chứng: Sự thống nhất và đấu tranh của các mặt đối lập là nguồn gốc và động lực bên trong của mọi sự vận động và phát triển.'
      },
      {
        id: 'C',
        text: 'Thủ tiêu vĩnh viễn một mặt: Đi vay nặng lãi để học không cần làm, hoặc bỏ học hẳn để làm công nhân.',
        isDialectical: false,
        consequence: 'Bạn chọn giải pháp cực đoan phiến diện, chặt đứt một chân khiến cấu trúc phát triển mất cân bằng nghiêm trọng.',
        philosophicalLens: 'Giải quyết mâu thuẫn không phải là thủ tiêu một mặt một cách cơ học thô bạo, mà là chuyển hóa các mặt đối lập thông qua đấu tranh biện chứng.'
      },
      {
        id: 'D',
        text: 'Ngồi cầu nguyện mong cho học phí tự giảm và tiền tự rơi xuống từ trên trời.',
        isDialectical: false,
        consequence: 'Bạn rơi vào mê tín hoang đường, chối bỏ năng lực hành động tự thân của con người.',
        philosophicalLens: 'Nguồn gốc của sự phát triển là tự thân vận động từ mâu thuẫn nội tại, không do lực lượng siêu nhiên bên ngoài ban phát.'
      }
    ],
    explanation: 'Quy luật mâu thuẫn vạch ra nguồn gốc và động lực của sự phát triển: Mọi sự vật đều chứa đựng các mặt đối lập vừa nương tựa nhau (thống nhất) vừa bài trừ, gạt bỏ nhau (đấu tranh). Sự đấu tranh giữa các mặt đối lập đến một giới hạn nhất định sẽ giải quyết mâu thuẫn cũ, xác lập thể thống nhất mới, đưa sự vật lên trình độ cao hơn.',
    coreLesson: 'Mâu thuẫn và áp lực không phải là điều xấu. Đừng sợ hãi mâu thuẫn, vì chính mâu thuẫn là động cơ đốt trong thúc đẩy bạn bứt phá khỏi vùng an toàn để trưởng thành!',
    dimensionScores: { connection: 20, contradiction: 30, objective: 20, practice: 20, depth: 25 }
  },
  {
    id: 'C2-M3-Q003',
    chapter: 2,
    module: '2.3',
    topic: 'Ba quy luật cơ bản của phép biện chứng',
    philosophyConcept: 'Quy luật phủ định của phủ định và khuynh hướng phát triển theo đường xoắn ốc',
    difficulty: 'hard',
    image: './assets/images/chapter2/negation-of-negation.svg',
    title: 'Chu kỳ lột xác của một lập trình viên',
    situation: 'Khi mới học lập trình web, Lâm chỉ biết copy-paste code mẫu trên mạng để chạy được giao diện (Giai đoạn A - Khẳng định). Khi đi phỏng vấn thực tập, Lâm bị hỏi sâu về cấu trúc dữ liệu và trượt thảm hại, nhận ra lối làm ẩu đó hoàn toàn vô dụng (Giai đoạn B - Phủ định lần 1). Lâm vứt bỏ toàn bộ thói quen cũ, cặm cụi học lại từ gốc rễ thuật toán, kết hợp những kinh nghiệm thực chiến đã có để viết nên phần mềm chuẩn mực, tinh gọn (Giai đoạn C - Phủ định của phủ định).',
    question: 'Quá trình biến đổi từ giai đoạn A qua B đến C của Lâm minh họa cho quy luật triết học nào?',
    options: [
      {
        id: 'A',
        text: 'Quy luật phủ định của phủ định: Phát triển qua các lần phủ định biện chứng, cái mới ra đời dường như quay lại cái cũ nhưng ở trình độ cao hơn theo đường xoắn ốc.',
        isDialectical: true,
        consequence: 'Bạn nhận diện được quy luật vận động cao nhất của tri thức: Giai đoạn C Lâm vẫn viết code thực tế như A, nhưng giờ đây là code có nền tảng lý luận sâu sắc và tư duy kiến trúc vững vàng.',
        philosophicalLens: 'Phủ định biện chứng có 2 đặc trưng cơ bản: Tính khách quan và tính kế thừa. Phủ định của phủ định kết thúc một chu kỳ phát triển, mở ra chu kỳ tiếp theo ở trình độ cao hơn.'
      },
      {
        id: 'B',
        text: 'Chỉ là sự lặp lại vòng tròn luẩn quẩn vô nghĩa, cuối cùng Lâm vẫn chỉ là người gõ code như ngày đầu.',
        isDialectical: false,
        consequence: 'Bạn nhầm lẫn giữa chu kỳ xoắn ốc đi lên với vòng tròn luẩn quẩn bế tắc của tư duy siêu hình.',
        philosophicalLens: 'Phát triển biện chứng không phải vòng tròn khép kín, mà là đường xoắn ốc kế thừa và tích hợp các giá trị tinh hoa.'
      },
      {
        id: 'C',
        text: 'Phủ định siêu hình: Xóa sạch toàn bộ những gì Lâm từng biết từ đầu.',
        isDialectical: false,
        consequence: 'Sai bản chất: Lâm không xóa bỏ kinh nghiệm thực chiến, mà chỉ phủ định lối copy mù quáng và giữ lại sự nhạy bén với sản phẩm.',
        philosophicalLens: 'Phủ định siêu hình là sự can thiệp từ bên ngoài làm chấm dứt sự phát triển, không có tính kế thừa.'
      },
      {
        id: 'D',
        text: 'Do Lâm đổi phong thủy bàn làm việc và gặp may.',
        isDialectical: false,
        consequence: 'Một lần nữa bạn rơi vào mê tín thay vì nhìn thấy quy luật nội tại của sự tự hoàn thiện năng lực.',
        philosophicalLens: 'Sự phát triển của tư duy là quá trình giải quyết mâu thuẫn và phủ định biện chứng có quy luật.'
      }
    ],
    explanation: 'Quy luật phủ định của phủ định vạch ra khuynh hướng của sự phát triển: Sự vật vận động không theo đường thẳng hay vòng tròn khép kín, mà theo đường xoắn ốc. Qua hai lần phủ định cơ bản (Khẳng định -> Phủ định lần 1 -> Phủ định của phủ định), sự vật dường như quay trở lại điểm xuất phát ban đầu nhưng trên cơ sở mới, cao hơn về chất lượng và kế thừa toàn bộ tinh hoa.',
    coreLesson: 'Mỗi lần vấp ngã và phải đập đi xây lại không phải là ta về con số 0. Ta đang bắt đầu lại từ một nấc thang cao hơn với bề dày kinh nghiệm và trí tuệ vượt trội.',
    dimensionScores: { connection: 20, contradiction: 25, objective: 20, practice: 20, depth: 30 }
  },

  // MODULE 2.4: SÁU CẶP PHẠM TRÙ
  {
    id: 'C2-M4-Q001',
    chapter: 2,
    module: '2.4',
    topic: 'Sáu cặp phạm trù của phép biện chứng',
    philosophyConcept: 'Cái riêng và Cái chung',
    difficulty: 'medium',
    image: './assets/images/chapter2/individual-general.svg',
    title: 'Cá tính Gen Z và chuẩn mực tốt nghiệp',
    situation: 'Nam tự hào mình là một cá nhân độc nhất vô nhị, có sở thích và phong cách riêng biệt. Khi nhà trường yêu cầu thực hiện chuẩn đầu ra về tiếng Anh và kỹ năng làm việc nhóm, Nam bất mãn nói: "Tôi là một cá tính riêng, không ai có quyền ép tôi theo các chuẩn mực chung của xã hội!".',
    question: 'Sai lầm trong nhận thức của Nam về cặp phạm trù "Cái riêng và Cái chung" là gì?',
    options: [
      {
        id: 'A',
        text: 'Tách rời cái riêng khỏi cái chung, tuyệt đối hóa cái riêng mà không thấy rằng cái chung tồn tại trong cái riêng và quy định bản chất cái riêng.',
        isDialectical: true,
        consequence: 'Bạn hiểu rằng: Một cá nhân dù độc đáo đến đâu (Cái riêng) vẫn phải sống, lao động và chia sẻ những quy luật, chuẩn mực chung của nhân loại (Cái chung) để tồn tại và phát triển.',
        philosophicalLens: 'Cái riêng chỉ tồn tại trong mối liên hệ với cái chung; không có cái riêng nào tồn tại tuyệt đối biệt lập với cái chung. Ngược lại, cái chung chỉ tồn tại trong cái riêng, biểu hiện thông qua cái riêng.'
      },
      {
        id: 'B',
        text: 'Nam hoàn toàn đúng, trong thời đại 4.0 con người không cần bất kỳ tiêu chuẩn chung nào.',
        isDialectical: false,
        consequence: 'Bạn cổ súy cho chủ nghĩa cá nhân vị kỷ cực đoan, dẫn đến sự cô lập và đào thải khỏi thị trường lao động.',
        philosophicalLens: 'Chủ nghĩa cá nhân cực đoan vi phạm mối quan hệ hữu cơ giữa cá nhân và xã hội.'
      },
      {
        id: 'C',
        text: 'Xã hội nên xóa bỏ toàn bộ cá tính của từng sinh viên để tạo ra một tập thể đồng nhất 100%.',
        isDialectical: false,
        consequence: 'Bạn rơi vào chủ nghĩa giáo điều bình quân, thủ tiêu sự phong phú của cái đơn nhất và cái riêng.',
        philosophicalLens: 'Cái chung phong phú chính nhờ sự đa dạng sinh động của vô số cái riêng.'
      },
      {
        id: 'D',
        text: 'Cái riêng sinh ra cái chung và cái chung không có tác động gì đến cái riêng.',
        isDialectical: false,
        consequence: 'Bạn đảo lộn mối quan hệ biện chứng giữa hai phạm trù.',
        philosophicalLens: 'Cái chung phản ánh những mặt, những thuộc tính lặp lại trong nhiều cái riêng, đóng vai trò bản chất hơn.'
      }
    ],
    explanation: 'Cái riêng là phạm trù triết học dùng để chỉ một sự vật, một hiện tượng nhất định; Cái chung là phạm trù dùng để chỉ những mặt, những thuộc tính không những có ở một sự vật mà còn lặp lại trong nhiều sự vật khác. Mối quan hệ biện chứng: Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng; cái riêng chỉ tồn tại trong mối liên hệ đưa đến cái chung. Bất cứ cái riêng nào cũng bao hàm cái chung.',
    coreLesson: 'Hãy giữ gìn bản sắc độc đáo của bạn (cái riêng), nhưng đừng bao giờ từ chối trang bị những nền tảng tri thức và kỹ năng phổ quát của nhân loại (cái chung).',
    dimensionScores: { connection: 25, contradiction: 15, objective: 20, practice: 15, depth: 20 }
  },
  {
    id: 'C2-M4-Q002',
    chapter: 2,
    module: '2.4',
    topic: 'Sáu cặp phạm trù của phép biện chứng',
    philosophyConcept: 'Nguyên nhân và Kết quả',
    difficulty: 'medium',
    image: './assets/images/chapter2/cause-effect.svg',
    title: 'Hiệu ứng Domino: Thức đêm, lướt điện thoại và trượt môn',
    situation: 'Việt thường xuyên thức đến 3-4 giờ sáng để lướt TikTok và chơi game. Sáng hôm sau lên giảng đường, Việt ngủ gật, không tiếp thu được bài giảng. Về nhà, Việt không làm bài tập vì "không hiểu gì". Đến kỳ thi, Việt làm bài trượt và than thở: "Kỳ này sao mình đen đủi thế, bài thi rơi đúng vào phần mình không học!".',
    question: 'Dưới lăng kính cặp phạm trù "Nguyên nhân và Kết quả", bạn nhận định thế nào về lời than của Việt?',
    options: [
      {
        id: 'A',
        text: 'Việt nói đúng, trượt môn chỉ là sự ngẫu nhiên đen đủi, không liên quan đến thói quen sinh hoạt.',
        isDialectical: false,
        consequence: 'Bạn dung dưỡng tư duy đổ lỗi cho số phận, khiến bản thân không bao giờ sửa đổi thói quen xấu.',
        philosophicalLens: 'Phủ nhận mối liên hệ nhân quả khách quan là biểu hiện của thế giới quan duy tâm thần bí.'
      },
      {
        id: 'B',
        text: 'Trượt môn là Kết quả tất yếu sinh ra từ một chuỗi Nguyên nhân cụ thể: Thức đêm -> Mệt mỏi -> Mất tập trung -> Không tích lũy kiến thức; không hề có sự ngẫu nhiên đen đủi ở đây.',
        isDialectical: true,
        consequence: 'Bạn nắm quyền kiểm soát cuộc đời mình: Muốn có Kết quả tốt (điểm cao, sức khỏe tốt), bạn phải gieo đúng những Nguyên nhân lành mạnh ngay từ hôm nay.',
        philosophicalLens: 'Mối liên hệ nhân quả có tính khách quan, tính phổ biến và tính tất yếu. Một nguyên nhân có thể sinh ra một hoặc nhiều kết quả; nguyên nhân luôn có trước kết quả.'
      },
      {
        id: 'C',
        text: 'Kết quả trượt môn là do bài thi sinh ra chứ không liên quan đến việc học trước đó.',
        isDialectical: false,
        consequence: 'Bạn biến bài thi (công cụ đo lường) thành nguyên nhân gốc rễ, nhầm lẫn giữa điều kiện và nguyên nhân.',
        philosophicalLens: 'Bài thi chỉ là thước đo phản ánh kết quả của cả một quá trình tích lũy trước đó.'
      },
      {
        id: 'D',
        text: 'Nguyên nhân và kết quả luôn hoàn toàn tách rời nhau và không thể chuyển hóa lẫn nhau.',
        isDialectical: false,
        consequence: 'Bạn nhìn nhận quan hệ nhân quả một cách siêu hình cứng nhắc.',
        philosophicalLens: 'Trong sự vận động vô tận của thế giới, nguyên nhân và kết quả có thể đổi chỗ cho nhau: kết quả của quá trình này trở thành nguyên nhân của quá trình tiếp theo.'
      }
    ],
    explanation: 'Nguyên nhân là phạm trù chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra những biến đổi nhất định; Kết quả là những biến đổi xuất hiện do nguyên nhân tạo ra. Mối quan hệ nhân quả có tính khách quan (không phụ thuộc vào ý muốn chủ quan), tính phổ biến (mọi hiện tượng đều có nguyên nhân) và tính tất yếu (cùng nguyên nhân trong cùng điều kiện sẽ sinh ra cùng kết quả).',
    coreLesson: 'Cuộc đời không có điều gì là "tự dưng". Muốn gặt hái kết quả rực rỡ trong tương lai, hãy truy tìm và kiểm soát nghiêm ngặt những nguyên nhân hành động trong từng giờ phút hiện tại!',
    dimensionScores: { connection: 20, contradiction: 15, objective: 25, practice: 20, depth: 20 }
  },
  {
    id: 'C2-M4-Q003',
    chapter: 2,
    module: '2.4',
    topic: 'Sáu cặp phạm trù của phép biện chứng',
    philosophyConcept: 'Tất nhiên và Ngẫu nhiên',
    difficulty: 'medium',
    image: './assets/images/chapter2/necessity-chance.svg',
    title: 'Học tủ và vận may phòng thi',
    situation: 'Đức và Linh cùng bước vào kỳ thi cuối kỳ môn Triết học Mác – Lênin. Linh dành cả kỳ học đều đặn, hiểu bản chất các quy luật và làm bài tập tình huống đầy đủ. Đức lười học, chỉ chọn học vẹt đúng 2 câu tủ theo tin đồn trên mạng. Hôm thi, đề ra đúng vào 1 câu tủ của Đức khiến Đức đạt điểm 7. Đức đắc thắng: "Cần gì học cả kỳ cho mệt, chỉ cần học tủ là xong!".',
    question: 'Theo cặp phạm trù "Tất nhiên và Ngẫu nhiên", bạn phân tích tương lai học tập của Đức và Linh ra sao?',
    options: [
      {
        id: 'A',
        text: 'Đức hoàn toàn đúng, ngẫu nhiên là con đường duy nhất quyết định mọi thành công.',
        isDialectical: false,
        consequence: 'Bạn đặt cược tương lai vào cờ bạc may rủi; chỉ cần đổi đề thi ở kỳ sau, bạn sẽ lập tức nhận điểm F.',
        philosophicalLens: 'Dựa dẫm vào ngẫu nhiên là cách tư duy tự sát của kẻ yếu đuối chối bỏ quy luật khách quan.'
      },
      {
        id: 'B',
        text: 'Điểm 7 của Đức là Ngẫu nhiên (chớp nhoáng, không bền vững); sự vững vàng của Linh là Tất nhiên (bắt nguồn từ bản chất quá trình học). Trong dài hạn, cái tất nhiên sẽ vạch đường đi qua vô số cái ngẫu nhiên.',
        isDialectical: true,
        consequence: 'Bạn giữ vững lập trường khoa học: Linh sẽ thành công bền vững trong sự nghiệp vì nắm chắc cái Tất nhiên; còn Đức nếu tiếp tục ỷ lại vào ngẫu nhiên sẽ sớm trả giá đắt.',
        philosophicalLens: 'Cái tất nhiên bắt nguồn từ nguyên nhân bên trong, chi phối sự phát triển của sự vật; cái ngẫu nhiên bắt nguồn từ các mối liên hệ bên ngoài. Trong hoạt động thực tiễn phải căn cứ vào cái tất nhiên chứ không thể dựa vào cái ngẫu nhiên.'
      },
      {
        id: 'C',
        text: 'Tất nhiên và ngẫu nhiên là hai đường thẳng song song không bao giờ gặp nhau.',
        isDialectical: false,
        consequence: 'Bạn chia cắt siêu hình giữa tất nhiên và ngẫu nhiên.',
        philosophicalLens: 'Cái tất nhiên vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên; ngẫu nhiên là hình thức biểu hiện của tất nhiên.'
      },
      {
        id: 'D',
        text: 'Không có cái tất nhiên nào tồn tại trên đời, vạn vật đều là ngẫu nhiên hỗn loạn.',
        isDialectical: false,
        consequence: 'Bạn rơi vào thuyết hoài nghi và bất khả tri luận.',
        philosophicalLens: 'Khoa học phát triển chính là nhờ việc tìm ra cái tất nhiên (quy luật) ẩn sau những hiện tượng ngẫu nhiên.'
      }
    ],
    explanation: 'Cái tất nhiên là cái do những nguyên nhân cơ bản bên trong của kết cấu vật chất quyết định và trong những điều kiện nhất định nó phải xảy ra như thế chứ không thể khác được; Cái ngẫu nhiên là cái không do mối liên hệ bản chất bên trong quyết định mà do các mối liên hệ bên ngoài, nó có thể xuất hiện hoặc không xuất hiện. Bài học phương pháp luận: Phải dựa vào cái tất nhiên, không được dựa vào cái ngẫu nhiên nhưng cũng không được xem nhẹ cái ngẫu nhiên.',
    coreLesson: 'May mắn (ngẫu nhiên) có thể cứu bạn một kỳ thi, nhưng chỉ có năng lực thực chất (tất nhiên) mới cứu được cả sự nghiệp của bạn. Hãy xây dựng tương lai trên nền đá của cái tất nhiên!',
    dimensionScores: { connection: 20, contradiction: 20, objective: 25, practice: 20, depth: 20 }
  },
  {
    id: 'C2-M4-Q004',
    chapter: 2,
    module: '2.4',
    topic: 'Sáu cặp phạm trù của phép biện chứng',
    philosophyConcept: 'Nội dung và Hình thức',
    difficulty: 'medium',
    image: './assets/images/chapter2/content-form.svg',
    title: 'Slide thuyết trình triệu view nhưng rỗng ruột',
    situation: 'Trong buổi báo cáo đồ án môn học, nhóm của Tuấn chuẩn bị một bộ slide cực kỳ bắt mắt với hiệu ứng 3D, video cinematic sống động và âm thanh hoành tráng. Tuy nhiên, khi giảng viên và các bạn hỏi sâu vào mô hình kinh doanh, số liệu tài chính và phương pháp nghiên cứu thì nhóm ấp úng, không trả lời được gì vì nội dung sơ sài, chép trên mạng.',
    question: 'Bài học triết học nào được rút ra từ cặp phạm trù "Nội dung và Hình thức" cho nhóm của Tuấn?',
    options: [
      {
        id: 'A',
        text: 'Nội dung quyết định hình thức, nhưng hình thức có tính độc lập tương đối và tác động trở lại nội dung. Một hình thức lộng lẫy không thể cứu vãn một nội dung rỗng tuếch.',
        isDialectical: true,
        consequence: 'Bạn nắm vững bí quyết của sự chuyên nghiệp: Trước tiên phải đầu tư công phu cho chất lượng nội dung cốt lõi, sau đó dùng hình thức mạch lạc, chuẩn mực để tôn vinh nội dung.',
        philosophicalLens: 'Nội dung là tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật; Hình thức là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nội dung. Nội dung giữ vai trò quyết định đối với hình thức.'
      },
      {
        id: 'B',
        text: 'Hình thức là tất cả, thời đại ngày nay chỉ cần làm slide đẹp là auto đạt điểm A.',
        isDialectical: false,
        consequence: 'Bạn rơi vào chủ nghĩa hình thức nông cạn, sớm muộn sẽ bị phơi bày sự thiếu hụt năng lực cốt lõi khi đi làm thực tế.',
        philosophicalLens: 'Bệnh hình thức là sự vi phạm nghiêm trọng nguyên lý duy vật biện chứng về vai trò quyết định của nội dung.'
      },
      {
        id: 'C',
        text: 'Nội dung quan trọng nên không cần quan tâm đến hình thức, cứ để slide trắng đen chữ rối rắm là tốt nhất.',
        isDialectical: false,
        consequence: 'Bạn coi thường hình thức, khiến người xem khó tiếp thu dù nội dung có hay đến đâu.',
        philosophicalLens: 'Hình thức không phù hợp sẽ kìm hãm, cản trở sự phát triển và truyền tải của nội dung.'
      },
      {
        id: 'D',
        text: 'Nội dung và hình thức không có mối liên hệ nào với nhau.',
        isDialectical: false,
        consequence: 'Bạn chia cắt siêu hình hai mặt thống nhất của cùng một sự vật.',
        philosophicalLens: 'Không có hình thức nào không chứa đựng nội dung, và không có nội dung nào không tồn tại trong một hình thức nhất định.'
      }
    ],
    explanation: 'Nội dung và hình thức luôn gắn bó khăng khít với nhau trong một thể thống nhất. Nội dung quyết định hình thức: nội dung biến đổi thì sớm muộn hình thức cũng phải biến đổi theo. Hình thức có tính độc lập tương đối và tác động trở lại nội dung: nếu hình thức phù hợp với nội dung thì sẽ thúc đẩy nội dung phát triển; nếu không phù hợp thì kìm hãm.',
    coreLesson: 'Đừng bao giờ xây lâu đài cát bằng hình thức bóng bẩy bên ngoài khi bên trong rỗng tuếch. Hãy tôi luyện "nội công" tri thức vững chắc rồi thể hiện ra bằng hình thức tinh tế, chuẩn mực.',
    dimensionScores: { connection: 20, contradiction: 20, objective: 20, practice: 20, depth: 20 }
  },
  {
    id: 'C2-M4-Q005',
    chapter: 2,
    module: '2.4',
    topic: 'Sáu cặp phạm trù của phép biện chứng',
    philosophyConcept: 'Bản chất và Hiện tượng',
    difficulty: 'hard',
    image: './assets/images/chapter2/essence-phenomenon.svg',
    title: 'Tảng băng trôi: Đi học đủ 100% nhưng vẫn trượt môn',
    situation: 'Thầy chủ nhiệm nhận được bảng điểm của Quân: Điểm danh chuyên cần 100%, không vắng buổi nào nhưng điểm thi cuối kỳ chỉ đạt 2.5/10. Thầy ngạc nhiên vì "trông em đi học rất chăm chỉ". Khi quan sát kỹ ở các buổi học sau, thầy nhận ra: Quân ngồi bàn cuối, mắt nhìn lên bảng nhưng tay bấm điện thoại dưới gầm bàn, tai đeo tai nghe giấu trong tóc, hoàn toàn không suy nghĩ hay ghi chép gì.',
    question: 'Hãy dùng cặp phạm trù "Bản chất và Hiện tượng" để giải thích sự mâu thuẫn này:',
    options: [
      {
        id: 'A',
        text: 'Hiện tượng có mặt đầy đủ chỉ là vỏ bọc bên ngoài; Bản chất thực sự là thái độ học tập thụ động, lơ là. Hiện tượng có thể phản ánh sai lệch hoặc xuyên tạc bản chất.',
        isDialectical: true,
        consequence: 'Bạn trang bị cho mình đôi mắt thần thấu suốt: Không bị đánh lừa bởi những hành vi đối phó bề mặt, luôn nhìn thẳng vào bản chất vận động bên dưới.',
        philosophicalLens: 'Bản chất là tổng hợp tất cả những mặt, những mối liên hệ tất nhiên tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật; Hiện tượng là sự biểu hiện của những mặt, những mối liên hệ đó ra bên ngoài. Bản chất và hiện tượng thống nhất nhưng cũng mâu thuẫn: Hiện tượng không biểu hiện nguyên xi bản chất mà biểu hiện dưới hình thức đã biến đổi.'
      },
      {
        id: 'B',
        text: 'Quân đi học đủ tức là Quân thông minh, giảng viên chấm điểm sai.',
        isDialectical: false,
        consequence: 'Bạn đồng nhất thô thiển hiện tượng có mặt vật lý với bản chất tiếp thu tri thức của não bộ.',
        philosophicalLens: 'Dừng lại ở hiện tượng bề ngoài mà không đi sâu vào bản chất là biểu hiện của tư duy ấu trĩ cảm tính.'
      },
      {
        id: 'C',
        text: 'Bản chất và hiện tượng luôn đồng nhất tuyệt đối 100%, thấy sao là vậy.',
        isDialectical: false,
        consequence: 'Nếu bản chất và hiện tượng trùng khít nhau thì mọi khoa học trên đời đều trở nên thừa thãi.',
        philosophicalLens: 'Mác từng nói: "Nếu hình thái biểu hiện và bản chất của sự vật trực tiếp đồng nhất với nhau, thì mọi khoa học sẽ trở nên thừa".'
      },
      {
        id: 'D',
        text: 'Điểm số chỉ là một hiện tượng hư ảo do ý thức giảng viên tự nghĩ ra.',
        isDialectical: false,
        consequence: 'Bạn chối bỏ hiện thực khách quan bằng lối ngụy biện duy tâm.',
        philosophicalLens: 'Điểm số phản ánh khách quan mức độ nắm vững bản chất tri thức của người học.'
      }
    ],
    explanation: 'Bản chất và hiện tượng vừa thống nhất vừa đối lập: Thống nhất ở chỗ bản chất luôn bộc lộ qua hiện tượng, hiện tượng nào cũng là sự biểu hiện của bản chất; Đối lập ở chỗ bản chất là cái bên trong, sâu sắc, tương đối ổn định, còn hiện tượng là cái bên ngoài, phong phú, dễ biến đổi. Đặc biệt, có những hiện tượng xuyên tạc bản chất (giả tượng). Nhiệm vụ của khoa học và tư duy là phải bóc tách hiện tượng để tìm ra bản chất.',
    coreLesson: 'Đừng tự lừa dối bản thân bằng "sự chăm chỉ giả tạo" bề ngoài. Ngồi 10 tiếng trước bàn học mà tâm trí phiêu bạt thì bản chất vẫn là con số 0. Hãy học thật từ bản chất!',
    dimensionScores: { connection: 20, contradiction: 25, objective: 25, practice: 20, depth: 30 }
  },
  {
    id: 'C2-M4-Q006',
    chapter: 2,
    module: '2.4',
    topic: 'Sáu cặp phạm trù của phép biện chứng',
    philosophyConcept: 'Khả năng và Hiện thực',
    difficulty: 'medium',
    image: './assets/images/chapter2/possibility-reality.svg',
    title: 'Hạt mầm Startup trên giấy và Cây đại thụ thương trường',
    situation: 'Long có một ý tưởng phần mềm kết nối sinh viên thuê trọ rất tiềm năng. Long say sưa thuyết trình với mọi người và tuyên bố: "Tôi đã là triệu phú tương lai, dự án này chắc chắn thành công rực rỡ!". Nhưng sau 6 tháng, Long không hề viết dòng code nào, không khảo sát người dùng thực tế và cũng không tìm kiếm nhà đầu tư. Dự án vẫn chỉ là một file PowerPoint nằm im trong máy tính.',
    question: 'Sai lầm phương pháp luận của Long dưới góc nhìn cặp phạm trù "Khả năng và Hiện thực" là gì?',
    options: [
      {
        id: 'A',
        text: 'Đồng nhất "Khả năng" với "Hiện thực". Khả năng chỉ là cái chưa có nhưng có thể xuất hiện khi có đủ điều kiện khách quan và nỗ lực chủ quan thông qua hoạt động thực tiễn.',
        isDialectical: true,
        consequence: 'Bạn thoát khỏi căn bệnh ảo tưởng: Ý tưởng hay chỉ là khả năng ở vạch xuất phát; muốn biến thành hiện thực phải đổ mồ hôi, hội tụ nguồn lực và hành động bền bỉ.',
        philosophicalLens: 'Khả năng là cái hiện chưa có nhưng sẽ có khi có các điều kiện thích hợp; Hiện thực là cái đang có, đang tồn tại thực sự. Trong hoạt động thực tiễn phải dựa vào hiện thực, không được dựa vào khả năng; nhưng cũng phải thấy trước khả năng để định hướng hoạt động.'
      },
      {
        id: 'B',
        text: 'Long làm đúng vì chỉ cần có ý tưởng hay là tiền sẽ tự động sinh sôi nảy nở.',
        isDialectical: false,
        consequence: 'Bạn biến ý tưởng thành cây đũa phép thần thông, chối bỏ hoàn toàn hoạt động lao động sản xuất thực tiễn.',
        philosophicalLens: 'Khả năng không tự động biến thành hiện thực nếu thiếu đi hoạt động thực tiễn có mục đích của con người.'
      },
      {
        id: 'C',
        text: 'Khả năng và hiện thực không thể chuyển hóa lẫn nhau trong bất kỳ trường hợp nào.',
        isDialectical: false,
        consequence: 'Bạn nhìn nhận sự vật tĩnh tại siêu hình, phủ nhận khả năng phát triển của cái mới.',
        philosophicalLens: 'Trong điều kiện thích hợp, khả năng sẽ chuyển hóa thành hiện thực, và hiện thực mới lại mở ra những khả năng mới.'
      },
      {
        id: 'D',
        text: 'Do thị trường bất động sản suy thoái nên ý tưởng của Long mới không thành hiện thực.',
        isDialectical: false,
        consequence: 'Bạn đổ lỗi cho yếu tố xa xôi trong khi nguyên nhân trực tiếp là Long chưa hề bắt tay vào hành động.',
        philosophicalLens: 'Phải phân biệt khả năng tất nhiên và ngẫu nhiên, khả năng thực tế và khả năng trừu tượng.'
      }
    ],
    explanation: 'Hiện thực là phạm trù chỉ những cái đang có, đang tồn tại thực sự trong thực tế; Khả năng là phạm trù chỉ những cái chưa có, nhưng sẽ có, sẽ tới khi có các điều kiện tương ứng. Để biến khả năng thành hiện thực, con người phải phát huy tính năng động chủ quan, tạo ra các điều kiện cần và đủ thông qua hoạt động thực tiễn.',
    coreLesson: 'Ý tưởng triệu đô mà không hành động thì giá trị bằng 0. Đừng tự mãn với những khả năng trên giấy. Hãy bắt tay vào hành động để biến khả năng thành hiện thực sống động!',
    dimensionScores: { connection: 20, contradiction: 20, objective: 25, practice: 30, depth: 20 }
  },

  // MODULE 2.5: LÝ LUẬN NHẬN THỨC
  {
    id: 'C2-M5-Q001',
    chapter: 2,
    module: '2.5',
    topic: 'Lý luận nhận thức biện chứng duy vật',
    philosophyConcept: 'Con đường biện chứng của sự nhận thức: Từ nhận thức cảm tính đến nhận thức lý tính',
    difficulty: 'medium',
    image: './assets/images/chapter2/sensory-rational.svg',
    title: 'Ấn tượng ngày đầu và chân dung thật sự',
    situation: 'Ngày đầu tiên đi làm thực tập, Thảo nhìn thấy người quản lý trực tiếp có khuôn mặt nghiêm nghị, ít cười và nói giọng lạnh tanh. Thảo nghĩ thầm: "Bà này chắc chắn là người độc đoán, khó tính và ghét mình" (Cảm tính). Tuy nhiên sau 3 tháng làm việc, qua quan sát cách người quản lý kiên nhẫn sửa từng lỗi trong báo cáo, luôn đứng ra bảo vệ quyền lợi nhóm và chia sẻ kinh nghiệm quý báu, Thảo hiểu rằng đây là một người lãnh đạo cực kỳ tận tâm và trách nhiệm (Lý tính).',
    question: 'Trải nghiệm nhận thức của Thảo phản ánh quy luật nhận thức nào của triết học Mác – Lênin?',
    options: [
      {
        id: 'A',
        text: 'Nhận thức chỉ cần dừng lại ở cảm giác ban đầu là đã đủ chính xác.',
        isDialectical: false,
        consequence: 'Bạn sẽ trở thành nạn nhân của định kiến bề ngoài và cảm xúc nhất thời, đánh mất những mối quan hệ quý giá.',
        philosophicalLens: 'Nhận thức cảm tính chỉ phản ánh các thuộc tính bề ngoài của sự vật, chưa nắm được bản chất bên trong.'
      },
      {
        id: 'B',
        text: 'Con đường nhận thức đi từ trực quan sinh động (nhận thức cảm tính: cảm giác, tri giác) đến tư duy trừu tượng (nhận thức lý tính: khái niệm, phán đoán, suy luận) và kiểm chứng qua thực tiễn.',
        isDialectical: true,
        consequence: 'Bạn sở hữu năng lực thấu hiểu sâu sắc: Không vội vàng phán xét qua vẻ bề ngoài, luôn dùng tư duy logic và kiểm chứng thực tế để nhận diện chân giá trị.',
        philosophicalLens: 'Theo Lênin: "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn - đó là con đường biện chứng của sự nhận thức chân lý, của sự nhận thức hiện thực khách quan".'
      },
      {
        id: 'C',
        text: 'Nhận thức lý tính hoàn toàn tách rời và không cần bất kỳ dữ liệu nào từ nhận thức cảm tính.',
        isDialectical: false,
        consequence: 'Bạn rơi vào chủ nghĩa duy lý cực đoan, biến tư duy thành những suy diễn viển vông không có thực tế nuôi dưỡng.',
        philosophicalLens: 'Nhận thức lý tính phải dựa trên cơ sở tài liệu do nhận thức cảm tính cung cấp; không có cảm giác thì không có nhận thức.'
      },
      {
        id: 'D',
        text: 'Cảm giác và lý tính là hai thế giới đối kháng triệt tiêu nhau.',
        isDialectical: false,
        consequence: 'Bạn chia cắt biện chứng giữa hai giai đoạn của cùng một quá trình nhận thức thống nhất.',
        philosophicalLens: 'Cảm tính và lý tính là hai giai đoạn thống nhất, liên hệ mật thiết, bổ sung cho nhau trong quá trình nhận thức.'
      }
    ],
    explanation: 'Quá trình nhận thức của con người trải qua hai giai đoạn biện chứng: Nhận thức cảm tính (gồm cảm giác, tri giác, biểu tượng) phản ánh trực tiếp, cụ thể các thuộc tính bề ngoài của sự vật; Nhận thức lý tính (gồm khái niệm, phán đoán, suy luận) phản ánh gián tiếp, khái quát các mối liên hệ bản chất bên trong của sự vật. Cả hai giai đoạn đều bắt nguồn từ thực tiễn và quay trở về chỉ đạo thực tiễn.',
    coreLesson: 'Đừng vội tin vào ấn tượng ban đầu (cảm tính). Hãy lắng lại, quan sát nhiều chiều và dùng tư duy phân tích (lý tính) kết hợp trải nghiệm thực tế để thấu suốt bản chất một con người hay sự việc.',
    dimensionScores: { connection: 20, contradiction: 20, objective: 25, practice: 25, depth: 25 }
  },
  {
    id: 'C2-M5-Q002',
    chapter: 2,
    module: '2.5',
    topic: 'Lý luận nhận thức biện chứng duy vật',
    philosophyConcept: 'Thực tiễn là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn của chân lý',
    difficulty: 'hard',
    image: './assets/images/chapter2/practice-truth.svg',
    title: 'Đọc 100 cuốn sách bơi lội và khoảnh khắc nhảy xuống nước',
    situation: 'Hùng mua về hơn 10 cuốn sách chuyên sâu về kỹ thuật bơi lội, thuộc lòng từng góc độ quạt tay, nhịp thở và lực đạp chân. Hùng tin chắc mình đã là bậc thầy bơi lội. Nhưng khi ra bể bơi và nhảy xuống làn nước sâu 2 mét, Hùng lập tức bị sặc nước, tay chân hoảng loạn chìm nghỉm nếu không có nhân viên cứu hộ kéo lên.',
    question: 'Tình huống hài hước nhưng sâu sắc của Hùng khẳng định luận điểm triết học Mác – Lênin nào về "Thực tiễn"?',
    options: [
      {
        id: 'A',
        text: 'Sách vở là vô ích, không nên đọc sách nữa.',
        isDialectical: false,
        consequence: 'Bạn rơi vào chủ nghĩa kinh nghiệm mù quáng, phủ nhận hoàn toàn vai trò của tri thức lý luận.',
        philosophicalLens: 'Lý luận không có thực tiễn là lý luận suông, nhưng thực tiễn không có lý luận chỉ đạo là thực tiễn mù quáng.'
      },
      {
        id: 'B',
        text: 'Thực tiễn là tiêu chuẩn duy nhất của chân lý: Lý thuyết dù hay đến đâu chỉ được coi là chân lý khi được kiểm nghiệm, kiểm chứng thành công trong hoạt động thực tiễn.',
        isDialectical: true,
        consequence: 'Bạn trở thành người thực học - thực hành: Mọi kiến thức tiếp thu trên giảng đường đều phải được đem ra cọ xát với bài tập thực tế, dự án thực tế để biến thành năng lực thật sự.',
        philosophicalLens: 'Thực tiễn là toàn bộ hoạt động vật chất - cảm tính, có tính lịch sử - xã hội của con người nhằm cải tạo tự nhiên và xã hội. Thực tiễn đóng vai trò là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý.'
      },
      {
        id: 'C',
        text: 'Chân lý được quyết định bởi số đông: Nếu 1000 người cùng tin một điều thì điều đó tự động thành chân lý.',
        isDialectical: false,
        consequence: 'Bạn biến chân lý thành sự đồng thuận tâm lý số đông, mở đường cho những sai lầm tập thể.',
        philosophicalLens: 'Chân lý có tính khách quan, không phụ thuộc vào số lượng người tin theo hay quyền lực áp đặt.'
      },
      {
        id: 'D',
        text: 'Do nước ở bể bơi quá ướt và không đúng với công thức trong sách giáo khoa.',
        isDialectical: false,
        consequence: 'Bạn ngụy biện bảo vệ lý thuyết giáo điều xa rời hiện thực.',
        philosophicalLens: 'Lý luận phải bám sát thực tiễn; khi lý luận mâu thuẫn với thực tiễn khách quan thì phải bổ sung, sửa đổi lý luận.'
      }
    ],
    explanation: 'Thực tiễn là toàn bộ những hoạt động vật chất có mục đích, mang tính lịch sử – xã hội của con người nhằm cải tạo tự nhiên và xã hội. Vai trò của thực tiễn đối với nhận thức: 1. Là cơ sở, điểm xuất phát của nhận thức; 2. Là động lực thúc đẩy nhận thức phát triển; 3. Là mục đích cuối cùng của nhận thức (nhận thức để quay về chỉ đạo cải tạo thực tiễn); 4. Là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý.',
    coreLesson: '"Lý thuyết chỉ là màu xám xịt, chỉ cây đời mãi mãi xanh tươi". Hãy đem mọi tri thức bạn học được ra thực hành kiểm chứng trong cuộc sống. Đó là con đường duy nhất để chạm tới chân lý!',
    dimensionScores: { connection: 20, contradiction: 20, objective: 25, practice: 35, depth: 25 }
  },

  // ==========================================
  // CHAPTER 3: CHỦ NGHĨA DUY VẬT LỊCH SỬ
  // ==========================================
  {
    id: 'C3-M1-Q001',
    chapter: 3,
    module: '3.1',
    topic: 'Hình thái kinh tế – xã hội & Lực lượng sản xuất - Quan hệ sản xuất',
    philosophyConcept: 'Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất',
    difficulty: 'hard',
    image: './assets/images/chapter3/production-relations.svg',
    title: 'Cơn bão AI và cuộc khủng hoảng quy chế cũ',
    situation: 'Một công ty thiết kế truyền thông đầu tư áp dụng các công cụ AI thế hệ mới (Midjourney, ChatGPT, Copilot). Nhờ công cụ mới, năng suất thiết kế tăng gấp 10 lần, nhân viên trẻ chỉ mất 2 tiếng để hoàn thành khối lượng công việc của cả tuần. Tuy nhiên, ban giám đốc công ty vẫn giữ nguyên quy chế từ 15 năm trước: Bắt nhân viên ngồi chấm công đủ 8 tiếng tại văn phòng, tính lương theo số trang in thủ công và cấm làm việc từ xa. Hệ quả: Những nhân sự tài năng nhất đồng loạt nộp đơn xin nghỉ việc.',
    question: 'Mâu thuẫn trong công ty trên phản ánh quy luật kinh tế - xã hội cơ bản nào của Chủ nghĩa duy vật lịch sử?',
    options: [
      {
        id: 'A',
        text: 'Mâu thuẫn giữa Lực lượng sản xuất (công cụ AI, trình độ số hóa của người lao động) đã tiến bộ vượt bậc với Quan hệ sản xuất cũ kỹ (cách thức quản lý, chấm công, phân phối lạc hậu). Khi QHSX không còn phù hợp, nó kìm hãm LLSX và tất yếu đòi hỏi một cuộc cải tổ.',
        isDialectical: true,
        consequence: 'Bạn thấu suốt bản chất của mọi cuộc chuyển đổi số: Không chỉ là mua phần mềm mới, mà phải thay đổi cả mô hình quản trị và quan hệ con người cho tương thích với công nghệ mới.',
        philosophicalLens: 'Lực lượng sản xuất là yếu tố động nhất, cách mạng nhất; Quan hệ sản xuất có tính tương đối ổn định. Khi LLSX phát triển đến một trình độ nhất định, QHSX cũ từ chỗ là hình thức phát triển của LLSX sẽ trở thành xiềng xích trói buộc LLSX, đòi hỏi phải được thay thế bằng QHSX mới phù hợp.'
      },
      {
        id: 'B',
        text: 'Chỉ là do giới trẻ Gen Z ngày nay thiếu tính kiên nhẫn và không chịu nghe lời cấp trên.',
        isDialectical: false,
        consequence: 'Bạn nhìn nhận vấn đề một cách đạo đức hóa cá nhân, mù quáng trước quy luật khách quan của nền kinh tế.',
        philosophicalLens: 'Chủ nghĩa duy vật lịch sử giải thích các biến động xã hội từ phương thức sản xuất vật chất, không quy kết cho tâm lý cá nhân đơn thuần.'
      },
      {
        id: 'C',
        text: 'Nên cấm hoàn toàn AI để công ty quay lại thời kỳ vẽ tay cho yên bình.',
        isDialectical: false,
        consequence: 'Bạn kéo lùi bánh xe lịch sử, công ty sẽ nhanh chóng phá sản trước các đối thủ cạnh tranh hiện đại.',
        philosophicalLens: 'Lực lượng sản xuất luôn vận động đi lên, nỗ lực kìm hãm công cụ lao động mới là hành động phản tiến bộ.'
      },
      {
        id: 'D',
        text: 'Lực lượng sản xuất và quan hệ sản xuất là hai khái niệm không liên quan gì đến doanh nghiệp tư nhân.',
        isDialectical: false,
        consequence: 'Bạn tưởng triết học chỉ nói chuyện vĩ mô, không thấy quy luật này vận hành sống động trong từng tế bào doanh nghiệp.',
        philosophicalLens: 'Mọi đơn vị sản xuất kinh doanh đều là hiện thân cụ thể của mối quan hệ giữa LLSX và QHSX.'
      }
    ],
    explanation: 'Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất là quy luật phổ biến tác động trong toàn bộ lịch sử nhân loại. Lực lượng sản xuất quyết định sự hình thành, biến đổi và phát triển của quan hệ sản xuất. Ngược lại, quan hệ sản xuất tác động trở lại lực lượng sản xuất: nếu phù hợp sẽ thúc đẩy LLSX phát triển, nếu không phù hợp (lạc hậu hơn hoặc vượt trước giả tạo) sẽ kìm hãm, gây khủng hoảng.',
    coreLesson: 'Khi công nghệ và năng lực con người (LLSX) đã nhảy vọt, mọi quy chế quản lý và cơ chế phân phối (QHSX) cứng nhắc cũ kỹ đều phải cải cách linh hoạt để mở đường cho sự phát triển.',
    dimensionScores: { connection: 25, contradiction: 30, objective: 25, practice: 25, depth: 30 }
  },
  {
    id: 'C3-M2-Q001',
    chapter: 3,
    module: '3.2',
    topic: 'Tồn tại xã hội và Ý thức xã hội',
    philosophyConcept: 'Tồn tại xã hội quyết định ý thức xã hội & Tính độc lập tương đối của ý thức xã hội',
    difficulty: 'medium',
    image: './assets/images/chapter3/social-consciousness.svg',
    title: 'Trào lưu "Flexing" trên mạng xã hội và cái bẫy tiêu dùng',
    situation: 'Dạo gần đây, trên TikTok và Facebook rộ lên trào lưu "Flexing" khoe đồng hồ tiền tỷ, đồ hiệu, xe sang và cuộc sống xa xỉ. Nhiều bạn sinh viên chưa làm ra tiền nhưng vì áp lực đồng trang lứa đã đi vay tiền qua app hoặc ép bố mẹ ở quê chu cấp để mua iPhone đời mới nhất nhằm "bằng bạn bằng bè".',
    question: 'Hãy phân tích hiện tượng tâm lý xã hội trên bằng mối quan hệ giữa "Tồn tại xã hội" và "Ý thức xã hội":',
    options: [
      {
        id: 'A',
        text: 'Trào lưu khoe khoang (Ý thức xã hội) bắt nguồn sâu xa từ sự phát triển của nền kinh tế thị trường tiêu dùng và công nghệ mạng truyền thông (Tồn tại xã hội). Tuy nhiên, ý thức xã hội có tính độc lập tương đối: tâm lý tiêu dùng phô trương có thể vượt trước hoặc biến tướng lệch lạc, đòi hỏi con người phải có thế giới quan khoa học để làm chủ bản thân.',
        isDialectical: true,
        consequence: 'Bạn xây dựng được bản lĩnh tự chủ: Nhìn thấu bản chất của các chiến dịch kích cầu tiêu dùng, không để mạng xã hội định đoạt giá trị con người bạn bằng món đồ bạn mặc.',
        philosophicalLens: 'Tồn tại xã hội là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội; Ý thức xã hội là mặt tinh thần của đời sống xã hội. Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức xã hội có tính độc lập tương đối (có thể lạc hậu hơn, có thể vượt trước, có tính kế thừa và tác động trở lại mạnh mẽ tồn tại xã hội).'
      },
      {
        id: 'B',
        text: 'Tâm lý khoe của sinh ra từ trong gen di truyền của con người từ thời nguyên thủy, không liên quan đến kinh tế xã hội.',
        isDialectical: false,
        consequence: 'Bạn sinh học hóa hiện tượng xã hội, phủ nhận hoàn toàn vai trò của môi trường sản xuất vật chất.',
        philosophicalLens: 'Mọi hiện tượng ý thức xã hội đều là sự phản ánh của tồn tại xã hội trong từng giai đoạn lịch sử cụ thể.'
      },
      {
        id: 'C',
        text: 'Cứ vay tiền mua đồ xịn để khoe là cách tốt nhất để hòa nhập với thời đại mới.',
        isDialectical: false,
        consequence: 'Bạn để ý thức tha hóa dẫn dắt hành vi, rơi vào nợ nần và khủng hoảng tài chính trầm trọng.',
        philosophicalLens: 'Đây là sự nô lệ vào vật phẩm tiêu dùng, biểu hiện của sự tha hóa con người trong xã hội tiêu thụ.'
      },
      {
        id: 'D',
        text: 'Ý thức xã hội hoàn toàn độc lập 100% và không có bất kỳ liên hệ nào với đời sống kinh tế vật chất.',
        isDialectical: false,
        consequence: 'Bạn rơi vào chủ nghĩa duy tâm lịch sử, cắt đứt ý thức khỏi cội nguồn đời sống vật chất.',
        philosophicalLens: 'Chủ nghĩa duy vật lịch sử khẳng định tồn tại xã hội luôn giữ vai trò quyết định tối hậu đối với ý thức xã hội.'
      }
    ],
    explanation: 'Chủ nghĩa duy vật lịch sử chỉ ra: Tồn tại xã hội quyết định ý thức xã hội. Khi các quan hệ kinh tế - vật chất thay đổi thì tâm lý, tư tưởng xã hội sớm muộn cũng biến đổi theo. Đồng thời, ý thức xã hội có tính độc lập tương đối: có thể tác động tiêu cực hoặc tích cực trở lại đời sống kinh tế. Việc nâng cao nhận thức, giáo dục văn hóa thẩm mỹ là điều kiện tiên quyết để định hướng ý thức xã hội lành mạnh.',
    coreLesson: 'Đừng để những ảo ảnh hào nhoáng trên mạng xã hội thao túng tâm lý bạn. Giá trị thực sự của một con người nằm ở tri thức, nhân cách và cống hiến thực tế, chứ không nằm ở những món đồ tiêu dùng phô trương!',
    dimensionScores: { connection: 25, contradiction: 20, objective: 25, practice: 20, depth: 25 }
  },
  {
    id: 'C3-M3-Q001',
    chapter: 3,
    module: '3.3',
    topic: 'Vấn đề con người trong triết học Mác – Lênin',
    philosophyConcept: 'Bản chất con người là tổng hòa các quan hệ xã hội & Vai trò của hoạt động thực tiễn',
    difficulty: 'hard',
    image: './assets/images/chapter3/human-essence.svg',
    title: 'Câu hỏi muôn thuở: "Tôi là ai giữa thế giới này?"',
    situation: 'Tuấn cảm thấy cô độc và lạc lõng. Tuấn nghĩ rằng con người mình sinh ra đã mang một bản chất cố định: rụt rè, kém cỏi và không bao giờ có thể hòa nhập. Tuấn tự giam mình trong phòng kín, cắt đứt liên lạc với bạn bè, câu lạc bộ và gia đình. Nhưng khi một người bạn rủ Tuấn tham gia dự án tình nguyện mùa hè xanh dạy học cho trẻ em vùng cao, việc hòa mình vào lao động tập thể và sẻ chia yêu thương đã biến Tuấn thành một con người hoàn toàn mới: cởi mở, tự tin và tràn đầy năng lượng sống.',
    question: 'Sự biến đổi kỳ diệu của Tuấn minh chứng cho luận điểm bất hủ nào của C.Mác về con người?',
    options: [
      {
        id: 'A',
        text: '"Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội". Con người chỉ thực sự tìm thấy và hoàn thiện bản thân khi dấn thân vào hoạt động thực tiễn và các mối quan hệ xã hội phong phú.',
        isDialectical: true,
        consequence: 'Bạn giải phóng bản thân khỏi mặc cảm tự ti: Bạn không bị đóng đinh bởi bất kỳ tính cách trừu tượng nào trong quá khứ. Bạn chính là những gì bạn tạo dựng qua các mối quan hệ và hành động cống hiến cho xã hội!',
        philosophicalLens: 'Luận đề thứ 6 về Phoi-ơ-bắc của C.Mác: Con người là một thực thể sinh học - xã hội, trong đó mặt xã hội giữ vai trò quyết định bản chất. Con người vừa là chủ thể, vừa là sản phẩm của lịch sử.'
      },
      {
        id: 'B',
        text: 'Bản chất con người là bẩm sinh di truyền không bao giờ có thể thay đổi được.',
        isDialectical: false,
        consequence: 'Bạn biến con người thành một cỗ máy sinh học vô hồn, tước đoạt toàn bộ năng lực tự giáo dục và chuyển hóa xã hội.',
        philosophicalLens: 'Quan điểm này rơi vào chủ nghĩa tự nhiên siêu hình hoặc định mệnh luận tôn giáo.'
      },
      {
        id: 'C',
        text: 'Con người tốt nhất nên sống cô độc trên hoang đảo như Robinson Crusoe thì bản chất mới thuần khiết.',
        isDialectical: false,
        consequence: 'Bạn quên rằng Robinson Crusoe vẫn phải mang theo công cụ, ngôn ngữ và kinh nghiệm xã hội thì mới sinh tồn được trên hoang đảo.',
        philosophicalLens: 'Tách khỏi xã hội, con người không thể trở thành người theo đúng nghĩa đầy đủ.'
      },
      {
        id: 'D',
        text: 'Bản chất con người chỉ được quyết định bởi số tiền trong tài khoản ngân hàng.',
        isDialectical: false,
        consequence: 'Bạn biến con người thành vật phẩm hàng hóa thuần túy, phủ nhận các giá trị đạo đức, tình cảm và tinh thần cao quý.',
        philosophicalLens: 'Mác kịch liệt phê phán sự tha hóa con người khi mọi phẩm giá bị quy giảm thành tiền tệ trong chủ nghĩa tư bản.'
      }
    ],
    explanation: 'Triết học Mác – Lênin giải quyết triệt để vấn đề con người: Con người là một thực thể thống nhất giữa mặt sinh vật và mặt xã hội. Trong Luận đề thứ 6 về Phoi-ơ-bắc, C.Mác khẳng định: "Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội". Thông qua hoạt động thực tiễn lao động và giao tiếp xã hội, con người vừa biến đổi thế giới, vừa tự biến đổi chính bản thân mình.',
    coreLesson: 'Đừng ngồi một chỗ để tự vấn "Mình là ai?". Hãy bước ra ngoài, kết nối chân thành với mọi người, cống hiến sức trẻ cho cộng đồng và lao động sáng tạo. Trong dòng chảy sống động của các mối quan hệ xã hội, bạn sẽ tìm thấy phiên bản rực rỡ nhất của chính mình!',
    dimensionScores: { connection: 30, contradiction: 20, objective: 25, practice: 30, depth: 30 }
  }
];
