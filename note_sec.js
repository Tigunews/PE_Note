var question = question.concat(
'보안이슈, 대응방안',
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
'APT(Advanced Persistent Threat) ',
'SQL Injection',
'워터링 홀 공격(Watering Hole Attack)',
'루트킷(Rootkit)',
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
'[암호화 기술]- 양자암호통신(Quantum Cryptography Communication)',
'[암호화 기술]- 양자내성암호',
'검색가능암호화(Searchable Encryption)',
'[검색가능암호화]- PSES',
'프라이버시 보존형 데이터 마이닝 (Privacy Preserving Data Mining, PPDM)',
'형태 보존 암호화(FPE: Format-Preserving Encryption)',
'개인정보 비식별화',
'[개인정보 비식별화]- 식별자',
'OWASP Top 10',
'OWASP Mobile Top 10',
'OWASP IoT Top 10',
'개인정보 영향평가(PIA)',
'[PIA]- ISO/IEC 29134',
'ISO 29151',
'[개인정보 보호법]- 개인정보 비식별 조치 가이드라인(2016.06)',
'[개인정보 보호법]- 개인정보의 안전성 확보조치 기준',
'[개인정보 보호법]- 가명정보',
'[정보처리자유형]- 개인정보 유출사고 대응 매뉴얼',
);

var answer = answer.concat(
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

// 랜섬웨어 종류 
'# 공격대상 관점 <br/>\
- 블루 크랩 : 개인 PC 파일 암호화, 금전적 요구 <br/>\
- 록커고가, 류크 : 제조분야, 공공기관 사칭 공격으로 시설 마비 <br/>\
- 갠드크랩 : 취약한 암호화폐 대상 거래소 정보 탈취 공격 <br/>\
- CLOP : 기업 AD 계정서버 점유 후 중요데이터 암호화 <br/>\
- 랜섭웹 : DB, 백업처리용 DB에 접근하여 암호화 공격 <br/><br/>\
# 공격기법 관점 <br/>\
- 매그니베르 : 백신 우회, 별도 실행파일 없이 데이터 암호 공격 <br/>\
- 워너크립터 : 검색엔진을 이용한 특정 포트 대상 표적 공격 <br/>\
- CLOP : 기업 AD 계정 소유 서버를 공격 내부 시스템 접근 <br/>\
- 비너스 락커 : 워터링 홀 공격 <br/><br/>\
# 공격범위 관점 <br/>\
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
# 암기 : 특징-표심정 <br/><br/>\
# 특징(3) : 표적성, 심각성, 정교성 <br/><br/>\
# 대응방안 : 사전,사후 <br/><br/>\
# 절차 <br/>\
- 표적 설정/정보수집 <br/>\
- 이메일 전송 <br/>\
- 첨부파일 통한 악성코드 감염\
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
# 암기 <br/>\
- 절차 : 침전명변공장 <br/>\
- 공격 : U공프윈7<br/><br/>\
# 특징(4) : Target, Worm, 컴포넌트, 은닉성 <br/><br/>\
# 공격 시나리오 <br/>\
- 침투 : 스턱스넷 전파 <br/>\
- 감염 PC에서 C&C서버로 감염 정보 전송 <br/>\
- 네트워크 유포 <br/>\
- 해커 공격 명령 생성 및 전송 <br/>\
- 관리자의 PLC 제어 명령 생성 및 변조 <br/>\
- 타킷 공격 <br/>\
- PLC 장비 감염 설비 제어 장애 발생 <br/>\
- 스턱스넷 핵심 모듈 파일을 생성하는 드롭퍼를 실행하여 PLC(Programmable Logic Controller) 코드 블럭을 변조하여 은닉 <br/>\
- Step 7이 호출될 때 마다 은닉된 변조 코드 블럭 실행 <br/><br/>\
# 전파 방법 <br/>\
- USB : autorun.inf 파일 이용, 윈도우 쉘 LINK 취약점 이용(MS10-046, CEV-2010-2568) <br/>\
- NW 공유 : 원격시스템 상 c$, Admin$ 네트워크 공유 여부 탐색, 발견시 쓰기권한 보유 폴더에 DEFRAGxxx.TMP 이름으로 자신을 복제 <br/>\
- 프린터 Spooler 취약점 이용 : 게스트 계정에 쓰기 허용, MS10-0691, CEV-2010-2719 <br/>\
- Step7프로젝트 파일 이용 : .s7p파일 감염 <br/><br/>\
# 대응(2) <br/>\
- 기술적(3) : 저장매체 보안관리, Sys 패치, 보안 Auditing<br/>\
- 관리적(3) : 전용백신, 보안교육, 보안정책 <br/><br/>\
# 기능 <br/>\
- 관리자 권한 획득 : Win32k.sys 키보드 레이아웃 취약점 MS10-073, CVE2010-2743 <br/>\
- 디바이스 드라이버 설치 : MrxCls, MrxNet 커널모드 컴포넌트 설치 <br/>\
- 명령 및 제어 기능 : C&C 통신 위해 windowsupdate.com, msn.com 대한 DNS 질의 통해 인터넷 연결 여부 확인 <br/>\
- PLC 감염 : s7tgtopx.exe CCProjectMgr.exe같은 Step6/WinCC 프로세스들 내로 스턱스넷 코드 주입하는 것으로 감염. 이 SW들은 SIMANTIC PLC 디바이스에 연결) <br/><br/>\
<img src = "./img/stuxnet.png" style = "max-width:100%; height:auto;">\
',


