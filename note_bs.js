var question = question.concat(
'ITSM',
'[ITSM]- SoW/SLA/SLM',
'[ITSM]- SLA',
'[ITSM]- SLM',
'ITIL',
'[ITIL]- SKMS',
'OLAP',
'ISP',
'Data Mining',
'[Data Mining]- Text Mining',
'[Data Mining]- 단어구름(Word Cloud)',
'[Data Mining]- Co-Word Analysis',
'[Data Mining]- 탐색적 데이터 분석(Exploratory Data Analysis)',
'[Data Mining]- 확증적 데이터 분석(Confimatory Data Analysis)',
'[Data Mining]- 토픽 모델링',
'[Data Mining]- 연관규칙(지지도,신뢰도,향상도)',
'[Data Mining]- Opinion Mining',
'[Data Mining]- System Dynamics',
'플랫폼 경제',
'RTE',
'[RTE]- 사이클론모델',
'기술수명주기',
'Chasm',
' 디지털 변혁 (Digital Transformation)',
'[경영환경분석]- Horizon Scanning(이슈탐지)',
'[경영환경분석]- Backcasting',
'BABOK',
'BSC',
'IT-BSC',
'코호트분석(Cohort Analysis)',
'악마의 강',
'죽음의 계곡(Death Valley)',
'다윈의 바다',
'퍼펙트 스톰',
'그로스 해킹',
'라이프(Life) 해킹',
'시빅(Civic) 해킹',
'메이커 운동(Maker Movement)',
'메이커 스페이스(Maker Space)',
'인터넷거버넌스(Internet Governance)',
' 기능성 게임(Serious Games)',
'ISO 26000',
'[ISO 26000]- CSR', 
'[IT-컴플라이언스] - ISO 31000',
'BCP',
'[BCP]- BIA',
'[BCP]- ISO22301-BCMS',
'[BCP]- DRS',
'DRP',
'BPR',
'PI',
'TOC',
'Open Shift',
'D-Commerce',
'빅블러 현상',
'옴니채널(Omni-Channel)',
'[옴니채널]- 쇼루밍',
'[옴니채널]- 역쇼루밍(Reverse Showrooming, 리버스 쇼루밍)',
'[옴니채널]- 모루밍',
'오프쇼어링(off shoring)',
'리쇼어링(Reshoring)',
'UX 모델링',
'[UX 모델링]- 페르소나(Persona)',
'SCM',
'[SCM]- 채찍효과',
'[SCM]- CPFR',
'발주프로세스',
'[발주프로세스]- RFI',
'[발주프로세스]- RFP',
'[공공 소프트웨어 사업 제안 요청서 작성 가이드라인]- 제안서',
'[공공 소프트웨어 사업 제안 요청서 작성 가이드라인]- 제안서 평가',
'[공공 소프트웨어 사업 제안 요청서 작성 가이드라인]- 공급자 선정',
'소프트웨어 영향 평가 제도',
'넛지(Nudge) 이론',
'정보시스템 하드웨어 규모산정 지침',
'Philip Crosby의 품질경영 성숙도 모델 5단계',
'KANO Model',
'마세라티 문제(Maserati Problem)',
'앰비언트 커머스(Ambient Commerce)',
'ISO 20547',
'SW사업저장소',
'군집분석',
'IT 투자 평가 항목',
'나라장터 ',
'EAI',
'COBIT 5.0',
'IT-Compliance',
'규제 샌드박스',
'매매 임치제도',
'Design Thinking',
'구독 경제',
'Servitization',
'대기행렬이론',
);

