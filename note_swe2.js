var question = question.concat(
'[모델]- SDLC',
'[모델]- 폭포수모델(Waterfall)',
'[모델]- 프로토타입모델(Prototype) = 원형모델',
'[모델]- 나선형 모델(Spiral)',
'[모델]- 반복적개발모델 = 점증적개발모델',
'[모델]- RAD',
'[모델][RAD]- JAD',
'[모델]- 클린룸(Clean Room) 모델',
'[모델][CleanRoom]- 함수적등가성',
'[방법론]- SW 개발 방법론',
'[방법론]- 구조적방법론',
'[방법론][구조적방법론]- V Model',
'[방법론][구조적방법론]- DESS V Model',
'[방법론][구조적방법론]- Multiple V Model',
'[방법론]- W Model',
'[방법론]- COMET',
'[방법론]- 정보공학방법론',
'[방법론][정보공학방법론]- CRUD 매트릭스',
'[방법론]- SW추상화',
'[방법론]- CBD',
'[방법론]- SOA',
'[방법론]- Agile 방법론',
'[방법론][Agile]- xp',
'[방법론][Agile]- Scrum',
'[방법론][Agile]- Burn down Chart',
'[방법론][Agile]- SafeScrum',
'[방법론][Agile]- 회고',
'[방법론][Agile]- CI',
'[방법론][Agile]- CD(Continuous Delivery)',
'[방법론][Agile]- CD(Continuous Deployment',
'[방법론][Agile]- 제품백로그',
'[방법론][Agile]- 사용자스토리',
'[방법론][Agile]- 기술스토리',
'[방법론][Agile]- 스토리 포인트',
'[방법론]- Pair Programming',
'[방법론]- Lean 방법론',
'[방법론][Lean]- Lean UX',
'[방법론]- Kanban 방법론',
'[방법론]- 방법론 테일러링',
'[방법론]- MOM, MOA',
'[방법론]- EIP',
'[방법론]- TDD',
'[방법론]- ATDD',
'[방법론]- BDD',
'[방법론]- DDD',
'[방법론]- AOSE',
'[방법론]- AOP',
'[방법론]- SSPL',
'[방법론][SSPL]- Feature',
'[방법론]- MDA',
'[방법론]- MDD',
'[방법론]- ASD',
'[방법론]- EDA',
'[방법론]- 데브옵스(DevOps)',
'[방법론]- 시각적 분석 (Visual Analytics)',
'[방법론]- 시각화 분석 (Visualization Analysis)',
'[방법론]- 데이터 시각화 (Data Visualization)',
'[방법론]- 임베디드 SW',
'[정책]- SW 진흥법 개정안',
'[정책][SW진흥법]- 하도급금지',
'Open SEED',
'BPMN(Business Process Model and Notation)',
'블랙보드(BlackBoard) 패턴',
'연동계획(Rolling Wave Planning)',
'SW 사업정보저장소',
'SW 사업 대가선정 가이드 (2019 개정판)',
'옵저버 패턴',
'PMO',
'PMBOK 6th 주요개정 내용',
'지식영역별 세부 프로세스 49개',
);