// APT
'# 정의 : 장기간 은밀 진행 공격 기법 <br/>\
- 공격자 대상시스템을 타킷으로 침투 목적 달성 위해 지능적 지속 방법 사용하여 장기간 은밀한 진행하는 공격기법 <br/><br/>\
# 암기 : 공격단계4 침검수유 <br/><br/>\
# 특징(3) : 사회공학, 비인지, 장기간 <br/><br/>\
# 기법 : 관찰, Zero-Day Attack, 사회공학기법, 은닉, 권한상승, 유출, 적응/지속, 스피어피싱, 난독화, 스턱스넷, 오프레이션 오로라, 나이트 드래곤, EMC/RSA 공격 <br/><br/>\
# 공격단계(4) : 침투 > 검색 > 수집 > 유출\
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
# 목적과 구성 <br/>\
- 목적 : 구축,운영지침 / 행안부2018-21 / 시큐어코딩기법 제시 <br/>\
- 대상 : 전자정부 SW 개발자,운영자 <br/>\
- 범위 : 신규개발 / 유지보수 SW개발 (개발프로세스 전체단계 초점)<br/>\
- 구성 <br/>\
2장) 의무화 대상,범위,기준 / 주체별 개발보안활동 소개 <br/>\
3장) 분석,설계단계 SW 강화활동 소개 <br/>\
4장) 구현단계 보안대책, 시큐어코딩 예시 <br/>\
- 활용 <br/>\
1) 발주자 : 단계별 보안 강화 정책 적용, 요구사항 도출시 사용 <br/>\
2) 사업자 : SW개발시 활용 <br/>\
3) 감리법인 : 취약점 진단시 활용 <br/><br/>\
# 개발보안 가이드 기준 <br/><br/>\
- 입력데이터 검증 및 표현 : SQL 삽입, 경로조작, XSS <br/>\
- 보안기능 : 부적절 인가, 중요정보 평문저장, 하드코드된 <br/>\
- 시간 및 상태 : 경쟁조건, 종료되지 않는 반복분, 재귀 함수 <br/>\
- 에러 처리 : 오류상황 대응 부재, 오류 메시지 통한 정보 노출 <br/>\
- 코드 오류 : 널 포인터 역참조, 부적절한 자원 해제 <br/>\
- 캡슐화 : 제거되지 않고 남은 코드, 시스템 데이터 정보 노출 <br/>\
- API 오용 : DNS Lookup 의존 보안 결정 <br/>\
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
<img src = "./img/암호화기술_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암호화기술_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/암호화기술_3.png" style = "max-width:100%; height:auto;">\
',

