var question = question.concat(
'4차산업 혁명',
'디지털 뉴딜&혁신 4개분야 12개요소',
'[K뉴딜]- 데이터댐',
'인공지능 서비스 플랫폼',
'[AI]- 인공지능 소프트웨어 보안 취약성',
'[AI]- AI Flow',
'[AI]- XAI',
'[AI][지식표현]- 생성규칙',
'[AI][지식표현]- 의미망',
'[AI][지식표현]- 논리',
'[AI][지식표현]- 프레임',
'[AI]- 클라우드 활용 AI구축 모델',
'[AI]- AI 프로젝트',
'[AI]- Loss Function',
'[AI]- 규범 동향',
'[AI]- Python',
'[AI]- AI국가전략',
'[AI]- 적대적 공격',
'[AI]- 음성비서',
'[AI]- Pre-Crime',
'[AI]- 지능형CCTV',
'Data Mining',
'[Data Mining]- Text Mining',
'[Data Mining]- 단어구름(Word Cloud)',
'[Data Mining]- Co-Word Analysis',
'[Data Mining]- 탐색적 데이터 분석(Exploratory Data Analysis)',
'[Data Mining]- 확증적 데이터 분석(Confimatory Data Analysis)',
'[Data Mining]- 토픽 모델링',
'[Data Mining]- 연관규칙(지지도,신뢰도,향상도)',
'[Data Mining][연관규칙]- Apriori Algorithm',
'[Data Mining]- Opinion Mining',
'[Data Mining]- System Dynamics',
'Flipped Learning(역순 학습, 플립트 러닝, 거꾸로 학습)',
'디지털 사이니지(Digital Signage)',
'[디지털 사이니지(Digital Signage)] - 오픈스크린(Open Screen)',
'[디지털 사이니지(Digital Signage)] - 오픈스크린 프로젝트(Open Screen Project)',
'의료기술',
'[의료기술]- ISO 62304',
'[의료기술]- ISO 25237',
'OTT(Over the top)',
'[OTT]- 웹인증 API(Web Authentication API)',
'인증기술',
'[인증기술]- 바이오 인증',
'[인증기술]- 얼굴인식 알고리즘',
'[인증기술]- 자기주권형 신원증명',
'[인증기술]- DID',
'[인증기술]- 바이오정보 분산관리',
'앰비언트 커머스',
'핀테크',
'[핀테크]- 서비스',
'[핀테크]- 핀테크 오픈플랫폼(FinTech Open Platform) / 핀테크 오픈 API 플랫폼',
'[핀테크]- 핀테크 오픈플랫폼 보안가이드',
'[핀테크]- 인슈어테크',
'[핀테크]- 인터넷 전문 은행',
'[핀테크]- FDS',
'[핀테크]- My Data 산업',
'[핀테]- QR코드 기반 결제',
'[IT 금융]- De-Fi',
'아바커스 프로젝트(Project Abacus)',
'영지식 증명(Zero-knowledge Proof)',
'[이더리움] - 스마트계약(Smart Contract)',
'[3D 프린터]- 팝업팩토리(Pop-up Factory)',
'오감기술',
'모션기술',
'[Web 3.0]- WebRTC',
'[Web 3.0]- React.js',
'[Web 3.0]- REST',
'Semantic Web',
'앱접근성(Mobile App Accessibility)',
'시선통신기술(Line of Sight Communications)',
'[음성인식]- 하이퍼보이스(Hypervioice)',
'모바일 컨시어지(Mobile Concierge)',
'엑사스케일(Exascale) 컴퓨팅 시스템',
'NUI',
'제로 UI',
'데이터브로커',
'가상머신, 컨테이너',
'가상화',
'[가상화]- 하이퍼바이저(Hypervisor)',
'[가상화]- 컨테이너',
'[가상화]- 컨테이너 오케스트레이션',
'[가상화]- 도커(Docker)',
'[가상화][도커]- LXC', 
'[가상화]- 쿠버네티스(Kubernetes)',
'[가상화]- HCI',
'[가상화]- VDI',
'[GIS]- OGC',
'위치정보, 위치기반서비스',
'[스마트 그리드]- AMI',
'[스마트 그리드]- 보안',
'마이크로 그리드(MicroGrid)',
'[산업제어시스템]- SCADA',
'ISO 26262',
'IEC 61508',
'[ISO/IEC 61508]- SIL',
'HILS, HIL 시뮬레이션',
'소프트웨어 안전성 분석(Software Safety Analysis)',
'문자 인코딩',
'3D Sensing',
'오픈뱅킹(Open Banking)',
'ISO 19626',
'YOLO',
'IoMT',
'블록체인',
'[블록체인]- 합의알고리즘',
'[블록체인]- UTXO',
'[블록체인]- 머클트리(Merkle Tree)',
'[블록체인]- 블록체인 오라클 문제',
'[블록체인]- 타원곡선 암호화 알고리즘(ECDSA)',
'[블록체인]- 스마트시티 활용',
'[블록체인]- Off Chain',
'[블록체인]- 블록체인 거버넌스',
'[블록체인]- 플랫폼 보안',
'MaaS',
'BERT',
'자율주행자동차',
'[자율주행자동차]- 트롤리 딜레마',
'[자율주행자동차]- 모랄머신',
'[자율주행자동차]- 군집주행 (Platooning)',
'[자율주행자동차]- LDM',
'[자율주행자동차]- C-ITS',
'Dark Net',
'RPA',
'Process Mining',
'스마트 플랜트',
'클라우드 컴퓨팅',
'[클라우드 컴퓨팅]- 클라우드 전환',
'[클라우드 컴퓨팅]- IaaS, PaaS, Saas',
'[클라우드 컴퓨팅]- PaaS-TA',
'[클라우드 컴퓨팅]- 클라우드 보안이슈',
'[클라우드 컴퓨팅]- 클라우드 컴퓨팅 정책',
'[클라우드 정책]- 정보자원등급 평가기준(2014.04.)',
'[클라우드 정책]- 보안인증 제도',
'[클라우드 컴퓨팅]- Grid Computing',
'[클라우드 컴퓨팅]- Utility Computing',
'[클라우드 컴퓨팅]- Fog Computing',
'[클라우드 컴퓨팅]- CSB',
'[클라우드 컴퓨팅]- 인터클라우드',
'[클라우드 컴퓨팅]- Kafka',
'[클라우드 컴퓨팅]- 멀티 클라우드',
'[클라우드 컴퓨팅]- 차세대 방향성',
'[클라우드 컴퓨팅]- 오픈 스택',
'[클라우드 컴퓨팅][오픈스택]- Swift',
'엣지컴퓨팅',
'레그테크',
'섭테크',
'[HPC]- Singularity',
'2020년 하반기 경제정책 방향',
'Data Lake',
'로보 어드바이저',
'검색엔진',
'[검색엔진]- 색인어 추출',
'[검색엔진]- NLP',
'HTML 5',
'LOD',
'Open API',
'[Open API]- SOAP API',
'[Open API]- REST API',
'Service Worker',
'Ontact',
'디지털트윈',
'스마트 팩토리',
'[스마트 팩토리]- CPS',
'Edge Computing',
'서버리스 컴퓨팅',
'Web Crawling',
'오픈소스 라이선스',
'오픈소스 라이선스 분류',
'[오픈소스 라이선스]- GPL',
'[오픈소스 라이선스]- LGPL',
'[오픈소스 라이선스]- BSD',
'[오픈소스 라이선스]- Apache',
'[오픈소스 라이선스]- MPL',
'[오픈소스 라이선스]- InnerSource',
'[디지털 정책]- 디지털 디바이드',
'[디지털 정책]- 디지털 리터러시',
'[디지털 정책]- 디지털 포용',
'Web 4.0',
'Smart City',
'XR',
'[XR]- VR',
'[XR]- AR',
'E-Learning',
'DOM SAX',
'[로봇]- URC',
'[IoT]- 객체 식별자 기반 사물인터넷 디바이스 식별체계(TTAK.KO-06.0365/RI)',
'[Gartner 2021][People Centricity]- 행동 인터넷',
'[Gartner 2021][People Centricity]- 전체 경험',
'[Gartner 2021][People Centricity]- 개인정보보호 강화 컴퓨팅',
'[Gartner 2021][Location Independence]- 분산 클라우드',
'[Gartner 2021][Location Independence]- 어디서나 운영',
'[Gartner 2021][Location Independence]- 사이버 보안 메시',
'[Gartner 2021][Resilient Delivery]- 지능형 구성 가능한 비즈니스',
'[Gartner 2021][Resilient Delivery]- AI 엔지니어링',
'[Gartner 2021][Resilient Delivery]- 초자동화',
);

