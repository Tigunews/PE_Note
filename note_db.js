var question = question.concat(
'데이터베이스',
'데이터베이스 트랜잭션',
'데이터 무결성',
'ACID',
'Isolation Level',
'데이터 독립성',
'[데이터 독립성]- ANSI SPARC 3계층',
'병행제어 = 동시성제어',
'[동시성제어]- 트랜잭션 직렬화',
'[동시성제어]- Timestamp',
'[동시성제어]- Locking',
'[동시성제어]- 2PL',
'[동시성제어]- Phantom Conflict',
'[동시성제어]- MVCC',
'[동시성제어]- 낙관적 검증',
'회복기법',
'[회복기법]- Log 기반',
'[회복기법]- 그림자 페이지',
'[회복기법]- 체크포인트',
'[회복기법]- 미디어',
'[회복기법]- WAL정책',
'[회복기법][WAL]- ARIES',
'[일관성]- SAGA',
'[일관성][SAGA]- Choreography-Based Saga',
'[일관성][SAGA]- Orchestration-Based Saga',
'DB 이상현상',
'정규화',
'[정규화]-암스트롱 공리, 함수폐포, 자기참조관계',
'관계대수',
'관계해석',
'이벤트 소싱(Event Sourcing)',
'다차원 모델링',
'[다차원 모델링]- 스타 스키마',
'[SNA]- 중심성(Centrality)',
'CKAN(Comprehensive Knowledge Archive Network)',
'DA',
'DBA',
'DQM',
'DQM3',
'ISO/IEC 20943-5',
'DQC',
'인덱스',
'다차원 색인구조',
'[다차원 색인]- PAM',
'[다차원 색인]- SAM',
'[다차원 색인]- 인덱스 구조(B,R,T-Tree)',
'[다차원 색인]- Hilbert R-Tree',
'Hashing',
'Clustering Factor',
'NewSQL DBMS',
'데이터 리터러시(Data Literacy)',
'Join',
'데이터 표준화',
'데이터 표준 관리도구',
'DB Tunning',
'[DBMS 최적화]- Optimizer',
'[DBMS 최적화]- Data Block Access',
'[DBMS 최적화]- Parallel Operation',
'ERD',
'관계형 데이터 모델',
'연결함정',
'[빅데이터]- Edge Analytics',
'[빅데이터]- R-HIVE',
'[빅데이터]- NoSQL',
'[NoSQL]- Column Family Store',
'[NoSQL]- Graph Database',
'[빅데이터][NoSQL]- 데이터 모델링 패턴',
'[빅데이터][NoSQL]- CAP 이론',
'[빅데이터][NoSQL]- PACEL',
'[빅데이터][NoSQL]- NoSQL RDBMS 비교',
'[빅데이터][NoSQL]- BASE',
'[빅데이터]- 빅데이터 개인정보보호 가이드라인',
'[빅데이터]- HDFS',
'[빅데이터]- 하둡 에코시스템',
'[빅데이터]- ISO 20547',
'[빅데이터]- BigData 분석 방법론',
'[빅데이터]- DCAT',
'[빅데이터]- 데이터 플래그십',
'[빅데이터]- 단순 대치법',
'[빅데이터]- 정보 시각화',
'[빅데이터]- D-Commerce',
'[빅데이터]- Random Sampling',
'[빅데이터]- Filtering',
'DB 확장성 확보 방안',
'[DB확장]- Database Shard',
'[DB확장]- Database Partitioning',
'DB 복제 - Web Service',
'Data File Structure',
'[통계]- 통계 관련 데이터',
'[통계]- 통계 Overview',
'[통계]- 데이터 분석 전처리',
'[통계][전처리]- 기술통계',
'[통계][전처리]- 추론통계',
'[통계]- 표본 추출 방법',
'[통계]- 특이정보, Outlier',
'[통계]- 재현정보',
'[통계]- 차등정보보호',
'[통계]- 분석기법',
'[통계][분석기법]- 회귀 분석',
'[통계][회귀 분석]- 다변량 회귀 분석',
'[통계][회귀 분석]- 선형회귀모형 추론 가정',
'[통계][분석기법]- 상관 분석',
'[통계][분석기법]- 주성분 분석',
'[통계][분석기법]- 다차원 척도법',
'[통계][분석기법]- 군집분석',
'[통계][분석기법][군집분석]- 계층적 군집분석',
'[통계][분석기법][군집분석]- 비계층적 군집분석',
'[통계][분석기법]- 판별 분석',
'[통계][분석기법]- 연관규칙',
'[통계][분석기법][연관규칙]- Apriori Algorithm',
'[통계]- 타당도',
'[통계]- 신뢰도',
'[통계]- CLT',
'[통계]- 추정이론(estimation theory)',
'[통계]- 가설검정 (Statistical Hypothesis Testing)',
'[통계]- 베이즈 정리',
'Data Mining',
'[Data Mining]- Text Mining',
'[Data Mining][Text]- 로봇 저널리즘',
'[Data Mining]- 단어구름(Word Cloud)',
'[Data Mining]- Co-Word Analysis',
'[Data Mining]- 탐색적 데이터 분석(Exploratory Data Analysis)',
'[Data Mining]- 확증적 데이터 분석(Confimatory Data Analysis)',
'[Data Mining]- 토픽 모델링',
'[Data Mining]- Opinion Mining',
'[Data Mining]- System Dynamics',
'[Data Mining]- CRISP-DM',
'데이터 사이언스',
'반정형 데이터',
'RAID',
'DMBOK',
'Spatial DB',
);