// [암호화기술]- 양자암호통신
'# 정의 : 양자속성 암호화 기법 <br/>\
- 정보의 저장, 전송, 측정, 제어 등 정보를 다루는 전체 또는 부분의 물리영역에서 양자역학에 기반한 양자정보를 활용하고, 양자 중첩, 불확정성 원리, 비복제성 원리, 양자 얽힘 등의 다양한 물리현상을 이용함으로써 암호가 제공하는 다양한 기능들의 안정성을 극대화하는 암호기법<br/>\
- 단일광자의 양자역학 고유의 특성인 불확정성, 비복제성을 이용하여 암호통신의 핵심인 키 분배를 수행하여 도청이 불가능한 차세대 통신보안 기술<br/><br/>\
# 특징 : <br/>\
- 키분배 문제 해결 : 기존 암호 분배의 취약점(MITM)해결 <br/>\
- 안전한 솔루션 : 특정 알고리즘에 의존하지 않음 <br/>\
- 병목현상 해결 : 고속 기술, 저속 암호화 문제 해결 <br/><br/>\
# 양자암호 통신 기술 특징 <br/>\
- 양자 중첩 (Quantum Superposition) : 여러 상태가 동시에 존재, 측정 전까지 상태를 알 수 업음 <br/>\
- 양자 얽힘 (Quantum Entanglement) : 둘 이상의 양자가 멀리 떨어져 있어도 존재 <br/>\
- 불확정성 (Uncertainty Principle) : 서로다른 물리량 동시에 정확하게 측정 불가 -> 복제 불가 <br/>\
',

// 양자내성암호
'# 정의 : 양자 알고리즘 대응 암호화 <br/>\
- Post-Quantum Cryptography <br/>\
- 양자 컴퓨터의 보안 위협에 대응할 수 있는 암호 기술로, 양자 컴퓨터의 연산능력으로도 풀 수 없는 수학적 난제를 활용한 암호화 기술 <br/><br/>\
# 양자 알고리즘 <br/>\
1. Shore <br/>\
- 특징 : 인수분해 문제 해결 속도 감소 <br/>\
- 공개키 : 안전하지 않음 <br/><br/>\
2. Grover <br/>\
- 특징 : 정렬되지 않은 DB 원소 검색속도 향상 <br/>\
- 대칭키 : 키사이즈 증가 필요 <br/>\
- 해시 : 암호 알고리즘 출력길이 증가 필요 <br/><br/>\
# 양자내성암호 유형 <br/>\
1. 다변수 기반 <br/>\
- 설명 : 다항식 계산 이용 <br/>\
- 알고리즘 : HFE, ZHFE, Rainbow <br/><br/>\
2. 코드기반 암호 <br/>\
- 설명 : 행렬연산, 속도빠름 <br/>\
- 알고리즘 : McEliece, McBits <br/><br/>\
3. 격자기반 암호 <br/>\
- 설명 : Learning with Errors, 어려운 문제 기반 설계 <br/>\
- 알고리즘 : NTRU, SS-NTRU <br/><br/>\
4. 아이소제니기반 <br/>\
- 설명 : 타원곡선 아이소제니 관계 문제 <br/>\
- 알고리즘 : Diffie-Hellman like protocl <br/><br/>\
5. 해시기반 <br/>\
- 설명 : 출력길이 증가 암호화 보장 <br/>\
- 알고리즘 : W-OTS, W-OTS+ <br/><br/>\
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

