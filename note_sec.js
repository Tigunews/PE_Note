var question = question.concat(
'보안 아키텍처',
'보안 Overview',
'내외부 정보보안 위협',
'공격 유형 Overview',
'ATT and CK',
'암호학',
'[암호학]- Kerckhoff 원리',
'[암호학]- 혼돈과 확산',
'[암호학]- 암호문 분석(공격모델)',
'[암호학]- 알고리즘 보안강도',
'[암호학]- 블록암호화',
'[블록암호화]- Feistel Cipher',
'[블록암호화]- SPN Cipher',
'[블록암호화]- 블록암호화 운영모드',
'[블록암호화 운영모드]- ECB',
'[블록암호화 운영모드]- CBC',
'[블록암호화 운영모드]- PCBC',
'[블록암호화 운영모드]- CFB',
'[블록암호화 운영모드]- OFB',
'[블록암호화 운영모드]- CTR',
'[암호]- Base64',
'[비대칭 암호]- 디피헬만 알고리즘',
'[비대칭 암호]- ECC',
'[비대칭 암호][ECC]- ECDSA',
'[단방향 암호]- Hash Function',
'[단방향 암호][Hash Function]- Hash Algorithm',
'[Hash Algorithm]- MDC',
'[Hash Algorithm]- MAC',
'[Hash Algorithm]- Hash Salt',
'[Hash Algorithm]- Key Stretching',
'경량 암호',
'[경량 암호]- LSH 암호화',
'[경량 암호]- LEA 암호화',
'형태 보존 암호화',
'순서 보존 암호화',
'동형암호',
'[동형암호]- 준 동형암호',
'[동형암호]- 완전 동형암호',
'보안이슈, 대응방안',
'SW 보안 약점',
'NAC',
'WNAC',
'[보안솔루션]- IPS',
'[보안솔루션]- IDS',
'[공격기법]- XSS',
'[공격기법]- SSRF',
'[공격기법]- DDoS',
'[공격기법]- Race Condition',
'[DDoS]- 스크러빙 센터, 컨텐츠 전송 네트워크',
'[DDoS]- TCP Traffic Flooding',
'[DDoS]- HTTP Head/Option Spoofing Flooding',
'[DDoS]- HashDoS',
'[공격기법]- DRDoS',
'Secure Coding',
'[Secure Coding]- TouchPoints 기법',
'크라임웨어(Crimeware)',
'랜섬웨어',
'[랜섬웨어]- RaaS',
'[랜섬웨어]- 표적형 랜섬웨어',
'[랜섬웨어]- DBD',
'[랜섬웨어]- 드라이브 바이 크립토마이닝(drive-by cryptomining)',
'[랜섬웨어]- 로키 랜섬웨어(Locky Ransomware)',
'[랜섬웨어]- 워너크립터',
'[랜섬웨어]- 독스웨어(doxware)',
'[랜섬웨어]- 배드래빗(Bad Rabbit)',
'[랜섬웨어]- 사이버범죄 서비스(CaaS, Cybercrime as a Service)',
'[랜섬웨어]- 갠드크랩(GandCrab) 랜섬웨어',
'멀버타이징(Mulvertising)',
'피싱(Phishing)',
'[피싱(Phshing)]- 액티브 피싱',
'[피싱(Phshing)]- 스피어 피싱',
'파밍(Pharming)',
'스미싱(Smishing)',
'스니핑(Sniffing)',
'스푸핑(Spoofing)',
'Session Hijacking',
'산업제어시스템 보안',
'스턱스넷(stuxnet)',
'APT',
'[APT]- Lateral Movement',
'[Lateral Movement]- IoA',
'[Lateral Movement]- IoC',
'사이버 디셉션',
'워터링 홀 공격(Watering Hole Attack)',
'루트킷(Rootkit)',
'포맷 스트링 공격',
'카멜레온 바이러스',
'스테이지 프라이트(Stage Fright)',
'널 포인터 디레퍼런스(Null Pointer Dereference)',
'베놈(VENOM) 취약점',
'크리덴셜 스터핑',
'Atom Bombing',
'컴퓨터 포렌식(Computer forensics) = 디지털 포렌식',
'[포렌식]- 클라우드 포렌식',
'[포렌식]- 분산 포렌식 인덱싱',
'[포렌식]- File Carving',
'소프트웨어 개발보안 가이드',
'클라우드 컴퓨팅 보안',
'CVE',
'[암호화 기술]- 양자암호통신',
'[양자 보안]- QKD',
'[양자 보안]- PQC',
'검색가능암호화',
'[검색가능암호화]- PSES',
'PETs',
'PPDM',
'OWASP Top 10',
'[OWASP]- Injection',
'[OWASP][Injection]- SQL Injection',
'OWASP Mobile Top 10',
'OWASP IoT Top 10',
'개인정보 영향평가(PIA)',
'[PIA]- ISO/IEC 29134',
'ISO 29151',
'데이터 3법',
'[개인정보]- 정보유형',
'[개인정보]- 개인정보 비식별 조치 가이드라인',
'[개인정보]- 프라이버시 보호모델',
'[개인정보]- 개인정보의 안전성 확보조치 기준',
'[개인정보]- 가명정보',
'[개인정보][가명정보]- 결합전문기관',
'[개인정보]- 가명처리 (ISO/IEC 20889 기준)',
'[개인정보]- 비식별수준 적정성평가',
'[개인정보]- 재식별 공격',
'[개인정보]- 식별자',
'[개인정보]- 식별자, 민감정보',
'ISMS',
'[ISMS]- ISMS-P',
'가상자산 사업자',
'가상자산 사업자 ISMS',
'[개인정보]- HIPPA Privacy Rule',
'[개인정보]- OECD Privacy 8원칙',
'[정보처리자유형]- 개인정보 유출사고 대응 매뉴얼',
'정보보호산업진흥법(15.12 시행)',
'정보윤리',
'[정보윤리]- 사이버 범죄',
'[정보윤리]- 사이버 중독',
'ISO/IEC 27014',
'탈린 매뉴얼(Tallinn Manual)',
'ISA/IEC 62443',
'DarkSide Ransomware',
'ISO/IEC 15408 ',
'코드서명 (코드사인, Codesign)',
'WPA3',
'커버로스(Kerberos)',
'WAF',
'X.509',
'라이트 커맨드(Light Commands) 취약점',
'무자각 지속 인증(Implicity Continuous Authentication)',
'GDPR',
'[GDPR]- GDPR 적정성 평가',
'2020 정부 전자서명법 개정',
'전자서명,전자봉투',
'[전자서명,봉투]- 이중서명',
'개발보안 방법론',
'Privacy By Design',
'ISO/IEC 27017',
'ISO 27001',
'ISO/IEC 27018',
'SDP',
'접근통제',
'[DB 보안]- DB 보호 솔루션',
'[DB 보안]- Bell LaPadula',
'[DB 보안]- Biba',
'[DB 보안]- Clark-Wilson',
'BEC(Business  E-mail Compromise)',
'[CPU 보안]- 스펙터(Spectre)',
'[CPU 보안]- Meltdown',
'[시스템 보안]- Buffer Overflow',
'[시스템 보안]- Race Condition',
'[시스템 보안]- Format String',
'FIDO',
'[FIDO]- UAF 기술 표준',
'SSO',
'[Android]- Deeplink',
'Zero Trust 보안 모델',
'재택,원격근무 정보보호 6대 실전 수칙',
'CDR',
'[Cloud 보안]- CWPP',
'[Cloud 보안]- CSPM',
'[Cloud 보안]- CASB',
'사이버 레질리언스',
'Reverse Turing Test',
'Turing Completeness',
'하인리히 법칙',
'SOAR',
);