var answer = answer.concat(
// 4차 산업혁명
'# 정의 : 기술의 융합을 통한 창조적 파괴 혁신 <br/>\
- 다보스포럼 : 모든 기술 융합, 파괴적 혁신 <br/>\
- 정보통신 기술 협회 : 사회전반 융합, 혁신적 변화 <br/>\
- 기획재정부 : 기존 산업 + 인공지능 융합 통한 혁신 <br/><br/>\
# 국내 4차 산업혁명 정책 <br/>\
- 제조업 3.0 : 스마트 공장 1만개 <br/>\
- 미래성장동력 종합실천계획 : 신사업 발굴, 일자리 창출 <br/>\
- 신산업 육성 투자 활성화 : 중소벤처 <br/><br/>\
# 주요국 4차 산업혁명 정책 및 현황 <br/>\
<img src = "./img/Industry_World.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 2교시 3번\
',
  
// 디지털 뉴딜&혁신 4개 분야 12개 요소 
'# K-New Deal 추진체계 <br/>\
<img src = "./img/KNewDealSystem.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Digital New Deal <br/>\
<img src = "./img/DigitalNewDeal.png" style = "max-width:100%; height:auto;">
',
  
// 데이터댐
'# 정의 : 디지털 뉴딜 핵심 <br/>\
- 디지털 기술의 기본이 되는 데이터를 수집하여 모아서 적재적소에 활용할 수 있도록 하는 것 <br/><br/>\
# Keyword : 디지털 뉴딜, DNA, 인공지능, 클라우드, 바우처, 빅데이터 <br/><br/>\
# 데이터 댐의 7대 사업 <br/>\
- 인공지능 학습용 데이터 구축 <br/>\
- 인공지능 바우처 <br/>\
- 인공지능 데이터 가공바우처 사업 <br/>\
- 인공지능 융합 프로젝트 (AI+X) <br/>\
- 클라우드 플래그십 프로젝트 <br/>\
- 클라우드 이용바우처 사업 <br/>\
- 빅데이터 플랫폼 및 센터 구축 <br/><br/>\
* 라이지움 87회 관리 1교시 3번\
',
  
// 인공지능 서비스 플랫폼 
'# 정의 : 인공지능 활용 서비스 개발 도구 <br/>\
- AI as a Service <br/>\
- 자연어 처리등 인공지능 기술을 활용하여 제품이나 서비스를 개발하기 위한 도구 <br/><br/>\
# 암기 <br/>\
- AI성능 3요소 : 알데컴 (알고리즘, 데이터, 컴퓨팅파워) <br/><br/>\
# 기술 <br/>\
- 학습 및 추론기술 : 지식표현, 지식베이스 <br/>\
- 상황이해 : 감정이해, 공간이해, 협력지능, 자가이해, 자연어 처리 <br/>\
- 언어 이해기술 : 자연어처리, 질의응답, 음성처리, 자동통번역 <br/>\
- 시각 이해기술 : 내용기반 영상검색, 행동인식, 시각지식 <br/>\
- 인식 및 인지기술 : 휴먼라이프 이해, 인지아키텍처 <br/><br/>\
# 현황 <br/>\
- Google Machine learning Platform : 2016.03. 발표, 범용 인공지능 플랫폼, 방대한 데이터 기반 <br/>\
- Facebook Manager Platform with Chatbot : 2016.04. 개인 맞춤형 AI 플랫폼 <br/>\
- Amazon : Alexsa Voice Service 클라우드 기반 생활 맞춤형 : 블루투스 스피커 echo 내 탑재됨 <br/>\
- IBM Waton Health Platform : 의료 전문 지능형 플랫폼 길병원 온콜로지 <br/>\
- GE Predix Platform : 산업현장 정보 분석, 산업 현장 데이터 + 기존 사업 경험 노하우\
',
  
// 인공지능 소프트웨어 보안 취약성
'# 인공지능 소프트웨어 보안 취약성 (이취익보)<br/>\
<img src = "./img/AI_SW_Week.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 3교시 4번\
',

// [AI]- AI Flow
'<img src = "./img/AI_Flow.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# Top Down 방식 <br/>\
1. Perception(1958) : 뇌의 신경활동 수식 모델화, 컴퓨터에게 처리시키는 초보적 뉴럴 네트워크 <br/>\
2. 기호처리 방식(1960) : 규칙이나 수식을 프로그램화, 사고 논리등 사람이 행하는 정보처리 수행 <br/>\
3. 룰베이스 접근방식(1980) : 전문가의 지식이나 노하우를 규칙화하여 컴퓨터에게 처리 수행하게 함 <br/><br/>\
# Bottom Up  방식 <br/>\
1. 통계,확률론적 접근(2000) : 방대한 데이터 베이스 이론에 근거한 통계적 수법으로 스스로 규칙을 생성하고 정보 처리 <br/>\
2. 뇌 과학적 접근(2006) : 뇌 과학의 연구 성과를 도입하여 보다 뇌의 신경활동을 충실히 재현 <br/><br/>\
* 라이지움 86회 4교시 1번 \
',
  
// [AI]- XAI
'# 정의 : 설명가능한 Ai <br/>\
- 인공지능의 도출결과에 대해 사람이 이해가능하도록 과정 설명이 되는 인공 지능 <br/><br/>\
# 배경 <br/>\
- AI 편향 : 입력, 학습데이터 기반 <br/>\
- AI 부작용 : AI 부작용, 오류 도출 <br/><br/>\
# 구성요소 <br/>\
- 모델 변형 (Deconvolution unpooling) : 역합성곱 이용, Label Data <br/>\
- 모델 비교 (Pixcel Base Model) : 기존의 모델간 비교이용 <br/>\
- 신규모델 (And Or Graph) : Tree 구조의 데이터 탐색 실험 <br/><br/>\
* KPC 93회 1교시 8번 <br/><br/>\
* KPC 94회 4교시 4번 \
',

// 생성 규칙
'# 정의 : IF THEN 형식 추론 규칙 <br/>\
- Production Rule <br/>\
- "조건-행동", "전제-결론"의 규칙 형태로 나타내는 지식 표현 방식으로 "IF A THEN B"형식의 추론 규칙 <br/>\
- A는 조건부, B는 결론부로 정의 <br/><br/>\
# 사례 <br/>\
- 프로덕션 시스템<br/>\
- IF 불이 나면 THEN 소방서 신고 \
',

// 의미망
'# 정의 : Node, Arc, Link 네트워크 구조<br/>\
- Semantic Network <br/>\
- 특정 객체나 개념을 표현하기 위한 노드(Node), 그리고 노드 간의 관계를 표현하기 위한 호(Arc,Link)로 구성되는 네트워크 구조 <br/>\
<img src = "./img/SemanticNetwork.png" style = "max-width: 100%; height: auto;">\
',

// 논리
'# 정의 : 인간의 사고과정과 유사한 지식 표현 <br/>\
- Logic <br/>\
- 형식적인 논리식을 이용해 지식베이스 구축 인간의 사고과정과 유사 <br/>\
- 추론과정의 완전성 보장 논리는 명제 논리와 서술 논리로 나뉨 <br/><br/>\
# 종류 <br/>\
1. 명제 논리 <br/>\
- 참이나 거짓 추론을 수행할 수 있는 형식적 논리체게 <br/>\
- ~P(not), P^Q(and), P|Q(or) <br/><br/>\
2. 술어 논리 <br/>\
- 명제에 존재하는 "주어"와 "술어"의 구조로부터 "주어"가 될 수 있는 대상에 대해 한정 기호를 사용하는 논리 <br/>\
- 논리의 단위가 명제가 아닌 객체(Object)와 술어(Predicate) <br/>\
- "John lives in a yellow house" <br/>\
- LIVE(JOHN,HOUSE)^COLOR(HOUSE,YELLOW) <br/><br/>\
<img src = "./img/PredicateLogic.png" style = "max-width: 100%; height: auto;">\
* 122회 1교시 12번\
',

// 프레임 
'# 정의 : 구조, 틀 표현 자료구조 <br/>\
- 의미망의 한 종류로서 객체와 그 속성의 구조를 기술 <br/>\
- 어떤 대상, 객체에 대한 여러개의 상황정보를 하나의 구조화된 틀로 표현할 수 있는 자료구조 <br/><br/>\
<img src = "./img/Frame.png" style = "max-width: 100%; height: auto;">\
',

// 클라우드 활용 AI구축 모델 
'# LoB (Line of Business) <br/>\
- 개발툴, 시각/음성/자연어 등 특화 솔루션 API 및 서비스 <br/><br/>\
# 개발환경 <br/>\
- Workflow : 공유,협업 및 자동화 도구, Jupyter, Anaconda, GitHub, VSTS <br/>\
- IDE : Open API, PyCharm, Microsoft VSCode <br/>\
- 라이브러리 : 고급 수학연산(NumPy), 컴퓨터 비전(OpenCV), 언어번역(OpenNMT) <br/><br/>\
# 인프라 <br/>\
- ML 플랫폼 : Apache MXNet, TensorFlow, Caffe, CNTK, Keras <br/>\
- 알고리즘 : 지도, 비지도, 강화학습 <br/>\
- Data : 구조/비구조적 DB, 빅데이터 플랫폼, 클라우드 기반 DB <br/>\
- Compute : 서버, GPU, 특수HW, VM, 컨테이너 및 서비스 컴퓨팅 <br/><br/>\
* 아이리포 24회 3교시 2번\
',

// AI 프로젝트
'# 과업내용 <br/>\
1. AI 프로젝트 기획 <br/>\
- 종합계획 수립 : Big Pictgure Design, 타당성분석, 우선과제 선정 <br/>\
- 비즈니스 이해 : 업무목표수립, 현황 평가, 마이닝 목표수립, 계획수립 <br/><br/>\
2. Data Pipeline <br/>\
- Data 이해 : 초기데이터 수집,기술, 데이터 탐색,품질검증 <br/>\
- Data 전처리 : 데이터 설정,선택,정제 <br/><br/>\
3. ML Pipeline <br/>\
- 모델링 : 자원 투입시기, 업무분장, 소통관리 <br/>\
- 평가 : 결과평가, 프로세스 재검토 <br/>\
- 배포 : 전개계획, 모니터링, 유지보수 계획 \
',
  
// Loss Function
'# 정의 : 최적 매게변수 탐색 <br/>\
- 신경망 성능의 나쁨을 나타내는 지표로, 알고리즘이 얼마나 잘못하고 있는지를 표현하는 지표 <br/><br/>\
# 개요도 <br/>\
<img src = "./img/LossFunction.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 종류 <br/>\
1. MSE (평균제곱오차) Mean Squared Error <br/>\
<img src = "./img/MSE.png" style = "max-width: 100%; height: auto;"><br/>\
*Pi 실제값, Yi 예측값<br/><br/>\
2. RMSE (평균제곱근오차) Root MSE<br/>\
- 속도 향상 <br/>\
<img src = "./img/RMSE.png" style = "max-width: 100%; height: auto;"><br/><br/>\
3. CEE (교차엔트로피) Cross Entropy Error <br/>\
- 원-핫 인코딩 경우 사용 <br/>\
- y : 신경망 출력, t : 정답 레이블 <br/>\
<img src = "./img/CEE.png" style = "max-width: 100%; height: auto;"><br/><br/>\
4. Mini-Batch <br/>\
- 무작위 뽑아 학습 <br/>\
<img src = "./img/MiniBatch.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* KPC 94회 1교시 2번\
',
  
// 규범동향
'# 규범 동향 <br/>\
- EU : 전자인간 인정 <br/>\
- 미국 : 학계중심, 정부, 기술자 공동 설계 <br/>\
- 영국 : 정부 위원회 구성 촉구 <br/>\
- 일본 : 창작물 저작권 인정 <br/>\
- 한국 : 로봇윤리헌장 제정 위원회, 로봇윤리헌장 발표 <br/><br/>\
* 아이리포 23회 4교시 3번\
',
  
// Python
'# 정의 : 인공지능 시대에 최적화된 인터프리터 언어 <br/>\
- 1990년 암스테르담의 귀도 반 로섬에 의해 만들어진 인터프리터 언어 <br/><br/>\
# 특징 <br/>\
- 장점 : 인터프리터 언어, 플랫폼 독립적, 오픈소스 <br/>\
- 단점 : 느린 속도, 모바일,웹 취약, 설계 제약 <br/><br/>\
# 자료형 <br/>\
- int, float, str, bool <br/>\
- complex : 실수 + 허수 / -7 + 2j<br/>\
- List : 여러가지 Object 데이터 집합 / [1,2,3] <br/>\
- Tuple : 불변 Object 집합 (1,2,3) <br/>\
- Dictionary : Key, Value / {\'name\' : \'Hong\', \'Phone\' : 010} <br/>\
- Set : 유일값 집합 / set("Hello") <br/>\
- 자료형 확인 : type() <br/><br/>\
* 122회 2교시 1번\
',
  
// AI 국가전략 
'# 정의 : 2019년 12월 17일 경제,사회 전반의 혁신 프로젝트로서 과학기술정보통신부를 비롯한 전 부처가 참여해서 마련한 전략 <br/><br/>\
# 내용 <br/>\
1. 생태계 구축 <br/>\
- AI 인프라 : 공공 민간데이터<br/>\
- AI 기술 경쟁력 : 반도체 기술 중심<br/>\
- 과감한 규제 혁신 : 포괄적 네거티브 규제<br/>\
- AI 스타트업 : AI 올림픽 <br/><br/>\
2. 활용 <br/>\
- 교육 : 관련학과 증설 <br/>\
- 전산업 활용 : 대형 AI 융합 프로젝트 <br/>\
- 디지털 정부 : 차세대 지능정부 구현 <br/><br/>\
3. 사람중심 구현 <br/>\
- 포용적 일자리 안전망 : 취업 지원제도 <br/>\
- AI 역기능 및 윤리 확립 : 사이버 침해 대응체계 고도화 \
',
  
// 적대적 공격
'# 정의 : 머신러닝 Noise 취약점 <br/>\
- 머신러닝/딥러닝의 원본 이미지 혹은 데이터에 미세한 잡읍을 추가하여 전혀 다른 결과가 도출되게끔 하는 공격기법 <br/><br/>\
# 공격유형 (중회전모)<br/>\
- 중독공격 : 악의적인 학습 데이터 주입 / 챗봇 성향 주입<br/>\
- 회피공격 : 추론과정중 데이터 교란 / 자동차 교란 표지판<br/>\
- 전도공격 : 학습 데이터 추출 <br/>\
- 모델추출 공격 : 유료 머신 러닝 모델 추출 <br/><br/>\
# 적대적 샘플 제작기법 <br/>\
<img src = "./img/AdversarialAttacksMake.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 방어기법 <br/>\
- 적대적 훈련 : 저항성 <br/>\
- 결과값 은닉 : 노출, 변환 처리 <br/>\
- 공격 탐지 : 모델 추가후 결과 비교 <br/>\
- 쿼리 제한 : 반복적 시도 제한 <br/><br/>\
* 119회 응용 2교시 3번\
',
  
// 음성비서
'# 정의 : 머신 러닝, 음성 인식, 문장 분석, 상황인지 등 인공지능 기술과 첨단 기술의 결합으로 사용자의 언어를 이해하고 사용자가 원하는 지시 사항을 수행하는 기능을 자동으로 제공하는 AI 비서 서비스 <br/><br/>\
# 기반기술 <br/>\
1. 음성인식 디바이스 <br/>\
- Zero UI : 사용자 Interaction, Interface <br/>\
- STT(Speech to Text) : HMM, DNN, RNN <br/><br/>\
2. AI Platform <br/>\
- 머신러닝 : 빅데이터 기반 문장 학습 <br/>\
- 자연어 분석 : 형태소 단위로 잘라 의존관계 파악 <br/><br/>\
3. Third Service <br/>\
- 공유 서비스 인터페이스 표준 : W3C SOAP, REST, RSS 표준 <br/>\
- 교환 데이터 표준 : W3C XML, JSON 표준 \
',
  
// Pre-Crime
'# 정의 : 인공지능을 통한 예방 구현 <br/>\
- 다양한 치안 데이터 수집 및 딥러닝 통한 분석을 통해 범죄가 일어나기 전 사건을 예측하여 범죄자를 식별, 추적, 차단하는 최첨단 치안 시스템 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/PreCrime.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 사례 <br/>\
- 국내 : 음란물 차단, 전자발찌, 범죄분석, 주가조작 <br/>\
- 해외 : 미국(PrePol;자동출동), 영국(OASys;재범), 일본(CCTV+행위분석;절도행위에측,범죄자 추적), 중국(AI+안면인식;안면인식 AI선글라스, 범죄자예측) <br/><br/>\
* 120회 응용 1교시1 번\
',

// 지능형 CCTV
'# 정의 : 자동 이상행위 탐지 기술 <br/>\
- CCTV에서 촬영된 영상정보를 분석하여 자동으로 이상행위를 탐지하는 기술 <br/>\
- 배경영역과 객체를 분리 후 객체 식별, 객체 추적, 규칙 기반 이벤트 탐지 수행함 <br/><br/>\
# 부각 배경 <br/>\
- 방범용 CCTV, 스마트시티 관제 센터 구축 활성화 <br/>\
- 딥러닝 기술 발전 -> 인간 개입 없이 영상 분석 기술 활성화 <br/><br/>\
# 전망 <br/>\
- 범죄 수사를 위한 증거 차원을 넘어 범죄 징후 사전 예측 수준으로 발전 <br/>\
- 빅데이터 기술과 연계하여 범죄 예측 모델로 활용 <br/><br/>\
# 기술 종류 <br/>\
1. 대인 영상 기술 <br/>\
- 얼굴 인식 기술 : 딥러닝, GAN(Generative Adverserial Network) 활용 얼굴인식 기술 (인간개입x)<br/>\
- 사람 재식별 기술 : 촬영된 영상 통한 자동 분석 기술 <br/>\
- 사람 행동 인식 기술 : 제스처(신체일부), 액션(재스쳐합), 인터렉션(사람,사물간) 통한 자동 인식 기술<br/><br/>\
2. 차량 영상 인식 기술 <br/>\
- 번호판 인식, 복원 기술 : 번호판 인식, 복원, 추족 기술 <br/>\
- 차량 재식별 기술 : 특정 차량 추적 기술 <br/><br/>\
3. 범죄 예측 영상 인식 기술 <br/>\
- 휴먼 속성 인식 기술 <br/>\
1) Born-To : 성별,나이 등과 같은 고유 속성 <br/>\
2) Belong-To : 착용, 소지 Item 인식 <br/>\
- 경로 재인식 기술(Pathe Re-ID) : CCTV 정보 결합 특정 객체 추적 기술 <br/>\
- 범죄 전조 현상 인식 기술 : 이상행동, 발생소음 <br/><br/>\
# 지능형 CCTV 활성화를 위한 개인정보보호 기술 <br/>\
- 프라이버시 마스킹 : 민감한 사생활 마스킹, 권한 가진 사용자만 제한적 복원<br/>\
- 영상 비식별화 : 촬영 영상에서 개인정보 비식별화 <br/>\
- 영상 아이덴티티 : 최초로 생성한 영상의 아이덴티티 검측 기술<br/><br/>\
* 86회 라이지움 2교시 1번 \
',
   
// DataMining
'# 정의 : 정보 도출 방법 / 데이터 집합 / 사용자 요구 /<br/>\
- 데이터 집합에서 사용자 요구 따라 유용 가능성 있는 정보 도출 방법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/DataMining_OLAP.png" style = "max-width:100%; height:auto;"><br/>\
* ETT : Extension, Transformation, Transportation <br/><br/>\
# 절차 <br/>\
1. Sampling : 표본 추출 <br/>\
2. Cleansing : 전처리(Pre-Processing) <br/>\
3. 오류 제거 <br/>\
4. Exploration : 자료의 탐색을 통해 기본정보 획득 및 분석 <br/>\
5. Modeling : 알고리즘 선정 및 적용하여 마이닝 수행, 지도학습 알고리즘(의사결정, 신경망), 자율학습(연관성, 군집) <br/>\
6. Reporting : 결과 분석/ 평가, 반복수행 여부 결정 <br/>\
7. FeedBack <br/><br/>\
# Apriori Algorithm <br/>\
- 지지도 P(A∩B)<br/>\
- 신뢰도 P(B|A)= P(A∩B)/P(A) <br/>\
- 향상도 P(B|A)/P(B) = P(A∩B)/P(A)*P(B)\
',

// TextMining 
'# 정의 : 정보 도출 기법 / 비 조화 텍스트 문서 <br/>\
- 비 조화된 텍스트 문서에서 가치있는 정보를 도출하는 기법 <br/><br/>\
# 암기 <br/>\
- 기법 : 분클토질컨듀 <br/><br/>\
# 절차 : 데이터 수집 > 전처리 > 정보추출 > 클러스터링/범주화 > 요약/검색 <br/><br/>\
# 기법 : 문서분류, 문서클러스터링, 토픽 트래킹, 질의응답(NLP), Concept Linkage(문서간 의미적 연결성), 듀오 마이닝(Data Mining, Text Mining 동시 적용)\
',

// Word Cloud
'# 정의 : 시각적 표시 방법 / 메타데이터 / 태그 분석 / <br/>\
- 메타데이터에서 얻어진 태그들을 분석하여 중요도나 인기도 등을 고려하여 시각적으로 늘어 놓아 웹사이트에 표시하는 방법 <br/><br/>\
# 암기 <br/>\
- 유형 : 문데 <br/>\
- 도구 : 워A두 <br/><br/>\
# 유형 <br/>\
- 문서 구름 : Text Cloud - 문서 포함 단어의 시각적 표현 <br/>\
- 데이터 구름 : Data Cloud - 단어대신 숫자 정보를 크기와 색깔로 표현 <br/><br/>\
# 도구 : Wordle, ABCya, DoodleBuz\
',

// Co-Word Analysis
'# 정의 : 내용 분석 기법 / 문장 / 단어 규칙 / 핵심개념 / 관계식별<br/>\
- 문장 안에서 함께 사용되는 단어 규칙을 조사해서 문서의 주제와 관련된 핵심 개념이 무엇이고 이들의 관계가 어떤지 식별하는 내용 분석 기법 <br/><br/>\
# 암기 <br/>\
- 절차 : 수전동 <br/><br/>\
# 절차 <br/>\
1. 데이터 수집 <br/>\
2. 데이터 전처리 과정 : 텍스트 마이닝, 불용어 제거, 품사 태깅, 주석 통해 제시된 명사구 선택 <br/>\
3. 동시 출현 단어 분석 과정 \
',

// Exploratory Data Analysis
'# 정의 : 분석 기법 / 관찰, 가설 / 필요한 데이터 형태 추출 <br/>\
- 관찰한 현상을 보고 가설을 설정하고 필요한 데이터의 형태를 추출하는 분석 기법',

// Confimatory Data Analysis
'# 정의 : 분석 기법 / 의사결정 / 수집, 분석, 활용 <br/>\
- 의사결정을 하기 위해 목적에 적합한 데이터를 수집하고 분석하여 결과를 활용하는 분석기법',

// Topic Modeling
'# 정의 : 추론 모델 / 비정형 문서 집단 / 주제 찾기 알고리즘 / 맥락, 단어 이용 / 유사 의미 단어 클러스터링 <br/>\
- 구조화 되지 않은 방대한 문서 집단으로 주제를 찾아내기 위한 알고리즘으로 맥락과 관련된 단어들을 이용하여 유사한 의미를 가진 단어들을 클러스터링하는 방식으로 추론하는 모델 <br/><br/>\
# 절차 <br/>\
1. 비 단어 제거 : 특수기호, 불용어 제거/정제 <br/>\
2. 사전에 정의된 단어만으로 발췌 <br/>\
3. DTM(Dcoument-Term Matrix) 생성 <br/>\
4. 알고리즘 적용 : 백터기반 or 확률 기반 <br/><br/>\
# 알고리즘 유형 <br/>\
1. 백터 기반 <br/>\
- LSA(Latent Semantic-Analysis) : 고차원 데이터 공간에 대해 축 변경해 새로운 축을 찾아내는 가변량 통계 분석 방법 <br/>\
2. 확률 기반 <br/>\
- pLSA(Probailistic LSA) : 데이터셋과 선별된 토픽 K간의 가장 잘 맵핑되는 토픽과 단어, 단어와 문서간의 조합 찾는 방법, 기존 LSA를 확률적 접근 <br/>\
- LDA(Latent Dirichlet Allocation) : 주어진 문서 대해 각 문서에 어떤 주제들이 존재하는지에 대한 확률 모형\
',

// 연관규칙
'# 정의 : Assotication, 연관성 분석하기 위한 판단 기준 <br/><br/>\
# 연관성 : 특정 거래에서 하나의 아이템에 대한 거래가 발생하면 다른 특정 아이템의 거래가 연쇄적으로 발생하는 현상 <br/><br/>\
# 지지도(Support) : <font color="red">전체 거래 품목 A,B가 동시에 포함될 확률</font>, 두 품목의 동시구매가 얼마나 자주 일어나는지를 분석 <br/>\
- Support = P(A∩B) = (AB동시/전체거래) = (A거래수 * B거래수) / 전체거래수<br/><br/>\
# 신뢰도(Confidence) : A->B 연관규칙에서, <font color="red">품목 A포함 거래중 A,B 동시 포함 거래 확률</font> -> 두 품목간 연관성의 강도를 분석 <br/>\
- Confidence = P(B|A) = 지지도/P(A) = P(A∩B)/P(A)<br/><br/>\
# 향상도(Lift) : A->B 연관규칙에서, <font color="red">임의의 B가 구매되는 경우 대비, A와 관계되어 구매되는 비율</font> => A와 B의 상관관계 분석 <br/>\
- 향상도 = 1 (독립적 관계) : A,B 구매시 상호 연관 없음 <br/>\
- 향상도 > 1 (양의 상관 관계) : A 구매시 B 구매 예상 <br/>\
- 향상도 < 1 (음의 상관 관계) : A 구매시 B 구매 감소 <br/>\
- Lift =  P(B|A)/P(B) = 신뢰도/P(B) = (P(A∩B)/P(A))/P(B)<br/><br/>\
* <font color="red">지지도 신뢰도 향상도 : 빈도 / 연관성 / 상관관메 </font><br/><br/>\
# 관련 알고리즘 <br/>\
- Apriori Algorithm : 항목집합 줄이기 <br/>\
- DHP Algorithm : Transaction 줄이기 <br/>\
- FP-growth Algorithm : 비교횟수 줄이기 <br/><br/>\
<img src = "./img/연관규칙.png" style = "max-width:100%; height:auto;">\
',
  
// Apriori Algorithm
'# 정의 : 선험적 알고리즘 (사전지식 활용)<br/>\
- 데이터 발생빈도를 기반으로 데이터 간의 연관관계를 유추하기 위한 기법 <br/><br/>\
# Keyword : 빈발항목집합, 항목집합, 발생빈도, 연관관계, 최소지지도, 최소신뢰도 <br/><br/>\
# 절차 <br/>\
- 최소값 설정(Support, Confidence) <br/>\
- 후보군 선정 : 빈발항목집합 -> Candidate Itemset <br/>\
- 빈발항목 선정 : 계산 / 평가1(지지도) / 평가2(신뢰도) / 반복 -> Large Itemset <br/><br/>\
* 119회 2교시 1번\
',

// Opinion Mining
'# 정의 : 사용자 의견분석 기술 <br/>\
- SNS 대량 리뷰로 사용자가 원하는 정보를 분석해 유의미한 정보를 지능적으로 유추해내는 Mining 기술 <br/><br/>\
# 특징 <br/>\
- 1단계 : 팩트와 의견 문장 구분 <br/>\
- 2단계 : 의견이 들어간 문장을 긍정과 부정으로 구분 <br/>\
- 3단계 : 긍정과 부정 표현 수 및 유용한 문장 추출후 분석 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/OpinionMining.png" style = "max-width:100%; height:auto;"><br/><br/>\
1. 도메인 지식 추출 <br/>\
- 전처리 : 객관적인 문장인지 주관적인 문장인지 분리 <br/>\
- 도메인 의존적 단어 : 특정 단어의 도메인 발생 빈도와 일반 도메인 신문기사 발생 빈도 비교 <br/>\
- 문장 정보 : Likelihood ratio(우도: 발생가능비율)를 평가 척도로 활용 <br/>\
- 단서 단어 : 개체명 인식에서 단서 단어를 찾는데 활용 <br/><br/>\
2. Opinion 추출 <br/>\
- 개체명 인식 : 평가요소 및 오피니언에 해당하는 단어 열 인식 <br/>\
- 관계 추출 : 평가요소-오피니언 관계 중 관련성 존재 연결 인식 <br/><br/>\
# 사례 제시 <br/>\
1. 1단계 <br/>\
- 긍정/부정 표현 어휘 정보 추출 <br/>\
- 사례 : 각 부착한 레이블이 갖는 값이 범위는 0.0~1.0 이며 synset 별로 점수의 총합은 1.0 리소스들은 영어에 국한 <br/><br/>\
2. 2단계 <br/>\
- 긍정/부정 표현 수 검출 및 리뷰 요약 <br/>\
- 사례 : Naiv Bayes, Maximum Entropy(ME) mode, SVM과 같은 알고리즘을 적용하여 기계학습 수행 <br/><br/>\
3. 3단계 <br/>\
- 세부 평가요소와 관련된 오피니언을 포함하는 문장들 중 유의미한 문장들을 긍정/부정 평가별로 추출 후 중요 문장으로 구성된 리뷰 요약 생성 <br/>\
<img src = "./img/OpinionMining_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 1교시 11번\
',
 
// System Dynamics 
'# 정의 : 사회 현상을 구성요소로 분해하여, 요소 간의 인과 관계를 표현하는 기법 <br/>\
- 동태적, 순환적 인과관계의 시각적으로 현상 이해하고 설명하거나 컴퓨터상에서 실험해 보는 방법론이자 현상을 바라보는 프레임워크 <br/><br/>\
# 특징 <br/>\
- 집중(초점) : 변수들 간의 영향관계 집중 <br/>\
- 인과관계 기초 : 순환적 인과관계 <br/>\
- 데이터 분석 : 동태적 데이터 분석 <br/><br/>\
# 구성요소 <br/>\
- 시스템 : 특정 목표를 공유하는 요소 집합 <br/>\
- 인과관계 : 한 요소의 변화가 다른 요소에 영향을 미치는 의미 <br/>\
<img src = "./img/SystemDynamics_1.png" style = "max-width:100%; height:auto;"><br/>\
- 피드백 : 강화 루프, 균형 루프 <br/>\
- 레벨과 레이트 : 피드백 루프요소를 시뮬레이션 모델로 표현 <br/>\
<img src = "./img/SystemDynamics_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// Flipped Learning
'# 정의 : 학습 방식 / 사전 온라인, 실제 오프라인 <br/>\
- 혼합형 학습(Blend Learning)의 한 형태로 학생이 수업 전에 온라인 영상을 통해 먼저 학습하고, 수업 시간에는 학습한 내용을 논의와 평가등을 위해 확인,보완하는 학습방식(TTA) <br/><br/>\
# 구성요소 <br/>\
- School : Off Line <br/>\
- In-House : On Line <br/>\
- BYOD : Bring Your Own Device <br/>\
- 스마트 컨텐츠<br/>\
- 무선통신 <br/>\
- LMS : Learning Management System <br/>\
- SCORM : Sharable Content Object Reference Model <br/>\
- xAPI : Experince API <br/>\
- 스마트 기기\
',

// 디지털 사이니지
'# 정의 : 전자 간판<br/>\
- 네트워크에 접속된 디스플레이 전자적 기구 원격제어 다양한 정보시스템 <br/><br/>\
# 암기 : 기술5 컨포관전 단재S <br/><br/>\
# 특징 : 네트워크기반 양방향 서비스, 인터렉티브, 고화질<br/><br/>\
# 기술 <br/>\
1. 콘텐츠 <br/>\
- 콘텐츠 포맷 기술 : JPEG, MPEG-1/2/4, PNG, FLASH <br/>\
- 콘텐츠 관리 기술 ; PlayLog, XML <br/>\
- 콘텐츠 전송 및 분배 기술 : FTP, Cache, 클라우드 <br/>\
2. 단말 <br/>\
- 콘텐츠 재생 기술 : JPEG, MPEG-1/2/4, SVG <br/>\
- SW기반 : 멀티미디어 FW 기반 제작 <br/><br/>\
# 비교 : OOH(Out Of Home, 옥외광고물) 제어방식, 컨텐츠, 제공서비스, 타겟 마케팅, 업데이트, 상호작용 <br/><br/>\
<img src = "./img/DS_2_1.PNG" style = "max-width: 100%; height: auto;"><br/><br/>\
',

// [디지털사이니지]- 오픈 스크린 
'# 정의 : 스크린 협업 컨텐츠 연속 제공 방식 <br/>\
- 사용자의 특성 및 움직임, 주변환경변화등 복합적인 상황정보 기반으로 스크린들이 서로 협업하여 개인 맞춤형 컨텐츠를 연속적으로 제공하는 디지털 사이니지 방식 <br/><br/>\
# 암기 <br/>\
- 진화 : 디텔오<br/>\
- 기술 : 공이비<br/>\
- 플랫폼 : 광인.스생.스게<br/><br/>\
# 진화 <br/>\
- 디지털 미디어 : 불특정 다수<br/>\
- 텔레스크린(Tele-Screen) : 양방향 인터렉션(현재) <br/>\
- 오픈 스크린 : 스크린들이 협업 , 맞춤형 컨텐츠 제공 (미래)<br/><br/>\
# 기술<br/>\
- 공간 복합 상황 인지 기술 : 위치추적, 움직임 식별<br/>\
- 이종 오픈스크린 협업 기술 : 동적 스크린 그룹제어, 컨텐츠 매쉬업 기술<br/>\
- 비정형 오픈 스크린 재현 : 컨텐츠 추출, 비정형 스크린 분배 <br/><br/>\
# 오픈 스크린 플랫폼(ETRI) <br/>\
- 광역 상황 정보 인지 시스템 : 움직임 식별 및 전송<br/>\
- 스마트 미디어 생성 시스템 : 추천 컨텐츠 정보 획득, 컨텐츠 메쉬업<br/>\
- 스마트 미디어 제공 시스템 : 메쉬업 컨텐츠 분배, 재현 동기화 <br/><br/>\
# 오픈 스크린 플랫폼 기반 응용기술 <br/>\
- 복합상황인지 기반 멀티 스크린 협업 서비스<br/>\
- 비정형 멀티스크린 협업 서비스<br/>\
- 거리 기반의 동적 컨텐츠 메쉬업 서비스<br/>\
- 재난정보 안내 서비스<br/><br/>\
<img src = "./img/OpenScreen_1.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/OpenScreen_2.png" style = "max-width: 100%; height: auto;">\
',

// [디지털 사이니지]- 오픈스크린 프로젝트 
'# 정의 : 소비자 소유 제품 통한 풍부한 제공 프로젝트 <br/>\
- 텔레비전, 개인용 컴퓨터(PC), 모바일 장치등 소비자가 사용하는 가전 제품을 통해 좀 더 다양하고 풍부한 인터넷 경험을 제공하기 위하여 조직한 프로젝트 (TTA)<br/><br/>\
# 주요 참여 기업 : 인터넷 TV로 어도비, 삼성전자, LG전자, 인텔, 시스코, 모토로라등\
',

// 의료기술 
'# 기술종류 <br/>\
<img src = "./img/MediTech.png" style = "max-width: 100%; height: auto;"><br/>\
* IHE : Integrating the Healthcare Enterprise <br/>\
* HL7 : Health Level 7\
',
  
// [의료기술]- IEC 62304
'# 정의 : 의료기기 소프트웨어 수명주기 프로세스 표준 규격<br/>\
- (ISO 12207, 소프트웨어 수명주기 프로세스) <br/>\
- 의료장비 소프트웨어의 SW 안전성에 대한 Life Cycle 기반 표준 프레임 워크 <br/>\
- 의료장비 소프트웨어의 안전한 설계 및 유지보수를 위한 Activity Task 를 Life Cycle 프로세스 기반으로 제시한 표준 프레임 워크 <br/><br/>\
<img src = "./img/IEC62304_0.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/IEC62304_1.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 구성요소 <br/>\
1. 소프트웨어 개발 <br/>\
- 개발계획, 요구사항 분석, 구축설계, 상세설계, 유닛구현 및 확인, 통합 및 통합시험, 시스템 시험, 릴리즈 <br/>\
2. 소프트웨어 유지보수 <br/>\
- 유지보수 계획 확립, 문제 및 수정 분석, 수정 구현 <br/>\
3. 소프트웨어 위험경영 프로세스 <br/>\
4. 소프트웨어 형상관리 프로세스 <br/>\
- 형상식별, 변경관리, 형상상태설명 <br/>\
5. 소프트웨어 문제해결 프로세스 <br/>\
- 문제 보고서 작성, 문제 조사, 관련당사자에게 통보, 변경관리 프로세스 사용, 기록유지, 문제경향분석, 소프트웨어 문제해결 검증, 시험문서 내용 <br/><br/>\
* ISO 12207 과 비교 설명 <br/>\
* 꿀닥 \
',

// [의료기술]- ISO 25237
'# 정의 : 의료 정보 비식별화 국제 표준 <br/>\
- 개인 정보 대상중 하나인 개인 의료 정보의 가명화 방법 (Pseudonymization)을 통한 비식별화(Deidentification) 제공을 위한 원칙과 요구사항을 포함하는 ISO 규제 표준<br/><br/>\
# 암기 <br/>\
- 기법 : 가총삭범마 <br/>\
- 가 : 휴K암교 <br/>\
- 총 : 총부라재 <br/>\
- 삭 : 속속행식 <br/>\
- 범 : 구랜 <br/>\
- 마 : 잡공 <br/>\
- 알고리즘(6) : K부프범차휴 <br/><br/>\
# 필요성 <br/>\
- 공공정보 개방공유 증가 <br/>\
- 개인정보 가치 상승 <br/>\
- 국제적 Compliance <br/><br/>\
# 기법(5) <br/>\
- 가명처리(4) : 휴리스틱 익명화, k-익명화, 암호화, 교환방법 <br/>\
- 총계/평균값 대체(4) : 총계처리, 부분집계, 라운딩, 데이터 재배열 <br/>\
- 데이터 값 삭제(4) : 속성값 삭제, 속성값 부분 삭제, 데이터 행 삭제, 식별자 제거를 통한 단순 익명화 <br/>\
- 범주화(4) : Subdivide Level Controlling-상한,하한,구간재코딩 기법 / Random Rounding - 올림,절삭 방식 <br/>\
- 데이터마스킹(2) : 임의 잡음 추가, 공백과 대체 <br/><br/>\
# 알고리즘 <br/>\
- K-익명화 <br/>\
- 프라이버시 모델 : 알고리즘 통해 수학적 프라이버시 보호 <br/>\
- 부분 그래프 익명화 : Social NW에서 부분 그래프에 의한 정보 노출방지 기법 <br/>\
- 범위 설정법 : 개인식별 정보 수치데이터 임의의 수 기준 범위로 설정기법 <br/>\
- 차수 익명화 <br/>\
- 휴리스틱 익명화 <br/><br/>\
# 한계 <br/>\
- 외부데이터 조합 재식별 가능성 <br/>\
- 완전보호X <br/>\
- 현재 비식별 처리 But 미래 비식별 처리 X\
',

// OTT
'# 정의 : 온라인 동영상 서비스 <br/>\
- Over The Top <br/>\
- 다양한 단말기를 이용하여 유/무료의 동영상 컨텐츠를 스트리밍 및 P2P를 통해 제공받는 온라인 동영상 서비스 <br/><br/>\
# 암기 <br/>\
- 구성(5) : 단NI플보 <br/><br/>\
# 구성(5) <br/>\
- NW <br/>\
- Infra : 스트리밍, P2P <br/>\
- 플랫폼(3) : GPOS, HTML5, 모바일 웹 <br/>\
- 보안(4) : CAS, DCAS, 워터마킹, 핑거프린팅 <br/><br/>\
# 서비스 유형 <br/>\
- Contetns Aggregator : 컨텐츠 제공자와 NW사업자 사이 컨텐츠 패키징 <br/>\
- 저작권관리 결제 및 과금등 수행 <br/>\
- Contents Syndicator : 컨텐츠 유통 전문 <br/><br/>\
* 국내 "코드커팅" 효과 X, OTT 무덤, 무료, 저가 사업자 다수, 가입자수 자체 적음\
',

// [OTT]- 웹인증 API
'# 정의 : FIDO2 인증절차 웹 브라우저 구현 <br/>\
- FIDO2 표준 규격을 따르는 보안 인증 절차를 PC 웹브라우저 환경에서 구현할 수 있는 월드와이드웹 컨소시엄(W3C) 웹표준',

// 인증기술
'# 정의 : 비대면 채널 통한 신원 확인 <br/>\
- 사용자가 영상통화나 휴대전화 본인인증 등의 비대면 채널을 통해 본인 확인을 받을 수 있는 인증 기술<br/><br/>\
# 유형 <br/>\
- 지식기반 : 비밀번호, 이미지, 동작 <br/>\
- 소지기반 : SNS, 음성, email, OTP토큰, 스마트카드 <br/>\
- 생체기반 : 홍채,지정맥,장문,지문,정맥 <br/>\
- 특징기반 : Q&A, 상황정보 <br/><br/>\
# 비대면 실명 인증 적용사례 <br/>\
- 신분증 사본 제출 : 스캔 제출 <br/>\
- 영상 통화 : 안면인식기술 대조 <br/>\
- 카드사 전달자 확인 : 배달원 확인 <br/>\
- 인증기관 결과 활용 : 공인인증서, 휴대폰 <br/>\
- 기존계좌 활용 : 소액이체 <br/>\
- 다수 개인정보 검증 : Open API, 타기관 연동 <br/><br/>\
* 본인거부율, 타인수락율 \
',

// 바이오 인증
'# 정의 : 신체적, 행동적 특성 활용 인증 기술<br/>\
- 사람의 측정 가능한 신체적 또는 행동적 특성을 자동화된 장치로 추출하여 본인 여부를 비교, 확인하기 위한 수단으로 활용하기 위한 기술 <br/><br/>\
# 암기  <br/>\
- 분류 <br/>\
-> 행 : 음서키걸 <br/>\
-> 해 : 지얼홍막정 <br/>\
-> 생 : 근M심C광P탄B <br/><br/>\
- 지표 : 민오FFCE <br/><br/>\
# 기반기술 : Data Collection, Transmission(압축, 암호화), Signal Processing(특징추출), Database, Decision <br/><br/>\
# 바이오 인식 기술 분류 기준 <br/>\
- 행동학적 특징 : 음성, 서명, 키보드 입력, 걸음거리(Walking Style) <br/>\
- 신체적 특징 : 해부학적 지표(표면적/고정적) : 지문, 얼굴, 홍체, 망막, 정맥 <br/>\
- 신체적 특징 : 생리학적 지표 생체신호(내부적/유동적) <br/>\
=> 전기 : 심전도(ECG/EKG, 심장박동-전압), 뇌전도(EEG, 대뇌-전압), 근전도(EMG, 근육-전위차) <br/>\
=> 기계/물리 : 심탄도(BCG) <br/>\
=> 광학/화학 : 광용적맥파(PPG) <br/><br/>\
# 바이오 인증 설계지표 : 민감도, 오류율, FAR, FRR, CER(Crossover Error Rate), EEG(Equal Error Rate) <br/><br/>\
# 고려 : 사생활 침해, 생체정보 절도, 익명성 상실, 생체정보 DB화 문제, 정부에 의한 오남용 <br/><br/>\
<img src = "./img/바이오인증_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/바이오인증_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/바이오인증_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* FAR(False Acceptance Ratio) : 타인 수락율 <br/>\
* FRR(False Rejection Ratio) : 본인 거부율 <br/>\
* EER(Equal Error Rate) <br/>\
* CER(Crossover Error Rate) : 교차 오류율 \
',

// 얼굴인식 알고리즘 
'# 정의 : 각 개인의 얼굴 모양과 얼굴 영상을 이용하여 개인을 구별하는 인증 시스템 <br/><br/>\
<img src = "./img/FaceAl_0.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 얼굴인식 시스템 인식 절차 <br/>\
<img src = "./img/FaceAl_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 얼굴인식 알고리즘 종류 <br/>\
1. 전체론적 방법 : 얼굴 전체 영역 이용 방법 <br/>\
- PCA(Principal Component Analysis) <br/>\
-> 벡터 표현 통계 특성 / 고유 벡터 표현 <br/>\
- LDA/FDA (Linear(Fisher) Discriminant Analysis) <br/>\
-> 얼굴 분리 표현 / 환경 변화 대응 <br/><br/>\
2. 특징기반 방법 : 부위별 위치, 공간의 기하학적 특징 기반 <br/>\
- Pure Geometry Methods : 얼굴특징 기하학적인 관점 설계로 매칭 / 사이 거리 인식 <br/>\
- HMM(Hidden Markov Model) <br/>\
-> 알려지지 않은 얼굴 이미지들로부터 특징 시퀀스 값들을 추출 / 최적의해 추출 <br/><br/>\
3. Hybrid-based Method : 전체론 + 특징기반 <br/>\
- LFA(Local Feature Analysis) <br/>\
- Shape-Normalized <br/>\
- Component-based <br/><br/>\
# 도입시 고려사항 <br/>\
1. 생체 정보 노출 <br/>\
- IPSec, SSL/TLS Network 보호 <br/>\
- 물리적 보호장치 및 저장장치 암호화 <br/><br/>\
2. 위변조 <br/>\
- DB 접근 제어 및 암호화 <br/>\
- 생체 정보 토큰화 및 템플릿 변환 처리 <br/><br/>\
3. 얼굴 DB 노출 <br/>\
- 공개키 암호화 방식 <br/>\
- 전자봉투, 전자서명 등을 이용한 데이터 무결성 보호 <br/><br/>\
* KPC 94회 2교시 4번\
',

// 자기주권형 신원증명
'<a href = "https://www.kisa.or.kr/uploadfile/201909/201909031758548278.pdf">참고문헌</a><br/><br/>\
# 정의 : 스스로 선택 신원 정보 관리 기술 <br/>\
- 사용자가 자신의 신원증명을 직접 관리하고, 공개 대상과 범위를 스스로 선택할 수 있는 분산형 자기주권 신원 정보 관리 기술 <br/><br/>\
# 신원증명 발전 단계 <br/>\
1. 센터형 : 서비스 제공자 / 서비스 제공자 보유, 요청에 의한 제공 <br/>\
2. 연방형 : 연합내 서비스 제공자 / 연합내 다른 기관에서도 동일 인증 <br/>\
3. 사용자 중심형 : 사용자가 선택한 서비스 제공자 / 별도의 신원관리 사업자 , 통제 관리 <br/>\
4. 자기주권형 : 사용자 / 사용자가 신원관리의 중심, 제어 운용 <br/><br/>\
<img src = "./img/신원모델진화.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/분산신원절차.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 기술 <br/>\
1. 구성요소 <br/>\
- 분산 ID : 탈중앙화된 디지털 개인정보 식별체계, 신원 증명의 키 역할 <br/>\
- 블록체인 : 위변조 불가의 특성과 보안성을 활용하여 분산 ID 보관 및 수요자 검증을 위한 공개키를 보관하는 구조 <br/>\
- 영지식 증명 : 개인정보 주체가 스스로 정보에 대한 주권을 갖고 신원 인증 <br/>\
2. 표준요소 <br/>\
- DIDs : 전체적인 아이디 관리 방식 표준화 / W3C<br/>\
- DKMS : Decentralized Key Management System; DIDs에서 필요한 사설키를 위해 제안된 공개 표준 / OASIS <br/>\
- DID Auth : 아이디 소유자가 개인키를 가지고 간단히 인증할 수 있는 방법에 대한 표준 / DIF <br/>\
- 검증가능자격 : 아이디의 소유자가 어떤 것을 할 수 있는 자격을 갖추었음을 검증하는 방법 표준 / W3C<br/><br/>\
# 기업활용 사례 <br/>\
- SKT : 분산 ID 개념의 블록체인 신분증 서비스를 제공, 공연 티켓예매, 온라인 공동 구매 등 민간 분야 뿐만아니라 운전면허증, 정부 발급 신분증, 여권등으로 확대할 예정 <br/>\
- 아이콘루프 : 블록체인 기반 자기주권형 신원 인증 서비스 DPASS 출시 <br/>\
- 경찰청 : 이동통신 3사의 공통 본인인증 PASS 이용<br/>\
- LG CNS, 캐나다 "애버님"과 블록체인 기반 신분인증체게 구현 <br/><br/>\
',
  
// DID
'# 정의 : Decentralized Identity <br/>\
- 분산원장을 기반으로 사용자가 스스로 신원 등에 대한 증명 관리, 신원정보 제출 범위 및 제출 대상 통제 등을 수행할 수 있도록 하는 신원관리 체계 <br/><br/>\
# Keyword : 분산원장, 블록체인기반 <br/><br/>\
# 특징 : Decentralized, Digital Hub(개인이 소유), Cryptographically-verifiable(암호화 인증) <br/><br/>\
# 기술요소 <br/>\
- DIDs(Decentralized Identifiers) : 탈중앙 식별자 / W3C <br/>\
- DKMS(Decentralized Key Management System) : 키관리 표준 / OASIS<br/>\
- DID Auth : 사설키 제어 증명 인증 / DIF<br/>\
- Verifiable Credentials : 증명서 / W3C<br/><br/>\
* 119회 관리 1교시 4번\
',
  
// 바이오정보 분산관리
'# 개념 : 금융 이용자의 지문, 정맥등 바이오 정보를 분산관리센터와 금융기관에 분산 저장하여 보안 강화한 인증기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BioDistribute.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 120회 관리 2교시 1번\
',
  
// 앰비언트 커머스
'# 정의 : E-Commerce와 IT 기술 조합 <br/>\
- 사람의 존재를 인식하여 사용자가 원하는 쇼핑정보를 알아서 제공하고 추천하여 개인 맞춤형 쇼핑을 제공하는 서비스 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/AmbientCommerceTech.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 사례 <br/>\
- 아마존 에코 : 개인화 추천 서비스, 간편 결제 <br/>\
- 11번가 마트챗봇 : SK 누구 이용한 Small AI 기능 제공 <br/>\
- 쿠팡 원터치 결제 : 사용자 소비 패턴 분석, 손쉬운 결제 제공 <br/><br/>\
* 120회 관리 1교시 4번\
',
  
// 핀테크
'# 정의 : Finance + Technology <br/>\
- 금융과 기술의 합성어로, 모바일, 빅데이터, SNS등의 첨단 정보 기술을 기반으로 한 금융서비스 및 산업의 변화 통칭 <br/><br/>\
# 기술요소 <br/>\
- 통신 : NFC, BLE(Bluetooth Low Energy) <br/>\
- SW : Open API, 금융 SI(인터넷 전문 은행) <br/>\
- Data 분석 : Big Data(감시) <br/>\
- 인증 : IC Tagging (IC 카드에 인증정보 입력 후 스마트폰으로 인증), FIDO (생체정보) <br/>\
- 데이터 보호 : TEE(단말보안, Trust Execution Environment ), 토큰화 <br/>\
- 모니터링 : FDS(이상거래 탐지시스템) \
',
  
// 핀테크 서비스
'# 키워드 <br/>\
- 산업 : 지급결제(-페이, 송금) / 은행(-뱅크/기존은행) <br/>\
- 기술 : 플랫폼(금융분석, 모바일결제) / 보안기술(인증, 부정사용방지) <br/>\
- 동향 : 산업(생태계(샌드박스), 은산분리) / 기술(오픈 플랫폼(API, BED), 레그테크 <br/><br/>\
* 116회 4교시 4번\
',
  
// [핀테크]- 핀테크 오픈플랫폼 / 핀테크 오픈 API 플랫폼
'# 정의 : 금융회사, 핀테크 기업 소통 수단 / 서비스 표준화 API / Test Bed<br/>\
- 금융회사(은행)와 핀테크 기업이 서비스 개발 과정에서 서로 소통할 수 있는 통로로 금융회사 내부의 금융 서비스를 표준화된 API 형태로 제공하는 Open API와 개발된 핀테크 서비스가 금융 전산망에서 작동하는지 시험해 볼 수 있는 인프라인 Test-bed를 더한 개념<br/><br/>\
# 구성요소 <br/>\
- 은행권 공동 오픈 API : 잔액조회, 거래내역 조회, 계좌 실명 조회, 입금 이체, 출금 이체 API <br/>\
- 은행권 공동 테스트배드<br/>\
1) 테스트 공간 : 테스트랩 서버등<br/>\
2) 테스트 장비 : 정맥인식, ATM, 지문인식센서등 <br/>\
3) 테스트 시스템 : 온라인/오프라인 테스트랩 <br/><br/>\
# 목표 <br/>\
- 연동방식 및 데이터 표준화 <br/>\
- 데이터와 서비스 표준화 <br/>\
- 데이터와 서비스 공유/개방 \
',

// [핀테크]- 핀테크 오픈플랫폼 보안가이드
'# 정의 : 금융 API 이용을 위한 정보보호 기준을 제시한 가이드라인 (NH 농협 은행 국내 최초) <br/><br/>\
<img src = "./img/핀테크가이드라인_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/핀테크가이드라인_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/핀테크가이드라인_3.png" style = "max-width:100%; hegiht:auto;">\
',

// [핀테크]- 인슈어테크
'# 정의 : 맞춤형 보험 서비스 <br/>\
- 빅데이터 분석, 인겅지능등의 기술을 활용해 보험금 청구 간소화 서비스, 빅데이터 분석을 통한 고객 맞춤형 상품 추천등 기존 다른 보험 서비스를 제공하는 서비스 <br/><br/>\
# 주요기술 <br/>\
1. 쳇봇 <br/>\
- 빅데이터 기반 맞춤형 상품추천, 보험신청, 청구서비스 <br/>\
- 미국(레모네이드) <br/><br/>\
2. 인공지능 <br/>\
- 복잡한 의료기록, 보험계약, 특약 내용 분석, 지급 심사 <br/>\
- 일본(후코쿠생명) <br/><br/>\
3. 텔레메틱스 <br/>\
- 차량에 소형 전자장치 부착, 운전습관 연계 보험할인 <br/>\
- 미국(프로그래시브) <br/><br/>\
4. IoT<br/>\
- 보험가입자 웨어러블 기기 손목에 착용, 만보기 착용 할인 서비스 <br/>\
- 미국(오스카헬스) <br/><br/>\
* 122회 1교시 2번 \
',
  
// 인터넷 전문 은행
'# 정의 : ICT 기업의 금융업, 인터넷을 통한 무점포 비대면 영업 <br/>\
- 점포를 통한 대면거래를 하지 않고 인터넷을 주요 영업채널로 활용하며 업무 범위는 수신 및 여신업무 등 기존 은행 본연의 업무 대부분을 수행 가능한 새로운 개념의 은행 <br/><br/>\
# 구성요소 <br/>\
- 전산설비 : 위탁 가능<br/>\
- 지급 결제망 : 직접, 대행<br/>\
- 신용카드 : 동일 허가기준<br/>\
- 예금보험제도 : 동일 방식 사용<br/>\
- 실명확인제도 : 다양한 비대면 인증\
',
  
// FDS
'# 정의 : Fraud Detection System <br/>\
- 전자 금융거래에서 사용되는 단말기 정보,접속정보,거래내용 등을 종합적으로 분석, 의심거래를 탐지하고 이상 금융거래를 차단하는 시스템 <br/><br/>\
# 주요기능(수분대감) <br/>\
<img src = "./img/FDS_Function.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 판정방식 유형 <br/>\
<img src = "./img/FDS_Type.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 116회 3교시 1번\
',
  
// My Data 산업
'# 개념 <br/>\
<img src = "./img/MyDataConcept.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 주체별 역할, 처리흐름 <br/>\
<img src = "./img/MyDataSpecification.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 120회 2교시 2번\
',
  
// QR 코드 기반 결제 
'# 정의 : QR 코드 기반 결제하여 소상공인 경제 향상위한 결제 방식 <br/><br/>\
# Keyword : MPM, CPM, 고정형, 변동형, QR코드 변조, 악성 QR 코드, 소상공인 지원, 결제수수료 인하 <br/><br/>\
# 유형 <br/>\
- MPM(Merchant Presented Mode) <br/>\
- CPM(Customer Presented Mode) <br/><br/>\
* 120회 관리 3교시 1번\
',
  
// De-Fi
'# 정의 : Decentralized Finance <br/>\
- 금융 산업에서 블록체인의 중요성이 강조됨에 따른 탈중앙화 금융 서비스 <br/><br/>\
# 유형 <br/>\
- 대출/대여 : 가장 인기 있는 유형의 App <br/>\
- 통화은행 서비스 : 발행, 대출, 보험 포함 <br/>\
- 탈중앙화 시장 : 탈중앙화 거래소가 대표적 <br/>\
- 기타 : 파생 상품, 합성 자산, 탈중앙화 예측 시장 등 <br/><br/>\
<img src = "./img/DeFi_Compare.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 라이지움 84회 1교시 2번\
',

// 아바커스 프로젝트
'# 정의 : 사용자 지속 인증 Trust API / 구글 / 비밀번호 대체<br/>\
- 구글이 진행하는 비밀번호 대체해 사용자를 지속 인증하는 트러스트 API<br/>\
- 스마트폰이 알아서 현재 이용자가 진짜 주인인지 여부를 판단. 주인의 버릇과 주요 접속 장소, 말투 등 개인 정보를 축적한 뒤 현재 이용자가 비교해 "진실점수(Trust Score)"를 매긴 후 합격하면 자동 접속<br/><br/>\
# 현황 : 비밀번호 대체해 여러 센서 정보 결합한 보안체계 개발 중, 음성, 얼굴 인식 등 정보에서 계산된 트러스트 스코어 활용해 보안 해제 기능 제공',

// 영지식 증명
'# 정의 : 증명 방법 / 정보 주지 않는 <br/>\
- 1985년 Goldwasser, Micali, Rockoff가 영지식 대화형 증명 방식 발표로 시작, 어떤 내용을 알고 있을 때, 그 내용을 직접 보여주지 않고 그것을 알고 있음을 증명하는 방법 <br/>\
- 한 사람이 다른 사람에게 사실의 증명에 관한 어떠한 정보도 보이지 않고 사실의 증명을 알 수 있도록 만드는 방법, 정보를 전혀 주지 않고 상대방에게 정보를 알고 있음을 증명하는 방법<br/><br/>\
# 정의 : 정보를 발설하지 않고, 그 정보를 알고 있다는 것을 증명하는 기술 <br/><br/>\
# 특징 <br/>\
- 완전성 : 문장 참 / 정직한 증명자 / 정직한 검증자 / 납득  <br/>\
- 정당성 : 문장 거짓 / 부정직한 증명자 / 정직한 검증자 / 납득x <br/>\
- 영지식성 : 참 거짓 이외 아무것도 알 수 없음 <br/><br/>\
# 구성요소 <br/>\
- 명제 : 증명하려는 사실 (참, 거짓) <br/>\
- 증명자 : 어떤 문장이 참이라는 것을 증명하는 쪽 <br/>\
- 검증자 : 증명 과정에 첨여하여 증명자와 정보를 주고 받는 쪽 <br/><br/>\
# 사례 <br/>\
- 이더리움(zk-SNARKs, 제크캐시(Quorum, JP 모건)<br/>\
- 코인플러그(메타디움, 부정거래 및 사기 행위)\
',

// [이더리움]- 스마트계약
'# 정의 : 컴퓨터 언어로 저장된 계약 / 분산원장 시스템 / 자동 체결<br/>\
- 분산원장시스템(Distributed ledger system)과 같은 컴퓨터 시스템에 의하여 자동으로 체결될 수 있는 기존 법률적 언어대신 컴퓨터 언어로 저장된 계약<br/>\
- 블록체인을 통해 일정 조건을 만족시키면 거래가 자동으로 실행되도록 프로그램된계약<br/><br/>\
# 특징 : 자율성, 안정성, 분산성 <br/><br/>\
# 구성 : 블록체인, 이더리움, 스크립트 언어(Python, Serpent(Python 문법과 유사), LLL(Listp와 유사), 솔디리티(Soldility, 자바스크립트 유사한 독자 언어) <br/><br/>\
# 위협성 <br/>\
- 정상행위 : State 설계 오류, 암호학 실수, 메시지 중첩 등 충돌 <br/>\
- 악의적 행위 : Criminal Smart Contract등 익명성 악용 <br/><br/>\
# 대응 : 프로그램 분석기법 이용 탐지, 안전한 작성 지원, 악의적 스마트 컨트랙트 탐지 및 차단\
',

// [3D 프린터]- 팝업팩토리
'# 정의 : HW Agile 방법론 / 3D Printing<br/>\
- 3D 프린팅 기술을 이용하여 전자기기(HW)를 그 자리에서 즉석(Pop-up) 생산하는 기법. 더 빠르고 신속하게 SW를 만드는 SW부문의 Agile 개발방법론을 하드웨어(HW) 생산 방식에 접목하여 HW를 빠르고 유연하고 민첩하게 생산(fast, flexible, agile Manufacturing)하기 위한 기법',

// 오감기술
'# 정의 : 오감자극 인터페이스 기술 <br/>\
- 촉각, 후각, 미각 등 오감을 자극하여 정보를 전달하는 인터페이스 기술',

// 모션기술
'# 정의 : 모션 제공 사실 체험 극대화 기술 <br/>\
- 가상현실과 접목되어 적절한 모션을 제공하여 사실적인 체험을 극대화 할 수 있는 기술',

// [Web 3.0]- WebRTC
'# 정의 : No Plugin Service <br/>\
- Web Realtime Communication <br/>\
- 웹 브라우저 별도 Plugin 없이 실시간 음성, 영상통화, 파일공유 서비스 제공하는 웹 서비스 <br/><br/>\
# 암기 <br/>\
- 아키텍처(5) : P음비전N <br/>\
- 기술(7) : GSJISNT <br/>\
- Peer-Connection <br/><br/>\
# 아키텍처 <br/>\
- Peer Connection <br/>\
- 세션관리 <br/>\
- 음성, 비디오 엔진 <br/>\
- 전송, 음성/영상 캡처 <br/>\
- Network I/O 모듈 <br/><br/>\
# 기술 <br/>\
- GUESTMEDIA <br/>\
- SDP : Session Desciption Protocol <br/>\
- JSEP : Java Session Establishment Protocol <br/>\
- ICE : Interactive Connectivity Establishment <br/>\
- STUN : Session Traversal Utilits for NAT <br/>\
- TRUN : Traversal Using Relays arount NAT <br/>\
- NAT <br/><br/>\
# 동향 <br/>\
- MS : Skype for Web Messagin Service (WebRTC 수용) <br/>\
- Amazon : 태블릿 PC 킨들 파이어에 WebRTC 세션을 통한 기술지원담당자 연결기능 제공 <br/>\
- FaceBook Linkedin : 기존 FaceBook에서 메신저 분리 <br/>\
- 하이퍼커넥트 : 국내벤처, 전세계 무료 메시지, 무료 영상 통화<br/>\
<img src = "./img/WebRTC.png" style = "max-width:100%; height:auto;">\
',

// [Web 3.0]- React.js
'# 정의 : Facebook 개발 오픈소스 Javascript Library <br/>\
- 웹에서 상호작용하는 사용자 인터페이스를 만들기 위해 Facebook에서 내부적으로 개발한 오픈소스 javascript 라이브러리<br/>\
최초 한 번의 Request에 html, css, images, js 파일들 압축해서 클라이언트 브라우저 다운 받고, 그 후 요청한 Request에 동적 data만 서버를 통해 다운 받음',

// [Web 3.0]- REST
'# 정의 : WOA(Web Oriented Architecture) 핵심 정보교환 프로토콜 <br/>\
- Representational State Transfer <br/>\
- 웹과 같은 하이퍼미디어 환경에서 자원의 존재/상태 정보를 표준화된 HTTP 메소드로 주고받는 WOA 핵심 정보교환 프로토콜<br/><br/>\
# 구성(3) <br/>\
- 데이터 : 데이터, 식별자(URI, URL), HTML, XML) <br/>\
- 컴포넌트 : 고유서버, GW, 프록시, 웹브라우저, 사용자 에이전트 <br/>\
- 커넥터 : 클라이언트 커넥터, 서버 커넥터, 브라우저 캐시 <br/><br/>\
# 비교 (REST, SOAP-Proxy Server) <br/>\
- 클라이언트 애플리케이션에서의 상태변이 <br/>\
- Caching 웹의 진화, 보안, Generic Interface, 상호 운영성<br/><br/>\
<img src = "./img/REST.png" style = "max-width:100%; height:auto;">\
',

// Semantic Web
'# 정의 : 지능형 웹 패러다임 <br/>\
- 웹 상 존재 데이터 의미와 관계를 RDF(Resource Description Framework), 온톨로지 기반 표현. 기계가 의미를 이해. 추론할 수 있도록 하는 지능형 웹 패러다임<br/><br/>\
#  특징 <br/>\
- 기술적 특징 : 메타데이터기반의 지능형 추론형 웹으로 확장 / 의미사전인 Ontology 구축<br/>\
- 서비스적 특징 : 정보제공등 맞춤형 정보서비스 통한 QoE 보장 / 도메인별 의미기반의 검색 <br/><br/>\
# 핵심 구성요소<br/>\
- Metadata : 메타데이터와 추론에 필요한 규칙을 표현 / XML, RDF언어로 표현 <br/>\
- Ontology : 데이터의 의미와 관계 정보를 체계적으로 표현 / 지식표현 기술 이용 <br/>\
- Logical Reasoing : 온톨로지와 함께 결합된 관계정보들로부터 새로운 정보 도출 / 정보를 결합하여 새 정보 도출 <br/>\
',
  
// 앱접근성
'# 정의 : 제작 차별금지 규정 지침 <br/>\
- 모바일 애플리케이션 서비스 제공자가 장애인과 고령자 등 접근성을 보장하기 위해 어플리케이션 제작시 지켜야할 사항을 규정한 지침 <br/><br/>\
# 원리 및 지침 (인운이견)<br/>\
1. 인식 용이성 <br/>\
- 대체 텍스트 제공 <br/>\
- 멀티미디어 대체 수단 제공 : 자막, 원고, 수화 <br/>\
- 명료성 :  색무관, 명확한 지시, 배경음x <br/><br/>\
2. 운용 용이성 <br/>\
- 키보드 접근성 <br/>\
- 충분한 시간 제공 <br/>\
- 광 과민성 발작 예방 <br/>\
- 쉬운 네비게이션 <br/><br/>\
3. 이해 용이성 <br/>\
- 가독성 <br/>\
- 예측 가능성 <br/>\
- 콘텐츠 논리성 <br/>\
- 입력 도움 <br/><br/>\
4. 견고성 <br/>\
- 문법 준수 <br/>\
- 웹, 애플리케이션 접근성 \
',

// 시선통신기술
'# 정의 : 곧바로 띄우는 기술 / 기지국, AP X <br/>\
- 기지국이나 AP 도움 없이 스마트폰 화면 TV나 스크린에 곧바로 띄우는 기술<br/><br/>\
# 정의 : 연결하고자 하는 대상의 식별번호를 몰라도 스마트폰 화면에 보이는 대상과 바로 연결해주는 통신 기술 <br/><br/>\
# 기술요소 <br/>\
- 자가공간 필터링 : 10도 이내 자가 공간 인식 <br/>\
- 객체 구분형 이미지 특성 매칭 : 객체 타입에 따른 이미지 특성 추출 <br/>\
- 통신 대상 인식 프로토콜 : 10도 이내 대상 단말의 탐색 응답 수신 <br/>\
- Wifi P2P 기반 시선 통신 프로토콜 : PAM(Pre-Association Messaging ; 사전 소용량 통신) <br/>\
',

// 하이퍼보이스
'# 정의 : 음성데이터 텍스트간 연결 가능한 응용 기술 <br/>\
- 음성데이터와 텍스트 간 연결이 가능한 색인기능을 제공함으로써 멀티미디어 데이터에 대한 접근성을 향상시키며, 다양한 매시업 서비스를 만들어 낼 수 있는 응용기술<br/><br/>\
# 기술 <br/>\
- 인공지능 기반 음성인식 기술 : 딥러닝, 구글 Cloud Speech(단문/연속모드지원 Open API) <br/>\
- 하이퍼 보이스 마크업 표준 및 변환 기술 : HVML 언어, TimedText, WebVTT(Web Video Text Tracks Format), TTML(Timed Text Markup Language) <br/>\
- 하이퍼보이스 기반 매시업 서비스를 위한 Web API 기술 : WebRTC API(브라우저간 영상통화), WebAudio API, Web Speech API <br/><br/>\
# 표준화 현황 <br/>\
- 국외 : W3C TTML(Timed Text Markup Language), WebVTT(Web Video Text Tracks) 표준화 진행중 <br/>\
- 국내 : TTA 스마트폰 음성인식 긴급전화 서비스 표준, 서비스 로봇 음성인식 성능평가를 위한 API표준 <br/><br/>\
* HVML : Hyper Voice Markup Language (W3C에서 표준화 진행중) <br/>\
* VAD : Video Activity Detection , 통신중 묵음 검출 기술 <br/>\
* HMM : Hidden Markov Model  길이 일정X  시계열 데이터 연구 통계 모델링 <br/>\
* MFCC : Mei주파수 캡스크림 표현 <br/>\
* LPCC : 선형예측 캡스크림 계수\
',

// 모바일 컨시어지
'# 정의 : 업무 처리 맞춤형, 개인화 서비스 / 모바일 프로그램 이용<br/>\
- 모바일 기기의 챗팅 봇, 음성 인식 개인 비서 프로그램를 이용하여 사용자의 제반 업무를 일괄적으로 처리하고 맞춤형, 개인화하는 서비스<br/><br/>\
# 특징 <br/>\
- 단일화 : 별도 앱 불필요 <br/>\
- 커스터마이징 : 개인 맞춤형 <br/>\
- 라스트 마일 : 신속배송 뿐만 아니라 고객상황까지 고려, Before Service <br/>\
- 인공지능(AI) <br/><br/>\
# 기술 <br/>\
- UI/UX : 챗봇, API, 음성인식비서 <br/>\
- Platform : 모바일 메신저, SNS <br/>\
- Processing : 인공지능 <br/>\
- Repository : 빅데이터 큐레이션 <br/><br/>\
# 사례 : 11번가 디지털 컨시어지 11톡, Facebook M Assistant\
',

// 엑사스케일 컴퓨팅 시스템
'# 정의 : 엑사플롭스급 컴퓨팅 시스템 / 초당 10^18 연산<br/>\
- 1 엑사플롭스(ExaFlops) 이상의 처리능력을 가진, 엑사플롭스(ExaFlops) 급의 컴퓨팅 시스템<br/>\
- 1 엑사플롭스(ExaFlops)는 초당 10^18 회(100 경 회)의 연산을 의미함<br/><br/>\
# 기술(요구사항) <br/>\
- 에너지 : 20MW 이하 <br/>\
- 인터커넥트 : 광학데이터 이동기술 / 인텔 OPA(Omni Path Architecture) <br/>\
- 메모리 : 계층구조 / 인텔 3D Xpoint 메모리 <br/>\
- 확장성기반 SW : 다수노드 기반 <br/>\
- 프로그래밍 : 병렬 / OpenMP, OpenCL, CUDA <br/>\
- 데이터 관리 : 관리 / Lustre 파일 시스템 <br/>\
- 엑사스케일 알고리즘 : 저장후 연산 ->  재실행알고리즘 변환 필요, 발견과 설계, 결함 알고리즘 (Multi-Physical 문제 해결) <br/><br/>\
# 동향 <br/>\
- 미국 : CORAL 프로젝트 <br/>\
- EU : EU CRESTA 프로젝트 <br/>\
- 독일 : Deep 프로젝트 <br/>\
- 국내 : ETRI-MAHA(유전체 데이터 분석), 서울대-천둥(슈퍼컴퓨터) <br/><br/>\
* FLOPS(FLoating point OPerations per Second) = 컴퓨터의 성능 수치로 나타낼 때 주로 사용되는 단위로서 초당 실행가능한 부동소수점 연산 횟수를 의미 \
',

// NUI
'# 정의 : 디지털 기기 제어 인터페이스 기술 / 별도 장치 없이 <br/>\
- Natural User Interface <br/>\
- 마우스 등 별도의 인공적 제어장치 없이 사람의 자연스러운 감각/행동/인지 능력을 통해 직접 교감하는 방식으로 디지털 기기를 제어하는 인터페이스 기술 <br/><br/>\
# 발전 : CLI > GUI > NUI > OUI <br/><br/>\
# 4대 영역 <br/>\
- Gesture IF : 동작인식 <br/>\
- Multi Touch IF <br/>\
- Voice IF <br/>\
- Sensory IF : 뇌파->명령어 <br/><br/>\
# 유형 <br/>\
- 접촉식 : 멀티터치, 센서인식, 뇌파인식, 실감형인터페이스 <br/>\
- 비접촉식 : 음성인식, 영상인식(제스처, 얼굴, 시선, 인식 등) <br/><br/>\
# 기술 <br/>\
- 동작인터페이스 : 3D 센서<br/>\
- 멀티터치 인터페이스 : 적외선 카메라 터치지점, 정전식,감압식 <br/>\
- 음성 인터페이스 : 음성DB비교, 시멘틱 분석 <br/>\
- BCI : 침습/비,유도/인식\
',

// 제로 UI
'# 정의 : 스크린 기반 인터페이스 최소화 / 자연스럽게 인지, 제공<br/>\
- 사용자의 생활 환경 안에서 자연스럽게 사용자의 요구사항을 인지하여 필요한 서비스를 제공하게 함으로써 현재 스크린 기반의 사용자 인터페이스를 최소화 하려는 기술 <br/><br/>\
# 암기 : 방식 - 상음제 <br/><br/>\
# 구현방식 : 상황인지, 음성인식, 제스쳐 인식 <br/><br/>\
# 사례 <br/>\
- 홈어시스턴트 : 아마존 에코, 구글 홈, SKT 누구 <br/>\
- 상황인지 기반 제로UI : 네스트 온도 조절기, 줄리(스마트 플러그), 알바(조명 조절) <br/><br/>\
* 스크린기반 UI-> 제로 UI \
',

// 데이터브로커
'# 정의 : 데이터 공유 기업 / 수집,재판매,가공,분석 <br/>\
- 고객 데이터를 수집, 재판매, 가공, 분석하거나 다른 기업들과 데이터를 공유하는 기업 <br/><br/>\
# 암기 <br/>\
- Biz모델 : 수분의 <br/>\
- 현황 : 블액A스공보 <br/><br/>\
# 비즈니스 모델 <br/>\
- 데이터화 및 수집 : 자체 수집, 브로커간 거래 <br/>\
- 데이터 분석 : 데이터 가공, 조합,활용해 데이터 분석 결과 판매, 고객별 맞춤형 데이터 분석, 판매 <br/>\
- 의사결정 및 활용 : 데이터 분석을 통한 특정업무를 위탁(기사 작성, 타켓 고객에 대한 직간접 홍보등) <br/><br/>\
# 데이터 분야 활성화 전략 <br/>\
- 익명 데이터 활용<br/>\
- 데이터 수집 대한 우려 개선 <br/>\
- 데이터 가공 및 분석 비즈니스 활성화 위해 공공분야 내부의 선도적 전략과제 추진 필요 <br/><br/>\
# 활용 사례 : 오바마 대통령 선거 캠프 <br/><br/>\
# 해외 현황 : 미국 - 데이터 수집, 활용에 대한 무조건 금지보다 투명한 유통관리에 초점 <br/><br/>\
# 국내 현황 : 시장 협소, 공공 데이터 개방 정책 추진 및 데이터 유통 채널 신설등으로 점진적으로 확대중 but 원(Raw)데이터 유통 중심, 양질 데이터/분석 전문가 부족 <br/><br/>\
# 산업 현황 <br/>\
- 블루카이사 : 쿠키, 웹비콘, e-tag등 활용, 데이터 브로코 엑시옴(Acxiom; 직접 개인정보 수집과 활용 현황을 확인하는 사이트 "About The Data.com"운영) <br/>\
- KTH / API STORE : 개인/기업 모두 회원 가입후 API 형태의 데이터 업데이트가 가능하며 DB 컨텐츠를 직접 수급하여 API형태로 제작하여 제공 <br/>\
- Big Data Hub / SKT : 고객 통신 서비스 기반 데이터를 API, Table Chart, Map Report 등의 다양한 유형으로 제공 웹상 데이터 정보를 시각화 및 개별 다운로드 가능 <br/>\
- 데이터 스토어 / DB 진흥원 : API 상품과 데이터 상품으로 나누어 등록 관리 <br/>\
- 공공데이터포털 / 한국정보화진흥원 : 공공데이터를 오픈 API, 파일 데이터, 표준 데이터로 제공, 시각화 등 다양한 방식 제공/유통, 국민 편의 제공 <br/>\
- 보건의료빅데이터개방시스템 / 건강보험심사평가원 : 민간기업, 프로그램 개발자, 인터넷 이용자 대상으로 병원, 약국정보, 서비스 등 의료데이터 지원\
',
  
// 가상머신, 컨테이너
'# 개념 <br/>\
<img src = "./img/VM_Container_Concept.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구동원리 <br/>\
<img src = "./img/VM_Container_Mechanism.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 배포방식 <br/>\
<img src = "./img/VM_Container_Delivery.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 2교시 4번\
',

// 가상화 
'# 정의 : 컴퓨터 운영체제(OS)를 시스템 구조나 하드웨어에 영향받지 않고 설치, 사용할 수 있도록 하는 기술 <br/><br/>\
# 암기 <br/>\
- 원리 : 분집에인 <br/>\
1) 분할(Partitioning) <br/>\
2) 집약(Aggregation) <br/>\
3) 모방(Emulation) <br/><br/>\
# 원리 <br/>\
- 분할 : 서버가상화, 디스크 파티셔닝 <br/>\
- 집약 : 스토리지 가상화, 블록(볼륨가상화), 씬 프로비저닝(용량 가상화), 중복배제(용량 절감)<br/>\
- 에뮬레이션 : 모방, 텔넷(가상단말), JVM등 <br/>\
- Insulation : 물리적인 자원의 교체나 변경에도 서비스를 안정적으로 유지함, RAID, HA, L4 Switch <br/><br/>\
# 유형 <br/>\
- 인프라 자원 : 서버(가상머신, 디스크파티셔닝, 하이퍼바이저) <br/>\
- 스토리지 : 호스트 기반, NW기반, 스토리지 기반 <br/>\
- NW : VPN, VLAN, 가상 라우터 <br/>\
- 워크로드 가상화 : 트랜잭션(JVM 로드밸런싱) <br/>\
- 태스크 : 그리드 컴퓨팅 <br/>\
- 프리젠테이션 : 어플(SBC, SaaS, 프로비저닝, 스트리밍) <br/><br/>\
# 데스크탑 가상화 <br/>\
- SBC : 서버의 App에 다수 사용자 접속, 논리적 망분리 <br/>\
- VDI : 서버의 가상 PC에 사용자 접속 <br/>\
- CCI(Consolidated Client Infra) : 블레이드를 개인별로 할당 <br/><br/>\
# 스토리지 가상화 <br/>\
- 대상별 : 블록, 디스크, 테이프, 파일시스템 <br/>\
- 위치별 : 호스트기반, NW, 스토리지 <br/>\
- 기업별 : 인밴드, 아웃밴드 <br/>\
- 연결방식 : DAS, NAS, SAN <br/>\
- 확장 : Scale-up, Scale-Out<br/>\
- 형태 : S/W, H/W, Appliance 방식 <br/><br/>\
<img src = "./img/Virtualization_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Virtualization_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Virtualization_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// [가상화]- 하이퍼바이저
'# 정의 : 멀티프로그래밍 시스템 문제 해결 <br/>\
- 하나의 호스트 컴퓨터에서 다수의 운영체제를 동시에 실행하기 위한 논리적인 소프트웨어 가상화 플랫폼 <br/><br/>\
# 유형 <br/>\
<img src = "./img/HypervisorOverview.png" style = "max-width:100%; height:auto;"><br/>\
1. Type 1 : HW 직접 설치 / 오버헤드 적음, 리소스 관리 유연 <br/>\
- 전가상화 : 명령 해석 전달 / Guest OS 수정 x <br/>\
- 반가상화 : API 통해 OS 제어 / Guset OS 수정 o <br/><br/>\
2. Type 2 : OS 위에 설치 / 오버헤드 큼, 별도 관리모듈 x <br/><br/>\
* 아이리포 23회 1교시 4번<br/>\
* 122회 1교시 8번\
',
  
// 컨테이너
'# 정의 : 커널 공유 프로세스 간 격리된 환경 제공 가상화 기술 <br/>\
- 커널을 공유하는 프로세스간 Cgroup, namespace, Chroot등의 기능 이용 격리된 환경 제공 가상화 기술 <br/><br/>\
#  기술요소 <br/>\
1. Cgroup (HW 자원 가상화) <br/>\
- Subsystem : 제어 가능 시스템 자원 <br/>\
- Cgroup FS : cgroup 인터페이스 <br/><br/>\
2. Namespace (사용자 공간 분리) <br/>\
- Pid : 프로세스 공간 분리 <br/>\
- Mnt : 독립적 마운트 <br/><br/>\
3. 시스템 관련 구성 <br/>\
- Chroot : 파일시스템 분리, root path 변경 <br/>\
- 디바이스 추가 : lxc-device-add \
',
  
// 컨테이너 오케스트레이션 
'# 정의 : 반복적인 애플리케이션의 배포, 확장 및 운영을 자동화 하는 행위 <br/><br/>\
# 필요성<br/>\
- Composition : 다종 컨테이너 구성 서비스의 설정 및 연동 <br/>\
- Replication : Scalability, FT, HA위한 복제 <br/>\
- Write Once Run Anywhere <br/><br/>\
# 기능 <br/>\
- 프로비저닝 <br/>\
- 구성 스크립팅(Scripting) : 스크립트 작성 <br/>\
- 모니터링 <br/>\
- 업그레이드와 롤백 <br/>\
- 롤링(Rolling) <br/>\
- 서비스 탐색(Service Discovery) <br/>\
- 컨테이너 정책관리<br/>\
- 상호운영성<br/><br/>\
<img src = "./img/ContainerOrchestration_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ContainerOrchestration_2.png" style = "max-width:100%; height:auto;">\
',

// [가상화]- Docker
'# 정의 : 컨테이너 기반 가상화 기법 <br/>\
- 리눅스 컨테이너 기술을 바탕으로 애플리케이션을 격리된 상태에서 실행하는 가상화 기술 <br/>\
- (애리바) <br/>\
<img src = "./img/VM_Containor.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 구성 <br/>\
- 도커 엔진 : 컨테이너 제어, 생성 <br/>\
- 호스트 OS : 리소스 공유 <br/>\
- 도커파일 : 이미지 설정 <br/>\
- 이미지 Repository : 패키징, 허브 <br/>\
- 컨테이너 : 이미지 실행 <br/>\
<img src = "./img/Docker_1.jpg" style = "max-width:100%; hegiht:auto;"><br/><br/>\
',
  
// LXC, 도커
'# 정의 : 경량(Light-Weight) 프로세스 가상화 기술 <br/>\
- 하나의 리눅스 호스트상에서 namespace와 cgroups를 활용하여 여러개의 독립된 리눅스 컨테이너를 제공하는 운영체제 수준의 경량 프로세스 가상화 기술 <br/><br/>\
# 특징 <br/>\
- 적은 Footprint : 차지하는 공간 작음 <br/>\
- 자원 가상화 : Namespace, cgroup을 활용 <br/>\
- 낮은 오버헤드 : 하이퍼바이저 대비 낮은 오버헤드와 복잡성 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/LXC.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 구성요소 <br/>\
- Linux Kernel : Core OS <br/>\
- Cgroups : 시스템 자원 세밀한 할당 및 제어 <br/>\
- Namespaces : 컨테이너별 고립된 View 제공 <br/>\
- Container : Runtime 환경, Library 통합 패키징 <br/><br/>\
# 하이퍼바이저 비교 <br/>\
<img src = "./img/ContainorHypervisor.png" style = "max-width:100%; hegiht:auto;">\
',

// [가상화]- 쿠버네티스(Kubernetes)
'# 정의 : 자동 배포, 스케일링, 로드밸런싱 오픈소스 오케스트레이션 플랫폼 <br/>\
- 컨테이너화된 애플리케이션을 자동으로 배포, 스케일링, 로드밸런신 및 관리해주는 오픈소스 오케스트레이션 플랫폼 <br/><br/>\
# 특징 <br/>\
- Google GO언어로 구현 <br/>\
- Linux 컨테이너 작업 자동화 하는 오픈소스 플랫폼 <br/>\
- 다중 호스트의 컨테이너 일정관리 <br/><br/>\
# 주요기능 <br/>\
- 로드밸런싱 : POD에게 고유한 IP 주소와 POD 집합에 대한 단일 DNS 명 부여 / Service<br/>\
- 자동화된 롤아웃, 롤백 : 애플리케이션 모니터링, 동시 종료 않도록 보장 / Deployment <br/>\
- 배치 실행 : CI 워크로드 관리, 실패한 컨테이너 교체 / Deployment <br/>\
- 자가치유 : 응답하지 않는 컨테이너 제거, 준비될 때까지 알리지 않음 / Deployment <br/>\
- IPv4/IPv6 이중 스택 : POD 서비스에 IPv4,6 할당 / Dual Stack <br/>\
- Horizontal 스케일링 : 간단한 명령어나 UI를 통해 Scale Up Down / Kubectl <br/>\
- 오케스트레이션 : 여러 호스트 배포 및 업데이트 제어 자동화 / master <br/><br/>\
# 구성요소 <br/>\
1. Master Node : 노드관리, 스케줄링, 활동 조율<br/>\
- API Server : 클러스터 노드와 통신 <br/>\
- Scheduler : Pod 적절한 노드 서버에 할당 <br/>\
- Controller Manager : 노드 관리자 <br/>\
- etcd : 클러스터 구성 파일 <br/><br/>\
2. Work Node : 쿠버네티스 클러스터 내 워커 머신으로써 동작하는 물리적인 컴퓨터 시스템 <br/>\
- Pod : 가장기본적인 배포단위 <br/>\
- Kubelet : 마스터 API와 통신하는 Agent <br/>\
- Kube-Proxy : 컨테이너 간 네트워킹 및 로드 밸런싱 - IPVS(IP Virtual Server) <br/><br/>\
<img src = "./img/Kubernetes.png" style = "max-width:100%; hegiht:auto;">\
',
  
// HCI
'# 정의 : 차세대 데이터센터 플랫폼 <br/>\
- Hyper Converaged Infrastructor <br/>\
- X86 머신에 가상 컴퓨팅기능을 적용하고 스토리지와 네트워킹을 단일 시스템으로 결합하여 데이터 센터의 모든 요소를 Software Defined IT Infrastructure (SDI)로 구축, Scale-Out, 벤더 Lock-in 탈피한 통합 IT 프레임워크 <br/><br/>\
# 배경 <br/>\
- 분리,개별 장비 > CI (다수장비 Rack) > HCI (SDC+SDS+SDN)<br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/HCI_Architecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 3교시 2번\
',
  
// VDI 
'# 정의 : Virtual Desktop Infrastructure; 가상데스크톱 인프라 <br/>\
- 소프트웨어를 이용해 데스크탑을 가상화하고, 이를 중앙에서 사용자 환경으로 제공하는 기반기술 <br/><br/>\
<img src = "./img/VDI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 단말기(Zero Client, Thin Client, PC) <br/>\
- 세션 브로커 서버 : 사용자인증 등 정책적용 <br/>\
- 인증 서버(Active Directory) <br/>\
- 하이퍼바이저(Hypervisor) : 가상화 플랫폼- VM ware, vSphere5 <br/>\
- 가상머신 운영 서버 : OS, Hypervisor, Application등 설치, 사용자별 가상환경 제공 <br/>\
- 공유 스토리지 : 이미지 파일, 업무자료 등 저장 공간 <br/><br/>\
# 프로토콜 구현방법 <br/>\
- Client rendering <br/>\
1) 개념 : Host VM 전송 다수의 그래픽 명령어를 Client의 GPU 사용 렌더링 <br/>\
2) 장점 : 대역폭 작아 WAN 적용 용이 <br/>\
3) 단점 : 프로토콜 복잡, Client 성능 요구 <br/>\
- Host Rendering <br/>\
1) 개념 : 호스트 CPU, GPU 활용 렌더링 수행 후 화면 캡쳐, 압축, 암호화해 클라이언트 전송 <br/>\
2) 장점 : 2D/3D 및 어플 무간 사용 가능 <br/>\
3) 단점 : 렌더링/압축부하, NW 대역폭 요구 <br/><br/>\
# RISK <br/>\
- 성능 불만족 : 도입시 PoC 통한 만족도 조사 <br/>\
- SPoF : 이중화 <br/>\
- 주변기기호환성 : 주변기기 표준화 <br/>\
- 어플리케이션 호환성 : BMT통한 호환성 조사 <br/>\
- NW 대역폭 고갈 <br/><br/>\
# 도입시 BMT 항목 <br/>\
- 인프라 : 모니터링 기능, 배포기능, 원격관리, Thin Provisioning <br/>\
- 보안성 : 저장매체 제어, 권한인증, 클립보드 통제 <br/>\
- 호환성 : 외장장치 지원, Application, OS지원 <br/>\
- 사용자편의성 : 모바일 지원, 해상도, 동영상 <br/>\
- 안전성 : HA, NW 단절대응 <br/>\
- 서버성능 : CPU, QoS, 백업 및 복원, 워크로드(VM동시가동시 최종 가동된 VM 로그인 시간), 최대 IOPS(Host제공 가능 최대 Disk I/O 성능), 집적도(서버당 운영가능 VM 수) <br/>\
- VM성능 : VM IOPS(VM에서 제공가능 최대 Disk I/O 성능), 부팅시간, 실행속도, 체감속도 <br/>\
- NW : Host 트래픽, VM 트래픽 <br/><br/>\
# 도입시 고려사항 <br/>\
- 효과성 : 사용자 만족도, TCO검증, 라이선스 확인(접속용 PC/Thin Client OS, VM OS 라이선스 2중 부담 발생 가능), 보안 정책 연계 <br/>\
- 프로젝트 : 단계별 구축, 안정화기간 확보, 변화교육, 안정적 운영골 <br/><br/>\
* BMT : Bench Marking TEST <br/>\
* POC : 새로운 솔루션을 현장에서 검증 받는 것 <br/>\
',

// OGC
'# 정의 : 지리정보 상호 운용성 제고 비영리 단체 / 미국 / 1994 / 이질적 환경 <br/>\
- Open GIS Consortium <br/>\
- 1994년 각기 다른 하드웨어와 소프트웨어를 가진 이질적인 환경에서 지리정보의 상호운용성을 제고하려는 목적으로 미국에서 창립된 비영리 단체 <br/><br/>\
# OWS(OGC Web Service) : 데이터 마트에 접근하고, 이 데이터를 분석,처리하여 표현할 수 있는 일련의 서비스 처리 체계 <br/>\
- 구성 : WMS, WFS, WCS, WPS, CSW <br/><br/>\
# WMS(Web Map Service) : 데이터 서버에 저장된 레이어 또는 분석을 통해 생성된 벡터 및 래스터 데이터를 Visualization 하는 서비스 <br/>\
- 주요기능 : Basic WMS(Get Capabilities, GetMap), Queryable WMS(GetFeatureInfo, GetMap, Opeartion), GetLegendGraphic, GetStyle, PutStyle <br/><br/>\
# OGC 현황 : 국토교통부의 국토공간계획지원체계(KOPSS)사업의 일환으로 OGC 표준의 활용을 통한 오픈 API서비스 제공 <br/><br/>\
* WMS : Web Map Service <br/>\
* WFS : Web Feature Service <br/>\
* WCS : Web Coverage Service <br/>\
* WPS : Web Processing Service <br/>\
* CSW : Catalogue Service\
',
    
// 위치정보, 위치기반 서비스
'# 정의 : 이동성이 있는 사물 또는 개인이 특정한 시간에 존재했던 장소에 관한 정보 <br/><br/>\
# 분류 <br/>\
- 위치정보 사업 : 위치정보 수집해 위치기반 서비스 사업자에게 제공 <br/>\
- 위치정보기반서비스 사업 : 위치정보를 이용한 서비스를 제공 <br/><br/>\
# 위치정보 사업 > LBS (LDT, LEP, LAP) / 측위기술 (NW, GPS, Wifi / XPS) <br/><br/>\
* LBS(Location Based Service) : 위치기반 기술 <br/>\
- LDT(Location Determin Technology) : 위치 결정 기술 <br/>\
- LEP(Location Enabled Platform) : 위치 처리 플랫폼 <br/>\
- LAP(Location Application Program) : 위치 응용 프로그램 <br/><br/>\
* 116회 응용 2교시 3번\
',
   
// AMI
'# 정의 : 최종 소비자와 전력 회사 사이의 양방향 원격지침 인프라 <br/>\
- Advanced Metering Infrastructure <br/>\
- 에너지를 효율적으로 관리할 수 있는 시스템 및 서비스로, 소비자에게 실시간으로 에너지 사용량에 대한 정보가 제공되어 소비자 스스로 혹은 자동화된 기기 제어를 통해 에너지 사용을 제어하는 인프라 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/AMI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 상위 시스템 <br/>\
- MDMS (Meter Data Management System) : 미터링 데이터 관리 <br/>\
- CIS (Customer Information System) : 고객이 관리와 과금의 주체가 되는 시스템 <br/><br/>\
2. 통신시스템 <br/>\
- WAN (Wide Area Network) : CDMA, 광통신망 등 공중망 사용 <br/>\
- NAN (Neighborhood Area Network) : 중계기와 미터 사이의 영역 <br/>\
- HAN (Home Arae Network) : 수용가 내부 통신 네트워크 (PLC, ZigBee)\
',
  
// 스마트 그리드 보안
'# 정의 : 전력망에 IT를 융합한 안전한 차세대 지능형 전력망을 위한 범 국가적인 법, 제도, 조직 및 기술적인 보안체계 <br/><br/>\
# 보안위협 <br/>\
- 제어시스템 위협 : 미터기 공격, 대규모 정전 사태 <br/>\
- 네트워크 위협 : 인터넷 취약점 이용하여 제어시스템으로 침투 <br/>\
- 소비자 보안 위협 : 각 가정 에너지 사용정보 통한 개인정보 노출 피해 <br/><br/>\
# 대응방안 <br/>\
1. 정책적 <br/>\
- 법/제도 : 정보통신망이 관련되지 않은 사각지대 관련법 개정 <br/>\
- 조직 : 보안 전문 조직 필요 <br/><br/>\
2. 기술적 <br/>\
- 제어시스템 : 암호화 키공유, SCADA 보안 <br/>\
- 네트워크 : 단말기 인증, 네트워크 포렌식 <br/>\
- 소비자 : 기기보안, 소비자보안, 서비스 보안 \
',

// 마이크로 그리드
'# 정의 : 소규모지역 에너지 공급 전력 체계 <br/>\
- 스마트그리드의 일종으로 재생에너지를 사용해 소규모지역에 자급자족할 수 있는 에너지를 제공하는 전력체계 <br/>\
- 지역화된 전력망으로 수용가와 풍력, 태양광 등의 분산 에너지 자원(DER)을 연결한 전력망으로 전체 전력 계통과 독립적(off-grid)으로 동작하여 전력의 자급자족이 가능하며, 필요에 따라 계통과 연결(on-grid)되어 동작할 수도 있는 전력망<br/><br/>\
# 암기 <br/>\
- 표준 : IEEE 1547, IEEE P2030.7, IEC 61850 <br/>\
- 현황 <br/>\
1) L(안.지)K(DR)포(운플) <br/>\
2) 미국비치.GE제어 <br/>\
3) GM벨에 <br/><br/>\
# 구성 : 기존계통(한전), 통합운영시스템, 마이크로그리드 <br/><br/>\
# 주요기술 : 스마트계통 운영기술(SCADA, DAS, EMS), AMI, HAN, Smart Meter, 보안기술, 신재생 에너지, 연계 및 충전 기술 <br/><br/>\
# 취약점 <br/>\
- 행동 유형별 : 행동패턴, 사용기기파악 <br/>\
- 데이터 유형별 : 에너지사용 데이터, 전기차 충전 정보, 사용자 장비 보유현황 <br/>\
- 구간별 : 운영센터, 연계구간, 사용자기기 <br/><br/>\
# 대응 <br/>\
- 관리적 : 정보보호체계, 보안관제, 침해사고 대응 계획 수립 <br/>\
- 기술적 : IoT 공통 보안 <br/><br/>\
# 정책 <br/>\
- 비전 : 중소기업 참여와 민간자본투자를 통한 자생력을 갖춘 에너지 신산업 조성(2014.07.) <br/>\
- 목표 : 2017까지 2조 8백억원 시장 조성, 1만 2백개 일자리 창출 <br/>\
- 분야 : 기후변화대응 신산업 => ICT 활용 수요관리, 그린 빌리지 구축 <br/>\
- 신사업 모델 : ICT활용수요관리 전력수요관리, 에너지 통합 서비스, 전기차 서비스 및 유료충전, 그린빌리지 구축(태양광 렌탈, 독립 마이크로그리드, 온배수열 활용) <br/><br/>\
# 표준<br/>\
- IEEE 1547 : 전원 시스템과 분산형 자원의 상호접속을 위한 표준<br/>\
- IEEE P2030.7 : 마이크로 그리드 컨트롤러 사양 표준 <br/>\
- IEC 61850 : 표준 기반의 분산형 전원(DER) 시스템의 정보모델에 대해 국제 표준화 <br/><br/>\
# 현황 <br/>\
- 독립형 마이크로 그리드 : 가파도, 마라도, 가사도 실증연구, 울릉도 실증 사업 추진 <br/>\
- 계통 연계형 마이크로 그리드 : KETEP 정부지원과제로 전력 IT 10대 과제중 마이크로그리드, K-MEG 등 통하여 실증단지 수준으로 구현, 본격 시장 형성 전 <br/>\
- LS산전 : 안산을 탄소 제로 에너지자립도시, 인천시 덕적도 인근 작은섬 "지도"가 에너지 자립섬으로 구축 <br/>\
- KT : 도시내 구축 스마트 그리드 기반으로 수요반응 기반 전력거래/판매사시스템 구축, 신재생 발전원/가정용저장장치등 계통 운영과 연계한 통합 운영센터 개발중 <br/>\
- 포스코ICT : 도서,도심,산업용 마이크로 그리드 운영플랫폼 개발, 전남 신안군 수행, 일본 해외 사업 추진 <br/>\
- 현대 중공업 : SG확산사업을 통해서 조선과 석유화학공장에 EES, AMI, 에너지 관리 시스템 구축, 전력거래 인프라 개발 <br/>\
- 미국<br/>\
1) 2014년 군사용 마이크로그리드들 비롯하여 전체 마이크로그리드 1GW 상용화 추진 <br/>\
2) Beach Cities Microgrid, IIT Perfect Power, CERTS Microgrid demonstration(Santa Rita Jail)등을 포함하여 총 9개의 프로젝트를 추진 <br/>\
- EU <br/>\
1) Grid4EU(12개 EU국가의 27개사가 참여)<br/>\
2) NiceGrid : 마이크로 그리드 프로젝트, Grid4EU의 6개 스마트그리드 프로젝트 중 하나 <br/>\
3) Issy Grid : City Microgrid / 프랑스 최초 도시형 마이크로 그리드 <br/>\
- GE, ABB, Siemens 등 기업들은 마이크로 그리드용 제어 시스템을 상용화 <br/>\
- General Microgrids(미국) : "Balance Energy"라는 에너지 S/W 플랫폼, 각종 컨설팅 및 엔지니어링 서비스 제공\
',

// [산업제어스템]- SCADA
'# 정의 : 중앙 제어 시스템 원격 감시,제어 시스템 / 통신 경로상 신호 사용 <br/>\
- Supervisiory Control And Data Acquisition <br/>\
- 통신 경로상의 아날로그 또는 디지털 신호를 사용하여 원격장치의 상태정보 데이터를 RTU로 수집/수신/기록/표시하여 중앙 제어 시스템에 원격 장치를 감시 제어하는 시스템 <br/><br/>\
# 구성요소 <br/>\
- HMI(Human Machine Interface) : 사용자, 시스템간 통신 대시보드 <br/>\
- PLC(Programmable Logic Controller) : 시퀀스 제어 + 수치 연산 제어장치 <br/>\
- RTU(Remote Terminal Unit) : 공정에 설치된 센서와 직접 연결장치<br/><br/>\
# SCADA DCS 비교 <br/>\
<img src = "./img/SCADA_DCS.png", style = "max-width:100%; height:auto;"><br/><br/>\
# 기능 (지누경감)<br/>\
- 지시/표시 : PLCs가 수집한 상태정보를 수신/기록/표시 <br/>\
- 누산기능 : 정보를 용도에 맞게 계산 <br/>\
- 경보기능 : 상태변화에 따라 알람 <br/>\
- 감시/제어 : 관제대상 모니터링 하고 원격제어 <br/><br/>\
# 보안 취약점 : 정보노출, 불완전한 NW 아키텍처, 실시간 모니터링 부재 <br/><br/>\
# 보안 요구사항 : 접근제어, 기무가, 인증, 접근차단 및 탐지, 보안정책, 감사기록 <br/><br/>\
<img src = "./img/SCADA.png", style = "max-width:100%; height:auto;">\
',

// ISO 26262
'# 정의 : 차량 탑재 기능안전 규격 <br/>\
- 차량에 탑재되는 SW오류로 인한 사고를 방지 위한 기능안전규격이며 차량의 전기전자장치의 기능 안전성에 관한 요건을 정의한 표준<br/><br/>\
# 암기 : 용.기.구.시.하.소.생/운.지.A.가.반.모 <br/><br/>\
# 목차<br/>\
1. Vocabulary 용어 <br/>\
2. Management of functional saety 기능안전성 관리 : 프로젝트 관리활동, 안전성 관리계획, 조정, 추적 요건 <br/>\
3. Concept design 구상단계 : 안전목표, 매커니즘 정의, ASIL 판정 <br/>\
4. Product development : System level 제품개발, 시스템 레벨(시스템 수준 기술 요구사항, 시스템 디자인, 테스트, 검증, V모델) <br/>\
5. Product development : H/W 제품개발, HW레벨(V모델 따른 HW 요구사항)<br/>\
6. Product development : S/W 제품개발, SW레벨(SW요구) <br/>\
7. Production and operation 생산 및 운용(생산위한 계획, 요구사항) <br/>\
8. Support process 지원 프로세스(명세방법, 형상,변경관리 요구) <br/>\
9. ASIL-oriented and safety-oriented analysis ASIL 및 안전 중심의 분석(ASIL 분석방법) <br/>\
10. Guideline on ISO 26262(informative) 가이드라인 <br/>\
11. ISO 26262 반도체 적용 가이드라인(반도체 아날로그, 디지털 부품대한 적용 지침 및 고장 분석 방법 등) <br/>\
12. 모터사이클 적용(적용방법)<br/><br/>\
* Second Edition 11, 12 추가 \
',

// ISO 61508
'# 정의 : 기능안전에 대한 국제 규격 <br/><br/>\
<img src = "./img/IEC61508.png" style = "width:100%; height:auto;">\
',

// [ISO/IEC 61508]- SIL
'# 정의 : ISO/IEC 61508 안전성 보전 등급<br/>\
- Safety Integrity Level <br/>\
- Risk 정보에 따라 안전관련 시스템의 기능이 갖추어야할 사항을 규정한 등급 <br/><br/>\
# 구성 <br/>\
- High demanded rate : 안전 관련 기능 대한 사용이 계속적으로 발생시 적용 (ex: 센서) <br/>\
- Low demand rate : 사용빈도수 대략 년 회 미만시 (ex: 에어백) <br/><br/>\
<img src = "./img/SIL.png", style = "max-width:100%; height:auto;">\
',

// HILS
'# 정의 : 실시간 시뮬레이션 기술 <br/>\
- Hardware in the loop Simulation <br/>\
- 제어 대상 하드웨어(자동차, 항공기, 선박, 기계)를 가상의 모델로 구현하고 이를 제어하는 실제 제어시스템을 시험 플랫폼에 연동시켜 실시간 시뮬레이션을 하는 기술<br/>\
- 하나 또는 여러 개의 실제 컴포넌트가 실시간으로 시뮬레이션 되는 컴포넌트들과 상호작용하며 제품을 평가하는 기술<br/><br/>\
# 기반기술 <br/>\
- Control System : 제어 시스템 <br/>\
- Plant : 제어대상 <br/>\
- HIL Simulator : 제어기에 필요한 센서의 입력 생성/제어 신호처리 <br/>\
- 가상현실 <br/>\
- 시스템 통합 <br/><br/>\
# 활용 : 자동차의 경우 완성된 ECU의 기능을 검증하고, 한계를 시험해 차량의 성능과 안전을 확보 <br/><br/>\
<img src = "./img/HILS_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/HILS_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 국내의 경우, HILS 기술을 상용화하여 실적을 가진 기업이 없음\
',

// 소프트웨어 안전성 분석
'# 정의 : 안전성 만족 확인 활동 / 안전 필수 시스템 개발시 <br/>\
- 안전 필수 시스템 개발시 시스템이 만족해야 할 안전성을 만족하는지 확인하는 활동<br/><br/>\
# 안전성 분석 절차 (IEC 61508) <br/>\
<img src = "./img/SSA_Order.png", style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SSA_1.png", style = "max-width:100%; height:auto;"><br/><br/>\
# 유형 <br/>\
1. 요구분석/설계 단계 <br/>\
- FMEA(Failure Mode and Effects Analysis) : 고장 영향 정량적 분석 <br/>\
- HAZOP(Hazard and Operatbility Analysis) : 도출 된 행위 안전 영향 분석 <br/>\
- FTA(Fault Tree Analysis) : 연역적 해석 (대전제를 세우고 개별적용) <br/><br/>\
2. 개발단계 <br/>\
- White box : 구조기반<br/>\
- Black box : 명세기반<br/><br/>\
3. 요건 충족 단계 <br/>\
- 정형명세 : 수학적 표기, 가시화 도구 <br/>\
- 정형검증 : 정리 증명, 모델 체킹 <br/><br/>\
4. 산출물 검토 단계 <br/>\
- 명세서 검증 : DFD, DD, Mini-Spec <br/>\
- 디자인 검증 : 전문가 참여, 브레인 스토밍 / 라이팅 <br/><br/>\
* DFD(Data Flow Diagram) <br/><br/>\
* 119회 관리 4교시 4번\
',

// 문자 인코딩 
'# 정의 : 통신 목적 부호화 <br/>\
- 문자나 기호들의 집합을 컴퓨터에서 저장하거나 통신에 사용할 목적으로 부호화하는 방법',

// 3D Sensing
'# 정의 : 입체적 센싱 기술 <br/>\
- 객체의 심도 정보(Depth Information)를 파악할 수 있는 입체적 센싱 기술',

// 오픈뱅킹
'# 정의 : Open API + Test BED <br/>\
- 핀테크 기업이 금융 서비스를 편리하게 개발할 수 있도록 은행의 금융 서비스를 표준화된 형태로 제공하는 인프라 <br/><br/>\
# 등장 배경 : 전산표준 호환성, 은행간 협약, 핀테크 서비스 개발 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/OpenBankingComponent.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/OpenBankingSEC.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 관리 4교시 2번 <br/><br/>\
* KPC 93회 1교시 8번\
',

// ISO 19626
'# 정의 : 신뢰성 있는 통신 플랫폼 <br/>\
- TCP는 개방되고 분산된 환경에서 상거래, 전자정부, 제조, 산업, 의료, 기타 업무에서 높은 신뢰성이 필요한 통신 관련 사항을 규약',

// YOLO
'# 정의 : 딥러닝 기반 객체 탐지 기술<br/>\
- You Only Look Once\
',

// IoMT
'# 정의 : 의료사물인터넷 / 의료중심 건강관리 시스템 구현 <br/>\
- Internet of Medical Things<br/>\
- 의료사물인터넷. 개인의 생활습관, 신체검진, 의료이용정보, 질병 이력, 유전체정보 등 다양한 데이터를 통해 환자의 증상 및 치료 관리 현황을 꾸준히 모니터링해 공백이 발생하지 않도록 하는 개인중심의 건강관리시스템을 구현',

// 블록체인 
'# 정의 : Block 기반 Cahining Data Record <br/>\
- Block을 연속적으로 Chain한 다음, 지속적으로 성장하는 데이터 기록 연결 리스트 형태이며 분산 DB와 유사 <br/><br/>\
# 특징 <br/>\
- 이중지불방지를 위하여 작업증명(POW, Proof Of Work), 소유증명(POS, Proof Of Stake) 필요 <br/>\
- 위,변조 불가 <br/>\
- Ripple : 금융거래를 위한 인터넷 프로토콜 <br/>\
- Ethereum : 클라우드 컴퓨팅 플랫폼 또는 프로그래밍 언어 <br/><br/>\
# 블록체인 프로세스 <br/>\
- 하나의 거래를 기본단위로 기록 <br/>\
- 송,수신자, 내용으로 구성 + Alpha <br/><br/>\
<img src = "./img/BlockChain_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 블록체인 연결구조 <br/>\
<img src = "./img/BlockChain_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 블록체인의 종류 <br/>\
1. Public <br/>\
- 초기형 <br/>\
- 인터넷 기반으로 참여자 모두에게 공개되는 운용장부 <br/>\
- 네트워크 참여자 누구든지 공증참여 가능 <br/>\
- 현재 활용되는 기술 (비트코인) <br/><br/>\
2. Private <br/>\
- 개인형 <br/>\
- 1개의 주체가 연결된 전산망을 블록체인으로 관리 <br/>\
- 2016년 활용 예상 (주식거래) <br/><br/>\
3. Consortium <br/>\
- 반중앙형 <br/>\
- 미리 선정된 n개의 주체들을 중심으로 참여 합의된 rule과 공증방식 활용 <br/>\
- 2017년 이후 활용 예상 (금융권 거래, 자기주권 신원증명) <br/><br/>\
# 블록체인 구성요소 <br/>\
1. 작업증명 (POW, Proof Of Work) <br/>\
- 채굴 <br/>\
- 거래승인 과정에 많은 컴퓨팅 파워가 필요한 어려운 작업(반복연산 문제 풀기 등)을 포함시키고, 이 과정을 통해 가장 많은 구성원들이 가지고 있는 블록체인을 진짜로 인식해 다른 기록 은폐하기 위한 기술 <br/>\
- 51% Attack <br/>\
- 거래 검증 매커니즘 <br/>\
- 각 노드의 계산능력 중요 <br/>\
- 비트코인 기술의 핵심 <br/>\
- 악의적 변조 방지 <br/>\
- 중복지출(Double Spending) 방지 <br/><br/>\
2. 소유증명 (POS, Proof Of Stake) <br/>\
- 사용자에게 블록(코인)의 소유권 증명 <br/>\
- POW 보완 하기 위한 기술 <br/>\
- 블록의 보유량(잔액)에 따라 각 노드의 결정권 평가 <br/>\
- 이해관계 증명, 지분증명 <br/><br/>\
3. 중요도증명 (POI, Proof Of Importance) <br/>\
- 블록의 보유량(잔액)에만 의존하지 않고 경제 전반에 긍정적으로 평가되는 다른 행동들 모두 고려 <br/>\
- 소유증명과 유사 <br/>\
- 적극 참여자 보상 <br/><br/>\
4. 블록 <br/>\
- Header + Body <br/>\
- Chain 연결 <br/>\
- 헤더는 이진블록 해쉬값, 바디는 트랜잭션의 연결 <br/><br/>\
5. 암호화 <br/>\
- 블록 유효성 검증 알고리즘 (이중-SHA256 해시값) <br/>\
- 공개키 암호화 (Public Key Encryption) <br/>\
- 전혀 예측 불가능한 유사 난수 함수 (pseudo random function 설계) <br/><br/>\
6. P2P NW <br/>\
- 공인된 제3자의 공증 없이 개인간 거래 기능 <br/>\
- 공유된 거래는 다수가 공동으로 소유 <br/>\
- 불필요한 수수료 절감 <br/>\
- 보안성 유지 <br/><br/>\
# 블록체인 활용 분야 <br/>\
- 금융 : 전자화폐, 해외송금, 장외거래 <br/>\
- 산업 : 소유권 증명, IoT 플랫폼, 전자상거래 <br/>\
- 보안 : 데이터 보호, 메시지 보호, 인증서 <br/><br/>\
* 그리타\
',

// 합의알고리즘
'# 정의 : P2P에서 하나의 블록체인 유지하기 위한 기술 <br/><br/>\
# 원리 <br/>\
<img src = "./img/ConsensusAlgorithm.png" style = "max-width:100%; height:auto;"><br/>\
- 독립적 검증 : 유효 전파, 무효 폐기<br/>\
- 블록추가 : 증명된 계산법, 검증 거래<br/>\
- 블록검증 : 모든 신규블록 검사 <br/>\
- 수집 및 선택 : 누적 연산 체인 독립적 선택 <br/><br/>\
# 기본 합의 알고리즘 <br/>\
- BFT : 악의적 노드가 네트워크 장악 방지 <br/>\
- pBFT : 느린 문제점 해결 (n-1)/3 개 이하 노드 허용 <br/><br/>\
# PoW 알고리즘 <br/>\
- PoW : 목표값 이하 해시 찾는 과정 반복 통한 증명 <br/>\
- ePoW (Equilibrium) : 채굴 성공한 노드 휴식 <br/>\
- DPoW (Delayed) : 네트워크 보안 강화 <br/>\
- PoET (Elapsed Time) : Intel 개발, 전기 소모작음 <br/><br/>\
# PoS 알고리즘 <br/>\
- PoS : 지분 비례 의사결정 권한 <br/>\
- PoI(Importance) : 거래 활동량 의사결정 부여 <br/>\
- PoA(Authority) : 권위 기관 노드 검색 <br/>\
- PoS(Storage) : 하드디스크 여유공간 저장 <br/><br/>\
* 122회 2교시 2번\
',

// [블록체인]- UTXO
'# 정의 : 블록체인의 미사용 거래출력값 <br/>\
- Unspent Trasnsaction Output <br/>\
- 블록체인에 기록된 "미사용 거래 출력값"을 이용하여 거래의 유효성을 검사하여 코인의 존재여부를 확인. 비트코인과 퀀텀은 이 UTXO를 사용.',

// [블록체인]- 머클트리
'# 정의 : 블록체인 내의 각각의 블록에 존재하는 트리 <br/>\
- 머클 트리는 수많은 Tx(트랜잭션)을 각각 Hashing 하여  2개씩 짝 지어서 또 해싱하고 반복하여 최종적으로 하나가 남을 때까지 해싱을 한 트리<br/>\
- 해시트리의 일종으로 Ralphmerkle이 고안한 모든 비 리프노드의 이름이 자식들의 해시로 구성된 트리 <br/>\
블록체인 내 다수의 거래내역을 각각 해싱하고 합치는 과정을 반복하여 최종적으로 하나가 남을 때까지 해싱하 이진트리 <br/><br/>\
# 특징 : 무결성 보장, 동일값 길이, 빠른 검증(O(LogN)) <br/><br/>\
<img src = "./img/DS2_20_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DS2_20_2.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 1교시 11번\
',

// [블록체인]- 블록체인 오라클 문제 
'# 정의 : 블록체인 밖에 있는 데이터를 블록체인 안으로 가져올 때 발생하는 문제<br/>\
- 블록체인 밖의 데이터를 오프체인(Off-Chain), 그 데이터가 블록체인 안으로 들어온 것을 온체인(On-Chain).',

// [블록체인]- 타원곡선 암호화 알고리즘
'# 정의 : 암호기술 / 유한체 / 타원 곡선 성질 <br/>\
- Elliptic Curve Cryptography <br/>\
- 유한체(finite field) 상의 타원 곡선의 수학적 성질을 이용한 암호 기술 <br/><br/>\
# 타원곡선 연산 <br/>\
<img src = "./img/ECC_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 이산대수 문제 (ECDLP) 기반 암호체계 <br/>\
- 선택성 : 유한체상 다양한 타원곡선 선택 가능 <br/>\
- 설계 안전성 : 안전한 암호 시스템 설계 용이 <br/>\
- 고효율성 : 256(ECC) / 3072(RSA) <br/><br/>\
# 한계 <br/>\
- 구현 어려움 <br/>\
- 메시지 확장 2배 <br/><br/>\
# 타원곡선 암호화 <br/>\
- 방정식 :  Q = x * G <br/>\
- Q : 공개키, 개인키로부터 연산 <br/>\
- x : 개인키, p보다 작은 소수로, 난수 생성기로 생성 <br/>\
- G : 생성자, 타원곡선 상의 임의의 점 <br/><br/>\
# 적용분야 알고리즘 <br/>\
- 디지털 서명 : ECDSA <br/>\
- 키교환 : ECDH <br/>\
- 난수생성 : Dual-EC DRBG <br/>\
- 암/복호화 : EC-KEM <br/><br/>\
* 86회 라이지움 1교시 7번 \
',

// 스마트시티 블록체인
'# 활용 방안 <br/>\
1. 스마트 시티 공간정보 분야 <br/>\
- Digital Twin 스마트시티 계획 운영관리 모델 <br/>\
- FOAM (the Future of Proof Location) : 인증 관련 공개 규약 <br/>\
- CSC (Crypto-Spatial Coordinate) : 블록체인 기반의 공개 위치 표준 제시 <br/><br/>\
2. 스마트 시티 인프라 관리 <br/>\
- 부동산 분야 토지장부시스템 적용 <br/>\
- 도로, 교통, 항망, 건축물등 도시기반시설 운영 인프라 <br/><br/>\
3. 블록체인 기반 도시에너지 관리 <br/>\
- 에너지 데이터 분산 원장 기록 <br/>\
- 소비패턴 분석, 수요예측, 스마트 그리드 관리, 에너지 투자 결정, 에너지 교환등 비즈니스 모델 제공 <br/><br/>\
# 적용 사례 <br/>\
- 에스토니아 : 블록체인 이용한 범국가적 스마트시티 전략 (온라인 대선) <br/>\
- 두바이 : 도시자체 블록체인 기반의 스마트 도시화(도시 전반 행정 도입) <br/>\
- 중국 : 블록체인 스마트 정책 (공공과 민간 협력, 항저우 시범도시 구축) <br/><br/>\
# 고려사항 <br/>\
- 산업 생태계 활성화 <br/>\
- 운영,관리 주체 명확 <br/>\
- 제도 구축 정비 <br/><br/>\
* 스마트 시티 3계층 : 인프라, 데이터, 서비스 \
',
  
// Off Chain
'# 정의 : On-Chain 기능 확장 <br/>\
- 메인 블록체인 네트워크의 속도 향상 및 확장성을 확보하기 위해, 메인 블록체인 외부에서 트랜잭션을 처리 및 저장하는 별도의 체인 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/OffChain.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형 <br/>\
- Side Chain : 빠르게 수행, Main 반영 / DappCoins <br/>\
- Child Chain : 분산/병렬 처리, 하위 / Plasma <br/>\
- Lightning Network : 개별 처리, 결과만 기록 / 아마존 상품권 <br/><br/>\
* 아이리포 23회 1교시 1번\
',
  
// 블록체인 거버넌스
'# 정의 : 중앙 및 탈중화된 의사결정권 요소를 모두 포함하는 접근방식으로, 책임소재가 네트워크 내에 있고, 구성원들이 합의에 도달하도록 인센티브가 제공되는 프레임워크 <br/><br/>\
# 블록체인 거버넌스 6원칙 (탈조인성정상)<br/>\
1. 탈중앙화&의사결정 <br/>\
2. 조정 : 구성원간의 조정 지원 <br/>\
3. 인센티브&바람직한 행동 : 연계 <br/>\
4. 성과&확장성 : 성과 보장, 미래 요구사항 충족 <br/>\
5. 정보보호&요구사항 : 외부 요구사항 충족 <br/>\
6. 상호운용성 : 블록체인, 비블록체인 <br/><br/>\
* KPC 93회 1교시 7번\
',

// 블록체인 플랫폼 보안
'<img src = "./img/BlockchainSEC.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/BlockChainThreaten.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/BlockChainAction.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 2교시 6번\
* 116회 관리 3교시 3번\
',
  
// MaaS
'# 정의 : Mobility Open API 기반 서비스 연계 플랫폼 <br/>\
- Mobility as a Service <br/>\
- 복잡한 도시의 교통난, 주차난을 극복하기 위해 잔여 자동차를 활용하여 고객수요 예측, 분석을 통해 맞춤형 서비스를 연계하는 통합 서비스<br/>\
Mobility를 기반으로 오픈 API기반으로 다양한 서비스를 연계 및 제공하는 플랫폼 서비스',

// BERT
'# 정의 : 언어표현 사전 훈련 방법 / 2018년 구글 <br/>\
- Bidirectional Encoder Representations from Transformers <br/>\
- 2018년 구글에서 공개한 Language Representation Model로 언어 표현을 사전 훈련하는 방법<br/>\
큰 텍스트 모음(BooksCorpus 및 Wikipedia)에서 범용 "언어 이해"모델을 학습한 다음 해당 모델을 다운 스트림 NLP 작업(미세 조정)에 사용하는 모델',
  
// 자율주행자동차
'# 정의 : 최첨단 자동차 / 상황인식 / 정보파악 / 기계제어 / 스스로 주행 <br/>\
- 센서를 통한 상황인식, 전자제어장치 등에서 그 상황에 대한 정보를 파악,판단 기계장치들을 제어,스스로 주어진 목적지까지 주행하는 기능을 가진 최첨단 자동차 <br/><br/>\
# 기술요소 <br/>\
1. 상황인지 <br/>\
- 내외부상황인지 : Ultrasonic Wave, 스마트 카메라, 레이더, 라이다 <br/>\
- 내부 정보교환 통신 : CAN, Flexlay, LIN, MOST <br/>\
- 외부정보교환 통신 : Wifi, LTE, DSRC, WAVE(5.9Ghz, IEEE1609) <br/><br/>\
2. 상황판단 측면의 자율주행 핵심기술 <br/>\
- 수집정보해석, 상황판단 : ECU, DSP, MCU, AI <br/>\
- 정밀위치기반 경로생성 : HD Map, MMS, GPS<br/><br/>\
3. 차량제어 <br/>\
- 관리 및 제어 : OS, FS, DB <br/>\
- 차량제어/제동/조향 : ABS, ESC, MDPS, Actuator <br/><br/>\
* LIN(Local Interconnect Network) : 차량용 LAN Protocol <br/>\
* MOST(Media Oriented Systems Transort) : 자동차 산업 최적화 고속 멀티미디어 네트워크 기술 <br/>\
* DSRC(Dedicated Short Range Communication) : 차량 노변기지국간 통신, 근거리 전송 고속 패킷통신 <br/>\
* ECU : Engine Control Unit <br/>\
* DSP : Digital Signal Processor <br/>\
* MCU : Micro Control Unit <br/>\
* MMS : Mobile Mapping System <br/>\
* ESC(Electronic Stability Control) : 차체 자세제어 장치 <br/>\
* MDPS(Motor Driven Power Steering) : 조향장치 <br/>\
* ISO26262, AutoSAR <br/>\
* HAP : Highway Auto Pilot <br/>\
* PAPS : Patraly Automated Parking System <br/>\
* ALC : Automatic Lane Change <br/>\
* 아폴로 플랫폼 <br/>\
* 스마트더스트 c-its 연계 가능 <br/>\
<img src = "./img/자율주행자동차_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/자율주행자동차_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 응용 3교시 6번\
',

// [자율주행자동차]- 트롤리 딜레마 
'# 정의 : 윤리학의 사고실험 / 필리파 푸트 제시 / 주디스 톰슨 분석 <br/>\
- 필리파 푸트(Philippa Foot)가 제시하고 주디스 톰슨(Judith Thormson)이 체계적으로 분석한 윤리학의 사고실험  <br/><br/>\
# 암기 <br/>\
- 문제점 해결 : 사회적 합의, 법/제도 /정책 수립 <br/><br/>\
# 이슈 : 운전자를 보호할 것인가, 보행자를 보호할 것인가, 다수를 보호할 것인가, 소수를 보호할 것인가 <br/><br/>\
# Jean-Francois Bonnefon 연구팀의 Amazon 직원 대상 실험 결과 <br/>\
- 여러 사람을 살릴 수 있도록 설계되어야 한다는 공리주의적인 응답이 지지를 받음 <br/>\
- 그러나, 자기 자신과 가족들은 그 차에 타지 않겠다는 모순적 의견이 함께 나타남 (자기자신이 죽을 수 있기 때문에) <br/><br/>\
<img src = "./img/트롤리딜레마_1.png" style = "max-width:100%; height:auto;">\
',

// [자율주행자동차]- 모랄 머신 
'# 정의 : MIT 윤리적 딜레마 실험 <br/>\
- MIT에서 인간의 윤리적인 딜레마를 실험한 것으로, 자율주행차에 인간적이고 도덕적인 지식을 부여하는 효과적인 방법을 찾아내는 실험방법(알고리즘) <br/>\
<img src = "./img/MoralMachine.PNG" style = "max-width:100%; height:auto;">\
',

// [자율주행자동차]- 군집주행
'# 정의 : V2X 통신 기반 그룹 주행 <br/>\
- 차량간 통신과 차량과 인프라간 통신 환경을 기반으로 주행하는 차량간에 그룹 형성, 그룹 주행, 그리고 그룹 이탈 과정을 포함하는 서비스 (TTA)\
',

// [자율주행자동차]- LDM
'# 정의 : 동적 공간 데이터 저장소 <br/>\
- Local Dynamic Map <br/>\
- 정보수집의 대상 범위내에 있는 고정 물체 또는 이동 물체에 관한 정적, 일시적, 동적 정보를 모두 관리할 수 있는 동적 공간 데이터 저장소 <br/><br/>\
# 등장배경 <br/>\
- ITS -> C-ITS <br/>\
- 차량-도로 자동화 패러다임 변화 <br/><br/>\
<img src = "./img/LDM_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/LDM_2.PNG" style = "max-width:100%; height:auto;">\
',
  
// C-ITS
'# 정의 : 끊김 없는 양방향 통신으로 교통정보를 교환하는 ITS <br/>\
- 안정성, 이동성, 지속가능성 (친환경,효율성)을 목표로 차량과 차량, 차량과 인프라간 양방향 통신으로 교통 정보를 교환 및 공유하여 오픈 플랫폼 기반에서 서비스를 제공하는 차세대 ITS <br/><br/>\
# 구성도 <br/>\
<img src = "./img/CITS.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- V2C(Center) : 교통정보 센터 <br/>\
- V2R(Roadside) = V2I : 하이패스, 텔레메틱스 <br/>\
- V2V(Vehicle) : 주변 차량 정보<br/>\
- V2P(Personal Device) = V2N(Nomadic Device) : 휴대 단말, 차량 진단 및 제어 서비스 <br/>\
- V2G(Grid) : 전기자동차 충천관련 통신범주 <br/>\
- IVN(In-Vehicle Network) : 차량 내부의 차량 게이트웨이 통한 외부와 통신 <br/>\
- DSRC(Dedicated Short-range Radio Communication) : 차량간 메시지 안전 전송 <br/>\
- WAVE(IEEE 802.11.p) : 차량간 고속통신 지원 \
',

// Dark Net
'# 정의 : 폐쇄형 사설 분산 P2P 네트워크 <br/>\
- 서로 신뢰하는 피어들 간 파일 공유를 위한 폐쇄형 사설 분산 P2P 네트워크 <br/><br/>\
# 기술요소 <br/>\
- OR : Tor 등 암호화된 브라우저로만 접속 가능 <br/>\
- OP : 익명성, 폐쇄성 등의 특징을 이용하여 범죄에 활용 <br/>\
- Circuit : 각각의 TCP Stream에 대한 한 번의 완전한 경로 <br/>\
- Cell : TOR를 통과하는 고정된 크기의 패킷, 512Byte로 고정 <br/>\
- 디렉토리 서버 : 각 노드 및 경로에 대한 정보 <br/><br/>\
# 유형 <br/>\
- Peer to Peer : Peer간 1:1 NW구축, F2F(Friend to Friend)<br/>\
-> 사례 : Freenet, OneSwarm, RetroShare, GNUnet <br/>\
- Privacy Network : Overlay NW 형태로 별도 은닉 서비스망 구축 ,TOR<br/>\
-> 사례 : I2P, Decentralized NW 42, TOR <br/><br/>\
# 비교 <br/>\
<img src = "./img/WebCompare.png" style = "max-width:100%; height:auto;">\
',

// RPA 
'# 정의 : 사무 업무 자동화 기술 <br/>\
- Robotic Process Automation<br/>\
- 반복적인 사무 업무를 프로세스 마이닝으로 추출하여 이를 자동화 하는 기술 <br/><br/>\
# RPA 흐름도 <br/>\
<img src = "./img/RPA_Flow.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요기술 설명 <br/>\
- 인식기술 : 이미지 인식, OCR(광학문자 판독기술) <br/>\
- 분석기술 : WorkFlow, 백필(데이터 지속적재) <br/>\
- 활용기술 : 라이브러리(단일 프로세스 경량화) <br/><br/>\
# RPA 적용 사례 <br/>\
- 제조 : 검사 업무 (물건 검증/검사) <br/>\
- 금융 : 언더라이팅 (상품 보류/구분 업무) <br/><br/>\
* KPC 93회 1교시 5번\
',

// Process Mining
'# 정의 : 업무 프로세스 로그기반 정보분석 <br/>\
- 업무 프로세스 수행을 기록한 로그데이터로부터 업무 수행에 관한 다양한 정보를 분석하는 것 <br/><br/>\
# 기술분야 <br/>\
- 프로세스 도출 : Event Log 기반 프로세스 모델 생성 <br/>\
- 적합도 검사 : 기본 모델과 비교/분석, 의도 확인 <br/>\
- 향상 : 프로세스 모델 확장/개선 분석 <br/><br/>\
# 프로세스 마이닝 기술요소 <br/>\
1. 도출 식별 관점 <br/>\
- 알파마이닝 : 인과관계 재구성, 이벤트 시퀀스 분석 <br/>\
- 휴리스틱마이닝 : 휴리스틱 기반 사례 연구 <br/>\
- 퍼지마이닝 : 복잡 -> 간단 가시화 <br/><br/>\
2. 조직 관점 <br/>\
- 소셜 네트워크 마이닝 : 수행자 / 리소스 관계 <br/>\
- 조직 마이닝 : 팀 관계 <br/>\
- 스탭 어사인먼트 마이닝 : 작업 할당 패턴 추출 <br/><br/>\
3. 업무성과 관점 <br/>\
- 페트리넷 기반 퍼포먼스 : 수행시간, 병목점 도출 <br/>\
- 시퀀스 패턴 : 업무 수행 패턴 분석 <br/>\
- 도티드 차트 분석 : 이벤트 로그 패턴 파악 <br/><br/>\
* KPC 95회 4교시 4번\
',

// 스마트 플랜트 
'# 정의 : 공장 + ICT 기술 <br/><br/>\
# 스마트 플랜트 정부 계획 현황 <br/>\
- ICT/SW : 빅데이터,인공지능 (초고속,대용량) / 콘텐츠(가상,혼합기술,지능형컨텐츠) <br/>\
- 건설/교통 : 사회기반시설(국가 인프라 예방 유지관리) <br/>\
- 기계/제조 : 플랜트(친환경 스마트 기반 기술) <br/>\
- 재난 안전 : 재난안전(복합재난 스마트 예측 대응기술) <br/>\
',

// 클라우드 컴퓨팅
'# 정의 : 중앙 IT 서비스 컴퓨팅 환경 <br/>\
- 인터넷상의 서버를 통하여 데이터 저장, 네트워크, 컨텐츠 사용 등 IT 관련 서비스를 한번에 사용할 수 있는 컴퓨팅 환경 <br/><br/>\
# 구성 <br/>\
- User Interaction Interface <br/>\
- Service Catalog <br/>\
- System Mgt <br/>\
- Provisioning Tool <br/>\
- Monitoring <br/>\
- SLA \
',
  
// 클라우드 전환
'<img src = "./img/CloudTrans_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/CloudTrans_2.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/CloudTrans_3.png" style = "max-width:100%; height:auto;">\
',

// IaaS, PaaS, SaaS
'# 개념도 (adr mov ssn)<br/>\
<img src = "./img/CloudType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# IaaS <br/>\
- 물리자원 가상화 : Infra 가상화 <br/>\
- 높은 확장성 : 서비스 통한 리소스 확보 <br/>\
- 비용 효율화 : 고정비용 제로 <br/><br/>\
# PaaS <br/>\
- 유지관리 용이성 <br/>\
- 개발 및 배포 효용성 : 필요 플랫폼만 사용하여 개발 및 배포 프로세스의 빠른 확보 <br/>\
- 다중 엑세스 <br/><br/>\
# SaaS <br/>\
- 물리자원 최소화 <br/>\
- Time to market : 소프트웨어의 즉시 사용 가능 <br/>\
- 유지보수 간소화 : 클라우드 제공업체를 통한 기술적 문제 지원 <br/><br/>\
* 122회 4교시 1번\
',
  
// PaaS-TA
'# 정의 : 한국정보화 진흥원이 개발한 전자정부 표준 프레임워크 기반, 오픈소스 기반 개방형 클라우드 플랫폼 <br/><br/>\
# 특징 : 오픈소스 기반, 아파치 라이선스 2.0 기반, Kubernetes, Cloud Foundry <br/><br/>\
# 변천사 <br/>\
<img src = "./img/PaaSTA.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 1교시 1번\
',

// 클라우드 환경 보안이슈
'# 가트너에서 제시한 클라우드 환경의 보안이슈 (특규입격복사장)<br/>\
- 특별 사용자 접근 관리 : 특권, 일반 사용자 분리 <br/>\
- 규정 준수성 : 외부 평가 및 감사, 점검 체계 <br/>\
- 데이터의 입지 : 위치, 환경, 법적 이슈등 <br/>\
- 데이터의 격리 : 암호화, 격리 <br/>\
- 복구 계획 : 문제 복구와 관련된 제반 활동 <br/>\
- 조사 가능성 : 보안사고 및 문제 조사 능력 <br/>\
- 장기적 경쟁력 : 안전성, 확장성, 대체 가능성\
',
  
// [클라우드 컴퓨팅]- 클라우드 컴퓨팅 정책 <br/>\
'# 정의 : 국내 클라우드 산업경쟁력 향상을 위한 추진전략 및 과제 <br/><br/>\
# 암기 : 2021활(30%) 육(18-250) 시(4.6조)-공민생 <br/><br/>\
# 비전 : 2021 클라우드 선도국가 도약<br/><br/>\
# 목표 <br/>\
- 클라우드 이용 활성화 : 18년 이용률 30% 이상 <br/>\
- 클라우드 기업 육성 : 14년 250개 -> 18년 800개 <br/>\
- 클라우드 시장 4.6조원(3년 누적) 형성 <br/><br/>\
# 추진전략/세부 추진과제 <br/>\
- 공공부문의 선제적 클라우드 도입 : 공공부문 민간 클라우드 이용 활성화, G-Cloud 전환 가속화 <br/>\
- 민간부문의 클라우드 이용 확산 : 안전한 클라우드 이용 환경 마련, 클라우드 친화적 제도 개선, 중소기업 및 산업 혁신 지원 <br/>\
- 클라우드 산업 성장 생태계 구축 : 클라우드 기술 경쟁력 강화, 해외진출 촉진, 전문인력 양성, CDC 경쟁력 강화 <br/><br/>\
# 추진체계 <br/>\
- 정보통신 전략 위원회를 컨트롤 타워로 활용 <br/>\
- 클라우드 전담기관 (NIPA, NIA, KISA) AaaS(Agent As a Service) 방식 운영\
',

// [클라우드 컴퓨팅]- 정보자원등급 평가기준(2014.04.)
'# 근거 : 2014.04.08. 전자정부 대민서비스 정보보호 중요도 산정기준 <br/><br/>\
# 암기 <br/>\
- 평가항목 : 서데연대파 <br/>\
- 항목별 상,중,하 <br/><br/>\
# 정보자원 중요도 <br/>\
- 1등급 : 평균값 > 2.4 <br/>\
- 2등급 : 평균값 > 1.6 <br/>\
- 3등급 : 평균값 < 1.6 <br/><br/>\
# 평가항목 : 서데연대파 / 항목별 상,중,하 <br/>\
- 서비스<br/>\
- 데이터 <br/>\
- 연계 : 개인, 민감, 고유식별 정보/장기 보관 <br/>\
- 업무 대체 수준 : (업무대체율 + 업무대체비용)/2 <br/>\
- 사고시 파급효과 : 국가/사회적 피해/혼란, 신뢰도 영향, 즉시 복구\
',

// [클라우드 컴퓨팅]- 클라우드 컴퓨팅 서비스 보안인증제도
'# 정의 : 클라우드 안전 이용 지원 제도 <br/>\
- 클라우드 서비스 제공자가 제공하는 서비스에 대해 클라우드 컴퓨팅 발전 및 이용자 보호에 관한 <font color="red">법률 제23조 2항</font>에 따라 정보보호 기준의 준수여부 확인을 인증기관에 요청하는 경우 인증기관이 평가, 인증하여 이용자들이 안심하고 클라우드 서비스를 이용하도록 지원하는 제도 <br/><br/>\
# 근거 <br/>\
- 클라우드 컴퓨팅 발전 및 이용자 보호에 관한 법률 제23조 2항 <br/>\
- 클라우드 컴퓨팅 서비스 정보보호에 관한 기준 미래부 고시 제7조 (2016-41호) <br/><br/>\
# 인증대상 : <font color="red">클라우드 컴퓨팅법 제20조</font>에 따라 공공기관의 업무를 위해 클라우드 컴퓨팅 서비스를 제공하는 사업자 <br/><br/>\
# 인증평가 종류 <br/>\
<img src = "./img/PublicCloudType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 조직 <br/>\
<img src = "./img/CloudSecGroup.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 인증 기준 <br/>\
<img src = "./img/CloudSecStandard.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 인증 절차 <br/>\
<img src = "./img/CloudSecFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 관리 3교시 6번\
',

// [클라우드 컴퓨팅]- Grid Computing 
'# 정의 : 초고속 네트워크 연동 단일 시스템 / 분산 고성능 컴퓨팅 자원<br/>\
- 지역적 분산 고성능 컴퓨팅 자원 초고속 네트워크 연동 단일 시스템 <br/><br/>\
# 암기<br/>\
- 구성요소(5) : FCRCA <br/>\
- 미들웨어기능(5) : 이상전보요 <br/><br/>\
# 4A : Advanced NW / Computer&Equipment / Application / Human Resource <br/><br/>\
# 유형 <br/>\
1. 계산 Grid : 분산 슈퍼 컴퓨팅, High-throughput 컴퓨팅 <br/>\
2. 데이터 Grid : 대량 데이터 효율공유 <br/>\
3. 액세스 Grid : On-Demand, 협업환경, 멀티미디어 <br/><br/>\
# 구성요소 5계층 : Fbric, Connectivity, Resource, Collective, Application <br/><br/>\
# 미들웨어 기능 : 자원의 이질성, 자원 상태의 변화, 데이터 전송, 보안문제, 다양한 요구사항\
',

// [클라우드 컴퓨팅]- Utility Computing
'# 정의 : 요금 지불 방식 컴퓨팅<br/>\
- 컴퓨터의 하드웨어나 소프트웨어를 사용한 만큼 요금을 지불하는 방식의 컴퓨팅 <br/><br/>\
# 특징(3) : ROI, 민첩성, 유연성 <br/><br/>\
# 구성(3) : 서비스 관리, 서비스 자원관리, 서비스 자원 <br/><br/>\
# 기술요소(4) : 클러스터, 가상화, 분할, 프로비저닝, 자율컴퓨팅, 그리드/클라우드 컴퓨팅\
',

// [클라우드 컴퓨팅]- Fog Computing 
'# 정의 : 노드 기지국 추가 클라우드 컴퓨팅 <br/>\
- 기기에서 생성된 데이터 실시간 처리가능 노드를 기지국처럼 두고 컴퓨팅 파워 필요 데이터만 클라우드로 처리하는 시스코의 사물인터넷 구현방법 <br/><br/>\
# Keyword : IEEE 1394, Location Awareness, Low Latency, Heterogeneity SUpport <br/><br/>\
# 구성도 <br/>\
<img src = "./img/FogComputing.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Device Layer : IoT Device, 센서/액츄에이터, Wearable <br/>\
- Fog Layer : 스위치, 라우터 <br/>\
- Data Center : Storage, Bigdata 플랫폼 <br/><br/>\
# 기술요소 <br/>\
- Device : 센싱-로컬데이터 수집, 저전력 IoT 보안기술, LWPAN <br/>\
- Fog : 데이터 분석 및 필터링, 보안-IDS,IPS,SDx <br/>\
- DataCenter : Cloud, Bigdata 분석-인프라:Hadoop, 분석:마이닝\
',

// [클라우드 컴퓨팅]- CSB
'# 정의 : 클라우드 서비스 중개 비즈니스 모델 <br/>\
- Cloud Service Brokerage <br/>\
- 클라우드 서비스 제공자와 사용자를 연결하여 서비스의 중개, 결합, 통합, 최적화 등의 다양한 서비스를 제공하여 수익을 올리는 비즈니스 모델 <br/><br/>\
# 암기<br/>\
- 종류 : 중결차최통 <br/><br/>\
# 종류 <br/>\
- 중개 브로커 : 기능개선, 부가서비스(AT&T, 버라이어존) <br/>\
- 결합 브로커 : 멀티서비스 통합, 서비스통일성 부여(Bitnami, CloudBees)<br/>\
- 서비스 차익 거래 : 결합서비스 유연, 유니컨버전스 (다우기술) <br/>\
- 최적화 브로커 : 사용자 편의 극대화(DropBox, Docsware) <br/>\
- 통합 브로커 : 기존서비스 통합(RightScale)\
',

// [클라우드 컴퓨팅]- 인터클라우드 
'# 정의 : 클라우드간 상호 연계 하이브리드<br/>\
- 서로 독립된 클라우드와 클라우드간 상호 연계성을 강화하는 하이브리드 기술 <br/>\
- 복수의 클라우드 서비스 제공자 간의 클라우드 서비스 또는 자원을 연결,연계하여 사용자의 요구에 따른 클라우드 서비스의 연동 및 컴퓨팅 자원의 동적 할당 <br/><br/>\
# 암기 <br/>\
- 구성 : I인F확 <br/>\
- 유형 : 피페인 <br/><br/>\
# 구성요소 <br/>\
- ICT 코아 서비스 : Switching, Routing/VM to VM&App to App <br/>\
- ICF 코아 인프라 : Private cloud - ICFD, PNSC, Secure Communi <br/>\
- Fundamental Service Funtion : WM Poratblility, Automation and APIs Management and Visiblity <br/>\
- ICF 확장서비스 <br/><br/>\
# 서비스 유형 <br/>\
- Peering : 대등 접속, 두 클라우드 서비스 제공자간 직접 연계 <br/>\
- Federation : 연합, 클라우드 서비스 제공자간 자원 공유를 기본으로 사용 요구량에 따라 동적 자원 할당을 지원하여 논리적인 하나의 서비스를 제공 <br/>\
- Intermediary : 중개, 복수의 클라우드 서비스 제공자 간의 직접적인 자연 연계 및 서비스 제공자를 통한 중개 서비스 제공 <br/><br/>\
# 에코 시스템 : 클라우드 빌더, 클라우드 프로바이더, 클라우드 리셀러, 어플리케이션 개발자 <br/><br/>\
# 사례 : 시스코 - Cisco InterCloud Fabric <br/><br/>\
* ICFD : Intercloud Fabric Director <br/>\
* PNSC : Private and Public Services\
',

// Kafka
'# 정의 : 데이터 스트림 실시간 관리 오픈소스 시스템 (링크드인)<br/>\
- 웹사이트, 애플리케이션, 센서 등에서 취합한 데이터 스트림을 실시간으로 관리하기 위한 오픈소스 시스템 <br/><br/>\
<img src = "./img/Kafka.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 확장성 : Scale-out 가능 <br/>\
- 영속성 : 수신한 데이터 디스크 유지 <br/>\
- 유연성 : 시스템 연결 허브역할 <br/>\
- 신뢰성 : 메시지 전달 보증 <br/><br/>\
# 구성요소 <br/>\
- Broker : Producer, Consumer간 메시지 관리 <br/>\
- Message : 데이터 최소 단위 <br/>\
- Producer : 메시지 생성 프로세스 <br/>\
- Consumer : 메시지 사용 프로세스 <br/>\
- Topic : Publish된 메시지 카테고리 <br/><br/>\
# 활용 <br/>\
- Kafka Connect : 데이터 허브 <br/>\
- Kafka Streams : 로그 수집 <br/>\
- Event Sourcing : CQRS <br/>\
-> CQRS (Command and Query Responsibility Segregation) : 명령과 조회의 책임 분리 <br/><br/>\
* KPC 95회 1교시 15번\
',

// 멀티 클라우드
'# 정의 : 연계, 상호 운용성, 탄력성 보장 클라우드 기술 <br/>\
- 2개 이상의 CSP(Cloud Service Provider)가 제공하는 Public or Private 구성된 클라우드 운영 방식 <br/><br/>\
# 특징 <br/>\
- 고가용성 : SPOF 방지 <br/>\
- 유연성 : 선택 옵션 <br/>\
- 비용 효율성 : 가격경쟁, 종속성 탈피 <br/>\
- Fail Over : 데이터, 워크플로우, 시스템 백업 가능 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/MultiCloud.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Public Cloud : 다양한 클라우드 환경에서 변화하는 가상 장치가 조직과 연결 <br/>\
- Private Cloud : 서비스 오케스트레이션과 함께 작동하는 분석, SDN 및 운영 관리 <br/>\
- End to End Connectivity : 안전한 이더넷 코어 스위치 및 무선 액세스 <br/>\
- Data Center : Leaf, Spine, Core 및 DCI 라우팅, 스위칭, 보안 및 관리를 기반으로 구축 <br/>\
- Campus and branch : sd-wan 라우팅, sd-branch 보안으로 액세스 <br/><br/>\
* KPC 93회 2교시 2번\
',
  
// 차세대 방향성
'1. MSA <br/>\
- API Gateway : Rest API, 라우팅, 로드밸런스, 추상화 <br/>\
- API Servers : 상호 독립적 배포/관리 <br/>\
- Database : RDB, NoSQL, NewSQL, 데이터 지속성 계층 <br/><br/>\
2. DevOps <br/>\
- 통합적 품질 보증 : 코드 인스펙션, 테스트 자동화 <br/>\
- 개발 프로세스 : 지속적 향상 프로세스 <br/>\
- 전영역 도구 사용 : 운영 관리 위한 Tool 사용 <br/><br/>\
3. CI/CD <br/>\
- 지속적 통합 : 소스코드 지속적 통합, 빌드, 테스트 <br/>\
- 지속적 서비스 : 모든 단계 코드 릴리즈 자동화 <br/>\
- 지속적 배포 : 프로덕션 릴리즈 작업 자동화 <br/><br/>\
4. Cotnainer <br/>\
- Cgroup(Control Group) : 컨테이너 자원 할당/제어, 우선순위 제어 <br/>\
- Namespace : 독립 공간 <br/>\
- SELinux : 접근제어 보안 기술 <br/><br/>\
* KPC 3교시 5번\
',
  
// 오픈 스택
'# 정의 : IaaS 형태의 클라우드 컴퓨팅 오픈소스 프로젝트 <br/>\
- 퍼블릭 및 프라이빗 클라우드 컴퓨팅 플랫폼을 구축하는데 필요한 모든 소프트웨어 블록을 개발하는 오픈소스 프로젝트 <br/>\
<img src = "./img/OpenStack.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 목적 <br/>\
- 쉬운 이전 목표 <br/>\
- 클라우드 산업 표준 수립 <br/>\
- 신규 기술 적용, 클라우드 발전 <br/><br/>\
# 오픈스택 주요 프로젝트 <br/>\
1. 서버 <br/>\
- Nova : 하이퍼바이저 API <br/>\
- Glance : 가상머신 이미지 관리 <br/><br/>\
2. 스토리지 <br/>\
- Cinder : 사용자 데이터 저장 <br/>\
- Swift : 대용량 오브젝트 스토리지 <br/><br/>\
3. 사용자 <br/>\
- Horizon : 인터페이스 제공 <br/>\
- Keystone : 중앙 집중식 인증<br/><br/>\
4. 관리 <br/>\
- Ceilometer : 미터링, 모니터링 <br/>\
- Heat : Orchestration\
',
  
// Swift
'# 정의 : 분산형 Object 스토리지 서비스를 위한 오픈소스 프로젝트 <br/>\
- Swift-Proxy, account, container, object로 구성되며 REST기반 API와 Ring 호출구조로 데이터를 제어하는 Open Stack 오브젝트 스토리지 Core 프로젝트 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/Swift.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 요청처리 <br/>\
- Swift-Proxy : 서버에 처리를 분산 <br/>\
- Ring : 데이터의 논리위치와 물리위치간 매핑 제공 <br/>\
- Swift-API : REST API, Keystone Auth를 사용해 Token 취득 <br/><br/>\
2. 데이터 관리 <br/>\
- Account : 계정 컨테이너 관리 데몬 구성 <br/>\
- Container : 사용자 계정의 컨테이너 관리 데몬 구성 <br/>\
- Object : 실제 데이터 저장 \
',
  
// 엣지 컴퓨팅 
'# 정의 : 네트워크 종단 컴퓨팅 모델 <br/>\
- 클라우드나 중앙이 아닌 네트워크 종단(Edge)에서 컴퓨팅이 이루어지는 모델 <br/>\
- 데이터가 생성되는 종단 기기 자체, 근처 기지국, 네트우크 장비에서 데이터가 처리 됨 <br/><br/>\
# 필요성 <br/>\
- 신속성 : 저지연 <br/>\
- 데이터 분산 : 부하 집중 방지 <br/>\
- 개인정보보호 : 선별적 중앙 전달 <br/>\
- 모바일 환경 : 기지국 직접 처리 <br/><br/>\
# 컴퓨터 모델 변천사 <br/>\
- 메인프레임(IBM) <br/>\
- CS (HPE, DELL) <br/>\
- Cloud (AWS, Google) : 중앙 집중형 <br/>\
- Mobile : 스마트폰, IoT, Latency최소화 <br/><br/>\
# 시장동향 <br/>\
- Google Cloud IoT : TPU(Tensor Processing Unit)이용 연산 <br/>\
- AWS Iot Greengrass : 농업,산업 / Linux, ARM/x86 호스팅 가능 <br/>\
- MS Azure Iot Edge <br/>\
1) Module : 개발자 고유 코드 실행 컨테이너 <br/>\
2) Runtime : IoT Edge Device 실행, 배포된 모듈 관리 <br/>\
- KT MEC <br/>\
<img src = "./img/MEC_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
- GE Predix Edge <br/>\
1) DCS(Device Certificate Service) : 디바이스 인증 담당 <br/>\
2) UAA(User Account and Authorization) : 멀티 터넌트 ID 관리 서비스 <br/><br/>\
* 라이지움 86회 3교시 1번 \
',

