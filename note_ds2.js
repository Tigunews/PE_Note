var question = question.concat(
'VDI',
'[GIS]- OGC',
'마이크로 그리드(MicroGrid)',
'[산업제어시스템]- SCADA',
'ISO 26262',
'IEC 61508',
'[ISO/IEC 61508]- SIL',
'HILS, HIL 시뮬레이션',
'소프트웨어 안전성 분석(Software Safety Analysis)',
'문자 인코딩',
'3D Sensing',
'오픈뱅킹(Open Banking)',
'ISO 19626',
'YOLO',
'IoMT',
'블록체인',
'[블록체인]- 합의 알고리즘',
'[블록체인]- UTXO',
'[블록체인]- 머클트리(Merkle Tree)',
'[블록체인]- 블록체인 오라클 문제',
'[블록체인]- 타원곡선 암호화 알고리즘(ECDSA)',
'[블록체인]- 스마트시티 활용',
'[블록체인]- Off Chain',
'MaaS',
'BERT',
'자율주행자동차',
'[자율주행자동차]- 트롤리 딜레마',
'[자율주행자동차]- 모랄머신',
'[자율주행자동차]- 군집주행 (Platooning)',
'[자율주행자동차]- LDM',
'Dark Net',
'RPA',
'Process Mining',
'스마트 플랜트',
'클라우드 컴퓨팅',
'[클라우드 컴퓨팅]- IaaS, PaaS, Saas',
'[클라우드 컴퓨팅]- 클라우드 컴퓨팅 정책',
'[클라우드 컴퓨팅]- 정보자원등급 평가기준(2014.04.)',
'[클라우드 컴퓨팅]- 클라우드 컴퓨팅 서비스 보안 인증 제도',
'[클라우드 컴퓨팅]- Grid Computing',
'[클라우드 컴퓨팅]- Utility Computing',
'[클라우드 컴퓨팅]- Fog Computing',
'[클라우드 컴퓨팅]- CSB',
'[클라우드 컴퓨팅]- 인터클라우드',
'[클라우드 컴퓨팅]- Kafka',
'엣지컴퓨팅',
'레그테크',
'[HPC]- Singularity',
'2020년 하반기 경제정책 방향',
'지능형CCTV',
'Data Lake',
'컨테이너 오케스트레이션',
'로보 어드바이저',
'LOD',
'Open API',
'[Open API]- SOAP API',
'[Open API]- REST API',
'Service Worker',
'Ontact',
'스마트 팩토리',
'Edge Computing',
'서버리스 컴퓨팅',
'Web Crawling',
);

