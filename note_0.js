var question =
[
];
var answer = 
[
];
var memorization =
[
'', '정성적 위험분석', '정량적 위험분석', '암스트롱 공리', 'Join', '뉴딜', 'ITIL', 'IEEE 802.11p', '데이터 댐', 'ISO/IEC 27018', 'Cloud 보안', 'IEEE/ISO/IEC 25010', '4 Plus 1 View', '패키지 설계', 'ISO/IEC 20889', '이상값', 'majorstate', '33000', '25000', 'IPv6', 'DHCP', '멀티 클라우드', '쿠버네티스', '12 Factors', 'Smart Grid', 'CMMI', 'SD WAN', '멀티 클라우드', '산업의 디지털 전환 및 지능화 촉진법', 'ASPICE', 'COBIT 5.0', 'Text Mining', '보고서 작성 원칙', '아키텍처 평가', '망분리', 'Privacy By Design', '마이데이터', 'PIA', '자율주행 자동차',
]
var this_week_question =
[
'',

// 17주차 추가
'갠드크랩', 'SCM', '서버리스', 'PIA', '인공지능 학습용 데이터 품질관리 지표', 'Attention', 'GPS`', '산업의 디지털 전환 및 지능화 촉진법', 'ISO 11179',

// 16주차 추가
'ISO 11179', 'TTAK.KO-10.0555', 'Data Mining', 'Hint', '데이터 경제', '구독 경제', '공유 경제', '데이터 댐', 'SW사업', 'GDPR', '패키지 설계원리','R-CNN', 'Optimizer',

// 16주차
'Value Chain', '정규화', 'Design Thinking', 'NoSQL', '다차원 색인', '지능 정보화 기본법', 'DB Stakeholder', '메시지 큐잉', 'DQM', 'API Gateway', '아웃소싱', 'ITSM', '위험분석', 'Standard', 'FRAND', 'IT 투자', '군집분석', 'Data Mining', '다차원 모델링', 'ERD', '관계형 데이터 모델', 'DMBOK', 'BABOK', '아키텍처 모델', 

// Mentor's Pick 
'SD WAN','WAL','Join','MVCC', '토픽 모델링', '시각화', 'NewSQL', 'EM Clustering', 'DBSCAN', 'Living Lab', 'SOS Lab', '시빅(Civic) 해킹', 'COBIT 5.0', '가상융합 경제', '공유 경제', 'Servitization', '뉴딜', 'ITIL', 'SW 진흥법 개정안', 'Red Black Tree', 'AVL Tree', '강화학습', '모방학습', 'AutoML', 'Fitting', '전이학습', 'SOM', 'Computer Vision', 'Downstream Task', 'TF-IDF', 'DCGAN', 'Drop Out', 'Activation Function', 'RNN', 'LSTM', 'GRU', 'CNN', '경량 딥러닝 기술', '베이즈 정리', 'Outlier', '데이터 분석 기술', 'PCA Algorithm', '뉴로모픽', '엑사스케일 컴퓨팅 시스템', 'IaC', 'DevSecOps', 'ISO/IEC/IEEE 42010', 'ISO/IEC 33063', '퍼즈(Fuzz) 테스트', 'Cursory Test', '스모크(Smoke) 테스트', '새너티(Sanity) 테스트', 'CMMI', 'ASPICE', 'SW 사업정보 저장소', '민간투자형 SW 사업', 'RTOS Scheduling', 'Process Aging', 'Web RTC', 'IPv6', 'QUIC', '오류제어', '블루투스 5', '라이파이(Li-Fi)', 'IEEE 802.15.x', 'wifi', '5G', 'SD WAN', '6G', '2020 정부 전자서명법 개정', 'SOAR', '멀버타이징', 'RaaS', 'ISMS', 'CVE', 'ISO/IEC 15408', '멀티 클라우드', 'Cloud 보안', 'Zero Trust 보안 모델', 'ISA/IEC 62443', 'Smart factory', 'Dark Net', 'MaaS', 'LDM', 'ADAS', '오픈소스 거버넌스',
'Micro Grid', '분산 클라우드', 'PaaS-TA', 'Open Shift', '쿠버네티스', 'MPEG', 'XR', '안티드론', '프롭테크', '레그테크', '핀테크', 'ICO', 'De-Fi', '영지식 증명', 'CBDC', '라이트닝 네트워크', '블록체인 오라클 문제', 'PWA', 'Smart City 보안', 

// 15주차 추가
'정형검증', 'PETs', '메타버스', '랜섬웨어', 'DTLS', 'BCP', '초대규모 AI', 'Downstream Task', '이동통신', '2 3 Tree', 'Red Black Tree', '발주', '5 Force', 'FP', 'Gartner',

// 15주차
'NLP', '전처리', 'Vanishing Gradient', '혼동행렬', 'Cross Validation', 'ROC Curve', '능동학습', '지식 증류', '통계', '자료구조', 'Efficient NET', 'NLP', '최단경로 알고리즘', 'Stack', '알고리즘 설계', 'GAN', 'One-Hot Encoding', 'Softmax', '한국판 AI 윤리기준', 'Gradient Descent', '정렬', 'DL FW', '신뢰도', '타당도', 'NER', 'BERT', 'GPT-3',

// ITPE 8회
'데이터베이스 모델링', 'Fitting', '가설검정', 'AutoML', 'PMO', 'CPU Scheduling', '동시성제어', 'Race Condition', 'Linux ID', 'IGMP', '지능형 초연결망', 'IDPP', 'ATT and CK', 'Integrated Development Equipment', 'ESG', 'CBDC', 'Service Architecture', 'Graph Database', 'IO 장치 제어', 'SSL', '혼동행렬', '가명', '공공SW사업 대기업 참여제한 제도', '하인리히 법칙', 'SOAR', 'Information Strategy Plan', '재난 안전 통신망', 'Thrashing', '메타버스', '산업제어시스템', 'ISA/IEC 62443', 'Docker', 'Kubernetes', 'UWB',

// 125회 추가
'Super Block', 'PPP', 'XSS', 'OAuth', '회귀분석', '요구공학', '모듈화', '동기부여', 'OAuth', '전자서명', 'STARLINK Project',

// 13주차 추가
'SAGA', 'FRAND',

// 13주차
'Inversion of Control', '제품 품질', 'Interrupt', '분산 로딩 기법', 'SW 공학', '감리', '요구공학', 'Enterprise Arcitecture', 'Information Strategy', 'MSA', '상호배제', '안전성 분석', 'Scrum', 'Democratization', '양자', 'Lateral Movement', '사이버 디셉션', 'Servitization', '자율', 'MSP', '웹 접근성', 'MoS', '성과관리 방법', 'PCI Express', 'Library', 'Many core CPU', 'PoC', 'Memory leak', 'SIL', 'Flash Memory', '라이선스', 'Cache', 'Agile', 'DMA', 'Network Storage', 'file system', 'ISO 11179',

// 12주차 
'라우팅','NAC','injection','osi 7','보안솔루션','isms','database view','pds','ufs','vue.js','Turing','연결함정','동형암호','GraphQL','안전성 분석','상주감리','ADAS','eMMC','Hadoop','포렌식','Web RTC','정보윤리','wifi','산업제어시스템','UWB','Buffer Overflow','OECD Privacy 8원칙','KYC','ISO/IEC 27017','ISO/IEC 27018','MEC','해밍','Zero Trust','데이터 3법','DNS','6g','보안 Overview',

// 12주차 추가
'IPv6', '가상자산 사업자', 'SASE',

// 11주차 추가
'RAMI 4.0','ASPICE','안티드론','자율주행 자동차','CSB','멀티 클라우드','클라우드 전환',

// 11주차
'ISA', 'MESA', '디지털 휴먼 증강', 'N Screen','오픈소스','블록체인','클라우드','Spatial DB','IMDF', '연합학습', 'Sequence Diagram', '영지식 증명', '소스코딩','GNN','Deep Fake','결측값','이상값','단순 대치법','아키텍처 모델','CBDC','Refactoring','실감협업','SRE','OS Scheduler','MVP','클라우드 보안','사이버 레질리언스','형태 보존 암호화','순서 보존 암호화','SD WAN','Hash Salt','Key Stretching','메모리 관리 기법','오픈소스 거버넌스','UWB','SOS Lab','Privacy By Design','데이터 전송요구권',

// 추가 토픽
'Smart City', 'Smart Grid','뉴딜','라우팅','의료기술','마이데이터','DB Stakeholder','DQM',

// 124회
'Value Chain', '통계 Overview', '회귀 분석','ISA 95','Responsive Web Design', '다차원 색인', 'Frame Relay', '거리벡터 라우팅', 'NAC', '데이터 주권 이슈','데이터 거버넌스', '요구사항 수집기법','DQM','SW 진흥','Heap','SRGM','IPS','IDS','워드 임베딩','오픈소스','Spatial DB','ISMS', '블록체인',

// 추가 토픽
'Smart Contract','AutoML','ASPICE','오픈소스','오픈소스 거버넌스','PaaS-TA','Open Shift','DHCP','분산 클라우드','PQC','테스트 7원칙','DMA','디지털 정책','뉴로모픽','Smart City','자율주행','NFT','Smart Contract','PACELC','NoSQL','BASE','AutoML','연합학습','전자서명','전자봉투','이중서명','아키텍처 평가','시정조치 확인 보고서','운영 감리','유지보수 감리','동기부여','QoS','Cloud GPU','MajorState','뉴로모픽','벨라디 변이','DQC','공공무선 통신망','UWB','경량','전송부호화','ISO 20547',

// 9주차 
'가설검정','섭테크','프롭테크','트랜잭션','Random Sampling','Filtering','K-Means','SOM','Isolation Level','선형회귀모형 추론 가정','Smart Factory','위험관리','IT-Compliance','COBIT 5.0','그로스 해킹','정규 표현식','유한 오토마타','가설검정','병행제어','SVM','ISO 19626','Hilbert','재식별 공격',

// 8주차 
'Library','Python','ALM','SW Visualization','정보시스템 하드웨어 규모산정 지침','CMMI','ISO/IEC 33000','일정관리','WBS','Thread','Process','MVC','MVP','MVVM','테스트 자동화','DB 복제','Scheduling','비용산정','분기 예측',

// 7주차 
'CDR','디지털 포렌식','Secure Coding','무자각 지속 인증','NFV','SDN','Pre-Crime','대역확산','Lateral Movement','양자암호통신','바이오정보 분산관리','FIDO','APT','DDoS','인증기술',

// 6주차 
'지능형 CCTV','LBS','RTLS','Lidar','클라우드','의료기술','컨테이너 오케스트레이션','SCADA','Smart City 보안','인공지능 서비스 플랫폼','CPS','디지털 트윈','Smart Grid','차세대 Healthcare Service',
'CCTV 개인영상 보호방안','12 Factors','C-V2X','Appliance Server','MPEG',

// 5주차 
'타당도','신뢰도','능동학습','opinion','회귀','아웃소싱','Slab allocator','penalty','sip','nosql','증류','기술통계','추론통계','데이터 품질관리 지침','NLP','큐잉','군집분석','IT 투자','API Gateway','국제 표준화 기구',
'Efficient','지능 정보화 기본법','de facto standard','TensorFlow','스타스키마','ERD','관계형 데이터 모델','DataGrid','Graph Database','Back Tracking','분할과정복','Greedy','동적계획법','인공지능 데이터 평가','GAN','Vanishing Gradient Problem',
'Data Warehouse','Data Lake','HOt Encoding','Softmax','AI 윤리','성능검증','머신러닝 파이프라인','Gradient Descent','정렬',

// ITPE 6 
'데이터베이스 트랜잭션', 'DaaS 인증','MC/DC','R-CNN','랜섬웨어','표적형 랜섬웨어','XR','VPN','유전자 알고리즘','비대면 기술','PyTorch','마이데이터','한국판 AI 윤리기준','인공지능 규범 동향','바이오 인증','형상관리','마이데이터','성능 테스트','자기주권형 신원증명','Data Lake','Data Warehouse','IPv6','디지털 트윈','블록암호화','데이터 표준화','전송부호화','소프트웨어 아키텍처','ITIL','페어와이즈','MLOps','병렬 컴퓨팅','KANO Model',

// 탐구 학습 
'클라우드 네이티브 애플리케이션','12 Factors','저전력',

// 암기 목록 
'ISO/IEC 20889', '식별자', 'ISMS-P','ISA/IEC 62443','GDPR','Privacy By Design',

// 라이지움 90회 
'초자동화','ASIL','디지털서비스 전문계약제도','ISO 25000','가설검정','DB 이상현상','Text Mining','Unix',

// ITPE 7회 
'데이터 댐', 'Solid - Social Linked Data','Cloud 보안','OKR','KAMP','Computer Vision','6G','Digital Cartel','ISO 22301','회귀 분석','상관 분석','정규화','21년 개정사항','감리 계획서, 보고서 작성 원칙','이동통신 역사','5G SA','5G NSA','6G 추진 전략','클라우드 포렌식','Activation Function','Transformer','망분리','망연계','Zero Pay','클라우드 네이티브 컴퓨팅','DevOps','인공지능 성능 지표','IoU','CBDC','Living Lab','SOS Lab','SW안전 확보 지침','SWEBOK','DMBOK','BABOK','백투백', 'Fuzz',

];