// 레그테크
'# 정의 : 내부통제, 법규준수 용이 정보기술 <br/>\
- 규제를 뜻하는 Regulation과 기술을 뜻하는 Technology의 합성어로 금융회사로 하여금 내부 통제와 법규 준수를 용이하게 하는 정보기술 <br/><br/>\
# Keyword : 규제준수/감시, 빅데이터, 인공지능, 머신러닝, 데이터마이닝, 로보틱스, 바이오인증, 블록체인, 클라우드커퓨팅 <br/><br/>\
# 목적 <br/>\
- AS-IS : 핀테크 편의성 및 보안성 개선 <br/>\
- TO-BE : 금융회사의 업무처리 비용 절감 및 업무 효율성 개선 <br/><br/>\
# 기술 <br/>\
- 수집/저장 : Agent, 빅데이터 <br/>\
- 분석<br/>\
1) 데이터 마이닝 : 비정형 D분석, 의심거래 분석, 내부 통제 <br/>\
2) 머신러닝 : 예측, 실시간 거래감시<br/>\
- 활용 : 시각적 분석 <br/>\
- 보안/Infra : 바이오 인증, 블록체인, 클라우드, 로보틱스(IT 프로세스 제어 자동화) <br/><br/>\
# 활용분야 <br/>\
- 데이터 관리 : 실시간 프로세싱, 클라우드 컴퓨팅<br/>\
- 위험 분석 및 예측 : 머신러닝, 로보틱스<br/>\
- 실시간 거래 감시 : FDS<br/>\
- 고객 신원 관리 : 바이오 인증, 블록체인<br/>\
- 내부 통제 : 데이터마이닝, 시각적 분석<br/>\
- 컴플라이언스 <br/><br/>\
# 향후 과제 <br/>\
- 금융규제 준수를 위한 RegTech 개발 <br/>\
- 금융당국 등 이해관계자 협업 필요 <br/>\
- 표준화 개발 필요 <br/>\
- 법규 준수 여부 검토 필요 <br/><br/>\
<img src = "./img/RegTech.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 국내외 동향 <br/>\
1. 해외 <br/>\
<img src = "./img/RegTechOversea.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 국내 <br/>\
<img src = "./img/RegTechLocal.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 관리 3교시 2번\
',
  