var answer = answer.concat(
// 데이터베이스
'# 정의 : 최소 중복 / 저장 운영 / 데이터 집합 <br/>\
- 한 조직의 여러 응용시스템이 공용하기 위해 최소의 중복으로 통합, 저장된 운영 데이터의 집합 <br/><br/>\
# 데이터 베이스 함축적 의미 (통저운공) <br/>\
- 통합 데이터 : 최소 중복, 통제된 중복 <br/>\
- 저장 데이터 : 컴퓨터가 접근 가능한 저장 매체에 저장 (테이프, 디스크 등) <br/>\
- 운영 데이터 : 한 조직의 고유 기능을 수행하기 위해 필요한 데이터 <br/>\
- 공용 데이터 : 한 조직의 여러 응용 프로그램이 공동으로 소유, 유지, 이용하는 데이터 <br/><br/>\
# 데이터 베이스 특징 (실계동내) <br/>\
- 실시간 접근성 : 실시간 응답시간 기준, 온라인 처리 <br/>\
- 계속적인 변화 : 데이터 베이스 상태가 동적, 정확성 유지 <br/>\
- 동시 공용성 : 다중 멀티 사용 지원토록, 동시 공용을 위한 조직, 저장, 관리 요구됨 <br/>\
- 내용에 의한 참조 : 데이터의 내용, 참조를 원하는 데이터의 값에 따라 참조 \
',

// 데이터베이스 트랜잭션
'# 정의 : 한번에 처리되어야할 일련의 작업단위 <br/>\
- 한번에 처리되어야 할 하나 또는 둘 이상의 일련의 작업단위로써 데이터베이스에서 행해지는 작업의 논리적 단위 (Logical Unit of Work) <br/><br/>\
# 내용 <br/>\
- 보장기법 : ACID <br/>\
- 상태전이도(<font color = "red">활부완실철</font>) : Active, Partial Committed, Failed, Committed, Aborted <br/>\
- 병행제어 기법 : 갱읽모연 / 락타낙다 <br/><br/>\
# MSA 에서 Transaction 처리기법 <br/>\
- 2 Phase  Commit : Prepare, Commit 두 단계 커밋 / 분산 트랜잭션 지원 DB 만 사용 <br/>\
- Saga Pattern : 트랜잭션 처리 Application 담당(Eventual Consistency) / 별도 개발 필요 <br/><br/>\
* ITPE 6회 관리 1교시 1번\
',

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
'# 정의 : 트랜잭션 / 안전 보장 / 성질 <br/>\
- 데이터베이스 트랜잭션이 안전하게 수행된다는 것을 보장하기 위한 성질을 가르키는 약어 <br/><br/>\
# 설명 <br/>\
1. Atmoicity (원자성) <br/>\
- 개념 : 하나의 트랜잭션의 모든 연산이 데이터베이스에 반영되거나 전혀 반영되지 않아야 함(All or Nothing) <br/>\
- 구현 기법 : Commit or Rollback 처리<br/>\
- 예시 : 자금 이체는 성공할 수도 실패할 수도 있지만, 보내는 쪽에서 돈을 빼 오는 작업만 성공하고 받는 쪽에 돈을 넣는 작업을 실패해서는 안됨.<br/>\
<img src = "./img/ACID_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Consistency (일관성) <br/>\
- 개념 : 일관딘 상태의 데이터베이스에서 하나의 트랜잭션 정확히 수행시 또 다른 일관된 상태 유지 <br/>\
- 구현 기법 : 도메인 무결성, 동시성 제어 <br/>\
- 예시 : 모든 계좌는 잔고가 있어야 한다면 이를 위반하는 트랜잭션은 중단됨 <br/><br/>\
<img src = "./img/ACID_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Isolation (고립성) <br/>\
- 개념 : 하나의 트랜잭션이 완료되기전까지는 갱신중인 데이터에 다른 트랜잭션이 접근하지 못하도록 제한 <br/>\
- 구현 기법 : Locking, Isolation Level <br/>\
- 예시 : 은행 관리자는 이체 작업을 하는 도중에 쿼리를 실행하더라도 특정 계좌간 이체하는 양쪽을 볼 수 없다. <br/>\
<img src = "./img/ACID_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
4. Duarability (지속성) <br/>\
- 개념 : 하나의 트래잭션이 완료된 이후에는 장애가 발생해도 갱신한 데이터 손실 방지 <br/>\
- 구현 기법 : 회복기법 <br/>\
- 예시 : 시스템 문제, DB 일관성 체크등을 하더라도 유지되어야 함을 의미<br/>\
<img src = "./img/ACID_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 4교시 5번\
',
  
// Isolation Level
'# 정의 : 타 트랜잭션 접근 가능 여부 정의 수준 <br/>\
- 트랜잭션 실행 중 결과에 대한 다른 트랜잭션의 접근가능 여부를 정의한 수준 <br/>\
# 특징 : ANSI/ISO Standard, ACID속성보장, Locking 기법 <br/><br/>\
# level <br/>\
1) Read Uncommitted : 처리중 데이터 허용 / Oracle 미지원<br/>\
2) Read Committed : commit 후 허용 / DBMS 기본<br/>\
3) Repeatable Read : 타 Tx Update 금지, Insert 허용 / Phantom Read 발생<br/>\
4) Serializable : 동시 수행 금지 / 완벽 일관성 모드<br/>\
<img src = "./img/IsolationLevel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Read Phenomena / 해결 방안 <br/>\
- Dirty Read : Commit 이전 Data 참조 / 공유 Lock 적용 <br/>\
- Non-Repeatable Read : Query 2 수행시, 타 Tx 중간값 참조 / Tx 완료까지 수정,삭제 제한 <br/>\
- Phantom Read : Query 2 수행시, Phantom Record 발생 / Isolation Level 3 <br/><br/>\
* 119회 1교시 13번\
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
# 문제 (갱읽모연회)<br/>\
1. 갱신손실(Lost Update) : 동시 갱신 경우, 데이터, 덮어씀 <br/>\
<img src = "./img/LostUpdateExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 읽기오류(Dirty Read) : 다수 트랜잭션, 중간 결과값, 참조 <br/>\
<img src = "./img/DirtyReadExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. 모순성(Inconsistency) : 다수 트랜잭션, 상호 간섭, 일관성 없는 상태 변질 <br/>\
<img src = "./img/InconsistencyExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
4. 연쇄복기(Cascading Rollback) : 다수 트랜잭션, 레코드, 복귀과정 <br/>\
<img src = "./img/CacadingRollbackExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기법 (락타낙다)<br/>\
- 락킹(Locking) : 상호배제 기능 제공, 2PL, 공유락, 전용락, Lock Escalation-연쇄복귀 <br/>\
- 타임스탬프(Timestamp) : 시스템 시계, 논리적 계수기 <br/>\
- 낙관적 기법(Validation Verification) : Read Phase, Validation Phase, Write Phase <br/>\
- 다중버전 동시성제어(MVCC) : 여러버전 타임스탬프 비교, 직렬성 보장 버전 선택 (SCN) <br/><br/>\
<img src = "./img/병행제어_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/병행제어_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 응용 2교시 5번\
',

// 트랜잭션 직렬화
'# 정의 : 동시 실행 가능성(충돌 직렬성) 판별 기법 <br/>\
- 동시에 수행된 트랜잭션 간의 Read, Write 연산에 의한 충돌 발생시 데이터베이스 일관성 보장 위한 동시실행 가능성(충돌 직렬성) 판별 기법 <br/><br/>\
# 충돌 발생유형 <br/>\
<img src = "./img/Serialization_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 직렬화 수행 <br/>\
<img src = "./img/Serialization_2.png" style = "max-width:100%; height:auto;">\
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
# 단위 (릴튜속/파레필)<br/>\
<img src = "./img/LockingScale.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Lock 종류 <br/>\
1. 기본 Lock <br/>\
- S (Shared) : R가능, 동시 Locking 가능 <br/>\
- X (Exclusive) : RW가능, 동시 Locking 	불가능 <br/><br/>\
2. 의도형 Lock <br/>\
- IS (Intension Shared) : 자손 S <br/>\
- IX (Intension Exclusive) : 자손 S, X <br/>\
- SIX (Shared and Intension Exclusive) : 서브트리 S, 자손 X <br/><br/>\
# Lock 양립성 <br/>\
<img src = "./img/Lock양립성.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 관리 2교시 5번\
',
  
// 2PL
'# 정의 : Lock, Unlock / 확장, 수축 단계 / Locking 기법 <br/>\
- 모든 트랜잭션들이 Lock과 Unlock 연산을 확장단계와 수축단계로 구분하여 수행하는 Locking 기법 <br/><br/>\
# 변형 기법 <br/>\
- Strict 2PL : 모든 독점로그(lock-X)는 그 트랜잭션이 완료될 때까지 unlock 하지 않고 유지 <br/>\
- Rigorous 2PL : 모든 락(Lock-S,X)는 그 트랜잭션이 완료될 때까지 unlock 하지 않고 유지 <br/>\
- Static : 트랜잭션이 수행 시작전에 모든 락(Lock-S,X)을 선언하여 완료될 때까지 unlock 하지 않고 유지 <br/>\
<img src = "./img/2PL_Trans.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 89회 관리 3교시 6번\
',
  
// Phantom Conflict
'# 정의 : 가상 튜플에 의한 충돌 <br/>\
- 두 개 이상의 트랜잭션이 실제 데이터베이스에 저장되어 있는 튜플이 아니라, <font color = "red">데이터베이스에 삽입되려고 하는 가상의 튜플</font>, 즉 팬텀 튜플에 의해 트랜잭션이 충돌되어 <font color = "red">일관성/무결성</font>이 보장되지 않는 현상 <br/><br/>\
# 영향 (<font color = "red">없있 있없</font>)<br/>\
- 읽기 : 다른 Tx 삽입 / 없었던 행 출현 <br/>\
- 쓰기 : 다른 Tx 삭제 / 행 사라짐 <br/><br/>\
# 해결방법 <br/>\
- Locking 단위 확대 : 튜플 -> 릴레이션 <br/>\
- Index Locking : 릴레이션 갱신 <br/>\
- 고립성 수준 높임 : 3단계, Serializable 설정 <br/><br/>\
* KPC 94회 1교시 11번\
',
  
// MVCC
'# 정의 : SCN 기반 / Lock 사용 x / 읽기 일관성 보장 기법 <br/>\
- 트랜잭션 접근시 여러 버전 타임스탬프 비교, 직렬가능성 보장 적절한 버전 선택 접근 기법 <br/><br/>\
# 구현방식 <br/>\
1. MGA(Multi Generation Architecture) <br/>\
- 개념 : 기존 데이터 두고, 새로운 버전 추가 / <font color = "red">PostgreSQL</font><br/>\
- 특징 : 기존 데이터 잔존, 주기적 VACUUM, 물리적 위치 변경 <br/>\
- Perssimistic Lock 사용, PostgreSQL, SQL Server, InterBase 사용 <br/>\
<img src = "./img/MVCC_MGA.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Rollback Segment <br/>\
- 개념 : 기존 데이터 블록 변경, 이전 데이터 Rollback Segment 보관 / Oracle <br/>\
- 특징 : SCN 비교, 물리적 위치 변경x, VACCUM 필요 없음 <br/>\
- Undo Segment 사용, Oracle, InnoDB 사용방식 <br/>\
<img src = "./img/MVCC_RollbackSegment.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형 <br/>\
1. Multiversion Timestamp Ordering <br/>\
- 개념 : Timestamp를 시간 순서에 따라 트랜잭션 부여 기법 <br/>\
- 알고리즘 : 읽기(가장 큰 값 반환), 쓰기(낮은 값 존재시 거부) <br/><br/>\
2. MultiVersion Two-Phase Locking <br/>\
- 개념 : R,W,C(보증) 잠금 모드 사용 제어 <br/>\
- RWC 호환성 테이블 <br/>\
<img src = "./img/MTPL.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 정책 <br/>\
1. 다중버전 읽기 일관성 정책 <br/>\
- 갱신 방식 : 기존 값 롤백 세그먼트 기록, Commit 전까지 이용 <br/>\
- SCN : 이전 데이터 얻기위한 내부적 Commit 마다 증가 <br/><br/>\
2. Isolation Level 정책 <br/>\
- Read Committed : 오라클 Default <br/>\
- Serializable : Commit 데이터 변경사항, 자신의 insert, update, delete 변경 데이터 열람 <br/>\
- Read Only : Commit된 변경사항만 열람 가능, insert, update, delete 허용않음 <br/><br/>\
* 111회 관리 1교시 8번\
',
  
// 낙관적 검증
'# 정의 : 트랜잭션 종료시 일괄적 검사 기법 <br/>\
- 트랜잭션 수행 동안은 어떠한 검사도 하지 않고, 트랜잭션 종료 시에 일괄적으로 검사하는 방법 <br/><br/>\
# 특징 <br/>\
- No Deadlock <br/>\
- No Cascading Rollback<br/>\
- Cyclic resart, starvation <br/>\
- 데이터 지역 사본 갱신(트랜잭션 수행 중일 경우) <br/>\
- 일시 반영(트랜잭션 종료시) <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ValidationOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 처리 단계 설명 <br/>\
- (R)ead Phase : 모든 갱신은 사본에서만 수행 <br/>\
- (V)alidation Phase : 실제 반영 전 직렬 가능성 위반여부 확인 <br/>\
- (W)rite Phase : 실행 결과 데이터베이스 반영 <br/><br/>\
# 유효성 검사 <br/>\
<img src = "./img/ValidationCheck.png" style = "max-width:100%; height:auto;">\
',
  
// 회복기법
'# 정의 : 복원 기법 / DB 장애시 / 발생이전 <br/>\
- DB에 장애 발생시 발생 이전의 일관된 상태(Consistent State)로 복원하는 기법 <br/><br/>\
# 장애종류 (트시미사)<br/>\
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
- ARIES <br/>\
- 미디어 기반 <br/><br/>\
<img src = "./img/회복기법_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/회복기법_2.png" style = "max-width:100%; height:auto;">\
',
  
// Log 기반
'<img src = "./img/회복기법_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 지연갱신 <br/>\
- 트랜잭션의 부분 완료 상태에선 변경 내용을 로그 파일에만 저장 <br/>\
- <font color = "red">커밋</font>이 발생하기 전까지 데이터베이스에 기록하지 않음 <br/>\
- 중간에 장애가 생기더라도 데이터 베이스 기록되지 않았으므로 <font color = "red">UNDO 필요 없음</font> <br/><br/>\
# 즉시갱신 <br/>\
- 트랜잭션 수행 도중에도 변경 내용을 <font color = "red">즉시</font> 데이터베이스에 기록 <br/>\
- 커밋 발생 이전의 갱신은 원자성이 보장되지 않는 미완료 갱신이므로 <font color = "red">UNDO 필요</font>\
',
  
// 그림자 페이지
'<img src = "./img/ShadowPaging.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- <font color = "red">메모리상</font> Current Page Table과 동일한 Shadow Page Table 생성 <br/>\
- Tx 성공할 경우 Shadow Page Table 삭제 <br/>\
- Tx 실패할 경우 Shadow Page Table을 Current Page Table 로 복사 \
',
  
// 체크포인트 회복기법
'# 정의 : 장애발생시에 체크포인트 이후 처리된 트랜잭션에 대해서만 회복작업을 시행하는 방법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/회복기법_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 4교시 3번\
',
  
// 미디어 회복기법
'# 특징 <br/>\
- 디스크와 같은 비휘발성 저장 장치가 손상되는 장애 발생 대비 <br/>\
- 백업, 미러링, RAID등을 통해 별도 물리저장장치 덤프 <br/>\
- 미디어 장애시 가장 최근 덤프로 복구, 로그 파일을 참조해 덤프 이후 작업 Redo <br/>\
- Undo 수행 x \
',

// [회복기법]- WAL 정책
'# 정의 : 데이터 버퍼관리 정책 / 메모리 버퍼에 저장한 페이지 / 언제 디스크에 기록 <br/>\
- White-Ahead Logging <br/>\
- 메모리 버퍼에 저장한 페이지가 언제 디스크에 기록될 것인가를 명시하는 데이터 버퍼관리 정책<br/><br/>\
# 내용 <br/>\
1. DIRTY Page <br/>\
- STEAL : DIRTY Page <font color = "red">해제</font>(LRU), UNDO 필요 <br/>\
- NO STEAL :  DIRTY Page <font color = "red">유지</font>, 충분 버퍼 필요 <br/><br/>\
2. Commit <br/>\
- FORCE : <font color = "red">모든</font> 페이지 즉시 Commit, 성능 저하 <br/>\
- NO FORCE : <font color = "red">일부</font> 페이지 Commit, REDO 필요 <br/><br/>\
<font color = "red">* NO STEAL/FORCE 정책 : 구현 Good 성능 Bad <br/>\
* STEAL/NO FORCE 정책 : 성능 Good</font>\
',
  
// ARIES
'# 정의 : WAL(로그선행기록), LSN(로그순서번호) / 회복기법 <br/>\
- Algorithms for Recovery and Isolation Exploiting Semantics <br/>\
- 데이터 베이스의 장애 발생시 WAL을 통해 기록된 LSN을 이용하여 데이터베이스를 회복하는 기법 <br/><br/>\
# 특징 <br/>\
- 원칙 : WAL(Write Ahead Logging), 로그 타입 관계 없이 DB 반영전 Log 기록 <br/>\
- 정책 : Steal(항시기록-UNDO필요), No-Force(지연갱신-REDO필요) <br/><br/>\
# 프로세스 <br/>\
- Analysis : REDO 시작 로그 위치 결정 / Transaction 상태 분석 <br/>\
- REDO : 장애시점 완결 Tx 대해 수행 / 재수행 <br/>\
- UNDO : 장애시점 미완결 Tx 대해 수행 / 무효화 <br/><br/>\
# 핵심 원리 <br/>\
- WAL : 로그 선행 기록, DB 변경 사항 Logging / Atomicity, Durability <br/>\
- LSN : 로그 대한 고유 식별 번호 / 복구 목적 로그 관리 <br/>\
- Repeating History : 장애 이전 상태 추적, REDO 활용 / 장애 직전 중지 Tx 취소 <br/>\
- UNDO Logging : UNDO 상황 로그 기록, 반복처리 회피 / LSN 활용 <br/>\
<font color = "red">* Database Logging : Update, Commit, Abort, End, Rollback 행위, 결과 기록</font><br/><br/>\
# 복구 단계 설명 <br/>\
<img src = "./img/AriesFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 4교시 3번\
',
  
// SAGA
'# 정의 : 비동기 메시징(버퍼링) / 로컬 트랜잭션 <br/>\
- 데이터 일관성 유지를 위해 비동기 메시징(버퍼링)을 이용하여 편성한 일련의 로컬 트랜잭션 <br/><br/>\
# 특징 <br/>\
- 이벤트 Trigger 기반 : 완료시 메시지 발행, SAGA 편성중 다음 단계 서비스 Trigger <br/>\
- 순차적 단계 트랜잭션 : 연속적인 업데이트 연산 중심 <br/>\
- 보상 트랜잭션 활용 : 트랜잭션 실패시 Rollback 수행 필요, 정보 복원 보상 트랜잭션 사전 작성 <br/>\
- 장점 : 밴더 종속성 탈피 가능 <br/>\
- 단점 : Atomicity 보장 하지 않음 <br/><br/>\
# 절차도 <br/>\
1. 성공시 <br/>\
<img src = "./img/SAGA_Pattern_Sucess.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 실패시 <br/>\
<img src = "./img/SAGA_Pattern_Failure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
<img src = "./img/SAGA_Example.png" style = "max-width:100%; height:auto;"><br/><br/>\
1. 보상 가능 트랜잭션 : Rollback 지원해야하는 <br/>\
-> 주문서비스 호출시 주문 데이터 임시 생성 <br/><br/>\
2. 피봇 트랜잭션 : SAGA 진행, 중단 결정 트랜잭션 <br/>\
-> 결재 승인 <br/><br/>\
3. 재시도 가능 트랜잭션 : Rollback 필요 없이 완료 보장된 트랜잭션 <br/>\
-> 임시 생성된 주문 확정 처리 <br/><br/>\
4. 보상 트랜잭션 : 피봇 실패시 이전 단계 변경분 Undo <br/>\
-> 주문 서비스 Rollback 시 cancelOrder() 트랜잭션 실행 <br/><br/>\
# MSA 환경 Isolation 보장 방안 <br/>\
1. Semantic Lock : Application 수준 Lock 통한 참조제어 <br/>\
- 생성시 Pending, 완료시 Approve 상태값 관리 <br/>\
- 승인된 데이터만 참조 <br/><br/>\
2. ReRead Value : 최신 정보 확인 통한 Lost Update 방지 <br/>\
- 데이터 쓰기 전 변경 여부 확인 <br/>\
- 변경시 쓰기 작업 중단, 트랜잭션 재시작 <br/><br/>\
3. Commutative Update : 업데이트 교환적 설계 통한 Lost Update 방지 <br/>\
- dedit(), credit(), 업데이트 및 롤백을 상호 교환 작업으로 구성 <br/><br/>\
# 종류 <br/>\
- Choreography-Based Saga <br/>\
- Orchestration-Based Saga <br/><br/>\
* KPC 97회 3교시 관리 1번\
',
  
// Choreography-Based Saga
'# 정의 : Local Tx / 완료 Event 발생 방식 <br/>\
- <font color = "red">자신이 보유한</font> 서비스내 Local 트랜잭선을 관리하며, 트랜잭션이 종료되면 완료 Event 발생하는 방식 <br/><br/>\
# 성공 <br/>\
<img src = "./img/ChoreographySuccess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 실패 <br/>\
<img src = "./img/ChoreographyFail.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- App에서 Event 수신 받고 다음 처리 (Kafka 메시지큐) <br/>\
- App별로 트랜잭션 관리 로직 존재 <br/>\
- 실패시 해당 트랜잭션 취소처리, 실패한 App에서 보상 Event 발행 Rollback 처리 시도 <br/>\
- 장점 : 구축하기 쉬움 <br/>\
- 단점 : 운영자 입장에서 트랜잭션 현재 상태 알기 어려움 \
',
  
// Orchestration-Based Saga
'# 정의 : Saga 인스턴스(Manager) / 별도 존재 방식 <br/>\
- 트랜잭션 처리를 위한 <font color = "red">Saga 인스턴스(Manager)</font>가 별도 존재하는 방식 <br/><br/>\
# 성공 <br/>\
<img src = "./img/OrchestrationBasedSagaSuccess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 실패 <br/>\
<img src = "./img/OrchestrationBasedSagaFailure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- Manager : 점진적 결과 전달, 일관성 유지, 중앙 집중화 <br/>\
- 장점 : 복잡성 줄어들고, 테스트 상대적 쉬움, Rollback 용이 <br/>\
- 단점 : 관리 위한 Orchestrator 서비스 추가, 인프라 구현 복잡성 증가 <br/><br/>\
* 사례 : Axon Saga \
',

// DB 이상현상
'# 정의 : 삽입, 수정, 삭제 / 데이터 무결성 <br/>\
- 데이터베이스의 릴레이션에 대한 조작으로 삽입, 삭제, 수정 수행시 원하지 않는 데이터 조작이 발생하여 데이터의 무결성이 깨지는 현상 <br/><br/>\
# 문제점 <br/>\
- 이상현상 : 원하지 않는 조작, 무결성 침해 <br/>\
- 무결성 침해 : 데이터 베이스 품질 저하 <br/>\
- 시스템 오동작 : 의사결정시 지연, 오류 발생 <br/><br/>\
# 예시 및 유형 <br/>\
<img src = "./img/DBAnormalyExample.png" style = "max-width:100%; height:auto;"><br/>\
- 삽입 이상 : 학번 1003 삽입 / <font color = "red">누락</font> 발생 <br/>\
- 삭제 이상 : 학번 1002 삭제 / <font color = "red">손실</font> 발생 <br/>\
- 수정 이상 : 학번 1004 변경 / <font color = "red">모순</font> 발생 <br/><br/>\
# 해결방안 : 정규화 <br/><br/>\
* 라이지움 90회 응용 1교시 13번 \
',

// 정규화
'# 정의 : 속성간 종속 관계 제거 / 이상현상 / 무손실 분해 규칙 <br/>\
- 이상현상 야기하는 속성간 종속관계 제거하는 무손실 분해 규칙 <br/>\
- 데이터 중복을 해소하기 위해서 릴레이션을 분해하는 과정 <br/>\
- 제1정규형 ~ 제5정규형, BCNF가 실무적으로 활용되며 나머지는 연구용<br/>\
- 정규화는 논리적 설계 단계에서 수행 <br/><br/>\
# 원칙(무중분) : 무손실분해, 중복성감소, 분리원칙 <br/><br/>\
<img src="./img/DB_4.PNG" style = "max-width:100%; height:auto;"><br/>\
# 종류 <br/>\
<img src = "./img/DBNormalization.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 정규화 효과 <br/>\
- 모델링 측면 : 이상현상 제거, 안전성 확보 <br/>\
- 성능 측면 : 저장 공간 절약, 단순 쿼리 성능 향상 <br/>\
- 개발 측면 : 테이블 명확화, 접근제어 강화 <br/>\
- DB 운영 측면 : 확장성 용이, DB 설계 용이 <br/><br/>\
# 전체 <br/>\
<img src = "./img/NormalForm.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
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
<img src = "./img/암스트롱공리_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암스트롱공리_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src= "./img/DB_7.PNG" style = "max-width:100%; height:auto;">\
',

// 관계 대수
'# 정의 : 질의 결과 생성 / 연관 순서 명시 / 절차적 언어 <br/>\
- 질의에 대한 결과를 생성하기 위해 수행해야 할 연산의 순서를 명시하는 절차적 언어 -> 상용 관계 DBMS의 범용 SQL 이론적 기초 <br/><br/>\
<img src = "./img/관계대수_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/관계대수_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 예제 <br/>\
<img src = "./img/관계대수_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/RelativeAlgebra2.png" style = "max-width:100%; height:auto;">\
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

// Event Sourcing
'# 정의 : 이벤트 / 데이터 저장 기법 <br/>\
- 순차적으로 발생하는 이벤트를 모두 저장하는 데이터 저장 기법\
',

// 다차원 모델링
'# 정의 : DW 요소 기술 / 대용량 / 빠른 성능 / 분석 <br/>\
- 대용량 데이터를 다양한 관점에서 빠른 성능으로 분석하기 위한 DW 요소기술 <br/><br/>\
# 구성요소 (<font color = "red">사차속계</font>)<br/><br/>\
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
- 별자리 스키마 : 각기 다른 Fact 테이블들이 동일한 Dimension 테이블과 조인되는 구조 <br/><br/>\
# 절차 <br/>\
- 요구분석, Fact분석 : OLAP 데이터 분석 <br/>\
- 차원분리 : 사용자 주요관점 식별, 사실/차원 속성분리 <br/>\
- 스키마 정의 : Star, Snow Flake, Constellation <br/>\
- 다차원 테이블 : 사용자 View 중심 <br/>\
- 인덱스 적용 : 모델링 성능 향상위한 Bitmap, Star Join 적용 <br/><br/>\
<img src = "./img/다차원모델링_1.png" style = "max-width:100%; height:auto;">\
',

// 스타 스키마
'# 정의 : Fact Table 중심 / Dimension Table 배치 형태 모델링 <br/>\
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

// 중심성 이론
'# 정의 : 그래프, SNS / Vertex, Node / 상대적 중요성 척도 <br/>\
- 그래프 이론에서 중심성이란 그래프 혹은 사회 연결망에서 꼭짓점(vertex) 혹은 노드(node)의 상대적 중요성을 나타내는 척도 <br/><br/>\
# 유형 (<font color = "red">연근매고조카페</font>)<br/>\
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

// CKAN
'# 정의 : 컨텐츠 관리, 시각화, API 추출 / 타 오픈 소스 결합 / 데이터 플랫폼 <br/>\
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

// DA
'# 정의 : 데이터 관점 / 업무 / 개체, 속성 추출 및 정의 담당자 <br/>\
- 데이터 관점에서 구축하려고 하는 업무를 사용자/현업 담당자와 협의 및 분석하여 개체와 속성 추출 및 정의하는 담당자 <br/><br/>\
# Overview <br/>\
<img src = "./img/DA_DBA_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 역할 <br/>\
- 업무 범위 : 인프라 구축, 데이터/메타 데이터 정책 관리 <br/>\
- 관리 영역 : 데이터 관리 정책, 요구사항 반영 모델 및 표준 정의 <br/>\
- 주 업무 : 분석 및 설계, 요구사항 데이터 모델 반영 <br/>\
- 품질 수준 확보 : 정책, 표준관리, 적용 <br/>\
- 전문 기술 : 담당 업무 분야 지식, 데이터 모델링 지식 <br/><br/>\
* 124회 관리 2교시 5번\
',

// DBA
'# 정의 : DB 설치 / ERD -> 물리 테이블 생성 / SQL 튜닝 / 담당자<br/>\
- 개발에 필요한 DB를 설치하고, DA로 받은 논리분석(ERD) 결과를 기반으로 물리적 테이블을 생성 및 SQL 튜닝하는 담당자 <br/><br/>\
# 역할 <br/>\
- 업무 범위 : 물리 설계, 개발, 시험, 구현, 유지보수, 튜닝 <br/>\
- 관리 영역 : 구축 데이터 베이스 <br/>\
- 주 업무 : 성능, 안정성 <br/>\
- 품질 수준 확보 : 정합성 관리 <br/>\
- 전문 기술 : 데이터 모델 해독 능력, 특정 데이터베이스 제품 전문 지식 <br/><br/>\
* 124회 관리 2교시 5번\
',

// DQM
'# 데이터 품질관리 정의 : 기대 만족 / 데이터 관리 및 개선 활동 <br/>\
- 기관이나 조직 내외부의 정보시스템 및 DB 사용자의 기대를 만족시키기 위해 지속적으로 수행하는 데이터 관리 및 개선 활동 <br/><br/>\
# 암기 <br/>\
<img src = "./img/DataFrameworkSummury.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 데이터 품질관리 프레임워크 <br/>\
- 정의 : 데이터 품질관리의 대상이 되는 구성요소와 요소들 간의 관계를 정의한 데이터 품질관리의 기본 개념틀 <br/>\
<img src = "./img/DQ_Framework.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 데이터 관리 <br/>\
<img src = "./img/DQ_Admin.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 데이터 구조관리 <br/>\
<img src = "./img/DQ_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 데이터 관리프로세스 <br/>\
<img src = "./img/DQ_AdminProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 124회 관리 2교시 5번 <br/>\
* 123회 관리 3교시 2번\
',

// DQM3
'# 정의 : 수준진단, 개선과제, 방안단계 / 데이터 품질 프로세스 성숙도 모델 <br/>\
- Data Quality Management Maturity Model <br/>\
- 데이터 품질관리 수준을 진단하고 개선과제, 방안 단계를 체계적 제시하는 데이터 품질 프로세스 성숙도 모델 <br/><br/>\
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

// ISO/IEC 20943-5
'# 정의 : 동명이의어 / 데이터 요소 매핑 표준 <br/>\
- Metadata Mapping Procedure <br/>\
- 동일한 의미의 다른 이름 가지는 데이터 요소들에 대해 매핑하기 위한 표준 <br/><br/>\
# 구성 (<font color = "red">데값메온</font>)<br/>\
- Part3 : 데이터 요소 표준화 <br/>\
- Part4 : 값 영역 표준화 <br/>\
- Part5 : 메타데이터의 의미적 일, 매핑절차 표준화 <br/>\
- Part6 : 온톨로지 생성 FW <br/><br/>\
# 절차 <br/>\
- 메타데이터 스키마 수집<br/>\
- 속성 분류 <br/>\
- DEC(ISO IEC 11179-1의 Data Element Concept) 설정 <br/>\
- 의미적 매핑 테이블 구성\
',

// DQC
'# 정의 : 공공민간 개발 / 범 국가적 데이터 품질 제도 <br/>\
-  공공•민간에서 개발하여 활용 중인 정보시스템의 데이터 품질을 확보하기 위해 데이터 자체 품질과 데이터 관리체계의 품질, 그리고 데이터베이스 보안 체계를 심사•인증하여 범국가적 데이터의 품질 제고 및 고도화를 위한 제도<br/><br/>\
# 암기 <br/>\
- V-도업:플골실5/3.5/3.2 <br/>\
- M-일정 적접 보유 / 도정통정최 <br/>\
- S-접암작취 <br/><br/>\
# 유형 <br/>\
- 데이터인증(DQC-V) : 도메인,업무규칙 -> 데이터 정합성 정량화 > Platinum Class(5시그마 이상 99.977%이상) > Gold(3.5시, 97.7%) > Silver(3.2시, 95.510%)<br/>\
- 데이터관리인증(DQC-M) : 일관성, 정확성, 적시성, 접근성, 보안성, 유용성 -> 도정통정최(1~5Level) <br/>\
- 데이터보안인증(DQC-S) : 접근제어, 암호화, 작업결재, 취약점분석 -> 접압작취(1~4Level)<br/><br/>\
* 라이지움 78회 3교시 6번\
',
  
// 인덱스
'# 정의 : 별도 체계 저장 DB Object <br/>\
- 데이터 검색속도 향상을 위하여 테이블에 저장된 로우를 식별 가능하도록 구조화된 형태의 테이블과 별도의 체계로 저장한 데이터베이스 오브젝트 <br/><br/>\
# 구성요소 (B-Tree) <br/>\
- Root Block <br/>\
- Branch Block : 분기 목적<br/>\
- Leaf Block : RID(Record Identifier) 구성 <br/><br/>\
# 스캔방식 <br/>\
- Index Range Scan : 수직적 탐색 후 리프블록 필요한 범위만 스캔 <br/>\
- Index Full Scan : 리프 블록 수평적 탐색, 최적의 인덱스 없을 경우 차선 선택 <br/>\
- Index Unique Scan : 수직적 탐색만 / Unique Index = 조건 검색 <br/>\
- Index Skip Scan : Distinct Value 개수 적은 경우 / 가능성 있는 하위 블록만 <br/>\
- Index Fast Full Scan : 트리구조 무시, 세그먼트 전체 Multiblock Read 방식 스캔 <br/>\
- Index Range Scan Descending : Index Range Scan 역방향 스캔 <br/><br/>\
# 종류 <br/>\
1. 순서 인덱스 <br/>\
- 밀집 인덱스 : 모든 검색키 1:1 연결 <br/>\
- 희소 인덱스 : 몇 개의 검색키 연결 <br/>\
- 다단계 인덱스 : 일부 메모리 적재, 일부 디스크 저장 <br/>\
- B 트리 인덱스 : 좌우 균형 유지, O(logn) 성능 유지 <br/><br/>\
2. 해시 인덱스 <br/>\
- 정적 해싱 : 버킷 수 고정, 데이터 개수를 이미 알고 있는 경우 <br/>\
- 동적 해싱 : 버킷 수 가변, 데이터 증감 원활 위해 (Trie 자료구조 사용) <br/>\
- 확장 해싱 : 해시 함수 동적 변경 허용 기술, 디렉토리 버킷으로 2단계 구조 <br/><br/>\
3. 확장 인덱스 (특정 밴더) <br/>\
- 군집 인덱스(MS) : 검색키의 순서와 파일의 순서가 순차적 연결 <br/>\
- 비군집 인덱스(MS) : 검색키의 순서와 다르게 파일의 순서 연결 <br/>\
- 함수 인덱스(Oracle) : 사용자 정의 함수 (데이터 타입 상이한 컬럼) <br/>\
- 비트맵 인덱스(Oracle) : 비트 이용 컬럼값 저장, ROWID 자동 생성 <br/>\
- 도메인 인덱스(Oracle) : 텍스트, 카테고리등 도메인 영역에 대한 사용자 정의 인덱스 <br/><br/>\
# 인덱스 튜닝 : 선두 컬럼 조건절 가공, 묵시적 형변환 <br/><br/>\
* KPC 90회 관리 3교시 2번\
',

// 다차원 색인구조
'# 정의 : 이미지, 멀티미디어 / 효율적 검색 / 여러개 필드 / 동시 키 사용 구조 <br/>\
- 이미지나 멀티미디어 데이터와 같은 비정형 데이터의 효율적 검색을 위해 여러개의 필드(애트리뷰트)를 동시에 키로 사용한 색인 구조 <br/><br/>\
# 유형 <br/>\
1. PAM(Point Access Method) <br/>\
- 다차원 점 데이터 저장 및 검색 <br/>\
<img src = "./img/PAM.png" style = "max-width:100%; height: auto;"><br/><br/>\
2. SAM(Spatial Access Method) <br/>\
- 선, 면 등과 같은 크기를 갖는 다차원 데이터를 저장 및 검색 <br/>\
<img src = "./img/SAM.png" style = "max-width:100%; height: auto;"><br/><br/>\
* 124회 관리 1교시 9번\
',

// PAM
'# 정의 : Point Access Method <br/>\
- 다차원 점 데이터 저장 및 검색 <br/><br/>\
# 유형 <br/>\
1. k-d Tree <br/>\
- 개념 : Binary Search Tree를 다차원 공간으로 Straightforward 하게 확장한 자료구조 <br/>\
<img src = "./img/kdtree.png" style = "max-width:100%; height: auto;"><br/><br/>\
2. k-d-b Tree <br/>\
- 개념 : B-Tree와 k-b Tree 의 결합 <br/>\
<img src = "./img/kdbtree.png" style = "max-width:100%; height: auto;"><br/><br/>\
3. Grid File <br/>\
- 개념 : 전체 공간을 하나 이상의 격자(Grid)로 분할 <br/>\
<img src = "./img/GridFile.png" style = "max-width:100%; height: auto;"><br/><br/>\
4. Quad Tree <br/>\
- 개념 : 공간을 순환적으로 분해하는 계층적 자료 구조 <br/>\
<img src = "./img/QuadTree.png" style = "max-width:100%; height: auto;"><br/><br/>\
* 124회 관리 1교시 9번\
',

// SAM
'# 정의 : Spatial Access Method <br/>\
- 선, 면 등과 같은 크기를 갖는 다차원 데이터 저장 및 검색<br/><br/>\
# 유형 <br/>\
1. R-Tree <br/>\
- 개념 : 다차원 공간 데이터 저장 색인 자료구조 <br/>\
<img src = "./img/RTree.png" style = "max-width:100%; height: auto;"><br/><br/>\
2. R+ Tree <br/>\
- 개념 : R Tree, K-D-B Tree 중간형태, 겹치는 데이터 여러 노드 중복 저장 색인 자료구조 <br/>\
<img src = "./img/RPlusTree.png" style = "max-width:100%; height: auto;"><br/><br/>\
3. R* Tree <br/>\
- 개념 : MBR의 넓이와 다른 MBR 과 겹침 영역의 최소화하는 색인 자료구조 <br/><br/>\
* 124회 관리 1교시 9번\
',

// 인덱스 구조
'# B-Tree : <font color = "red">균등한 응답속도</font> 유지를 위하여 Leaf Level의 좌우 균형을 유지하는 트리 <br/><br/>\
# B+Tree : <font color = "red">링크드 리스트</font>, Leaf에 모든 값 정렬 <br/><br/>\
# B*Tree : <font color = "red">2/3 split</font> overhead 감소 <br/><br/>\
# R-Tree : 사각형 영역안에 객체가 완전히 포함되도록 하는 <font color = "red">MBR(Minimum Bounding Region 최소경계사각형)에</font> 기반한 인덱싱 기법 <br/><br/>\
# R+Tree : R-Tree에서 노드간의 <font color = "red">중첩 영역 제거</font>, k-d-B트리의 특징 접목, 겹침 없음 <br/><br/>\
# R*Tree : R-Tree에서의 <font color = "red">삽입, 삭제 알고리즘을 개선</font>, 성능 개선 <br/><br/>\
# T-Tree : <font color = "red">AVL-Tree와 B-Tree의 장점</font>을 모아 메모리상에서 최적의 성능을 유지할 수 있도록 한 트리 (AVL-Tree + B-Tree; Min/Max)<br/><br/>\
<img src = "./img/인덱스구조1.png" style = "max-width:100%; height: auto;"><br/><br/>\
<img src = "./img/인덱스구조2.png" style = "max-width:100%; height: auto;"><br/><br/>\
<img src = "./img/인덱스구조3.png" style = "max-width:100%; height: auto;"><br/><br/>\
<img src = "./img/인덱스구조4.png" style = "max-width:100%; height: auto;"><br/><br/>\
* 124회 관리 1교시 9번\
',

// Hilbert R-Tree
'# 정의 : 힐버트 곡선을 활용한 대용량의 공간데이터베이스 구축 <br/>\
- Hilbert 곡선을 이용해서 대용량의 데이터를 고비용의 분할 과정 없이 R-Tree를 구성하는 기법 <br/><br/>\
# 특징 <br/>\
- 고속 연산 : 고비용 분할 과정 없이 R-Tree 구성 <br/>\
- GPU 활용 : Hilbert 매핑 병렬화, 벌크로딩 고속화 / 45배 향상 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/HillbertRTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Hilbert Cell : 공간의 차수가 1인 경우의 Hilbert 곡선 <br/>\
- Hiblert Gene : 이전 차수 곡선 통한 다음 차수 생성 정보 <br/>\
- GPGPU : 일반 연산 가능 설계 GPU <br/><br/>\
# 절차 (<font color = "red">힐로리상</font>) <br/>\
- 힐버트 값 계산 <br/>\
- 오름 차순 정렬 <br/>\
- 리프 노드 계산 <br/>\
- 상위 노드 계산 <br/><br/>\
# 활용 <br/>\
- 벌크 로딩 : 고속화, 공간활용도 증가 <br/>\
- 효율적 질의 : 인덱스 성능 향상 <br/><br/>\
# R-Tree 비교 <br/>\
<img src = "./img/Hilbert_RTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 1교시 13번\
',
  
// Hashing
'# 정의 : Table / Function / 저장, 검색 수행기법 <br/>\
- Hash Table 저장공간에 Hash Function 을 이용하여 저장과 검색을 수행하는 기법 <br/><br/>\
# 특징 <br/>\
- 검색속도 빠름, 기억공간 소모 많음 <br/>\
- 키-주소 변환 필요 (DAM-직접접근 파일 구성시 사용) <br/><br/>\
# 구성요소 <br/>\
- Keys <br/>\
- Hash Function <br/>\
- Buckets <br/><br/>\
# Hash Table <br/>\
1. 개념 : Bucket으로 구성된 기억공간 <br/><br/>\
2. 구성요소 <br/>\
- Bucket : 한 개 이상 데이터 저장 공간 / 한 개 Address <br/>\
- Slot : 한 개 데이터 저장 공간 <br/>\
- Collision : Home addredss 동일 현상 <br/>\
- Synoyms : 동일한 홈 주소 데이터 집합 <br/>\
- Overflow : Bucket 범위 <br/><br/>\
# Overflow 처리기법 <br/>\
1. 개방주소법 : 다른 주소도 개방 <br/>\
- 선형 검색법 <br/>\
- 2차 검색법 <br/>\
- 무작위 검색법 <br/>\
- 이중해싱 <br/><br/>\
2. 폐쇄주소법 : 다른 주소 개방 안하니 Chaining으로 해결 <br/>\
- 해시 체이닝 <br/>\
- 동거자 <br/>\
- 독립 오버플로 구역 <br/><br/>\
3. 재해싱 : 새로운 해싱함수를 이용하여 새로운 홈 주소 추출 <br/><br/>\
# Hashing Function (제기폴제)<br/>\
- 제산법 : 나머지 값 <br/>\
- 기수변환법 : 임의의 기수로 변환 <br/>\
- 폴딩법 : 여러조각 나눔후 임의 연산 <br/>\
- 제곱법 : 키값 제곱후 중간부분 사용 <br/><br/>\
* 그리타 \
',

// Clustering Factor
'# 정의 : index, Column  저장 위치 유사 정도 <br/>\
- 인덱스 컬럼값과 데이터 로우의 저장위치가 얼마나 비슷한 순서로 저장되는 지표',

// NewSQL
'# 정의 : ACID + NoSQL <br/>\
- RDBMS 특성인 ACID를 보장하면서 OLTP 부하 패턴에 대해 NoSQL 수준의 성능을 제공하는 DBMS <br/><br/>\
# 주요기능 <br/>\
1. 데이터/트랜잭션 <br/>\
- SQL 기반 상호작용 : App의 DBMs 연계시 SQL 사용해 통신 <br/>\
- ACID 지원 : Commit 위한 필요속성인 ACID 지원해야 함 <br/>\
- 비 잠금 동시성 제어 : 트랜잭션 동시성 제어 Non-Locking 구조 <br/><br/>\
2. Infra <br/>\
- 노드 단위 고성능 : 단일 DBMS 서버 노드 단위 확장, 고성능 보장 <br/>\
- 명령/비 공유 아키텍처 : 병렬 수행시 고성능 처리, 분산 처리시 독립적 존재 <br/><br/>\
# 핵심 기술 <br/>\
1. 스토리지 관리 <br/>\
- Main Memory Storage : In Memory DB / Paging(VoltDB), Column Store(MemSQL) <br/>\
- Sharding : 물리적 타 DBMS 간 파티셔닝 수평분할, 분산 저장/조회 <br/><br/>\
2. 트랜잭션/성능관리 <br/>\
- 병행제어 : 2PL 대신 Time stamp Ordering(MVCC) 사용 <br/>\
- Secondary Index : 기본키 x, 일반 속성들 서브셋으로 만들어진 인덱스 <br/>\
- Replication : 쓰기 연산시, 복제본에서 승인되어 실행 <br/><br/>\
<img src = "./img/NewSQL_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NewSQL_2.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NewSQL_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 119회 합숙 3일차 관리 1교시 12번 \
',

// 디지털 리터러시
'# 정의 : 데이터 활용 능력 / 목적, 의미, 이해, 해석, 활용 <br/>\
- Data 와 Literacy 의 합성어로, 데이터를 목적에 맞게 생성하고, 데이터의 숨겨진 의미를 올바르게 이해 및 해석하여 적절하게 활용하는 능력<br/><br/>\
# 6영역 (<font color = "red">연비창디의기</font>)<br/>\
- 연구 및 정보 <br/>\
- 비판적 사고력 <br/>\
- 창의성 및 혁신성 <br/>\
- 디지털 시민의식 <br/>\
- 의사소통 및 협동 <br/>\
- 기술활용 및 개념 <br/><br/>\
# 프레임 워크 : 윤리, 능력, 적용 <br/><br/>\
* KPC 94회 1교시 13번\
',

// Join
'# 정의 : 테이블, 데이터베이스 연결 / 데이터 검색 방법 <br/>\
- 두개 이상의 테이블이나 데이터베이스를 연결하여 데이터를 검색하는 방법 <br/><br/>\
# 논리적 조인 (<font color = "red">내외크셀</font>)<br/>\
1. Inner Join (교집합) <br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A TABLE_B B <br/>\
WHERE A.NO_EMP <font color = "red">=</font> B.NO_EMP <br/>\
AND   A.DEPT   <font color = "red">=</font> B.DEPT   <br/><br/>\
2. Left Outer Join (A) <br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A TABLE_B B <br/>\
WHERE A.NO_EMP<font color = "red">(+)</font> = B.NO_EMP <br/>\
AND   A.DEPT   = B.DEPT   <br/><br/>\
3. Full Outer Join (A+B) <br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM TABLE_A A TABLE_B B <br/>\
WHERE A.NO_EMP<font color = "red">(+)</font> = B.NO_EMP<font color = "red">(+)</font> <br/>\
AND   A.DEPT   = B.DEPT   <br/><br/>\
4. Cross Join <br/>\
- 모든 경우의 수 표현 <br/>\
- 결과값 수 N*M <br/>\
<img src = "./img/Join_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM <font color = "red">EX_TABLE A, JOIN_TABLE B</font> <br/><br/>\
5. Self Join <br/>\
- 자기 자신과 조인 <br/>\
- 하나의 테이블 여러번 복사 <br/>\
- 자신이 가지고 있는 칼럼 다양하게 변형시켜 활용할 때 사용 <br/>\
<img src = "./img/Join_2.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
SELECT A.NAME, B.AGE <br/>\
FROM <font color = "red">TABLE_A</font> A, <font color = "red">TABLE_A</font> B <br/><br/>\
# 물리적 조인 (<font color = "red">네소해카인</font>)<br/>\
- SQL문 사용하지 않음<br/>\
- SQL문에서 요청하는 논리 조인을 옵티마이저가 자료 통계나 규칙에 맞게 가져오는 방법 <br/>\
- 내부에서 일어나는 조인 <br/><br/>\
1. Nested Loop Join <br/>\
- <font color = "red">가장 많이 사용</font>하는 기본 조인 방식 <br/>\
- 선수행 범위가 중요, <font color = "red">후 수행 랜덤 엑세스</font> <br/><br/>\
2. Sort Merge Join <br/>\
- <font color = "red">정렬 후</font> 조인 수행 방식 <br/>\
- <font color = "red">조인은 효과적</font>, 정렬에 대한 부담 존재 <br/><br/>\
3. Hash Join <br/>\
- <font color = "red">해시함수</font> 기법 활용한 조인 방식 <br/>\
- 일반적으로 <font color = "red">높은 성능</font> 수준 <br/><br/>\
4. Cartesion Join <br/>\
- 전체 x 전체 또는 <font color = "red">M:M</font> 조인 방식 <br/>\
- 일반적으로 <font color = "red">조인 순서 잘못된</font> 경우 발생 <br/><br/>\
5. Index Join <br/>\
- <font color = "red">인덱스 존재</font>시 인덱스간 해시 조인을 통해 액세스 하는 기법\
',

// 데이터 표준화 
'# 정의 : 데이터 원칙적 정의 규칙 수립 및 적용 <br/>\
- 시스템별로 산재해 있는 데이터 정보 요소에 대한 명칭, 정의 규칙에 대한 원칙을 수립하여 이를 전사적으로 적용하는 것 <br/><br/>\
<img src = "./img/데이터표준화_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 필요성 <br/>\
- 데이터 운영 : 데이터 불일치, 의미파악 지연 <br/>\
- 데이터 처리 : 데이터 통합 어려움, 정보시스템 변경 및 유지보수 곤란 <br/><br/>\
# 데이터 <font color = "red">표</font>준 (용단도코)<br/>\
- 표준 용어 : 업무적으로 사용하는 용어 정의 표준 <br/>\
- 표준 단어 : 일관된 단어 사용 (한글,영어) <br/>\
- 표준 도메인 : 칼럼에 대한 성질 (문자형,숫자형) <br/>\
- 표준 코드 : 특정 도메인 값 미리 정의 <br/><br/>\
# <font color = "red">조</font>직 구성 <br/>\
- 업무 담당자 : 표준 신규 및 변경 요청, 데이터 관리자 지시 내용 적용 <br/>\
- 데이터베이스 관리자 : 테스트 및 검증, 사용자 반영 결과 통보 <br/>\
- 데이터 관리자 : 메타 DB 표준 등록, 변경 표준 배포 <br/>\
- 전사 데이터 관리자 : 전사 관점 가이드 자문 및 제시 <br/><br/>\
# 데이터 표준화 <font color = "red">절</font>차 (수정확관)<br/>\
- 요구사항 수집 : 개별 시스템 표준 수집<br/>\
- 정의 : 표준화 원칙 정의<br/>\
- 확정 : 데이터 표준 검토 및 확정 <br/>\
- 관리 : 데이터 표준 이행<br/><br/>\
# 프로세스 <br/>\
<img src = "./img/DataStandardAdminProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 관리 3교시 6번 <br/>\
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

// DB Tunning
'# 정의 : DB응용, 자체, OS 조정 / 최적 성능 개선 작업<br/>\
- 데이터베이스 응용, 데이터베이스 자체, 그리고 운영체제의 조정 등을 통하여 자원으로 최적의 성능(응답속도)를 얻을 수 있도록 개선하는 작업 <br/><br/>\
# 3단계 설명 <br/>\
- DB 설계 튜닝(모델링 관점) : 설계 단계 고성능 고려 / 반 정규화, 분산파일배치 <br/>\
- DBMS 튜닝(환경 관점) : 성능 고려하여 메모리나 블록 크기 지정 / Buffer, Cache 크기 <br/>\
- SQL 튜닝(응용프로그램 관점) : SQL 작성시 성능 고려 / Hash, Join <br/><br/>\
# 시스템 데이터베이스 튜닝기법 <br/>\
- CPU 튜닝 : Peak Time 60% 이하 <br/>\
- 메모리 튜닝 : 메모리 최적화, 버퍼 크기 조정 <br/>\
- 스토리지 : RAID 레벨 조정, SSD 도입, 스토리지 스티어링 <br/>\
- 네트워크 튜닝 : 로드밸런싱, 대역폭 확대 <br/><br/>\
* KPC 92회 관리 1교시 3번\
',

// Optimizer 
'# 정의 : 최적 비용 처리경로 생성 DBMS 내부 엔진 <br/>\
- SQL을 가장 빠르고 효율적으로 수행할 최적의 처리경로를 생성해주는 DBMS 내부의 핵심엔진 <br/>\
- 사용자가 구조화된 질의언어로 결과집합을 요구하면, 이를 생성하는데 필요한 처리경로는 DBMS에 내장된 옵티마이저가 자동으로 생성 <br/>\
- 실행계획 : 옵티마이저가 생성한 SQL 처리 경로<br/><br/>\
# 개념도 (<font color = "red">PODS</font>)<br/>\
<img src = "./img/DB_Optimizer.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. Parser : 개별 요소 분석, Syntax Check <br/><br/>\
2. Optimizer <br/>\
- Query transformer : Parsing SQL 일반형태 변환 <br/>\
- Estimator : 선택도, 카디널리티 비용 계산, 총 비용 계산 <br/>\
- Plan Generator : 후보군 실행계획 생성 <br/><br/>\
3. Row-Source Generator : 실제 실행 형태 포맷 <br/><br/>\
4. SQL Engine : SQL Run <br/><br/>\
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
- Create index index_name on table_name(column) <u><b>parallel 20;</b></u> <br/><br/>\
2. Table 수정 정의 <br/>\
- Alter Table table_name <u><b/>parallel 20;</b></u><br/><br/>\
3. Hint 기능 사용 <br/>\
- Select <u><b/>parallel(column, 20)</b></u> From table_name; <br/><br/>\
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
- Barker : IE표기법과 유사한 표기법, Oracle에서 Case Method로 채택하여 사용 <br/>\
<img src = "./img/Barker.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* # : PK / * : Mandatory / o : Optional </font><br/><br/>\
* 122회 4교시 5번\
',

// 관계형 데이터 모델
'(<font color = "red">릴튜속식카</font>)<br/>\
<img src = "./img/RelationDataModel.png" style = "max-width:100%; height:auto;">\
',
  
// 연결함정
'# 정의 : ER 모델 / 관계성 분실 현상<br/>\
- ER 모델 상 관계가 연결되지만, 실제 관계 설정이 되지 않는 관계성 분실 현상 <br/><br/>\
# 종류 <br/>\
1. 부채꼴 함정 (<font color = "red">단교학</font>)<br/>\
- 개념 : <font color = "red">모호</font>한 현상 <br/>\
- 예시 <br/>\
<img src = "./img/SectorformTrap.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 균열 함정 (<font color = "red">교학학</font>)<br/>\
- 개념 : <font color = "red">미존재</font> 현상 <br/>\
- 예시 <br/>\
<img src = "./img/CrashTrap.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 90회 응용 1교시 11번\
',

// [빅데이터]- Edge Analytics
'# 정의 : 지역별 분석 기술<br/>\
- 데이터를 중앙에 모아 처리할 필요 없이 지역별로 데이터 소스 가까이에서 실시간 분석과 저장을 지원하는 분석 기술 <br/><br/>\
# 암기 <br/>\
- Device, Sensor, Gateway, DataCenter <br/>\
- 시스코 ParStream <br/><br/>\
# 특징 : 지역성, 실시간 통제, 부하분산 <br/><br/>\
# 구성 <br/>\
- 디바이스 : Device/Sensor, Gateway, DataCenter <br/>\
- 분석 : Device/Sensor Analytics, Edge Analytics, Core Anaytics <br/><br/>\
<img src = "./img/EdgeAnalytics_1.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/EdgeAnalytics_2.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/EdgeAnalytics_3.png" style = "max-width: 100%; height: auto;">\
',

// [빅데이터]- R-HIVE
'# 정의 : Bigdata 고급분석 플랫폼 / R + HIVE <br/>\
- 가장 대중적인 분석 도구인 R과 검증된 대용량 분산 DW 시스템인 Hive를 결합한 Big Data 고급분석 플랫폼<br/><br/>\
- R-Hive : R-Hive bridge, R기반 빅데이터 분석, Visualization <br/>\
- R(풍부분석함수 ,Visualization, 대용량 분석 불가) + Hive(BigData 처리가능, 분산병렬처리, 기능확장 용이성, 데이터 분석기능 약함) <br/><br/>\
',

// [빅데이터]- NoSQL
'# 정의 : 고용량, 비정형, 효율처리 / 분산 DBMS <br/>\
- RDBMS 한계를 벗어나, 고용량의 비정형 데이터를 효율적으로 처리할 수 있는 구조와 유연성을 가진 분산 DBMS <br/><br/>\
# 모델 구조 <br/>\
- Key/Value Store : <font color = "red">Unique, API</font> 접근(Put(key,value), Value :=get(key)) / Redis, Dynamo <br/>\
- Column Family Store : Column Value <font color = "red">묶음</font> / Cassandra, HBase <br/>\
- Document Store : Type Document, <font color = "red">XML, JSON</font> / CouchDB, MongoDB <br/>\
- Graph Store : <font color = "red">Node, Vertex, Edge</font>, 시맨틱, 온톨로지 / Neo4J, AllegroGraph <br/><br/>\
# 데이터 모델링 절차(<font color = "red">도쿼패기후하</font>) <br/>\
1. 도메인 모델 파악 : 개체 파악, 분석, ERD 도식화 <br/>\
2. 쿼리 결과 디자인 : 데이터 출력 내용 기반 디자인 <br/>\
3. 패턴 이용 데이터 모델링 : Put/Get 형태로 NoSQL내 테이블로 재정의 <br/>\
4. 기능 최적화(모델 구체화) : Secondary Index 이요하여 최적화 <br/>\
5. 후보 NoSQL 선정 및 테스트 : 구조 특성 분석후 부하, 안전성 테스트<br/>\
6. 최적화 및 하드웨어 디자인 : 완성된 데이터 모델을 NoSQL에 최적화 및 하드웨어 디자인 <br/><br/>\
# 특징 : 테이블간 관계정의를 안함, 분산환경지원, 저비용처리(오픈소스), 확장성, 다양 형태 저장구조 <br/><br/>\
# 모델링 사례 <br/>\
<img src = "./img/NoSQLModelingExample.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* 124회 관리 3교시 3번 <br/>\
* 123회 관리 1교시 11번 <br/>\
* 117회 관리 1교시 9번 \
',
  
// Column Family Store
'# 정의 : Value 조합 저장 / 분산 데이터 베이스 형태 <br/>\
- Key-Value Store 방식의 단점 극복 위해, Value 조합을 저장하는 분산 데이터 베이스 <br/><br/>\
# 구조 <br/>\
<img src = "./img/ColumnFamilyDBStructure.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 구성요소 <br/>\
- Colum Family : Column들을 물리적으로 배치 <br/>\
- Row : Row Key, 여러 Column 으로 구성 <br/>\
- Row Key : Row 식별자, 검색 기본키 <br/>\
- Column : 하나의 Row에 여러 Column 저장 <br/>\
- Time Stamp : Value 버전위한 식별자 활용 <br/><br/>\
# 유형 <br/>\
- Cassandra : Bigtable과 Dynamo 분산기술 <br/>\
- HBase : 하둡기반 동작, 빅데이터 분산처리 <br/><br/>\
* 123회 관리 1교시 11번 \
',

// Graph Database
'# 정의 : NoSQL 기반 데이터베이스 / 노드,엔티티 관계 그래프 모델 / 트랜잭션 관리 <br/>\
- 노드(엔티티)와 이들 간의 관계를 그래프 데이터 모델로 저장하여 트랜잭션을 관리하는 기능을 API 로 제공하는 NoSQL 기반 데이터베이스<br/><br/>\
# 정의 : 데이터를 노드와 엣지로 표현하여 데이터 사이의 관계를 그래프 구조를 이용하여 저장하는 NoSQL 기반의 데이터 베이스 <br/><br/>\
<img src = "./img/DS_38_1.PNG" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/DS_38_2.PNG" style = "max-width: 100%; height: auto;">\
',
  
// NoSQL 데이터 모델링 패턴
'# 데이터 모델링 패턴(<font color = "red">CGH - DAA CIA TAM</font>) <br/>\
1 Conceptual Techniques <br/>\
- Denormalization : 같은 데이터 <font color = "red">중복</font>해서 저장 <br/>\
- Aggregation : <font color = "red">Schema-less</font> 이용, 데이터 모델 합성 가능 <br/>\
- Application Side Join : <font color = "red">N:M관계 Join</font> 필요하므로, Application Level 구현 <br/><br/>\
2. General Modeling Techniques <br/>\
- Composite Key Index : <font color = "red">결합키</font> 구성, <font color = "red">다중키</font> 구성 <br/>\
- Index Table : <font color = "red">Key-Value Store Index</font> 활용, 직관적 모델링 패턴 <br/>\
- Atomic Aggregates : <font color = "red">Entity</font> -> <font color = "red">Key-Value</font> 저장 -> 원자적 업데이트 <br/><br/>\
3. Hierachy Modeling Techniques <br/>\
- Tree Aggregation : Tree, <font color = "red">임의 Graph</font> <br/>\
- Adjacent List : <font color = "red">Linked List</font> 자료구조 <br/>\
- Materialized Path : Root에서 현재 노드까지 <font color = "red">전체 경로</font>를 Key로 저장 <br/><br/>\
* 라이지움 87회 응용 2교시 6번\
',

/// [빅데이터][NoSQL]- CAP 이론
'# NoSQL의 CAP 이론 <br/>\
- 개념 : Consistency, Availability, Partition Tolerance의 3가지 특징을 가지고 있으며, 이중 두가지만 만족할 수 있다는 이론 <br/><br/>\
# 속성 설명 <br/>\
- Consistency(일관성) : 모든 사용자는 동시에 항상 같은 데이터를 조회 <br/>\
- Availability(가용성) : 모든 사용자는 항상 Read/Write 할 수 있음 <br/>\
- Partition Tolerance(부분 결함 허용) : 부분적 결함에도 시스템은 정상 동작해야 함 <br/><br/>\
# 상세 설명 <br/>\
<img src = "./img/CAP.png" style = "max-width: 100%; height: auto;"><br/>\
- C+P : 데이터 발생, 변경시 수평적으로 확장된 클러스터내의 데이터 일관성을 즉각적으로 유지 (Couchbase, MongoDB, Appache HBase)<br/>\
- A+P : 즉시는 아니더라도 데이터 일관성은 결국에는 유지 (Cassandra, Couchbase(XDCR), ScyllaDB)<br/>\
- C+A : 데이터 발생, 변경시 수직적으로 확장된 시스템내에서 데이터 일관성을 즉각적으로 유지 (MySQL, Oracle)\
',
  
// PACEL
'# 정의 : 장애, 정상 상황 고려 / CAP 한계 극복 / 분산 데이터베이스 시스템 분류 이론 <br/>\
- 장애상황(Partition)과 정상상황(Else)을 모두 고려한 NoSQL 특성 설명 통한 CAP 이론의 한계점 극복, 분산 데이터베이스 시스템 분류 이론 <br/><br/>\
# 유형 <br/>\
<img src = "./img/PACEL.png" style = "max-width: 100%; height: auto;"><br/>\
1. PA / EL <br/>\
- 장애 상황시 : 가용 노드만 반영, 복구시 전체 반영 <br/>\
- 정상 상황시 : Latency 우선 고려 <br/>\
- Cassandra, DynamoDB <br/><br/>\
2. PA / EC <br/>\
- 장애 상황시 : 가용 노드만 반영, 복구시 전체 반영 <br/>\
- 정상 상황시 : 모든 노드 동일 메시지 보장 <br/>\
- Hazelcast IMDG <br/><br/>\
3. PC / EL <br/>\
- 장애 상황시 : Time Consistency 수준 보장 <br/>\
- 정상 상황시 : Latency 우선 고려 <br/>\
- PNUTS <br/><br/>\
4. PC / EC <br/>\
- 장애 상황시 : Time Consistency 수준 보장 <br/>\
- 정상 상황시 : 모든 노드 동일 메시지 보장 <br/>\
- VoltDB, HBase \
',

// [빅데이터][NoSQL]- NoSQL RDBMS 비교
'<img src = "./img/NoSQLRDBMS.png" style = "max-width: 100%; height: auto;">\
',

// [빅데이터][NoSQL]- BASE
'# 정의 : 가용성, 성능 중시 분산 시스템 특성 <br/>\
- Basically Available, Soft state, Eventually Consistence <br/>\
- 가용성과 성능을 중시하는 분산 시스템의 NoSQL 특성 <br/><br/>\
# BASE 속성 <br/>\
1. BAsically Availabe <br/>\
- 데이터는 <font color = "red">항상 접근</font> 가능 <br/>\
- <font color = "red">다수 스토리지</font>에 복사본 저장 <br/><br/>\
2. Soft-State <br/>\
- 노드의 상태는 <font color = "red">외부</font>에서 전송된 정보를 통해 상태 결정 <br/><br/>\
3. Eventually Consistency <br/>\
- 일정 <font color = "red">시간 경과</font>시 데이터의 일관성 유지되는 속성 <br/><br/>\
# BASE ACID 비교 <br/>\
<img src = "./img/BASEACID.png" style = "max-width: 100%; height: auto;">\
',

// 빅데이터 개인정보보호 가이드라인
'# 정의 : 산업 발전, 정보 주체 프라이버시 보호 / 빅데이터 활용 가이드 라인 <br/>\
- "공개된 정보" 및 "이용내역정보"와 같은 데이터의 수집-분석-저장-처리에 있어서 이를 활용하는 산업의 발전과 정보주체의 프라이버시 보호 위해 제정된 빅데이터 활용 가이드라인<br/><br/>\
# 주요 내용 <br/>\
- 비식별화 조치 <br/>\
- 빅데이터 투명성 확보 : 처리사실, 목적, 수집 출처 및 정보 활용 거부권의 행사 방법등을 이용자에게 투명하게 공개 <br/>\
- 개인정보 재식별시 조치 : 재식별 될 경우 즉시 파기하거나 추가적인 비식별화 조치하도록 함 <br/>\
- 민감정보 통신비밀 처리 금지 : 특정 개인의 사상/신념, 정치적 견해등 민감정보의 생성을 목적으로 정보 처리 금지 <br/>\
- 기술적 관리 보호 조치 : 저장/관리 시스템 기술적 관리\
',

// HDFS
'# 정의 : 대용량 고속도 파일 시스템 <br/>\
- Hadoop Distributed File System <br/>\
- 수십 테라바이트 또는 페타바이트 이상의 대용량 파일을 분산된 서버에 저장하고, 그 저장된 데이터를 빠르게 처리할 수 있게 하는 파일시스템 <br/><br/>\
# 구성요소 <br/>\
1. Name Node <br/>\
- Namespace : 열기, 닫기, 이름 동작 수행 <br/>\
- Block mapping : Name Node, Data Node Mapping <br/>\
- Metadata : 중재자, 저장소 <br/>\
- 복제 : 블록 복제 수행 <br/><br/>\
2. Data Node <br/>\
- R/W 처리 : 읽기 쓰기 <br/>\
- Block 처리 : Name Node 지시에 따라 생성, 삭제, 복제 수행 <br/><br/>\
# 쓰기 과정 (128MB) <br/>\
<img src = "./img/HDFS_Read.png" style = "max-width: 100%; height: auto;"><br/><br/>\
0. File 크기 Block화 <br/>\
1. Read 요청 <br/>\
2. Data Node 분석 <br/>\
3. 저장 Data 주소 전송 <br/>\
4. Data 저장 (메인 - 동일 랙 - 다른 랙) <br/>\
5. 완료 메시지 전송 <br/><br/>\
# 읽기 과정 <br/>\
<img src = "./img/HDFS_Write.png" style = "max-width: 100%; height: auto;"><br/><br/>\
1. Write 요청 <br/>\
2. Data Node List 전송 <br/>\
3. Data Node 저장 <br/>\
4. 완료 메시지 전송 <br/><br/>\
* KPC 95회 4교시 6번\
',

// 하둡 에코시스템 
'# 정의 : Big Data Platform 생태계 <br/>\
- 비정형 데이터 분석 뿐만 아니라, 실시간 분석, 정형 데이터 처리, 분석 알고리즘 , Workflow, Visualization 등 빅데이터 분석을 위한 다양한 오픈소스 기반 시스템 <br/><br/>\
# 구성요소 <br/>\
1. 수집 <br/>\
- Flume : 비정형 데이터 수집 <br/>\
- Sqoop : R DB 데이터 가져오기 <br/><br/>\
2. 빅데이터 저장, 활용 <br/>\
- Hbase : 컬럼기반 NoSQL 데이터베이스 <br/><br/>\
3. 빅데이터 처리 <br/>\
- Hive : 유사 SQL 기반 빅데이터 처리 (FaceBook)<br/>\
- Pig : 스크리브 언어 기반 빅데이터 처리 (Yahoo) <br/><br/>\
4. 빅데이터 관리 <br/>\
- Ooozie : 빅데이터 처리과정 관리 <br/>\
- HCatalog : 빅데이터 메타정보 관리 <br/><br/>\
<img src = "./img/HadoopEcoSystem.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 4교시 6번\
',
  
// ISO 20547
'# 개요 <br/>\
<img src = "./img/ISO20547Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성체계 (프유아보로) <br/>\
<img src = "./img/ISO20547Contents.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동향 <br/>\
- 국외 : ITU-T-3600, 클라우드 기반 빅데이터 기능 및 요구사항 <br/>\
- 국내 : ISO 20546, 빅데이터 개요 및 용어, 과기정통부 참여 중 <br/><br/>\
* 120회 응용 1교시 4번\
',
  
// BigData 분석 방법론
'# 정의 : 계층적 프로세스 모델\
- <font color = "red">Phase-Task-Step</font>의 3계층으로 구성된 <font color = "red">계층적 프로세스 모델</font> <br/>\
- 비즈니스 도메인과 문제점을 인식하고 비즈니스 요구사항과 데이터 분석에 필요한 원천 데이터 확보하고 분석 수행 <br/><br/>\
# 프로세스 (<font color = "red">PPADD</font>)<br/>\
<img src = "./img/BigData분석방법론프로세스.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 빅데이터 분석 활용 기법 (<font color = "red">플도기</font>)<br/>\
- 플랫폼 : 빅데이터 분석 플랫폼 HW / SW 구축 <br/>\
- 분석도구 : R언어, BigQuery, Presto <br/>\
- 분석기법 : 통계적분석(상관/회귀/분산), 데이터 마이닝, 텍스트 마이닝 <br/><br/>\
* KPC 94회 1교시 1번\
',

// DCAT
'# 정의 : W3C 주도 / 상호 운용 용이 / 카탈로그 표준 모델, 어휘 집합(Ontology) <br/>\
- Data Category Vocabulary <br/>\
- W3C가 주도하여 웹에 게시된 데이터 카탈로그 간의 상호 운용이 용이하도록 설계된 카탈로그 표준 모델과 데이터 속성을 표현하는 어휘의 집합(Ontology) <br/><br/>\
# 구성요소 (<font color = "red">리셋서디카</font>)<br/>\
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
  
// 데이터 플래그십
'# 정의 : 국민 체감 성공 사례 / 빅데이터 산업 활성화 목적위한 정책 <br/>\
- 인공지능, 딥러닝과 같은 지능정보 기술을 적용한 신 서비스를 개발하고, 교통, 의료, 환경, 안전 등 다양한 분야에서 국민이 체감할 수 있는 성공사례(Flagship) 확산 당을 통해 사회 현안 해결 도모하는 제도 <br/><br/>\
# 목적 <br/>\
- 빅데이터 기술 활용한 비즈니스 모델 개발 <br/>\
- 공공이익 실현 위한 선도과제 발굴 지원 <br/>\
- 사회 전반 데이터 활용가치 인식 향상 <br/><br/>\
# 절차 <br/>\
- 수요예측 > 상품기획 > 공정효율화 > 사후관리 <br/><br/>\
# 추진체계 (<font color = "red">주전평수참</font>)<br/>\
<img src = "./img/DataFlagshipHireachy.png" style = "max-width:100%; height:auto;"><br/>\
- 주무부처 : 과제추진전략 및 기본계획 수립 <br/>\
- 전담기관 : 과제 세부계획 수립 및 추진 <br/>\
- 평가/심의위원회 : 과제 평가 및 지원대상 과제 선정 <br/>\
- 수행기관(컨소시엄대표) : 과제 세부기획 <br/>\
- 참여기관(사업수행자) : 과제 공동기획 <br/><br/>\
# 선정과제 <br/>\
- 역학조사 지원 시스템 : 전자부품연구원 + 질병관리청 <br/>\
- 맞춤형 요양 서비스 : 국민건강보험 공단 <br/>\
- 기상관측 데이터 품질검사 : 기상청 <br/>\
- 토지이상거래 알람 서비스 고도화 : 한국감정원 <br/><br/>\
* 라이지움 87회 관리 2교시 5번\
',
  
// 단순 대치법
'# 정의 : 결측값 대체 통계적 기법 <br/>\
- Single Imputation <br/>\
- 결측값을 가진 자료 분석에 사용하기 쉽고, 통계적 추론에 사용된 통계량의 효율성 및 일치성 등의 문제를 부분적으로 보완해 주기 위하여 결측값을 그럴듯한 값으로 대체하는 통계적 기법 <br/><br/>\
# 유형 <br/>\
1. 완전 분석법 <br/>\
- 불완전 자료 무시 <br/>\
- 효율성 상실, 통계적 추론 타당성 문제 <br/><br/>\
2. 평균 대치법 <br/>\
- 평균값으로 대치 <br/>\
- 비 조건부 평균 대치법 : 결측값이 빠져있을 경우 대치 <br/>\
- 조건부 평균 대치법 : 회귀 분석 활용, 결측값 대치 <br/><br/>\
3. 단순 확률 대치법 <br/>\
- 적절한 확률값 부여후 대치 <br/>\
- 핫덱 대체 : 무응답 -> 비슷한 성향 응답자 <br/>\
- 콜드덱 대체 : 외부 출처, 이전 비슷한 연구 <br/>\
- 혼합 방법 : 회귀 대체 (예측값 얻기) + 핫덱 방법 이용 <br/><br/>\
# 단순, 다중대치법 비교 <br/>\
<img src = "./img/ImputationCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 1교시 11번\
',
  
// 정보 시각화
'# 정의 : 탐색, 관계, 해결안 도출 과정 <br/>\
- 탐색을 통해 대상들 간의 숨겨진 관계를 찾아 활용하여 해결안을 도출하는 과정 <br/><br/>\
# 인사이트 프로세스 <br/>\
1. 탐색 : 원시 데이터 가능성 오픈 <br/>\
- 사용가능 데이터 확인, 연결고리 확인, 관계 탐색 <br/><br/>\
2. 분석 : 관계형태 측정, 마이닝 <br/>\
- 분석대상 구체화, 분석,시각화 도구, 지표설정과 분석 <br/><br/>\
3. 활용 : 경영전략 인터랙션 <br/>\
- 내부 적용, 외부 설명, 설득과 시각화 도구, 인사이트 발전과 확장 <br/><br/>\
# 시각화 프로세스 <br/>\
- 정보 구조화 : 수집 및 탐색, 분류 및 배열 <br/>\
- 정보 시각화 : 시간, 분포, 공간, 관계, 비교 <br/>\
- 정보 시각 표현 : 디자인 기본 원리, 인터랙션 디자인 <br/><br/>\
# 정보 시각화 유형 (<font color = "red">시분공관비</font>)<br/>\
<img src = "./img/InformationVisualizationType.png" style = "max-width:100%; height:auto;">\
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

// Random Sampling
'# 정의 : 모집단 / 샘플 추출 / 확률 동일 / 추출 방법 <br/>\
- 모집단으로부터 샘플을 추출하는 방법으로 모집단의 각 구성요소가 샘플에 포함될 확률을 동일하게 하여 샘플을 추출하는 방법 <br/><br/>\
# 특징 <br/>\
- 목적 : 샘플링 오차 제거 <br/>\
- 절차 : 신뢰성 검토 > 정밀도 검토 > 정확성 검토 <br/>\
- 고려사항 : Error, Bias Trade Off 관계 <br/><br/>\
# 주요기법 <br/>\
- Simple Random Sampling : 임의 추출(복원, 비복원) <br/>\
- Systematic Sampling : 시간, 공간적 일정 간격(매 5번째 추출) <br/>\
- Stratified Random Sampling : 각 계층 원소 임의 추출(성별, 연령대별) <br/>\
- Cluster Sampling : 군집 선택 후 표본 추출 <br/>\
- Multi-Stage Sampling : 여러 단계로 나누어 추출(등급별>성별>연령별) <br/><br/>\
* 116회 응용 2교시 1번\
',

// Filtering 
'# 기법 <br/>\
1. 학습 기반 <br/>\
- Rule Based : 정의된 이상치 / 키워드 기반 스팸 매일 <br/>\
- Baysian Classification : 조건부, 사후 확률 분류기반 필터링 / 노트북 공장 불량 선별 <br/>\
- Decision Tree : 입력 트리 구조 <br/>\
- Neural Network : 뉴런 노드 학습 필터링 <br/><br/>\
2. 비학습 기반 <br/>\
- K-Means Clustering : K개 군집만큼 분류, 유사도 먼 그룹 필터링 <br/>\
- SOM : 격자 구조 출력층, 경쟁학습 필터링 <br/>\
- PCA : 차원 축 집단 분류 필터링 <br/><br/>\
* 116회 응용 2교시 1번\
',
  
// DB 확장성 확보 방안
'<img src = "./img/DB_AddScale.png" style = "max-width:100%; height:auto;">\
',
  
// Database Shard
'# 정의 : 대용량 데이터베이스 처리를 위한 파티셔닝 단위 <br/>\
- 대용량 데이터베이스를 가용성, 확장성, 성능향상 처리를 위해 데이터베이스를 분할하는(파티셔닝) 분할 단위 또는 개별 파티션 <br/><br/>\
# 유형 (헤다엔하)<br/>\
<img src = "./img/DatabaseShardType.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 1교시 8번\
',
  
// Database Partitioning
'# 정의 : SQL Application 수정 없이 / 작은 단위 분할 / 물리적 분할 관리 기법 <br/>\
- SQL 문이나 어플리케이션 수정없이, 큰 테이블이나 인덱스를 관리하기 쉬운 작은 단위로 분할하여 관리하기 위한 물리적인 분할 관리 기법 <br/><br/>\
# 목적 : 관리적(용이성, 가용성), 성능적(부하분산, 수행시간 단축) <br/><br/>\
# 종류 <br/>\
- 수평 : Row 기준 / 데이터 규모 감소 / Join 증가 <br/>\
- 수직 : Column 기준 / 자주사용하는 칼럼 위주 성능 향상 / 파티션 키 값 별도 관리 필요 <br/><br/>\
# 분할기준 <br/>\
1. 기본 <br/>\
- Range : 범위 분할 <br/>\
- List : Data grouping <br/>\
- Hash : Hash Function 적용 <br/>\
- Composite : List(column, row), Range(row), Hash 장점 결합 <br/>\
<img src = "./img/BasicDataPartitioning.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 고급(DML) <br/>\
- Interval : 사전 정의 기준 <br/>\
- Reference : 부모 테이블 Reference Key <br/>\
<img src = "./img/ProDataPartitioning.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 응용 3교시 5번\
',

// DB 복제 - Web Service
'# 정의 : 가용성, 유지, 부하분산 / 일관성 유지 기술 <br/>\
- 웹 서비스의 가용성 유지 및 부하분산을 위해 2대 이상의 DBMS를 나눠서 데이터를 저장, 동기화하여 일관성 유지 기술 <br/><br/>\
# 유형 <br/>\
1. 실시간 복제 <br/>\
- 트랜잭션 복제 : 트랜잭션, 로그기반, 게시자, 배포자, 구독자, 변경로그, 게시자 중심 복제 <br/>\
- P2P 복제 : 중복허용 복제, 가용성 강화, 읽기 전용, 쓰기 성능 떨어짐, 복구 어려움 <br/><br/>\
2. 시점 복제 <br/>\
- 병합 복제 : 상호 변경 권한, 최종 동기화, 복제, Merge Agent, Server Client 환경, 충돌 가능, 실시간성 저하 <br/>\
- 스냅샷 북제 : 특정 시점 모든 데이터, Agent, Folder, Distribution Agent, 변경 적을 시, 많은 리소스 <br/><br/>\
* 120회 관리 4교시 4번\
',
  
// Data File Structure
'<img src = "./img/DataFileStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 응용 3교시 6번\
',

// 통계 관련 데이터
'# 통계 관련 데이터 종류 (원마매메)<br/>\
- 원본 데이터 : 조사오류 등이 걸러지기 <font color = "red">이전</font> 단계의 개별 자료 <br/>\
- 마이크로 데이터 : 입력된 통계조사 자료의 <font color = "red">오류를 수정</font>한 자료 <br/>\
- 매크로 데이터 : 마이크로데이터를 <font color = "red">임의의 기준</font>에 따라 집계한 자료 <br/>\
- 메타데이터 : 조사표, 코드집 등 데이터의 특성을 <font color = "red">이해</font>하는데 필요한 모든 자료 <br/><br/>\
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
  
// 통계 Overview
'<img src = "./img/StaticsUnderstand.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 척도 <br/>\
1. 범주형 변수 <br/>\
- 명목척도 : 단순 범주 분류 목적, 숫자 부여<br/>\
- 서열척도 : 명목척도 기능 + 범주간 대소관계, 서열 <br/><br/>\
2. 연속형 변수 <br/>\
- 등간척도 : 영점 x, 대상 갖는 양차이, 등간 숫자 부여<br/>\
- 비율척도 : 영점 o, 비율 계산 숫자 부여 <br/><br/>\
* 124회 관리 1교시 2번 <br/>\
* 123회 관리 3교시 3번\
',
 
// 데이터 분석 전처리
'# 개념 : 데이터를 특정 <font color = "red">분석 목적</font>에 맞게 분석 가능한 상태로 만드는 것 <br/><br/>\
# 종류 : 정제(Cleansing), 누가치 대체(missing vlaue imputation), 날짜 파싱 <br/><br/>\
# 데이터 다루는 목적 따른 기법 분류 <br/>\
1. 기술 통계 (Descriptive Statistics) <br/>\
- 개념 : 수집한 데이터를 묘사하고 설명하는 통계 기법 <br/>\
- 종류 <br/>\
-> Central Trendency(집중화 경향) : 평균(mean), 중앙값(medium), 최빈값(mode) <br/>\
-> Variation(분산도) : 표준편차(standard deviation), 사분위(quartile) <br/><br/>\
2. 추론 통계 (Inferential Statistics) <br/>\
- 개념 : 수집한 데이터를 기반으로 어떠한 것을 추론하고 예측하는데 사용하는 통계기법 <br/>\
- 종류 : 선거예측 <br/><br/>\
# 형태에 따른 데이터 구분 <br/>\
1. 범주형 자료 <br/>\
- 명목형 자료 : 측정 대상의 특성 분류 변수 (성별, 혈액형) <br/>\
- 순서형 자료 : 범주 구분 + 범주 사이 순서 관계 성립 변수 (우선순위, 등수, 학점, 선호도) <br/><br/>\
2. 수치형 자료 <br/>\
- 이산형 자료 : Countable Data (멤버의 수) <br/>\
- 연속형 자료 : 연속성 속성 가지는 자료 (신장, 체중) <br/><br/>\
* KPC 95회 관리 4교시 3번\
',
  
// 기술통계
'# 정의 : 변수, 자료 체계적 조직화 / 요약 기술 / 통계 방법 <br/>\
- 하나의 변수나 집단 수량적 자료 체계적 조직화, 요약 기술해주는 통계적 방법 <br/><br/>\
# 특징 <br/>\
- 방법 : 의미있는 방식으로 데이터 수집, 정리, 분석 제시 <br/>\
- 결과 : 도표 및 테이블 이용한 상황 설명 표현 <br/><br/>\
# 사용기술 <br/>\
- 중앙화 경향(Central Tendency) : 평균(mean), 중앙값(median), 최빈값(mode) 등 <br/>\
- 분산도(Variation) : 범위, 표준편차(standard deviation), 사분위수(quantile) <br/>\
- 분포(Distribution) : 왜도, 첨도 <br/>\
- 빈도(frequency)와 백분율(percent) : 빈도, 빈도분포, 백분위 <br/><br/>\
# 기술, 추론통계 관계 <br/>\
<img src = "./img/DescribeInferenceRelation.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술, 추론통계 비교 <br/>\
<img src = "./img/DescribeInferenceCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 3교시 3번\
',
  
// 추론통계
'# 정의 : 표본 통계치 / 추정 가설검증 / 통계 방법 <br/>\
- 표본에서 나온 통계치로부터 모든 추정 가설검증하는데 사용하는 통계적 방법 <br/><br/>\
# 특징 <br/>\
- 방법 : 데이터 비교, 가설검증, 미래결과 예측 <br/>\
- 결과 : 확률 통한 이벤트의 발생 가능성 설명 <br/><br/>\
# 사용기술 (<font color = "red">점구가차관</font>)<br/>\
- 점추정(Point Estimation) : 적률법, 최대가능도추정법, 최소제곱법 <br/>\
- 구간추정(Interval Estimation) : 표준정규분포, t분포 <br/>\
- 가설검정 : 귀무가설, 대립가설 통한 추론 <br/>\
- 차이검정 : t-검정(t-test), 분산분석(ANOVA) <br/>\
- 관계검정 : 교차분석(Chi Square), 상관분석(Correlation), 회귀분석(Regression) <br/><br/>\
* 123회 관리 3교시 3번\
',
  
// 표본 추출 방법
'# 개념 : 연구대상 전체에서 선택된 일부를 선택하는 과정 <br/><br/>\
# 확률적 추출 방법 (단층계군) <br/>\
- 단순임의 추출법(Simple Random Sampling) : 모든 표본 추출방법의 기본 <br/>\
- 층화 추출법(Stratified Sampling) : 유사 단위 각 층 형성 후, 층간 단순임의 추출법 <br/>\
- 계통 추출법(Systematic Sampling) : 동등분할 <br/>\
- 군집 추출법(Cluster Sampling) : 추출된 일부 군집 통한 추출 <br/><br/>\
# 비 확률적 추출 방법 (유판할평눈 / 알작직없소) <br/>\
- 유의 추출법(Purposive Sampling) : 모집단 특성에 대해 알고 있는 경우 사용 <br/>\
- 판단 추출법(Judgement Sampling) : 경험적 추출, 표본 크기가 작은 경우 <br/>\
- 할당 추출법(Quota Sampling) : 특성 따라 층 구성, 직접 선정 조사 <br/>\
- 편의 추출법(Convenience Sampling) : 정보 전혀 없는 경우, 표본 선정 편의성 기반 <br/>\
- 눈덩이 추출법(Snowball Sampling) : 소수 응답자, 비슷한 사람 소개 <br/><br/>\
* KPC 95회 관리 4교시 3번\
',
  
// 특이정보
'# 정의 : Outlier <br/>\
- 아주 작은 or 큰 값 <br/>\
- 통계적 자료분석의 결과를 왜곡시키거나, 자료 분석의 적절성을 위협하는 변수값 또는 사례 <br/>\
- (<font color = "red">기술 통계학</font>) : <font color = "red">분포 집중경향치</font>의 값을 왜곡시키거나, <font color = "red">상관계수 추정치의 값</font>을 왜곡시키는 개체 또는 변수 값 <br/>\
- (<font color = "red">추론 통계학</font>) : <font color = "red">모수추정치의 값</font>을 왜곡시키는 개체 또는 변수의 값 <br/><br/>\
# 유형 <br/>\
- 비합리적 특이정보 : <font color = "red">입력 오류등 자료의 오염</font>으로 인해 발생한 이상치 <br/>\
- 합리적 특이정보 : <font color = "red">정확하게 측정</font>되었으나 다른 자료들과 전혀 다른 경향이나 특성을 보이는 이상치 <br/><br/>\
# 왜도(Skewness), 첨도(Kurtosis) <br/>\
<img src = "./img/SkewnessKurtosis.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Percentile을 이용한 검출 방법 <br/>\
<img src = "./img/PercentileOutlierDetail.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 관리 4교시 3번 <br/>\
* 라이지움 87회 응용 1교시 13번\
',
  
// 재현정보
'# 개념 : 원자료 동일 분포 / 통계적 생성 자료 <br/>\
- Synthetic Data <br/>\
- 원자료와 다르지만 원자료와 동일한 분포를 따르도록 통계적으로 생성한 자료 <br/><br/>\
# 특징 <br/>\
- 모형 및 가정에 지나치게 의존적 -> 노출 위험 큰 자료 통한 일부 정보에 대해서만 자료 대체 <br/>\
- 신뢰성 의문 제기 -> 동일 기법 분석 결과 제공 <br/><br/>\
# 종류 <br/>\
1. 완전 재현 자료 : 1993년 다중대체 기법 기반 Rubbin 제시 <br/>\
- 개념 : 표본틀(모집단)에서 조사되지 않은 모든 값들을 결측값으로 취급하여 다중대체하고, 대체되어 채워진 재현 모집단에서 단순 랜덤 추출로 표본을 추출한 제공 방법 <br/>\
- 특징 : 마스킹 한계 극복 (노출방지, 안전성 / 타당한 추론 가능 정보손실 / 일반적 통계 기법 적용, 이용자 편의성) <br/><br/>\
2. 부분 재현 자료 : 1993년 Little 제시 <br/>\
- 개념 : 자료의 모든 정보가 민감하다고 보기는 어려운 경우도 많으므로, 모든 변수가 아니라 노출 제어 처리가 필요한 일부 변수만 다중 대체하자는 방식 <br/>\
- 특징 : 일부만 결측값 간주, 다중 대체 기법 / 결측값 고유의 성질 유지 / 정보손실 절감 <br/>\
- 유형 : 민감변수(응답자 노출 꺼리는 변수), 키변수(응답자 특성, 조합시 식별가능) <br/><br/>\
* 86회 라이지움 관리 1교시 3번\
',
  
// 차등정보보호
'# 개념 <br/>\
- 데이터에 수학적 노이즈를 추가하는 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/DifferentialPrivacy.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 수학적 정의 <br/>\
<img src = "./img/DifferentialPrivacyMath.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 적용분야 <br/>\
- 전통적인 통계표, 집계표 생산 <br/>\
- 대화형 자료분석 시스템 <br/>\
- 인공지능, 기계학습 <br/>\
- 사회 연결망 서비스 <br/>\
- 추천 시스템 <br/>\
- 위치 및 지리 정보 제공 시스템 <br/><br/>\
* 86회 라이지움 관리 1교시 3번\
',
  
// 분석기법
'# 정의 : 데이터 LifeCycle에 따른 Activity 중요성에 의해 빅데이터, 인공지능 핵심영역으로 자리잡고 있는 데이터 활용 기반 기술 <br/><br/>\
# 종류 <br/>\
1. 회귀분석 <br/>\
- 개념 : 하나 또는 여러개 독립변수와 종속변수간의 관계를 설명한 분석 <br/>\
- 예시 : 선형, 로지스틱 <br/>\
- 평가 : 잔차분석, ACF 그래프, 히스토그램 <br/><br/>\
2. 분류분석 <br/>\
- 개념 : 데이터의 실체가 어떤 그룹에 속하는지 예측하는데 사용하는 데이터 마이닝 기법 <br/>\
- 예시 : K-NN, 의사결정 나무, 베이지안 정리, Random Forest <br/>\
- 평가 : 혼동행렬, ROC Curve <br/><br/>\
3. 군집분석 <br/>\
- 개념 : n개의 군집을 시작해 군집의 개수를 줄여나가는 방법 <br/>\
- 예시 : 거리기반, 차원축소, 계층, 비계층 <br/>\
- 평가 : 내부, 외부 평가 <br/><br/>\
4. 연관성 분석 <br/>\
- 개념 : 거대한 데이터에서 유용한 정보를 얻기 위해 사용되는 분석 <br/>\
- 예시 : 연관규칙, 빈발항목 집합 <br/>\
- 평가 : 지지도, 신뢰도, 향상도 <br/><br/>\
# 절차 <br/>\
- EDA -> 전처리 -> 분석 모델링 -> 분석모델 평가 <br/><br/>\
* KPC 96회 관리 4교시 2번\
',
  
// 회귀 분석
'# 정의 : 독립, 종속 변수간 <font color = "red">관련성</font> / <font color = "red">함수적 관계 통계적 추정</font> / 종속(1) / 변화 따른 <font color = "red">예측</font> <br/>\
- 독립변수들과 종속변수 간에 존재하는 관련성을 분석하기 위하여, 관측된 자료에서 이들 간의 함수적 관계를 통계적으로 추정하는 방법 <br/><br/>\
# 목적 <br/>\
- 예측 : 종속 변수 값 예측 <br/>\
- 설명 : 영향 관계 설명 <br/><br/>\
# 유형 <br/>\
- 독립변수 수 : 단순, 다중 <br/>\
- 예측/분류 모델 : 선형, 로지스틱(독립 변수 선형 결합) <br/><br/>\
# 절차 <br/>\
- 가정/선택 : 회귀 가정 <br/>\
- 추정 : 모델 추정 <br/>\
- 검증 : 모델 검증 <br/>\
- 예측 : 목적 변수 예측 <br/><br/>\
# 종류 <br/>\
<img src = "./img/RegressionModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/RegressionDistribute.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 2교시 4번 <br/>\
* KPC 91회 3교시 1번\
',
  
// 다변량 회귀 분석
'# 정의 : 다수 종속변수, 독립변수 / 변수 차원 줄이는 기법 <br/>\
- 다수의 종속변수와 독립변수와의 상관관계 분석시 변수 차원을 줄이는 기법 <br/><br/>\
# 종류 <br/>\
<img src = "./img/MultiRegressionAnalysis.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 변수 축소법 <br/>\
<img src = "./img/MultiRegressionAnalysisDecress.png" style = "max-width:100%; height:auto;"><br/>\
- 전진 선택법 : 절편부터 시작, 주요 변수부터 추가 / 변수가 많은 경우 유용 <br/>\
- 후진 제거법 : 영향이 적은 변수부터 제거 / 전체 변수들 정보 이용 <br/>\
- 단계 선택법 : 전진 선택 변수 추가, 후진 제거법 수행 / 전진, 후진 장점 취합 <br/><br/>\
<font color = "red">* 다중공선성 문제 : 회귀분석에서 독립변수들 간에 강한 상관 관계가 나타나는 문제 </font><br/><br/>\
* 123회 관리 2교시 4번\
',

// 선형회귀모형 추론 가정
'# 정의 : 선형회귀모형 추론 / 반드시 만족 / 기본 성질 <br/>\
- 하나 또는 그 이상의 독립변수(X)와 종속변수(Y)에 대한 상관관계를 나타내는 선형회귀모형을 추론하기 위해 반드시 만족해야 하는 선형성, 독립성, 등분산성, 정규성 등의 기본성질 <br/><br/>\
# 필요성 <br/>\
- 설명변수 전처리 : 최적 변수 선택, 로그, 루트, 이상치 제거 수행 <br/>\
- 유의한 모델 생성 : 4가지 가정 모두 만족하는 유의한 선형회귀무형 생성 <br/>\
- 예측령 향상 : 위배시 해결통한 예측력 향상 <br/><br/>\
# 가정 / 위배시 해결법 <br/>\
- 선형성 : 종속변수와 독립변수간의 선형성 만족 / 이차항 추가<br/>\
- 독립성 : 다중회귀분석 X간 상관 관계 없음 / 다중공선성 변수제거 (R의 Step 함수) <br/>\
- 등분산성 : 잔차 분산 같아, 고르게 분포 / 이차항 추가, 로그, 루트 사용 <br/>\
- 정규성 : 잔차 분포 평균0 만족 / 로그, 루트 취함, 이상치 제거 <br/><br/>\
# 비교 <br/>\
<img src = "./img/LinearRegressionModelCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 118회 1교시 7번\
',

// 상관 분석
'# 정의 : 두 변수간 / 상관계수 측정 / 선형적 관계 / 분석 기법 <br/>\
- 두 변수 간의 상관계수를 측정하여 이를 기반으로 어떤 선형적 관계를 가지는지 분석하는 기법 <br/><br/>\
# 구성요소 : 분산, 공분산, 상관계수, 두개의 변수 <br/><br/>\
# 특징 <br/>\
1. 유형 <br/>\
- 단순 상관 분석 : 단순한 강한관계 정도 측정 <br/>\
- 다중 상관 분석 : 2개 이상 변수간 관계 강도 측정 <br/><br/>\
2. 계수 <br/>\
- 피어슨 상관계수 : cov(X,Y) / Sigma(x)Sigma(y) <br/>\
<font color = "red"> * Cov : 공분산(선형 관계 나타내는 값 - 양음) </font><br/>\
* Sigma : 표준 편차 <br/><br/>\
# 회귀분석, 상관분석 비교 <br/>\
<img src = "./img/RegressionCorelationCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 1교시 12번\
',
  
// 주성분 분석
'# 개념 : 고차원 -> 저차원 / 환원 <br/>\
- 고차원의 데이터를 저차원의 데이터로 환원시키는 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PCA_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 고유 벡터 : 데이터의 분포를 나타내는 선 <br/>\
- 고유 값 : 고유벡터에 대한 데이터의 분산 <br/><br/>\
# 절차 (<font color = "red">공고항편차</font>)<br/>\
<img src = "./img/DeminsionDecreseProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 2교시 4번\
',
  
// 다차원 척도법
'# 개념 : 개체간 근접성 / 시각화 <br/>\
- 낮은 차원 위치, 쉽게 학습 위한 기법 <br/>\
- Multi Dimensional Scaling <br/>\
- 개체간 근접성을 시각화하는 통계 기법 <br/><br/>\
# 목적 <br/>\
- 패턴, 구조 파악 <br/>\
- 구조를 기하학적 표현 <br/><br/>\
# 방법 <br/>\
- 거리계산 : 유클리드 거리 행렬 활용 <br/>\
- Stress Value : 곽측대상들의 상대적 거리 정확도 높이기 위한 적합정도 표현 <br/>\
- 반복 : 반복 알고리즘 값 일정 수준 이하 까지 반복 <br/><br/>\
# 종류 <br/>\
- 계량적 MDS : 데이터 구간 척도, 비율 척도인 경우 사용 <br/>\
- 비계량적 MDS : 데이터가 순서척도인 경우 활용<br/>\
<font color = "red">\
* 구간척도(interval Scale) : 숫자 간의 간격이 산술적 의미 (덧셈 허용, 곱셈 비허용) <br/>\
* 서열척도(Ordinal Scale) : 개체간의 서열 관계 의미 (1등, 2등, 3등) <br/><br/>\
</font>\
# 절차 <br/>\
<img src = "./img/MultidimensionalScalingProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 활용 사례 <br/>\
- 심리학 : 청각 반응, 시각 반응 <br/>\
- 사회학 : 인식 정도, 그룹과 조직간 구조 이해 <br/>\
- 인류학 : 문화 비교 <br/>\
- 마케팅 : 고객 반응 규명 <br/><br/>\
* 123회 관리 2교시 4번\
',
  
// 군집분석
'# 정의 : 사전 정보 없는 경우 값 기반 유사성 이용 분석법 <br/>\
- 모집단 또는 범주에 대한 사전 정보가 없는 경우 주어진 관측 값들 사이의 거리 또는 유사성을 이용하는 분석법 <br/>\
- 전체 데이터를 집단으로 그룹화하여 각 집단의 성격 파악, 데이터 전체의 구조 이해 지원 분석법 <br/><br/>\
# 특징 <br/>\
- 탐색적인 기법 : 주어진 자료에 대한 사전 정보 없이 의미있는 자료 구조를 찾아낼 수 있음 <br/>\
- 이식성 : 거리만 잘 정의되면 모든 종류의 자료에 적용할 수 있음 <br/>\
- 초기 군집수 K 결정 : 초기 군집수 K의 결정이 어려움 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/ClusteringMechanism.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 (<font color = "red">거절수평</font>)<br/>\
- 거리측도 선택 : 유사성 판단 / 유클리디안 거리 <br/>\
- 절차 선택 : 계층, 비계층 / 단일, K-Means <br/>\
- 군집의 수 결정 : 계층, 비계층 / 결합 거리, 분산합계 <br/>\
- 평가 : 신뢰성, 타당성 <br/><br/>\
# 유형 <br/>\
<img src = "./img/ClusterAnalyzeCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 분석 기술 <br/>\
1. 거리 중심 <br/>\
- 계층적 군집 : 중복 허용x  <br/>\
- K-means : 개채간 유사성 <br/>\
- SOM(Self Oragnizing Map) : 저차원 뉴런, 지도 형상화 <br/><br/>\
2. 차원축소 <br/>\
- 주성분분석(PCA) : 새로운 변수 창출 <br/>\
- MDS(MultiDimensional Scaling) : 다차원 척도법 <br/><br/>\
# 판별분석, 군집분석 비교 <br/>\
<img src = "./img/판별군집비교.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 관리 1교시 5번\
',
 
// 계층적 군집분석
'# 정의 : 작은 군집으로 출발해 군집을 병행하는 방법 <br/><br/>\
# 종류 <br/>\
- 최단 연결법 : 가장 <font color = "red">가까이</font> 있는 두 관측치 사이의 거리 기반 군집 형성 <br/>\
- 최장 연결법 : 가장 <font color = "red">멀리</font> 떨어진 두 관측치 사이의 거리 기반 군집 형성 <br/>\
- 중심 연결법 : 두 군집의 <font color = "red">중심간의 거리</font>를 측정하여 군집 형성 <br/>\
- 와드 연결법 : 군집내의 <font color = "red">오차제곱합</font>에 기초하여 군집 형성 <br/><br/>\
# 거리 정의 <br/>\
<img src = "./img/HireachyClusterAnalyzeDistance.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 3교시 4번\
',
 
// 비 계층적 군집분석
'# 정의 : 랜덤 군잡화 / 중앙값 변화 / 클러스터 이동 / 군집 형성 방법 <br/>\
- 랜덤으로 데이터를 군집화하고 군집 과정에서 중앙값의 변화에 따라 각 데이터들을 적절한 클러스터로 이동시켜 군집을 형성하여 분석하는 기법 <br/><br/>\
# 종류 <br/>\
<img src = "./img/NonHireachyClusterAnalyzeType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 분석 알고리즘 <br/>\
<img src = "./img/NonHireachyClusterAnalyzeAlgorithm.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 3교시 4번\
',

// 판별 분석
'# 정의 : 종속(2이상) / 집단 구성원 판별, 예측 / 영향력 큰 변인 파악<br/>\
- 종속 변수가 2개 혹은 그 이상의 집단으로 구성되어 있을 때 여러개의 독립 변수로 집단 구성원을 판별 혹은 예측하기 위한 통계적 방법 <br/><br/>\
# 유형 <br/>\
- 종속 변수 집단 수로 구분 : 판별분석(DA)(2), 다중 판별분석(MDA)(3이상) <br/>\
- 공분산 행렬의 동일 여부로 구분 : 선형 판별분석(LDA)(동일), 이차 판별분석(QDA)(다름) <br/>\
* 공분산 행렬 : 2 이상의 변량들에서, 다수의 두 변량 값들 간의 공분산 또는 상관계수들을 행렬로 표현한 것 <br/>\
* 공분산 : 확률변수의 상관정도 (양, 음) <br/>\
* 상관계수 : 두 변수 x,y 사이의 상관관계 정도를 나타내는 수치 (-1~1) <br/><br/>\
# 절차 <br/>\
- 판별 변수 선택 : 기여도 평가 <br/>\
- 판별 함수 도출 : 판별 점수 도출, 예측집단 반환 <br/>\
- 분류 정확도 파악 : 분류 결과 평가 (Wilk\'s람다 값(집단내 제곱/전체 제곱), 고유 값(집단간 제곱/집단내 제곱) <br/>\
- 소속 집단 예측 : 판별함수 적용, 예측 수행 <br/><br/>\
* KPC 91회 3교시 1번\
',

// 연관규칙
'# 정의 : 연관성 정량적 표현 작업 <br/>\
- 특정 아이템 집합에서 의미있는 연관성이 존재하며, 해당 연관성을 일반화하고 정량적으로 표현하는 작업 <br/><br/>\
# 장단점 <br/>\
- 장점 : 탐색적기법(이해하기 쉬움), 강력한 비목적성 분석기법, 편리한 분석 데이터 형태(데이터 변환x), 계산의 용이성(간단한 계산) <br/>\
- 단점 : 계산과정(품목수에 따라 복잡), 적절한 품목 결정(세분화, 의미없는 결과 도출 가능), 품목 비율차이(적은 거래량, 제외 쉬움) <br/><br/>\
# 평가척도 <br/>\
1. 지지도(Support) : <font color="red">전체 거래 품목 A,B가 동시에 포함될 확률</font>, 두 품목의 동시구매가 얼마나 자주 일어나는지를 분석 <br/>\
- Support = P(A∩B) = (AB동시/전체거래) = (A거래수 * B거래수) / 전체거래수<br/><br/>\
2. 신뢰도(Confidence) : A->B 연관규칙에서, <font color="red">품목 A포함 거래중 A,B 동시 포함 거래 확률</font> -> 두 품목간 연관성의 강도를 분석 <br/>\
- Confidence = P(B|A) = 지지도/P(A) = P(A∩B)/P(A)<br/><br/>\
3. 향상도(Lift) : A->B 연관규칙에서, <font color="red">임의의 B가 구매되는 경우 대비, A와 관계되어 구매되는 비율</font> => A와 B의 상관관계 분석 <br/>\
- 향상도 = 1 (독립적 관계) : A,B 구매시 상호 연관 없음 <br/>\
- 향상도 > 1 (양의 상관 관계) : A 구매시 B 구매 예상 <br/>\
- 향상도 < 1 (음의 상관 관계) : A 구매시 B 구매 감소 <br/>\
- Lift =  P(B|A)/P(B) = 신뢰도/P(B) = (P(A∩B)/P(A))/P(B)<br/><br/>\
* <font color="red">지지도 신뢰도 향상도 : 빈도 / 연관성 / 상관관계 </font><br/><br/>\
# 관련 알고리즘 <br/>\
- Apriori Algorithm : 항목집합 줄이기 <br/>\
- DHP Algorithm : Transaction 줄이기 <br/>\
- FP-growth Algorithm : 비교횟수 줄이기 <br/><br/>\
<img src = "./img/연관규칙.png" style = "max-width:100%; height:auto;">\
',
  
// Apriori Algorithm
'# 정의 : 선험적 알고리즘 (사전지식 활용)<br/>\
- 데이터베이스에서 후보 항목집합을 생성, 발생빈도 계산, 사용자 정의 최소 지지도 기준으로 빈발 항목집합 결정 알고리즘 <br/><br/>\
# 구성요소 <br/>\
1. 선험적 규칙 <br/>\
- 규칙 1 : 한 항목집합이 빈발하다면, 이 항목집합의 모든 부분집합은 빈발항목 집합 <br/>\
-> {a,b,c,d} 빈발 항목집합 {b,c,d} / {b,c}, {b,d}, {c,d}, {b}, {c}, {d} <br/>\
- 규칙 2 : 한 항목집합이 비빈발하다면, 이 항목집합을 포함하는 모등 집합은 비 빈발항목 집합 <br/>\
-> {a,b,c,d} 비빈발 항목집합 {a,b} / {a,b,c}, {a,b,d}, {a,b,c,d} <br/><br/>\
2. 연산 <br/>\
- Join : 빈발항목 집합 찾기 위해 후보집합 생성 연산 <br/>\
- Prune : 비 빈발항목에 따라서 후보집합에서 후보를 제외 하는 연산 <br/><br/>\
# 절차 <br/>\
- 빈발 항목 집합 탐색 <br/>\
- 최소 지지도 확인 <br/>\
- 후보 집합 생성 <br/>\
- 반복 <br/>\
- 연관규칙 생성 <br/><br/>\
# 예시 <br/>\
<img src = "./img/AprioriAlgorithmExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 90회 응용 2교시 4번 <br/>\
* 119회 2교시 1번\
',

// 타당도
'# 정의 : 내용 정확도 (중앙 분포)<br/>\
- 해당 데이터가 가리키는 대상이 조사자가 알고자 하던 것과 일치하는 정도 <br/><br/>\
# 암기 <br/>\
- 타내 / 신일 <br/><br/>\
# 저해요인 <br/>\
- 성숙 효과 : 시간의 흐름별 변화 <br/>\
- 특정 사건 영향 : 연구 의미와 영향 <br/>\
- 표본의 대표성 : 모집단 표본 한계 <br/><br/>\
# 종류 <br/>\
- 내용 타당도 : 전문가 판단 의한 검증 <br/>\
- 구인 타당도 : 비정형 요인 정형화 (인간의 심리, 특성) <br/>\
- 예측 타당도 : 검사에서 얻은 점수와 미래 관계 추정 타당도 <br/>\
- 공인 타당도 : 입증 받은 검사로부터의 관계 검증 <br/><br/>\
* 123회 관리 1교시 2번\
',
  
// 신뢰도
'# 정의 : 조사 일관성 (결합 정도)<br/>\
- 검사도구가 오차 없이 정확하게 측정한 정도 <br/><br/>\
# 암기 <br/>\
# 속성 <br/>\
- 안정성 : 한 가지 도구 측정 <br/>\
- 동등성 : 측정 도구간 동등성 <br/>\
- 동질성 : 문항 동일 속성 <br/><br/>\
# 종류 <br/>\
- 재검사 : 동일 설문 2회 실시 / + 단순성 - 신뢰도 과도 추정<br/>\
- 동형검사 : A,B형 설문 실시 / + 정확도 - 제작 어려움 <br/>\
- 반분(Split-half) : 양분 채점 방식 (스피어맨-브라운 공식) / + 정확도 - 제작 어려움 <br/>\
- 문항 내적 합치도 : 하나의 문항 하나의 설문지로 가정 (10문항 = 10번 조사처럼) (Cronbach의 Alpha) / + 가장 높은 신뢰도 - 문항간 연관성 높아야 <br/><br/>\
* 123회 관리 1교시 2번\
',
  
// CLT
'# 정의 : Central Limit Theorm (중심극한정리) <br/>\
- 임의의 모집단에서 크기 n의 표본 k개를 복원추출을 할 때 n과 k가 충분히 크다면 각 표본의 평균 분포는 정규 분포로 수렴한다는 정리이론 <br/><br/>\
# 수식 <br/>\
<img src = "./img/CLT_Math.png" style = "max-width:100%; height:auto;"><br/>\
# 활용 <br/>\
- 적은 샘플수로 모집단의 평균을 정확하게 계산하는 경우 <br/>\
- 적은 샘플수로 모집단의 분산을 정확하게 계산하는 경우 <br/>\
- 모집단에 대한 정규 분포를 생성하는경우 <br/>\
- 정규 분포를 활용한 통계적 가설검정 및 기법에 적용하는 경우 <br/><br/>\
* KPC 97회 관리 1교시 7번\
',
  
// 추정이론
'# 정의 : 모집단 성질 유추 방법<br/>\
- 표본에 들어있는 정보에 의거해서 모집단의 성질을 유추하는 통계적 추론 방법 <br/><br/>\
# 종류 <br/>\
- 점 추정 : 미지의 모수를 하나의 수치로 지정하는 방법 (제품의 불량율은 1%다)<br/>\
- 구간 추정 : 모수가 포함될 것으로 예상되는 구간을 지정하는 방법 (제품의 불량율 추정시 불량율은 10.5%)<br/>\
',

// 가설검정
'# 정의 : 가설 채택 여부 결정 통계적 분석 방법<br/>\
- 모집단의 특성에 대한 어떤 가설을 설정한 뒤 표본관찰을 통하여 그 가설에 대한 채택여부를 결정하는 통계적 분석방법 <br/><br/>\
# 가설 <br/>\
- 귀무가설(H0) : 일반적으로 맞다고 가정하는 가설 (평균키 175) <br/>\
- 대립가설(H1) : 귀무가설과 대립되는 가설 (평균키 175 아니다) <br/>\
* p-value : 관찰 데이터가 귀무가설과 양립하는 정도를 0~1 사이 수치로 표현한 것 <br/><br/>\
# 오류 종류 <br/>\
<img src = "./img/NullHypothesisTable.png" style = "max-width:100%; hegiht:auto;"><br/>\
- 1종 오류 (생산자/알파) : 귀무가설 참, 채택 않는 오류 (실제 음, 양 판정)<br/>\
- 2종 오류 (소비자/배타) : 귀무가설 거짓, 채택 오류 (실제 양, 음 판정)<br/><br/>\
# 검정 방법 : 단측, 양측 검정 <br/><br/>\
# 수준 <br/>\
- 신뢰 수준 : 가설검정 결정 수준 (연구 99%, 일반 95%, 설문 90%) <br/>\
- 유의 수준 : 오류 인정 결정 수준 <br/>\
- 기각역 : 귀무가설 기각 영역 (유의수준/2 or 유의수준) <br/>\
- 신뢰 구간 : 신뢰수준에 포함되는 x값 구간 <br/>\
- 임계치 : 신뢰구간, 기각역 경계 <br/>\
- 검정통계량 : 가설 검정 위한 기준 값 (t Value) <br/>\
<img src = "./img/StatisticalHypothesisTestTerms.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 절차 <br/>\
- 가설 설정 : H0, H1 <br/>\
- 유의수준 설정 : a 영역 <br/>\
- 검정통계량 산출 : t Value <br/>\
- 기각/채택 판단 : |t| < 임계치 (채택) <br/><br/>\
# 관계 <br/>\
<img src = "./img/NullHypothesisGraph.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 사례 <br/>\
<img src = "./img/NullHypothesisGraphExample.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 라이지움 90회 응용 1교시 11번 <br/>\
* 117회 관리 1교시 4번 <br/>\
* KPC 94회 1교시 12번\
',

// 베이즈 정리 
'# 정의 : 조건부, 주변부 확률분포 연관 이론 <br/>\
- 확률변수의 조건부(conditional) 확률분포와 주변부(marginal) 확률분포를 연관 짓는 확률이론<br/>\
- 어떤 사건의 관측 전의 원인의 가능성과 관측 후의 원인의 가능성 사이의 관계를 설명하는 확률이론 <br/>\
- n개의 서로 배반인 사건 A1, A2, ... An 중 하나는 반드시 일어난다고 할 때, 임의의 사건 B에 의해 사건 A가 일어날 조건부 확률 <br/><br/>\
# 구성요소 <br/>\
- 사전확률(P(A)), 우도확률(P(B|A)), 사후확률(P(A|B), 예측사전확률(P(B)) <br/>\
<img src = "./img/BayesTheoremBase.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 이론 <br/>\
<img src = "./img/BayesTheoremDetail.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_6.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 예제 <br/>\
<img src = "./img/베이즈_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_4.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_5.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* KPC 97회 관리 1교시 6번\
',

  
// Data Mining
'# 정의 : 정보 도출 방법 / 데이터 집합 / 사용자 요구 /<br/>\
- 데이터 집합에서 사용자 요구 따라 유용 가능성 있는 정보 도출 방법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/DataMining_OLAP.png" style = "max-width:100%; height:auto;"><br/>\
* ETT : Extension, Transformation, Transportation <br/><br/>\
# 유형 <br/>\
<img src = "./img/DataMiningType.png" style = "max-width:100%; height:auto;"><br/><br/>\
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

// Text Mining 
'# 비정형 데이터 / 단어 행렬 / 분석, 마이닝 / 의사결정 지원 분석기법 <br/>\
- 다양한 문서 형태의 비정형 데이터를 가져와 문서의 단어별 행렬을 만들어 추가적인 분석이나 데이터 마이닝 기법을 적용하여 의사결정을 지원해주는 분석기법 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/TextMiningArchitecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기능 <br/>\
- 문서 요약 : 내용 추출, 요약 <br/>\
- 문서 분류 : 키워드, 구조화 및 분류 지도 학습 <br/>\
- 문서 군집 : 분석 후 분류, 자율 학습 <br/>\
- 특성 추출 : 특성 자동 추출, 메타데이터 추출 <br/><br/>\
# 절차 <br/>\
- 수집 : HTML Parsing, API <br/>\
- 전처리 : Corpus(구조화), tm_map(문장 부호 제거), Stop word(무의미 단어 제거)<br/>\
- 자연어 처리 : Stemming(공통 어간 단어 통합), KoNLP(한글 텍스트 단어 추출) <br/>\
- TDM 구축 : TermDocumentMatrix(행열 매트릭스), Dictonary(매트릭스 사전)  <br/>\
- 분석 및 시각화 : Assortiation(단어간 연관성), Word Cloud(시각화), 감성 분석(오피니언 마이닝) <br/><br/>\
# 활용 사례 : 개인 신용 측정, 자동 번영, 챗봇, 채용, 마켓 인텔리전스 <br/><br/>\
* 라이지움 90회 관리 2교시 6번\
',

// 로봇 저널리즘
'# 정의 : Robot + Journalism <br/>\
- 로봇이 자체적으로 정보를 수집 및 분류한 후 의미를 해석해서 스스로 기사를 작성하는 저널리즘 기술 <br/><br/>\
# 프레임워크 <br/>\
<img src = "./img/RobotJournalismFramework.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 프로세스 <br/>\
- 수집 : API, Web Crawling <br/>\
- 추출 : Text Mining, Semantic Analyzing, ML <br/>\
- 선별 : 이벤트 가중치, 스코어링 <br/>\
- 결정 : NLU, 평판분석 <br/>\
- 배포 : 워드 임베딩, 데이터 매칭 스코어 계산 <br/>\
* Semantic Analyzing : 문장이나 단락에 기술된 주제 파악, 대상 검색 <br/>\
* Word Embedding : 단어를 벡터로 표현하는 방법, 단어 밀집 표현으로 변환 <br/><br/>\
# 순기능, 역기능 <br/>\
- 순기능 : 언론 혁신, 개인화 서비스, 가치 창출 <br/>\
- 역기능 : 일자리 감소, 적대적 공격, 알고리즘 담합 <br/><br/>\
* KPC 96회 1교시 4번\
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

// 토픽 모델링
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
  
// Opinion Mining
'# 정의 : Web 컨텐츠 Text / 의견, 성향 분석 / 마이닝 기법 <br/>\
- Web 컨텐츠의 Text에 나타난 사람들의 의견, 성향등의 주관적인 평판, 경향, 감성 분석하는 자연어 처리 기술 <br/><br/>\
# 특징 <br/>\
1. 문장추출 : 팩트와 의견 문장 구분 <br/>\
2. 극성분류 : 의견이 들어간 문장을 긍정과 부정으로 구분 <br/>\
3. 요약 : 긍정과 부정 표현 수 및 유용한 문장 추출후 분석 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/OpinionMiningStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
1. 수집/추출 <br/>\
- Web Crawling : robots, txt, 웹 자동 수집 <br/>\
- Scraping : 마이데이터 활용 <br/>\
- SNS : 추출 대상 텍스트 저장소 <br/>\
- 주관성 탐지 : 감정과 관련 없는 부분 제외 <br/><br/>\
2. Mining <br/>\
- NLP : 형태소, 구문 분석 <br/>\
- Text Mining : 의미 강도 분석 <br/>\
- 알고리즘 : Word2Vec, ML분류기(SVM) <br/>\
- 극성분류 : 긍정, 부정 분류 <br/><br/>\
3. 시각화 <br/>\
- 전처리 : 토큰화, Segmentation <br/>\
- Info Graphic : 이미지 시각화 <br/>\
- 빈도수 분석 : TF-IDF <br/><br/>\
# 사례 제시 <br/>\
<img src = "./img/OpinionMiningExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Opinion Mining, Text Mining 관계 <br/>\
<img src = "./img/OpinionMiningTextMining.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
<img src = "./img/SystemDynamics_2.png" style = "max-width:100%; height:auto;">\
',

// CRISP-DM
'# 정의 : 6단계 구성 데이터 마이닝 방법론 <br/>\
- 유럽에서 시작되어 비즈니스의 이해를 바탕으로 데이터 분석 목적의 6단계로 진행되는 데이터 마이닝 방법론 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/CRISP_DM_Struct.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성 <br/>\
- Phases : 기획, 수집, 분석 <br/>\
- Generic Tasks : 단일 프로세스 완벽 수행 단위(데이터 정제) <br/>\
- Specialized Tasks : Generic Tasks 구체적으로 나눈 단계 <br/>\
- Process Instances : 데이터 마이닝 위한 구체적 실행 <br/><br/>\
# 프로세스 <br/>\
<img src = "./img/CRISP_DM_Process.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/CRISP_DM_Detail.png" style = "max-width:100%; height:auto;">\
',
  
// 데이터 사이언스
'# 정의 : 과학적 / 통계적 / 비즈니스 인사이트 <br/>\
- 다양한 데이터에서 과학적, 통계적 기법을 융합하여 비즈니스 인사이트를 도출하는 기술 <br/><br/>\
# 영역 <br/>\
1. IT 엔지니어링 영역 <br/>\
- 프로그래밍 스킬 : 파이썬, R, 데이터 전처리 <br/>\
- 데이터 엔지니어링 : 데이터 아키텍처 설계 및 모델링 <br/>\
- 고성능 컴퓨팅 : 클라우드 기반 HPC 컴퓨팅, 고속 스칼라 연산 <br/><br/>\
2. 데이터 분석 영역 <br/>\
- 분석과제 기획 : 빅데이터 분석 과제 발굴 및 방법론 정의 <br/>\
- 분석 마스터 플랜 : 전략적 중요도에 따라 우선순위 결정 <br/>\
- 통계학 : 데이터 분석 표본 추출 및 측정, 통계적 가설검정 <br/><br/>\
3. 비즈니스 컨설팅 영역 <br/>\
- 비즈니스 전략수립 지원 : 중장기 로드맵 정의 <br/>\
- 데이터 중심 경영 확산 : 활용역량 내재화, 데이터 거버넌스, 조직문화 <br/><br/>\
# 요구역량 <br/>\
1. Soft Skill <br/>\
- 통찰력 분석 : 창의적 사고, 호기심, 논리적 비판 <br/>\
- 설득력 전달 : 스토리 텔링, 가시화 <br/>\
- 다분야 협력 : 커뮤니케이션, 인터도메인 네트워킹 <br/><br/>\
2. Hard Skill <br/>\
- 빅데이터 이론적 지식 : 특성 이해, 데이터 표준화, 모델링, 품질관리 <br/>\
- 분석기술 훈련 : 데이터 분석체계 구축, 데이터 프로세싱(웹 크롤링, 전처리), 머신러닝, 데이터 마이닝 <br/><br/>\
* 라이지움 88회 관리 3교시 2번\
',
  
// 반정형 데이터
'# 정의 : 내부 메타데이터 내재 데이터 <br/>\
- 정형 데이터와 달리 데이터 내부에 정형 데이터의 스키마에 해당되는 메타데이터를 갖고 있음, 일반적으로 파일 형태로 저장되는 데이터 <br/><br/>\
# 유형 <br/>\
- HTML : ULR 형태, 태그와 값으로 구성 <br/>\
- XML : HTML 보다 엄격한 규칙성 <br/>\
- JSON : 웹의 오픈 API 데이터 교환 <br/>\
- 로그 : 파일내 값, 레코드 대한 간략한 정보 <br/><br/>\
# 비교 <br/>\
<img src = "./img/HalfNormalizationData.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 89회 관리 1교시 12번\
',
  
// RAID
'# 정의 : 데이터의 가용성 및 성능 향상을 위한 디스크 중복구조 <br/>\
- Redundant Array of Independent Disks <br/>\
- 다수의 디스크에 데이터를 중복으로 결합하여 가용성과 성능을 향상시키는 저장장치 기술 <br/><br/>\
# 암기 (스미비바단분이)<br/>\
<img src = "./img/BasicRAID.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NestedRAID.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 상세 <br/>\
<img src = "./img/RAID_Detail1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/RAID_Detail2.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/RAID_Detail3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 89회 관리 3교시 5번 <br/>\
',

// DMBOK
'# 정의 : 데이터 관리 국제 표준 <br/>\
- Data Management Body Of Knowledge <br/>\
- DAMA International에서 운영 중인 데이터관리를 위한 국제 표준 지침 <br/><br/>\
# 목적 <br/>\
- 공통 관점 제시 <br/>\
- 표준 용어 정의 및 문서화 원칙 가이드 <br/>\
- 벤더 중립적 데이터 관리 방법 및 원칙 설명 <br/>\
- 데이터관리 범위 명확화 <br/><br/>\
# 구성 <br/>\
1. 데이터 관리 (<font color = "red">프거아</font>) <br/>\
- 프랙티스 <br/>\
- 거버넌스 <br/>\
- 아키텍처 관리 <br/><br/>\
2. 데이터 개발 (<font color = "red">모설통 보 DB</font>) <br/>\
- 모델링, 설계, 통합 <br/>\
- 보안 <br/>\
- DW / BI(Business Inteligence) <br/>\
- 참조 / 기준정보 <br/><br/>\
3. 데이터 관리와 통제(<font color = "red">저문메품</font>)<br/>\
- 데이터 저장, 운영 <br/>\
- 문서, 컨텐츠 관리 <br/>\
- 메타 데이터 관리 <br/>\
- 데이터 품질 <br/><br/>\
* ITPE 7회 관리 3교시 6번\
',

// Spatial DB
'# 정의 : 문자, 숫자 표현 / 비공간 데이터 / 공간 객체 좌표값 / 공간 데이터 집합 <br/>\
- 문자와 숫자 등으로 표현되는 비공간 데이터와 공간 객체의 좌표값으로 표현되는 공간데이터의 집합 <br/><br/>\
# 공간 관계 연산자 연관도 <br/>\
<img src = "./img/SpatialOperator.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 공간 관계 연산자 <br/>\
- Equals(g1,g2) : 동일 여부 <br/>\
- Disjoint(g1,g2) : 겹치는 부분 여부 <br/>\
- Within(g1,g2) : g1,g2 영역 포함 여부 <br/>\
- Overlaps(g1,g2) : 교집합 영역 존재 여부 <br/>\
- Intersects(g1,g2) : 교집합 존재 여부 <br/>\
- Distance(g1,g2) : 거리반환 <br/>\
- Intersection(g1,g2) : 교집합 공간 객체 반환 <br/>\
- Union(g1,g2) : 합집합 공간 객체 반환 <br/>\
- Difference(g1,g2) : 차집합 공간 객체 반환 <br/>\
- Buffer Union(g1,g2) : g1에서 d 거리만큼 확장한 공간 객체 반환 <br/><br/>\
* 124회 관리 4교시 3번\
',
);