var answer = answer.concat(
// VDI 
'# 정의 : Virtual Desktop Infrastructure; 가상데스크톱 인프라 <br/>\
- 소프트웨어를 이용해 데스크탑을 가상화하고, 이를 중앙에서 사용자 환경으로 제공하는 기반기술 <br/><br/>\
<img src = "./img/VDI.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 단말기(Zero Client, Thin Client, PC) <br/>\
- 세션 브로커 서버 : 사용자인증 등 정책적용 <br/>\
- 인증 서버(Active Directory) <br/>\
- 하이퍼바이저(Hypervisor) : 가상화 플랫폼- VM ware, vSphere5 <br/>\
- 가상머신 운영 서버 : OS, Hypervisor, Application등 설치, 사용자별 가상환경 제공 <br/>\
- 공유 스토리지 : 이미지 파일, 업무자료 등 저장 공간 <br/><br/>\
# 프로토콜 구현방법 <br/>\
- Client rendering <br/>\
1) 개념 : Host VM 전송 다수의 그래픽 명령어를 Client의 GPU 사용 렌더링 <br/>\
2) 장점 : 대역폭 작아 WAN 적용 용이 <br/>\
3) 단점 : 프로토콜 복잡, Client 성능 요구 <br/>\
- Host Rendering <br/>\
1) 개념 : 호스트 CPU, GPU 활용 렌더링 수행 후 화면 캡쳐, 압축, 암호화해 클라이언트 전송 <br/>\
2) 장점 : 2D/3D 및 어플 무간 사용 가능 <br/>\
3) 단점 : 렌더링/압축부하, NW 대역폭 요구 <br/><br/>\
# RISK <br/>\
- 성능 불만족 : 도입시 PoC 통한 만족도 조사 <br/>\
- SPoF : 이중화 <br/>\
- 주변기기호환성 : 주변기기 표준화 <br/>\
- 어플리케이션 호환성 : BMT통한 호환성 조사 <br/>\
- NW 대역폭 고갈 <br/><br/>\
# 도입시 BMT 항목 <br/>\
- 인프라 : 모니터링 기능, 배포기능, 원격관리, Thin Provisioning <br/>\
- 보안성 : 저장매체 제어, 권한인증, 클립보드 통제 <br/>\
- 호환성 : 외장장치 지원, Application, OS지원 <br/>\
- 사용자편의성 : 모바일 지원, 해상도, 동영상 <br/>\
- 안전성 : HA, NW 단절대응 <br/>\
- 서버성능 : CPU, QoS, 백업 및 복원, 워크로드(VM동시가동시 최종 가동된 VM 로그인 시간), 최대 IOPS(Host제공 가능 최대 Disk I/O 성능), 집적도(서버당 운영가능 VM 수) <br/>\
- VM성능 : VM IOPS(VM에서 제공가능 최대 Disk I/O 성능), 부팅시간, 실행속도, 체감속도 <br/>\
- NW : Host 트래픽, VM 트래픽 <br/><br/>\
# 도입시 고려사항 <br/>\
- 효과성 : 사용자 만족도, TCO검증, 라이선스 확인(접속용 PC/Thin Client OS, VM OS 라이선스 2중 부담 발생 가능), 보안 정책 연계 <br/>\
- 프로젝트 : 단계별 구축, 안정화기간 확보, 변화교육, 안정적 운영골 <br/><br/>\
* BMT : Bench Marking TEST <br/>\
* POC : 새로운 솔루션을 현장에서 검증 받는 것 <br/>\
',

// OGC
'# 정의 : 지리정보 상호 운용성 제고 비영리 단체 / 미국 / 1994 / 이질적 환경 <br/>\
- Open GIS Consortium <br/>\
- 1994년 각기 다른 하드웨어와 소프트웨어를 가진 이질적인 환경에서 지리정보의 상호운용성을 제고하려는 목적으로 미국에서 창립된 비영리 단체 <br/><br/>\
# OWS(OGC Web Service) : 데이터 마트에 접근하고, 이 데이터를 분석,처리하여 표현할 수 있는 일련의 서비스 처리 체계 <br/>\
- 구성 : WMS, WFS, WCS, WPS, CSW <br/><br/>\
# WMS(Web Map Service) : 데이터 서버에 저장된 레이어 또는 분석을 통해 생성된 벡터 및 래스터 데이터를 Visualization 하는 서비스 <br/>\
- 주요기능 : Basic WMS(Get Capabilities, GetMap), Queryable WMS(GetFeatureInfo, GetMap, Opeartion), GetLegendGraphic, GetStyle, PutStyle <br/><br/>\
# OGC 현황 : 국토교통부의 국토공간계획지원체계(KOPSS)사업의 일환으로 OGC 표준의 활용을 통한 오픈 API서비스 제공 <br/><br/>\
* WMS : Web Map Service <br/>\
* WFS : Web Feature Service <br/>\
* WCS : Web Coverage Service <br/>\
* WPS : Web Processing Service <br/>\
* CSW : Catalogue Service\
',

// 마이크로 그리드
'# 정의 : 소규모지역 에너지 공급 전력 체계 <br/>\
- 스마트그리드의 일종으로 재생에너지를 사용해 소규모지역에 자급자족할 수 있는 에너지를 제공하는 전력체계 <br/>\
- 지역화된 전력망으로 수용가와 풍력, 태양광 등의 분산 에너지 자원(DER)을 연결한 전력망으로 전체 전력 계통과 독립적(off-grid)으로 동작하여 전력의 자급자족이 가능하며, 필요에 따라 계통과 연결(on-grid)되어 동작할 수도 있는 전력망<br/><br/>\
# 암기 <br/>\
- 표준 : IEEE 1547, IEEE P2030.7, IEC 61850 <br/>\
- 현황 <br/>\
1) L(안.지)K(DR)포(운플) <br/>\
2) 미국비치.GE제어 <br/>\
3) GM벨에 <br/><br/>\
# 구성 : 기존계통(한전), 통합운영시스템, 마이크로그리드 <br/><br/>\
# 주요기술 : 스마트계통 운영기술(SCADA, DAS, EMS), AMI, HAN, Smart Meter, 보안기술, 신재생 에너지, 연계 및 충전 기술 <br/><br/>\
# 취약점 <br/>\
- 행동 유형별 : 행동패턴, 사용기기파악 <br/>\
- 데이터 유형별 : 에너지사용 데이터, 전기차 충전 정보, 사용자 장비 보유현황 <br/>\
- 구간별 : 운영센터, 연계구간, 사용자기기 <br/><br/>\
# 대응 <br/>\
- 관리적 : 정보보호체계, 보안관제, 침해사고 대응 계획 수립 <br/>\
- 기술적 : IoT 공통 보안 <br/><br/>\
# 정책 <br/>\
- 비전 : 중소기업 참여와 민간자본투자를 통한 자생력을 갖춘 에너지 신산업 조성(2014.07.) <br/>\
- 목표 : 2017까지 2조 8백억원 시장 조성, 1만 2백개 일자리 창출 <br/>\
- 분야 : 기후변화대응 신산업 => ICT 활용 수요관리, 그린 빌리지 구축 <br/>\
- 신사업 모델 : ICT활용수요관리 전력수요관리, 에너지 통합 서비스, 전기차 서비스 및 유료충전, 그린빌리지 구축(태양광 렌탈, 독립 마이크로그리드, 온배수열 활용) <br/><br/>\
# 표준<br/>\
- IEEE 1547 : 전원 시스템과 분산형 자원의 상호접속을 위한 표준<br/>\
- IEEE P2030.7 : 마이크로 그리드 컨트롤러 사양 표준 <br/>\
- IEC 61850 : 표준 기반의 분산형 전원(DER) 시스템의 정보모델에 대해 국제 표준화 <br/><br/>\
# 현황 <br/>\
- 독립형 마이크로 그리드 : 가파도, 마라도, 가사도 실증연구, 울릉도 실증 사업 추진 <br/>\
- 계통 연계형 마이크로 그리드 : KETEP 정부지원과제로 전력 IT 10대 과제중 마이크로그리드, K-MEG 등 통하여 실증단지 수준으로 구현, 본격 시장 형성 전 <br/>\
- LS산전 : 안산을 탄소 제로 에너지자립도시, 인천시 덕적도 인근 작은섬 "지도"가 에너지 자립섬으로 구축 <br/>\
- KT : 도시내 구축 스마트 그리드 기반으로 수요반응 기반 전력거래/판매사시스템 구축, 신재생 발전원/가정용저장장치등 계통 운영과 연계한 통합 운영센터 개발중 <br/>\
- 포스코ICT : 도서,도심,산업용 마이크로 그리드 운영플랫폼 개발, 전남 신안군 수행, 일본 해외 사업 추진 <br/>\
- 현대 중공업 : SG확산사업을 통해서 조선과 석유화학공장에 EES, AMI, 에너지 관리 시스템 구축, 전력거래 인프라 개발 <br/>\
- 미국<br/>\
1) 2014년 군사용 마이크로그리드들 비롯하여 전체 마이크로그리드 1GW 상용화 추진 <br/>\
2) Beach Cities Microgrid, IIT Perfect Power, CERTS Microgrid demonstration(Santa Rita Jail)등을 포함하여 총 9개의 프로젝트를 추진 <br/>\
- EU <br/>\
1) Grid4EU(12개 EU국가의 27개사가 참여)<br/>\
2) NiceGrid : 마이크로 그리드 프로젝트, Grid4EU의 6개 스마트그리드 프로젝트 중 하나 <br/>\
3) Issy Grid : City Microgrid / 프랑스 최초 도시형 마이크로 그리드 <br/>\
- GE, ABB, Siemens 등 기업들은 마이크로 그리드용 제어 시스템을 상용화 <br/>\
- General Microgrids(미국) : "Balance Energy"라는 에너지 S/W 플랫폼, 각종 컨설팅 및 엔지니어링 서비스 제공\
',

// [산업제어스템]- SCADA
'# 정의 : 중앙 제어 시스템 원격 감시,제어 시스템 / 통신 경로상 신호 사용 <br/>\
- Supervisiory Cotnrol And DataAcquisition <br/>\
- 통신 경로상의 아날로그 또는 디지털 신호를 사용하여 원격장치의 상태정보 데이터를 RTU로 수집/수신/기록/표시하여 중앙 제어 시스템에 원격 장치를 감시 제어하는 시스템 <br/><br/>\
# 암기 <br/>\
- 구성(5) : H감NRP <br/>\
- 기능 : 지누경감 <br/><br/>\
# 구성 : HMI, 감시시스템, RTU(Remote Terminal Unit), PLC(Programmable Logic Controller) / PAC, 통신 N/W <br/><br/>\
# 기능 <br/>\
- 지시/표시 : PLCs가 수집한 상태정보를 수신/기록/표시 <br/>\
- 누산기능 : 정보를 용도에 맞게 계산 <br/>\
- 경보기능 : 상태변화에 따라 알람 <br/>\
- 감시/제어 : 관제대상 모니터링 하고 원격제어 <br/><br/>\
# 보안 취약점 : 정보노출, 불완전한 NW 아키텍처, 실시간 모니터링 부재 <br/><br/>\
# 보안 요구사항 : 접근제어, 기무가, 인증, 접근차단 및 탐지, 보안정책, 감사기록 <br/><br/>\
<img src = "./img/SCADA.png", style = "max-width:100%; height:auto;">\
',

// ISO 26262
'# 정의 : 차량 탑재 기능안전 규격 <br/>\
- 차량에 탑재되는 SW오류로 인한 사고를 방지 위한 기능안전규격이며 차량의 전기전자장치의 기능 안전성에 관한 요건을 정의한 표준<br/><br/>\
# 암기 : 용.기.구.시.하.소.생/운.지.A.가.반.모 <br/><br/>\
# 목차<br/>\
1. Vocabulary 용어 <br/>\
2. Management of functional saety 기능안전성 관리 : 프로젝트 관리활동, 안전성 관리계획, 조정, 추적 요건 <br/>\
3. Concept design 구상단계 : 안전목표, 매커니즘 정의, ASIL 판정 <br/>\
4. Product development : System level 제품개발, 시스템 레벨(시스템 수준 기술 요구사항, 시스템 디자인, 테스트, 검증, V모델) <br/>\
5. Product development : H/W 제품개발, HW레벨(V모델 따른 HW 요구사항)<br/>\
6. Product development : S/W 제품개발, SW레벨(SW요구) <br/>\
7. Production and operation 생산 및 운용(생산위한 계획, 요구사항) <br/>\
8. Support process 지원 프로세스(명세방법, 형상,변경관리 요구) <br/>\
9. ASIL-oriented and safety-oriented analysis ASIL 및 안전 중심의 분석(ASIL 분석방법) <br/>\
10. Guideline on ISO 26262(informative) 가이드라인 <br/>\
11. ISO 26262 반도체 적용 가이드라인(반도체 아날로그, 디지털 부품대한 적용 지침 및 고장 분석 방법 등) <br/>\
12. 모터사이클 적용(적용방법)<br/><br/>\
* Second Edition 11, 12 추가 \
',

// ISO 61508
'# 정의 : 기능안전에 대한 국제 규격 <br/><br/>\
# 구성요소 : 안전 수명주기 / 하드웨어 / 소프트웨어 <br/><br/>\
# Frame work : 요구사항 개발 / 요구사항 할당 / 시스템, SW 개발 / 설치 및 점검 / 운영 및 유지보수 <br/><br/>\
# 상세 내용 <br/>\
- Part 1 : 일반요구사항<br/>\
- Part 2 : 전기/전자/프로그래머블 전자 안전 관련 시스템에 대한 요구사항 <br/>\
- Part 3 : 소프트웨어 요구사항 <br/>\
- Part 4 : 용어의 정의 및 약어 <br/>\
- Part 5 : 안전도 수준 결정 방법의 사례 <br/>\
- Part 6 : Part 2 및 Part 3 적용 지침 <br/>\
- Part 7 : 기술 및 방법의 개관 <br/><br/>\
# 임베디드 소프트웨어 품질관리 요구 특징 <br/>\
- Mission Critical : 소프트웨어 기능 수행 결과의 정확성 <br/>\
- Timing Critical : 정해진 시간내 수행해야 하는 신속성 <br/>\
- Safety Critical : 어떠한 환경에서도 동작해야 하는 안전성 <br/><br/>\
# 위험도 : R = FC(Risk, Frequency, Consequence(심각,중요도)) <br/>\
- 심각도 평가 Tools : FTA, FMEA, FMEDA, FMECA <br/><br/>\
# SIL : Safety Integrity Level ; 기능 안전이 요구되는 임베디드 시스템이 1년에 한번 오동작할 확률 10^-4라고 간주 <br/><br/>\
<img src = "./img/SIL.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ISO61508.PNG" style = "width:100%; height:auto;">\
',

// [ISO/IEC 61508]- SIL
'# 정의 : ISO/IEC 61508 안전성 보전 등급<br/>\
- Safety Integrity Level <br/>\
- Risk 정보에 따라 안전관련 시스템의 기능이 갖추어야할 사항을 규정한 등급 <br/><br/>\
# 구성 <br/>\
- High demanded rate : 안전 관련 기능 대한 사용이 계속적으로 발생시 적용 (ex: 센서) <br/>\
- Low demand rate : 사용빈도수 대략 년 회 미만시 (ex: 에어백) <br/><br/>\
<img src = "./img/SIL.png", style = "max-width:100%; height:auto;">\
',

// HILS
'# 정의 : 실시간 시뮬레이션 기술 <br/>\
- Hardware in the loop Simulation <br/>\
- 제어 대상 하드웨어(자동차, 항공기, 선박, 기계)를 가상의 모델로 구현하고 이를 제어하는 실제 제어시스템을 시험 플랫폼에 연동시켜 실시간 시뮬레이션을 하는 기술<br/>\
- 하나 또는 여러 개의 실제 컴포넌트가 실시간으로 시뮬레이션 되는 컴포넌트들과 상호작용하며 제품을 평가하는 기술<br/><br/>\
# 기반기술 <br/>\
- Control System : 제어 시스템 <br/>\
- Plant : 제어대상 <br/>\
- HIL Simulator : 제어기에 필요한 센서의 입력 생성/제어 신호처리 <br/>\
- 가상현실 <br/>\
- 시스템 통합 <br/><br/>\
# 활용 : 자동차의 경우 완성된 ECU의 기능을 검증하고, 한계를 시험해 차량의 성능과 안전을 확보 <br/><br/>\
<img src = "./img/HILS_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/HILS_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 국내의 경우, HILS 기술을 상용화하여 실적을 가진 기업이 없음\
',

// 소프트웨어 안전성 분석
'# 정의 : 안전성 만족 확인 활동 / 안전 필수 시스템 개발시 <br/>\
- 안전 필수 시스템 개발시 시스템이 만족해야 할 안전성을 만족하는지 확인하는 활동<br/><br/>\
# 유형 <br/>\
- 귀납적/정성적 방법(FMEA(이상위험도분석), HAZOP(위험과 운전분석), 연역적/정량적방법(FTA(결함수분석)) <br/>\
- FHA(Functional Hazard Assesment) : Failure를 유발하는 기능(function)을 찾아내는는 기법 <br/>\
- PHA(Preliminary Hazard Analysis) : 위험 식별과 원인, 영향 등을 밝혀낼 수 있는 안전성 분석 기법 <br/>\
- STAMP(System-Theoretic Accident Model and Processes) : 단순한 컴포넌트 고장 외에도 컴포넌트간의 상호작용도 포함하여 고장의 원인을 분석하는 기법 <br/>\
- STPA(System theoretic process analysis) : STAMP를 기반으로 하는 모델의 안전성 분석을 위해 개발된 기법 <br/>\
- TFT(Temporal Fault Tree) : FTA 기법에 Temporal Gates를 추가하여 시간 변화에 따른 안전성을 분석하는 기법 <br/><br/>\
<img src = "./img/SSA_1.png", style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SSA_2.png", style = "max-width:100%; height:auto;">\
',

// 문자 인코딩 
'# 정의 : 통신 목적 부호화 <br/>\
- 문자나 기호들의 집합을 컴퓨터에서 저장하거나 통신에 사용할 목적으로 부호화하는 방법',

// 3D Sensing
'# 정의 : 입체적 센싱 기술 <br/>\
- 객체의 심도 정보(Depth Information)를 파악할 수 있는 입체적 센싱 기술',

// 오픈뱅킹
'# 정의 : 은행 금융 서비스 표준화 형태 제공 인프라 <br/>\
- 핀테크 기업이 금융 서비스를 편리하게 개발할 수 있도록 은행의 금융 서비스를 표준화된 형태로 제공하는 인프라 <br/><br/>\
# 등장 배경 <br/>\
1. 데이터 주권 강화 <br/>\
- 마이데이터 도입 : API 정보제공 필요 <br/>\
- 개인화 서비스 : 핀테크사, 개인정보 활용, 서비스 제공 <br/>\
2. 개방형 혁신 <br/>\
- 금융산업 경쟁촉진 : 금융거래 API 개방 / Baas <br/>\
- 신규 비즈니스 : 오픈플랫폼 생태계 / 핀테크 비즈니스 진출 <br/>\
3. 대외환경 변화 <br/>\
- EU PSD2 : EU내 은행이 핀테크 업체에게 오픈 API 제공 -> 유럽 핀테크사 경쟁력 강화 <br/>\
- 영국 오픈뱅킹 : 9대 주요 은행 계좌에 적용, 단일 API를 핀테크 업체에 제공 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/오픈뱅킹구성요소.PNG" style = "max-width:100%; height:auto;">\
',

// ISO 19626
'# 정의 : 신뢰성 있는 통신 플랫폼 <br/>\
- TCP는 개방되고 분산된 환경에서 상거래, 전자정부, 제조, 산업, 의료, 기타 업무에서 높은 신뢰성이 필요한 통신 관련 사항을 규약',

// YOLO
'# 정의 : 딥러닝 기반 객체 탐지 기술<br/>\
- You Only Look Once\
',

// IoMT
'# 정의 : 의료사물인터넷 / 의료중심 건강관리 시스템 구현 <br/>\
- Internet of Medical Things<br/>\
- 의료사물인터넷. 개인의 생활습관, 신체검진, 의료이용정보, 질병 이력, 유전체정보 등 다양한 데이터를 통해 환자의 증상 및 치료 관리 현황을 꾸준히 모니터링해 공백이 발생하지 않도록 하는 개인중심의 건강관리시스템을 구현',

// 블록체인 
'# 정의 : Block 기반 Cahining Data Record <br/>\
- Block을 연속적으로 Chain한 다음, 지속적으로 성장하는 데이터 기록 연결 리스트 형태이며 분산 DB와 유사 <br/><br/>\
# 특징 <br/>\
- 이중지불방지를 위하여 작업증명(POW, Proof Of Work), 소유증명(POS, Proof Of Stake) 필요 <br/>\
- 위,변조 불가 <br/>\
- Ripple : 금융거래를 위한 인터넷 프로토콜 <br/>\
- Ethereum : 클라우드 컴퓨팅 플랫폼 또는 프로그래밍 언어 <br/><br/>\
# 블록체인 프로세스 <br/>\
- 하나의 거래를 기본단위로 기록 <br/>\
- 송,수신자, 내용으로 구성 + Alpha <br/><br/>\
<img src = "./img/BlockChain_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 블록체인 연결구조 <br/>\
<img src = "./img/BlockChain_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 블록체인의 종류 <br/>\
1. Public <br/>\
- 초기형 <br/>\
- 인터넷 기반으로 참여자 모두에게 공개되는 운용장부 <br/>\
- 네트워크 참여자 누구든지 공증참여 가능 <br/>\
- 현재 활용되는 기술 (비트코인) <br/><br/>\
2. Private <br/>\
- 개인형 <br/>\
- 1개의 주체가 연결된 전산망을 블록체인으로 관리 <br/>\
- 2016년 활용 예상 (주식거래) <br/><br/>\
3. Consortium <br/>\
- 반중앙형 <br/>\
- 미리 선정된 n개의 주체들을 중심으로 참여 합의된 rule과 공증방식 활용 <br/>\
- 2017년 이후 활용 예상 (금융권 거래, 자기주권 신원증명) <br/><br/>\
# 블록체인 구성요소 <br/>\
1. 작업증명 (POW, Proof Of Work) <br/>\
- 채굴 <br/>\
- 거래승인 과정에 많은 컴퓨팅 파워가 필요한 어려운 작업(반복연산 문제 풀기 등)을 포함시키고, 이 과정을 통해 가장 많은 구성원들이 가지고 있는 블록체인을 진짜로 인식해 다른 기록 은폐하기 위한 기술 <br/>\
- 51% Attack <br/>\
- 거래 검증 매커니즘 <br/>\
- 각 노드의 계산능력 중요 <br/>\
- 비트코인 기술의 핵심 <br/>\
- 악의적 변조 방지 <br/>\
- 중복지출(Double Spending) 방지 <br/><br/>\
2. 소유증명 (POS, Proof Of Stake) <br/>\
- 사용자에게 블록(코인)의 소유권 증명 <br/>\
- POW 보완 하기 위한 기술 <br/>\
- 블록의 보유량(잔액)에 따라 각 노드의 결정권 평가 <br/>\
- 이해관계 증명, 지분증명 <br/><br/>\
3. 중요도증명 (POI, Proof Of Importance) <br/>\
- 블록의 보유량(잔액)에만 의존하지 않고 경제 전반에 긍정적으로 평가되는 다른 행동들 모두 고려 <br/>\
- 소유증명과 유사 <br/>\
- 적극 참여자 보상 <br/><br/>\
4. 블록 <br/>\
- Header + Body <br/>\
- Chain 연결 <br/>\
- 헤더는 이진블록 해쉬값, 바디는 트랜잭션의 연결 <br/><br/>\
5. 암호화 <br/>\
- 블록 유효성 검증 알고리즘 (이중-SHA256 해시값) <br/>\
- 공개키 암호화 (Public Key Encryption) <br/>\
- 전혀 예측 불가능한 유사 난수 함수 (pseudo random function 설계) <br/><br/>\
6. P2P NW <br/>\
- 공인된 제3자의 공증 없이 개인간 거래 기능 <br/>\
- 공유된 거래는 다수가 공동으로 소유 <br/>\
- 불필요한 수수료 절감 <br/>\
- 보안성 유지 <br/><br/>\
# 블록체인 활용 분야 <br/>\
- 금융 : 전자화폐, 해외송금, 장외거래 <br/>\
- 산업 : 소유권 증명, IoT 플랫폼, 전자상거래 <br/>\
- 보안 : 데이터 보호, 메시지 보호, 인증서 <br/><br/>\
* 그리타\
',

// 합의 알고리즘
'# 정의 : P2P에서 하나의 블록체인 유지하기 위한 기술 <br/><br/>\
# 원리 <br/>\
<img src = "./img/ConsensusAlgorithm.png" style = "max-width:100%; height:auto;"><br/>\
- 거래의 독립적 검증 : 유효 전파, 무효 폐기<br/>\
- 작업증명 및 신규 블록 추가 : 증명된 계산법, 검증 거래<br/>\
- 신규 블록 검증 : 모든 신규블록 검사 <br/>\
- 수집 및 선택 : 누적 연산 체인 독립적 선택 <br/><br/>\
# 종류 <br/>\
1. 경쟁 합의(Public) 방식 <br/>\
- PoW (Proof of Work) : 모든 노드 승인 / Bitcoin, Ethereum <br/>\
- PoS (Proof of Stake) : 일부 노드 승인 / Qtum, NEO <br/>\
- PoI (Proof of Importance) : 참여도 보상 지급 / NEM <br/>\
- Casfer : 예치금 걸고 투표 참여 / Ethereum <br/><br/>\
2. 비경쟁 합의(Private) 방식 <br/>\
- PBFT (Practial Byzantine Fault Tolerance) : 참여 노드의 다수결 / Hyperledger, R3 <br/>\
- Slive : 합의 형성전 결과 같은 경우 중지 / Hyperledger <br/>\
- PoET (Proof of Elapsed Time) : 작업 경과시간 증명 기반 리더 선출 / Sawtooth Lake <br/>\
- PoA (Proof of Authority) : 개인 신원 이용 검사 / Luniverse <br/><br/>\
# 한계 : 51% 공격, 서비스 거부 <br/><br/>\
* 122회 2교시 2번\
',

// [블록체인]- UTXO
'# 정의 : 블록체인의 미사용 거래출력값 <br/>\
- Unspent Trasnsaction Output <br/>\
- 블록체인에 기록된 "미사용 거래 출력값"을 이용하여 거래의 유효성을 검사하여 코인의 존재여부를 확인. 비트코인과 퀀텀은 이 UTXO를 사용.',

// [블록체인]- 머클트리
'# 정의 : 블록체인 내의 각각의 블록에 존재하는 트리 <br/>\
- 머클 트리는 수많은 Tx(트랜잭션)을 각각 Hashing 하여  2개씩 짝 지어서 또 해싱하고 반복하여 최종적으로 하나가 남을 때까지 해싱을 한 트리<br/>\
- 해시트리의 일종으로 Ralphmerkle이 고안한 모든 비 리프노드의 이름이 자식들의 해시로 구성된 트리 <br/>\
블록체인 내 다수의 거래내역을 각각 해싱하고 합치는 과정을 반복하여 최종적으로 하나가 남을 때까지 해싱하 이진트리 <br/><br/>\
<img src = "./img/DS2_20_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/DS2_20_2.PNG" style = "max-width:100%; height:auto;">\
',

// [블록체인]- 블록체인 오라클 문제 
'# 정의 : 블록체인 밖에 있는 데이터를 블록체인 안으로 가져올 때 발생하는 문제<br/>\
- 블록체인 밖의 데이터를 오프체인(Off-Chain), 그 데이터가 블록체인 안으로 들어온 것을 온체인(On-Chain).',

// [블록체인]- 타원곡선 암호화 알고리즘
'# 정의 : 암호기술 / 유한체 / 타원 곡선 성질 <br/>\
- Elliptic Curve Cryptography <br/>\
- 유한체(finite field) 상의 타원 곡선의 수학적 성질을 이용한 암호 기술 <br/><br/>\
# 타원곡선 연산 <br/>\
<img src = "./img/ECC_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 이산대수 문제 (ECDLP) 기반 암호체계 <br/>\
- 선택성 : 유한체상 다양한 타원곡선 선택 가능 <br/>\
- 설계 안전성 : 안전한 암호 시스템 설계 용이 <br/>\
- 고효율성 : 256(ECC) / 3072(RSA) <br/><br/>\
# 한계 <br/>\
- 구현 어려움 <br/>\
- 메시지 확장 2배 <br/><br/>\
# 타원곡선 암호화 <br/>\
- 방정식 :  Q = x * G <br/>\
- Q : 공개키, 개인키로부터 연산 <br/>\
- x : 개인키, p보다 작은 소수로, 난수 생성기로 생성 <br/>\
- G : 생성자, 타원곡선 상의 임의의 점 <br/><br/>\
# 적용분야 알고리즘 <br/>\
- 디지털 서명 : ECDSA <br/>\
- 키교환 : ECDH <br/>\
- 난수생성 : Dual-EC DRBG <br/>\
- 암/복호화 : EC-KEM <br/><br/>\
* 86회 라이지움 1교시 7번 \
',

// 스마트시티 블록체인
'# 활용 방안 <br/>\
1. 스마트 시티 공간정보 분야 <br/>\
- Digital Twin 스마트시티 계획 운영관리 모델 <br/>\
- FOAM (the Future of Proof Location) : 인증 관련 공개 규약 <br/>\
- CSC (Crypto-Spatial Coordinate) : 블록체인 기반의 공개 위치 표준 제시 <br/><br/>\
2. 스마트 시티 인프라 관리 <br/>\
- 부동산 분야 토지장부시스템 적용 <br/>\
- 도로, 교통, 항망, 건축물등 도시기반시설 운영 인프라 <br/><br/>\
3. 블록체인 기반 도시에너지 관리 <br/>\
- 에너지 데이터 분산 원장 기록 <br/>\
- 소비패턴 분석, 수요예측, 스마트 그리드 관리, 에너지 투자 결정, 에너지 교환등 비즈니스 모델 제공 <br/><br/>\
# 적용 사례 <br/>\
- 에스토니아 : 블록체인 이용한 범국가적 스마트시티 전략 (온라인 대선) <br/>\
- 두바이 : 도시자체 블록체인 기반의 스마트 도시화(도시 전반 행정 도입) <br/>\
- 중국 : 블록체인 스마트 정책 (공공과 민간 협력, 항저우 시범도시 구축) <br/><br/>\
# 고려사항 <br/>\
- 산업 생태계 활성화 <br/>\
- 운영,관리 주체 명확 <br/>\
- 제도 구축 정비 <br/><br/>\
* 스마트 시티 3계층 : 인프라, 데이터, 서비스 \
',
  
// Off Chain
'# 정의 : On-Chain 기능 확장 <br/>\
- 메인 블록체인 네트워크의 속도 향상 및 확장성을 확보하기 위해, 메인 블록체인 외부에서 트랜잭션을 처리 및 저장하는 별도의 체인 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/OffChain.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형 <br/>\
- Side Chain : 빠르게 수행, Main 반영 / DappCoins <br/>\
- Child Chain : 분산/병렬 처리, 하위 / Plasma <br/>\
- Lightning Network : 개별 처리, 결과만 기록 / 아마존 상품권 <br/><br/>\
* 아이리포 23회 1교시 1번\
',

// MaaS
'# 정의 : Mobility Open API 기반 서비스 연계 플랫폼 <br/>\
- Mobility as a Service <br/>\
- 복잡한 도시의 교통난, 주차난을 극복하기 위해 잔여 자동차를 활용하여 고객수요 예측, 분석을 통해 맞춤형 서비스를 연계하는 통합 서비스<br/>\
Mobility를 기반으로 오픈 API기반으로 다양한 서비스를 연계 및 제공하는 플랫폼 서비스',

// BERT
'# 정의 : 언어표현 사전 훈련 방법 / 2018년 구글 <br/>\
- Bidirectional Encoder Representations from Transformers <br/>\
- 2018년 구글에서 공개한 Language Representation Model로 언어 표현을 사전 훈련하는 방법<br/>\
큰 텍스트 모음(BooksCorpus 및 Wikipedia)에서 범용 "언어 이해"모델을 학습한 다음 해당 모델을 다운 스트림 NLP 작업(미세 조정)에 사용하는 모델',
  
// 자율주행자동차
'# 정의 : 최첨단 자동차 / 상황인식 / 정보파악 / 기계제어 / 스스로 주행 <br/>\
- 센서를 통한 상황인식, 전자제어장치 등에서 그 상황에 대한 정보를 파악,판단 기계장치들을 제어,스스로 주어진 목적지까지 주행하는 기능을 가진 최첨단 자동차 <br/><br/>\
# 암기 <br/>\
- 분류(3) : 완인운 <br/>\
- 센서기술(4) : GRL카 <br/>\
- Level5 : 비기조제완 <br/>\
- 기술표준(4) : 혼고주차 <br/><br/>\
# 분류 : 완전, 인프라, 운전자보조 <br/><br/>\
# 기술 <br/>\
- 자동차 제어 기술 : X-by-wire, Break-by-wire, Steer-by-wire, Shfit-by-wire <br/>\
- 차량용 센서 기술 : LIDAR센서, 레이더, 영상, 초음파센서, GPS <br/>\
- 차량 통신 기술 : WAVE, V2X <br/>\
- 판단 기술 : 상황인식, 기계학습, 최단경로 알고리즘 <br/>\
- 서비스 기술 : Head-up Display, TTS, 음성인식, HVI <br/><br/>\
# 센서 기술 <br/>\
- RADAR(Radio Detection and Ranging) : 차량, 도로시설물 감지, 크루즈 컨트롤, 전방충돌경보 <br/>\
- LIDAR : 전자기파 대신 빛, 정밀센서, 360도, 3D, 보행자 감지, 자동주차 <br/>\
- 카메라 : 차선,보행자-광학계 영상 취득처리, 운전자 상태감지, 동작인지 <br/>\
- GPS : 현 차량 정확 측위위해 위성신호 수신 <br/>\
- AGPS : 재 기동시 빠른위치 정보수집 <br/>\
- DGPS : 수십 cm내의 오차 <br/><br/>\
# 멀티미디어 플랫폼 <br/>\
- 인포테인먼트 : Embedded Linux <br/>\
- QNX : 개발, NewTrino커널 내장 프로세스 기반 RTOS <br/>\
- WindowCE(Win32 API, 세마포어 및 256 단계 우선순위 지원) <br/>\
- Android : 구글 개방형 모바일 플랫폼 <br/><br/>\
# MiddleWare <br/>\
- AutoSAR : SW 컴포넌트(응용SW는 Comp로 구성) <br/>\
- Runtime 환경 : ECU, 정보교환 <br/>\
- Basic SW : 표준화된 SW계층으로 SW컴포넌트 서비스 제공 <br/><br/>\
# OS <br/>\
- OSEK : 선점형 커널, 스케줄러(16대기 큐 FIFO) <br/>\
- 이벤트와 자원관리 <br/>\
- 응용 PGM개발 : 파일관리, API호출 <br/><br/>\
# 현황 : 트럭 플래투닝 - GPS,INS,라이더 <br/>\
- 2016.11. LG 전자 : 자동차 SW 개발 표준 ASPICE 레벨 3인증과 SW 프로젝트 역량 평가모델 CMMI 레벨 3 재인증 <br/>\
- 미 교통국(DOT) 산하 도로교통안전국(NHTSA) 자율주행자동차 가이드 라인 발표 (2016.09.) <br/>\
- 네이버 국토 교통부에 자율주행 임시 운행 허가 신청(2016.12.) -> 임시 허가 받아도 운전자 두명 탑승 필요 <br/>\
- 레벨4 수준, 고가 센서 장착, 구글 무인차 처럼 벨로다인의 라이다 탑재, 전면부 비디오 카메라 설치, 전면 레이다 전후측방 울트라 소닉 센서 부착 <br/>\
- 미래부 자율주행차 탑재될 레이더 센서 용 주파수로 77~81GHz 대역 4GHz 폭 분배 확정 (2106.12.) <br/><br/>\
# 기술표준 운전 추진 <br/>\
1) 혼잡구간 주행지원(TTJ) <br/>\
2) 고속도로 자동조종(HAP) <br/>\
3) 자동주차 (PAPS) <br/>\
4) 자동 차로 변경 (ALS) <br/><br/>\
* ISO26262, AutoSAR <br/>\
* HAP : Highway Auto Pilot <br/>\
* PAPS : Patraly Automated Parking System <br/>\
* ALC : Automatic Lane Change <br/>\
* 아폴로 플랫폼 <br/>\
* 스마트더스트 c-its 연계 가능 <br/>\
<img src = "./img/자율주행자동차_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/자율주행자동차_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// [자율주행자동차]- 트롤리 딜레마 
'# 정의 : 윤리학의 사고실험 / 필리파 푸트 제시 / 주디스 톰슨 분석 <br/>\
- 필리파 푸트(Philippa Foot)가 제시하고 주디스 톰슨(Judith Thormson)이 체계적으로 분석한 윤리학의 사고실험  <br/><br/>\
# 암기 <br/>\
- 문제점 해결 : 사회적 합의, 법/제도 /정책 수립 <br/><br/>\
# 이슈 : 운전자를 보호할 것인가, 보행자를 보호할 것인가, 다수를 보호할 것인가, 소수를 보호할 것인가 <br/><br/>\
# Jean-Francois Bonnefon 연구팀의 Amazon 직원 대상 실험 결과 <br/>\
- 여러 사람을 살릴 수 있도록 설계되어야 한다는 공리주의적인 응답이 지지를 받음 <br/>\
- 그러나, 자기 자신과 가족들은 그 차에 타지 않겠다는 모순적 의견이 함께 나타남 (자기자신이 죽을 수 있기 때문에) <br/><br/>\
<img src = "./img/트롤리딜레마_1.png" style = "max-width:100%; height:auto;">\
',

// [자율주행자동차]- 모랄 머신 
'# 정의 : MIT 윤리적 딜레마 실험 <br/>\
- MIT에서 인간의 윤리적인 딜레마를 실험한 것으로, 자율주행차에 인간적이고 도덕적인 지식을 부여하는 효과적인 방법을 찾아내는 실험방법(알고리즘) <br/>\
<img src = "./img/MoralMachine.PNG" style = "max-width:100%; height:auto;">\
',

// [자율주행자동차]- 군집주행
'# 정의 : V2X 통신 기반 그룹 주행 <br/>\
- 차량간 통신과 차량과 인프라간 통신 환경을 기반으로 주행하는 차량간에 그룹 형성, 그룹 주행, 그리고 그룹 이탈 과정을 포함하는 서비스 (TTA)\
',

// [자율주행자동차]- LDM
'# 정의 : 동적 공간 데이터 저장소 <br/>\
- Local Dynamic Map <br/>\
- 정보수집의 대상 범위내에 있는 고정 물체 또는 이동 물체에 관한 정적, 일시적, 동적 정보를 모두 관리할 수 있는 동적 공간 데이터 저장소 <br/><br/>\
# 등장배경 <br/>\
- ITS -> C-ITS <br/>\
- 차량-도로 자동화 패러다임 변화 <br/><br/>\
<img src = "./img/LDM_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/LDM_2.PNG" style = "max-width:100%; height:auto;">\
',

// Dark Net
'# 정의 : 폐쇄형 사설 분산 P2P 네트워크 <br/>\
- 서로 신뢰하는 피어들 간 파일 공유를 위한 폐쇄형 사설 분산 P2P 네트워크 <br/><br/>\
# 유형 <br/>\
- Peer to Peer : Peer간 1:1 NW구축, F2F(Friend to Friend)<br/>\
-> 사례 : Freenet, OneSwarm, RetroShare, GNUnet <br/>\
- Privacy Network : Overlay NW 형태로 별도 은닉 서비스망 구축 ,TOR<br/>\
-> 사례 : I2P, Decentralized NW 42, TOR <br/><br/>\
# 참고 : Clearnet / Surface WEB > Deep Web(연구목적) > Dark Web (Dark net의 웹형태) \
',

// RPA 
'# 정의 : 컴퓨터 소프트웨어 통한 자동화 기술 <br/>\
- Robotic Process Automation<br/>\
- 수작업, 혹은 반복적이면서 규칙적인 인간활동 일부, 혹은 전체를 컴퓨터 소프트웨어를 통해 자동화하는 기술 <br/><br/>\
# 수준별 구분 : Basic / Intelligent / Congitive Automation <br/><br/>\
* 사례 : LG U plus, NW부문 도입 \
',

// Process Mining
'# 정의 : 업무 프로세스 로그기반 정보분석 <br/>\
- 업무 프로세스 수행을 기록한 로그데이터로부터 업무 수행에 관한 다양한 정보를 분석하는 것 <br/><br/>\
# 기술분야 <br/>\
- 프로세스 도출 : Event Log 기반 프로세스 모델 생성 <br/>\
- 적합도 검사 : 기본 모델과 비교/분석, 의도 확인 <br/>\
- 향상 : 프로세스 모델 확장/개선 분석 <br/><br/>\
# 프로세스 마이닝 기술요소 <br/>\
1. 도출 식별 관점 <br/>\
- 알파마이닝 : 인과관계 재구성, 이벤트 시퀀스 분석 <br/>\
- 휴리스틱마이닝 : 휴리스틱 기반 사례 연구 <br/>\
- 퍼지마이닝 : 복잡 -> 간단 가시화 <br/><br/>\
2. 조직 관점 <br/>\
- 소셜 네트워크 마이닝 : 수행자 / 리소스 관계 <br/>\
- 조직 마이닝 : 팀 관계 <br/>\
- 스탭 어사인먼트 마이닝 : 작업 할당 패턴 추출 <br/><br/>\
3. 업무성과 관점 <br/>\
- 페트리넷 기반 퍼포먼스 : 수행시간, 병목점 도출 <br/>\
- 시퀀스 패턴 : 업무 수행 패턴 분석 <br/>\
- 도티드 차트 분석 : 이벤트 로그 패턴 파악 <br/><br/>\
* KPC 95회 4교시 4번\
',

// 스마트 플랜트 
'# 정의 : 공장 + ICT 기술 <br/><br/>\
# 스마트 플랜트 정부 계획 현황 <br/>\
- ICT/SW : 빅데이터,인공지능 (초고속,대용량) / 콘텐츠(가상,혼합기술,지능형컨텐츠) <br/>\
- 건설/교통 : 사회기반시설(국가 인프라 예방 유지관리) <br/>\
- 기계/제조 : 플랜트(친환경 스마트 기반 기술) <br/>\
- 재난 안전 : 재난안전(복합재난 스마트 예측 대응기술) <br/>\
',

// 클라우드 컴퓨팅
'# 정의 : 중앙 IT 서비스 컴퓨팅 환경 <br/>\
- 인터넷상의 서버를 통하여 데이터 저장, 네트워크, 컨텐츠 사용 등 IT 관련 서비스를 한번에 사용할 수 있는 컴퓨팅 환경 <br/><br/>\
# 구성 <br/>\
- User Interaction Interface <br/>\
- Service Catalog <br/>\
- System Mgt <br/>\
- Provisioning Tool <br/>\
- Monitoring <br/>\
- SLA \
',

// IaaS, PaaS, SaaS
'# 개념도<br/>\
<img src = "./img/CloudType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# IaaS <br/>\
- 물리자원 가상화 : Infra 가상화 <br/>\
- 높은 확장성 : 서비스 통한 리소스 확보 <br/>\
- 비용 효율화 : 고정비용 제로 <br/><br/>\
# PaaS <br/>\
- 유지관리 용이성 <br/>\
- 개발 및 배포 효용성 : 필요 플랫폼만 사용하여 개발 및 배포 프로세스의 빠른 확보 <br/>\
- 다중 엑세스 <br/><br/>\
# SaaS <br/>\
- 물리자원 최소화 <br/>\
- Time to market : 소프트웨어의 즉시 사용 가능 <br/>\
- 유지보수 간소화 : 클라우드 제공업체를 통한 기술적 문제 지원 <br/><br/>\
* 122회 4교시 1번\
',

// [클라우드 컴퓨팅]- 클라우드 컴퓨팅 정책 <br/>\
'# 정의 : 국내 클라우드 산업경쟁력 향상을 위한 추진전략 및 과제 <br/><br/>\
# 암기 : 2021활(30%) 육(18-250) 시(4.6조)-공민생 <br/><br/>\
# 비전 : 2021 클라우드 선도국가 도약<br/><br/>\
# 목표 <br/>\
- 클라우드 이용 활성화 : 18년 이용률 30% 이상 <br/>\
- 클라우드 기업 육성 : 14년 250개 -> 18년 800개 <br/>\
- 클라우드 시장 4.6조원(3년 누적) 형성 <br/><br/>\
# 추진전략/세부 추진과제 <br/>\
- 공공부문의 선제적 클라우드 도입 : 공공부문 민간 클라우드 이용 활성화, G-Cloud 전환 가속화 <br/>\
- 민간부문의 클라우드 이용 확산 : 안전한 클라우드 이용 환경 마련, 클라우드 친화적 제도 개선, 중소기업 및 산업 혁신 지원 <br/>\
- 클라우드 산업 성장 생태계 구축 : 클라우드 기술 경쟁력 강화, 해외진출 촉진, 전문인력 양성, CDC 경쟁력 강화 <br/><br/>\
# 추진체계 <br/>\
- 정보통신 전략 위원회를 컨트롤 타워로 활용 <br/>\
- 클라우드 전담기관 (NIPA, NIA, KISA) AaaS(Agent As a Service) 방식 운영\
',

// [클라우드 컴퓨팅]- 정보자원등급 평가기준(2014.04.)
'# 근거 : 2014.04.08. 전자정부 대민서비스 정보보호 중요도 산정기준 <br/><br/>\
# 암기 <br/>\
- 평가항목 : 서데연대파 <br/>\
- 항목별 상,중,하 <br/><br/>\
# 정보자원 중요도 <br/>\
- 1등급 : 평균값 > 2.4 <br/>\
- 2등급 : 평균값 > 1.6 <br/>\
- 3등급 : 평균값 < 1.6 <br/><br/>\
# 평가항목 : 서데연대파 / 항목별 상,중,하 <br/>\
- 서비스<br/>\
- 데이터 <br/>\
- 연계 : 개인, 민감, 고유식별 정보/장기 보관 <br/>\
- 업무 대체 수준 : (업무대체율 + 업무대체비용)/2 <br/>\
- 사고시 파급효과 : 국가/사회적 피해/혼란, 신뢰도 영향, 즉시 복구\
',

// [클라우드 컴퓨팅]- 클라우드 컴퓨팅 서비스 보안 인증 제도
'# 정의 : 클라우드 안전 이용 지원 제도 <br/>\
- 클라우드 서비스 제공자가 제공하는 서비스에 대해 클라우드 컴퓨팅 발전 및 이용자 보호에 관한 법률 제23조 2항에 따라 정보보호 기준의 준수여부 확인을 인증기관에 요청하는 경우 인증기관이 평가, 인증하여 이용자들이 안심하고 클라우드 서비스를 이용하도록 지원하는 제도 <br/><br/>\
# 암기 <br/>\
- 근거 : 클발법23조2, 미고시 <br/>\
- 대상 : 클발법20조 제공자 <br/>\
- 조직 : 미키인자 <br/><br/>\
# 근거 <br/>\
- 클라우드 컴퓨팅 발전 및 이용자 보호에 관한 법률 제23조 2항 <br/>\
- 클라우드 컴퓨팅 서비스 정보보호에 관한 기준 미래부 고시 제7조 (2016-41호) <br/><br/>\
# 인증대상 : 클라우드 컴퓨팅법 제20조에 따라 공공기관의 업무를 위해 클라우드 컴퓨팅 서비스를 제공하는 사업자 <br/><br/>\
# 조직 <br/>\
- 정책기관 : 미래부 <br/>\
- 평가기관 : KISA <br/>\
- 인증위원회 : 전문가 5인이상 10명 이내 <br/>\
- 기술자문기관 : 국가보안기술 연구소 \
',

// [클라우드 컴퓨팅]- Grid Computing 
'# 정의 : 초고속 네트워크 연동 단일 시스템 / 분산 고성능 컴퓨팅 자원<br/>\
- 지역적 분산 고성능 컴퓨팅 자원 초고속 네트워크 연동 단일 시스템 <br/><br/>\
# 암기<br/>\
- 구성요소(5) : FCRCA <br/>\
- 미들웨어기능(5) : 이상전보요 <br/><br/>\
# 4A : Advanced NW / Computer&Equipment / Application / Human Resource <br/><br/>\
# 유형 <br/>\
1. 계산 Grid : 분산 슈퍼 컴퓨팅, High-throughput 컴퓨팅 <br/>\
2. 데이터 Grid : 대량 데이터 효율공유 <br/>\
3. 액세스 Grid : On-Demand, 협업환경, 멀티미디어 <br/><br/>\
# 구성요소 5계층 : Fbric, Connectivity, Resource, Collective, Application <br/><br/>\
# 미들웨어 기능 : 자원의 이질성, 자원 상태의 변화, 데이터 전송, 보안문제, 다양한 요구사항\
',

// [클라우드 컴퓨팅]- Utility Computing
'# 정의 : 요금 지불 방식 컴퓨팅<br/>\
- 컴퓨터의 하드웨어나 소프트웨어를 사용한 만큼 요금을 지불하는 방식의 컴퓨팅 <br/><br/>\
# 특징(3) : ROI, 민첩성, 유연성 <br/><br/>\
# 구성(3) : 서비스 관리, 서비스 자원관리, 서비스 자원 <br/><br/>\
# 기술요소(4) : 클러스터, 가상화, 분할, 프로비저닝, 자율컴퓨팅, 그리드/클라우드 컴퓨팅\
',

// [클라우드 컴퓨팅]- Fog Computing 
'# 정의 : 노드 기지국 추가 클라우드 컴퓨팅 <br/>\
- 기기에서 생성된 데이터 실시간 처리가능 노드를 기지국처럼 두고 컴퓨팅 파워 필요 데이터만 클라우드로 처리하는 시스코의 사물인터넷 구현방법 <br/><br/>\
# 구성요소 <br/>\
- Device Layer : IoT Device, 센서/액츄에이터, Wearable <br/>\
- Fog Layer : 스위치, 라우터 <br/>\
- Data Center : Storage, Bigdata 플랫폼 <br/><br/>\
# 기술요소 <br/>\
- Device : 센싱-로컬데이터 수집, 저전력 IoT 보안기술, LWPAN <br/>\
- Fog : 데이터 분석 및 필터링, 보안-IDS,IPS,SDx <br/>\
- DataCenter : Cloud, Bigdata 분석-인프라:Hadoop, 분석:마이닝\
',

// [클라우드 컴퓨팅]- CSB
'# 정의 : 클라우드 서비스 중개 비즈니스 모델 <br/>\
- Cloud Service Brokerage <br/>\
- 클라우드 서비스 제공자와 사용자를 연결하여 서비스의 중개, 결합, 통합, 최적화 등의 다양한 서비스를 제공하여 수익을 올리는 비즈니스 모델 <br/><br/>\
# 암기<br/>\
- 종류 : 중결차최통 <br/><br/>\
# 종류 <br/>\
- 중개 브로커 : 기능개선, 부가서비스(AT&T, 버라이어존) <br/>\
- 결합 브로커 : 멀티서비스 통합, 서비스통일성 부여(Bitnami, CloudBees)<br/>\
- 서비스 차익 거래 : 결합서비스 유연, 유니컨버전스 (다우기술) <br/>\
- 최적화 브로커 : 사용자 편의 극대화(DropBox, Docsware) <br/>\
- 통합 브로커 : 기존서비스 통합(RightScale)\
',

// [클라우드 컴퓨팅]- 인터클라우드 
'# 정의 : 클라우드간 상호 연계 하이브리드<br/>\
- 서로 독립된 클라우드와 클라우드간 상호 연계성을 강화하는 하이브리드 기술 <br/>\
- 복수의 클라우드 서비스 제공자 간의 클라우드 서비스 또는 자원을 연결,연계하여 사용자의 요구에 따른 클라우드 서비스의 연동 및 컴퓨팅 자원의 동적 할당 <br/><br/>\
# 암기 <br/>\
- 구성 : I인F확 <br/>\
- 유형 : 피페인 <br/><br/>\
# 구성요소 <br/>\
- ICT 코아 서비스 : Switching, Routing/VM to VM&App to App <br/>\
- ICF 코아 인프라 : Private cloud - ICFD, PNSC, Secure Communi <br/>\
- Fundamental Service Funtion : WM Poratblility, Automation and APIs Management and Visiblity <br/>\
- ICF 확장서비스 <br/><br/>\
# 서비스 유형 <br/>\
- Peering : 대등 접속, 두 클라우드 서비스 제공자간 직접 연계 <br/>\
- Federation : 연합, 클라우드 서비스 제공자간 자원 공유를 기본으로 사용 요구량에 따라 동적 자원 할당을 지원하여 논리적인 하나의 서비스를 제공 <br/>\
- Intermediary : 중개, 복수의 클라우드 서비스 제공자 간의 직접적인 자연 연계 및 서비스 제공자를 통한 중개 서비스 제공 <br/><br/>\
# 에코 시스템 : 클라우드 빌더, 클라우드 프로바이더, 클라우드 리셀러, 어플리케이션 개발자 <br/><br/>\
# 사례 : 시스코 - Cisco InterCloud Fabric <br/><br/>\
* ICFD : Intercloud Fabric Director <br/>\
* PNSC : Private and Public Services\
',

// Kafka
'# 정의 : 데이터 스트림 실시간 관리 오픈소스 시스템 (링크드인)<br/>\
- 웹사이트, 애플리케이션, 센서 등에서 취합한 데이터 스트림을 실시간으로 관리하기 위한 오픈소스 시스템 <br/><br/>\
<img src = "./img/Kafka.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 확장성 : Scale-out 가능 <br/>\
- 영속성 : 수신한 데이터 디스크 유지 <br/>\
- 유연성 : 시스템 연결 허브역할 <br/>\
- 신뢰성 : 메시지 전달 보증 <br/><br/>\
# 구성요소 <br/>\
- Broker : Producer, Consumer간 메시지 관리 <br/>\
- Message : 데이터 최소 단위 <br/>\
- Producer : 메시지 생성 프로세스 <br/>\
- Consumer : 메시지 사용 프로세스 <br/>\
- Topic : Publish된 메시지 카테고리 <br/><br/>\
# 활용 <br/>\
- Kafka Connect : 데이터 허브 <br/>\
- Kafka Streams : 로그 수집 <br/>\
- Event Sourcing : CQRS <br/>\
-> CQRS (Command and Query Responsibility Segregation) : 명령과 조회의 책임 분리 <br/><br/>\
* KPC 95회 1교시 15번\
',

// 엣지 컴퓨팅 
'# 정의 : 네트워크 종단 컴퓨팅 모델 <br/>\
- 클라우드나 중앙이 아닌 네트워크 종단(Edge)에서 컴퓨팅이 이루어지는 모델 <br/>\
- 데이터가 생성되는 종단 기기 자체, 근처 기지국, 네트우크 장비에서 데이터가 처리 됨 <br/><br/>\
# 필요성 <br/>\
- 신속성 : 저지연 <br/>\
- 데이터 분산 : 부하 집중 방지 <br/>\
- 개인정보보호 : 선별적 중앙 전달 <br/>\
- 모바일 환경 : 기지국 직접 처리 <br/><br/>\
# 컴퓨터 모델 변천사 <br/>\
- 메인프레임(IBM) <br/>\
- CS (HPE, DELL) <br/>\
- Cloud (AWS, Google) : 중앙 집중형 <br/>\
- Mobile : 스마트폰, IoT, Latency최소화 <br/><br/>\
# 시장동향 <br/>\
- Google Cloud IoT : TPU(Tensor Processing Unit)이용 연산 <br/>\
- AWS Iot Greengrass : 농업,산업 / Linux, ARM/x86 호스팅 가능 <br/>\
- MS Azure Iot Edge <br/>\
1) Module : 개발자 고유 코드 실행 컨테이너 <br/>\
2) Runtime : IoT Edge Device 실행, 배포된 모듈 관리 <br/>\
- KT MEC <br/>\
<img src = "./img/MEC_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
- GE Predix Edge <br/>\
1) DCS(Device Certificate Service) : 디바이스 인증 담당 <br/>\
2) UAA(User Account and Authorization) : 멀티 터넌트 ID 관리 서비스 <br/><br/>\
* 라이지움 86회 3교시 1번 \
',