// 섭테크
'# 정의 : 금융감독 업무전환 <br/>\
- 감독(Supervisor)과 기술(Technology)의 합성어로 금융감독 업무에 첨단기술을 도입하여 효율적으로 감독과 검사를 수행하기 위한 기술 <br/>\
- 금융감독기관의 데이터 접근성 향상, 추출 정보의 총합 관리에 응용 <br/><br/>\
# 주요기술 <br/>\
<img src = "./img/SubTech.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 적용사례 <br/>\
- AI 약관 심사 <br/>\
- 전자금융사기방지시스템 : 보이스피싱 경고 <br/>\
- 금융감독 챗봇 : AI가 금융회사 및 소비자 질의에 답변제공 <br/><br/>\
# 레그테크, 섭테크 비교 <br/>\
<img src = "./img/RegTechSubTech.png" style = "max-width:100%; height:auto;">\
',

// [HPC]- Singularity
'# 정의 : HPC / 독립형 컨테이너 플랫폼 기술 / 대규모 클러스터 환경 <br/>\
- HPC, 대규모 클러스터 환경에 특화된 독립형 컨테이너 플랫폼 기술 <br/><br/>\
# 특징 <br/>\
- 독립성 : 컨테이너 관리하는 데몬에 종속되지 않음. Single-file Based 컨테이너 <br/>\
- 보안성 : 애플리케이션 실행시 루트 권한이 필요 없음 <br/>\
- 고성능 : GPU, NIC 같은 하드웨어 자원에 직접 접근이 가능하며, HPC 딥 러닝에 적합함 <br/><br/>\
# 구성요소 <br/>\
- Singularity Executable File : 컨테이너 생성 <br/>\
- SIF(Singularity Image Format) : 실제 응용프로그램이 설치되는 가상화 이미지 파일 <br/><br/>\
# Singularity, Docker, Kubernetes 비교 <br/>\
<img src = "./img/Singularity.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 1교시 9번\
',

