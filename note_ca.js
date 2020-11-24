var question = question.concat(
'OS',
'[OS]- Disk 할당 기법',
'Unix OS', 
'[Unix OS]- i-node Block',
'[Unix OS]- I/O Model',
'[Unix OS][Synchronous I/O]- Blocking I/O',
'[Unix OS][Synchronous I/O]- NonBlocking I/O',
'[Unix OS][Synchronous I/O]- I/O Multiplexing',
'[Unix OS]- Asynchronous I/O',
'Loader',
'Dispatcher',
'[Dispatcher]- 운영체제 문맥, 문맥교환',
'Interrupt',
'Memory 영역',
'Process',
'Thread',
'Buffering / Spooling',
'결함허용 시스템(FTS:Fault Tolerant System)',
'고가용성(High Availability)',
'[고가용성]-NUMA 시스템',
'우선순위역전현상',
'WDT',
'메모리 관리 기법',
'[메모리 관리]- 할당 기법',
'[메모리 관리][할당 기법][연속 로딩]- 단일 분할 할당',
'[메모리 관리][할당 기법][연속 로딩]- 다중 분할 할당',
'[메모리 관리][할당 기법]- 분산 로딩 기법(Virtual Memory, Paging, Segmentation)',
'[메모리 관리][할당 기법]- 단편화',
'[Virtual Memory]- Mapping',
'Cache Memory',
'FeRAM',
'Cloud GPU',
'GPGPU',
'[GPGPU]-CUDA',
'Fabric Computing',
'양자컴퓨팅(Quantum Computing)',
'Tiny OS',
'Nano Qplus',
'NAND Flash Memory',
'CPU',
'[CPU]- MajorState',
'CPU Scheduling',
'[CPU Scheduling]- 비선점 스케줄링',
'[CPU Scheduling]- 선점 스케줄링',
'[CPU Scheduling]- Process Aging',
'[RTOS Scheduling]- RM',
'[RTOS Scheduling]- EDF',
'가상 메모리 페이지 교체 알고리즘',
'[가상 메모리 페이지 교체 알고리즘]- 벨라디 변이(Belady\'s Anomaly)',
'[가상 메모리 페이지 교체 알고리즘]- 스레싱(Thrashing)',
'Disk 스케줄링',
'[Disk 스케줄링]- 알고리즘 유형',
'리소스 동기화',
'[리소스 동기화]- 상호배제',
'[리소스 동기화][상호배제]- 세마포어, 모니터',
'[리소스 동기화][상호배제]- Swap Test & Set()',
'[리소스 동기화][상호배제]- 데커 피터슨 램포드',
'[리소스 동기화]- 운영체제의 크리티컬섹션',
'[리소스 동기화]- 뮤텍스',
'[리소스 동기화]- 스핀락',
'[리소스 동기화]- 교착상태',
'[교착상태]- 은행가알고리즘',
'[교착상태]- 자원할당 그래프',
'RAID',
'[InMemory]- In-Memory Computing',
'[InMemory]- In-Memory Database',
);