// 레그테크
'# 정의 : 내부통제, 법규준수 용이 정보기술 <br/>\
- 규제를 뜻하는 Regulation과 기술을 뜻하는 Technology의 합성어로 금융회사로 하여금 내부 통제와 법규 준수를 용이하게 하는 정보기술 <br/><br/>\
# 목적 <br/>\
- AS-IS : 핀테크 편의성 및 보안성 개선 <br/>\
- TO-BE : 금융회사의 업무처리 비용 절감 및 업무 효율성 개선 <br/><br/>\
# 기술 <br/>\
- 수집/저장 : Agent, 빅데이터 <br/>\
- 분석<br/>\
1) 데이터 마이닝 : 비정형 D분석, 의심거래 분석, 내부 통제 <br/>\
2) 머신러닝 : 예측, 실시간 거래감시<br/>\
- 활용 : 시각적 분석 <br/>\
- 보안/Infra : 바이오 인증, 블록체인, 클라우드, 로보틱스(IT 프로세스 제어 자동화) <br/><br/>\
# 활용분야 <br/>\
- 데이터 관리 <br/>\
- 위험 분석 및 예측 <br/>\
- 실시간 거래 감시 <br/>\
- 고객 신원 관리 <br/>\
- 내부 통제 <br/>\
- 컴플라이언스 <br/><br/>\
# 향후 과제 <br/>\
- 금융규제 준수를 위한 RegTech 개발 <br/>\
- 금융당국 등 이해관계자 협업 필요 <br/>\
- 표준화 개발 필요 <br/>\
- 법규 준수 여부 검토 필요 <br/><br/>\
<img src = "./img/RegTech.png" style = "max-width:100%; height:auto;">\
',