var answer = answer.concat(
// ITSM
'# 정의 : IT 서비스 수준관리 위한 프레임워크 <br/>\
- Information Technology Service Management <br/>\
- 고객과 합의된 SLA 수준에 맞게 품질 유지하도록 프로세스, 조직, 자원, 기술의 종합적 관리 위한 선진 IT 서비스 관리 기법 <br/><br/>\
# ITSM Framework <br/>\
<img src = "./img/ITSM_Framework.png" style = "max-width:100%; height:auto;">\
',

// SoW/SLA/SLM
'<img src = "./img/SOW_SLA_SLM.png" style = "max-width:100%; height:auto;">\
',
 
// SLA
'# 정의 : 사용자 공급자간 서비스 명시 문서<br/>\
- Service Level Agreement <br/>\
- 정보시스템 사용자 공급자 간 서비스 수준을 정량적으로 측정하여 상호 동의한 일정수준의 서비스를 명시한 문서<br/><br/>\
# 암기 : WMOMPRS <br/><br/>\
# 구성 : WMOMPRS <br/>\
- SOW, SLM(Metrics), SLO(Objective), SLM(Measurement), Penalty & Reward, SLR(Reports) <br/><br/>\
# SLA 측정 지표 <br/>\
- 어플리케이션 운영 : CSR 납기 준수율, CSR 처리율, CSR 고객 만족도 <br/>\
- 데이터센터 운영 : 서버 가동율, 중복 장애관리, 데이터 Backup / Restore 이행율, 시스템 변경작업 이행율 <br/>\
- NW 운영 : WAN 가동율, 인터넷 가동율, LAN 가용성, LAN 사용동향, 고객만족도 <br/><br/>\
# 개발절차 : SOW -> SLM -> SLO -> PR <br/><br/>\
# 도입 절차 <br/>\
- SLA 정의 : SLM 선정, 측정/평가/보고 <br/>\
- SLA 관리체계 수립 : 평가 Frame, 보상/패널티 방안, 예외사항 처리 방안, 보고방안 <br/>\
- SLA 프로세스 정립 : Flow, R&R, KPI, 리뷰/확정 <br/>\
- 이행 및 변화 관리 : 변화 관리제 도출, 이행과제 상세정의 <br/><br/>\
* 일반계약서 비교, 법적 효력 미흡 <br/><br/>\
<img src = "./img/SLA.png" style = "max-width:100%; height:auto;">\
',

// SLM
'# 정의 : 프로세스 관리 활동 / 고객 신뢰 증진 및 서비스 향상 <br/>\
- Service Level Management <br/>\
- 고객과 합의된 품질 수준의 서비스가 제공되는 것을 보장함으로써 고객신뢰 증진 및 서비스 수준향상을 위한 프로세스 관리활동 <br/><br/>\
# 암기 : SC, SLA, OLA, UC, SQ <br/><br/>\
# 구조 : SOW -> SLA -> SLM <br/><br/>\
# 구성  <br/>\
- Service Catalog, SLA, OLA(내부부서간 합의서) <br/>\
- UC : Underpinning Contract 외부협력업체간 계약 <br/>\
- Service Quality : 서비스 수준 보장 위한 모든 내용 기술 <br/>\
- SLM 엔진 : 지표별 측정치 산출, 보고서 작성 자동화, 서비스 모니터링 <br/>\
- Service Report <br/><br/>\
# 기술요소 <br/>\
- 서비스 카탈로그 관리도구 <br/>\
- 서비스 모니터링 도구 : SMS, MMS, APM <br/>\
- SLM 시스템 <br/>\
- 서비스 측정도구 : 사용량 과금 <br/>\
- 서비스 프로비저닝 \
',
 
// ITIL 
'# 정의 : ITSM을 위한 Practice 모음집 <br/>\
- IT Infrastructure Library <br/>\
- IT 서비스 관리에 대한 프레임워크 구현을 돕기 위한 문서들의 집합 <br/><br/>\
# 프로세스 : 계참설획수개 <br/>\
# 구성요소 : 조정파가 <br/>\
# 3.0, 4.0 비교<br/>\
- 전설전운지 / 계참설획수개 <br/>\
<img src = "./img/ITIL.png" style = "max-width:100%; height:auto;">\
',
 
// SKMS
'# 정의 : ITIL 3.0 CMDB 대체 시스템 <br/>\
- Service Knowledge Management System <br/>\
- IT 서비스 구성관리를 포함한 수집 및 처리된 지식을 기반으로 하는 IT 서비스에 대한 조직의 의사결정 촉진 관리 시스템 <br/><br/>\
# 구성 (P,KP,II,DI)<br/>\
- Presentation <br/>\
- Knowledge Processing <br/>\
- Information Integration <br/>\
- Data&Information\
',
 
// OLAP
'# 정의 : 직접 접근, 대화식 정보 분석 기법 <br/>\
- On-Line Analytical Processing <br/>\
- 최종사용자가 다차원 정보에 직접 접근하여 대화식으로 정보를 분석하고 의사결정에 활용하는 과정 및 도구 <br/><br/>\
# 구성요소 <br/>\
- DW : 의사결정 자원정보 통합 DB <br/>\
- ETL/ETT : 데이터 처리 전과정 <br/>\
- ODS : OS 데이터 추출 <br/>\
- Metadata : Data 요약정보 저장관리 <br/>\
- Data Mart : 소규모 데이터 추출 <br/>\
- Reporting Toool : 질의 결과 Chart, Report 변환 <br/><br/>\
# 유형 <br/>\
- ROLAP : RDB 저장, 분석 <br/>\
- MOLAP : 다차원 DB 사용 <br/>\
- HOLAP : R + M <br/>\
- DOLAP : 서버 없이 Data Warehouse 연결 <br/>\
- Web OLAP : Web 사용 <br/><br/>\
* Extract, Transform and Load <br/>\
* Exttracton, Transformation, Transportation <br/>\
* Operational Data Store \
',
 
// ISP
'# 정의 : 조직의 목표 달성을 위한 계획 수립 <br/>\
- Information Stragey Planning <br/>\
- 조직의 중장기 마스터 플랜을 지원하기 위한 정보 시스템을 계획하고 전략을 수립하는 활동 <br/><br/>\
# 순서 <br/>\
<img src = "./img/ISP_Order.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 산출물 검토<br/>\
<img src = "./img/ISP_Output.png" style = "max-width:100%; height:auto;">\
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
# 암기 <br/>\
- 관련 알고리즘 : A,D,F <br/><br/>\
# 연관성 : 특정 거래에서 하나의 아이템에 대한 거래가 발생하면 다른 특정 아이템의 거래가 연쇄적으로 발생하는 현상 <br/><br/>\
# 지지도(Support) : 전체 거래 품목 A,B가 동시에 포함될 확률, 두 품목의 동시구매가 얼마나 자주 일어나는지를 분석 <br/>\
- Support = P(A∩B) = (AB동시/전체거래) = (A거래수 * B거래수) / 전체거래수<br/><br/>\
# 신뢰도(Confidence) : A->B 연관규칙에서, 품목 A포함 거래중 A,B 동시 포함 거래 확률 -> 두 품목간 연관성의 강도를 분석 <br/>\
- Confidence = P(B|A) = 지지도/P(A) = P(A∩B)/P(A)<br/><br/>\
# 향상도(Lift) : A->B 연관규칙에서, 임의의 B가 구매되는 경우 대비, A와 관계되어 구매되는 비율 => A와 B의 상관관계 분석 <br/>\
- 향상도 = 1 (독립적 관계) : A,B 구매시 상호 연관 없음 <br/>\
- 향상도 > 1 (양의 상관 관계) : A 구매시 B 구매 예상 <br/>\
- 향상도 < 1 (음의 상관 관계) : A 구매시 B 구매 감소 <br/>\
- Lift =  P(B|A)/P(B) = 신뢰도/P(B) = (P(A∩B)/P(A))/P(B)<br/><br/>\
# 관련 알고리즘 <br/>\
- Apriori Algorithm : 항목집합 줄이기 <br/>\
- DHP Algorithm : Transaction 줄이기 <br/>\
- FP-growth Algorithm : 비교횟수 줄이기 <br/><br/>\
<img src = "./img/연관규칙.png" style = "max-width:100%; height:auto;">\
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

// 플랫폼 경제
'# 정의 : 플랫폼 기반 경제 활동 / 인터넷 기술 / 기업 소비자 연결 <br/>\
- 인터넷 기술의 발전으로 네트워크 상에서 기업과 소비자를 연결하는 디지털 플랫폼을 기반으로 상품 및 서비스의 공급자와 수요자가 거래하는 경제활동',

// RTE 
'# 정의 : 경쟁력 극대화 기업 / 의사결정 속도 높 / 실시간 전달 / 지연 최소화 <br/>\
- Real Time Enterprise <br/>\
- 수행하는 업무를 기업 내/외부를 포함하는 전체적인 관점에서 지속적인 프로세스의 개선 및 정보의 실시간 전달을 통해 업무 지연요소를 최소화하고 의사 결정의 속도를 높여 경쟁력을 극대화한 기업 의미 <br/><br/>\
# 배경 <br/>\
1. 외부환경 <br/>\
- 비즈니스 환경 <br/>\
1) 유발요인 : 불확실성 증대, 니즈의 다양화 <br/>\
2) 요구능력 : 민첩한 대응, 즉시성 <br/>\
- IT 환경 <br/>\
1) 유발요인 : e-Business 확대 <br/>\
2) 요구능력 : Real-Time 뒷받침 시스템 환경 <br/><br/>\
2. 내부환경 <br/>\
1) 경쟁환경 <br/>\
- 유발요인 : Big Blur, 경쟁격화 <br/>\
- 요구능력 : 실시간 적응력, 제무체질 강화 <br/>\
2) 내부환경 <br/>\
- 유발요인 : 경제침체, 뉴노멀 <br/>\
- 요구능력 : 조기감지, 비용절감,생산성 확대 <br/><br/>\
# 구성요소 <br/>\
- Agility : 신속대응 <br/>\
- Visibility : 실시간 모니터링 <br/>\
- Intelligence : 실시간 분석 <br/>\
- Speed : 실시간 실행 <br/><br/>\
# 암기 : ADA <br/><br/>\
<img src = "./img/RTE.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/RTE_1.png" style = "max-width:100%; height:auto;">\
',

// [RTE]- 사이클론 모델
'# 정의 : 종단간 사이클 정의 모델 / 지휘 / 관리 / 운영 <br/>\
- RTE 하부 구조로 LifeCycle 을 줄여 RTE 달성하기 위해 지휘(lead), 관리(Manage), 운영(Operate) 관점에서 기업이 단축해야 할 10개의 종단간 사이클을 정의한 모델<br/><br/>\
# 암기 <br/>\
- 모델 : 자외 시목마자 구주수고 <br/><br/>\
# 구성 <br/>\
- Lead(2) : 자본 및 투자활동, 외부환경변화 기업 경영전략 수립<br/>\
- Manage(4) : 시장위협 대응전략, 목표달성 조직개편, 마케팅~양산화, 자료수집~보고<br/>\
- Operation(4) : 구매~대금, 주문~판매, 수요~자원, 고객수요~서비스<br/><br/>\
* 수요에서 자원배분 고객 수요에 따른 서비스 제공\
',
 
// 기술 수명주기 이론
'# S-Curve 이론 <br/>\
<img src = "./img/SCurve.png" style = "max-width:100%; height:auto;"><br/>\
- 성장, 성숙기, 쇠퇴 <br/><br/>\
# 기술수용주기 이론 (혁선다수지) <br/>\
<img src = "./img/TechnologyAdaption.png" style = "max-width:100%; height:auto;"><br/>\
- 혁신수용자, 선각수용자, 전기다수수용자, 후기다수수용자, 지각수용자 <br/><br/>\
# Gatner\'s HypeCycle <br/>\
<img src = "./img/GatnersHyperCycle.png" style = "max-width:100%; height:auto;"><br/>\
- 기술촉발, 기대, 환멸, 계몽, 생산성 안정 \
',
 
// Chasm 
'# 정의 : 첨단 제품의 기술수용시기를 바탕으로 제품이 확산되는 과정에서 초기시장에서 주류시장으로 넘어가는 지점에 신제품 확산이 실패하거나 일시적인 판매 정체 현상이 일어나는 저항이 발생되는 현상 <br/><br/>\
# 특징 <br/>\
- 기술 수용주기 세분화 : 초기, 중기, 말기 <br/>\
- 소비자 분류 : 혁신, 선각, 전기, 후기, 지각 <br/>\
- 캐즘 극복 전략 : 주류 진입 전략, 완전완비 집중공략, 거점 영역 확장 <br/><br/>\
# Graph <br/>\
<img src = "./img/Chasm.png" style = "max-width:100%; height:auto;">\
',

// Digital Transformation
'# 정의 : 디지털 기업환경 패러다임 <br/>\
- 기업/조직운영과 서비스를 향상시키고, 고객에게 제공하는 핵심 제품이나 서비스 개선부터 시작해 내부 프로세스를 개선 하고 고객과의 관계를 항상 시키는 모든 과정에 디지털 기술이 활용하는 기업환경 패러다임 <br/>\
- 기업이 디지털과 물리적인 요소들을 통합하여 비즈니스 모델을 변화하고, 산업에 새로운 방향을 정립하는 것 <br/><br/>\
# 암기 : 생제비 <br/><br/>\
# 특징 <br/>\
- 디지털 기술 활용 <br/>\
- 내부 프로세스 개선 <br/>\
- 고객 관계 향상 <br/><br/>\
# 변화 <br/>\
- Digitization : 아날로그 정보 -> 디지털 정보 전환 <br/>\
- Digitalization : 음성, 영상, 데이터 등 다른 성질 정보를 종합 처리 <br/>\
- Digital Transformation : 디지털화의 총체적 및 전체적 사회적 효과 <br/><br/>\
# 구성 <br/>\
- 애널리틱스 기술 : NLP, 웹로그 분석 <br/>\
- API <br/>\
- 클라우드 <br/>\
- CIO 역할 <br/>\
- 디지털 요소 : Innovation Accelerators(NG보안, AR/VR로봇) <br/>\
- Third Platform : CBIMS, 모빌리티 <br/><br/>\
# 추진전략 : 비전수립 > 조직정보 및 인재확보 > 거버넌스 체계 구축 > 비즈니스모델 개발 > 혁신 및 R&D 추진 <br/><br/>\
# 유형 (생제비) <br/>\
1. 생산성과 효율성을 중시하는 전환 : 디지털 전환을 통한 기존 공정의 축소와 효율화, 제조업의 리쇼어링(Re-shoring) 현상 등장 배경 <br/>\
2. 제품혁신형 전환 : 로칼 모터스(Local Motors) 스트라티(Strati, 3차원 프린터 자동차), 슈즈 오브 프레이(Shoes of Prey, 온라인 맞춤 신발 제작 기업)<br/>\
3. 비즈니스 모델 전환 : GE Digital Twin, 에어비앤비, 우버 <br/><br/>\
# 전략 : M&A, In-House R&D등 자기주도형 지식획득 방식을 채택 <br/><br/>\
# 저해요인 : 법제도적 요인, 경제사회적 요인 <br/><br/>\
# 사례 <br/>\
1. 항공 <br/>\
- 롤스로이스 항공 엔진 경보 : 엔진에 센서 부착 실시간 정보 수집, 분석, 고장 가능성 예측, 유지보수 비용 절감, 신규 수익원 확보<br/>\
2. 자동차 <br/>\
- 테슬라 : 전기차 중심 라인업 <br/>\
- 구글/우버/애플 : 자율차 적극 진입 <br/>\
3. 식음료 <br/>\
- 스타벅스 : 선불 충전카드 <br/>\
- 인공지능 : 아마존 Echo, 구글 나우, 애플시리 <br/><br/>\
* 사례 : 스마트 팩토리 <br/><br/>\
<img src = "./img/DigitalTrans.png" style = "max-width:100%; hegiht:auto;">\
',

// [경영환경분석]- Horizon Scanning
'# 정의 : 탐지 활동 / 위험요인 / 기회요인 <br/>\
- 다양한 영역의 데이터를 기반으로 미래 문제를 발생시킬 위험 요인과 가능성 있는 기회요인을 사전에 탐지하는 활동 <br/><br/>\
# 암기 : 싱R, 영H, Ei / 안전정보화과기 <br/><br/>\
# 구성 <br/>\
- Data : 수집/생성 <br/>\
- Analysis : 현안해결/미래예측 <br/>\
- Force : 정책반영 <br/><br/>\
# 사례 <br/>\
1. 국외 <br/>\
- 싱가폴 : RAHS(Risk Assesment and Horizon Scanning) : 조류독감 시뮬, 해안 안전 시뮬등 <br/>\
- 영국 : HSP(Horizon Scanning Programme) : 신기술, 신경제, 자원 수요와 공급변화, 청년 세대의 사회 인식 변화, 인구 변화 초점 <br/>\
- EU/iKnow : 전세계 와일드 카드, 워크 시그널 포착 <br/>\
2. 국내 <br/>\
- 국민안전처/국립재난안전연구원 : 스마트 빅보드, Rcanner <br/>\
- 한국정보화진흥원 : 데이터기반 미래전략 수립 <br/>\
- 한국과학기술정보연구원 : 미래 유망 기술 중심의 이슈 탐지 <br/><br/>\
*미래 예측 방법론 종류 <br/>\
- 시나리오 <br/>\
- 추세외삽 : 과거 추세 바탕 미래예측 <br/>\
- Horizon Scanning <br/>\
- SWOT <br/>\
- Decision Tree <br/>\
- Futures Wheel : 브레인 스토밍 <br/>\
',

// [경영환경분석]- Backcasting
'# 정의 : 전략 도출 기법 / 미래 목표 설정 / 현재 시점 초점 <br/>\
- 미래 목표를 설정하고 현재시점과의 차이점을 도출하여 필요한 현재 시점의 문제해결에 초점을 둔 전략 도출 기법 <br/><br/>\
# 단계 (목전현외시실영) <br/>\
- 연구목적설정(목적, 범위, 시나리오 종류/개수 설정) <br/>\
- 전략목표 및 제약조건 설정(목표 계량화) <br/>\
- 현재상황 기술 <br/>\
- 외부변수 설정, 현재 상황 기술 <br/>\
- 시나리오 분석 실시(정량적 모델) <br/>\
- 실행항목 및 시점 결정 <br/>\
- 영향력 분석 (사회, 경제, 환경적 영향 분석 후 설정, 목표와 결과 비교 과정 반복) <br/><br/>\
<img src = "./img/Backcasting_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Backcasting_2.png" style = "max-width:100%; height:auto;">\
',

// BABOK
'# 정의 : 지식 체계 정의 문서 <br/>\
- Business Analysis Body Of Knowledge <br/>\
- Biz업무 원활 진행 위한 업무 기술 모음 지식체계 정의 문서 <br/><br/>\
# 암기 <br/>\
- BA PM <br/>\
- E~C ~ S RA <br/>\
- S R <br/>\
- 비요전라분평 <br/><br/>\
# 구성 <br/>\
- BA Knowledgy Area(6) <br/>\
- Business 분석 업무 수행자 역량(6) <br/>\
- Business 분석 활동 위한 기술(50) <- V2: 6,6 34, 범위, BACCM <- V3만 존재 <br/><br/>\
# 6대 지식영역 관계도 : BA PM(이 말하길...) E~C~ S RA(는데) S(를) R(이라고해?) <br/>\
1. BA Planning And Monitoring : BA 접근 / 거버넌스 / 정보관리 계획, Stakeholder 참여 계획, 비즈니스 분석 성능 향상 확인 <br/>\
2. Elicitation & Collaboration (V2:Elicitation) : 요구추출준비, 행동추출, 추출결과 확인, 비즈니스 분석 정보 의사소통, 이해관계자의 협업 관리 <br/>\
4. Strategy Analysis(V2:Enterprise Analysis) : 현황분석, 미래 상태 정의, 위험평가, 변경 전락 정의 <br/>\
5. Requrements Analysis & Design Definition (V2:Requrements Analysis) : 요구사항 추적/유지/우선순위/변경평가/승인 <br/>\
6. Solution Evaluation (V2:Solution Assessment & Validation) : 솔루션 성능 측정, 성능 측정 분석, 솔루션 한계 평가, 솔루션 가치 증가 액션 추가 <br/>\
3. Requirement Lifecycle Mgmt (V2:Requirements Mgmt and Communication) : 요구사항 모델 지정/확인/유효성평가/아키텍처 정의, 솔루션 옵션 정의 <br/><br/>\
# BACCM(BA핵심 개념 모델) <br/>\
- 이해당사자 : 변경필요/솔루션관계 <br/>\
- 요구 : 문제/기회<br/>\
- 변화 : by요구 <br/>\
- 솔루션 : 요구만족특정방법 <br/>\
- 배경 : 변화둘러싼 상황 <br/>\
- 가치 : 이해관계자가치 <br/><br/>\
# BA Five Perspective(범위) : Agile, BI, Information Technology, Business Architecture, Businesss Process Management <br/><br/>\
# BA 특화 분석기법(15개) <br/>\
- RACI Metrix <br/>\
- Stackholder Map : 이해당사자와 솔루션 관계 묘사 <br/>\
- Variance Analysis : 계획/결과비교 <br/>\
- Baselining : 요구사항추적 <br/>\
- Sighoff : 이해당사자 요구사항 공식적 승인 <br/>\
- Coverage Matirx : 요구사항 추적 <br/>\
- Checklists <br/>\
- Voting : 참가자에 요구사항 배분 <br/>\
- Timingbox / Bugeting : 요구사항 필터링<br/><br/>\
<img src = "./img/BABOK_1.png" style = "max-width:100%; height:auto;">\
',

// BSC
'# 정의 : 성과 관리 다중 분석 <br/>\
- Balance Score Card <br/>\
-  기존 재무 중심의 성과관리 한계를 보완하기 위해 재무, 고객, 내부 프로세스, 학습과 성장 관점을 관리한 성과 관리 다중분석 기법 <br/><br/>\
# 암기 <br/>\
- 재고내학 <br/>\
- 절차 : 비>맵>C>K>설 <br/><br/>\
# 관점 <br/>\
- 재무 : 주주배당이익/현금흐름, EVM, 회전율/ABM, VBM <br/>\
- 고객 : 고객만족, 납기준수/만족도, 유지율/CRM <br/>\
- 내부프로세스 : 품질, 생산효율/신제품출하율, 재고수준/SixSigma <br/>\
- 학습과성장 : 신제품개발/직원만족도, 전략이행정도/지식경영 <br/><br/>\
# 구축 프로세스 (BSC 전략 구체화) : 비전 및 전략 -> 전략맵 -> CSF -> KPI -> KPI 상세설계 <br/><br/>\
# 전략맵 : 전략요소의 인과관계를 재무, 비재무적 관점 따라 그림으로 표현 <br/><br/>\
# 지표 <br/>\
- CSF : 예)시장점유율 <br/>\
- KPI : 선행지표, 예) 고객만족도, 배달시간 <br/>\
- KGI : 후행지표 \
',

// IT-BSC
'# 정의 : 성과 측정 도구 / IT pradox + BSC <br/>\
- IT생산성 paradox를 해결하기 위해 경영 BSC개념을 융합하여 개발한 IT 성과측정도구 <br/><br/>\
# 암기 : 기사운미 <br/><br/>\
# 관점 <br/>\
- 기업공헌도 : ROI, TCO <br/>\
- 사용자 : IT 서비스공급자, 사용자 파트너쉽, 사용자 만족, 고객 만족도, 납기 준수 <br/>\
- 운영프로세스 : 프로세스 성숙도, 문제건수 <br/>\
- 미래 지향 : 전문가 비율, 표준준수 여부\
',

// 코호트분석
'# 정의 : 사용자 그룹으로 나눠서 분석하는 기법 <br/>\
- Cohort : 특정기간 동안 같은 특성을 가진 사용자 집단 <br/>\
- Cohort Analysis : 특정기간 동안 동일한 특성을 가진 사용자 집단을 그룹으로 나눠서 그룹간의 차이를 보기 쉽게 분석하는 방법<br/><br/>\
# 절차 (기분인)<br/>\
1. 기준 수립 <br/>\
- 사용자 분류 기준 수립 <br/>\
- 시계열적 구분, 추천 소스 구분 <br/><br/>\
2. 분석 목표 설정 <br/>\
- 동일한 고객군 변화 확인 <br/>\
- 사용자 탈퇴 원인 확인 <br/><br/>\
3. 인사이트 도출 <br/>\
- 타켓 유저 선택, 방법 도출 <br/>\
- Retention 마케팅 진행, App 개선 <br/><br/>\
* KPC 94회 1교시 5번\
',

// 악마의 강
'# 정의 : 연구단계 머무름 현상 / 아이디어 부재 <br/>\
- 성공위주의 평가 정책과 R&D(연구개발) 단계에서의 아이디어 부재로 기술사업화 과정에서 개발(초기)단계로 넘어가지 못하고 연구단계에 머무르는 현상<br/><br/>\
# 암기 : 마음캐다 <br/><br/>\
# 대응 : 인벤션/아이디어 사이클, 인벤션 캐피탈\
',

// 죽음의 계곡
'# 정의 : 상업화 어려움 현상 <br/>\
- 연구개발에 성공한 기술이 자금 부족으로 3년이 지나도 상업화 하지 못하여 어려움을 겪는 현상(통상 3~7년차)<br/><br/>\
# 원인 : Biz Model 구체화 과정중 자금난, Product 판로 확보의 진입난, CAPEX/OPEX 측면 <br/><br/>\
# 사례 : 김기사 App -> 다음카카오 인수 <br/><br/>\
# 엔젤/사업화 사이클, 엔젤 케피탈, 스타트업 액셀레이터, 클라우드 펀딩 <br/><br/>\
<img src = "./img/DeathValley_1.png" style = "max-width:100%; height:auto;">\
',

// 다윈의 바다
'# 정의 : 경쟁 어려움 현상 <br/>\
- 성공적으로 상업화에 성공하여 출시된 상품이 타사 상품과 치열한 경쟁에 밀려 어려움을 겪는 현상 <br/><br/>\
# 방안 : 벤처 마케팅 사이클, 벤처 캐피탈\
',

// 퍼펙트 스톰
'# 정의 : 개별적인 악재가 한꺼번에 밀려와 손쓸 수 없는 경제 위기',

// 그로스 해킹
'# 정의 : 급격 성장 통합 마케팅 / 서비스 철저 분석 / 창의적 전략 수립 / 기술적 실행 <br/>\
- Growth Hacking<br/>\
- 기업의 서비스를 철저하게 분석하여 창의적인 전략을 수립하고, 기술적으로 그 실행을 뒷받침 하여 급격한 성장을 노리는 통합적인 마케팅 활동<br/><br/>\
# 암기 <br/>\
- 도구(4) : 웹퍼설A <br/>\
- 모델(5) : AARRR <br/><br/>\
# 특징 : 제품/서비스 지향, 성장지향, 가설과 검증 <br/><br/>\
# 단계 <br/>\
- Acquisition : 인지-SEO,PR,캠페인SEM,콘테스트 <br/>\
- Activation : 촉진-UI/UX, A/B 테스트 <br/>\
- Retention : 유지-이메일, 쿠폰, 마일리지 <br/>\
- Referral : 추천-친구추천, 캠페인, CSI, 바이럴 마케팅 <br/>\
- Revenue : 매출-시장분석 <br/><br/>\
# 분석 방법론 <br/>\
- 웹 사이트 분석 : 구글, 애널리틱스, 오즈 <br/>\
- 퍼넬측정 : 키스메트릭, 믹스판넬 <br/>\
- 사용자 설문조사 : 서베이 콩키, 퀼라루 <br/>\
- A/B테스트 : 옵피마즐리, 언바운스 <br/><br/>\
# 사례 : facebook, twitter, hotmail, 드롭박스, 에어비엔비 <br/><br/>\
# 비교 : 넥서스 경영(기업경영전략이 톱니바퀴처럼 맞물려 균형 맞추는 것)\
',

// 라이프 해킹
'# 정의 : 효율적 아이디어, 도구, 기술 / 생활속 개선 <br/>\
- 생활 속에서 놓치고 있거나 미처 깨닫지 못하여 일어날 수 있는 불편한 점을 개선하여, 더 쉽고 효율적인 생활을 할 수 있도록 도와주는 아이디어, 도구, 기술<br/><br/>\
# 사례 <br/>\
1. 국내 : 영화 자동 예매, 스타벅스 사인 오더, 대형마트 가격 추적기 <br/>\
2. 해외 : 다리미와 드라이로 피자 만들기, 브러시를 이용한 사이드 미러\
',

// 시빅 해킹
'# 정의 : 시민 주도 정보 개선 활동 <br/>\
- Biz : 시민들이 신속하고 창의적으로 협업하여 공공의 문제를 해결하고 도시를 더 살기 좋은 곳으로 만들기 위한 운동 <br/>\
- IT : 다양한 시민들이 모여 디지털 기술을 활용해 정부가 해결하지 못하는 공공의 문제를 풀어내자는 사회운동 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/CivicHackingOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 참여주체 <br/>\
- 개발자 : 시민 참여 도구 개발 <br/>\
- 기획자 : 아이디어 구상, 의사소통 <br/>\
- 디자이너 : 이해관점 UI/UX <br/>\
- 일반 시민 : 참여, 피드백, 집단지성, 정보확상 <br/><br/>\
# 기술요소 : 공공데이터, Open API, OpenSource<br/><br/>\
# 사례 <br/>\
1. 국내 <br/>\
- 코드나무 : 공공데이터 이용한 해커톤 대회, 공공데이터 시각화 <br/>\
- 코드포 서울 : 시민 자발적 문제 해결 (IT) <br/><br/>\
2. 해외 <br/>\
- 소화전 입양 : 소화전 표시, 시민 입양 관리, 화재 즉각 대응 <br/><br/>\
* 아이리포 24회 1교시 2번\
',

// 메이커 운동
'# 정의 : 자작 취미 산업영역 확장 / 공유, 발전 흐름 <br/>\
- 스스로 필요한 것을 만드는 사람들인 메이커가 기존의 자작 취미생활과 달리 컴퓨터, 인터넷, 디지털 생산도구를 이용해서 산업 영역까지 아우르는 특징을 지닌, 만드는 법을 공유하고 발전시키는 흐름<br/><br/>\
# Keyword : 3D 프린터, OSH, 커뮤니티, 클라우드 공장, 클라우드 펀딩, 벤처액셀레러이터 <br/><br/>\
# 메이커 운동선언(라이프스타일에 미치는 영향) : 만나주변배후도놀참 <br/>\
- 만들라 <br/>\
- 나누라/주라 <br/>\
- 배우라/변화하라 <br/>\
- 도구를 갖추라 <br/>\
- 가지고 놀라 <br/>\
- 참여하라 <br/>\
- 후원하라 <br/><br/>\
# 사례 <br/>\
- 미국 : 해커스 페이스 <br/>\
- 독일 : 인더스트리 4.0 / 3D 프린터 <br/>\
- 중국 : 팹랩, 해커스페이스 <br/>\
- 한국 : 창조경제혁신센터 \
',

// 메이거 스페이스
'# 정의 : 즉석 작업 공간 <br/>\
- 3D 모델 파일과 다양한 재료들로 소비자가 원하는 사물을 즉석에서 만들어(printing)낼 수 있는 작업 공간',

// 인터넷 거버넌스
'# 정의 <br/>\
- 기술적(Descriptive) : 인터넷 집단적 규칙, 절차, 프로그램 <br/>\
-> 인터넷 인프라, 교류, 내용에 관한 사회적 행위자들의 기대, 관행, 상호작용이 이루어 지도록 해주는 집단적 규칙, 절차 및 프로그램 <br/>\
- 처방적(Prescriptive) : 대표성, 균형, 체제 <br/>\
-> 다자주의적(multilateral)이며, 투명하고 민주적인 제도로서 각국 정부, 민간 영역과 시민사회, 국제기구를 포괄하는 대표성과 균형을 갖추도록 하는 체제 <br/>\
- 인터넷 거버넌스는 기술적 차원의 발전에 힘입어 진행된 복잡한 관리문제를 해결하기 위해 지속적으로 논의 되고 있는 글로벌 차원의 정치적 관리 매커니즘 <br/><br/>\
# 암기 <br/>\
- 다정 <br/>\
- ICANN <br/>\
- 루트서버, TLD위임 결정권, IP주소 할당, 관리 주체 <br/><br/>\
# 핵심 기능 <br/>\
- 기술표준 : ex)NW프로토콜, SW개발, 데이터 포맷 <br/>\
- 자원 배분 및 할당 : ex)도메인 네임,IP주소 <br/>\
- 공공정책 : 인터넷 관련 정책 형성, 실행, 갈등해결 <br/><br/>\
# 모형 <br/>\
- 다중이해 당사자 모형(Multi-Stakeholder Model) : 영미계 주주중심주의(shareholderism)에 대항하여 새롭게 등장한 지배구조 모형, 정책 결정 구조의 개방 <br/>\
',

// 기능성 게임
'# 정의 : 순기능 확장 게임 <br/>\
- 기존의 게임이 가지고 있던 단순한 재미 요소 이외에, 교육, 학습, 훈련, 치료 등의 특별한 목적을 접목시켜 게임이 가지는 순기능을 더욱 확장시킨 형태의 게임 (TTA)<br/><br/>\
# 특징 : 재미, 효과, 과정중시 <br/><br/>\
# 적용 : 의료, 스포츠(Wii), 교육(에듀게임, 한매타자), 교통(안전), 환경보호, 군사(워게임)\
',
 
// ISO 26000
'# 정의 : 조직의 사회적 책임 국제 표준 <br/>\
- 조직의 지배구조, 인권, 노동, 환경, 공정거래 관행, 소비자이슈, 지역사회 발전 등 조직의 사회적 책임 (SR:Social Responsibility)을 규정하는 국제표준(의무X 지침 제공 목적, 경영시스템 표준X)<br/><br/>\
# 암기 <br/>\
- 핵심이슈 : 조인노환공소사<br/><br/>\
# 제공대상 : 기업 포함 모든 조직 <br/><br/>\
# 7대 핵심이슈 <br/>\
- 조직 지배구조<br/>\
- 인권<br/>\
- 노동<br/>\
- 환경<br/>\
- 공정한 운영관행 : 뇌물X, 공정경쟁<br/>\
- 소비자 : 소비자 건강보호<br/>\
- 사회개발 : 조직중심 상호의존, 총제적 접근<br/><br/>\
# 활용 국내 정책 <br/>\
- 조 : 순환출자 금지, 재벌 지배구조개선<br/>\
- 인 : 민간인 불법사찰, 외국인 노동자 인권<br/>\
- 노 : 최저 임금제 개선, 비정규직 문제 해결<br/>\
- 환 : 4대강 문제, 기후변화 대응<br/>\
- 공 : 부패방지, 김영란법<br/>\
- 소 : 소비자권익보호, 집단소송 <br/>\
- 사 : 지역균형발전, 지자체 자치권 강화<br/><br/>\
# 프로세스 <br/>\
- 사회적 책임 인식<br/>\
- 이해관계자의 식별 및 확인 <br/>\
- 핵심주제 및 이슈분석<br/>\
- 우선순위와 실행전략 수립<br/>\
- 실행<br/>\
- 의사소통<br/>\
- 검증,개선\
',

// CSR
'# 정의 : 기업의 사회적 책임<br/>\
- Corporate Social Responsibility;<br/>\
- 사회의 목적과 가치관에 부합하는 정책을 추구하고 결정을 내리며 행동을 취해야하는 기업의 책임 (ISO-26000)<br/><br/>\
# 암기 <br/>\
- 구성 : 당자-경법윤자 <br/><br/>\
# 구성 <br/>\
- 1단계(경제적 책임) : 당위적 책임, 이윤 극대화 <br/>\
- 2단계(법적 책임) : 법/규제 준수<br/>\
- 3단계(윤리적 책임(환경,인종)) : 자발적 책임 <br/>\
- 4단계(자선적 책임) : 지역사회 공헌<br/><br/>\
# CSR 진화(1.0>2.0>3.0) <br/>\
- Biz 입장 : 선택, 회피, 무시 > 필수, 의무, 관리 > 전략, 활용, 경영 <br/>\
- 사회적 목표/가치 : 지속가능 이슈 무시한 개발과 성장 > 경제성장 통한 지속 가능 이슈 해결 > 지속가능 이슈 해결 과정 통한 경제 성장<br/>\
- 개인적 목표/가치 : 생존, 위생욕구, 물질적 풍요 > 소속, 존경욕구, 정직적 풍요 > 자아실현 욕구, 영적 충만감 \
',

// [IT-컴플라이언스]- ISO 31000
'# 정의 : 리스크 관리 국제 표준 <br/>\
- 위험관리 원칙과 프로세스 및 위험평가기법에 관한 리스크 관리 국제 표준 <br/>\
- 2009년도 발행(제정)되었으며, 2018년도에 개정된 모든 형태의 조직에 적용하기 위한 범용적 특징 <br/><br/>\
# 구성 (PFP)<br/>\
<img src = "./img/ISO31000_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# Principles (Caluse 4) (ISCIDBHC)<br/><br/>\
<img src = "./img/ISO31000_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Integrated : 조직이 모든 활동에서 위험관리를 통합 <br/>\
- Structred and Comprehensive :  구조화, 포괄적인 접근방식 기반 구축<br/>\
- Customized : 조직의 목표와 연계, 조정 <br/>\
- Inclusive : 이해관계자 포함, 지식,관점 및 인식 파악 하기 위한 조치 <br/>\
- Dynamic : 내/외부 변화 감지 및 대응 <br/>\
- Best available information : 현재, 미래 반영 설명 <br/>\
- Human and Cultural facts : 인간의 행동과 문화, 모든 측면 고려 <br/>\
- Continual Improvement : 지속적 개선 <br/><br/>\
# Framework (Caluse 5)<br/><br/>\
<img src = "./img/ISO31000_3.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
1. Integration : 리스크 관리 통합은 조직 구조와 상황에 대한 이해에 의존 <br/><br/>\
2. Design : 위험관리를 위한 프레임 워크를 설계할 때, 조직은 외부 및 내부 컨텍스트를 조사하고 이해 <br/>\
- 외부적 : 경제, 환경, 동향, 인식, 가치, 요구, 기대, 계약관계, 네트워크와 종속성, 복잡성 <br/>\
- 내부적 : 비전, 사명 및 가치, 거버넌스, 역할 및 책임, 조직의 문화, 지침, 모델, 데이터, 정보 시스템 및 정보 흐름, 상호 연결 <br/><br/>\
3. Implementation : 위험 관리 프레임워크 구현사항 기술 <br/>\
1) 시간과 자원 포함한 적절한 계획 개발 <br/>\
2) 조직 저체에서 언제, 어떻게 다양한 유형의 의사결정 내려졌는지 식별 <br/>\
3) 필요한 경우 적용가능한 의사결정 프로세스 수정 <br/>\
4) 위험관리를 위한 조직의 준비를 명확하게 이해, 실천 <br/><br/>\
4. Evaluation <br/>\
- 목적, 이행계획, 지표 및 예상되는 행동에 대비하여 주기적으로 측정 <br/>\
- 조직의 목표 달성을 지원하기에 적합 여부 결정 <br/><br/>\
5. Imporvement <br/>\
- 지속적 모니터링, 외부 및 내부 변경사항 해결 -> 가치 향상 <br/>\
- 위험관리 프레임 워크의 적합성, 적절성 및 효과성과 위험관리 프로세스가 통합되는 방식으로 개선 <br/><br/>\
# Process (Caluse 6) <br/>\
<img src = "./img/ISO31000_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Communication and Consulation : 이해목적, 개인정보보호 권리 고려하여 정보교환 <br/>\
- Scope, Context and Criteria : 효과적인 위험평가 및 적절한 위험 처리 가능 목적 <br/>\
- Risk assessment : 식별, 분석, 평가의 전체 프로세스 <br/>\
- Risk treatment : 공식화 및 선택, 처리계획 및 구현, 효과 평가, 남은 위험 수용가능 결정 <br/>\
- Monitoring and review : 설계, 구현 및 결과의 품질과 효과를 보장하고 향상 <br/>\
- Recording and reporting : 조직 전체의 위험 관리 활동 및 결과 전달\
',