// 2020 하반기 경제정책 방향
'<img src = "./img/KNewDeal.PNG" style = "max-width:100%; height:auto;">\
',
  
// Data Lake
'# 정의 : 원천 형태 데이터 저장소 / 다양한 목적 활용 / 내,외부 수집 데이터 <br/>\
- 다양한 원천 출처들로부터 다양한 목적으로 활용하기 위해 수집된 원천형태의 데이터 저장소이며 조직 내/외부 수집 데이터의 저장소 <br/>\
- 정형,반정형,비정형의 다양한 원형(Raw)데이터들을 실시간으로 수집,전처리,변환,저장,제공하는 통합 데이터 저장소 <br/><br/>\
# 부각 배경 <br/>\
<img src = "./img/DataLake_0.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 동향 변화 <br/>\
<img src = "./img/DataLake_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# Data Lake 구성요소 <br/>\
<img src = "./img/DataLake_2.png" style = "max-width:100%; height:auto;"><br/>\
- 자료 : 정형/비정형/반정형 데이터 원천 생성자 <br/>\
- 수집 : 데이터 수집 프로시저 <br/>\
- 저장 : 사전 정의된 형태 영구 저장 <br/>\
- 처리 : 알고리즘 실행, 실시간 처리 <br/>\
- 활용 : 시스템 모니터링, BI, 정책결정 <br/><br/>\
# Data Lake / DW <br/>\
<img src = "./img/DataLake_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 2교시 6번 \
',