// [HPC]- Singularity
'# 정의 : HPC / 독립형 컨테이너 플랫폼 기술 / 대규모 클러스터 환경 <br/>\
- HPC, 대규모 클러스터 환경에 특화된 독립형 컨테이너 플랫폼 기술 <br/><br/>\
# 특징 <br/>\
- 독립성 : 컨테이너 관리하는 데몬에 종속되지 않음. Single-file Based 컨테이너 <br/>\
- 보안성 : 애플리케이션 실행시 루트 권한이 필요 없음 <br/>\
- 고성능 : GPU, NIC 같은 하드웨어 자원에 직접 접근이 가능하며, HPC 딥 러닝에 적합함 <br/><br/>\
# 구성요소 <br/>\
- Singularity Executable File : 컨테이너 생성 <br/>\
- SIF(Singularity Image Format) : 실제 응용프로그램이 설치되는 가상화 이미지 파일 <br/><br/>\
# Singularity, Docker, Kubernetes 비교 <br/>\
<img src = "./img/Singularity.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 1교시 9번\
',

// 2020 하반기 경제정책 방향
'<img src = "./img/KNewDeal.PNG" style = "max-width:100%; height:auto;">\
',

// 지능형 CCTV
'# 정의 : 자동 이상행위 탐지 기술 <br/>\
- CCTV에서 촬영된 영상정보를 분석하여 자동으로 이상행위를 탐지하는 기술 <br/>\
- 배경영역과 객체를 분리 후 객체 식별, 객체 추적, 규칙 기반 이벤트 탐지 수행함 <br/><br/>\
# 부각 배경 <br/>\
- 방범용 CCTV, 스마트시티 관제 센터 구축 활성화 <br/>\
- 딥러닝 기술 발전 -> 인간 개입 없이 영상 분석 기술 활성화 <br/><br/>\
# 전망 <br/>\
- 범죄 수사를 위한 증거 차원을 넘어 범죄 징후 사전 예측 수준으로 발전 <br/>\
- 빅데이터 기술과 연계하여 범죄 예측 모델로 활용 <br/><br/>\
# 기술 종류 <br/>\
1. 대인 영상 기술 <br/>\
- 얼굴 인식 기술 : 딥러닝, GAN(Generative Adverserial Network) 활용 얼굴인식 기술 (인간개입x)<br/>\
- 사람 재식별 기술 : 촬영된 영상 통한 자동 분석 기술 <br/>\
- 사람 행동 인식 기술 : 제스처(신체일부), 액션(재스쳐합), 인터렉션(사람,사물간) 통한 자동 인식 기술<br/><br/>\
2. 차량 영상 인식 기술 <br/>\
- 번호판 인식, 복원 기술 : 번호판 인식, 복원, 추족 기술 <br/>\
- 차량 재식별 기술 : 특정 차량 추적 기술 <br/><br/>\
3. 범죄 예측 영상 인식 기술 <br/>\
- 휴먼 속성 인식 기술 <br/>\
1) Born-To : 성별,나이 등과 같은 고유 속성 <br/>\
2) Belong-To : 착용, 소지 Item 인식 <br/>\
- 경로 재인식 기술(Pathe Re-ID) : CCTV 정보 결합 특정 객체 추적 기술 <br/>\
- 범죄 전조 현상 인식 기술 : 이상행동, 발생소음 <br/><br/>\
# 지능형 CCTV 활성화를 위한 개인정보보호 기술 <br/>\
- 프라이버시 마스킹 : 민감한 사생활 마스킹, 권한 가진 사용자만 제한적 복원<br/>\
- 영상 비식별화 : 촬영 영상에서 개인정보 비식별화 <br/>\
- 영상 아이덴티티 : 최초로 생성한 영상의 아이덴티티 검측 기술<br/><br/>\
* 86회 라이지움 2교시 1번 \
',