// BCP 
'# 정의 : 중단 대처 절차 및 방법 <br/>\
- Business Continuity Planning <br/>\
- ISO 22301 <br/>\
- 주요 비즈니스 기능의 중단을 계획된 목표 수준이나 필수불가결한 변경 수준으로 제한하면서 조직이 상황에 대처할 수 있는 절차 및 방법 <br/><br/>\
# 암기 <br/>\
- 프로세스 (5) : RA>BIA>RS>PD>PT <br/>\
- ISO 22301 <br/><br/>\
# 구성 (DBBBP)<br/>\
- DR(Disaster Recovery) : 조직별 비상사태 대비 복구 계획 <br/>\
- BR(Business Recovery) : 기업의 연속성을 위한 중요업무 등을 복구하기 위한 개념 <br/>\
- BIA(Business Impact Analysis) : 장애 가정 손실 평가 <br/>\
- Backup : 데이터 보관 정합성 유지 방법 <br/>\
- Planning  : 계획서 작성 통한 혼선 방지<br/><br/>\
# 구축 절차 <br/>\
- BCP 착수 : 현행 분석 <br/>\
- BIA : 업무 영향도 분석 <br/>\
- BCP 수행 : DR Center 운영 <br/>\
- 교육 : 담당자 교육 <br/>\
- 운영 : DR Center 운영 <br/><br/>\
8. 운영 <br/>\
- DR Center 운영 <br/><br/>\
# FW <br/>\
- input : 업무연속성 전략, 위험관리 정책 <br/>\
- BCP : 비상계획, 위험관리계획, 업무복구계획 <br/>\
- Output : 업무재개, 재해복구 <br/><br/>\
# 표준 : ISO 22301 <br/><br/>\
<img src = "./img/BCP_0.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/BCP.png" style = "max-width: 100%; height: auto;"><br/><br/>\
',