var answer = answer.concat(
// OS
'# 정의 : 응용 프로그램의 수행을 제어하고 컴퓨터 사용자와 하드웨어 사이의 인터페이스 역할을 수행하는 시스템 소프트웨어 <br/><br/>\
# 기능 <br/>\
1. 분류 1 <br/>\
- 사용자 측면 : 프로그램 수행, 입출력 연산, 파일 시스템 조작, 통신, 오류탐지 <br/>\
- 시스템 측면 : 자원 관리 및 할당, 하드웨어 인터페이스, 자원보호 <br/><br/>\
2. 분류 2 <br/>\
- 주요기능 : 프로세스 관리, 보조기억장치관리, 파일관리, 장치관리, 메모리관리 <br/>\
- 보조기능 : 시스템보호, 명령어해석, 네트워킹 <br/><br/>\
* KPC 97회 응용 2교시 7번\
',
  
// Disk 할당 기법
'# 종류 <br/>\
1. 연속 할당 <br/>\
- 개념 : 파일들이 디스크내에 연속적으로 공간에 할당되는 방식 <br/>\
- 특징 : 파일크기에 알맞은 연속된 공간이 없으면 할당 불가 <br/><br/>\
2. 연결 할당 <br/>\
- 개념 : 포인터 연결 <br/><br/>\
3. 인덱스 할당 <br/>\
- 개념 : 불연속 할당, 색인 유지 방식 <br/><br/>\
# 기법들 간 관계 <br/>\
<img src = "./img/DiskAllocation.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 97회 응용 2교시 7번\
',
  
// Unix
'# 정의 : 미국벨(Bell) 연구소에서 개발된 소프트웨어 개발용 운영체제 <br/><br/>\
# 암기 <br/>\
- 구조 : 하커쉘유 <br/>\
- 파일시스템 : 부수아데 <br/><br/>\
# 특징 <br/>\
- 대화식 운영<br/>\
- 높은 이식성 : C언어로 개발됨 <br/>\
- 계층적 구조 : / 부터 하위 파일까지 트리형 구조 <br/>\
- 멀티 유저, 멀티 태스킹 <br/><br/>\
# Boot Process <br/>\
Power On-> Boot PROM -> Boot Program -> Init kernel -> Run Init Process -> SVC. Start<br/><br/>\
<img src = "./img/Unix_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Unix_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Unix_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Unix_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// [Unix OS]- i-node Block
'# 개념 : 파일 데이터 블록 포인터 / 파일 관리 / 자료구조 <br/>\
- 유닉스 시스템에서 파일을 관리하기 위해 사용되는 자료구조로서, 파일이 속한 데이터 블록의 포인터 <br/><br/>\
# 필요성 <br/>\
- 계층 구조 확립 <br/>\
- 접근 및 보호 <br/><br/>\
<img src = "./img/iNode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. File 관리 (MOTSC) <br/>\
- mode : 파일과 관계된 접근과 실행권한 저장 플래그 <br/>\
- Owner : 파일과 관계된 개별 소유자, 그룹 소유자 <br/>\
- Timestamps : 마지막 접근, 마지막 수정, i-node 수정 시간 <br/>\
- Size Block : 파일 시스템의 블록 크기를 바이트 단위로 표시<br/>\
- Count : 파일의 바이트 수 <br/><br/>\
2. Data block Pointer (Direct Indirect)<br/>\
- Direct : 직접 데이터 블록을 가리키는 포인터로 구성, 12개 보인트 Array 96KB <br/>\
- Single indirect : 데이터 블록을 가리키는 포인터로 구성 96KB ~ 16MB <br/>\
- Dobule indirect : 2개의 레이어(인덱스 블록 포인터 / 실제 데이터 블록 포인터) 16MB~32GB <br/>\
- Triple indirect : 3개의 레이어(1,2 다른 인덱스 블록 포인터 / 실제 데이터 블록 포인터) ~70TB <br/><br/>\
* 라이지움 86회 1교시 4번 \
',
  
// I/O Model
'# I/O Model 개요도 <br/>\
<img src = "./img/UnixIOModelOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 97회 응용 4교시 8번\
',
  
// Blocking I/O
'# 개념 : I/O 작업이 진행되는 동안 유저 프로세스는 자신의 작업을 중단한 채 대기하는 방식 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BlockingModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- 데이터 읽기 위한 System Call 호출 <br/>\
- 프로세스 대기 상태 <br/>\
- 커널에서 유저영역으로 데이터 복사 <br/>\
- System Call 리턴 후, 데이터 처리 <br/><br/>\
# 특징 <br/>\
1. 설정 : 소켓 생성시, Blocking I/O 모드로 설정 <br/><br/>\
2. 장점 <br/>\
- 순차적 구조 이해 쉬움 <br/>\
- 애플리케이션 구현 간단 <br/><br/>\
3. 단점 <br/>\
- 프로세스 동시성 처리 문제점 존재 <br/><br/>\
* KPC 97회 응용 4교시 8번\
',

// NonBlocking I/O
'# 개념 : I/O 작업이 진행되는 동안 유저 프로세스의 작업을 중단시키지 않는 방식 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/NonBlockingModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- Datagram 수신을 위한 Recvform 호출 <br/>\
- 에러 수신 후 Polling(반복호출) <br/>\
- System call 호출 시, 데이터 준비 <br/>\
- 성공 수신 후 데이터 처리 <br/><br/>\
# 특징 <br/>\
1. 설정 <br/>\
- 소켓 생성 후 System call을 통하여 설정 <br/>\
- fnctl(fd, F_SETFL, O_NONBLOCK) <br/><br/>\
2. 장점 <br/>\
- 함수 호출 후 프로세스 대기 하지 않음 <br/>\
- 다른 Job을 처리할 수 있음 <br/><br/>\
3. 단점 <br/>\
- 읽기 위해 계속적인 System call 요청시, Busy waiting 발생 <br/>\
- CPU 사용 비효율 <br/><br/>\
* KPC 97회 응용 4교시 8번\
',
  
// I/O Multiplexing
'# 개념 : 동시성 처리를 위해 다양한 System Call을 사용한 I/O 처리기법 <br/><br/>\
# 필요성 <br/>\
1. 문제점 <br/>\
- Blocking I/O : Process 대기로 동시성 문제 <br/>\
- NonBlocking I/O : CPU Busy Waiting 문제 <br/><br/>\
2. 기대효과 <br/>\
- Standard input, TCP, UDP 소켓등 동시 I/O 처리 가능 <br/>\
- select, epoll system Call 사용 <br/>\
- 동기적 이벤트 다중 처리 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/IOMultiplexing.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
1. 절차 <br/>\
- Application은 여러 소켓 설정후, select system call 호출시 프로세스는 대기 상태 <br/>\
- 커널은 특정 소켓이 읽기 가능 상태면, Application 으로 알림 리턴 <br/>\
- Application 은 해당 소켓을 통해 데이터를 읽기 위해 recvform System call 호출 <br/>\
- 커널은 데이터 유저 영역으로 복사 후, 성공 응답 시, Application은 데이터 처리 <br/><br/>\
2. 장점 <br/>\
- 동시성 지원 <br/>\
- POSIX 표준인 select, eopll 함수를 통해 OS 호환성 제공 <br/><br/>\
3. 단점 <br/>\
- 복잡성 증가 <br/>\
- select 함수도 Synchronous I/O로 성능 이슈 존재 <br/><br/>\
* KPC 97회 응용 4교시 8번\
',
  
// Asynchronous I/O Model
'# 개념 : 비동기식 I/O Model <br/><br/>\
# 개념도 <br/>\
<img src = "./img/AsynchronousIO.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- Application은 aio_read system call 요청 후, 다른 처리 수행 <br/>\
- 커널은 유저영역으로 데이터 복사 후, Application 으로 Callback을 통하여 알리고, Application은 데이터 처리 <br/><br/>\
# 특징 <br/>\
- 성능 향상 <br/>\
- Callback 처리로 프로그램 복잡도 상승 고려 <br/><br/>\
* KPC 97회 응요 4교시 8번\
',

// Loader 
'# 정의 : OS Module / 정보,로드모듈 / 보조기억장치->주기억장치 <br/>\
- 컴퓨터 내부로 정보를 들여오거나 로드 모듈(프로그램들과 라이브러리들)을 디스크등의 보조기억 장치로부터 주기억장치에 적재하는 시스템 소프트웨어로 OS의 한 부분 <br/>\
- 멀티태스킹이 지원되는 운영체제에서 디스패처(dispatcher)라는 프로그램은 서로 다른 태스크들 간에 컴퓨터 CPU의 할당시간을 조절하고, 특정 태스크와 관련된 프로그램이 주기억 장치에 있지 않을때는 로더를 호출함 <br/><br/>\
# 암기 <br/>\
- 개념 : 원목로데실결 <br/>\
- 기능 : 할연재적 <br/>\
- 유형 : 컴절직동 <br/><br/>\
# 개념 <br/>\
- 원시 PGM <br/>\
- 언어번역기-> 번역 <br/>\
- 목적(PGM)s <br/>\
- 연결편집기(링커), 라이브러리함수 <br/>\
- 링킹 <br/>\
- 로드모듈(PGM&라이브러리s)-(로더) <br/>\
- 데이터 <br/>\
- 실행 <br/>\
- 결과 <br/><br/>\
# 기능 : 할연재적 <br/>\
- 할당 : 메모리할당 <br/>\
- 연결 : Sub PGM 주소를 호출처로 <br/>\
- 재배치 : 실제주소 연결 <br/>\
- 적재 : PGM 메모리 copy <br/><br/>\
# 유형 : 컴절직동<br/>\
- Compile and Go 로더 : 로더x, 언어번역 PGM이 로더역할까지<br/>\
- 절대 로더 : 적재만 수행 <- 가장 많이 사용 <br/>\
- 직접 연결 로더 <br/>\
- 동적 로더 : 필요시마다 부분 적재 \
',

// Dispatcher
'# 정의: OS Module / Multitasking / Process 중단/전환 수행 <br/>\
- 한정된 수의 CPU에서 많은 프로세스들의 동시 수행을 위해 스케줄러에서 실행 권한을 부여하고 실행 중이던 프로세스의 중단/전환을 수행하는 운영체제 모듈 <br/><br/>\
# 주요 기능 <br/>\
- Context Switching <br/>\
- User Mode 전환 <br/>\
- 프로세스 공간 전환 <br/>\
- 레지스터 공간 전환 <br/>\
- 부동 소수점 연산 레지스터의 지연 전환 <br/>\
- 범용 레지스터 백업 <br/>\
- CPU 할당 <br/><br/>\
* Dispatcher latency : 현재 실행중인 프로세스를 중지하고 다른 프로세스가 실행될 때까지의 소요시간 <br/><br/>\
<img src = "./img/Dispatcher_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Dispatcher_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Dispatcher_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Dispatcher_4.png" style = "max-width:100%; height:auto;">\
',

//[Dispatcher]- 운영체제 문맥, 문맥 교환
'# 문맥 : 작업 재개 정보 / 자원 재할당 시점<br/>\
- 여러 프로세스가 함께 수행되는 시분할 시스템 환경에서 특정 프로세스의 처리를 위해 할당된 자원이 일시적으로 반환되어 다른 선점 프로세스를 처리하고 재할당 되었을 경우(이를 문맥교환이라 함), 기존 수행 중이었던 작업 시점부터 재현하기 위한 정보를 지칭 <br/><br/>\
# 유형 <br/>\
- System Context : 커널할당자료구조, 페이지 테이블, 세그먼트 <br/>\
- Memory Context : Text, Data, Heap, Swap 공간 <br/>\
- HW Context : 문맥교환시 현 실행위치 정보<br/><br/>\
# 문맥교환 : PCB 정보 교체 과정 / 실행중 중지 / 다른 프로세스 교환 <br/>\
- Context Switch <br/>\
- 멀티 프로세스 환경에서 실행중인 프로세스를 중지하고 다른 프로세스로 교환할 때 발생하는 PCB(Process Control Block) 정보 교체 과정 <br/><br/>\
# 절차 <br/>\
1. 인터럽트/시스템 호출 <br/>\
2. 커널 모드 전환 <br/>\
3. 현재 프로세스의 PCB 저장 <br/>\
4. 다음 실행될 프로세스의 PCB 로드 <br/>\
5. 사용자 모드 전환 <br/><br/>\
# 발생조건 <br/>\
- Scheduler dispatch (Ready->Running) <br/>\
- Time slice 만료 (Running->Ready) <br/>\
- I/O 작업 (Running->Waiting) <br/>\
- System call (Running->Wating) <br/><br/>\
# 문제점 vs 해결 <br/>\
- 오버헤드 발생 : 문맥교환 발생 빈도 최소화, 쓰레드 사용(쓰레드 문맥교환은 Stack 만 수행, 프로세스 문맥교환은 Stack,Heap,Data,Code 모두 대상, 다중 프로그래밍 수준을 낮춤 <br/><br/>\
* PCB 구성 : 카레상어입아포 <br/>\
- pc, 레지스터, 상태, account, 입출력, pid, pointer\
',

// Interrupt 
'# 정의 : 특별한 제어 신호<br/>\
- 컴퓨터의 제어를 현 상태로부터 특수한 사건이나 환경으로 보내는 특별한 제어 신호 <br/>\
- 프로그램 제어 신호를 보낸 원인에 해당되는 특수 서브루틴 <br/><br/>\
# 발생원인 (기의주)<br/>\
1. 외부 <br/>\
- 기계적 문제 : 정전, 자료전달과정 오류 <br/>\
- 의도적 중단 : Power Off, 작업취소 <br/>\
- 주변장치 작동 : Keyboard, Mouse 처리 요구 <br/><br/>\
2. 내부 <br/>\
- 프로그램상 문제 : 보호된 Memory 접근 시도 <br/><br/>\
# 우선순위 (전기외입 프 S)<br/>\
1. 외부 <br/>\
- 전원 이상 <br/>\
- 기계 착오 : CPU 기능적 오류 <br/>\
- 외부 신호 : Time slice, Keyboard <br/>\
- 입출력 : 입출력 데이터 오류, 이상현상 <br/><br/>\
2. 내부 <br/>\
- 프로그램 검사 : div 0, Overflow, Underflow <br/><br/>\
3. SW <br/>\
- SVC(SuperVisorCall) : 명령 요청 발생, 복잡한 입/출력, 기억장치 할당 <br/><br/>\
# 우선순위 처리방식 <br/>\
1. 단일 회선 <br/>\
- Polling : 가장 높은 우선순위 (SW) <br/>\
- Interrupt Requesst Chain : 낮은 순위 요청 불가 (HW) <br/>\
- Interrupt Priority Chain : 낮은 순위 버스 불가 (HW) <br/><br/>\
2. 다중 회선 <br/>\
- 우선순위 판단 : 인터럽트 레지스터 추가 관리 <br/><br/>\
3. 혼잡 회선 <br/>\
- 단일,다중 혼합 : 장치별 고유, 그룹내 공통 연결 <br/><br/>\
<img src = "./img/Interrupt_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Interrupt_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Interrupt_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 4교시 6번\
',
  
// Memory 영역
'# 종류 <br/>\
- Code : 코드자체 구성 / Hex, Bin <br/>\
- Data : 전역변수, 정적변수, 배열, 구조체 / global, static, array, structure <br/>\
- Heap : 동적 메모리 / malloc(), new() <br/>\
- Stack : 지역변수, 매개변수, 리턴 값 / \
',

// Process
'# 정의 : 작업 실행 단위 / CDHS 영역 독립 <br/>\
- 프로그램을 구동하여 메모리에 적재된 상태로 실행되는 하나의 작업 단위, CDHS(CODE, DATA, HEAP, STACK) 영역 독립 <br/><br/>\
# 프로세스 상태 <br/>\
<img src = "./img/Process_0.jpg" style = "max-width:100%; height:auto;"><br/>\
- 상태변화 : (준비) Dispatch, Timeout (실행) Wakeup (대기) <br/>\
- X축 : Job, CPU Scheduler <br/>\
- Y축 : 활동상태(주기억장치), 중단상태(보조기억장치), 중단,재시작(Swap in, Swap out)<br/><br/>\
# 프로세스 상태변화 사례 <br/>\
- 인터럽트, 시스템콜 / PCB1에 P1문맥 저장 / PCB2에서 P2 문맥복구 <br/><br/>\
# Process Thread 비교 <br/>\
<img src = "./img/Process_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/Process_2.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/Process_3.png" style = "max-width:100%; height:auto;">\
',

// Thread 
'# 정의 : 단위 명령 집합 / 프로세스내 / 리소스 공유(SCDH)<br/>\
- 하나의 프로세스내에서 리소스를 공유하며 독립적으로 수행 가능한 단위 명령의 집합, STACK 외의 CODE, DATA, HEAP영역 공유 <br/><br/>\
# Keyword : 사용자모드(임계,스핀락), 커널모드(세마포어), TCB, Light Weight, 멀티스레드, 공유(힙/데이터/코드), 독립(레지스터/스택), PCB <br/><br/>\
# 종류<br/>\
- 단일 : 1:1 <br/>\
- 멀티 : 1:n <br/>\
<img src = "./img/ThreadType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구현시 고려사항 <br/>\
- 단일 : 신호전달(불법접근시), 종료(제거시점 신중결정), 마스킹(종료전) <br/>\
- 멀티 : 동기화(임계영역, 스핀락, 세마포어) <br/><br/>\
# 비교 <br/>\
<img src = "./img/ThreadProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 3교시 4번\
',

// Buffering, Spooling 
'# Buffering : 일시적 데이터 축적 기법 / 일방향 / 양자 속도차 수정 / 중간 <br/>\
- 장치간 데이터를 일방향으로 전송할 때 양자의 속도차를 수정하기 위하여 중간에서 데이터를 일시적으로 기억 장소에 축적하는 기법 <br/><br/>\
# Spooling(Simultaneous Periphereal Operation On-line) : 완충 기법 / 주변장치 / 컴퓨터 처리 장치 / 보조기억장치 이용<br/>\
- 주변장치와 컴퓨터 처리 장치 간 데이터 전송시 처리 지연 단축 위해 보조기억 장치 완충 기법 <br/><br/>\
<img src = "./img/Buffering.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/Spooling.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/Buffering_Spooling.png" style = "max-width:100%; hegiht:auto;">\
',

// 결함허용 시스템
'# 정의 : 장애 발생x 시스템 / 고장 발생 / 프로그램 오류 <br/>\
- 고장이 발생하거나 프로그램에 오류가 있더라도 시스템 전체에 장애가 발생하지 않게 구성한 시스템 <br/><br/>\
# 암기 <br/>\
- 해결단계 : 감진통복 <br/>\
- 지표 : MTBF, MTTF, MTTR - 가용도 IEC 62278<br/>\
- 전략 <br/>\
1) HW : 듀스티와레셀 <br/>\
2) DB : 롤로체쉐 <br/>\
3) SWL : 체리컨디NN <br/>\
- 복구 : 전향, 후향 <br/>\
- 장애복구 : 롤리다다 <br/><br/>\
# 결함 해결 단계 : 감지 > 진단 > 통제 > 복구 <br/><br/>\
# 시스템 결함 허용정도 측정기준 <br/>\
- 평균고장간격 MTBF(Mean Time Between Failure) <br/>\
- 평균고장수명 MTTF(Mean Time To Failure) <br/>\
- 평균수리시간 MTTR(Mean Time To Repair) <br/>\
- 가용도 = MTTF / (MTTF + MTTR) * 100 = (MTTF / MTBF) * 100 (철도적용 신뢰성, 가용성, 유지보수성, 안전성 프로세스 IEC 62278 <br/><br/>\
# 가용성 확보 전략 (결함 허용기법) <br/>\
1. HW<br/>\
- Duplication with Comparision<br/>\
- Standby Sparing<br/>\
- TMR(Triple Modular Redundancy)<br/>\
- Watchdog Timer<br/>\
- RAID<br/>\
- Self Purging Redundancy <br/><br/>\
2. DB<br/>\
- Rollback(Undo)<br/>\
- Log File<br/>\
- Check Point<br/>\
- Shadow Paging <br/><br/>\
3. SW<br/>\
- Check Pointing<br/>\
- Recovery Block<br/>\
- Conversation<br/>\
- Distributed Recovery Block<br/>\
- N Self-checking Programming<br/>\
- N Version Programming <br/><br/>\
4. 정보 <br/>\
- Parity Code<br/>\
- M of N Code<br/>\
- Checksum<br/>\
- Berger code<br/>\
- Hamming Error<br/>\
- Correcting Code <br/><br/>\
# 복구 방식 <br/>\
- 전향복구(Rollback and retry) : 결함 전 재설정, Timing Critical 부적합 (Recovery Block, Conversation, Check pointing) <br/>\
- 후향복구(Forward Recovery) : 동작 수행하면서 복구, (TMR, Distributed Recovery Block, N-Self checking Pro-) <br/><br/>\
# 장애 복구 방식 <br/>\
- Rollback  : 정상 상태 스냅샷 저장 <br/>\
- Replication(복제) : 시스템을 복수로 준비해 병렬로 실행, 그런 다음 다수의 시스템을 만족한 결과를 올바른 결과로 채택 <br/>\
- Redundancy(다중화) : 동일한 시스템을 복수로 준비해 구동, 마스터-슬래이브 방식, 혹은 액티브-스탠바이 방식 <br/>\
- Diversification(다양화) : 같은 성능의 서로 다른 형식의 하드웨어를 여러개 준비, 그 위에 복제 방식과 같이 동일한 시스템울 운용 <br/><br/>\
* HA와 비교시 가점 <br/>\
<img src = "./img/결함허용시스템.png" style = "max-width:100%; height:auto;">\
',

// 고가용성
'# 정의 : SPOF 방지 기술 / 클러스터 / <br/>\
- 2대 이상의시스템을 하나의 클러스터로 묶어서 한 시스템의 장애 발생시 다른 시스템으로 신속히 Fail Over해 Single Point of Failure를 방지하는 기술 <br/><br/>\
# 암기 <br/>\
- 유형 : 핫뮤컨 <br/>\
- 고려사항 : 전지절기 <br/><br/>\
# 유형 <br/>\
- Hot Standby(DB 1개) <br/>\
- Mutal Takeover : 한쪽이 2개 업무 수행(DB 2개) <br/>\
- Concurrent Access : 병렬처리, L4 Switch <br/><br/>\
# 동작 방식 <br/>\
- 시스템 전체 장애시 : Keep Alive Packet 수신 지연시 Down 판단, N/W자원 -> Disk 자원 -> Application 자원 순 복구(script 사전 정의 필요) <br/>\
- N/W Adapter(Card) 장애시 : Standby Adapter가 Service Adapter의 IP Address Failover <br/>\
- TCP/IP N/W 장애시 : 자동 대응 불가 <br/><br/>\
# 한계점 <br/>\
- External Disk 자체 장애 발생 대응 불가<br/>\
- 시스템 Down 되지 않으면 Failover 불가 <br/>\
- 시스템 성능 저하시 자동 감지 불능 <br/>\
- DB 및 Application Down시 Failover 하지 않음 <br/>\
- DB 및 Application 자체 Bug일 경우 Failover가 의미 없음 <br/>\
- HA 구성인한 오버헤드 <br/><br/>\
# HA 구축 시 고려사항 <br/>\
- 전략 : 예산 비용 고려한 Mission Critical 업무 적용, 전사적 BCP 연계 구축 <br/>\
- 지침 : IT Compliance 수준 고려, ITIL SLA 요구 수준 고려 <br/>\
- 절차 : Stress Test 통한 실제 운영환경과 동일한 부하, Capacity Plan의 한 체계적 적용 <br/>\
- 기술 : HW, SW등 전체 시스템 관점 아키텍처 설계, HA구성 의한 Overhead 고려 HA 구성 방식 및 대상 서버 결정, 백업서버(Capacity, External Disk의 보호방안(2중화 여부), HA 대상 시스템 대한 OS 및 사용자가 자원 동기화, 보호될 자원 결정 및 자원 동기화 <br/><br/>\
<img src = "./img/고가용성_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/고가용성_2.png" style = "max-width:100%; height:auto;">\
',

// [고가용성]-NUMA 시스템
'# 정의 : 불균일 메모리 접근기법 <br/>\
- Non-Uniform Memory Access <br/>\
- CPU 메모리 공유방식에 따른 분류의 한 종류 <br/>\
- 다중 프로세서(CPU) 환경에서 메모리 Access Time 최소화를 위하여 개별 프로세서에 독립적인 로컬메모리가 고속으로 연결된 구조<br/>\
<img src = "./img/NUMA_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- NUMA 환경에서는 프로세서 클러스터 구성이 용이하며, CPU Scale-Out 확장시 공유 메모리 접근에 따른 성능 문제 해결 <br/>\
- SMP(Symmetric Multi-Processing) 확장성 문제 해결 <br/>\
- MPP(Massively Parallel Processor) 이식성 문제 해결 <br/><br/>\
# 유형 <br/>\
1. ccNUMA <br/>\
- Cache-Choerent NUMA <br/>\
- 캐시 일관성을 하드웨어적으로 구현 <br/>\
- 현재의 모든 NUMA 컴퓨터들은 하드웨어적으로 캐시 일관성 제공 <br/><br/>\
2. RMC <br/>\
- Reflective Memory Cluster <br/>\
- 개별 노드마다 운영체제 복사본 구성 <br/>\
- 노드간 데이터 복사 및 이동 <br/><br/>\
3. COMA <br/>\
- Cache Only Memory Architecture <br/>\
- NUMA 구조에서 메모리 대신 단일의 큰 캐시를 가지는 구조 <br/>\
- 캐시 일관성 제공 <br/>\
- 최근 상용시스템 사용x <br/>\
- 캐시 내 데이터의 정해진 위치 없음 <br/><br/>\
# 지원기술 <br/>\
1. MS <br/>\
- MS-SQL Server에서 NUMA node 수 확인 Query <br/>\
- Query <br/>\
SELECT DISTINCT memory_node_id <br/>\
FROM sys.dm_os_memory_clerks <br/><br/>\
2. Oracle<br/>\
- 기본설정이 disable <br/>\
- init.ora 파일 파라미터 변경 (_enable_NUMA_support=TRUE) <br/><br/>\
3. Linux <br/>\
- /proc/$pid/numa_maps <br/>\
-> 논리주소와 NUMA 노드 할당 매핑정보 확인 가능 <br/><br/>\
- numactl -show(-s) 옵션 <br/>\
-> 현재 프로세서의 NUMA 정책 확인 <br/><br/>\
4. Google <br/>\
- Google\'s Warehouse Scale Computers <br/>\
- 고성능 메모리 관리자 -tcmalloc 제공 <br/>\
-> tcmalloc의 기능을 일부 개선하여 NUMA 대응할 수 있는 환경 제공 <br/><br/>\
* 그리타 \
',

// 우선순위 역전 현상 
'# 정의 : TASK 수행 불가 현상 / 낮은 우선순위 / 임계영역 대기<br/>\
- 낮은 우선순위를 가진 TASK에 의해 높은 우선순위를 가진 TASK가 임계 영역 대기 때문에 Block되어 수행되지 못하는 현상 <br/><br/>\
# 원인 : 비선점 스케줄링, 실시간 운영체제, 상호배제, 공유자원의 장기 소유, 릴리즈 낮은 우선순위 task 자원 점유 <br/><br/>\
# 해결 : 우선순위 상속, 우선순위 올림 <br/><br/>\
<img src = "./img/우선순위역전현상_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/우선순위역전현상_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/우선순위역전현상_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/우선순위역전현상_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/우선순위역전현상_5.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/우선순위역전현상_6.png" style = "max-width:100%; height:auto;">\
',

// WDT
'# 정의 : 전자 타이머 / 오작동 탐지 / 복구 <br/>\
- 컴퓨터의 오작동을 탐지하고 복구하기 위한 전자 타이머 -> 컴퓨터 동작 단계를 모니터하여 시스템의 이상 동작을 검출하는 회로 <br/><br/>\
# 암기 <br/>\
- 구성 : 카-킥클리인 <br/><br/>\
# 기본 메커니즘<br/>\
- 타이머 카운트다운 <br/>\
- 오류 검출 <br/>\
- 교정조치시행 (Reset/Correction) <br/><br/>\
# 사례 : 화성탐사선 로버 <br/><br/>\
# 구성 <br/>\
- 카운트다운 : kick 시간설정, clock, reset, enable, 워치독 재시작, 시간간격  <br/>\
- 오류검출 <br/>\
- 시정조치 <br/><br/>\
# 유형 <br/>\
- 내부 : 대부분의 마이크로 컨트롤러는 내부에 WDT 내장, 별도 비용 지불 필요 없음, 비용 증가, 상대적 신뢰성 낮음, SW적 문제로 오작동 발생 가능 <br/>\
- 외부 : 마이크로 컨트롤러 외부에 별도 HW 필요, 비용 증가, 프로세서 대한 물리적 리셋 핀(reset pin) 포함, 상대적 신뢰성 높음 <br/><br/>\
# 구현방법(HW설계 방식) <br/>\
- 단단계 : 온칩형태, 시스템 리셋용 <br/>\
- 다단계 : 동일칩 daisy chain 형태 cascading, 시정조치로직 nmi(non maskable interrupt)통한 시스템 재설정 시도<br/><br/>\
<img src = "./img/WDT_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WDT_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WDT_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WDT_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WDT_5.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 다단계 참고 <br/>\
- Reset > Kick > Timeout > Enable > Timeout > Timeout되면 Trigger Correction Action \
',
  
// 메모리 관리 기법
'<img src = "./img/MemoryAdmin.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 93회 응용 2교시 7번\
',
  
// 할당기법
'# 종류 <br/>\
<img src = "./img/MemoryAllocationOverview.png" style = "max-width:100%; height:auto;">\
',
  
// 단일 분할 할당
'# 개념 : 하나의 상용자만 주기억 장치의 사용자 영역 사용 기법 <br/><br/>\
# 특징 <br/>\
- 초기 운영체제 사용 기법 <br/>\
- 경계 레지스터 사용 : OS(Kernel) / USER <br/>\
# 종류 <br/>\
- Overlay : 프로그램 조각화 후 적층 <br/>\
- Swapping : 프로그램 전체 Swap in (보조->주) / 페이징 기법 발전\
',
  
// 다중 분할 할당
'# 고정 분할 할당 <br/>\
1. 개념 : MFT, 정적 할당 <br/>\
- 주기억장치의 사용자 영역을 여러개의 고정된 크기로 분할하여 사용하는 기법 <br/><br/>\
2. 특징 <br/>\
- 프로그램 전체 주기억장치 위치 <br/>\
- 내부, 외부 단편화 발생 <br/>\
- 초기 다중 프로그래밍 사용 <br/>\
- 실행할 크기 미리 알고 있어야 함 <br/>\
<font color = "red">* 내부 단편화 : 작을때 남은 공간 <br/>\
* 외부 단편화 : 클때 넘친 공간 </font><br/><br/>\
# 가변 분할 할당 <br/>\
1. 개념 : MVT, 동적 할당 <br/>\
- 프로그램을 주기억장치에 적재할 때 필요한 크기로 영역을 분할하는 기법 <br/><br/>\
2. 특징 <br/>\
- 고정분할 기법 단편화 해소 <br/>\
- 주기억 장치 효율적 사용 <br/>\
- 각 영역 사이 단편화 발생 가능\
',
  
// 분산 로딩 기법
'# 가상 기억 장치 : 주기억 장치 내 용량이 부족할 때 사용하지 않은 프로그램을 보조기억장치 내 특별한 영역으로 이동해서 해당 보조기억장치의 일부를 주기억 장치처럼 사용할 수 있는 기법 <br/><br/>\
# 암기 <br/>\
- Paging : 가PO / TPF / 물FO <br/>\
- Segmentation : 가SO / TSBL / 물 BO <br/>\
- Paged Segmentation : 가SPO / STSBL / PTPF / 물FO <br/><br/>\
# Paging <br/>\
<img src = "./img/Paging.png" style = "max-width:100%; height:auto;"><br/>\
# Segment <br/>\
<img src = "./img/Segmentation.png" style = "max-width:100%; height:auto;"><br/>\
# Paged Segmentation <br/>\
- 페이징 기법 : 메모리 관리 편의성, 외부 단편화 제거 <br/>\
- 세그먼트 기법 : 논리적 프로그램 개체 보호, 확장성 자료 구조 처리 <br/>\
<img src = "./img/PagedSegmentation.png" style = "max-width:100%; height:auto;">\
',
  
// 단편화
'# 정의 : Fragmentation <br/>\
- 주기억 장치에서 프로그램을 할당하고 반납하는 과정에서 발생하는 사용되지 않는 작은 조각 공간 <br/><br/>\
# 종류 <br/>\
- 내부 단편화 : 실행 프로그램 < 사용자 영역 <br/>\
- 외부 단편화 : 실행 프로그램 > 사용자 영역 <br/><br/>\
# 해결방법 (Relocation) <br/>\
- 통합 기법 : 인접된 빈 분할 공간 통합 <br/>\
- 압축 기법 : Garbage Collection \
',

// [Virtual Memory]- Mapping 
'# 정의 : 가상주소를 실주소로 변화하는 기법 <br/>\
- 보조기억장치에 저장된 프로그램을 CPU가 실행하기 위해서 보조기억장치의 가상주소를 주기억장치의 사용가능한 실주소로 변환 <br/><br/>\
# 주소형식 <br/>\
- 가상주소 형식 : 페이지 번호(p) | 변위값(d) <br/>\
- 실주소 형식 : 페이지 프레임(p`) | 변위값(d) <br/><br/>\
# Mapping Table <br/>\
- 디스크 페이지 번호 | 페이지 프레임 번호 | 상태비트 <br/>\
- 상태비트 : 주기억장치 존재 여부 <br/>\
- 디스크 페이지 번호 : 보조기억장치의 주소 (= 디스크 주소) <br/>\
- 페이지 프레임 번호 : 주기억장치의 페이지 프레임 주소 <br/><br/>\
# 주소변환기법 <br/>\
(1) CPU가 가상주소에 접근 (페이지번호 | 변위값) <br/>\
(2) Mapping Table 에서 <br/>\
- 페이지번호 -> 디스크 페이지 번호 -> 페이지 프레임 번호 (상태비트 확인) <br/>\
- 페이지 프레임 번호, 변위값 이용 -> 실주소 추출 <br/>\
(3) 패이지 프레임 | 변위값을 이용하여 주기억장치 접근 <br/><br/>\
<img src = "./img/VirtualMemoryMapping.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 그리타 \
',

// Cache Memory
'# 정의 : 일시 저장 기억 장소 / CPU, Main Memory 속도 차이<br/>\
- 고속의 중앙처리장치와 상대적 저속의 주기억 장치 사이의 속도 차이를 보완하기 위하여 데이터와 명령어를 일시적으로 저장하는 기억 장소 <br/><br/>\
# 암기 <br/>\
- 캐슬-메단 <br/>\
- 캐 : 직연집 <br/>\
- 직 : 태슬단 <br/>\
- 연 : 태단 <br/>\
- 집 : 태집단 <br/><br/>\
# 특징 <br/>\
- Locality : 시간,공간 <br/>\
- Mapping : 직접,연관,집합연관 <br/>\
- Coherence : 공유 Cache <br/><br/>\
# 설계 목표 <br/>\
- 시간 최소화 : 액세스 시간, Miss 의한 지연시간 <br/>\
- 일관성 유지 : 주기억장치와 캐시간 일관성 유지 <br/>\
- 오버헤드 최소화<br/>\
- 캐시 적중률 극대화 <br/><br/>\
# 성능지표 <br/>\
- Cache Hit <br/>\
- Cache Miss <br/>\
- Hit Rate : 적중률 = 적중횟수/전체기억장치 액세스 횟수 <br/>\
- Miss Rate : 미스율 = 1 - 적중율 <br/><br/>\
# 사상방식 <br/>\
1. 직접사상 <br/>\
- 메모리 각 블록(단어)를 캐시의 특정 슬롯(라인)에 적재<br/>\
- 캐시와 메모리 1:1 적재 <br/>\
- 장점 : 회로 구현 용이, 맵핑간단, 처리속도 빠름 <br/>\
- 단점 : Miss Rate 높음 <br/>\
- 메모리 주소 : 태그(8)슬롯주소(14)단어(2), 데이터(32) > 캐시 슬단 위치의 태그 비교 후 일치하면 hit 불일치면 Miss(메모리-> 캐시 적재 후 태그변경) <br/>\
<img src = "./img/CacheMemory_1.PNG" style = "max-width:100%; height:auto;"><br/>\
1) 00002 접근시 캐시메모리 Hit, Index(002), Tag(00) <br/>\
2) 00003 접근시 캐시메모리 Miss <br/>\
-> 주기억 장치 검색 <br/>\
-> 캐시메모리 Index 003에 Tag 00 입력, Data 2555 입력 <br/><br/>\
2. 연관사상 <br/>\
- 캐시메모리 데이터 적재시, 데이터 + 데이터의 주기억 장치 주소도 함께 저장 <br/>\
- 1 : N 대응 <br/>\
- 블록이 캐시의 어느라인에나 적재가능 <br/>\
- 장점 : Hit rate 높음 <br/>\
- 단점 : 태그 고속 탐색으로 회로 복잡, 전체 탐색으로 처리 속도 느림 <br/>\
- 메모리 주소 : 태그(22)단어(2),데이터(32) > CPU 요청 주소의 태그부분 비교, 동일 태그 존재시 Hit, 미존재시 Miss(매->캐 적재후 태그 변경) <br/>\
<img src = "./img/CacheMemory_2.PNG" style = "max-width:100%; height:auto;"><br/>\
1) 01002 접근시, 캐시메모리의 주소 일치하면 Hit <br/>\
2) 00002 접근시, 캐시메모리 Miss <br/>\
-> 주기억장치 검색 <br/>\
-> 캐시메모리  Index 003에 Address와 Data 입력 <br/><br/>\
3. 집합연관사상 <br/>\
- 캐시 메모리의 한 Index에 2개 이상의 서로 다른 블록 저장하여 하나의 Set 형성 <br/>\
- 캐시와 메모리 대응 N:1, N-Way associated mapping(보통 4way) <br/>\
- 메모리 주소 : 태그 + 집합주소 + 단어, 데이터(32) > 집합주소 찾아 집합내 태그 탐색 <br/>\
- 장점 : 캐시 적중율 높음 <br/>\
- 단점 : 구현회로 및 구조가 복잡 <br/><br/>\
<img src = "./img/CacheMemory_3.PNG" style = "max-width:100%; height:auto;"><br/>\
1) 01002 접근시 캐시메모리 Hit, Index(002), Tag(01) <br/>\
2) 캐시 Miss의 경우 <br/>\
-> 주기억 장치 검색<br/>\
-> 동일 Index Tag 찾아 Data 입력 <br/><br/>\
# 교체 알고리즘 <br/>\
- LRU : 최근 미사용 <br/>\
- FIFO <br/>\
- LFU : 사용빈도 <br/>\
- Random Optical : 미사용 예상블록, 비현실적 <br/><br/>\
# Miss 원인 <br/>\
- Cold Miss : 데이터 최초 읽을때 발생, Compulsory Miss <br/>\
- Capacity : 캐시크기 증가 <br/>\
- Conflict : 캐시 연관도 증가 <br/>\
- Coherence : MESI, 스누피 프로토콜 <br/><br/>\
<img src = "./img/CacheMemory_4.png" style = "max-width:100%; height:auto;">\
',

// FeRAM
'정의 : 차세대 비휘발성 메모리 / 강유전체 <br/>\
- DRAM과 비슷한 구조를 갖고 있으나 강유전체를 가지고 있어 비휘발성을 가지며 기존 메모리에 비해 빠른 속도, 높은 쓰기/지우기 횟수, 낮은 전력을 사용하는 차세대 비휘발성 메모리',

// Cloud GPU
'# 암기 <br/>\
- API 리모팅 : Lib <br/>\
- 가상화 : Driver <br/>\
- 하드웨어 지원 : Module <br/><br/>\
# 종류 <br/>\
- API 리모팅 : 벤더가 가상화 지원 x <br/>\
<img src = "./img/CloudGPU_API.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 반가상화 및 전 가상화 : GPU 드라이버 조정 <br/>\
<img src = "./img/CloudGPU_Driver.png" style = "max-width:100%; height:auto;"><br/>\
* QEMU (Quick EMUlator) : Hardware 가상화의 기능을 갖춘 오픈소스 CPU 에뮬레이터 <br/><br/>\
- 하드웨어 지원 가상화 : 벤더 가상화 지원 o <br/>\
<img src = "./img/CloudGPU_HW.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 93회 2교시 8변\
',
  
// GPGPU
'# 정의 : 프로그래밍이 가능한 병렬처리장치 <br/>\
- 기존 그래픽 처리만 가능한 GPU에서 CPU처럼 프로그래밍, 행렬, 벡터 연산 및 병렬 처리가 가능한 처리장치 <br/><br/>\
<img src = "./img/GPGPU_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
# GPU 플랫폼 유형 <br/>\
<img src = "./img/GPU_PlatformType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 활용 분야 : 과학(행렬,벡터), 인공지능(자연어처리, 실시간 데이터 관계), Simulation(실시간 통계/예측, 실시간 3D 전자/자기장 분석) <br/><br/>\
* 120회 응용 1교시 5번\
',

// [GPGPU]- CUDA
'# 정의 : 병렬 컴퓨팅 플랫폼 / 모델, 언어, 컴파일러, 라이브러리, 디버거 , 프로파일러 / <br/>\
- Compute Unified Device Architecture <br/>\
- 범용적인 프로그램을 개발할 수 있도록 프로그램 모델, 프로그램 언어, 컴파일러, 라이브러리, 디버거, 프로파일러를 제공하는 병렬 컴퓨팅 플랫폼<br/>\
- 그래픽 처리 장치(GPU)에서 수행하는 병렬 처리 알고리즘을 C 프로그래밍 언어를 비롯한 산업 표준 언어를 사용하여 작성할 수 있도록 하는 GPGPU 기술<br/><br/>\
# 특징 <br/>\
- 컴퓨팅시스템 : CPU(Host), 한개 이상의 GPU(Device)로 구성 <br/>\
- 프로그램 구조 : Host Code(ANSIC), Device Code(ANCI C + Kernel) 통합구성, NVIDIA 컴파일러(nvcc)가 컴파일시 Host, Device 분리, 각각 실행 <br/>\
- Kernel 함수 : Thread 구성<br/>\
- 실행 모드 : 커널 함수 Lunch되면 커널 코드가 Dvice 보내져 실행, Dvice에서 다수 Thread 생성, 모든 Thread 종료시 Grid 종료<br/><br/>\
# 아키텍처 <br/>\
- GPU, TPC : Texture cache 와 Geometri engine <br/>\
- SM : SP 8개, SP제어, 명령어/데이터 캐시 구성<br/>\
- SP : 실수계산 FPU(FP), 정수계산 ALU(int), 데이터를 로드/스코어 LSU(move, cmp)로 구성 <br/><br/>\
# 데이터 처리 과정 <br/>\
- 처리할 데이터 메인메모리에서 GPU로 보냄 <br/>\
- 그래픽 카드 메모리공간 할당<br/>\
- PC의 입력데이터를 그래픽 카드 메모리로 복사<br/>\
- CPU에서 GPU에 명령 실행 <br/>\
- GPU성능 이용 Core에서 병렬처리 <br/>\
- 처리결과를 그래픽카드 메모리에서 PC 메모리로 복사<br/><br/>\
# 활용분야 <br/>\
- Edge device : Medical, 자율주행 <br/><br/>\
<img src = "./img/CA_CUDA.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CUDA_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CUDA_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CUDA_3.png" style = "max-width:100%; height:auto;">\
',

// Fabric Computing 
'# 정의 : 독립 모듈 형태 기술 / CPU, MM, NPU <br/>\
- 중앙처리장치(CPU), 메모리, 네트워크 프로세서(NPU)등 IT 시스템의 모든 구성요소를 독립 모듈 형태로 만들어 환경 변화에 빠르고 쉽게 대응 돕는 기술 <br/><br/>\
# 특징 : 모듈화, 통합화, 단순화, 공간제약 극복 <br/><br/>\
# 분류 <br/>\
- 패브릭 기반 컴퓨팅(FBC) : 패브릭 리소스 블록 모듈을 조합하여 제공할 수 있는 모듈화된 형태의 컴퓨팅 시스템 <br/>\
- 패브릭 가능 컴퓨팅(FEC) : FBC로 넘어가는 중간단계의 컴퓨터 형태<br/>\
(1) 정적형태 : HW구조 기존동일, SW적 자원배분 <br/>\
(2) 동적 형태 : HW 수준의 분할과 통합 <br/>\
- 패브릭 기반 인프라(FBI) : 데이터센터의 인프라 관리 방법, 자원풀을 중심으로 워크로드에 따라 필요한 컴퓨팅 자원이 구성/재구성 관리 방식 <br/><br/>\
# 기술 <br/>\
1. 인프라 가상화 및 관리 <br/>\
- Manage SW <br/>\
- Server Profile : 속성 <br/>\
- Numa Connect : 저비용 메인프레인급 서버 구축 기술 <br/>\
- vSMP : 병럴컴 <br/>\
2. 연결망 기술 <br/>\
- FCoE : LAN, SAN, HPC 통합<br/>\
- HPC : 슈퍼컴 급 클러스터링 <br/>\
- QPI(Quick Path Interconnection) : 프로세서간, 외부간 접속 위한 인텔의 버스 <br/>\
- Hyper Transport : 프로세서와 칩셋 간의 연결망 일종 <br/>\
- PCIe : IO 장치에 대한 연결망으로 널리 사용되는 IO 버스 규격\
',

// Quantum Computing 
'# 양자 : 물리량 최소 단위<br/>\
- 물리학의 기본 이론인 영자 역학에서 유래한 것으로 물질의 입자성과 파동성 특성을 기술하는 물리량의 최소 단위 <br/><br/>\
# 양자 컴퓨터 : 양자역학 연산 장치 / 상태중첩, 얽힘 <br/>\
- 양자역학에서 예측하는 가장 특이한 특성인 상태중첩(Superposition)과 얽힘(Entanglement)을 이용하여 효율적으로 수행하는 기계장치 <br/><br/>\
# 양자 컴퓨팅 : 큐비트 단위 컴퓨팅 기법 / 상태중첩, 얽힘 <br/>\
- 얽힘이나 중첩등의 양자역학적 현상을 이용하여 큐비트 단위로 자료를 처리하는 컴퓨팅 기법 <br/><br/>\
# 암기 : 원리-초양중복얽병순 <br/><br/>\
# 원리 <br/>\
- 초전도체 나노 소자 : 양자 표현 비트, Qubit 이용 정보 저장 처리 <br/>\
- 양자 비트 : 2Qubit로 00,01,10,11 4가지 경우 한번에 처리, 병렬성 <br/>\
- 중첩 : 원자핵스핀, 관측전 2가지 상태 동시, 관측후 방향 확정 <br/>\
- 복제불가원리 : 관측시 상태 바뀜 <br/>\
- 얽힘 : 한번 연산 명령으로 모든 양자 상 변화, Qubit간 상호작용 <br/>\
- 양자 병렬성 : 양자 얽힘 이용한 고유정보 처리 능력 <br/>\
- 순간이동 : 양자 얽힘 이용 특성 <br/><br/>\
# 알고리즘 <br/>\
- Sho\'s Algorithm : QTF(Quantum Fourier Transform) 이용 함수 주기 구하는 알고리즘, 단시간 소인수 분해 가능, RSA 더이상 사용 X <br/>\
- Grover Algorithm : 소인수 분해하지 않고 1부터 대입해도 몇분이면 해독 가능 <br/><br/>\
# 구조 <br/>\
- Physical Device : 양자정보소자 구현/제어 물리계층 <br/>\
- Computation Model : 물리적 계층구조를 논리적 계층구조 변경 위한 오류 정보, 결함허용 방식 적용 <br/>\
- System Hardware Primitives : 논리적 빌딩블록 이용 논리적 양자 컴퓨팅 조직화  <br/>\
- System Software Primitives : 컴파일러등 포함 <br/><br/>\
# 동향 <br/>\
- D-WAVE System : 성능 512 큐비트 높인 양자 컴퓨터 D-Waver 2선고임 <br/>\
- Google, NSA : 인공지능과 머신러닝 개발에 활용 <br/>\
- 양자암호통신 : 유럽, 미국 일본, 중극 등 활발한 연구 진행 <br/><br/>\
<img src = "./img/QuantumComputing.png" style = "max-width:100%; height:auto;">\
',

// Tiny OS 
'# 정의 : 임베디드 초소형 운영체제 / Smart Dust Project / CBD <br/>\
- 스마트 더스트(Smart Dust)프로젝트에 사용하기 위해 제작한 컴포넌트 기반 임베디드 장치용 초소형 운영체제 <br/>\
- UC 버클리에서 개발된 센서 네트워크를 위한 무료 운영 체계<br/>\
- HW, MAC 프로토콜, NW프로토콜, 센서 I/F를 완전 공개한 작은 사이즈의 OS <br/><br/>\
# 암기 <br/>\
- 구성 <br/>\
1) HW : 와센드라이버 <br/>\
2) SW : 오응 <br/><br/>\
# 용도 : 저전력, 저용량 시스템, 임베디드 환경에서 센서 NW구성 <br/><br/>\
# 구성 <br/>\
1. HW <br/>\
- Wireless Driver : RF 무선 통신 <br/>\
- Sensor Driver <br/><br/>\
2. SW <br/>\
- OS Kernel : 센서처리, 무선통신처리 스케줄러 <br/>\
- 응용 SW : 컴포넌트기반 동작\
',

// NanoQplus
'# 정의 : 임베디드 초소형 운영체제 / ETRI / IoT, M2M, 무선 센서 네트워크 /<br/>\
- ETRI에서 개발한 무선 센서 네트워크, IOT, M2M등 분야에서 사용되는 임베디드 장치용 초소형 운영체제 <br/><br/>\
# 암기 <br/>\
- 구성 : 하통커유 <br/><br/>\
# 특징 <br/>\
- 멀티쓰레드 <br/>\
- 선점형 지원 <br/>\
- 저전력 기반 <br/>\
- 선택적 커널모듈(저사향 고려, 커널 모듈 선택) <br/>\
- C언어 기반 <br/><br/>\
# 구성 <br/>\
- Hardware Abstraction Layer : HAL-센서드라이버탑재 <br/>\
- 통신프로토콜스택 : Ad-hoc NW 유사, 수백 노드간 P2P통신 <br/>\
- 커널 : 멀티쓰레드 지원, 우선순위 기반 RR, 세마포어, 메시지 큐, 저전력 관리 <br/>\
- User API : 센서 노드에 사용되는 HW 제어, 추상화하여 사용자에 API형태 제공 \
',

// NAND Flash Memory
'# 정의 : 플래시 메모리 / 직렬 배열 <br/>\
- 반도체의 셀이 직렬로 배열되어 있는 플래시 메모리의 한 종류 <br/><br/>\
# 특징 <br/>\
- 용량 늘리기 쉬움 <br/>\
- 셀의 주소를 기억할 필요가 없음 <br/>\
- 소형화, 대용량화 -> 모바일 및 전자제품 저장기기로 사용 <br/>\
- 속도 느림 (NOR Flash Memory는 속도 빠름) <br/><br/>\
<img src = "./img/NANDFlash.png" style = "max-width:100%; height:auto;">\
',
  
// CPU
'<img src = "./img/CPU.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 2교시 8번\
',
  
// Major State
'# 정의 : Fetch, Indirect, Execute, Interrupt <br/>\
- 현재 CPU가 무엇을 하고 있는가를 나타내는 상태 <br/><br/>\
<img src = "./img/MajorState.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 단계 <br/>\
- Fetch : 명령어 해독 <br/>\
<img src = "./img/FetchCycle.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Indirect : Fetch 단계 간접 주소일 경우 수행 <br/>\
<img src = "./img/IndirectCycle.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Execute : 명령 실행 <br/>\
<img src = "./img/ExecuteCycle.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Interrupt : PC 저장, 제어순서 옮김 <br/>\
<img src = "./img/InterruptCycle.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/MicroOperation_1.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 2교시 8번\
',


// CPU Scheduling
'# 정의 : Process CPU 할당 결정 작업<br/>\
- Process 작업 수행을 위해 언제, 어느 Process에 CPU를 할당할 것인지를 결정하는 작업 <br/><br/>\
# 평가기준 <br/>\
1) CPU 사용률(CPU Utilization) : 전체 시간중 CPU 작업 처리시간 비중<br/>\
2) 처리량(Throughput) : 단위 시간당 처리하는 프로세스 개수 <br/>\
3) 응답시간(Response Time) : 대화식시스템에서 요청후 응답까지 시간 <br/>\
4) 대기시간(Wating TIme) : 프로세스가 준비 큐 내에서 대기하는 시간<br/>\
5) 반환시간(Turnarround Time) : 프로세스가 시작해서 끝날때까지 시간<br/><br/>\
<img src = "./img/CPU_Scheduling_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CPU_Scheduling_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 비교 <br/>\
<img src = "./img/CPUSchedulingCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 4단락에 평가기준 관련 내용 기재 : 평균 대기시간, 평균 반환시간 꼭 쓸것<br/><br/>\
* 라이지움 87회 관리 4교시 6번\
',

// [CPU Scheduling]- 비선점 스케줄링
'[FCFS] : 프로세스들이 대기 큐에 도착한 순서에 따라 CPU를 할당 받는 비선점 CPU 스케줄링 기법 <br/><br/>\
[SJF] : 준비큐에서 기다리는 작업중 수행시간이 가장 짧다고 판단되는 것을 가장 먼저 수행하는 비선점 CPU 스케줄링 기법 <br/><br/>\
# 암기 : 자원점유도, 도서종반, 평반 <br/><br/>\
<img src = "./img/SJF_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SJF_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
[HRN] : Highest Response Ratio Next <br/><br/>\
# 정의 : SJF의 약점인 긴 작업과 짧은 작업간의 불평등을 보안한 비선점 CPU 스케줄링 Aging 기법<br/><br/>\
# 우선순위 = (대기시간 + 서비스시간) / 서비스 시간, 큰값 선 실행 <br/><br/>\
<img src = "./img/HRN_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/HRN_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 결론 : D > C > B > A 순으로 우선순위가 높음 <br/><br/>\
[우선순위] : 우선순위를 할당해 우선순위가 높은 순서대로 처리하는 비선점 CPU 스케줄링 기법<br/><br/>\
[기한부] : Deadline Scheduling <br/><br/>\
# 정의 : 프로세스가 주어진 시간내에 작업이 끝나게 계획하는 비선점 CPU 스케줄링 기법 <br/><br/>\
# 특징 <br/>\
- 사용자는 미리 필요 자원 정확히 제시 필요<br/>\
- 시스템은 다른 사용자 서비스 시간 최소 희생하면서 작업<br/>\
- 자원의 안배 주의<br/>\
- 다중 프로세스 경우 매우 복잡<br/>\
- 오버헤드 심각\
',

// [CPU Scheduling]- 선점 스케줄링
'[RR]<br/><br/>\
# 정의 : FCFS 방식으로 프로세스가 할당받은 시간동안만 동작하고 우선순위를 다음 프로세스에게 넘기는 스케줄링 기법 <br/><br/>\
<img src = "./img/RR_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/RR_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/RR_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
[SRT]<br/><br/>\
# 정의 : 준비 큐에 있는 프로세스들 중에서 가장 짧은 시간이 소요된다고 판단되는 프로세스를 먼저 수행 <br/><br/>\
<img src = "./img/SRT_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SRT_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
[MLQ, MLFQ]<br/><br/>\
# Multi Level Queue : 작업들을 여러 종류의 그룹으로 나누어 여러개의 큐를 이용하는 스케줄링 기법<br/>\
# 특징 : 큐별 동일 시간 부여 <br/>\
<img src = "./img/MLQ.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Multi Level Feedback Queue : 작업들을 여러 종류의 그룹으로 나누어 여러개의 큐를 이용하는 스케줄링 기법 <br/>\
# 특징 : 큐별 차등 시간 부여 <br/>\
<img src = "./img/MLFQ.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// [CPU Scheduling]- Process Aging 
'# Process Aging : 대기시간 오래된 프로세스 해결 기법 <br/>\
- Starvation을 방지하기 위해서 대기 시간이 오래된 프로세스에 대해 Priority를 높여주어 처리 보장하는 CPU 스케줄링 기법 <br/><br/>\
# 기아현상 : 시스템 부하가 많아서 낮은 등급에 있는 준비 큐에 있는 프로세스가 무한정 기다리는 현상 <br/><br/>\
# 기아 원인 <br/>\
- 비선점형 : 종료까지 CPU 점유<br/>\
- 선점형 : 운영체제 인터럽트의해 준비큐 이동 <br/>\
- 기아현상 : 할당우선 순위 높은 작업 지속 추가 <br/><br/>\
# 기아 유발 <br/>\
- 비선점형 : SJF, Pririty <br/>\
- 선점형 : SRT, MLQ<br/><br/>\
# 기아 미유발 <br/>\
- 비선점형 : HRN, Priority_Aging(오래 대기 프로세스 우선순위 증가), FIFO<br/>\
- 선점형 : MLFQ(오래 실행 프로세스 하위큐 이동) + Aging, RR <br/><br/>\
* 기아 미유발 알고리즘 사용 or 기존 알고리즘에 Aging 수행 \
',
  
// RM
'# 개념 : Rate-Monotonic Scheduling <br/>\
- 독립적인 개별 프로세스 주기를 기준으로 주기가 짧을 수록 높은 우선순위를 부여하는 정적 방식의 스케줄링 기법 <br/><br/>\
# 절차 <br/>\
- Task 진입시 우선순위 지정 <br/>\
- 짧은 Task 순으로 우선순위 부여 <br/>\
- Task 마감 시간 = 동작 주기 <br/><br/>\
# 충분조건 <br/>\
<img src = "./img/RM_Condition.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 예시 <br/>\
<img src = "./img/RM_Example.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 응용 4교시 6번\
',
  
// EDF
'# 정의 : Earliest Deadline First Scheduling <br/>\
- 실시간 운영체제에서 사용되는 동적 CPU 스케줄링 알고리즘중 하나 <br/><br/>\
# 예시 <br/>\
<img src = "./img/EDF_Example.png" style = "max-width:100%; height:auto;">\
',

// 가상 메모리 페이지 교체 알고리즘
'# 정의 : 미사용 페이지 교체 알고리즘 <br/>\
- 페이지 방식을 취하는 가상메모리에서 페이지 부재가 발생하면 메인 메모리에 있으면서 사용되지 않는 페이지를 제거하고 새로운 페이지로 교체하는 알고리즘 <br/><br/>\
# 암기 <br/>\
- 종류 : RFOLNSCP <br/>\
- 이차빵킬 : 이차기회, 참조비트, 빵(0)쏴서 킬(교체)<br/><br/>\
# 특징 <br/>\
- 페이지 크기에 따른 Trade-Off : 크면 낭비, 작으면 페이지수 증가로 포인트 증대<br/>\
- Belady\'s Anomaly : FIFO 이상 현상 <br/><br/>\
# 종류 : RFOLNSCP <br/>\
- Random page replacement<br/>\
- FIFO(First In First Out) <br/>\
- OPT(Optimal replacement(최소부재율)) <br/>\
- LRU(Least Recently Used Page Replacement) : 페이지마다 TimeStamp 사용 or 페이지번호 구분되는 스택 유지, PageFault 발생시 Bottom 페이지 교체 -> 시간적 Locality 고려 FIFO의 Locality 미고려 단점 보완, Thrashing 해결, Time-Stamping 오버헤드, 구현 H/W 복잡9별도의 계수기, 구현회로가 필요, 구현 복잡)<br/>\
- NUR(Not Used Recently) : 참조비트, 변형비트,I/O부하 감소 목적<br/>\
- SCR(Second Chance Replacement) : FIFO 보완, 페이지 참조 비트 이용, 프레임들 원형 버퍼(큐) 구성 <br/>\
- Counting Algorithm(LFU(Least Frequently Used - 에이지 정책 사용 보완), MFU(Most Frequentyly Use - 최근 반입페이지 우선권))<br/>\
- Page Buffer Algorithm : 교체 대상 페이지 삭제전 가용 Pool에 보관, 페이지 교체 알고리즘 약점 보완, 타 알고리즘의 부가로 사용 <br/><br/>\
<img src = "./img/페이지교체알고리즘_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/페이지교체알고리즘_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/페이지교체알고리즘_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 이차기회 : 모든 페이지으 ㅣ참조비트가 1인 경우 전체 2차 기회 부여로 성능 저하 <br/><br/>\
<img src = "./img/페이지교체알고리즘_4.png" style = "max-width:100%; height:auto;">\
',

// [가상 메모리 페이지 교체 알고리즘]- 벨라디 변이
'# 정의 : 많은 수 페이지 할당 -> 페이지 부재 많이 발생 <br/>\
- FIFO Anomaly <br/>\
- FIFO 페이지 교체 기법 하에서 프로세스에 더 많은 수의 페이지를 할당할 경우 오히려 더 많은 페이지 부재가 발생하는 이상현상 즉, 프레임이 3개일 때보다 프레임이 4개일 때 페이지 부재가 많이 발생하는 현상<br/><br/>\
# 암기 <br/>\
- 12301401234 -34 <br/>\
- 참프부 <br/><br/>\
# 대응 방법 : 페이지 교체 정책(OPT, LRU), 최적화 원칙 설계(Locality, PFF)<br/><br/>\
<img src = "./img/Belady_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Belady_2.png" style = "max-width:100%; height:auto;">\
',

// [가상 메모리 페이지 교체 알고리즘]- 스레싱
'# 정의 : 페이지 교체 시간 과다 현상<br/>\
- 멀티프로세싱, 멀티프로그래밍의 역기능으로 페이지 부재가 자주 일어나 프로세스가 보다 페이지 교체에 보내는 시간이 더 많게 되는 현상 <br/><br/>\
# 암기 <br/>\
- 원인 : 리교멀<br/>\
- 해결 : 우워피다 <br/><br/>\
# 원인 <br/>\
- 리소스 부족 <br/>\
- 부적절한 페이지 교체 정책 <br/>\
- 과도한 멀티 프로세싱 <br/><br/>\
# 해결방법 <br/>\
- 우선순위 교환 알고리즘 <br/>\
- 작업집합(Working-Set)모델 <br/>\
- PFF(Page Fault Frequency) : 페이지 부재율 예측, 상한 넘으면 프레임 더 할당, 낮으면 일부 회수 <br/>\
- 다중 프로그래밍 수 제한<br/>\
- 프로그래밍 기법 : 적절한 자료구조 <br/><br/>\
# 효과적인 Thrashing 설정 고려요소 <br/>\
- Localicy<br/>\
- 전역교체/지역교체<br/>\
- Pre-paging<br/>\
- Page Size<br/>\
- Inverted Page Table<br/>\
- 프로그램 구조<br/>\
- 입출력 상호 잠금 <br/><br/>\
<img src = "./img/Thrashing_1.jpg" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/Thrashing_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/Thrashing_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/Thrashing_4.png" style = "max-width:100%; hegiht:auto;">\
',

// Disk 스케줄링
'# 정의 : 디스크 헤드 최적 경로 결정 기법 <br/>\
- 사용할 데이터가 디스크 상의 여러 곳에 저장되어 있을 경우 데이터를 액세스하기 위해 디스크 헤드가 움직이는 최적의 경로를 결정하는 기법<br/><br/>\
# 목표 <br/>\
- 디스크 접근시간 최적화(암의 이동 최소화) <br/>\
- Throughput의 최대화<br/>\
- 응답시간 최소화 <br/>\
- 응답시간 편차 최소화 fairness <br/><br/>\
# Disk 유형 <br/>\
1. 이동디스크 <br/>\
- 탐색시간 = 회전지연시간 + 전송시간<br/>\
- 탐색시간 >> 회전 지연시간 > 전송시간 <br/><br/>\
2. 고정디스크<br/>\
- 회전지연시간 + 전송시간 <br/>\
- 회전지연시간 > 전송시간 <br/><br/>\
# Disk I/O 시간 구성 <br/>\
- 탐색시간 : 헤드가 지정 트랙 도달 시간 <br/>\
- 회전지연 시간 : 원하는 섹터 이동 시간 <br/>\
- 전송시간 : Data 전송 소요 시간 <br/><br/>\
# 비교 <br/>\
- 평균 Seek Time 효율성 : SSTF > SCAN > C-SCAN-FCFS <br/>\
- Fairness 효율성 : 좌측 반대 <br/>\
- Disk Heavy Load : C-SCAN > SCAN > SSTF <br/><br/>\
# 이동 디스크 적합 유형 <br/>\
- FCFS(First Come First Served) <br/>\
- SSTF(Shortest Seek Time First) <br/>\
- SCAN <br/>\
- C-SCAN(Circular SCAN) <br/>\
- Look <br/>\
- C-Look <br/><br/>\
<img src = "./img/DISK_S.png" style = "max-width:100%; hegiht:auto;">\
',

// [Disk 스케줄링]- 알고리즘 유형
'# 최소 탐색 우선 스케줄링(SSTF-Shortest Seek Time First Scheduling) : 현재 헤드에서 가장 가까운 트랙에 해당하는 요청을 우선적으로 처리하는 스케줄링 기법 <br/>\
- 기아현상 <br/>\
- 응답시간 예측 난해(탐색편차 존재) <br/>\
- 검색오버헤드 : 현재 헤드위치에서 가장 까까운 트랙 위치 검색 시간 소요 <br/>\
- 에션바흐/엘리베이터 알고리즘으로 보완 필요 <br/><br/>\
<img src = "./img/DISK_A_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 엘리베이터 알고리즘 : 기본적으로 SSTF와 같은 방법으로 운영되지만, 한쪽 방향으로 진행하고, 한쪽 끝에 도달하면 반대방향으로 진행하는 SCAN 기반 기법 <br/>\
- 장점 : 탐색시간 개선, 기아현상 해결 <br/>\
- 단점 : 방향비트 필요, 복잡한 알고리즘(과부하 처리 위한 메커니즘 요구), 에션바흐 기법 통한 보안 필요 <br/><br/>\
<img src = "./img/DISK_A_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/DISK_A_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 에션바흐 기법 : 탐색시간은 물론 회전 지연시간 최적화를 목적으로, 헤드는 C-SCAN과 같이 처리 & 요청 무관하게 트랙 한 바퀴 회전할 동안 재배열하여 처리하는 기법 <br/>\
- 장점 : 회전지연시간 최적화 (by 대화식 프로세스에 회전 최적화), 균등한 처리(C-SCAN기반)<br/>\
- 단점 : 재배열 처리 필요, 불필요 이도 ㅇ제거 목적의 C-Look등 존재<br/><br/>\
<img src = "./img/DISK_A_4.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/DISK_A_5.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/DISK_A_6.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# SLTF(Shortest Latency Time First) : 회전시간 최적화 기법, 모든 요청은 디스크 주위의 섹터 위치에 따라 대기행렬에 정렬되고 가장 가까운 섹터가 우선적으로 서비스 <br/><br/>\
# Sector Queuing : 고정헤드 디스크 알고리즘, Sector 번호에 의한 회전시간만 고려\
',

// 리소스 공유방법 동기화방법
'# 리소스 공유방법 : N개의 Task와 M개의 Resource를 공유할 때, 세마포어 초기값을 N개로 설정하는 방법 <br/><br/>\
# Task간 동기화 방법 : 여러개의 Task가 공유 데이터에 접근하는 경우, 동일한 값을 얻을 수 있도록 맞추는 작업 <br/><br/><br/>\
# 시스템의 요구사항별 효율적인 동기화 기법 제안 <br/>\
- 락 부담 적어야하는 경우, 락 사용시간 짧은 경우 => 스핀락 <br/>\
- 인터럽트 컨텍스트에서 락 사용하는 경우 => 반드시 스핀락 <br/>\
- 락 사용시간 긴 경우 => 뮤텍스 <br/>\
- 락 얻은 상태에서 휴먼 필요한 경우 => 반드시 뮤텍스 <br/><br/>\
<img src = "./img/동기화기법.png" style = "max-width:100%; hegiht:auto;">\
',

// 상호배제 
'# 정의 : 시스템의 어떠한 자원을 한 시점에서 한 개의 프로세스만이 임계구역을 사용하는 동기화 기법 <br/><br/>\
# 요구조건 <br/>\
- 임계규칙 : 1개 프로세스만 <br/>\
- 유한대기 : 무한정 대기 금지 <br/>\
- 인터럽트 금지 : 수행도중 진입 금지 <br/>\
- 동일처리 : 원칙에 의한 처리 <br/><br/>\
# 구성요소 <br/>\
- 잠금 <br/>\
- 인터럽트 봉쇄 <br/>\
- 엄격한 교대 : 자원 체킹<br/><br/>\
- 바쁜대기 <br/>\
- 잠자기 깨우기 : Sleep(s), Wait(s) -> P(s), V(s) <br/><br/>\
* 구현기법 <br/>\
- 데커 (최초방법, 다음 무조건 나) <br/>\
- 피터슨 (다음 너 먼저) <br/>\
- 램포트베이커리 (분산처리환경, 번호표) <br/><br/>\
<img src = "./img/상호배제.png" style = "max-width:100%; height:auto;">\
',

// 세마포어, 모니터
'# 세마포어 : 운영체계 또는 프로그램 작성내에서 상호배제를 지원하는 매커니즘 <br/><br/>\
# 모니터 : Concurrent-Pascal, JAVA등 프로그래밍 언어 수준에서 세마포어처럼 상호배제 기능을 제공하는 소프트웨어 모듈 <br/><br/>\
<img src = "./img/Monitor_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SemaphoreMonitor.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 1교시 1번\
',

// Swap Test & Set()
'# Swap() : 2개 변수교환을 하드웨어적으로 원자적 실행 보장 <br/><br/>\
# Test & Set() : 단일 변수 변경 및 검사를 원자적으로 보장 <br/><br/>\
<img src = "./img/STS_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/STS_2.png" style = "max-width:100%; height:auto;">\
',

// 데커 피터슨 램포드
'<img src = "./img/DPL_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DPL_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DPL_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DPL_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DPL_5.png" style = "max-width:100%; height:auto;">\
',

// [리소스 공유방법 동기화방법]- 운영체제의 크리티컬섹션
'# 정의 : 공유 자원 동기화 오브젝트 <br/>\
- 둘 이상의 Threads와 관련하여 공유된 자원에 대해 동기화를 위해 사용되는 오브젝트(SW 프로그래밍 기법) <br/><br/>\
# 특징 <br/>\
- 유저모드 : 유저객체, 가볍고 속도 빠름 <br/>\
- 한 프로세스 내의 쓰레드 사이에만 동기화 가능 <br/>\
- 유저레벨 동기화 기법중 유일하게 커널객체 사용 X <br/>\
- 내부구조 단순 <br/>\
- 동기화 처리 속도 ↑ <br/>\
- 동일 Pro내 사용 <br/>\
- Critical Section 타입 정의 <br/><br/>\
# 구현 방법 <br/>\
- Win32API : InitializeCS, DeleteCS, EnterCS, LeaveCS, TryEnterCS <br/>\
- MFC Class : g_CS.Lock(), g_CS.Unlock() -> atxmt.h 적용 <br/><br/>\
* 예시코드가 있으면 가점 <br/>\
* 크리티컬 섹션, 뮤텍스, 세마포어 비교시 가점 \
',

// [리소스 공유방법 동기화방법]- 뮤텍스
'# 정의 : 커널모드 동기화 객체 / 프로세스 스레드 사이 동기화 기법<br/>\
- 다중 프로세스들의 공유 리소스에 대한 접근을 조율하기 위해 Locking과 Unlocking을 사용하는 상호배제기법 <br/><br/>\
# 특징<br/>\
- 락 사용기간이 긴 경우 유용 <br/>\
- 락을 얻은 상태에서 수면(sleep)할 필요가 있는 경우 뮤텍스 사용 <br/>\
- 프로세스 범위 가지는 객체 <br/>\
- lock / unlock 상태 <br/>\
<img src = "./img/Mutex.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 뮤텍스와 세마포어 차이 <br/>\
<img src = "./img/SemaphoreMutex.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 1교시 12번\
',

// [리소스 공유방법 동기화방법]- 스핀락
'# 정의 : 프로세스가 사용하려는 Lock을 획득 할 때까지 명령어 루프를 돌며 계속 시도하는 Locking 기법 <br/><br/>\
# 특징 <br/>\
- SMP 시스템 : SMP 시스템 위한 락으로 단일 프로세스에서는 사용 안함 <br/>\
- Busy Wating : 바쁜 대기의 한 종류의 동기화 기법 <br/>\
- 짧은 크리티컬 섹션 유용 : 문맥교환 소요비용을 줄이는 대신 루프를 돌며 진입가능 여부 체크 <br/>\
* 바쁜대기(Busy Waiting, Spinning) : 자원에 대해 무한 루프를 돌면서 조건문 체크하는 방식 <br/><br/>\
# 주요함수 <br/>\
- SPIN_LOCK() : LOCK 획득 (인터럽트 x) <br/>\
- SPIN_UNLOCK() : LOCK 반환 <br/>\
- SPIN_IS_LOCKED() : 0, 1 획득 <br/>\
- SPIN_LOCK_IRQ : LOCK 획득 (인터럽트 o) <br/><br/>\
# 수행절차 <br/>\
<img src = "./img/SpinLockProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 스핀락, 세마포어 비교 <br/>\
<img src = "./img/SpinLockSemaphore.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 3교시 4번\
',

// 교착상태
'# LiveLock : 무한 대기 상태 / 양보 <br/>\
- 둘 이상의 프로세스가 상대 프로세스의 자원 요구에 서로 양보하며 무한 대기하는 상태 <br/><br/>\
# DeadLock : 무한 대기 상태 / 점유 <br/>\
- 둘 이상의 프로세스가 자원을 소유한 상태에서 상호간의 요청하는 무한 대기 상태 <br/><br/>\
# 발생 원인 <br/>\
<img src = "./img/교착상태.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 비교 <br/>\
<img src = "./img/교착상태_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# DeadLock 발생조건 (상P비자)<br/>\
- 상호배제 : p -> 자원 <br/>\
- 비선점 : 자원 -> p <br/>\
- 점유와 대기 : 자원 -> p -> 자원 <br/>\
- 환형대기 : 자원 -> p -> 자원 -> p <br/><br/>\
# 해결기법 <br/>\
1. Live lock <br/>\
- Interrupt Coalescing : 인위적 인터럽트 <br/><br/>\
2. Dead lock <br/>\
- 예방 : 상호배제 제외 나머지 조건 위배 / 자원 해제 후 요청 <br/>\
- 회피 : 안전한 상태 유지할 수 있는 요구만 수락 / 은행가 알고리즘 <br/>\
- 발견 : 시스템 감시 알고리즘 통한 검사 / 자원할당 그래프 <br/>\
- 회복 : 순차적 Kill / Process Kill, 자원선점 <br/><br/>\
* 아이리포 23회 1교시 2번<br/>\
* 라이지움 86회 1교시 2번\
',
  
// 은행가 알고리즘
'# 정의 : 교착상태 해결 방안중 회피기법의 중요한 알고리즘 <br/>\
- 안전상태와 불안전 상태로 구분하고 운영체제는 안전상태를 유지할 수 있는 요구만을 수락하고 불안전 상태를 야기하는 요구는 거절 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/BankersAlgorithmAttribute.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 코드 <br/>\
<img src = "./img/BankersAlgorithmPseudoCode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 흐름도 <br/>\
<img src = "./img/BankersAlgorithmFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 실행순서 <br/>\
1. 현재 사용 가능한 리소스 산정 : Available <br/>\
2. 추가 요구량 상정 : Need Table<br/>\
3. 수행 가능 프로세스 검사 : Available / Need 비교 <br/>\
4. 프로세스 순서 산출 <br/><br/>\
# Understand <br/>\
<img src = "./img/BangkerAlgorithmUnderstand.png" style = "max-width:100%; height:auto;">\
',

// 자원할당 그래프
'# 정의 : 교착상태 탐지 <br/>\
- 상태(Deadlock) 탐지를 목적으로 프로세스와 자원 간의 관계를 간선(Node)과 정점(Vertex)으로 표현한 그래프 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/ResourceAllocationGraph.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 교착상태 판별 <br/>\
<img src = "./img/ResourceAllocationGraphDeadlockTest.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 판별 사례 <br/>\
<img src = "./img/ResourceAllocationGraphDeadlockExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 응용 1교시 14번\
',

// RAID
'# 정의 : 데이터의 가용성 및 성능 향상을 위한 디스크 중복구조 <br/>\
- Redundant Array of Independent Disks <br/>\
- 다수의 디스크에 데이터를 중복으로 결합하여 가용성과 성능을 향상시키는 저장장치 기술 <br/><br/>\
# 암기 <br/>\
<img src = "./img/BasicRAID.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 상세 <br/>\
<img src = "./img/RAID_Detail1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/RAID_Detail2.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/RAID_Detail3.png" style = "max-width:100%; height:auto;"><br/>\
',
  
// In-Memory Computing 
'# 정의 : 어플리케이션을 구동하는 컴퓨터의 메인 메모리에 DB 데이터와 같은 주요 데이터를 저장하고 처리하는 컴퓨팅 기술 <br/><br/>\
# 특징 : 메인메모리 DB구축, 직접 저장 관리, 디스크 관리 최소화 <br/><br/>\
# 기술요소 <br/>\
<img src = "./img/InMemoryComputingTech.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 4교시 6번\
',
  
// In-Memory Database
'# 정의 : 익스트림 트랜잭션의 고성능 처리 지원 <br/>\
- 데이터를 저장하는 주된 공간이 디스크가 아닌 메인 메모리인 데이터베이스 <br/>\
- 즉각적인 응답시간과 높은 처리량을 요구하는 환경에서 사용 <br/>\
<img src = "./img/InMemoryDB.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 데이터 모델 : 테이블, 빈 미리 정의 x / 유연성 <br/>\
- 비공유 구조 : 용량에 대한 확장성 / 겹치지 않게 분할 <br/>\
- 데이터 분할 : 데이터 자체 분할 / 라운드로빈, 키-값 기반 해싱 <br/><br/>\
# 적용방법 <br/>\
- 응용 분석 : 인메모리 가용 App / ROI 확인 <br/>\
- Data 확인 : Data 용량 예측치 확인 / 미래 사용량 <br/>\
- 압축 성능 : 압축 비율 확인 / 압축 성능 예측 <br/>\
- Database 구축 : 인메모리 데이터베이스 구축 / Project 기반 <br/>\
- Database 적용 : Data 성능, DBMS 모니터링 / 성능 모니터링 <br/><br/>\
* 아이리포 23회 1교시 12번\
',  
);