// Data Lake
'# 정의 : 원천 형태 데이터 저장소 / 다양한 목적 활용 / 내,외부 수집 데이터 <br/>\
- 다양한 원천 출처들로부터 다양한 목적으로 활용하기 위해 수집된 원천형태의 데이터 저장소이며 조직 내/외부 수집 데이터의 저장소 <br/>\
- 정형,반정형,비정형의 다양한 원형(Raw)데이터들을 실시간으로 수집,전처리,변환,저장,제공하는 통합 데이터 저장소 <br/><br/>\
# 부각 배경 <br/>\
<img src = "./img/DataLake_0.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# 동향 변화 <br/>\
<img src = "./img/DataLake_1.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
# Data Lake 구성요소 <br/>\
<img src = "./img/DataLake_2.png" style = "max-width:100%; height:auto;"><br/>\
- 자료 : 정형/비정형/반정형 데이터 원천 생성자 <br/>\
- 수집 : 데이터 수집 프로시저 <br/>\
- 저장 : 사전 정의된 형태 영구 저장 <br/>\
- 처리 : 알고리즘 실행, 실시간 처리 <br/>\
- 활용 : 시스템 모니터링, BI, 정책결정 <br/><br/>\
# Data Lake / DW <br/>\
<img src = "./img/DataLake_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 2교시 6번 \
',