// [BCP]- BIA
'# 정의 : BCP 구축 핵심 절차 / 장애, 재해 가정 / <br/>\
- Business Impact Analysis <br/>\
- 장애나 재해로 인해 운영상의 주요 손실을 입을 것을 가정하여 시간흐름에 따른 영향도 및 손실 평가를 조사하여 BCP를 구축하기 위한 핵심 절차(TTA) <br/>\
- 주요업무 프로세스의 식별하여 재해유형 식별 및 재해 발생 가능성과 업무 중단의 지속시간, 업무 프로세스별 중요도 평가 <br/><br/>\
# 암기 : 대손복필 <br/><br/>\
# 절차 <br/>\
1. 대상 업무 선정 : 현황자료 분석 > 대상 업무 선정 <br/>\
2. 손실정도(정성/정량)산정 : 설문조사/ 인터뷰 > 결과분석(피해 및 대응 정도) > 업무별 손실도 평가 <br/>\
3. 복구 우선순위 도출 : RTO 평가, RPO 설정<br/>\
- 업무별 손실산정순위 : 업무연관도 분석 > 최종 복구 우선순위 > 핵심 업무 및 복구시간 도출 <br/>\
4. 필요 자원 분석 : 필요자원 분류 > 자원별 소요량 파악 <br/><br/>\
# 도출지표 : RSO, RPO, RTO, RCO, BCO, MTD <br/><br/>\
<img src = "./img/BIA_2.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/BIA.png" style = "max-width:100%; height:auto;">\
',

