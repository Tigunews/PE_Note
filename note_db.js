var question = question.concat(
'데이터 무결성',
'ACID',
'데이터 독립성',
'[데이터 독립성]- ANSI SPARC 3계층',
'병행제어 = 동시성제어',
'[동시성제어]- 트랜잭션 직렬화',
'[동시성제어]- Timestamp',
'[동시성제어]- Locking',
'회복기법',
'[회복기법]- WAL정책',
'정규화',
'[정규화]-암스트롱 공리, 함수폐포, 자기참조관계',
'관계대수',
'관계해석',
'이벤트 소싱(Event Sourcing)',
'다차원 모델링',
'[다차원 모델링]- 스타스키마',
'Data Mining',
'[Data Mining]- Text Mining',
'[Data Mining]- 단어구름(Word Cloud)',
'[Data Mining]- Co-Word Analysis',
'[Data Mining]- 탐색적 데이터 분석(Exploratory Data Analysis)',
'[Data Mining]- 확증적 데이터 분석(Confimatory Data Analysis)',
'[Data Mining]- 토픽 모델링',
'[Data Mining]- 연관규칙(지지도,신뢰도,향상도)',
'[Data Mining]- Opinion Mining',
'[SNA]- 중심성(Centrality)',
'추천시스템(recommendation systems)',
'CKAN(Comprehensive Knowledge Archive Network)',
'DQM',
'DQM3',
'ISO/IEC 20943-5',
'DQC',
'[DB 보안]-벨-라파듈라(Bell-Lapadula) 모델',
'[DB 보안]-비바(Biba) 모델',
'[DB 보안]-클락-윌슨(Clack and Wilson) 모델',
'[인덱스]- 인덱스 구조(B,R,T-Tree)',
'Clustering Factor',
'NewSQL DBMS',
'데이터 리터러시(Data Literacy)',
'Join',
'통계 관련 데이터',
'데이터 표준화',
'데이터 표준 관리도구',
'재현정보, 차등정보보호',
'[DBMS 최적화]- Optimizer',
'[DBMS 최적화]- Data Block Access',
'[DBMS 최적화]- Parallel Operation',
'ERD',
'관계형 데이터 모델', 
'[BigData]- BigData 분석 방법론',
'[BigData]- DCAT',
);