// 컨테이너 오케스트레이션 
'# 정의 : 반복적인 애플리케이션의 배포, 확장 및 운영을 자동화 하는 행위 <br/><br/>\
# 필요성<br/>\
- Composition : 다종 컨테이너 구성 서비스의 설정 및 연동 <br/>\
- Replication : Scalability, FT, HA위한 복제 <br/>\
- Write Once Run Anywhere <br/><br/>\
# 기능 <br/>\
- 프로비저닝 <br/>\
- 구성 스크립팅(Scripting) : 스크립트 작성 <br/>\
- 모니터링 <br/>\
- 업그레이드와 롤백 <br/>\
- 롤링(Rolling) <br/>\
- 서비스 탐색(Service Discovery) <br/>\
- 컨테이너 정책관리<br/>\
- 상호운영성<br/><br/>\
<img src = "./img/ContainerOrchestration_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ContainerOrchestration_2.png" style = "max-width:100%; height:auto;">\
',

// 로보 어드바이저
'# 정의 : 금용자산관리용 인공지능<br/>\
- 로봇과 어드바이저(투자 전문가)가 조합된 용어로서, 고도화된 AL과 빅데이터 기반으로 시장 환경에 따라 자산을 관리해주는 금융자산관리용 인공지능 <br/><br/>\
# 암기 <br/>\
- 운자하 <br/><br/>\
- 투 : 쿼써 <br/>\
- 증 : N삼 <br/>\
- 은 : K우 <br/><br/>\
- 풀 : 웰베 <br/>\
- 셀 : 마 <br/>\
- 어 : 넷런 <br/><br/>\
- 풀(발린)웰베(엘베 자나)셀마(설마)어! 넷(이서)런(하는게 빠른거야?) <br/><br/>\
# 유형 : 운용형, 자문형, 하이브리드형 <br/><br/>\
# 제약 : 현행법규상 대면계약 의무화, 불건전영업과 이해 상충, 다양한 환경의 유효성 검증 부족 <br/><br/>\
# 장점 <br/>\
- 금융시장 예측을 위한 빅데이터 분석, 자산배분, 리밸런싱까지 사람보다 빠르고 정확하게 수행 <br/>\
- 사람 감정 개입 인한 오류를 차단, 일관성 있는 투자 원칙 유지 가능 <br/>\
- 일반 자문상품 대비 수수료와 최소 투자금액이 낮아 소액 투자자도 투자 가능 <br/><br/>\
# 고려사항 <br/>\
- 투자상품의 한계 : 투자상품이 주로 ETF에 국한되어 있는 한계점이 있음 <br/>\
- 신뢰성 : 시장 초기단계인 만큼 신뢰성 확보 측면에서는 시간이 필요함 <br/>\
- 변동성 대응 : 수립되어 있는 data 외에 새로운 변수가 생겼을 때의 대응력이 검증 안됨 <br/>\
- 수수 구조논란, 기존 시장 잠식 <br/><br/>\
# 국내 현황 <br/>\
1. 투자자문 <br/>\
- 쿼터백 : 글로벌 ETF(상장지수증권) 특징, 성과 상관관계등 DB화, 투자자 요구와 시장상항 맞춤 포트폴리오 제공 <br/>\
- 써미트 : 펀드, 주식, ETF, 파생상품, 채권 등 모든 상품 투자 <br/><br/>\
2. 증권사 <br/>\
- NH 투자 증권 : 디셈버앤 컴퍼니의 RA 엔진 활용, 국내 최초 RA 서비스 QV 로보어카운트 출시 <br/>\
- 삼성 증권 : RA 플랫폼 핵심 기술, 투자성과 검증시스템 개발 , 국내 최초 특허 출원 16.01 <br/><br/>\
3. 은행 <br/>\
- KB 은행 : 쿼터백 투자자문과 RA 자문형 신탁상품 출시 <br/>\
- 우리은행 : 오픈베타서비스 개시, 일반인 대상 맞춤형 포트폴리오 제공 <br/><br/>\
# 해외 현황 <br/>\
- Fully Automated Platform (only 알고리즘)<br/>\
=> weathFront : 초기 투자금 만불까지 수수료 무료, 투자목표 및 ETF 비중조정까지 고객 가능 <br/>\
=> Battlement : Tax Loss Harvesting 자동 적용(5만불 이상), 최고 6개월 수수료 무료 <br/>\
- Self Executed Trades(사람판단요구) : MarketRiders(이메일 리포트 정기 구독 방식, 신규고객 30일간 무료) <br/>\
- Advisor Executed Trades(사람판단도 자산운용 활용) : nutmeg(영국업체, 투자팀에 의한 Active 전략 병행), LearnVeset(자문만 제공, 통합관리서비스 제공) <br/><br/>\
<img src = "./img/RoboAdvisor_1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/RoboAdvisor_2.png" style = "max-width:100%; height:auto;">\
',