// 로보 어드바이저
'# 정의 : 금용자산관리용 인공지능<br/>\
- 로봇과 어드바이저(투자 전문가)가 조합된 용어로서, 고도화된 AL과 빅데이터 기반으로 시장 환경에 따라 자산을 관리해주는 금융자산관리용 인공지능 <br/><br/>\
# 암기 <br/>\
- 운자하 <br/><br/>\
- 투 : 쿼써 <br/>\
- 증 : N삼 <br/>\
- 은 : K우 <br/><br/>\
- 풀 : 웰베 <br/>\
- 셀 : 마 <br/>\
- 어 : 넷런 <br/><br/>\
- 풀(발린)웰베(엘베 자나)셀마(설마)어! 넷(이서)런(하는게 빠른거야?) <br/><br/>\
# 유형 : 운용형, 자문형, 하이브리드형 <br/><br/>\
# 제약 : 현행법규상 대면계약 의무화, 불건전영업과 이해 상충, 다양한 환경의 유효성 검증 부족 <br/><br/>\
# 장점 <br/>\
- 금융시장 예측을 위한 빅데이터 분석, 자산배분, 리밸런싱까지 사람보다 빠르고 정확하게 수행 <br/>\
- 사람 감정 개입 인한 오류를 차단, 일관성 있는 투자 원칙 유지 가능 <br/>\
- 일반 자문상품 대비 수수료와 최소 투자금액이 낮아 소액 투자자도 투자 가능 <br/><br/>\
# 고려사항 <br/>\
- 투자상품의 한계 : 투자상품이 주로 ETF에 국한되어 있는 한계점이 있음 <br/>\
- 신뢰성 : 시장 초기단계인 만큼 신뢰성 확보 측면에서는 시간이 필요함 <br/>\
- 변동성 대응 : 수립되어 있는 data 외에 새로운 변수가 생겼을 때의 대응력이 검증 안됨 <br/>\
- 수수 구조논란, 기존 시장 잠식 <br/><br/>\
# 국내 현황 <br/>\
1. 투자자문 <br/>\
- 쿼터백 : 글로벌 ETF(상장지수증권) 특징, 성과 상관관계등 DB화, 투자자 요구와 시장상항 맞춤 포트폴리오 제공 <br/>\
- 써미트 : 펀드, 주식, ETF, 파생상품, 채권 등 모든 상품 투자 <br/><br/>\
2. 증권사 <br/>\
- NH 투자 증권 : 디셈버앤 컴퍼니의 RA 엔진 활용, 국내 최초 RA 서비스 QV 로보어카운트 출시 <br/>\
- 삼성 증권 : RA 플랫폼 핵심 기술, 투자성과 검증시스템 개발 , 국내 최초 특허 출원 16.01 <br/><br/>\
3. 은행 <br/>\
- KB 은행 : 쿼터백 투자자문과 RA 자문형 신탁상품 출시 <br/>\
- 우리은행 : 오픈베타서비스 개시, 일반인 대상 맞춤형 포트폴리오 제공 <br/><br/>\
# 해외 현황 <br/>\
- Fully Automated Platform (only 알고리즘)<br/>\
=> weathFront : 초기 투자금 만불까지 수수료 무료, 투자목표 및 ETF 비중조정까지 고객 가능 <br/>\
=> Battlement : Tax Loss Harvesting 자동 적용(5만불 이상), 최고 6개월 수수료 무료 <br/>\
- Self Executed Trades(사람판단요구) : MarketRiders(이메일 리포트 정기 구독 방식, 신규고객 30일간 무료) <br/>\
- Advisor Executed Trades(사람판단도 자산운용 활용) : nutmeg(영국업체, 투자팀에 의한 Active 전략 병행), LearnVeset(자문만 제공, 통합관리서비스 제공) <br/><br/>\
<img src = "./img/RoboAdvisor_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/RoboAdvisor_2.png" style = "max-width:100%; height:auto;">\
',
  
