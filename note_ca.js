var question = question.concat(
'OS',
'[OS]- Disk 할당 기법',
'[OS]- Dual Mode',
'Unix OS',
'[Unix OS]- File System',
'[Unix OS]- Permission',
'[Unix OS]- Linux ID',
'[Unix OS]- Super Block',
'[Unix OS]- i-node Block',
'[Unix OS]- I/O Model',
'[Unix OS][Synchronous I/O]- Blocking I/O',
'[Unix OS][Synchronous I/O]- NonBlocking I/O',
'[Unix OS][Synchronous I/O]- I/O Multiplexing',
'[Unix OS]- Asynchronous I/O',
'IO 장치 제어 방식',
'[IO 장치 제어][CPU]- Programmed I/O',
'[IO 장치 제어][CPU]- Interrupt Driven I/O',
'[IO 장치 제어]- DMA',
'Loader',
'Dispatcher',
'[Dispatcher]- 운영체제 문맥, 문맥교환',
'Interrupt',
'[Interrupt]- OS 역할',
'[Interrupt]- Maskable Interrupt',
'[Interrupt]- Non Maskable Interrupt',
'[Interrupt]- Vectored Interrupt',
'Memory 영역',
'Memory Leak',
'OS Scheduler',
'Process',
'PCB',
'Thread',
'Buffering / Spooling',
'결함허용 시스템(FTS:Fault Tolerant System)',
'고가용성(High Availability)',
'우선순위 역전현상',
'WDT',
'반도체 종류',
'메모리 관리 기법',
'[메모리 관리]- 할당 기법',
'[메모리 관리][할당 기법][연속 로딩]- 단일 분할 할당',
'[메모리 관리][할당 기법][연속 로딩]- 다중 분할 할당',
'[메모리 관리][할당 기법]- 분산 로딩 기법(Virtual Memory, Paging, Segmentation)',
'[메모리 관리][할당 기법]- 단편화',
'[메모리 관리]- Page Fault',
'메모리 인터리빙',
'[커널 메모리 할당]- Slab allocator',
'[커널 메모리 할당]- Buddy allocator',
'[Virtual Memory]- Mapping',
'가상 메모리 페이지 교체 알고리즘',
'[가상 메모리 페이지 교체 알고리즘]- 벨라디 변이(Belady\'s Anomaly)',
'[가상 메모리 페이지 교체 알고리즘]- 스레싱(Thrashing)',
'[가상 메모리 페이지 교체 알고리즘][Thrashing]- Working set',
'[가상 메모리 페이지 교체 알고리즘][Thrashing]- PFF',
'Cache Memory',
'[Cache]- Cache Mapping',
'[Cache]- Cache 일관성',
'[Cache]- Directory Protocol',
'[Cache]- Snoopy Protocol',
'[Cache]- MESI',
'PCI Express',
'DRAM',
'SRAM',
'DDR SDRAM',
'FeRAM',
'병렬 컴퓨팅',
'[병렬 컴퓨팅]- Flynn 분류',
'[병렬 컴퓨팅]- 기억장치 액세스 분류',
'[병렬 컴퓨팅]- 상호 연결망',
'[병렬 컴퓨팅][기억장치 액세스]- UMA',
'[병렬 컴퓨팅][기억장치 액세스]- NUMA',
'[병렬 컴퓨팅][기억장치 액세스]- NORMA',
'[병렬 컴퓨팅][기억장치 액세스]- COMA',
'ARM',
'분기 예측 기술',
'[분기 예측]- 분기 방향 예측',
'[분기 예측]- 분기 목적지 예측',
'[분기 예측]- 예측 실행',
'GPGPU',
'[GPGPU]-CUDA',
'Cloud GPU',
'Many core CPU',
'Fabric Computing',
'양자컴퓨팅',
'Tiny OS',
'Nano Qplus',
'Flash Memory',
'NAND Flash Memory',
'eMMC',
'UFS',
'MoS',
'CPU',
'뉴로모픽',
'[CPU]- MajorState',
'CPU Scheduling',
'[CPU Scheduling]- 비선점 스케줄링',
'[CPU Scheduling]- 선점 스케줄링',
'[CPU Scheduling]- Process Aging',
'[RTOS Scheduling]- RM',
'[RTOS Scheduling]- EDF',
'Disk 스케줄링',
'[Disk 스케줄링]- 알고리즘 유형',
'리소스 동기화',
'[리소스 동기화]- 상호배제',
'[리소스 동기화][상호배제]- 세마포어, 모니터',
'[리소스 동기화][상호배제]- Swap Test & Set()',
'[리소스 동기화][상호배제]- 데커 피터슨 램포드',
'[리소스 동기화]- 운영체제의 크리티컬섹션',
'[리소스 동기화][상호배제]- 뮤텍스',
'[리소스 동기화]- 스핀락',
'[리소스 동기화]- 교착상태',
'[교착상태][회피]- 은행가알고리즘',
'[교착상태][회피]- Wait-Die, Wound-Wait',
'[교착상태][발견]- 자원할당 그래프',
'[InMemory]- In-Memory Computing',
'[InMemory]- In-Memory DataGrid',
'[InMemory]- In-Memory Database',
'Auto Scale Up, Out',
'Library',
'[Library]- DLL',
'정규 표현식',
'유한 오토마타',
'엑사스케일 컴퓨팅 시스템',
'Thunderbolt Interface',
);