var answer = answer.concat(
// 보안 아키텍처
'# 기술 프레임워크 <br/>\
<img src = "./img/SEC_Architecture1.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 보안 정책 (관리적 보안) <br/>\
- 관리적 보안 : 정P보P개소C인 <br/>\
- 물리적 보안 : 출전C위문설PD <br/>\
- 기술적 보안 : 운영, 대응, 진단, 개발 지침 <br/>\
<img src = "./img/SEC_Architecture2.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 보안 시스템 (물리적 보안) <br/>\
<img src = "./img/SEC_Architecture3.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 보안 기술 (기술적 보안) <br/>\
<img src = "./img/SEC_Architecture4.png" style = "max-width: 100%; height: auto;">\
',

// 보안 Overview
'# 목적 <br/>\
- 기밀성 : 인가된 사용자 <br/>\
- 무결성 : 생성/변경/삭제 x <br/>\
- 가용성 : 지체 없이 동작 <br/><br/>\
# 기밀성 위협 <br/>\
- Spoofing : 속이다 - ARP, IP, DNS <br/>\
- Sniffing : 훔쳐 보기(조작x) - Packet, Hub, Switch <br/>\
- Snooping : 몰래 획득(조작o) - IGMP, DHCP <br/><br/>\
# 무결성 위협 <br/>\
- Phishing : 메일, 문자, 사기 <br/>\
- Exploit : 취약점 이용 스크립트 <br/>\
- Ransomware : 블록크랜 <br/><br/>\
# 가용성 위협 <br/>\
- DoS, DDoS <br/><br/>\
# 기밀성 대응방안 <br/>\
1. 접근제어 <br/>\
- 정책 : DAC(임의-신분), MAC(강제-허가권한), RBAC(역할-중앙 관리자) <br/>\
- 모델 : BLP(기밀성), Biba(무결성), Clark-wilson(기,무 결정), Chinese wall(상업 기밀) <br/>\
- 매커니즘 : ACL(접근행렬 열-행위), CL(접근행렬 행-허가 목록), SL(제어 대상-속성 집합) <br/><br/>\
2. 암호화 <br/>\
- 대칭키 : SEED, AES, ARIA <br/>\
- 비대칭키 : RSA, ECC, Elgamal <br/>\
- 단방향 : MDC(MD5, SHA-1, HAS-160, HAVAL), MAC(Nested MAC, HMAC, CBC-MAC, CMAC) <br/><br/>\
# 무결성 대응 방안 <br/>\
- 침입탐지 : 방화벽, 웹 방화벽, IPS, IDS, UTM SIEM <br/>\
- 백업 : DLP(흐름 감시), DRM(권한 제어), 보안 USB, 원격 백업 <br/><br/>\
# 가용성 대응 방안 <br/>\
- BCP/DR : 정보시스템 재해복구, Mirror/Hot/Warm/Cold <br/>\
- Dos/DDoS 대응 : 사이버 대피소, DNS 싱크홀, 사이버 디셉션 <br/><br/>\
<font color = "red">* MAC : Mandatory Access Control <br/>\
* DAC : Discretionary Access Control <br/>\
* RBAC : Role Based Access Control <br/>\
* ACL : Access Control List <br/>\
* CL : Capability List <br/>\
* SL : Security List </font>\
',
  
// 내/외부 정보보안 위협
'# 내부망 위협 : 정보유출, 악성코드, 불법SW 설치, 불법접근 <br/><br/>\
# 외부망 위협 : 도막청, 정보유출, DDoS, 불법접근 \
',
  
// 공격유형 Overview
'# Cyber Kill Chain : 보안 구상 전략 <br/>\
- 개념 : 군사적 목적, 공격흐름 프로세스 분석 <br/>\
- 장점 : 공격흐름을 이해하기 쉬움 <br/>\
- 단점 : 악성코드 감염, C2 접속 포커싱으로 구성되어 있기 때문에 최근 고도화 지능화된 공격기법과 Miss Match <br/>\
- 대응방안 : TTP 분석기법 활용한 행위기반 분석대응 적용 <br/>\
<img src = "./img/CyberKillChain.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# Web <br/>\
- 기반 공격 : 워터링홀, DBD <br/>\
- 공격 기법 : XSS, CSRF, SQL Injection, File Upload, File Download <br/>\
- 대응 방안 : 시큐어코딩(정적), 모의해킹(동적) <br/>\
- 네트워크 공격기법 : Spoofing(ARP, IP, DNS) <br/><br/>\
# 공격 탐지 <br/>\
1. IoC (Indicators of Compromise) <br/>\
- 개념 : 해시, 블랙리스트 등의 공격정보를 이용하여 대응하는 방식 (사후대응) <br/>\
- 사례 : IDS/IPS, FW, WAF, SIEM <br/><br/>\
2. IoA (Indicators of Attack) <br/>\
- 사례 : AI, 머신러닝, 위협헌팅(Threat Hunting)\
',

// ATT and CK 
'# 정의 : MITRE / 보안 프레임워크 / 실제 사이버 공격 기반 / 적대적 기술 및 정보 / 보안 매트릭스 <br/>\
- Adversarial Tactics, Techniques & Common Knowledge Matrix <br/>\
- MITRE에서 제공하는 보안 프레임워크로서 실제 사이버공격에 대한 데이터를 기반으로 적대적인 전술 및 기술에 대한 정보를 쉽게 알아볼 수 있도록 만든 보안 매트릭스 <br/><br/>\
# 모델 변화 <br/>\
- Cyber Attack Lifecycle(FireEye Mandiant) : 공격방법 패턴화 <br/>\
- Cyber Kill Chain(Lockhead Martin) : 공격단계별 방어전략 <br/>\
- ATT&CK Matrix(MITRE) : 공격패턴 프로파일링 <br/><br/>\
# 구성요소 <br/>\
1. Tactics(전략) <br/>\
- 특징 : 공격자 공격 목적, 공격단계 파악 <br/>\
- 측면 : 공격(추가 공격), 대응(피해범위 산정) <br/>\
- 활용 사례 : APT 공격 그룹, 공격 유형 식별 <br/><br/>\
2. Technical(기술) <br/>\
- 특징 : 공격 수행 위한 상세 공격 방법 명령 <br/>\
- 측면 : 공격(공격 수행), 대응자(아티팩트 획득) <br/>\
- 활용 사례 : 모의 침투(Penetrate Testing), 사후 분석(Incident Response) <br/><br/>\
3. Procedure(전술) <br/>\
- 특징 : 전략의 상세 수행 방안(Action) <br/>\
- 측면 : 공격자(세부 수행 절차), 대응자(Kill chain 발견) <br/>\
- 활용 사례 : 전략별 탐지 요소 전술, Artifact 분석 및 활용 <br/><br/>\
# 버전 <br/>\
- ATT&CK Matrix for Enterprise : Window, Mac, Linux, NW, Container <br/>\
- ATT&CK Matrix for Mobile : Andorid, IOS <br/>\
- ATT&CK Matrix for ICS : ICS <br/><br/>\
# 14 Tactics <br/>\
- Reconnaissance : 다른 시스템 위동 위한 탐구 단계 <br/>\
- Resource Development : 다른 시스템 이동 위한 계정 확보 단계 <br/>\
- Initial Access : 네트워크 진입 위해 사용자 환경 정보 취득 목적 <br/>\
- Execution : 악성 코드 실행 위한 활동 <br/>\
- Persistence : 공격 기반 유지, 시스템 지속적 접근 행동 <br/>\
- Privilege Escalation : 네트워크 높은 권한 얻기 위한 행동 <br/>\
- Defense Evasion : 침입 시간동안 탐지 회피 행동 <br/>\
- Credential Access : 시스템, 도메인 서비스, 자격증명 등 접근, 제어 활동 <br/>\
- Discovery : 시스템, 내부 네트워크 정보 얻기 위한 행동 <br/>\
- Lateral Movement : 네트워크 상 원격시스템 접근 후 제어 위한 행동 <br/>\
- Collection : 공격 목적, 관련 정보 포함 데이터 수집 행동 <br/>\
- Command and Control : 내부 시스템 통신, 제어 행동 <br/>\
- Exfiltration : 데이터 훔치기 위한 행동 <br/>\
- Impact : 가용성 무결성 손상 행동 <br/><br/>\
# CyberKill Chain 비교 <br/>\
<img src = "./img/CyberKillChainATTandCK.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* ITPE 8회 관리 1교시 12번\
',
  
// 암호학
'# 정의 : 메시지 평문 불명확화 / 알고리즘, 키 재구성 <br/>\
- 메시지의 평문을 불명확하게 하기 위해 평문을 특정 알고리즘과 키로 재구성하고 해당 키를 가진 자만이 볼 수 있게 만든 기술 <br/><br/>\
# 공식 <br/>\
- C = Eke(P) <br/>\
- P = Dkd(C) <br/><br/>\
# 특징 : 기밀성(암호화), 무결성(해시함수), 가용성, 인증(인증서), 부인방지(전자서명) <br/><br/>\
# 원리 : 대체, 블록화, 치환, 확장, 압축 <br/><br/>\
<img src = "./img/Encryption.png" style = "max-width: 100%; height: auto;">\
',
  
// Kerckhoff 원리
'# 정의 : 내용 공개 / 키 노출만 안되면 안전 <br/>\
- 알고리즘의 모든 내용 공개, 키가 노출되지 않으면 안전한 원리 <br/><br/>\
# 원리 <br/>\
- 키는 난수이어서 역공학에 안전 <br/>\
- 알고리즘 설계보다 키 변경이 용이 <br/>\
- 키만 다르게 설정하는 것이 실용적\
',
  
// 혼돈과 확산
'# 혼돈(Confusion) : 키와 암호문과의 관계 감추는 성질(s box, 대치/치환) <br/><br/>\
# 확산(Diffusino) : 평문과 암호문과의 관계를 감추는성질(p box, 전치) \
',
  
// 암호문 분석(공격 모델)
'# 정의 : 암호문 평문 / 암호문, 알고리즘, 키 / 알아내는 방법 <br/>\
- 암호문과 평문을 가지고 평문과 암호문을 알아내거나 암호화 하는데 쓰인 알고리즘과 키를 알아내는 방법 <br/><br/>\
# 공격모델 유형 <br/>\
- 암호문 단독공격(COA) : 암호문만 알 때 <br/>\
- 기지평문(KPA) : 일정개수 평문과 대응 암호문 알 때 <br/>\
- 선택평문(CPA) : 원하는 평문 선택 대응 암호문 알 때 <br/>\
- 선택암호문(CCA) : 원하는 암호문 선택 대응 평문 알 때 \
',
  
// 알고리즘 보안강도
'# 정의 : 취약점 찾아내는데 / 작업량 수치화 정도 <br/>\
- 암호 알고리즘이나 시스템의 암호키 또는 해시함수의 취약성을 찾아내는데 소요되는 작업량 수치화한 정도 \
',
  
// 블록암호화
'# 정의 : 평문 고정길이 블록 단위 / 블록마다 암호화 / 고정길이 암호문 생성 기술 <br/>\
- 평문을 고정 길이의 블록단위로 나누어 각 블록마다 암호화를 수행하여 고정된 크기의 블록 단위 암호문을 생성하는 암호화 기술 <br/><br/>\
# 특징 <br/>\
- 고정길이 : N-Bit 평문 블록 > N-Bit 암호화 블록 변환 <br/>\
- 암호화 구조 : SPN, Feistel 구조 등 S-Box, P-Box, XOR, Shift 활용 암호화 <br/>\
- 운용모드 : IV, 패딩, 시프트, 순환 기능 선택적 이용 운영 방식 <br/><br/>\
* ITPE 6회 관리 2교시 4번\
',

// Feistel Cipher
'# 정의 : 라운드 방식 / 암호화 방식 <br/>\
- 특정 계산함수의 반복인, 라운드 함수로 이루어진 암호화 방식 <br/><br/>\
# 암호강도 결정 요소 <br/>\
- 평문 블록 길이 : 64 bit 이상<br/>\
- 키의 길이 : 128 bit 권장<br/>\
- 라운드의 수 : 16회 이상 <br/><br/>\
# 구조 : 암호화 = 복호화 <br/>\
- 암호화 과정 Input : Plain Text, 보조키 Ki <br/>\
- 복호화 과정 Input : Cipher Text, 보조키 Ki(역순) <br/>\
<img src = "./img/FeistelStructure.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 유형 (<font color = "red">DLHS</font>)<br/>\
- DES : 56 bit 키, 64 bit 평문 -> 64 bit 암호문, 미국 표준 알고리즘 <br/>\
- LEA : 빅데이터, 클라우드, IoT / 128 bit 경량화 알고리즘 <br/>\
- HIGHT : RFID, USN / 저전력 경량화 / 64 bit 평문, 128 bit 키 <br/>\
- SEED : 전자 상거래, 무선통신 / 128 bit 평문, 128 bit Key, 16 Round, 128 bit 암호문 <br/><br/>\
* ITPE 6회 관리 2교시 4번\
',

// SPN Cipher
'# 정의 : Shannon 이론 / Substitution(치환), Permutation(재배열) Cipher 중첩 형태 암호화 기술 <br/>\
- Substitution Permutation Network Structure <br/>\
- 여러개의 함수를 중첩하면, 개별 함수로 이루어진 암호보다 안전하다 라는 Shannon 이론 근거, 고전 암호의 일종인 Substitution Cipher, Permutation Cipher 중첩 형태 암호화 <br/><br/>\
# 구조 <br/>\
<img src = "./img/SPN_Structure.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 유형 (<font color = "red">AA</font>)<br/>\
- AES : DES 대체하는 미국 연방 표준, 대칭키 기반 / 입력 평문 128 bit 고정, 가변 길이 키 <br/>\
- ARIA : 학계, 연구소, 정부기관 공동개발, 초경량 환경 / 고정길이 128bit 입,출력, 가변 길이 키 <br/><br/>\
* ITPE 6회 관리 2교시 4번\
',

// 블록암호화 운영모드
'# 정의 : 하나의 키 하에서 블록 암호를 반복적으로 안전하게 이용하는 절차 <br/><br/>\
# 개요도 : 블록 암호화만 사용 / 자기 동기 스트림 <br/>\
<img src = "./img/BlockEncryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 비교 <br/>\
<img src = "./img/BlockEncryptionCompare.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<font color = "red">* 하나금융 API 작업 : AES256/CFB/NoPadding/Base64변환 </font><br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',
  
// ECB 
'# 정의 : Electronic Code Book <br/>\
- 평문/암호문 블록 1:1관계 가진 기본적인 블록 암호화 모드 <br/><br/>\
# 암호화 <br/>\
<img src = "./img/ECB_Encryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 복호화 <br/>\
<img src = "./img/ECB_Decryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- 가장 간단한 처리 <br/>\
- 고속/병렬 처리 가능 <br/>\
- 다른 운영 모드에 비해 기밀성 낮음 <br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',
  
// CBC
'# 정의 : Cipher Block Channing <br/>\
- 맨 첫 블록은 Initialization Vector(IV)를 통해 XOR 처리하여 암호화, 두번 째 블록은 이전 암호화 결과를 XOR 처리 암호화 <br/><br/>\
# 암호화 <br/>\
<img src = "./img/CBC_Encryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 복호화 <br/>\
<img src = "./img/CBC_Decryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- 평문의 반복이 암호문에 반영되지 않음 <br/>\
- 복호화만 병렬 처리 가능 <br/>\
- 임의의 암호문 블록을 복호화 가능 <br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',
  
// PCBC
'# 정의 : Propagation CBC <br/>\
- 데이터와 암호화 결과를 한번 더 XOR 처리를 통해 복호화 복잡도 높인 암호화 <br/><br/>\
# 암호화 <br/>\
<img src = "./img/PCBC_Encryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 복호화 <br/>\
<img src = "./img/PCBC_Decryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- 데이터와 암호화 결과를 한번 더 XOR 처리를 통해 복호화로 복잡도를 높인 암호화 <br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',

// CFB
'# 정의 : Cipher Feedback <br/>\
- 데이터를 암호화하는 것이 아니라 IV를 암호화로, 블록 암호를 자기 동기 스트림 암호로 변환하는 방식 <br/><br/>\
# 암호화 <br/>\
<img src = "./img/CFB_Encryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 복호화 <br/>\
<img src = "./img/CFB_Decryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- 패딩이 필요 없고, 복호화만 병렬처리 가능 <br/>\
- 임의의 암호문 블록을 복호화 가능 <br/>\
- 암호화에서 병렬 처리 불가능 <br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',

// OFB
'# 정의 : Output Feedback <br/>\
- IV를 암호화하여 그 Key Stream을 생성해 두어 XOR 처리만 나중에 수행하여 성능을 향상시키는 암호화 운영모드 <br/><br/>\
# 암호화 <br/>\
<img src = "./img/OFB_Encryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 복호화 <br/>\
<img src = "./img/OFB_Decryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- 패딩 필요 없음, 암/복호화 사전 준비 가능 <br/>\
- 암/복호화가 같은 구조 <br/>\
- 병렬 처리 불가능 <br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',

// CTR
'# 정의 : Counter <br/>\
- Counter 처리를 추가하여 Key Stream을 생성해두어 XOR 처리를 통해 복잡도를 증가 시킨 암호화 운영모드 <br/><br/>\
# 암호화 <br/>\
<img src = "./img/CTR_Encryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 복호화 <br/>\
<img src = "./img/CTR_Decryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- 패딩 필요 없음 <br/>\
- 암/복호화 사전 준비 가능 <br/>\
- 병렬 처리 가능 <br/><br/>\
* ITPE 6회 관리 2교시 4번<br/>\
* KPC 93회 2교시 4번\
',

// BASE64
'# 정의 : 8비트 이진 데이터를 6비트 이진 데이터로 치환하여 인코딩 처리 <br/>\
- 아스키 코드표에 표시되어 있는 수치를 2진수로 변경시켜 한 문자당 8bit로 표현된 문자를 쭉 연결하여 처음부터 다시 6it씩 끊어서 base 64 테이블에 나와있는 수치대로 치환하는 무손실 압축 암호기법중 하나<br/><br/>\
# 절차 <br/>\
- 아스키 코드 매핑 <br/>\
- 2진수 변환 <br/>\
- 6bit 단위 변환 <br/>\
- 10진수 변환 <br/>\
- Base 64테이블 메칭 <br/>\
- 패딩연산 (원본 비트수 mod3 만큼 "="문자로 패딩)<br/><br/>\
<img src = "./img/AL_48_1.PNG" style = "max-width:100%; height:auto;">\
',
  
// 디피헬만 알고리즘
'# 정의 : Diffie-Hellman Algorithm <br/>\
- 두 사람이 암호되지 않은 통신망을 통해 공통의 비밀키를 공유할 수 있도록 암호키 교환 알고리즘 <br/><br/>\
# 특징 <br/>\
- 공개키 사용 <br/>\
- 이산대수 어려움 : 이산대수의 난해함 <br/>\
- 비밀키 사용 : 암호문 생성 및 평문의 복구를 위한 복호화 키 <br/><br/>\
# 매커니즘 (<font color = "red">Aga KBa</font>)<br/>\
<img src = "./img/DiffieHellmanAlgorithmMechanishm.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 상세절차 <br/>\
<img src = "./img/DiffieHellmanAlgorithmMechanishmDetail.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 취약점, 대응방안 <br/>\
- 취약점 : 이산대수 원리, 비밀키(공유키) 기반, MITM <br/>\
- 대응방안 : RSA (소인수 분해 해독, 공개키/개인키 기반) <br/><br/>\
* KPC 93회 관리 1교시 9번\
',

// ECC
'# 정의 : 유한체 / 타원곡선 대수적 구조 / 이산로그 문제 / 공개키 암호화 알고리즘 <br/>\
- 유한체(Finite Field) 위에서 타원곡선의 대수적 구조를 기반으로 한 이산로그 문제에 착안해 만들어진 공개키 암호화 알고리즘 <br/><br/>\
# 특징 <br/>\
- SECP256K1 표준 (블록체인) <br/>\
- 이산대수 문제 (ECDLP) 기반 암호체계 <br/>\
- 선택성 : 유한체상 다양한 타원곡선 선택 가능 <br/>\
- 설계 안전성 : 안전한 암호 시스템 설계 용이 <br/>\
- 고효율성 : 256(ECRSA) / 3072(RSA) <br/><br/>\
# 알고리즘 키 생성원리 <br/>\
<img src = "./img/ECC_Calc.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 암/복호화 방식 <br/>\
<img src = "./img/ECC_Mechanism.png" style = "max-width:100%; height:auto;"><br/>\
# ECC RSA 비교 <br/>\
<img src = "./img/ECC_RSA.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 86회 라이지움 1교시 7번 <br/>\
* 88회 라이지움 1교시 7번 \
',
  
// ECDSA
'# 정의 : 타원곡선암호를 전자서명에 접목시킨 암호 알고리즘 <br/>\
# 구성요소 <br/>\
- 모듈로 p 타원 곡선 방정식 : y^2 mod p = (x^3 + ax + b) mod p (p;prime number) <br/>\
-> secp256k1 표준 : a=0, b=7, p=D0364140 <br/>\
- 생성자(G) : 표준에서 지정 <br/>\
- 개인키(k) : 임의의 정수 <br/>\
- 공개키(r) : (임의의 랜덤숫자) * G <br/>\
- 메시지(m) : 전달할 Data <br/><br/>\
# 송신 절차 <br/>\
- 트랜잭션 만들기 : 타원곡선 생성 <br/>\
- 개인키 정하기 : 1~D0364140 내 선택 <br/>\
- 서명 r구하기 : k*G 연산 수행 결과값 <br/>\
- 서명 s구하기 : k^-1(z+r*private key) mod n <br/>\
-> k : 서명 r구할 때 고른 랜덤한 수 <br/>\
-> z : 트랜잭션 정보를 직렬 정렬한 값 <br/>\
-> r : 서명 r값 <br/>\
-> private key : 개인키 값 <br/><br/>\
# 수신 절차 <br/>\
- p = U1 * G + U2 * Public key <br/>\
-> U1 = z * w mod n <br/>\
-> U2 = r * w mod n <br/>\
-> w = s^ -1 mod n <br/>\
-------------------- <br/>\
- p의 x좌표 값, 서명 r 비교 <br/><br/>\
* 81회 라이지움 응용 1교시 13번\
',
  
// Hash Function
'# 개념 : 수학식 구성, 임의 길이 -> 고정길이 출력 함수 <br/>\
- 임의의 길이의 데이터를 "해시 알고리즘을 이용하여" 고정된 길이 데이터로 매핑하는 함수 <br/>\
- Input : Hash Key / Output : Bucket home address <br/><br/>\
# 특징 <br/>\
- 고정된 길이의 값 출력 <br/>\
- 입력 값 일부 변경 되더라도 전혀다른 결과값 출력 (Snow ball) <br/>\
- 출력값 토대로 입력값 유추 불가능(역상 저항성) <br/>\
- 입력값은 항상 동일한 해시값 출력 <br/><br/>\
# 종류 <br/>\
- 암호학적 : MD5, SHA 계열 <br/>\
- 비 암호학적 : CRC32 <br/><br/>\
* 120회 관리 1교시 9번 <br/>\
* 116회 관리 1교시 3번\
',

// Hash Algorithm
'# 정의 : Hash function + Encryption <br/>\
- 임의의 길이의 메시지를 일정 고정길이의 해쉬 값으로 변환시켜주는 단방향성 알고리즘 <br/><br/>\
# 조건 <br/>\
<img src = "./img/HashAlgorithmCondition.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 원리 <br/>\
<img src = "./img/HashAlgorithMechanism.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 종류 <br/>\
1. MDC(Modification Detection Code) <br/>\
- MD5 : 임의 메시지 128비트 암호화 알고리즘 <br/>\
- SHA-1 : 임의 메시지 160 비트 암호화 알고리즘 <br/>\
- HAS-160 : 국내에서 개발한 SHA-1 기반 160비트 암호화 알고리즘 <br/>\
- Tiger : 64비트 프로세스 최적화, 192비트 암호화 알고리즘 <br/>\
- HAVAL : MD5 보완 128~256비트 다양한 크기 알고리즘 <br/><br/>\
2. MAC(NHCC) <br/>\
- Nested MAC : Key와 메시지를 암호화 후 결과값(MAC)을 Key와 조합하는 이중 해쉬 알고리즘 <br/>\
- HMAC(Hash MAC) : Nested MAC에 Padding 추가하여 일방향 해쉬함수 사용하여 암호화 하는 알고리즘 <br/>\
- CBC-MAC : 블록 암호화 CBC 모드와 유사한 방식으로 n개의 평문 블록을 하나의 MAC 생성 알고리즘 <br/>\
- CMAC(Cipher-based Message Authentication Code) : CBC-MAC 동일, 복잡한 논리 함수와 수학함수 이용한 알고리즘 <br/><br/>\
# SHA 알고리즘 종류 <br/>\
<img src = "./img/SHA.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 보안성 확보방안 <br/>\
- Hash Salt : 다이제스트 생성할 때 임의 문자열을 추가하는 방식 <br/>\
- Key Stretching : 다이제스트 생성 후 이를 N번 반복하는 방법 <br/>\
- PBKDF2(Password-Based Key Derivation Function) : 미국 정부 시스템 다이제스트 생성 알고리즘 <br/><br/>\
* 120회 관리 1교시 9번 <br/>\
* 116회 1교시 3번\
',
  
// MDC
'# 정의 : 무결성 보장, MDC 비교 알고리즘 <br/>\
- Modification Detection Code <br/>\
- 메시지의 무결성 보장 위해 수신한 메시지의 MDC를 계산하고 송신 측이 보내준 MDC와 동일하지 비교하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MDCFLow.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 종류 <br/>\
- MD5 : 임의 메시지 128비트 암호화 알고리즘 <br/>\
- SHA-1 : 임의 메시지 160 비트 암호화 알고리즘 <br/>\
- HAS-160 : 국내에서 개발한 SHA-1 기반 160비트 암호화 알고리즘 <br/>\
- Tiger : 64비트 프로세스 최적화, 192비트 암호화 알고리즘 <br/>\
- HAVAL : MD5 보완 128~256비트 다양한 크기 알고리즘 <br/><br/>\
* 120회 관리 1교시 9번 \
',
  
// MAC
'# 정의 : 대칭키 이용, 인증 알고리즘 <br/>\
- Message Authentication Code <br/>\
- 해시함수와 대칭키를 이용하여 메시지 무결성을 확인하고 메시지에 대한 인증을 하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MACFlow.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 종류(NHCC) <br/>\
- Nested MAC : Key와 메시지를 암호화 후 결과값(MAC)을 Key와 조합하는 이중 해쉬 알고리즘 <br/>\
- HMAC(Hash MAC) : Nested MAC에 Padding 추가하여 일방향 해쉬함수 사용하여 암호화 하는 알고리즘 <br/>\
- CBC-MAC : 블록 암호화 CBC 모드와 유사한 방식으로 n개의 평문 블록을 하나의 MAC 생성 알고리즘 <br/>\
- CMAC(Cipher-based Message Authentication Code) : CBC-MAC 동일, 복잡한 논리 함수와 수학함수 이용한 알고리즘 <br/><br/>\
* 120회 관리 1교시 9번\
',

// Hash Salt
'# 정의 : 단방향 해서 / 문자열 추가 / 보안성 강화 기법 <br/>\
- 단방향 해시 함수에서 다이제스트를 생성할 때 임의 문자열을 추가하여 암호화해 해시 값을 달라지도록 보안성을 강화한 기법 <br/><br/>\
# Oveview <br/>\
<img src = "./img/HashFunctionProblem.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/HashSaltMechanism.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 해시 생성 <br/>\
- 사용자가 평문 PWD 입력 <br/>\
- PWD 입력 받은 시스템, 임의의 Unique한 Salt값 생성 평문 PWD 값과 결합 <br/>\
- 해시 알고리즘으로 암호화 처리, DB 해시 결과 랜덤 Salt 저장 <br/><br/>\
# 해시 검증 <br/>\
- 사용자가 평문의 PWD 입력 <br/>\
- DB에 저장된 Salt 값 평문 PWD 결합 후, 동일 해시 알고리즘 암호화 처리 <br/>\
- 생성된 해시값, DB에 저장된 해시 값 비교, PWD 유효성 검증 <br/.<br/>\
* ITPE 합숙 124회 2일차 관리 1교시 \
',

// Key Stretching
'# 정의 : 다이제스트 입력값 반복 / N번째 다이제스트 생성 기법 <br/>\
- 입력한 패스워드의 최초 다이제스트를 생성하고 생성된 다이제스트를 입력 값으로 반복하여 N번째 다이제스트를 생성하는 기법 (Iteration Count) <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/KeyStretchingMechanism.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 검증 <br/>\
- 패스워드 입력 <br/>\
- N번 만큼 반복 <br/>\
- 일치 여부 확인 <br/><br/>\
* ITPE 합숙 124회 2일차 관리 1교시 \
',

// 경량 암호
'# 정의 : 제한된 환경 / 경량, 초 지연성 / 안전성 보장 / 암호화 기술 <br/>\
- 제한된 환경에서 구현하기 위해 단순한 연산으로 경량 특성 및 초 지연성을 제공하면서 안전성을 보장할 수 있도록 설계된 암호화 기술 <br/><br/>\
# 유형 <br/>\
1. 경량 암호기술 유형 <br/>\
- SPECK : SW 경량 주안점, ARX 구조 사용 <br/>\
- SIMON : HW 경량 주안점, ARX 구조 사용 <br/>\
- LEA : SW 경량, 국산, ARX 구조 사용 <br/><br/>\
2. 저지연 암호 <br/>\
- PRINCE : HW 경량 특성, 저면적 <br/><br/>\
3. 경량 해시 <br/>\
- Keccak : XOR 직접 갱신 부분 크기 R, 그외 부분 크기 N <br/>\
- LSH : 패딩 분할, 압축 함수 연결 변수, n비트 해시 암호화 <br/><br/>\
* KPC 120회 대비 합숙 3일차 1교시 1번\
',

// LSH
'# 정의 : 대용량 데이터 무결성 검증 / SW 고속 해시 함수 <br/>\
- 금융, 클라우드, 빅데이터 등의 분야에서 대용량 데이터의 무결성 검증에 적합한 SW 고속 해시 함수 <br/><br/>\
# 구조 <br/>\
<img src = "./img/LSH_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동작 방식 <br/>\
1. 초기화 <br/>\
- 입력 메시지 <font color = "red">패딩</font> : 메시지 블록비티 길이의 배수 <br/>\
- <font color = "red">분할</font> : 패딩된 메시지, 블록 단위로 분할 <br/><br/>\
2. 압축 <br/>\
- 연결 변수 <font color = "red">갱신</font> : 32 word 배열 메시지 블록, 압축 함수 입력 후 갱신 <br/>\
- 메시지 <font color = "red">압축</font> : 마지막 메시지 블록 처리할 때까지 반복 <br/><br/>\
3. 완료 <br/>\
- 연결 변수 최종된 값으로부터 n비트 길이 해시 함수 <font color = "red">출력값 생성</font> <br/><br/>\
# LEA 와 비교 <br/>\
<img src = "./img/LEALSH.png" style = "max-width:100%; height:auto;">\
',

// LEA
'# 정의 : 128bit Block 암호 알고리즘 / 국가보안기술 연구소 <br/>\
- Light weight Encryption Algorithm <br/>\
- IoT등 경량환경의 기밀성 제공 위해 비밀키 이용 128 bit 블록 암호 알고리즘 <br/><br/>\
# 특징 <br/>\
- 국산 암호기술 <br/>\
- 2019.10. 국제표준 제정 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/LEA_Mechanishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 요소기술 <br/>\
1. 알고리즘 <br/>\
- 초기 변환 : 라운드 함수 입력 변환 <br/>\
- 라운드 함수 : 32 라운드 구성 <br/>\
- 최종 변환 : 화이트닝 키 이용 변환 <br/><br/>\
2. 비밀키 <br/>\
- 화이트닝 키(WK) : 변환 적용 라운드 키 <br/>\
- 서브 키 (SK) : 라운드 함수 사용 키 <br/><br/>\
# AES 비교 <br/>\
<img src = "./img/LEA_AES.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 현황 <br/>\
- 2015년 9월 룩셈부르크대 암호성능 측정 프로젝트에서 우수성 인정, 32비트 운영체제에 최적화 <br/>\
- 2015년 6월 암호모듈 검증제도 대상 알고리즘 포함 (ex. 라온 시큐어 Key # Crpyto v1.3) 알집 압축 기능 등 적용 <br/><br/>\
<img src = "./img/LEA_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/LEA_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/LEA_3.png" style = "max-width:100%; height:auto;">\
',

// 형태 보존 암호화
'# 정의 : 일정 포맷 규칙 / 동일 포맷 유지 / 암호화 알고리즘 <br/>\
- 일정한 포맷규칙이 있는 평문을 암호화한 암호문이 평문과 동일한 포맷이 유지되도록 암호화하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/FormatPreservingEncryption.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특성 <br/>\
- Tweak : 기밀성 제공 위한 추가 정보 정형화 <font color = "red">데이터 입력</font> <br/>\
- Feistel Cipher : <font color = "red">Round Function</font> 반복 수행 블록 암호화 방식 <br/><br/>\
# 기술 유형 <br/>\
- Prefix Cipher : <font color = "red">의사난수 가중치</font>, 매핑 테이블, 테이블 <font color = "red">크기 한계</font> <br/>\
- Cycle-Walking Cipher : 원본 동일 결과까지 <font color = "red">반복</font>, <font color = "red">연산 부하</font> 문제, <font color = "red">종료 시간 예측 한계</font> <br/>\
- Generalized-Feistel Cipher : <font color = "red">Feistel NW</font> 이용, 비교적 큰 성능 저하 없음 <br/><br/>\
* ITPE 합숙 124회 2일차 1교시 5번\
',

// 순서 보존 암호화 
'# 정의 : 암호문, 평문 동일 순서 정렬 / 암호화 알고리즘 <br/>\
- 일정한 규칙에 의해 순서가 있는 평문을 암호화한 암호문이 평문과 동일한 순서로 정렬되도록 암호화하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/OrederPreservingEncryption.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특성 <br/>\
- 단조 증가 함수 : 원본 데이터 분할, 다른 함수 적용 <br/>\
- Noise : 임의 Noise 삽입, 보안성 향상 <br/><br/>\
# 기술 유형 <br/>\
- 단조 증가함수 기반 : a > b 이면, F(a) > F(b) <br/>\
- 버킷 분포 기반 : 다수 버킷 분할, 분포도 변환 <br/>\
- POPIS : E(x) = a* x + b + noise(a,b 임의 상수, noise 0~a) <br/>\
<font color = "red">* Programmable Order-Preserving secure Index Scheme</font><br/><br/>\
# 형태보존, 순서보존, 동형암호 비교 <br/>\
<img src = "./img/EncryptionCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 합숙 124회 2일차 1교시 5번\
',

// 동형암호
'# 정의 : 복호화 없이 연산이 가능한 암호기술 <br/>\
- 정보를 암호화한 상태에서 각종 연산을 했을 때, 그 결과가 암호화하지 않은 상태의 연산결과와 동일하게 나오는 4세대 암호체계 <br/>\
<font color = "red">* Password > 대칭키 > 비대칭키 > Non Key </font><br/><br/>\
# 원리 <br/>\
<img src = "./img/동형암호화.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
1. 유형 <br/>\
- SHE : 준동형 암호 기술 / 식, 횟수 제한적 (+ *)<br/>\
- FHE : 완전동형암호 기술 / 식, 횟수 무제한 (+ * XOR)<br/><br/>\
2. 설계원리 <br/>\
- 부트스트래핑 : 복호화 Key 암호화 Key 재사용 <br/>\
- 스쿼싱 : 노이즈 감소지원 조합 <br/><br/>\
3. 알고리즘 (<font color = "red">GDC</font>)<br/>\
- GENO9 : <font color = "red">Idea Lattice</font> 기반 <br/>\
- DGHV10 : <font color = "red">정수집합</font>에 GENO09 적용 <br/>\
- CRT-BASED : <font color = "red">중국인의 나머지 정리</font> 이용 <br/><br/>\
# 활용 <br/>\
- 클라우드 : 금융, 의료등 민감정보 동형암호 <br/>\
- 생체인식 : 생체정보 안전 처리 <br/>\
- 금융분야 : 기밀성 보호 <br/><br/>\
* ITPE 124회 합숙 3일차 1교시 8번\
',

// [동형암호]- 준 동형암호 
'# 정의 : 수학의 준동형성 이용 암호화 함수<br/>\
- Homomorphic Encryption <br/>\
- 암호화된 데이터에 대해 복호화 하지 않고 연산을 수행할 수 있는 암호 수학의 준동형성을 이용하여 암호화 함수 중에서 평문 공간과 암호문 공간에 정의된 연산을 보존화는 암호화 함수 <br/><br/>\
# 활용기법 (<font color = "red">계암공</font>)<br/>\
- 검색 가능 계산기법 : 클라우드 이용 계산, 처리 결과 검증 <br/>\
- 검색 가능 암호기법 : 키워드 검색 기틀 포함, 인덱스 이용 <br/>\
- 암호 데이터 공유기법 <br/><br/>\
<img src = "./img/준동형암호화_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/준동형암호화_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/준동형암호화_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/준동형암호화_4.png" style = "max-width:100%; height:auto;">\
',

// [동형암호]- 완전 동형암호 
'# 정의 : 상태 그대로 검색 가능 4세대 암호<br/>\
- Fully Homomorhpic Encryption <br/>\
- 암호화된 상태 그대로 원문 정보에 대한 연산이나 검색이 가능한 4세대 암호 (기본적인 준동형성에 모든 임의 논리 연산을 보존하는 준동형 암호) <br/><br/>\
* IBM 연구원 Craig Gentry에 의해 2009년 개발 됨 \
',
  
// 보안이슈, 대응방안
'# 보안 이슈<br/>\
1. Device Level (센물위)<br/>\
- 센서 신호 방해, 혼선 : 주파수 혼선 발생 <br/>\
- 수집 데이터 위변조 및 삭제 : 데이터 변조, 재 암호화, 식별불가 <br/>\
- 디바이스 물리적 침해 : 물리적 파괴, 전원 공급 차단, 동작 불능 <br/><br/>\
2. Network Level (거위네)<br/>\
- 네트워크 침해 : 정상 네트워크 방해, 능력 악화 제거 <br/>\
- 전송 정보 위변조 : MITM(Man In The Middle), 정보 탈취, 인증/헤더 변경 <br/>\
- 서비스 거부 공격 : 대역폭 소모, 자원 사용 불가 <br/><br/>\
3. Data Process Level (불프불)<br/>\
- 불법 접근 : 비 인가자 접근, 정보 탈취 <br/>\
- 프라이버시 침해 : 사생활 데이터 노출 <br/>\
- 불완전한 암호화 : 필수 암호화 수행x, 저수준 암호화 <br/><br/>\
4. Application Level (개인위)<br/>\
- 개인정보 노출 : 모바일, 대상 디바이스 저장된 정보 탈취 <br/>\
- 인증정보 탈취 : 서비스 접근 위한 계정, 비밀번호 <br/>\
- 서비스 데이터 위변조 : 수신 데이터 방해, 삭제, 위변조 <br/><br/>\
# 대응 방안 <br/>\
1. Device Level (경물펌)<br/>\
- 경량 암호화 : HIGHT(High security and light weight), LEA <br/>\
- 물리적 접근제어 : 접근 불가지역, 함체 <br/>\
- 펌웨어 난독화/암호화 : 불법 펌웨어 업데이트 방지 <br/><br/>\
2. Network Level (NDI)<br/>\
- NAC(Network Access Control) : 접근 보안 정책, 접속 통제 <br/>\
- DTLS/TLS : Packet 암호화, 비신뢰성 구간 보장 <br/>\
- IPS/Anti-DDos : Dos 공격 방어 <br/><br/>\
3. Data Process Level (인웹비)<br/>\
- 인증/권한 관리 : PKI, 디바이스 인증기술 권한 <br/>\
- 웹 방화벽 : SQL Injection, XSS 탐지, 위변조 방지 <br/>\
- 개인정보 비식별화 : 재식별 방지 <br/><br/>\
4. Application Level (암무컨)<br/>\
- 전송/저장 정보 암호화 : DBMS 자체 암호화, OS 암호화 <br/>\
- 무결성 검증 및 악성 코드 탐지 : 동적/정적 분석, 바이러스 탐지 <br/>\
- 컨텐츠 서비스 보안 : 데이터 훼손, 탈취 방지, DRM 적용 <br/><br/>\
* KPC 94회 2교시 1번\
',
  
// SW 보안 약점
'# 유형별 약점 <br/>\
1. 입력 데이터 검증 및 표현 <br/>\
- SQL 삽입 <br/>\
- 경로 조작 및 자원 삽입 <br/>\
- XSS <br/>\
- OS 명령어 삽입 <br/><br/>\
2. 보안기능 <br/>\
- 적절한 인증 없는 중요 기능 허용 <br/>\
- 부적절한 인가 <br/>\
- 중요 자원에 대한 잘못된 권한 설정 <br/>\
- 취약한 암호화 알고리즘 사용 <br/><br/>\
3. 에러처리 <br/>\
- 오류메시지를 통한 정보 노출 <br/>\
- 시스템 데이터 정보 노출 <br/>\
- 오류 상황 대응 부재 <br/>\
- 부적절한 예외처리 <br/><br/>\
4. 세션 통제 <br/>\
- 잘못된 세션에 의한 데이터 정보 노출 <br/><br/>\
* 라이지움 87회 관리 4교시 2번\
',

// NAC
'# 정의 : Endpoint NW 접근 시도 / 확인 / 차단 / 네트워크 접근제어 시스템 <br/>\
- 사용자 Endpoint(PC, 노트북 등)의 NW 접근 시도시 사전 승인여부 및 보안 정책 준수 여부를 확인하고, NW 접속을 승인 또는 차단하는 네트워크 접근제어 시스템 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/NAC_Mechanism.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 구성요소 <br/>\
- 사용자 PC Agent : PC 보안 정보 수집, 정책관리 서버에 전송 <br/>\
- 정책관리 서버 : 무결성 검사(방화벽, OS, 백신, 업데이트), 네트워크 접근 정책 결정 <br/>\
- 정책실행 장비 : 단말 차단, 허용, 격리 정책 실행(라우터, 스위치, 방화벽, IPS, OS, SW등) <br/><br/>\
# 인증방식 <br/>\
- Pre-Admission : 사용자 사용전 인증 체크 <br/>\
- Post-Admission : 특정 트래픽 탐지, 필수 소프트웨어 모니터링 <br/>\
- Enforcement : 특정 사이트 차단 및 허용 관리 <br/><br/>\
# 목적 <br/>\
- 내부 사용자 : 내/외부 네트워크 접근 허용, 불법 AP 사용 여부, PC 보안, 프로그램 감시 <br/>\
- 정기 방문자 : 외부 사용자 PC 인지, 위협 모니터링, OS, AntiVirus 패치 여부 검사 <br/>\
- 비인가자 및 단말 : 인증 없이 네트워크 접속 불가능 통제 <br/><br/>\
# Process <br/>\
- 네트워크 인증 (IEEE 802.1x 인증) : 사용자 인증, 단말기 인증 <br/>\
- 격리 및 치료 : 인증 실패시 별도 치료 네트워크 이동 <br/>\
- 권한 통제 : 사용자,조직,그룹별 자산 접근 권한 통제 <br/>\
- 위협 모니터링, 탐지 : 확산 방지, 위협 모니터링 및 탐지, 격리 치료 <br/>\
- NAC 정책 관리 : 사용자/조직/그룹 별 인증/격리/차단/권한 정책 관리 <br/><br/>\
# 구현 방식 <br/>\
- (2) 802.1x : PEAP, MD5, EAPOL / Switch 지원, 보안지원 확인 불가 <br/>\
- (2) VLAN : 802.1q, Tagged VLAN / 허가 비허가 VLAN 설정 <br/>\
- (3) ARP : RARP, Gratuitous ARP / ARP Table 조작 및 차단 구현 <br/>\
- (7) SW Agent : Security Policy Monitoring / 최신 백신, OS Update <br/>\
- (2) DHCP : Captive portals, Quarantine / MAC Address 기반 DHCP Pool 설정 <br/><br/>\
# 기능 <br/>\
- 정책 라이프사이클 관리 : 제품, 모듈 추가 없이 시나리오 정책 적용 <br/>\
- 프로파일 생성 : 악성 코드 피해 발생전, 사용자 인식 자료 생성 <br/>\
- 게스트 네트워킹 엑세스 : 등록,인증,스폰서,관리 포털 포함 셀프 서비스 게스트 관리 <br/>\
- 보안 상태 확인 : 사용자, 디바이스, 운영체제별 정책 규정 준수 평가 <br/>\
- 인시던트 대응 : 관리자 확인 없이 차단, 격리, 복구 보안 정책 적용 <br/>\
- 양방향 통합 : Open/RESTful API 통한 보안 및 네트워크 솔루션 통합 <br/><br/>\
* 124회 관리 1교시 13번\
',

// WNAC
'# 정의 : 무선 NW의 접근 통제 SE솔루션(TTA) <br/>\
- SE : System Engineering<br/>\
- Wireless Network Access Control <br/>\
- NW 접근방식에 무선 공격을 탐지할 수 있는 기능을 추가하여 비인가자의 접근을 차단하는 방법\
',

// IDS
'# 정의 : 비인가 사용자 / 기무가 저해 / 실시간 탐지 시스템 <br/>\
- Intrusion Detectgion System <br/>\
- 비인가된 사용자가 자원의 무결성, 기밀성, 가용성을 저해하는 일련의 행동들과 보안 정책을 위반하는 행위, 즉 침입을 실시간으로 탐지하는 시스템 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/IDS.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- Positive, Reactive 탐지 <br/>\
- 선 패턴 등록 후 반응 <br/><br/>\
# 탐지/차단 <br/>\
- 목적 : 침입 여부 탐지 <br/>\
- 방법 : 시그니처 DB 기반 패턴 매칭 (Known) <br/>\
- 패킷 공격 : 첫번째 공격 방어 어려움 <br/>\
- Zero Day Attack : 방어 곤란 <br/>\
- One Way Attack : 탐지 <br/>\
- DDoS, DoS 차단 : 탐지 <br/>\
- Worm Virus : 탐지 <br/>\
- 차단 방법 : Reset Signal, 방화벽 연동 <br/><br/>\
# 구축/운영 <br/>\
- 대응 방법 : 관리자 경고, 방화벽 Rule 변경 <br/>\
- 연결 방법 : Mirror (TAP, Switch) <br/>\
- 설치 위치 : 코어 네트워크 설치 <br/>\
- 서비스 중단시 장애극복 : 무관 <br/>\
- 장점 : 모든 패킷 자체 탐지 모듈 지원, 네트워크 이상경고 <br/>\
- 단점 : 방화벽 연동 방어 통한 차단 가능 (독립적 제한) <br/><br/>\
* 124회 관리 3교시 6번\
',

// IPS
'# 정의 : 오탐, 미탐 문제 해결 / 시스템 <br/>\
- Intrusino Prevention System <br/>\
- 침입 시스템의 오판과 미탐의 문제 해결을 위해 등장한 정보 시스템 <br/><br/>\
<img src = "./img/IPS.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 특징 <br/>\
- Active, Proactive 대응 <br/>\
- 공격전 사전 차단 <br/>\
# 탐지/차단 <br/>\
- 목적 : 침입방지, 탐지 후 적극적 대응 <br/>\
- 분석방법 : Rule DB 기반, 비정상 행위 방지 <br/>\
- 패킷공격 : 공격 방지 가능 <br/>\
- One-Way Attack : 탐지/차단 <br/>\
- DDoS, DoS 차단 : 탐지/차단 <br/>\
- Zero-Day Attack : 일부 가능 <br/>\
- Worm Virus : 탐지/차단 <br/>\
- 차단 방법 : 자체 차단 <br/><br/>\
# 구축/운영 <br/>\
- 대응 방법 : 자원 접근 차단(Unkown) <br/>\
- 연결 방법 : In-lIne <br/>\
- 서비스 중단시 장애 극복 : FoD(Fail Over Device) 통한 장애 대응 <br/>\
- 장점 : 모든 패킷 대해 자체 탐지, 차단, 보호 <br/>\
- 단점 : Transparent Mode 운영, NAT등 방화벽 고유 기능지원 불가 <br/><br/>\
* 124회 관리 3교시 6번\
',
  
// XSS
'# 정의 : Web Script 게시물 기반 공격 기법 <br/>\
- 웹기반 게시판 등에 등록된 Scrpit 게시물을 조회한 사용자를 대상으로 공격하는 기법 <br/>\
- Cross-Site Scripting <br/>\
- 게시판, 웹 메일 등에 삽입된 악의적인 스크립트에 의해 페이지가 깨지거나 다른 사용자의 사용을 방해하거나 쿠키 및 기타 개인 정보를 특정 사이트로 전송시키는 공격 <br/><br/>\
# 절차 <br/>\
- 저장 : SQL Injection과 같이 사용자의 입력값에 대한 Script 검증 없이 DB에 저장 <br/>\
- 노출 : 사용자가 게시글 조회시 DB에 저장된 스크립트가 웹페이지에 노출 <br/>\
- 동작 : 브라우저에 의해 스크립트가 실행되어 동작 <br/>\
- 유출 : 사용자 PC의 쿠키정보 등의 개인정보 유출 <br/><br/>\
# 공격유형 <br/>\
1. Stored XSS <br/>\
- Persistence 방식 <br/>\
- Server Application 취약점 <br/>\
<img src = "./img/XSS_1.png" style = "max-width: 100%; height: auto;"><br/><br/>\
2. Refelective XSS <br/>\
- Non Persistence 방식 <br/>\
- Server Application 취약점 <br/>\
<img src = "./img/XSS_2.png" style = "max-width: 100%; height: auto;"><br/><br/>\
3. DOM Based <br/>\
- Document Object Model Based XSS <br/>\
- html Browser단 실행 <br/>\
- Client Browser 취약점 <br/>\
- 주기억 장치 메모리로 코드가 올라간 다음에 DOM 환경에서 악성 코드가 실행되는 형태 <br/>\
<img src = "./img/XSS_3.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 공격 방지 방법 <br/>\
- 문자열 치환 함수 사용 <br/>\
- \& \< \> 등을 \&amp; \&lt; \&gt; 로 치환 <br/>\
- XSS 방지 Lib 활용 (JSTL) <br/><br/>\
# 실 코드 사례 <br/>\
* 라이지움 87회 관리 4교시 2번<br/>\
* 라이지움 86회 1교시 8번 <br/>\
* 그리타 \
',
  
// SSRF
'# 정의 : 신뢰하는 서버로부터의 공격 <br/>\
- Server-Side Request Forgery <br/>\
- URL Scheme를 활용하여 Internet 영역의 서버를 통해 공격자가 조작한 request 명령을 내부 네트워크에 존재하는 서버로 전달하여 데이터 유출 또는 제어하는 동작을 수행하는 공격 방식 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SSRF_Orverview.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 공격 기법 <br/>\
- SSRF의 취약점 악용, 웹 서버에 요청 발송 <br/>\
- Web Server, Local Network 서버에 요청 전달 <br/>\
- Local Network, 요청한 데이터 응답 수행 <br/>\
- 공격자에게 필요한 데이터 전송 <br/><br/>\
# 대응 방안 <br/>\
- 문자열 검증 : 정규식 활용, 입력 문자열 검증 <br/>\
- IP 확인 : IPv4, IPv6 주소 체계 확인, 신뢰하는 IP 주소 여부 확인 <br/>\
- DNS 검증 : 내부 허용 가능한 DNS 목록 검증 수행 <br/>\
- 파라미터 제어 : 파라미터 값 URL 연동 인터페이스 지양 <br/><br/>\
* KPC 97회 관리 1교시 9번\
',

// DDoS
'# 개념 : 좀비 클라이언트 / 자원 고갈 / 시스템 거부 유발 <br/>\
- 대량의 좀비 클라이언트의 악성 프로그램을 통해 목표 시스템의 자원을 고갈하여 시스템 거부(DoS)를 유발하는 공격기법 <br/><br/>\
# 주요 공격 유형 <br/>\
<img src = "./img/DDoSType.png" style = "max-width: 100%; height: auto;"><br/>\
- SYN Flood : 대량 SYN 패킷 서버 전달 / 대기큐 가득 <br/>\
- UDP Flood : 대량 UDP 패킷 서버 전달 / 대역폭 가득 <br/>\
- ICMP Flood : 봇냇 사용 ICMP 패킷 전송 / 서비스 중지 <br/>\
- HTTP Get Flood : HTTP GET 요청 / 리소스 소진 <br/><br/>\
# 대응 절차 <br/>\
- 공격 인지 : 이벤트 DDoS 판별 <br/>\
- 유형 파악 : 유형 명확 파악, 정책 분류 <br/>\
- 유형별 차단 대응 : 대역폭 소진, 웹서버 자원 소모, DB Connection 부하 등 유형별 대응 <br/>\
- 사후 조치 : 트래픽 분석, 정책 업데이트 IP 확보 <br/>\
<font color = "red">* KISA의 사이버 대피소등 외부 지원 서비스 활용</font><br/><br/>\
* 114회 응용 3교시 3번 <br/>\
* ITPE 2회 관리 2교시 4번\
',

// Race Condition 
'# 정의 : 공유 자원 / 경쟁 상태 / 임시 파일 / 관리자 권한 탈취 공격 <br/>\
- 공유 자원에 여러 개의 프로세스가 동시에 접근하기 위한 경쟁 상태에서 생성된 임시 파일을 통해 관리자 권한을 탈취하는 공격 기법 <br/><br/>\
# 공격기법 <br/>\
1. 정상 <br/>\
<img src = "./img/RaceConditionNormal.png" style = "max-width: 100%; height: auto;"><br/>\
- 프로그램 실행 <br/>\
- SetUID 인한 프로세스 권한 Root 권한 상승 <br/>\
- 프로그램 동작 <br/><br/>\
2. 레이스 컨디션 공격 중 <br/>\
<img src = "./img/RaceConditionAttack.png" style = "max-width: 100%; height: auto;"><br/>\
- 악의적 프로그램 통한 프로세스 실행중 끼어듦 <br/>\
- 심볼릭 링크 <br/>\
- 주요 파일 내용 수정 등 공격 <br/><br/>\
# 대응방안 <br/>\
1. 프로그램 실행 전 <br/>\
- 임시파일 생성 자제 <br/>\
- umask 최하 022로 유지 <br/><br/>\
2. 프로그램 실행 중 <br/>\
- 생성한 임시파일에 링크 존재 여부 검사 <br/>\
- 임시 파일 생성시 랜덤 이름 생성 <br/><br/>\
* ITPE 8회 관리 1교시 8번\
',
  
// DDOS - 스크러빙 센터, 컨텐츠 전송 네트워크 
'# 스크러빙 센터 개념 : 디도스 공격방어 전용 서비스 제공 시설 <br/><br/>\
# 스크러빙 센터, CDN 비교 관점 <br/>\
- 대응방법 : Flooding / Connection / Application <br/>\
- 대응규모 : 네트워크 / Appliance / SW <br/>\
- 대응시점 : 탐지 / 차단 / 복구 <br/>\
- 트래픽 방어 여부 : 복호화 여부 / Inspection / 트래픽 처리 <br/>\
- 기존장비 활용 : 보안 장비 / 보안 솔루션 / 네트워크 장비 <br/><br/>\
* 116회 4교시 2번\
',

// [DDoS]- TCP Traffic Flooding
'# 정의 : TCP 악용 / Victim 서비스 / 과부하 공격 <br/>\
- TCP 연결지향성을 위한 프로토콜 과정을 악용하여 Victim 서비스의 과부하를 야기시키는 공격 <br/><br/>\
# 종류 <br/>\
1. SYN Flooding <br/>\
- 공격자 : 다량의 <font color = "red">SYN</font> 패킷 전달 <br/>\
- 서버 : 대기큐 가득 채워 장애 (Half open 상태 / 75초) <br/><br/>\
2. TCP Flag Flooding <br/>\
- TCP Flag 값 임의 조작 (<font color = "red">SYN, ACK, FIN, RST</font>) <br/>\
- 수신 대상 검증 위해 자원 소모 <br/><br/>\
3. TCP Session (<font color = "red">3 Way Handshaking</font> 과도 유발) <br/>\
- TCP 세션 연결유지 DDoS 공격 <br/>\
- TCP 세션 연결/해제 반복 공격 <br/>\
- 연결 후 정상 처럼 보이는 DDoS <br/><br/>\
# 대응 방안 <br/>\
1. SYN Flooding <br/>\
- 임계치 기반 SYN Flooding 차단 : <font color = "red">PPS</font> 단계적 조정 <br/>\
- FirstSYNFlooding 차단 : <font color = "red">의도적 Drop</font>, 재요청 확인<br/>\
- 정상 트랜잭션 검증 : <font color = "red">연결 후 정상</font> 수행 확인 <br/><br/>\
2. TCP Session 공격 <br/>\
- Connection Timeout 설정 : 일정 <font color = "red">시간</font> 송수신 체크 <br/>\
- Keep-Alive 설정 : Keepalivetimeout <font color = "red">세션</font> 공격 차단 <br/>\
- Time-Wait 설정 : 연결 <font color = "red">고갈</font> 공격 차단 <br/>\
- L7 스위치 임계치 설정 : <font color = "red">IP</font>당 Connection Limit 설정 <br/><br/>\
* 114회 응용 3교시 3번\
',

// [DDoS]- HTTP Head/Option Spoofing Flooding
'# 정의 : 웹 서버 가용량 소비 / DoS 상태 유발 공격 <br/>\
- 웹 서버의 가용량을 모두 소비시켜 정상적인 웹 서비스를 제공하지 못하도록 하는 DoS 상태를 유발하는 공격 <br/><br/>\
# 절차 <br/>\
<img src = "./img/HTTPHeadOptionSpoofingFlooding.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 공격 기법 <br/>\
- Slow HTTP <font color = "red">Post</font> DoS : <font color = "red">장기간</font> 걸쳐 분할 전송 <br/>\
- Slow HTTP <font color = "red">Header</font> DoS(Slowloris) : <font color = "red">Header 속여</font> 지속 연결 <br/>\
- Slow HTTP <font color = "red">Read</font> DoS : TCP <font color = "red">윈도우</font> 크기, <font color = "red">데이터 처리율</font> 감소 연결 <br/><br/>\
# 대응 방안 <br/>\
- Slow HTTP Post DoS : <font color = "red">임계치</font>, Connection,Keepalive,RequestRead <font color = "red">Timeout</font> <br/>\
- Slow HTTP Header DoS: <font color = "red">캐시</font> 서비스 대체, Content-Length 임계치 설정 <br/>\
- Slow HTTP Read DoS : HTTP Request <font color = "red">Packet Size 검증</font>, <font color = "red">TCP 모니터링</font> <br/><br/>\
* 114회 응용 3교시 3번\
',

// [DDoS]- HashDoS
'# 정의 : GET, POST Hash 구조 서버 공격 기법 <br/>\
- GET, POST 방식으로 전송되는 HTTP 메시지에 포함된 매게변수의 효과적인 관리를 위해 해시 구조를 사용하는 웹서버를 대상으로 하는 공격 <br/><br/>\
# 절차 <br/>\
- 다량 파라미터 전달 <br/>\
- 해시테이블 중복 유도, 충돌 발생 <br/>\
- 조회시 많은 자원 소모하여 100% 도달 <br/><br/>\
# 대응 방안 <br/>\
- <font color = "red">Parameter</font> 개수 제한 <br/>\
- <font color = "red">POST</font> 메시지 크기 제한 <br/>\
- 웹 서버 업데이트 : 위 2 항목 지원 버전 <br/><br/>\
* 114회 응용 3교시 3번\
',
  
// DRDoS
'# 개념 : 별도 설치 없이 / 프로토콜 취약성 이용 / DDoS 에이전트로 활용 공격 <br/>\
- 별도의 에이전트 설치 없이 네트워크 통신 프로토콜 구조의 취약성을 이용해 정상적인 서비스를 운영하고 있는 시스템을 DDoS 공격의 에이전트로 활용하는 기법 <br/><br/>\
# 주요 공격 유형 <br/>\
- SYN+ACK 반사 공격 : 공격자, 피해자 IP 도용 -> 서버 SYN 패킷 전송 / SYN/ACK 패킷을 피해자에게 전송 공격 <br/>\
- NTP 반사 및 증폭 공격 : 공격자, 정상적 NTP 서버 트래픽 사용 공격 <br/>\
- DNS 반사 및 증폭 공격 : 공격자, DNS 시스템 악용 / 많은양 트래픽 전송 공격 기법 <br/>\
- CLDAP 반사 및 증폭 공격 : 공격자, 대상 IP 주소 도용 -> LDAP 서버로 CLDAP 요청 (UDP 389) <br/><br/>\
* ITPE 2회 관리 2교시 4번\
',
  
// Secure Coding
'# 정의 : 설계 및 구현 단계 / 취약점 사전 제거 / 안전한 소프트웨어 개발 기법 <br/>\
- 설계 및 구현 단계에서 해킹 등의 공격을 유발할 가능성이 있는 잠재적인 보안 취약점을 사전에 제거하여, 외부 공격으로부터 안전한 소프트웨어를 개발하는 기법 <br/><br/>\
<a href = "./doc/소프트웨어개발보안가이드.pdf">참고문헌</a><br/>\
# 유형 (CWE 7 Pernicious Kingdom) (입보시에코캡A) <br/>\
1. 입력 데이터 검증 및 표현 <br/>\
- 내용 : 입력값 검증, 형식, 언어셋 <br/>\
- 유형 : SQL Injection / XSS / OS 명령어 삽입 <br/>\
- 대응 : 인자화 질의문 / ReplaceAll / 사용 x <br/><br/>\
2. 보안 기능 <br/>\
- 내용 : 인증, 접근제어, 기밀성, 암호화, 권한관리 <br/>\
- 유형 : 부적절 인가 / 취약한 암호 알고리즘 <br/>\
- 대응 : 노출 최소화 / 3DES, AES, SEED <br/><br/>\
3. 시간 및 상태 <br/>\
- 내용 : 병렬 시스템 프로세스, 시간 상태 관리 <br/>\
- 유형 : TOCTOU 자원 상태 변화 / 재귀함수 <br/>\
- 대응 : thread safe 함수(mutex) / 조건문 or 반복문 블록 사용 <br/><br/>\
4. 에러 처리 <br/>\
- 내용 : 정보 노출, 불충분 처리 <br/>\
- 유형 : 노출 / 오류 상황 대응 부재 <br/>\
- 대응 : 최소한 정보 표현 / 예외 처리 <br/><br/>\
5. 코드 오류 <br/>\
- 내용 : 개발자 코딩 오류 <br/>\
- 유형 : 자료형 오류(부호, Casting) / 동적 메모리 <br/>\
- 대응 : 반환 값 확인 / 사용후 자원 해제 <br/><br/>\
6. 캡슐화 <br/>\
- 내용 : 중요 데이터 불충분 캡슐화 <br/>\
- 유형 : 디버거 코드 / 시스템데이터 노출 <br/>\
- 대응 : 개발 후 삭제 / 노출 금지 <br/><br/>\
7. API 악용 <br/>\
- 내용 : 의도 이외 사용, 보안 취약 API <br/>\
- 유형 : 위험 함수 사용 / NULL 처리 <br/>\
- 대응 : 취약 함수 금지 / NULL Exception <br/><br/>\
# 사례 <br/>\
<img src = "./img/SecureCoding.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 114회 응용 1교시 9번 <br/>\
* 라이지움 87회 관리 4교시 2번\
',
  
// [시큐어 코딩]- TouchPoints 기법 
'# 정의 : 보안관련 7가지 포인트 제시<br/>\
- Gary McGraw - TouchPoints 기법 <br/>\
- SW 개발시 보안과 관련된 중요 7가지 포인트를 제시하고 이를 개발 생명주기의 보안 강화 활동으로 제시 <br/><br/>\
# Point (코아침위사요운)<br/>\
- 코드검토(Code Review) <br/>\
- 아키텍처 위험분석(Archtectural risk analysis) <br/>\
- 침투테스트(Penetration testing) <br/>\
- 위험기반 보안 테스트(risk based security tests)<br/>\
- 악용사례(abuse cases)<br/>\
- 보안요구(security requirement) <br/>\
- 보안운영(security operation) <br/><br/>\
<img src = "./img/SevenTouch_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/SevenTouch_2.png" style = "max-width:100%; height:auto;">\
',
  
// 크라임웨어
'# 정의 : 불법 활동 조장 프로그램 <br/>\
- 온라인상에서 불법 활동을 조장하기 위해 만들어진 컴퓨터 프로그램(TTA) <br/>\
- 스파이웨어, 브라우저 하이젝커, 키로커 등을 포함하여 모두 피싱킷 이라는 공통점에 대부분 웹사이트 개발 소프트웨어와 스패밍 소프트웨어를 포함하고 있고, 인터넷에서 곧바로 사용 가능 <br/>\
- 중요한 금융정보 또는 인증정보를 탈취하거나 유출을 유도하여 금전적인 이익 등의 범죄행위를 목적으로 하는 악성 코드 <br/><br/>\
# 특징 : 추적회피, 확산지향, Zero Day Attack <br/><br/>\
# 주요유형<br/>\
- 은닉형 : 트로이 목마, 루트킷/익스플로잇, 피싱/파밍, 스파이웨어 <br/>\
- 정보획득형 : 키보드로거, 메모리 해킹 <br/>\
- 금전요구형 : 멀버타이징, 랜섬웨어<br/>\
- 서비스형 : CaaS <br/>\
- 제우스(Zeus), 스파이아이(SpyEye), 랜섬웨어, 스파이웨어, KeyLogger, 스크린 Scraper, 메일/메신저 Redirect, 세션 하이재커 MITM, 루트킷 등 <br/><br/>\
# 발전 단계 <br/>\
- 폼 그래빙(Form grabbing) : 훅 기반 키로깅 <br/>\
- 안티 디텍션(Anti Detection) : 레지스트리 위치, 파일이름, 서명, 프로토콜 등 변화시켜 회피,은닉 <br/>\
- 웹 인젝션(MITB) <br/>\
- 브라우저/OS 확장 지원 <br/>\
- 소스 코드 입수, 배포 : 제우스, 스파이아이 소스코드 2010, 2011 공개적 배포 <br/>\
- 크라임 웨어 백신 작동 해제, 회피 <br/>\
- 모바일 기기 확대 : MITM(Man In The Mobile)<br/>\
- 삭제 방지 : 삭제해도 재생성 <br/><br/>\
# 최근경향 <br/>\
- 1세대 : 은닉형 Malware <br/>\
- 2세대 : Ransomware <br/>\
- 3세대 : Crimeware as a Service <br/><br/>\
* 최근 다양한 형태의 크라임웨어가 SaaS(Software as a Service) 형태로 상업화 빠르게 진행 \
',

// 랜섬웨어
'# 정의 : 공격도구 및 기법 (공격도구가 랜섬웨어인 악성코드) <br/>\
- 국번 없이 118 <br/>\
- 사용자 동의 없이, 파일을 모두 암호화하여 인질로 잡고, 금전을 요구하는 악의적 목적이 부여된 공격 프로그램 <br/>\
- 사용자 디바이스 또는 네트워크 스토리지 디바이스의 파일을 암호화하는 멀웨어의 한 가지 유형 <br/><br/>\
# 특징 <br/>\
- 공격대상 집중화 : 비표적(무차별다수-Phishing, Encryption) -> 표적(타겟형-Spear Phishing, BEC/EPC Vulnerability 활용) <br/>\
- 공격형태 세분화 : 랜섬웨어(RaaS, APT, 증거인멸), 거래소(직접-해킹, 직원공격 / 사용자-탈취,채굴형 악성코드 / 가용성 저해(RDDoS, 교육->금융->민간) <br/><br/>\
# 공격 흐름 <br/>\
- 침투 : 악성메일, 피싱사이트, AD배너, ATP <br/>\
- Pre-load : PC 권한 탈취, 복원시점 삭제, 중복실행 방지, 백신 탐지, 자동실행 등록 <br/>\
- 암호화 : 최소부팅 파일, 공격파일 분류 <br/>\
- 암호키 생성 <br/>\
- 파일 암호화 <br/><br/>\
# 대응 방안 <br/>\
1. 사전대응 <br/>\
- 백업 : 정책수립 및 심층적 백업 계획, 웜스토리지, 테이프스토리지, 소산백업(Vaulting) <br/>\
- 망분리 : 논리적, 물리적 <br/>\
- 실시간 모니터링 : EDR, IPS, IDS, CDR, DRM <br/>\
- 교육 : 운영,행동,대응 교육, 현황 공유 <br/><br/>\
2. 사후대응 <br/>\
- 위협 네트워크 차단 <br/>\
- 물리장치 격리 및 분석 <br/>\
- 복구프로세스 시행 <br/>\
- 신고 및 보험처리 <br/>\
- 감염 통지 및 금전 요구 <br/>\
- 랜섬노트 생성 <br/>\
- 디지털코인(FT) 연동 <br/><br/>\
# 종류 <br/>\
1. 공격대상 관점 (블록크랜)<br/>\
- 블루 크랩 : 개인 PC 파일 암호화, 금전적 요구 <br/>\
- 록커고가, 류크 : 제조분야, 공공기관 사칭 공격으로 시설 마비 <br/>\
- 갠드크랩 : 취약한 암호화폐 대상 거래소 정보 탈취 공격 <br/>\
- 랜섭웹 : DB, 백업처리용 DB에 접근하여 암호화 공격 <br/><br/>\
2. 공격기법 관점 (매워C비)<br/>\
- 매그니베르 : 백신 우회, 별도 실행파일 없이 데이터 암호 공격 <br/>\
- 워너크립터 : 검색엔진을 이용한 특정 포트 대상 표적 공격 <br/>\
- CLOP : 기업 AD 계정 소유 서버를 공격 내부 시스템 접근 <br/>\
- 비너스 락커 : 워터링 홀 공격 <br/><br/>\
3. 공격범위 관점 (록M넷N) <br/>\
- 록커고가 : 공장 가동 전면 중단, 행정 시스템 운영 전체 마비 <br/>\
- Maze : 개인데이터 탈취 및 공격자간 공유 카르텔 형성 <br/>\
- 넷워커, 피사 : 탈취데이터 공개로 피해자 신상누출 2차 피해 유발 <br/>\
- Nemty : 랜섬웨어 암호화폐 거래소 세탁으로 범죄자금 우려 <br/><br/>\
* 아이리포 24회 2교시 3번\
',

// RaaS
'# 정의 : 익명 네트워크 / 비용 지급 / 랜섬웨어 공격 SaaS <br/>\
- Ransomware as a Service <br/>\
- 다크웹과 같은 익명 네트워크를 이용하여 비용만 지급하면 랜섬웨어 공격을 할 수 있게끔 서비스 형태로 제공되는 랜섬웨어 <br/><br/>\
# 특징 <br/>\
- 생태계 확대 : Hostign/Exploit, 자금세탁 (제작자, 공격자 상이) <br/>\
- 랜섬웨어 공격 후 수익금 분배 <br/>\
- 제공부터 유포, 업데이트 제공 <br/><br/>\
# 구성요소 <br/>\
- 랜섬웨어 개발자 : 파일, 키교환 암호 알고리즘 및 불법자금 최대화 공격개발 <br/>\
- 제휴기관 : 판매 게시글(Tor Browser), Packer as a Service, 접근경로, RDP 계정 판매 <br/>\
- 자금 세탁 : 다수의 암호화폐 및 지갑 이용, 합법 형태 환전 <br/>\
- Hosting/Exploit : 공개된 호스팅 서비스, 취약한 서비스 의미 <br/>\
- 공격대상 : 랜섬웨어 감염 피해자 \
',

// 표적형 랜섬웨어
'# 정의 : 공격 형태 + 공격 도구 (Spear Phishing, APT 같은 개념) <br/>\
- 특정기업이나 기관의 취약점을 분석하여 이를 대상으로 정보유출과 파일 암호화를 동시에 실행하며 금전적 협박을 가하는 표적공격과 랜섬웨어가 결합된 보안 위협 <br/><br/>\
# 특징 <br/>\
- 지속 공격 : 오랜 시간에 걸친 분석, 지속적 정보 유출 <br/>\
- 특정 표적 대상 : 특정 기관이나 기업 대상 공격 <br/>\
- 이중 위협 : 금전요구, 정보 유출 <br/><br/>\
# 종류 <br/>\
1. 시스템 직접 침투 <br/>\
- 류크(Ryuk) : 스피어 피싱 권한 획득, NW 암호화 <br/>\
- 소디노키비(Sodinokibi) : 정교한 Malware 이용, 웹로직 서버, 시큐어 VPN 취약점 <br/>\
- 샘샘(SamSam) : 미국 의료시설 대상, 시스템 침투 후 권한 확대 <br/><br/>\
2. 데이터 유출 미끼 협박 <br/>\
- 에그레고르 (Egregor) : 피싱 메일 이용 <br/>\
- 클롭 (Clop) : 한국유통기업 타깃, POS 시스템 감염 <br/><br/>\
3. DDoS 위협 유형 <br/>\
- 랜섬 디도스(Ransom DDoS) : 특정 기업 DDoS 공격 뒤, 협박 <br/><br/>\
# 대응방안 <br/>\
- 보안 관리 철저 : 안전한 비밀번호, 취약점 점검, 보안 업데이트 <br/>\
- 차세대 보안기술 적용 : SOAR, AI, 위협 인텔리전스 <br/>\
- 백업 파일 보안 강화 : 안전 저장매체 <br/>\
- 비대면 환경 보안 강화 : 임직원 보안 교육, 안전한 비대면 환경 조성 <br/><br/>\
* ITPE 6회 관리 1교시 5번\
',

// [랜섬웨어]- DBD
'# 정의 : 방문 악성 코드 감염 공격 <br/>\
- Drive By Download <br/>\
- 사용자가 인지하지 못한 상태로 웹사이트 방문만해도 악성코드 감염시키는 공격<br/><br/>\
# 유형(2) : API 오류악용, 브라우저&플러그인 취약점 <br/><br/>\
# 대응방법측면(2) : 관리자 / 사용자 <br/><br/>\
# 절차 <br/>\
- 사용자 방문 사이트 배너 <br/>\
- 게시판에 URL Redirection 가능 코드 삽입 <br/>\
- 방문 <br/>\
- Redirection <br/>\
- 다운/악성행위(드로퍼(Dropper), 키로깅) <br/><br/>\
<img src = "./img/DBD.png" style = "max-width:100%; height:auto;">\
',

// [랜섬웨어]- Drive by cryptomining 
'# 정의 : 웹사이트 방문자 채굴 공격 <br/>\
- 암호화폐를 채굴하기 위한 악성코드로 예전에는 자신의 웹사이트에 방문한 사람들의 CPU 파워를 빌려 모네로(Monero)라는 암호화폐를 채굴하는 것이 공격의 주요 수법이었다면, 지금은 웹사이트에 방문한 사람들이 웹 브라우저를 꺼도 채굴이 계속 진행되로록 하는 공격',

// [랜섬웨어]- 로키 랜섬웨어
'# 정의 : 첨부파일 매크로, 자바스크립트 기반 랜섬웨어 <br/>\
- 첨부파일에 포함된 문서파일에 포함된 매크로를 실행하거나 직접 첨부된 자바스크립트 파일을 실행 시 감염시켜 피해를 입히는 랜섬웨어<br/>\
- 스팸메일로 유명한 다이어(Dyre), 드라이덱스(Dridex) 제작자와 손잡아, 전문적 스팸메일로 유포됨 <br/><br/>\
# 특징 <br/>\
- 도메인 생성 알고리즘 : SEED 사용 <br/>\
- 지불 방법 : TOR / Bitcoin <br/>\
- 파일 암호화 방식 : RSA-2048 + AES-128<br/>\
- 160개 이상 종류 파일들 + virtual disk + 소스코드 + DB\
',

// [랜섬웨어]- 워너크립터
'# 정의 : SMB v2 원격 코드 취약점 이용 랜섬웨어 <br/>\
- WannaCryptor, WannerCry, Wcrypt <br/>\
- MS Windows 운영체제의 SMB (Server Message Block) v2의 원격코드 실행 취약점을 이용, 네트워크를 통해 PC간 감염 전파하여 감염된 PC의 데이터를 암호화후 해제 대가 요구 신종 랜섬웨어 <br/><br/>\
# 특징 <br/>\
- 랜섬웨어 + 웜바이러스 <br/>\
- 네트워크 통한 확산 <br/>\
- Kill Switch <br/>\
1) NW 전파 활동 개시 전 특정 도메인 접속 여부 확인 <br/>\
2) 도메인 접속시 전파 활동 중지 Kill Switch 코드 내장 <br/><br/>\
# 절차 <br/>\
- 전파 <br/>\
1) Kill Switch 체크 <br/>\
2) 로컬 IP 대역 및 랜덤 IP 대상 SMB 취약점 이용 공격 <br/>\
3) SMB 취약 OS에 감염 <br/>\
4) 추가 전파(tasksche.exe 파일 생성, 랜섬웨어 감염 수행) <br/>\
-> NW내 전파 방법 : 자신의 로컬 IP D클래스 대역 스캔하거나 랜덤 IP로 SMB 프로토콜 패킷(445/tcp) 반복 전송 <br/><br/>\
- 공격 <br/>\
5) 악성코드 생성 <br/>\
6) 랜섬웨어 감염 <br/>\
7) 파일 암호화 (.WNCRY, .WNCRYT등) 확장자 추가 <br/>\
8) 비용 지불 요구 (3,000달러 수준의 비트코인 지불 요구) <br/><br/>\
# 예방 : PC 사용자 - PC 켜기전 조치, MS 윈도우 업데이트 실행 <br/><br/>\
# 피해현황 <br/>\
- 영국 : 스페인과 더불어 1차 피해국, 영국 국민보건 서비스(NHS) 산하 병원 40여개소 피해 <br/>\
- 독일 : 철도 시스템 공격, 피해 경미 <br/>\
- 일본 : 일부 JR 열차 지역 안내판 감염 <br/>\
- 러시아 : 가장 큰 피해 발생, 내무부 컴퓨터까지 감염 <br/>\
- 중국 : 공항 출입국관리국 비롯 각종 공공기관, 학교, ATM등 감염 피해 심각<br/>\
- 국내 : KISA 발표 - 15일 기준 국내 기업 9건 감염 <br/><br/>\
# 대응 현황 : Kill Switch, MS 보안 패치 제공, 보안업계 백신/시그니처 공개, KISA SMB취약점을 악용한 랜섬웨어 방지 대국민 행동 요령 배포 <br/><br/>\
* SMB 취약점 : CVE-2017-0143/0144/0145/0146/0147/0148 <br/><br/>\
* 파일 일부 복구해서 복구 가능성 확인시켜줌 1.0은 0.3 비트코인 요구 2.0은 300달러 요구 <br/><br/>\
* [2017.04.] 해킹 조직 셰도브로커는 미국 정보기관 국가 안보부(NSA)를 해킹해 사이버 무기로 사용했던 취약점의 인터넷 공개에 포함\
',
   
// [랜섬웨어]- 독스웨어
'# 정의 : 정보 미끼 금전 요구 악성 코드 <br/>\
- 개인에게 피해를 줄 수 있는 파일이나 정보를 미끼로 금전을 요구하는 악성코드 <br/><br/>\
# 특징 : 협박성, 표적형 <br/><br/>\
# 공격 방법 : 개인정보 탈취, 비트코인 활용, 적은 용량이라도 민감정보 탈취 <br/><br/>\
# 대응 방안 : 솔루션 도입, 암호화 관리, 첨부파일 유의, 패스워드 관리 <br/><br/>\
* 독싱 : 해킹 개인정보를 온라인에 공개 \
',

// [랜섬웨어]- 배드래빗
'# 정의 : 공유 폴더 통한 Boot 파티션 암호화 랜섬웨어 <br/>\
- Diskcoder <br/>\
- 윈도우 공유폴더를 통해 감염되며, PC 부팅과 관련된 MBR을 변조하고 부트 파티션을 암호화하는 랜섬웨어<br/><br/>\
# 등장배경 <br/>\
- 2017.10.25. 러시아, 우크라이나, 독일 등 유럽 15개 국가의 정부기관, 언론사를 비롯해 공항, 지하철 등 수백개의 기업 및 기관이 악성코드 감염 사태 발생 <br/><br/>\
# 감염 절차 <br/>\
1. 웹사이트에 악성코드 스크립트 설치, 가짜 Adobe Flash 설치를 DBD로 유도 <br/>\
2. MBR 변조 및 부트 파티션 암호화 위한 추가 악성파일 설치 <br/>\
3. 배드래빗 감염시 SMB 프로토콜 통해 다른 네트워크로 감염 확대 <br/>\
4. 윈도우의 LSASS(Local Security Authority Subsystem Service) 인증세션 프로세스를 공격해 로그인 정보 탈취 <br/>\
5. 탈취 정보로 원격지 공유 폴더 암호화 또는 다른 시스템으로 감염 전파 <br/>\
6. AES-128 파일 암호화 후 해독키 제공 대가로 금전 요구 <br/><br/>\
# 대응 절차 <br/>\
1. 최신 보안 업데이트 <br/>\
2. 최신 백신 설치 및 정기적 검사 진행 <br/>\
3. 불필요한 공유폴더 연결 해제 <br/>\
4. 출처 불분명한 메일 또는 링크 실행 주의<br/>\
5. 파일 공유사이트 등에서 파일 다운로드 및 실행 주의 <br/>\
6. 중요 자료는 네트워크에서 분리된 저장장치에 별도 저장 관리\
',

// [랜섬웨어]- CaaS(Cybercrime as a Service)
'# 정의 : 사이버 범죄 서비스 <br/>\
- 블랙마켓을 통해 거래되는 사이버범죄 도구(피싱, 스팸, 악성코드, 관련 인프라 등)를 이용하여 기술적 지식이 없는 일반인도 저렴한 비용으로 사이버범죄를 저지를 수 있도록 하는 서비스',

// [랜섬웨어]- 갠드크랩 랜섬웨어
'# 정의 : 파일 암호화 서비스형 랜섬웨어 <br/>\
- 서비스형 랜섬웨어의 일종으로 파일 암호화 기능을 수행한 뒤 가상화폐를 요구하는 랜섬웨어 <br/><br/>\
',

// 멀버타이징
'# 정의 : Malware + Advertisng<br/>\
- 광고 서비스의 정상적인 네트워크를 이용하여 악성코드를 유포 및 감염시키는 악의적 공격기법 <br/><br/>\
# 암기 <br/>\
- 절차 : 광등.애배.광접.리다.취검.다운.감염 <br/><br/>\
# 절차 <br/>\
1. 위장광고 등록 <br/>\
2. 애드웨어 배포 <br/>\
3. 애드웨어 통한 광고 접속 <br/>\
4. 취약페이지 리다이렉트 <br/>\
5. 취약점 체크 <br/>\
6. 악성코드 다운로드 <br/>\
7. 정상 Site 이동 <br/>\
8. 애드웨어 의한 불특정 광고 사이트 접속 <br/>\
9. 위장 광고 페이지 접속시 취약 사이트로 리다이렉트(이후 정상사이트 이동) <br/>\
10. 사용자 PC 애플리케이션 취약점 체크 : 실버라이트, 아크로벳 리더, 자바, 플래시 플레이어 <br/>\
11. 취약점 확인 후 악성코드 다운로드 실행 <br/>\
12. 사용자 PC 감염<br/><br/>\
* 공격기법 : 온라인 광고 서버 해킹, 애드웨어 이용\
',

// Phishing
'# 정의 : 사회공학적 방법 / 기술적 은닉기법 / 개인,금융 정보 절도 사기 수법 <br/>\
- 개인정보(Private Data), 낚시(Fishing) 합성어로 사회공학적 방법 및 기술적 은닉기법을 이용해 민감한 개인정보, 금융제정 정보를 절도하는 금융사기 수법 <br/><br/>\
# 암기 : 대응-기사법<br/><br/>\
# 유형 : 도메인 사기, 공기관 사칭, 뉴스/사건 사칭, 가짜 사이트/링크 <br/><br/>\
# 공격 : MITM, URL, 위장, 이용감시(KeyLogger), CSS 은닉 <br/><br/>\
# 대응 <br/>\
- 기술적 : 웹사이트인증, 메일서버인증, PC확인 방식의 전자서명 메일, GW확인 방식 전자서명메일 <br/>\
- 사회문화적 : 인식제고활동, 실천문화확산, 정보공유 및 신속대응 <br/>\
- 법,제도적 : 국내,외 법 제도 정비\
',

//[피싱(Phshing)]- 액티브 피싱
'# 정의 : MITM + Phshing <br/>\
- Active Phishing <br/>\
- MITM(Man-in-the-middle) 공격을 피싱 공격에 응용한 것으로 MTTM 피싱 또는 실시간 피싱 <br/><br/>\
# 대응 : 2채널 인증\
',

//[피싱(Phshing)]- 스피어 피싱
'# 정의 : 지인 사칭 정보 획득 기법 <br/>\
- 직장동료나 친구, 가족을 사칭한 사기 기법으로 ID, PassWord를 획득하여 정보를 획득하는 해킹 기법 <br/><br/>\
# Keyword : APT공격, 표적성, 정교성, 사회공학기법, 악성코드, 이메일, 제로데이공격, SPF(Sender Policy Framework) <br/><br/>\
# 암기 : 특징-표심정 <br/><br/>\
# 특징(3) : 표적성, 심각성, 정교성 <br/><br/>\
# 대응방안 <br/>\
- 관리적 : 교육, 훈련, 대응프로세스 <br/>\
- 기술적 : 메일서버, 웹서버, 패치 <br/>\
- 사용자 : 이메일, 패치, 대응 솔루션 <br/><br/>\
# 절차 <br/>\
- 표적 설정/정보수집 <br/>\
- 이메일 전송 <br/>\
- 첨부파일 통한 악성코드 감염<br/><br/>\
# 스피어피싱, 워터링홀 비교(사회공학적기법) <br/>\
<img src = "./img/SpearPhishingWateringHole.png" style = "max-width:100%; height:auto;"><br/><br/>\
*116회 1교시 7번\
',
  
// Pharming
'# 정의 : 탈취한 도메인 이용 개인정보 탈취 수법<br/>\
- 합법적 소유의 사용자 도메인 탈취, DNS 이름 속여 사용자들이 진짜 사이트로 오인하도록 유도하는 개인정보 탈취 수법 <br/><br/>\
# 암기 : 기법-도디 <br/><br/>\
# 기법(2) <br/>\
- 도매인 하이재킹 : 등록도매인 정보로 변경 - ICAAN 규칙 <br/>\
- DNS 하이재킹 : DNS주소변조, 클라우드 호스트 파일 변경, 클라이언트 DNS 서버 설정 변경 \
',

// Smishing
'# 정의 : SMS + Phising <br/>\
- 무료쿠폰제공, 돌잔치 초대장 등을 내용으로 하는 문자메시지 내 인터넷 주소 클릭하면 악성코드가 설치되어 피해자가 모르는 사이에 소액결제 피해발생 또는 개인 금융정보 탈취하는 수법 (문자(SMS) + 피싱) <br/><br/>\
# 기법 (3) <br/>\
- URL 포함 문자 발송 <br/>\
- 클릭시 설치 <br/>\
- 인증번호 탈취 <br/><br/>\
# 대응 (3) <br/>\
- 문자 URL 클릭 자제 <br/>\
- 모바일 백신 <br/>\
- 소액결제 최저치 설정 <br/><br/>\
',

// Sniffing 
'# 정의 : 패킷 분석 정보 탈취 기법<br/>\
- 이더넷상 전달되는 모든 패킷을 분석하여 사용자 계정/암호등 정보 알아내는 기법<br/><br/>\
# 스니핑 취약 프로토콜(6) : Telnet, Rlogin, HTTP, SNMP, FTP, SMTP <br/><br/>\
# 방어(2) <br/>\
1. 탐지(5) : Ping, ARP, DNS, 유인이용, ARP Watch <br/>\
2. 암호화(6) : SSL, SSH, VPN 이메일 전송시 암호화, PGP, PEM, S/MINE<br/><br/>\
# 종류(4) <br/>\
- ARP Spoofing <br/>\
- ICMP Redirect <br/>\
- MAC Flooding(Switch Jamming) <br/>\
- SAAN 포트탭핑(해결 Splitter) <br/><br/>\
* 스니퍼 : 컴퓨터 NW상 흘러다니는 트래픽 엿듣는 도청 장치 <br/>\
* Promiscuous, Bypass <br/>\
* 패킷 = MAC(2) + IP(3)\
',

// Spoofing
'# 정의 : 위장 / 허가된 주소 / 접근 제어 우회 <br/>\
- 승인된 사용자로 위장하여 시스템에 접근 또는 네트워크상 허가된 주소로 가장하여 접근 제어를 우회하는 공격기법 <br/><br/>\
# 종류 : ARP(2), IP(3), DNS(4), Email(7) <br/><br/>\
# IP Spoofing : Trust 관계 공격 <br/>\
0. 정의 : Trust 인증법 / 인증자 IP <br/>\
- Trust 인증법의 IP 기반 인증 취약점 활용, DoS 공격 및 인증 사용자 IP 활용한 서버 접속 공격 기법 <br/><br/>\
1. 절차 <br/>\
- 공격 대상 선정 및 Freeze 공격 : Trust Client 확인, Sequence 번호 변화 모니터링<br/>\
- IP 위조 통한 서버 접속 : 서버에 ACK 전달 <br/>\
- 서버-공격자 연결 수립 : Client에 ACK/SYN 전송, 실제 Client Freeze 상태 <br/><br/>\
2. 대응방안 <br/>\
- Ingress, Egress Filtering : 외부 인입, 전송 내부망 IP 전송 패킷 필터<br/>\
- SSH 사용 패킷 암호화 : RSA 기반, PKI 키 Pair 방식 사용 <br/><br/>\
# DNS Spoofing : UDP 패킷 위조 <br/>\
0. 정의 : UDP Sessionless / DNS Query <br/>\
- UDP의 Sessionless 취약점 활용, FQDN의 IP 변환 위한 DNS Query 시 위조 IP 제공, 의도치 않은 주소 접근유도 공격 기법 <br/><br/>\
1. 절차 <br/>\
- Client의 DNS Query 전송 확인 : DNS Query Packet 전송 모니터링 <br/>\
- DNS Response 패킷 Client에 전송 : IP 위조한 DNS Response 전송 <br/>\
- 공격자 패킷 정상 인식, 위조 IP 접속 : 정상인식, 접속, UDP 특성상 이후 도착한 DNS 정상 Response 패킷 버림 <br/><br/>\
2. 대응방안 <br/>\
- Host 파일 무결성 검사 : 변조 여부 무결성 검사 수행 <br/>\
- DNSSEC 솔루션 사용 : DNS 캐시 포이즈닝 대응, PKI 전자 서명기술 <br/><br/>\
* KPC 92회 응용 3교시 7번\
',
  
// Session Hijacking
'# 정의 : 인가된 아이디 패스워드 x / 세션 정보 가로채기 / 3 Way HandShake 과정 취약점 악용 <br/>\
- 접속하고자 하는 시스템의 접속하기 위한 인가된 아이디와 패스워드가 없을 경우 현재 접속된 시스템들의 세션 정보를 가로채는 공격기법 <br/><br/>\
# 종류 <br/>\
- 로컬 세션 하이재킹 : 시퀀스 넘버 알아낼 수 있는 상태 공격 <br/>\
- 원격 세션 하이재킹 : 시퀀스 넘버 알아낼 수 없는 상태 공격 <br/><br/>\
# 공격절차 <br/>\
<img src = "./img/SessionHijacking.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 피해 <br/>\
- ACK Storm : Client에서 Sever_Client_Seq, Client_My_Seq 불일치 / ACK Send 반복 <br/><br/>\
# 대응 방안 <br/>\
- 비동기화 탐지 : 서버, 시퀀스 넘버 주기적 체크, 비동기화 상태시 탐지 <br/>\
- Ack Storm 탐지 : 급격한 Ack 비율 증가시 탐지 <br/>\
- 패킷 유실, 재전송 증가 탐지 : 패킷 유실, 서버 응답시간 길어짐 탐지 <br/>\
- 리셋 탐지 : 예상치 못한 리셋시, 세션이 멈추거나 리셋 탐지 \
',
  
// 산업제어시스템 보안
'# 정의 : 산업 공정 / 제어, 계측 / <br/>\
- 산업 공정 제어에 사용되는 여러 유형의 제어시스템 및 관련 계측 시스템 <br/><br/>\
# 공격방법 <br/>\
- 시스템 잠복, 정찰 <br/>\
- 트래픽 모니터링, 패킷 스니핑, 취약점 식별 <br/>\
- 공격 계획 <br/><br/>\
# 산업용 보안 프로토콜 종류 <br/>\
1. DNP 3.0 <br/>\
- 개념 : 1993년 개발된 기기 통신 프로토콜 / 북미 중심 전력 분야 제어 시스템 <br/>\
- 보안규격 : IEEE 1815, IEC 60870 5-7 <br/><br/>\
2. IEC 61850 <br/>\
- 개념 : 전력분야 제어시스템 제어 프로토콜 <br/>\
- 보안규격 : IEC 62351 <br/><br/>\
3. OPC UA <br/>\
- 개념 : IEC 61968/61970 근거한 CIM(Common Information Mode) 데이터 전송하기 위해서 사용하는 산업용 M2M 통신 프로토콜 <br/>\
- 보안규격 : IEC 62541-2 <br/><br/>\
# ICT 시스템 보안 구조 비교 <br/>\
<img src = "./img/ICS_ICT_SEC.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 응용 1교시 8번 <br/>\
* 라이지움 81회 관리 2교시 4번\
',

// Stuxnet
'# 정의 : 산업시설을 파괴하는 슈퍼 바이러스 웜 <br/>\
- 국가 및 산업의 중요 기반 시설의 공정을 감시하고 제어하는 SCADA(Supervisory Control And Data Acquisition) 시스템을 대상으로 한, 극도로 정교하고 군사적 수준의 첫 사이버 무기로 지칭되는 웜(Worm) <br/><br/>\
# 특징 <br/>\
- 명확성 : 목표물, 실행환경 조건 <br/>\
- Window 취약점 : Zeroday, Server Message Block <br/>\
- Warm : 네트워크 공유를 통한 원격 컴퓨터 감염 <br/><br/>\
# 시나리오 <br/>\
<img src = "./img/StuxnetScenario.jpg" style = "max-width:100%; height:auto;">\
',

// APT
'# 정의 : 지능형 지속 공격 / 공격기법 <br/>\
- Advanced Persistent Threat <br/>\
- 공격자 대상시스템을 타킷으로 침투 목적 달성 위해 지능적 지속 방법 사용하여 장기간 은밀한 진행하는 공격기법 <br/><br/>\
# 특징 <br/>\
- 대상 : 확대, 특정 <br/>\
- 방법 : 다양화, 지속적 <br/>\
- 형태 : 사회공학, 악성코드 및 취약점(ZeroDay, MultiVector) <br/>\
- 기술 : 시스템 제어, 악성 코드(바이러스, 웜, 트로이목마, Bot, Root-Kit, Backdoor) <br/><br/>\
# 공격단계(4) : 침투 > 탐지 > 수집 > 제어 <br/>\
1. 침투 <br/>\
- 인간 기반 사회공학 : 시스템 분석, Human Based 공격, 스팸메일, 어깨넘어 훔쳐보기, 권력 이용하기, 동정심 호소하기 <br/>\
- 컴퓨터 기반 사회공학 : 시스템 분석, 악성코드 이용, 피싱, 스미싱, 파밍, 검색엔진 활용, 이메일 ID 분석 <br/><br/>\
2. 탐지 <br/>\
- 관리자 권한 탈취 : Root-Kit(악성코드, 은닉, 권한 유도), Bot(공격자 제어), Backdoor(인증없이 접근) <br/>\
- 내부 시스템 감염 : 리소스 갈취, 고의적 파괴, 서비스 거부공격, 제로데이 공격, P2P 시스템, 악성코드 시스템 <br/><br/>\
3. 수집 <br/>\
- 행동형 시스템 : 트로이목마(은닉설치, 계정정보 수집), Key-Logger, Spy-ware(인터넷 통한 무료 S/W 포함), Ad-ware <br/>\
- 제어용 시스템 : Bot(사용자 컴퓨터 공격자 제어), Root-Kit(설치 악성코드 은닉, 관리자 권한 획득), Backdoor <br/><br/>\
4. 제어 <br/>\
- 데이터 유출 : 기밀 데이터, 패킷, 압축 파일 <br/>\
- 공격 중단 : 원격제어, S/W H/W 자동 종료 <br/><br/>\
# 대응방안 <br/>\
1. 관리적 <br/>\
- Governance : 보안 정책, 절차, 운영 표준 수립 <br/>\
- 인식교육 : IT 컴플라이언스 교육, 업무위탁 및 외주인력 관리 <br/>\
- 기관협조 : 침해사고, 시큐리티 대응센터 <br/>\
- 보안관제 : 보안 이벤트 관리, 24*365 <br/><br/>\
2. 기술적 <br/>\
- 네트워크 : 방화벽/네트워크(QoS), VPN 및 IPv6 (SSL VPN, IPSec VPN, IPv6 방화벽) <br/>\
- 망분리 : 물리적(1PC, 2PC, 이중화), 논리적(SBC, CBC, VDI) <br/>\
- 엔드포인트 : 매체제어(USB, CD-RW), 침입탐지(NIPS, HIPS, 행위기반) <br/>\
- 데이터 : DB 암호화 솔루션(API, Plugin, 암호화키), DB 접근제어(MAC, DAC, RBAC, ACL, CL, BLP, Biba, Clarkwilson, Chinese Wall) <br/><br/>\
* 116회 2교시 1번\
',
   
// Lateral Movement
'# 정의 : APT 내부망 이동 공격 기법 <br/>\
- Lateral Movement <br/>\
- 지능형 위협 공격(APT) 과정 중 공격자가 조직 내 최초 시스템 해킹에 성공후 내부망에서 사용되는 계정 정보를 획득하여 내부망의 시스템으로 이동하는 방식 <br/><br/>\
# 공격기법 (<font color = "red">침확유삭</font>)<br/>\
- 1단계 : 내부 침투 / 스피어피싱, 워터링홀 -> Credential 탈취 <br/>\
- 2단계 : 확산 / 미미캐츠, Pass the hash <br/>\
- 3단계 : 유출 / 기밀정보, 개인정보 유출 <br/>\
- 4단계 : 의도적 흔적 삭제 <br/>\
<font color = "red">* 미미캐츠 : 메모리에서 해시, PIN, 커버리스 티켓, 암호 등 찾아내 탈취하는 도구</font></br><br/>\
# 대응방안 <br/>\
1. 사전 대응 <br/>\
- 인증정보보호 : Crecential 관리 강화 <br/>\
- 네트워크 분리 : 망분리 <br/><br/>\
2. 사후 대응 <br/>\
- ZeroTrust : Endpoint 수준 보호 <br/>\
- Client 허니팟 : Target 위장 <br/><br/>\
* 120회 응용 1교시 9번\
',
  
// IoA
'# 정의 : 공격 의도 파악 가능한 동적 지표 (공격지표)<br/>\
- Indicators of Attack <br/>\
- 코드 실행 여부, 지속성, 스텔스, C&C 서버, 네트워크 내 움직임에 대한 정보 등 공격 의도를 파악할 수 있는 동적인 지표 <br/><br/>\
# 비교 <br/>\
<img src = "./img/IOC_IOA.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* TTP : 전략, 전술, 절차 </font><br/><br/>\
# 적용사례 <br/>\
- 위협탐지 : Lateral Movement 등에 대한 행위기반 위협 탐지 <br/>\
- 위협분석 : 다수의 시스템을 연계하여 이상 행위룰 분석 <br/>\
- 대응 : 학습을 통한 비반복적, Zero Day 등 새로운 위협 대응 가능 <br/><br/>\
* 라이지움 88회 관리 1교시 3번\
',
  
// IoC
'# 정의 : 방어자 대응 중심 관점 지표 (침해지표)<br/>\
- Indicators of Compromise <br/>\
- 시그니쳐 등과 같은 공격이 발생했음을 나타내는 방어자의 대응 중심적인 관점의 지표 <br/><br/>\
# 적용사례 <br/>\
- 위협탐지 : 시그니쳐 기반의 지표를 통한 침입탐지 <br/>\
- 위협분석 : 단일 시스템 중심의 지표 분석 <br/>\
- 대응 : 반복적 공격에 대응 <br/><br/>\
* 라이지움 88회 관리 1교시 3번\
',

// 사이버 디셉션
'# 정의 : 엔드포인트 위협 / 미끼, 함정 / 실시간 / 보안 기술 / <br/>\
- NW, 엔드포인트 등에서 위협이 주변으로 확산되기 전에 미끼(Decoy)와 함정(Trap)을 이용해 실시간으로 유인, 탐지, 예방 하는 보안 기술 <br/><br/>\
# 특징 <br/>\
- 허니팟 : 공격자 유인 함정 <br/>\
- 오탐 최소화 : 로그 데이터 활용, 오탐 최소화 <br/>\
- 실시간성 : 즉시 일어나는 이벤트 처리 <br/><br/>\
# 동작방식 <br/>\
<img src = "./img/CyberDeception.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. Decoy <br/>\
- 쿠키 : 스크립트의 기록서 <br/>\
- 서버접근정보 : IP, MAC, 접속시간, 접속기간 <br/>\
- 로그인 정보 : 계정정보, 접근 경로, 권한 정보, 사용 명령어 <br/>\
- 자동생성기술 : 방화벽, 유사 내부정보 활용 접근 포인트 생성 <br/><br/>\
2. Trap <br/>\
- Endpoint : Agent 정보, 방화벽, 경로별 정보 유도, USB, Port <br/>\
- Network : 가상 유도 NW, 트래픽 생성, Access Control, 이메일 정보 <br/>\
- OS : Root 정보, 사용자 인증, 접근제어 허가, 메모리 유도 <br/><br/>\
3. Deception System <br/>\
- NW 탐지 : 이상 접근, 미끼기반 모니터링, 랜섬웨어 확인, 현상 파악 <br/>\
- 포렌식 : 정당성 확보 위한 근거 추출, 이상현상 대한 원인 분석 <br/>\
- User Interface : 실시간 트래픽 모니터링, 포트, 다경로 시각화 수행 <br/><br/>\
# 사이버디셉션, 허니팟 비교 <br/>\
<img src = "./img/CyberDeceptionHonneyPot.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 122회 대비 합숙 2일차 1교시 5번\
',

// Watering Hole Attack
'# 정의 : 제로데이 취약점 악용 / Target / 해킹 방법 <br/>\
- 특정 사이트에 미리 제로데이 취약점 등 악용하여 악성코드 심고 특정 Target 방문시 자동 감염하여 해킹하는 방법 <br/><br/>\
# 특징 <br/>\
- 웹사이트 접속 통한 감염 <br/>\
- 지능형 표적공격 특성 <br/>\
- 중소기업 1차공격 사례 증가 <br/>\
- 서버측 다형성 공격기법 <br/>\
- 자바스크립트 : Document, Write 메소드 <br/>\
- HTML : iframe <br/><br/>\
# 대응 : 일반 보안대응 <br/><br/>\
# 대응 문제점 : 제로데이 취약점 악용시 차단방법 전무\
',

// Rootkit
'# 정의 : Root 권한 이용 은닉 악성코드 유형 <br/>\
- 컴퓨터의 관리자 권한을 유지하고 자신의 존재를 운영체제 또는 다른 프로그램으로부터 숨기는 악성코드 유형<br/><br/>\
# 암기 <br/>\
- 종류 : 펌하커사 <br/>\
- 대응 : 서행시시미티 <br/>\
- 부팅단계 : CSBFO <br/><br/>\
# 특징(4) : 지속성, 메모리 기반, 사용자 모드, 커널 모드 <br/><br/>\
# 종류 <br/>\
- 펌웨어 존재하는 루트킷 <br/>\
- 하이퍼바이저 수준 루트킷 <br/>\
- 커널모드 루트킷 <br/>\
- 사용자모드 루트킷 <br/><br/>\
# 대응(4) <br/>\
- 루트킷 탐지 : 호스트기반(감염시스템에서 동작) <br/>\
- 가상화 기반 : VMI, 하이퍼바이저 모드에서 동작하는 관찰자 모듈 <br/>\
- 외부관찰자 기반 : TPM(해시순차)이용 <br/>\
- Secure Boot, Measured Boot, TEE, 서명기반 감지, 행동기반 감지, SW업데이터, 시스템 재설치 <br/><br/>\
# 안드로이드 루트 탐지 체크리스트 <br/>\
- Custom Image flashing 여부 <br/>\
- 시스템 속성 값 변경 여부 <br/>\
- 슈퍼유저 명령어 존재 여부 <br/>\
- Busybox 통한 추가 명령어 삽입 여부 <br/>\
- 파일 시스템 속성 확인 <br/>\
- 루팅 관련 앱 설치 여부 <br/>\
- 루트 권한 프로세스 탐지 <br/><br/>\
# 사례 <br/>\
- Bluepill루트킷 : 최초의 HVM(Hardware Virtual Machine) 루트킷, 드라이버로 적재되며 OS상태를 게이트 운영체제로 이동시킴 <br/><br/>\
* 시스템 부팅 시작단계부터 보안활동 시작 필요\
',
   
// 포맷 스트링 공격
'# 정의 : 데이터 형태의 불명확 정의를 이용한 공격 <br/>\
- 출력문에서 올바르지 못한 방법을 악용하여 크래커들이 실제 메모리 번지를 공격하여 원하는 값으로 변경하거나 시스템의 루트 권한을 획득하는 공격 <br/><br/>\
# 공격원리 <br/>\
- 취약점이 있는 포맷스트링 / Print(buffer); <br/>\
- 주소값 확인하기 <br/>\
- 포맷 스트링 변조 / %x대입 <br/><br/>\
# 대응방법 <br/>\
- 철저한 검사 : fprintf, printf, sprintf, vfprintf <br/>\
- 정상 함수 사용 : printf("%s\n", buffer); / print(buffer); <br/><br/>\
* 116회 1교시 12번\
',

// 카멜레온 바이러스
'# 정의 : 와이파이망 주변 감염 바이러스 <br/>\
- 네트워크를 이동하며 보안에 취약한 와이파이망과 그에 접속한 컴퓨터 기기를 감염시키는 새로운 컴퓨터 바이러스<br/><br/>\
# 암기 <br/>\
- 절차 : 목우우저교적전 <br/><br/>\
# 특징 <br/>\
- AP 공격하지만 AP 기능에는 영향을 주지 않고 거기에 연결된 모든 와이파이 사용자의 중요 정보 탈취 가능 <br/>\
- 감염이 가능한 다른 와이파이 AP를 찾아 확산 됨 <br/><br/>\
# 전파 단계 <br/>\
- 취약AP 목록화 <br/>\
- AP대한 암호화 우회 <br/>\
- AP관리 I/F우회 <br/>\
- 설정저장 <br/>\
- 바이러스 펌웨어로 교체 <br/>\
- 설정적용 <br/>\
- 전파 <br/><br/>\
# 대응기술 : SSID, WEP/WPA/WPA2, IEEE802.1x/EAP, 암호화 알고리즘(TKIP, AES, 경량 알고리즘, ECC), Mac Filtering , 디바이스 식별기술 (위치확인(RSS), 프로토콜 분석방식(OS 지분, RF지문방식(변조,시그널 전이) \
',

// Stage Fright
'# 정의 : 안드로이드폰 무조작 원격 실행 취약점<br/>\
- 안드로이드폰 사용자가 아무런 조작을 하지 않았는데도 악성코드가 원격으로 실행될 수 있는 취약점 <br/>\
- Native C++ 코드로 구현된 Android의 Media format을 처리하는 서비스 <br/><br/>\
# 취약점 : 악성 미디어 파일이 포함된 MMS(Multimeda Message Service)를 Android 기기에 전송하여 사용자의 확인 없이 악성코드 다운 로드 및 실행이 가능하며 매우 높은 위험도를 갖는 취약점 => MMS수신 만으로 감염 가능 <br/><br/>\
# 안드로이드 스테이지 프라이트 취약점 2.0 : 안드로이드 운영체제를 통해 MP3나 MP4 미디어 파일을 처리하는 과정에서 해당 미디어 파일의 메타 데이터에 삽입된 임의 코드가 실행되는 취약점 => 미디어 파일 실행시 피해 가능, 루트 권한 도용 가능 <br/><br/>\
# 1.0 취약점 확인/대응 : Stagefright Detector App, 안드로이드 2.2.(Froyo) ~ 5.1.1_r5(Lolipop) => 보안패치, MMS문자 수신 설정(자동->수동)변경 <br/><br/>\
# 2.0 대응 : 출처 불분명 mp3 실행 주의 \
',

// Null Pointer Dereference 
'# 정의 : NULL Pointer 대입시 iOS 다운, 재부팅 취약점 <br/>\
- 널 포인터에 어떤 값을 대입할 때 발생하는 에러로 iOS운영체제를 다운시키거나 재부팅 시키는 취약점<br/><br/>\
# 특징 : 악성동영상을 재생하기만 해도 iOS 재부팅, 탈옥 여부 무관하게 감염 가능\
',

// VENOM 취약점
'# 정의 : BoF 취약점 활용 다른 가상머신 임의 코드 실행 취약점 <br/>\
- 가상컴퓨터의 플로피디스크 버퍼 오버플로우(BoF) 취약점을 활용하여 가상머신을 탈출해 호스트 뿐만 아니라 같은 시스템 상에 있는 다른 가상머신에 임의의 코드를 실행할 수 있게 해주는 취약점(Host OS 무관) <br/><br/>\
# 동작 <br/>\
1. VENOM 취약점 활용 Exploit(공격코드) 실행 <br/>\
2. Host 상 타 VM 이동 <br/>\
3. Host NW 통해 Exploit된 타 VM에 접속, 개인/민감정보 유출<br/><br/>\
# 대응 : 보안패치, 최근 CVE 지속 모니터링 및 대응 <br/><br/>\
<img src = "./img/VENOM.png" style = "max-width:100%; height:auto;">\
',
  
// 크리덴셜 스터핑
'# 정의 : 무작위 대입공격 / ID / 계정 <br/>\
- 유출된 정보 기반 무작위 대입 방식 공격기법 <br/><br/>\
# 공격절차 <br/>\
- 정보 확보 : 도난 당한 데이터 확보 <br/>\
- 계정 대입 : 크리덴셜 대입 Tool 업로드 <br/>\
- 계정 분석 및 추가 공격 : 로그인 성공 후 추가 공격 가능성 검토 <br/><br/>\
# 탐지 방법 <br/>\
1. 징조 <br/>\
- 로그인 시도 트래픽 변화 탐지 <br/>\
- 로그인 실패 빈도수 탐지 <br/>\
- 사이트 다운타임 발생 <br/><br/>\
2. 탐지 <br/>\
- Bot Screening <br/>\
- 실패횟수 증가, 비정상적 위치 시도, 비정상 패턴, 속도 탐지 <br/><br/>\
# 대응방안 <br/>\
- 봇차단 : 사람, 봇 트래픽 구분 / Captcha <br/>\
- 다중 인증 : 해킹 난이도 상승 / 99.9% <br/>\
- 비밀번호 규칙 : 소문자, 대문자, 특수문자, 자리수 <br/><br/>\
* 라이지움 85회 관리 1교시 3번\
',

// Atom Bombing
'# 정의 : 모든 윈도우 버전 공격 가능한 코드 인젝션 기술 <br/>\
- 모든 윈도 버전에 영향을 끼치며 현존 SE 솔루션을 우회하는 아톰바밍 인젝션 공격 기법 <br/><br/>\
# 특징 <br/>\
- MS 데이터 저장 영역 아톰 테이블(Atom Table : 윈도 애플리케이션 기능을 지원하는 문자열과 식별자를 저장하는 곳) 이용 <br/>\
- 마이크로소프트 윈도우의 취약점이 아닌 기본 구성 자체를 건드려야 하기 때문에 보안 솔루션 업체에서는 해결하기가 불가능 (보안솔루션 탐지 불가능) <br/><br/>\
# 원리 <br/>\
- 아톰 테이블 내 악성코드 작성 <br/>\
- 정상적(legitimate)프로그램이 해당 코드 가져오도록 만듦 <br/>\
- 정상 앱들이 대신 악성 행동하도록 속일 수 있게 허용 <br/><br/>\
# 공격 형태 : MITB, 데스크탑 스크린샷 원격 실행, 브라우저 저장 암호화된 패스워드 접근 허용 <br/><br/>\
# 대응 : 코드 인젝션 대응기법, 행위기반 보안\
',

// 디지털 포렌식
'# 정의 : 디지털 자료 법적 증거 확보 행위<br/>\
- 사이버상에서 이뤄지는 범죄행위의 법적증거 확보하여 법원에 제출하는 일련절차/방법<br/>\
- 정보기기에 내장된 디지털 자료를 근거로 삼아 그 정보기기를 매개체로 하여 발생한 어떤 행위의 사실 관계를 규명하고 증명하는 보안서비스 분야 <br/><br/>\
# 기본 원칙(<font color ="red">정재신연무</font>) <br/>\
- 정당성 : 위법 수집 증거 배제 원칙 <br/>\
- 재현성 : 동일 조건 같은 결과 <br/>\
- 신속성 : 전체 과정 신속 처리 <br/>\
- 연계 보관성 : 담당자 및 책임자 명확 <br/>\
- 무결성 : 수집된 증거 위변조 확인 <br/><br/>\
# 절차 (<font color = "red">준획보분보</font>)<br/>\
- 분석 준비 : 팀구성 <br/>\
- 증거 획득 : MECE <br/>\
- 증거 보관 : 무결성, 차폐 봉인<br/>\
- 증거 분석 : 사본 복사, 상세 분석 <br/>\
- 결과 보고 : 보고서 작성, 증거 제출 <br/><br/>\
# 증거유형 <br/>\
1. 자동생성 여부 <br/>\
- 자동생성 증거 : 인터넷 기록, 방화벽 로그, OS 로그 <br/>\
- 인위생성 증거 : 문서파일/암호데이터, 전자메일, 동영상/사진 <br/><br/>\
2. 활성 여부 <br/>\
- 활성 증거 : 프로세스, 예약 작업, 인터넷 연결정보 <br/>\
- 비활성 증거 : 파일/파일 시스템, OS 정보 ,로그 데이터 <br/><br/>\
# 기술요소 <br/>\
1. 수집 기술 <br/>\
- 저장 매체 : 이미징, 로그, 덤프, 레지스트리 하이브 <br/>\
- 디지털 데이터 : MBR분석, ThumbCache, 휴지통 분석 <br/>\
- 시스템 데이터 : 시스템 로그, 백업, 윈도우 레지스트리 <br/>\
- 통신 데이터 : 네트워크 역추적, 프록시, 트래픽 기록 <br/>\
- 범죄 프로파일링 : 타임라인, SW 역공학, FDS <br/><br/>\
2. 분석 기술 <br/>\
- 시계열 분석 : CRUD 시계열 분류 / EnCase 도구 <br/>\
- 폴더 브라우징 : 액세스 시간 열람 <br/>\
- 고급 검색 : 파일 슬랙영역, 삭제,압축 파일 검색 <br/>\
- 포렌식 인덱싱 : 실시간 전송, 빠른 검색 제공 <br/>\
- 로그 분석 : 웹 브라우저, FTP, 메신저 <br/><br/>\
3. 복구 기술 <br/>\
- 파일 카빙(<font color = "red">푸파램</font>) : Header/Footer, File size, Ram Slack <br/>\
- 암호 복구 : 암호 크랙 <br/>\
- 삭제 복구 : 디스크 파일 복구 <br/><br/>\
4. 제출 기술 <br/>\
- Hash Function : 증거 무결성, MD 사용 <br/>\
- 전자서명 : 공개키 암호화, 무결성 <br/><br/>\
* 라이지움 88회 응용 3교시 5번\
',

// 클라우드 포렌식
'# 정의 : 클라우드 증거물 / 사법기관 제출 / 시그니처 데이터 수집, 분석, 보고서 작성 / 과학수사 기법 <br/>\
- 클라우드에 존재하는 전자적 증거물 등을 사법기관에 제출하기 위해 클라우드 시그니처 데이터 수집, 분석 및 보고서를 작성하는 과학수사 기법 <br/><br/>\
# 특징 <br/>\
- 클라우드 시그니처 : 클라우드 서비스 이용 판단 가능한 은닉 폴더, 파일등 흔적 <br/>\
- 증거수집의 관할권 : 물리적 저장위치 따른 국내/해외 관할권 고려 <br/>\
- 클라우드 유형 고려 : SaaS, PaaS, IaaS 유형별 포렌식 방법 고려 <br/><br/>\
# 클라우드 포렌식 조사 절차 <br/>\
<img src = "./img/CloudForensicProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 문제점 <br/>\
- 증거 수집 : 대상 범위 불명확, 증거인멸 문제점 <br/>\
- 증거 분석 : 중앙 집중화 대용량, 서비스별 상이한 시그니처 <br/>\
- 개인 정보 : 진술 거부권, 해외 사업자 제공 <br/><br/>\
# 해결방안 <br/>\
- 증거 수집 : 압수수색 대상 전자정보 직접 명시, 협조 요구 프로세스 간소화, 법체계 마련 <br/>\
- 증거 분석 : 원격 수색제도, 시그니처 전용 분석 툴 <br/>\
- 개인 정보 : 수집 프로세스 체계 개선, 해외 제공 활동(GDPR) <br/><br/>\
* ITPE 7회 4교시 3번\
',

// 분산 포렌식 인덱싱
'# 정의 : 검색 결과 실시간 전송 / 수사 데이터 / 빠른 검색 제공 / 분산 처리 기법 <br/>\
- 사용자 요청이 있을 경우, 인덱스에서 찾아 검색 결과를 실시간으로 전송함으로써 수사의 대상이 되는 디지털 데이터에 대한 빠른 검색을 제공하는 분산처리 기법 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/DistributedForensicIndexing.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- 인덱스 선 생성 : Master Node(메타정보 저장), Slave Node(데이터 분산 저장) <br/>\
- 사용자 요청시 NAS NW Storage 이용 데이터 검색 <br/><br/>\
* ITPE 합숙 124회 3일차 관리 2교시 2번\
',

// File Carving
'# 정의 : 시그니저 정보 x / 이미지 파일 조각 / 재생 기법 / 하드웨어 포렌식<br/>\
- 시그니처 정보가 없는 이미지 파일 조각들을 재 조합하여 이미지를 재생하는 기법 <br/><br/>\
# 종류 (<font color = "red">푸파램구</font>) <br/>\
- Header/Footer : 파일의 Header, Footer 검색 <br/>\
- Header/File Size : File size, Block 수치 계산 <br/>\
- Header/Ram Slack : Header, Ram Slack 검색 <br/>\
- 파일 구조 검증 : 파일 고유 특징(ASCII, MIME) 이용 <br/>\
<font color = "red">* MIME(Multipurpose Internet Mail Extensions) : 전자 우편을 위한 인터넷 표준 포맷 </font><br/><br/>\
* ITPE 합숙 124회 3일차 관리 2교시 2번\
',

// 소프트웨어 개발보안 가이드
'# 정의 : KISA(한국인터넷진흥원)에서 제시하는 소프트웨어 개발을 위한 JAVA, C, Android등의 개발 보안 가이드 <br/><br/>\
# 개요 <br/>\
<img src = "./img/DevSecGuideOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 개발보안 가이드 기준 <br/>\
- 입력데이터 검증 및 표현 : SQL 삽입, 경로조작, XSS <br/>\
- 보안기능 : 부적절 인가, 중요정보 평문저장, 하드코드된 <br/>\
- 시간 및 상태 : 경쟁조건, 종료되지 않는 반복분, 재귀 함수 <br/>\
- 에러 처리 : 오류상황 대응 부재, 오류 메시지 통한 정보 노출 <br/>\
- 코드 오류 : 널 포인터 역참조, 부적절한 자원 해제 <br/>\
- 캡슐화 : 제거되지 않고 남은 코드, 시스템 데이터 정보 노출 <br/>\
- API 오용 : DNS Lookup 의존 보안 결정 <br/><br/>\
# 개발 생명주기의 보안활동 <br/>\
<img src = "./img/DevSecGuideFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 보안항목 식별 <br/>\
<img src = "./img/DevSecGuideSecDistribute.png" style = "max-width:100%; height:auto;"><br/>\
1. 외부환경 분석 <br/>\
- 개인정보보호 관련 법규 : 개인정보보호법, 정보통신망법, 신용정보법<br/>\
- 특정 IT 기술관련 규정 : RFID 프라이버시, 바이오 정보 보호 (가이드라인)<br/><br/>\
2. 기타 중요정보 식별방법 <br/>\
- 1등급(민감한 개인정보) : 고유식별,민감,위치,인증,의료<br/>\
- 2등급(조합 식별 가능 정보) : 개인식별정보,개인관련정보<br/>\
- 3등급(결합 부가 제공 정보) : 자동생성정보,가공정보,제한적 본인 식별정보<br/><br/>\
3. 기능에 대한 보안항목 식별 <br/>\
- 입력데이터 검증 및 표현 : 입력데이터 유효성 검증, 허용된 메모리, 시스템 자원 접근<br/>\
- 보안기능 : 인증, 접근통제, 권한관리, 비밀번호<br/>\
- 예외처리 : 에러, 오류상황 중요 정보 유출 검증<br/>\
- 세션통제 : 세션간 공유 데이터 금지 <br/><br/>\
* KPC 97회 응용 3교시 8번\
',

// 클라우드 컴퓨팅 보안 
'# 정의 : 클라우드 취약점, 문제점 제거 기술 <br/>\
-  정보의 유출과 개인정보 보호 등 클라우드 컴퓨팅 서비스를 위협하는 취약점, 문제점 제거 기술 <br/><br/>\
# 취약점 <br/>\
- 하이퍼바이저 루트킷(Hypervisor Root Kit) <br/>\
- 보안 사각지대(Security Blind Zone) <br/>\
- A/V Storm <br/><br/>\
# 대응 방안 <br/>\
- 가상머신 내부정보 분석 기반 침입 탐지(VMI) <br/>\
- VMI 기반 IDS <br/>\
- Agentiess 가상 보안 어플라이언스 <br/>\
- 클라우드 기반 보안 서비스 (SeCaaS) <br/>\
- FedRAMP : 미정부기관 이용 클라우드 제품 및 서비스 관한 보안 평가 및 인증 프로그램 <br/><br/>\
<img src = "./img/CloudSec_1.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CloudSec_2.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CloudSec_3.png" style = "max-width:100%; height:auto;">\
',

// CVE
'# 정의 : 공통 보안 취약성 노출 사항 규격화 목록 <br/>\
- Common Vulunerabilities and Exposure <br/>\
- 보안 취약성과 기타 정보 보안 노출 사항을 기록한 규격화된 목록 [TTA]<br/>\
- ITU-T X.1520 권고안으로 표준화 <br/><br/>\
# 특징 : 사이버 보안 취약성 및 노출 관련 정보를 교환하는 구조적 수단으로 공개적으로 알려진 문제점들에 대한 공통 식별자를 제공 <br/><br/>\
# CVE Identifier : CVE이름-발견년도-일련번호 [표현예시] CVE-2017-0143 <br/><br/>\
# 생성 절차 <br/>\
- 잠재적인 보안 취약점 또는 위험노출의 발견 <br/>\
- CVE Numbering Authonity (CNA)에 의해 CVE 식별 번호 할당 <br/>\
- CVE Editor로 CVE 웹사이트에 등록 <br/>\
-> MITRE Corporation CVE Editor와 Primary CNA 관리 수행, CVE Editorial Board에서 CVE 생성 프로세스 감독 \
',
   
// [암호화기술]- 양자암호통신
'# 정의 : 양자 / 불확정성, 비복제성 / 암호화 통신 <br/>\
- Quantum Cryptography Communication <br/>\
- 단일광자의 양자역학 고유의 특성인 불확정성, 비복제성을 이용하여 암호통신의 핵심인 키 분배를 수행하여 도청이 불가능한 차세대 통신보안 기술<br/><br/>\
# 양자 특징 <br/>\
- 양자 중첩 (Quantum Superposition) : 0,1이 동시 존재하여 해석이 난해 / (1|0)<br/>\
- 양자 얽힘 (Quantum Entanglement) : 거리와 무관한 특수 상관관계 / 1 ~ 1 <br/>\
- 불확정성 (Uncertainty Principle) : 관측시 상태값 변화하여 해독 불가 / 1?0 <br/><br/>\
# 양자 암호 통신 특징 : <br/>\
- 보안성 : 데이터 네트워크와 보안적 분리된 환경 <br/>\
- 효율성 : 전달효율 최대 보장 <br/>\
- 투명성 : 필요한 양자키 쉽게 획득, 개방형 인터페이스 제공 <br/>\
- 강건성 : 장애 관리 및 제어 요구사항 고려 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/QKD_Mechanishm.png" style = "max-width:100%; hegiht:auto;"><br/>\
1. 기존 통신 : 송신자 암호화 > 정보 전달 > 수신자 복호화 <br/><br/>\
2. 양자 암호 통신 <br/>\
- 송수신자가 양자 주고 받음 <br/>\
- 같은 암호키 동시 생성 <br/>\
- 각자 보유한 QKD 기기 통한 양자 송수신 <br/>\
- 양자 불확정성 통한 예측 불가능한 암호키 생성 <br/><br/>\
# 구성요소 <br/>\
- Qubits : 양자 통신 정보 최소 단위 <br/>\
- 양자광학계 : 양자광원, 간섭계, 변조기(PM), 검출기(APD) <br/>\
- QKD : 복제 불가능성, 파동함수 붕괴, Key 공유 <br/>\
- 전자제어부 : 구동회로부, 신호처리부, 외부시스템 연계, 제어 회로부 <br/><br/>\
# 동향 <br/>\
1. 해외 <br/>\
- 미국 : Google 큐비트 규모 양자 컴퓨터 발표 <br/>\
- 유럽 : IDQ 양자 난수 생성기 공급, 특허 보유 <br/><br/>\
2. 국내 <br/>\
- SKT : 세계 1위 양자암호통신 기업 IDQ 인수 <br/>\
- 한전 : 전력 전송구간 QKD 기술 보호 통신망 개통 <br/><br/>\
# QKD 방식 비교 <br/>\
<img src = "./img/QKDType.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 117회 관리 1교시 3번 \
',
   
// QKD
'# 정의 : Quantum Key Distribution <br/>\
- 양자역학에서 말하는 복제 불가능성 원리 및 파동함수 붕괴 현상을 이용해 두 사용자 간 암호 통신에 필요한 키를 서로 공유할 수 있도록 해주는 기술 <br/><br/>\
# 특징 <br/>\
- 도청 불가능 (물리적 자연현상) <br/>\
- 광자 민감성 (통신 어려움) <br/>\
- 중간자 공격 취약 (인증 기능x) <br/><br/>\
# 구성도 <br/>\
<img src = "./img/QKD_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 양자 광학계 : 양자광원, 간섭계, 변조기(PM), 검출기(APD) <br/>\
- QRNG(Quantum Random Number Generator) : 양자난수발생기 <br/>\
- 전자제어부 : 구동회로부, 신호처리부, 외부시스템과의 연결 인터페이스, 제어 회로부 <br/><br/>\
# 키분배 프로토콜 (BB84 Protocol) <br/>\
1. 편광 약속 후 전송 <br/>\
2. 편광기저 랜덤하게 측정 수행 (100%/50%)<br/>\
3. 각자의 기저 정보 기존 통신망 이용 공유 <br/>\
4. 편광기저 같은 경우에 측정된 결과만 비밀키 생성 <br/><br/>\
* 라이지움 87회 관리 2교시 6번\
',
   
// PQC
'# 정의 : 양자 알고리즘 대응 암호화 <br/>\
- Post-Quantum Cryptography <br/>\
- 양자 컴퓨터의 보안 위협에 대응할 수 있는 암호 기술로, 양자 컴퓨터의 연산능력으로도 풀 수 없는 수학적 난제를 활용한 암호화 기술 <br/><br/>\
# 양자보안의 매커니즘(암광키) <br/>\
<img src = "./img/QuntaumCryptographyMechanism.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 양자보안 알고리즘 종류 <br/>\
<img src = "./img/QuntaumCryptographyType.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 1교시 13번\
',

// 검색가능암호화
'# 정의 : 안정성 보장 검색 가능 암호 <br/>\
- 기존의 암호 기술과 같이 암호화 된 정보에 대한 안정성을 보장하면서 동시에 특정 키워드를 포함하는 정보를 검색할 수 있도록 고안된 암호 기술 <br/><br/>\
# 유형 <br/>\
- 대칭 탐색가능 암호화 (Symmetric Searchable Encryption) <br/>\
- 비대칭 탐색가능 암호화 (Asymmetric Searchable Encryption) <br/>\
',

// [검색가능암호화]- PKES
'# 정의 : 공개키 검색가능 암호 시스템<br/>\
- Public Key searchable Encryption System<br/>\
- 공개키 암호 방식을 이용하여 사용자 이외의 다른 제공자가 암호문 및 인덱스를 생성할 수 있는 시스템 (TTA) <br/>\
- 공개키 암호 시스템을 바탕으로 설계된 검색 가능 시스템으로 높은 안전성을 보장하고 대칭키 기반의 시스템이 제공하지 못하는 구간 검색, Conjunctive 검색 등 다양한 부가 기능을 구현하는 데 적합하지만 효율성이 떨어지는 단점이 있다.\
',

// PETs
'# 정의 : 프라이버시 침해 / 방어, 탐지 기술 <br/>\
- Privacy Enhancing Technology <br/>\
- 이용자들의 프라이버시를 침해하는 것에 대한 방어와 탐지 기술 <br/><br/>\
# 유형 <br/>\
- 프라이버시 보호모델 : 가총삭범마 <br/>\
- Federated Learning : Datacenter distributed, Cross-silo, Cross-device <br/>\
- 재현 데이터 : 완전, 부분, 하이브리드 <br/>\
- PPDM : 랜덤(PCA, 노이즈, 영역교란), 압축(DFT, DWT), 교란(회전, 다중, 응축), 차등 정보보호(유클리안, 질의, 집계) <br/>\
- 동형암호 : 유한(제한 연산), 완전(횟수 제한x), 부분(덧셈 or 곱셈), 준동형(연산 횟수 제한) <br/><br/>\
* KPC 101회 1교시 9번\
',

// PPDM
'# 정의 : 개인정보의 암호화 상태에서 검색이 가능한 기술 <br/>\
- Privacy Preserving Data Mining <br/>\
- 데이터 소유자의 프라이버시를 침해하지 않으면서도 데이터에 함축적으로 들어 있는 지식이나 패턴을 찾아내는 기술 (TTA)<br/><br/>\
# 등장배경 <br/>\
- 빅데이터 저장 보안 이슈 <br/>\
- 빅데이터 시스템 보안 이슈 <br/>\
- 빅데이터 분석기술 보안 이슈 <br/><br/>\
# 접근방식 <br/>\
- 억제화(Suppression) : 민감 정보 사용전 억제 <br/>\
- 랜덤화(Randomization) : 노이즈성 정보 같이 활용 <br/>\
- 암호화(Cryptography) : 특정한 부분만 사용 가능하도록 <br/>\
- 요약화(Summarization) : 총계처리, 범주화처리 <br/><br/>\
# 유형 <br/>\
- 보존형 데이터 마이닝 : 노이즈 추가 / 통계 위한 사용, 안전 단점 <br/>\
- Secure Multiparity Computation : 입력, 계산 결과만 얻음 / 계산 효율성 낮음 <br/><br/>\
# 기법 : K랜압기분 <br/>\
<img src = "./img/PPDM_Detail.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 아이리포 23회 관리 4교시 5번\
',

// OWASP Top 10
'# 정의 : 웹 취약점 대응방안 기술 가이드<br/>\
- Open Web Application Security Project Top 10 RC(Release Candidate)2 - The Ten Most Critical Web Application Security Risks <br/>\
- 공격 빈도 높으며 보안 영향 큰 10가지 취약점에 대한 대응방안 제공하는 기술 가이드 <br/><br/>\
# 암기 <br/>\
- I취X,직구노,접C알R => 2017 <br/>\
- I취X,접구노,공C알A<br/>\
- 아이비자싸까 <br/>\
- IBXASSACCA => 2017 RC2 IBSXBSCIUI 인 비스X비스 시위 <br/><br/>\
# RC1 <br/>\
A1 : Injection <br/>\
1. 개념 : DBMS에서 의도치 않은 결과 반환 <br/>\
2. 대응방안 <br/>\
- Static SQL 권장 <br/>\
- 특수문자 입력 차단 <br/>\
- SQL 서버 에러메시지 미표시 <br/>\
- 일반사용자권한 프로시저 접근 차단 <br/><br/>\
A2 : 취약한 인증과 세션관리 <br/>\
1. 개념 : 인증, 세션관리 관련 애플리케이션 비정상 동작으로 패스워드, 키, 세션토큰, 사용자도용 취약 발생 <br/>\
2. 대응방안 <br/>\
- admin 사용자 기본 credential 사용하여 제공,배포 행위 금지 <br/>\
- 최신 해시 함수 사용 (Argon2, PBKDF2) <br/><br/>\
A3 : XSS <br/>\
1. 개념 : 스크립트 기반 공격기법 <br/>\
2. 대응방안 <br/>\
- 스크립트 문자열 입력 방지 <br/>\
- HTML Tag White List 정책 사용 <br/><br/>\
A4 : Broken Access Control (RC2 제외) <br/>\
- 내부적 처리 Object(File, Dir, DB Key) 접근 통제 부족 취약점 <br/><br/>\
A5 : 보안상 잘못된 구성 <br/>\
1. 개념 : Default 값 불안전인한 조치 <br/>\
2. 대응방안 <br/>\
- 애플리케이션, 프레임워크, WAS, DB서버, 플랫폼의 보안설정 적절, 최적화된 값 유지 <br/>\
- 최신 업데이트 유지 <br/><br/>\
A6 : 중요정보노츨 <br/>\
1. 개념 : WAS에서 암호화 미실시로 인한 유출 <br/>\
2. 대응방안 <br/>\
- 관리적 : 불필요한 민감 정보 저장x, 저장된 정보 빠른 시간에 파기 <br/>\
- 기술적 : 데이터 전송시 SSL 적용등 보안조치 필요 <br/><br/>\
A7 : 불충분한 공격방어<br/>\
1. 개념 : API 공격에 대한 탐지,예방,대응 기본기능 부족 <br/>\
2. 대응방안 <br/>\
- 신속한 패치 배포 <br/><br/>\
A8 : CSRF(Cross-Site Request Forgery) (RC2 제외)<br/>\
- 인지 못하는 상황 / 의도와 무관하게 / 공격자가 의도한 행위 요청 <br/><br/>\
A9 : 알려진 취약한 컴포넌트 사용<br/>\
1. 개념 : 슈퍼유저 권한으로 운영되는 취약한 라이브러리, 프레임워크, 기타 SW 모듈로 인한 데이터 유실 및 서버 권한획득과 같은 취약점 존재 <br/>\
2. 대응방안 <br/>\
- 컴포넌트 버전, 의존성 식별 <br/>\
- 공개된 정보 모니터, 보안 메일링, 최신 상태로 유지 <br/>\
- 컴포넌트 사용자에 대한 보안정책 구축 <br/><br/>\
A10. 보호되지 않은 API (RC2 제외) <br/>\
- API 포함 Application의 취약점 존재 <br/><br/>\
# RC2 변경 사항 <br/>\
A4 : XXE (XML External Entity) <br/>\
1. 개념 : XML을 파싱하는 과정에서 Entity 속성 이용한 공격 <br/>\
-> Apache Struct2 취약점 <br/>\
-> 외부엔티티 : 파일 URL 처리기, SMB 파일공유(패치이전), 내부포트 검색, 원격 코드 실행 <br/>\
2. 대응방안 <br/>\
- OWASP XXE Prevention Cheat Sheet 사용 -> XML 파서에서 XML 외부 개체 및 DTD 처리 비활성화 <br/>\
- White Listing 구현 <br/><br/>\
A8. 안전하지 않은 역직렬화 <br/>\
0. 역직렬화 개념 : 파일에 쓰인 객체를 어플리케이션이 로드하여 사용할 수 있도록 도와줌 <br/>\
1. 개념 : 역직렬화 과정중 권한 상승 가능한 객체 생성, 전달 과정 악이용 <br/>\
2. 대응방안 <br/>\
- Serialization 객체 신뢰성 보장 이용 <br/>\
- 변조 방지를 위한 Serialzation된 객체 무결성 검사, 암호화 구현 <br/><br/>\
A10. 불충분한 로깅 및 모니터링 <br/>\
1. 개념 : 불충분한 로깅 및 모니터링으로 인한 취약점 <br/>\
2. 대응방안 <br/>\
- 충분한 사용자 컨텍스트로 로그인, 접근 통제, 입력 검증 실패 기록 <br/>\
- 효과적인 모니터링 및 경고 <br/><br/>\
<img src = "./img/OWASP.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
* [2017]A4+A7 -> A4통합, A10삭제, 공격 방어취약점(A7) 추가, 취약한 API 추가 <br/>\
* [2017.10] RC(Release Candidate) 2 공객 : OWASP TOP 10 2017 RC1의 다음 단계이자 최종 정식버전의 바로 전 단계로 피드백을 받기 위해 미리 공개하는 버전 <br/>\
* OOXML(Office Open XML) : MS Office에서 XML 사용이 가능한 문서\
',

// Injection
'# 정의 : 보안 허점 / 악의적 명령 실행 / 비정상 조작 공격 기법 <br/>\
- 응용 프로그램 보안상의 허점을 의도적으로 이용해, 악의적인 명령어를 실행되게 함으로써 정상적인 프로그램을 비정상적으로 조작하는 공격 기법 <br/><br/>\
# 유형 <br/>\
1. SQL Target <br/>\
- SQL Injection : SQL Query / Blind, Timebased Injection<br/>\
- Blind SQL Injection : Query 결과 따른 서버 <font color = "red">참,거짓 결과</font> 이용 공격 <br/>\
- LDAP Injection : 웹 어플리케이션 악의적 LDAP 문법 이용 서버 의도 않는 동작 실행 / Error Based Injection<br/>\
<font color = "red">* LDAP(Lightweight Directory Access Point) : TCP/IP위에서 디렉토리 서비스 조회, 수정 응용 프로토콜 </font><br/><br/>\
2. Process Target <br/>\
- DLL Injection : 다른 프로세스 주소 공간 내에서 DLL 강제 로드 코드 실행 <br/><br/>\
# 대응방안 <br/>\
1. 시큐어 코딩 단계 <br/>\
- 입력값 유효성 검사 : 블랙, 화이트 리스트 방식 <br/>\
- 동적 쿼리 사용 제한 : 정적 쿼리 사용, 매개변수화된 쿼리 사용 <br/>\
- 오류 메시지 출력 제한 : DB 오류 출력 제한, 추상화 메시지 <br/><br/>\
2. 공격 탐지 단계 <br/>\
- SQL Injection 침입 확인 : DB 확인, Web Log 점검 <br/>\
- SQL Injection 취약점 검사 툴 : 수동, 자동 점검 <br/><br/>\
3. 대응 조치 단계 <br/>\
- 백업본 이용 복구 : 백업 시점 이후 자료 유실 발생 <br/>\
- 컬럼 단위 복구 : 악성 코드 문자열 SQL 적용, 제거 <br/>\
- 일괄 스크립트 사용 복구 : 컬럼 단위 시간적 문제 해결 <br/><br/>\
<hr width = "100%" color = "green"  noshade/>\
# 대응방안 2 <br/>\
1. 관리적 <br/>\
- 보안 내재화 : Secure SDLC / Seven Touch Point, MS SDCL <br/>\
- Security by Design : DevSecOps, DevTestOps <br/>\
- 교육 : 인식함양, 기술교육, 보안 진단, 모의 침투 <br/><br/>\
2. 기술적 <br/>\
- Agent 강화 : 보안 솔루션(IDS/IPS, WAF), L7 Switch(NGFW), Framework Filtering <br/>\
- Secure Coding : 입력값 필터링, Prepared Statement 함수 <br/>\
- API/JS 필터 강화 : 검증된 API, Javascript 활용, Buy Bounding(공개 보안 진단) <br/><br/>\
* 124회 관리 2교시 6번\
',

// SQL Injection
'# 정의 : SQL을 이용한 주입 공격 <br/>\
- 웹 어플리케이션의 SQL 입력값을 변조하여 비정상적인 데이터베이스 접근을 시도하거나 원하는 정보를 탈취하는 해킹기법 <br/><br/>\
# 공격기법 <br/>\
1. 인증우회 <br/>\
<img src = "./img/SQLInjection_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 권한획득 <br/>\
<img src = "./img/SQLInjection_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. 오류분석 <br/>\
- 웹 어플리케이션에서 발생하는 에러메시지를 분석 <br/>\
- 데이터베이스 열람 및 시스템 명령어 수행을 위한 자료로 활용 <br/><br/>\
4. 정보열람 <br/>\
- Error-Based Injection, Blind SQL Injection 등의 기법 활용하여 데이터베이스 조회, 테이블 생성 등 데이터베이스 조작가능 <br/>\
- Error-Based Injection : 화면에 노출된 DB 에러 메시지를 이용한 공격 방식 <br/>\
- Blind SQL Injection : 쿼리조건에 따른 결과화면의 차이를 이용한 공격 방식 <br/><br/>\
# 방어기법 <br/>\
1. 바인딩 변수 <br/>\
- 어플리케이션에서 제공하는 바인딩 매개변수를 명시적으로 지정 사용 <br/>\
- Java의 경우 PreparedStatement Class 활용 <br/>\
- 데이터베이스의 StoredProcedure 사용 <br/><br/>\
2. 입력값 체크 <br/>\
- 자바스크립트 등의 클라이언트 스크립트를 활용하여 입력값 체크 <br/>\
- SQL Injection 발생시킬 수 있는 위험한 문자 포함 여부 확인 <br/>\
( \', --, ;, % 등 체크 )<br/><br/>\
3. 필터링 <br/>\
- Request, Response에 대해 공통적으로 적용되는 기능을 구현하여 SQL Injection 유발 값에 대한 필터링 \
',

// OWASP Mobile Top 10
'# 정의 : 모바일 보안 기술 가이드 <br/>\
- 모바일 취약점 중 공격 빈도가 높으며, 보안상 큰 영향을 줄 수 있는 10가지 취약점에 대한 대응 방안을 제공하는 웹 보안 기술 가이드<br/><br/>\
# 암기 : 서저전누인암인의세바 <br/><br/>\
# 상세내역 <br/>\
- M1. 서버사이드에서 발생할 수 있는 취약점 : 대부분의 앱이 서버와 통신으로 이루어지고 개발시 하이브리드 앱으로 많이 개발되기 때문에 클라이언트에서 파라미터 값 변조를 통한 웹에서 발생할 수 있는 취약점들이 도출될 수 있음 <br/>\
- M2. 중요정보들이 스마트폰 내에 저장되는 경우 : 스마트폰 분실 혹은 공격자에 의한 권한 탈취시 해당 중요정보들 또한 공격자에게 전달됨 <br/>\
- M3. 민감한 정보 평문 전송 : 개인정보 혹은 중요정보들이 네트워크상에서 평문으로 정송될 때 발생 <br/>\
- M4. 의도하지 않은 데이터 누출 : 타 앱에서 접근 가능한 데이터 영역에 민감한 정보를 저장시 발생할 수 있는 리스크 <br/>\
- M5. 인증 및 인가 검증 미흡 : 클라이언트 내부에서 인증시 우회 가능하기 떄문에 인증 검증을 서버사이드에서 인증 절차를 확인해야 함 <br/>\
- M6. 취약한 암호화 : 개발시 암호화 기술에 대한 적정성 여부를 판단하여 적용해야 함 <br/>\
- M7. 클라이언트 사이드 인젝션 : 클라이언트에서 발생할 수 있는 인젝션 공격 <br/>\
- M8. 신뢰할 수 없는 입력 값에 의한 보안 의사결정 : 프로세스간 통신시 발생할 수 있는 취약점 <br/>\
- M9. 부적절한 세션 관리 : 서버에서 부여받은 세션 관리 <br/>\
- M10. 바이너리 보호 미흡 : 앱과 서버통신시 앱에 대한 무결성 검증이 필요\
',

// OWASP IoT Top 10
'# 정의 : IoT 보안 활성화 프로젝트 <br/>\
- 사물의 인터넷과 관련된 보안 문제를 이해하고 구축 할 때 더 나은 보안 결정을 내릴 수있는 상황에서 사용자를 활성화하기 위한 프로젝트<br/><br/>\
# 암기 : I-웹인네암개클모구펌물 <br/><br/>\
# 구성 <br/>\
1. 안전하지 않은 웹 인터페이스 <br/>\
2. 부족 인증 / 권한부여 <br/>\
3. 안전하지 않은 네트워크 서비스 <br/>\
4. 전송 암호화의 부족 <br/>\
5. 개인 정보보호에 대한 우려 <br/>\
6. 안전하지 않은 클라우드 인터페이스 <br/>\
7. 안전하지 않은 모바일 인터페이스 <br/>\
8. 불충분한 보안 구성 가능 <br/>\
9. 안전하지 않은 소프트웨어 / 펌웨어 <br/>\
10. 빈약한 물리적 보안 \
',

// 개인정보 영향평가(PIA)
'# 정의 : 개인정보 영향 선제 대응 절차 <br/>\
- 개인정보를 활용하는 새로운 정보시스템의 도입 및 기존 정보시스템의 중요한 변경시, 시스템의 구축, 운영이 기업의 고객은 물론 국민의 프라이버시에 미칠 영향에 대하여 미리 조사,분석,평가하는 체계적인 절차 <br/><br/>\
# 평가대상 <br/>\
- 공공기관 : 개인정보 침해(대통령령 기준) <br/>\
- 민감정보/고유 식별처리 사업 : 5만명 이상 <br/>\
- 개인정보파일 연계사업 : 50만명 이상 <br/>\
- 개인정보파일 사업 : 100만명 이상, 시스템 변경분 <br/>\
- 민감기관 <br/><br/>\
# 체계 <br/>\
<img src = "./img/PIA.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- 사전준비 : 예산확보, 평가기관 선정 <br/>\
- 수행 : 영향평가서 작성 <br/>\
- 이행 : 개선계획 반영, 점검 <br/><br/>\
# 흐름표 예시 <br/>\
<img src = "./img/PIA_Practice.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# 흐름도 예시 <br/>\
<img src = "./img/PIA_Flow_Practice.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 4교시 4번\
',

// ISO/IEC 29134
'# 정의 : PIA 수행 위한 방법론 <br/>\
- 한국이 주도한 개인정보 영향평가 가이드라인, 위험관리 단계에서 개인정보 영향평가(PIA)를 수행하기 위한 방법론 <br/>\
- 프라이버시 리스크 식별, 분석, 치료, 점검, 개선하기 위한 활동의 정책, 과정, 지침을 체계적으로 적용하기 위한 국제 표준 <br/><br/>\
# 목적 : 개인정보영향평가 프로세스 정의, 영향평가 보고서 국제 표준화 <br/><br/>\
# 프로세스 <br/>\
- 준비단계<br/>\
- 반복단계<br/>\
- 사후단계<br/>\
- 반복단계 : 개인정보보호 흐름분석, 프라이버시 리스크 식별, 영향분석 평가 , 대응 구성 <br/><br/>\
# 범위<br/>\
- 일반대상 : 개인정보처리 원칙을 따르는 기업이나 기관에 의해 수행 <br/>\
- 개인정보 처리자 : 개인정보영향평가를 수행하거나 위탁 업체에 대해 이를 수행하도록 요구 <br/>\
- 일부국가 : 법적 규제 요구사항을 충족시키기 위해 개인정보 영향평가 의무 <br/><br/>\
# 보고서 구성 <br/>\
- 서론<br/>\
- 개인정보영향평가 범위<br/>\
- 프라이버시 요구사항 <br/>\
- 위험 평가 <br/>\
- 위험 치료 대책 결론 <br/><br/>\
# 현황 <br/>\
- 2012년 4월 WG5 회의에서 신규 워크 아이템 제안으로 채택 <br/>\
- 순천향대 염홍열 교수가 이 국제 표준의 코에디터를 맡아 활동 <br/>\
- 2016년 10월 아부다비 회의에서 FDIS(Final Draft International Standard)로 합의 <br/>\
- 2017년 4월 17일 최종 국제표준으로 채택 <br/>\
(참고) : 국내 개인정보보호법과 정보통신망 이용촉진 및 정보보호 등에 관한 법이 있음, 정보보호관리체계를 위한 용어는 ISO/IEC 27000에서 정의 <br/><br/>\
# 개인정보관리체계 관련 국제 표준(2016.08.)<br/>\
- ISO/IEC 20889 : 비식별화 기법 2ndWD<br/>\
- ISO/IEC 27021 : 정보보안관리 전문가 인증 요구<br/>\
- ISO/IEC 18033-3 : 암호알고리즘:블록암호 <br/>\
- ISO/IEC 17922 : 바이오매트릭 HW 모듈 이용 인증 FW <br/><br/>\
* 국제 표준규격의 제정단계 <br/>\
1. 예비업무항목 : PWI, Preliminary Work Item <br/>\
2. 신규작업 항목제안 : NP, New Work Item Proposal <br/>\
3. 작업초안 : WD, Working Draft <br/>\
4. 분과위원회안 : CD, Committee Draft <br/>\
5. 국제규격안 : DIS, Draft International Standard <br/>\
6. 최종국제규격안 : FDIS, Final Draft International Standard <br/>\
7. 국제규격 : IS, International Standard\
',

// ISO 29141
'# 개인정보 체계 동향 <br/>\
- 2010년 : 개인정보보호 관리체계(PIMS) 인증제도 국내 시행 <br/>\
- 2011년 : PIMS 국제 표준화 신규 과제로 제안 <br/>\
- 2012년 : ITU-T(12.02) ISO/IEC(12.10) 표준화 과제 채택 <br/>\
- 2013~2016년 : 양 기구 표준화 회의 통한 최종합의 도출 <br/>\
- 2017.04.23. : ISO/IEC 29141(개인정보보호를 위한 보호 대책 지침) <br/><br/>\
# 구성 <br/>\
- 기반문서 : ISO27002 <br/>\
- 표준구조 : 5 ~ 18절 (27002 구조) + 19절(개인정보특화 통제/구현가이드라인) + 부록 <br/>\
- 적용대상 : 일반조직 <br/>\
- 목적 : ISO 27001 기반 개인정보 관리체계를 지원하기 위한 통제/구현 가이드라인 등의지침 개발 <br/><br/>\
<img src = "./img/ISOIEC29151_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ISOIEC29151_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ISOIEC29151_3.png" style = "max-width:100%; height:auto;">\
',
  
// 데이터 3법 
'# 개념 : 개인정보를 데이터로 활용할 수 있도록 개인정보 보호법, 정보통신망법, 신용정보법 개정안 <br/><br/>\
# Overview <br/>\
<img src = "./img/Data3RuleOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 개정안 <br/>\
<img src = "./img/Data3RuleChange.png" style = "max-width:100%; height:auto;"><br/>\
- 개인정보보호법 : 가명정보 도입, 보호체계 일원화 <br/>\
- 정보통신망법 : 개인정보보호법 및 위원회 이관 <br/>\
- 신용정보법 : 데이터 활용 법적 근거 명확화, 개인정보보호위원회 기능 강화 <br/><br/>\
# 기대효과 <br/>\
1. 긍정적 <br/>\
- 개인 : 개인 맞춤형 서비스, 일자리 창출 <br/>\
- 기업 : 신규 비즈니스 창출, 마이데이터 산업 성장 <br/>\
- 정부 : GDPR 적정성 평가 통과, 재난,재해 예측 및 대응 <br/><br/>\
2. 부정적 <br/>\
- 데이터 주권 : 자기결정권 침해, 본인 동의권 박탈 <br/>\
- 개인정보 보안 : 개별기업 탐욕 수단, 개인 정보 유출 <br/>\
- 개인 Lifecycle : 필터버블의 덫, 심리적 저항 <br/><br/>\
# 대응전략 <br/>\
- 개인 : 개인정보 주인의식 확립, 모니터링 <br/>\
- 기업 : 처리자 책임 강화, 경각심 보안강화 <br/>\
- 정부 : 컨트롤 타워 일원화, 위원회 독립성 보장 <br/><br/>\
# 후속추진 <br/>\
1. 행정안전부 <br/>\
- 신속한 입법 추진 : 2020년 3월 시행령과 규칙 개정안 수립 <br/>\
- 개인정보보호위 출범 지원 : 개인정보보호위 중앙 기관으로 위치 강화 <br/>\
- 구체적 가이드라인 수립 : 분야별 가이드라인, 해설서 발간 <br/><br/>\
2. 과학기술 정보통신부 <br/>\
- EU GDPR 적정성 평가 추진 <br/>\
- 데이터 개방 유통 확대 : 빅데이터 플랫폼과 연계를 통한 개방과 데이터 생산 촉진 추진 <br/>\
- 관련 법령 정비 : 안전한 데이터 활용 위한 하위 법령 및 유관 법령 정비 <br/><br/>\
3. 금융위원회 <br/>\
- 마이데이터 Working Group 운영 : 보안/인증, 인허가 기준 마련 <br/>\
- 금융분야 빅데이터 인프라 구축 : 빅데이터 개방 시스템과 전문기관 지정 운영 <br/>\
- 정보보호 방안 세부 내용 수립 : 금융권 정보활용/관리 상시 평가제 <br/><br/>\
* 라이지움 88회 관리 3교시 4번 <br/>\
* KPC 93회 응용 3교시 7번\
',

// 정보유형 
'# 용어 정의 <br/>\
- 개인정보 : 개인 식별 가능 정보 or 다른 정보와 쉽게 결합하여 알아볼 수 있는 정보 <br/>\
- 가명정보 : 추가정보의 사용,결합 없이는 알아볼 수 없는 정보 <br/>\
- 익명정보 : 개인을 알아볼 수 없는 정보 <br/>\
- 추가정보 : 대체된 개인정보를 복원할 수 있는 정보 (매핑 테이블 정보, 가명처리에 사용된 개인정보) <br/>\
- 다른정보 : 간접식별정보를 제외한 그 밖의 모든 정보 <br/>\
- 식별정보 : 외부 연계 목적 생성된 정보 (성명,전화번호,전자우편주소)<br/>\
- 식별가능정보 : 가명정보처리자 입장에서 개인을 알아볼 수 있는 정보 (성별, 연령, 국적, 혈액형) <br/>\
- 특이정보 : 많이 벗어난 정보 <br/>\
- 결합키 : 특정 개인을 알아볼 수 없으나 다른 정보주체와 구별할 수 있도록 조치한 정보 <br/>\
- 결합키연계정보 : 동일 정보주체에 대해 가명정보를 결합할 수 있도록 다른 결합신청자간의 결합키를 연계한 정보 <br/>\
- 시계열분석키 : 결합된 결과물의 시계열 데이터 분석을 위해 사용하는 가명정보 <br/><br/>\
* 라이지움 87회 관리 3교시 3번\
',

// [개인정보 보호법]- 개인정보 비식별 조치 가이드라인
'# 정의 : 비식별 조치, 활용 기준 제시 가이드라인 <br/>\
- 개인정보 유출로 인한 피해 축소와 개인정보 활용을 통한 부가가치 창출이 중요해짐에 따라 이를 권고한 가이드라인 <br/><br/>\
# 단계별 조치사항 <br/>\
<img src = "./img/UnIdentifyWorkflow.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 비식별 조치 방법 (2단계)<br/>\
- 가명처리 : 휴리스틱 가명화, 암호화, 교환방법 <br/>\
- 총계처리 : 총계처리, 부분총계, 라운딩 <br/>\
- 데이터 삭제 : 식별자 삭제, 식별자 부분 삭제, 레코드 삭제 <br/>\
- 데이터 마스킹 : 임의 잡음추가, 공백과 대체 <br/>\
<img src = "./img/NonIdentification.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 관리 3교시 3번 <br/>\
* 120회 4교시 5번\
',
  
// 프라이버시 보호모델 
'# 정의 : 개인 식별 요소를 제거해 비식별화 된 개인정보에 대해 연결 공격, 동질성 공격, 배경지식 공격 등을 통해 식별이 가능한 것을 방지하기 위한 보호모델 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PrivacyProtectionModelOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# K-익명성 : Feature가 늘어날수록 더 많은 데이터 삭제가 필요해 Curse of Dimensionality 이슈 발생 <br/>\
- 개념 : 특정인임을 추론할 수 있는지 여부 검토 <br/>\
- 발생원인 : 연결 공격 (준식별자 의한 추론, 민감정보 노출) <br/>\
- 해결방안 : 동일 레코드 <font color = "red">K 이상</font> <br/>\
<img src = "./img/PrivacyProtectionModelK.png" style = "max-width:100%; height:auto;"><br/><br/>\
# L-다양성 <br/>\
- 개념 : 민감정보 통한 다양성 높여 추론 가능성 낮추는 기법 <br/>\
- 발생원인 : 동질성공격 (K-익명성 만족하더라도 개인의 민감정보 노출 가능성) <br/>\
- 해결방안 : 민감정보 다양성 <font color = "red">L 이상</font> <br/>\
<img src = "./img/PrivacyProtectionModelL.png" style = "max-width:100%; height:auto;"><br/><br/>\
# T-근접성 <br/>\
- 개념 : 민감한 정보 분포 낮추어 추론가능성 더욱 낮추는 기법 <br/>\
- 발생원인 : 쏠림/유사성 공격 (L-다양성을 만족하더리도 민감 정보 분포 차이 통한 노출 문제 <br/>\
- 해결방안 : 동질집합, 전체 데이터 분포 차이 <font color = "red">T 이하</font><br/>\
<img src = "./img/PrivacyProtectionModelT.png" style = "max-width:100%; height:auto;"><br/>\
* Data 쏠리지 않게 분포하는 것이 핵심 <br/><br/>\
* 아이리포 23회 관리 3교시 2번\
',

// [개인정보 보호법]- 개인정보 안전성 확보조치 기준
'# 정의 : 대통령령으로 정한 개인정보의 안전성 확보에 필요한 기술적, 관리적 조치<br/><br/>\
# 근거 <br/>\
1. 개인정보 보호법 (2020.02.04. 일부개정기준)<br/>\
- 제29조 : 안전조치의무 <br/>\
- 제31조 : 개인정보 보호책임자의 지정 <br/><br/>\
2. 개인정보 보호법 시행령 (2020.8.4. 일부개정, 2021.2.5. 시행) <br/>\
- 제21조 : 고유식별정보의 안전성 확보 조치 <br/>\
- 제30조 : 개인정보의 안전성 확보 조치 <br/>\
- 제32조 : 개인정보 보호책임자의 업무 및 지정요건등 <br/><br/>\
# 개인정보 보호책임자의 수행 업무 <br/>\
1. 개인정보 보호법 (31) <br/>\
- 계획 주관 : 개인정보 보호 계획 수립 및 시행 <br/>\
- 실태 조사 : 개인정보 처리 실태 및 관행의 정기적인 조사 및 개선 <br/>\
- 처리 : 개인정보 처리와 관련한 불만의 처리 및 피해 구제 <br/>\
- 통제 관리 : 개인정보 유출 및 오남용 방지를 위한 내부 통제시스템의 구축 <br/>\
- 교육 : 개인정보 보호 교육 계획의 수립 및 시행 <br/>\
- 보호 감독 : 개인정보파일의 보호 및 관리감독 <br/><br/>\
2. 개인정보 보호법 시행령 (32) <br/>\
- 운영 : 개인정보 처리방침 수립,변경 및 시행 <br/>\
- 관리 : 개인정보 보호 관련 자료의 관리 <br/>\
- 파기 : 처리 목적이 달성되거나 보유기간이 지난 개인정보의 파기 <br/><br/>\
# 안전조치 적용 유형 <br/>\
<img src = "./img/PrivateInfoType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 내부관리 계획 <br/>\
1. 기술적 안전조치 <br/>\
- 접근권한 관리 <br/>\
- 접근통제 <br/>\
- 개인정보의 암호화 <br/>\
- 접속기록의 보관 및 점검 <br/>\
- 악성프로그램 등 방지 <br/><br/>\
2. 관리적 안전조치 <br/>\
- 개인정보 보호조직 구성 및 운영 <br/>\
- 개인정보 유출사고 대응 <br/>\
- 위험도 분석 및 대응 <br/>\
- 수탁자에 대한 관리 및 감독 <br/><br/>\
3. 물리적 안전조치 <br/>\
- 물리적 안전조치 <br/>\
- 재해 및 재난 대비 안전조치 <br/><br/>\
* 116회 응용 3교시 5번\
',
   
// 가명정보
'# 정의 : 개인정보 일부 삭제, 대체 / 추가 정보 사용 결합 / 특정 개인 알아볼 수 없는 정보  <br/>\
- 개인정보를 가명처리함으로써 원래의 상태로 복원하기 위한 추가 정보의 사용,결합 없이는 특정 개인을 알아볼 수 없는 정보 (개인정보보호법 2-1)<br/><br/>\
# 주요내용 (<font color = "red">처결안금과</font>)<br/>\
- 처리(28-2) : <font color = "red">통계작성, 과학적 연구, 공익 기론 보존</font> <br/>\
- 결합제한(28-3) : 결합시 보고위원회 or 전문기관 수행 <br/>\
- 안전조치(28-4) : 기술,관리,물리 <br/>\
- 처리시 금지의무(28-5) : 처리 = 식별 <br/>\
- 처리에대한 과징금(28-6) : 매출 3% 이하, 산정곤란 -> 4억 이하 or 매출 3% 이하 <br/><br/>\
<a href = "./doc/가명정보.pdf">참고문헌</a><br/>\
<img src = "./img/가명처리절차.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/가명처리절차상세.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 가명정보 결합 및 반출절차 <br/>\
<img src = "./img/RenameInfoCombineProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 8회 관리 3교시 3번 <br/>\
* KPC 95회 관리 3교시 4번<br/>\
* KPC 94회 관리 1교시 8번\
',

// 가명정보 결합전문기관
'# 지정기준 <br/>\
- 조직 : 3명 전문가(법률, 기술 1인 이상), 상시 고용 8인 이상 담당 조직 <br/>\
- 시설 및 시스템 : 결합, 추가 가명처리, 반출 위한 공간, 시스템 <br/>\
- 정책 및 절차 : 가명정보 결합,반출 정책 절차 / 내부 관리계획 <br/>\
- 재정 : 자본근 민간(50억원 이상), 공공기관 <br/>\
- 법령위반사실 : 최근 3년 내 개보법 개선권고, 시정조치 명령, 고발, 징계권고, 과태료 공표 x <br/><br/>\
# 역할 <br/>\
- 가명정보 결합 : 2개 이상 가명정보 결합 <br/>\
- 폐쇄공간 제공 및 처리 지원 : 관물기 조치 공간, 필요자원 제공 <br/>\
- 반출 심사 : 반출심사위원회, 결합된 정보 반출 승인 <br/>\
<font color = "red">* SDS, 통계청, NIA, SK, 건보, 심평원 결합저문기관 지정 </font><br/><br/>\
# 결합 사례 <br/>\
- 의료 + 인구(암센터) : 암 질병치료 효과 분석, 암 환자 합병증 만성질환 연구 <br/>\
- 금융 + 보훈(보훈처) : 보훈대상자 신용실태 연구 <br/>\
- 소득 + 복지(사회보장위원회) : 노후소득보장 연구 <br/>\
- 통신 + 유통(통신사) : 불범스팸 실태, 소비패턴 분석 <br/>\
- 레저 + 건강(임업진흥원) : 맞춤형 산림 치유 프로그램 분석 <br/><br/>\
# 가명 처리시 준수 의무 <br/>\
- 가명처리시 금지 의무 : 개보법 28-5 / 특정 개인 알아보기 위한 목적 금지 (3% 5년 5천)<br/>\
- 가명정보 안전조치 의무 : 개보법 30, 48-2 / 추가정보 별도보관 관물기 조치 (3천) <br/><br/>\
* ITPE 8회 관리 3교시 3번\
',
   
// 가명처리 (ISO/IEC 20889 기준)
'# 정의 : <br/>\
- 개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가정보가 없이는 특정 개인을 알아볼 수 없도록 처리하는 것(개인정보보호법 제2조의 1의 2) <br/><br/>\
# 대상 : 통계작성, 과학적 연구, 공익적 기록보존 <br/><br/>\
# 절차 : 사전준비 / 가명처리 / 적정성 검토 및 추가 가명 처리 / 활용 및 사후관리 <br/><br/>\
# ISO/IEC 20889 기준, 가명처리 기법 (<font color = "red">해재암통일가무삭</font>)<br/>\
<img src = "./img/ISOIEC20889_Tech.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* ISO/IEC 20889 : 비식별 처리 표준 기준 </font><br/><br/>\
# 가명처리 절차 <br/>\
<img src = "./img/PseudonymizationProcess.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/PseudonymizationProcessDetail.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 결합, 반출 절차 <br/>\
- 결합키 생성 : 일련번호 생성, 관리기관 합의하 결합키 생성 <br/>\
- 결합키연계정보 및 시계열 분석키 생성 <br/>\
- 가명정보 결합 <br/>\
- 결합결과 반출 <br/>\
- 분석 및 사후 관리 <br/>\
<img src = "./img/TimeLineDataCombine.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 3교시 3번\
',
  
// 비식별수준 적정성평가
'<img src = "./img/RenamePrivacyInfoTest.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 관리 3교시 4번\
',

// 재식별 공격
'# 정의 : 비식별 정보의 의도된 재식별화 공격 <br/><br/>\
# 유형(<font color = "red">PJMDI / 레데많존민</font>) <br/>\
- Prosecutor Attack : 특정 데이터 주체에 속하는 <font color = "red">레코드</font> 재식별 <br/>\
- Journalist Attack : 특정 레코드의 <font color = "red">데이터 주체</font> 재식별 <br/>\
- Marketer Attack : 해당 데이터 주체로 <font color = "red">가능한 한 많은 레코드</font> 재식별 <br/>\
- Distinguishability Attack : 데이터 집합에 특정 데이터 <font color = "red">주체 존재</font> 확인 <br/>\
- Inference Attack : 다른 속성 그룹과 관련된 <font color = "red">민감한 속성</font> 추론<br/><br/>\
* 인포에버 122회 관리 4교시 6번\
',
   
// [개인정보 비식별화]- 식별자 
'<img src = "./img/Identifier_0.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 식별자 분류 <br/>\
1. 식별자 : Dataset에서 특정 개인을 식별할 수 있는 속성들의 전체 집합 <br/>\
2. 지역 식별자 : 데이터셋에서 특정 개인을 식별가능토록하는 속성들의 집합 <br/>\
3. 유일 식별자 : 직접 식별자 중에서 데이터셋에서 그 자체로 동일 개인을 식별가능한 속성 (가명화처리된 일련번호)<br/>\
4. 지역 준 식별자 : 데이터셋 내에서 혹은 데이터셋에 포함된 다른 속성과 결합하여 동일 개인을 식별가능한 속성 <br/>\
5. 직접 식별자 : 일정 문맥하의 정보안에서 그 자체로 특정 개인을 유일하게 식별하는 속성 (진료번호, 전화번호) <br/>\
6. 준 식별자 : 데이터셋 내부 혹은 외부의 다른 속성과 결합하여 특정 개인을 식별하는 속성 (생일,우편번호,성별 등) <br/><br/>\
# 식별자 성질 (복구알)<br/>\
1. 복제가능<br/>\
- 시간에 걸쳐 충분히 안정적이며 정보주체에 대해 동일한 값을 가짐 <br/>\
- 판단사례) 당 수치(재현 불가능), 생일(재현 가능) <br/><br/>\
2. 구분가능 <br/>\
- 정보주체 사이 구분할 수 있는 속성값으로 충분히 변형되어야 함 <br/>\
- 판단사례) 유방암 환자DB (낮) / 청구DB (높) <br/><br/>\
3. 알고있는 <br/>\
- 적대자가 알 수 있어야 하며, 적대자가 정보주체의 지인 여부에 달려있음 <br/><br/>\
* 라이지움 86회 관리 3교시 3번 \
',
  
// 식별자, 민감정보
'# 개념 <br/>\
<img src = "./img/ID_SA.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 식별자 분류 <br/>\
<img src = "./img/IdentifierClassification.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 관리 3교시 3번\
',
    
// ISMS
'# 정의 : 정보보호관리 / 관리체계 수립,운영 / 기준 적합 인증제도 <br/>\
- Information Security Management System <br/>\
- 정보보호관리에 대한 표준적 모델 및 기준을 제시하여 기업의 정보보호관리체계 수립,운영을 촉진하고 기업의 정보보호를 위한 일련의 활동등이 객관적인 인증 심사 기준에 적합 인증 제도 <br/><br/>\
# 의무대상 (<font color = "red">정보통신망법 제47조 2항</font>) <br/>\
- 정보통신망서비스 제공자(ISP) : 전기통신사업법 제6조 1항<br/>\
- 집적정보통신시설 사업자(IDC) : 정보통신망법 제46조 <br/>\
- 연간 매출액 세입 1,500억 이상 <br/>\
- 정보통신서비스 부문 전년도 매출액 100억원 이상 <br/>\
- 일일평균 이용자수 100만명 이상 <br/><br/>\
# 관리 과정 <br/>\
1. 정보보호정책 수립 : 정책수립, 조직 및 책임 설정 <br/>\
2. 정보보호관리체계 범위 설정 : 범위설정, 자산 식별 <br/>\
3. 위험관리 : 전략 및 계획 수립, 분석, 평가, 대책 선정, 정보보호 계획 수립 <br/>\
4. 구현 : 대책 구현, 교육 훈련 <br/>\
5. 사후관리 : 체계 재검토, 모니터링 및 개선, 내부 감사 <br/><br/>\
* 124회 관리 4교시 4번 <br/>\
* 119회 관리 3교시 3번\
',
  
// ISMS-P 
'# 정의 : 정보보호 적합성 증명 제도 <br/>\
- Information Security Management System - Personal<br/>\
- ISMS + PIMS (18.11) <br/>\
- 정보보호 및 개인정보보호를 위한 일련의 조치와 활동이 인증기준에 적합함을 인터넷진흥원 또는 인증기관이 증명하는 제도<br/><br/>\
# 인증기준 <br/>\
- 관보개 <br/>\
- 관 : 기위운점 <br/>\
- 보 : 정조자 인외물 <br/>\
- 개 : 수이제파 <br/>\
<img src = "./img/ISMS_P_Detail.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요개정사항 <br/>\
<img src = "./img/ISMS_P_Change.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 관리 3교시 3번\
',

// 가상자산 사업자
'# 정의 : 특정 금융거래정보의 보고 및 이용 등에 관한 법률 제 2조 <br/>\
- 가상자산의 매도,매수, 교환, 이전, 보관,관리, 중개,알선 등의 영업을 하는자 <br/><br/>\
# 종류 <br/>\
- 거래업자 : 매매,교환, 중개,알선 플랫폼 개설 운영하는 사업자 / 취급업, 교환업, 거래소 <br/>\
- 보관관리업자 : 타인을 위하여 가상자산 보관,관리 행위 영업자 / 가상자산 커스터디 <br/>\
- 지갑서비스업자 : 가상자산의 보관,관리, 이전 서비스 제공 사업자 / 중앙화, 수탁형, 월렛 서비스 <br/><br/>\
<font color = "red">* 커스터디 : 보호,관리, 금융거래 수탁업무 </font>\
',

// 가상자산 사업자 ISMS
'# 필요성 <br/>\
- 법적 근거 : 특금법 개정안 제 7조(신고) <br/><br/>\
# 가상자산 사업자의 인증 종류, 범위 <br/>\
1. ISMS <br/>\
- 명칭 : 정보보호 관리체계 인증 <br/>\
- 개념 : 기업/기관의 정보보호 체계에 대한 인증 <br/>\
- 대상 : ISMS 의무대상 기업, 기관, 개인정보 보유x or 개인정보 흐름 보호 불필요 조직 <br/>\
- 기준 : 관리체계 수립 및 운영(16), 보호대책 요구사항(64) <br/><br/>\
2. ISMS-P <br/>\
- 명칭 : 정보보호 및 개인정보보호 관리체계 인증 <br/>\
- 개념 : 기업/기관의 정보보호 체계와 개인정보 보호 영역 모두 인증 <br/>\
- 대상 : 개인정보 흐름 보유, 처리단계별 보안강화 필요 조직 <br/>\
- 기준 : ISMS + 개인정보 처리단계별 요구사항(22) <br/><br/>\
# 가상자산 사업자의 ISMS 인증 범위 <br/>\
1. ISMS (정보시스템, 인력, 물리적 위치 포함)<br/>\
- <font color = "red">서비스 운영을 위한</font> 조직 및 인력 : 시스템 운영팀, 정보보안팀, 인사팀, 관제, 재해복구 <br/>\
- <font color = "red">서비스 운영을 위한</font> 운영을 위한 장소 : 시스템 운영장소, 정보서비스 운영 관련 부서 <br/>\
- <font color = "red">서비스 운영을 위한</font> 물리적 인프라 : 서버, DBMS, NW, 정보보호 시스템, 클라우드 콘솔 <br/><br/>\
2. ISMS-P (수이제파 따라 서비스,정보시스템,인력,물리적 위치 포함) <br/>\
- ISMS + <br/>\
- <font color = "red">개인정보 처리를 위한</font> 조직 및 인력 : 고객센터, 영업점, 물류센터, 개인정보보호팀 등 <br/>\
- <font color = "red">개인정보 처리를 위한</font> 물리적 인프라 : 개인정보 취급 부서, 개인정보 취급 수탁사 <br/><br/>\
# 절차 <br/>\
<img src = "./img/VirtualAssetBusinessISMSProcess.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 세부 점검 항목 <br/>\
1. 관리체계 수립 및 운영 (가상자산 사업자)<br/>\
- 관리체계 기반 마련 : 정책, 메뉴얼,지침 포함 여부 <br/>\
- 위험관리 : 자산 식별 목록 관리 (개인키, 월렛금고, 월렛서버, 콜드/핫 월렛용 단말기) <br/>\
- 관리체계 점검 및 개선 : 매분기 점검항목 준수여부 점검 및 최고경영자 보고 여부 <br/><br/>\
2. 보호대책 요구사항 (가상자산 사업자)<br/>\
- 정책,조직,자산 관리 : 대내외 환경변화시 제,개정 여부 (콜드,핫 비율 변경, 규제 신설) <br/>\
- 인적 보안 : 월렛 및 개인키, 거래원장 접근 가능 직무 정의 여부 <br/>\
- 외부자 보안 : 내부업무용과 분리 설치 운영 여부 <br/>\
- 물리 보안 : 콜드,핫 월렛 보관 금고, 사용 공간 등 일반 업무, 보호구역과 분리, 지정 관리 여부 <br/><br/>\
3. 개인정보 처리단계별 요구사항 (일반 동일) <br/>\
- 개인정보 수집 시 보호조치 : 최소성, 제공 여부 선택, 수집 미동의 불이익 여부 <br/>\
- 개인정보 보유 및 이용 시 보호조치 : 목적,방법,보유기간 정기적 관리 여부, 최신상태 유지 여부 <br/>\
- 개인정보 제공 시 보호조치 : 3자 제공 명확 고지 동의 여부, 위탁,수탁자 현황화 여부 <br/>\
- 개인정보 파기 시 보호조치 : 분리 보관 문서 접근 권한 최소성, 파기 기록 여부 <br/><br/>\
# 주요 쟁점 <br/>\
1. 관리 <br/>\
- 위험관리 : 가상자산 거래 서비스 발생 위험 식별,평가 가능 여부 / 핫,콜드월렛 개인키 백업, 전송절차 모니터링, 멀티시그 구현 <br/>\
- 멀티시그 : 대체 안전장치 보호대책 포함 여부 / 개인키 분리 보관, 자체적 방식 구현 <br/><br/>\
2. 물리 <br/>\
- 월렛룸 : 월렛 공간 물리적 구분 관리 여부 / 통제구역 지정, 출입 통제, 반출입 절차 마련 <br/><br/>\
3. 기술 <br/>\
- 노드서버 : 가상자산 노드서버존 접근 제어 관리 / 노드 서버, 핫월렛간 망분리, 방화벽 제한 <br/>\
- 망분리 : 월렛 접근 접근통제 / 핫월렛 서버, 운영 pc, 콜드월렛 전송 서버 망분리 <br/><br/>\
4. 금융 <br/>\
- FDS, Monitoring : 로그 검토 및 모니터링 / 핫월렛 알람 권고, Admin Page 행위 기록, 자산 현황 모니터링 <br/><br/>\
<font color = "red">* Hot Wallet : 온라인 상태 거래정보 지갑 <br/>\
* Cold Wallet : 오프라인 상태 거래정보 지갑 </font><br/><br/>\
# 현황 <br/>\
- ISMS 인증 가상자산 거래소 19개 <br/>\
- ISMS 인증 + 은행 실명확인계좌 확보 (21.09.24. 까지) -> 사업자 인정 <br/>\
- 무더기 폐쇄 전망 <br/><br/>\
* 라이지움 91회 4교시 1번\
',
  
// HIPPA Privacy Rule
'# 정의 : 미국 의료 정보 보호법 <br/>\
- 미국에서 의료기관 개인정보 보호의 필요성을 느끼고 1996년에 제정하고 2003년에 발효한 법안 <br/><br/>\
# 구성요소 <br/>\
1. Expert Determination <br/>\
- 개념 : 보호해야할 개인 건강정보의 비식별화를 위한 요구사항을 전문가가 결정하는 방법 <br/>\
- 결정 요소 : 통계적 또는 과학적 원칙, 매우 낮은 위험 <br/><br/>\
2. Safe Harbor <br/>\
- 개념 : 반드시 제거해야할 18개의 식별자들을 제거하는 방법 <br/>\
- 식별자 : 이름, 주소, 날짜, 전화번호, 팩스, 이메일, 사회 보장 번호, 의료 기록 번호, 의료 플랜 보장 번호, 계좌번호 등 <br/>\
- 사례 : 직업 누설, 가족관계, 임상 사건, 수신자 능력에 대한 지식, 희귀 진단 \
',
  
// OECD Privacy 8원칙
'# 정의 : 개인정보 수집 및 관리에 대한 국제사회의 합의 반영한 국제기준 <br/><br/>\
# 내용 (<font color = "red">수집 - 수정목이 / 활용 - 안공개책</font>) <br/>\
<img src = "./img/OECDPrivacy8.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 응용 4교시 5번\
',

// [개인정보 보호법]- 개인정보 유출사고 대응 메뉴얼
'# 정의 : 개인정보 유출 사고 대응 최소 사항 제시 메뉴얼<br/>\
- 「표준 개인정보 보호지침」(행정자치부 고시 제2016-21호, 2016.6.30.) 제29조(개인정보 유출 사고 대응 매뉴얼 등)에 따라, 기관·기업이 유출 사고 발생시 피해 발생을 최소화하기 위해 마련해야하는 「개인정보 유출 사고 대응 매뉴얼」에 대한 최소한의 사항을 포함하여 제시한 매뉴얼<br/><br/>\
<img src = "./img/개인정보유출사고대응매뉴얼_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/개인정보유출사고대응매뉴얼_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/개인정보유출사고대응매뉴얼_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/개인정보유출사고대응매뉴얼_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/개인정보유출사고대응매뉴얼_5.png" style = "max-width:100%; height:auto;">\
',
   
// 정보보호산업진흥법(15.12 시행)
'# 정의 : 정보보호 산업 선순환 생태계 강화 법률 <br/>\
- 정부의 정책적/법률적 지원을 통해 공기업/사기업 모두 정보보호 수요를 창출할 수 있도록 하여, 정보보호 산업 전반적으로 선순환 생태계를 강화하는 계기를 마련하기 위해 제정한 법률<br/><br/>\
# 정보보호 산업 범위 <br/>\
- 정보보안 : 클린인터넷 경제 <br/>\
- 물리보안 : 안전안심 생활 <br/>\
- 융합보안 : 안전성 강화 <br/><br/>\
# 주요내용 <br/>\
1. 수요 측면<br/>\
- 공공기관 구매 수요 정보 제공<br/>\
- 정보보호제품 및 서비스의 적정 대가 지급 노력<br/>\
- 정보보호 준비도 평가<br/>\
- 정보보호 공시제도 <br/><br/>\
2. 공급 측면 <br/>\
- 국가 및 지방자치 단체의 책무 규정 <br/>\
- 정보보호산업 진흥계획 수립 <br/>\
- 우수한 정보보호제품 공급 <br/>\
- 기술 개발 및 인력 양성 <br/>\
- 이용자 보호조치 <br/>\
- 공공기관 정보보호 조치 <br/>\
- 한국 정보보호 산업 협회 <br/>\
- 분쟁 조정 위원회 <br/><br/>\
<img src = "./img/정보보호산업진흥법.png" style = "max-width: 100%; height: auto;"><br/><br/>\
',

// 정보윤리
'# 정의 : 사이버 공간 / 윤리 규범 체계 <br/>\
- 사이버 공간에서 옳고 그름, 좋음 나쁨, 윤리적인 것과 그렇지 않은 것을 올바르게 판단하고 행동할 수 있게 하는 규범 체계 <br/><br/>\
# 원칙 <br/>\
- 존중 : 상대방 배려, 존중 태도 <br/>\
- 정의 : 타인 자유, 권리 침해x, 자신 제공 정보 완전성, 공정성 추구 <br/>\
- 책임 : 자신의 행동 책임성 <br/>\
- 해악금지 : 악성 프로그램 유포, 저작권 침해, 사이버 폭력 x <br/><br/>\
* 123회 관리 4교시 3번\
',

// 사이버 범죄
'# 정의 : 사이버 공간 / 범죄 행위<br/>\
- 인터넷과 같은 정보 통신망으로 연결된 컴퓨팅 시스템이나 이들이 연결되어 형성된 사이버 공간에서 발생하는 각종 범죄행위 <br/><br/>\
# 특징 <br/>\
- 비대면, 익명성 : 신분노출 위험 낮음, 대담 범죄, 가해자 찾기 어려움 <br/>\
- 전문성, 기술성 : 컴퓨터 관련 저문 지식, 기술 요구 <br/>\
- 시간,공간 무제한성 : 범죄 행위 언제 어디서나 발생 가능 <br/>\
- 대규모 재산피해 : 빠르게 전파, 개인,기업,국가 대규모 재산 피해 유발 <br/><br/>\
# 종류, 대응책 <br/>\
1. 종류 <br/>\
- 테러형 : 해킹, DoS, 랜섬웨어, 악성프로그램, 피싱, 파밍, 스미싱 <br/>\
- 일반형 : 사이버 사기, 불법 복제, 불법/유해 사이트, 사이버 스토킹, 모욕, 성폭력, 개인정보 침해, 명예훼손, 협박/공갈 <br/><br/>\
2. 대응책 <br/>\
- 관리적 : OS 보안 패치, 정보 윤리 보안 교육, 저품 SW 사용, 비인가 사이트 접속 금지, 네티켓, 비밀번호 변경 <br/>\
- 물리적 : 보안 USB, 망분리, 중고물품 직거래 <br/>\
- 기술적 : 백신, 전자서명, 방화벽, 스크러빙 센터, 워터마킹, 웹사이트 인증, SIEM, IPS, IDS, EDR, SNI Filtering <br/><br/>\
* 123회 관리 4교시 3번\
',

// 사이버 중독
'# 정의 : 일상생활 심각 / 사회,정신,육체,금전적 / 생활 부정적 영향 받고 있는 상태 <br/>\
- 정보이용자가 지나치게 컴퓨터에 접속하여 일상생활에 심각한 사회적, 정신적, 육체적 및 금전적으로 생활에 부정적 영향을 받고 있는 상태 <br/><br/>\
# 종류 <br/>\
- 웹서핑형 : 필요 이상 정보 검색 시간 사용 <br/>\
- 관계집착형 : SNS 과도 집착, 현실 분리, 사이버 과시 <br/>\
- 게임형 : 과몰입, 중독, 지나친 경제 생활 <br/>\
- 정보수집형 : 정보 수집 행위 자체 몰두 <br/>\
- 음란물형 : 가상공간 성적 대화, 포르노 영상 집착 <br/><br/>\
# 문제점 <br/>\
- 병리학 : 우울증, 대인기피증, 주의력 결핍, 수면장애, 충동조절/폭력성, 자살, 조기 사망 <br/>\
- 사이버 범죄 : 해킹,바이러스, 인터넷 사기, 사이버 폭력, 개인정보 유출 <br/><br/>\
# 법제도 <br/>\
- 정보통신망 이용 촉진 정보보호등에 관한 법률 : 표준화, 인증, 접근권한, 명예훼손 분쟁 조정 <br/>\
- 게임 산업 진흥에 관한 법률 : 게임 과몰입, 중독 예방, 지식재산권 보호 <br/>\
- 통신비밀보호법 : 국가안보, 범죄수사 위한 통신 제한 조치 <br/>\
- 개인 정보 분쟁 조정 제도 : 유출, 오남용 인한 분쟁 조정 <br/><br/>\
* 123회 관리 4교시 3번\
',

// ISO/IEC 27014
'# 정의 : 정보보호 거버넌스 <br/>\
- 의사결정 권한과 책임의 할당, 비즈니스와 전략적 연계, 관련 법과 규정의 준수를 위한 프로세스 및 실행체계 <br/><br/>\
- 정보보호의 전략적 방향을 제시하고 목적 달성, 적절한 위험관리, 조직 자산의 책임있는 사용, 기업 보안 프로그램의 성공과 실패가 모니터링 됨을 보장 <br/>\
- 정보의 기밀성, 무결성, 연속성을 위한 "이사회와 고위 경영진의 책임"<br/><br/>\
<img src = "./img/정보보호거버넌스_정보보호관리체계.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/정보보호거버넌스프로세스.png" style = "max-width: 100%; height: auto;"><br/><br/>\
<img src = "./img/기업거버넌스.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 참고사항 <br/>\
- 정보보안 3요소 : CIA(기(Confidentiality)무가) <br/>\
- 정보보안거버넌스3요소 : ISA(데세정) <br/>\
- 정보보안거버넌스목표기준 : ABC(책비준) \
',

// 탈린 매뉴얼
'# 정의 : 최초의 사이버 교전 수칙 <br/>\
- 2007년 DDoS 공격으로 탈린 지역의 인터넷이 마비된 사건을 계기로 2013년 3월 북대서양조약기구(NATO : North Atlantic Treaty Organization)가 사이버테러에 관한 조항들을 성문화한 최초의 사이버교전 수칙<br/><br/>\
# 배경 : 2007년 러시아 분산서비스거부(DDoS) 공격, 에스토니아 수도 "탈린"에서 발생한 사이버 테러 계기 <br/><br/>\
# 특징 : NATO가 공식 채택한 구속력 X 문서, 사이버 전쟁의 국제법적 룰 반영한 가이드 라인 <br/><br/>\
# 구성 <br/>\
- 국가와 사이버 공간 <br/>\
- 무력의 사용 <br/>\
- 무력충돌법 일반 <br/>\
- 적대행위 <br/>\
- 특정 사람 <br/>\
- 물자 및 활동 <br/>\
- 점령 <br/>\
- 중립\
',

// ISA/IEC 62443
'# 정의 : 범용적인 제어 시스템 보안 관련 국제 표준 규격 <br/>\
- 전사적으로 보안적인 산업용 자동화 및 제어 시스템(IACS ; Industrial Automation and Control Systems)을 구현하기 위한 일련의 표준, 보고서 및 부속 문서들을 표준하는 국제 표준 <br/>\
- IEC 62443 표준의 가이드라인을 준수한다면 네트워크에 대한 사이버 공격 위험성 낮춤 효과 <br/><br/>\
# 구성요소 (<font color ="red">GPSC</font>) <br/>\
- General : 개념 모델, 용어, 일반사항<br/>\
- Policies & Procedures : 보안 정책, 절차 규정<br/>\
- System : 기본적 요구사항 (FR 1~7) 설계, 구현<br/>\
- Component : 보증, 기능 요구사항 규정<br/><br/>\
# 기본 보안 요구사항 (<font color = "red">IUSDRTR / IU스드르트르</font>)<br/>\
1. FR1 : Identification and Authentication Control <br/>\
- (IAC, 식별 및 인증) : 접근 허용전 모든 사용자 식별, 인증 <br/><br/>\
2. FR2 : Use Control<br/>\
- (UC, 사용 통제) : 요청된 작업 수행, 권한 모니터링 <br/><br/>\
3. FR3 : System Integrity <br/>\
- (SI, 시스템 무결성) : 인가 <br/><br/>\
4. FR4 : Data Confidentially <br/>\
- (DC, 데이터 기밀성) : 공개 방지 <br/><br/>\
5. FR5 : Restricted Data Flow <br/>\
- (RDF, 데이터 흐름 제한) : 불필요한 데이터 흐름 제한 <br/><br/>\
6. FR6 : Timely Response to Events <br/>\
- (TRE, 이벤트 적시 대응) : 적시 보안 위반 대응 <br/><br/>\
7. FR7 : Resource Availability <br/>\
- (RA, 자원 가용성) : 컴포넌트 가용성 보장 <br/><br/>\
# 보안 등급 <br/>\
- SL1 : 고의는 아니지만 허가되지 않은 액세스 보호 <br/>\
- SL2 : 해커에 의한 사이버 위협 <br/>\
- SL3,4 : 특수한 기술과 도구 방어 <br/><br/>\
* KPC 94회 2교시 3번\
',

// Darkside Ransomware
'# 특징 <br/>\
1. <font color = "red">PECompact</font>와 <font color = "red">VMProtect Packet</font>를 통해 이중 패킹 사용<br/>\
- 내부코드 난독화 <br/>\
- 실행파일 압축 <br/><br/>\
2. 데이터 암호화를 진행하고 감염 PC 내 주요 데이터를 C&C 서버로 탈취<br/>\
- 데이터 유포 협박<br/>\
- 암호화 데이터 복호화 빌미로 인한 비용지불 유도<br/><br/>\
3. 지역/국가별 상이한 행위를 지님<br/>\
- 구소련 및 시리아 지역에서는 감염이 이루어지지 않음 <br/>\
- 특정 국가/지역을 대상으로만 암호화 프로세스 진행 <br/><br/>\
4. 데이터 탈취 및 암호화 행위에 방해되는 서비스와 프로세스는 사전에 제거<br/>\
- 주목적: 암호화 작업 수행시 방해 무력화<br/>\
- 부목적: 탐지 회피 효과 (보안솔루션 위협대응분석 무력화)<br/><br/>\
5.  난독화된 파워쉘 스크립트를 이용하여 볼륨 쉐도우 복사복 삭제<br/>\
- 복원 무력화 -> 유일한 선택지 몸값 지불로 유도<br/><br/>\
# 솔루션의 대응 방법 <br/>\
- 볼륨 쉐도우 복사복 삭제시도를 행위 정보로 탐지<br/>\
- PC 내 폴더 및 파일들을 열거하는 작업을 행위정보로 탐지<br/>\
- 파일 암호화 및 파일명을 변경하는 작업을 행위정보로서 탐지\
',

// ISO/IEC 15408
'# 정의 : 국제 정보보안평가기준<br/>\
- Common Criteria <br/>\
- 국가마다 서로 다른 정보보호 시스템 평가기준을 연동하고 평가결과를 상호 인증하기 위해 제정된 정보보안 평가기준(국제표준 ISO/IEC15408, 1999.09. 인증) <br/><br/>\
# 암기 <br/>\
- 구성 : 1(모델)2(기)3(증)<br/>\
PP,ST,EAL <br/><br/>\
EAL : 펑스매매세세포 <br/><br/>\
- 현황 : 정인평인 <br/><br/>\
- ISO/IEC 15408 <br/>\
- ISO/IEC 18045 <br/><br/>\
# 발전 : TESEC(미국) , ITSEC(유럽), CPCPEC(캐나다) => Alignment Activity => CC <br/>\
- CC V3.1 : 중복 평가활동배제, 범위 축소, 실제 보안성에 대한 보증측면의 평가 활동을 재구성, 재조명 하는 것을 목적으로 함 <br/><br/>\
# 구성 : 모델기증 <br/>\
- Part1 (CC소개 및 일반보호 모델) <br/>\
- Part2 (보호기능요구사항) : TOE(Target Of Evaluation)기능 요구의 표준 컴포넌트 집합 <br/>\
- Part3 (보호보증요구사항) : PP,ST,EAL <br/><br/>\
- 패키지 : 부분적인 보안 목표 만족시키기 위한 컴포넌트 집합 <br/>\
- 국내 PP 사례 : 무선랜 인증 시스템 (EAL4), 통합보안관리시스템(EAL3), 안티바이러스 소프트웨어(EAL3), 국가 기관용 가상 사설망 PPV1.2(EAL3+)등 총 14종 <br/><br/>\
# EAL 상세 : 평스메메세세포 <br/>\
1) Functionally Tested : 위협, 심각X <br/>\
2) Structually Tested : 상업적 방법론 따르면 OK <br/>\
3) Mehodically Tested and Checked : 기존 개발 방법론 내 실용 보안공학 <br/>\
4) Mehodically Designed and Tested and Reviewed : 상업적 방법론 기반 실용 보안공학 <br/>\
5) Semi-formally designed and tested : 전무적 보안공학 완화 응용 <br/>\
6) Semi-formally verified design and tested : 엄격한 개발환경에서 보안공학 기법 응용 <br/>\
7) formally verified design and tested : 극도로 위험 상황, 가치가 높은 <br/><br/>\
# 국내 현황 <br/>\
- 정책기관 : 방통위 <br/>\
- 인증기관 : IT보안인증사무국(CCRA) <br/>\
- 평가기관 : KISA, KSEL, TTA, KTL <br/>\
- 인정기관 : 국가기술표준원-평가기관 자격심사 <br/><br/>\
# 참여기관 : 인정기관, 평가기관, 인증기관, 인증서보유기관, 신청기관, 사용자 <br/><br/>\
# 대상 <br/>\
- 공공기관에 납품하는 모든 정보보호시스템의 평가인증 의무화<br/>\
- 미래부 고시 공공기관용 클라우드 컴퓨팅 추가 보호조치 사항 포함 <br/><br/>\
# 절차 : 평가준비 > 평가 > 인증 > 사후조치 <br/><br/>\
# 이슈 : 개정예정 <br/>\
- 원인 : IoT등 다양 산업 분야에서 개발된 IT 제품에 대한 요증 요구 지원, 문서 중심 보증작업과 취약성에 대한 보증 이슈, 표준/실무 기술서 일관성 저하등 <br/>\
- ISO/IEC 15408 Part4 : 평가 방법과 활동의 명세를 위한 프레임워크 <br/>\
- ISO/IEC 15408 Part5 : 이미 정의된 보안 요구사항 패키지 / 추가 <br/>\
- 평가자들이 활용하는 ISO/IEC 18045dp ISO/IEC 15408 변경사항 포함 <br/><br/>\
<img src = "./img/ISOIEC15408_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ISOIEC15408_2.png" style = "max-width:100%; height:auto;">\
',

// 코드서명
'# 정의 : 디지털 도장 전자서명 방법 <br/>\
- 개발회사에서 인터넷 상으로 소프트웨어를 배포하는 경우 사용자에게 신뢰할 만한 프로그램임을 알리기 위해 소프트웨어를 인증기관에서 디지털 도장을 받도록 하는 전자서명 방법<br/><br/>\
# 절차 (생수다서배)<br/>\
1. 생성 : 프로그램을 컴파일 후 CAB 파일 생성 <br/>\
2. 수령 : .pvk, .spc 파일을 수령 (개인키와 인증키) <br/>\
3. 다운로드 : 코드사인 서명 도구 다운로드(제공업체마다 다름) <br/>\
4. 서명 : 프로그램 인증서 서명 <br/>\
5. 배포 : 프로그램을 웹서버에 올려 배포 <br/><br/>\
# 보안강화 <br/>\
- 코드서명 인증서 보안가이드 활용 <br/>\
- 점검항목 : 인증서관리, 인증서 관리시스템, 보안 업데이트 체계, 침해사고 발생시 사고 대응체게 <br/><br/>\
<img src = "./img/Codesign_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Codesign_2.png" style = "max-width:100%; height:auto;">\
',
  
// WPA3
'# 정의 : 차세대 Wi-Fi 보안 프로토콜 <br/>\
- Wi-Fi Protected Access <br/>\
- 강력한 인증, 고강도 암호화, 복원력 유지를 지원하는 차세대 Wi-Fi 보안 프로토콜. WPA3에서는 KRACK의 문제를 방지하기 위해, 4-way handshake를 하기전에 Simultaneous Authentication of Equals(SAE)라는 절차를 추가하고 KRACK와 같은 공격을 방지 할 수 있다',

// 커버로스
'# 정의 : 티켓 기반 NW 인증 프로토콜 <br/>\
- MIT대 Athena Project에 의해 개발된 비밀키 방식에 의한 인증 시스템으로 서비스 요구를 인증하기 위한 대칭 암호기법에 바탕을 둔 티켓 기반한 네트워크 인증 포로토콜 <br/><br/>\
# 특징 <br/>\
- 인증 프로토콜 : Window AD 등 사용, 주요 인증 메커니즘 <br/>\
- SSO 제공 : 분산 환경, SSO 제공 <br/>\
- 키분배 센터 : Key Distribution Center 동작 <br/>\
- 패스워드 추측 공격에 취약 <br/><br/>\
# 구성요소 <br/>\
1. Server <br/>\
- AS(Autentication Server) : 인증서버, TGT 발행, SSO <br/>\
- TGS(Ticket Granting Service) : TGT 기반 Ticket 발행 <br/>\
- Application Server : Ticket 기반 이용 가능 App 서버, 표준x <br/><br/>\
2. Ticket <br/>\
- TGT(Ticket Granting Ticket) : AS 발행, TGS 접근 위한 티켓 <br/>\
- SGT(Service Granting Ticket) : Service Ticket 불림, TGS 발행, 대상 시스템 접근 위한 티켓 <br/><br/>\
# Ticket의 정보내용 <br/>\
1. Client가 접속 하기를 원하는 서버의 ID <br/>\
2. Client ID <br/>\
3. Client의 Network Address <br/>\
4. Client, Server가 Service 기간 동안 공유하는 Session Key <br/><br/>\
# 활용 <br/>\
- 클라우드 스토리지 사용자 인증 <br/>\
- 네트워크 인증 시스템의 기반으로 빅데이터 환경에서의 인증 정책으로 사용됨 <br/><br/>\
# 취약점 및 대응방안 <br/>\
- SPOF : 이중화, HA, FT <br/>\
- 재전송 공격 : Timestamp 기반 방지 <br/><br/>\
<img src = "./img/Kerberos.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 90회 응용 1교시 13번 \
',

// WAF
'# 정의 : 웹 공격 대응 역할 수행 장치<br/>\
- Web Application Firewall <br/>\
- 웹 방화벽(WAF)은 웹을 통한 외부의 침입이나 웹 공격을 탐지하고 대응하는 역할을 수행',

// X.509
'# 정의 : 공개키 기반 ITU-T 표준 <br/>\
- 암호학에서 공개키 인증서와 인증 알고리즘의 표준 가운데 공개키 기반(PKI)의 ITU-T 표준<br/>\
- X.509 시스템에서 CA는 X.500 규약에 따라 서로 구별되는 공개키를 가진 인증서를 발행',

// 라이트 커맨드 취약점
'# 정의 : IoT 스피커 빛 이용 원격 명령 삽입 취약점 <br/>\
- 공격자가 음성기반의 IoT 스피커에 빛(레이저)을 이용하여 원격으로 명령을 삽입할 수 있는 취약점',

// 무자각 지속 인증
'# 정의 : 행위 및 환경정보 기반 신원 인증 기술 <br/>\
- 행위 및 환경 정보를 활용하여 사용자의 명시적 개입 없이 지속적으로 신원을 검증하는 신뢰기반 인증기술 <br/><br/>\
# 특징 <br/>\
- 보안성 : 최초 인증후 세션 탈취후에도 접근 차단 가능 <br/>\
- 명시적 미고지 : 명시적 고지 없이 모니터링 및 확인 <br/>\
- 지속적인 인증확인 : 상태정보 변경에 따라 사용자의 지속적 신원확인 시도 <br/><br/>\
# 무자각 인증 절차 (<font color = "red">관생비결</font>) <br/>\
<img src = "./img/무자각지속인증_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
1. 관찰 <br/>\
- 사용자인증 데이터 수집 : 사용자 특화된 속성으로 알려진 데이터 수집 <br/>\
- 무자각 모니터링 : 사용자와의 상호작용에서 무자각 모니터링 <br/><br/>\
2. 프로파일 생성/갱신 <br/>\
- 신규 사용자 프로파일 생성 : 새로운 사용자 프로파일 생성 <br/>\
- 기존 사용자 프로파일 갱신 : 사용자 프로파일 수집된 데이터로 검색 후 갱신 <br/><br/>\
3. 비교 <br/>\
- 패턴매칭 : 사용자 프로파일 수집된 데이터간 패턴비교 <br/>\
- 머신러닝 기반 본인여부 분석 : 머신러닝 기반으로 기존데이터의 학습 및 사용자 여부 분석 <br/><br/>\
4. 결정 <br/>\
- 인증 승인 : 알고리즘 분류 결과에 따라 승인,거부,결정 <br/>\
- 재인증 요청 : 거부 결정일 경우 재인증 요청등의 조치를 정책에 따라 수행 <br/><br/>\
# 인증 수단 <br/>\
- 얼굴 : FSFD(안면), DCNN(부분 패턴) <br/>\
- 음성 : GRNN(목소리), RBF(특정 화자) <br/>\
- 걸음걸이 : KNN(걸음걸이 특징), HNN(3축 가속도, GDI 센서) <br/>\
- 문체 : n-gram(언어학적 형태), 감독학습(단어, 입력주기, 빈도평가) <br/><br/>\
* 120회 관리 1교시 3번\
',

// GDPR
'# 정의 : EU의 일반개인정보보호 규정 <br/>\
- General Data Protection Regulation <br/>\
- 1995년 EU 개인정보보호 지침 제정후 규정된 개인정보보호 법령 (2018.5.25. 시행) <br/><br/>\
# 개요 (장/전문/본문)<br/>\
- 정보보호 지령 : 1995.10.24. 채택/시행 7/72/34 <br/>\
- GDPR : 2016.5.27. 채택 / 2018.5.25. 시행 11/173/99 <br/><br/>\
# GDPR 주요내용 <br/>\
1. 강화 <br/>\
- 처리요건 : 자가결정권, 의사결정 거부권, 잊혀질 권리 <br/>\
- 책임 : 처리자 책임강화(<font color = "red">DPO</font>), 영향 평가제(<font color = "red">DPIA</font>) <br/>\
- 벌칙 규정 : 2천만 유로, 매출액 4% <br/><br/>\
2. 완화/확대 <br/>\
- 데이터 활용 : 활용 증대, 동의 없이 사용 <br/>\
- 법 적용 영역 확대 : EU 역외 까지 <br/><br/>\
# 본문 (<font color = "red">규원권컨3독협구특위최</font>) <br/>\
1. 일반 규정 <br/>\
2. 원칙 <br/>\
3. 정보주체의 권리 <br/>\
4. 컨트롤러, 프로세서 <br/>\
5. 제3국 및 국제 기구로의 개인정보 이전 <br/>\
6. 독립적인 감독기구 <br/>\
7. 협력 및 일관성 <br/>\
8. 구제책, 책임, 처벌 <br/>\
9. 특정 정보처리 상황에 관한 규정 <br/>\
10. 위임 법률 및 시행 법률 <br/>\
11. 최종 규정 <br/><br/>\
# 주요 원칙 (<font color = "red">개처동아민</font>)<br/>\
- 개인정보 처리 원칙 : 5조 <br/>\
- 처리의 적법성 : 6조 <br/>\
- 동의 : 4, 7조 <br/>\
- 아동 개인정보 : 8조 <br/>\
- 민감정보 : 9조 <br/><br/>\
# 권리보장 조치사항 (제열정삭처이반자)<br/>\
- 정보를 제공받을 권리 <br/>\
- 정보주체의 열람권 <br/>\
- 정정권 <br/>\
- 삭제권(잊힐권리) (17조) <br/>\
- 처리에 대한 제한권 (18조) <br/>\
- 개인정보 이동권 (20조) <br/>\
- 반대할 권리 <br/>\
- 자동화된 결정 및 프로파일링 관련 권리 (22조) <br/><br/>\
# GDPR 대응 전략 <br/>\
- 정부 : EU 개인정보보호 적정성 평가 추진, 안내서, 가이드, 세미나, 간담회 <br/>\
- 기업 : GDPR 인식 제고, 책임성 강화 조치, 정보주체 권리 강화 조치 <br/><br/>\
* 아이리포 23회 3교시 1번<br/>\
* 117회 컴시응 4교시 1번 \
',
  
// GDPR 적정성평가
'# 개념 : 제 45조 적정성 결정에 근거한, 제 3국이 적정성수준으로 개인정보 보호조치를 확보하고 있는지 평가하는 제도 <br/><br/>\
# 특징 <br/>\
- 데이터 3법 통과로 개인정보 감독기구 독립성 확보 <br/>\
- 최소 4년마다 재평가 <br/>\
- 벌금 : 2,000만 유료 or 연 매출 4% <br/>\
<font color = "red">* 2015년 신청, 개보위 독립성 부재로 불가 통보 </font><br/><br/>\
# 절차 (집이대전)<br/>\
- 1단계 : EU 집행위의 제 1차 결정 <br/>\
- 2단계 : 유럽 정보보호 이사회 의견제시 <br/>\
- 3단계 : EU 각 대표 구성된 위원회 심의/승인 <br/>\
- 4단계 : EU 집행위원 전원회의 최종결정 <br/><br/>\
# 평가 주요내용 <br/>\
- 해외이전 : EU 시민 특별한 허가(승인) 없이 개인정보의 이전 가능 <br/>\
- 특별 고려요인 : 제3국 개인정보 제도, 독립된 감독기구, 구속력 조항,문서 <br/>\
- 모니터링 : 정기적 검토 및 모니터링 규율 <br/>\
- 철회 : 적정성 결정의 철회 <br/><br/>\
# 기대효과 <br/>\
<img src = "./img/GDPR_Effect.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 97회 관리 1교시 4번\
',

// 2020 전자서명법 개정
'# 공인인증서 연혁 <br/>\
- 1999 : 정의 <br/>\
- 2006 : 의무화 <br/>\
- 2010 : 모바일 의무화 <br/>\
- 2015 : 사용의무 폐지 <br/>\
- 2020 : 공적효력 폐지 <br/><br/>\
# 2020 전자서명법 개정 내용 (공수인가보)<br/>\
1. 공인인증서 제도 페지 (2, 3) <br/>\
- 공인,사설 인증서 구별 폐지 <br/>\
- 공인인증서에 우월한 법적효력 폐지 <br/><br/>\
2. 다양한 전자서명수단 이용활성화 (6)<br/>\
- 의무 부여시 법률,대통령령,국회규칙 등 상위 법령 명시 <br/><br/>\
3. 전자서명인증업무 운영 준수사실 인정제 도입 (7~11) <br/>\
- 합리적 선택에 필요한 정보제공 위한 운영기준 고시 <br/><br/>\
4. 전자서명 가입자 신원확인(14) <br/>\
- 대통령령이 정한 방식의 신원 확인 절차 필수 <br/><br/>\
5. 전자서명 가입자 및 이용자 보호 강화(15,20,22) <br/>\
- 전자서명인증업무준칙 작성, 게시 (서비스 종류, 요금, 이용조건, 일종의 약관) <br/><br/>\
# 사설 인증서 종류 <br/>\
1. 카카오페이 <br/>\
- PKI 구조 : 공인인증서와 동일한 구조 <br/>\
- 블록체인 기술 적용 <br/><br/>\
2. PASS <br/>\
- 통신 3사 참여 <br/>\
- 개인 휴대폰 이용 <br/><br/>\
3. 뱅크사인 <br/>\
- 은행연합회 <br/>\
- 3년 유효기간 <br/><br/>\
# 공인인증 생태계 동향 <br/>\
- EU : 고급 전자서명의 기술적 요건을 규정하고 고급 전자서명에는 법령상 요구되는 서명의 효력을, 기타 전자서명에는 당사자간 서명 효력을 부여 <br/>\
- 국내 : 혁신 금융 심사 위원회에서 SKT DID 관련 안건이 상정될 예정(2020.05.25.) <br/><br/>\
* 122회 4교시 3번\
',

// 전자서명, 전자봉투
'# 전자서명 : 서명자 확인 결합 정보<br/>\
- 서명자를 확인하고 서명자가 당해 전자문서에 서명을 하였음을 나타는데 이용하기 위해 전자 문서에 첨부되거나 논리적으로 결합된 정보<br/><br/>\
# 전자봉투 : 대칭키, 수신자 공개키 이용 비대칭 키 암호화 메시지<br/>\
- 대칭키를 사용하여 문서의 내용을 암호화한 후 해당 키를 수신자의 공개키를 이용하여 비대칭키로 다시 암호화한 암호화 메시지 <br/><br/>\
# 전자서명 생성과정 <br/><br/>\
<img src = "./img/DigitalSignature.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DigitalEnvelope.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 관련 동향 <br/>\
- 정부는 공인인증서로 인한 사용자의 불편함을 해소하기 위해 전자서명간 차별을 폐지하는 전자서명법 전부개정법률 개정안 통과 (2020.05.)\
',

// 이중서명
'# 정의 : 판매자 구매 정보만, 금융기관 결제 정보만<br/>\
- SET(Secure Electronic Transaction)에서 고객의 프라이버시 보호 및 거래의 정당성 인증을 위해 고안된 전자서명 프로토콜 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/DoubleAuthenticaiton.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
1. Sender <br/>\
<img src = "./img/DoubleAuthenticaitonSender.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Receiver (<font color = "red">123 5423</font>)<br/>\
<img src = "./img/DoubleAuthenticaitonReciver.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 82회 관리 2교시 6번\
',

// 개발보안 방법론
'# 정의 : 개발활동 적용 방법 및 프로세스 모음 <br/>\
- 신뢰성이 위협받는 상황에서도 안전한 소프트웨어를 만들기 위해 요구되는 보안 활동을 적용하는 개발방법 및 개발 프로세스의 모음 <br/><br/>\
# 필요성 <br/>\
- 전자정부 의무 사항 : 행안부고시 2018-21호 / 공공기관이 정보화사업을 추진할 경우 준수 <br/>\
- 보안 약점 사전 제거  <br/>\
- 보안 활동 표준 제공 : 구성 역할 책임 명확 <br/><br/>\
# 구성요소 <br/>\
- 요구사항 분석 : 보안 항목 식별 <br/>\
- 설계 : 위협 모델링, 보안 설계서, 보안 통제 <br/>\
- 구현 : 표준 코딩 정의서, 가이드 준수, 취약점 개선 <br/>\
- 테스트 : 모의 테스트 <br/>\
- 유지보수 : 지속적 개선, 보안 패치 <br/><br/>\
* 라이지움 86회 2교시 5번\
',

// Privacy by Design
'# 정의 : 이용자 데이터 보호 기술 및 정책 적용 <br/>\
- 서비스 기획 - 폐기 단계까지 전체 생애주기에 걸쳐 이용자의 프라이버시와 데이터를 보호하는 기술 및 정책을 적절하게 적용하는 것 <br/>\
- 이용자 프라이버시 통제권이 적절히 보호되면서도 서비스 및 시스템의 편리성을 해치지 않도록 기능을 구현 <br/><br/>\
# 7대 원칙 (사초내균전투존) <br/>\
1. 사전 예방 : 사후조치가 아닌 사전예방 <br/>\
2. 초기 설정 : 초기설정부터 프라이버시 보호조치 <br/>\
3. 내재 설계 : 프라이버시 보호를 내재한 설계 <br/>\
4. 기능 균형 : 프라이버시 보호와 사업기능의 균형 <br/>\
5. 전체 보호 : 개인정보 생애주기 전체에 대한 보호 <br/>\
6. 투명성 : 개인정보 처리과정에 대한 가시성 및 투명성 유지 <br/>\
7. 이용자 존중 : 이용자 프라이버시 존중 <br/><br/>\
# 단계별 점검 수칙 (기설점, 필준 최안투권3추종 위)<br/>\
< 기획 > <br/>\
1. 필요성 확인 : 서비스에 꼭 필요한 개인정보인지 확인 (16조 수집제한)<br/>\
2. 준수사항 확인 : 개인정보 수집시 법적 준수사항 확인 (22조 동의를 받는 방법) <br/><br/>\
< 설계 ><br/>\
3. 최소 처리 : 반드시 필요한 개인정보만 최소한으로 처리 (15조 수집/이용) <br/>\
4. 안전 조치: 개인정보 처리 단계별 적절한 안전조치 적용 (29조 안전조치 의무) <br/>\
5. 투명성 : 개인정보의 처리절차 및 방법을 투명하게 공개 (15조 수집/이용) <br/>\
6. 권리 보장 : 정보주체가 권리 행사를 쉽게 할 수 있도록 보장 (38조 권리행사 방법) <br/>\
7. 3자 제공 위탁 : 개인정보의 제3자 제공 및 위탁시 정보주체에게 명확히 안내 (17조 개인정보제공) <br/>\
8. 추가 수집 방지 : 정보주체가 서비스 해지시, 개인정보 파기 및 추가 수집 방지 (21조 개인정보의 파기)<br/>\
9. 종료 지침 : 사업 종료시 정보주체의 권리 보장 마련 (27조 이전 제한) <br/><br/>\
< 점검 ><br/>\
10. 위험요소 점검 : 서비스 출시전 개인 정보 침해 위험요소 점검 (22조 동의를 받는 방법) <br/><br/>\
# 정책 동향 <br/>\
1. EU-GDPR <br/>\
- 신기술 대응, Privacy by Design 적용 규정 <br/>\
- GDPR 제25조 <br/><br/>\
2. 미국-FTC <br/>\
- 서비스 개발 전단계 프라이버시 강조 <br/>\
- 실체적 원칙과 절차적 원칙 제시 <br/><br/>\
* KPC 94회 4교시 2번\
',

// ISO/IEC 27017
'# 정의 : 27002 기반 클라우드 서비스 정보보호 통제 가이드라인 <br/>\
- 안전한 클라우드 환경과 보안 위협의 최소화를 위해 ISO/IEC 27002 국제 표준에 기반한 클라우드 서비스 제공자와 사용자에게 적용 가능한 클라우드 서비스 정보보보호 통제 가이드라인 <br/><br/>\
# 주변 규격 (<font color = "red">요시프</font>)<br/>\
- ISO 27001 : 조직의 정보보안 관리 요구사항 <br/>\
- ISO 27002 : 정보보안 관리 시스템 지침 <br/>\
- ISO 29100 : 개인정보 프레임워크 <br/><br/>\
# 목적 : 가이드 제공, 사용자 신뢰성 향상 <br/><br/>\
# 구성 (<font color = "red">정조인자 접암물운 통개공사연법</font>) <br/>\
<img src = "./img/ISO27017.png" style = "max-width: 100%; height: auto;"><br/>\
- (5)정보보호 정책 : 정보보호 관리 책임 문서화 <br/>\
- (6)정보보호 조직 : 정보보호 내부 조직 <br/>\
- (7)인적보안 : 고용 전/후 보안지침 <br/>\
- (8)자산관리 : 자산 식별 <br/>\
- (9)접근통제 : 인증 절차 <br/>\
- (10)암호화 : 암호키 독립적 저장, 관리 능력 <br/>\
- (11)물리적 보안 : 리소스 관리, 재사용 정책과 절차 확인 <br/>\
- (12)운영 보안 : 요구사항 충족 <br/>\
- (13)통신 보안 : 클라우드, 고객 환경 분리 <br/>\
- (14)시스템 개발 보안 : 보안 요구사항 명시 <br/>\
- (15)공급망 관리 : 공급망 보안 책임 <br/>\
- (16)정보보호 사고 관리 : 이벤트 발생시 행동 <br/>\
- (17)연속성 관리 : 업무 연속성 요구사항 <br/>\
- (18)법적준거성 : 국내외 법규, 계약 요구사항 파악 <br/><br/>\
# 클라우드 보안 표준 비교 <br/>\
<img src = "./img/ISOIEC27017Around.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* 122회 3교시 2번\
',
  
// ISO 27001
'# 정의 : ISMS / BP<br/>\
- Information Security Management System <br/>\
- 정보보안경영시스템에 대한 국제적인 표준, 전세계 선진기업이 합의한 Best Practice를 활용하여 해당 조직이 정보보호경영을 실행하기 위한 Framework을 확인하고 이를 자사에 적용할 수 있는 지침을 제공 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/ISO27001Overview.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 구성 도메인 <br/>\
0. 도입부 : 일반사항, 프로세스 접근 방법, PDCA 모델 <br/>\
1. 적용 범위 : 요구사항의 적용 범위 <br/>\
2. 인용 규격 : ISO 9001, ISO 17799, ISO Guide 73의 인용내용 <br/>\
3. 용어 정의 : 정보 / 기밀성 / 무결성 / 취약성 / 보호위험 / 위험평가 / 위험관리 <br/>\
4. 정보보안 겸영 시스템 : 요구사항 및 문서화 요구사항 <br/>\
5. 경영 책임 : 경영자 의지 강조, 자원 관리 <br/>\
6. ISMS 내부 심사 : PDCA 모델을 통한 내부 심사 <br/>\
7. ISMS 경영 검토 : ISMS 내부 심사 <br/>\
8. ISMS 개선 : 지속적인 개선, 교정 조치사항, 예방 조치 사항 \
',

// ISO/IEC 27018
'# 정의 : Cloud / PII 보호 / 통제 국제표준 <br/>\
- Cloud 환경에서 개인식별정보(PII : Personally Identifable Information)를 보호하기 위한 통제 국제표준 <br/><br/>\
# 확장 구성 (<font color = "red">개동사수최 공정개참책 보규</font>)<br/>\
- 기본구성 : 27017 동일 <br/>\
- (1)개요 : <font color = "red">퍼블릭 클라우드</font> 개인식별정보(<font color = "red">PII</font>) 보호 개요 <br/>\
- (2)동의와 선택 : <font color = "red">고객의 지시</font> 따라 처리할 것 <br/>\
- (3)사용목적의 정당성 및 규격 : <font color = "red">목적외 사용금지</font>, 명시적 동의 필요 <br/>\
- (4)수집제한 : 수집 목적 <font color = "red">명목화</font>, <font color = "red">목적 외</font> 수집 제한 <br/>\
- (5)데이터 최소화 : 지정 기간 내 <font color = "red">파기</font>, 임시 파일 <font color = "red">삭제</font> 처리 <br/>\
- (6)사용, 보유 및 공개 제한 : 법적 의무시 <font color = "red">사전</font> 고객 내용, 대상, 시간 <font color = "red">고지</font> 의무 <br/>\
- (7)정확성과 품질 : 개인정보 <font color = "red">수집/통제 정확성</font>, 사용 품질 확보 위한 도구 마련 <br/>\
- (8)개방성,투명성 : 계약 체결전 업체 신원 및 <font color = "red">PII 처리 위치</font> 공개 <br/>\
- (9)개인 참여와 접근 : 클라우드 이용자 개인정보 <font color = "red">액세스 권한 주장</font>시 제공 준수 <br/>\
- (10)책임 : PII 무단 접근, 손실 초래시 <font color = "red">고객에게 즉시 고지</font> <br/>\
- (11)정보보호 : 기밀 유지 의무, 하드 카피 작성 제한, 암호화 포함 접근 <font color = "red">제한 조치</font> <br/>\
- (12)개인정보 보호규정 : PII 반품, 양도, 삭제, 정책 보유, 고객에 대해 정책 <font color = "red">정보 제공</font> <br/><br/>\
# Privacy Inforamation Security Ecosystem <br/>\
<img src = "./img/PrivacyEcosystem.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* ITPE 합숙 123회 5일차 관리 1교시 12번\
',

// SDP
'# 정의 : 클라우드 환경 네트워크 접근제어 프레임 워크 <br/>\
- Session Description Protocol <br/>\
- 어플리케이션 연결이 허용되기 이전에 사용자의 상태 및 ID를 기반으로 선인증, 후연결 방식의 신뢰적 보안연결을 제공하는 클라우드 환경의 네트워크 접근제어 프레임 워크 <br/><br/>\
# 특징 <br/>\
- Black cloud <br/>\
- 2007년 미국 정부기관 DISA에서 수행한 컴퓨터 접근 보안방식 <br/><br/>\
# 매커니즘 <br/>\
1. 인증절차 <br/>\
- 접속요청 : OAuth 접속 요청 <br/>\
- 정보전달 : SPA(Single Packet Authorization) 사용자 인증 <br/>\
- 접속허가 : Zero Trust 기반의 접근 및 통제 <br/><br/>\
2. 보안접속 <br/>\
- 보안접속 : IPSec 활용, 터널모드 방식 보안 접속 <br/>\
- 허용서비스 접속 : 인증된 사용자만 서비스 자원 할당 <br/><br/>\
# 구성요소 <br/>\
- SDP Agent : 통신(Controller), 보안접속 처리(Gateway) (PKI, SAML, OAuth)<br/>\
- SDP Controller : 통신여부 결정 (Agent, Gateway) (Zero Trust, RBAC) <br/>\
- SDP Gateway : 연결기능 제공(Controller) (IPSec, SPA(단일 패킷인증) <br/><br/>\
# VPN, SDP 비교 <br/>\
1. 개념 <br/>\
- VPN : 서로다른 양단 네트워크 사설망 기술 <br/>\
- SDP : 선인증, 후연결 방식의 N/W 경계 기술 <br/><br/>\
2. 기술요소 <br/>\
- VPN : 전송모드, 터널모드, IKE, SPD, SAD, AH, ESP <br/>\
- SDP : Agent, Controller, Gateway, IPSec <br/><br/>\
3. 방화벽 운영방식 <br/>\
- VPN : Black List, IP 기반 정적 설정 <br/>\
- SDP : White List, ID 기반 동적 설정 <br/><br/>\
* KPC 95회 1교시 2번\
',
  
// 접근 통제
'<img src = "./img/AccessControl.png" style = "max-width: 100%; height: auto;">\
',
  
// DB 보호 솔루션
'# 접근제어 시스템 <br/>\
1. Agent : DB 서버 자체 설치 (접근 제어, 로깅) <br/>\
2. Gate way <br/>\
- Proxy : 모든 IP 경유 방식 <br/>\
- In-Line : Server - Client Network 사이, 중소형 적절 <br/>\
3. Snipping : Test Access Port 장비, 미러링 통한 패킷 분석 <br/><br/>\
# DB 암호화 방식 <br/>\
1. API <br/>\
<img src = "./img/DB_Solution1.png" style = "max-width: 100%; height: auto;"><br/><br/>\
2. Plug in <br/>\
<img src = "./img/DB_Solution2.png" style = "max-width: 100%; height: auto;"><br/><br/>\
3. TDE(Transfer Data Encryption) <br/>\
<img src = "./img/DB_Solution3.png" style = "max-width: 100%; height: auto;"><br/><br/>\
4. OS 암호화 <br/>\
<img src = "./img/DB_Solution4.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 암호화 방식 비교 <br/>\
<img src = "./img/DB_Solution5.png" style = "max-width: 100%; height: auto;"><br/><br/>\
',
  
// Bell-Lapadula
'# 정의 : 기밀성 중점 모델 / MAC 기반 <br/>\
- 정보를 극비, 비밀, 미분류로 분류하여, 접근 통제하는 모델 <br/><br/>\
# 보안규칙 <br/>\
<img src = "./img/NRUNWD.png" style = "max-width: 100%; height: auto;"><br/>\
- 단순 보안 규칙 : No Read Up<br/>\
- * Property Rule : No Write Down <br/>\
- String * Property Rule : 동일 레벨에 대해서만 R/W 가능 <br/><br/>\
* 아이리포 23회 1교시 8번 \
',

// Biba
'# 정의 : Bell LaPadula + 불법 수정 방지 / 무결성 중점 모델 <br/>\
- Bell LaPadula 모델에서 불법 수정 방지 내용을 추가로 정의한 접근 통제 모델 <br/><br/>\
# 보안규칙 <br/>\
<img src = "./img/NRDNWU.png" style = "max-width: 100%; height: auto;"><br/>\
- 단순 무결성 규칙 : No Read-Down <br/>\
- 스타 무결성 규칙(* Integrity Axiom) : No Write-Up <br/><br/>\
* 아이리포 23회 1교시 8번\
',

// Clark and Wilson
'# 정의 : 보안 접근 통제 모델 / 불법 수정 방지 / 금융, 회계 <br/>\
- 무결성 중심 상업적 모델 <br/>\
- 최초의 상업환경에 적합하게 개발된 불법 수정 방지를 위한 보안 접근 통제 모델, 금융자산의 관리, 회계등의 분야에 주로 적용 <br/><br/>\
# 특징 <br/>\
- 상업적 응용 보다, 현실적인 무결성 보호 접근 제어 모델 <br/>\
- 무결성이 유지되도록 제한된 방식으로 데이터 조작 <br/>\
- 사용자간 임무를 확실하게 분리 (인증하는 사람은 해당 거래 참여 불가)<br/><br/>\
# 구성요소 <br/>\
<img src = "./img/CW_Deetail.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Access Tripe : 주체, 객체, 프로그램 <br/><br/>\
<img src = "./img/CW_Model.png" style = "max-width:100%; height:auto;">\
',
  
// BEC
'# 정의 : CEO 사칭 공격 <br/>\
- CEO 등 고위 경영진을 사칭하여 직원에게 자금을 요청하거나 잘못된 송금을 유도하는 공격 <br/><br/>\
# 프로세스 <br/>\
- 감염 : E-Mail 해킹후 기업간 내용확인 <br/>\
- 전파 : 유사 E-Mail Addreess로 위조된 인보이스 송부 <br/>\
- 피해 : 계좌 송금 <br/><br/>\
# 핵심 기술 <br/>\
1. 기업 업무 환경 추적 <br/>\
- Fishing : Watering Hole, Open Directory 공격, Spam E-mail <br/>\
- Key Logging : E-Mail Server Hacking, Spoofing, Sniffing <br/>\
2. 후속 공격 수행 <br/>\
- 악성 코드 설치 : DBD, XSS, URL Redirection <br/>\
- 자금 탈취 : 사회공학 공격, CryptoCracking <br/><br/>\
# 대응 기술 <br/>\
- CDR(Content Disarm and Reconstruction) : 컨텐츠 재조립 <br/>\
- DKIM(DomainKeys Identified Mail) : 도메인 인증 사칭 여부 및 위변조 탐지 <br/>\
- SPF(Sender Policy Framework) : 메일 서버 등록제 <br/>\
- DMARC(Domain-based Message Authentication, Reporting and Conformance) : 도메인 기반 메시지 인증/보고/검증 <br/><br/>\
* KPC 93회 1교시 4번\
',
   
// Spectre
'# 정의 : 다른 사용자 프로그램의 메모리 열람이 가능한 CPU 취약점 <br/>\
- 프로세서로 하여금 실행해서는 안되는 코드를 실행하도록 유도해 다른 어플리케이션 메모리 공간에 존재하는 정보를 유출시킬 수 있는 CPU 취약점 <br/><br/>\
# Keyword : 추측실행, 분기예측, Bound Check Bypass, Branch Target Injection <br/><br/>\
# 유형 <br/>\
1. Spectre 1 (CVE-2017-5753) <br/>\
- Over Range Read <br/>\
- Bound Check Bypass 취약점 <br/><br/>\
2. Spectre 2 (CVE-2017-5715) <br/>\
- 해커 원하는 위치 분기 <br/>\
- Branch Target Injection <br/><br/>\
# Meltdown Spectre 비교 <br/>\
<img src = "./img/MeltdownSpectre.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 1교시 9번\
',
   
// Meltdown
'# 정의 : CPU 권한상승 공격 <br/>\
- Intel x86 아키텍처 컴퓨터 메모리 데이터 보안의 공격으로 비순차적 명령어 처리 OoOE(Out-of-order execution) 기술을 악용하여 사용자 어플리케이션을 통해 운영체제의 시스템 메모리에 접근할 수 있는 취약점 <br/><br/>\
# 유형 <br/>\
- CVE-2017-5754 : 불량 데이터 캐시 적재 <br/><br/>\
# 시나리오 <br/>\
- A.exe 커널 메모리 영역 사용중 <br/>\
- B.exe 악성코드 구동 통한 스니핑 <br/>\
- 일반 사용자 작업정보 습득 <br/><br/>\
* KPC 관리 114회 합숙 2일차 1교시 3번\
',
  
// Buffer Overflow
'# 정의 : 버퍼 침법 / 덮어쓰기 / Return Address / 코드의 주소값 변조, Shell 획득, Dos <br/>\
- 프로그램이 실행될 때 입력받는 값이 버퍼를 가득 채워 버퍼 이후의 공간을 침법하는 공격 <br/><br/>\
# 유형 <br/>\
- <font color = "red">스택</font> 버퍼오버플로우 : SetUID가 설정된 <font color = "red">루트 권한</font> 프로그램을 공격 <br/>\
- <font color = "red">힙</font> 버퍼오버플로우 : 레코드의 <font color = "red">동적 데이터</font> 저장 메모리 공격 <br/><br/>\
# 공격 절차 <br/>\
1. 버퍼공간을 명령어로 <font color = "red">채움</font> <br/>\
2. Return ptr <font color = "red">Overwrite</font> <br/>\
3. /bin/sh 호출 악성 <font color = "red">쉘 코드 삽입</font> <br/><br/>\
# 대응 방안 <br/>\
1. 컴파일 시간 방어 <br/>\
- MS /GS 옵선 : 스택 영역과 데이터 영역에 <font color = "red">쿠키(임의값) 삽입</font> <br/>\
- 리눅스 Canary(검사기능) : 버퍼 오버플로우 발생시, <font color = "red">CANARY DATA가 변조</font>되어 오버플로우 경고 후 프로그램 종료 <br/>\
- 시큐어 코딩 : strncat(), strncpy(), fgets(), fscanf(), vfscanf(), snprintf(), vnsprintf() / 메모리 사이즈 할당 가능한 <font color = "red">라이브러리</font> 사용 <br/><br/>\
2. 스택보호 매커니즘 <br/>\
- Stack Guard : 함수 호출시 <font color = "red">RET 앞에 canary</font> 값 주입, 종료시 변조 여부 확인 <br/>\
- Stack Shield : 함수 시작시 복귀 주소를 <font color = "red">Global RET</font>라는 특수 스택에 저장, 종료시 저장된 값과 스택의 RET 값 비교 <br/><br/>\
3. 실행시간 방어 <br/>\
- NO Execure : 데이터 실행시간 방어, <font color = "red">AMD NX</font>(Never eXecute bit), <font color = "red">MS DEP</font>(Data Execution Prevention), Intel eXecution Disable(XD) 등은 세그먼트에서 실행방지 <br/>\
- ASLR(Address Space Layout Randomization) : 각 프로세스의 내부 스택이 <font color = "red">임의의 다른 곳</font>에 위치하도록 변경 <br/>\
- NOP Sled : 스택 버퍼 맨 끝부분 쉘코드 위치, 버퍼 앞 부분에 <font color = "red">의도적으로 NOP</font>(No Operation) 기계어 연속 배치 <br/><br/>\
* KPC 90회 응용 2교시 2번\
',
  
// Race Condition
'# 정의 : 임시 파일 / 심볼릭 링크 <br/>\
- 실행되는 프로세스가 임시파일을 만드는 경우 끼어들어 임시파일을 목적파일로 연결(심볼릭 링크)하여 악의적 행위를 하는 공격 <br/><br/>\
# 공격 절차 <br/>\
1. 일반 권한 <br/>\
- 프로그램 실행 <br/>\
- SetUID로 인한 프로세스 권한 상승 <br/><br/>\
2. 관리자 권한 <br/>\
- 임시파일 이름의 심볼릭 링크 수행 <br/>\
- 목표 파일 변경 <br/>\
- 프로그램 동작 및 임시파일 처리 <br/>\
- 프로그램 종료 <br/><br/>\
# 대응 방안 <br/>\
1. 컴파일시 방어 <br/>\
- 심볼릭 링크 체크 코드파일 추가 : 외부 파일 코드 컴파일시 S_ISLINK() 함수 구현 <br/><br/>\
2. 시스템 설정 방어 <br/>\
- 권한여부 체크 : 임시 파일 접근전, 심볼릭 링크 설정 및 권한에 대한 검사 추가 <br/>\
- 임시파일 생성 제어 : OS 설정을 통해 임시파일 생성 못하도록 제어 <br/>\
- UMASK 설정 : 최하 022 정도로 유지하여 임시로 생성한 파일이 공격자에 의해 악의적 삭제 방지 <br/><br/>\
* KPC 90회 응용 2교시 2번\
',
  
// Format String
'# 정의 : 그대로 사용 / 메모리 접근, 쉘 실행 공격 <br/>\
- 외부로부터 입력된 값을 검증하지 않고 입출력 함수의 포맷 스트링을 그대로 사용하여 메모리 내용을 읽거나 악성 쉘을 실행시키는 공격 <br/><br/>\
# 공격 절차 <br/>\
1. char bleh[80] = "aaaa %x %x"; / print(bleh); <br/>\
2. 미존재시, 주소 대입 버그 발생 (%x) / 출력값 : aaaa cccccccc cdcdcdcd <br/>\
3. RET 값을 쉘 코드의 주소값으로 덮어 쉘 실행 <br/><br/>\
# 대응 방안 <br/>\
- 코드구현 : 포맷스트링 지정 : printf(), fprintf(), sprintf(), snprintf() 출력함수 명확히 구분 <br/>\
- 시스템 방어 : 시스템 패치 : 컴파일단 포맷스트링 검사, 경고기능 OS 버전 패치 <br/><br/>\
* KPC 90회 응용 2교시 2번\
',
  
// FIDO
'# 정의 : ID/PW -> 다양한 생체 인식 기반 / 인증 시스템 <br/>\
- Fast Identify Online <br/>\
- 온라인 환경 생체 인식 기술 활용, 인증 프로토콜과 인증 수단 분리된 Fido Alliance 제안 인증 프로토콜 <br/><br/>\
# 이력 <br/>\
- 1.0 (2014.12.) : Device 저장, UAF, U2F <br/>\
- 2.0 (2018.05.) : FIDO 1.0 플랫폼화 / 웹 확장, WebAuthn, CTAP <br/>\
<font color = "red">* UAF(Universal Authentication Framework) : 지문, 음성, 얼굴인식 등 사용자 고유의 생체 정보 인식 <br/>\
* U2F(Universal Second Factor) : 1차인증 후 1회성 보안키 동글 2차인증 <br/>\
* CTAP(Client to Authenticator Protocol) : USB, NFC, BT 이용, 운영체제나 웹 브라우저 등과 인증자 연동 </font><br/><br/>\
# 구성요소 (클클A인) <br/>\
- FIDO Server : 키 등록 관리 검증 <br/>\
- FIDO Client : 인증자 필터링, ASM RP Client 중계 <br/>\
- ASM(Authenticator Specific Module) : Client 요청 인증자 전달 중계 <br/>\
- 인증자 : 생체 인증, 사용자 단말 로컬 인증 <br/><br/>\
# Fido 1.0, 2.0 구조비교 <br/>\
<img src = "./img/FIDO_Struct.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 비교 <br/>\
<img src = "./img/FIDO_Compare1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/FIDO_Compare2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 118회 관리 3교시 2번 \
',

// UAF 기술 표준
'# 개념도 <br/>\
<img src = "./img/U2FStandard.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술표준 <br/>\
1. FIDO 공통 <br/>\
(1) 아키텍처 : 사용 시나리오 <br/>\
(8) 공통상수 : 공통 사용 상수 <br/>\
(10) 보안참조 : 보안 분석 내용 <br/>\
(11) 용어해설 : 용어 및 약어 <br/><br/>\
2. UAF Protocol <br/>\
(2) 프로토콜 : Message 규격, 절차 <br/>\
(9) App ID, Facet : 기관 대표 ID, 서로다른 앱 하나 등록키 사용 <br/><br/>\
3. FIDO User Device <br/>\
(3) 응용 API : App FIDO 이용 <br/>\
(4) 인증 API : 인증 장치 접근 표준화 방법 <br/>\
(5) 인증 명령 : 다양한 형태 구현 <br/><br/>\
4. 인증장치 Meta Data <br/>\
(6) Meta Data : 인증방법, 명령어 정의 <br/>\
(7) Meta Data Service : 서비스기관 메타 데이터 접근 <br/><br/>\
* 118회 관리 3교시 2번\
',
  
// SSO
'# 정의 : Single Sign-On <br/>\
- 최초 사이트 로그인 이후 별도의 추가 인증 절차 없이 연동 시스템에서 자동 로그인되는 보안 서비스 <br/><br/>\
# 유형 <br/>\
- Delegation : 인증 대행 방식 (창 좌표 기억 자동 값 입력) <br/>\
- Propagation : 인증정보 전달 방식 <br/><br/>\
# 프로토콜 종류 <br/>\
- Kerberos : DES 알고리즘, Ticket 기반 <br/>\
- Open ID : 사용자 아이디/패스워드 관리 편의성 개선 프로토콜 <br/>\
- SAML : Assertion 정보 교환 기반 프로토콜 <br/>\
- OAuth : Resource Owner, Server 근간, Acccess Token 기반 프로토콜 <br/><br/>\
* 라이지움 89회 관리 2교시 6번\
',
  
// DeepLink
'# 정의 : 모바일 웹상에 있는 그림을 클릭할 경우 기기 내 관련 앱이나 사전에 정의된 특정 웹페이지가 실행되는 모바일 기술 <br/><br/>\
# 취약점 <br/>\
- 검증부재 URL 링크 접속 <br/>\
- 앱 자바 스크립트 권한 인증 부재 <br/><br/>\
# 공격 방식 <br/>\
- 조작한 링크 접속 <br/>\
- Origin App 실행, 앱내 자바스크립트 권한 부여 <br/>\
- 공격자 사이트에 개인정보 전달 <br/><br/>\
# 대응방안 <br/>\
1. URI 파싱시 취약점 함수 사용 금지 <br/>\
- getQueryParameter("type"); <br/><br/>\
2. 인가된 URI에만 자바인터페이스 권한 부여 <br/>\
<img src = "./img/DeepLinkAction2.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. 도메인 검증을 이용한 우회 방지 <br/>\
<img src = "./img/DeepLinkAction3.png" style = "max-width:100%; height:auto;"><br/><br/>\
4. URI.parse 함수 사용시 특수문자 필터링 필요 <br/>\
<img src = "./img/DeepLinkAction4.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 4교시 5번\
',
  
// Zero Trust 보안 모델
'# 정의 : 모든 자산 위험 요소 / 무신뢰 기반 <font color = "red">과립형</font> 경계 보안 모델 <br/>\
- 모든 네트워크 자산을 위험 요소로 전제, 모든 데이터 모니터링, 접근 경로 통제, 액세스 권한 제어 통한 무신뢰 기반 과립형 경계 보안 모델 <br/><br/>\
# 등장배경 <br/>\
- 단위(Perimeter Security) : IPS/IDS, Infra <br/>\
- 통합(Data Seciruty) : ISAC, Traffic,취약점 관리 <br/>\
- 빅데이터(Trust Security) : 로그, 이벤트, 패킷 연동 <br/>\
- 인공지능(Zero Trust) : SOAR, ML Based Analysis <br/><br/>\
<img src = "./img/ZeroTrustModelOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구현모델 <br/>\
1. Network Micro-Segment <br/>\
- 정의 : 네트워크, 자산, 사용자, App, 논리적 그룹 분류 / 최소한 접근제어 <br/>\
- 장점 : Lateral Movement 방어 능력 우수 <br/>\
- 단점 : 이행 어려움, 확장성 낮음, 복잡성 <br/><br/>\
2. SDP(Software Defined Perimeter <br/>\
- 개념 : 장치 인증, ID 기반 접근 결합 형태 / Controller 신원 확인, SDT(Tunnel) 유사 동작 <br/>\
- 장점 : 레거시 원격 접속 방식, SSL, VPN 유사, 익숙한 사용 가능 <br/>\
- 단점 : 제한된 아키텍처(Tunnel), 서비스 삽입 불가, 레거시 인증 적용 복잡 <br/><br/>\
3. IAP(Identity Aware Proxy) <br/>\
- 개념 : SDP 유사, Proxy 계층 사용, 특정 프로그램 인증, 보안 접근 제공 <br/>\
- 장점 : App 최소 권한 제공, 별도 App 설치 불필요 <br/>\
- 단점 : 네트워크 중심 솔루션 비해 3rt Party 초기 사전작업 어려움 <br/><br/>\
# 구축 절차 <br/>\
- 중요 데이터 식별 : 민감도 기준 네트워크 분류 <br/>\
- 민감데이터 흐름 매핑 : 종속 네트워크 시스템 개체 매핑 <br/>\
- 미세 경계 설계 : 민감 데이터 기준 정의, 규칙 기반 자동화 <br/>\
- 시스템 모니터링 : 비즈니스 적합 배포 모델 결정 <br/>\
- 보안자동화, 오케스트레이션 도입 : 자동 정책 정의, SOAR 지원여부 확인 <br/><br/>\
# 적용 사례 <br/>\
- Forrester(ZeroTrust) : Cloud, Mobile 부상, 최초 ZT 시작 / Micro Segmentation <br/>\
- Google(BeyondCorp) : ZT 대표적 구현 사례, Cloud 인증,인가,암호화 / IAP <br/>\
- Gartner(CARTA) : DevSecOps 사람중심 보안 기술 적용 <br/>\
- Forrester(ZTX Framework) : ZTX, NGFW, MFA 액세스 위협 감소 <br/><br/>\
# 고려사항 <br/>\
- On-Premise 연계 방안 점진적 적용 <br/>\
- 업무 R&R 분석 및 Permission 최소화 <br/>\
- 일원화된 모니터링 체계 (SOAR, EDR, SIEM) <br/><br/>\
# 기술요소 <br/>\
- 데이터 격리 : CDR, 웹/이메일 랜더링 <br/>\
- 트래픽 감시 : EDR, IPS, WAF <br/>\
- 인증 : OTP, FIDO <br/><br/>\
# Inner Trust 모델 비교 <br/>\
<img src = "./img/ZeroTrustInnerTrust.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 응용 1교시 11번<br/>\
* 아이리포 24회 관리 1교시 11번\
',
  
// 재택,원격근무 정보보호 6대 실전 수칙
'# 정의 : KISA, 과기정통부, 사용자, 보안관리자 <br/>\
- 과학기술정보통신부에서 제시한 재택,원격근무 시 기업의 해킹 피해를 예방하기 위하여 사용자와 보안관리자가 지켜야 할 정보보호 실전 수칙 <br/><br/>\
# 구성 <br/>\
1. 사용자 실전 수칙 <br/>\
- 개인 PC 최신 보안 업데이트 <br/>\
- 백신 프로그램 업데이트 및 검사 <br/>\
- 공유기 보안 설정 <br/>\
- 회사메일권장, 개인 메일 사용주의 <br/>\
- 불필요한 웹사이트 이용 자제 <br/>\
- 파일다운로드 주의 <br/><br/>\
2. 보안관리자 실전 수칙 <br/>\
- 원격 근무 시스템(VPN) 사용 권장 <br/>\
- 재택근무자 대상 보안지침 마련 및 보안인식 제고 <br/>\
- 재택근무자의 사용자 계정 및 접근 권한 관리 <br/>\
- 일정 시간 부재시 네트워크 차단 <br/>\
- 원격 접속 모니터링 강화 <br/>\
- 개인정보, 기업정보 등 데이터 보안 <br/><br/>\
* 라이지움 88회 관리 1교시 10번\
',
  
// CDR
'# 정의 : Active Content / 제거, 비활성화 / 위협 봉쇄 기술 <br/>\
- Contents Disarm & Reconstruction <br/>\
- 파일 내 실행 가능한 Active Content를 제거하거나 비활성화하여, Active Content를 통해 발생할 수 있는 잠재적 위협 원천 봉쇄 기술 <br/><br/>\
# 매커니즘 <br/>\
- 문서 포맷 확인 : 확장자, 헤더 검사 / Signature 이상 여부 <br/>\
- 백신 검사 : 구조 분석, 컨텐츠 검사 / Known 위협 제거 <br/>\
- 컨텐츠 분해 : Macro, ActiveX, Script, Embedded / Active Content 분류, 제거 <br/>\
- 컨텐츠 재구성 : 원본 동일 문서 생성 / Data Cleansing <br/><br/>\
# 기술 수행 방식 <br/>\
- 변경 : Visible 그대로, Macro, Javascript 비활성화 / 시간 절약 / 기능 감소 <br/>\
- 제거 : 별도 임베디드(글꼴, 실행파일) 제거 / 정확한 구조 파악 / 컨텐츠 손실 <br/>\
- 전환 : 파일을 다른 형식으로 전환 / 쉬운 조치 / 변환 과정 비용 <br/><br/>\
* 121회 관리 1교시 10번\
',

// CWPP
'# 정의 : 가상머신, 컨테이너 / 서버 워크로드 / 보안 솔루션 <br/>\
- Cloud Workload Protection Platform <br/>\
- 가상머신, 컨테이너 등 서버 워크로드의 가시성 및 공격 방어를 위한 에이전트를 바탕으로 한 보안 솔루션 <br/><br/>\
# Cloud 보안 개요 <br/>\
<img src = "./img/CloudSecurityOverview.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* UEBA(User and Entity Behavior Analytics) : 사용자 및 개체 행동 분석 <br/>\
* DLP(Data loss prevention SW) : 데이터 손실 방지 소프트웨어 </font><br/><br/>\
# 구성요소 (<font color = "red">IMW ECN</font>)<br/>\
1. 관리 측면 <br/>\
- System Ingergrity : 시스템 통합, <font color = "red">보안관리 일원화</font> <br/>\
- System Monitoring : 시스템 <font color = "red">이상 발생, 정상 동작</font> 여부 <br/>\
- Application Whitelisting : 현재 승인, 사용중인 어플리케이션 <font color = "red">기준 준수 확인</font> <br/><br/>\
2. 기술 측면 <br/>\
- Exploit Protection : 자체 <font color = "red">취약점</font> 방어 <br/>\
- Workload Configuration : <font color = "red">서버 워크로드 설정</font> 통한 대응 <br/>\
- Network Segmentation : <font color = "red">네트워크 분할</font> 통한 위협 대응 <br/><br/>\
# 전체 Framework <br/>\
<img src = "./img/CloudSecurityFramework.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 122회 합숙 1일차 2교시 1번 \
',

// CSPM
'# 정의 : 컴플라이언스, 정책 / 클라우드 인프라 위협요소 / 예방, 탐지, 대응, 예측 / 지속적 관리 솔루션 <br/>\
- Cloud Security Posture Management <br/>\
- 컴플라이언스 또는 기업 보안 정책에 따라 클라우드 인프라의 위협 요소를 예방, 탐지, 대응 및 예측하여 클라우드 위험을 지속적으로 관리하는 솔루션 <br/><br/>\
# 핵심 기능 <br/>\
- 지속성 : 지속적 변화 환경 체크 <br/>\
- 가시성 : 통합, Dashboard <br/>\
- 신속성 : 위반 발생시, 자동 대응 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/CSPM_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 (<font color = "red">COP DRT</font>) <br/>\
1. 관리 측면 <br/>\
- Compliance Assesment : <font color = "red">이슈 관리 평가</font> <br/>\
- Operational Monitoring : PaaS, SaaS <font color = "red">운영 데이터</font> 모니터링 <br/>\
- Policy Enforcement : <font color = "red">기업 요구 정책</font> 적용 수행 <br/><br/>\
2. 기술 측면 <br/>\
- DevSecOps Integration : <font color = "red">내부 Cloud</font> 활용 DevSecOps 완성 <br/>\
- Risk Identification : <font color = "red">발생 가능</font> 주요 위험 식별 및 관리 <br/>\
- Threat Protection : <font color = "red">내/외부</font> 위협 요소 제거 <br/><br/>\
# CSPM, CASB, CWPP 비교 <br/>\
<img src = "./img/CSPM_CASB_CWPP_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 1교시 4번 \
',

// CASB
'# 정의 : 이용자, 서비스 사이 / 독립적 보안 SW <br/>\
- Cloud Access Security Broker <br/>\
- 클라우드 서비스 이용자와 클라우드 서비스 사이에 위치하여 독립적으로 보안 기능 수행하는 SW <br/><br/>\
# 구성도 <br/>\
<img src = "./img/CASB_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 핵심기능 <br/>\
- 서비스 검색 및 위험 평가 : Risk Assesment <br/>\
- 암호화 : 기밀성, 가용성 보장 <br/>\
- 접근 통제 : 정책, 모델, 매커니즘 <br/>\
- 데이터 손실 방지 : 데이터 유출 방지 <br/>\
- 로깅 및 감사 : 추적 및 무결성 보장 <br/>\
- 이상 탐지 : 행위적 침해 대응 <br/><br/>\
# 유형 (<font color = "red">AAPP</font>) <br/>\
1. SW형 <br/>\
- Agent CASB : 서비스 사용자 단말기 설치 <br/>\
- API CASB : 서비스앱 개발사 직접 적용 <br/><br/>\
2. HW형 <br/>\
- Private CASB : Outbound Traffic Check 위치 <br/>\
- Public CASB : Cloud Servie Platform 내부 <br/><br/>\
# 유형별 비교 <br/>\
<img src = "./img/CASB_Type_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 118회 합숙 4일차 1교시 3번 \
',

// 사이버 레질리언스
'# 정의 : 사이버 공간상 위협 / 조직 모굪 성과 / 전달할 수 있는 기업의 능력 <br/>\
- 사이버 공간상에서 알려지거나 예측 가능한 공격, 알려지지 않았거나 예측 불가능한 위협 등의 예상 밖의 위험들이 발생시키는 부정적인 영향에도 불구하고 조직의 목표 성과를 전달할 수 있는 기업의 능력 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/CyberResilienceOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성 요소 <br/>\
- 비즈니스 영향 분석 : 위협 요인 분석 기반 우선순위 도출 <br/>\
- 보안 정책 통제 : 비즈니스 목적 설명 및 문서활르 통한 보안 기틀 마련 <br/>\
- 종합적 테스트 정책 : 지속적 테스트와 측정 통한 보안 정책 검증 <br/>\
- 매니지드 보안 도구 설치 : 비즈니스 이슈 관련 도구, 서비스에 대한 투자 <br/>\
- 사이버 복구 계획 : 보안 이슈 발생 대응 절차 및 신속한 복구 계획 <br/><br/>\
# 확보 단계 <br/>\
- 위협 평가 역량 확보 : 기업 상화이에 맞는 위험 평가 지표 개발 <br/>\
- 사이버 보안 방법 도입 : 사람, 프로세스, 기술 투자 활동, 고도화 사이버 공격 인식<br/>\
- 위험 기반 계획 : 위협 발생 후 신속한 정상화 가능 계획 수립 <br/>\
- 외부 위협으로부터 보호 : 외부 이해 관계 업체에서 전달되는 공격 보호 <br/>\
- 내부 위험 최소화 : 이동식 미디어 제한, 퇴사자 규칙, 내부자 위협 신호 감지 <br/>\
- 보안 문화 유지 : 교육, 보안정책 개선, SLA 개선 <br/><br/>\
# 사이버 보안, 레질리언스 비교 <br/>\
<img src = "./img/CyberSecurityCyberResilienceCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 합숙 124회 2일차 관리 1교시 4번\
',

// Reverse Turing Test
'# 정의 : 사람, 컴퓨터 구별 사용 기술 <br/>\
- 어떤 사용자가 실제 사람인지 컴퓨터 프로그램인지를 구별하기 위해 사용되는 기술 <br/><br/>\
# 종류 / 라이선스 주체 <br/>\
- CAPTCHA : 임의 문자, 숫자 / 무료 / 카네기 멜론(2000) <br/>\
- reCAPTCHA : 고문서 단어 + 컴퓨터 단어 / 고문서 프로젝트 / 카네기 멜론(2007) <br/>\
- noCAPTCHA reCAPTCHA : 나는 로봇이 아니다 / 사진 제시 / 구글(2014) <br/><br/>\
# 절차 <br/>\
- 임의 숫자/문자 생성 : 컨텐츠/게시판 접근시 입력할 문자/숫자 임의 생성 <br/>\
- 의도적 왜곡 추가 : 생성된 문자/숫자 의도적 비틀거나 변형 <br/>\
- 입력 : 사용자가 생성된 문자 확인 후 입력 <br/>\
- 판별 : 승인/거부 판단 <br/><br/>\
* ITPE 합숙 124회 3일차 관리 1교시 6번\
',

// Turing Completeness
'# 정의 : 튜링 기계 계산 능력 성질 <br/>\
- 어떤 프로그래밍 언어나 추상 기계등이 튜링 기계와 동일한 계산 능력을 가지는 성질 <br/><br/>\
# 특징 <br/>\
- 성립 조건 : 보편 튜링 머신과 튜링 동치인 경우 완전성 성립 <br/>\
- 현실 조건 : 현실적으로는 기억장치가 유한, 느슨한 튜링 완전성 가짐 <br/><br/>\
# 사례 <br/>\
1. 고전적 항목 <br/>\
- 해석기관 : 찰스 배비지 설계, 튜링 완전성 가진 최초 기계 간주 <br/>\
- 람다 대수 : 람다 대수로 할 수 있는 계산, 튜링 기계 로 가능 역도 성립 <br/><br/>\
2. 범용 프로그래밍 언어 <br/>\
- C, Pascal : 절차 지향 언어 <br/>\
- Java, C++, C# : 객체 지향 언어 <br/>\
- Python, R : 데이터 분석, 다목적 언어, JS 유사 <br/><br/>\
3. 블록체인 스마트계약 언어 <br/>\
- Solidity : 이더리움 동작, JS 유사 <br/>\
- Serpent : 이더리움 동작, Python 유사 <br/>\
- LLL : Low-level Lisp-like Language, Assembely 유사 <br/><br/>\
* 라이지움 90회 관리 1교시 4번\
',

// 하인리히 법칙
'# 정의 : 1 : 29 : 300 <br/>\
- 대형사고 1건이 일어나기 전에 그와 관련된 경미한 사고가 29번 발생하고, 이에 앞서 300건 이상의 사소한 징후가 나타나는 사고 전조 현상에 관한 법칙 <br/><br/>\
# 재해예방 4원칙 <br/>\
- 손실 우연의 법칙 <br/>\
- 원인 연쇄의 법칙 <br/>\
- 예방 가능의 원칙 <br/>\
- 대책 강구의 원칙 <br/><br/>\
# 보안 대응 모델 <br/>\
- 1 번의 대형 사고 : CERT / 침해사고 분석 / 신속 조치, 복구, 원인 분석 <br/>\
- 29 번의 작은 사고 : CERT, 보안관제 / 초동대응, 상세분석, 위협 헌팅 / 정확 분석, 신속 대응 <br/>\
- 300번의 사소한 징후 : CERT, 보안관제 / 모니터링, 초동 분석, 취약점 점검, 모의 해킹 / 신속 탐지, 원인 제거 <br/><br/>\
* ITPE 8회 관리 3교시 5번\
',

// SOAR 
'# 정의 : 사이버 위협 대응 수준 자동 분류 / 표준화 업무 프로세스 / 차세대 보안 자동화 플랫폼 <br/>\
- Security Orchestration Automation and Response <br/>\
- 다양한 사이버 위협에 대해, 대응 수준을 자동으로 분류하고 표준화된 업무 프로세스에 따라 보안 업무 담당자와 솔루션이 유기적으로 협력할 수 있도록 지원하는 차세대 보안 자동화 플랫폼 <br/><br/>\
# Friend : SIEM, AI, EDR, EXR, SOAR <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SOAR.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요기능 <br/>\
1. SOA <br/>\
- Security Orchestration and Automation <br/>\
- 기능 : 보안 위협 자동대응, 이기종 보안, 정책 반영 관리 <br/>\
- 특징 : Play book, FW, IDS/IPS, EDR, Configuration 관리 <br/><br/>\
2. TIP <br/>\
- Threat Intelligence Platform <br/>\
- 기능 : 위협대응 플랫폼(기존 Ticket 시스템), 사고대응 분석, 일련 과정 관리 <br/>\
- 특징 : 보안 위협 처리 이상징후 분석, Tier 별 R&R, Incident Response <br/><br/>\
3. SIRP <br/>\
- Security Incident Response Platform <br/>\
- 기능 : 보안위협요소 대응,관리, Thread Artifact, IoC, Intelligence <br/>\
- 특징 : 위협 프로파일링, APT 공격 파악 <br/><br/>\
# 도입시 고려사항 <br/>\
- 업무 프로세스 명확화 : 정해진 업무프로세스 Workflow, 도입 전, 세부 업무 프로세스 정의 <br/>\
- 자동화 Risk 고려 : 모든 업무 자동화 어려움, Workflow 반영 Risk <br/>\
- 지속적 유지 관리 : 도입후 운영 충분한 대비 <br/><br/>\
* ITPE 8회 관리 3교시 5번\
',
);