// LOD
'# 정의 : 공공데이터의 개방형 플랫폼 <br/>\
- Linked Open Data <br/>\
- 웹 상에 존재하는 데이터를 개별 URI로 식별하고, 각 URI에 링크 정보를 부여함으로써 상호 연결된 웹을 지향하는 모형 <br/><br/>\
# 4원칙 <br/>\
- URI 사용 : 개별객체 ID 부여 <br/>\
- HTTP URI 사용 : 데이터 접근성 강화 <br/>\
- RDF 사용 : 정횽화, 연계 <br/>\
- 링크정보 부여 : 발전된 시맨틱 웹 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/LOD.png" style = "max-width:100%; height:auto;"><br/>\
- URI(Uniform Resource Identifier) : 인터넷에 존재하는 객체 표현 <br/>\
- XML : 메타언어 <br/>\
- RDF(Resource Description Framework) : 정보 자원, 구조 표현 언어 <br/>\
- RDFS : RDF의 Schma 정보 <br/>\
- OWL : DAML + OIL, Web ontology 언어 <br/>\
- SPARQL : 온톨로지 질의 언어 <br/>\
- RIF(Rule Interchange Format) : 규칙 정의, 교환 위한 계층 <br/><br/>\
# 사례 <br/>\
- 해외 : DB pedia, BBC <br/>\
- 국내 : 공공 Wifi 정보, 국가서지 <br/><br/>\
* 122회 1교시 3번\
',

// Open API
'# 정의 : 공개 API <br/>\
- 개발자에게 사유 응용 소프트웨어나 웹 서비스에 프로그래밍적인 권한을 제공하는 누구나 사용할 수 있도록 공개된 API <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/OpenAPI.png" style = "max-width:100%; height:auto;"><br/>\
- API Gateway : 제공, 모니터링, 트래픽 제어 <br/>\
- API Manager Portal : 제휴사 정보 관리 <br/>\
- API Support & Analysis : 로그 데이터 추출 <br/>\
- Cache : 빠른 액세스 <br/>\
- Authentication : 인증 정보 검증 <br/>\
- API Developer Portal : 문서화, 샘플코드, 어플리케이션 제공 <br/>\
- Third-Party Developer Community : 정보 교류 <br/><br/>\
* 122회 2교시 3번\
',