// 프라이버시 보존형 데이터 마이닝
'# 정의 : 프라이버시 보존 데이터 지식,패턴 찾는 기술 <br/>\
- Privacy Preserving Data Mining <br/>\
- 데이터 소유자의 프라이버시를 침해하지 않으면서도 데이터에 함축적으로 들어 있는 지식이나 패턴을 찾아내는 기술 (TTA)<br/><br/>\
# 암기 <br/>\
1. 기법 : K랜압기분 <br/>\
- 랜 : 상노영 <br/>\
- 압 : DFT, DWT <br/>\
- 기 : 회다음 <br/>\
- 분 : 안프프 <br/><br/>\
# 기법 : K랜압기분 <br/>\
1. K-익명화 : 주어진 데이터 집합에서 주식별자 속성값들이 동일한 레코드가 적어도 K개 존재하도록 하는 연결공격 방어형 프라이버시 모델 <br/><br/>\
2. 랜덤 노이즈 추가 : 프라이버시에 민감한 원본데이터 대신 노이즈를 추가하여 교란된 데이터만을 공개하는 기법 <br/>\
- 데이터 상관관계 활용 : 원본X > PCA(or 베이즈추정) 적용 > Xp 변환 > 라플라스 노이즈 추가 > 교란데이터 Y생성, 노이즈 필터링 공격 취약 <br/>\
- 노이즈 평준화 : 엔트리 묶음의 평균값 거리 측정, 원본거리-순서 보존되지 않아 마이닝 정확도 저하 단점 보완, 클러스터링 정확도 향상 <br/>\
- 영역기반 교란기법 : 시계열 데이터를 일치불일치 영역 분할 후 일치 영역 노이즈 더 많이 추가, 분류 정확도 향상 <br/><br/>\
3. 압축 기반 교란 기법 : 시계열 데이터를 낮은 차원의 새로운 특성공간에 매핑 후 빠른 검색위해 R-트리와 같은 다차원 트리로 인덱스하는 변환 기반 교란기법 <br/>\
- DET(이산 푸리에 변환) 기법 : 전체 데이터 아닌 원본 특성 반영 몇 개의 푸리에 계수만 활용하여 데이터 마이닝 <br/>\
- DWT(이산 웨이블릿 변환) 기법 : 정해진 임계치보다 큰 진폭 가지는 중요계수만 교란 <br/><br/>\
4. 기하학적 교란 기법 : 데이터 상관관계 및 민감 속성 보호 <br/>\
- 회전 교란기법<br/>\
- 다중 회전 기법(원본정규화 > n개의 랜덤시드 생성 > 직교행렬화 > 직교행렬이용 원본 회전 > 교란 데이터 Y생성)<br/>\
- 응축 교란 기법 <br/><br/>\
5. 분산 프라이버시 :분산된 데이터를 각 노드별로 마이닝하고 그 결과를 최종 노드에 집계하여 결과를 도출하는 기법 <br/>\
- 안전한 스칼라곱 & 유클리디안 거리 <br/>\
- 프라이버시 보호 질의 <br/>\
- 프라이버시 보호 집계 : 단계별 질의 결과에 노이즈 추가\
',

// 형태 보존 암호화
'# 정의 : 블록 암호 기반 암호화 기술<br/>\
- 블록암호에 기반하여 특정한 형태의 평문을 암호화 후 평문의 형태와 암호문의 형태가 동일함을 보장하는 암호화 기술 <br/><br/>\
# 핵심 AL <br/>\
- prefix cipher <br/>\
- cycle-walking cipher <br/>\
- generalized-Feistel cipher\
',

