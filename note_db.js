var question = question.concat(
'데이터 무결성',
'ACID',
'Isolation Level',
'읽기 이상현상',
'상태전이도',
'데이터 독립성',
'[데이터 독립성]- ANSI SPARC 3계층',
'병행제어 = 동시성제어',
'[동시성제어]- 트랜잭션 직렬화',
'[동시성제어]- Timestamp',
'[동시성제어]- Locking',
'[동시성제어]- Phantom Conflict',
'회복기법',
'[회복기법]- Log 기반',
'[회복기법]- 그림자 페이지',
'[회복기법]- 체크포인트',
'[회복기법]- 미디어',
'[회복기법]- Aries',
'[회복기법]- WAL정책',
'[일관성]- SAGA',
'정규화',
'[정규화]-암스트롱 공리, 함수폐포, 자기참조관계',
'관계대수',
'관계해석',
'이벤트 소싱(Event Sourcing)',
'다차원 모델링',
'[다차원 모델링]- 스타스키마',
'[SNA]- 중심성(Centrality)',
'추천시스템(recommendation systems)',
'CKAN(Comprehensive Knowledge Archive Network)',
'DQM',
'DQM3',
'ISO/IEC 20943-5',
'DQC',
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
'[빅데이터]- Edge Analytics',
'[빅데이터]- R-HIVE',
'[빅데이터]- NoSQL',
'[빅데이터][NoSQL]- 데이터 모델링 패턴',
'[빅데이터][NoSQL]- CAP 이론',
'[빅데이터][NoSQL]- NoSQL RDBMS 비교',
'[빅데이터][NoSQL]- BASE',
'[빅데이터]- 그래프 데이터베이스(Graph Database)',
'[빅데이터]- 빅데이터 개인정보보호 가이드라인',
'[빅데이터]- HDFS',
'[빅데이터]- 하둡 에코시스템',
'[빅데이터]- ISO 20547',
'[빅데이터]- BigData 분석 방법론',
'[빅데이터]- DCAT',
'[빅데이터][통계]- 특이정보',
'[빅데이터]- 데이터 플래그십',
'[빅데이터]- 단순 대치법',
'[R-Tree]- Hilbert R-Tree',
'DB 확장성 확보 방안',
'[DB확장]- Database Shard',
'[DB확장]- Database Partitioning',
'Data File Structure',
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
'# 정의 : 트랜잭션 ACID 속성 보장위한 기법 <br/>\
- 트랜잭션 실행 중 결과에 대한 다른 트랜잭션의 접근가능 영부를 정의한 수준 <br/>\
# 특징 : ANSI/ISO Standard, ACID속성보장, Locking 기법 <br/><br/>\
# level <br/>\
1) Read Uncommitted : 처리중 데이터 허용 / Oracle 미지원<br/>\
2) Read Committed : commit 후 허용 / DBMS 기본<br/>\
3) Repeatable Read : 타 Tx Update 금지, Insert 허용 / Phantom Read 발생<br/>\
4) Serializable : 동시 수행 금지 / 완벽 일관성 모드<br/>\
<img src = "./img/IsolationLevel.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 1교시 13번\
',
  
// 읽기 이상현상
'<img src = "./img/ReadPhenomena.png" style = "max-width:100%; height:auto;">\
',
  
// DB 상태전이도
'<img src = "./img/DB_State_move.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Activity : 정상적 실행 상태 <br/>\
- Partially Committed : 트랜잭션에 정의된 모든 연산 실행 완료 <br/>\
- Failed : 더 이상 진행될 수 없는 상태 <br/>\
- Aborted : Fail이후 실행되기 이전으로 복귀 <br/>\
- Committed : 성공적 완료, 데이터 저장 <br/><br/>\
* 116회 응용 2교시 5번\
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
- 갱신손실(Lost Update) : W-트랜잭션 덮어 씌움 <br/>\
- 읽기오류(Dirty Read) : R-트랜잭션 수행전 읽음 <br/>\
- 모순성(Inconsistency) : 트랜잭션 중첩 갱신 모순성 발생 <br/>\
- 연쇄복기(Cascading Rollback) : 다른 트랜잭션 부분 Rollback 불가 <br/>\
- 회복 불능 <br/><br/>\
# 기법 (락타낙다)<br/>\
- 락킹(Locking) : 상호배제 기능 제공, 2PL, 공유락, 전용락, Lock Escalation-연쇄복귀 <br/>\
- 타임스탬프(Timestamp) : 시스템 시계, 논리적 계수기 <br/>\
- 낙관적 기법(Validation Verification) : 트랜잭션 제어 x, 갱신시 사본 저장<br/>\
- 다중버전 동시성제어(MVCC) : 여러버전 타임스탬프 비교, 직렬성 보장 버전 선택<br/><br/>\
<img src = "./img/병행제어_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/병행제어_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 응용 2교시 5번\
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
# 단위 <br/>\
<img src = "./img/LockingScale.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
* KPC 95회 관리 2교시 5번\
',
  
// Phantom Conflict
'# 정의 : 가상 튜플에 의한 충돌 <br/>\
- 두 개 이상의 트랜잭션이 실제 데이터베이스에 저장되어 있는 튜플이 아니라, 데이터베이스에 삽입되려고 하는 가상의 튜플, 즉 팬텀 튜플에 의해 트랜잭션이 충돌되어 일관성/무결성이 보장되지 않는 현상 <br/><br/>\
# 영향 <br/>\
- 읽기 : 다른 Tx 삽입 / 없었던 행 출현 <br/>\
- 쓰기 : 다른 Tx 삭제 / 행 사라짐 <br/><br/>\
# 해결방법 <br/>\
- Locking 단위 확대 : 튜플 -> 릴레이션 <br/>\
- Index Locking : 릴레이션 갱신 <br/>\
- 고립성 수준 높임 : 3단계, Serializable 설정 <br/><br/>\
* KPC 94회 1교시 11번\
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
- 메모리상 Current Page Table과 동일한 Shadow Page Table 생성 <br/>\
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
  
// Aries
'# 정의 : Algorithms for Recovery and Isolation Exploiting Semantics <br/>\
- STEAL-Non Force 버퍼관리 정책과 WAL 방식을 이용하여 Page에 대한 적은 Locking과 트랜잭션의 Partial Rollbacks를 지원하는 DB 회복기법 <br/><br/>\
# 특징 <br/>\
- STEAL : 수정된 page를 언제든지 디스크에 Write <br/>\
- Non FORCE : Dirty Page를 Commit 시점에 미반영 <br/>\
- WAL : DB 반영전 Log에 기록 <br/><br/>\
# 복구 단계 설명 <br/>\
<img src = "./img/AriesFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 4교시 3번\
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
  
// SAGA
'# 정의 : 데이터 일관성 유지를 위해 비동기 메시징(버퍼링)을 이용하여 편성한 일련의 로컬 트랜잭션 <br/><br/>\
# 특징 <br/>\
- 이벤트 Trigger 기반 : 완료시 메시지 발행, SAGA 편성중 다음 단계 서비스 Trigger <br/>\
- 보상 트랜잭션 활용 : 트랜잭션 실패시 Rollback 수행 필요, 정보 복원 보상 트랜잭션 사전 작성 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/SAGA_Example.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
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
* KPC 97회 3교시 관리 1번\
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

// 디지털 리터러시
'# 정의 : 데이터 활용 능력 / 목적, 의미, 이해, 해석, 활용 <br/>\
- Data 와 Literacy 의 합성어로, 데이터를 목적에 맞게 생성하고, 데이터의 숨겨진 의미를 올바르게 이해 및 해석하여 적절하게 활용하는 능력<br/><br/>\
# 6영역 (연비창디의기)<br/>\
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
'# 정의 : 다수 서버 복제 및 분산 저장 가능 DBMS / 비정형, 비관계 / 읽기 보다 쓰기 <br/>\
- 전통적인 RDBMS와 다른 DBMS를 지칭하기 위한 용어로 데이터 저장에 고정 Table-Schema가 필요하지 않고, Join 연산을 사용할 수 없으며, 수평적으로 확장 가능한 DBMS <br/>\
- 비관계형 데이터, 비정형 데이터를 저장하기 위해, 데이터 읽기보다 쓰기에 중점을 둔, 수평적 확장 및 다수 서버들에 데이터 복제 및 분산 저장이 가능한 DBMS <br/><br/>\
# 암기 <br/>\
- 절차 : 도쿼패기후하 <br/>\
- 기본모델 : 디애어 <br/>\
- 확장 : 오인컴인 <br/>\
- 계층 : TAN <br/><br/>\
# 특징 : 테이블간 관계정의를 안함, 분산환경지원, 저비용처리(오픈소스), 확장성, 다양 형태 저장구조 <br/><br/>\
* 117회 1교시 9번 \
',
  
// NoSQL 데이터 모델링 패턴
'# 데이터모델 유형 <br/>\
1. Key/Value Stores <br/>\
- 개념 : Unique한 Key에 하나의 Value를 가지고 Key 기반의 Get, put, delete 기능 제공 <br/>\
- 주요 DB : Redis, Raiak, Dynamo <br/><br/>\
2. Column Family Store <br/>\
- 개념 : 한 Key에 한 value만을 두는 단점을 극복 <br/>\
- 주요 DB : Cassandra, HBase <br/><br/>\
3. Document Store <br/>\
- 개념 : 저장되는 Value의 데이터 타입이 Document 타입 사용 <br/>\
- 주요 DB : CouchDB, MongoDB, Hypertable <br/><br/>\
4. Graph Store <br/>\
- 개념 : 그래프로 데이터를 표현 <br/>\
- 주요 DB : Neo4J, AllegroGraph <br/><br/>\
# 데이터 모델링시 고려사항 <br/>\
- 쿼리 결과 지향 모델링 <br/>\
- 비 정규화 기반 모델링 <br/>\
- 데이터 모델링 절차 이해 <br/>\
- 데이터 구조와 알고리즘 이해 <br/>\
- 사용자 측면 기능적 요구사항 대응력 <br/><br/>\
# 데이터 모델링 절차 <br/>\
1. 도메인 모델 파악 <br/>\
2. 쿼리 결과 디자인 <br/>\
3. 필요시 패턴 이용 데이터 모델링 <br/>\
4. 기능 최적화(모델 구체화) <br/>\
5. 후보 NoSQL 선정 <br/>\
6. 완성된 데이터 모델을 NoSQL에 최적화 및 하드웨어 디자인 <br/><br/>\
# 데이터 모델링 패턴 <br/>\
1 Conceptual Techniques <br/>\
- Denormalization : 같은 데이터 중복해서 저장 <br/>\
- Aggregation : Schema-less 이용, 데이터 모델 합성 가능 <br/>\
- Application Side Join : N:M관계 Join 필요하므로, Application Level 구현 <br/><br/>\
2. General Modeling Techniques <br/>\
- Atomic Aggregates : Entity -> Ke-Value 저장 -> 원자적 업데이트 <br/>\
- Index Table : Ke-Value Store Index 활용, 직관적 모델링 패턴 <br/>\
- Composite Key Index : 결합키 구성, 다중 Key 구성 <br/><br/>\
3. Hierachy Modeling Techniques <br/>\
- Tree Aggregation : Tree, 임의 Graph <br/>\
- Adjacent List : Linked List 자료구조 <br/>\
- Materialized Path : Root에서 현재 노드까지 전체 경로를 Key로 저장 <br/><br/>\
* 라이지움 87회 응용 2교시 6번\
',

/// [빅데이터][NoSQL]- CAP 이론
'# NoSQL의 CAP 이론 <br/>\
- 개념 : Consistency, Availability, Partition Tolerance의 3가지 특징을 가지고 있으며, 이중 두가지만 만족할 수 있다는 이론 <br/>\
<img src = "./img/CAP.png" style = "max-width: 100%; height: auto;"><br/><br/>\
- C+P : 데이터 발생, 변경시 수평적으로 확장된 클러스터내의 데이터 일관성을 즉각적으로 유지 (Couchbase, MongoDB, Appache HBase)<br/>\
- A+P : 즉시는 아니더라도 데이터 일관성은 결국에는 유지 (Cassandra, Couchbase(XDCR), ScyllaDB)<br/>\
- C+A : 데이터 발생, 변경시 수직적으로 확장된 시스템내에서 데이터 일관성을 즉각적으로 유지 (MySQL, Oracle)\
',

// [빅데이터][NoSQL]- NoSQL RDBMS 비교
'<img src = "./img/NoSQLRDBMS.png" style = "max-width: 100%; height: auto;">\
',

// [빅데이터][NoSQL]- BASE
'# 정의 : 가용성, 성능 중시 분산 시스템 특성 <br/>\
- Basically Available, Soft state, Eventually Consistence <br/>\
- 가용성과 성능을 중시하는 분산 시스템의 NoSQL 특성 <br/><br/>\
# BASE 속성 <br/>\
1. Basically Availabe <br/>\
- 가용성 <br/>\
- 데이터는 항상 접근 가능 <br/>\
- 다수 스토리지에 복사본 저장 <br/><br/>\
2. Soft-State <br/>\
- 독립성 <br/>\
- 노드의 상태는 외부에서 전송된 정보를 통해 상태 결정 <br/><br/>\
3. Eventually Consistency <br/>\
- 일관성 <br/>\
- 일정 시간 경과시 데이터의 일관성 유지되는 속성 <br/><br/>\
# BASE ACID 비교 <br/>\
<img src = "./img/BASEACID.png" style = "max-width: 100%; height: auto;">\
',

// [빅데이터]- 그래프 데이터베이스
'# 정의 : NoSQL 기반 데이터베이스 / 노드,엔티티 관계 그래프 모델 / 트랜잭션 관리 <br/>\
- 노드(엔티티)와 이들 간의 관계를 그래프 데이터 모델로 저장하여 트랜잭션을 관리하는 기능을 API 로 제공하는 NoSQL 기반 데이터베이스<br/><br/>\
# 정의 : 데이터를 노드와 엣지로 표현하여 데이터 사이의 관계를 그래프 구조를 이용하여 저장하는 NoSQL 기반의 데이터 베이스 <br/><br/>\
<img src = "./img/DS_38_1.PNG" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/DS_38_2.PNG" style = "max-width: 100%; height: auto;">\
',

// 빅데이터 개인정보보호 가이드라인
'# 정의 :“빅데이터 활용 가이드 라인 / 산업 발전, 정보 주체 프라이버시 보호<br/>\
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
# 읽기 과정 <br/>\
1. HDFS Client / File Search <br/>\
2. Name Node / Block 위치 조회 요청 <br/>\
3. Name Node / 가장 가까운 Data Node 목록 전송 <br/>\
4. HDFS Client / Data Node Block 정보 요청 <br/>\
5. Data Node / 전송, 읽기 <br/><br/>\
# 쓰기 과정 <br/>\
1. Data File / Block 단위로 구분 <br/>\
2. Name Node / 파일 쓰기 요청 <br/>\
3. Name Node / 유효 Data Node 전송, Meta data 별도 저장 <br/>\
4. HDFS Client / Data Node에 쓰기 위한 Data Block 전송 <br/>\
5. Data Node / 순차 쓰기 <br/>\
6. 반복 <br/><br/>\
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
# 구성체계 <br/>\
<img src = "./img/ISO20547Contents.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동향 <br/>\
- 국외 : ITU-T-3600, 클라우드 기반 빅데이터 기능 및 요구사항 <br/>\
- 국내 : ISO 20546, 빅데이터 개요 및 용어, 과기정통부 참여 중 <br/><br/>\
* 120회 응용 1교시 4번\
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
  
// 특이정보
'# 정의 : 아주 작은 or 큰 값 <br/>\
- 통계적 자료분석의 결과를 왜곡시키거나, 자료 분석의 적절성을 위협하는 변수값 또는 사례 <br/>\
- (기술통계학) : 분포 집중경향치의 값을 왜곡시키거나, 상관계수 추정치의 값을 왜곡시키는 개체 또는 변수 값 <br/>\
- (추론통계학) : 모수추정치의 값을 왜곡시키는 개체 또는 변수의 값 <br/><br/>\
# 유형 <br/>\
- 비합리적 특이정보 : <font color = "red">입력 오류등 자료의 오염</font>으로 인해 발생한 이상치 <br/>\
- 합리적 특이정보 : <font color = "red">정확하게 측정</font>되었으나 다른 자료들과 전혀 다른 경향이나 특성을 보이는 이상치 <br/><br/>\
* 라이지움 87회 응용 1교시 13번\
',
  
// 데이터 플래그십
'# 정의 : 빅데이터 산업 활성화 목적위한 정책 <br/>\
- 인공지능, 딥러닝과 같은 지능정보 기술을 적용한 신 서비스를 개발하고, 교통, 의료, 환경, 안전 등 다양한 분야에서 국민이 체감할 수 있는 성공사례(Flagship) 확산 당을 통해 사회 현안 해결 도모하는 제도 <br/><br/>\
# 목적 <br/>\
- 빅데이터 기술 활용한 비즈니스 모델 개발 <br/>\
- 공공이익 실현 위한 선도과제 발굴 지원 <br/>\
- 사회 전반 데이터 활용가치 인식 향상 <br/><br/>\
# 절차 <br/>\
- 수요예측 > 상품기획 > 공정효율화 > 사후관리 <br/><br/>\
# 추진체계 <br/>\
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
'# 정의 : Single Imputation <br/>\
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
  
// Hilbert R-Tree
'# 정의 : 힐버트 곡선을 활용한 대용량의 공간데이터베이스 구축 <br/>\
- 공간 챙무 곡선인 Hillbert 곡선을 이용해서 대용량의 데이터를 고비용의 분할 과정 없이 R-Tree를 구성하는 기법 <br/><br/>\
# 특징 <br/>\
- MBR군집화 : 일정 개수 군집화후 다른 차원 데이터 정렬 <br/>\
- 겹침최소화 : Hillbert 곡선 사용, 성능 향상 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/HillbertRTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 활용 <br/>\
- 벌크 로딩 : 고속화, 공간활용도 증가 <br/>\
- 효율적 질의 : 인덱스 성능 향상 <br/><br/>\
* 116회 1교시 13번\
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
'# 정의 : 대용량 데이터 처리 성능 향상기법 <br/>\
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
  
// Data File Structure
'<img src = "./img/DataFileStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 응용 3교시 6번\
',
);
