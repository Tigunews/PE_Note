var question = question.concat(
'암호학',
'[암호학]- 블록 암호화',
'[블록암호]- ECB',
'[블록암호]- CBC',
'[블록암호]- PCBC',
'[블록암호]- CFB',
'[블록암호]- OFB',
'[블록암호]- CTR',
'[공개키]- 디피헬만 알고리즘',
'보안이슈, 대응방안',
'SW 보안 약점',
'[공격기법]- XSS',
'시큐어코딩',
'[시큐어코딩]- TouchPoints 기법',
'[랜섬웨어]- 종류',
'[랜섬웨어]- DBD',
'[랜섬웨어]- 드라이브 바이 크립토마이닝(drive-by cryptomining)',
'[랜섬웨어]- 로키 랜섬웨어(Locky Ransomware)',
'[랜섬웨어]- 워너크립터',
'[랜섬웨어]- 독스웨어(doxware)',
'[랜섬웨어]- 배드래빗(Bad Rabbit)',
'[랜섬웨어]- 사이버범죄 서비스(CaaS, Cybercrime as a Service)',
'[랜섬웨어]- 갠드크랩(GandCrab) 랜섬웨어',
'크라임웨어(Crimeware)',
'멀버타이징(Mulvertising)',
'피싱(Phishing)',
'[피싱(Phshing)]- 액티브 피싱',
'[피싱(Phshing)]- 스피어 피싱',
'파밍(Pharming)',
'스미싱(Smishing)',
'스니핑(Sniffing)',
'스푸핑(Spoofing)',
'스턱스넷(stuxnet)',
'APT',
'[APT]- 래터럴 무브먼트',
'SQL Injection',
'워터링 홀 공격(Watering Hole Attack)',
'루트킷(Rootkit)',
'포맷 스트링 공격',
'카멜레온 바이러스',
'스테이지 프라이트(Stage Fright)',
'널 포인터 디레퍼런스(Null Pointer Dereference)',
'베놈(VENOM) 취약점',
'Atom Bombing',
'컴퓨터 포렌식(Computer forensics) = 디지털 포렌식',
'WNAC',
'소프트웨어 개발보안 가이드',
'클라우드 컴퓨팅 보안',
'CVE',
'암호화 기술',
'[암호화 기술]- 양자암호통신',
'[양자 보안]- QKD',
'[양자 보안]- PQC',
'검색가능암호화',
'[검색가능암호화]- PSES',
'PPDM',
'형태 보존 암호화',
'OWASP Top 10',
'OWASP Mobile Top 10',
'OWASP IoT Top 10',
'개인정보 영향평가(PIA)',
'[PIA]- ISO/IEC 29134',
'ISO 29151',
'[개인정보]- 정보유형',
'[개인정보]- 개인정보 비식별 조치 가이드라인',
'[개인정보]- 프라이버시 보호모델',
'[개인정보]- 개인정보의 안전성 확보조치 기준',
'[개인정보]- 가명정보',
'[개인정보]- 가명처리 (ISO/IEC 20889 기준)',
'[개인정보]- 식별자',
'[개인정보]- ISMS',
'[개인정보]- ISMS-P',
'[정보처리자유형]- 개인정보 유출사고 대응 매뉴얼',
'정보보호산업진흥법(15.12 시행)',
'ISO/IEC 27014',
'탈린 매뉴얼(Tallinn Manual)',
'ISA/IEC 62443',
'ISO/IEC 15408 ',
'코드서명 (코드사인, Codesign)',
'WPA3',
'커버로스(Kerberos)',
'동형암호',
'[동형암호]- 준 동형암호',
'[동형암호]- 완전 동형암호',
'WAF',
'X.509',
'라이트 커맨드(Light Commands) 취약점',
'무자각 지속 인증(Implicity Continuous Authentication)',
'[암호화기술]- LEA',
'GDPR',
'[GDPR]- GDPR 적정성 평가',
'2020 정부 전자서명법 개정',
'전자서명,전자봉투',
'재현데이터, 차등정보보호',
'개발보안 방법론',
'Privacy By Design',
'ISO/IEC 27017',
'SDP',
'[DB 보안]- DB 보호 솔루션',
'[DB 보안][Role Based]- Bell LaPadula',
'[DB 보안][Role Based]- Biba',
'[DB 보안]- 클락-윌슨(Clack and Wilson) 모델',
'BEC(Business  E-mail Compromise)',
'[CPU 보안]- 스펙터(Spectre)',
'[CPU 보안]- Meltdown',
'[DDOS]- 스크러빙 센터, 컨텐츠 전송 네트워크',
'FIDO',
'[Android]- Deeplink',
'제로 트러스트 보안 모델',
);