// [BCP]- ISO22301-BCMS 
'# 정의 : 재난 상황 업무 연속성 관리 체계 <br/>\
- Business Continuity Management System <br/>\
- 기업의 비즈니스를 보호할 수 있도록 경영시스템 요구사항을 명시/역할,책임,교육을 통한 기업 경영의 연속성을 유지할 수 있는 경영 국제인증 <br/><br/>\
# 주요 내용 (조리계지운성개) <br/>\
- 조직의 상황 : BCM 관리 상황<br/>\
- 리더십 : 경영진 방침 <br/>\
- 계획수립 : 업무 연속성 목적 제시<br/>\
- 지원 : 정보의 문서화<br/>\
- 운영 : 운영계획 수립 및 통제 관리 <br/>\
- 성과평가 : 감시,측정,분석<br/>\
- 개선 : 부적합 시정조치, 개선 <br/>\
<img src = "./img/BCMS_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/BCMS_2.png" style = "max-width:100%; height:auto;">\
',
 
// DRS
'# 정의 : 업무 연속성을 유지할 수 있는 체계 <br/>\
- Disaster Recovery System <br/>\
- 정보시스템에 대한 비상대비체계 유지와 업무 조직별 비상사태에 대비한 복구계획 수립을 통한 업무 연속성을 유지할 수 있는 체제 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/DRS.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
- HA : Clustering or Stand-By <br/>\
- FT : Dual System <br/>\
- IP-SAN : SAN Traffic 을 IP Packet에 실어 전송 <br/>\
- DWDM (Dense Wavelength Division Multiplexing) : 고밀도 파장 분할 다중화 \
',

// DRP
'# 정의 : 복구 업무 영향 최소화 계획 <br/>\
- Disaster Recovery Planning <br/>\
- 정보기술서비스기반에 대해 재해가 발생하는 경우를 대비하여, 이를 빠른 복구를 통해 업무에 대한 영향을 최소화 하기 위한 제반 계획<br/><br/>\
# 암기 <br/>\
- 구성 : 문복훈 <br/>\
- 절차 : 판단/선포 > 통보 > Takeover > DR센터 가동 > 복구 > 검증 > 완료보고<br/><br/>\
# 구성 <br/>\
- DRS문서 : DRS구성도, 운영절차서 <br/>\
- 복구 계획서 : 시스템 복구 계획서, 업무복계, 비상연락체계 <br/>\
- 훈련 계획서 : 복구이동절차, 복구시나리오, 평가 및 보완사항 <br/><br/>\
# DRP 기반 복구 절차 : 재해판단 -> 재해선포 -> 재해복구 담당자 통보(DRP 참조) -> DB Script(take over, DRP 참조) -> 주센터/DR센터 이동(업무유관자(벤더포함)연락) -> DR센터 가동(DB restart/Domain 복구) -> 업무별 복구절차 수행(시스템, DB/File, NW 복구 및 점검) -> DR 센터 검증(복구 장애시 재점검) -> 재해복구 완료보고 \
',

// BPR
'# 정의 : 예외 및 기회 발생 알림 제공 솔루션 <br/>\
- Business Process Reengineering <br/>\
- 다양한 기업의 비지니스 활동으로부터 발생하는 이벤트를 파악하고, 이벤트를 기반으로 관련 데이터 수집하여 KPI와 같은 사용자가 원하는 정보를 실시간으로 제공되며, 예외 및 기회 발생에 대한 알림을 제공하는 솔루션 <br/><br/>\
# 암기 <br/>\
- 구성요소(3) : RRB <br/>\
- 기술(5) : 통BDB네 <br/><br/>\
# 구성요소 <br/>\
- Rule Engine : Rules, ActionMsg <br/>\
- Reporting & Analysis Tool : Biz Context, Dashboard Portal <br/>\
- BAM Server : Real Time Event Store, Operating Process <br/><br/>\
# 기술 <br/>\
- 통합(3) : EAI, B2Bi, eAI <br/>\
- BI(2) : Reporting Tool, Analysis Tool <br/>\
- DW(2) : OLAP, DataMining <br/>\
- BPM(3) : EAI, SOA, DW <br/>\
- 네트워크 : NSM\
',

// PI
'# 정의 : 전사차원 혁신적 개선 재설계 활동 / 시간, 비용 최소화 / 서비스 향상 <br/>\
- Process Innovation <br/>\
- 전사차원의 역량 강화를 위해 현재의 프로세스를 혁신적으로 개선 재설계 하여 시간, 비용은 최소화 하고 기업서비스를 향상시키는 활동<br/><br/>\
# 암기<br/>\
- 구성(4) : FPAD <br/><br/>\
# Keyword : 경영혁신, 고객지향, 기업의 가치, 표준화, Top-Down / Bottom-up, 최고 경영자 레벨, 3~5년, 단계별 <br/><br/>\
# 구성 : Function, Process, Application, Data Global Best Practice 내재된 Package Solution 중심 <br/><br/>\
* BPR과 차이점 : 통폐합 불가\
',

// TOC
'# 정의 : 목적 달성 저해 제약조건 찾고, 통제 / 전체 최적화 / 의사결정 지원 경영과학 이론 <br/>\
- Theory Of Constraints <br/>\
- 엘릿 골드렛 박사가 개발한 목적(Goal)달성을 방해하는 제약 사항을 관리하여, 시스템이 목적을 달성할 수 있도록 하는 경영혁신 기법<br/>\
- 기업 전략을 방해하는 제약사항을 발견하여 이를 제거하기 위한 기법으로 시스템의 목적 달성을 저해하는 제약조건(병목)을 찾아내 극복하기 위한 시스템 개선방법<br/><br/>\
# 특징 <br/>\
- 전체 최적화 <br/>\
- 제약사항 고려 <br/>\
- 집중개선 <br/><br/>\
# 절차 <br/>\
1. 요인 발견 <br/>\
2. 방법 모색 <br/>\
3. 결정 종속 <br/>\
4. 요인 향상 <br/>\
5. 원복 <br/><br/>\
# 구성 <br/>\
- 물리적 제약 : DBR <br/>\
- 정책적 제약 : TOC Thinking Process <br/>\
- 프로젝트 관리 : Critical Chain <br/>\
- 회계 관리 : Throughput Accounting <br/><br/>\
* 119회 관리 1교시 3번\
',

// Open Shift
'# 정의 : Readhat에서public으로 서비스 되는 PaaS 솔루션 <br/><br/>\
# 암기<br/>\
- 구성 : 브노기카 <br/><br/>\
# 아키텍처 : 2개의 주요 컴포넌트 (Broker, Node(Gear(Catridge)) <br/><br/>\
# 소스저장 구조 : 다수의 소스 저장 구조 <br/><br/>\
# PaaS 설치 ; 도커통한 설치, IaaS 환경 선택적 <br/><br/>\
# App 설치 : 소스코드 형태의 저장 및 배포 <br/><br/>\
# 로드 밸런싱 : 서비스 (HA Proxy)통한 로드밸런싱 <br/><br/>\
# 멀티태넌시 : Node단위 멀티태넌시 <br/><br/>\
# 확장성 : Catridge 통한 서비스 확장 <br/><br/>\
# 라이선스 : Apache 2.0 <br/><br/>\
<img src = "./img/OpenShift_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/OpenShift_2.png" style = "max-width:100%; height:auto;">\
',

// D-Commerce
'# 정의 : 커머스 시장의 새로운 트랜드 / 빅데이터 분석 / 맞춤형 상품 제공, 구매 유도<br/>\
- 빅데이터와 커머스의 만남, 큐레이션 커머스 시대 도래 <br/>\
- 빅데이터 분석을 통한 맞춤형 상품 제공 및 구매를 유도하는 커머스 시장의 새로운 트랜드 <br/>\
- 공공 데이터 및 고객들의 통신, 금융, 미디어 등을 통한 데이터를 활용해 상품과 소비자를 연결해주는 일종의 큐레이션 서비스<br/><br/>\
# 진화 <br/>\
- 인터넷 쇼핑몰 출현 (1996) <br/>\
- 인터넷 쇼핑몰 폭발적 성장 (2000) <br/>\
- 모바일 쇼핑 시장 주도 (2010) <br/>\
- 데이터 커머스 등장 (2016) <br/><br/>\
# 주요 사업자 및 경쟁 현황 <br/>\
- 통신사 : 쇼닥, RecoPick<br/>\
- 포털 : yap <br/>\
- 커머스 업체간 : tmon, auction <br/>\
- 해외 커머스 업체 : amazon, rakuten <br/><br/>\
# 사례 <br/>\
- 큐레이션 커머스의 진화 : 빅데이터 분석을 통한 맞춤형 쇼핑몰 스티치 픽스(Stitch Fix), 일본 최대 화장품 정보 사이트 Hapicana <br/>\
- 빅데이터 활용한 위치 기반 서비스 : 알리바바 올해 광군제 자사 쇼핑몰 사이트 티몰의 고양이 캐릭터 천묘를 사냥하는 위치기반 AR 게임 서비스 <br/>\
- 커머스 시장의 새로운 트랜드, 스마트 렌탈에서의 빅데이터 활용 : 여성 의류렌탈 서비스 Rent the Runway <br/><br/>\
<img src = "./img/DCommerce_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DCommerce_2.png" style = "max-width:100%; height:auto;">\
',

// 빅블러 현상
'# 정의 : 경계 소멸 현상<br/>\
- Big Blur <br/>\
- 빠른 변화로 인해 기존에 존재하던 것들의 경계가 모호하게 되는 현상<br/><br/>\
# 등장배경 : IoT, 핀테크, AI, 드론 등 혁신적 기술 등장으로 블러를 넘어 빅블러 현상 발생 (인구 고령화, 경기 침체민 저성장 문제, 다국화 및 개인화 사회, 초연결 사회 <br/><br/>\
<img src = "./img/BigBlur.png" style = "max-width:100%; height:auto;">\
',