// 개인정보 비식별화
'# 정의: 개인 식별 어렵도록 하는 조치 <br/>\
- 데이터 내의 개인을 식별할 수 있는 정보가 있는 경우, 이의 일부 또는 전부를 삭제 또는 일부를 속성 정보로 대체 처리함으로써 다른 정보와 결합하여도 특정 개인을 식별하기 어렵도록 하는 조치<br/><br/>\
# 암기 <br/>\
- 솔루션 : A유코티시오A뮤S파 <br/><br/>\
<img src = "./img/개인정보비식별화_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/개인정보비식별화_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* EU 비식별 조치 법제 - GDPR 제52조 1항 => 개인정보보호법 제18조 제2항 제4호 유사 <br/>\
* 해외는 활용에 초점, 국내는 보호에 초점 <br/>\
* K-익명화는 국내만 적용 (강한 기술적 조치) <br/><br/>\
* De-identification : 식별 가능 정보 제거하는 일반적인 용어 <br/>\
* Anonymization : 식별 가능 정보 제거하여 다시 복원 불가능하게 만드는 방법 <br/>\
* Pseudonymizaion : 식별 가능 정보를 가명으로 대체하는 방법, 복원 가능함 => 암호화는 가명화 한 방법, 비식별화 완료 X\
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
<img src = "./img/PIA.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/PIA_Flow.png" style = "max-width:100%; height:auto;">\
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


// [개인정보 보호법]- 개인정보 비식별 조치 가이드라인 (2016.06) 
'# 정의 : 비식별 조치, 활용 기준 제시 가이드라인 <br/>\
- 국무조정실, 행정자치부, 방송통신위원회, 금융위원회, 미래창조과학부, 보건복지부 등 관계부처가 합동으로 현행 개인정보 보호 법령의 틀 내에서 빅데이터가 안전하게 활용될 수 있도록 하는데 필요한 개인정보의 비식별 조치 기준과 비식별 정보의 활용 범위 등을 명확히 제시함으로써 기업의 불확실성을 제거하여 기업투자와 산업 발전을 도모하는 한편, 국민의 개인정보인권 보호에도 소홀함이 없도록한 가이드라인<br/><br/>\
# 암기 <br/>\
- 임시 대체키 <br/>\
- 개인정보 비식별 지원센터 분야별 전문기관 <br/><br/>\
# 구성 <br/>\
1. 개인정보 비식별 조치 지원 <br/>\
- 분야별 전문기관 : 각 소관 부처 책임하, 적정성 평가풀 구성, 산업별 칠수<br/>\
- 개인정보 비식별 지원센터 : KISA, 풀관리, 컨설팅/교육 <br/><br/>\
2. 전문기관을 통한 기업간 정보집합물 결합 지원 <br/>\
- 개인별 식별자 이용 임시 대체키 생성 후 매칭키로 사용 <br/>\
- 분야별 전문기관에서 결합 지원 <br/><br/>\
3. 재식별 법적 제제 <br/>\
- 형사 처벌 : 재식별하여 이용하거나 제 3자에게 제공한 경우 <br/>\
- 행정 처분 : 즉시 파기 조치하지 않고 보관하고 있는 경우 <br/><br/>\
<img src = "./img/개인정보비식별조치가이드라인.png" style = "max-width:100%; height:auto;">\
',

// [개인정보 보호법]- 개인정보 안전성 확보조치 기준
'# 정의 : 개인정보처리자 유형(완화, 표준, 강화)에 따른 안전조치 차등 적용 기준 <br/>\
- 개인정보보호법 행자부 고시 2016-35호 2016.09.01. 시행<br/><br/>\
# 암기 <br/>\
- 목정 <br/>\
- 안내권통암기악관물제파 <br/><br/>\
# 구성 <br/>\
1. 목적 <br/>\
2. 정의 <br/>\
3. 안전조치기준 <br/>\
4. 내부 관리 계획(CPO 지정) <br/>\
5. 접근 권한 : 특정횟수 이상 오류시 제한 <br/>\
6. 접근 통제 : 일정시간 미접속시 자동 차단 <br/>\
7. 암호화 : 절차수립 <br/>\
8. 접근기록 : 6개월 <br/>\
9. 악성프로그램 방지 : 삭제 및 대응 <br/>\
10. 관리용 단말기 <br/>\
11. 물리적 안전 조치 <br/>\
12. 재해재난 : 위기대응절차, 점검, 백업, 복구계획 <br/>\
13. 파기 : 6개월 \
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
* KPC 94회 1교시 8번\
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
);