var answer = answer.concat(
// 암호학
'<img src = "./img/Encryption.png" style = "max-width: 100%; height: auto;">\
',
  
// 블록 암호화
'# 정의 : 하나의 키 하에서 블록 암호를 반복적으로 안전하게 이용하는 절차 <br/><br/>\
# 개요도 : 블록 암호화만 사용 / 자기 동기 스트림 <br/>\
<img src = "./img/BlockEncryption.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 비교 <br/>\
<img src = "./img/BlockEncryptionCompare.png" style = "max-width: 100%; height: auto;"><br/><br/>\
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
* KPC 93회 2교시 4번\
',
  
// 디피헬만 알고리즘
'# 정의 : Diffie-Hellman Algorithm <br/>\
- 두 사람이 암호되지 않은 통신망을 통해 공통의 비밀키를 공유할 수 있도록 암호키 교환 알고리즘 <br/><br/>\
# 특징 <br/>\
- 공개키 사용 <br/>\
- 이산대수 어려움 : 이산대수의 난해함 <br/>\
- 비밀키 사용 : 암호문 생성 및 평문의 복구를 위한 복호화 키 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/DiffieHellmanAlgorithmMechanishm.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 상세절차 <br/>\
<img src = "./img/DiffieHellmanAlgorithmMechanishmDetail.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 취약점, 대응방안 <br/>\
- 취약점 : 이산대수 원리, 비밀키(공유키) 기반, MITM <br/>\
- 대응방안 : RSA (소인수 분해 해독, 공개키/개인키 기반) <br/><br/>\
* KPC 93회 관리 1교시 9번\
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
  
// 시큐어 코딩
'<img src = "./img/SecureCoding.png" style = "max-width:100%; height:auto;"><br/><br/>\
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

// 랜섬웨어 종류 
'# 공격대상 관점 (블록크랜)<br/>\
- 블루 크랩 : 개인 PC 파일 암호화, 금전적 요구 <br/>\
- 록커고가, 류크 : 제조분야, 공공기관 사칭 공격으로 시설 마비 <br/>\
- 갠드크랩 : 취약한 암호화폐 대상 거래소 정보 탈취 공격 <br/>\
- 랜섭웹 : DB, 백업처리용 DB에 접근하여 암호화 공격 <br/><br/>\
# 공격기법 관점 (매워C비)<br/>\
- 매그니베르 : 백신 우회, 별도 실행파일 없이 데이터 암호 공격 <br/>\
- 워너크립터 : 검색엔진을 이용한 특정 포트 대상 표적 공격 <br/>\
- CLOP : 기업 AD 계정 소유 서버를 공격 내부 시스템 접근 <br/>\
- 비너스 락커 : 워터링 홀 공격 <br/><br/>\
# 공격범위 관점 (록M넷N) <br/>\
- 록커고가 : 공장 가동 전면 중단, 행정 시스템 운영 전체 마비 <br/>\
- Maze : 개인데이터 탈취 및 공격자간 공유 카르텔 형성 <br/>\
- 넷워커, 피사 : 탈취데이터 공개로 피해자 신상누출 2차 피해 유발 <br/>\
- Nemty : 랜섬웨어 암호화폐 거래소 세탁으로 범죄자금 우려 <br/><br/>\
* 아이리포 24회 2교시 3번\
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
'# 정의 : 정보 절도 사기 수법 <br/>\
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
'# 정의 : Active Phishing <br/>\
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
<img src = "./img/SpearPhishingWateringHole.png" style = "max-width:100%; height:auto;">\
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
'# 정의 : TCP/IP 구조적 결함 이용 공격기법 <br/>\
- 해커가 TCP/IP 프로토콜 구조적 결함 이용하여 시스템 권한 획득등 정보 탈취하는 공격기법<br/><br/>\
# 종류(4)(IDEA) : IP스푸핑, DNS 스푸핑, 이메일 스푸핑, ARP 스푸핑(ARP Cash Posioning) <br/><br/>\
# 절차(5) <br/>\
- 패킷 내용 변경, 방화벽 우회 <br/>\
- 소스 IP 주소 조작, 자신을 신뢰성 있는 호스트 ACK 전송 인식 <br/>\
- 원하는 호스트 초기 시퀀스 번호get <br/>\
- 트로이 목마 등 PGM 설치 <br/>\
- 호스트 접근권한, 루트권한 get <br/><br/>\
# 방어(4) <br/>\
- 공격자에 RESET 보내 차단 <br/>\
- 공격 클라이언트 차단 <br/>\
- OS 패치 <br/>\
- 방화벽 정책 \
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
'# 정의 : 장기간 은밀 진행 공격 기법 <br/>\
- 공격자 대상시스템을 타킷으로 침투 목적 달성 위해 지능적 지속 방법 사용하여 장기간 은밀한 진행하는 공격기법 <br/><br/>\
# 특징(3) : 사회공학, 비인지, 장기간 <br/><br/>\
# 기법 : 관찰, Zero-Day Attack, 사회공학기법, 은닉, 권한상승, 유출, 적응/지속, 스피어피싱, 난독화, 스턱스넷, 오프레이션 오로라, 나이트 드래곤, EMC/RSA 공격 <br/><br/>\
# 공격단계(4) : 침투 > 검색 > 수집 > 유출<br/>\
1. 관리적 <br/>\
- 침투 : 사회공학기법(피싱, 스미싱, 파밍) <br/>\
- 검색 : 관리자권한 탈취(RootKit, Bot, Backdoor), 내부시스템 감염(리소스 갈취, 고의적 파괴, 서비스 거부, 제로데이)<br/><br/>\
2. 기술적 <br/>\
- 수집 : 행동형(트로이목마, Keylogger, Spyware), 제어용(Bot, Root-kit, Backdoor) <br/>\
- 유출 : 데이터 유출, 공격중단 <br/><br/>\
# 대응방안 <br/>\
1. 관리적 <br/>\
- Governance : 인사보안, 정보자산, 고객정보 지침 <br/>\
- 인식교육 : IT 컴플라이언스 <br/>\
- 기관협조 : 침해사고, 시큐리티 대응센터 <br/>\
- 보안관제 : 이벤트 관리, 24*365 <br/><br/>\
2. 기술적 <br/>\
- 네트워크 : 방화벽, QoS <br/>\
- 망분리 : VDI, SBC, 이중화 <br/>\
- 엔드포인트 : 매체제어, 침입탐지 <br/>\
- 데이터 : 암호화솔루션(API, Plugin, 암호화키), 접근제어(로그인, SQL통제) <br/><br/>\
* 116회 2교시 1번\
',
   
// 래터럴 무브먼트
'# 정의 : APT 내부망 이동 공격 기법 <br/>\
- Lateral Movement <br/>\
- 지능형 위협 공격(APT) 과정 중 공격자가 조직 내 최초 시스템 해킹에 성공후 내부망에서 사용되는 계정 정보를 획득하여 내부망의 시스템으로 이동하는 방식 <br/><br/>\
# 공격기법 <br/>\
- 1단계 : 인증정보 탈취 <br/>\
- 2단계 : 확산 <br/>\
- 3단계 : 유출 <br/>\
- 4단계 : 의도적 흔적 삭제 <br/><br/>\
# 대응방안 <br/>\
- 예방 단계 : xp_cmeshell procedure 삭제, SSL 활성화 <br/>\
- 사후 단계 : 허니팟 시스템(모니터링), 머신러닝(이상여부), 문자,메일(인증) <br/><br/>\
* 120회 응용 1교시 9번\
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

// Computer Forensics
'# 정의 : 디지털 자료 법적 증거 확보 행위<br/>\
- 사이버상에서 이뤄지는 범죄행위의 법적증거 확보하여 법원에 제출하는 일련절차/방법<br/>\
- 정보기기에 내장된 디지털 자료를 근거로 삼아 그 정보기기를 매개체로 하여 발생한 어떤 행위의 사실 관계를 규명하고 증명하는 보안서비스 분야 <br/><br/>\
# 기본 원칙(정재신연무) : 정당성, 재현, 신속성, 연계보관성, 무결성 <br/><br/>\
# 기술 요소 <br/>\
- 수집기술 : 디스크 이미징, 메모리 덤프, 무결성 입증 <br/>\
- 분석기술 : 타임라인 분석, 삭제된 파일 복구, 비정상 파일 검색, 이메일 분석, 슬랙공간 분석, 암호 복구, 덤프 메모리 분석 <br/>\
',

// WNAC
'# 정의 : 무선 NW의 접근 통제 SE솔루션(TTA) <br/>\
- SE : System Engineering<br/>\
- Wireless Network Access Control <br/>\
- NW 접근방식에 무선 공격을 탐지할 수 있는 기능을 추가하여 비인가자의 접근을 차단하는 방법\
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

// 암호화 기술
'# 정의 : 평문 -> 암호화 문장<br/>\
- 정당한 사용자만이 이용할 수 있도록 평문 (Plain text)을 암호화된 문장(Chiper text)로 바꾸는 기술<br/><br/>\
# 대칭키 : 키길이에 비례, 길이n -> 보안강도 n비티 <br/><br/>\
# 비대칭키 : 키길이에 비례, 길이1증가시 보안강도 1.02~1.05 증가 <br/><br/>\
# 해시 : 별도 키 없음, 길이에 따라 충돌회피성 증가 n비트 해시 -> 약한 충돌 회피 n-1 -> 강한 충돌 회피 n/2 <br/><br/>\
# 보안강도 컴플라이언스 <br/>\
- 80bit (~2010) SEED, HEIGHT, ARIA, AES / 112 bit(2011~2030) / 128bit(2030 이후)<br/><br/>\
# 암호화 기술 동향 <br/>\
<img src = "./img/EncryptionFlow.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암호화기술_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암호화기술_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암호화기술_3.png" style = "max-width:100%; height:auto;">\
',
   
// [암호화기술]- 양자암호통신
'# 정의 : 양자속성 암호화 기법 <br/>\
- Quantum Cryptography Communication <br/>\
- 정보의 저장, 전송, 측정, 제어 등 정보를 다루는 전체 또는 부분의 물리영역에서 양자역학에 기반한 양자정보를 활용하고, 양자 중첩, 불확정성 원리, 비복제성 원리, 양자 얽힘 등의 다양한 물리현상을 이용함으로써 암호가 제공하는 다양한 기능들의 안정성을 극대화하는 암호기법<br/>\
- 단일광자의 양자역학 고유의 특성인 불확정성, 비복제성을 이용하여 암호통신의 핵심인 키 분배를 수행하여 도청이 불가능한 차세대 통신보안 기술<br/><br/>\
# 특징 : <br/>\
- 보안성 : 데이터 네트워크와 보안적 분리된 환경 <br/>\
- 효율성 : 전달효율 최대 보장 <br/>\
- 투명성 : 필요한 양자키 쉽게 획득, 개방형 인터페이스 제공 <br/>\
- 강건성 : 장애 관리 및 제어 요구사항 고려 <br/><br/>\
# 기존 암호 통신 한계 <br/>\
1. Shore <br/>\
- 특징 : 인수분해 문제 해결 속도 감소 <br/>\
- 공개키 : 안전하지 않음 <br/><br/>\
2. Grover <br/>\
- 특징 : 정렬되지 않은 DB 원소 검색속도 향상 <br/>\
- 대칭키 : 키사이즈 증가 필요 <br/>\
- 해시 : 암호 알고리즘 출력길이 증가 필요 <br/><br/>\
# 양자암호 통신 기술 특징 <br/>\
- 양자 중첩 (Quantum Superposition) : 여러 상태가 동시에 존재, 측정 전까지 상태를 알 수 업음 <br/>\
- 양자 얽힘 (Quantum Entanglement) : 둘 이상의 양자가 멀리 떨어져 있어도 존재 <br/>\
- 불확정성 (Uncertainty Principle) : 서로다른 물리량 동시에 정확하게 측정 불가 -> 복제 불가 \
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
# 양자내성암호 유형 <br/>\
<img src = "./img/PQC.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 2교시 6번 <br/>\
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

// 형태 보존 암호화
'# 정의 : 블록 암호 기반 암호화 기술<br/>\
- 블록암호에 기반하여 특정한 형태의 평문을 암호화 후 평문의 형태와 암호문의 형태가 동일함을 보장하는 암호화 기술 <br/><br/>\
# 핵심 AL <br/>\
- prefix cipher <br/>\
- cycle-walking cipher <br/>\
- generalized-Feistel cipher\
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
<img src = "./img/OWASP.png" style = "max-width:100%; height:auto;"><br/><br/>\
* [2017]A4+A7 -> A4통합, A10삭제, 공격 방어취약점(A7) 추가, 취약한 API 추가 <br/>\
* [2017.10] RC(Release Candidate) 2 공객 : OWASP TOP 10 2017 RC1의 다음 단계이자 최종 정식버전의 바로 전 단계로 피드백을 받기 위해 미리 공개하는 버전 <br/>\
* OOXML(Office Open XML) : MS Office에서 XML 사용이 가능한 문서\
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
- 데이터 마스킹 : 임의 잡음추가, 공백과 대체 <br/><br/>\
* 120회 4교시 5번\
',
  
// 프라이버시 보호모델 
'# 정의 : 개인 식별 요소를 제거해 비식별화 된 개인정보에 대해 연결 공격, 동질성 공격, 배경지식 공격 등을 통해 식별이 가능한 것을 방지하기 위한 보호모델 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PrivacyProtectionModelOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# K-익명성 <br/>\
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
'# 정의 : 데이터 3법 주요 변경사항 <br/>\
- 개인정보를 가명처리함으로써 원래의 상태로 복원하기 위한 추가 정보의 사용,결합 없이는 특정 개인을 알아볼 수 없는 정보 (개인정보보호법 2-1)<br/><br/>\
# 주요내용 (처결안금과)<br/>\
- 처리(28-2) : 통계작성, 과학적 연구, 공익 기론 보존 <br/>\
- 결합제한(28-3) : 결합시 보고위원회 or 전문기관 수행 <br/>\
- 안전조치(28-4) : 기술,관리,물리 <br/>\
- 처리시 금지의무(28-5) : 처리 = 식별 <br/>\
- 처리에대한 과징금(28-6) : 매출 3% 이하, 산정곤란 -> 4억 이하 or 매출 3% 이하 <br/><br/>\
<a href = "./doc/가명정보.pdf">참고문헌</a><br/>\
<img src = "./img/가명처리절차.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/가명처리절차상세.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 94회 1교시 8번\
',
   
// 가명처리 (ISO/IEC 20889 기준)
'# 정의 : 개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가정보가 없이는 특정 개인을 알아볼 수 없도록 처리하는 것 <br/><br/>\
# 대상 : 통계작성, 과학적 연구, 공익적 기록보존 <br/><br/>\
# 절차 : 사전준비 / 가명처리 / 적정성 검토 및 추가 가명 처리 / 활용 및 사후관리 <br/><br/>\
# ISO/IEC 20889 기준, 가명처리 기법 <br/>\
- 통계 도구 : 표본 추출, 총계 처리 <br/>\
- 암호화 도구 : 결정성 암호화, 순서보존 암호화, 형태보존 암호화, 동형 암호화, 동형 비밀분산 <br/>\
- 삭제 기술 : 마스킹, 레코드 삭제, 컬럼 삭제 <br/>\
- 가명화 기술 : 해시함수, 매핑테이블, 임의 생성 <br/>\
- 해부화 : 식별자 관계 분리 <br/>\
- 일반화 기술 : 범주화, 라운딩, 로컬 일반화 <br/>\
- 무작위 기술 : Perturbation, 잡음추가, 순열, 부분총계 <br/>\
- 재현 데이터 : 완전히 새로운 데이터 생성, 완전,부분,하이브리드 재현 <br/><br/>\
# 시계열 데이터 결합 절차 <br/>\
- 결합키 생성 : 일련번호 생성, 관리기관 합의하 결합키 생성 <br/>\
- 결합키연계정보 및 시계열 분석키 생성 <br/>\
- 가명정보 결합 <br/>\
- 결합결과 반출 <br/>\
- 분석 및 사후 관리 <br/>\
<img src = "./img/TimeLineDataCombine.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 관리 3교시 3번\
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
* 라이지움 86회 3교시 3번 \
',
    
// ISMS
'# 정의 : Information Security Management System <br/>\
- 정보의 기밀성, 무결성, 가용성을 실현하기 위한 일련의 정보보호 활동 <br/><br/>\
# 의무대상 (정보통신망법 제47조 2항) <br/>\
- 정보통신망서비스 제공자(ISP) : 전기통신사업법 제6조 1항<br/>\
- 집적정보통신시설 사업자(IDC) : 정보통신망법 제46조 <br/>\
- 연간 매출액 세입 1,500억 이상 <br/>\
- 정보통신서비스 부문 전년도 매출액 100억원 이상 <br/>\
- 일일평균 이용자수 100만명 이상 <br/><br/>\
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
# 암기 <br/>\
- 범위 : 정물융<br/>\
- 내용 : 수공 <br/>\
- 구성 : 미산이기 <br/><br/>\
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
# 구성요소 (GPSC) <br/>\
- General : 개념 모델, 용어, 일반사항<br/>\
- Policies & Procedures : 보안 정책, 절차 규정<br/>\
- System : 기본적 요구사항 (FR 1~7) 설계, 구현<br/>\
- Component : 보증, 기능 요구사항 규정<br/><br/>\
# 기본 보안 요구사항 (IUSDRTR / IU스드르트르)<br/>\
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
- 기밀성<br/>\
- 무결성<br/>\
- SPOF <br/>\
- 패스워드 추측 공격에 취약 <br/><br/>\
# 구성요소 <br/>\
- KERBEROS 서버 : 인증서버 <br/>\
- Ticket Granting Server : 티켓 발급 <br/>\
- 접속서버 : Ticket을 확인하여 티켓이 유효한 경우 접속 승인 <br/><br/>\
# Ticket의 정보내용 <br/>\
1. Client가 접속 하기를 원하는 서버의 ID <br/>\
2. Client ID <br/>\
3. Client의 Network Address <br/>\
4. Client, Server가 Service 기간 동안 공유하는 Session Key <br/><br/>\
# 활용 <br/>\
- 클라우드 스토리지 사용자 인증 <br/>\
- 네트워크 인증 시스템의 기반으로 빅데이터 환경에서의 인증 정책으로 사용됨 <br/><br/>\
<img src = "./img/Kerberos.png" style = "max-width:100%; height:auto;">\
',

// 동형암호
'# 정의 : 복호화 없이 연산이 가능한 암호기술 <br/>\
- 정보를 암호화한 상태에서 각종 연산을 했을 때, 그 결과가 암호화하지 않은 상태의 연산결과와 동일하게 나오는 4세대 암호체계 <br/><br/>\
# 원리 <br/>\
<img src = "./img/동형암호화.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
- 부트스트래핑 : 복호화 Key 암호화 Key 재사용 <br/>\
- 스쿼싱 : 노이즈 감소지원 조합 <br/>\
- SHE : 준동형 암호 기술 / 식, 횟수 제한적 <br/>\
- FHE : 완전동형암호 기술 / 식, 횟수 무제한 <br/><br/>\
# 종류 (GDC)<br/>\
- GENO9 : Idea Lattice 기반 <br/>\
- DGHV10 : 정수집합에 GENO09 적용 <br/>\
- CRT-BASED : 중국인의 나머지 정리 이용 <br/><br/>\
# 활용 <br/>\
- 클라우드 : 금융, 의료등 민감정보 동형암호 <br/>\
- 생체인식 : 생체정보 안전 처리 <br/>\
- 금융분야 : 기밀성 보호\
',

// [동형암호]- 준 동형암호 
'# 정의 : 수학의 준동형성 이용 암호화 함수<br/>\
- Homomorphic Encryption <br/>\
- 암호화된 데이터에 대해 복호화 하지 않고 연산을 수행할 수 있는 암호 수학의 준동형성을 이용하여 암호화 함수 중에서 평문 공간과 암호문 공간에 정의된 연산을 보존화는 암호화 함수 <br/><br/>\
# 암기 : 활용-계암공 <br/><br/>\
# 활용기법 <br/>\
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
# 절차 : 관생비결 <br/><br/>\
# 특징 <br/>\
- 보안성 : 최초 인증후 세션 탈취후에도 접근 차단 가능 <br/>\
- 명시적 미고지 : 명시적 고지 없이 모니터링 및 확인 <br/>\
- 지속적인 인증확인 : 상태정보 변경에 따라 사용자의 지속적 신원확인 시도 <br/><br/>\
# 무자각 인증 절차<br/><br/>\
<img src = "./img/무자각지속인증.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/무자각지속인증_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
# 인증 수단별 기법 및 특징 <br/>\
<img src = "./img/무자각지속인증_1.PNG" style = "max-width:100%; height:auto;">\
',

// LEA
'# 정의 : 128bit Block 암호 알고리즘 / 국가보안기술 연구소 <br/>\
- Light weight Encryption Algorithm <br/>\
- 2012년 국가보안기술 연구소 개발 128bit Block 암호 알고리즘 <br/><br/>\
# 특징 (AES 비교) <br/>\
- 속도(2.7) <br/>\
- 경량코드(1/8) <br/>\
- 효율성(1/2) 작은플랫폼 적합 <br/>\
- 암호화 Addition <br/>\
- 복호화기 Subtraction 사용 <br/><br/>\
# Spec <br/>\
1) 키 : 128/192/256 bit 가변적 <br/>\
2) 블록암호화 : 128bit <br/>\
3) 라운드 방식 : 32비트 단위 -> 라운드마다 ARX 수행 <br/>\
4) 암호화 방식 ; ARX(Addition, Rotation, XOR) 기반 GFN(Generalized Feistel Network) <br/><br/>\
# 현황 <br/>\
- 2015년 9월 룩셈부르크대 암호성능 측정 프로젝트에서 우수성 인정, 32비트 운영체제에 최적화 <br/>\
- 2015년 6월 암호모듈 검증제도 대상 알고리즘 포함 (ex. 라온 시큐어 Key # Crpyto v1.3) 알집 압축 기능 등 적용 <br/><br/>\
<img src = "./img/LEA_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/LEA_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/LEA_3.png" style = "max-width:100%; height:auto;">\
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
- 책임 : 처리자 책임강화, 영향 평가제 <br/>\
- 벌칙 규정 : 2천만 유로, 매출액 4% <br/><br/>\
2. 완화/확대 <br/>\
- 데이터 활용 : 활용 증대, 동의 없이 사용 <br/>\
- 법 적용 영역 확대 : EU 역외 까지 <br/><br/>\
# 본문 (규원권컨3독협구특위최) <br/>\
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
# 주요 원칙 (개처동아민)<br/>\
- 개인정보 처리 원칙 : 5조 <br/>\
- 처리의 적법성 : 6조 <br/>\
- 동의 : 4, 7조 <br/>\
- 아동 개인정보 : 8조 <br/>\
- 민감정보 : 9조 <br/><br/>\
# 권리보장 조치사항 (제열정삭처이반자)<br/>\
- 정보를 제공받을 권리 <br/>\
- 정보주체의 열람권 <br/>\
- 정정권 <br/>\
- 삭제권(잊힐권리) <br/>\
- 처리에 대한 제한권 <br/>\
- 개인정보 이동권 <br/>\
- 반대할 권리 <br/>\
- 자동화된 결정 및 프로파일링 관련 권리 <br/><br/>\
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
<font color = "red">* 2015년 신청, 개보위 독립성 부재로 불가 통보 </font><br/>\
# 절차 <br/>\
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
<img src = "./img/전자서명.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DigitalEnvelope.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# 관련 동향 <br/>\
- 정부는 공인인증서로 인한 사용자의 불편함을 해소하기 위해 전자서명간 차별을 폐지하는 전자서명법 전부개정법률 개정안 통과 (2020.05.)\
',

// 재현데이터, 차등정보보호
'# 재현 데이터 : 통계적으로 생성한 자료 / 원자료 / 다름 / 동일 분포 <br/>\
- Synthetic Data <br/>\
- 원자료와 다르지만 원자료와 동일한 분포를 따르도록 통계적으로 생성한 자료 <br/><br/>\
# 차등정보보호 : 정보보호 구현 개념 / 입력 차이 / 출력 차이 (중대) / 자료생성 제어 <br/>\
- Differential Privacy <br/>\
- 입력에서 작은 차이가 출력에서 중대한 차이를 줄 수 있는 자료 생성 과정을 제어하여 정보보호를 구현하려는 개념 <br/><br/>\
* 라이지움 86회 1교시 3번 \
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
# 주변 규격 <br/>\
- ISO 27001 : 조직의 정보보안 관리 요구사항 <br/>\
- ISO 27002 : 정보보안 관리 시스템 지침 <br/>\
- ISO 29100 : 개인정보 프레임워크 <br/><br/>\
# 목적 : 가이드 제공, 사용자 신뢰성 향상 <br/><br/>\
# 구성 : 정조인자 접암물운 통개공사연법 <br/>\
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
* 122회 3교시 2번\
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
# VPN, SDN 비교 <br/>\
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
'# 정의 : 기밀성 중점 모델 <br/>\
- 정보를 극비, 비밀, 미분류로 분류하여, 접근 통제하는 모델 <br/><br/>\
# 권한 <br/>\
- Read : 상 x / 하 o <br/>\
- Write : 상 o / 하 x <br/><br/>\
* 아이리포 23회 1교시 8번 \
',

// Biba
'# 정의 : Bell LaPadula + 불법 수정 방지 / 무결성 중점 모델 <br/>\
- Bell LaPadula 모델에서 불법 수정 방지 내용을 추가로 정의한 접근 통제 모델 <br/><br/>\
# 권한 <br/>\
- Read : 상 o / 하 x <br/>\
- Write : 상 x / 하 o <br/><br/>\
* 아이리포 23회 1교시 8번\
',

// Clock and Wilson
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
   
// FIDO
'# 정의 : Fast Identify Online <br/>\
- 스카트폰 등의 인증절차를 이용하여 정보를 수집한 후, 인증자를 통해 인증 결과 값을 생성하여 서버로 전송하고 서버에서 인증 결과 값을 검증하는 인증기술 <br/><br/>\
# 이력 <br/>\
- 1.0 (2014.12.) : UAF, U2F <br/>\
- 2.0 (2018.05.) : 모바일 포함, 비밀번호 없이 인증 <br/>\
* UAF(Universal Authentication Framework) : 지문, 음성, 얼굴인식 등 사용자 고유의 생체 정보 인식 <br/>\
* U2F(Universal Second Factor) : 1차인증 후 1회성 보안키 동글 2차인증 <br/><br/>\
# 구성요소 <br/>\
- FIDO Server : 키 등록 관리 검증 <br/>\
- FIDO Client : 인증자 필터링, ASM RP Client 중계 <br/>\
- ASM(Authenticator Specific Module) : Client 요청 인증자 전달 중계 <br/>\
- 인증자 : 생체 인증, 사용자 단말 로컬 인증 <br/><br/>\
# Fido 1.0, 2.0 구조비교 <br/>\
<img src = "./img/FIDO_Struct.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 비교 <br/>\
<img src = "./img/FIDO_Compare1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/FIDO_Compare2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 4교시 3번\
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
  
// 제로 트러스트 보안 모델
'# 정의 : 내/외부 시스템 구분 없이 모든 사용자와 시스템에 대한 검증 후 신뢰 획득시에만 연결을 허용하는 강력한 보안 매커니즘 <br/><br/>\
# 매커니즘 <br/>\
- 데이터 확인 : 악성 데이터 확인, 분류 <br/>\
- 경로 파악 : 악성 트래픽 경로 파악 <br/>\
- 네트워크 설계 : 제로 트러스트 네트워크 설계 <br/>\
- 정책생성 : 지능형 정책 생성 <br/>\
- 모니터링 : 제로 트러스트 에코 시스템 모니터링 <br/><br/>\
# 기술요소 <br/>\
- 데이터 격리 : CDR, 웹/이메일 랜더링 <br/>\
- 트래픽 감시 : EDR, IPS, WAF <br/>\
- 인증 : OTP, FIDO <br/><br/>\
* 아이리포 24회 관리 1교시 11번\
',
);