// 옴니채널
'# 정의 : 다중 유기적 결합 일관 경험 제공 서비스 <br/>\
- 온라인, 오프라인, 모바일등의 다양한 경로를 넘나들며 상품을 검색하고 구매할 수 있도록 여러 개(Multi)의 쇼핑채널을 소비자 중심의 전체(Omni) 관점에서 빈틈 없이 유기적으로 결합해 일관된 경험을 제공 서비스<br/><br/>\
- Anytime, Anywhere, Anydevices <br/><br/>\
# 종류 : 쇼루밍, 역쇼루밍, 모루밍 <br/><br/>\
# 유통 채널 : 싱글, 멀티, 크로스, 옴니 <br/><br/>\
# 적용 기술 <br/>\
- 빅데이터 : 온라인, SNS 사이 빅데이터 분석 / 월마트의 폴라리스 자체 검색엔진 개발 <br/>\
- 옴니페이 : 하나의 플랫폼에 다양한 간편 결제 방식 제공 / 삼성페이, 롯데 옴니페이, 카카오페이 <br/>\
- 비콘 : 블루투스 기반 최대 100m 거리 인식 가능, 실내 위치 파악 / 쇼핑정보, 쿠폰 전송 <br/>\
',

// [옴니채널]- 쇼루밍
'# 정의 : 구매 방식 / 매장 보고 / 온라인 상품 <br/>\
- 오프라인 매장에서 상품을 보고, 온라인 가격 비교로 최저가 상품 구매<br/><br/>\
# 암기 : 쇼-온 <br/><br/>\
# 사례 : 모바일스토어 (오프라인 -> 온라인 : 엘롯데)\
',
  
// [옴니채널]- 역쇼루밍
'# 정의 : 구매 방식 / 온라인 보고 / 매장 구매 <br/>\
- 온라인에서 제품 정보와 가격 비교 후, 좋은 혜택의 오프라인 매장에서 직접 구매<br/><br/>\
# 암기 : 역-오 <br/><br/>\
# 사례 : 스마트픽 (온라인 쇼핑, 오프라인 인수 : 교보문고, 롯데닷컴)\
',

// [옴니채널]- 모루밍 
'# 정의 : 구매 방식 / 오프라인 보고 / 모바일 구매 <br/>\
- 오프라인 매장에서 제품을 살피고, 모바일로 구매',

// 오프쇼어링
'# 정의 : 타국 경영 기법 / 원가 절감 <br/>\
- 원가 절감등을 위해 IT등 서비스 분야의 인력을 다른 나라에서 고용하는 경영기법 <br/><br/>\
# 유형 : Single, Multi, Distributed <br/><br/>\
<img src = "./img/OffShoring_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/OffShoring_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/OffShoring_3.png" style = "max-width:100%; height:auto;">\
',

// 리쇼어링
'# 정의 : 유턴 기업 정책 <br/>\
- 비용 등을 이유로 해외에 나간 자국 기업이 다시 국내로 돌아오는 현상 및 정책<br/><br/>\
# 확산배경 : 제조업의 서비스화, 인건비 상승, 물류 및 Time To Market 경쟁력 강화, 원재료/에너지 비용 변화(Shale Gas), 가치사슬간 협력 통한 혁신 역량 강화<br/>\
# 리쇼어링 동인(Motive) <br/>\
<img src = "./img/Reshoring_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 리쇼어링 유형 <br/>\
- 해외 인소싱 -> 국내 인소싱 : 해외투자 회수, 국내투자 수반필수 <br/>\
- 해외 인소싱 -> 국내 아웃소싱 : 해외투자 회수필수 <br/>\
- 해외 아웃소싱 -> 국내 인소싱 : 국내투자 수반필수 <br/>\
- 해외 아웃소싱 -> 국내 아웃소싱 : 투자변경 없음 <br/><br/>\
# 리쇼어링 오프쇼어링 비교 <br/>\
<img src = "./img/ReshoringOffshoring.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 1교시 12 \
',

// UX 모델링
'# 정의 : 사용자 경험 중심 모델 개발, 분석 과정 (니즈,태도,동기,행동)<br/>\
- 사용자가 제품, 서비스 혹은 시스템을 직/간접적으로 이용하면서 느끼는 총체적 경험을 상호 교감적인 모델로 개발하고 분석하는 과정 <br/><br/>\
# 암기 <br/>\
1. 유형 <br/>\
- Persona : 동일경험 가상인물 <br/>\
- Journey Map : 변화 시각화 <br/>\
- Affinity Diagram : 리서치 수합, 가치 찾기 <br/>\
- Elito Method : Needs 파악, 해결책 고민 <br/><br/>\
# 기법 유형 <br/>\
<img src = "./img/UX_Modeling.png" style = "max-width:100%; height:auto;"><br/>\
- Persona : 동일 경험 사용자 가상인물 정의 <br/>\
-> 경험, 행위변수 공유, 형태 파악 <br/><br/>\
- Journey Map : 개별 경험 변화 시각화 작업 <br/>\
-> 경험의 시간흐름, 전체흐름 파악 <br/><br/>\
- Affinity Diagram : 리서치 결과 Bottom Up, 가치 찾는 작업 <br/>\
-> 리서치결과 그룹핑 <br/><br/>\
- Elito Method : 사용자 Needs 파악, 해결책 고민 <br/>\
-> Key Findings <br/><br/>\
# 적용 방안 <br/>\
- 전환 : 사용자가 예상한 순서에 따라 기능의 순서가 배열 <br/>\
- 확장 : 현재에도 존재하긴 하지만 충족하지 못한 경우 <br/>\
- 감성적 충족 : 감성적 부족 개선 <br/>\
- 숨겨진 니즈 : 사용자도 모르는 니즈 발굴 <br/><br/>\
* ILIFO 24회 1교시 1번\
',

// 페르소나(Persona) 
'# 정의 : 가상 인물 / 제품 서비스 사용 <br/>\
- 어떤 제품이나 서비스를 사용할만한 목표인구 집단에 있는 다양한 사용자 유형들을 대표하는 가상의 인물<br/><br/>\
# 특징 : 실무중심 방법론, 실제 데이터 기반, SW개발과 UX 분야 활용도 증가, 가상의 인물 묘사, 실제 사용자 특성, 현실적 인물 적용, 사용자 요구 확인 <br/>\
- 추상적 문제의 함정을 피하려다 구체적 문제의 항점에 빠질 수 있음 <br/><br/>\
# 절차 <br/>\
- 가상화 : 이름,나이,성별,문제점,목적,사진 <br/>\
- 리서치 <br/>\
- 실체화 <br/>\
- 다양한 요구사항 <br/>\
- 재구성 <br/><br/>\
# 타 사용자 요구사항 분석 방법 비교 <br/>\
1. User Survey <br/>\
- 장점 : 통계적 분석 가능, 대규모 분석 용이 <br/>\
- 단점 : Follow up 어려움, 깊이 있는 의견 받기 어려움 <br/><br/>\
2. Focus Group <br/>\
- 장점 : 광범위 사용자 관점 대한 빠른 분석 가능 <br/>\
- 단점 : 모집단 선택 문제, 모집단 의존적 <br/><br/>\
3. 인터뷰 <br/>\
- 장점 : 빠른 수렴 <br/>\
- 단점 : 요구사항 결함 및 합의 과정 필요 <br/><br/>\
4. 페르소나 <br/>\
- 장점 : 상황 기반으로 효과적 도출 가능 <br/>\
- 단점 : 사용자 모집단을 지나치게 단순화 시킬 수 있음 <br/><br/>\
# Futuer Workshop <br/>\
- 장점 : 창조적 생각 도출 가능 <br/>\
- 단점 : 실제 요구사항보다 확대 해석 될 수 있음 <br/><br/>\
<img src = "./img/Persona.png" style = "max-width:100%; height:auto;">\
',

// SCM
'# 정의 : 공급망 관리 시스템 <br/>\
- Supply Chain Management <br/>\
- 원자재 공급업체, 제조업체, 도매상, 소매상에 연결되는 자원과 정보를 원활하고 경쟁력 있는 흐름이 되도록 보장하는 공급망 관리 시스템 <br/><br/>\
# 암기 : 구성(3) IPE <br/><br/>\
# 구성요소 <br/>\
- SCP(Supply Chain Planning) : 의사결정, 계획 업무 <br/>\
-> 제조계획, 수요계획, 유통계획, 운송계획 <br/>\
- SCE(Supply Chain Execution) : 실제 공급망 행위 <br/>\
-> 주문관리, 생산관리, 유통관리, 역물류관리 <br/>\
- SCI(Supply Chain Integration) : Planning, Execution 사이 Gap 통합 <br/>\
-> 모니터링, 성과측정, 프로세스 개선 <br/><br/>\
# 요소기술 <br/>\
- ERP <br/>\
- EC : 전자상거래 <br/>\
- DW <br/>\
- Data Minning <br/>\
- EDI(Electric Data Interface) <br/>\
- ABC(Activity Based Cost) <br/>\
- EFT(find Trasnfer) : 금융기관과의 청구 자금 정보 전자 교환<br/>\
- Barcode / RFID \
',

// [SCM]- 채찍 효과 
'# 정의 : 공급업체 과잉,과소 생산 현상 / 공급망 수요 정보 왜곡<br/>\
- Bullwhip Effect <br/>\
- 공급망상에서 시장의 수요 정보가 유통업체를 거쳐 공급업체로 움직이면서 왜곡이 발생하여 공급업체들이 과잉 또는 과소 생산하는 현상<br/><br/>\
# 암기 <br/>\
- 원인 : 수주가공 <br/><br/>\
# 원인 <br/>\
- 수요 불일치 <br/>\
- 주문 시차와 수령 차이 <br/>\
- 가격 변동 예측 오류 <br/>\
- 공급 부족과 할당 <br/><br/>\
# 방안 : CPFR \
',

// [SCM]- CPFR
'# 정의 : 파트너 협력 상품 보증 비즈니스 실행과정 <br/>\
- Collaborative Planning Forecasting & Replenishment <br/>\
- Supply Chain 상에서 거래 파트너간 상호협력을 통해 계획을 세우고, 예측을 통해 상품을 보증하는 비즈니스 실행과정 <br/><br/>\
# 암기 : 유형-파PE <br/><br/>\
# 특징 <br/>\
- 파트너간 신뢰기반 <br/>\
- 향상된 비즈니스 plan 작성 <br/>\
- Forecasting  정확성 향상 <br/>\
- 적시생산 적시공급 <br/>\
- 재고감소 <br/><br/>\
# 유형 : 파PE <br/>\
- 거래 파트너 Hub형 : Retailer가 생산 계획을 받아 Sync / WallMart <br/>\
- P2P형 : 생산자, Retailer 양쪽 중심 / 3PL <br/>\
- 거래 Exchange형 : 제3자의 커뮤니티 사이트 이용 / e-market Place <br/>\<br/>\
',
  
// 발주 프로세스
'# 정의 : 발주 위한 활동 / 준비, 계약, 구축, 인수, 종료<br/>\
- 준비단계부터 계약, 구축과 인수 및 종료까지 이어지는 전체적인 프로세스 시스템 및 SW, 서비스 발주 위한 활동 <br/><br/>\
# 암기 <br/>\
- 프로세스 5 : 발제계공인 <br/>\
- 평가항목 5 : 계개관지전 <br/>\
- 3446 : 경이전 기성방환 경조품방 일시교유기비<br/><br/>\
# 프로세스 5 : 발주 > 제안 요청서 준비 > 계약 준비 및 변경 > 공급자 모니터링 > 인수 및 종료 <br/><br/>\
# 평가항목 5 <br/>\
- 개발계획 : 유사분야, 개발경험, 개발대상 산업의 이해도, 개발전략 <br/>\
- 개발 : 기능, 성능, 개발방법론, 개발환경 <br/>\
- 관리 : 경영상태, 사업수행조직, 품질보증방안, 관리방법론, 일정계획 <br/>\
- 지원부문 : 시험운영, 교육훈련, 유지보수방안, 기밀보안, 비상대책 <br/>\
- 전문업체 참여 및 상호협력부 : 전문업체 참여 상호협력 <br/><br/>\
<img src = "./img/발주프로세스.jpg" style = "max-width:100%; height:auto;">\
',

