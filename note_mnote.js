var question = question.concat(
'모니터 : 정의, 구성요소',
'세마포어 : 정의, 개념도, P,V 연산코드',
'인슈어테크 주요기술',
'LOD : 정의, 구성요소',
'허용적 라이선스, 카피레프트 라이선스 개념, 종류',
'군집분석 : 정의, 과정, 유형',
'TensorFlow : 정의, 특징, 구성요소',
'DAS, NAS, SAN 비교',
'하이퍼바이저 : 정의, 특징, 위치별 분류, 기술별 분류, 호스트 타입별 분류',
'술어논리 : 정의, 사례',
'스타스키마 : 정의, 구성요소, 작성절차',
'Python 자료형, 검사방법',
'Open API : 정의, 구성요소',
'SOAP API : 정의, 구성요소',
'REST API : 정의, 6가지 제한조건',
'Web Crawling : 정의, 기술요소',
'ISO/IEC 27017 : 정의, 구성요소',
'IT투자평가항목 : 정성적, 정량적',
'IaaS, PaaS, SaaS : 구성도',
'정보시스템 계약 체결 : 나라장터 프로세스',
'전자서명법 개정안 주요내용',
'Class Diagram : 접근제어자, 관계',
'블록체인 스마트시티 활용 / 스마트 시티 3계층',
);

var answer = answer.concat(
// 모니터
'프로그램 언어수준 상호배제 기법 <br/>\
지역변수, 조건변수, cwait(c), csignal(c), next queue \
',

// 세마포어
'공유자원 접근용 신호',

// 인슈어테크
'챗봇 / 상품추천,청구서비스 / 미국(레모네이드)<br/>\
AI / 특약내용분석,지급심사 / 일본(후코쿠생명)<br/>\
텔레메틱스 / 운전습관 연계 보험할인 / 미국(프로그래시브)<br/>\
IoT / 보험가입자 웨어러블 기기 / 미국(오스카헬스)\
',

// LOD
'데이터 연결 -> 의미있는 데이터 <br/>\
Machine Readable Data / Open API / Service \
',

// 허용적 라이선스, 카피레프트 라이선스
'허용적 라이선스 : 수정 배포, 라이선스 전환 가능 / Apache 2.0, BSD-2, BSD-3, MIT <br/>\
약한 카피레프트 라이선스 : 의무 사항 변형x, 새로운 내용 추가 가능 / LGPL 2.1, LGPL 3.0, MPL 2.0 <br/>\
강한 카피레프트 라이선스 : 그대로 유지, 라이선스 전환 x / GPL 2.0, GPL 3.0, AGPL 3.0 \
',

// 군집분석
'사전 정보 없는 경우 값 기반 유사성 이용 분석법 <br/>\
거리측도 선택/군집화 절차 선택/군집의 수 결정/신뢰성과 타당성 평가 <br/>\
거리중심 : 계층적 군집, K-means, SOM / 자원축소 : 주성분분석(PCA), 다차원 척도법(MDS)\
',

// TensorFlow
'구글 머신러닝 오픈소스 라이브러리 <br/>\
확장성 / 쉬운API / DataflowGraph / 방향성Graph <br/>\
Tensors / Opeartion / Kernel / Variable / Session / Node / Control Dependecies\
',

// DAS NAS SAS 
'<img src = "./img/NetworkStorage.png" style = "max-width:100%; height:auto;">\
',

// 하이퍼바이저
'SW 가상화 플랫폼 / HW OS 사이 얇은 / 다수 OS 구동 <br/>\
2진 전환, 하드웨어 보조, Para-Virtualization <br/>\
Type 1, Type 2 <br/>\
Monolithic, MicroKernel <br/>\
반가상화, 전가상화 <br/>\
Bare-metal(native), Hosted \
',

// 술어논리
'주어가 될 수 있는 대상에 한정 기호를 사용하는 논리 <br/>\
<img src = "./img/NetworkStorage.png" style = "max-width:100%; height:auto;">\
',

// 스타스키마
'주키, 추가적인 사실들로 이루어진 스키마 <br/>\
사실(납입보험료, 신규계약) / 차원(부서) / 속성(본부,지점,영업소) / 속성계층(지점의 Parent는 본부) <br/>\
Grain 정의 / Fact 정의 / Dimension 정의 / 스타 스키마 모델 생성 \
',

// Python
'Numeric(int, float, complex(-7 +2j)) / String(str) / Boolean(bool) / List([]) / Tuple( () ) / Dictionary (\'Key\' : \'Value\') / Set( set("Hello") <br/>\
type(a)\
',

// Open API 
'공개 API <br/>\
API Gateway / API Manager Portal / API Support & Analysis / Cache / Authentication / API Developer Portal / Third party Developer community <br/>\
',

// SOAP API
'XML 기반 네트워크 데이터 교환 프로토콜 <br/>\
Layer 측면 : Service Discovery Layer(UDDI) / Service Description Layer(WSDL) / XML Messaging Layer(XML) / Service Transport Layer(HTTP) <br/>\
Data 측면 : SOAP Envelope / SOAP Header / SOAP Body / SOAP Fault \
',

// REST API
'분산 하이퍼 미디어 시스템 소프트웨어 아킽게처 <br/>\
클라이언트/서버 구조 / 무상태 / 캐시 처리 가능 / 계층화 / Code On Demand / 인터페이스의 일관성 \
',

// Web Crawling
'웹 크롤러 이용, Web Data 자동 수집 검색 기술 <br/>\
Master(Frontier)(URL Filtering, HTTP Modlule, Tracking Module)<br/>\Slave(Agent)(URL 정규화, 로봇 배제 표준, HTML 파싱)<br/>\Monitor(Anolay 확인, Realtime control)\
',

// ISO/IEC 27017
'# 정의 : 27002 기반 클라우드 서비스 정보보호 통제 가이드라인 <br/>\
정조인자 접안물문 통개공사연법 <br/>\
<img src = "./img/ISO27017.png", style = "max-width:100%; height:auto;">\
',

// IT투자평가항목
'EVA(Economic Value Added) / TCO(Total Cost of Ownership) / EVS(Economic Value Source) / TEI(Total Economic Impact) / TVO(Total Value of Opportunity) <br/>\
IO(Information Orientation) / IPM(IT Portfolio Management) / IE(Information Economics) / BCG Matrix / Value Chain\
',

// IaaS PaaS SaaS
'<img src = "./img/CloudType.png", style = "max-width:100%; height:auto;">\
',

// 정보시스템 계약 체결
'<img src = "./img/나라장터.png", style = "max-width:100%; height:auto;">\
',

// 전자서명법 개정안 주요 내용
'공인인증서 제도 폐지 (2,3) / 다양한 전자서명수단 이용활성화(6) / 전자서명인증업무 운영기준 준수사실 인증제 도입(7~11) / 전자서명 가입자 신원확인 (14) / 전자서명 가입자 및 이용자 보호 강화 (15, 20, 22) \
',

// Class Diagram 
'<img src = "./img/ClassDiagram_1.png", style = "max-width:100%; height:auto;">\
',

// 블록체인 스마트 시티 활용
'공간정보(FOAM : the Future of Proof Location, 인증 관련 공개 규약, CSC : Crypto-Spatial Coordinate, 블록체인 기반의 공개 위치 표준제시) <br/>\
스마트 시티 인프라 관리 (부동산 토지장부, 운영 인프라) <br/>\
블록체인 기반 도시에너지 관리 (에너지 분산 원장, 비즈니스 모델(소비패턴,수요예측,스마트그리드,에너지투자,에너지교환) <br/><br/>\
인프라 데이터 서비스 \
',
);