var answer = answer.concat(
// OS
'# 정의 : 응용 프로그램의 수행을 제어하고 컴퓨터 사용자와 하드웨어 사이의 인터페이스 역할을 수행하는 시스템 소프트웨어 <br/><br/>\
# 기능 <br/>\
1. 자원관리 <br/>\
- 자원관리 : 프로세스 자원할당 / 작업, 프로세스 관리 <br/>\
- 자원보호 : 외부접근통제,정보사용 통제 / 권한관리, 방화벽 사용 <br/>\
- 자원제어 : 자사용 오류 탐지, 복구지원 / 파일 관리, 통신제어 <br/><br/>\
2. 인터페이스 측면 <br/>\
- HW I/F : 호환성 보장, Plug & Play / I/O 관리, 인터럽트 관리 <br/>\
- User I/F : 사용자, 컴퓨터 상호연결 / CUI, GUI <br/><br/>\
# 성능 목표 <br/>\
- CPU 이용률 : 병행기법 <br/>\
- 응답시간 : Locality <br/>\
- 처리량 : Throughput 관리 <br/>\
- 자원 사용량 : 선점, 비선점 <br/><br/>\
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

// Dual Mode
'# 정의 : 운영체제 해킹 / 시스템 위협 방지 / 사용자, 커널 모드 / 보호 기법 <br/>\
- 불법적인 명령을 통해 운영체제를 해킹하고 시스템의 위협을 방지하기 위해 사용자 모드와 커널 모드로 분류하여 운영체제를 보호하기 위한 기법 <br/><br/>\
# 중요성 <br/>\
1. 프로그램 <br/>\
- 사용자/운영체제 보호 : 잘못된 사용자로부터 운영체제, 사용자 상호 보호 방법 제공 <br/>\
- 특권명령 지정 : 나쁜 영향 가능성 일부 명령, 특권 명령 지정, 시스템적 보호 제공 <br/><br/>\
2. 하드웨어 <br/>\
- 입출력장치(I/O) 보호 : 사용자의 잘못된 입출력 명령어 제어 <br/>\
- 메모리 보호 : 다른 사용자 메모리, 운영체제 영역 접근 방지 <br/>\
- CPU 보호 : 한 사용자 CPU 독점 제어 <br/><br/>\
# 구조 <br/>\
<img src = "./img/DualMode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 종류 <br/>\
1. User Mode <br/>\
- 개념 : 제어권 사용자, 사용자 수준 코드 수행, 단순 사용자 프로그램 작동 코드 <br/>\
- Mode Bit : 1 <br/>\
- 시스템 데이터 제한 접근만 허용, 하드웨어 직접 접근 불가 <br/>\
- 시스템 서비스 호출시 잠시 전환 <br/>\
- 주어진 메모리 영역외 다른 프로세스, 커널 메모리 영역 접근 불가 <br/>\
- Address Space 밖에 있는 Kernel Address Space 메모리 접근시 Exception Error <br/><br/>\
2. Kernel Mode <br/>\
- 개념 : 제어권 OS, OS 코드 수행, 특권 명령어 작동 모드 <br/>\
- Mode Bit : 0 <br/>\
- 사용자 모드에서 실행 불가능 <br/>\
- 운영체제 코드, 디바이스 드라이버 등.. 커널 모드 코드 실행 <br/>\
- 개별 유저 실행 불가 명령, 시스템 접근 권한 가지는 상태 <br/><br/>\
* 125회 응용 4교시 4번\
',
  
// Unix
'# 정의 : 이식, 다중 사용자, 대화식 / 운영체제 <br/>\
- 다양한 시스템 사이에 서로 이식할 수 있고, 멀티 태스킹과 다중 사용자를 지원하도록 설계된, 범용 다중 사용자 방식의 대화식, 시분할처리 시스템 운영 체제 <br/><br/>\
# 특징 <br/>\
- 대화식 운영<br/>\
- 높은 이식성 : C언어로 개발됨 <br/>\
- 계층적 구조 : / 부터 하위 파일까지 트리형 구조 <br/>\
- 멀티 유저, 멀티 태스킹 <br/><br/>\
# 핵심 컴포넌트 (<font color = "red">하커쉘유</font>) <br/>\
- HW : Server, CPU, Memory, Disk <br/>\
- Kernel : 핵심 기능 수행, 메모리 상주 하드웨어 운영 및 관리 <br/>\
- Shell : 사용자, 운영체제 사이 인터페이스, 명령어 수행 <br/>\
- File System : Dir, File 구성, 부수아데 <br/>\
<img src = "./img/Unix_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Boot Process <br/>\
Power On-> Boot PROM -> Boot Program -> Init kernel -> Run Init Process -> SVC. Start<br/><br/>\
# 분류 <br/>\
<img src = "./img/Unix_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Linux 비교 <br/>\
<img src = "./img/LinuxUnixCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 1교시 3번\
',
  
// File System
'# File System 구조 <br/>\
<img src = "./img/Unix_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 표준 File System (<font color = "red">부수아데</font>) <br/>\
- Boot Block : Bootstrap code <br/>\
- Super Block : 파일 시스템 상태 <br/>\
- i-node Block : 파일 위치 정보 <br/>\
- Data Block : 실제 데이터 정보 <br/><br/>\
# 지원 File System <br/>\
- msdos : MS-DOS 파티션 사용 <br/>\
- nfs : Network File System, 원격 서버 디스크 연결 <br/>\
- ufs : Unix File System, 유닉스 표준 파일 시스템 <br/>\
- ntfs : 윈도우 NTFS 지원 위한 파일 시스템 <br/><br/>\
# 가상 File System <br/>\
- swap : 스왑 영역 관리 <br/>\
- tmpfs : Temporary File System, 메모리에 임시 파일 저장 <br/>\
- proc : 커널의 현재 상태를 나타내는 파일 <br/>\
- ramfs : 램디스크 지원 파일시스템 <br/>\
- rootfs : Root File System, 시스템 초기화와 관리에 필요한 내용 관리<br/><br/>\
* 라이지움 90회 응용 2교시 5번\
',
  
// Permission
'# 정의 : RWX 접근 허가 <br/>\
- 사용자가 파일이나 디렉토리를 읽기, 쓰기, 실행할 수 있도록 자격 또는 접근 허가 의미 <br/>\
<img src = "./img/LinuxPermission.png" style = "max-width:100%; height:auto;"><br/><br/>\
# UMASK <br/>\
- 개념 : 응용 프로그램이 파일에 설정할 수 없는 권한 세트 <br/>\
- 위치 : /etc/profile 경로에서 확인 가능 <br/>\
- 기본값 : Root(022), Normal(002) <br/><br/>\
# UID <br/>\
- 개념 : User 마다 Assign 되는 id 형태 <br/>\
- 위치 : /etc/passwd <br/>\
- 값 : 0 ~32767 (2^15)<br/><br/>\
# GID <br/>\
- 개념 : Group 마다 Assign 되는 id 형태 <br/>\
- 위치 : /etc/group <br/>\
- 내용 : group list, 해딩 그룹 속한 user 표시 <br/>\
- 종류 : Primary group (최초 소속), Supplementrary (나머지) \
',

// Linux ID 
'# 종류 <br/>\
- RUID(Real User ID) : 프로세스 실행시킨 사용자 UID <br/>\
- RGID(Real Group ID) : 프로세스 실행시킨 사용자 GID <br/>\
- EUID(Effective User ID) : 프로세스 실행 동안 부여 UID, 자원 접근 권한 판단용 <br/>\
- EGID(Effective Group ID) : 프로세스 실행 동안 부여 GID, 자원 접근 권한 판단용 <br/>\
- SUID(Set UID), SGID(Set GID) : 프로세스 실행 동안 해당 파일 소유자, 소유그룹 권한 자원 접근 권한 설정 <br/>\
ㄴ chmod 4755 Filename, chmod u+s Filename <br/>\
ㄴ chmod 2755 Filename, chmod g+s Filename <br/><br/>\
* ITPE 8회 관리 1교시 8번\
',

// Super Block
'# 정의 : 파일 시스템 상태 / 종합 정보 보관 <br/>\
- 파일 시스템의 상태에 관한 종합적인 정보를 보관하는 영역 <br/><br/>\
# 관리 자료 (<font color = "red">NM CGSP BI IP</font>)<br/>\
- Number : Mount Kernel 확인 <br/>\
- Revision Mount Count : 기능 호환성 체크 <br/>\
- Block Count : 모든 파일 정보 저장, 관리 <br/>\
- Block Group Number : 실제 데이터 저장 공간 <br/>\
- Block Size : 블록 크기 Byte 단위 <br/>\
- Block Per Group : 그룹당 블록 개수 <br/>\
- Free Blocks : 여유 블록<br/>\
- Free Inode : 여유 i-node<br/>\
- First Inode : 첫번째 i-node No. <br/>\
- Inode per Group : 그룹당 i-Node 개수 <br/><br/>\
* 라이지움 90회 응용 2교시 5번\
',

// [Unix OS]- i-node Block
'# 개념 : 파일 데이터 블록 포인터 / 파일 관리 / 자료구조 <br/>\
- 유닉스 시스템에서 파일을 관리하기 위해 사용되는 자료구조로서, 파일이 속한 데이터 블록의 포인터 <br/><br/>\
# 필요성 <br/>\
- 계층 구조 확립 <br/>\
- 접근 및 보호 <br/><br/>\
<img src = "./img/iNode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. File 관리 (<font color = "red">MOTSC</font>) <br/>\
- mode : 파일과 관계된 접근과 실행권한 저장 플래그 <br/>\
- Owner : 파일과 관계된 개별 소유자, 그룹 소유자 <br/>\
- Timestamps : 마지막 접근, 마지막 수정, i-node 수정 시간 <br/>\
- Size Block : 파일 시스템의 블록 크기를 바이트 단위로 표시<br/>\
- Count : 파일의 바이트 수 <br/><br/>\
2. Data block Pointer (Direct Indirect)<br/>\
- Direct : 직접 데이터 블록을 가리키는 포인터로 구성, 12개 보인트 Array 96KB <br/>\
- Single indirect : 데이터 블록을 가리키는 포인터로 구성 4MB <br/>\
- Dobule indirect : 2개의 레이어(인덱스 블록 포인터 / 실제 데이터 블록 포인터) 4GB <br/>\
- Triple indirect : 3개의 레이어(1,2 다른 인덱스 블록 포인터 / 실제 데이터 블록 포인터) ~4TB <br/><br/>\
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
* KPC 97회 응용 4교시 8번\
',

// I/O 장치 제어 방식
'# 정의 : 중앙처리장치 제어, 주소지정, 주기억장치 접근 <br/>\
# Overview <br/>\
<img src = "./img/IO_Control.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 8회 응용 2교시 6번\
',

// Programmed I/O 
'# 메커니즘 <br/>\
1. 입력과정 <br/>\
<img src = "./img/ProgrammedIOInsert.png" style = "max-width:100%; height:auto;"><br/>\
- I/O Buffer -> Processor 내 레지스터 데이터 이동 <br/><br/>\
2. 출력과정 <br/>\
<img src = "./img/ProgrammedIOOutput.png" style = "max-width:100%; height:auto;"><br/>\
- Processor 내 레지스터 -> I/O Buffer <br/><br/>\
# 구성요소 <br/>\
1. 상태 레지스터 Flag <br/>\
<img src = "./img/ProgrammedIOFlag.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. I/O 명령 <br/>\
- 제어 : 모듈 해야 할 동작 지정 <br/>\
- 검사 : I/O 모듈, 주변장치 상태 검사 <br/>\
- 읽기 : I/O 모듈 / 주변장치 -> 내부 버퍼 <br/>\
- 쓰기 : 데이터 버스 -> 주변장치 <br/><br/>\
3. I/O 주소지정 <br/>\
- Memory-mapped I/O : I/O 장치,기억장치, 주소 공간 공유 / 별도 명령어 불필요 <br/>\
- IO-mapped I/O : I/O장치,기억장치, 별도 주소 공간 / 별도 명령어 필요 <br/><br/>\
* ITPE 8회 응용 2교시 6번\
',

// Interrupt Driven I/O
'# 정의 : I/O 모듈 동작 수행 동안 / 다른 프로그램 처리 가능 방식 <br/>\
- 프로세서로부터 I/O 명령을 받은 I/O 모듈이 동작을 수행하는 동안, 프로세서가 다른 프로그램을 처리할 수 있도록 하는 방식 <br/><br/>\
# 처리 절차 <br/>\
<img src = "./img/InterruptDrivenIOMechanishm.png" style = "max-width:100%; height:auto;"><br/>\
- I/O 모듈, 프로세서에 완료 신호 알림 <br/>\
- 인터럽트 신호 받은 후 원래 프로그램 수행 지속 <br/><br/>\
# 설계 유형별 동작 메커니즘 <br/>\
1. Multiple Interrupt Lines <br/>\
<img src = "./img/InterruptDrivenIOMultiple.png" style = "max-width:100%; height:auto;"><br/>\
- I/O 모듈, 요구선(Requst), 확인선(ACK) <br/>\
- 요구선 우선순위 가짐 <br/><br/>\
2. Software Poll <br/>\
<img src = "./img/InterruptDrivenIOSWPoll.png" style = "max-width:100%; height:auto;"><br/>\
- 우선순위 높은 제어기 부터 요구 여부 검사 후 요청 <br/><br/>\
3. Daisy Chain <br/>\
<img src = "./img/InterruptIODaisyChain.png" style = "max-width:100%; height:auto;"><br/>\
- 하나의 인터럽트 요구선 Daisy Chain 형태 공유 <br/><br/>\
4. Bus Arbitration(중재) <br/>\
<img src = "./img/InterruptDrivenIOBusArbiter.png" style = "max-width:100%; height:auto;"><br/>\
- I/O 모듈 버스 사용권 얻은 다음, 인터럽트 요구 <br/>\
- 프로세서 확인 신호 보내어 응답 <br/><br/>\
* ITPE 8회 응용 2교시 6번\
',

// DMA
'# 정의 : 주변장치, 주기억장치 데이터 전송 장치 <br/>\
- CPU를 통하지 않고 주변장치(I/O)와 주기억장치 사이의 데이터 전송을 담당하는 장치 <br/><br/>\
# DMA 이전 방식 <br/>\
- Programmed Driven I/O : CPU 상 실행되는 프로그램 의해 IO 제어 <br/>\
- Interrupt Driven I/O : I/O Interface 주변 장치 상태 Check, CPU IO 요구 <br/><br/>\
# 필요성 <br/>\
- CPU 자원낭비 최소화 : Disk 위해 범용 프로세서 전송 제어 낭비 <br/>\
- CPU 성능저하 개선 : 능동적 CPU 개입 필요, 오버헤드 발생 가능 <br/><br/>\
# 특징 <br/>\
- CPU Utilization 향상 : CPU 다른 작업 수행 가능 <br/>\
- Multi Process 환경 유리 : 프로세스 CPU 작업 병렬화 <br/>\
- Process 응답시간 향상 : 프로세스 대기 시간 감소 <br/><br/>\
# 동작원리 <br/>\
<img src = "./img/DMA_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 전송 모드 <br/>\
1. Burst Mode(Block Mode) <br/>\
- <font colro = "red">블록</font> 단위, 여러개 Word 지속 전송, 데이터 전송 마칠때 까지 버스 사용<br/>\
- 고속 입출력 장치 사용 <br/>\
<img src = "./img/BurstMode.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Word Mode(Cycle Stealing) <br/>\
- <font color = "red">워드</font> 단위, Memory Cycle 훔쳐서 수행(1Byte), CPU 보다 우선 <br/>\
- 데이터 실시간 모니터링 I/O 장치 유리 <br/>\
<img src = "./img/CycleStealingMode.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Demand Trasnfer Mode <br/>\
- <font color = "red">바이트</font> 단위, 단일 프로그램 채널 사용 <br/>\
- DREQ / 프로그래밍 로딩,데이터 파일 유용, 상대적으로 긴 CPU Idle Time <br/>\
<img src = "./img/DemandTransferMode.png" style = "max-width:100%; height:auto;"><br/><br/>\
4. Interleaved <br/>\
- 프로세서가 버스 미사용 중일 때만 DMA에서 주기억장치로 데이터 전송 <br/>\
<img src = "./img/Interleaved.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 연결 방식 <br/>\
- 단일 버스 : CPU, RAM, I/O, DMAC 단일 버스 연결 / 1회 연결 2번 사용 <br/>\
- 단일 버스 통합 방식 : 여러 I/O 가 DMA 연결 / 1회 연결 1번 사용 <br/>\
- 입출력 버스 방식 : 시스템, 입출력 버스 분리, 다양한 속도 I/O 처리, DMAC가 복잡 <br/>\
<font color = "red">* DMAC : Direct Memory Access Controller </font><br/><br/>\
* ITPE 8회 응용 2교시 6번 <br/>\
* 123회 응용 4교시 1번\
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

//[Dispatcher]- 운영체제 문맥, 문맥교환
'# 문맥 : 프로세스, PCB, 커널, CPU <br/>\
- 하나의 프로세스가 CPU를 사용 중인 상태에서 다른 프로세스가 CPU를 사용하도록 하기 위해, 이전의 프로세스의 상태(문맥)를 보관하고 새로운 프로세스의 상태를 적재하는 작업 <br/><br/>\
# 유형 <br/>\
- System Context : 커널할당자료구조, 페이지 테이블, 세그먼트 <br/>\
- Memory Context : Text, Data, Heap, Swap 공간 <br/>\
- HW Context : 문맥교환시 현 실행위치 정보<br/><br/>\
# 문맥교환 : PCB 정보 교체 과정 / 실행중 중지 / 다른 프로세스 교환 <br/>\
- Context Switch <br/>\
- 멀티 프로세스 환경에서 실행중인 프로세스를 중지하고 다른 프로세스로 교환할 때 발생하는 PCB(Process Control Block) 정보 교체 과정 <br/><br/>\
# 절차 (<font color = "red">인커저R유</font>)<br/>\
<img src = "./img/ContextSwitchProcess.png" style = "max-width:100%; height:auto;"><br/>\
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
* PCB 구성 (<font color = "red">카레상어입아포</font>) <br/>\
- pc, 레지스터, 상태, account, 입출력, pid, pointer\
',

// Interrupt 
'# 정의 : MCU / 예외상황 / 선 처리 매커니즘 <br/>\
- MCU가 프로그램을 실행하고 있을 때, 입출력 HW 등의 장치 및 예외상황 대응 위해 우선순위에 따라 선 처리하기 위한 매커니즘 <br/><br/>\
# 발생원인 (기의주)<br/>\
1. 외부 <br/>\
- 기계적 문제 : 정전, 자료전달과정 오류 <br/>\
- 의도적 중단 : Power Off, 작업취소 <br/>\
- 주변장치 작동 : Keyboard, Mouse 처리 요구 <br/><br/>\
2. 내부 <br/>\
- 프로그램상 문제 : 보호된 Memory 접근 시도 <br/><br/>\
# 우선순위 (<font color = "red">전기외입 C프 S</font>)<br/>\
1. 외부 인터럽트(HW) <br/>\
- 전원 이상 : 정전 발생 <br/>\
- 기계착오 : CPU 오류 등 경우 발생 <br/>\
- 외부신호(Clock) : 타이머, 키보드, 외부장치 의해 발생 <br/>\
- I/O : 입출력 장치등에 의해 발생 <br/><br/>\
2. 내부 인터럽트(HW) <br/>\
- 명령어 Error : 잘못된 명령어 사용 <br/>\
- 프로그램 검사 : div 0, Overflow/Underflow <br/><br/>\
3. SW 인터럽트 <br/>\
- SVC(페이지 부재) : SVC 의한 임의 호출, 프로그램 처리중 오류 <br/><br/>\
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
* 123회 응용 2교시 1번 <br/>\
* 라이지움 86회 4교시 6번\
',

// OS 역할
'# Clock Interrupt, I/O Interrupt OS 역할 <br/>\
<img src = "./img/Clock_IO_Interrupt_OS.png" style = "max-width:100%; height:auto;"><br/><br/>\
- IRQ(요청) : CPU에 인터럽트 요청신호 / Interrupt Request <br/>\
- IPR(벡터) : 인터럽트 처리 루틴 / ISR(Interrupt ID) 분기, ISR 시작주소 저장 <br/>\
- ISR(서비스 루틴) : 실제적인 인터럽트 처리 / i금지, p상태저장, i처리, p상태복구, i허용 <br/><br/>\
# Page Fualt OS 역할 <br/>\
<img src = "./img/PageFaultInterrutOS.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Page Fault Trap 발생 : MMU가 Page Fault 발생 <br/>\
- 페이지 접근 타당성 체크 : N(종료), Y(할당/확보) <br/>\
- 유효 비트로 재설정 : 유효-무효 비트 재설정 <br/>\
- 인터럽트 처리 종료 : 명령어 재시작 <br/><br/>\
* 123회 응용 2교시 1번\
',
  
// Maskable Interrupt
'# 정의 : 처리할 인터럽트 <br/>\
- 인터럽트 요인이 발생 하였을 경우 처리를 할 것인지 설정할 수 있는 인터럽트 <br/><br/>\
# 특징 <br/>\
- 사용 PIN : <font color = "red">INTR</font>(인터럽트 신호 접수) <br/>\
- 제어 : 인터럽트 마스크 레지스터로 제어 <br/>\
- 처리조건 : 인터럽트 처리 루틴 설정 필요 <br/>\
- 사례 : 외부 신호 인터럽트, 파일 오류 <br/><br/>\
* 라이지움 88회 관리 4교시 2번\
',
  
// Non-Maskable Interrupt
'# 정의 : CPU 처리 인터럽트 <br/>\
- 인터럽트 요인이 발생 하면 CPU가 무조건 처리 해야 하는 인터럽트 <br/><br/>\
# 특징 <br/>\
- 사용 PIN : <font color = "red">NMI</font>(유보 불가한 인터럽트 접수) <br/>\
- 제어 : 제어 불가능 <br/>\
- 처리조건 : NMI 트리거 조건 설정 필요 <br/>\
- 사례 : 전원 이상, 메모리 에러, I/O 이상 <br/><br/>\
* 라이지움 88회 관리 4교시 2번\
',
  
// Vectored Interrupt
'# 정의 : ISR / 시작번지 <br/>\
- 인터럽트 발생 원인에 따라 미리 지정된 서비스 루틴(ISR, Interrupt Service Routine)의 시작 번지(인터럽트 벡터)에서 처리하는 인터럽트 유형 <br/><br/>\
# 동작 순서 <br/>\
<img src = "./img/VectoredInterrupt.png" style = "max-width:100%; height:auto;"><br/><br/>\
# ISR 분기 과정 <br/>\
<img src = "./img/MultiInterruptISR.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 88회 관리 4교시 2번\
',
  
// Memory 영역
'# 종류 <br/>\
- Code : 코드자체 구성 / Hex, Bin <br/>\
- Data : 전역변수, 정적변수, 배열, 구조체 / global, static, array, structure <br/>\
- Heap : 동적 메모리 / malloc(), new() <br/>\
- Stack : 지역변수, 매개변수, 리턴 값 / \
',
  
// Memory Leak
'# 정의 : 메모리 비반환 점유 현상 <br/>\
- 컴퓨터 프로그램이 메모리를 할당된 메모리를 사용한 다음 반환하지 않아 메모리를 계속 점유하고 있는 현상 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MemoryLeak.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 문제점 <br/>\
- 성능 : 프로그램 성능저하 문제 <br/>\
- 오류 : 메모리 부족으로 인한 시스템 오류 <br/>\
- 보안 : 버퍼 오버플로우 <br/><br/>\
# 탐지 기법 <br/>\
- 정적 : 프로그램 실행x, 잔존결함, 복잡도, 의존성 분석 탐지 / PMD, cppcheck, SonarQube <br/>\
- 동적 : 프로그램 실행, 분석 탐지 / Avalanche, Valgrind <br/><br/>\
# 해결방법 <br/>\
- 디버깅 : 메모리 모니터링 <br/>\
- 코드 : 프로그램 Code Inspection 수행 <br/><br/>\
* 123회 응용 1교시 11번\
',

// OS Scheduler
'# 정의 : Process State / CPU, Memory 자원 / 할당 회수 / 시스템 소프트웨어 <br/>\
- 프로세스 상태에 따라 어떠한 프로세스에게 CPU와 메모리 자원을 할당하고 회수할지를 결정하는 시스템 소프트웨어 <br/><br/>\
# 종류 <br/>\
- 장기 스케줄러 : New -> Ready <br/>\
- 중기 스케줄러 : Run -> Wait <br/>\
- 단기 스케줄러 : Ready -> Run <br/><br/>\
# 스케줄러, 디스패처 비교 <br/>\
<img src = "./img/SchedulerDIspatcher.png" style = "max-width:100%; height:auto;"><br/>\
* ITPE 합숙 2일차 1교시 1번\
',

// Process
'# 정의 : 작업 실행 단위 / CDHS 영역 독립 <br/>\
- 프로그램을 구동하여 메모리에 적재된 상태로 실행되는 하나의 작업 단위, CDHS(CODE, DATA, HEAP, STACK) 영역 독립 <br/><br/>\
# 프로세스 상태 <br/>\
<img src = "./img/ProcessStateTransitionMap.png" style = "max-width:100%; height:auto;"><br/>\
# Process Thread 비교 <br/>\
<img src = "./img/ProcessThreadCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 4교시 4번\
',
  
// PCB
'# 정의 : 프로 그램 실행 자료, 자료구조 <br/>\
- 운영체제가 프로그램 실행을 위해 필요한 자료를 담고 있는 자료구조 <br/><br/>\
# 구성요소 (<font color = "red">카레상어입아포</font>)<br/>\
- 프로그램 카운터 : 다음 명령 주소 표시 <br/>\
- 레지스터 저장 영역 : 인터럽트 발생시 PC와 함께 저장, 재 실행시 복귀 <br/>\
- 프로세스 상태 : 생성, 준비, 실행, 대기, 중단 등의 상태 <br/>\
- Account 정보 <br/>\
- 입출력 상태 정보<br/>\
- PID :  각 프로세스에 대한 고유 식별자 <br/>\
- Pointer <br/>\
- 기타 정보 : 스케줄링 정보, 메모리 관리 정보 \
',

// Thread 
'# 정의 : 프로세스 내 / 메모리 공유 / 단위 명령 집합 <br/>\
- 하나의 프로세스내에서 리소스를 공유하며 독립적으로 수행 가능한 단위 명령의 집합 <br/><br/>\
# Keyword : 사용자모드(임계,스핀락), 커널모드(세마포어), TCB, Light Weight, 멀티스레드, 공유(힙/데이터/코드), 독립(레지스터/스택), PCB <br/><br/>\
# 유형 <br/>\
0. 개념도 <br/>\
<img src = "./img/ThreadType.png" style = "max-width:100%; height:auto;"><br/><br/>\
1. Many to One <br/>\
<img src = "./img/ThreadManyToOne.png" style = "max-width:100%; height:auto;"><br/>\
- 동작 : N:1 Mapping, Kernel Thread 지원 x 환경 사용 <br/>\
- 장점 : 사용자 수준 쓰레드 관리 가능 <br/>\
- 단점 : 여러개 쓰레드 동시 호출 불가 <br/><br/>\
2. One to One <br/>\
<img src = "./img/ThreadOneToOne.png" style = "max-width:100%; height:auto;"><br/>\
- 동작 : 1:1 Mapping, N:1 방식 중단 문제 해결 <br/>\
- 장점 : 동시 호출 가능 <br/>\
- 단점 : 생성시 자원 제약 발생 <br/><br/>\
3. Many to Many <br/>\
<img src = "./img/ThreadManyToMany.png" style = "max-width:100%; height:auto;"><br/>\
- 동작 : N:N Mapping, 커널이 사용자, 커널 쓰레드 맵핑 조정 <br/>\
- 장점 : 쓰레드 중단, 자원 제약 한계 극복 <br/>\
- 단점 : 쓰레드 처리 스케줄링 복잡성 증가 <br/><br/>\
# 종류 <br/>\
- Kernel Thread : 프로세스, 쓰레드 문맥 교환 커널 유지 <br/>\
- User Thread : 응용프로그램이 Thread Library 사용 수행 <br/><br/>\
# 구현시 고려사항 <br/>\
- 단일 : 신호전달(불법접근시), 종료(제거시점 신중결정), 마스킹(종료전) <br/>\
- 멀티 : 동기화(임계영역, 스핀락, 세마포어) <br/><br/>\
# 비교 (<font color = "red">NRWT / NRRWT </font>)<br/>\
<img src = "./img/ThreadProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 4교시 4번 <br/>\
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
- <font color = "red">시스템</font> 전체 장애시 : <font color = "red">Keep Alive Packet</font> 수신 지연시 Down 판단, N/W자원 -> Disk 자원 -> Application 자원 순 복구(script 사전 정의 필요) <br/>\
- <font color = "red">N/W</font> Adapter(Card) 장애시 : <font color = "red">Standby Adapter</font>가 <font color = "red">Service Adapter</font>의 IP Address Failover <br/>\
- <font color = "red">TCP/IP</font> N/W 장애시 : 자동 대응 <font color = "red">불가</font> <br/><br/>\
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
- 기술 : 아키텍처 설계, 2중화, 자원 동기화 <br/><br/>\
<img src = "./img/고가용성_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/고가용성_2.png" style = "max-width:100%; height:auto;">\
',

// 우선순위 역전현상 
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
# 기본 메커니즘<br/>\
- 타이머 카운트다운 <br/>\
- 오류 검출 <br/>\
- 교정조치시행 (Reset/Correction) <br/><br/>\
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
<img src = "./img/WDT_SourceCode.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 다단계 참고 <br/>\
- Reset > Kick > Timeout > Enable > Timeout > Timeout되면 Trigger Correction Action \
',
  
// 반도체 종류
'# Overview <br/>\
<img src = "./img/SemiConductorType.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# 메모리 반도체 <br/>\
- 개념 : 정보를 저장하는 용도로 사용되는 반도체 <br/>\
- 종류 <br/>\
1) RAM : DRAM,SDRAM,RDRAM,DDR SDRAM / SRAM <br/>\
2) ROM : EPROM, EEPROM, FLASH(NAND, NOR) <br/><br/>\
# 비메모리 반도체 <br/>\
- 개념 : 데이터 연산,제어 등 정보처리 역할을 수행하는 반도체 <br/>\
- 종류 <br/>\
1) 시스템 판도체 : 판단,연산 기능(CPU, AP), 통신 기능(모뎀), 수집 기능(이미지,라이다 센서) <br/>\
2) 광,개별 소재 : LED 등과 같이 회로를 구성하는 각각의 소자 \
',
  
// 메모리 관리 기법
'# 정의 : 다중 프로세스 / 운영체제 의해 / 동적 메모리 사용자 영역 / 여러 프로세스 상주 / 할호교배 기법 <br/>\
- 다중 프로세스 시스템에서 운영체제에 의해 동적으로 메모리의 사용자 영역을 여러 프로세스가 상주할 수 있도록 할당, 호출, 교체, 배치하는 기법 <br/><br/>\
# 할당 기법(How) <br/>\
- 정의 : 메모리 여러개 나누어 할당 <br/>\
- 기법 : 연속-고정,가변 / 분산-페이징,세그먼트 <br/><br/>\
# 호출 기법(When) <br/>\
- 정의 : 가상 메모리로부터 메인 메모리로 적재 시기 결정 방법 <br/>\
- 기법 : 요구 호출, 예측 호출 <br/><br/>\
# 교체 기법(Who) <br/>\
- 정의 : 메인 메모리 공간 부족시 내보낼 페이지를 결정하는 기법 <br/>\
- 기법 : OPT(미래 Know), FIFO, LRU(기간), LFU(빈도), SCR(참조비트 1->0) <br/><br/>\
# 배치 기법(Where) <br/>\
- 정의 : 신규 프로그램 블록을 저장할 메모리 장소를 결정하는 기법 <br/>\
- 기법 : First(가장 먼저), Best(단편화 min), Worst(단편화 max), Next(이전 배치 이후) <br/><br/>\
* KPC 93회 응용 2교시 7번\
',
  
// 할당기법
'# 종류 <br/>\
<img src = "./img/MemoryAllocationOverview.png" style = "max-width:100%; height:auto;">\
',
  
// 단일 분할 할당
'# 개념 : 하나의 사용자만 주기억 장치의 사용자 영역 사용 기법 <br/><br/>\
# 특징 <br/>\
- 초기 운영체제 사용 기법 <br/>\
- 경계 레지스터 사용 : OS(Kernel) / USER <br/><br/>\
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
- Paging : POF <br/>\
- Segmentation : SOB L <br/>\
- Paged Segmentation : S P(BL)OF <br/><br/>\
# Paging <br/>\
<img src = "./img/Paging.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Segment <br/>\
<img src = "./img/Segmentation.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
  
// Page Fault
'# 정의 : 가상 메모리 접근 에러 <br/>\
- 자신의 주소 공간에는 존재하지만 시스템 RAM에는 현재 없는 데이터나 코드에 접근 시도하였을 경우 발생하는 현상 <br/><br/>\
# 운영체제 동작 <br/>\
- 검색 : 원하는 페이지 디스크 위치 Load <br/>\
- 재설정 : MMU 주소 검색 재설정 <br/>\
- 할당 : 특수 페이지경우 새 Page 할당 (Copy On Write Page) <br/>\
- 주소 수령 : 원하는 주소 다른곳에서 가져오기 <br/><br/>\
* 123회 응용 2교시 1번\
',
  
// 메모리 인터리빙
'# 정의 : 메모리 접근시간 최소화, 연속적인 주소 <br/>\
- 메모리 접근시간 최소화를 위해 메모리를 복수개의 모듈로 분할하고 각 모듈별 연속적인 주소를 부여하여 동시 Access가 가능하게 하는 기법 <br/><br/>\
# 방식 <br/>\
<img src = "./img/MemoryInterleaving.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 액세스 방식 <br/>\
<img src = "./img/MemoryInterleavingDataAccess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 92회 응용 1교시 16번\
',
   
// Slab allocator
'# 정의 : 페이지 / 메모리 풀 구조 / 미리 고정된 크기 할당 / 커널 사용 / 동적 메모리 할당자 <br/>\
- 메모리 풀 구조를 지닌 미리 고정된 크기의 메모리 블록 할당하는 커널에서 사용하는 동적 메모리 할당자 <br/><br/>\
# 유사 기술 <br/>\
- Slab : 2008년 까지 Linux Kernel Memory 관리 Default <br/>\
- Slub : 2008년 부터 임베디드 시스템, PC, 서버 Default <br/>\
- Slob : 임베디드 리눅스 기반 커널 메모리 관리 위해 사용 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SlabAllocator.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Cache_chain : 슬랩 캐시를 연결리스트로 연결 / 연결리스트 <br/>\
- kmem_cache : 크기가 정해진 객체의 풀 관리 구조체 / 구조체 <br/>\
- slabs_full : Object가 완전히 할당된 슬랩 / 구조체, 슬랩간 이동 <br/>\
- slabs_partial : Object가 일부 할당된 슬랩 / 구조체, 슬랩간 이동 <br/>\
- slabs_empty : Object가 할당되지 않거나 비어있는 슬랩 / 구조체, 슬랩간 이동 <br/>\
- slab : 연속된 메모리 공간 할당 블록(최소단위) / 객체 할당 단위 <br/><br/>\
# 비교 <br/>\
<img src = "./img/BuddySlab.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 88회 응용 1교시 12번\
',

// Buddy allocator
'# 정의 : 세그먼트 / 슬랩 할당자 하부구조 / 실제 물리 메모리 / 2^n 단위 / 할당자 <br/>\
- 슬랩 할당자의 하부 구조이며 실제적 물리 메모리를 관리하는 계층의 할당자 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BuddyAllocator.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 할당 방법 <br/>\
- 요청 : 21kb 할당 요청 받는 경우 <br/>\
- 분할 : 256 -> 128 *2 -> 64 *4 -> 32*8 분할 <br/>\
- 할당 : 32kb Buddy 중 하나가 21kb에 할당 됨 <br/><br/>\
# 구성요소 <br/>\
- Page 구조체 : Page Frame 번호 인덱스 배열 구조 <br/>\
- Zone 구조체 : 같은 특성 가진 특정 페이지 집합 / MOVEABLE(전용), NORMAL(1:1 매핑), HIGHMEM(Normal 초과시 사용 영역) <br/>\
- pglist_date 구조체 : 시스템의 모든 노드(메모리 집합) 관리 리스트 / init_bootmem_core() 리스트 추가 <br/><br/>\
* 라이지움 88회 응용 1교시 12번\
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

// 가상 메모리 페이지 교체 알고리즘
'# 정의 : 미사용 페이지 교체 알고리즘 <br/>\
- 페이지 방식을 취하는 가상메모리에서 페이지 부재가 발생하면 메인 메모리에 있으면서 사용되지 않는 페이지를 제거하고 새로운 페이지로 교체하는 알고리즘 <br/><br/>\
# 특징 <br/>\
- 페이지 크기에 따른 Trade-Off : 크면 낭비, 작으면 페이지수 증가로 포인트 증대<br/>\
- Belady\'s Anomaly : FIFO 이상 현상 <br/><br/>\
# 종류 <br/>\
- Random Page Replacement <br/>\
- FIFO <br/>\
- OPT(Optimal Replacement) <br/>\
- LRU <br/>\
- NUR(Not Used Recently) <br/>\
- SCR(Second Chance Replacement) <br/>\
- LFU(Least Frequently Used) <br/>\
- MFU(Most Frequently Use) <br/>\
- Page Buffer Algorithm \
',

// [가상 메모리 페이지 교체 알고리즘]- 벨라디 변이
'# 정의 : 많은 수 페이지 할당 -> 페이지 부재 많이 발생 <br/>\
- FIFO Anomaly <br/>\
- FIFO 페이지 교체 기법 하에서 프로세스에 더 많은 수의 페이지를 할당할 경우 오히려 더 많은 페이지 부재가 발생하는 이상현상 즉, 프레임이 3개일 때보다 프레임이 4개일 때 페이지 부재가 많이 발생하는 현상<br/><br/>\
# 암기 <br/>\
- 12301401234 -34 <br/>\
- 참프부 <br/><br/>\
<img src = "./img/Belady_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/Belady_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 해결법 <br/>\
1. 페이지 교체 정책 <br/>\
- LRU : 가장 최근 참조 안된 페이지 <br/>\
- OPT : 오랫동안 사용 않을 페이지 <br/><br/>\
2. 최적화 설계 원칙 <br/>\
- Locality : 시간/공간/순차적 지역성 홀용 - 일정기간 참조되는 페이지 집합 주기억 장치 유지 <br/>\
- PFF(Page Fault Frequency) : 상/하한 프레임 개수 설정, 직접적 페이지 부재율 예측/조절 방법 <br/>\
- Working Sset : Active 참조 Page 집합인 Working Set 정하여 주기억 장치 상주 방법 <br/><br/>\
* ITPE 합숙 125회 2일차 1교시 4번\
',

// [가상 메모리 페이지 교체 알고리즘]- 스레싱
'# 정의 : 멀티 프로세싱, 프로그래밍 역기능 / 페이지 부재 / 페이지 교체 시간 증가 현상 <br/>\
- 멀티 프로세싱, 멀티 프로그래밍의 역기능으로 페이지 부재가 너무 자주 일어나 프로세스가 실행에 보내는 시간보다 페이지 교체에 보내는 시간이 더 많게 되는 현상 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/Thrashing.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 발생원인 <br/>\
- 리소스 부족 : CPU 성능 부족, 저용량 메모리 <br/>\
- 부적절 페이지 교체 : 요구기반 페이지, 페이지 교체 문제 <br/>\
- 과도한 멀티 프로그래밍 : 다중 프로세스, 할당 프레임 감소 <br/><br/>\
# 해결방법 <br/>\
- 우선순위 교환 알고리즘 <br/>\
- Working Set <br/>\
- PFF(Page Fault Frequency) <br/>\
- 다중 프로그래밍 제한 <br/>\
- 적절한 자료구조 <br/><br/>\
* ITPE 8회 관리 4교시 1번 \
',

// Working Set
'# 정의 : 페이지 부재율 감소 / 특정 시간 / 프로그램 지역성 / 메모리 상주 스레싱 헤결 기법 <br/>\
- 페이지 부재율을 감소하기 위해 특정 시간에 실행되는 프로그램에 지역성이 포함되는 페이지들의 집합을 계속 메모리에 상주시켜 스레싱을 해결하는 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/WorkingSet.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Reference Page : 메모리 공간 참조 페이지 <br/>\
- Working Set Size : 프로세스 처리 시간 따라 크기 변화 <br/>\
- Working Set Window : 메모리상 참조하는 고정된 페이지 수 <br/><br/>\
* ITPE 8회 관리 4교시 1번\
',

// PFF
'# 정의 : 페이지 부재 빈도 조절 방법 / 상한 프레임 할당 / 하한 일부 회수 <br/>\
- Page Fault Frequency <br/>\
- 페이지 부재 빈도를 조절하는 방법으로 페이지 부재 발생시에 상한을 넘으면 프레임을 더 할당, 하한 보다 낮으면 프레임 일부 회수하여 최적으로 프레임 수를 조정하는 방법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PFF.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Upper Bound : 프로세스 페이지 프레임 적은 상황 <br/>\
- Lower bound : 프로세스 페이지 프레임 많아 메모리 낭비 상황 <br/><br/>\
# Working Set, PFF 비교 <br/>\
<img src = "./img/WorkingSetPFF.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 8회 관리 4교시 1번\
',

// Cache Memory
'# 정의 : 일시 저장 기억 장소 / CPU, Main Memory 속도 차이<br/>\
- 고속의 중앙처리장치와 상대적 저속의 주기억 장치 사이의 속도 차이를 보완하기 위하여 데이터와 명령어를 일시적으로 저장하는 기억 장소 <br/><br/>\
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
# 교체 알고리즘 <br/>\
- LRU : 최근 미사용 <br/>\
- FIFO <br/>\
- LFU : 사용빈도 <br/>\
- Random Optical : 미사용 예상블록, 비현실적 <br/><br/>\
# Miss 원인 <br/>\
- Cold Miss : 데이터 최초 읽을때 발생, Compulsory Miss <br/>\
- Capacity : 캐시 크기 증가 <br/>\
- Conflict : 캐시 연관도 증가 <br/>\
- Coherence : MESI, 스누피 프로토콜 <br/><br/>\
<img src = "./img/CacheMemory_4.png" style = "max-width:100%; height:auto;">\
',

// Cache Mapping
'# 정의 : 주기억 장치 -> 캐시 메모리 / 데이터 전송 <br/>\
- 주기억 장치로부터 캐시 메모리로 데이터 전송하는 작업 <br/><br/>\
# 유형 <br/>\
1. 직접 사상 <br/>\
<img src = "./img/CacheMemory_1.png" style = "max-width:100%; height:auto;"><br/>\
- 원리 : 메모리 블록, 캐시 특정 라인 적재 (1:1) <br/>\
- 장점 : 회로 구현 용이, 맵핑 간단, 처리속도 빠름 <br/>\
- 단점 : Miss Rate 높음 <br/><br/>\
2. 연관 사상 <br/>\
<img src = "./img/CacheMemory_2.png" style = "max-width:100%; height:auto;"><br/>\
- 원리 : 메모리 블록 어느 라인에나 적재 가능 <br/>\
- 장점 : Hit Rate 높음 <br/>\
- 단점 : 회로 복잡, 속도 느림 <br/><br/>\
3. 집합 연관 사상 <br/>\
<img src = "./img/CacheMemory_3.PNG" style = "max-width:100%; height:auto;"><br/>\
- 원리 : 캐시 메모리 한 Index에 2개 이상 저장 Set 형성 <br/>\
- 장점 : Hit Rate 높음 <br/>\
- 단점 : 구현회로 복잡\
',
  
// Cache 일관성
'# 정의 : 공유 메모리 시스템 / 개별 프로세서 / 지역 캐시간 일관성 <br/>\
- 공유 메모리 시스템에서 개별 프로세서의 지역 캐시간의 일관성 <br/><br/>\
# 필요성 <br/>\
- 일관성 : 캐시간 데이터 정합성 <br/>\
- 성능 : 시스템 성능 저하 영향 미침 <br/>\
- 신뢰성 : 프로그램 비정상 동작 방지 <br/><br/>\
# 발생원인 <br/>\
1. 정책 <br/>\
- Write Through : 동시 일관성 <br/>\
- Write Back : 일괄 적용 <br/><br/>\
2. 메모리 공유 <br/>\
- 공유 메모리 : 멀티프로세서 메모리 공유 <br/>\
- 변경가능한 데이터 공유 : 공유 데이터 불일치 <br/><br/>\
3. 멀티 프로세서 환경 <br/>\
- 프로세스 이주 : SMP(대칭적 다중 프로세서) 시스템에서 프로세스를 처리하던 프로세서가 변경되는 현상 <br/>\
- 입출력 동작 : I/O 장치와 프로세서 캐시간의 일관성 <br/><br/>\
# HW 기반 유지기법 <br/>\
0. 개념 <br/>\
- 캐시 일관성 프로토콜, Runtime 동적 검출 <br/>\
- SW 비해 캐시 사용률 좋음, 소프트웨어 개발 부담 줄임 <br/><br/>\
1. Dir 기반 : 캐시블록 공유상태 저장 공간 이용 <br/>\
- Full Map : 중앙 집중식, 복사본 포인터 <br/>\
- Limited : Full Map 작게 유지, 메모리 효율화 <br/>\
- Chained : 포인터를 Linked list로 연결, 분산식 <br/><br/>\
2. Protocol 기반 : 주소버스 감시, 캐시상 접근 검사 <br/>\
- Snoopy Protocol : Write Through(Update), Write Back(Invalid) <br/>\
- MSI Protocol : Shared 상태가 없어 여러 프로세서가 같은 값 읽을 때 유리 <br/>\
- MESI Protocol : 메모리가 가질 수 있는 4가지 상태 정의 <br/>\
- MOESI Protocol : Owned(캐시간 만 동기화) 추가 <br/><br/>\
# SW 기반 유지기법 <br/>\
1. 개념 <br/>\
- 컴파일러, OS 이용 <br/>\
- 잠재된 문제 검출 오버헤드 Runtime -> Compiletime 이동 <br/>\
- HW비해 간단, Cache 이용률 저하 <br/><br/>\
2. 방식 <br/>\
- 공유캐시 사용 : 모든 프로세스들이 하나의 캐시만 사용 <br/>\
- 공유변수 관리 : 공유되는 변수에 캐시 저장 않음 <br/>\
- 잠금변수 사용 : Locking 사용하여, 다른 프로세스 접근 못하도록 차단 <br/><br/>\
* 123회 응용 3교시 1번 <br/>\
* 라이지움 82회 관리 4교시 6번\
',

// Directory Protocol
'# 정의 : 캐시 정보 / 주기억장치 디렉토리 저장 / 일관성 유지 <br/>\
- 캐시의 정보상태(캐시블록의 공유상태, 노드 등)를 주기억장치의 디렉토리에 저장하여 일관성을 유지시키는 방법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/DirectoryProtocol.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Full Map Directory : 데이터 대한 Directory 주기억장치 저장, 포인터 상태 저장 <br/>\
- Limit Directory : Full Map Directory 작게 유지 <br/>\
- Chained Directory : Directory 포인터, Linked List 연결, 분산식 <br/><br/>\
# 특징 <br/>\
- 매커니즘 : 중앙 제어기, 지역 캐시 제어기 동작 제어, 보고 받아 일관성 유지 <br/>\
- 장점 : 대역폭 상대적으로 작음 <br/>\
- 단점 : 캐시 제어기, 중앙 제어기 간 통신 오버헤드 발생 <br/>\
- 활용 : 대규모 시스템(64개 이상 프로세서) <br/><br/>\
* 123회 응용 3교시 1번\
',

// Snoopy Protocol
'# 정의 : 다중프로세서 내 / 모든 캐시 제어기 / 스누피 프로토콜 이용 / 분산 기법 <br/>\
- 캐시 일관성 유지를 다중프로세서 내의 모든 캐시 제어기에 스누피 프로토콜을 이용하여 분산하는 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SnoopyProtocol.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 버스 감시 매커니즘 : 일관성 유지 위한 버스 감시 하드웨어 모듈 추가 <br/>\
- 캐시 일관성 프로토콜 : 데이터 블록 공유 상태 추적 <br/>\
- 스누피 제어기 : 다른 프로세서에 의한 메모리 접근 검사, 캐시 블록 상태 조절 <br/>\
- 쓰기 무효화 프로토콜 : 쓰기 수행시 다른 복사본 무효 만듦 <br/><br/>\
# 특징 <br/>\
- 매커니즘 : 캐시 일관성 유지 책임, 다중 프로세서 내 캐시 제어기들에게 분산 <br/>\
- 장점 : 대역폭이 충분히 크다면 좋은 성능 기대 <br/>\
- 단점 : 노드 수 증가시 대역폭 늘어나야하므로 확장성 좋지 않음 <br/>\
- 활용 : 버스 기반 다중 프로세서에서 적합 <br/><br/>\
* 123회 응용 3교시 1번\
',
  
// MESI
'# 정의 : Write Back / 캐시 일관성 유지 Protocol <br/>\
- 멀티프로세서가 시스템에서 캐시의 일관성을 유지하기 위하여 메모리가 가질 수 있는 4가지 상태를 정의한 프로토콜 <br/><br/>\
# 프로토콜 상태 <br/>\
<img src = "./img/MESI_ProtocolStatus.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 상세 설명 <br/>\
<img src = "./img/MESI.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/MESI_ProtocolDetail.png" style = "max-width:100%; height:auto;">\
', 

// PCI Express
'# 정의 : x1~x32 확장 가능 다수 레인 / 물리 계층 기반 / 고속 데이터전송 / 점대점 기기간 연결 프로토콜 <br/>\
- PCIe는 x1에서 x32까지 확장 가능한 다수의 레인으로 구성된 물리 계층 기반의 고속 데이터 전송을 제공하는 점대점 기기간 연결 프로토콜 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/PCIeArchitecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Transaction Layer : Packet Based Protocol / TLP 사용 통신, Tx 타입, 수신자 주소, 전송사이즈, 페이로드, CRC <br/>\
- Datalink Layer : 오류제어, 흐름제어 / CRC, CheckSum, Packet loss 패킷 흐름 제어 <br/>\
- Physical Layer : 인코딩, 레인 / GEN1~2(8b/10b), GEN3~4(128b/130b) 인코딩 <br/><br/>\
* 123회 응용 1교시 2번\
',

// DRAM
'# 정의 : 비트, 축전1기(Capacitor) / RAM <br/>\
- Dynamic RAM <br/>\
- 임의 접근 기억장치의 한 종류로, 정보를 구성하는 개개의 비트를 각기 분리된 축전기(Capacitor)에 저장하는 기억장치 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SRAMDRAMOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 직접도 높기 때문, 주기억장치 사용 <br/>\
- 전원 공급되더라도, 재충전 필요 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/DRAM_Architecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
# DRAM SRAM 비교 <br/>\
<img src = "./img/DRAMSRAMCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 1교시 4번\
',

// SRAM
'# 정의 : 장치 전원 공급 / 지속 보존 / RAM <br/>\
- Static RAM <br/>\
- 장치에 전원이 공급되는 한 그 내용이 계속 보존되는 임의 접근 기억 장치 <br/><br/>\
# 특징 <br/>\
- 충전 필요 없음 <br/>\
- 구조 복잡, 소비전력 많이 필요 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/SRAM_Architecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 1교시 5번\
',

// DDR SDRAM
'# 정의 : 상승 및 하강 에지 전송 / 클럭 주파수 증가 x / 전송속도 2배 향상 RAM <br/>\
- SDRAM 대비 클럭 신호의 상승 및 하강 에지에서 데이터를 전송함으로써 클럭 주파수를 증가시키지 않고 전송속도를 2배 향상 시킨 RAM <br/><br/>\
# 구성요소 <br/>\
- Bank : 데이터를 구분하여 저장할 수 있는 단위 <br/>\
- BL(Burst Length) : 한 번의 읽기/쓰기 명령에 따른 연속 입출력 데이터 개수 <br/><br/>\
# 주요기술 <br/>\
- 고속 트레이닝 기술 : R/W 회로 고속 상태 최적화 <br/>\
- DFE(Decision Feedback Equalization) : 반사 잡음 제거 회로 기술 <br/>\
- DLL(Delay Locked Loop) : D Ram 출력 데이터 외부 클럭 동기화 전송 회로 기술 <br/>\
- DCC(Duty Cycle Correction) : 연속되는 클록, 데이터 신호의 High,Low Pulse 폭 5:5 회로 기술 <br/><br/>\
* 123회 응용 1교시 1번\
',

// FeRAM
'정의 : 차세대 비휘발성 메모리 / 강유전체 <br/>\
- DRAM과 비슷한 구조를 갖고 있으나 강유전체를 가지고 있어 비휘발성을 가지며 기존 메모리에 비해 빠른 속도, 높은 쓰기/지우기 횟수, 낮은 전력을 사용하는 차세대 비휘발성 메모리',

// 병렬 컴퓨팅
'# 정의 : 다수 프로세서 / 여러개 프로그램, 분할된 부분 / 분담 동시 처리 프로세스 <br/>\
- 다수의 프로세서들을 이용하여 여러개의 프로그램들 혹은 프로그램의 분할된 부분들을 분담하여 동시에 처리하는 프로세스 <br/><br/>\
# Overview <br/>\
<img src = "./img/ParallelProcessingComputingOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 필요성 <br/>\
- 프로세서 처리 속도 한계 <br/>\
- 고성능 컴퓨터 요구 증대 <br/>\
- 인터넷 사용자 증대 <br/>\
- 딥러닝 기술 발전 <br/><br/>\
# 병렬처리 단위 종류 <br/>\
- Job Level : 독립적인 Job Program 단위로 병렬처리 <br/>\
- Task Level : Job 분할 <br/>\
- Process Level : Task 분할<br/>\
- Variable Level : 독립 연산 변수 <br/>\
- Bit Level : 가장 낮은 병렬 처리 <br/><br/>\
# 구현 위한 조건 <br/>\
1. 설계 부분 <br/>\
- 많은 수 프로세서들로 하나의 시스템 구성 필요 <br/>\
- 작고 저렴한 고속 프로세서 <br/>\
- 자원 공유성 <br/>\
-> VLSI 집적도 증가, 상호 배제 메커니즘 구현 <br/><br/>\
2. 실행 부분 <br/>\
- 프로그램의 분할 가능성 <br/>\
- 병렬처리가 순차처리 결과와 같아야 함 <br/>\
- 병렬 프로그램 언어와 컴파일러 개발 <br/>\
-> 문제 분할과 프로세스 간 통신 해결 필요, OpenCL, CUDA, OpenMP <br/><br/>\
# 병렬 컴퓨팅 구성시 문제점 및 해결방안 (<font color = "red">분스동캐</font>) <br/>\
1. 분할 <br/>\
- 문제점 : 태스크 단위 결정 문제 <br/>\
- 해결방안 : Fine, Medium, Coarse, Very Coarse <br/><br/>\
2. 스케줄링 <br/>\
- 문제점 : 분할된 테스크 프로세서 배정 방법 문제 <br/>\
- 해결방안 : 정적, 동적 <br/><br/>\
3. 동기화 <br/>\
- 문제점 : 공유 데이터 무결성 <br/>\
- 해결방안 : 상호배제, 세마포어, 모니터 <br/><br/>\
4. 캐시 메모리 관리 <br/>\
- 문제점 : 여러 프로세서 하나의 버스 메모리 공유, 활용 문제 <br/>\
- 해결방안 : 사상함수, 교체 알고리즘(FIFO,LFU,LRU), 쓰기 정책(Write Through,Back) <br/><br/>\
* ITPE 6회 관리 3교시 2번\
',

// Flynn 분류
'# 정의 : 명령어 / 데이터 처리 / 병렬 컴퓨팅 체계  <br/>\
- 가장 널리 사용되는 명령어와 데이터 처리로 분류한 병렬 컴퓨팅 체계 <br/><br/>\
# 유형 <br/>\
1. SISD(Single Instruction stream, Single Data stream) <br/>\
<img src = "./img/SISD.png" style = "max-width:100%; height:auto;"><br/>\
- 개념 : 한번에 하나씩 명령어, 데이터 순차적 처리 단일 프로세스 시스템 <br/>\
- 특징 : 일반(폰노이만), 단일 명령-단일 흐름, 파이프라인 구조 사용, 시간적인 병렬처리 가능 <br/><br/>\
2. SIMD(Single Instruction stream, Multiple Data stream) <br/>\
<img src = "./img/SIMD.png" style = "max-width:100%; height:auto;"><br/>\
- 개념 : 하나의 제어장치, 여러개 ALU 이루어진 배열 프로세스 <br/>\
- 특징 : 단일 명령-다중 데이터, 제어,메모리(1:N), 스칼라,벡터 하드웨어 컴퓨터, 배열 처리기 <br/><br/>\
3. MISD(Multiple Instruction stream, Single Data stream) <br/>\
<img src = "./img/MISD.png" style = "max-width:100%; height:auto;"><br/>\
- 개념 : 여러 개의 처리기, 하나의 데이터 스트림 명령어 실행 구조 <br/>\
- 특징 : 다중 명령-단일 데이터, 이론적으로만 존재 <br/><br/>\
4. MIMD(Multiple Instruction stream, Multiple Data stream) <br/>\
<img src = "./img/MIMD.png" style = "max-width:100%; height:auto;"><br/>\
- 개념 : 여러 개의 처리기, 서로 다른 명령어 데이터 처리 구조 <br/>\
- 특징 : 다중 흐름-다중 데이터, LAN,컴퓨터,공유버스,다중포트, 처리기 독립 수행, 프로그램 작성 어려움 <br/><br/>\
* 125회 관리 2교시 3번\
',

// 기억장치 액세스 분류
'# 종류 <br/>\
1. SMP(Shared Memory Processors) <br/>\
- 두개 이상의 프로세서, 공유버스로 상호 연결 시스템 <br/>\
- 장점 : 프로그래밍 쉬움(기존 단일 처리기 시스템과 동일) <br/>\
- 단점 : 프로세서 수 제한, 버스공유 인한 트래픽 문제, 대기시간 존재 <br/>\
<img src = "./img/SMP.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. DMP(Distributed Memory Processors) <br/>\
- Loosely Coupled 구조, 각 프로세서 지역 기억장치 소유, 타 프로세서 통신 Message <br/>\
- 장점 : 공유 자원 경합 감소 <br/>\
- 단점 : 시스템 수 따라 오버헤드 증가, 통신 프로토콜 지연시간 증가 <br/><br/>\
* 125회 관리 2교시 3번\
',

// 상호 연결망
'# 상호연결망 개념 : Processor, 깅거장치 / 연결 네트워크 <br/>\
- 병렬처리 시스템에서 처리요소들과 기억장치들 사이를 연결하여 주는 네트워크 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MemoryAccessModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 종류 <br/>\
1. 정적 상호연결망 : 요소간 직접 연결 경로, 연결구조 고정 <br/>\
- 1차원 토폴로지 : Linear <br/>\
- 2차원 토폴로지 : Star, Ring, Tree, Mesh, Torous(Mesh 상하좌우 연결), Systolic(▨) <br/>\
- 3차원 토폴로지 : 완전연결, 3차원 큐브 <br/><br/>\
2. 동적 상호연결망 : 실행시간 동안 변경, 패턴, 상황 따라 경로 설정 연결망 <br/>\
- 버스구조 : (단일)-캐시 o,x, 계층 버스 <br/>\
- 크로스바 : 프로세서, 기억장치 완전 연결성 <br/>\
- 다단 : 근원지, 목적지 사이 여러개 스위치 요소 <br/>\
<img src = "./img/InterconnectionNetworkBus.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/InterconnectionCrossbarMultistage.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 2교시 3번 \
',

// UMA 
'# 정의 : 상호연결망 / 주기억장치 공유 / 병렬 컴퓨팅 <br/>\
- Uniform Memory Access <br/>\
- 모든 프로세서들이 상호연결망에 의해 접속된 주기억장치 공유 방식 병렬 컴퓨팅 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/UMA.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 장점 : 하드웨어 간단, 프로그래밍 편리 <br/>\
- 단점 : 공유자원 경합, 시스템 크기 한계 <br/>\
- 사례 : 공유-버스(30 이하), 크로스바 MIN(64 이하) <br/><br/>\
# 관계 <br/>\
- UMA : 단일 프로세서 처리 극복 <br/>\
- NUMA : UMA 시스템 크기 극북 <br/>\
- NORMA : 원격 기억장치 직접 접근 불가 <br/>\
- COMA : 캐시 사용 <br/><br/>\
* ITPE 6회 관리 3교시 2번\
',

// NUMA
'# 정의 : UMA 한계 극복 / 더 큰 규모 시스템 구성 / 병렬 컴퓨팅 모델 <br/>\
- Non-uniform Memory Access <br/>\
- UMA 모델의 한계를 극복하고 더 큰 규모의 시스템을 구성하기 위한 병렬 컴퓨팅 모델 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/NUMA.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 다수 UMA 모델들이 상호연결망에 의해 접속 <br/>\
- 전역 공유기억장치 (GSM) 갖음 <br/><br/>\
# 세부 종류 <br/>\
- 지역(Local) 기억장치 액세스 <br/>\
- 전역(Global) 기억장치 액세스 <br/>\
- 원격(Remote) 기억장치 액세스 <br/><br/>\
* ITPE 6회 관리 3교시 2번\
',

// NORMA
'# 정의 : 원격 기억장치 / 직접 액세스 x 구조 <br/>\
- No-Remote Memory Access <br/>\
- 프로세서가 원격 기억장치는 직접 액세스할 수 없는 병렬 컴퓨팅 모델 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/NORMA.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 프로세서들과 기억장치들은 메시지-전송(Message-passing) 지원하는 상호연결 접속 <br/>\
- 분산-기억장치 시스템(Distirbuted-memory)로도 부름 <br/>\
- 상호 연결망 : Mesh, Hypercube, Torus <br/><br/>\
* ITPE 6회 관리 3교시 2번\
',

// COMA
'# 정의 : 캐쉬 동작 / 하나의 공통 주소 공간 / 병렬 컴퓨팅 모델 <br/>\
- Cache Only Memory Access <br/>\
- 각 프로세서가 가지고 있는 기억장치들이 모두 캐쉬로 동작하며, 하나의 공통 주소 공간을 가지는 병렬 컴퓨팅 모델 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/COMA.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 시스템 내 기억장치 존재하지 않음 <br/>\
- 다른 캐시 대한 엑세스는 분산 캐시 디렉토리에 의해 지원 <br/>\
- 초기 데이터들이 임의 캐시 저장, 실행 시간동안 데이터 사용할 프로세서의 캐시로 이동 <br/>\
- 사례 : Data Diffusion Machine(DDM), KSR-1 <br/>\
- NUMA + Cache 일관성 = ccNUMA(Cache-Coherent NUMA) <br/><br/>\
* ITPE 6회 관리 3교시 2번\
',

// ARM
'# 정의 : RISC / 모바일, 임베디드 / 아키텍처 <br/>\
- 영국 ARM 사에서 RISC 기반 설계하는 모바일 및 임베디드 시스템 전용 32bit Processor CPU 아키텍처 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/ARM_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성 <br/>\
- ARM 프로세서 : 임베디드 디바이스제어 <br/>\
- 메모리 : Cache, ROM, DRAM <br/>\
- AMBA Protocol : On-chip 형태 아키텍처 <br/>\
- ARM Bus : Master(다른 디바이스 전송), Slave(Master 요청) <br/>\
- Controller : Memory, Interrupt <br/><br/>\
# 처리 과정 <br/>\
- Fetch : 명령어 Read, 명령 파이프 저장 <br/>\
- Decode : 명령어 해독, 다음 명령어 준비 <br/>\
- Execute : ALU 결과 생성 <br/>\
- Memory : ALU 결과 버퍼에 저장 <br/>\
- Write : ALU 결과 레지스터 저장 <br/><br/>\
* 120회 응용 3교시 2번\
',

// 분기 예측 기술
'# 정의 : 종료 대기 않고 / 다음 분기 예측 / 성능 저하 최소화 / CPU 실행 기술<br/>\
- 파이프라인을 통한 명령 실행 중 조건 분기 명령의 실행이 종료될 때까지 다음 명령을 대기하지 않고 분기를 예측 실행하여 파이프라인 처리 성능 저하를 최소화하는 CPU 실행 기술 <br/><br/>\
# 필요성 <br/>\
<img src = "./img/BranchPredictionNeeds.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
- 분기 방향 예측 <br/>\
- 분기 목적지 예측 <br/>\
- 예측 실행 <br/><br/>\
<font color = "red">* Hazard : 파이프라인의 진행을 연기해야 하는 상황 유발 원인 <br/>\
-> 구조적, 데이터, 제어 <br/>\
* Stall : 정지, 멎다 의미 </font><br/><br/>\
* 120회 응용 4교시 1번\
',

// 분기 방향 예측
'# 개념 : 분기 여부 예측 기법 <br/>\
- 실행될 파이프라인 조건 분기문의 분기 여부(taken or not taken) 예측 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BranchPredictionDirection.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 분기 요소 : taken(분기), not taken(분기 않음) <br/><br/>\
# 예측 기법 <br/>\
1. 정적 분기방향 예측 <br/>\
- Always Taken : 모든 분기문 분기 <br/>\
- Always Not Taken : 모든 분기문 분기 않음 <br/>\
- Backward Taken : 뒤로 가서 분기 설정 <br/>\
- Profiling 정보 : 코드별 전송 대한 힌트 제공 <br/><br/>\
2. 동적 분기방향 예측 <br/>\
- 2bit 예측 : 이진수 2자리로 4가지 구분 <br/>\
- BHR : 지금까지 분기 내역 bit 표현 <br/>\
- Prediction Register : 모든 분기에 사용 <br/><br/>\
* 120회 응용 4교시1 번\
',

// 분기 목적지 예측
'# 개념 : 목적지 PC 값 예측 기법 <br/>\
- 분기문이 어디로 분기할지 목적지(target) PC 값을 예측하는 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BranchPredictionDestiantion.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 분기 요소 : 무조건 분기, 조건 분기, 서브루틴/함수 호출,복귀 <br/><br/>\
# 예측 기법 <br/>\
1. 직접 분기문 예측 <br/>\
- 과거 실행 주소 <br/>\
- Directed-mapped <br/>\
- BTB(Branch Target Buffer) <br/><br/>\
2. 간접 분기문 목적지 예측 <br/>\
- 분기 목적지 레지스터 or 메모리 존재 <br/>\
- RAS(Return Address Stack) 이용 리턴 목적지 예측 <br/>\
- 이력기반 iBTB(Indirect Branch Target Buffer) 통해 예측 <br/><br/>\
* 120회 응용 4교시 1번\
',

// 예측 실행
'# 정의 : 예측 실패 대한 보상 / 성능 나은 방향 / 명령어 처리 기법 <br/>\
- 불확실한 예측 기반 더 나은 성능을 가져오는 방향으로 명령어를 처리하는 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SpeculativeExecution.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 필요 장치 <br/>\
- 미래 예측 장치 : 확실하지 않은 명령 미리 수행 장치 <br/>\
- ROB(Reorder Buffer) : 실행 계속 진행 장치 (Issue->Execute->Write Result->(Commit)) <br/>\
- UNDO : 예측 틀렸을 경우 원상태 복구 장치 <br/><br/>\
# 동작 원리 <br/>\
- 분기문 예측 실행 : 정적/동적 분기방향, 분기 목적지 예측 명령어 실행 <br/>\
- 예측 성공시 : Commit, 다음 명령어 수행 <br/>\
- 예측 실패시 : UNDO, 실패한 파이프라인 개수 만큼 CPU 클럭 주기 낭비 <br/><br/>\
* 120회 응용 4교시 1번\
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

// Cloud GPU
'# 암기 (<font color = "red">응라드</font>)<br/>\
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
  
// Many core CPU
'# 정의 : 코어 집적, 극한 병렬화 프로세서 <br/>\
- CPU에 수십개에서 수백개의 코어를 집적하여 극한의 병렬화된 실행을 목적으로 하는 프로세서 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ManycoreCPU.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
1. 프로세싱 <br/>\
- 병렬 컴퓨팅 : NUMA, 멀티 쓰레딩 병렬 <br/>\
- 캐시 일관성 : 디렉토리 프로토콜, 잠금 메커니즘 <br/>\
- 하드웨어 추상화 : 프로세서 처리 추상화 레이어 계층 제공 <br/><br/>\
2. 메모리 <br/>\
- Messaing Passing : 병렬 처리 정보 교환 프로토콜 <br/>\
- Scratchpad memory : 오퍼랜드, 버퍼, 인터럽트 등에 사용 고속 처리용 메모리 <br/>\
- 메모리 주소 분할 : 분산 메모리 구조, 주소 분할 병렬처리 지원 <br/><br/>\
# 멀티코어 프로세서 비교 <br/>\
<img src = "./img/ManyCoreMultiCoreCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 응용 1교시 5번\
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

// 양자컴퓨팅
'# 양자 : 물리량 최소 단위<br/>\
- 물리학의 기본 이론인 영자 역학에서 유래한 것으로 물질의 입자성과 파동성 특성을 기술하는 물리량의 최소 단위 <br/><br/>\
# 양자 컴퓨터 : 양자역학 연산 장치 / 상태중첩, 얽힘 <br/>\
- 양자역학에서 예측하는 가장 특이한 특성인 상태중첩(Superposition)과 얽힘(Entanglement)을 이용하여 효율적으로 수행하는 기계장치 <br/><br/>\
# 양자 컴퓨팅 : 큐비트 단위 컴퓨팅 기법 / 상태중첩, 얽힘 <br/>\
- 얽힘이나 중첩등의 양자역학적 현상을 이용하여 큐비트 단위로 자료를 처리하는 컴퓨팅 기법 <br/><br/>\
# 암기 : 원리-초양중복얽병순 <br/><br/>\
# 원리 <br/>\
<img src = "./img/QuantumProperty.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 알고리즘 <br/>\
1. Shore <br/>\
- 특징 : 인수분해 문제 해결 속도 감소 <br/>\
- 공개키 : 안전하지 않음 <br/><br/>\
2. Grover <br/>\
- 특징 : 정렬되지 않은 DB 원소 검색속도 향상 <br/>\
- 대칭키 : 키사이즈 증가 필요 <br/>\
- 해시 : 암호 알고리즘 출력길이 증가 필요 <br/><br/>\
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
# 특징 <br/>\
- 멀티쓰레드 <br/>\
- 선점형 지원 <br/>\
- 저전력 기반 <br/>\
- 선택적 커널모듈(저사향 고려, 커널 모듈 선택) <br/>\
- C언어 기반 <br/><br/>\
# 구성 (<font color = "red">하통커유</font>)<br/>\
- Hardware Abstraction Layer : HAL-센서드라이버탑재 <br/>\
- 통신프로토콜스택 : Ad-hoc NW 유사, 수백 노드간 P2P통신 <br/>\
- 커널 : 멀티쓰레드 지원, 우선순위 기반 RR, 세마포어, 메시지 큐, 저전력 관리 <br/>\
- User API : 센서 노드에 사용되는 HW 제어, 추상화하여 사용자에 API형태 제공 \
',

// Flash Memory 
'# 정의 : 전원 제거 / 정보 유지 / 비휘발성 기억 장치 <br/>\
- 전원이 제거되어도 정보를 그대로 유지하는 비휘발성 기억 장치 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/FlashMemoryOVerview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 종류 <br/>\
- NAND : 수직 배열, 대용량 <br/>\
- NOR : 수평 배열, 적은 용량, 빠른 속도 <br/><br/>\
# 매커니즘 <br/>\
- Write : 고전압 / Floating Gate에 Charge 주입 <br/>\
- Read : 약전압 / Threashold Voltage Passing Check <br/><br/>\
* 123회 응용 2교시 2번\
',

// NAND Flash Memory
'# 정의 : 플래시 메모리 / 직렬 배열 <br/>\
- 반도체의 셀이 직렬로 배열되어 있는 플래시 메모리의 한 종류 <br/><br/>\
# 종류 <br/>\
<img src = "./img/NandFlashType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 용량 늘리기 쉬움 <br/>\
- 셀의 주소를 기억할 필요가 없음 <br/>\
- 소형화, 대용량화 -> 모바일 및 전자제품 저장기기로 사용 <br/>\
- 속도 느림 (NOR Flash Memory는 속도 빠름) <br/>\
<img src = "./img/NANDFlash.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형별 비교 <br/>\
<img src = "./img/NANDFlashTypeCopmare1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NANDFlashTypeCopmare2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 응용 2교시 2번\
',

// eMMC
'# 정의 : 고속처리 / <font color = "red">Controller + NAND</font> / <font color = "red">임베디드</font> 전용 메모리 반도체 <br/>\
- embedded Multi Media Card <br/>\
- 데이터 고속처리를 위해 컨트롤러와 NAND Flash Memory를 통합하여 제품에 내장한 임베디드 기기 전용 메모리 반도체 <br/><br/>\
# 특징 <br/>\
- 고집적 : 제어칩 캡슐화, 면적 절약 <br/>\
- 고성능 : Cache, Memory Array / 읽기 쓰기 성능 우수 <br/><br/>\
# 구성도 (<font color = "red">CICM</font>)<br/>\
<img src = "./img/eMMC_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- CLK : 호스트로부터 데이터 전송 동기화 클럭 신호 출력 사용 <br/>\
- CMD : Host에서 명령어 보내는데 사용 <br/>\
- DAT[0:7] : Host eMMC간 데이터 전송 사용 <br/>\
- MMC Controller : NAND Flash Memory 관리 주요 기능 구현 <br/><br/>\
# 기술요소 <br/>\
- ECC(Error Chedking & Correction) : 메모리 오류 검출, 위치 계산 오류 정정 <br/>\
- Wear Leveling : 셀 고루 돌아가면서 읽기/쓰기 기능 <br/>\
- BBM(Bad Block Management) : 불량 Blcok 관리 기술 / Bad Block Table, 회피 방법 <br/><br/>\
# 표준별 속도 <br/>\
<img src = "./img/eMMC_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 합숙 124회 3일차 관리 1교시 13번\
',

// UFS
'# 정의 : <font color = "red">풀 듀플랙스</font> / 모바일 App / 전기 I/F 표준 <br/>\
- MicroSD에 비해 5배 이상의 속도가 가능하며, 풀 듀플렉스(읽기/쓰기) 방식을 채택한 모바일 애플리케이션 전기 인터페이스 및 기기 신세대 표준 <br/>\
<font color = "red">* Full Duplex : 두 대의 단말기가 데이터 송수신 하기위해 동시에 독립된 회선 사용 통신 방식 </font><br/><br/>\
# 인터페이스 구조 <br/>\
- 차등신호 : 높은 잡음 여유도 <br/>\
- 직렬 인터페이스 기술 : 저전력 저전압 고속 신호<br/>\
- MIPI : Mobilie Industry Processor IF <br/><br/>\
# Protocol <br/>\
- SCSI : 다중 스레드, 동시 명령, 대기열 제공<br/>\
- UniPro : I/O 오류 자동 감지 복구<br/>\
- M-PHY : 안정적 데이터 전송 <br/><br/>\
* ITPE 합숙 124회 3일차 1교시 3번\
',

// MoS
'# 정의 : 비휘발성 메모리, 초저지연 반도체 저장장치 / 공간 통합 / 내부 동작 하드웨어 자동화 / 영구 메모리 기술 <br/>\
- Memory Over Storage <br/>\
- 비휘발성 메모리(NVDIMM) 용량과 초저지연(ULL) 반도체 저장장치(SSD)의 용량을 하나의 공간으로 통합하고, 내부 동작을 하드웨어로 자동화한 영구 메모리 기술 <br/><br/>\
# 특징 <br/>\
- 슈퍼 컴퓨터 활용 <br/>\
- 높은 저장 용량 : 메모리 슬롯당 4배 이상 (TB) 수준 저장 <br/>\
- 빠른 데이터 처리 속도 : 휘발성 메모리(D램) 유사 처리속도 <br/>\
- 기존NVDIMM-SSD 재사용 : 기존 D램 메모리 규격, 고속 플래시 저장 장치 기술 재사용 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MoS_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동작원리 <br/>\
- 사용자 모든 메모리 요청 가능한 메인보드, CPU내부의 MCH(Memory Controller Hub) 적용 방식 구현 <br/>\
- 사용자 메모리 요청 NVDIMM 캐시 메모리 처리 > 캐시 메모리x 데이터 SSD Read <br/>\
- MCH 내부에서 하드웨어로 SSD 입출력 직접 처리 > 초저지연 SSD 발생 오버헤드 완화 <br/><br/>\
# 기술요소 <br/>\
- NVDIMM : 고성능 비휘발성 메모리 기술 <br/>\
- 메모리 요청 : 캐시 메모리 <br/>\
- 메모리 통합 : SSD, NVDIMM통합 기술 <br/>\
- 속도 향상 : MCH 내부에서 SSD 입출력 처리, 에너지 절감 및 데이터 속도 향상 <br/><br/>\
* ITPE 합숙 124회 4일차 1교시 13번\
',
  
// CPU
'<img src = "./img/CPU.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 2교시 8번\
',
  
// 뉴로모픽
'# 정의 : 뉴런 / Action Potential 원리 <br/>\
- 두뇌 뉴런에서 신호 전달방식인 Action Potential 원리 모방한 반도체 기술 <br/><br/>\
# 구조도 <br/>\
<img src = "./img/NeuromorphicChipStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. Synaptic Core <br/>\
- 입력 뉴런 : axon, 이전코어에서 신호 수신 <br/>\
- 출력 뉴런 : dendrite, 다음 코어로 신호 전달 <br/>\
- Synapse Crossbar : synapse, 입력과 출력 뉴런 연결 <br/><br/>\
2. 처리신호 <br/>\
- Weight : 출력 → 입력 신호 전달 활성화 <br/>\
- spike : 뉴런 통해 전달되는 임계 전압 <br/>\
- PRNG : 뉴런에 대한 의사 난수 가중치<br/><br/>\
# 기술 선점 현황 <br/>\
- 미국 : BRAIN Initiative / 백악관 / 뇌세포 유형, 뇌회로도 스케일, 신경활동 모델링 <br/>\
- 유럽 : Human Brain Project / EU / 인간 두뇌 시뮬레이션 기반, 컴퓨팅 아키텍처 <br/>\
- 중국 : China Brain Project / 정부 / 신경망칩 양산, 개방형 플랫폼 구축 <br/><br/>\
# 기술 개발 현황 <br/>\
- 미국 : Intel / 6천 2백만개 뉴런 시스템 구현 <br/>\
- 유럽 : Brain Scales / 실시간 10,000 배에 달하는 뉴런 모델 구현 <br/>\
- 중국 : Hybrid Tianjic Chip / Neuromorphic 컴퓨팅에 주류 딥러닝 기술 결합\
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
# 선택기준 <br/>\
1. 시스템 관점 <br/>\
- CPU 사용률(CPU Utilization) : 전체 시간중 CPU 작업 처리시간 비중<br/>\
- 처리량(Throughput) : 단위 시간당 처리하는 프로세스 개수 <br/><br/>\
2. 프로세스 관점 <br/>\
- 응답시간(Response Time) : 대화식시스템에서 요청후 응답까지 시간 <br/>\
- 대기시간(Wating TIme) : 프로세스가 준비 큐 내에서 대기하는 시간<br/>\
- 반환시간(Turnarround Time) : 프로세스가 시작해서 끝날때까지 시간<br/><br/>\
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
# Multi Level Feedback Queue : 작업들을 여러 종류의 그룹으로 나누어 여러개의 큐를 이용하는 스케줄링 기법 <br/><br/>\
# 특징 : 큐별 차등 시간 부여 <br/>\
<img src = "./img/MLFQ.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 3교시 6번\
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
- 비선점형 : SJF, Priority <br/>\
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
# 구성요소 <br/>\
- Task, 실행시간, 주기, 우선순위 <br/>\
- CPU 이용율 : sum(실행시간/주기) <br/><br/>\
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
# Task간 동기화 방법 : 여러개의 Task가 공유 데이터에 접근하는 경우, 동일한 값을 얻을 수 있도록 맞추는 작업 <br/><br/>\
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
- 엄격한 교대 : 자원 체킹<br/>\
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
# 구성요소 (<font color = "red">AMANR</font>)<br/>\
<img src = "./img/BankersAlgorithmAttribute.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 실행순서 <br/>\
1. 현재 사용 가능한 리소스 산정 : Available <br/>\
2. 추가 요구량 산정 : Need Table<br/>\
3. 수행 가능 프로세스 검사 : Available / Need 비교 <br/>\
4. 프로세스 순서 산출 <br/><br/>\
# 코드 <br/>\
<img src = "./img/BankersAlgorithmPseudoCode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 흐름도 <br/>\
<img src = "./img/BankersAlgorithmFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Understand <br/>\
<img src = "./img/BangkerAlgorithmUnderstand.png" style = "max-width:100%; height:auto;">\
',
  
// Wait-Die, Wound-Wait
'# 개념 : 교착상태를 회피하기 위한 요청 시점 기반 매커니즘 <br/><br/>\
# 동작비교 <br/>\
- Wait-Die : 비선점 기반, Old 요청일 경우 Wait, Young 요청일 경우 Die <br/>\
- Wound-Wait : 선점 기반, Old 요청일 경우 Wound, Young 요청일 경우 Wiat <br/><br/>\
# 특징비교 <br/>\
<img src = "./img/WaitDieWoundWaitCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 97회 응용 1교시 16번\
',

// 자원할당 그래프
'# 정의 : 교착상태 탐지 <br/>\
- 상태(Deadlock) 탐지를 목적으로 프로세스와 자원 간의 관계를 정점(Vertex)과 간선(Edge)로 표현한 그래프 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/ResourceAllocationGraph.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 교착상태 판별 <br/>\
<img src = "./img/ResourceAllocationGraphDeadlockTest.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 판별 사례 <br/>\
<img src = "./img/ResourceAllocationGraphDeadlockExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 응용 1교시 14번\
',
  
// In-Memory Computing 
'# 정의 : 어플리케이션을 구동하는 컴퓨터의 메인 메모리에 DB 데이터와 같은 주요 데이터를 저장하고 처리하는 컴퓨팅 기술 <br/><br/>\
# 특징 : 메인메모리 DB구축, 직접 저장 관리, 디스크 관리 최소화 <br/><br/>\
# 스택 <br/>\
<img src = "./img/InMemoryComputing.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
<img src = "./img/InMemoryComputingTech.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 합숙 125회 관리 1교시 8번 <br/>\
* 119회 4교시 6번\
',
    
// In-Memory DataGrid
'# 정의 : 고가용성, 확장성 / 여러 메인 메모리 / 분산 메모리 시스템 <br/>\
- 고가용성과 확장성을 보장하기 위해 여러 메인메모리(MM)으로 데이터를 나누어 저장하는 분산 메모리 시스템 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/IMDG_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요기술 <br/>\
1. 데이터 처리 <br/>\
- Key-Value : Key를 이용해 데이터 분산 저장 <br/>\
- Colloection API : 여러 노트 대상 Hash Map이나 Hash Set을 사용 <br/><br/>\
2. 트랜잭션 기술 <br/>\
- Distributed Event : MQ 시스템 <br/>\
- Distributed Lock : 분산시스템 하나의 Lock 동기화 <br/><br/>\
3. 분산기술 <br/>\
- Clustering : 다수 메모리, 하나의 큰 메모리 구축 <br/>\
- Replication : 여러 서버에 데이터 분산, 복제 관리 <br/><br/>\
# IMDG, RDBMS, NoSQL 비교 <br/>\
<img src = "./img/IMDG_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 응용 1교시 5번\
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
  
// Auto Scale Up, Out
'# Auto Scale Up : 수직적 확장, 비용 부담 큼, 확장성 제약, 단일 장비 한계, 심플한 구성, 변화 없음 <br/><br/>\
# Auto Scale Out : 수평적 확장, 상대적 저렴, 용량 확장성 편리, L4등을 통해 확장, 상대적으로 복잡, 가용성 증가 <br/><br/>\
# 시점 따른 기법 <br/>\
- Schedule 기반 : 이벤트 일정 미리 알고 있는 경우 <br/>\
- 부하 기반 : 모니터링, 일정 수준 넘을시 알람 통보, 수행 <br/><br/>\
# 서비스 적용 방안 제언 : 사전검토 / 구축 / 운영 -> Capex, Opex 절감, 부하 분산, 빠른 서비스 제공 <br/><br/>\
* 라이지움 88회 관리 2교시 1번\
',
  
// Library 
'# 정의 : 함수, 데이터 타입 집합 <br/>\
- 소프트웨어 개발에서 자주 쓰고 기초적인 함수 중복 개발을 피하기 위해 표준화된 함수 및 데이터 타입을 만들어 모아 놓은 집합 <br/><br/>\
# 종류 <br/>\
- 정적(SLL) : 컴파일 시점에서 연결 <br/>\
- 동적(DLL) : 실행 파일에서 라이브러리 기능 가능시에만 참조 및 호출 <br/><br/>\
# DLL 종류 <br/>\
1. Link <br/>\
- 묵시적(Implicit) 링킹 : OS에서 프로그램 실행시 함수 초기화 이용 방법 <br/>\
- 명시적(Explicit) 링킹 : 프로그램 실행중일 때, API 이용하여 DLL 사용 방법 <br/><br/>\
2. Type <br/>\
- 정규 DLL : C 함수 형태, 다른 프로그램과 연결 <br/>\
- 확장 DLL : Class 형태 호출, MFC 원활 연결 <br/><br/>\
# DLL 장점 <br/>\
- 리소스 절감 : 코드 모듈화 <br/>\
- 배포 설치 : DLL 독립적 수정, 배포 가능 <br/>\
- 개발 효율 : 분담 작업 인한 효율성 제고 <br/><br/>\
# 유의 사항 <br/>\
- DLL 선점 상황일 시, 프로그램 치명적 오류 발생 가능성 <br/>\
- DLL 종속성 : 프로그램, DLL이 다른 DLL 함수 사용하는 경우 유의 <br/><br/>\
* 123회 응용 1교시 3번\
',

// DLL
'# 정의 : 프로그램 실행될 때 사용 / 함수, 데이터 / 모듈 라이브러리 <br/>\
- 프로그램이 실행될 때 다른 모듈에 의해 사용될 수 있는 함수나 데이터르 가지고 있는 모듈 라이브러리 <br/><br/>\
# DLL 개념도 <br/>\
<img src = "./img/DLL_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
- Function : 내부,외부 DLL <br/>\
- Link : 묵시적(살행파일 자체 포함),명시적 링킹 (API) <br/><br/>\
# 동적,정적 라이브러리 비교 <br/>\
<img src = "./img/StaticDynamicLibrarycompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 응용 1교시 3번\
',

// 정규 표현식
'# 정의 : 규칙 / 문자열 집합 / 표현 언어 <br/>\
- 특정한 규칙을 가진 문자열의 집합을 표현하는데 사용하는 형식언어 <br/><br/>\
# 분류 <br/>\
- POSIX : 표준 <br/>\
- PCRE : 확장 <br/><br/>\
# 표현 <br/>\
<img src = "./img/Regex_Grammer.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 장점 : 대규모 문자열 치환, 검색 효율성, 성능 향상 <br/>\
- 단점 : 인간의 직관적 이해 불가, 작성 및 관리의 어려움 <br/><br/>\
# 적용 <br/>\
- 문자열 처리 빈번한 웹 프로그래밍 <br/>\
- IPS NW 트래픽 분석 <br/><br/>\
* 121회 관리 1교시 11번\
',
  
// 유한 오토마타
'# 정의 : 프로그램, 논리회로 / 수학적 모델 <br/>\
- 유한한 개수의 상태를 가지는 기계로, 컴퓨터 프로그램과 전자 논리회로 설계에 사용되는 수학적 모델 <br/><br/>\
# 구성요소 <br/>\
1. 상태 <br/>\
- Start State : 오토마타가 입력을 처리하기 전의 상태 <br/>\
- Accept or Final State : 모든 입력값 대한 상태 집합, 이중원 <br/><br/>\
2. 전이 <br/>\
- 전이 : 조건 만족시 일련 동작 <br/><br/>\
# 유형 <br/>\
- 결정적 유한 오토마타(DFA) : 하나의 입력, 하나의 결과값 <br/>\
- 비결정적 유한 오토마타(NFA) : 하나의 입력, 여러개 결과값 <br/>\
<img src = "./img/FiniteAutomataType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 정규표현식, 유한오토마타 활용방안 <br/>\
1. HW <br/>\
- 디지털 회로 : 설계 가능 논리소자, 로직, 컨트롤러, 논리회로, 플립플롭 <br/><br/>\
2. SW <br/>\
- 문자열 검색, 필터링, 치환 : Cloud, Big Data, CLI OS, VI Editor <br/>\
- NW 보안 : FW, IPS, ITM, Signature Rule Traffic 검색 <br/><br/>\
* 121회 관리1 교시 11번\
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

// ThunderBolt Interface
'# 정의 : 인텔 차세대 데이터 전송 규격<br/>\
- 고속의 전송도로로 데이터와 음성, 디지털 영상을 동시에 전송 가능한 코드명 Lite peak로 시작된 인텔의 차세대 데이터 전송규격 <br/><br/>\
# 주요특성 <br/>\
- Dual Protocol : 단일 케이블 내 Data(PCI-E) + 영상(Display Port) 지원 <br/>\
- 범용성 제공 : 썬더볼트 3에서 USB C(Type-C) 지원 <br/>\
- 라이선스 개방 : 썬더볼트 프로토콜 규격 공개, 무료 라이선스 전환(18년) <br/><br/>\
* 117회 응용 1교시 11번\
',
);