// [발주프로세스]- RFI
'# 정의 : 공급 업체 능력 파악 정보 요청서 <br/>\
- Request For Information <br/>\
- 발주자가 RFP작성 전 공급업체의 업무현황 및 수행능력을 파악하여 후보업체는 선정하고 제안요구사항 확인 위해 공급업체 요청하는 정보 요청서 <br/><br/>\
# 암기 : 구성항목(3) 사업요 <br/><br/>\
# 작성사항 : 사업개요, 발주업체정보, 주요요구사항\
',

// [발주프로세스]- RFP
'# 정의 : 제안서 작성 도움 문서 / 요구사항 체계적 정리 <br/>\
- Request For Proposal <br/>\
- 발주자가 특정 과제의 수행에 필요한 요구사항을 체계적으로 정리하여 제시함으로써 제안자가 제안서를 작성하는데 도움을 주기 위한 문서\
',

// 제안서
'# 정의 : 응찰자 적절성 보고서 <br/>\
- 발주자가 요청한 RFP에 대한 응답으로 사업 응찰자의 기술력과 사업수행 능력을 기술한 문서<br/><br/>\
# 암기 <br/>\
- 작성원칙(3) : 보현구 <br/>\
- 구성항목(6) : 개업기사지 <br/>\
- 기술부분(6) : 개시표시운발 <br/><br/>\
# 작성원칙(3) : 보편성, 현실성, 구체성 <br/><br/>\
# 목차 예시 <br/>\
1. 제안 개요 <br/>\
2. 제안 업체일반 : 일반현황, 조직 및 인원, 주요사업내용, 주요사업실적 <br/>\
3. 기술부문 : 시스템 구성도, 시스템 구축 방안, SW 개발방안(개발방법론, 업무개발, 초기데이터 구축, 시스템 통합, 산출물, 표준화 , 시스템 시험, 시스템 운영, 향후 발전 방향) <br/>\
4. 사업관리 부문: 품질보증 계획, 위험관리 계획, 추진일정 계획, 업무보고 및 검토계획, 수행조직 및 업무분장, 투입인력 및 이력 사항 <br/>\
5. 지원부문 : 교육훈련 계획, 유지보수 계획, 기술이전 계획, 기타지원 사항 <br/>\
6. 기타 : 별첨- 가격 산출 근거서, 하도급승인 신청서, 기타증빙서류\
',

// 제안서 평가
'# 정의 : 소프트웨어 기술성 평가기준 적용 가이드<br/>\
- 협상에 의한 계약 제안서 평가 세부기준(조달청, 2012.08.13) 에서 평가위원선정, 제안서 평가항목 및 배점기준 등을 제시한 소프트웨어 기술성 평가기준 적용가이드(지식경제부, 정보통신산업진흥원, 2011.10)<br/><br/>\
# 암기 <br/>\
- 기술제안서 : 전기성과지상 <br/>\
- 상용 SW : 기신사효유이 + 공급업체 지원<br/><br/>\
<img src = "./img/제안서평가.png" style = "max-width:100%; height:auto;">\
',

// 공급자 선정
'# 암기 : 공급자선정 방식(기준)(4) : 가사공예 <br/><br/>\
# 공급자 선정 기법 <br/>\
- 가중평가 시스템 <br/>\
- 사전필터링 시스템(최소기준 제시) <br/>\
- 공급자 평가 시스템 <br/>\
- 예약 가격 산정 \
',
 
// 소프트웨어 영향 평가 제도
'# 정의 : 민간 SW 시장 및 SW 산업 생태계 영향을 평가, 개선하는 제도 <br/>\
- 국가 정보화 시행 계획에 SW 영향평가 제도를 반영하여 공공 정보화 사업의 기획 단계부터 민간 시장에 미치는 부정적 영향을 평가 제도 <br/><br/>\
# 유형 <br/>\
1. 기관 공동 사용형 <br/>\
- SW 산업계의 파급효과 <br/>\
- 사업추진의 필요성 <br/><br/>\
2. 대국민 서비스형 <br/>\
- 민간 유사서비스 침해여부 <br/>\
- 추진사업의 공공성 <br/><br/>\
<img src = "./img/공공소프트웨어영향평가.png" style = "max-width:100%; height:auto;">\
',

// Nudge 이론
'# 정의 : 유연한 방식 선택 설계 이론<br/>\
- 심리학과 행동경제학 분야의 용어로, 상대방의 행동을 변화시키는 유연한 방식의 선택 설계 이론 <br/><br/>\
# 원리 (D실매체피인)<br/>\
1. Default <br/>\
- 내용 : 사람들은 많은 노력이 필요하지 않는 선택을 하는 경향이 있기 때문에 디폴트옵션을 선택하는 경우가 많음 <br/>\
- 사례 : 대부분 사람들은 프로그램을 설치할 때 커스터마이징 옵션을 사용하지 않고 프로그램에서 제시하는 베이직 옵션을 선택 <br/><br/>\
2. 실수예측(Expecting Error) <br/>\
- 내용 : 사람들은 필연적으로 실수를 범하기 마련, 자동화 등을 통한 작은 개입을 통해 반복적인 실수를 최소화할 수 있음 <br/>\
- 사례 : 이메일 첨부파일 누락 재확인 사례 <br/><br/>\
3. 매핑(Mapping) <br/>\
- 내용 : 복잡하고 어려운 선택을 하는 상황에서는 최적의 판단을 내리기 어려움 <br/>\
- 사례 : 전기,가스비 총액 / 시간대별 소비량 X <br/><br/>\
4. 의사결정 체계화(Structure complex Choices) <br/>\
- 내용 : 선택의 기준 축소,단순화 시키는 방법 선택 <br/>\
- 사례 : 넷플릭스 소비자 취향 기반 추천 <br/><br/>\
5. 피드백(FeedBack) <br/>\
- 내용 : 사용자들의 행동이 잘 되고 있는지 아닌지의 여부에 대한 피드백 제공 <br/>\
- 사례 : 도로 선의 간격 착시로 인한 자동차 감속 <br/><br/>\
6. 인센티브(Incentive) <br/>\
- 내용 : 인센티브로 인한 유도 가능 <br/>\
- 사례 : 스마트 온도계 예상 절약 금액 공지 \
',

// 정보시스템 하드웨어 규모산정 지침
'# 정의 : 하드웨어에 대한 예산 수립 지침 <br/>\
- TTA(한국 정보통신기술협회)에서 공개한 지침. 하드웨어에 대한 예산 수립시 필요<br/><br/>\
# 유형 <br/>\
1. 수치계산법 : 사용자수등 요소로 규모산정 후 보정치 적용 <br/>\
- 장점 : 근거 명확, 간단 산정 <br/>\
- 단점 : 보정치에 대한 정확한 근거 제시 어려움, 보정치 의존도 높음 <br/><br/>\
2. 참조법 <br/>\
- 업무량 : 사용자수 ,DB 크기 따라 유사 시스템 규모 참조 <br/>\
- 장점 : 안전 <br/>\
- 단점 : 근거 제시시 미약 <br/><br/>\
3. 시뮬레이션법 : 작업부하 모델링 후 시뮬레이션 <br/>\
- 장점 : 상대적 정확한 값 <br/>\
- 단점 : 시간, 비용 많이 소요 <br/><br/>\
# CPU 규모산정 : {시스템영역(System Area) + (사용자당 필요 메모리 * 동시사용자수)} * 버퍼 캐쉬보정 * 시스템 여유율 <br/><br/>\
# 디스크 규모 산정 (내장디스크) : (시스템 OS영역 + 응용프로그램 영역 + SWAP 영역) * 파일 시스템 오버헤드 * 시스템 디스크 여유율 <br/><br/>\
# 디스크 규모 산정 (외장디스크) : (데어텽역+ 백업영역) * 파일 시스템 오버헤드 * RAID 여유율 * 데이터 디스크 여유율 <br/><br/>\
<img src = "./img/하드웨어규모산정_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/하드웨어규모산정_2.png" style = "max-width:100%; height:auto;">\
',

// Philip Crosby의 품질경영 성숙도 모델 5단계 
'불확실성(Uncertainty), 인지(Awakening), 이해(Enlightenment), 지혜(Wisdom), 확신(Certainty)의 품질경영 성숙도 모델 5단계',

// KANO Model
'# 정의 : 상품 기획 분석 방법 / 기대(x) / 충족(y)<br/>\
- 어떤 상품을 기획할 때 각각 구성요소에 대해 소비자가 기대하는 것과 충족 시키는 것 사이의 주관적 관계, 요구사항의 만족, 불만족에 의한 객관적 관계를 설정하여 분석하는 방법 <br/><br/>\
# 특징 <br/>\
- 품질의 이원적 인식 : 만족, 불만족이라는 주관적, 객관적 요소 고려<br/>\
- 품질 개선 : 고객만족 또는 불만족 영향도의 정도에 따른 개선 <br/>\
- ROI 평가 : KANO 그래프를 통해 사용자 만족도 측면에서의 기존 기능 향상의 투자수익률(ROI)평가 <br/><br/>\
<img src = "./img/KANO.PNG" style = "max-width:100%; height:auto;">\
',

// 마세라티 문제
'# 정의 : 과도 몰입 문제 현상 <br/>\
- 현재 구매 능력이 없음에도 고가의 마세라티 차량 모델과 색상을 고민하는 바와 같이, 현실적으로 발생할 확률이 희박한 상황을 가정하여 기술적 요소에 과도하게 몰입하는 문제 현상. 엔지니어만 있는 스타트업에서 발생하는 기술편향을 비유하며 유사 개념으로 “보트 네이밍” 존재',

// 엠비언트 커머스 
'# 정의 : 자동적 정보 제공 상거래 <br/>\
- E-Commerce와 기존 점포를 IT의 힘으로 조합한 것으로, 예를 들면 센서 반응에 연동하여 인공지능(AI)이 작동해 고객에게 자동적으로 (키보드나 레지를 사용하지 않고 ) 추천 상품이나 결제 방법에 관한 정보를 제공',

// ISO 20547
'# 정의 : 아키텍처 모델 표준 / 빅데이터 프레임 워크 / 운용 프로세스 <br/>\
- 빅데이터 참조 아키텍처 표준 빅데이터 시스템의 구축을 위한 프레임워크 및 운용 프로세스에 대해 정의한 참조 아키텍처 모델 표준',

// SW사업저장소
'# 정의 : 발주자 역량 강화 제도 / SW사업 정보 수집 분석 <br/>\
- 국가기관등에서 추진되는 SW사업정보를 수집 및 분석하여, SW사업 추진시 예산수립, 비용산정, 요구사항 도출 등을 위한 사업정보를 제공하고 이를 통해 발주자 역량을 강화하기 위한 제도 <br/><br/>\
# 등장 배경 <br/>\
- SW 사업 대가기준 고시가 폐지 및 민간이양됨에 따라 객관적, 정량적 대가산정 근거 마련 필요 <br/><br/>\
# 관련 규정 <br/>\
- 소프트웨어 산업 진흥법 제22조(소프트웨어 사업의 대가지급) <br/><br/>\
# SW 사업정보 저장소 <br/>\
- 수행환경 정보 : CBD, 전자정부프레임워크 / 사업수행 적용 기술 및 도구, DB, 적용방법론, 개발도구 등 <br/>\
- 비용/일정, 규모/공수 : FP/MM 방식, SW기술자 노임단가 / 사업기간, 계약금액, 기능점수, 투입인력의 등급 및 인원 <br/>\
- 품질특성 정보 : SLA, ISO 9126 품질특성 / 신뢰도, 성능, 분산처리, 결함수, 결함유형, 품질점검 <br/><br/>\
',