// 검색엔진 
'# 정의 : 자료검색의 효율적인 도구 <br/>\
- 데이터베이스에 저장된 방대한 양의 컨텐츠를 인터넷 상에서 쉽게 찾을 수 있도록 도와주는 소프트웨어 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/SearchEngineOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 동작 <br/>\
- Crawler : 위치정보 수집 <br/>\
- Indexer : 위치정보 저장, 색인데이터베이스 저장<br/>\
- Searcher : 색인데이터베이스 검색 <br/>\
- Query Manager : 검색 결과 전달 <br/><br/>\
2. Process <br/>\
- Filter 모듈 : 다양한 형태의 데이터 소스 처리 <br/>\
- 언어처리 모듈 : 형태소 분석기와 같은 언어처리 모듈 <br/>\
- 외부 솔루션 연동 : 인터페이스 모듈, 보안 모듈, 관리 모듈 추가 \
',
  
// [검색엔진]- 색인어 추출
'# 절차 <br/>\
<img src = "./img/KeywordExtract.png" style = "max-width:100%; height:auto;"><br/><br/>\
# N-gram 방식을 통한 색인어 추출 <br/>\
1. 방법 <br/>\
- 개념 : 글자를 겹쳐서 색인어 추출하는 방법 <br/>\
- 사례 : 정보검색 -> 정보/보검/검색 <br/><br/>\
2. 장점 <br/>\
- 완정성 : 신조어 색인 가능 <br/>\
- 구성 용이 : 색인어 크기 일정 <br/><br/>\
3. 단점 <br/>\
- 노이즈 : 틀린 내용 다수 포함 <br/>\
- 비효율 : 품질 저하, 색인어 리스트 커짐 <br/><br/>\
4. 적용 <br/>\
- 성능 향상 : 형태소분석의 오류로 인한 성능 저하시 사용 <br/>\
- 소량 정확 : 문서의 건수가 적고, 재현율 최우선시 되는 경유 \
',
  
// NLP
'# 정의 : 인간의 언어를 컴퓨터로 이해, 해석하는 기술 <br/>\
- Natural Language Processing <br/>\
- 인간의 언어 현상을 기계적으로 분석해 컴퓨터가 이해 가능한 형태로 만드는 자연언어 이해/변환 과정 혹은 그러한 형태를 다시 인간이 이해 가능한 언어로 표현하는 제반기술 <br/><br/>\
# 인공지능과 관계 <br/>\
- NLP(Processing) : 음성 처리 <br/>\
- NLU(Understanding) : 기계 이해 변환 (NLP 일부분) <br/>\
- NLG(Generation) : 다시 자연어로 변환 (NLP 일부분) <br/><br/>\
# 구성도 <br/>\
<img src = "./img/NLP_Overview.png" style = "max-width:100%; height:auto;">\
',
  
// HTML 5
'# 정의 : Hyper Text Markup Langague <br/>\
- 기존 텍스트와 하이퍼링크만 표시하던 HTML 언어의 표현상의 한계를 극복하고 플래시 등 추가적 플러그인 없이 멀티미디어 등 다양한 어플리케이션까지 표현, 제공하도록 진화한 "웹 프로그래밍 언어" <br/><br/>\
# 주요기능 <br/>\
1. Design <br/>\
- 3D Graphic : 다양한 2차원, 3차원 그래픽 제공 <br/>\
- CSS3 : 스타일, 이펙트 기능 <br/><br/>\
2. NW <br/>\
- Connetivity : 서버 양방향 통신 가능 <br/>\
- Offline & Storage : 네트워크 미지원 환경 이용 가능 <br/><br/>\
3. Multimedia <br/>\
- Device Access : 카메라, 동작센서 HW 직접제어 <br/>\
- Multimedia : 비디오, 오디오 자체 기능 지원 <br/><br/>\
4. Data <br/>\
- Performance & Integration : GPS 없이도 단말기 지리적 위치 제공 <br/>\
- Semantics : 웹 자료 의미부여, 맞춤형 검색 제공 \
',

// LOD
'# 정의 : 공공데이터의 개방형 플랫폼 <br/>\
- Linked Open Data <br/>\
- 웹 상에 존재하는 데이터를 개별 URI로 식별하고, 각 URI에 링크 정보를 부여함으로써 상호 연결된 웹을 지향하는 모형 <br/><br/>\
# 팀 버너스리 Four Rules (UHR링)<br/>\
- URI 사용 : 개별객체 ID 부여 <br/>\
- HTTP URI 사용 : 데이터 접근성 강화 <br/>\
- RDF 사용 : 정형화, 연계 <br/>\
- 링크정보 부여 : 발전된 시맨틱 웹 <br/><br/>\
* 온톨로지 : 개념간 관계를 기술하는 정형 어휘의 집합 <br/>\<br/>\
# 구축 절차 <br/>\
- 명세화/용어 설계 <br/>\
- 온톨로지 설계 <br/>\
- 데이터 변환(RDF) <br/>\
- 연결/저장/발행/등록 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/LOD.png" style = "max-width:100%; height:auto;"><br/>\
- URI(Uniform Resource Identifier) : 인터넷에 존재하는 객체 표현 <br/>\
- XML : 메타언어 <br/>\
- RDF(Resource Description Framework) : 정보 자원, 구조 표현 언어 <br/>\
- RDFS : RDF의 Schma 정보 <br/>\
- OWL : DAML + OIL, Web ontology 언어 <br/>\
- SPARQL : 온톨로지 질의 언어 <br/>\
- RIF(Rule Interchange Format) : 규칙 정의, 교환 위한 계층 <br/><br/>\
# 사례 <br/>\
- 해외 : DB pedia, BBC <br/>\
- 국내 : 공공 Wifi 정보, 국가서지 <br/><br/>\
* 122회 1교시 3번\
',

// Open API
'# 정의 : 공개 API <br/>\
- 개발자에게 사유 응용 소프트웨어나 웹 서비스에 프로그래밍적인 권한을 제공하는 누구나 사용할 수 있도록 공개된 API <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/OpenAPI.png" style = "max-width:100%; height:auto;"><br/>\
- API Gateway : 제공, 모니터링, 트래픽 제어 <br/>\
- API Manager Portal : 제휴사 정보 관리 <br/>\
- API Support & Analysis : 로그 데이터 추출 <br/>\
- Cache : 빠른 액세스 <br/>\
- Authentication : 인증 정보 검증 <br/>\
- API Developer Portal : 문서화, 샘플코드, 어플리케이션 제공 <br/>\
- Third-Party Developer Community : 정보 교류 <br/><br/>\
* 122회 2교시 3번\
',

// SOAP API
'# 정의 : XML 기반 네트워크 데이터 교환 프로토콜 <br/>\
- Simple Object Access Protocol <br/>\
- 일반적으로 널리 알려진 HTTP, HTTPS, SMTP등을 통해 XML 기반의 메시지 컴퓨터 네트워크 상에서 교환하는 프로토콜 <br/><br/>\
# Layer 측면 구성요소 <br/>\
1. Service Discovery Layer <br/>\
- UDDI <br/>\
- 기업이나 단체, 개인이 자신들의 서비스 내용을 인터넷 상으로 등록할 수 있게 하는 XML 기반의 등록처 <br/><br/>\
2. Service Description Layer <br/>\
- WSDL <br/>\
- 특정 서비스의 설명과 접근 방법에 대하여XML 기반으로 제공 <br/><br/>\
3. XML Messaging Layer <br/>\
- XML <br/>\
- 데이터의 전송을 위하여 정의된 데이터 포맷 <br/><br/>\
4. Service Transport Layer <br/>\
- HTTP <br/>\
- 서비스에 대해서 전송에 대한 역할을 수행 <br/><br/>\
# Data 측면의 구성요소 <br/>\
1. SOAP Envelope <br/>\
- Enveplope <br/>\
- 모든 SOAP 메시지의 루트 요소 <br/>\
- 두개의 하위 요소인 선택적 Header 요소 및 필수 Body 요소를 포함 <br/><br/>\
2. SOAP Header <br/>\
- Header <br/>\
- SOAP Envelope의 선택적 하위 요소 <br/>\
- 메시지 경로를 따라 SOAP 노드로만 처리될 애플리케이션 관련 정보 전달 <br/><br/>\
3. SOAP Body <br/>\
- Body <br/>\
- SOAP Envelope의 필수적 하위 요소 <br/>\
- 메시지의 최종 수신을 대상으로 하는 정보 포함<br/><br/>\
4. SOAP Fault <br/>\
- Fault <br/>\
- SOAP node에서 실패가 발생할 경우 해당 오류에 대한 정보 포함 <br/><br/>\
* 122회 2교시 3번\
',

// REST API
'# 정의 : 분산 하이퍼미디어 시스템 소프트웨어 아키텍처 <br/>\
- Representational State Transfer <br/>\
- WWW과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처 <br/>\
- 엄격한 의미로 네트워크 아키텍처 원리의 모음 <br/><br/>\
# 6가지 제한 조건 <br/>\
1. 클라이언트/서버 구조 <br/>\
- 일관적인 인터페이스로 분리되어야 함 <br/><br/>\
2. 무상태 <br/>\
- 각 요청간 클라이언트의 콘텍스트가 서버에 저장되어서는 안된다. <br/><br/>\
3. 캐시 처리 가능 <br/>\
- WWW 에서와 같이 클라이언트는 응답을 캐싱할 수 있어야 한다 <br/>\
- 잘 관리되는 캐싱은 클라이언트-서버간 상호작용을 부분적으로 또는 완전하게 제거 하여 scalability와 성능 향상 <br/><br/>\
4. 계층화 <br/>\
- 클라이언트의 서버 연결 여부 파악 불가 <br/>\
- 중간 서버 배치 인한 로드 밸런싱, 공유 캐시 기능 제공 <br/>\
- 시스템 규모 확장성 용이 <br/><br/>\
5. Code on Demand <br/>\
- 자바 애플릿이나 자바스크립으의 제공을 통해 서버가 클라이언트가 실행시킬 수 있는 로직을 전송하여 기능 확장 가능 <br/><br/>\
6. 인터페이스의 일관성 <br/>\
- 아키텍처를 단순화시키고 작은 단위로 분리 <br/>\
- 독립적으로 개선 <br/><br/>\
<img src = "./img/SOAPREST.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 2교시 3번\
',

// Service Worker 
'# 정의 : 웹 페이지 백그라운드 스크립트 <br/>\
- PWA(Progressive Web Application)의 핵심 Building Block <br/>\
- Event에 대해서 반응 하는 역할, 서비스 워커 만의 다양한 기능 제공 <br/>\
- 웹 브라우저와 별개로 동작하며, 웹페이지 또는 사용자 상호작용이 필요하지 않는 백그라운드로 실행되는 스크립트 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ServiceWorker.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 생명주기 <br/>\
- Installing : 서비스 워커 URL 등록 <br/>\
- Installed/Waiting : 등록, 대기 <br/>\
- Activating : Trigger <br/>\
- Activated : 페이지 제어, 이벤트 수신 <br/>\
- Redundant : 실패, 새로운 서비스 워커 활성화 <br/><br/>\
# 활용분야 <br/>\
- Caching : 캐시 DB 로딩 <br/>\
- Web Push : 웹 통제 <br/>\
- Offline : 오프라인 컨텐츠 <br/><br/>\
* 122회 2교시 4번\
',

// Ontact
'# 정의 : Unatct + 연결 패러다임 <br/><br/>\
# 종류 <br/>\
- 능동 + 상시 : 심전도 24시간 모니터링 <br/>\
- 능동 + 필요 : 온라인 주문 <br/>\
- 비상 + 수동 : 서비스 오류시 고객에게 먼저 접촉 <br/>\
- 상시 + 수동 : 보안 서비스 \
',

// 디지털트윈
'# 정의 : 현실세계의 물리적 사물을 가상화한 모델 <br/>\
- 현실 세계에서 사람이 쉽게 접근할 수 없는 공간이나 물건 등 여러 부분들에 대해 가상모델링화 하여 지속적인 관찰과 보수가 가능하게끔 하는 기술 모델 <br/><br/>\
# 특징 <br/>\
- 디지털정보종합 <br/>\
- <font color = "red">디지털스레드</font> : 정보기반으로 서비스 활용 <br/>\
- 가상시뮬레이션 <br/>\
- 통합제어 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/DigitalTwin.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
<img src = "./img/DigitalTwinTech.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 3교시 1번\
',
  
// 스마트 팩토리
'# 정의 : 자동화 + 지능화 공장 <br/>\
- ICT 기술을 기반으로 제조 전 과정을 자동화, 지능화하여, 최소의 비용 및 시간으로 제품을 생산하는 미래형 공장 <br/><br/>\
<img src = "./img/SmartFactory.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 분류 <br/>\
<img src = "./img/SmartFactory5Level.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 스마트공장 보안 감사 <br/>\
- 면담조사 <br/>\
- 문서검토 <br/>\
- 현장조사 <br/>\
- 재실시 <br/><br/>\
# 고도화 방법론 제언 <br/>\
<img src = "./img/SmartFactoryHighlevel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 핵심 성과지표 <br/>\
<img src = "./img/SmartFactoryIndex.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 관리 2교시 5번\
',
  