var answer = answer.concat(

// SDLC 
'# 정의 : 소프트웨어 생명주기 모형 <br/>\
- SW가 타당성 조사로부터 개발, 유지보수, 폐기까지의 전 과정을 하나의 주기로 보고, 전 과정을 단계별로 나눈 생명주기 모형 <br/><br/>\
# 구성 <br/>\
- 타당성 조사 -> 요구분석 -> 설계 -> 개발 -> 시험 -> 유지보수 -> 폐기 <br/><br/>\
# 선정기준 <br/>\
- 개발소요 방법/도구 <br/>\
- 통제수단 <br/>\
- SW 산출물 인도 방식 <br/>\
- 프로젝트 규모/성격\
',

// 폭포수모델
'# 정의 : 순차적 접근 방법 / 고전 / SDLC<br/>\
- 고전적 라이프 사이클 패러다임의 분석, 설계, 개발, 구현, 시험 및 유지보수과정을 순차적으로 접근하는 방법<br/><br/>\
# 암기 <br/>\
- 선정기준 : 방통시인규 <br/>\
- 구성 : 타요설개시유폐 <br/><br/>\
# 구성 : 타당성조사 -> 요구분석 -> 설계 -> 개발 -> 유지보수 -> 폐기 <br/><br/>\
# 선정기준 : [방통시인규]<br/>\
- 개발소요 방법/도구 <br/>\
- 통제수단 <br/>\
- 시간/비용 <br/>\
- SW산출물 인도 방식 <br/>\
- 프로젝트 규모/성격 \
',

// 51
'# 정의 : 초기 실제 운영 모델 개발 / 이해향상 / 요구사항 도출 용이<br/>\
- 개발하려는 시스템의 주요기능을 초기에 실제 운영할 모델로 개발하여 사용자 이해향상, 요구사항 도출이 용이한 모델<br/><br/>\
# 장/단점 <br/>\
- 장점 : 요구사항 도출용이, 시스템 이해와 품질 향상, 개발자와 사용자 의사소통 원활 <br/>\
- 단점 : Prototype 폐기 따른 비경제적, 산출물 문서화 어려움, 프로젝트 관리소홀, 최종결과물 오해 <br/><br/>\
# 적합 : 사용자 요구가 불투명할 때, 프로젝트 타당성이 의심스러운 경우 신기술 실현가능성 검증시 <br/><br/>\
# 유형 <br/>\
- 수평 프로토타입 : 다양한 기능 고려해 결과물 전반적 예상 가능 <br/>\
- 수직 프로토타입 : 주요기능만 선별 세부 기능까지 구현 <br/>\
=> 단계별 선별 적용 : 초기 범위 결정시 수평 프로토타이핑 활용, 설계 검증단계에서 수직 프로토타이핑 활용, 3D 프린팅과 연결 <br/>\
=> Hybrid Prototyping : 핵심 주요 기능에 대해 수평과 수직을 동시에 적용한 시나리오 프로토타이핑 수행 <br/><br/>\
<img src = "./img/Prototype_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Prototype_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Prototype_3.png" style = "max-width:100%; height:auto;">\
',

// 52
'# 정의 : 점진적 완성 모델 / 폭포수, 원형 + 위험분석 / 지속적 프로토타입 개선 <br/>\
- 폭포수모델과 원형모델에 위험분석 추가하여 개발된 프로토타입을 지속적으로 개선하여 최종 SW를 점진적으로 완성해 나가는 모델 <br/><br/>\
# 암기 : 계위개평 <br/><br/>\
# 단계 : 계획(목표)수립 -> 위험분석 -> 개발 -> 고객 평가 <br/><br/>\
# 장/단점 <br/>\
- 장점 : 신속한 사용자 요구 파악, Risk 감소 <br/>\
- 단점 : 개발기간 장기화 가능성(프로젝트 관리 어려움, 다수고객 사용제품에 부적합)<br/><br/>\
# 적용방안 : 위험관리 강화를 위해 다양한 위험관리 기법 적용 <br/><br/>\
<img src = "./img/SWE_52.PNG" style = "max-width:100%; hegiht:auto;">\
',

// 53
'# 정의 : 반복 개발 완성 모델 / 핵심 요구사항 /<br/>\
- Iterative 모델 <br/>\
- 핵심 요구사항 일부분 혹은 제품의 일부분을 반복적으로 개발하여 최종 시스템으로 완성하는 모델<br/><br/>\
# 암기 <br/>\
- 유형 : 증진 <br/><br/>\
# 적용방안 <br/>\
- 빌드관리 어려움 => CTIP, ALM 등의 자동화된 통합체계 적용 <br/><br/>\
# 유형 <br/>\
- Incremental(증분형) : 범위 확대, 일부분 개발 <br/>\
- Evolutionary(진화형) : 핵심 요구사항부터 개발 <br/><br/>\
# 프로세스 : 분석(증분)-> 설계 -> 구현/시험 -> 설치/운영 <br/><br/>\
# 진화<br/>\
- 특징(3) : 릴리즈 버전관리, 요구사항 명확화, 재사용 <br/><br/>\
<img src = "./img/Iterative_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/Iterative_2.png" style = "max-width:100%; hegiht:auto;">\
',

// RAD
'# 정의 : 짧은 기간 개발 방법 <br/>\
- Rapid Application Developmen <br/>\
- 중요한 시스템을 빠르게 개발하면서도 개발 비용을 줄이고 품질을 유지하기 위해 CASE등 최신개발도구 사용해 2~3개월의 짧은 기간동안 신속하게 개발하는 방법 <br/><br/>\
# 특징 <br/>\
- 도구 CASE 사용 <br/>\
- Prototyping 사용 <br/>\
- 사용자 적극참여 <br/>\
- 소요기간 (60~90일간) 짧은기간 <br/><br/>\
# 프로세스 <br/>\
- 비즈니스 모델링 JRP(Joint Requirement Planning) <br/>\
- 데이터 모델링 <br/>\
- 프로세스 모델링 JAD(Joint App Design) <br/>\
- App 생성 : CASE, RDB, 4GL <br/>\
- 시험 및 인수 \
',

// JAD 
'# 정의 : 집중적 회의 개발 프로세스 <br/>\
- Joint Application Development / Design <br/>\
- 사용자, 관리자, 분석가들이 일정기간(time-box) 내 시스템 요구사항을 규정하기 위해 집중적인 회의를 진행하는 개발 프로세스 <br/><br/>\
# 참여자 <br/>\
- Facilitator (Session Leader) <br/>\
- Analysis <br/>\
- Stakeholders (주제별 전문가, 프로젝트 sponsor 포함) <br/><br/>\
# 절차 <br/>\
- JAD Project 정의 <br/>\
- 사용자 요구조사 (예비정보수집) <br/>\
- JAD session 준비 (Team Building) <br/>\
- JAD session 실행 <br/>\
- 종료 \
',

// Clean Room
'# 정의 : 수학적 기초 완전 무결시스템 목표 모델 / 반복, 박스구조, 함수적 등가성 이용 검증 <br/>\
- 시스템의 핵심 영역을 최초로 개발 후 반복, 박스구조 또는 함수적 등가성 이용 검증하여 수학적 기초의 완전무결시스템 목표하는 모델(IBM사 고안)<br/><br/>\
# 암기 <br/>\
- 명세검증(3) : 박함통 <br/>\
- 박스구조(3) : 블상클 <br/>\
- 함수적등가성 순분선반 <br/>\
- 단계(4) : DRPR <br/><br/>\
# 특징 <br/>\
- 목표는 완전 무결한 시스템<br/>\
- 엄격한 설계 <br/>\
- 수학적 기법 활용한 Test <br/><br/>\
# 증가분 인크리먼트 검증 방법 <br/>\
1) 박스구조 분석에 의한 단계적 상세화 : 증가분 상세 검증 <br/>\
2) 함수등가성에 기초한 검증 : 상세화한 것이 정확한지의 검증 <br/>\
3) 이용 시나리오에 의한 통계적 테스트 <br/><br/>\
# 구성 <br/>\
1. 박스구조(블상클) <br/>\
- 블랙박스 : 입출력 데이터 흐름 중심 <br/>\
- 상태박스 : 블랙박스에 상태추가 <br/>\
- 클리어박스 : 상태박스에 제어흐름 추가 <br/><br/>\
2. 함수적 등가성(순분선반) : 순차, 분기, 선택, 반복 <br/><br/>\
# 단계 <br/>\
- SW Development : 박스구조 이용 <br/>\
- Reliability Certification : MTTF, 사용법 TEST <br/>\
- Project Mgmt : 점진개발 <br/>\
- Review : 재검토 <br/><br/>\
<img src = "./img/CleanRoom_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/CleanRoom_2.png" style = "max-width:100%; hegiht:auto;">\
',

// 함수적 등가성
'# 정의 : 명세, 결과물 등가 확인 <br/>\
- 명세를 입력과 출력의 대등관계로 정의된 함수관계로 보고 반복적 개발시 원래 명세와 등가함을 확인 \
',

// SW 개발 방법론 <br/>\
'# 정의 : SW공학원리 + SW개발생명주기 적용 개념 <br/>\
- SW공학원리를 SW개발생명주기에 적용한 개념으로 작업활동, 절차, 산출물, 기법등을 체계적으로 정리한 이론 <br/><br/>\
# 암기 <br/>\
- 구성요소 : 절방산기도 <br/>\
- 유형 : 구정객CS <br/><br/>\
# 구성요소(절방산기도) : 작업절차, 작업방법, 산출물, 기법, 도구 <br/><br/>\
# 패러다임분류(구정객CS) : 구조적 -> 정보공학 -> 객체지향 -> CBD -> SOA <br/><br/>\
# 대상 시스템별 분류 : 호스트개발 -> C/S -> 객체지향 -> 패키지 -> 인터넷 <br/><br/>\
# 유형 <br/>\
- 구조적 : 프로세스 중심, Top Down 방식 <br/>\
- 정보공학 : 데이터 중심 (ISP -> BAA(업무영역분석) -> BSD(업무시스템 설계) -> SC(시스템 구축) <br/>\
- 객체지향 : 객체중심, 상향식, 비즈니스 중심 <br/>\
- CBD : 컴포넌트, 상향식, 비즈니스 중심 <br/>\
- SOA : 서비스 중심, 상/하향식, 비즈니스 프로세스 중심 <br/><br/>\
* 스테이지 게이트 (Stage Gate) 개발 <br/>\
- R&D 및 신제품 개발에 많이 사용 <br/>\
- 국내에 많이 도입된 NPI (New Product Introduction) 프로세스에 적용됨 <br/>\
- 상품기획 > 리뷰1 > 개발계획 > 리뷰2 > 제품설계 > 리뷰3 > 양산준비 > 리뷰4 > 출시/양산 \
',

// 구조적 방법론
'# 정의 : 요구사항 및 문서화 기반 SW 개발 방법론 / 모듈화 하향식 분할 수행 <br/>\
- 소프트웨어 모듈화를 위해 하향식 분할의 분석/설계 수행하며 사용자 요구사항 및 문서화를 기반으로 소프트웨어를 개발하는 방법론<br/><br/>\
# 암기 <br/>\
- 특징(3) : 프모폭 <br/>\
- 구성(4) : 분설언프 <br/>\
- 한계(3) : 단위 데이터 복잡성 <br/><br/>\
# 특징 <br/>\
- 프로세스 중심 <br/>\
- Top Down 방식 : 정보공학과 동일 <br/>\
- 분할과 정복 : 정보공학과 동일 <br/>\
- 단계적/절차적 Waterfall 기반 <br/><br/>\
# 단계<br/>\
1. 구조적 분석 : 도형중심, Top Down방식 기능 분해 <br/>\
- 산출물 : DFD, ERD, STD(상태전이도), Mini-Spec(소기능명세서), Data Dictionary(자료 사전) <br/>\
2. 구조적 설계 : 추상화, 결합도, 응집도 고려<br/>\
- 산출물 : Structure Chart, 프로그램 명세서, Multi-Level DFD <br/>\
3. 구조적 개발 : 계층적 형식, 제한된 제어구조, 작성순서대로 PG실행 <br/>\
=> 3개의 논리적 구조 : 연속(Sequence), 조건(IF-Then-Else), 반복(Repetition) \
',

// V Model 
'# 정의 : Verification, Validation 지원 개발 검증 모형 <br/>\
- 소프트웨어 개발모델 중 폭포수모델의 각 단계별 Verification과 최종 완성물의 Validation을 지원하기 위해 개발된 검증 모형 <br/><br/>\
# 장단점 <br/>\
1. 장점 <br/>\
- 모든 단계에 검증과 확인 과정이 있어 오류를 줄일 수 있음 <br/>\
- 비용 시간 감소 <br/><br/>\
2. 단점 <br/>\
- 생명주기의 반복을 허용하지 않아 변경을 다루기가 쉽지 않음 \
',

// DESS V Model
'# 정의 : 유럽 ITEA, 실시간 임베디드 개발모델 <br/>\
- 유럽 ITEA 협회 고안, 실시간 임베디드 SW 개발위한 SW 개발 생명주기 모델 <br/><br/>\
# 특징 <br/>\
- H/W, S/W 이원화 개발환경 <br/>\
- Relation V : 구현 관점 <br/>\
- Validation V : 확인 및 검증관점 <br/>\
- Model Checking, Review, C-Testing, Integration Testing 중점 <br/><br/>\
<img src = "./img/DESS_VModel.png" style = "max-width:100%; height:auto;">\
',

// Multiple V Model
'# 정의 : Model, Prototype, Final Product Model <br/>\
- 기존의 V 모델을 모델, 프로토타입, 최종제품으로 나누어 연결한 모델 <br/><br/>\
# 구성<br/>\
1. Model : PC를 통해 Simulation TEST <br/>\
2. Prototype : 실험용 HW에서 Prototyping TEST <br/>\
3. Final Product : 실제 HW 및 운영환경에서 테스트 <br/><br/>\
# 각 단계 는 Design, Build, Test 순차적인 개발과정 포함\
',

// W Model 
'# 정의 : 동적 한계 극복 모델 <br/>\
- V 모델의 동적인 테스트 사이클만 제공하는 단점을 보완, 다양한 테스트 단계와 테스트 기반들 사이를 연결한 모델 \
',

// COMET
'# 정의 : 초기단계 명확화 모델 <br/>\
- Concurrent Object Modeling and [architectural] design mETod <br/>\
- 하드웨어 및 소프트웨어의 동시 설계 위험성을 최소화하기 위하여 중간에 모형 주택과 같은 의미의 폐기형 프로토타이핑 기법을 적용하여 하드웨어와 소프트웨어간의 역할분담 등을 개발 초기 단계에서 명확히 하는 모델 <br/><br/>\
# 특징 <br/>\
- 임베디드 시스템에 적합 <br/>\
- 개발 중간단계에서는 점증적 프로토타이핑 기법을 적용 <br/>\
- 점진적 반복적 \
',

// 정보공학방법론
'# 정의 : 데이터 중심 개발 방법론 / 기업 정보 + 공학적 기법 /<br/>\
- 기업 정보시스템에 공학적 기법을 적용하여 시스템계획, 분석, 설계 및 구축을 하는 데이터 중심의 개발 방법론<br/><br/>\
# 암기 <br/>\
- 특징(5) : 기데도분공 <br/>\
- 단계(4) : 정업분설구 <br/>\
- 원칙(3) : 분데모 <br/>\
- 기술(9) <br/>\
- 한계(4) <br/><br/>\
# 특징 : 기업중심, ISP 중심, 데이터중심 분석/설계, 프로세스/데이터 분리, 분할과 정복, 공학적 접근(자동화도구), 사용자참여, Repository, 통합 CASE툴, 4세대 언어, 프로토타이핑 <br/><br/>\
# 절차: ISP -> BAA(업무영역분석) -> BSD(업무시스템설계) -> BSC(구축) <br/><br/>\
# 원칙(3) : 분할과 정복, 데이터,프로세스 균형유지, 모듈화에 의한 하향식 구성 <br/><br/>\
# 핵심기술 (9) : FW, UML, ERD, Architecture, DB, Repository, CRUD, 프로토타이핑, 통합 CASE Tool <br/><br/>\
# 한계(4) <br/>\
- 구조적 방법론 SDLC 그대로 사용 <br/>\
- 중소규모 Prj 적용 어려움 <br/>\
- CASE Tool 사용 어려움 <br/>\
- 복잡한 논리구조와 많은 산출물 <br/><br/>\
<img src = "./img/SWE2_56_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SWE2_56_2.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/정보공학방법론_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// CRUD 매트릭스 
'# 정의 : 상관관계 분석 매트릭스 <br/>\
- Data의 Create, Read, Update, Delete를 업무 Process와 매칭한 프로세스와 데이터 모델링의 상관관계 분석 매트릭스 <br/><br/>\
# 절차 <br/>\
- ERD 분석 및 작성 <br/>\
- 업무 기능 분해도 작성 <br/>\
- CRUD Matrix 작성 \
',

// SW 추상화
'# 정의 : 간결화 모델링 표현 <br/>\
- 복잡한 문제 및 상황을 간결하고, 명확하게 모델링하여, 자료 처리, 제어 행위에 대한 표현, 클래스 내의 메소드를 설계하여, 특정 대상을 프로그램 언어로 표현하는 SW 특징 <br/><br/>\
# 유형 <br/>\
- 자료 추상화 <br/>\
- 제어 추상화 <br/>\
- 구조적 추상화 <br/>\
- 단위 추상화 <br/>\
- 프로시저 추상화 <br/>\
- 기능 추상화\
', 

// CBD
'# 정의 : 컴포넌트 기반 방법론 / 재사용 가능 / 상용 컴포넌트 조합 / 최소화 혁신  <br/>\
- 재사용 가능한 컴포넌트의 개발 또는 상용 컴포넌트를 조합하여 어플리케이션 개발 생산성, 품질향상, 유지보수 비용 최소화를 위한 혁신 개발방법론<br/><br/>\
# 암기 <br/>\
- 절차(2) CD(도컴구) CBD(요컴응) <br/>\
- 종류(5) : MCSAR <br/><br/>\
# 특징 : 생산성, 변경용이성, 관리용이성, 재사용성, UML 사용, Arch 중심 <br/><br/>\
# 절차 <br/>\
- CD : 도메인분석, 설계->컴포넌트 추출 및 설계 -> 컴포넌트 구현및 인증 <br/>\
- Repository <br/>\
- CBD : 요구사항 정의 및 영역분석 -> 컴포넌트 기반 설계,조립 -> 응용 시스템 <br/><br/>\
# 종류 : 마르미2, Catalysis, Select Perspective, Advisor, RUP <br/><br/>\
# CBD의 발전형태 : MDA/MDD, PL, SOA <br/><br/>\
<img src = "./img/CBD_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CBD_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 미르미2 : 국내방법론, UML기반 점진적 개발 <br/>\
* Catalysis : 아키텍처 FW, 패턴 재사용 <br/>\
* Select Perspective : 개발 초기 Biz 프로세스 강조 <br/>\
* Advisor : 컴포넌트 기반 개발, Biz Pro 개선 초점 <br/>\
* RUP : SDLC 지원 프로세스 FW \
',

// SOA
'# 정의 : 비지니스 프로세스 기반 개발 방법론 / 서비스 조합 <br/>\
- Service Oriented Architecture 서비스 기반 방법론(SOA) = 서비스 기반 아키텍처 <br/>\
- 서비스를 조합하여 새로운 서비스를 생성하는 비즈니스 프로세스 기반의 개발 방법론<br/><br/>\
# 암기 <br/>\
- 특징(4) : ILMC <br/>\
- 구성 : 브프컨리 <br/>\
- 기술(4) : 교미호기등 <br/><br/>\
# 특징 <br/>\
- 프로세스 중심 <br/>\
- 플랫폼 독립적 어플리케이션 통합 <br/>\
- Loosely coupled <br/>\
- 메시지 및 프로세스 상태관리 <br/>\
- 현업과 재사용 <br/><br/>\
# 구성 <br/>\
- Service Broker <br/>\
- Service Provider <br/>\
- Service Consumer <br/>\
- Service Repository <br/><br/>\
# 기술 <br/>\
- 데이터 교환(XML) <br/>\
- 미들웨어 (ESB) <br/>\
- 서비스호출(SOAP) <br/>\
- 서비스 기록(WSDL) <br/>\
- 서비스 등록 (UDDI) <br/><br/>\
<img src = "./img/SOA_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/SOA_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/SOA_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/SOA_4.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/SOA_5.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 사례 : 구글맵 \
',

// Agile 방법론
'# 정의 : 사람 중심 효율적 시스템 개발 방법론 / 유연성 / 신속성<br/>\
- 절차보다는 사람이 중심이 되어 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 방법론<br/><br/>\
# 특징 : 사람 중심, 고객참여, 변경수용, 점증적인도, PM역할변화 <br/><br/>\
# 장점 : 기업 or 사상 선택해서 쓰기좋음 <br/><br/>\
# 단점 : 방법론 자체로 프로세스 적립부족, 대형프로젝트 적합x 감리대응 어려움, 관리방법 가이드라인 부족 <br/><br/>\
<img src = "./img/Agile_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Agile_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Agile_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Agile_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// xp
'# 정의 : 의사소통 개선 방법론 <br/>\
- 의사소통 개선, 즉각적인 피드백에 의해 단순코딩하여 SW 품질을 높이기 위한 방법론 <br/><br/>\
# 특징 <br/>\
- 1~3주 iteration <br/>\
- 4가치 (용기, 의사소통, 단순성, 피드백) <br/>\
- 12개 실천항목 \
',

// Scrum
'# 정의 : 짧은 시간 관리 중심 <br/>\
- 매일 정해진 시간, 정해진 장소에서 짧은 시간 개발하는 팀을 위한 프로젝트 관리 중심의 Agile 방법론 <br/><br/>\
# 구성 <br/>\
- 기간 : 스프린트 <br/>\
- 미팅 : 일일스크럼, 스프린트 계획, 스프린트 리뷰 <br/>\
- 산출물 : 제품 백로그, 스프린트 백로그, 소멸차트 <br/><br/>\
# 프로세스 <br/>\
- 요구정의 : 린스타트업, 디자인 싱킹 <br/>\
- 프로젝트 준비 : 제품 백로그 <br/>\
- 스프린트 수행 : 스프린트 계획 회의, 일일 스크럼, 스프린트, 스프린트 종료 데모, 스프린트 회고 <br/>\
- 프로젝트 종료 : 프로젝트 교훈 미팅 \
',

// Burn down Chart
'# 정의 : 시간대비 할일 그래프 <br/>\
- 시간 대비 할일을 그래프로 표현한 것, 팀원 모두 적정한 속도로 작업 중인지 시각화 <br/>\
- 요구사항의 중요도, 난이도를 바탕으로 점수(Story Point)를 부여하고, 그 점수를 스프린트 기간내에 추이를 분석하는 작업 진척율 차트 <br/><br/>\
# 특징 : Y축 잔여 예측 시간 or 남은기능 X축 날짜 \
',

// SafeScrum
'# 정의 : IEC 61508 + scrum <br/>\
- SW 안전성 표준 IEC 61508과 Scrum 방법론을 접목한 Safety Critical SW Agile 개발 방법론 <br/><br/>\
# 구성요소 <br/>\
- SRC, 개발 Scrum, RAM 검증 \
',

// 회고
'# 정의 : 정기 개선 활동 <br/>\
- Retrospective <br/>\
- 프로젝트의 비효율적인 프로세스나 커뮤니케이션을 주기적으로 개선하기 위해 스프린트 종료 시점이나 월 1~2회 정기적 수행하는 활동 <br/><br/>\
# 구성 <br/>\
- 1~3 시간 <br/>\
- 팀원전체 & 제품책임자 <br/>\
- 오픈된 장소 <br/>\
- 스프린트 백로그/요약자료 <br/>\
- 회고항목 (만족/개선/반성) <br/><br/>\
# 절차 <br/>\
- 사전 준비 : 작어규칙 공유 <br/>\
- 자료 수집 : 브레인스토밍 <br/>\
- 실행항목 선정 : 점투표 <br/>\
- 실행목표 수립 : 구체적, 측정가능, 달성가능, 적절 <br/>\
- 회고종료 \
',

// CI
'# 정의 : 지속적 QC 적용 <br/>\
- Continuous Integration <br/>\
- 지속적으로 Quality Control을 적용하는 프로세스 실행 Practice <br/><br/>\
# 특징 <br/>\
- 초기에 그리고 자주 통합하여 통합시 발생하는 여러가지 문제점을 조기에 발견<br/>\
- 피드백 사이클 짧게 하여 소프트웨어 개발 품질과 생산성 향상 <br/>\
- 빈번한 적용, 자동 빌드, 테스트 자동화 \
',

// CD(Continous Delivery)
'# 정의 : 진화된 CI <br/>\
- CI 보다 진보된 상태, 단위 시험 자동화 뿐만 아니라, 특정 환경하에서의 인수시험을 일부 자동화 \
',

// CD(Continous Deployment)
'# 정의 : 모든 인수 시험 자동화 <br/>\
- CD(Continous Delivery)에서 진보된 상태, 모든 인수시험이 자동화가 되는 수준 \
',

// 제품백로그
'# 정의 : SRS + WBS <br/>\
- 제품 개발에 필요한 모든 업무를 우선순위화한 목록 (요구사항정의서 + 작업분류체계 혼합 형태 )<br/><br/>\
# 특징 <br/>\
- 요구기능 중심 기술 <br/>\
- 세부 작업 미포함 ( 스프린트 계획에서 도출 -> 변경 용이성 도출 목적) <br/><br/>\
# 작성 지침 <br/>\
- 스토리간 상호 독립적 <br/>\
- 변경 가능 <br/>\
- 사용자와 고객에 가치 부여 <br/>\
- 추정가능 <br/>\
- 크기 적절(1~2주) <br/>\
- 테스트 가능 수준 <br/><br/>\
# 작성 예시 (인터넷 서점 시스템 개발) <br/>\
* 사례 1 <br/>\
- 업무구분 : 인터넷 서점 V1.0 <br/>\
- 상위기능(에픽) : 사용자 로그인 <br/>\
- 스토리 : 사용자는 회원 ID와 빔리번호를 입력하여 로그인 할 수 있다 <br/>\
- 스토리 점수 : 1 <br/>\
- 완료조건 : 회원 ID와 비밀번호가 불일치 할 때는 메시지를 표시하여 다시 입력하게 한다 <br/><br/>\
* 사례 2 <br/>\
- 업무구분 : 비기능 <br/>\
- 상위기능(에픽)/스토리 : 시스템은 정기 점검을 제외한 24일 365일 가동해야 한다 \
',

// 사용자스토리
'# 정의 : 기능 요구사항 기술할 때 사용하는 방식 <br/>\
- User Story <br/>\
- 제품 백로그에서 기능 요구사항을 기술할 때 사용하는 방식으로 고객과 사용자에게 가치를 줄 수 있는 기능을 서술한 소프트웨어 기능 혹은 사용자의 요구사항 <br/><br/>\
# 특징 <br/>\
- 일반적으로 한 두문장으로 짧게 표현 <br/>\
- 스토리 카드 간략히 적어, 의사소통 <br/>\
- 고객 직접 작성 원칙 <br/><br/>\
# 구성요소 <br/>\
- 카드 : 포스트잇 등, 스토리추정/계획 활용 <br/>\
- 대화 : 고개과 대화, 스토리 내용 구체화 <br/>\
- 확인 : 완료조건, 스토리 완료 확인 <br/><br/>\
# 작성원칙 <br/>\
- 독립성 : 스토리간의 의존성 배제 <br/>\
- 간결성 : 간결 작성, 세부 내용은 고객과 대화를 토애 구현여부 협상 <br/>\
- 추정성 : 개발자들은 각 스토리의 크기 혹은 소요시간 추정 가능해야 함 <br/>\
- 소단위 : 한 두명의 개발자가 0.5일 이내 구현, 테스트 가능한 크기 적당 <br/>\
- 검증성 : 모든 사용자 스토리는 테스트 가능하도록 작성되어야 함 <br/><br/>\
# 작성 예시 <br/>\
- 교육생은 수강신청을 위해 신청, 취소, 리스트보기를 할 수 있다 \
',

// 기술 스토리 
'# 정의 : 기술적, 관리적 업무 서술 <br/>\
- Techincal Story <br/>\
- 사용자 스토리를 지원하는 기술적, 관리적 업무를 서술할 때 사용하는 제품 백로그 항목중 하나 <br/><br/>\
# 특징 <br/>\
- 형식 없음 <br/>\
- 고객 이해할 수 있는 수준으로 작성 <br/>\
- 개발팀 중심 도출 (사용자 스토리는 고객과 책임자 중심 도출) <br/>\
- 비용 추정 기준 <br/><br/>\
# 포함활동 <br/>\
- 요구분석과 아키텍처, 도구 셋업등 기술적인 활동 <br/>\
- 비기능 요구사항과 인프라 시스템 개선 활동 <br/>\
- 코드리뷰, 리팩토링, 인스팩션 등 품질 개선활동 <br/>\
- 버그수정, 모듈 안정화\
',

// [Agile 방법론]- 스토리 포인트 
'# 정의 : 상대적 단위 / 작업 규모 표현 <br/>\
- 사용자 스토리나 기능 또는 어떤 작업의 규모를 표현하기 위해 사용되는 상대적인 단위 -> 사용자 스토리별 우선순위와 개발시간 산정기준 <br/><br/>\
# 특징 : 시간단위와는 대비되는 개념, 요구사항을 완성하기 위해 사용되는 기간과 달리 요구사항의 복잡도 혹은 크기를 상대적인 측정 단위로 사용 <br/><br/>\
# 추정기법 : 유사추정, 전문가추정, 플래닝포커, 삼각측량 <br/><br/>\
# 요구사항 우선순위 선정기법 <br/>\
- MosCow 방법 : 4가지 기준 분류-필수(must have) <br/>\
- 종료(Should have) <br/>\
- 선택(Could have) <br/>\
- 보류(Won\'t have this item) <br/>\
- 가치점수 : 요구기능간 상대적 가치 평가 활용, 가치점수와 스토리 점수 함께 고려 <br/><br/>\
<img src = "./img/StoryPoint_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/StoryPoint_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 스토리 점수 기준 작성 필요 : 최소 점수 산정후 비율적 적용 <br/>\
* 조직, 기업마다 상이 <br/>\
* 운영업무 고려 필요 \
',

// Pair Programming 
'# 정의 : 두사람이 한 컴퓨터 사용 <br/>\
- 두 사람이 한 컴퓨터를 사용해서 Pair work 로 프로그래밍을 하는 것으로 Extream Programming(XP)에서 표방하는 프로그래밍 방법 중 한 가지 <br/><br/>\
# 구성 <br/>\
- Driver : Coder <br/>\
- Partner : Supporter \
',

// Lean 방법론
'# 정의 : 낭비 줄이는 개발 방법론 / 빠른 프로토타입 제작 / 신속한 고객 피드백 / CI / 신속 회피 <br/>\
- 빠른 프로토타입 제작과, 신속한 고객 피드백 및 CI를 통해 시장에 대한 잘못된 가정을 신속히 검증 및 회피하여 낭비를 줄이는 개발방법론 <br/><br/>\
# 암기 <br/>\
- 낭비(8) : 운과대재과결움기 <br/>\
- 원칙(7) : 낭배늦팀빠통전 <br/>\
- 낭가 피반동집 대마의 자동 리건 당대지 인개리테 측계<br/><br/>\
# 낭비 : 운반, 과잉생산, 대기, 재고, 과잉처리, 결합, 움직임, 기술<br/><br/>\
# 원칙 <br/>\
- 낭비의 제고 : 낭비 찾기, 가치 흐름도<br/>\
- 배움 증폭 : 피드백, 반보그 동기화, 집합기반 개발<br/>\
- 늦은 결정 : 대안적 사고, 마지막 순간, 의사결정<br/>\
- 팀에 권한 위임 : 자기결정권, 동기부여, 리더십, 전문지식<br/>\
- 빠른 납품 : 당김 시스템, 대기 행렬이론, 지연비용<br/>\
- 통합성 구축 : 인식 통합성, 개념 통합성, 리펙토링 테스트<br/>\
- 전체를 볼것 : 측정, 계약<br/><br/>\
* 22가지 도구\
',

// Lean UX
'# 정의 : 핵심가치, 핵심지표 조정 과정 <br/>\
- 핵심가치를 만들고 그에 기반한 가설, 검증을 빠르게 진행한 뒤 핵심지표를 보며 계속 조정해가는 과정 <br/><br/>\
# 원칙 <br/>\
- 디자인 사고, 애자일 개발, 린 스타트업 <br/><br/>\
# 적용 프로세스 <br/>\
- Proto-Personas : 팀원들, 가정에 의해 페르소나 만듦 <br/>\
- 디자인 협업 : 디자인 사고 적용 <br/>\
- MVP : 최소기능 사용 <br/>\
- 가설검증 <br/>\
- Feed Back <br/><br/>\
# 도구 : Google Docs, Jira, GitHub \
',

// Kanban 방법론
'# 정의 : JIT 지원 방법론 / 애자일 프로세스 전반 <br/>\
- 애자일 프로세스 전반에 걸친 JIT(Just in Time Development)를 지원하는 방법론 <br/><br/>\
# 암기 <br/>\
- 규칙(3) : 워W플 <br/><br/>\
# 규칙(3) <br/>\
- 워크플로 가시화 : 일을 잘게 분할->backlog <br/>\
- WP 제한 : 동시진행 가능 항목제한 <br/>\
- 플로우의 측정 및 최적화 : 완료 평균시간, Cycle Time <br/><br/>\
* 매우 적은 규칙을 갖고 있는 방법이기에 다른 방법론 특히 스크럼과 함께사용 : TDD, CI도 함께 사용\
',

// 방법론 테일러링
'# 정의 : 기 개발 산출물 최적화 활동 <br/>\
- 프로젝트의 특성에 따라 각 산출물의 적용여부 및 변경여부를 체크하고 변경시에는 사유와 변경 문서명을 기재하는 작업 <br/><br/>\
# 필요성 <br/>\
- 방대한 표준방법론 <br/>\
- 프로젝트 다양성 <br/>\
- 선리스크 제거 <br/>\
- 최적 기술 도입 <br/><br/>\
# 테일러링 기준 <br/>\
- 사업적 특성 : 업무, 재무적 특성 <br/>\
- 프로젝트 특성 : 일정 <br/>\
- 기술적 특성 : 개발언어, 플랫폼, 기술 <br/><br/>\
# 고려사항 <br/>\
1. 환경<br/>\
- 외부 환경 : 법,제도 <br/>\
- 프로젝트 규모/복잡도 <br/>\
- 기존 시스템 이해 <br/><br/>\
2. 수행 <br/>\
- 참여인력, 기술, 개발환경, 방법론 교육 \
',

// MOM, MOA
'# 정의 : Message Queing 기술 이용 비동기 통신 지원 아키텍처 <br/>\
- Message Oriented Middleware(Architecture) <br/>\
- Message Queuing 기술을 이용하여 상이한 어플리케이션간 통신을 비동기식으로 지원하는 메시지 기반 미들웨어 (아키텍처) <br/><br/>\
# 특징 <br/>\
- 비동기식/ 비연결형 메시징 지원 <br/>\
- 큐잉 기술 기반 통신<br/>\
- 느슨한 커플링에 따라 C/S와 객체지향 컴퓨팅 확장 \
',

// EIP
'# 정의 : 메시지 기반 아키텍처 방법론 / 기업 애플리케이션 통합 / Loosely Coupled <br/>\
- Loosely coupled 방식으로 메시지 기반(MOA : Message Oriented Architecture)의 기업 애플리케이션 통합을 정의하는 아키텍처 방법론 <br/>\
- 기업의 분산 컴퓨팅 환경에서 시스템 간 통신, 애플리케이션 통합을 위한 새로운 아키텍처 방법론<br/><br/>\
<img src = "./img/EIP.png" style = "max-width:100%; height:auto;">\
',

// TDD
'# 정의 : Simple Code 추구 목적 Agile 개발 방법론 <br/>\
- Simple code의 추구를 목적으로 Testcase를 먼저 개발하고 Testcase를 통과하는 실제코드를 나중에 개발하는 Agile 개발 방법<br/><br/>\
# Keyword : 요구사항, Testcase, 테스트 자동화, Simple code, Agile, Refactoring, Red 막대, Green 막대, xUnit, 체크인<br/><br/>\
# xUnit(테스트 프레임워크) 도구 : 여러가지 입력을 실행, Test 결과를 Red/Green 막대로 표현, Refactoring 수행 <br/><br/>\
<img src = "./img/TDD.png" style = "max-width:100%; hegiht:auto;">\
',

// ATDD
'# 정의 : TDD테스트 확장 개발 방법론 <br/>\
- Acceptance Test Driven Development <br/>\
- 소스 품질을 점검하는 TDD에서의 테스트를 더 확장하여 전체 시스템 관점에서의 품질을 검증하는 애자일 개발 방법론 <br/><br/>\
# 프로세스 <br/>\
- 사용자 스토리 작성 <br/>\
- 인수(시스템) Testcase <br/>\
- 시스템 구현 <br/>\
- 테스트 수행 \
',

// BDD
'# 정의 : TDD + DDD / SW 개발 방법 <br/>\
- TDD에 DDD(Domain Driven Design)의 스타일(유비쿼터스 언어, 임베디드 도메인 전용 언어 등)을 적용하여 탄생한 SW개발 방법 <br/>\
- 사용자의 스토리로부터 요구사항을 식별, 충족시키는 Outside-in TDD라고도 함 <br/><br/>\
# Keyword : Outside-in, DDD, 유비쿼터스 언어, User Story, 시나리오 <br/><br/>\
# 프로세스 <br/>\
1. 행위 표현 스토리 작성 <br/>\
2. 실패하는 스토리 실행 <br/>\
3. 첫번째 단계 정의 <br/>\
4. 테스트 성공하도록 어플리케이션 코드 작성 <br/>\
5. 시나리오 통과할 때까지 4,5 과정 반복하여 리팩토링 <br/>\
6. 시나리오 통과 <br/>\
7. Application 리펙토링 <br/><br/>\
# BDD 테스트 행위 명세법 <br/>\
<img src = "./img/BDD_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/BDD_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 유비쿼터스랭귀지와 MDD가 DDD 구현위한 핵심 기술임 <br/><br/>\
<img src = "./img/BDD_3.png" style = "max-width:100%; height:auto;">\
',

// DDD
'# 정의 : 설계(개발) 방법론 / 도메인 초점 / 도메인 표현 모델 <br/>\
- 도메인에 초점을 맞추어 도메인을 잘 표현한 모델을 만들고 모델이 최종 SW 개발에 까지 기여하도록 하는 설계(개발) 방법론 <br/><br/>\
# 암기 <br/>\
- 구성 : 메서공유씨 <br/><br/>\
# 주요구성 <br/>\
- Main Model : 구축하고자 하는 도메인의 요구사항을 유비쿼터스 언어를 통해 일관성있게 표현 <br/>\
- Sub Model : 독립적인 업무단위, 프로젝트 팀 단위 로 메인 모델을 구체화하기 위해 분할 <br/>\
- 공유커널 : 도메인 중심의 공유 업무, 횡단 관심사의 공통로직 등을 별도의 공유 커널로 분리 <br/>\
- 유비쿼터스 언어 : Usecase, BPM등의 도메인에 대해 통일된 언어로 의사소통할 수 있는 언어 체계 <br/>\
- CI : 지속적 통합, 공유커널의 변경시 발생할 수 있는 의존성 문제를 파악 및 대응하기 위한 지속적 통합 <br/><br/>\
# 기본 구성요소 <br/>\
- Entity : 고유 식별값 / Employee <br/>\
- Value Object : 데이터 표현(고유x) / Address<br/>\
- Aggregate : 관련 객체 묶음 / 주문-고객-상품<br/>\
- Repositiory : Entity 보관 장소 / 리포트 집계<br/>\
- Service : 별도 분리 / 계좌이체\
',

// AOSE
'# 정의 : 캡슐화된 모델링/개발 방법론 <br/>\
- Agent-Oriented Software Engineering <br/>\
- 특정환경 상황에서 유연하고, 자율적인 조치를 취할 수 있는 설계를 목표로 캡슐화된 컴퓨터 시스템 개발 위한 모델링/개발 방법론 <br/><br/>\
# 특징 <br/>\
- 캡슐화, 목적적응, 반응, 자체판단, 선행성, 상호작용, 영속성 <br/><br/>\
# 방법론 유형 <br/>\
- Gaia : Agent 조직 역할, 상호작용 <br/>\
- Prometheus : 단일 Agent 상세한 정의 <br/>\
- Tropos : 조기 요구분석 중심 \
',

// 68
'# 정의 : 프로그래밍 기법 / 객체지향 보완 / 공통관심사 횡단 관심 분리 / 코드 삽입 <br/>\
- 객체지향기법을 보완하여 공통관심사를 횡단관심으로 분리하여 코드에 삽입하는 프로그래밍 기법<br/><br/>\
# 암기 <br/>\
- 구성(5) : JPAAW <br/><br/>\
# 구성요소 <br/>\
- Join Point : 횡단관심이 삽입될 위치 <br/>\
- Point Cut : 클래스의 어느 Joint Point를 사용할 것인지 선택기능 <br/>\
- Weaving : Join Point에 해당하는 Advice를 삽입하는 과정 <br/>\
- Advice : Joint Point에 삽입되어 동작하는 모듈(Before, After Returning, After Throwing, Around Advise) <br/>\
- Aspect : Product과 Advice를 합쳐놓은 코드 <br/><br/>\
# 프로그램 : Code + Aspect (PointCut + Advise) <br/><br/>\
# 절차 <br/>\
- Primary Concern 코드 작성 <br/>\
- Cross Cutting 코드 작성 <br/>\
- Point Cut 정보이용 Weaving <br/>\
- Point Cut<br/><br/>\
<img src = "./img/AOP.png" style = "max-width:100%; height:auto;">\
',

// SSPL
'# 정의 : 가변 요소 집중 개발 SW 공학 방법론 <br/>\
- System & Software Product Line <br/>\
- SW와 HW 생산성 제고를 위해 단일 제품군 내에서 아키텍처나 컴포넌트, 문서 등 핵심 자산은 재사용하고, 가변요소만 선택적으로 집중 개발해 이를 조립하는 SW공학 방법론 <br/><br/>\
# 특징 <br/>\
- 재사용성 <br/>\
- 아키텍처 기반 <br/>\
- 리엔지니어링 <br/>\
- 포괄적 개발방법론 : 플랫폼 + 프로세스 + SW + 시스템 <br/>\
- 대량고객 맞춤화 <br/>\
- 요구사항 공통성 <br/>\
- 요구사항 가변성 <br/><br/>\
# 구성요소 <br/>\
- 도메인 공학 : 아키텍처 설계, 컴포넌트 생성 <br/>\
- 애플리케이션 공학 <br/>\
- 관리활동 : Core Asset 개발과 Product 개발의 연동/조율 <br/>\
- 기술관리 : 형상,프로세스 <br/>\
- 조직관리 : 구성, 자원 할당 <br/><br/>\
# 4대 핵심요소 : 대량고객맞춤화, 역량 플랫폼, 프로세스, SW와 시스템 통합 <br/><br/>\
# 제품 개량 활동(5개영역) <br/>\
- 제품군 정의 <br/>\
- 제품군 플랫폼 개발 : 도메인 아키스타일, 가변성 모델링, 도메인 V&V, 도메인아키 trade-off평가) <br/>\
- 제품군 멤버 제품 개발 <br/>\
- 재사용 자산 베이스 구축품 개량 <br/><br/>\
# SSPL 방법론 <br/>\
1. Proactive <br/>\
- FORM : SW제품라인 위한 초기 마케팅 및 제품 계획 단계부터 정해진 의사결정을 바탕으로 Feature 모델 구성, 선행적 방식 개발 적합 기법 <br/>\
2. Reactive <br/>\
AHEAD(Algebraic Hierarchical Equation for Application Design) : 반복적 Feature 정렬(Refinement)통해 SW제품라인 점차 확대반응식 (Reactive) 방식 <br/>\
GP(Generative Programming) : 상세한 Feature 모델 바탕으로 프로그램 코드 생성시키는 방식 <br/>\
3. Extractive <br/>\
- PulSE(Productline Software Engineering) : 재공학 통해 기존 제품들로 부터 SW 제품라인 구성하는 추출 방식 적용 용이 <br/><br/>\
# SSPL Framework <br/>\
<img src = "./img/SSPL_Framework.png" style = "max-width: 100%; height: auto;"><br/><br/>\
',

// Feature
'# 정의 : 시스템 행위 논리적 단위 <br/>\
- 제품군 혹은 제품에 대한 일련의 기능 및 품질 요구사항에 근거하여 명문화 된 시스템 행위의 논리적 단위 \
',

// MDA
'# 정의 : 메타모델 정의  기반 아키텍처 / 호환성, 자동성 보장 <br/>\
- 모든 컴포넌트 기술요소의 표준 메타모델을 정의하고 이를 기반으로 구성요소를 정의함으로써 호환성 및 시스템간 자동성을 보장하는 아키텍처<br/><br/>\
# 암기 <br/>\
- 모델(3) : ISC <br/>\
- 표준(4) : UXCM <br/>\
- UML(4) : MUUR <br/><br/>\
# 표준 : MOF -> (instance of) -> UML -> (extends) -> CWMS -> (Mapping to) -> MOF, UML, CWMs <br/>\
1. MOF (Meta Object Facilitator) : 다른 메타 모델 정의 의한 메타-메타 모델 <br/><br/>\
2. UML 2.0 (UML Metamode 다이어그램 추가)<br/>\
- Composite Structure<br/>\
- Interaction Overview<br/>\
- Timing<br/>\
- Communication(Collaboration) 명칭 변경<br/>\
- 메타모델 상세화 : OWG 4계층 모델 <br/>\
- 프레임 제공 : SD/REF 상세화 <br/>\
- 제약사항 정의 지원 : 확장 매커니즘 <br/><br/>\
3. CWM(Common Warehouse Model DW) <br/>\
- 아키텍처를 정의한 메타모델로 데이터 소스, 타킷, 영역간 데이터의 변환을 위한 표준 모델 <br/><br/>\
4. XML : CML Mode Interface MOF 기반 모델을 XML로 매핑하기 위한 표준 사양, XML 기반의 데이터 표준 관리 언어 <br/><br/>\
# UML 4계층 구조 : M3(MOF) > M2(UML) > M1(User model) > M0(runtime Instance) <br/><br/>\
<img src = "./img/MDA_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/MDA_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/MDA_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/MDA_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/MDA_5.png" style = "max-width:100%; height:auto;">\
',

// MDD
'# 정의 : 소스코드 자동생성 개발 방식  <br/>\
- 프로그래밍 언어로 직접코딩하는 방식이 아닌 SW 설계모델을 통해 소스코드를 자동생성하는 개발방식<br/><br/>\
# 암기 <br/>\
- LG CNS 금융 MDD <br/>\
- SK C&C ASD <br/><br/>\
# 현황 <br/>\
1. LG CNS 금융MDD(LG CNS MDD-F)<br/>\
- LG CNS 신한카드 차세대 시스템 : Level 2 모델 -> 소스 부분적 자동 <br/>\
- LG CNS 전북은행 차세대 시스템 : Level 3, 100% 소스, 산출물 생성 <br/><br/>\
2. SK C&C 금융 차세대 시스템 자동 개발 플랫폼 출시(2016.10.17.) <- SK(주) C&C ASD(Automated Software Development) <br/>\
- MDA를 기본 채용하고 있어 시스템 설계와 시스템의 뼈대인 시스템 구조를 빠르게 구성할 수 있고 건축물의 내부 인테리어인 시스템 기능을 구현하는 개발 소스 코딩 또한 MDD 처럼 상당 부분 자동 생성해줌\
',

// ASD
'# 정의 : 코드자동생성 + 유연성, 호환성 중심 방법론 <br/>\
- Automated Software Development <br/>\
- MDD의 비즈니스 기반의 코드자동생성의 장점과 모델의 유연성 및 호환성을 중심으로 한 SW 개발 방법론 \
',

// EDA
'# 정의 : 외부 감지 대응 가능한 IT 구조 / 비즈니스<br/>\
- Application을 통해 이벤트 발생, 응답하는 형태의 이벤트 처리 능력과 프로세스 이벤트를 가진 아키텍처<br/>\
- 비즈니스 상에서 발생하는 이벤트와 비즈니스에 영향을 줄 수 있는 외부 이벤트의 감지와 대응이 가능한 IT구조 (시스템 아키텍처) <br/><br/>\
# 암기 <br/>\
- 특징 : 디N트비 <br/>\
- 구성요소(3) : 메프 구관 통외 <br/>\
- 절차(5) : 이수엔의R <br/><br/>\
# 특징 <br/>\
- Decouple 인터렉션 <br/>\
- N:N 통신 <br/>\
- 이벤트기반 트리거 <br/>\
- 비동기식 <br/>\
[참고] SOA는 roosely coupled, 1:1연결, 순차적프로세스 , 동기식 <br/><br/>\
# 구성 <br/>\
- 이벤트 메타데이터 : 규격, Rule, 이벤트소스, 수신자, 처리자 <br/>\
- 이벤트 프로세싱 : SEP, ESP, CEP <br/>\
- 이벤트 도구 <br/>\
- 이벤트 관리 도구 : 모니터링, 디시보드 <br/>\
- 엔터프라이즈 통합 : by Enterprise Integration Backbone <br/>\
- 통합할 외부 자원 : 외부서비스 <br/><br/>\
# 절차 : 이벤트 -> 이벤트 수집 -> EDA 엔진 복합이벤트 -> 의사결청체계 -> RTE <br/><br/>\
# 처리기법 <br/>\
- SEP(Simple Event Processing) : 실시간 작업 흐름 / BRE, Alert <br/>\
- ESP(Event Stream Processing) : 실시간 정보 흐름 / BAM <br/>\
- CEP(Complex Event Processing) : 이벤트 통한 추론 / 주식 등락 통해 투자 시기 추론 = ESP(Event Stream Processing) + 패턴 감지 기능\
',

// DevOps
'# 정의 : 개발 + 운영 문화, 방법론 <br/>\
- 개발과 운영이 분리되면서 오는 문제점(사후관리, 서비스등)을 해결하기 위해서, 개발과 운영을 하나의 조직으로 합쳐서 팀을 운영하는 문화이자 방법론 <br/><br/>\
# 암기 <br/>\
- 발전단계 : 3 3-9-8 <br/>\
- 구성요소(3) : 품프도<br/>\
1) 품질 : 기통테 <br/>\
2) 프로세스 : CC완릴 <br/>\
3) 도구 : C어프 <br/>\
- 개발 사이클(12) : 요스범이 의솔개테 릴법운서 <br/><br/>\
# 발전 단계 : 초기단계(3) > 성숙조직(9) > DevOps 단계(8) <br/><br/>\
# 핵심요소 CAMS<br/>\
- Culture : 개발, 운영, 책임 공유 <br/>\
- Automation : 개발 ~ 배포 <br/>\
- Measure : 제품 생성 로그, 정보, 지표등 운영이 개발에 피드백 <br/>\
- Share : 개발지식을 운영과정 적용 <br/><br/>\
# 구성요소 <br/>\
- 품질(3) : 품질기준, 통합적 품질보증, 테스트 자동화<br/>\
- 프로세스(4) : Cycle Time 축소, 완료시점 범위 확장-운영동작까지, CD, Release-배포 분리<br/>\
- 도구(3) : CI(Git, 젠킨스), 자동 어플리케이션 릴리즈, 프로비저닝 <br/><br/>\
# 데브옵스 기반 개발 싸이클 <br/>\
- User 요구사항 <br/>\
- User Story <br/>\
- 범위, 우선순위 결정 <br/>\
- 이해관계자 관리 <br/>\
- Dependency 관리 <br/>\
- 솔루션 도입 및 평가방안 <br/>\
- 개발<br/>\
- Testing <br/>\
- Release <br/>\
- 법적관리 <br/>\
- 운영<br/>\
- 서비스(Customer Support)<br/><br/>\
# 도구 <br/>\
- Chef : automation tool, jenkins의 build후 처리와 비슷하지만 훨씬 많은 templet 제공, build 후 취할 활동 미리 정의 후 자동 실행 테스트 수행 <br/>\
- Puppet : Delivery & Deploy tool, WAS 환경의 java deploy 제어/관리, 각 서비스 deploy 수행 결과 수집 및 통계처리 지원<br/><br/>\
# 적용시 고려사항 : 적용조건, 적용가능 분야, 적용시 피해야할 분야(치명적으로 중요성 높은 프로그램, 높은 완결성 요구 프로그램), 툴도입 넘어 조직 문화 변화 병행 필요 <br/><br/>\
* CD : Continuous Delivery : 단위 시험 자동화뿐 아니라 특정환경에서의 인수 시험 자동화 <br/><br/>\
* CI : Continuous Integration : 지속적 품질통제 적용 프로세스 수행 Agile 비교, MSA 활용 <br/><br/>\
<img src = "./img/DevOps_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DevOps_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DevOps_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// 시각적 분석
'# 정의 : 데이터 패턴, 관계 표현 과정 <br/>\
- 데이터의 유의미한 패턴 혹은 데이터간의 관계를 파악하는 것 뿐 아니라 이러한 결과를 사용자가 이해하기 쉽게 화면에 표현하는 것까지의 과정<br/><br/>\
# 암기 <br/>\
- 개발방법론 : UCD <br/>\
- 평가 : 사탐평 <br/><br/>\
# 사용자중심 시각적 분석 연구개발 해외 동향 : HCI에 입각한 사용자 경험적 접근<br/><br/>\
# 사용자중심디자인 원칙에 따른 시각화 툴 개발 방법론 : 사용자중심디자인(UCD)<br/><br/>\
# 사용자 니즈파악 및 시스템 개선을 위한 평가 방법론 : 사용자 경험 연구(UX Research), 탐색적 연구(Exploratory Research), 평가적 연구 (Evaluative Research)\
',

// 시각화 분석
'# 정의 : 분석 및 결과 도출 / 상호작용 가능한 인터페이스 기반 <br/>\
- 상호작용이 가능한 인터페이스를 토대로 이루어지는 분석 및 결과의 도출<br/>\
-  대규모의 복잡한 데이터셋에 대한 이해, 추론 및 의사결정을 돕기 위한 분석 기법 및 상호작용적 시각화 기법<br/><br/>\
# 사용자 상호작용 측면 : 차원축소, 거리함수, 토픽모델링<br/><br/>\
# 결과 해석 측면 : LIME(Local Interpretable Model-agnostic Explanations), 나이브 베이즈 분류기(Naïve Bayes classifier), 의사결정트리(decision tree), CNN Filter Layer, 어텐션 모델(attention model)<br/><br/>\
# 실시간 측면 : BlickDB, imMens, 불필요한 연산 최소화, TopicLens, PIVE',

// 데이터 시각화
'# 정의 : 시각적 표현 / 데이터 분석 결과  <br/>\
- 데이터 분석 결과를 쉽게 이해할 수 있도록 시각적으로 표현하고 전달하는 과정(TTA)<br/><br/>\
# 암기 <br/>\
- DIKW 피라미드 : Data, info, Knowledge, Wisdom <br/>\
- Wisdom 단계로 갈수록 조직성과 이해성이 증가하는 특성 <br/><br/>\
# 절차  <br/>\
- 정보 구조화(데이터수집) : 탐색 -> 분류 -> 배열 -> 재배열 <br/>\
- 정보 시각화 : 시간,분포,관계,비교,여러변수 비교, 공간 시각화 <br/>\
- 정보 시각표현(그래픽 7요소) : 그래픽 디자인 기본원리 - 인터랙션 <br/><br/>\
# 유형 <br/>\
- 시간 : 막대, 점그래프 <br/>\
- 분포 : 파이차트, 트리맵 <br/>\
- 관계 : 히스토그램, 스캐터 플롯 <br/>\
- 비교 : 히트앱, 스타차트 <br/>\
- 공간시각화 : 지도매핑\
',

// 임베디드 SW
'# 정의 : 특정기능 수행 결합 시스템 <br/>\
- 컴퓨터 HW + SW 미리 정해진 특정기능 수행 결합 시스템 <br/><br/>\
# 특징 <br/>\
- HW 제약, 최적화, 실시간 처리지원, 안전성 \
',

// SW 진흥법 개정안 
'# 개념 :  SW 역량 강화 및 발전 기반 조성 법률 <br/>\
- 소프트웨어 진흥에 필요한 사항을 정하여 국가 전반의 소프트웨어 역량을 강화하고 소프트웨어산업 발전의 기반을 조성함으로써 국가경쟁력의 확보, 국민생활의 향상 및 국민경제의 건전하고 지속적인 발전에 이바지하기 위한 법률 <br/><br/>\
# 개정 방향(2020) <br/>\
- 과학/기술 : SW 기초 기술의 진흥, SW 융합 기반 기술의 진흥 <br/>\
- 산업/경제 : SW사업의 선진화, SW 산업의 경쟁력 강화, SW융합으로 전 산업 혁신 <br/>\
- 사회 : 전 국민 SW 기초소양 함양, SW 사회 조성, SW 안전 사회 실현 <br/><br/>\
# 주요개정 내용 (1345, 총산융교선)<br/>\
<img src = "./img/SW진흥법주요개정.png" style = "max-width:100%; height:auto;"><br/><br/>\
1. 1장 총칙 <br/>\
- 제2조 : 소프트웨어와 관련된 서비스 제공 산업 <br/><br/>\
2. 3장 소프트웨어 산업 기반 조성 (역창재인)<br/>\
- 제9조 : 지역별 소프트웨어 산업 진흥 <br/>\
- 제14조 : 창업 활성화 <br/>\
- 제17조 : 지식재산권 보호 <br/>\
- 제22조 : 인력 양성 <br/><br/>\
3. 4장 소프트웨어 융합 및 소프트웨어 교육 (융안진교)<br/>\
- 제28조 : 융합 촉진 <br/>\
- 제30조 : 안전 확보 <br/>\
- 제31조 : 산업 진흥등 <br/>\
- 제32조 : 교육 활성화 <br/><br/>\
4. 5장 소프트웨어 산업 선진화 (민범심비)<br/>\
- 제40조 : 민간투자형 소프트웨어 사업 <br/>\
- 제44조 : 사업의 과업범위 <br/>\
- 제50조 : 과업심의 위원회 <br/>\
- 제52조 : 상용소프트웨어 품질 성능의 비교평가 <br/><br/>\
* 실효성 확보 방안 <br/>\
- 모니터링 강화 : 이해관계자 간 공감대 형성, 제도 적용 모니터링, 후속 조치 <br/>\
- 커뮤니티 마련 : SW 관계자 참여할 수 있는 커뮤니티 생성, 토론의 장 마련 <br/><br/>\
* ITPE 1회 1교시 3번 \
',

// 하도급금지
'# 근거 : SW 산업 진흥법 제 20조의 3 <br/><br/>\
# 주요 내용 <br/>\
- 사업금액의 50% 초과 하여 하도급 금지 <br/>\
- 하도급 받은 SW 사업자의 재하도급 금지 <br/>\
- 사업비 일정비율 초과하는 경우 공동 수급체로 참여유도 \
',

// Open Seed 
'# 정의 : ETRI 개설 사이트 / 멀티코어용 임베디드 SW 플랫폼 / 개발자, 중소기업 공개 <br/>\
- 이기종 멀티코어용 임베디드 SW 플랫폼을 국내 개발자 및 중소기업에게 공개하고 이를 활성화 하기 위해 ETRI에서 개설한 사이트',

// 80
'# 정의 : 그래픽 기반 프로세스 모델링 방법론 / 비즈니스 분석가, 개발자, 관리자 <br/>\
- 비즈니스 분석가, 개발자, 관리자 등의 모든 비즈니스 프로세스 관련자에게 모델링 요소를 제공하는 그래픽 기반의 프로세스 모델링 방법론 \
',

// 81
'# 정의 : 미해결 문제 접근 방법 / 블랙보드, 지식소스, 제어컴포넌트<br/>\
- 결정 가능한 해결방법이 마련되지 않은 문제를 접근하고자 할 때 유용. 블랙보드(blackboard), 지식소스(knowledge source), 제어컴포넌트(control component)로 구성',

// 연동계획
'# 정의 : 반복적 계획 기법 / 점진적 상세화 / 가까운시기 상세 / 미래 작업 상위 수준 계획 <br/>\
- 프로젝트의 특성 중 하나인 점진적 상세화(Progressive elaboration)와 비슷한 특징을 지닌 개념으로 가까운 시기에 완료할 작업은 상세히 계획하고, 미래의 작업은 상위 수준에서 계획하는 반복적인 계획 기법<br/><br/>\
# 절차 (마분WP)<br/>\
- 1단계 : 마스터플랜 계획 <br/>\
- 2단계 : 분류 수준 계획 <br/>\
- 3단계 : WBS 단위 계획 <br/>\
- 4단계 : Work Package 관리, 인수기준 상세화 <br/>\
- 5단계 : Work Package 실제 수준 상세화 <br/><br/>\
# 작성원칙 <br/>\
- 관리 가능 크기 : 할당가능, 소통가능<br/>\
- 분할 레벨 구분 : 3~5단계<br/>\
- 작업 패키지의 적정 크기 : 1 ~ 10% 정도 <br/>\
- WBS 100% : 총합 100 <br/><br/>\
* KPC 25회 3교시 2번\
',

// SW 사업 저장소
'# 정의 : 통계적 데이터 기반 SW 사업지식 데이터 베이스 <br/>\
- 국가기관등에서 추진되는 SW사업(SW개발, 재개발, 유지보수 및 운영)의 수행실적 정보를 수집 및 분석하여 SW사업 추진시 예산수립, 비용산정, 요구사항도출 등을 위한 참조정보(사업규모, 사업금액, 사업기간 등)을 제공하는 객관적이고 정량적인 통계적 데이터 기반의 SW 사업지식 데이터베이스(Repository) <br/><br/>\
# 암기 <br/>\
- 소산법 22조 <br/>\
- 기.재.유.운 <br/>\
- 1억 <br/>\
- 분리제외, 상용제외 <br/><br/>\
# 개념도 <br/>\
- 데이터 제출(input) : 공공부문 발주기관 SW사업 수행 실적 정보(소산법 22조(SW 사업대가지급), 2013이후 제출 법적 의무화) <br/>\
- 데이터 수집 및 관리 : SW 사업정보저장소(총57개 데이터 수집 및 관리(사업기간, 사업금액, 요구사항, 기능점수(FP), 개발언어, 플랫폼정보) <br/>\
- 서비스 활용(output) : 공공부분 발주기관 - 유사사업 정보 활용 통한 예산 수립 참조, 대가산정 시뮬레이션(기능점수 참조 정보제공 예산 및 SW 산업 정책 관련기관 - 예산편성 기초 정보, 정책수립 및 의사결정 참고 정보<br/><br/>\
# 제출 대상 기관 : 소산법 의거 국가기관(국가, 지방자치단체, 국가 또는 지방자치단체가 투자하거나 출연한 법인 또는 그밖 공공기관)<br/><br/>\
# 제출 대상 사업 : 국가기관 등에서 매년 추진되는 SW 사업 <br/>\
- SW 개발 및 재개발 사업 : 발주금액 1억이상 사업 (분리발주 제외, HW, 상용 SW구매 비용 등 포함 통합 발주 금액 기준) <br/>\
- SW 유지보수 및 운영사업 : 발주금액 기준 1억이상 사업(다년계약일 경우 연간 유지보수 비용 기준) <br/><br/>\
# 제출 시점 <br/>\
- 개발 : 계약 및 착수후 1단계(계약 완료후 1개월 이내) <br/>\
- 사업종료후 2단계 : 사업 종료후 1개월 이내 <br/>\
- 재개발 : 개발 사업 동일 <br/>\
- 운영 및 유지보수 : 개발사업 동일 단, 다년계약일 경우 1회 이상 제출 <br/><br/>\
# 제출 절차 <br/>\
- 1차 : 계약 완료후 1개월 이내 : 사업정보와 FP정보를 시스템 등록 <br/>\
- 2차 : 사업 종료후 1개월 이내 : PM이 사업정보, FP정보(정통법), 수준 조사 정보 시스템 등록 <br/><br/>\
<img src = "./img/SW사업정보저장소.png" style = "max-width:100%; height:auto;">\
',

// SW사업 대가산정 가이드
'# 정의 : 유지관리, 운영업무 구분 명확화 개정 <br/>\
- SW 사업 대가산정 가이드 2019년 개정판에서 유지관리 업무와 운영업무의 구분 명확화 개정 진행',

// 옵저버 패턴
'# 정의 : 일대다 의존성 정의 패턴 / 타 객체 내용 반영 <br/>\
- 한 객체의 상태가 바뀌는 경우 의존 관계에 있는 다른 객체들에게 연락이 가고, 자동으로 그 내용이 갱신되도록 일대다 의존성을 정의한 패턴 <br/><br/>\
',

// PMO
'# 정의 : 프로젝트 전담 관리 조직 <br/>\
- Project Management Office <br/>\
- 성공적인 프로젝트 수행을 위해 프로젝트의 자원, 인력, 일정 등을 체계적으로 관리하기 위해 조직된 프로젝트 전담 관리 조직 <br/><br/>\
# 구성요소 <br/>\
1. 관리적 측면 (전재일고형)<br/>\
- 전문 PM : 전체 프로젝트 진행 관리 <br/>\
- 재무 관리자 <br/>\
- 일정 관리자 <br/>\
- 고객인수 담당자 <br/>\
- 형상 관리자 <br/><br/>\
2. 기술적 측면 (품개형)<br/>\
- 품질 관리자 <br/>\
- 개발기술 담당자 : 전문 Skill, Architecture <br/>\
- 형상관리 위원회<br/><br/>\
# Frame work <br/>\
<img src = "./img/PMO.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 활성화 방안 <br/>\
1. 공공 부문 정보화 사업 PMO 제도 현황 <br/>\
<img src = "./img/PMO_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 활성화 방안 <br/>\
- 제도 측면 : 전문가 양성, 예산 확보, 생태계 기반 <br/>\
- 운영 측면 : 참조 모델, 실무적 방법론, 효과 및 효율 <br/><br/>\
* 라이지움 86회 2교시 2번 \
',

// PMBOK 6th 주요개정 내용 <br/>\
'2018.03. 부터 시행 <br/>\
1. 프로젝트 관리자의 역할단원 추가 <br/><br/>\
2. 프로세스 변경 <br/>\
<img src = "./img/PMBOK6_2_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/PMBOK6_2_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/PMBOK6_2_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/PMBOK6_2_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. 애자일 관련 내용. 비즈니스 문서, 조직구조 유형에 대한 내용 강화 <br/><br/>\
4. 각 지식영역에 대해 최근 추세 및 실무 사례, 테일러링시 고려사항 애자일/적응형 환경을 위한 고려사항에 대한 설명 추가 \
',
  
// 지식영역 세부프로세스 49개
'<img src = "./img/KA49.png" style = "max-width:100%; height:auto;">',

);
