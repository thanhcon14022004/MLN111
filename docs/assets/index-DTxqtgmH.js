(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))h(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&h(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function h(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();const C=[{id:"C1-Q001",chapter:1,module:"1.1",topic:"Triết học là gì & Nguồn gốc triết học",philosophyConcept:"Nguồn gốc nhận thức và nguồn gốc xã hội của triết học",difficulty:"easy",image:"./assets/images/chapter1/intro-philosophy.svg",title:"Đêm ngắm sao và những trăn trở về tồn tại",situation:'Vào một đêm cắm trại xa thành phố, Nam – sinh viên năm nhất – nhìn lên bầu trời ngàn sao và tự hỏi: "Vũ trụ này từ đâu mà có? Vì sao con người lại tồn tại trên Trái Đất này? Mình sinh ra để làm gì và tương lai sẽ đi về đâu?". Đây không phải là bài toán giải tích hay công thức vật lý, mà là cảm giác kinh ngạc sâu xa trước tự nhiên và xã hội.',question:"Theo triết học Mác – Lênin, nguồn gốc sâu xa dẫn đến sự ra đời của những suy tư triết học trên là gì?",options:[{id:"A",text:"Chỉ do trí tưởng tượng phong phú và sự rảnh rỗi của một số cá nhân đặc biệt trong xã hội.",isDialectical:!1,consequence:"Bạn xem triết học như một thú vui viển vông, tách rời khỏi nhu cầu sinh tồn và cải tạo thế giới của loài người.",philosophicalLens:"Quan điểm này rơi vào chủ nghĩa chủ quan, coi triết học là sản phẩm tư biện tách rời thực tiễn vật chất."},{id:"B",text:"Xuất phát từ nguồn gốc nhận thức (nhu cầu khái quát thế giới quan) và nguồn gốc xã hội (phân công lao động, trí thức xuất hiện).",isDialectical:!0,consequence:"Bạn hiểu rằng triết học sinh ra từ chính thực tiễn sinh tồn: con người cần hệ thống hóa nhận thức về thế giới khi xã hội có sự phân công lao động trí óc và chân tay.",philosophicalLens:"Chuẩn xác theo MLN111: Triết học ra đời khi tư duy con người đạt trình độ trừu tượng hóa (nhận thức) và xã hội xuất hiện của cải dư thừa, phân chia giai cấp (xã hội)."},{id:"C",text:"Do các đấng thần linh cài đặt sẵn vào tâm trí con người từ khi sinh ra.",isDialectical:!1,consequence:"Bạn phó thác nguồn gốc tư duy con người cho siêu nhiên, từ bỏ năng lực nhận thức duy vật khoa học.",philosophicalLens:"Đây là thế giới quan duy tâm khách quan thần bí, trái ngược hoàn toàn với triết học Mác – Lênin."},{id:"D",text:"Triết học chỉ là sự sao chép nguyên xi lại các định lý của khoa học tự nhiên cụ thể.",isDialectical:!1,consequence:"Bạn đồng nhất triết học với các khoa học cụ thể, làm mất đi vai trò khái quát thế giới quan và phương pháp luận chung nhất.",philosophicalLens:"Khoa học cụ thể nghiên cứu từng lĩnh vực riêng biệt, còn triết học nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy."}],explanation:"Triết học Mác – Lênin khẳng định triết học chỉ ra đời khi hội tụ đủ 2 nguồn gốc: Nguồn gốc nhận thức (con người đạt năng lực trừu tượng hóa, khái quát hóa để giải thích thế giới thành hệ thống) và Nguồn gốc xã hội (nền sản xuất phát triển dẫn tới phân công lao động, lao động trí óc tách khỏi lao động chân tay, chế độ tư hữu và giai cấp xuất hiện).",coreLesson:"Những câu hỏi lớn về cuộc sống không phải vô bổ, mà là nhu cầu tự nhiên của con người để xây dựng kim chỉ nam (thế giới quan) dẫn đường cho hành động.",dimensionScores:{connection:15,contradiction:10,objective:20,practice:15,depth:20}},{id:"C1-Q002",chapter:1,module:"1.2",topic:"Vấn đề cơ bản của triết học",philosophyConcept:"Bản thể luận: Vật chất & Ý thức - Mối quan hệ giữa tư duy và tồn tại",difficulty:"medium",image:"./assets/images/chapter1/basic-question.svg",title:"Trí tuệ nhân tạo (AI) và câu hỏi về bản chất tư duy",situation:'Khi thảo luận về các mô hình ngôn ngữ lớn (LLM) và AI tạo sinh, nhóm bạn tranh cãi gay gắt: Tuấn cho rằng "Ý thức và tư duy chỉ là phần mềm vô hình, tồn tại độc lập với bộ não hay máy chủ". Trong khi đó, Lan phản bác: "Ý thức không thể tồn tại nếu không có bộ não người bằng xương thịt cùng sự tương tác với thế giới vật chất bên ngoài".',question:'Cuộc tranh luận của Tuấn và Lan đang chạm trực tiếp vào mặt nào của "Vấn đề cơ bản của triết học"?',options:[{id:"A",text:"Mặt thứ hai: Con người có thể nhận thức được thế giới hay không (Khả tri luận).",isDialectical:!1,consequence:'Bạn nhầm lẫn giữa vấn đề "nhận thức được hay không" với vấn đề "nguồn gốc và cái nào có trước giữa vật chất và ý thức".',philosophicalLens:"Mặt thứ hai trả lời câu hỏi: Tư duy của con người có thể phản ánh đúng hiện thực khách quan hay không."},{id:"B",text:"Mặt thứ nhất (Bản thể luận): Giữa vật chất và ý thức, cái nào có trước, cái nào có sau, cái nào quyết định cái nào?",isDialectical:!0,consequence:"Bạn xác định chính xác nền tảng căn bản nhất: Giải quyết mối quan hệ giữa tư duy và tồn tại là tiêu chí phân định Chủ nghĩa duy vật và Chủ nghĩa duy tâm.",philosophicalLens:"Theo Ăngghen: Vấn đề cơ bản lớn của mọi triết học, đặc biệt là triết học hiện đại, là vấn đề quan hệ giữa tư duy và tồn tại (giữa ý thức và vật chất)."},{id:"C",text:"Chỉ là sự bất đồng ngôn ngữ giao tiếp đời thường, không liên quan đến triết học.",isDialectical:!1,consequence:"Bạn bỏ lỡ cơ hội nhận diện triết học đang ẩn mình ngay trong các cuộc tranh luận công nghệ hiện đại nhất.",philosophicalLens:"Mọi câu hỏi về trí tuệ, ý thức máy tính đều bắt rễ sâu sắc từ vấn đề cơ bản của triết học."},{id:"D",text:"Vấn đề quy luật giá trị và kinh tế thị trường.",isDialectical:!1,consequence:"Bạn chuyển nhầm sang phạm trù kinh tế chính trị thay vì triết học cơ bản.",philosophicalLens:"Đây là nội dung của Kinh tế chính trị Mác - Lênin, không phải vấn đề bản thể luận của triết học."}],explanation:"Vấn đề cơ bản của triết học gồm 2 mặt: Mặt thứ nhất (Bản thể luận) trả lời: Vật chất và ý thức, cái nào có trước, cái nào sinh ra cái nào? Chủ nghĩa duy vật khẳng định vật chất có trước quyết định ý thức. Mặt thứ hai (Nhận thức luận) trả lời: Con người có khả năng nhận thức thế giới không?",coreLesson:"Muốn giải quyết bất kỳ hiện tượng mới nào (như AI, thế giới ảo), hãy bắt đầu từ câu hỏi nền tảng: Điều kiện vật chất khách quan nào đã sản sinh ra nó?",dimensionScores:{connection:10,contradiction:15,objective:20,practice:15,depth:20}},{id:"C1-Q003",chapter:1,module:"1.3",topic:"Chủ nghĩa duy vật vs Chủ nghĩa duy tâm",philosophyConcept:"Thế giới quan duy vật biện chứng vs Duy tâm trong đời sống",difficulty:"medium",image:"./assets/images/chapter1/destiny-choice.svg",title:"Điểm số và quẻ bói đầu kỳ",situation:'Trước kỳ thi quan trọng, Mai lo lắng đi xem bói tarot. Thầy bói phán: "Kỳ này số em vướng sao xấu, dù học thế nào cũng chỉ đạt điểm C hoặc trượt". Mai rơi vào hoang mang, tin rằng mọi thứ do số mệnh tiền định nên bỏ bê ôn tập, nằm nhà lướt mạng chờ "số phận an bài".',question:"Thái độ và hành vi của Mai thể hiện lập trường triết học nào và hệ quả thực tiễn ra sao?",options:[{id:"A",text:"Duy tâm khách quan: Tin vào lực lượng siêu nhiên vô hình định đoạt, dẫn đến thụ động, buông xuôi và thất bại tất yếu.",isDialectical:!0,consequence:"Bạn vạch trần được sự mê tín: tin vào số mệnh hư ảo đã hủy hoại chính hành động thực tế ôn luyện của Mai.",philosophicalLens:"Duy tâm khách quan coi ý niệm, số phận, thượng đế là thứ có trước và quyết định thế giới vật chất, ru ngủ ý chí đấu tranh cải tạo đời sống."},{id:"B",text:"Duy vật biện chứng: Tôn trọng hoàn cảnh tâm lý khách quan của bản thân.",isDialectical:!1,consequence:"Bạn hiểu sai bản chất duy vật: Duy vật biện chứng đòi hỏi nhìn vào thực tế năng lực và hành động tích lũy kiến thức, chứ không dựa vào bói toán.",philosophicalLens:"Duy vật không chấp nhận bất kỳ thế lực số mệnh siêu nhiên nào chi phối số phận con người."},{id:"C",text:"Duy tâm chủ quan: Coi cảm giác cá nhân là tất cả.",isDialectical:!1,consequence:"Chưa chính xác: Mai đang tin vào một thế lực số mệnh bên ngoài chi phối (Duy tâm khách quan), chứ không phải tin rằng bản thân tạo ra thế giới.",philosophicalLens:"Duy tâm chủ quan cho rằng cảm giác, ý thức của cá nhân sinh ra vạn vật; còn duy tâm khách quan gán quyền năng cho một thực thể bên ngoài (số phận, thần linh)."},{id:"D",text:"Là cách giải tỏa stress khoa học nhất nên khuyến khích nhân rộng.",isDialectical:!1,consequence:"Bạn biến sự mê tín thành giải pháp khoa học, gây hại cho kết quả học tập và tinh thần tự chủ.",philosophicalLens:"Khoa học chỉ ra rằng điểm số là kết quả tất nhiên của quá trình tích lũy kiến thức và phương pháp ôn luyện thực tế."}],explanation:'Chủ nghĩa duy tâm khách quan thừa nhận sự tồn tại của thế giới hiện thực nhưng coi nguồn gốc của nó là một "ý niệm tuyệt đối", "thần linh" hay "số mệnh". Trong đời sống, tư tưởng định mệnh khiến con người thụ động, buông xuôi, trông chờ may rủi thay vì hành động thực tiễn cải tạo hoàn cảnh.',coreLesson:'Không có "số phận" nào quyết định điểm số hay tương lai bạn ngoài quá trình bạn hành động và tích lũy tri thức trong thực tế khách quan.',dimensionScores:{connection:10,contradiction:15,objective:20,practice:20,depth:15}},{id:"C1-Q004",chapter:1,module:"1.4",topic:"Phương pháp Biện chứng vs Phương pháp Siêu hình",philosophyConcept:"Phương pháp tư duy biện chứng: Xem xét sự vật trong vận động, biến đổi và liên hệ",difficulty:"medium",image:"./assets/images/chapter1/dialectics-metaphysics.svg",title:'Chiếc nhãn "Học sinh cá biệt"',situation:'Thời cấp 3, Hoàng từng ham chơi và có một kỳ học bạ bị xếp loại yếu. Khi lên đại học, Hoàng quyết tâm thay đổi, ngày đêm học tập và tích cực tham gia nghiên cứu. Tuy nhiên, một số bạn học cũ khi gặp lại vẫn bảo: "Bản chất thằng đấy từ xưa đã lười biếng, có cố mấy cũng chỉ là màu mè diễn xuất thôi!".',question:"Cách đánh giá của những người bạn cũ phản ánh phương pháp tư duy nào?",options:[{id:"A",text:"Phương pháp siêu hình: Nhìn con người cô lập, xơ cứng, bất biến, coi quá khứ là bản chất vĩnh viễn không thể thay đổi.",isDialectical:!0,consequence:"Bạn nhận rõ hạn chế chết người của lối nghĩ siêu hình: chụp mũ, định kiến, không chịu thấy con người luôn vận động và phát triển.",philosophicalLens:"Phương pháp siêu hình xem xét sự vật trong trạng thái cô lập, tĩnh tại, chỉ thấy cây mà không thấy rừng, đồng nhất trạng thái tạm thời với bản chất vĩnh viễn."},{id:"B",text:"Phương pháp biện chứng: Nhìn nhận thực tế khách quan một cách sắc sảo.",isDialectical:!1,consequence:"Bạn nhầm định kiến với tư duy biện chứng. Biện chứng phải thấy sự vật luôn vận động và chuyển hóa không ngừng.",philosophicalLens:"Tư duy biện chứng đòi hỏi đặt sự vật trong dòng chảy biến đổi liên tục, thấy được xu hướng phát triển cái mới tiến bộ."},{id:"C",text:"Phương pháp phân tích tâm lý học lâm sàng hiện đại.",isDialectical:!1,consequence:"Bạn gán mác chuyên môn cho một thói quen tư duy bảo thủ, phiến diện.",philosophicalLens:"Đây là thói quen tư duy siêu hình thông thường trong đời sống, không phải phương pháp khoa học."},{id:"D",text:"Phương pháp phủ định sạch trơn quá khứ.",isDialectical:!1,consequence:"Họ không phủ định quá khứ, ngược lại họ đang tôn sùng quá khứ để áp đặt lên hiện tại.",philosophicalLens:"Những người bạn cũ đang đóng băng hiện thực quá khứ lên hiện tại, đó là biểu hiện điển hình của phương pháp siêu hình."}],explanation:"Phương pháp biện chứng xem xét sự vật trong mối liên hệ ràng buộc, trong sự vận động, biến đổi và phát triển không ngừng; còn phương pháp siêu hình xem xét sự vật trong trạng thái cô lập, tĩnh tại, bất biến. Con người là thực thể đang phát triển, không thể dùng một sai lầm trong quá khứ để đóng đinh tương lai.",coreLesson:"Đừng bao giờ phán xét một con người hay sự việc bằng cái nhìn tĩnh tại, siêu hình. Mọi thứ đều đang vận động và có tiềm năng chuyển hóa mạnh mẽ.",dimensionScores:{connection:20,contradiction:15,objective:15,practice:15,depth:20}},{id:"C1-Q005",chapter:1,module:"1.5",topic:"Triết học Mác – Lênin và vai trò",philosophyConcept:"Thế giới quan khoa học và phương pháp luận cách mạng của triết học Mác - Lênin",difficulty:"hard",image:"./assets/images/chapter1/marxist-role.svg",title:"Khủng hoảng định hướng của sinh viên Gen Z",situation:'Giữa thời đại bùng nổ thông tin mạng, trào lưu "kiếm tiền nhanh", áp lực "peer pressure" và nỗi sợ bị AI thay thế, nhiều bạn trẻ cảm thấy mất phương hướng, hoang mang không biết tin vào điều gì. Minh tự hỏi: "Học triết học Mác – Lênin thời nay có thực sự giúp ích gì cho cuộc sống và nghề nghiệp tương lai của mình không?".',question:"Vai trò cốt lõi nhất của Triết học Mác – Lênin đối với con người trong xã hội hiện đại là gì?",options:[{id:"A",text:"Cung cấp các công thức kiếm tiền và mánh khóe làm giàu cấp tốc.",isDialectical:!1,consequence:"Bạn biến triết học thành cẩm nang kỹ năng làm giàu bề nổi, hạ thấp bản chất khoa học của triết học.",philosophicalLens:"Triết học không phải khoa học kỹ thuật cụ thể hay cẩm nang kiếm tiền vi mô."},{id:"B",text:'Là thế giới quan khoa học và phương pháp luận cách mạng, trang bị "lăng kính" đúng đắn để định hướng hành động và tư duy độc lập.',isDialectical:!0,consequence:"Bạn nắm giữ vũ khí tư duy tối thượng: Không bị dẫn dắt bởi thông tin giả, biết nhìn thấu bản chất vấn đề và kiên định trước biến động xã hội.",philosophicalLens:"Triết học Mác - Lênin trang bị thế giới quan duy vật biện chứng và phương pháp luận biện chứng duy vật - kim chỉ nam định hướng con người trong hoạt động nhận thức và thực tiễn."},{id:"C",text:"Chỉ là một môn học điều kiện để qua môn tốt nghiệp đại học, không có giá trị thực tiễn.",isDialectical:!1,consequence:"Bạn tự tước đi năng lực tư duy phản biện tầng sâu, dễ bị thao túng bởi các hiện tượng tâm lý đám đông bề nổi.",philosophicalLens:'Mác từng nói: "Các nhà triết học chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là cải tạo thế giới".'},{id:"D",text:"Thay thế toàn bộ kiến thức của tất cả các chuyên ngành khoa học tự nhiên và xã hội khác.",isDialectical:!1,consequence:'Bạn rơi vào sai lầm coi triết học là "khoa học của mọi khoa học" như thời cổ đại/trung cổ.',philosophicalLens:"Triết học Mác – Lênin không thay thế khoa học cụ thể, mà gắn bó hữu cơ và đóng vai trò phương pháp luận soi đường cho khoa học cụ thể."}],explanation:"Triết học Mác – Lênin đóng vai trò là thế giới quan khoa học và phương pháp luận cách mạng chung nhất cho hoạt động nhận thức và cải tạo thế giới. Nó giúp người học thoát khỏi sự mê muội giáo điều, nhìn thấy quy luật khách quan của xã hội, rèn luyện tư duy phản biện sắc bén và vững vàng trước mọi thách thức thời đại.",coreLesson:'Học triết học không phải học thuộc chữ nghĩa, mà là rèn luyện "bộ vi xử lý não bộ" để nhìn thấu quy luật vận động của chính cuộc sống.',dimensionScores:{connection:20,contradiction:20,objective:20,practice:20,depth:20}},{id:"C2-M1-Q001",chapter:2,module:"2.1",topic:"Vật chất và ý thức",philosophyConcept:"Điều kiện vật chất khách quan quyết định ý thức & Chống chủ quan duy ý chí",difficulty:"medium",image:"./assets/images/chapter2/material-consciousness.svg",title:"Ước mơ GPA 4.0 và ca làm thêm 8 tiếng",situation:'An là sinh viên năm ba có hoàn cảnh gia đình khó khăn. Để trang trải học phí và tiền trọ đắt đỏ, An phải làm ca đêm tại cửa hàng tiện lợi 8 tiếng/ngày. Tuy nhiên, An đặt mục tiêu học kỳ này phải đạt GPA tuyệt đối 4.0 và giật học bổng loại Xuất sắc bằng cách "chỉ ngủ 2 tiếng mỗi đêm và dùng ý chí để vượt qua cơn buồn ngủ". Sau 3 tuần, An kiệt sức nhập viện và trượt bài kiểm tra giữa kỳ.',question:"Sai lầm căn bản của An theo quan điểm triết học Mác – Lênin là gì?",options:[{id:"A",text:"Chưa đủ nỗ lực, cần uống thêm nước tăng lực để ý chí tiếp tục chiến thắng cơ thể.",isDialectical:!1,consequence:"Bạn tiếp tục đẩy cơ thể vào nguy hiểm tính mạng, mù quáng coi thường giới hạn sinh học vật chất.",philosophicalLens:"Cực đoan coi ý chí tinh thần có thể bất chấp quy luật vật lý/sinh học là bệnh chủ quan duy ý chí nặng nề."},{id:"B",text:"Mắc bệnh chủ quan duy ý chí: Tuyệt đối hóa sức mạnh ý thức, bất chấp điều kiện vật chất khách quan (sức khỏe sinh học, giới hạn thời gian 24h).",isDialectical:!0,consequence:"Bạn thức tỉnh nhận ra: Muốn thành công, ý chí phải dựa trên việc phân bổ thời gian khoa học, chọn lọc môn học và bảo vệ sức khỏe vật chất.",philosophicalLens:"Vật chất quyết định ý thức: Điều kiện sinh học, dinh dưỡng, thời gian là tiền đề vật chất khách quan. Mọi ý chí xa rời điều kiện vật chất tất yếu dẫn đến thất bại cay đắng."},{id:"C",text:"Đáng lẽ nên bỏ học hoàn toàn để đi làm kiếm tiền cho chắc ăn.",isDialectical:!1,consequence:"Bạn rơi vào thái cực đối lập: thụ động, đầu hàng hoàn cảnh vật chất, dập tắt hoàn toàn năng lực phấn đấu của ý thức.",philosophicalLens:"Đây là chủ nghĩa duy vật máy móc tầm thường, phủ nhận tính năng động sáng tạo của ý thức con người."},{id:"D",text:"Do nhà trường ra đề thi quá khó và không có lòng trắc ẩn với sinh viên nghèo.",isDialectical:!1,consequence:"Bạn đổ lỗi cho hoàn cảnh bên ngoài thay vì tự nhìn nhận chiến lược hành động phi khoa học của bản thân.",philosophicalLens:"Đổ lỗi bên ngoài phản ánh thói quen né tránh nhận thức quy luật khách quan và tự thân điều chỉnh."}],explanation:"Theo triết học Mác – Lênin, vật chất quyết định ý thức: nguồn gốc, nội dung và bản chất của ý thức đều do thế giới vật chất quy định. Bệnh chủ quan duy ý chí xuất hiện khi con người hành động xuất phát từ mong muốn chủ quan phi thực tế, ảo tưởng rằng ý chí có thể vượt qua mọi quy luật khách quan mà không cần điều kiện vật chất bảo đảm.",coreLesson:"Mọi ước mơ vĩ đại đều phải bắt đầu từ việc tôn trọng điều kiện khách quan: sức khỏe, thời gian và năng lực thực tế. Hãy xuất phát từ hiện thực khách quan trước khi cất cánh!",dimensionScores:{connection:15,contradiction:20,objective:25,practice:15,depth:15}},{id:"C2-M1-Q002",chapter:2,module:"2.1",topic:"Vật chất và ý thức",philosophyConcept:"Tính năng động sáng tạo và sự tác động trở lại của ý thức đối với vật chất",difficulty:"medium",image:"./assets/images/chapter2/subjective-dynamism.svg",title:"Cải tạo nghịch cảnh bằng tư duy sáng tạo",situation:"Cùng ở trong hoàn cảnh phải đi làm thêm kiếm sống như An, nhưng Bình lại chọn cách tiếp cận khác: Bình ngồi rà soát lại quỹ thời gian, tìm một công việc làm thêm liên quan trực tiếp đến ngành học (viết nội dung kỹ thuật số), học cách ghi chép phương pháp Pomodoro và lập nhóm ôn tập cùng bạn bè. Bình vừa có tiền sinh hoạt, vừa duy trì học lực giỏi.",question:"Hành động của Bình minh họa cho nguyên lý triết học nào?",options:[{id:"A",text:"Tôn trọng khách quan đồng thời phát huy tối đa tính năng động chủ quan của ý thức thông qua hoạt động thực tiễn có tổ chức.",isDialectical:!0,consequence:"Bạn chứng kiến sức mạnh đích thực của triết học Mác: Ý thức đúng đắn khi biến thành kế hoạch thực tiễn sẽ trở thành lực lượng vật chất cải tạo hoàn cảnh sống.",philosophicalLens:"Ý thức không tự biến đổi thế giới trực tiếp, nhưng thông qua hoạt động thực tiễn của con người, ý thức định hướng, tổ chức và cải tạo hiện thực vật chất."},{id:"B",text:"Vật chất không còn vai trò gì, chỉ cần ý chí thông minh là đủ.",isDialectical:!1,consequence:"Bạn lại quay về bẫy duy tâm, quên rằng Bình vẫn phải dựa trên việc phân bổ giờ làm và sinh hoạt thực tế.",philosophicalLens:"Ý thức chỉ phát huy tác dụng khi tuân thủ và vận dụng các quy luật vật chất khách quan."},{id:"C",text:"Hoàn toàn do Bình may mắn gặp được công việc nhàn hạ hơn người khác.",isDialectical:!1,consequence:"Bạn quy kết mọi thành quả của sự tư duy sáng tạo về yếu tố may rủi ngẫu nhiên.",philosophicalLens:"Cơ hội chỉ đến và biến thành kết quả khi có sự chủ động chuẩn bị và tư duy định hướng từ trước."},{id:"D",text:"Bình không cần học triết học vẫn làm được nên triết học không có ý nghĩa.",isDialectical:!1,consequence:"Bạn không nhận ra rằng Bình đang vô thức vận dụng đúng đắn phép biện chứng duy vật vào cuộc sống.",philosophicalLens:"Dù con người có ý thức được hay không, các quy luật biện chứng vẫn chi phối mọi hoạt động đời sống."}],explanation:"Triết học Mác – Lênin khẳng định: Ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua hoạt động thực tiễn của con người. Ý thức đúng đắn sẽ phản ánh đúng quy luật khách quan, từ đó định hướng hành động hiệu quả, biến tri thức thành sức mạnh vật chất cải tạo thực tại.",coreLesson:"Không thể thay đổi hoàn cảnh bằng than vãn hay ảo tưởng. Hãy dùng trí tuệ để hiểu rõ quy luật và lập kế hoạch hành động cải tạo hoàn cảnh từng bước một.",dimensionScores:{connection:15,contradiction:15,objective:20,practice:25,depth:15}},{id:"C2-M2-Q001",chapter:2,module:"2.2",topic:"Hai nguyên lý của phép biện chứng duy vật",philosophyConcept:"Nguyên lý về mối liên hệ phổ biến và quan điểm toàn diện",difficulty:"medium",image:"./assets/images/chapter2/universal-connection.svg",title:"Vì sao bài thi bị điểm kém?",situation:'Khi nhận kết quả bài kiểm tra giữa kỳ bị điểm D, giảng viên gọi Minh lên và mắng gay gắt: "Cậu bị điểm kém chỉ vì cậu là kẻ lười biếng, không có tư chất học đại học!". Nhưng trong thực tế, tuần trước thi Minh bị sốt cao, phòng trọ bên cạnh liên tục hát karaoke ầm ĩ khiến cậu mất ngủ, và phương pháp ôn tập của Minh thiên về học vẹt thay vì giải quyết vấn đề.',question:"Lời phán xét của giảng viên đã vi phạm nguyên tắc phương pháp luận nào của phép biện chứng duy vật?",options:[{id:"A",text:"Vi phạm quan điểm toàn diện, rơi vào cách nhìn phiến diện, quy chụp một nguyên nhân duy nhất và bỏ qua vô vàn mối liên hệ khách quan tác động đến kết quả.",isDialectical:!0,consequence:"Bạn học được cách phân tích vấn đề theo hệ thống: Để đánh giá đúng một sự việc hay con người, phải đặt họ trong tổng thể các mối liên hệ qua lại.",philosophicalLens:"Nguyên lý mối liên hệ phổ biến đòi hỏi: Khi xem xét sự vật phải có quan điểm toàn diện, xem xét tất cả các mặt, các mối liên hệ nội tại và bên ngoài, tránh cái nhìn một chiều, phiến diện."},{id:"B",text:"Hoàn toàn đúng đắn vì người làm việc lớn không được phép đổ lỗi cho bất kỳ yếu tố nào.",isDialectical:!1,consequence:"Bạn cổ súy cho lối tư duy võ đoán, phiến diện, triệt tiêu động lực tìm giải pháp cải thiện của người học.",philosophicalLens:"Tư duy cực đoan bỏ qua hoàn cảnh thực tế là biểu hiện của phương pháp siêu hình thô thiển."},{id:"C",text:"Vi phạm quy luật phủ định của phủ định.",isDialectical:!1,consequence:"Bạn dùng sai phạm trù: Vấn đề ở đây là cách nhìn nhận các mối liên hệ xung quanh sự kiện, không phải chu kỳ phát triển phủ định.",philosophicalLens:"Đây là bài học trực tiếp từ nguyên lý về mối liên hệ phổ biến và quan điểm toàn diện."},{id:"D",text:"Giảng viên đã áp dụng chính xác phương pháp lịch sử - cụ thể.",isDialectical:!1,consequence:"Ngược lại hoàn toàn: Giảng viên đã bỏ qua bối cảnh lịch sử - cụ thể (bị sốt, ồn ào, phương pháp) để chụp mũ bản chất.",philosophicalLens:"Quan điểm lịch sử - cụ thể đòi hỏi xem xét sự vật trong điều kiện, hoàn cảnh và thời gian cụ thể của nó."}],explanation:"Nguyên lý về mối liên hệ phổ biến chỉ ra rằng không có sự vật, hiện tượng nào tồn tại cô lập. Mọi sự vật đều nằm trong mối liên hệ ràng buộc, tác động qua lại với các sự vật khác. Từ nguyên lý này rút ra quan điểm toàn diện và quan điểm lịch sử - cụ thể: muốn nhận thức đúng sự vật phải xem xét các mối liên hệ của nó, phân biệt liên hệ bên trong và bên ngoài, trực tiếp và gián tiếp.",coreLesson:"Khi đối mặt với một thất bại hay khó khăn, đừng phiến diện tự trách móc một chiều. Hãy vẽ ra toàn bộ mạng lưới các mối liên hệ để tháo gỡ từng nút thắt.",dimensionScores:{connection:25,contradiction:15,objective:20,practice:15,depth:15}},{id:"C2-M2-Q002",chapter:2,module:"2.2",topic:"Hai nguyên lý của phép biện chứng duy vật",philosophyConcept:"Nguyên lý về sự phát triển và quan điểm phát triển",difficulty:"hard",image:"./assets/images/chapter2/development-spiral.svg",title:"Hành trình vượt dốc của thủ khoa từng trượt môn",situation:"Khi bước chân vào trường đại học, Khang từng bị sốc văn hóa học tập và trượt môn Lập trình cơ bản. Thay vì tuyệt vọng bỏ cuộc, Khang nhìn nhận môn học trượt đó như một tín hiệu cảnh báo rằng phương pháp học thuộc lòng thụ động của cấp 3 đã hoàn toàn lỗi thời. Khang tái cấu trúc toàn diện cách học: tự xây dự án thực tế, hỏi đáp cùng cộng đồng lập trình và đến năm thứ 4 trở thành thủ khoa tốt nghiệp.",question:'Nhận thức và hành động của Khang thể hiện nội dung căn bản nào của "Nguyên lý về sự phát triển"?',options:[{id:"A",text:"Phát triển là đường thẳng tắp, ai từng thất bại thì mãi mãi không thể phát triển.",isDialectical:!1,consequence:"Bạn đồng nhất thất bại tạm thời với sự chấm dứt phát triển, rơi vào bi quan siêu hình.",philosophicalLens:"Phép siêu hình coi phát triển chỉ là sự tăng giảm thuần túy về số lượng theo đường thẳng."},{id:"B",text:"Phát triển là quá trình đi lên quanh co, phức tạp theo đường xoắn ốc; thất bại là mắt xích tất yếu để bộc lộ mâu thuẫn, từ đó kế thừa cái tích cực và tạo ra bước tiến mới ở trình độ cao hơn.",isDialectical:!0,consequence:"Bạn có được tâm thế vững như bàn thạch: Thất bại hôm nay không phải dấu chấm hết, mà là dưỡng chất cần thiết cho bước nhảy vọt ngày mai.",philosophicalLens:"Phát triển theo quan điểm biện chứng là quá trình tự thân vận động đi lên, từ thấp đến cao, không diễn ra theo đường thẳng mà quanh co, có thụt lùi tạm thời nhưng khuynh hướng chung là tiến bộ."},{id:"C",text:"Phát triển là việc xóa bỏ hoàn toàn tất cả những gì thuộc về quá khứ mà không cần kế thừa.",isDialectical:!1,consequence:"Bạn rơi vào phủ định siêu hình (phủ định sạch trơn), phủ nhận tính kế thừa của sự phát triển.",philosophicalLens:"Phát triển biện chứng luôn mang tính kế thừa: giữ lại, cải tạo các hạt nhân hợp lý của giai đoạn cũ."},{id:"D",text:"Thành công của Khang chứng minh năng khiếu bẩm sinh quyết định 100%.",isDialectical:!1,consequence:"Bạn phủ nhận toàn bộ quá trình biến đổi chất lượng và nỗ lực chuyển hóa phương pháp học của Khang.",philosophicalLens:"Năng khiếu chỉ là mầm mống khả năng, phát triển là kết quả của quá trình giải quyết mâu thuẫn trong thực tiễn."}],explanation:"Nguyên lý về sự phát triển khẳng định: Mọi sự vật hiện tượng đều vận động theo khuynh hướng đi lên, cái mới ra đời thay thế cái cũ, cái tiến bộ thay thế cái lạc hậu. Quá trình phát triển không diễn ra theo một đường thẳng tắp phẳng lặng mà diễn ra quanh co, phức tạp, bao hàm cả những bước thụt lùi tạm thời (đường xoắn ốc).",coreLesson:"Đừng sợ thất bại tạm thời. Hãy coi khủng hoảng là tín hiệu báo rằng mô hình cũ đã hết hạn sử dụng và đã đến lúc bạn phải nâng cấp bản thân lên một tầm cao mới.",dimensionScores:{connection:20,contradiction:20,objective:15,practice:20,depth:25}},{id:"C2-M3-SLIDER",chapter:2,module:"2.3",topic:"Ba quy luật cơ bản của phép biện chứng",philosophyConcept:"Quy luật chuyển hóa từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",difficulty:"medium",image:"./assets/images/chapter2/quantity-quality.svg",title:"Phòng thí nghiệm Lượng – Chất: Bí mật của 100 giờ rèn luyện",type:"slider",situation:'Khi bạn bắt đầu học một kỹ năng mới (như Lập trình, Ngoại ngữ, hay Kỹ năng thuyết trình), trong 20-30 giờ đầu tiên, bạn cảm thấy rất bối rối, làm gì cũng vấp váp, điểm số không nhích lên bao nhiêu và có cảm giác mình "dậm chân tại chỗ". Nhiều người bỏ cuộc ở giai đoạn này vì nghĩ mình không có năng khiếu. Nhưng triết học Mác – Lênin chỉ ra một quy luật vũ trụ đang âm thầm vận hành dưới bề mặt!',question:"Kéo thanh trượt từ 0 đến 100 giờ tích lũy rèn luyện để quan sát ranh giới giữa LƯỢNG (số giờ học) và CHẤT (năng lực kỹ năng) biến đổi như thế nào:",sliderConfig:{min:0,max:100,step:5,default:25,nodePoint:80,measureRange:[0,80],labels:{0:"0h (Khởi đầu)",40:"40h (Trong giới hạn Độ)",80:"80h (Điểm nút)",100:"100h (Bước nhảy vọt)"}},options:[{id:"A",text:"Nóng vội muốn giỏi ngay sau 5 giờ, nếu không thấy tiến bộ thì lập tức bỏ cuộc (Bệnh tả khuynh, đốt cháy giai đoạn).",isDialectical:!1,consequence:"Bạn cả đời mãi là người mới bắt đầu: chưa đủ lượng đã đòi đổi chất, luôn thất vọng và bỏ dở giữa chừng.",philosophicalLens:"Tả khuynh: Muốn thực hiện bước nhảy khi lượng chưa tích lũy đến điểm nút, dẫn đến phá vỡ sự vật."},{id:"B",text:'Kiên trì tích lũy về lượng trong phạm vi "Độ", khi lượng đạt tới "Điểm nút" thì dũng cảm thực hiện "Bước nhảy" để biến đổi căn bản về "Chất".',isDialectical:!0,consequence:"Bạn thấu hiểu nghệ thuật của sự kiên nhẫn vĩ đại: 80 giờ tích lũy âm thầm là điều kiện không thể thiếu để tạo nên bước nhảy thăng hoa ngoạn mục!",philosophicalLens:"Quy luật Lượng - Chất: Chất là tính quy định khách quan vốn có, lượng là tính quy định về số lượng, quy mô. Sự tích lũy dần dần về lượng trong giới hạn độ khi đạt tới điểm nút sẽ dẫn tới bước nhảy, làm chất cũ mất đi, chất mới ra đời."},{id:"C",text:"Cứ học vô định hình mãi mãi không cần kiểm tra, không cần thi cử, không cần bứt phá (Bệnh hữu khuynh, bảo thủ trì trệ).",isDialectical:!1,consequence:"Bạn tích lũy lượng mãi mà không dám đối mặt với bài thi hay dự án thực tế, khiến tri thức bị thui chột.",philosophicalLens:"Hữu khuynh: Lượng đã tích lũy đủ tới điểm nút nhưng không dám thực hiện bước nhảy, duy trì chất cũ lạc hậu."}],explanation:"Quy luật chỉ ra cách thức của sự vận động và phát triển: Mọi sự vật đều là sự thống nhất giữa chất và lượng. Độ là khoảng giới hạn mà trong đó sự thay đổi về lượng chưa làm thay đổi căn bản về chất. Điểm nút là giới hạn mà tại đó sự tích lũy về lượng đủ để làm thay đổi về chất. Bước nhảy là giai đoạn chuyển hóa căn bản về chất do sự tích lũy về lượng trước đó mang lại.",coreLesson:'Đừng nản lòng khi thấy mình nỗ lực mà kết quả chưa hiển hiện ngay. Bạn đang ở trong "Độ". Hãy kiên trì tích lũy đủ lượng, "Điểm nút" và "Bước nhảy" chất lượng chắc chắn sẽ đến!',dimensionScores:{connection:15,contradiction:20,objective:25,practice:20,depth:25}},{id:"C2-M3-Q002",chapter:2,module:"2.3",topic:"Ba quy luật cơ bản của phép biện chứng",philosophyConcept:"Quy luật thống nhất và đấu tranh của các mặt đối lập (Quy luật mâu thuẫn - Hạt nhân của phép biện chứng)",difficulty:"hard",image:"./assets/images/chapter2/contradiction-study-work.svg",title:"Nghịch lý: Muốn vừa học sâu vừa muốn kiếm tiền",situation:"Hoàng đứng trước mâu thuẫn gay gắt: Để có chuyên môn sâu, Hoàng cần dành trọn thời gian nghiên cứu và đọc tài liệu; nhưng để không trở thành gánh nặng của bố mẹ và có tiền sinh hoạt, Hoàng cần đi làm part-time. Hai nhu cầu này liên tục giằng xé thời gian và năng lượng của Hoàng, như hai mặt đối lập trong một cơ thể.",question:"Triết học Mác – Lênin chỉ ra cách thức giải quyết mâu thuẫn trên như thế nào để tạo động lực phát triển?",options:[{id:"A",text:"Né tránh mâu thuẫn bằng cách buông xuôi cả hai, nằm nhà chơi game cho đỡ đau đầu.",isDialectical:!1,consequence:"Bạn tiêu diệt chính động lực sinh tồn và phát triển của bản thân, rơi vào bế tắc thoái hóa.",philosophicalLens:"Mâu thuẫn là khách quan và phổ biến, không thể né tránh. Không giải quyết mâu thuẫn sẽ dẫn tới tiêu vong."},{id:"B",text:"Nhận diện hai mặt đối lập vừa thống nhất (cùng phục vụ mục tiêu trưởng thành tự lập) vừa đấu tranh (tranh chấp thời gian), tìm cách giải quyết mâu thuẫn bằng giải pháp biện chứng (tìm việc gắn với chuyên môn, quản trị thời gian tối ưu).",isDialectical:!0,consequence:"Bạn biến áp lực thành động lực: Chính mâu thuẫn giữa kiếm sống và học vấn đã tôi luyện bạn thành người có khả năng thích ứng cao, vừa có nghề vừa vững lý luận.",philosophicalLens:"Quy luật mâu thuẫn là hạt nhân của phép biện chứng: Sự thống nhất và đấu tranh của các mặt đối lập là nguồn gốc và động lực bên trong của mọi sự vận động và phát triển."},{id:"C",text:"Thủ tiêu vĩnh viễn một mặt: Đi vay nặng lãi để học không cần làm, hoặc bỏ học hẳn để làm công nhân.",isDialectical:!1,consequence:"Bạn chọn giải pháp cực đoan phiến diện, chặt đứt một chân khiến cấu trúc phát triển mất cân bằng nghiêm trọng.",philosophicalLens:"Giải quyết mâu thuẫn không phải là thủ tiêu một mặt một cách cơ học thô bạo, mà là chuyển hóa các mặt đối lập thông qua đấu tranh biện chứng."},{id:"D",text:"Ngồi cầu nguyện mong cho học phí tự giảm và tiền tự rơi xuống từ trên trời.",isDialectical:!1,consequence:"Bạn rơi vào mê tín hoang đường, chối bỏ năng lực hành động tự thân của con người.",philosophicalLens:"Nguồn gốc của sự phát triển là tự thân vận động từ mâu thuẫn nội tại, không do lực lượng siêu nhiên bên ngoài ban phát."}],explanation:"Quy luật mâu thuẫn vạch ra nguồn gốc và động lực của sự phát triển: Mọi sự vật đều chứa đựng các mặt đối lập vừa nương tựa nhau (thống nhất) vừa bài trừ, gạt bỏ nhau (đấu tranh). Sự đấu tranh giữa các mặt đối lập đến một giới hạn nhất định sẽ giải quyết mâu thuẫn cũ, xác lập thể thống nhất mới, đưa sự vật lên trình độ cao hơn.",coreLesson:"Mâu thuẫn và áp lực không phải là điều xấu. Đừng sợ hãi mâu thuẫn, vì chính mâu thuẫn là động cơ đốt trong thúc đẩy bạn bứt phá khỏi vùng an toàn để trưởng thành!",dimensionScores:{connection:20,contradiction:30,objective:20,practice:20,depth:25}},{id:"C2-M3-Q003",chapter:2,module:"2.3",topic:"Ba quy luật cơ bản của phép biện chứng",philosophyConcept:"Quy luật phủ định của phủ định và khuynh hướng phát triển theo đường xoắn ốc",difficulty:"hard",image:"./assets/images/chapter2/negation-of-negation.svg",title:"Chu kỳ lột xác của một lập trình viên",situation:"Khi mới học lập trình web, Lâm chỉ biết copy-paste code mẫu trên mạng để chạy được giao diện (Giai đoạn A - Khẳng định). Khi đi phỏng vấn thực tập, Lâm bị hỏi sâu về cấu trúc dữ liệu và trượt thảm hại, nhận ra lối làm ẩu đó hoàn toàn vô dụng (Giai đoạn B - Phủ định lần 1). Lâm vứt bỏ toàn bộ thói quen cũ, cặm cụi học lại từ gốc rễ thuật toán, kết hợp những kinh nghiệm thực chiến đã có để viết nên phần mềm chuẩn mực, tinh gọn (Giai đoạn C - Phủ định của phủ định).",question:"Quá trình biến đổi từ giai đoạn A qua B đến C của Lâm minh họa cho quy luật triết học nào?",options:[{id:"A",text:"Quy luật phủ định của phủ định: Phát triển qua các lần phủ định biện chứng, cái mới ra đời dường như quay lại cái cũ nhưng ở trình độ cao hơn theo đường xoắn ốc.",isDialectical:!0,consequence:"Bạn nhận diện được quy luật vận động cao nhất của tri thức: Giai đoạn C Lâm vẫn viết code thực tế như A, nhưng giờ đây là code có nền tảng lý luận sâu sắc và tư duy kiến trúc vững vàng.",philosophicalLens:"Phủ định biện chứng có 2 đặc trưng cơ bản: Tính khách quan và tính kế thừa. Phủ định của phủ định kết thúc một chu kỳ phát triển, mở ra chu kỳ tiếp theo ở trình độ cao hơn."},{id:"B",text:"Chỉ là sự lặp lại vòng tròn luẩn quẩn vô nghĩa, cuối cùng Lâm vẫn chỉ là người gõ code như ngày đầu.",isDialectical:!1,consequence:"Bạn nhầm lẫn giữa chu kỳ xoắn ốc đi lên với vòng tròn luẩn quẩn bế tắc của tư duy siêu hình.",philosophicalLens:"Phát triển biện chứng không phải vòng tròn khép kín, mà là đường xoắn ốc kế thừa và tích hợp các giá trị tinh hoa."},{id:"C",text:"Phủ định siêu hình: Xóa sạch toàn bộ những gì Lâm từng biết từ đầu.",isDialectical:!1,consequence:"Sai bản chất: Lâm không xóa bỏ kinh nghiệm thực chiến, mà chỉ phủ định lối copy mù quáng và giữ lại sự nhạy bén với sản phẩm.",philosophicalLens:"Phủ định siêu hình là sự can thiệp từ bên ngoài làm chấm dứt sự phát triển, không có tính kế thừa."},{id:"D",text:"Do Lâm đổi phong thủy bàn làm việc và gặp may.",isDialectical:!1,consequence:"Một lần nữa bạn rơi vào mê tín thay vì nhìn thấy quy luật nội tại của sự tự hoàn thiện năng lực.",philosophicalLens:"Sự phát triển của tư duy là quá trình giải quyết mâu thuẫn và phủ định biện chứng có quy luật."}],explanation:"Quy luật phủ định của phủ định vạch ra khuynh hướng của sự phát triển: Sự vật vận động không theo đường thẳng hay vòng tròn khép kín, mà theo đường xoắn ốc. Qua hai lần phủ định cơ bản (Khẳng định -> Phủ định lần 1 -> Phủ định của phủ định), sự vật dường như quay trở lại điểm xuất phát ban đầu nhưng trên cơ sở mới, cao hơn về chất lượng và kế thừa toàn bộ tinh hoa.",coreLesson:"Mỗi lần vấp ngã và phải đập đi xây lại không phải là ta về con số 0. Ta đang bắt đầu lại từ một nấc thang cao hơn với bề dày kinh nghiệm và trí tuệ vượt trội.",dimensionScores:{connection:20,contradiction:25,objective:20,practice:20,depth:30}},{id:"C2-M4-Q001",chapter:2,module:"2.4",topic:"Sáu cặp phạm trù của phép biện chứng",philosophyConcept:"Cái riêng và Cái chung",difficulty:"medium",image:"./assets/images/chapter2/individual-general.svg",title:"Cá tính Gen Z và chuẩn mực tốt nghiệp",situation:'Nam tự hào mình là một cá nhân độc nhất vô nhị, có sở thích và phong cách riêng biệt. Khi nhà trường yêu cầu thực hiện chuẩn đầu ra về tiếng Anh và kỹ năng làm việc nhóm, Nam bất mãn nói: "Tôi là một cá tính riêng, không ai có quyền ép tôi theo các chuẩn mực chung của xã hội!".',question:'Sai lầm trong nhận thức của Nam về cặp phạm trù "Cái riêng và Cái chung" là gì?',options:[{id:"A",text:"Tách rời cái riêng khỏi cái chung, tuyệt đối hóa cái riêng mà không thấy rằng cái chung tồn tại trong cái riêng và quy định bản chất cái riêng.",isDialectical:!0,consequence:"Bạn hiểu rằng: Một cá nhân dù độc đáo đến đâu (Cái riêng) vẫn phải sống, lao động và chia sẻ những quy luật, chuẩn mực chung của nhân loại (Cái chung) để tồn tại và phát triển.",philosophicalLens:"Cái riêng chỉ tồn tại trong mối liên hệ với cái chung; không có cái riêng nào tồn tại tuyệt đối biệt lập với cái chung. Ngược lại, cái chung chỉ tồn tại trong cái riêng, biểu hiện thông qua cái riêng."},{id:"B",text:"Nam hoàn toàn đúng, trong thời đại 4.0 con người không cần bất kỳ tiêu chuẩn chung nào.",isDialectical:!1,consequence:"Bạn cổ súy cho chủ nghĩa cá nhân vị kỷ cực đoan, dẫn đến sự cô lập và đào thải khỏi thị trường lao động.",philosophicalLens:"Chủ nghĩa cá nhân cực đoan vi phạm mối quan hệ hữu cơ giữa cá nhân và xã hội."},{id:"C",text:"Xã hội nên xóa bỏ toàn bộ cá tính của từng sinh viên để tạo ra một tập thể đồng nhất 100%.",isDialectical:!1,consequence:"Bạn rơi vào chủ nghĩa giáo điều bình quân, thủ tiêu sự phong phú của cái đơn nhất và cái riêng.",philosophicalLens:"Cái chung phong phú chính nhờ sự đa dạng sinh động của vô số cái riêng."},{id:"D",text:"Cái riêng sinh ra cái chung và cái chung không có tác động gì đến cái riêng.",isDialectical:!1,consequence:"Bạn đảo lộn mối quan hệ biện chứng giữa hai phạm trù.",philosophicalLens:"Cái chung phản ánh những mặt, những thuộc tính lặp lại trong nhiều cái riêng, đóng vai trò bản chất hơn."}],explanation:"Cái riêng là phạm trù triết học dùng để chỉ một sự vật, một hiện tượng nhất định; Cái chung là phạm trù dùng để chỉ những mặt, những thuộc tính không những có ở một sự vật mà còn lặp lại trong nhiều sự vật khác. Mối quan hệ biện chứng: Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng; cái riêng chỉ tồn tại trong mối liên hệ đưa đến cái chung. Bất cứ cái riêng nào cũng bao hàm cái chung.",coreLesson:"Hãy giữ gìn bản sắc độc đáo của bạn (cái riêng), nhưng đừng bao giờ từ chối trang bị những nền tảng tri thức và kỹ năng phổ quát của nhân loại (cái chung).",dimensionScores:{connection:25,contradiction:15,objective:20,practice:15,depth:20}},{id:"C2-M4-Q002",chapter:2,module:"2.4",topic:"Sáu cặp phạm trù của phép biện chứng",philosophyConcept:"Nguyên nhân và Kết quả",difficulty:"medium",image:"./assets/images/chapter2/cause-effect.svg",title:"Hiệu ứng Domino: Thức đêm, lướt điện thoại và trượt môn",situation:'Việt thường xuyên thức đến 3-4 giờ sáng để lướt TikTok và chơi game. Sáng hôm sau lên giảng đường, Việt ngủ gật, không tiếp thu được bài giảng. Về nhà, Việt không làm bài tập vì "không hiểu gì". Đến kỳ thi, Việt làm bài trượt và than thở: "Kỳ này sao mình đen đủi thế, bài thi rơi đúng vào phần mình không học!".',question:'Dưới lăng kính cặp phạm trù "Nguyên nhân và Kết quả", bạn nhận định thế nào về lời than của Việt?',options:[{id:"A",text:"Việt nói đúng, trượt môn chỉ là sự ngẫu nhiên đen đủi, không liên quan đến thói quen sinh hoạt.",isDialectical:!1,consequence:"Bạn dung dưỡng tư duy đổ lỗi cho số phận, khiến bản thân không bao giờ sửa đổi thói quen xấu.",philosophicalLens:"Phủ nhận mối liên hệ nhân quả khách quan là biểu hiện của thế giới quan duy tâm thần bí."},{id:"B",text:"Trượt môn là Kết quả tất yếu sinh ra từ một chuỗi Nguyên nhân cụ thể: Thức đêm -> Mệt mỏi -> Mất tập trung -> Không tích lũy kiến thức; không hề có sự ngẫu nhiên đen đủi ở đây.",isDialectical:!0,consequence:"Bạn nắm quyền kiểm soát cuộc đời mình: Muốn có Kết quả tốt (điểm cao, sức khỏe tốt), bạn phải gieo đúng những Nguyên nhân lành mạnh ngay từ hôm nay.",philosophicalLens:"Mối liên hệ nhân quả có tính khách quan, tính phổ biến và tính tất yếu. Một nguyên nhân có thể sinh ra một hoặc nhiều kết quả; nguyên nhân luôn có trước kết quả."},{id:"C",text:"Kết quả trượt môn là do bài thi sinh ra chứ không liên quan đến việc học trước đó.",isDialectical:!1,consequence:"Bạn biến bài thi (công cụ đo lường) thành nguyên nhân gốc rễ, nhầm lẫn giữa điều kiện và nguyên nhân.",philosophicalLens:"Bài thi chỉ là thước đo phản ánh kết quả của cả một quá trình tích lũy trước đó."},{id:"D",text:"Nguyên nhân và kết quả luôn hoàn toàn tách rời nhau và không thể chuyển hóa lẫn nhau.",isDialectical:!1,consequence:"Bạn nhìn nhận quan hệ nhân quả một cách siêu hình cứng nhắc.",philosophicalLens:"Trong sự vận động vô tận của thế giới, nguyên nhân và kết quả có thể đổi chỗ cho nhau: kết quả của quá trình này trở thành nguyên nhân của quá trình tiếp theo."}],explanation:"Nguyên nhân là phạm trù chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra những biến đổi nhất định; Kết quả là những biến đổi xuất hiện do nguyên nhân tạo ra. Mối quan hệ nhân quả có tính khách quan (không phụ thuộc vào ý muốn chủ quan), tính phổ biến (mọi hiện tượng đều có nguyên nhân) và tính tất yếu (cùng nguyên nhân trong cùng điều kiện sẽ sinh ra cùng kết quả).",coreLesson:'Cuộc đời không có điều gì là "tự dưng". Muốn gặt hái kết quả rực rỡ trong tương lai, hãy truy tìm và kiểm soát nghiêm ngặt những nguyên nhân hành động trong từng giờ phút hiện tại!',dimensionScores:{connection:20,contradiction:15,objective:25,practice:20,depth:20}},{id:"C2-M4-Q003",chapter:2,module:"2.4",topic:"Sáu cặp phạm trù của phép biện chứng",philosophyConcept:"Tất nhiên và Ngẫu nhiên",difficulty:"medium",image:"./assets/images/chapter2/necessity-chance.svg",title:"Học tủ và vận may phòng thi",situation:'Đức và Linh cùng bước vào kỳ thi cuối kỳ môn Triết học Mác – Lênin. Linh dành cả kỳ học đều đặn, hiểu bản chất các quy luật và làm bài tập tình huống đầy đủ. Đức lười học, chỉ chọn học vẹt đúng 2 câu tủ theo tin đồn trên mạng. Hôm thi, đề ra đúng vào 1 câu tủ của Đức khiến Đức đạt điểm 7. Đức đắc thắng: "Cần gì học cả kỳ cho mệt, chỉ cần học tủ là xong!".',question:'Theo cặp phạm trù "Tất nhiên và Ngẫu nhiên", bạn phân tích tương lai học tập của Đức và Linh ra sao?',options:[{id:"A",text:"Đức hoàn toàn đúng, ngẫu nhiên là con đường duy nhất quyết định mọi thành công.",isDialectical:!1,consequence:"Bạn đặt cược tương lai vào cờ bạc may rủi; chỉ cần đổi đề thi ở kỳ sau, bạn sẽ lập tức nhận điểm F.",philosophicalLens:"Dựa dẫm vào ngẫu nhiên là cách tư duy tự sát của kẻ yếu đuối chối bỏ quy luật khách quan."},{id:"B",text:"Điểm 7 của Đức là Ngẫu nhiên (chớp nhoáng, không bền vững); sự vững vàng của Linh là Tất nhiên (bắt nguồn từ bản chất quá trình học). Trong dài hạn, cái tất nhiên sẽ vạch đường đi qua vô số cái ngẫu nhiên.",isDialectical:!0,consequence:"Bạn giữ vững lập trường khoa học: Linh sẽ thành công bền vững trong sự nghiệp vì nắm chắc cái Tất nhiên; còn Đức nếu tiếp tục ỷ lại vào ngẫu nhiên sẽ sớm trả giá đắt.",philosophicalLens:"Cái tất nhiên bắt nguồn từ nguyên nhân bên trong, chi phối sự phát triển của sự vật; cái ngẫu nhiên bắt nguồn từ các mối liên hệ bên ngoài. Trong hoạt động thực tiễn phải căn cứ vào cái tất nhiên chứ không thể dựa vào cái ngẫu nhiên."},{id:"C",text:"Tất nhiên và ngẫu nhiên là hai đường thẳng song song không bao giờ gặp nhau.",isDialectical:!1,consequence:"Bạn chia cắt siêu hình giữa tất nhiên và ngẫu nhiên.",philosophicalLens:"Cái tất nhiên vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên; ngẫu nhiên là hình thức biểu hiện của tất nhiên."},{id:"D",text:"Không có cái tất nhiên nào tồn tại trên đời, vạn vật đều là ngẫu nhiên hỗn loạn.",isDialectical:!1,consequence:"Bạn rơi vào thuyết hoài nghi và bất khả tri luận.",philosophicalLens:"Khoa học phát triển chính là nhờ việc tìm ra cái tất nhiên (quy luật) ẩn sau những hiện tượng ngẫu nhiên."}],explanation:"Cái tất nhiên là cái do những nguyên nhân cơ bản bên trong của kết cấu vật chất quyết định và trong những điều kiện nhất định nó phải xảy ra như thế chứ không thể khác được; Cái ngẫu nhiên là cái không do mối liên hệ bản chất bên trong quyết định mà do các mối liên hệ bên ngoài, nó có thể xuất hiện hoặc không xuất hiện. Bài học phương pháp luận: Phải dựa vào cái tất nhiên, không được dựa vào cái ngẫu nhiên nhưng cũng không được xem nhẹ cái ngẫu nhiên.",coreLesson:"May mắn (ngẫu nhiên) có thể cứu bạn một kỳ thi, nhưng chỉ có năng lực thực chất (tất nhiên) mới cứu được cả sự nghiệp của bạn. Hãy xây dựng tương lai trên nền đá của cái tất nhiên!",dimensionScores:{connection:20,contradiction:20,objective:25,practice:20,depth:20}},{id:"C2-M4-Q004",chapter:2,module:"2.4",topic:"Sáu cặp phạm trù của phép biện chứng",philosophyConcept:"Nội dung và Hình thức",difficulty:"medium",image:"./assets/images/chapter2/content-form.svg",title:"Slide thuyết trình triệu view nhưng rỗng ruột",situation:"Trong buổi báo cáo đồ án môn học, nhóm của Tuấn chuẩn bị một bộ slide cực kỳ bắt mắt với hiệu ứng 3D, video cinematic sống động và âm thanh hoành tráng. Tuy nhiên, khi giảng viên và các bạn hỏi sâu vào mô hình kinh doanh, số liệu tài chính và phương pháp nghiên cứu thì nhóm ấp úng, không trả lời được gì vì nội dung sơ sài, chép trên mạng.",question:'Bài học triết học nào được rút ra từ cặp phạm trù "Nội dung và Hình thức" cho nhóm của Tuấn?',options:[{id:"A",text:"Nội dung quyết định hình thức, nhưng hình thức có tính độc lập tương đối và tác động trở lại nội dung. Một hình thức lộng lẫy không thể cứu vãn một nội dung rỗng tuếch.",isDialectical:!0,consequence:"Bạn nắm vững bí quyết của sự chuyên nghiệp: Trước tiên phải đầu tư công phu cho chất lượng nội dung cốt lõi, sau đó dùng hình thức mạch lạc, chuẩn mực để tôn vinh nội dung.",philosophicalLens:"Nội dung là tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật; Hình thức là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nội dung. Nội dung giữ vai trò quyết định đối với hình thức."},{id:"B",text:"Hình thức là tất cả, thời đại ngày nay chỉ cần làm slide đẹp là auto đạt điểm A.",isDialectical:!1,consequence:"Bạn rơi vào chủ nghĩa hình thức nông cạn, sớm muộn sẽ bị phơi bày sự thiếu hụt năng lực cốt lõi khi đi làm thực tế.",philosophicalLens:"Bệnh hình thức là sự vi phạm nghiêm trọng nguyên lý duy vật biện chứng về vai trò quyết định của nội dung."},{id:"C",text:"Nội dung quan trọng nên không cần quan tâm đến hình thức, cứ để slide trắng đen chữ rối rắm là tốt nhất.",isDialectical:!1,consequence:"Bạn coi thường hình thức, khiến người xem khó tiếp thu dù nội dung có hay đến đâu.",philosophicalLens:"Hình thức không phù hợp sẽ kìm hãm, cản trở sự phát triển và truyền tải của nội dung."},{id:"D",text:"Nội dung và hình thức không có mối liên hệ nào với nhau.",isDialectical:!1,consequence:"Bạn chia cắt siêu hình hai mặt thống nhất của cùng một sự vật.",philosophicalLens:"Không có hình thức nào không chứa đựng nội dung, và không có nội dung nào không tồn tại trong một hình thức nhất định."}],explanation:"Nội dung và hình thức luôn gắn bó khăng khít với nhau trong một thể thống nhất. Nội dung quyết định hình thức: nội dung biến đổi thì sớm muộn hình thức cũng phải biến đổi theo. Hình thức có tính độc lập tương đối và tác động trở lại nội dung: nếu hình thức phù hợp với nội dung thì sẽ thúc đẩy nội dung phát triển; nếu không phù hợp thì kìm hãm.",coreLesson:'Đừng bao giờ xây lâu đài cát bằng hình thức bóng bẩy bên ngoài khi bên trong rỗng tuếch. Hãy tôi luyện "nội công" tri thức vững chắc rồi thể hiện ra bằng hình thức tinh tế, chuẩn mực.',dimensionScores:{connection:20,contradiction:20,objective:20,practice:20,depth:20}},{id:"C2-M4-Q005",chapter:2,module:"2.4",topic:"Sáu cặp phạm trù của phép biện chứng",philosophyConcept:"Bản chất và Hiện tượng",difficulty:"hard",image:"./assets/images/chapter2/essence-phenomenon.svg",title:"Tảng băng trôi: Đi học đủ 100% nhưng vẫn trượt môn",situation:'Thầy chủ nhiệm nhận được bảng điểm của Quân: Điểm danh chuyên cần 100%, không vắng buổi nào nhưng điểm thi cuối kỳ chỉ đạt 2.5/10. Thầy ngạc nhiên vì "trông em đi học rất chăm chỉ". Khi quan sát kỹ ở các buổi học sau, thầy nhận ra: Quân ngồi bàn cuối, mắt nhìn lên bảng nhưng tay bấm điện thoại dưới gầm bàn, tai đeo tai nghe giấu trong tóc, hoàn toàn không suy nghĩ hay ghi chép gì.',question:'Hãy dùng cặp phạm trù "Bản chất và Hiện tượng" để giải thích sự mâu thuẫn này:',options:[{id:"A",text:"Hiện tượng có mặt đầy đủ chỉ là vỏ bọc bên ngoài; Bản chất thực sự là thái độ học tập thụ động, lơ là. Hiện tượng có thể phản ánh sai lệch hoặc xuyên tạc bản chất.",isDialectical:!0,consequence:"Bạn trang bị cho mình đôi mắt thần thấu suốt: Không bị đánh lừa bởi những hành vi đối phó bề mặt, luôn nhìn thẳng vào bản chất vận động bên dưới.",philosophicalLens:"Bản chất là tổng hợp tất cả những mặt, những mối liên hệ tất nhiên tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật; Hiện tượng là sự biểu hiện của những mặt, những mối liên hệ đó ra bên ngoài. Bản chất và hiện tượng thống nhất nhưng cũng mâu thuẫn: Hiện tượng không biểu hiện nguyên xi bản chất mà biểu hiện dưới hình thức đã biến đổi."},{id:"B",text:"Quân đi học đủ tức là Quân thông minh, giảng viên chấm điểm sai.",isDialectical:!1,consequence:"Bạn đồng nhất thô thiển hiện tượng có mặt vật lý với bản chất tiếp thu tri thức của não bộ.",philosophicalLens:"Dừng lại ở hiện tượng bề ngoài mà không đi sâu vào bản chất là biểu hiện của tư duy ấu trĩ cảm tính."},{id:"C",text:"Bản chất và hiện tượng luôn đồng nhất tuyệt đối 100%, thấy sao là vậy.",isDialectical:!1,consequence:"Nếu bản chất và hiện tượng trùng khít nhau thì mọi khoa học trên đời đều trở nên thừa thãi.",philosophicalLens:'Mác từng nói: "Nếu hình thái biểu hiện và bản chất của sự vật trực tiếp đồng nhất với nhau, thì mọi khoa học sẽ trở nên thừa".'},{id:"D",text:"Điểm số chỉ là một hiện tượng hư ảo do ý thức giảng viên tự nghĩ ra.",isDialectical:!1,consequence:"Bạn chối bỏ hiện thực khách quan bằng lối ngụy biện duy tâm.",philosophicalLens:"Điểm số phản ánh khách quan mức độ nắm vững bản chất tri thức của người học."}],explanation:"Bản chất và hiện tượng vừa thống nhất vừa đối lập: Thống nhất ở chỗ bản chất luôn bộc lộ qua hiện tượng, hiện tượng nào cũng là sự biểu hiện của bản chất; Đối lập ở chỗ bản chất là cái bên trong, sâu sắc, tương đối ổn định, còn hiện tượng là cái bên ngoài, phong phú, dễ biến đổi. Đặc biệt, có những hiện tượng xuyên tạc bản chất (giả tượng). Nhiệm vụ của khoa học và tư duy là phải bóc tách hiện tượng để tìm ra bản chất.",coreLesson:'Đừng tự lừa dối bản thân bằng "sự chăm chỉ giả tạo" bề ngoài. Ngồi 10 tiếng trước bàn học mà tâm trí phiêu bạt thì bản chất vẫn là con số 0. Hãy học thật từ bản chất!',dimensionScores:{connection:20,contradiction:25,objective:25,practice:20,depth:30}},{id:"C2-M4-Q006",chapter:2,module:"2.4",topic:"Sáu cặp phạm trù của phép biện chứng",philosophyConcept:"Khả năng và Hiện thực",difficulty:"medium",image:"./assets/images/chapter2/possibility-reality.svg",title:"Hạt mầm Startup trên giấy và Cây đại thụ thương trường",situation:'Long có một ý tưởng phần mềm kết nối sinh viên thuê trọ rất tiềm năng. Long say sưa thuyết trình với mọi người và tuyên bố: "Tôi đã là triệu phú tương lai, dự án này chắc chắn thành công rực rỡ!". Nhưng sau 6 tháng, Long không hề viết dòng code nào, không khảo sát người dùng thực tế và cũng không tìm kiếm nhà đầu tư. Dự án vẫn chỉ là một file PowerPoint nằm im trong máy tính.',question:'Sai lầm phương pháp luận của Long dưới góc nhìn cặp phạm trù "Khả năng và Hiện thực" là gì?',options:[{id:"A",text:'Đồng nhất "Khả năng" với "Hiện thực". Khả năng chỉ là cái chưa có nhưng có thể xuất hiện khi có đủ điều kiện khách quan và nỗ lực chủ quan thông qua hoạt động thực tiễn.',isDialectical:!0,consequence:"Bạn thoát khỏi căn bệnh ảo tưởng: Ý tưởng hay chỉ là khả năng ở vạch xuất phát; muốn biến thành hiện thực phải đổ mồ hôi, hội tụ nguồn lực và hành động bền bỉ.",philosophicalLens:"Khả năng là cái hiện chưa có nhưng sẽ có khi có các điều kiện thích hợp; Hiện thực là cái đang có, đang tồn tại thực sự. Trong hoạt động thực tiễn phải dựa vào hiện thực, không được dựa vào khả năng; nhưng cũng phải thấy trước khả năng để định hướng hoạt động."},{id:"B",text:"Long làm đúng vì chỉ cần có ý tưởng hay là tiền sẽ tự động sinh sôi nảy nở.",isDialectical:!1,consequence:"Bạn biến ý tưởng thành cây đũa phép thần thông, chối bỏ hoàn toàn hoạt động lao động sản xuất thực tiễn.",philosophicalLens:"Khả năng không tự động biến thành hiện thực nếu thiếu đi hoạt động thực tiễn có mục đích của con người."},{id:"C",text:"Khả năng và hiện thực không thể chuyển hóa lẫn nhau trong bất kỳ trường hợp nào.",isDialectical:!1,consequence:"Bạn nhìn nhận sự vật tĩnh tại siêu hình, phủ nhận khả năng phát triển của cái mới.",philosophicalLens:"Trong điều kiện thích hợp, khả năng sẽ chuyển hóa thành hiện thực, và hiện thực mới lại mở ra những khả năng mới."},{id:"D",text:"Do thị trường bất động sản suy thoái nên ý tưởng của Long mới không thành hiện thực.",isDialectical:!1,consequence:"Bạn đổ lỗi cho yếu tố xa xôi trong khi nguyên nhân trực tiếp là Long chưa hề bắt tay vào hành động.",philosophicalLens:"Phải phân biệt khả năng tất nhiên và ngẫu nhiên, khả năng thực tế và khả năng trừu tượng."}],explanation:"Hiện thực là phạm trù chỉ những cái đang có, đang tồn tại thực sự trong thực tế; Khả năng là phạm trù chỉ những cái chưa có, nhưng sẽ có, sẽ tới khi có các điều kiện tương ứng. Để biến khả năng thành hiện thực, con người phải phát huy tính năng động chủ quan, tạo ra các điều kiện cần và đủ thông qua hoạt động thực tiễn.",coreLesson:"Ý tưởng triệu đô mà không hành động thì giá trị bằng 0. Đừng tự mãn với những khả năng trên giấy. Hãy bắt tay vào hành động để biến khả năng thành hiện thực sống động!",dimensionScores:{connection:20,contradiction:20,objective:25,practice:30,depth:20}},{id:"C2-M5-Q001",chapter:2,module:"2.5",topic:"Lý luận nhận thức biện chứng duy vật",philosophyConcept:"Con đường biện chứng của sự nhận thức: Từ nhận thức cảm tính đến nhận thức lý tính",difficulty:"medium",image:"./assets/images/chapter2/sensory-rational.svg",title:"Ấn tượng ngày đầu và chân dung thật sự",situation:'Ngày đầu tiên đi làm thực tập, Thảo nhìn thấy người quản lý trực tiếp có khuôn mặt nghiêm nghị, ít cười và nói giọng lạnh tanh. Thảo nghĩ thầm: "Bà này chắc chắn là người độc đoán, khó tính và ghét mình" (Cảm tính). Tuy nhiên sau 3 tháng làm việc, qua quan sát cách người quản lý kiên nhẫn sửa từng lỗi trong báo cáo, luôn đứng ra bảo vệ quyền lợi nhóm và chia sẻ kinh nghiệm quý báu, Thảo hiểu rằng đây là một người lãnh đạo cực kỳ tận tâm và trách nhiệm (Lý tính).',question:"Trải nghiệm nhận thức của Thảo phản ánh quy luật nhận thức nào của triết học Mác – Lênin?",options:[{id:"A",text:"Nhận thức chỉ cần dừng lại ở cảm giác ban đầu là đã đủ chính xác.",isDialectical:!1,consequence:"Bạn sẽ trở thành nạn nhân của định kiến bề ngoài và cảm xúc nhất thời, đánh mất những mối quan hệ quý giá.",philosophicalLens:"Nhận thức cảm tính chỉ phản ánh các thuộc tính bề ngoài của sự vật, chưa nắm được bản chất bên trong."},{id:"B",text:"Con đường nhận thức đi từ trực quan sinh động (nhận thức cảm tính: cảm giác, tri giác) đến tư duy trừu tượng (nhận thức lý tính: khái niệm, phán đoán, suy luận) và kiểm chứng qua thực tiễn.",isDialectical:!0,consequence:"Bạn sở hữu năng lực thấu hiểu sâu sắc: Không vội vàng phán xét qua vẻ bề ngoài, luôn dùng tư duy logic và kiểm chứng thực tế để nhận diện chân giá trị.",philosophicalLens:'Theo Lênin: "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn - đó là con đường biện chứng của sự nhận thức chân lý, của sự nhận thức hiện thực khách quan".'},{id:"C",text:"Nhận thức lý tính hoàn toàn tách rời và không cần bất kỳ dữ liệu nào từ nhận thức cảm tính.",isDialectical:!1,consequence:"Bạn rơi vào chủ nghĩa duy lý cực đoan, biến tư duy thành những suy diễn viển vông không có thực tế nuôi dưỡng.",philosophicalLens:"Nhận thức lý tính phải dựa trên cơ sở tài liệu do nhận thức cảm tính cung cấp; không có cảm giác thì không có nhận thức."},{id:"D",text:"Cảm giác và lý tính là hai thế giới đối kháng triệt tiêu nhau.",isDialectical:!1,consequence:"Bạn chia cắt biện chứng giữa hai giai đoạn của cùng một quá trình nhận thức thống nhất.",philosophicalLens:"Cảm tính và lý tính là hai giai đoạn thống nhất, liên hệ mật thiết, bổ sung cho nhau trong quá trình nhận thức."}],explanation:"Quá trình nhận thức của con người trải qua hai giai đoạn biện chứng: Nhận thức cảm tính (gồm cảm giác, tri giác, biểu tượng) phản ánh trực tiếp, cụ thể các thuộc tính bề ngoài của sự vật; Nhận thức lý tính (gồm khái niệm, phán đoán, suy luận) phản ánh gián tiếp, khái quát các mối liên hệ bản chất bên trong của sự vật. Cả hai giai đoạn đều bắt nguồn từ thực tiễn và quay trở về chỉ đạo thực tiễn.",coreLesson:"Đừng vội tin vào ấn tượng ban đầu (cảm tính). Hãy lắng lại, quan sát nhiều chiều và dùng tư duy phân tích (lý tính) kết hợp trải nghiệm thực tế để thấu suốt bản chất một con người hay sự việc.",dimensionScores:{connection:20,contradiction:20,objective:25,practice:25,depth:25}},{id:"C2-M5-Q002",chapter:2,module:"2.5",topic:"Lý luận nhận thức biện chứng duy vật",philosophyConcept:"Thực tiễn là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn của chân lý",difficulty:"hard",image:"./assets/images/chapter2/practice-truth.svg",title:"Đọc 100 cuốn sách bơi lội và khoảnh khắc nhảy xuống nước",situation:"Hùng mua về hơn 10 cuốn sách chuyên sâu về kỹ thuật bơi lội, thuộc lòng từng góc độ quạt tay, nhịp thở và lực đạp chân. Hùng tin chắc mình đã là bậc thầy bơi lội. Nhưng khi ra bể bơi và nhảy xuống làn nước sâu 2 mét, Hùng lập tức bị sặc nước, tay chân hoảng loạn chìm nghỉm nếu không có nhân viên cứu hộ kéo lên.",question:'Tình huống hài hước nhưng sâu sắc của Hùng khẳng định luận điểm triết học Mác – Lênin nào về "Thực tiễn"?',options:[{id:"A",text:"Sách vở là vô ích, không nên đọc sách nữa.",isDialectical:!1,consequence:"Bạn rơi vào chủ nghĩa kinh nghiệm mù quáng, phủ nhận hoàn toàn vai trò của tri thức lý luận.",philosophicalLens:"Lý luận không có thực tiễn là lý luận suông, nhưng thực tiễn không có lý luận chỉ đạo là thực tiễn mù quáng."},{id:"B",text:"Thực tiễn là tiêu chuẩn duy nhất của chân lý: Lý thuyết dù hay đến đâu chỉ được coi là chân lý khi được kiểm nghiệm, kiểm chứng thành công trong hoạt động thực tiễn.",isDialectical:!0,consequence:"Bạn trở thành người thực học - thực hành: Mọi kiến thức tiếp thu trên giảng đường đều phải được đem ra cọ xát với bài tập thực tế, dự án thực tế để biến thành năng lực thật sự.",philosophicalLens:"Thực tiễn là toàn bộ hoạt động vật chất - cảm tính, có tính lịch sử - xã hội của con người nhằm cải tạo tự nhiên và xã hội. Thực tiễn đóng vai trò là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý."},{id:"C",text:"Chân lý được quyết định bởi số đông: Nếu 1000 người cùng tin một điều thì điều đó tự động thành chân lý.",isDialectical:!1,consequence:"Bạn biến chân lý thành sự đồng thuận tâm lý số đông, mở đường cho những sai lầm tập thể.",philosophicalLens:"Chân lý có tính khách quan, không phụ thuộc vào số lượng người tin theo hay quyền lực áp đặt."},{id:"D",text:"Do nước ở bể bơi quá ướt và không đúng với công thức trong sách giáo khoa.",isDialectical:!1,consequence:"Bạn ngụy biện bảo vệ lý thuyết giáo điều xa rời hiện thực.",philosophicalLens:"Lý luận phải bám sát thực tiễn; khi lý luận mâu thuẫn với thực tiễn khách quan thì phải bổ sung, sửa đổi lý luận."}],explanation:"Thực tiễn là toàn bộ những hoạt động vật chất có mục đích, mang tính lịch sử – xã hội của con người nhằm cải tạo tự nhiên và xã hội. Vai trò của thực tiễn đối với nhận thức: 1. Là cơ sở, điểm xuất phát của nhận thức; 2. Là động lực thúc đẩy nhận thức phát triển; 3. Là mục đích cuối cùng của nhận thức (nhận thức để quay về chỉ đạo cải tạo thực tiễn); 4. Là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý.",coreLesson:'"Lý thuyết chỉ là màu xám xịt, chỉ cây đời mãi mãi xanh tươi". Hãy đem mọi tri thức bạn học được ra thực hành kiểm chứng trong cuộc sống. Đó là con đường duy nhất để chạm tới chân lý!',dimensionScores:{connection:20,contradiction:20,objective:25,practice:35,depth:25}},{id:"C3-M1-Q001",chapter:3,module:"3.1",topic:"Hình thái kinh tế – xã hội & Lực lượng sản xuất - Quan hệ sản xuất",philosophyConcept:"Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất",difficulty:"hard",image:"./assets/images/chapter3/production-relations.svg",title:"Cơn bão AI và cuộc khủng hoảng quy chế cũ",situation:"Một công ty thiết kế truyền thông đầu tư áp dụng các công cụ AI thế hệ mới (Midjourney, ChatGPT, Copilot). Nhờ công cụ mới, năng suất thiết kế tăng gấp 10 lần, nhân viên trẻ chỉ mất 2 tiếng để hoàn thành khối lượng công việc của cả tuần. Tuy nhiên, ban giám đốc công ty vẫn giữ nguyên quy chế từ 15 năm trước: Bắt nhân viên ngồi chấm công đủ 8 tiếng tại văn phòng, tính lương theo số trang in thủ công và cấm làm việc từ xa. Hệ quả: Những nhân sự tài năng nhất đồng loạt nộp đơn xin nghỉ việc.",question:"Mâu thuẫn trong công ty trên phản ánh quy luật kinh tế - xã hội cơ bản nào của Chủ nghĩa duy vật lịch sử?",options:[{id:"A",text:"Mâu thuẫn giữa Lực lượng sản xuất (công cụ AI, trình độ số hóa của người lao động) đã tiến bộ vượt bậc với Quan hệ sản xuất cũ kỹ (cách thức quản lý, chấm công, phân phối lạc hậu). Khi QHSX không còn phù hợp, nó kìm hãm LLSX và tất yếu đòi hỏi một cuộc cải tổ.",isDialectical:!0,consequence:"Bạn thấu suốt bản chất của mọi cuộc chuyển đổi số: Không chỉ là mua phần mềm mới, mà phải thay đổi cả mô hình quản trị và quan hệ con người cho tương thích với công nghệ mới.",philosophicalLens:"Lực lượng sản xuất là yếu tố động nhất, cách mạng nhất; Quan hệ sản xuất có tính tương đối ổn định. Khi LLSX phát triển đến một trình độ nhất định, QHSX cũ từ chỗ là hình thức phát triển của LLSX sẽ trở thành xiềng xích trói buộc LLSX, đòi hỏi phải được thay thế bằng QHSX mới phù hợp."},{id:"B",text:"Chỉ là do giới trẻ Gen Z ngày nay thiếu tính kiên nhẫn và không chịu nghe lời cấp trên.",isDialectical:!1,consequence:"Bạn nhìn nhận vấn đề một cách đạo đức hóa cá nhân, mù quáng trước quy luật khách quan của nền kinh tế.",philosophicalLens:"Chủ nghĩa duy vật lịch sử giải thích các biến động xã hội từ phương thức sản xuất vật chất, không quy kết cho tâm lý cá nhân đơn thuần."},{id:"C",text:"Nên cấm hoàn toàn AI để công ty quay lại thời kỳ vẽ tay cho yên bình.",isDialectical:!1,consequence:"Bạn kéo lùi bánh xe lịch sử, công ty sẽ nhanh chóng phá sản trước các đối thủ cạnh tranh hiện đại.",philosophicalLens:"Lực lượng sản xuất luôn vận động đi lên, nỗ lực kìm hãm công cụ lao động mới là hành động phản tiến bộ."},{id:"D",text:"Lực lượng sản xuất và quan hệ sản xuất là hai khái niệm không liên quan gì đến doanh nghiệp tư nhân.",isDialectical:!1,consequence:"Bạn tưởng triết học chỉ nói chuyện vĩ mô, không thấy quy luật này vận hành sống động trong từng tế bào doanh nghiệp.",philosophicalLens:"Mọi đơn vị sản xuất kinh doanh đều là hiện thân cụ thể của mối quan hệ giữa LLSX và QHSX."}],explanation:"Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất là quy luật phổ biến tác động trong toàn bộ lịch sử nhân loại. Lực lượng sản xuất quyết định sự hình thành, biến đổi và phát triển của quan hệ sản xuất. Ngược lại, quan hệ sản xuất tác động trở lại lực lượng sản xuất: nếu phù hợp sẽ thúc đẩy LLSX phát triển, nếu không phù hợp (lạc hậu hơn hoặc vượt trước giả tạo) sẽ kìm hãm, gây khủng hoảng.",coreLesson:"Khi công nghệ và năng lực con người (LLSX) đã nhảy vọt, mọi quy chế quản lý và cơ chế phân phối (QHSX) cứng nhắc cũ kỹ đều phải cải cách linh hoạt để mở đường cho sự phát triển.",dimensionScores:{connection:25,contradiction:30,objective:25,practice:25,depth:30}},{id:"C3-M2-Q001",chapter:3,module:"3.2",topic:"Tồn tại xã hội và Ý thức xã hội",philosophyConcept:"Tồn tại xã hội quyết định ý thức xã hội & Tính độc lập tương đối của ý thức xã hội",difficulty:"medium",image:"./assets/images/chapter3/social-consciousness.svg",title:'Trào lưu "Flexing" trên mạng xã hội và cái bẫy tiêu dùng',situation:'Dạo gần đây, trên TikTok và Facebook rộ lên trào lưu "Flexing" khoe đồng hồ tiền tỷ, đồ hiệu, xe sang và cuộc sống xa xỉ. Nhiều bạn sinh viên chưa làm ra tiền nhưng vì áp lực đồng trang lứa đã đi vay tiền qua app hoặc ép bố mẹ ở quê chu cấp để mua iPhone đời mới nhất nhằm "bằng bạn bằng bè".',question:'Hãy phân tích hiện tượng tâm lý xã hội trên bằng mối quan hệ giữa "Tồn tại xã hội" và "Ý thức xã hội":',options:[{id:"A",text:"Trào lưu khoe khoang (Ý thức xã hội) bắt nguồn sâu xa từ sự phát triển của nền kinh tế thị trường tiêu dùng và công nghệ mạng truyền thông (Tồn tại xã hội). Tuy nhiên, ý thức xã hội có tính độc lập tương đối: tâm lý tiêu dùng phô trương có thể vượt trước hoặc biến tướng lệch lạc, đòi hỏi con người phải có thế giới quan khoa học để làm chủ bản thân.",isDialectical:!0,consequence:"Bạn xây dựng được bản lĩnh tự chủ: Nhìn thấu bản chất của các chiến dịch kích cầu tiêu dùng, không để mạng xã hội định đoạt giá trị con người bạn bằng món đồ bạn mặc.",philosophicalLens:"Tồn tại xã hội là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội; Ý thức xã hội là mặt tinh thần của đời sống xã hội. Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức xã hội có tính độc lập tương đối (có thể lạc hậu hơn, có thể vượt trước, có tính kế thừa và tác động trở lại mạnh mẽ tồn tại xã hội)."},{id:"B",text:"Tâm lý khoe của sinh ra từ trong gen di truyền của con người từ thời nguyên thủy, không liên quan đến kinh tế xã hội.",isDialectical:!1,consequence:"Bạn sinh học hóa hiện tượng xã hội, phủ nhận hoàn toàn vai trò của môi trường sản xuất vật chất.",philosophicalLens:"Mọi hiện tượng ý thức xã hội đều là sự phản ánh của tồn tại xã hội trong từng giai đoạn lịch sử cụ thể."},{id:"C",text:"Cứ vay tiền mua đồ xịn để khoe là cách tốt nhất để hòa nhập với thời đại mới.",isDialectical:!1,consequence:"Bạn để ý thức tha hóa dẫn dắt hành vi, rơi vào nợ nần và khủng hoảng tài chính trầm trọng.",philosophicalLens:"Đây là sự nô lệ vào vật phẩm tiêu dùng, biểu hiện của sự tha hóa con người trong xã hội tiêu thụ."},{id:"D",text:"Ý thức xã hội hoàn toàn độc lập 100% và không có bất kỳ liên hệ nào với đời sống kinh tế vật chất.",isDialectical:!1,consequence:"Bạn rơi vào chủ nghĩa duy tâm lịch sử, cắt đứt ý thức khỏi cội nguồn đời sống vật chất.",philosophicalLens:"Chủ nghĩa duy vật lịch sử khẳng định tồn tại xã hội luôn giữ vai trò quyết định tối hậu đối với ý thức xã hội."}],explanation:"Chủ nghĩa duy vật lịch sử chỉ ra: Tồn tại xã hội quyết định ý thức xã hội. Khi các quan hệ kinh tế - vật chất thay đổi thì tâm lý, tư tưởng xã hội sớm muộn cũng biến đổi theo. Đồng thời, ý thức xã hội có tính độc lập tương đối: có thể tác động tiêu cực hoặc tích cực trở lại đời sống kinh tế. Việc nâng cao nhận thức, giáo dục văn hóa thẩm mỹ là điều kiện tiên quyết để định hướng ý thức xã hội lành mạnh.",coreLesson:"Đừng để những ảo ảnh hào nhoáng trên mạng xã hội thao túng tâm lý bạn. Giá trị thực sự của một con người nằm ở tri thức, nhân cách và cống hiến thực tế, chứ không nằm ở những món đồ tiêu dùng phô trương!",dimensionScores:{connection:25,contradiction:20,objective:25,practice:20,depth:25}},{id:"C3-M3-Q001",chapter:3,module:"3.3",topic:"Vấn đề con người trong triết học Mác – Lênin",philosophyConcept:"Bản chất con người là tổng hòa các quan hệ xã hội & Vai trò của hoạt động thực tiễn",difficulty:"hard",image:"./assets/images/chapter3/human-essence.svg",title:'Câu hỏi muôn thuở: "Tôi là ai giữa thế giới này?"',situation:"Tuấn cảm thấy cô độc và lạc lõng. Tuấn nghĩ rằng con người mình sinh ra đã mang một bản chất cố định: rụt rè, kém cỏi và không bao giờ có thể hòa nhập. Tuấn tự giam mình trong phòng kín, cắt đứt liên lạc với bạn bè, câu lạc bộ và gia đình. Nhưng khi một người bạn rủ Tuấn tham gia dự án tình nguyện mùa hè xanh dạy học cho trẻ em vùng cao, việc hòa mình vào lao động tập thể và sẻ chia yêu thương đã biến Tuấn thành một con người hoàn toàn mới: cởi mở, tự tin và tràn đầy năng lượng sống.",question:"Sự biến đổi kỳ diệu của Tuấn minh chứng cho luận điểm bất hủ nào của C.Mác về con người?",options:[{id:"A",text:'"Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội". Con người chỉ thực sự tìm thấy và hoàn thiện bản thân khi dấn thân vào hoạt động thực tiễn và các mối quan hệ xã hội phong phú.',isDialectical:!0,consequence:"Bạn giải phóng bản thân khỏi mặc cảm tự ti: Bạn không bị đóng đinh bởi bất kỳ tính cách trừu tượng nào trong quá khứ. Bạn chính là những gì bạn tạo dựng qua các mối quan hệ và hành động cống hiến cho xã hội!",philosophicalLens:"Luận đề thứ 6 về Phoi-ơ-bắc của C.Mác: Con người là một thực thể sinh học - xã hội, trong đó mặt xã hội giữ vai trò quyết định bản chất. Con người vừa là chủ thể, vừa là sản phẩm của lịch sử."},{id:"B",text:"Bản chất con người là bẩm sinh di truyền không bao giờ có thể thay đổi được.",isDialectical:!1,consequence:"Bạn biến con người thành một cỗ máy sinh học vô hồn, tước đoạt toàn bộ năng lực tự giáo dục và chuyển hóa xã hội.",philosophicalLens:"Quan điểm này rơi vào chủ nghĩa tự nhiên siêu hình hoặc định mệnh luận tôn giáo."},{id:"C",text:"Con người tốt nhất nên sống cô độc trên hoang đảo như Robinson Crusoe thì bản chất mới thuần khiết.",isDialectical:!1,consequence:"Bạn quên rằng Robinson Crusoe vẫn phải mang theo công cụ, ngôn ngữ và kinh nghiệm xã hội thì mới sinh tồn được trên hoang đảo.",philosophicalLens:"Tách khỏi xã hội, con người không thể trở thành người theo đúng nghĩa đầy đủ."},{id:"D",text:"Bản chất con người chỉ được quyết định bởi số tiền trong tài khoản ngân hàng.",isDialectical:!1,consequence:"Bạn biến con người thành vật phẩm hàng hóa thuần túy, phủ nhận các giá trị đạo đức, tình cảm và tinh thần cao quý.",philosophicalLens:"Mác kịch liệt phê phán sự tha hóa con người khi mọi phẩm giá bị quy giảm thành tiền tệ trong chủ nghĩa tư bản."}],explanation:'Triết học Mác – Lênin giải quyết triệt để vấn đề con người: Con người là một thực thể thống nhất giữa mặt sinh vật và mặt xã hội. Trong Luận đề thứ 6 về Phoi-ơ-bắc, C.Mác khẳng định: "Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội". Thông qua hoạt động thực tiễn lao động và giao tiếp xã hội, con người vừa biến đổi thế giới, vừa tự biến đổi chính bản thân mình.',coreLesson:'Đừng ngồi một chỗ để tự vấn "Mình là ai?". Hãy bước ra ngoài, kết nối chân thành với mọi người, cống hiến sức trẻ cho cộng đồng và lao động sáng tạo. Trong dòng chảy sống động của các mối quan hệ xã hội, bạn sẽ tìm thấy phiên bản rực rỡ nhất của chính mình!',dimensionScores:{connection:30,contradiction:20,objective:25,practice:30,depth:30}}],$=[{id:"first-thinker",name:"First Thinker",nameVi:"Nhà Khởi Khảo Triết Học",icon:"🌱",desc:"Hoàn thành tình huống triết học đầu tiên trong đời sống.",requirement:"Hoàn thành 1 scenario bất kỳ.",unlockedAt:null},{id:"master-of-contradiction",name:"Master of Contradiction",nameVi:"Bậc Thầy Giải Quyết Mâu Thuẫn",icon:"⚖️",desc:"Giải quyết thành công mâu thuẫn biện chứng giữa học tập và việc làm thêm.",requirement:"Đưa ra lựa chọn biện chứng trong kịch bản Quy luật Mâu thuẫn (C2-M3-Q002).",unlockedAt:null},{id:"quantity-to-quality",name:"Quantity → Quality",nameVi:"Bước Nhảy Vọt Lượng – Chất",icon:"⚡",desc:"Kích hoạt thành công bước nhảy vọt trong Phòng thí nghiệm Lượng - Chất.",requirement:"Kéo thanh trượt qua Điểm nút (80h) và giải mã quy luật Lượng - Chất (C2-M3-SLIDER).",unlockedAt:null},{id:"philosophy-detective",name:"Philosophy Detective",nameVi:"Nhà Điều Tra Triết Học",icon:"🔍",desc:"Phá án thành công một hồ sơ điều tra thực tế trong Philosophy Detective.",requirement:"Phân loại chính xác toàn bộ manh mối trong ít nhất 1 vụ án.",unlockedAt:null},{id:"truth-seeker",name:"Truth Seeker",nameVi:"Người Truy Tìm Chân Lý",icon:"🌊",desc:"Thấu suốt nguyên lý: Thực tiễn là thước đo khách quan duy nhất của chân lý.",requirement:"Hoàn thành kịch bản Lý luận nhận thức và Thực tiễn (C2-M5-Q002).",unlockedAt:null},{id:"practical-thinker",name:"Practical Thinker",nameVi:"Nhà Tư Duy Thực Tiễn Vững Vàng",icon:"🛡️",desc:"Biết tôn trọng điều kiện khách quan và phát huy tính năng động chủ quan của ý thức.",requirement:"Đạt điểm tuyệt đối trong Module Vật chất và Ý thức & Phá giải Case #002.",unlockedAt:null},{id:"dialectical-thinker",name:"Dialectical Thinker",nameVi:"Nhà Tư Duy Biện Chứng Toàn Diện",icon:"🏆",desc:"Chinh phục toàn diện hành trình 3 chương MLN111 và đạt điểm tư duy biện chứng cao.",requirement:"Hoàn thành tối thiểu 8 tình huống và phá giải ít nhất 2 vụ án điều tra.",unlockedAt:null}],L=[{id:"CASE-001",code:"CASE #001",title:"Vụ án Sinh Viên A: Đến lớp 100% nhưng vì sao vẫn trượt môn?",subtitle:"Giải mã hiện tượng tảng băng trôi trong học tập học đường",image:"./assets/images/cases/case-student-mystery.svg",dossierLevel:"CẤP ĐỘ: CƠ BẢN",accentColor:"#ef4444",backgroundStory:'Sinh viên A luôn có mặt ở giảng đường từ rất sớm, ngồi ngay bàn đầu, điểm danh chuyên cần đạt 100%. Mọi bạn bè đều nghĩ A là một tấm gương sáng. Thế nhưng khi công bố điểm thi kết thúc học phần MLN111, A chỉ đạt 2.0/10 (Điểm F) và phải học lại. Với tư cách là "Nhà điều tra Triết học", bạn hãy bóc tách các manh mối để tìm ra chân tướng sự việc!',categories:[{id:"hien_tuong",name:"HIỆN TƯỢNG",desc:"Biểu hiện bề ngoài quan sát được",color:"#38bdf8"},{id:"ban_chat",name:"BẢN CHẤT",desc:"Mối liên hệ sâu xa bên trong quy định kết quả",color:"#a855f7"},{id:"nguyen_nhan",name:"NGUYÊN NHÂN",desc:"Hành vi trực tiếp sinh ra hậu quả",color:"#f59e0b"},{id:"dieu_kien",name:"ĐIỀU KIỆN",desc:"Môi trường thúc đẩy nguyên nhân phát tác",color:"#10b981"},{id:"ket_qua",name:"KẾT QUẢ",desc:"Biến đổi tất yếu cuối cùng xuất hiện",color:"#ef4444"}],clues:[{id:"clue-1",text:"Có mặt đầy đủ 100% các buổi học, ngồi ngay bàn đầu giảng đường",correctCategory:"hien_tuong",hint:"Đây chỉ là hành vi vật lý bề ngoài mà mắt thường nhìn thấy được."},{id:"clue-2",text:"Lối học vẹt, chép máy móc không có tư duy phản biện hay đào sâu quy luật",correctCategory:"ban_chat",hint:"Yếu tố nội tại cốt lõi chi phối toàn bộ chất lượng tiếp thu tri thức."},{id:"clue-3",text:"Thức đêm lướt điện thoại đến 3h sáng khiến lên lớp mất tập trung và buồn ngủ",correctCategory:"nguyen_nhan",hint:"Tác động trực tiếp làm suy giảm khả năng ghi nhận kiến thức."},{id:"clue-4",text:"Phòng trọ ồn ào, thường xuyên bị rủ rê chơi game và không có góc học yên tĩnh",correctCategory:"dieu_kien",hint:"Yếu tố hoàn cảnh khách quan bên ngoài hỗ trợ nguyên nhân phát tác."},{id:"clue-5",text:"Nhận điểm F (2.0/10) trên bảng điểm và buộc phải đăng ký học lại",correctCategory:"ket_qua",hint:"Biến đổi cuối cùng sinh ra từ chuỗi tác động trước đó."}],philosophicalVerdict:{headline:"KẾT LUẬN CỦA NHÀ ĐIỀU TRA TRIẾT HỌC",concept:"Cặp phạm trù Bản chất - Hiện tượng & Nguyên nhân - Kết quả",summary:"Vụ án đã được phá giải hoàn toàn nhờ phương pháp biện chứng duy vật!",analysis:'Trong vụ án này, sự có mặt 100% trên lớp chỉ là "Hiện tượng" bề nổi. Hiện tượng này thậm chí đã xuyên tạc "Bản chất" (tư duy học tập thụ động, rỗng ruột). Điểm F là "Kết quả" tất yếu sinh ra từ "Nguyên nhân" thức đêm lướt mạng kết hợp với "Điều kiện" phòng trọ ồn ào. C.Mác từng dạy: Nếu hiện tượng và bản chất trùng khít nhau thì mọi khoa học đều trở nên thừa thãi. Muốn tiến bộ thực chất, con người phải cải tạo bản chất chứ không thể dựa vào sự đối phó hiện tượng bề ngoài!',xpAwarded:150,badgeUnlock:"Philosophy Detective"}},{id:"CASE-002",code:"CASE #002",title:"Khủng hoảng Startup X: Đốt sạch 50 triệu và cái bẫy duy ý chí",subtitle:"Giải mã bi kịch giữa ý chí chủ quan và điều kiện vật chất khách quan",image:"./assets/images/cases/case-startup-crisis.svg",dossierLevel:"CẤP ĐỘ: TRUNG BÌNH",accentColor:"#f59e0b",backgroundStory:'Một nhóm sinh viên năm 2 gom góp 50 triệu đồng tiền tiết kiệm để xây dựng app giao đồ ăn độc quyền cho ký túc xá. Nhóm tin chắc rằng với khẩu hiệu "Đam mê cháy bỏng và làm việc 18 tiếng/ngày", họ sẽ đánh bại mọi đối thủ. Tuy nhiên chỉ sau 60 ngày, app cạn sạch vốn, khách hàng than phiền app lỗi triền miên và dự án tuyên bố giải thể.',categories:[{id:"dieu_kien_khach_quan",name:"ĐIỀU KIỆN KHÁCH QUAN (VẬT CHẤT)",desc:"Hiện thực kinh tế - xã hội bên ngoài độc lập với ý muốn",color:"#0ea5e9"},{id:"y_thuc_chu_quan",name:"Ý THỨC CHỦ QUAN",desc:"Ước muốn, niềm tin và ý chí tinh thần",color:"#ec4899"},{id:"luc_luong_san_xuat",name:"LỰC LƯỢNG SẢN XUẤT",desc:"Trình độ công nghệ và năng lực kỹ thuật thực tế",color:"#10b981"},{id:"ban_chat_sai_lam",name:"BẢN CHẤT SAI LẦM",desc:"Căn bệnh triết học cốt lõi dẫn đến đổ vỡ",color:"#f59e0b"},{id:"ket_qua_tat_yeu",name:"KẾT QUẢ TẤT YẾU",desc:"Hậu quả thực tiễn không thể tránh khỏi",color:"#ef4444"}],clues:[{id:"clue-2-1",text:"Thị trường đã có các ông lớn Grab, ShopeeFood chiếm lĩnh với nguồn vốn hàng ngàn tỷ",correctCategory:"dieu_kien_khach_quan",hint:"Bối cảnh kinh tế thị trường hiện thực không thể thay đổi bằng ý muốn."},{id:"clue-2-2",text:'Khẩu hiệu "Chỉ cần đam mê mãnh liệt và thức khuya là chắc chắn thành công"',correctCategory:"y_thuc_chu_quan",hint:"Ý chí tinh thần được phóng đại vượt quá cơ sở thực tế."},{id:"clue-2-3",text:"Đội ngũ lập trình chỉ là sinh viên năm 2 chưa có kinh nghiệm xử lý tải cao, server thường xuyên sập",correctCategory:"luc_luong_san_xuat",hint:"Năng lực công cụ và trình độ tay nghề của người lao động."},{id:"clue-2-4",text:"Mắc bệnh chủ quan duy ý chí: Lấy mong muốn chủ quan áp đặt lên quy luật khách quan",correctCategory:"ban_chat_sai_lam",hint:"Căn bệnh triết học căn bản mà triết học Mác cảnh báo gay gắt."},{id:"clue-2-5",text:"Dự án cạn kiệt dòng tiền, app bị gỡ khỏi kho ứng dụng sau đúng 60 ngày",correctCategory:"ket_qua_tat_yeu",hint:"Hậu quả vật chất cụ thể cuối cùng."}],philosophicalVerdict:{headline:"KẾT LUẬN CỦA NHÀ ĐIỀU TRA TRIẾT HỌC",concept:"Mối quan hệ giữa Vật chất và Ý thức & Chống bệnh chủ quan duy ý chí",summary:"Vụ án Startup X phơi bày hậu quả tai hại khi coi thường điều kiện vật chất!",analysis:'Nhóm sáng lập đã rơi vào căn bệnh kinh điển: "Chủ quan duy ý chí". Họ tưởng rằng ý thức và nhiệt huyết có thể thay thế cho điều kiện vật chất (nguồn vốn, thị phần) và trình độ của lực lượng sản xuất (năng lực kỹ thuật). Theo triết học Mác – Lênin: Vật chất quyết định ý thức, ý thức chỉ có thể cải tạo thế giới khi dựa trên việc tôn trọng và tuân thủ các quy luật khách quan. Nhiệt huyết mà thiếu tri thức khoa học sẽ chỉ dẫn tới sự phá sản tốn kém!',xpAwarded:180,badgeUnlock:"Practical Thinker"}},{id:"CASE-003",code:"CASE #003",title:"Nghịch lý Tự động hóa: Robot thế chỗ hay Mâu thuẫn LLSX và QHSX?",subtitle:"Giải mã làn sóng đình công tại một doanh nghiệp công nghệ cao",image:"./assets/images/cases/case-ai-labor.svg",dossierLevel:"CẤP ĐỘ: NÂNG CAO",accentColor:"#38bdf8",backgroundStory:"Một xưởng sản xuất cơ khí chính xác đầu tư dàn robot tự động và AI kiểm định chất lượng hiện đại nhất khu vực. Năng suất máy móc tăng gấp 5 lần. Tuy nhiên, ban giám đốc lập tức ra thông báo: Cắt giảm 40% lương của công nhân vận hành, sa thải hàng loạt thợ lành nghề và hủy bỏ toàn bộ tiền thưởng. Hệ quả là công nhân đồng loạt đình công, dàn máy tiền tỷ nằm đắp chiếu.",categories:[{id:"luc_luong_sx",name:"LỰC LƯỢNG SẢN XUẤT MỚI",desc:"Công cụ lao động và công nghệ tiên tiến",color:"#38bdf8"},{id:"quan_he_sx_cu",name:"QUAN HỆ SẢN XUẤT CŨ KỸ",desc:"Cách thức quản lý, sở hữu và phân phối lạc hậu",color:"#f43f5e"},{id:"hien_tuong_be_noi",name:"HIỆN TƯỢNG BỀ NỔI",desc:"Biểu hiện tranh chấp trước mắt",color:"#fbbf24"},{id:"mau_thuan_bien_chung",name:"MÂU THUẪN BIỆN CHỨNG",desc:"Bản chất đối kháng giữa 2 mặt của phương thức sản xuất",color:"#a855f7"},{id:"giai_phap_bien_chung",name:"GIẢI PHÁP BIỆN CHỨNG",desc:"Con đường khôi phục sự phù hợp theo quy luật",color:"#10b981"}],clues:[{id:"clue-3-1",text:"Hệ thống cánh tay robot tự động và thuật toán thị giác máy tính AI chính xác từng micromet",correctCategory:"luc_luong_sx",hint:"Yếu tố công cụ kỹ thuật hiện đại trong nền sản xuất."},{id:"clue-3-2",text:"Chính sách bóc lột cắt giảm lương, đẩy gánh nặng chuyển đổi công nghệ lên vai người lao động",correctCategory:"quan_he_sx_cu",hint:"Quan hệ tổ chức quản lý và phân phối sản phẩm thô thiển."},{id:"clue-3-3",text:"Công nhân tức giận đình công, từ chối vận hành khiến dàn máy móc bị tê liệt",correctCategory:"hien_tuong_be_noi",hint:"Sự kiện bùng phát trực tiếp nhìn thấy được ở cổng nhà máy."},{id:"clue-3-4",text:"Quan hệ sản xuất cũ trở thành xiềng xích trói buộc và phá hủy chính sự phát triển của Lực lượng sản xuất",correctCategory:"mau_thuan_bien_chung",hint:"Quy luật khách quan của chủ nghĩa duy vật lịch sử bị vi phạm nghiêm trọng."},{id:"clue-3-5",text:"Tái cấu trúc chính sách phân phối, chia sẻ lợi ích năng suất và đào tạo nâng cao tay nghề cho công nhân",correctCategory:"giai_phap_bien_chung",hint:"Tạo lập sự phù hợp mới giữa quan hệ sản xuất và trình độ của lực lượng sản xuất."}],philosophicalVerdict:{headline:"KẾT LUẬN CỦA NHÀ ĐIỀU TRA TRIẾT HỌC",concept:"Quy luật Quan hệ sản xuất phù hợp với trình độ phát triển của Lực lượng sản xuất",summary:"Vụ án chứng minh công nghệ không có lỗi, lỗi nằm ở quan hệ sản xuất lạc hậu!",analysis:"Vụ án này là hình ảnh thu nhỏ sống động của quy luật cốt lõi trong Chủ nghĩa duy vật lịch sử: Lực lượng sản xuất (Robot, AI) là yếu tố cách mạng nhất, luôn đòi hỏi phát triển. Nhưng Quan hệ sản xuất (chính sách phân phối, quản lý của chủ sở hữu) lại xơ cứng, bảo thủ, coi người lao động như công cụ rẻ tiền. Khi QHSX không còn phù hợp với trình độ LLSX, nó biến thành lực cản kìm hãm, làm tê liệt toàn bộ dây chuyền sản xuất. Muốn giải quyết triệt để, phải cải tổ quan hệ sản xuất để thiết lập lại sự phù hợp biện chứng!",xpAwarded:220,badgeUnlock:"Dialectical Thinker"}}],P=[{key:"connection",name:"Nhận diện Mối Liên Hệ Phổ Biến",nameShort:"Mối Liên Hệ",desc:"Khả năng nhìn nhận sự vật trong hệ thống chỉnh thể toàn diện, tránh cái nhìn phiến diện một chiều.",color:"#38bdf8"},{key:"contradiction",name:"Phân Tích & Giải Quyết Mâu Thuẫn",nameShort:"Xử Lý Mâu Thuẫn",desc:"Khả năng nhận diện hai mặt đối lập thống nhất trong một thể, coi mâu thuẫn là động lực phát triển.",color:"#f97316"},{key:"objective",name:"Tư Duy Khách Quan Duy Vật",nameShort:"Tôn Trọng Khách Quan",desc:"Khả năng xuất phát từ hiện thực vật chất, chống bệnh chủ quan duy ý chí và tư tưởng định mệnh.",color:"#10b981"},{key:"practice",name:"Năng Động Chủ Quan & Thực Tiễn",nameShort:"Vận Dụng Thực Tiễn",desc:"Khả năng biến tri thức thành kế hoạch hành động thực tế, coi thực tiễn là thước đo của chân lý.",color:"#ec4899"},{key:"depth",name:"Bản Chất - Hiện Tượng & Lượng - Chất",nameShort:"Đào Sâu Bản Chất",desc:"Khả năng bóc tách lớp vỏ hiện tượng để thấu suốt bản chất bên trong và kiên trì tích lũy lượng.",color:"#a855f7"}],I=[{id:"master-dialectician",title:"NHÀ TƯ DUY BIỆN CHỨNG TOÀN DIỆN",titleEn:"Master Dialectician",tagline:"Linh hồn triết học Mác – Lênin hiện hữu sống động trong từng quyết định của bạn.",icon:"🧠✨",minScore:80,accentColor:"#10b981",description:'Bạn sở hữu một "bộ vi xử lý não bộ" xuất sắc: không bị lừa gạt bởi hiện tượng bề ngoài, luôn phân tích toàn diện mạng lưới các mối liên hệ và biến mọi áp lực mâu thuẫn thành động cơ bứt phá. Bạn hiểu sâu sắc rằng thế giới luôn vận động, và thất bại tạm thời chỉ là mắt xích cho bước nhảy vọt tiếp theo.',strengths:["Khả năng nhìn thấu bản chất vấn đề phức tạp","Điềm tĩnh trước khủng hoảng vì thấy được quy luật vận động","Biết dung hòa các mặt đối lập để tạo sức bật mới"],lifeAdvice:"Tiếp tục phát huy lăng kính này trong công việc và quản trị cuộc sống. Hãy chia sẻ góc nhìn toàn diện để hỗ trợ những người xung quanh thoát khỏi lối nghĩ phiến diện."},{id:"grounded-materialist",title:"NHÀ THỰC HÀNH DUY VẬT VỮNG VÀNG",titleEn:"Grounded Materialist",tagline:"Đôi chân luôn đứng vững trên mặt đất hiện thực, biến ý tưởng thành giá trị vật chất cụ thể.",icon:"🛡️⚡",minScore:65,accentColor:"#38bdf8",description:"Điểm mạnh nổi bật nhất của bạn là tính thực tiễn và tinh thần duy vật khoa học. Bạn không tin vào may rủi bói toán hay ảo tưởng duy ý chí, mà luôn xuất phát từ điều kiện vật chất thực tế để hành động. Đối với bạn, chân lý không nằm trên giấy mà nằm trong trải nghiệm thực tiễn.",strengths:["Kỷ luật hành động và tôn trọng điều kiện khách quan","Trực giác nhạy bén với tính khả thi của dự án","Không bị lôi kéo bởi những trào lưu bề nổi"],lifeAdvice:"Hãy trau dồi thêm tư duy về các mặt đối lập và tính quanh co của sự phát triển để không bị bất ngờ trước những bước ngoặt bất thường."},{id:"contradiction-strategist",title:"BẬC THẦY ĐỘT PHÁ MÂU THUẪN",titleEn:"Contradiction Strategist",tagline:"Nơi người khác nhìn thấy bế tắc, bạn nhìn thấy nguồn năng lượng để phát triển.",icon:"⚖️🔥",minScore:50,accentColor:"#f97316",description:"Bạn rất nhạy cảm với các mâu thuẫn trong cuộc sống (giữa học và làm, giữa an toàn và mạo hiểm, giữa nội dung và hình thức). Bạn không né tránh mâu thuẫn mà dũng cảm đối diện để tìm kiếm giải pháp chuyển hóa biện chứng.",strengths:["Tư duy giải quyết vấn đề dưới áp lực cao","Khả năng đàm phán và cân bằng lợi ích đa phương","Biến khó khăn thành cơ hội đổi mới bản thân"],lifeAdvice:"Hãy kiên nhẫn hơn với quá trình tích lũy về lượng. Đừng nóng vội đòi hỏi kết quả tức thì trước khi đạt tới điểm nút."},{id:"perceptive-seeker",title:"NGƯỜI TÌM KIẾM CHÂN LÝ TIỀM NĂNG",titleEn:"Perceptive Truth Seeker",tagline:"Trực giác nhạy cảm đang trên hành trình được soi sáng bởi triết học biện chứng.",icon:"🌱🧭",minScore:0,accentColor:"#ec4899",description:"Bạn có lòng tò mò tự nhiên và nhạy bén với các sự kiện trong cuộc sống, đôi khi còn dao động giữa cảm tính ban đầu và tư duy lý tính sâu sắc. Cuộc hành trình MLN111 này đã mở ra cho bạn chiếc la bàn tư duy để từng bước làm chủ cuộc đời mình.",strengths:["Ham học hỏi và sẵn sàng lắng nghe phản biện","Giàu cảm xúc và trắc ẩn với các vấn đề xã hội","Tiềm năng phát triển tư duy phản biện rất lớn"],lifeAdvice:'Hãy tập thói quen tự hỏi: "Điều kiện vật chất thực tế là gì? Bản chất bên dưới tảng băng trôi này là gì?" trước mỗi quyết định lớn.'}];function j(e,n){const t={connection:{total:0,max:0},contradiction:{total:0,max:0},objective:{total:0,max:0},practice:{total:0,max:0},depth:{total:0,max:0}},h=40;n.forEach(p=>{const s=p.dimensionScores||{},u=e.completedScenarios[p.id];Object.keys(t).forEach(b=>{const l=s[b]||15;t[b].max+=l,u&&(u.isDialectical?t[b].total+=l:t[b].total+=Math.round(l*.35))})});const i=Object.keys(e.detectiveSolved||{}).length,c=i*8,a={};let o=0;P.forEach(p=>{const s=t[p.key];let u;s.max===0?u=h:(u=Math.round(s.total/s.max*100),u=Math.min(100,Math.max(20,u+c))),a[p.key]=u,o+=u});const d=Math.round(o/P.length);let y=I[I.length-1];for(const p of I)if(d>=p.minScore){y=p;break}return{dimensionScores:a,averageScore:d,archetype:y,totalScenariosCompleted:Object.keys(e.completedScenarios).length,detectiveCasesSolved:i}}function X(e,n=300){const t=n/2,h=n/2-40,i=[-Math.PI/2,-Math.PI/2+2*Math.PI/5,-Math.PI/2+4*Math.PI/5,-Math.PI/2+6*Math.PI/5,-Math.PI/2+8*Math.PI/5],c=["connection","contradiction","objective","practice","depth"],a=i.map((s,u)=>{const b=(e[c[u]]||50)/100,l=h*b,f=t+l*Math.cos(s),q=t+l*Math.sin(s);return`${f.toFixed(1)},${q.toFixed(1)}`}).join(" "),o=[.2,.4,.6,.8,1].map(s=>`<polygon points="${i.map(b=>{const l=h*s,f=t+l*Math.cos(b),q=t+l*Math.sin(b);return`${f.toFixed(1)},${q.toFixed(1)}`}).join(" ")}" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="${s===1?"none":"3 3"}"/>`).join(""),d=i.map(s=>{const u=t+h*Math.cos(s),b=t+h*Math.sin(s);return`<line x1="${t}" y1="${t}" x2="${u.toFixed(1)}" y2="${b.toFixed(1)}" stroke="#475569" stroke-width="1.2"/>`}).join(""),p=[{x:t,y:t-h-16,anchor:"middle",label:"Mối liên hệ"},{x:t+h+15,y:t-25,anchor:"start",label:"Mâu thuẫn"},{x:t+h*.7,y:t+h+22,anchor:"middle",label:"Khách quan"},{x:t-h*.7,y:t+h+22,anchor:"middle",label:"Thực tiễn"},{x:t-h-15,y:t-25,anchor:"end",label:"Bản chất"}].map((s,u)=>{const b=e[c[u]]||50;return`
      <text x="${s.x}" y="${s.y}" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="${s.anchor}">
        ${s.label}
        <tspan fill="#38bdf8" font-weight="bold"> (${b}%)</tspan>
      </text>
    `}).join("");return`
    <svg viewBox="0 0 ${n} ${n}" width="${n}" height="${n}" class="radar-chart-svg">
      <defs>
        <radialGradient id="radarFillGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      ${o}
      ${d}
      <polygon points="${a}" fill="url(#radarFillGrad)" stroke="#38bdf8" stroke-width="2.5" />
      ${i.map((s,u)=>{const b=(e[c[u]]||50)/100,l=h*b,f=t+l*Math.cos(s),q=t+l*Math.sin(s);return`<circle cx="${f.toFixed(1)}" cy="${q.toFixed(1)}" r="4.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>`}).join("")}
      ${p}
    </svg>
  `}class Y{constructor(){this.ctx=null,this.muted=localStorage.getItem("mln111_sound_muted")==="true"}init(){if(!this.ctx&&(window.AudioContext||window.webkitAudioContext)){const n=window.AudioContext||window.webkitAudioContext;this.ctx=new n}}toggleMute(){return this.muted=!this.muted,localStorage.setItem("mln111_sound_muted",this.muted),this.muted}isMuted(){return this.muted}playClick(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),t=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(600,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.05),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),n.connect(t),t.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.05)}catch{}}playDialecticalSuccess(){if(!this.muted&&(this.init(),!!this.ctx))try{[523.25,659.25,783.99,1046.5].forEach((t,h)=>{const i=this.ctx.createOscillator(),c=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(t,this.ctx.currentTime+h*.08),c.gain.setValueAtTime(.15,this.ctx.currentTime+h*.08),c.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+h*.08+.35),i.connect(c),c.connect(this.ctx.destination),i.start(this.ctx.currentTime+h*.08),i.stop(this.ctx.currentTime+h*.08+.35)})}catch{}}playWarning(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),t=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(260,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.25),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),n.connect(t),t.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.25)}catch{}}playLeapBoom(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),t=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(150,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.2),n.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.6),t.gain.setValueAtTime(.25,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.6),n.connect(t),t.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.6),setTimeout(()=>this.playDialecticalSuccess(),250)}catch{}}playClueSnap(){if(!this.muted&&(this.init(),!!this.ctx))try{const n=this.ctx.createOscillator(),t=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(880,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(440,this.ctx.currentTime+.08),t.gain.setValueAtTime(.18,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),n.connect(t),t.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.08)}catch{}}playFanfare(){if(!this.muted&&(this.init(),!!this.ctx))try{[[523.25,659.25],[587.33,698.46],[659.25,783.99],[783.99,1046.5,1318.51]].forEach((t,h)=>{t.forEach(i=>{const c=this.ctx.createOscillator(),a=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(i,this.ctx.currentTime+h*.12),a.gain.setValueAtTime(.15,this.ctx.currentTime+h*.12),a.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+h*.12+(h===3?.7:.25)),c.connect(a),a.connect(this.ctx.destination),c.start(this.ctx.currentTime+h*.12),c.stop(this.ctx.currentTime+h*.12+(h===3?.7:.25))})})}catch{}}}const g=new Y,S="mln111_philosophy_in_life_v1";class F{constructor(){this.listeners=[],this.state=this.loadState()}getDefaultState(){return{xp:0,completedScenarios:{},detectiveSolved:{},sliderCompleted:!1,unlockedBadges:[],activeBadgePopup:null,currentView:"landing",activeScenarioId:null,activeCaseId:null}}loadState(){try{localStorage.removeItem(S),sessionStorage.removeItem(S)}catch(n){console.warn("Storage cleanup notice:",n)}return this.getDefaultState()}saveState(){this.notify()}subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}}notify(){this.listeners.forEach(n=>n(this.state))}recordScenarioAnswer(n,t){const h=C.find(o=>o.id===n);if(!h)return null;const i=h.options.find(o=>o.id===t);if(!i)return null;const c=this.state.completedScenarios[n],a=i.isDialectical;if(this.state.completedScenarios[n]={optionId:t,isDialectical:a,answeredAt:new Date().toISOString()},c)!c.isDialectical&&a&&(this.state.xp+=25);else{const o=a?50:25;this.state.xp+=o}return a?g.playDialecticalSuccess():g.playWarning(),this.checkBadges(),this.saveState(),{scenario:h,option:i}}recordDetectiveSolved(n){const t=L.find(i=>i.id===n);if(!t)return;const h=!this.state.detectiveSolved[n];this.state.detectiveSolved[n]={solvedAt:new Date().toISOString(),xp:t.philosophicalVerdict.xpAwarded},h&&(this.state.xp+=t.philosophicalVerdict.xpAwarded),g.playFanfare(),this.checkBadges(),this.saveState()}recordSliderLeap(){this.state.sliderCompleted=!0,this.state.completedScenarios["C2-M3-SLIDER"]={optionId:"B",isDialectical:!0,answeredAt:new Date().toISOString()},this.state.xp+=60,this.checkBadges(),this.saveState()}checkBadges(){var c,a,o;const n=Object.keys(this.state.completedScenarios).length,t=Object.keys(this.state.detectiveSolved).length,h=[],i=d=>{if(!this.state.unlockedBadges.includes(d)){this.state.unlockedBadges.push(d);const y=$.find(p=>p.id===d);y&&h.push(y)}};n>=1&&i("first-thinker"),(c=this.state.completedScenarios["C2-M3-Q002"])!=null&&c.isDialectical&&i("master-of-contradiction"),this.state.sliderCompleted&&i("quantity-to-quality"),t>=1&&i("philosophy-detective"),(a=this.state.completedScenarios["C2-M5-Q002"])!=null&&a.isDialectical&&i("truth-seeker"),((o=this.state.completedScenarios["C2-M1-Q001"])!=null&&o.isDialectical||this.state.detectiveSolved["CASE-002"])&&i("practical-thinker"),n>=6&&t>=1&&i("dialectical-thinker"),h.length>0&&(this.state.activeBadgePopup=h[0],g.playFanfare())}dismissBadgePopup(){this.state.activeBadgePopup=null,this.saveState()}resetProgress(){try{localStorage.removeItem(S),sessionStorage.removeItem(S)}catch{}this.state=this.getDefaultState(),this.notify()}getProfile(){return j(this.state,C)}getTotalProgressPercent(){const n=C.length+L.length,t=Object.keys(this.state.completedScenarios).length+Object.keys(this.state.detectiveSolved).length;return Math.min(100,Math.round(t/n*100))}}const v=new F;function w(e,n,t,h){const i=v.state,c=g.isMuted();e.innerHTML=`
    <header class="site-header">
      <div class="container header-content">
        <!-- Minimalist Brand -->
        <div class="brand-logo" id="nav-brand-btn">
          <div class="brand-icon">Φ</div>
          <div class="brand-text">
            <h1 style="font-size: 1.05rem;">MLN111 – TRIẾT HỌC TRONG ĐỜI SỐNG</h1>
            <p style="font-size: 0.7rem; color: var(--accent-gold);">C. MÁC &amp; V.I. LÊNIN</p>
          </div>
        </div>

        <!-- Clean Minimalist Nav -->
        <div class="nav-actions">
          <button class="nav-btn" id="nav-map-btn">
            <span>🗺️ Hành Trình</span>
          </button>

          <button class="nav-btn" id="nav-detective-btn">
            <span>🔍 Phá Án</span>
          </button>

          <button class="nav-btn" id="nav-handbook-btn">
            <span>📖 Sổ Tay</span>
          </button>

          <button class="nav-btn" id="nav-profile-btn" style="border-color: rgba(56, 189, 248, 0.4); color: var(--accent-cyan);">
            <span>🧠 Hồ Sơ Tư Duy</span>
          </button>

          <div class="xp-counter" title="Điểm kinh nghiệm">
            <span>✨</span>
            <span id="nav-xp-val">${i.xp} XP</span>
          </div>

          <button class="nav-btn" id="nav-reset-btn" title="Làm lại từ đầu (Đặt lại điểm và bài làm về 0)" style="border-color: rgba(239, 68, 68, 0.35); color: #fca5a5;">
            <span>↺ Làm Lại</span>
          </button>

          <button class="nav-btn" id="nav-sound-toggle-btn" title="${c?"Bật âm thanh":"Tắt âm thanh"}">
            <span id="sound-icon-symbol">${c?"🔇":"🔊"}</span>
          </button>
        </div>
      </div>
    </header>
  `,document.getElementById("nav-brand-btn").addEventListener("click",()=>{g.playClick(),n("landing")}),document.getElementById("nav-map-btn").addEventListener("click",()=>{g.playClick(),n("map")}),document.getElementById("nav-detective-btn").addEventListener("click",()=>{g.playClick(),n("detective")}),document.getElementById("nav-handbook-btn").addEventListener("click",()=>{g.playClick(),t("handbook")}),document.getElementById("nav-profile-btn").addEventListener("click",()=>{g.playClick(),t("profile")});const a=document.getElementById("nav-reset-btn");a&&h&&a.addEventListener("click",()=>{g.playClick(),h()}),document.getElementById("nav-sound-toggle-btn").addEventListener("click",()=>{const o=g.toggleMute();document.getElementById("sound-icon-symbol").textContent=o?"🔇":"🔊",g.playClick()})}function W(e,n){const t=v.state.xp>0||Object.keys(v.state.completedScenarios).length>0||Object.keys(v.state.detectiveSolved).length>0;e.innerHTML=`
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
                <span>${t?"🚀 TIẾP TỤC HỌC TẬP":"🚀 BẮT ĐẦU HỌC TẬP"}</span>
                <span style="font-size: 1.2rem;">→</span>
              </button>
              ${t?`
                <button class="btn-secondary" id="hero-reset-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(239, 68, 68, 0.4); color: #fca5a5;">
                  <span>↺ LÀM LẠI TỪ ĐẦU</span>
                </button>
              `:""}
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
  `,document.getElementById("hero-start-btn").addEventListener("click",()=>{g.playClick(),n("map")});const h=document.getElementById("hero-reset-btn");h&&h.addEventListener("click",()=>{g.playClick(),v.resetProgress(),n("map")}),document.getElementById("hero-detective-btn").addEventListener("click",()=>{g.playClick(),n("detective")}),e.querySelectorAll("[data-nav-chapter]").forEach(i=>{i.addEventListener("click",()=>{g.playClick(),n("map")})}),e.querySelectorAll("[data-nav-detective]").forEach(i=>{i.addEventListener("click",()=>{g.playClick(),n("detective")})})}const Z=[{id:1,title:"Khái Luận Về Triết Học",titleEn:"Introduction to Philosophy",code:"CHAPTER 1",badge:"THẾ GIỚI QUAN",desc:"Khám phá cội nguồn của tri giác, vấn đề cơ bản của triết học và sự đối đầu giữa duy vật vs duy tâm.",accentColor:"#38bdf8",gradient:"from-sky-500 to-indigo-600",icon:"compass",totalScenarios:5,modules:[{id:"1.1",title:"Triết học & Nguồn gốc"},{id:"1.2",title:"Vấn đề cơ bản của triết học"},{id:"1.3",title:"Duy vật vs Duy tâm"},{id:"1.4",title:"Biện chứng vs Siêu hình"},{id:"1.5",title:"Vai trò Triết học Mác – Lênin"}]},{id:2,title:"Phép Biện Chứng Duy Vật",titleEn:"Materialist Dialectics",code:"CHAPTER 2 (TRỌNG TÂM)",badge:"HẠT NHÂN LÝ LUẬN",desc:"Linh hồn của triết học Mác: Vật chất - Ý thức, 2 nguyên lý, 3 quy luật (Lượng-Chất, Mâu thuẫn, Phủ định) và 6 cặp phạm trù.",accentColor:"#10b981",gradient:"from-emerald-500 to-teal-600",icon:"infinity",totalScenarios:15,modules:[{id:"2.1",title:"Vật chất & Ý thức"},{id:"2.2",title:"Hai nguyên lý biện chứng"},{id:"2.3",title:"Ba quy luật cơ bản"},{id:"2.4",title:"Sáu cặp phạm trù"},{id:"2.5",title:"Lý luận nhận thức & Thực tiễn"}]},{id:3,title:"Chủ Nghĩa Duy Vật Lịch Sử",titleEn:"Historical Materialism",code:"CHAPTER 3",badge:"XÃ HỘI & CON NGƯỜI",desc:"Quy luật phát triển xã hội: Hình thái KT-XH, Tồn tại XH - Ý thức XH, và bản chất con người trong đời sống hiện đại.",accentColor:"#f59e0b",gradient:"from-amber-500 to-orange-600",icon:"users",totalScenarios:3,modules:[{id:"3.1",title:"Hình thái KT-XH & LLSX - QHSX"},{id:"3.2",title:"Tồn tại XH & Ý thức XH"},{id:"3.3",title:"Bản chất con người & Thực tiễn"}]}],J=[{id:"detective",title:"Philosophy Detective",titleVi:"Nhà Điều Tra Triết Học",badge:"SPECIAL INTERACTIVE LAB",desc:"Phá án đời sống thực tế bằng phương pháp luận triết học: Phân loại manh mối vào Nguyên nhân, Kết quả, Bản chất, Hiện tượng!",accentColor:"#ef4444",icon:"search",totalCases:3}];function K(e,n,t,h){const i=v.state,c=i.completedScenarios,a=i.detectiveSolved,o=Object.keys(c).length+Object.keys(a).length,d=C.length+L.length,y=v.getTotalProgressPercent();let p="";Z.forEach(l=>{const f=C.filter(m=>m.chapter===l.id),q=f.filter(m=>c[m.id]).length,r=q===f.length&&f.length>0;let k="";f.forEach(m=>{var V;const T=!!c[m.id],N=(V=c[m.id])==null?void 0:V.isDialectical,R=m.type==="slider";k+=`
        <div class="scenario-item-card ${T?"completed":""}" data-id="${m.id}">
          <div class="scenario-thumb-wrapper">
            <img class="scenario-item-img" src="${m.image}" alt="${m.title}" loading="lazy" onerror="this.style.opacity='0.4'" />
            <div class="scenario-status-badge">
              ${T?N?'<span class="badge-pill" style="background: rgba(16, 185, 129, 0.9); color: #064e3b;">✓ Đạt</span>':'<span class="badge-pill" style="background: rgba(245, 158, 11, 0.9); color: #451a03;">✓ Đã Làm</span>':R?'<span class="badge-pill" style="background: rgba(236, 72, 153, 0.9); color: #ffffff;">⚡ Tương Tác</span>':'<span class="badge-pill" style="background: rgba(30, 41, 59, 0.85); color: #94a3b8;">Chưa làm</span>'}
            </div>
          </div>
          <div>
            <div class="topic-tag">${m.topic}</div>
            <h4>${m.title}</h4>
            <p style="font-size: 0.8rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${m.situation}
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.75rem; margin-top: 0.5rem;">
            <span style="font-size: 0.75rem; color: #64748b; font-weight: 600;">${m.philosophyConcept}</span>
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 700;">Khám phá →</span>
          </div>
        </div>
      `}),p+=`
      <section class="glass-panel chapter-card animate-slide-up">
        <div class="chapter-top">
          <div class="chapter-heading">
            <div class="ch-code">${l.code}</div>
            <h3>${l.title}</h3>
            <p>${l.desc}</p>
          </div>
          <div style="text-align: right;">
            <span class="badge-pill" style="background: rgba(56, 189, 248, 0.12); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">
              ${l.badge}
            </span>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; font-weight: 700; color: ${r?"var(--accent-emerald)":"#cbd5e1"};">
              ${q} / ${f.length} Hoàn thành
            </div>
          </div>
        </div>

        <!-- Scenarios Grid -->
        <div class="scenario-grid">
          ${k}
        </div>
      </section>
    `});const s=J[0];let u="";L.forEach(l=>{const f=!!a[l.id];u+=`
      <div class="scenario-item-card ${f?"completed":""}" data-case-id="${l.id}" style="border-left: 4px solid var(--accent-crimson);">
        <div class="scenario-thumb-wrapper">
          <img class="scenario-item-img" src="${l.image}" alt="${l.title}" loading="lazy" onerror="this.style.opacity='0.4'" />
          <div class="scenario-status-badge">
            ${f?'<span class="badge-pill" style="background: rgba(16, 185, 129, 0.9); color: #064e3b;">✓ ĐÃ PHÁ ÁN</span>':'<span class="badge-pill" style="background: rgba(239, 68, 68, 0.9); color: #ffffff;">🕵️ ĐANG MỞ</span>'}
          </div>
        </div>
        <div>
          <div class="topic-tag" style="color: var(--accent-crimson);">${l.code} • ${l.dossierLevel}</div>
          <h4>${l.title}</h4>
          <p style="font-size: 0.8rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${l.backgroundStory}
          </p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.75rem; margin-top: 0.5rem;">
          <span style="font-size: 0.75rem; color: #fca5a5; font-weight: 600;">Phân loại manh mối</span>
          <span style="font-size: 0.85rem; color: var(--accent-crimson); font-weight: 700;">Vào phá án →</span>
        </div>
      </div>
    `}),e.innerHTML=`
    <div class="container animate-fade-in" style="padding-bottom: 5rem;">
      <div class="journey-header" style="padding: 1.8rem 0 1.2rem; text-align: center;">
        <div style="display: inline-flex; align-items: center; justify-content: center; gap: 1.2rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
          <img src="./assets/images/portraits/marx-lenin-banner.svg" alt="C. Mác & V.I. Lênin" style="height: 52px; max-width: 130px; object-fit: contain; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);" />
          <div style="text-align: left;">
            <h2 style="font-size: 1.7rem; margin: 0; color: #ffffff;">Bản Đồ Hành Trình MLN111</h2>
            <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Học thuyết Triết học Mác – Lênin qua các tình huống đời sống thực tế</p>
          </div>
        </div>
        ${o>0?`
          <div style="margin-top: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
            <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3);">
              Tiến trình: ${o}/${d} (${y}%)
            </span>
            <button class="nav-btn" id="map-reset-btn" style="border-color: rgba(239, 68, 68, 0.35); color: #fca5a5; font-size: 0.8rem; padding: 0.3rem 0.8rem;">
              <span>↺ Làm lại từ đầu</span>
            </button>
          </div>
        `:""}
      </div>

      <div class="chapter-track">
        ${p}

        <!-- Special Module: Detective Bureau -->
        <section class="glass-panel chapter-card animate-slide-up" style="border: 2px solid rgba(239, 68, 68, 0.35); background: linear-gradient(180deg, rgba(13, 18, 31, 0.95), rgba(69, 10, 10, 0.2));">
          <div class="chapter-top">
            <div class="chapter-heading">
              <div class="ch-code" style="color: var(--accent-crimson);">${s.badge}</div>
              <h3>${s.titleVi} (${s.title})</h3>
              <p>${s.desc}</p>
            </div>
            <div style="text-align: right;">
              <span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: var(--accent-crimson); border: 1px solid rgba(239, 68, 68, 0.4);">
                HỒ SƠ ĐIỀU TRA
              </span>
              <div style="margin-top: 0.5rem; font-size: 0.85rem; font-weight: 700; color: #fca5a5;">
                ${Object.keys(a).length} / ${L.length} Vụ án đã phá
              </div>
            </div>
          </div>

          <div class="scenario-grid">
            ${u}
          </div>
        </section>
      </div>
    </div>
  `,e.querySelectorAll(".scenario-item-card[data-id]").forEach(l=>{l.addEventListener("click",()=>{g.playClick();const f=l.getAttribute("data-id");n(f)})}),e.querySelectorAll(".scenario-item-card[data-case-id]").forEach(l=>{l.addEventListener("click",()=>{g.playClick();const f=l.getAttribute("data-case-id");t(f)})});const b=document.getElementById("map-reset-btn");b&&h&&b.addEventListener("click",()=>{g.playClick(),h()})}function nn(e,n,t,h){const i=C.find(y=>y.id===n);if(!i){e.innerHTML='<div class="container" style="padding: 4rem 0;"><p>Không tìm thấy tình huống.</p></div>';return}const a=v.state.completedScenarios[i.id];let o=a?i.options.find(y=>y.id===a.optionId):null;function d(){let y="";i.options.forEach(s=>{let u="";o&&o.id===s.id&&(u=s.isDialectical?"selected-dialectical":"selected-warning"),y+=`
        <button class="option-btn ${u}" data-opt-id="${s.id}" ${o?"disabled":""}>
          <div class="opt-letter">${s.id}</div>
          <div style="flex-grow: 1;">${s.text}</div>
          <span class="opt-badge-tag">${o&&o.id===s.id?s.isDialectical?"✓ Đạt Biện Chứng":"⚠️ Lệch Lạc":"Phương Án"}</span>
        </button>
      `});let p="";if(o){const s=o.isDialectical?"./assets/images/outcomes/outcome-dialectical-success.svg":"./assets/images/outcomes/outcome-subjective-failure.svg";p=`
        <div class="feedback-stepper animate-slide-up">
          <!-- STAGE 1: YOUR CHOICE -->
          <div class="feedback-step-card step-choice">
            <div class="step-label">
              <span>🎯</span>
              <span>1. LỰA CHỌN CỦA BẠN (YOUR CHOICE)</span>
            </div>
            <p style="font-size: 1rem; color: #f8fafc; font-weight: 600;">
              Lựa chọn [${o.id}]: ${o.text}
            </p>
          </div>

          <!-- STAGE 2: CONSEQUENCE WITH DEDICATED OUTCOME IMAGE -->
          <div class="feedback-step-card step-consequence">
            <div class="step-label">
              <span>⚡</span>
              <span>2. HỆ QUẢ ĐỜI THỰC (CONSEQUENCE)</span>
            </div>
            <img class="outcome-image-banner" src="${s}" alt="Hình ảnh kết quả tương ứng" />
            <div class="consequence-narrative-box">
              <span class="narrative-tag">DIỄN BIẾN &amp; HỆ QUẢ THỰC TẾ:</span>
              <p style="font-size: 1.02rem; color: #fde68a; line-height: 1.75; margin-top: 0.35rem;">
                ${o.consequence}
              </p>
            </div>
          </div>

          <!-- STAGE 3: PHILOSOPHY ANALYSIS -->
          <div class="feedback-step-card step-analysis">
            <div class="step-label">
              <span>🔍</span>
              <span>3. LĂNG KÍNH TRIẾT HỌC MÁC – LÊNIN (PHILOSOPHY ANALYSIS)</span>
            </div>
            <p style="font-size: 1rem; color: #e9d5ff; line-height: 1.75; margin-bottom: 0.8rem;">
              ${o.philosophicalLens}
            </p>
            <div style="border-top: 1px dashed rgba(168, 85, 247, 0.3); padding-top: 0.8rem; font-size: 0.92rem; color: #cbd5e1;">
              <strong>Cơ sở lý luận MLN111:</strong> ${i.explanation}
            </div>
          </div>

          <!-- STAGE 4: WHAT YOU JUST LEARNED -->
          <div class="feedback-step-card step-learned">
            <div class="step-label">
              <span>💡</span>
              <span>4. BÀI HỌC PHƯƠNG PHÁP LUẬN CỐT LÕI (WHAT YOU JUST LEARNED)</span>
            </div>
            <p style="font-size: 1.05rem; color: #a7f3d0; font-weight: 600; line-height: 1.75;">
              "${i.coreLesson}"
            </p>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="stepper-actions">
            <button class="btn-secondary" id="retry-scenario-btn">
              <span>↺ Thử chọn phương án khác</span>
            </button>
            <button class="btn-primary" id="continue-scenario-btn">
              <span>TIẾP TỤC HÀNH TRÌNH →</span>
            </button>
          </div>
        </div>
      `}if(e.innerHTML=`
      <div class="container scenario-player-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="scenario-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div style="display: flex; gap: 0.6rem; align-items: center;">
            <span class="concept-pill">${i.philosophyConcept}</span>
            <span class="badge-pill" style="background: rgba(255,255,255,0.06); color: #94a3b8;">
              ${i.difficulty.toUpperCase()}
            </span>
          </div>
        </div>

        <!-- Main Scenario Card -->
        <div class="scenario-card-main">
          <!-- Mandatory Large Visual -->
          <div class="scenario-visual-box">
            <img class="scenario-large-image" src="${i.image}" alt="${i.title}" />
          </div>

          <!-- Meta Bar -->
          <div class="scenario-meta-bar">
            <span style="font-weight: 700; color: #cbd5e1; font-size: 0.85rem;">
              Chương ${i.chapter} • ${i.topic}
            </span>
            <span style="font-size: 0.8rem; color: #94a3b8;">Mã tình huống: ${i.id}</span>
          </div>

          <!-- Body -->
          <div class="scenario-body">
            <h2 class="scenario-title">${i.title}</h2>

            <!-- Real-life situation context -->
            <div class="situation-story-box">
              <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.4rem;">
                📌 Tình huống đời sống:
              </strong>
              ${i.situation}
            </div>

            <!-- The Dilemma Question -->
            <div class="question-box">
              <div class="question-title">
                <span>❓</span>
                <span>${i.question}</span>
              </div>

              <!-- Options Grid -->
              <div class="options-grid">
                ${y}
              </div>
            </div>

            <!-- Dynamic 4-Stage Feedback -->
            ${p}
          </div>
        </div>
      </div>
    `,document.getElementById("scenario-back-btn").addEventListener("click",()=>{g.playClick(),t()}),!o)e.querySelectorAll(".option-btn").forEach(s=>{s.addEventListener("click",()=>{const u=s.getAttribute("data-opt-id");o=v.recordScenarioAnswer(i.id,u).option,d(),setTimeout(()=>{const l=e.querySelector(".feedback-stepper");l&&l.scrollIntoView({behavior:"smooth",block:"nearest"})},100)})});else{const s=document.getElementById("retry-scenario-btn");s&&s.addEventListener("click",()=>{g.playClick(),o=null,d()});const u=document.getElementById("continue-scenario-btn");u&&u.addEventListener("click",()=>{g.playClick(),h(i.id)})}}d()}function tn(e,n){let t=30,h=!1;function i(a){return a<25?{stage:"KHỞI ĐẦU CHƯA THẤY KẾT QUẢ",icon:"🐢",img:"./assets/images/slider/stage-beginner.svg",color:"#94a3b8",title:"0h – 25h: Giai đoạn bắt đầu",desc:'Mỗi dòng code, từ vựng hay khái niệm đều lạ lẫm. Bạn cảm thấy bối rối, làm gì cũng vấp váp và có cảm giác mình "không có năng khiếu". Nhiều người nản chí bỏ cuộc ngay tại đây!',statusBadge:"LƯỢNG TÍCH LŨY RẤT ÍT"}:a<60?{stage:"TÍCH LŨY TRONG GIỚI HẠN ĐỘ",icon:"🌱",img:"./assets/images/slider/stage-measure.svg",color:"#38bdf8",title:'25h – 60h: Trong phạm vi "ĐỘ" (Measure)',desc:'Lượng tri thức và giờ thực hành đang âm thầm tăng lên. Tuy nhiên về "Chất" (năng lực tư duy phản xạ) vẫn chưa có biến đổi căn bản. Đây là sự kiên trì cần thiết mà mọi chuyên gia đều phải đi qua.',statusBadge:'TRONG PHẠM VI "ĐỘ"'}:a<80?{stage:"TIẾN SÁT ĐIỂM NÚT",icon:"🔥",img:"./assets/images/slider/stage-node.svg",color:"#f59e0b",title:'60h – 79h: Chuẩn bị chạm "ĐIỂM NÚT"',desc:"Áp lực và khối lượng bài tập dồn dập. Các mắt xích tư duy bắt đầu kết nối với nhau. Năng lượng tích lũy sắp đạt tới giới hạn chịu đựng của chất cũ!",statusBadge:"SÁT ĐIỂM NÚT (80h)"}:{stage:"BƯỚC NHẢY ĐÃ KÍCH HOẠT!",icon:"⚡🚀",img:"./assets/images/slider/stage-leap.svg",color:"#10b981",title:"80h – 100h: BƯỚC NHẢY VỌT VỀ CHẤT (Leap)",desc:"BÙNG NỔ! Lượng tích lũy đã vượt qua Điểm Nút (80h). Bạn thực hiện Bước Nhảy vọt: Kỹ năng từ chỗ ngập ngừng chắp vá đã biến đổi căn bản thành phản xạ tinh thông tự nhiên! Chất cũ mất đi, chất mới cao cấp hơn ra đời!",statusBadge:"BƯỚC NHẢY VỌT THÀNH CÔNG!"}}function c(){const a=i(t),o=t>=80;e.innerHTML=`
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
            ${o?`
              <div class="leap-blast-overlay">
                <div class="leap-burst-badge">💥 BƯỚC NHẢY!</div>
              </div>
            `:""}

            <div class="lab-state-avatar" style="width: 100%; max-width: 520px;">
              <img src="${a.img}" alt="${a.title}" style="width: 100%; max-height: 160px; object-fit: contain; margin-bottom: 1.2rem; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.5));" />
              <div class="lab-state-title" style="color: ${a.color};">
                ${a.title}
              </div>
              <p class="lab-state-desc" style="margin: 0 auto;">${a.desc}</p>
            </div>
          </div>

          <!-- Slider Controls -->
          <div class="slider-control-box">
            <div class="slider-labels-row">
              <span style="color: #94a3b8;">Thời gian tích lũy:</span>
              <span style="color: var(--accent-gold); font-size: 1.3rem; font-weight: 800;">
                <span id="slider-val-display">${t}</span> Giờ Học / Rèn Luyện
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
              value="${t}" 
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
    `,document.getElementById("slider-back-btn").addEventListener("click",()=>{g.playClick(),n()}),document.getElementById("hours-slider-input").addEventListener("input",y=>{t=parseInt(y.target.value,10),document.getElementById("slider-val-display").textContent=t,t>=80&&!h?(h=!0,g.playLeapBoom(),v.recordSliderLeap()):t<80&&(h=!1),c();const p=document.getElementById("hours-slider-input");p&&p.focus()})}c()}function hn(e,n,t,h){const i=L.find(p=>p.id===n)||L[0],c={};let a=null,o=null,d=!!v.state.detectiveSolved[i.id];d&&(i.clues.forEach(p=>{c[p.id]=p.correctCategory}),o={isAllCorrect:!0,errors:[]});function y(){const p=i.clues.filter(r=>!c[r.id]);let s="";p.forEach(r=>{const k=a===r.id;s+=`
        <div class="clue-chip ${k?"active-selection":""}" data-clue-id="${r.id}">
          <span>📌</span>
          <span>${r.text}</span>
        </div>
      `}),p.length===0&&!d&&!(o!=null&&o.isAllCorrect)&&(s='<div style="color: #94a3b8; font-style: italic;">Đã xếp tất cả manh mối vào bảng. Hãy bấm nút Kiểm tra bên dưới!</div>');let u="";i.categories.forEach(r=>{const k=i.clues.filter(T=>c[T.id]===r.id);let m="";k.forEach(T=>{let N="";o&&!o.isAllCorrect&&T.correctCategory!==r.id&&(N='style="border-color: #ef4444; background: rgba(239, 68, 68, 0.2);"'),m+=`
          <div class="clue-chip" data-clue-id="${T.id}" ${N}>
            <span>🔍</span>
            <span style="flex-grow: 1;">${T.text}</span>
            <button class="remove-clue-btn" data-remove-id="${T.id}" style="color: #94a3b8; padding: 2px 6px; font-weight: bold;" title="Bỏ ra">✕</button>
          </div>
        `}),u+=`
        <div class="category-bucket ${a?"ready-to-assign":""}" data-bucket-id="${r.id}" style="border-top: 4px solid ${r.color};">
          <div class="bucket-header">
            <div class="bucket-name" style="color: ${r.color};">${r.name}</div>
            <div class="bucket-desc">${r.desc}</div>
          </div>
          <div class="bucket-clues-list">
            ${m.length>0?m:'<div style="color: #64748b; font-size: 0.8rem; text-align: center; margin: auto;">Thả hoặc bấm chọn manh mối vào đây</div>'}
          </div>
        </div>
      `});let b="";L.forEach(r=>{const k=r.id===i.id,m=!!v.state.detectiveSolved[r.id];b+=`
        <button class="nav-btn ${k?"active":""}" data-switch-case="${r.id}" style="${k?"border-color: var(--accent-crimson); background: rgba(239, 68, 68, 0.2);":""}">
          <span>${r.code}</span>
          ${m?'<span style="color: var(--accent-emerald);">✓</span>':""}
        </button>
      `});let l="";if(o!=null&&o.isAllCorrect||d){const r=i.philosophicalVerdict;l=`
        <div class="verdict-box animate-slide-up">
          <img src="./assets/images/cases/seal-verdict-solved.svg" alt="Huy hiệu phá án" style="width: 110px; height: 110px; float: right; margin: 0 0 1rem 1.5rem; filter: drop-shadow(0 0 18px rgba(251, 191, 36, 0.6));" />
          <div class="verdict-badge">🏆 VỤ ÁN ĐÃ ĐƯỢC PHÁ GIẢI HOÀN TOÀN!</div>
          <h3 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.4rem;">
            ${r.headline}
          </h3>
          <div style="font-size: 0.9rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 1rem;">
            Khái niệm triết học cốt lõi: ${r.concept}
          </div>
          <div class="verdict-analysis-text">
            ${r.analysis}
          </div>
          <div style="display: flex; gap: 1rem; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
            <span style="color: #a7f3d0; font-weight: 700;">+${r.xpAwarded} XP Đã cộng vào hồ sơ!</span>
            <button class="btn-primary" id="detective-continue-btn">
              <span>TIẾP TỤC KHÁM PHÁ →</span>
            </button>
          </div>
        </div>
      `}e.innerHTML=`
      <div class="container detective-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="detective-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div style="display: flex; gap: 0.5rem;">
            ${b}
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
              <img src="${i.image}" alt="${i.title}" style="width: 100%; max-height: 320px; object-fit: cover;" />
            </div>

            <!-- Case Story context -->
            <div>
              <div style="color: var(--accent-crimson); font-size: 0.85rem; font-weight: 800; letter-spacing: 0.05em; margin-bottom: 0.4rem;">
                ${i.code} • ${i.dossierLevel}
              </div>
              <h2 style="font-size: 1.6rem; margin-bottom: 0.6rem; color: #ffffff;">${i.title}</h2>
              <p style="color: var(--accent-gold); font-size: 0.95rem; margin-bottom: 1.2rem;">${i.subtitle}</p>
              
              <div class="detective-story-box">
                <strong style="color: #f87171; display: block; margin-bottom: 0.3rem;">Bối cảnh điều tra:</strong>
                ${i.backgroundStory}
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
            ${!d&&!(o!=null&&o.isAllCorrect)?`
              <button class="btn-primary" id="validate-clues-btn" style="background: linear-gradient(135deg, #dc2626, #ef4444); box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);">
                <span>🔍 KIỂM TRA PHÂN LOẠI</span>
              </button>
            `:""}
          </div>

          <!-- Unassigned Clues Tray -->
          <div class="unassigned-clues-section">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold); display: flex; align-items: center; gap: 0.4rem;">
              <span>📁</span>
              <span>Khay Manh Mối Cần Phân Loại (${p.length}):</span>
            </div>
            <div class="clues-grid">
              ${s}
            </div>
          </div>

          <!-- Target Buckets -->
          <div class="categories-bucket-grid">
            ${u}
          </div>

          <!-- Error Alert if validation failed -->
          ${o&&!o.isAllCorrect?`
            <div style="margin-top: 1.5rem; padding: 1rem 1.5rem; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); color: #fca5a5; font-size: 0.95rem;">
              ⚠️ Vẫn còn manh mối bị xếp sai danh mục hoặc chưa xếp hết! Hãy đọc kỹ định nghĩa các phạm trù và thử lại.
            </div>
          `:""}

          <!-- Verdict Section -->
          ${l}
        </div>
      </div>
    `,document.getElementById("detective-back-btn").addEventListener("click",()=>{g.playClick(),t()}),e.querySelectorAll("[data-switch-case]").forEach(r=>{r.addEventListener("click",()=>{g.playClick();const k=r.getAttribute("data-switch-case");h(k)})}),e.querySelectorAll(".unassigned-clues-section .clue-chip").forEach(r=>{r.addEventListener("click",()=>{g.playClick();const k=r.getAttribute("data-clue-id");a=a===k?null:k,y()})}),e.querySelectorAll(".category-bucket").forEach(r=>{r.addEventListener("click",k=>{if(!k.target.classList.contains("remove-clue-btn")&&a){const m=r.getAttribute("data-bucket-id");c[a]=m,a=null,g.playClueSnap(),o=null,y()}})}),e.querySelectorAll(".remove-clue-btn").forEach(r=>{r.addEventListener("click",k=>{k.stopPropagation(),g.playClick();const m=r.getAttribute("data-remove-id");delete c[m],o=null,y()})});const f=document.getElementById("validate-clues-btn");f&&f.addEventListener("click",()=>{if(!i.clues.every(m=>c[m.id])){alert("Vui lòng xếp toàn bộ manh mối vào các danh mục trước khi kiểm tra!");return}let k=[];i.clues.forEach(m=>{c[m.id]!==m.correctCategory&&k.push(m.id)}),k.length===0?(o={isAllCorrect:!0,errors:[]},d=!0,v.recordDetectiveSolved(i.id),y()):(g.playWarning(),o={isAllCorrect:!1,errors:k},y())});const q=document.getElementById("detective-continue-btn");q&&q.addEventListener("click",()=>{g.playClick(),t()})}y()}function cn(e,n){const t=v.getProfile(),h=t.archetype,i=X(t.dimensionScores,300);let c="";P.forEach(d=>{const y=t.dimensionScores[d.key]||50;c+=`
      <div style="margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.3rem;">
          <span style="color: #cbd5e1;">${d.name}</span>
          <span style="color: ${d.color};">${y}%</span>
        </div>
        <div style="width: 100%; height: 8px; background: #1e293b; border-radius: 4px; overflow: hidden;">
          <div style="width: ${y}%; height: 100%; background: ${d.color}; border-radius: 4px; transition: width 0.8s ease;"></div>
        </div>
        <div style="font-size: 0.72rem; color: #64748b; margin-top: 0.2rem;">${d.desc}</div>
      </div>
    `});let a="";h.strengths.forEach(d=>{a+=`<li style="margin-bottom: 0.3rem;">✓ ${d}</li>`}),e.innerHTML=`
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
        <div style="background: rgba(30, 41, 59, 0.7); border: 2px solid ${h.accentColor}; border-radius: var(--radius-md); padding: 1.8rem; margin-bottom: 2rem; position: relative; overflow: hidden;">
          <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
            <div style="font-size: 4rem; filter: drop-shadow(0 0 15px rgba(255,255,255,0.2));">
              ${h.icon}
            </div>
            <div style="flex-grow: 1;">
              <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; color: ${h.accentColor};">
                HÌNH MẪU TƯ DUY (ARCHETYPE)
              </div>
              <h3 style="font-size: 1.6rem; color: #ffffff; margin-bottom: 0.3rem;">
                ${h.title}
              </h3>
              <p style="color: var(--accent-gold); font-size: 0.92rem; font-style: italic; margin-bottom: 0.6rem;">
                "${h.tagline}"
              </p>
              <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
                ${h.description}
              </p>
            </div>
          </div>

          <div style="margin-top: 1.2rem; padding-top: 1.2rem; border-top: 1px solid rgba(255,255,255,0.08); display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <strong style="font-size: 0.82rem; color: var(--accent-cyan); display: block; margin-bottom: 0.4rem;">
                ĐIỂM MẠNH TƯ DUY:
              </strong>
              <ul style="list-style: none; padding: 0; font-size: 0.82rem; color: #94a3b8;">
                ${a}
              </ul>
            </div>
            <div>
              <strong style="font-size: 0.82rem; color: var(--accent-gold); display: block; margin-bottom: 0.4rem;">
                LỜI KHUYÊN PHÁT TRIỂN:
              </strong>
              <p style="font-size: 0.82rem; color: #94a3b8; line-height: 1.5;">
                ${h.lifeAdvice}
              </p>
            </div>
          </div>
        </div>

        <!-- 5-Dimensional Radar & Progress Bars -->
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: center;">
          <div style="text-align: center;">
            <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.5rem;">Biểu Đồ Radar 5 Chiều</h4>
            <div style="display: flex; justify-content: center;">
              ${i}
            </div>
            <div style="font-size: 0.78rem; color: #64748b; margin-top: 0.5rem;">
              Điểm tổng hợp trung bình: <strong style="color: var(--accent-cyan);">${t.averageScore}%</strong>
            </div>
          </div>

          <div>
            <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 1rem;">Chi Tiết Từng Chiều Tư Duy</h4>
            ${c}
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
  `,document.getElementById("profile-close-btn").addEventListener("click",()=>{g.playClick(),n()}),document.getElementById("profile-done-btn").addEventListener("click",()=>{g.playClick(),n()}),document.getElementById("profile-modal-overlay").addEventListener("click",d=>{d.target.id==="profile-modal-overlay"&&(g.playClick(),n())});const o=document.getElementById("profile-reset-btn");o&&o.addEventListener("click",()=>{g.playClick(),confirm("Bạn có muốn làm lại từ đầu không? Toàn bộ tiến trình làm bài và điểm số sẽ được đặt lại về 0.")&&(v.resetProgress(),n())}),document.getElementById("print-certificate-btn").addEventListener("click",()=>{g.playClick(),window.print()})}function en(e,n){const h=v.state.unlockedBadges;let i="";$.forEach(c=>{const a=h.includes(c.id);i+=`
      <div class="badge-card ${a?"unlocked":"locked"}">
        <div class="badge-icon">${c.icon}</div>
        <h4 style="color: ${a?"#ffffff":"#64748b"};">${c.name}</h4>
        <div style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 0.3rem;">${c.nameVi}</div>
        <p style="margin-bottom: 0.6rem;">${c.desc}</p>
        <div style="font-size: 0.72rem; color: ${a?"var(--accent-emerald)":"#64748b"}; font-weight: 600; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 0.4rem;">
          ${a?"✓ ĐÃ MỞ KHÓA":`Điều kiện: ${c.requirement}`}
        </div>
      </div>
    `}),e.innerHTML=`
    <div class="modal-overlay open" id="badges-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 800px;">
        <button class="modal-close-btn" id="badges-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.7rem; margin-bottom: 0.3rem;">Bảng Vinh Danh Huy Hiệu</h2>
          <p style="font-size: 0.85rem; color: #94a3b8;">
            Bạn đã mở khóa <strong>${h.length}</strong> / <strong>${$.length}</strong> danh hiệu triết học.
          </p>
        </div>

        <div class="badges-grid">
          ${i}
        </div>
      </div>
    </div>
  `,document.getElementById("badges-close-btn").addEventListener("click",()=>{g.playClick(),n()}),document.getElementById("badges-modal-overlay").addEventListener("click",c=>{c.target.id==="badges-modal-overlay"&&(g.playClick(),n())})}const an=[{chapter:1,chapterTitle:"Khái luận về Triết học",topics:[{title:"Nguồn gốc của Triết học",summary:"Triết học ra đời từ 2 nguồn gốc: Nguồn gốc nhận thức (tư duy con người đạt trình độ trừu tượng hóa, hệ thống hóa thế giới quan) và Nguồn gốc xã hội (phân công lao động, trí óc tách khỏi chân tay, xuất hiện giai cấp).",lifeLesson:"Những trăn trở về ý nghĩa cuộc đời là nhu cầu tự nhiên để con người định vị bản thân trong vũ trụ và xã hội."},{title:"Vấn đề cơ bản của Triết học",summary:"Mối quan hệ giữa tư duy và tồn tại (ý thức và vật chất). Mặt thứ 1 (Bản thể luận): Cái nào có trước, cái nào quyết định cái nào? Mặt thứ 2 (Nhận thức luận): Con người có nhận thức được thế giới không?",lifeLesson:"Khi tranh luận về công nghệ hay hiện tượng mới (như AI, metaverse), hãy tìm hiểu cơ sở vật chất sinh ra nó trước tiên."},{title:"Phương pháp Biện chứng vs Siêu hình",summary:"Biện chứng: Xem xét sự vật trong sự vận động, chuyển hóa và mối liên hệ phổ biến. Siêu hình: Xem xét sự vật trong trạng thái cô lập, tĩnh tại, bất biến.",lifeLesson:"Không chụp mũ hay đánh giá bất kỳ ai bằng một sai lầm trong quá khứ. Mọi người đều đang vận động và có thể chuyển hóa."}]},{chapter:2,chapterTitle:"Phép Biện Chứng Duy Vật (Trọng tâm)",topics:[{title:"Vật chất & Ý thức",summary:"Vật chất là thực tại khách quan, có trước và quyết định ý thức. Ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua hoạt động thực tiễn của con người. Bài học: Tôn trọng khách quan kết hợp phát huy tính năng động chủ quan; chống bệnh chủ quan duy ý chí.",lifeLesson:"Ước mơ muốn thành hiện thực phải bắt đầu từ việc tôn trọng điều kiện khách quan (sức khỏe, thời gian, nguồn lực)."},{title:"Hai Nguyên lý Biện chứng",summary:"1. Nguyên lý mối liên hệ phổ biến -> Rút ra Quan điểm toàn diện và lịch sử - cụ thể. 2. Nguyên lý sự phát triển -> Rút ra Quan điểm phát triển (quá trình đi lên quanh co theo đường xoắn ốc).",lifeLesson:"Thất bại tạm thời chỉ là mắt xích quanh co của con đường phát triển. Đừng bi quan khi gặp khúc cua khó!"},{title:"Quy luật Lượng – Chất",summary:"Sự tích lũy dần dần về Lượng trong phạm vi Độ khi đạt tới Điểm Nút sẽ dẫn tới Bước Nhảy, làm biến đổi căn bản về Chất. Chất mới ra đời lại quy định lượng mới.",lifeLesson:"Muốn trở thành chuyên gia, hãy kiên trì tích lũy đủ 100 giờ rèn luyện. Bước nhảy sẽ tự khắc bùng nổ khi tích lũy đủ lượng."},{title:"Quy luật Mâu thuẫn (Hạt nhân PBC)",summary:"Mọi sự vật đều chứa đựng các mặt đối lập. Sự thống nhất và đấu tranh của các mặt đối lập là nguồn gốc và động lực của sự vận động và tự thân phát triển.",lifeLesson:"Mâu thuẫn giữa kiếm sống và học hành không phải rào cản, mà là lò luyện giúp bạn trở nên kiên cường và đa năng."},{title:"Bản chất và Hiện tượng",summary:"Bản chất là cái bên trong sâu sắc; Hiện tượng là cái biểu hiện ra bên ngoài. Hiện tượng có thể phản ánh đúng hoặc xuyên tạc bản chất (giả tượng).",lifeLesson:"Có mặt điểm danh 100% chỉ là hiện tượng bề nổi; tư duy chủ động và hấp thụ tri thức mới là bản chất quyết định năng lực."},{title:"Thực tiễn & Tiêu chuẩn Chân lý",summary:"Thực tiễn là toàn bộ hoạt động vật chất - cảm tính có tính lịch sử - xã hội. Thực tiễn là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn duy nhất của chân lý.",lifeLesson:"Đọc 100 cuốn sách bơi lội không bằng một lần nhảy xuống dòng nước. Hãy đem lý thuyết ra thử lửa với thực tiễn!"}]},{chapter:3,chapterTitle:"Chủ nghĩa Duy vật Lịch sử",topics:[{title:"Quy luật LLSX và QHSX",summary:"Lực lượng sản xuất (công cụ lao động, người lao động) quyết định Quan hệ sản xuất (sở hữu, tổ chức, phân phối). Khi LLSX phát triển, QHSX phải biến đổi phù hợp theo.",lifeLesson:"Khi công cụ AI phát triển nhảy vọt, mọi quy chế làm việc và phân phối thù lao cũ kỹ bắt buộc phải cải tổ để tránh khủng hoảng."},{title:"Tồn tại XH & Ý thức XH",summary:"Tồn tại xã hội quyết định ý thức xã hội. Ý thức xã hội có tính độc lập tương đối: có thể lạc hậu hơn, vượt trước và tác động trở lại mạnh mẽ tồn tại xã hội.",lifeLesson:"Trào lưu khoe khoang xa xỉ trên mạng chỉ là ảo ảnh của nền kinh tế tiêu dùng. Hãy giữ vững bản lĩnh và giá trị thực chất."},{title:"Bản chất Con người",summary:"Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội. Con người vừa là sản phẩm, vừa là chủ thể sáng tạo ra lịch sử thông qua hoạt động thực tiễn.",lifeLesson:"Bạn không bị đóng khung bởi quá khứ. Hãy dấn thân vào tập thể, cống hiến cho xã hội để kiến tạo phiên bản rực rỡ nhất của chính mình."}]}];function on(e,n){let t="";an.forEach(h=>{let i="";h.topics.forEach(c=>{i+=`
        <div style="background: rgba(30, 41, 59, 0.45); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1rem;">
          <h4 style="font-size: 1.05rem; color: var(--accent-cyan); margin-bottom: 0.4rem;">
            📌 ${c.title}
          </h4>
          <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 0.6rem;">
            <strong>Lý thuyết cốt lõi:</strong> ${c.summary}
          </p>
          <div style="background: rgba(251, 191, 36, 0.08); border-left: 3px solid var(--accent-gold); padding: 0.6rem 0.9rem; font-size: 0.84rem; color: #fde68a;">
            💡 <strong>Vận dụng vào đời sống:</strong> ${c.lifeLesson}
          </div>
        </div>
      `}),t+=`
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.4rem; margin-bottom: 1rem;">
          Chương ${h.chapter}: ${h.chapterTitle}
        </h3>
        <div>${i}</div>
      </div>
    `}),e.innerHTML=`
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
          ${t}
        </div>
      </div>
    </div>
  `,document.getElementById("handbook-close-btn").addEventListener("click",()=>{g.playClick(),n()}),document.getElementById("handbook-modal-overlay").addEventListener("click",h=>{h.target.id==="handbook-modal-overlay"&&(g.playClick(),n())})}function Q(e,n,t){if(!n){e.innerHTML="";return}e.innerHTML=`
    <div class="badge-popup-overlay" id="badge-popup-backdrop">
      <div class="badge-popup-card">
        <div class="badge-popup-icon">${n.icon}</div>
        <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em; color: #cbd5e1; text-transform: uppercase;">
          🎉 BẠN VỪA MỞ KHÓA HUY HIỆU MỚI!
        </div>
        <h3 class="badge-popup-title">${n.name}</h3>
        <div style="font-size: 0.95rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 0.8rem;">
          ${n.nameVi}
        </div>
        <p style="font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin-bottom: 1.5rem;">
          ${n.desc}
        </p>
        <button class="btn-primary" id="claim-badge-btn" style="width: 100%; justify-content: center;">
          <span>TUYỆT VỜI, TIẾP TỤC!</span>
        </button>
      </div>
    </div>
  `,document.getElementById("claim-badge-btn").addEventListener("click",()=>{g.playClick(),t()}),document.getElementById("badge-popup-backdrop").addEventListener("click",h=>{h.target.id==="badge-popup-backdrop"&&(g.playClick(),t())})}const G=document.getElementById("navbar-container"),H=document.getElementById("main-content-container"),D=document.getElementById("modal-container"),M=document.getElementById("popup-container");let B="landing",_=null,z=null;function x(e,n=null){B=e,window.scrollTo({top:0,behavior:"smooth"}),e==="scenario"?(_=n,n==="C2-M3-SLIDER"&&(B="slider")):e==="detective"&&(z=n||L[0].id),O()}function sn(e){const n=C.findIndex(t=>t.id===e);if(n>=0&&n<C.length-1){const t=C[n+1];x("scenario",t.id)}else x("detective")}function U(e){e==="profile"?cn(D,E):e==="badges"?en(D,E):e==="handbook"&&on(D,E)}function E(){D.innerHTML=""}function A(){v.state.xp>0||Object.keys(v.state.completedScenarios).length>0||Object.keys(v.state.detectiveSolved).length>0?confirm("Bạn có muốn làm lại từ đầu không? Toàn bộ tiến trình làm bài và điểm số sẽ được đặt lại về 0.")&&(v.resetProgress(),x("map")):(v.resetProgress(),x("map"))}function O(){w(G,x,U,A),B==="landing"?W(H,x):B==="map"?K(H,e=>x("scenario",e),e=>x("detective",e),A):B==="scenario"?nn(H,_,()=>x("map"),sn):B==="slider"?tn(H,()=>x("map")):B==="detective"&&hn(H,z,()=>x("map"),e=>x("detective",e)),v.state.activeBadgePopup?Q(M,v.state.activeBadgePopup,()=>{v.dismissBadgePopup(),M.innerHTML=""}):M.innerHTML=""}v.subscribe(()=>{w(G,x,U,A),B==="map"&&K(H,e=>x("scenario",e),e=>x("detective",e),A),v.state.activeBadgePopup&&Q(M,v.state.activeBadgePopup,()=>{v.dismissBadgePopup(),M.innerHTML=""})});document.addEventListener("DOMContentLoaded",()=>{O()});