// CPS
'# 정의 : Smart Factory의 핵심 기반 기술 <br/>\
- Cyber Physical System <br/>\
- 인간의 개입없이 대규모 센서/엑츄에이터를 가지는 물리적인 요소들과 통신기술, 응용 소프트웨어 및 시스템 소프트웨어 기술을 활용하여 실시간으로 물리적 요소들을 제어하는 복합 시스템 <br/><br/>\
# 핵심 특성 <br/>\
- Computation : 정보/데이터/기능 통합 <br/>\
- Control : 통합 접근 제어 <br/>\
- Communication : 물리, 사이버 세계 연결 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/CPS_Structor.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. HW <br/>\
- Controller : 센서 장애 탐지 <br/>\
- Actuator : 시스템 제어 <br/>\
- Sensor : 외부 자극 감지 <br/><br/>\
2. SW <br/>\
- 모델링 : 실제 동작 기본 개념 (이산/연속/도메인)<br/>\
- 자율 컴퓨팅 : 자가 치유 <br/>\
- 실시간 미들웨어 : 분산 환경 로드 밸런싱 (CORBRA, JMS) <br/>\
- 검증기술 : 모델링 결과 통한 소스코드 검증 <br/><br/>\
3. NW <br/>\
- 유/무선 통신 : 고속 통신 (IPv6, WPAN)<br/><br/>\
# 구현 위한 해결 과제 <br/>\
- 데이터 관리 : 실시간 정보 분석 인프라 <br/>\
- 신뢰성 확보 : 정형검증 요구 <br/>\
- 프라이버시 : 과도한 정보 수집 금지 <br/>\
- 정보보안 : 산업 기밀 유출 방지 \
',

// Edge Computing
'# 정의 : 종단 컴퓨팅 모델 <br/>\
- 클라우드나 중앙이 아닌 네트워크 종단에서 컴퓨팅이 이루어지는 모델 <br/><br/>\
# 필요성 <br/>\
- 신속성 : 저지연 연산 <br/>\
- 분산 : 부하 집중 방지 <br/>\
- 개인정보보호 : 술제 업무에 사용하지 않는 데이터 중앙 전달 방지 <br/>\
- 모바일 환경 : 모바일 기기 증가 <br/><br/>\
# 시장동향 <br/>\
- Google Cloud IoT : 연결 디바이스 실시간 처리 <br/>\
- AWS IoT Greengrass : 농업, 산업 유지보수 <br/>\
- MS Azure IoT Edge : 개발자 공유 코드 컨테이너 <br/>\
- KT MEC : 빈번한 사용자 요청 MEC 교환국 처리 <br/>\
- GE Predix Edge : GE IoT 플랫폼 컴퓨팅 모델 <br/><br/>\
* 86회 라이지움 3교시 1번\
',
  
// 서버리스 컴퓨팅
'# 정의 : 서버를 고려하지 않은 애플리케이션 구현 <br/>\
- 서버나 클라우드 등 별도의 인프라를 준비하지 않고, 필요한 기능을 함수 형태로 구현하여 자동 스케일링 방식으로 시시각각 변화하는 자원 수요를 지원하는 서비스 방법 <br/><br/>\
# 구현기술 <br/>\
- 비즈니스 로직 관리 : 마이크로 서비스 정의 , 오케스트레이션 실행 / AWS Fargate <br/>\
- 오케스트레이션 : 애플리케이션 구성요소, 마이크로 서비스 상태 관리 / AWS Step functions <br/>\
- 보안/액세스 제어 : 로깅, 변화추적, 액세스 제어, 암호화 / AWS I AM VPC <br/>\
- 안정성 : 확장 가능한 고가용성 서비스 / AWS Lambda <br/><br/>\
* 아이리포 23회 1교시 7번\
',
  
// Web Crawling 
'# 정의 : 웹크롤러 이용, Web Data 자동 수집 검색 기술 <br/>\
- 인터넷 웹사이트의 URL 주소를 통해 HTML 페이지를 웹크롤러 이용 접속해서 HTML/CSS 파싱하고 Web Data를 자동으로 수집하는 검색 기술 <br/><br/>\
# 특징 : 자동화, API 연계 수집 가능 <br/><br/>\
# 기술요소 <br/>\
1. Master(Frontier) <br/>\
- URL Filtering : URL 패턴, 중복, 국가 코드, 외부 필터 수행, 함정 피하기 <br/>\
- HTTP Module : Resource URL, Extracted URL, 그룹 Seed 지정 <br/>\
- Tracking Module : 특정 Main/Sub URL 대상 지정 크롤링 <br/><br/>\
2. Slave(Agent) <br/>\
- URL 정규화 : URL 표현의 일관된 형태로 변환, URL 인코딩 적용 <br/>\
- 로봇 배제 표준 : 웹 사이트 로봇 접근 거부 규약 (Robots.txt) <br/>\
- HTML 파싱 : HTML 소스, 헤더 분석 및 링크 추출 <br/><br/>\
3. Monitor <br/>\
- Anomaly 확인 : Frontier, Agent의 검색 이상 감지 및 사용자 알림 <br/>\
- Realtime Control : URL 서버의 과다 트래픽 탐지 및 검색 우선순위 변경 <br/><br/>\
# 기본 알고리즘 <br/>\
- BFS : 자체 웹을 포괄하는 크롤링 검색 알고리즘 <br/>\
- Fish School Search : 지정된 쿼리와 일치하는 내용의 페이지만 검색 <br/>\
- Crawling through URL Ordering : URL이 있는 큐에서 중요 페이지 우선 검색 <br/>\
- Crawling the Large Sites First : 대기 중 페이지 많은 사이트 우선 크롤링 <br/><br/>\
# 개선된 알고리즘 <br/>\
- Enhanced BFS : P2P 네트워크의 웹크롤링 트래픽 측정, 분석 <br/>\
- Less Invasive Crawling Algorithm : 기존 DFS, BFS 방식의 웹 크롤링 단점 개선 <br/>\
- N-gram Based BFS : 검색 텍스트 단위 말뭉치(N-Gram)로 확장 <br/>\
- Sentiment-aware Web Crawledr : 긍/부정 어휘 기반 크롤링시 필터링 <br/><br/>\
* 웹크롤링, 스크래핑 비교 <br/>\
<img src = "./img/WebCrawlingScraping.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* 122회 3교시 1번\
',
  
// 오픈소스 라이선스
'# 정의 : 자유롭게 사용, 복제, 배포, 수정 가능한 소스코드가 공개되어 있는 SW 라이선스<br/><br/>\
<img src = "./img/OpenSource_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/OpenSource_0.png" style = "max-width:100%; height:auto;"><br/>\
- 이허취수재결 <br/><br/>\
* 세계 65% 이상의 기업이 오픈소스 활용중 <br/>\
* ICT 산업에서 오픈소스의 비중이 갈수록 높아지는 추세 \
',

// 오픈소스 라이선스 분류
'# 허용적 라이선스 <br/>\
- 수정,배포,전환 가능 <br/>\
- 공개의무 없음 <br/>\
- 종류 : Apache 2.0, BSD-2, BSD-3, MIT 라이선스 <br/><br/>\
# 약한 카피레프트 라이선스 <br/>\
- 의무사항 내 전환 가능<br/>\
- 파일,모듈 공개의무 <br/>\
- 종류 : EPL 1.0, EUPL 1.0, LGPL 2.1, LGPL 3.0, MPL 2.0, MS-PL 라이선스 <br/><br/>\
# 강한 카피레프트 라이선스 <br/>\
- 그대로 사용<br/>\
- 결과물 공개 (OSS, SW) <br/>\
- 종류 : GPL 2.0, GPL 3.0, AGPL 3.0 라이선스 <br/><br/>\
* MIT, Apache, BSD 라이선스의 사용률은 일정하게 유지, 증가하고 있으며 GPL 및 LGPL 라이선스의 사용률은 감소하는 추세 <br/>\
* 허용적 라이선스 선호, 지속적인 성장, 상호호환성 고려 필요<br/><br/>\
* 122회 1교시 4번\
',

// GPL
'# 정의 : General Public License <br/><br/>\
# 특징 : 대중적, 엄격 <br/><br/>\
# 2.0 주요내용 <br/>\
- 명시사항 : 저작권, 보증책임 없음, GPL 배포 사실 <br/>\
- 공개사항 : SW수정, 새로운 소프트웨어 링크 <br/>\
- Object Code 배포시 코드 배포 및 제공 방법 명시 <br/>\
- 특허에 대한 사용료 받을 수 없음 <br/>\
- 메뉴얼, 준하는 매체 포함, GPL 전문 첨부 의무 <br/><br/>\
# 3.0 주요내용 <br/>\
- 라이선스 양립성 해결을 위해 등장 <br/>\
- 소스코드 배포시 설치정보 함께 제공 <br/>\
- DRM 관련 이익 포기 해야함 <br/>\
- 특허관련 소스코드 개선시 비차별, 특허 사용료 없는 라이선스 제공해야함 <br/>\
- 특허 소송시 라이선스 종료 <br/>\
- Apache License 2.0 및 Affero GPL과 양립 가능 <br/><br/>\
* 내부 사용시 권장<br/>\
* AGPL : 서버내부에서 이용하는 것 까지 배포로 취급 \
',

// LGPL
'# 정의 : 기업 오픈소스 장려 위한 라이선스 <br/>\
- Library General Public License <br/>\
- FSF : Free Software Foundation <br/>\
- FSF가 GPL 보다 소스코드 공개정도를 완화된 형태로 사용할 수 있도록 만든 라이선스로 기업에게 오픈소스 SW를 장려하기 위해 만든 라이선스 <br/><br/>\
# 특징 <br/>\
- 원 소스코드 비공개 <br/>\
- 오픈소스 라이버리의 소스코드만 공개 <br/><br/>\
# 주요내용 <br/>\
- 명시사항 : 저작권 표시, 보증책임 없다는 표시, LGPL에 의해 배포 명시 <br/>\
- 공개사항 : 일부 수정시, 수정한 라이브러리 공개 <br/>\
- 링크사항 : 링크 소스코드 공개 필요 없음. (정적 링크시 Object 코드 제공) <br/>\
- 특허사항 : GPL과 동일 \
',

// BSD 
'# 정의 : 소스공개를 하지 않아도 되는 라이선스 <br/>\
- Berkely Software Distribution <br/>\
- 소프트웨어의 소스코드를 공개하지 않아도 되는 오픈소스SW 라이선스 <br/><br/>\
# 특징 <br/>\
- 미국 재원으로 운영 <br/>\
- 새로운 프로그램 개발, 소스코드를 공개하지 않고 판매 가능 <br/><br/>\
# 주요내용 <br/>\
- 명시사항 : 저작권, 보증책임이 없음 <br/>\
- 사용범위 : 상용 소프트웨어에 무제한 사용 가능 <br/>\
- 바이너리 배포 : 재배포시, 문서 또는 그 밖의 매체에 저작권 표시와 함께 면책조항 유지 \
',

// Apache
'# 정의 : 아파치 라이선스 <br/>\
- 아파치 웹서버를 포함한 아파치 재단(ASF: Apache Software Foundation)의 모든 SW에 적용되는 라이선스 <br/><br/>\
# 특징 <br/>\
- BSD 라이선스와 비슷하며 소스코드 공개등의 의무 없음 <br/>\
- BSD 보다 법률차원 완성도 높음 <br/>\
- GPL 2.0 결합x(특허권), GPL 3.0 결합 가능 <br/><br/>\
# 주요내용 <br/>\
- 상표보존 : "Apache" 상표권 침해하지 않아야 함 <br/>\
- 명시사항 : 저작권, 보증책임 없음<br/>\
- 사용범위 : 상용 SW에 무제한 사용가능 \
',

// MPL
'# 정의 : Netscape 소스코드 공개를 위해 생긴 라이선스 <br/>\
- Netscape 브라우저의 소스코드를 공개하기 위해 개발된 라이선스 <br/><br/>\
# 특징 <br/>\
- 공개해야할 소스코드의 범위가 GPL에 비해 명확 <br/><br/>\
# 주요내용 <br/>\
- 명시사항 : 저작권, 보증책임이 없음<br/>\
- 배포방법 : MPL 코드 수정시 MPL 재배포 <br/>\
- 결합사항 : MPL 코드만 공개 <br/>\
- 특허사항 : "Legal"파일에 기록하여 배포 <br/>\
- 예외사항 : 실행파일 MPL 이외 선택 가능 \
',

 // InnerSource
 '# 정의 : 기업의 오픈소스운동 <br/>\
- 오픈소스 개발 문화에 사용되는 원칙들을 활용하여 소프트웨어를 기업 내부에서만 공개해 직원들끼리 공유하는 개발 문화 <br/><br/>\
# 부각 배경 <br/>\
- 부서간 협업 <br/>\
- 비공개 기업 전략 <br/><br/>\
# 구성요소 <br/>\
1. 원칙 <br/>\
- 보상제도 : 코드 기여 포상 <br/>\
- 의무화 : 코드 작성후 문서화 의무 <br/>\
- 코드 공개범위 : 본부,지사 단위까지 <br/>\
- 보고체계 : 간소화, 속도향상 <br/>\
- 모듈화 : 재사용, 통합 용이성 <br/>\
2. 도구 <br/>\
- 협업도구 : GitHub, SVN, 내부 버전 관리도구 <br/><br/>\
<img src = "./img/InnerSource.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 93회 1교시 6번\
',
  
// 디지털 디바이드
'# 정의 : 지식과 정보에 대한 접근이 경제적 계층, 성별, 연령별로 불균형하게 나타나는 현상 <br/><br/>\
# 특징 : 정보지식기술 확산에 따라 의미가 역독적으로 변화 <br/><br/>\
# 디지털 정보화 수준 <br/>\
- 디지털 접근 수준 : 보유, 사용가능 <br/>\
- 디지털 역량 수준 : 이용능력 <br/>\
- 디지털 활용 수준 : 양적, 질적 활용정도 <br/>\
- 디지털 정보화 수준 = 접근(0.2) + 역량(0.4) + 활용(0.4) <br/><br/>\
* 라이지움 84회 1교시 8번\
',
  
// 디지털 리터러시
'# 정의 : 컴퓨터를 통해 다양한 출처로부터 찾아낸 여러가지 형태의 정보를 이해하고 자신의 목적에 맞는 새로운 정보로 조합해 냄으로써 올바로 사용하는 능력 <br/><br/>\
# 변천 <br/>\
- 3RS / 5,000 여년전 / 읽기, 쓰기, 셈하기 / 기본적 기능 <br/>\
- 텔레비전 / 1950 / 시각적 리터러시, 비판적 사고 / 비판적 관점 부각 <br/>\
- 정보 리터러시 / 1990 / 정보 필요성 인식 / 정보 중요성 인식 <br/>\
- 디지털 리터러시 / 2000 / 컴퓨터, 네트워크, 정보 / 기술 습득을 넘어 활용 능력 <br/><br/>\
* 라이지움 84회 1교시 8번\
',
  
// 디지털 포용
'# 정의 : 디지털 시대를 살아가는 전 국민이 디지털 역량을 갖추고, 차별없는 디지털 이용환경 속에서 디지털 기술과 서비스의 혜택을 소외와 배제 없이 함께 누리는 것 <br/><br/>\
# 부각 배경 <br/>\
<img src = "./img/DigitalInclusion.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 84회 1교시 8번\
',
  
// Web 4.0
'# 정의 : 웹이 사람의 말을 이해하고 웹과 사람이 항상 연결되어 상호작용 가능한 차세대 웹 <br/><br/>\
# 특징 <br/>\
- All Device 연결 <br/>\
- Symbiotic web <br/>\
- Second Live <br/>\
- 속도, 안정성 중요 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/Web4.png" style = "max-width:100%; height:auto;">\
',
  
// Smart City
'# 정의 : 첨단 산업 융합의 미래 도시 <br/>\
- 스스로 인지하고 발전하는 IT 인프라인 하드 인프라와 교육, 안전, 복지 등 시민의 삶을 윤택하게 하는 IT, 비IT를 망라한 각종 서비스인 소프트 인프라가 조화를 이루어 모든 시민이 지능형 서비스를 이용할 수 있도록 설계된 신개념 도시<br/><br/>\
# 통합 플랫폼 <br/>\
<img src = "./img/SmartCityPortalPlatform.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 서비스 유형 <br/>\
1. 교통 <br/>\
- 스마트 파킹 <br/>\
- V2I 자율주행차 운영 고도화 <br/>\
- 스마트 신호체계 및 교통관리 <br/>\
- Mobility As a Service <br/><br/>\
2. 생활/복지 <br/>\
- 독거노인 토탈케어 <br/>\
- 스마트홈 네트워크 지원 <br/>\
- 장애인 이동성 보장 <br/><br/>\
3. 경제 <br/>\
- 디지털 마켓플레이스 <br/>\
- 클라우드소싱 포털 <br/><br/>\
4. 환경 <br/>\
- 상수 수질 및 수질관리 서비스 <br/>\
- 대기오염 예측 서비스 <br/>\
- 폐기물 관리 서비스 <br/>\
- 친환경 수자원 이용 및 관리 <br/><br/>\
5. 안전 <br/>\
- 사고 및 범죄 긴급 구난 <br/>\
- 재해 재난 예측 및 대응 <br/>\
- 시설물 통합관리 <br/><br/>\
6. 에너지 <br/>\
- AM기반 스마트 에너지 관리 <br/>\
- 빌딩 통합 에너지 관리 <br/>\
- 스마트 그리드 <br/>\
- 전기차 충전 인프라 <br/><br/>\
* 117회 관리 1교시 13번\
',
  
// XR
'# 정의 : eXtended Reality <br/>\
- VR + AR + MR 기술을 망라하는 초실감형 기술 및 서비스 <br/><br/>\
# 비교 <br/>\
<img src = "./img/XR.png" style = "max-width:100%; height:auto;"><br/><br/>\
',
  
// VR
'# 정의 : 실제와 같은 경험을 제공하는 서비스 <br/>\
- 컴퓨터를 이용하여 가상세계를 만들어내 가상의 상황을 사람의 감각기관을 통해 몰입감을 느끼고 실제와 같은 경험 제공 기술 <br/><br/>\
# 기술요소 (오출입음모)<br/>\
- 오감기술 : 오감 자극 인터페이스 기술 <br/>\
- 출력기술 : 영상 출력 인터페이스 기술 <br/>\
- 입력기술 : 자연스러움, 편리함 방향 <br/>\
- 음향기술 : 3D 실감음향 입체감 표현 <br/>\
- 모션기술 : 공간, 비용 효율성 방향 \
',

// AR
'# 정의 : 가상현실의 새로운 패러다임 <br/>\
- 실 세계와 가상정보를 Seamless하게 실시간으로 합성하여 사용자에게 보다 향상된 몰입감과 현실감을 제공하는 기술 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/AR_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
- 보정 : 카메라 좌표 계산, 보정 / 패턴, 자동보정 <br/>\
- 추적 : 객체 움직임 회전 정보 계산 / 광학 추적, Hybrid 삽입 <br/>\
- 정합 : 원하는 위치에 객체 삽입 / Marker 기반, 가상 영상 삽입 <br/>\
- 디스플레이 : 이동성, 간편성 증가 / HMD, HUD\
',
  
// E-Learning
'# 정의 : CBT 기반의 온라인 학습체제 <br/>\
- 멀티미디어, 웹 등 여러 형태의 정보기술을 활용한 교육으로 학습자가 시간과 공간의 제약 없이 자유롭게 교육을 받을 수 있으며, 웹을 항해하면서 학습자원을 다양하게 활요할 수 있는 교육 시스템 <br/><br/>\
# 활성화 방안 <br/>\
- 제도 규정 : 이러닝 산업 기반 조성 <br/>\
- 기술 발전 : 고도화된 Personalization 기술 요구 <br/>\
- 비용 절감 : One Source-Multi Use, SCORM <br/>\
- 컨텐츠 통합 : KMS와의 연계 <br/>\
- 모바일 확장 : M-Learning 추진 <br/><br/>\
# 발전 방향 <br/>\
- 지속적 연구 : 학습조건과 환경 고민하는 조직 측면 <br/>\
- 다양화 : 멀티미디어 이용, 정보원천, 학습전달 모드 <br/>\
- 국가적 대응 : 지식기반 경제에 대응 <br/>\
- 표준화 : 재사용, 질향상 위한 컨텐츠 표준화 \
',
  
// DOM SAX
'# DOM : Document Object Model <br/>\
- XML 문서를 Root에서 트리 구조로 파싱하여 XML 문서 컨텐츠와 구조 전체를 메모리에 올려 놓고 해석하는 시스템 <br/><br/>\
# SAX : Simple API for XML <br/>\
- 이벤트 처리 기반으로, 자료 구조를 만들지 않고 XML 문서를 스캔해 가면서 특정 Element를 중심으로 이벤트를 발생시켜 XML 문서를 처리하는 방식 <br/><br/>\
<img src = "./img/DOM_SAX.png" style = "max-width:100%; height:auto;">\
',
  
// URC
'# 정의 : IT 기반 지능형 로봇의 새로운 패러다임 <br/>\
- Ubiquitous Robotic Companion <br/>\
- IT 기반 지능형 서비스 로봇의 패러다임 <br/><br/>\
# 특징 <br/>\
- 외부 센싱 활용 <br/\
- 판단의 전가 <br/>\
- 능동적 행동 <br/><br/>\
# 로봇 소프트웨어 기술 <br/>\
1. 인간/로봇 상호작용 기술 <br/>\
- 영상기반 컴포넌트 : 사용자인식, 제스처인식, 표정인식 <br/>\
- 음성기반 컴포넌트 : 음성인식, 음성합성, 음성 추적 <br/><br/>\
2. Smart Action 기술 <br/>\
- 지능형 주행 : 위치결정기술, 지도형성기술, 경로작성기술 <br/>\
- 지능형 조작 : 호나경/객체 인지기술, 조작제어기술 \
',
  
// 객체식별자 기반 사물인터넷 디바이스 식별체계 
'# 정의 : OID(Object Identifier) 기반 사물인터넷 디바이스 식별체계를 정의하고 그에 대한 할당 및 관리 기관 정의한 식별체계 <br/><br/>\
# 목적 : 글로벌 식별체계 구축, 산업 활성화 <br/><br/>\
# 구성요소 : 상위, 제조사식별, 모델, 일련번호식별 <br/><br/>\
* 116회 1교시 11번\
',
  
// 행동 인터넷
'# 정의 : Internet of Behaviors(IoB) <br/>\
- 데이터를 사용하여 행동을 변경하는 것 <br/><br/>\
# 구성요소 <br/>\
- Capture : Digital Dust <br/>\
- Analyze <br/>\
- Understand <br/>\
- Monetize : 수익 창출 <br/><br/>\
# 사례 <br/>\
- 텔레메틱스 : 운전 행동 모니터링 및 개선 <br/>\
- 펜데믹 : Mask Protocol, 열화상 카메라\
',
  
// 전체 경험
'# 정의 : Total Experince <br/>\
- 멀티개념 -> 전체경험 <br/>\
- 기술에서 직원, 고객 및 사용자에 이르기까지 모든 요소가 교차하는 전반적 경험을 개선하는 비즈니스 혁신 <br/><br/>\
# 구성요소 <br/>\
- 다중 경험 : 디지털 키오스크 <br/>\
- 고객 경험 : 약속 시스템 배포<br/>\
- 직원 경험 : 개인 장비 사용<br/>\
- 사용자 경험 : 사용자 장비 공동 탐색 \
',
  
// 개인정보보호 강화 컴퓨팅
'# 정의 : Privacy-enhancing computation <br/>\
- 보안성을 유지하면서 데이터를 공유해야하는 필요성에 의해 특별히 설계된 컴퓨팅 방식<br/><br/>\
# 보호기술 <br/>\
- 환경 제공 : 민감한 데이터 처리, 분석할 수 있는 신뢰성 환경 <br/>\
- 분산 수행 : Decentralize 방식으로 처리 및 분석 <br/>\
- 암호화 : 처리 또는 분석 <font color="red">전에</font> 데이터와 알고리즘 암호화 \
',
  
// 분산 클라우드
'# 정의 : Distributed Cloud <br/>\
- 클라우드 서비스가 서로 다른 물리적 위치에 분산되는 곳이지만 운영, 거버넌스 및 진화는 여전히 퍼블릭 공급자의 책임인 클라우드<br/><br/>\
# 기대효과 <br/>\
- 신속성 : 물리적 거리 감소 인한 지연시간 짧은 서비스 시나리오 도움 <br/>\
- 경제성 : 데이터 비용 절감 <br/>\
- 준법성 : 데이터 지리적 영역 법률 수용 가능 \
',
  
// 어디서나 운영
'# 정의 : Anywhere Operations <br/>\
- 분산 인프라 전체에 걸쳐 배치된 업무 및 서비스를 어디서나 관리하고, 직원에게 역할을 부여하며, 고객을 지원할 수 있도록 설계된 IT 운영 모델 <br/><br/>\
# 핵심 가치 <br/>\
- Digital First <br/>\
- Remote First <br/><br/>\
# 사례 <br/>\
- 물리적 매장 체크아웃 <br/>\
- 물류 창고 실시간 업데이트 \
',
  
// 사이버 보안 메시
'# 정의 : Cybersecurity Mesh <br/>\
- 클라우드 실행 모델을 통해 정책 집행과 의사결정이 서로 분리되고, ID 경계 보안이 가능해지는 보안 방식 <br/><br/>\
# 등장배경 <br/>\
- 분산 활성화 : 기존 보안 경계 외부에 자산 존재 <br/>\
- 보안 재정의 : 사람, 사물의 신원을 중심으로 경계 정의 <br/>\
- 정책 변경 : 오케스트레이션 중앙 집중화, 정책 시행 분산 <br/>\
- 방식 변화 : Walled City -> Module 방식 \
',
  
// 지능형 구성 가능한 비즈니스
'# 정의 : Intelligent Composable Business <br/>\
- 현재 사용 가능 기반, 신속한 비즈니스 결정 <br/>\
- 사람들이 더 나은 정보에 접근해 민첩하게 대응하는 방식으로 변화하는 의사결정 방식 근본적 재설계 <br/><br/>\
# 속성 <br/>\
- Modularity <br/>\
- Autonomy <br/>\
- Orchestration <br/>\
- Discovery \
',
  
// AI 엔지니어링
'# 정의 : 머신러닝이나 지식 그래프등 AI 및 결정 모델의 거버넌스와 라이프사이클을 관리하는 데 초점이 맞춰진 분야 <br/><br/>\
# 거버넌스 <br/>\
- 신뢰성 <br/>\
- 투명성 <br/>\
- 윤리성 <br/>\
- 공정성 <br/>\
- 해석가능성 <br/>\
- 규정 준수성\
',

// 초자동화
'# 정의 : Hyperautomation <br/>\
- 여러개의 머신러닝, 패키지 소프트웨어 및 자동화 도구로 작업을 실행하는 것 <br/>\
- 자동화 할 수 있는 것은 무엇이든 자동화해야 한다는 원칙\
',
);