// SOAP API
'# 정의 : XML 기반 네트워크 데이터 교환 프로토콜 <br/>\
- Simple Object Access Protocol <br/>\
- 일반적으로 널리 알려진 HTTP, HTTPS, SMTP등을 통해 XML 기반의 메시지 컴퓨터 네트워크 상에서 교환하는 프로토콜 <br/><br/>\
# Layer 측면 구성요소 <br/>\
1. Service Discovery Layer <br/>\
- UDDI <br/>\
- 기업이나 단체, 개인이 자신들의 서비스 내용을 인터넷 상으로 등록할 수 있게 하는 XML 기반의 등록처 <br/><br/>\
2. Service Description Layer <br/>\
- WSDL <br/>\
- 특정 서비스의 설명과 접근 방법에 대하여XML 기반으로 제공 <br/><br/>\
3. XML Messaging Layer <br/>\
- XML <br/>\
- 데이터의 전송을 위하여 정의된 데이터 포맷 <br/><br/>\
4. Service Transport Layer <br/>\
- HTTP <br/>\
- 서비스에 대해서 전송에 대한 역할을 수행 <br/><br/>\
# Data 측면의 구성요소 <br/>\
1. SOAP Envelope <br/>\
- Enveplope <br/>\
- 모든 SOAP 메시지의 루트 요소 <br/>\
- 두개의 하위 요소인 선택적 Header 요소 및 필수 Body 요소를 포함 <br/><br/>\
2. SOAP Header <br/>\
- Header <br/>\
- SOAP Envelope의 선택적 하위 요소 <br/>\
- 메시지 경로를 따라 SOAP 노드로만 처리될 애플리케이션 관련 정보 전달 <br/><br/>\
3. SOAP Body <br/>\
- Body <br/>\
- SOAP Envelope의 필수적 하위 요소 <br/>\
- 메시지의 최종 수신을 대상으로 하는 정보 포함<br/><br/>\
4. SOAP Fault <br/>\
- Fault <br/>\
- SOAP node에서 실패가 발생할 경우 해당 오류에 대한 정보 포함 <br/><br/>\
* 122회 2교시 3번\
',

// REST API
'# 정의 : 분산 하이퍼미디어 시스템 소프트웨어 아키텍처 <br/>\
- Representational State Transfer <br/>\
- WWW과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처 <br/>\
- 엄격한 의미로 네트워크 아키텍처 원리의 모음 <br/><br/>\
# 6가지 제한 조건 <br/>\
1. 클라이언트/서버 구조 <br/>\
- 일관적인 인터페이스로 분리되어야 함 <br/><br/>\
2. 무상태 <br/>\
- 각 요청간 클라이언트의 콘텍스트가 서버에 저장되어서는 안된다. <br/><br/>\
3. 캐시 처리 가능 <br/>\
- WWW 에서와 같이 클라이언트는 응답을 캐싱할 수 있어야 한다 <br/>\
- 잘 관리되는 캐싱은 클라이언트-서버간 상호작용을 부분적으로 또는 완전하게 제거 하여 scalability와 성능 향상 <br/><br/>\
4. 계층화 <br/>\
- 클라이언트의 서버 연결 여부 파악 불가 <br/>\
- 중간 서버 배치 인한 로드 밸런싱, 공유 캐시 기능 제공 <br/>\
- 시스템 규모 확장성 용이 <br/><br/>\
5. Code on Demand <br/>\
- 자바 애플릿이나 자바스크립으의 제공을 통해 서버가 클라이언트가 실행시킬 수 있는 로직을 전송하여 기능 확장 가능 <br/><br/>\
6. 인터페이스의 일관성 <br/>\
- 아키텍처를 단순화시키고 작은 단위로 분리 <br/>\
- 독립적으로 개선 <br/><br/>\
<img src = "./img/SOAPREST.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 2교시 3번\
',

// Service Worker 
'# 정의 : 웹 페이지 백그라운드 스크립트 <br/>\
- PWA(Progressive Web Application)의 핵심 Building Block <br/>\
- Event에 대해서 반응 하는 역할, 서비스 워커 만의 다양한 기능 제공 <br/>\
- 웹 브라우저와 별개로 동작하며, 웹페이지 또는 사용자 상호작용이 필요하지 않는 백그라운드로 실행되는 스크립트 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ServiceWorker.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 생명주기 <br/>\
- Installing : 서비스 워커 URL 등록 <br/>\
- Installed/Waiting : 등록, 대기 <br/>\
- Activating : Trigger <br/>\
- Activated : 페이지 제어, 이벤트 수신 <br/>\
- Redundant : 실패, 새로운 서비스 워커 활성화 <br/><br/>\
# 활용분야 <br/>\
- Caching Strtegies : 캐시 DB 로딩 <br/>\
- Web Push : 웹 통제 <br/>\
- Offline : 오프라인 컨텐츠 <br/><br/>\
* 122회 2교시 4번\
',

// Ontact
'# 정의 : Unatct + 연결 패러다임 <br/><br/>\
# 종류 <br/>\
- 능동 + 상시 : 심전도 24시간 모니터링 <br/>\
- 능동 + 필요 : 온라인 주문 <br/>\
- 비상 + 수동 : 서비스 오류시 고객에게 먼저 접촉 <br/>\
- 상시 + 수동 : 보안 서비스 \
',

// 스마트 팩토리
'# 정의 : 자동화 + 지능화 공장 <br/>\
- ICT 기술을 기반으로 제조 전 과정을 자동화, 지능화하여, 최소의 비용 및 시간으로 제품을 생산하는 미래형 공장 <br/><br/>\
<img src = "./img/SmartFactory.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// Edge Computing
'# 정의 : 종단 컴퓨팅 모델 <br/>\
- 클라우드나 중앙이 아닌 네트워크 종단에서 컴퓨팅이 이루어지는 모델 <br/><br/>\
# 필요성 <br/>\
- 신속성 : 저지연 연산 <br/>\
- 분산 : 부하 집중 방지 <br/>\
- 개인정보보호 : 술제 업무에 사용하지 않는 데이터 중앙 전달 방지 <br/>\
- 모바일 환경 : 모바일 기기 증가 <br/><br/>\
# 시장동향 <br/>\
- Google Cloud IoT : 연결 디바이스 실시간 처리 <br/>\
- AWS IoT Greengrass : 농업, 산업 유지보수 <br/>\
- MS Azure IoT Edge : 개발자 공유 코드 컨테이너 <br/>\
- KT MEC : 빈번한 사용자 요청 MEC 교환국 처리 <br/>\
- GE Predix Edge : GE IoT 플랫폼 컴퓨팅 모델 <br/><br/>\
* 86회 라이지움 3교시 1번\
',
  
// 서버리스 컴퓨팅
'# 정의 : 서버를 고려하지 않은 애플리케이션 구현 <br/>\
- 서버나 클라우드 등 별도의 인프라를 준비하지 않고, 필요한 기능을 함수 형태로 구현하여 자동 스케일링 방식으로 시시각각 변화하는 자원 수요를 지원하는 서비스 방법 <br/><br/>\
# 구현기술 <br/>\
- 비즈니스 로직 관리 : 마이크로 서비스 정의 , 오케스트레이션 실행 / AWS Fargate <br/>\
- 오케스트레이션 : 애플리케이션 구성요소, 마이크로 서비스 상태 관리 / AWS Step functions <br/>\
- 보안/액세스 제어 : 로깅, 변화추적, 액세스 제어, 암호화 / AWS I AM VPC <br/>\
- 안정성 : 확장 가능한 고가용성 서비스 / AWS Lambda <br/><br/>\
* 아이리포 23회 1교시 7번\
',
  
// Web Crawling 
'# 정의 : 웹크롤러 이용, Web Data 자동 수집 검색 기술 <br/>\
- 인터넷 웹사이트의 URL 주소를 통해 HTML 페이지를 웹크롤러 이용 접속해서 HTML/CSS 파싱하고 Web Data를 자동으로 수집하는 검색 기술 <br/><br/>\
# 특징 : 자동화, API 연계 수집 가능 <br/><br/>\
# 기술요소 <br/>\
1. Master(Frontier) <br/>\
- URL Filtering : URL 패턴, 중복, 국가 코드, 외부 필터 수행, 함정 피하기 <br/>\
- HTTP Module : Resource URL, Extracted URL, 그룹 Seed 지정 <br/>\
- Tracking Module : 특정 Main/Sub URL 대상 지정 크롤링 <br/><br/>\
2. Slave(Agent) <br/>\
- URL 정규화 : URL 표현의 일관된 형태로 변환, URL 인코딩 적용 <br/>\
- 로봇 배제 표준 : 웹 사이트 로봇 접근 거부 규약 (Robots.txt) <br/>\
- HTML 파싱 : HTML 소스, 헤더 분석 및 링크 추출 <br/><br/>\
3. Monitor <br/>\
- Anomaly 확인 : Frontier, Agent의 검색 이상 감지 및 사용자 알림 <br/>\
- Realtime Control : URL 서버의 과다 트래픽 탐지 및 검색 우선순위 변경 <br/><br/>\
# 기본 알고리즘 <br/>\
- BFS : 자체 웹을 포괄하는 크롤링 검색 알고리즘 <br/>\
- Fish School Search : 지정된 쿼리와 일치하는 내용의 페이지만 검색 <br/>\
- Crawling through URL Ordering : URL이 있는 큐에서 중요 페이지 우선 검색 <br/>\
- Crawling the Large Sites First : 대기 중 페이지 많은 사이트 우선 크롤링 <br/><br/>\
# 개선된 알고리즘 <br/>\
- Enhanced BFS : P2P 네트워크의 웹크롤링 트래픽 측정, 분석 <br/>\
- Less Invasive Crawling Algorithm : 기존 DFS, BFS 방식의 웹 크롤링 단점 개선 <br/>\
- N-gram Based BFS : 검색 텍스트 단위 말뭉치(N-Gram)로 확장 <br/>\
- Sentiment-aware Web Crawledr : 긍/부정 어휘 기반 크롤링시 필터링 <br/><br/>\
* 웹크롤링, 스크래핑 비교 <br/>\
<img src = "./img/WebCrawlingScraping.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* 122회 3교시 1번\
',
);