// 군집분석
'# 정의 : 사전 정보 없는 경우 값 기반 유사성 이용 분석법 <br/>\
- 모집단 또는 범주에 대한 사전 정보가 없는 경우 주어진 관측 값들 사이의 거리 또는 유사성을 이용하는 분석법 <br/>\
- 전체 데이터를 집단으로 그룹화하여 각 집단의 성격 파악, 데이터 전체의 구조 이해 지원 분석법 <br/><br/>\
# 특징 <br/>\
- 탐색적인 기법 : 주어진 자료에 대한 사전 정보 없이 의미있는 자료 구조를 찾아낼 수 있음 <br/>\
- 이식성 : 거리만 잘 정의되면 모든 종류의 자료에 적용할 수 있음 <br/>\
- 초기 군집수 K 결정 : 초기 군집수 K의 결정이 어려움 <br/><br/>\
# 군집분석의 과정 <br/>\
- 거리측도 선택 : 유사성 판단 / 유클리디안 거리 <br/>\
- 절차 선택 : 계층, 비계층 / 단일, K-Means <br/>\
- 군집의 수 결정 : 계층, 비계층 / 결합 거리, 분산합계 <br/>\
- 평가 : 신뢰성, 타당성 <br/><br/>\
# 군집의 유형 <br/>\
1. 거리 중심 <br/>\
- 계층적 군집 : 중복 허용x  <br/>\
- K-means : 개채간 유사성 <br/>\
- SOM(Self Oragnizing Map) : 저차원 뉴런, 지도 형상화 <br/><br/>\
2. 자원축소 <br/>\
- 주성분분석(PCA) : 새로운 변수 창출 <br/>\
- MDS(MultiDimensional Scaling) : 다차원 척도법 <br/><br/>\
<img src = "./img/판별군집비교.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 1교시 5번\
',

// IT 투자 평가 항목 
'# 정량적 평가 항목 <br/>\
- EVA (Economic Value Added) : IT(수익-투자) <br/>\
- TCO (Total Cost Ownership) : 직접 + 간접 <br/>\
- EVS (Economic Value Source) : 4가지 원천별 효과 <br/>\
- TEI (Total Economic Impact) : 비용, 이익, 유연성 <br/><br/>\
# 정성적 평가 항목 <br/>\
- IO (Information Orientation) : 행동, 관리, 기술 <br/>\
- IPM (IT Portfolio Management) : 활동 가치 <br/>\
- IE (Information Economics) : 양측 목록 <br/>\
- BCG Matrix : 성장율, 점유율<br/><br/>\
# 복합 평가 <br/>\
- 다중접근 : BSC, IT-BSC <br/>\
- 통계산술 : ROV(Real Option Valuation), AIE(Applied Information Economics) <br/><br/>\
* 122회 3교시 5번\
',

// 나라장터 절차
'<img src = "./img/나라장터.png" style = "max-width:100%; height:auto;">\
',
  
// EAI
'# 정의 : E-비지니스를 위한 기본 인프라 <br/>\
- Enterprise Application Integration <br/>\
- 기존 Point to point Interface의 한계를 극복하여, 기업 내 상호 연관된 모든 어플리케이션을 손쉬운 확장성으로 연결하여 필요 정보를 중앙 집중적으로 통합, 사용할 수 있는 환경을 구축하기 위한 방법 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/EAI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 통합유형 <br/>\
- Point to Point : 1:1 통합 <br/>\
- Hub & Spoke : 중앙집중형 <br/>\
- Messaging Bus : Middleware <br/>\
- Hybrid : Hub&Spoke + Messaging Bus 혼합 <br/>\
- Peer to Peer : 각 어플리케이션 Peer Seerverr P2P \
',
  
// COBIT 5.0
'# 정의: 전사적 IT 거버넌스 프레임워크 <br/>\
- 조직이 IT 거버넌스와 관리를 위한 자신들의 목적을 달성하는 것을 지원하는 Cobit 4.1을 계승하고 Risk IT와 Val IT를 통합하는 종합적인 프레임워크 <br/><br/>\
# 원칙 (통이비인거) <br/>\
- 통합 프레임워크 : Best Practice 연계 <br/>\
- 이해관계자의 가치제고 지향 : 가치 창출 위해 존재 <br/>\
- 비즈니스 초점 : 거버넌스, 매니지먼트 의사결정 연계 <br/>\
- 인에이블러 기반 : Enabler 총체적 접근 방법 <br/>\
- 거버넌스와 관리 분리 : 다른 구조, 목적 <br/><br/>\
# 핵심영역 <br/>\
<img src = "./img/COBIT5.png" style = "max-width:100%; height:auto;">\
',
 
// IT-Compliance
'# 정의 : 내,외부 규제에 대한 통제활동 <br/>\
- 기업의 투명성 강화, 리스크 관리를 위하여 정부나 관련 기관이 제시한 각종 규제, 법안 등에 만족될 수 있도록 IT 관점에서 시스템을 재정비하는 활동 <br/><br/>\
# Keyword <br/>\
- Sarbaens-Oxley, Basel-II, E-Discovery, 정보통신망법, 전자서명법, 의료법, 개인정보보호, 정보관리, 정보보안, COBIT, 패널티 <br/><br/>\
# 필요성 <br/>\
<img src = "./img/ITComplianceOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 요구사항 (공보보통책)<br/>\
<img src = "./img/ITComplianceNeeds.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 공개 : 투명성 제고 <br/>\
- 보존 : 이력 추적 <br/>\
- 보호 : 암호화, 접근 제어 요구 <br/>\
- 내부통제 : 감사에 대한 수준 요구 <br/>\
- 책임성 : 라이프사이클 관점 <br/><br/>\
# 대응방안 <br/>\
1. 인식전환 <br/>\
- 조직 교육 : 조직 문화화, 정기적 교육, CSR 강화, 사례 공유 <br/>\
- 조직 구성 : IT 컴플라이언스 Officer, C Level 책임 강화 <br/><br/>\
2. 제도 및 기술 <br/>\
- 제도 측면 : 내부점검 정례화, IT 거버넌스 확립, Data 거버넌스 확립, 프로세스 정의 <br/>\
- 기술 측면 : 문서보호 도입, 데이터 보호 기술, 외부 침해 대응, 내부 오남용 대응 <br/><br/>\
* 116회 2교시 5번\
',
 
// 규제 샌드박스
'# 정의 : 국내 4차 산업혁명 견인을 위한 제도 <br/>\
- 관련 법령의 허가 등 규제로 인해 사업 시행이 어려운 신기술,서비스를 대상으로 일정 기간 동안 규제의 전부 또는 일부를 적용하지 않는 제도 <br/><br/>\
# 규제 샌드박스 절차 <br/>\
- 규제특례 신청 : 신청자->과기정통부장관 <br/>\
- 특례부여 검토 및 결정 : 관계기관의 장 + 신기술,서비스 심의위 -> 과기정통부장관 <br/>\
- 실증(2년 이하) : 과기정통부 + 관계기관 <br/>\
- 법령정비(필요시) : 관계기관의 장 <br/><br/>\
<img src = "./img/SandBox.png" style = "max-width:100%; height:auto;">\
',
 
// 매매 임치제도
'# 정의 : SW 유지보수 지속 담보 보험 <br/>\
- 저작권자가 소프트웨어의 유지보수를 계속 수행할 수 없는 경우를 대비하여 신뢰성 있는 제3기관에 소스코드와 정보기술을 임치해 두는 제도 <br/>\
- 저작권법 제101조의 7 (프로그램의 임치) \
',
 
// Design Thinking
'# 정의 : 공감적 관찰 통한 창의적 문제해결 <br/>\
- "사람과 사물"에 대한 공감적 관찰 (Empathic Observation)을 통해 문제 재해석 (Reframing Issue) 하고, 시각적 아이디어 도출, 프로토 타입 제작 통해 솔루션 도출하는 통합적 사용자 중심 문제 해결 방법론 <br/><br/>\
# 특징 <br/>\
- 인간 중심 디자인 방법론 <br/>\
- 공감 통한 문제 맥락 접근 <br/>\
- 감수성과 비즈니스 전략적 사고의 통합 통한 문제 접근 <br/><br/>\
# 프로세스 (공정아프테)<br/>\
<img src = "./img/DesignThinkingProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 1교시\
',
 
// 구독 경제
'# 정의 : 무소유 사용시대 <br/>\
- 소비자가 기업에 회원가입 및 구독을 하면 정기적으로 원하는 상품을 배송받거나, 필요한 서비스를 언제든지 이용할 수 있는 경제모델 <br/><br/>\
# 발전 과정 : 상품경제 -> 공유경제 -> 이용경제 <br/><br/>\
# 모델 <br/>\
- 무기한 이용 모델 : 무제한 / Netplex, Melon <br/>\
- 정기배송 모델 : 정기배송 / 면도날, 칫솔, 화장품, 소모품 <br/>\
- 랜털 모델 : 원하는 품목 바꿔가며 이용 / 자동차, 가구, 가방, 명품옷 \
',
 
// Servitization
'# 정의 : 제품과 서비스의 결합 <br/>\
- 기존 제품 판매에서 제품 서비스를 판매하는 시스템의 변화를 통해 부가가치를 창출하는 기업의 경쟁력 개선에 대한 혁신 및 기업 전략 <br/><br/>\
# 등장 배경 <br/>\
<img src = "./img/ServitizationBackground.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
<img src = "./img/Servitization.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 사례 <br/>\
- 제품의 서비스화 : 정수기 판매시 필터 관리 서비스 <br/>\
- 서비스의 제품화 : 검색 O/S 서비스 완벽함 위해 넥서스 폰 제공 \
',
 
// 대기행렬이론
'# 정의 : 적정서비스를 유지하기위한 이론 <br/>\
- Queuing Theory <br/>\
- 대기행렬의 특성과 현상을 수학적으로 분석하는 기법 <br/><br/>\
# 구성요소 <br/>\
- 대상고객 : 규모, 유형, 태도 <br/>\
- 도착분포 : 확률분포 / 포아송분포 <br/>\
- 서비스시간분포 : 제공자 일정 / 지수분포 <br/>\
- 서비스시설 : 서비스 제공자 / 처리용량, 시설수 <br/>\
- 서비스정책 : 다음 서비스 고객 결정 / FCFS, LCFS, SIRO, PR <br/><br/>\
* 포아송분포 : 불규칙한 고객의 도착을 표현하는 이산확률 분포 <br/>\
* 지수분포 : 도착하는 고객의 시간간격을 나타내 주는 연속확률 분포 <br/>\
* SIRO(Service in Random Order), PR(Priority) <br/><br/>\
# 처리기법 <br/>\
1. 채널과 단계별 처리기법 <br/>\
- 단일채널 단일단계 : 주먹밥 <br/>\
- 단일채널 다중단계 : 반찬추가 <br/>\
- 다중채널 단일단계 : 주먹밥 or 김밥 <br/>\
- 다중채널 다중단계 : 한식, 양식 + 교차반찬 <br/><br/>\
# 개방/폐쇄형 네트워크 처리기법 <br/>\
- 개방형 : 입력 내,외부 <br/>\
- 폐쇄형 : 입력 외부 <br/>\
- 혼합형 : 개방 + 폐쇄 <br/>\
- 일렬 : 개방 or 폐쇄 반복 <br/><br/>\
# 대기행렬이론 목표 <br/><br/>\
<img src = "./img/QueingTheoryTarget.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 3교시 5번 \
',
);