var answer = answer.concat(
// 데이터무결성 
'# Data 무결성 : 데이터 보호 성질 / ACID / 무효갱신 <br/>\
- 데이터의 ACID 확보 위해 무효갱신으로부터 데이터를 보호하는 성질 <br/>\
- 주어진 속성의 값이 그 속성이 정의된 도메인에 속한 값이어야 한다는 규정 <br/><br/>\
# Database 무결성 : DB 제약 조건 / 일관성 / 정확성 <br/>\
- 인가자가 수행하는 모든 작업에 있어 데이터베이스에 저장된 데이터 일관성(Consistency)과 정확성을 유지하기 위한 DB 제약 조건 <br/><br/>\
# 암기 <br/>\
- 무 : 일정 <br/>\
- 방법 : 선절 <br/>\
- 기법 : 동회정보 <br/>\
- 종류(5) : 개참속키사 <br/><br/>\
# 필요성 <br/>\
- Data 신뢰도 유지<br/>\
- Data 효율화<br/>\
- 생산성 향상 <br/><br/>\
# 유지기법 <br/>\
- 동시성제어(락타낙다) <br/>\
- 회복(로그체A) <br/>\
- 정규화 <br/>\
- 보안 <br/><br/>\
# 유지방법 <br/>\
- 선언적 무결성 : PK, FK, Data Type, Check, Default <br/>\
- 절차적 무결성 : Trigger, Stored Procedure, Application <br/><br/>\
# 종류(5) <br/>\
- 개체 : PK IS NOT NULL <br/>\
- 참조 : 부모/자식 Cascading - Foreign Key, Trigger, Check <br/>\
- 속성 : Check, Default, Rule <br/>\
- 키 : 키중복불가 <br/>\
- 사용자 정의 : User Define Data Type <br/><br/>\
<img src = "./img/DataIntigrity_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DataIntigrity_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 성능과 TradeOff <br/><br/>\
<img src = "./img/DataIntigrity_3.png" style = "max-width:100%; height:auto;">\
',

// ACID
'# 정의 : 데이터베이스 트랜잭션이 안전하게 수행된다는 것을 보장하기 위한 성질을 가르키는 약어 <br/><br/>\
# 설명 <br/>\
1. Atmoicity (원자성) <br/>\
- 개념 : 하나의 트랜잭션의 모든 연산이 데이터베이스에 반영되거나 전혀 반영되지 않아야 함(All or Nothing) <br/>\
- 구현 기법 : Commit or Rollback 처리<br/>\
- 예시 : 자금 이체는 성공할 수도 실패할 수도 있지만, 보내는 쪽에서 돈을 빼 오는 작업만 성공하고 받는 쪽에 돈을 넣는 작업을 실패해서는 안됨.<br/>\
<img src = "./img/ACID_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Consistency (일관성) <br/>\
- 개념 : 일관딘 상태의 데이터베이스에서 하나의 트랜잭션 정확히 수행시 또 다른 일관된 상태 유지 <br/>\
- 구현 기법 : 도메인 무결성, 릴레이션 무결성 <br/>\
- 예시 : 모든 계좌는 잔고가 있어야 한다면 이를 위반하는 트랜잭션은 중단됨 <br/><br/>\
<img src = "./img/ACID_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Isolation (고립성) <br/>\
- 개념 : 하나의 트랜잭션이 완료되기전까지는 갱신중인 데이터에 다른 트랜잭션이 접근하지 못하도록 제한 <br/>\
- 구현 기법 : SQL-92, Isolation Level <br/>\
- 예시 : 은행 관리자는 이체 작업을 하는 도중에 쿼리를 실행하더라도 특정 계좌간 이체하는 양쪽을 볼 수 없다. <br/>\
<img src = "./img/ACID_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
4. Duarability (지속성) <br/>\
- 개념 : 하나의 트래잭션이 완료된 이후에는 장애가 발생해도 갱신한 데이터 손실 방지 <br/>\
- 구현 기법 : Archive, Log, Redo/Undo 기반 회복 <br/>\
- 예시 : 시스템 문제, DB 일관성 체크등을 하더라도 유지되어야 함을 의미<br/>\
<img src = "./img/ACID_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 4교시 5번\
',

// 데이터 독립성
'# 정의 : 스키마 정의 변경 성질 / 상위 하위 / <br/>\
- 상위 단계 스키마 정의에 영향주지 않으면서 하위 단계 스키마 정의를 변경할 수 있는 성질 <br/><br/>\
# 유형 <br/>\
1. 논리적 독립성 <br/>\
- 개념 : 개념 스키마의 변화로부터 외부 스키마가 영향x<br/>\
- 응용프로그램 다시 작성 필요 없이 개념 스키마 변경 가능 (논리적 구조사상) <br/>\
- 뷰, 테이블 사이 독립성 <br/>\
- ex) 응용프로그램 UI <br/><br/>\
2. 물리적 독립성<br/>\
- 내부 스키마 변화 개념스키마 영향x<br/>\
- 외부스키마에도 영향미치지x (물리적 구조 사상)<br/>\
- ex) 데이터모델(Entity, Attribute, Relationshp, Table, Column등) <br/><br/>\
# 효과 <br/>\
- 유지보수성 <br/>\
- 중복 데이터 최소화 <br/>\
- 유연성 및 효율성 증대 \
',

// [데이터 독립성]- ANSI SPARC 3계층
'# 정의 : DBMS 구현 일반적 아키텍처 / 1978년 제안 / <br/>\
- 1978년에 제안된 현재의 대부분의 상용 DBMS 구현에서 사용되는 일반적인 아키텍처 <br/><br/>\
# 아키텍처 3단계 <br/>\
- 외부 스키마 : 논리적 독립성 <br/>\
- 개념 스키마 : 물리적 독립성 <br/>\
- 내부 스키마 <br/><br/>\
# 스키마간 사상 <br/>\
- 외부/개념 사상 : 논리적 독립성 제공 <br/>\
- 개념/내부 사상 : 물리적 독립성 제공 <br/><br/>\
# 예시 <br/>\
- 외부 스키마 : 직원-성명 <br/>\
- 개념 스키마 : 직원:인사번호(문자열,기본키) <br/>\
- 내부 스키마 : 인사번호: 문자열(1) <br/><br/>\
<img src = "./img/ANSISPARC_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DB_01.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
',

// 병행제어 = 동시성제어
'# 정의 : 직렬 가능성 보장 기법 / 트랜잭션 / 동시 접근 / 무결성 / 성공 실행 <br/>\
- 동일 데이터에 여러 트랜잭션 동시 접근시 데이터 무결성을 확보하고, 성공/실행지원하는 직렬가능성 보장기법 <br/><br/>\
# 암기 <br/>\
- 문제 : 갱현모연회<br/>\
- 기법 : 락타낙다 <br/><br/>\
# 문제 <br/>\
- 갱신손실 : DW-덮어쓰기 <br/>\
- 현황파악 오류 : DR-읽어갔는데 롤백 <br/>\
- 모순성 : NRR-Sum 하는 중 일부 값 바뀜 <br/>\
- 연쇄복기 <br/>\
- 회복 불능 <br/><br/>\
# 기법 <br/>\
- 락킹 : 상호배제 기능 제공, 2PL, 공유락, 전용락, Lock Escalation-연쇄복귀 <br/>\
- 타임스탬프 : 시스템 시계, 논리적 계수기 <br/>\
- 낙관적 기법 <br/>\
- 다중버전 <br/><br/>\
<img src = "./img/병행제어_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/병행제어_2.png" style = "max-width:100%; height:auto;">\
',

// 트랜잭션 직렬화
'# 정의 : 동시 실행 가능성 판별 기법 <br/>\
- 동시에 수행된 트랜잭션 간의 Read, Write 연산에 의한 충돌 발생시 데이터베이스 일관성 보장 위한 동시실행 가능성(충돌 직렬성) 판별 기법 <br/><br/>\
# 충돌 발생유형 <br/>\
<img src = "./img/Serialization_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 직렬화 수행 <br/>\
<img src = "./img/Serialization_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// Timestamp
'# 정의 : 시간 기반 직렬가능성 보장, 동시성 제어 기법 <br/>\
- 시스템 진입시 트랜잭션별 고유 Timestamp 부여, 상충 연산의 Tiemstamp 기반 직렬가능성 보장, 동시성 제어 기법 <br/><br/>\
# 특징 <br/>\
1. 순서할당 방법 <br/>\
- System Clock <br/>\
- 논리적 계수기 <br/><br/>\
2. Timestamp 종류 <br/>\
- W-Timestamp : 성공한 Write(X) 트랜잭션 중 가장 큰 Timestamp <br/>\
- R-Timestamp : 성공한 Read(X) 트랜잭션 중 가장 큰 Timestamp <br/><br/>\
# 제어 원리 <br/>\
1. 트랜잭션(Ti) 가 Read(X) 시도 <br/>\
- Timestamp(Ti) < W-Timestamp(X) <br/>\
1) Ti 이후 생성된 트랜잭션이 데이터 X값 갱신 <br/>\
2) Read 연산 거부, Ti 롤백 <br/><br/>\
- Timestamp(Ti) >= W-Timestamp(X) <br/>\
1) Ti 이전 생성된 트랜잭션이 쓴 데이터 읽기 <br/>\
2) Read 연산 실행, R-Timestamp 갱신 <br/><br/>\
2. 트랜잭션(Ti)가 Write(X) 시도 <br/>\
- Timestamp(Ti) < R-Timestamp(X) <br/>\
1) Ti 이후 생성된 트랜잭션에서 데이터 참조 <br/>\
2) Write 연산거부, Ti 롤백 <br/><br/>\
- Timestamp(Ti) < W-Timestamp(X) <br/>\
1) Ti 이후 생성된 트랜잭션이 데이터 갱신 <br/>\
2) Write 연산 거부, Ti 롤백 <br/><br/>\
- Timestamp(Ti) >= R-Timestamp(X) or W-Timestamp(X) <br/>\
1) Write 연산 실행, W-Timestamp 갱신 <br/><br/>\
* Thomas 기록규칙 활용, 사용하지 않는 연산에 대한 불필요한 롤백 처리 제한을 통한 성능 향상 가능 <br/><br/>\
* KPC 94회 4교시 5번\
',

// Locking
'# 정의 : 데이터 접근 제어 동시성 제어 기법 <br/>\
- 두 개의 연산 lock와 unlock 연산으로 트랜잭션의 데이터 접근을 제어하는 동시성 제어기법 <br/><br/>\
# Lock 종류 <br/>\
1. 기본 Lock <br/>\
- S (Shared) : R가능, 다른 S타입 Lock 설정 가능 <br/>\
- X (Exclusive) : RW가능, Lock 설정 불가 <br/><br/>\
2. 의도형 Lock <br/>\
- IS (Intension Shared) : 자손 S <br/>\
- IX (Intension Exclusive) : 자손 S, X <br/>\
- SIX (Shared and Intension Exclusive) : 서브트리 S, 자손 X <br/><br/>\
# Lock 양립성 <br/>\
<img src = "./img/Lock양립성.png" style = "max-width:100%; height:auto;"><br/><br/>\
',
// 회복기법
'# 정의 : 복원 기법 / DB 장애시 / 발생이전 <br/>\
- DB에 장애 발생시 발생 이전의 일관된 상태(Consistent State)로 복원하는 기법 <br/><br/>\
# 암기 <br/>\
- 장애종류(3) : 트시미사 <br/>\
- 회복종류(2) : 원-덤로, 조-리언 <br/>\
- 회 : 로체그A미 <br/><br/>\
# 장애종류 <br/>\
- 트랜잭션 : 논리오류, 잘못된 입력, 데이터 불량, 가용자원, 과다한 요구 <br/>\
- 시스템 : HW 오동작, 전원고장 <br/>\
- 미디어 : 디스크헤더 고장 <br/>\
- 사용자 : 사용자 DB 이해부족, 관리 실수 <br/><br/>\
# 회복기법 요소 <br/>\
- 회복원칙 : (중복)-Dump(or Archive), Log(or Journal) <br/>\
- 회복조치 : Redo, Undo <br/>\
- 시스템 : Recovery manager <br/><br/>\
# 회복기법 <br/>\
- 로그기반 : 지연갱신, 즉시갱신 <br/>\
- 그림자 페이징 <br/>\
- 체크포인트 회복기법 <br/>\
- AERIS <br/>\
- 미디어 기반 <br/><br/>\
<img src = "./img/회복기법_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/회복기법_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/회복기법_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/회복기법_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/회복기법_5.png" style = "max-width:100%; height:auto;">\
',

// [회복기법]- WAL 정책
'# 정의 : 데이터 버퍼관리 정책 / 메모리 버퍼에 저장한 페이지 / 언제 디스크에 기록 <br/>\
- White-Ahead Logging <br/>\
- 메모리 버퍼에 저장한 페이지가 언제 디스크에 기록될 것인가를 명시하는 데이터 버퍼관리 정책<br/><br/>\
# STEAL <br/>\
- 다른 트랜잭션이 메모리 버퍼를 사용하려고 하면 가장 오랫동안 사용하지 않은(LRU, Least Recently Used) DIRTY 페이지를 데이터베이스 볼륨에 Flush하고 버퍼를 해제(Free)함<br/>\
- STEAL 정책을 사용하면, 트랜잭션을 롤백할 때 과거 데이터로 복구하기 위해 UNDO 로깅이 필요<br/><br/>\
# NO STEAL <br/>\
- 트랜잭션이 완료될 때까지 DIRTY 페이지를 반드시 버퍼에 유지함<br/>\
- 진행중인 모든 트랜잭션들에 의해 변경된 모든 페이지를 유지할 만큼 충분한 버퍼 공간 필요<br/><br/>\
# FORCE <br/>\
- 커밋(Commit)할 때 트랜잭션이 갱신한 모든 페이지를 즉시 데이터베이스 볼륨에 반영함 <br/>\
- FORCE 정책을 사용하면 트랜잭션을 커밋할 때마다 매번 디스크 쓰기를 해야하므로 성능에 영향을 미침 <br/>\
- 짧은 시간에 여러 트랜잭션에 의해 하나의 페이지가 20번 수정된다면, 디스크도 20번 쓰여야함 <br/><br/>\
# NO FORCE <br/>\
- 커밋 과정 중 트랜잭션이 갱신한 모든 페이지를 즉시 데이터베이스 볼륨에 반영하지 않음<br/>\
- 데이터베이스 볼륨에 커밋이 반영되지 않은 상태에서 다른 트랜잭션이 해당 페이지를 갱신하는 경우에 페이지를 다시 쓰는 데 드는 비용을 줄일 수 있음<br/>\
- 단 시스템 고장이 발생한 경우에도 성공적으로 커밋된 트랜잭션에 의한 데이터 변경을 보장하기 위해서 REDO 로깅이 필요함<br/><br/>\
* NO STEAL/FORCE 정책 : 구현 Good 성능 Bad <br/>\
* STEAL/NO FORCE 정책 : 성능 Good\
',

// 정규화
'# 정의 : 무손실 분해 규칙 / 이상현상 / 속성간 종석 관계 제거 <br/>\
- 이상현상 야기하는 속성간 종속관계 제거하는 무손실 분해 규칙 <br/>\
- 데이터 중복을 해소하기 위해서 릴레이션을 분해하는 과정 <br/>\
- 제1정규형 ~ 제5정규형, BCNF가 실무적으로 활용되며 나머지는 연구용<br/>\
- 정규화는 논리적 설계 단계에서 수행 <br/><br/>\
# 암기 <br/>\
- 원칙(3) : 무중분 <br/><br/>\
# 원칙(3) : 정보무손실, 중복성감소, 분리원칙 <br/><br/>\
<img src="./img/DB_4.PNG" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/DB_4_2.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 설명 <br/>\
<img src = "./img/123BCNF.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/5NF.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 예제 <br/>\
1. 2,3NF <br/>\
<img src = "./img/NFex_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. BCNF <br/>\
{학번,과목} -> 교수 <br/>\
교수 -> 과목 <br/><br/>\
3. 4NF<br/>\
<img src = "./img/NFex_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 그리타 \
',

// [정규화]- 암스트롱공리, 함수폐포, 자기참조관계 
'# 암스트롱 공리 : 함수 종속 성질 추론 규칙 <br/>\
- 릴레이션 R에 대해 X,Y,Z라는 애트리뷰트의 집합이 주어졌을 경우 여러가지 함수종속의 성질을 유도해 낼 수 있는 추론 규칙 <br/><br/>\
# 함수폐포 : 추론 가능 함수 종속성 집합 <br/>\
- F로부터 추론할 수 있는 모든 가능한 함수적 종속성들의 집합 (FD의 집합 F의 함수폐포(Closure), F+) <br/><br/>\
# 자기참조 관계 : Entity 간 관계 형태 <br/>\
- 하나의 Entity 타입 내에서 Entity와 Entity간 관계를 맺고 있는 형태 <br/>\
- 1:1 자기참조 : 사건번호 - 자사건번호 <br/>\
- 1:N 자기참조 : 조직코드 - 상위 조직코드 <br/>\
- N:M 자기참조 : 부품코드 - 상위 부품코드 <br/>\
-> 대응방법 : 관계 엔티티 추가, PK 의한 방법, 부모 엔티티 속성 추가 <br/><br/>\
# 예시 : Relation = {A,B,C,G,H,I} FD = {A->B, A->C, CG->H, CG->I, B-H} <br/>\
- 암스트롱 공리 적용 : A->BC , CG->HI, A->H, AG->H <br/>\
- 함수폐포 : A+={A,B,C,H}<br/><br/>\
# 암기 <br/>\
- 기 : 재부이 <br/>\
- 부 : 합분의 <br/>\
- 자기참조 대응 : 관피부 <br/><br/>\
<img src = "./img/암스트롱공리_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암스트롱공리_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src= "./img/DB_7.PNG" style = "max-width:100%; height:auto;">\
',

// 관계 대수
'# 정의 : 절차적 언어 / 질의 결과 생성 / 연산 순서 명시 <br/>\
- 질의에 대한 결과를 생성하기 위해 수행해야 할 연산의 순서를 명시하는 절차적 언어 -> 상용 관계 DBMS의 범용 SQL 이론적 기초 <br/><br/>\
<img src = "./img/관계대수_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/관계대수_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/관계대수_3.png" style = "max-width:100%; height:auto;">\
',

// 관계 해석
'# 정의 : 비 절차적 언어 / What / <br/>\
- 관계 데이터 모델에서 원하는 정보가 무엇이라는 것만 선언하는 비 절차적 언어 <br/><br/>\
# 유형 <br/>\
- 튜플 관계 해석 : 튜플 중심, 튜플 변수를 사용하는 관계 해석, 테이블의 레코드 추출시 범위 한정, 튜플 변수는 릴레이션의 튜플들을 범위로 가지는 변수 <br/>\
- 도메인 관계 해석 : 어트리뷰트(속성) 중심, 튜플변수 대신 도메인변수(domain variables) 사용, 도메인 변수는 한 애트리뷰터의 도메인을 범위로 가짐, 차수가 n인 릴레이션의 경우 n개의 도메인 변수를 사용함 <br/><br/>\
# 예시 : 학생이름전체 {S.이름 | Student(s)} <br/><br/>\
<img src = "./img/관계해석_1.png" style = "max-width:100%; height:auto;">\
',

// 8
'# 정의 : 데이터 저장 기법 / 이벤트 <br/>\
- 순차적으로 발생하는 이벤트를 모두 저장하는 데이터 저장 기법\
',

// 다차원 모델링
'# 정의 : DW 요소 기술 / 대용량 / 빠른 성능 / 분석 <br/>\
- 대용량 데이터를 다양한 관점에서 빠른 성능으로 분석하기 위한 DW 요소기술 <br/><br/>\
# 암기 <br/>\
- 구성요소(4) : 사차속계 <br/>\
- 모델링기법(2) : 스플 <br/><br/>\
# 구성요소 : 사실, 차원, 속성, 속성계층 <br/><br/>\
1. 사실 <br/>\
- Fact <br/>\
- 사용자가 가장 먼저 조회하는 테이블 <br/>\
- 모든 차원들의 정보를 취합 <br/>\
- 예시 : 당해년도 월별 매출 규모 <br/><br/>\
2. 차원 <br/>\
- Dimension <br/>\
- 사실로부터 Drill-Down된 테이블 <br/>\
- 개별 사실에 대한 상세 정보 <br/>\
- 예시 : 5월달의 상품별 매출 <br/><br/>\
3. 속성 <br/>\
- Attribute <br/>\
- 개별 차원테이블에 소속되어 있는 분류기준 <br/>\
- 검색과 여과 기능 <br/>\
- 예시 : 5천개 이상 판매된 상품목록 <br/><br/>\
4. 속성계층 <br/>\
- Hireachy <br/>\
- 차원에 소속된 속성간의 계층관계 <br/>\
- 위와 아래 이동의 네비게이션 역할 <br/>\
- 예시 : 매장 테이블의 지역코드와 지역 테이블의 지역코드-지역명 <br/><br/>\
# 모델링 기법 : 구조,성능,관리,사용성, 정규화,특징,장단점 <br/>\
- 스타 스키마 : 사실 TB축 비정규화된 자원 TB 별 모양 배치 <br/>\
- 스노우 플레이크 : 사실 TB중심 정규화된 차원 TB배치, 속도저하, 소용량 다차원 대한 계층화 분석 가능 <br/>\
- 별자리 스키마(Constellation Schema Model) : 각기 다른 Fact 테이블들이 동일한 Dimension 테이블과 조인되는 구조 <br/><br/>\
# 절차 <br/>\
- 요구분석, Fact분석 : OLAP 데이터 분석 <br/>\
- 차원분리 : 사용자 주요관점 식별, 사실/차원 속성분리 <br/>\
- 스키마 정의 : Star, Snow Flake, Constellation <br/>\
- 다차원 테이블 : 사용자 View 중심 <br/>\
- 인덱스 적용 : 모델링 성능 향상위한 Bitmap, Star Join 적용 <br/><br/>\
<img src = "./img/다차원모델링_1.png" style = "max-width:100%; height:auto;">\
',

// 스타 스키마
'# 정의 : 주키, 추가적인 사실들로 이루어진 스키마 <br/>\
- 데이터 웨어하우스에서 한 개의 사실 테이블과 주 키 및 각 차원과 추가적인 사실들로 이루어진 스키마 <br/>\
- 정규화된 Fact Table을 중심으로 비정규화된 Dimension Table들이 배치되는 형태의 모델링 기법 <br/><br/>\
# 구성요소 <br/>\
1. 사실 <br/>\
- 도메인의 특정 단면이나 활동을 수치로 표현 <br/>\
- 사례 : 납입 보험료, 신규계약 <br/><br/>\
2. 차원 <br/>\
- 주어진 사실에 대한 추가적인 관점을 제공하는 특성 <br/>\
- 사례 : 부서 <br/><br/>\
3. 속성 <br/>\
- 각 차원 테이블이 가지고 있는 속성 <br/>\
- 사례 : 본부, 지점, 영업소 <br/><br/>\
4. 속성 계층 <br/>\
- 차원 내에 정의된 속성들 간에 존재하는 특성 <br/>\
- 사례 : 지점의 Parent는 본부 <br/><br/>\
# 작성 절차 <br/>\
1. Grain 정의 <br/>\
- 팩트 테이블 내 필수 항목 선정 <br/>\
2. Fact 정의 <br/>\
- 그레인의 특성을 그룹화 할 수 있는 테이블 도메인 정의 <br/>\
3. Dimension 정의 <br/>\
- 팩트 이외의 보여줄 수 있는 세부 테이블의 구성(비 정규화) <br/>\
4. 스타 스키마 모델 생성 <br/>\
- 팩트를 중심으로 Dimension의 구성 적절성 확인 <br/><br/>\
<img src = "./img/StarSnow.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 1교시 13번\
',

// 10
'# 정의 : 정보 도출 방법 / 데이터 집합 / 사용자 요구 /<br/>\
- 데이터 집합에서 사용자 요구 따라 유용 가능성 있는 정보 도출 방법 <br/><br/>\
# 암기 <br/>\
- 기법(7) : 신분연연군특이 <br/>\
- 절차(6) : 샘클오익모레피 <br/>\
- 평가기준(3) : 지신향 <br/><br/>\
# 기법 : 신경망, 분류분석, 연관성 탐사, 연속성 탐사, 군집 탐사, 특성발견, 이상치 탐지 <br/><br/>\
# 알고리즘 : 의사걸정나무, 신경망, 사례기반 추론, 연관성 규칙, 군집분석(k-means), 회귀분석, 일반화, 가시화 <br/><br/>\
# 절차 <br/>\
1. Sampling : 표본 추출 <br/>\
2. Cleansing : 전처리(Pre-Processing) <br/>\
3. 오류 제거 <br/>\
4. Exploration : 자료의 탐색을 통해 기본정보 획득 및 분석 <br/>\
5. Modeling : 알고리즘 선정 및 적용하여 마이닝 수행, 지도학습 알고리즘(의사결정, 신경망), 자율학습(연관성, 군집) <br/>\
6. Reporting : 결과 분석/ 평가, 반복수행 여부 결정 <br/>\
7. FeedBack <br/><br/>\
# 연관성 규칙 평가기준<br/>\
- 지지도 P(A∩B)<br/>\
- 신뢰도 P(B|A)= P(A∩B)/P(A) <br/>\
- 향상도 P(B|A)/P(B) = P(A∩B)/P(A)*P(B)<br/><br/>\
# 연관성 규칙 절차 : 트랜잭션 -> 데이터 추출,선택 -> 신뢰도,지지도 계산 -> 패턴 평가 -> 연관패턴 <br/><br/>\
# 사례 : 의학/과학, 마케팅, 보안(범죄자 심리 분석)<br/><br/>\
* 지지도 : 전체 거래중 품목 AB 동시 포함 거리 비 <br/>\
* 신뢰도 : A->B 연관규칙에서 품목A 포함거래중 AB 동시 포함 확률 <br/>\
* 향상도 : A->B 연관규칙에서 임의B 구매경우 대비 A와 관계되어 구매되는 비\
',

// 11 
'# 정의 : 정보 도출 기법 / 비 조화 텍스트 문서 <br/>\
- 비 조화된 텍스트 문서에서 가치있는 정보를 도출하는 기법 <br/><br/>\
# 암기 <br/>\
- 기법 : 분클토질컨듀 <br/><br/>\
# 절차 : 데이터 수집 > 전처리 > 정보추출 > 클러스터링/범주화 > 요약/검색 <br/><br/>\
# 기법 : 문서분류, 문서클러스터링, 토픽 트래킹, 질의응답(NLP), Concept Linkage(문서간 의미적 연결성), 듀오 마이닝(Data Mining, Text Mining 동시 적용)\
',

// 12
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

// 13
'# 정의 : 내용 분석 기법 / 문장 / 단어 규칙 / 핵심개념 / 관계식별<br/>\
- 문장 안에서 함께 사용되는 단어 규칙을 조사해서 문서의 주제와 관련된 핵심 개념이 무엇이고 이들의 관계가 어떤지 식별하는 내용 분석 기법 <br/><br/>\
# 암기 <br/>\
- 절차 : 수전동 <br/><br/>\
# 절차 <br/>\
1. 데이터 수집 <br/>\
2. 데이터 전처리 과정 : 텍스트 마이닝, 불용어 제거, 품사 태깅, 주석 통해 제시된 명사구 선택 <br/>\
3. 동시 출현 단어 분석 과정 \
',

// 14
'# 정의 : 분석 기법 / 관찰, 가설 / 필요한 데이터 형태 추출 <br/>\
- 관찰한 현상을 보고 가설을 설정하고 필요한 데이터의 형태를 추출하는 분석 기법',

// 15
'# 정의 : 분석 기법 / 의사결정 / 수집, 분석, 활용 <br/>\
- 의사결정을 하기 위해 목적에 적합한 데이터를 수집하고 분석하여 결과를 활용하는 분석기법',

// 16
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

// 중심성 이론
'# 정의 : 상대적 중요성 척도 / 그래프, SNS / Vertex, Node <br/>\
- 그래프 이론에서 중심성이란 그래프 혹은 사회 연결망에서 꼭짓점(vertex) 혹은 노드(node)의 상대적 중요성을 나타내는 척도 <br/><br/>\
# 암기 : 유형-연근매고 조카페 <br/><br/>\
# 유형 : 이 중심성은 지수로 계산되는데, 이 중심성 지수는 그 계산 방법에 따라 나뉨 <br/>\
1. 연결 중심성(Degree Centrality)<br/>\
- 개념 : 특정 노드에 연결된 모든 Edge의 개수 합 <br/>\
- 중심성 지표의 완전한 신뢰할 수 없음 <br/>\
- 지표 : 노드 연결개수 <br/>\
- 유형<br/>\
(1) 내향 연결정도(in-Degree) : 중요한, 명망, 인기 정도 <br/>\
(2) 외향 연결정도(out-Degree) : 영향력, 개방성, 사교성 정도 <br/>\
- 측정요소 <br/>\
(1) 개별 연결정도 중심성 : 액터간 연결 정도 <br/>\
(2) 그룹 연결정도 중심성 : NW내 액터간 개별 연결 정도 중심성의 분포 정도 <br/><br/>\
2. 근접 중심성(Closeness Centrality)<br/>\
- 개념 : 특정 한 액터와 가장 근접해 있는 액터들 간의 직/간접적 연결 고려하여 중심성을 측정하는 방법 <br/>\
- 지표 : 최소단계(한노드->다른노드 도달 최소단계) <br/>\
- 측정요소 <br/>\
(1) Farness : 최소근접단계합 <br/>\
(2) Closeness : 1/Farness <br/>\
(3) nCloseness : 100 * (n-1) * Closeness <br/><br/>\
3. 매개 중심성(Betweenness Centrality) <br/>\
- 개념 : 네트워크 내에서 한 액터가 담당하는 매개자 혹은 중재자 역할의 정도로서 중심성을 측정하는 방법 <br/>\
- 거쳐가면 1, 거쳐가지 않으면 0 <br/>\
- 지표 : 최다경로 <br/>\
- 측정요소 : 경로횟수, 최단거리 경우수 <br/><br/>\
4. 고유벡터 중심성(Elgenvector Centrality) <br/>\
- 개념 : 중요한 노드에 연결된 노드가 중요하다는 관점에서 중심성을 측정하는 방법 (다른 노드 중심성 반영) <br/>\
- 연결 중심성 약점 개선 <br/>\
- 방향성 비순환 그래프의 경우 중심성 0 <br/><br/>\
5. 조화 중심성(Harmony Centrality, Ch) <br/>\
- 개념 : 근접중심성과 유사하지만 최단거리의 역수를 평균을 취하여 평가하는 계산법 <br/>\
- 조화수열 명명 <br/><br/>\
6. Kartz(Kartz Centrality, Ck) <br/>\
- 개념 : 방향성 비순환 그래프와 같은 경우에 중심성을 계산하기 위해 모든 노드 중심성에 특정 상수값을 더하는 방식 <br/>\
* 고유벡터 중심 변형 버전 Ck = 알파 ACk + 베타1<br/><br/>\
7. 페이지 랭크(Page Rank, Cp) <br/>\
- 개념 : 각 노드의 영향력을 다른노드로 전파시 외부 향하는 모든 간선의 수로 나누어 Out-Edge로 지나치게 퍼지는 현상을 방지하는 알고리즘 중심성 <br/>\
* 알고리즘 중 가장 성공한 알고리즘, Kartz 중심성 계산의 개선버전, 노드 영향력의 지나친 전파 방지 <br/><br/>\
<img src = "./img/Centrality_1.PNG" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/Centrality_2.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Centrality.png" style = "max-width:100%; height:auto;">\
',

// 19
'# 정의 : 아이템 제공 시스템 / 정보 필터링 <br/>\
- 정보 필터링을 사용하여 사용자에게 흥미로운 정보 아이템을 제공하는 시스템 (TTA) <br/><br/>\
# 암기 <br/>\
- 유형 : 평순 <br/>\
- 기법 : 컨협 <br/>\
- 문제 : 콜스 <br/>\
- 대응 : 범이소문 <br/><br/>\
# 프로파일링 기법 <br/>\
- 컨텐츠기반 필터링 : 상품, 사용자등 메타데이터 위주 <br/>\
- 협업 필터링 : 사용자와 품목간의 과거 관계 -> 콜드스타트 문제 <br/>\
- 그래프 랭킹 기반 추천 시스템 : 랜덤서퍼(Random Surfer)활용, 피자배달원 문제 <br/><br/>\
# 문제 : Cold Start, Sparsity, Scalability <br/><br/>\
# 대응 <br/>\
1. Cold start 대응 <br/>\
- 범주형 : 베이지안 확률 모형 <br/>\
- 이미지 정보 : CNN, RNN <br/>\
- 소셜 정보 : SNA <br/>\
- 문서 정보 : 토픽모델링 <br/>\
2. Sparsity 대응 <br/>\
- 데이터 임퓨테이션 <br/><br/>\
<img src = "./img/추천시스템_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/추천시스템_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// 20
'# 정의 : 오픈소스 데이터 플랫폼 / 타 오픈 소스 결합 <br/>\
- Comprehensive Knowledge Archive Network <br/>\
- OKF, 오픈소스 기반 데이터 플랫폼 Open Knowledge Foundation <br/>\
- 컨텐츠 관리, 시각화, API 추출 등의 특화된 기능을 Drupal과 같은 타 오픈 소스와 결합하여 단점을 극복한 오픈 소스 기반 데이터 플랫폼 <br/><br/>\
# 암기 <br/>\
- 구성(3) : RAD <br/>\
- 기술(8) : WACM HVDG <br/><br/>\
# 구성 <br/>\
- RDF 링크데이터 변환 <br/>\
- Action API <br/>\
- DCAT와 Doublin Core <br/><br/>\
# 기술요소 <br/>\
- Web Interface API <br/>\
- Data Catalog <br/>\
- MetaData <br/>\
- Version History <br/>\
- Data Storage <br/>\
- Geo Spatial <br/><br/>\
# 주요기능 <br/>\
- Dataset Mgmt <br/>\
- Resource Mgmt <br/>\
- User Mgmt <br/>\
- Search <br/>\
- Harvesting(CKAN Instance Dataset 가져옴) <br/>\
- Geo Spatial<br/><br/>\
* 1.6버전까지 LOD 지원위해 RDF-Extention 설치, 2012년 10월 1.7버전 부터 코어에 RDF 지원\
',

// 21
'# 정의 : 데이터 품질 관리 활동 / 사용자 기대 만족 / 지속적 <br/>\
- Data Quality Management <br/>\
- 조직 내,외부 정보시스템 및 DB 사용자의 기대를 만족시키기 위해 지속적으로 데이터 품질(Data Quality)을 관리하는 활동 <br/><br/>\
# 암기 <br/>\
- 대상 : 값구프 <br/>\
- 기준 : 유정일 활유접적보 <br/>\
- 모형 : 미거부 <br/>\
- FW : 조직/대상 <br/>\
-> 조직 : CDMDU <br/><br/>\
# 품질 저하 원인 (해결) <br/>\
- 시스템별 데이터관리(MDM) <br/>\
- Spider Web 관리 : 다수 요청 다수 지원 구조원인 -> 사용자 요건 일원화 <br/>\
- 사용자 데이터 오용 : 시스템 입력값 제약 조건 강화 <br/>\
- Black Box형 관리 : 데이터 변경 통제, 추적성 강화 <br/><br/>\
# 품질 관리 대상 : 데이터 값, 데이터 구조, 데이터 프로세스 <br/><br/>\
# 품질 관리 기준(DQI) <br/>\
1. 데이터 관리 측면 <br/>\
- 유효성(2) : 정확성, 일관성 <br/>\
- 활용성(4) : 접근성, 적시성, 보안성, 유용성 <br/>\
- 데이터값 측면 : 완전성(Null값 유무) <br/>\
- 유일성 : 단일키, 복합키 <br/>\
- 유효성 : 도메인과 데이터값 치 <br/>\
- 일관성 : 중복시 <br/>\
- 정확성 : 업무 규칙 위배 데이터 값 유무 <br/><br/>\
# 데이터 품질관리 모형 <br/>\
- 미시적 : 데이터 품질 요소 관련 -> 데이터 품질관리 FW <br/>\
- 거시적 : 데이터 품질 관리 성숙 모형 <br/>\
- 비용/효과/위험분석 관점 : 조직 상황 반영 방안 <br/><br/>\
# 절차 <br/>\
1. 핵심 프로세스 : 데이터 품질계획(PLAN) <br/>\
2. 데이터 품질 통제 : DO <br/>\
3. 품질 심사 : CHECK <br/>\
4. 품질 개선 : ACT <br/>\
5. 지원 프로세스 <br/>\
6. 조직 프로세스 <br/><br/>\
# 평가 절차 <br/>\
- 진단 절차 : 진단대상정의 > 품질 진단 실시 > 진단 결과 분석 <br/>\
- 개선 절차 : 개선계획 수립 > 개선 수행 > 품질 통제 <br/><br/>\
<img src = "./img/DQM_1.png" style = "max-width:100%; height:auto;">\
',

// DQM3
'# 정의 : 데이터 품질 프로세스 성숙도 모델 / 진단, 제시 <br/>\
- Data Quality Management Maturity Model <br/>\
- 데이터 품질관리 수준을 진단하고 개선과제, 방안 단계를 체계적 제시하는 데이터 품질 프로세스 성숙도 모델 <br/><br/>\
# 암기 <br/>\
- 구성 : 기프성 <br/>\
- 기 : 유(일정)활(적접보유) <br/>\
- 프 : 요표오.구베.흐활뷰 <br/>\
- 성 : 도정통정최 <br/><br/>\
# 구성 : 데이터 품질 기준, 데이터 품질관리 프로세스, 데이터 품질관리 성숙 수준 <br/>\
- 기준(DQI) : 유효성(일관성, 정확성), 활용성(적시성, 접근성, 유용성, 보안성) <br/>\
- 프로세스 : 요구관리, 데이터 표준관리, 데이터 오너십 관리, 데이터 구조 관리, 데이터베이스 관리, 데이터 흐름관리, 데이터 활용관리, 사용자 뷰 관리 <br/>\
- 성숙수준 : 도입, 정형화, 통합, 정량화, 최적화 <br/><br/>\
# 평가 프로세스 <br/>\
1. 정의(Define) : 핵심 품질 항목(CQO)를 선정, 품질 검증 규칙 정의, 기준 지표 정의 <br/>\
2. 측정(Measure) : 데이터 품질 평가 환경 구축, 검증 규칙 따른 품질 수준 평가 <br/>\
3. 분석(Analysis) : 데이터 품질 측정결과 분석, 문제 유형 분석 및 원인 도출 <br/>\
4. 개선(Improve) : 원인별 개선방안 도출, 개선일정 계획, 개선작업 수행 <br/>\
5. 통제(Control) : 개선 전/후 평가, DQM 프로세스 개선 및 보완 \
',

// 23
'# 정의 : 데이터 요소 매핑 표준 / 동명이의어 <br/>\
- Metadata Mapping Procedure <br/>\
- 동일한 의미의 다른 이름 가지는 데이터 요소들에 대해 매핑하기 위한 표준 <br/><br/>\
# 구성 <br/>\
- Part3 : 데이터 요소 표준화 <br/>\
- Part4 : 값영역 표준화 <br/>\
- Part5 : 메타데이터의 의미적 일, 매핑절차 표준화 <br/>\
- Part6 : 온톨로지 생성 FW <br/><br/>\
# 절차 <br/>\
- 메타데이터 스키마 수집<br/>\
- 속성 분류 <br/>\
- DEC(ISO IEC 11179-1의 Data Element Concept) 설정 <br/>\
- 의미적 매핑 테이블 구성\
',

// DQC
'# 정의 : 범 국가적 데이터 품질 제도 / 데이터 품질, 보안 / <br/>\
-  공공•민간에서 개발하여 활용 중인 정보시스템의 데이터 품질을 확보하기 위해 데이터 자체 품질과 데이터 관리체계의 품질, 그리고 데이터베이스 보안 체계를 심사•인증하여 범국가적 데이터의 품질 제고 및 고도화를 위한 제도<br/><br/>\
# 암기 <br/>\
- V-도업:플골실5/3.5/3.2 <br/>\
- M-일정 적접 보유 <br/>\
- S-접암작취 <br/><br/>\
# 유형 <br/>\
- 데이터인증(DQC-V) : 도메인,업무규칙 -> 데이터 정합성 정량화 > Platinum Class(5시그마 이상 99.977%이상) > Gold(3.5시, 97.7%) > Silver(3.2시, 95.510%)<br/>\
- 데이터관리인증(DQC-M) : 일관성, 정확성, 적시성, 접근성, 보안성, 유용성 -> 도정통정최(1~5Level) <br/>\
- 데이터보안인증(DQC-S) : 접근제어, 암호화, 작업결재, 취약점분석 -> 접압작취(1~4Level)<br/><br/>\
<img src = "./img/DQC_M.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 78회 3교시 6번\
',

// 25
'# 정의 : 군사용 Formal 모델 / 유한 상태머신 모델 근간 <br/>\
- 기밀성 강조, 군사적 모델, TCSEC 근간, 유한상태머신(Finite State Machine) 모델 근간 둔 Formal 모델 <br/>\
- 군사용 보안구조의 요구사항을 충족시키기 위하여 1973년 미국 MITRE 연구소에서 Bell과 Lapadula 가 개발한 최초의 수학적 모델, 정보의 불법적 파괴나 변조보다는 기밀성(Confidentiality) 유지에만 초점을 두고 있음. 정보를 극비(Top Secret), 비밀(Secret), 미분류(Unclassified)로 분류 <br/><br/>\
# 정책 <br/>\
- Simple Property : No Read UP <br/>\
- *-Property : 스타 무결성 규칙, No Write Down <br/><br/>\
# 문제점 <br/>\
- Subject와 Object의 Security level을 모두 다운 시키면 모든 Subject는 모든 Object에 접근 가능하며 Write Down할 수 있는 은닉 채널(Convert Channel) 존재 (McLean 주장)\
',

// 26
'# 정의 : 무결성 모델 / Bell-Lapadula + (불법 수정 방지) <br/>\
- 무결성 강조, 무결성 3원칙 모드 적용 모델 <br/>\
- Biba Integrity 모델이라고도 하며, Bell-Lapadula 모델에서 불법 수정방지 내용을 추가로 정의한 무결성(Integrity) 모델 <br/><br/>\
# 정책 <br/>\
- Simple Property : No-Write-up Policy <br/>\
- *-Property : No-Read-dwon Policy\
',

// 27
'# 정의 : 보안 접근 통제 모델 / 불법 수정 방지 / 금융, 회계 <br/>\
- 무결성 중식 상업적 모델 <br/>\
- 최초의 상업환경에 적합하게 개발된 불법 수정 방지를 위한 보안 접근 통제 모델, 금융자산의 관리, 회계등의 분야에 주로 적용 <br/><br/>\
# 정책 <br/>\
- Well-Formed Transactions <br/>\
- Separation of Duties : 임의 분리 원칙; 모든 운영과정에서 여러 사람이 각 부문별로 나누어 처리하게 하는 정책 <br/><br/>\
# 무결성 3원칙 <br/>\
- 비인가자에 의한 데이터 변형 방지 <br/>\
- 인가자에 의한 데이터의 부적절한 변형 방지 <br/>\
- 데이터 내/외부 일관성 유지 <br/><br/>\
# Access Tripe : 주체, 객체, 프로그램 <br/><br/>\
<img src = "./img/CW_Model.png" style = "max-width:100%; height:auto;">\
',

// 33
'# B-Tree : 균등한 응답속도 유지를 위하여 Leaf Level의 좌우 균형을 유지하는 트리 <br/><br/>\
# B+Tree : 링크드 리스트, Leaf에 모든 값 정렬 <br/><br/>\
# B*Tree : 2/3 split overhead 감소 <br/><br/>\
# R-Tree : 사각형 영역안에 객체가 완전히 포함되도록 하는 MBR(Minimum Bounding Region 최소경계사각형)에 기반한 인덱싱 기법 <br/><br/>\
# R+Tree : R-Tree에서 노드간의 중첩 영역 제거, k-d-B트리의 특징 접목, 겹침 없음 <br/><br/>\
# R*Tree : R-Tree에서의 삽입, 삭제 알고리즘을 개선, 성능 개선 <br/><br/>\
# T-Tree : AVL-Tree와 B-Tree의 장점을 모아 메모리상에서 최적의 성능을 유지할 수 있도록 한 트리 (AVL-Tree + B-Tree; Min/Max)<br/><br/>\
<img src = "./img/인덱스구조1.png" style = "max-width:100%; height: auto;"><br/><br/>\
<img src = "./img/인덱스구조2.png" style = "max-width:100%; height: auto;"><br/><br/>\
<img src = "./img/인덱스구조3.png" style = "max-width:100%; height: auto;"><br/><br/>\
<img src = "./img/인덱스구조4.png" style = "max-width:100%; height: auto;"><br/><br/>\
',

// 35
'# 정의 : index, Column  저장 위치 유사 정도 <br/>\
- 인덱스 컬럼값과 데이터 로우의 저장위치가 얼마나 비슷한 순서로 저장되는 지표',

// 36
'# 정의 : 확장성 + 가용성 RDBMS / SQL 지원, ACID 준수, 성능 개선 <br/>\
- RDBMS관점에서 SQL지원, ACID준수, 성능 개선을 가지고 NoSQL의 특징인 확장성과 가용성을 갖춘 RDBMS <br/><br/>\
# 특징 <br/>\
- 주 인터페이스로 SQL 사용<br/>\
- 트랜젝션에 대한 ACID 지원 <br/>\
- 비공유 구조<br/>\
- 비잠금 동시성 제어 : 락X, 단일 스케줄<br/>\
- 샤딩/파티셔닝 : 공통X 분할<br/>\
- Node 단위의 고성능을 갖춘 DBMS : 네트워크 통한 처리 없음, Node단위 확장하여 성능 향상<br/>\
- I/O 연산 최소화 : 인메모리DB <br/>\
- 멀티쓰레딩 오버헤드 최소화 : 멀티버전 동시성 통제(MVCC) <br/>\
- 타임스탬프 오더링(Timestamp Ordering)사용<br/>\
- 2PLX<br/>\
- 보조인덱스 : 기본키X, 일반속성 서브셋, 각 노드는 인덱스 일부 저장, 복제<br/><br/>\
# 종류 <br/>\
- VoltDB : 데이터를 메모리에 적재하여 처리속도 극대화, Global Lock제거, 메모리기반으로 한계<br/>\
- Clustric : SQL을 각 Data node에 맞게 잘라서 Local SQL로 수행(Global Lock 해결)<br/><br/>\
# 유형 <br/>\
1. 새로운 아키텍처 시스템 : Shared-nothing 자원들 위에 동작하는 분산 아키텍처 기반<br/>\
- 다중 노드 병행제어(Concurrency control), 복제를 통한 결함 허용(Fault tolerance through replication)<br/>\
- 흐름 제어 및 분산 질의 처리를 지원<br/>\
- 장점 : 질의 최적화 노드들 간의 통신 프로토콜을 포함한 시스템의 모든 부분을 다중 노드 환경에 맞게 최적화 가능 <br/>\
- 예시 : Clustrix, CockorachDB, Google Spanner, H-Store, HyPer, MemSL, NuoDB, SAP HANA, VoltDB<br/>\
2. 투명한 샤딩 미들웨어(Transparent Sharding Middleware) : 샤딩 미들웨어를 제공하는 제품 <br/>\
- 샤딩 특성 : 각노드가 동일한 DBMS를 실행, 전체 DB 일부분만 가지며, 별도의 응용 프로그램에 의해 독립적으로 액세스되고 업데이트 되지 않음<br/>\
- 장점 : 단일노드 DBMS를 이미 사용하고 있는 응용 프로그램을 어떠한 코드도 변경하지 않고 대체 가능 <br/>\
- 예시 : AgileData Scalable Cluster, MariaDB MaxScale, ScaleArc, ScaleBase <br/>\
3. Daas(Database As A Service) : 클라우드 컴퓨팅 공급자가 제공하는 NewSQL<br/>\
- DaaS 제공자가 시스템 튜닝(ex: 버퍼 풀), 복제 및 백업을 포함한 데이터베이스의 물리적 구성에 대한 책임 <br/>\
- 고객들은 대시보드 또는 시스템을 제어하는 API와 함께 DBMS에 대한 연결 URL을 제공<br/>\
- 예시 : Amazon Auroa, Clear DB <br/><br/>\
<img src = "./img/NewSQL_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/NewSQL_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/NewSQL_3.png" style = "max-width:100%; height:auto;">\
',

// 37
'# 정의 : 데이터 활용 능력 / 목적, 의미, 이해, 해석, 활용 <br/>\
- Data 와 Literacy 의 합성어로, 데이터를 목적에 맞게 생성하고, 데이터의 숨겨진 의미를 올바르게 이해 및 해석하여 적절하게 활용하는 능력',

// Join
'# 정의 : 데이터 검색 방법 / 테이블, 데이터베이스 연결 <br/>\
- 두개 이상의 테이블이나 데이터베이스를 연결하여 데이터를 검색하는 방법 <br/><br/>\
# 논리적 조인 (내외크셀)<br/>\
1. Inner Join (교집합) <br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A TABLE_B B <br/>\
WHERE A.NO_EMP = B.NO_EMP <br/>\
AND   A.DEPT   = B.DEPT   <br/><br/>\
2. Left Outer Join (A) <br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A TABLE_B B <br/>\
WHERE A.NO_EMP(+) = B.NO_EMP <br/>\
AND   A.DEPT   = B.DEPT   <br/><br/>\
3. Full Outer Join (A+B) <br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A TABLE_B B <br/>\
WHERE A.NO_EMP(+) = B.NO_EMP(+) <br/>\
AND   A.DEPT   = B.DEPT   <br/><br/>\
4. Cross Join <br/>\
- 모든 경우의 수 표현 <br/>\
- 결과값 수 N*M <br/>\
<img src = "./img/Join_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM EX_TABLE A, JOIN_TABLE B <br/><br/>\
5. Self Join <br/>\
- 자기 자신과 조인 <br/>\
- 하나의 테이블 여러번 복사 <br/>\
- 자신이 가지고 있는 칼럼 다양하게 변형시켜 활용할 때 사용 <br/>\
<img src = "./img/Join_2.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A, TABLE_A B <br/><br/>\
# 물리적 조인 (네소해카인)<br/>\
- SQL문 사용하지 않음<br/>\
- SQL문에서 요청하는 논리 조인을 옵티마이저가 자료 통계나 규칙에 맞게 가져오는 방법 <br/>\
- 내부에서 일어나는 조인 <br/><br/>\
1. Nested Loop Join <br/>\
- 가장 많이 사용하는 기본 조인 방식 <br/>\
- 선수행 범위가 중요, 후수행 랜덤 엑세스 <br/><br/>\
2. Sort Merge Join <br/>\
- 정렬 후 조인 수행 방식 <br/>\
- 조인은 효과적, 정렬에 대한 부담 존재 <br/><br/>\
3. Hash Join <br/>\
- 해시함수 기법 활용한 조인 방식 <br/>\
- 일반적으로 높은 성능 수준 <br/><br/>\
4. Cartesion Join <br/>\
- 전체 x 전체 또는 M:M 조인 방식 <br/>\
- 일반적으로 조인 순서 잘못된 경우 발생 <br/><br/>\
5. Index Join <br/>\
- 인덱스 존재시 인덱스간 해시 조인을 통해 액세스 하는 기법\
',

// 통계 관련 데이터
'# 통계 관련 데이터 종류 <br/>\
- 원본 데이터 : 조사오류 등이 걸러지기 이전 단계의 개별 자료 <br/>\
- 마이크로 데이터 : 입력된 통계조사 자료의 오류를 수정한 자료 <br/>\
- 매크로 데이터 : 마이크로데이터를 임의의 기준에 따라 집계한 자료 <br/>\
- 메타데이터 : 조사표, 코드집 등 데이터의 특성을 이해하는데 필요한 모든 자료 <br/><br/>\
# 통계 데이터 노출 위험 <br/>\
1. 마이크로데이터 노출 위험 <br/>\
- 신원 파악 : 알려진 모집단 개체와 특정한 마이크로데이터 레코드와의 관계 <br/>\
- 속성 파악 : 마이크로데이터 셋과 특정한 모집단 개체와의 관계 <br/><br/>\
2. 매크로데이터의 노출 위험 <br/>\
- 자료빼기 : 자료유출 시도자에게 알려진 합계표 데이터 내의 값 또는 변수들을 합계표로부터 제거하는 방법 <br/>\
- 속성파악 : 마이크로데이터의 속성파악 개념과 비슷 <br/><br/>\
# 통계데이터의 정보보호 기법 <br/>\
- 표 재설계 <br/>\
- 셀 감추기 <br/>\
- 구간값 제공 <br/>\
- 반올림 <br/>\
- 셀변조 <br/>\
- 자료교환 <br/>\
- 접근제한 <br/>\
- 자료감추기 <br/>\
- 잡음 추가 <br/>\
- 표본추출 <br/>\
- 재현자료 <br/><br/>\
라이지움 86회 1교시 13번\
',

// 데이터 표준화 
'# 정의 : 데이터 원칙적 정의 규칙 수립 및 적용 <br/>\
- 시스템별로 산재해 있는 데이터 정보 요소에 대한 명칭, 정의 규칙에 대한 원칙을 수립하여 이를 전사적으로 적용하는 것 <br/><br/>\
<img src = "./img/데이터표준화_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소(표조절) <br/>\
1. 데이터 표준 (용단도코)<br/>\
- 표준 용어 : 업무적으로 사용하는 용어 정의 표준 <br/>\
- 표준 단어 : 일관된 단어 사용 (한글,영어) <br/>\
- 표준 도메인 : 칼럼에 대한 성질 (문자형,숫자형) <br/>\
- 표준 코드 : 특정 도메인 값 미리 정의 <br/><br/>\
2. 데이터 표준 관리 조직 <br/>\
- 전사적 데이터 표준 관리자 역할 <br/>\
- 관리 총괄, 정보 활용 계획 수립 <br/><br/>\
3. 데이터 표준화 절차 (수정확관)<br/>\
- 요구사항 수집 : 개별 시스템 표준 수집<br/>\
- 정의 : 표준화 원칙 정의<br/>\
- 확정 : 데이터 표준 검토 및 확정 <br/>\
- 관리 : 데이터 표준 이행<br/><br/>\
* 라이지움 86회 2교시 3번 \
',

// 데이터 표준 관리 도구
'# 정의 : 전사적 데이터 형태, 규격 관리 도구 <br/><br/>\
# 특징 <br/>\
- 확장성 : 다양한 시스템에서 구동가능 <br/>\
- 유연성 : 여러개 표준 관리 <br/>\
- 편의성 : 사용하기 편리 <br/><br/>\
# 기능<br/>\
1. 데이터 표준 관리 : 등록된 표준 조회 및 관리 <br/>\
- 단어, 용어, 코드값, 도메인, 멀티 표준 관리 <br/><br/>\
2. 데이터 구조 관리 : 데이터 모델, 구조 및 DB 스키마 관리 <br/>\
- ER 모델, DB 스키마, 가변속성, 이력 현재 모델 검사 <br/><br/>\
3. 프로세스 관리 : 데이터 표준의 신규, 변경을 요청, 승인 프로세스 관리 <br/>\
- 표준, 모델 등록/제의/승인 <br/><br/>\
* 라이지움 86회 2교시 3번\
',

// 재현데이터, 차등정보보호
'# 재현데이터 : 원자료와 다르지만 원자료와 동일한 분포를 따르도록 통계적으로 생성한 자료 <br/><br/>\
# 차등정보보호 : 입력에서 작은 차이가 출력에서 중대한 차이를 줄 수 있는 자료생성 과정을 제어하여 정보보호를 구현하려는 개념 <br/><br/>\
* 86회 라이지움 모의고사 1교시 3번\
',

// Optimizer 
'# 정의 : 최적 비용 처리경로 생성 DBMS 내부 엔진 <br/>\
- SQL을 가장 빠르고 효율적으로 수행할 최적의 처리경로를 생성해주는 DBMS 내부의 핵심엔진 <br/>\
- 사용자가 구조화된 질의언어로 결과집합을 요구하면, 이를 생성하는데 필요한 처리경로는 DBMS에 내장된 옵티마이저가 자동으로 생성 <br/>\
- 실행계획 : 옵티마이저가 생성한 SQL 처리 경로<br/><br/>\
<img src = "./img/Optimizer.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 최적화 과정 <br/>\
- 탐색 : 후보군이 될만한 실행계획 탐색 <br/>\
- 예상 비용 산정 : 데이터 딕셔너리에 미리 수집해놓은 오브젝트 통계 및 시스템 통계정보 이용하여 각각의 예상 비용산정<br/>\
- 최종 선택 : 각 실행 계획을 비교해서 최저비용을 갖는 하나를 선택 <br/><br/>\
# 종류 <br/>\
1. 규칙기반 옵티마이저 <br/>\
- 휴리스틱 옵티마이저 <br/>\
- 미리 정해놓은 규칙에 따라 액세스 경로를 평가하고 실행계획을 선택 <br/>\
- 규칙 : 인덱스 경로별 우선순위 <br/>\
- 인덱스 구조, 연산자, 조건절 형태가 순위 결정 주요요인 <br/><br/>\
2. 비용기반 옵티마이저 <br/>\
- 비용기반 최적화 수행 <br/>\
- 비용 : 쿼리를 수행하는데 소요되는 일량 또는 시간 <br/>\
- CBO가 실행계획을 수립할때 판단 기준 <br/>\
- 예산비용산정(테이블,인덱스에대한 통계정보 기초) -> 총비용이 낮은 실행계획 선택 <br/><br/>\
* 라이지움 86회 4교시 5번\
',
  
// Data Block Access
'# 정의 : Optimizer Data Scan 방식 <br/><br/>\
# 종류 <br/>\
1. Full Table Scan <br/>\
- 순차적 액세스 <br/>\
- 멀티 블록 I/O, 병렬화 가능 <br/><br/>\
2. Index Scan <br/>\
- Index Block Access 후 Rowid 통한 획득 <br/>\
- 비 순차적 액세스 <br/><br/>\
3. Fast Full index scan <br/>\
- 질의에 필요한 모든 컬럼이 인덱스에 포함된 경우 <br/>\
- 멀티 블록 I/O 및 병렬화 가능 <br/><br/>\
<img src = "./img/DataBlockAccess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 4교시 5번\
',
  
// Parallel Operation
'# 정의 : 하나의 SQL을 여러개 CPU가 처리하는 방법 <br/><br/>\
# 종류 <br/>\
1. Query간 병렬 처리 : 동시에 복수 처리 <br/><br/>\
2. Query내 병렬 처리 : 동시에 단일 처리 <br/>\
- Partition내 병렬 처리 : 단일 데이터베이스 작업 세분화 <br/>\
- Partition간 병렬 처리 : 복수개 머신 세분화 <br/><br/>\
# 사용방법 <br/>\
1. 생성시 정의 <br/>\
- Create index item_index on line_item(item) <u><b>parallel 20;</b></u> <br/><br/>\
2. Table 수정 정의 <br/>\
- Alter Table line_item <u><b/>parallel 20;</b></u><br/><br/>\
3. Hint 기능 사용 <br/>\
- Select <u><b/>parallel(line_item, 20)</b></u> From line_item; <br/><br/>\
* 라이지움 86회 4교시 5번\
',

// ERD
'# 정의 : Entity Relation Diagram <br/>\
- 사물을 개체와 개체간의 관계로 표현하는 ER모델을 도표(Diagram)로 표현하는 방법 <br/><br/>\
# 작성 방법 <br/>\
- 순차 배치 : 좌 -> 우, 한가지 방향으로 순차적 배치 <br/>\
- 크기 조절 : 적절하게 늘이거나 줄여서 표현 <br/>\
- 공간 효율화 : Replationship 표현시 가급적 대각선으로 표기하지 않음 <br/><br/>\
# 표기법 <br/>\
- IE : 사각형 박스는 실체, 식별자는 박스 상단에 표현하고 실선으로 관계 표기 <br/>\
<img src = "./img/IE.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Chen : 사각형 박스는 실체, 속성은 타원형, 관계는 마름모로 표기 <br/>\
<img src = "./img/Chen.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Barker : IE표기법과 유사한 표기법, Oracle에서 Case Method로 채택하여 사용 <br/><br/>\
<img src = "./img/Barker.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 4교시 5번\
',

// 관계형 데이터 모델
'<img src = "./img/RelationDataModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
',
  
// BigData 분석 방법론
'# 정의 : 계층적 프로세스 모델\
- Phase-Task-Step의 3계층으로 구성된 계층적 프로세스 모델 <br/>\
- 비즈니스 도메인과 문제점을 인식하고 비즈니스 요구사항과 데이터 분석에 필요한 원천 데이터 확보하고 분석 수행 <br/><br/>\
# 프로세스 <br/>\
<img src = "./img/BigData분석방법론프로세스.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 빅데이터 분석 활용 기법 (플도기)<br/>\
- 플랫폼 : 빅데이터 분석 플랫폼 HW / SW 구축 <br/>\
- 분석도구 : R언어, BigQuery, Presto <br/>\
- 분석기법 : 통계적분석(상관/회귀/분산), 데이터 마이닝, 텍스트 마이닝 <br/><br/>\
* KPC 94회 1교시 1번\
',

// DCAT
'# 정의 : 다양한 업종 빅데이터 플랫폼 <br/>\
- Data Category Vocabulary <br/>\
- W3C가 주도하여 웹에 게시된 데이터 카탈로그 간의 상호 운용이 용이하도록 설계된 카탈로그 표준 모델과 데이터 속성을 표현하는 어휘의 집합(Ontology) <br/><br/>\
# 구성요소 <br/>\
- Resource : 공통 속성 <br/>\
- Data Set : Resource 클래스 상속, 정보 <br/>\
- Data Service : Resource 클래스 상속, 속성 정보<br/>\
- Distribution : 배포저장 형식 <br/>\
- Catalog : Data set, Data Service의 각 목록의 속성 정보 <br/><br/>\
# 참조모델 <br/>\
<img src = "./img/OpenDataPlatformReferenceModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유통 플랫폼 연계 <br/>\
<img src = "./img/OpenDataPlatformReferenceModel_CirculationModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 3교시 3번\
',
);
