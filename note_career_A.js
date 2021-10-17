var answer = 
[
// 경력
'진료정보공유 시스템 구축시 PM으로써 맞이한 문제는 상호연계성, 보안성, 사업 참여율 3가지 가 있었습니다. <br/>\
병원간 데이터 규격이 달라 발생한 상호연계성 해결을 위해 HL7-CDA 기반의 데이터 표준화를 <br/>\
환자 개인정보 인터넷 망을 주어진 예산 내에서 안전하게 전송하기 위해 의료 ISAC 사업 참여 홍보를 <br/>\
지역 병원들의 사업참여를 유도하기 위해 비대면 중심 기술 지원, 교육을 기획,수행 하였습니다.\
',

'DB 암호화는 보메트릭사의 솔루션을 구입하여 Knernel 암호화 방식을 이용하고, 정형/비정형 데이터를 모두 대칭키 방식으로 암호화 하였습니다. <br/>\
Knernel 암호화 방식 이외에 Field 암호화 방식이 선택지로 있었으나, 상이한 벤더사간 협의가 필요한 부분인데다, 과부하 가능성을 고려하여 Kernel 암호화 방식을 지원하는 솔루션을 채택하게 됐습니다.\
',

'응급의료체계에 대해 설명하겠습니다. 우선 119로 응급환자가 접수되면 환자의 상태에 따라 응급의료 업무포털에 기재된 각 병원의 진료정보와 잔여 병상정보를 확인하여 최적의 병원을 선택하게 됩니다. 그 이후엔 이동중에 선택된 병원에 유선으로 연락하여 환자수용 여부를 물어보고 이송 계획을 알립니다. 환자가 내원한 이후에는 중증도 분류 체계 기반으로 환자를 분류한 후 응급 처치를 시행 합니다. 응급 처치 이후 귀가, 입원, 타병원 전원을 결정하게 되고, 입원시에는 최초 환자 수용 병원의 OCS 시스템을 통한 내부 등록과 중앙응급의료 시스템 등록을 하게되고, 외부로 전원할 시엔 진료정보공유 시스템을 활용하여 최초 진단 병원의 의료 정보를 전송하여 진료의 연속성을 보장받게 됩니다. \
',

'산업분야별 마이데이터 상세 시행령/규칙 재정 마련 및 초기 시장도입을 위한 마이데이터 특화 플랫폼 준비가 미비하다고 생각합니다. <br/>\
첫번째, 가장 활성화 되어있는 금융, 신용을 제외한 다른 산업분야 특히 의료의 경우는 개인정보보호법보다 의료법을 우선 적용하도록 되어 있어 데이터 활용에 대한 개방의 문이 열려있음에도 불구하고, 이를 하기위해서 의료법을 지키면서 서비스를 제공할 수 있는 방법을 찾아야 합니다. 이를 해결하기 위해서는 각 산업 분야별 데이터 활성화를 위한 법, 정책 재정이 우선되어야 한다고 생각합니다.<br/>\
두번째로 마이데이터 특화 플랫폼 준비미비입니다. <br/>\
마이데이터를 위한 정보보유기관의 정보제공, 정보를 활용하고자 하는 활용서비스, 개인의 정보를 안심하고 정보전송을 요구할 수 있는 투명성을 제시할 수 있는 특화 플랫폼이 필요합니다. 이를 해결하기 위한 기술 한계를 극복하기 위해서는 국가 주도의 신기술 경영과제를 주도하여 산업군들이 참조하여 기술 및 각 종 규제 장벽준비시간을 줄여 마이데이터 특화 플랫폼을 구축하는 위험을 줄이고 쉽게 진입할 수 있도록 하는 것입니다. \
',

'신규 서비스 도출시 고려되어야 할 핵심 사항은 환자중심의 서비스 발굴입니다. <br/>\
기존 의료 시스템에서는 의료진 중심 업무 형태로 서비스가 제공되었다면, 마이데이터는 의료진에서 환자로 중심의 이동이 이루어졌습니다. 환자에게 가장 필요한 정보가 무엇이며, 그 정보가 다시 의료진에게 피드백 되어 선순환 구조를 만드는게 가장 중요한 사항입니다. <br/>\
병원에 내부에 있는 의료진과 병원외에 있는 환자를 연결하기 위한 디바이스 중심으로 서비스 디자인 기술이 필요합니다. <br/>\
원격 연결을 위한 5G 통신 기술과 환자에게 정보를 제공하기 위한 모바일 앱과 보안인증, 데이터 제공활용을 위한 빅데이터, API, 수집된 자료를 분석하기 위한 CDW(Clinic Data Window) 가 있습니다. \
',

'진료정보공유시스템의 상호연동 표준은 HL7-CDA Protocol 을 활용하여 통신합니다.<br/>\
해당 표준은 XML로 구현되었고, Header와 Body로 구성되어 있습니다. Header에는 진료정보 공유를 위한 메타데이터가 존재하고, Body부분에는 실제로 교환할 텍스트, 이미지등 멀티미디어 데이터의 정보가 존재합니다. <br/>\
위와 같은 분리구조 때문에 유연한 인터페이스를 제공할 수 있습니다.\
',

'이기종 의료정보시스템간 정보호환이 가능하도록 표준을 제정하기 위해 조직화된 기구이며, 의료정보의 전자적 교환에 대한 de facto 표준입니다.\
',

'진료 정보공유시스템에선 상호연동표준인 HL7 CDA 기반으로 XML 데이터를 생성한 후, Open API 로 배포된 메타데이터를 Header에 포함시켜 규격화된 데이터를 의료기관간 물리적 매체 없이 전달하기 위해 해당 기술을 활용했습니다. <br/>\
대부분의 의료 마이데이터 공유는 HL7 표준으로 구성되어 있기때문에 위와 비슷한 방식으로 통신합니다. 제가 참여했던 사업중에선 진료정보공유시스템 사업 이외에 암 빅데이터 플랫폼, EMR 인증 에서도 비슷한 방식을 활용하여 데이터를 교환 합니다.\
',

'사회보장 정보원 주관으로 운영중인 의료 정보에 특화된 보안관제 기구를 의미합니다. <br/>\
정식 명칭으론 의료 ISAC 이라고 하며, 진료정보 공유사업에서 기관간 데이터 전송시 중소병원의 보안 기술 한계로 인한 불완전한 데이터 전송이 이슈가 되어 주로 대형병원을 기반으로 운영되었던 의료 ISAC을 중소병원 수준까지 제공 범위를 확장하여 진료 정보 공유 사업을 성공적으로 이끄는 수단으로 활용하였습니다. <br/>\
ISAC은 의료이외에도 정보통신 ISAC, 금융 ISAC등 다양한 분야가 존재합니다.\
',

'G-Cloud는 정부통합전산센터에서 제공하는 클라우드의 고유 명칭입니다. <br/>\
위 클라우드를 진료정보공유 시스템에서는 지역 거점 문서저장소로 활용되어 하드웨어 가상화로는 WAS 서버, DB 서버, Storage 및 백업 서버로 구축되었으며, 소프트웨어 가상화로써는 백업, SSL, OS 등 가상화하여 구축, 활용되고 있습니다. \
',

'지역 예산 300억에 본원 진행 프로젝트는 30억 규모에 100MM 정도의 사업이었고, PM인 저를 보함하여 2명의 PL 6명의 개발자, 2명의 임상병리 전문가로 구성되어 진행됐습니다.',

'데이터 품질은 정보시스템의 DB가 사용자의 기대를 만족시키기 위한 품질적 요소를 말합니다. <br/>\
대상은 크게 데이터 값과 구조 그리고 관리 프로세스로 나누고 이해관계자는 CIO, DA, Modeler, DBA, 사용자로 나뉩니다.\
',

'빅데이터 플랫폼 Connect를 구축하여 크게 통합 관리 체계와 품질 관리 체계로 나누었습니다. <br/>\
통합 관리 체계에선 대시보드, 권한 관리, 통계/이력, 자원관리를 통해 통합 관리를 하였고, <br/>\
품질 관리 체계에선 비식별화, 표준화, 현행화, 검증체계를 통해 품질 관리를 하였습니다.  <br/><br/>\
<img src = "./img/BigDataPlatformConnect.png" style = "max-width:100%; height:auto;">\
',

'ESB는 Service Oriented Architecture 인 SOA 아키텍처에서 버스 형태의 토폴로지를 이용하여 서비스간 연계 방식을 말합니다. <br/>\
이를 활용하여 암 빅데이터 센터 플랫폼에서는 본원, 문서 저장소, 국립 암센터 빅데이터 플랫폼간 연계 구축을 마련하였습니다. \
',

'우선 EAI와 ESB는 이기종 통합대상이 많아짐에 따른 기술적 전후 관계입니다. <br/>\
개념비교입니다. EAI는 Adapter를 이용한 어플리케이션 연동방식을 말하고, ESB는 SOAP 기술 이용한 미들웨어 플랫폼 솔루션을 말합니다. <br/>\
기술비교입니다. EAI는 EAI Platform, MQ, Data Format Transformation이 존재하고, ESB는 Interaction Link, SOAP, Runner 기술, ESB 패턴이 존재합니다. \
',

'SOA는 서비스 지향 설계 방식으로 서비스 단위로 개발을하고, 개발된 서비스들을 공유함으로써 재사용성을 늘리고 유연성을 확보하는 아키텍처입니다. <br/>\
MSA 또한 작은 단위의 서비스로 소프트웨어를 구성함으로써 민첩하고 유연한 설계를 할 수 있도록 하는 아키텍처입니다. <br/>\
비슷해보이지만, 이 두 아키텍처의 차이점이 존재합니다. 먼저 재가용성 측면입니다. SOA에서는 각팀에서 개발한 서비스를 팀의 자산으로 귀속시키는 반면, MSA에서는 모든 서비스가 공유되며 독립적으로 실행되는 것을 지양한다는 점에서 차이점이 존재합니다.\
다음으로 통신 방식 측면입니다. SOA 는 SOAP, EAI, ESB 등 서비스간 통합적이고 공통적인 방식으로 구성 및 통신 하지만, MSA는 Restful API 방식으로 서비스 제공자가 외부로 나타낸 API를 통해 통신합니다. \
',

'SOAP는 Simple Object Access Protocol 으로, 일반적으로 널리 알려진 HTTP, HTTPS, SMTP 등을 통해 XML 기반의 메시지를 네트워크상에서 교환하는 프로토콜입니다. <br/>\
구성요소로 메시지 루트 요소인 SOAP Envelope 아래 필수 하위요소인 SOAP Body, 선택적 하위 요소인 SOAP Header로 구성되며 SOAP Body 아래엔 오류 보고용도로 SOAP Fault 또한 존재합니다.\
',

'첫째, C-S 아키텍처 통해 통신하는 방식입니다. <br/>\
둘째, 스테이스리스 커뮤니케이션 방식으로 요청간 분리되어있습니다. <br/>\
셋째, HTTP Method를 활용합니다. <br/>\
추가적으로 RESTful API 는 MSA 의 서비스간 통신을 위해 사용됩니다.\
',

'ETL은 정형,비정형 데이터를 비즈니스 목적으로 이용하기 위해 변환하는 엔드 투 엔드 프로세스입니다. <br/>\
작동 방식은 Extract, Transform, Load 이며, Extract 는 각종 소스로부터 데이터를 가져오는 프로세스, Transform은 가져온 데이터를 DW, DataLake 등 저장소에 맞춰 형식을 변환하는 작업을, 마지막으로 Load는 지정된 데이터를 삽입하는 서비스를 말합니다. <br/>\
암 빅데이터 플랫폼 사업에서 사용한 ETL 상용 솔루션은 Dataflow 솔루션을 활용해 비정형 데이터를 정형화 추출하여 국립 암 빅데이터 센터에 저장하는 용도로 활용 하였습니다.\
',

'암 빅데이터 센터의 사업은 정부지원금 3억과 수행 기관 자부담금 1억원이 더해진 4억 규모의 사업이었습니다. 제가 속했던 데이터 분석 팀의 규모는 간호 인력 2명과 ICT 인력 3명으로 구성된 팀이었고 위 사업 참여 담시 PL로 참여하였습니다.\
',

'암 빅데이터 센터 사업은 ETL의 Life cycle 을 기반으로 수행되었고, 텍스트 분석은 ETL 중 T에 해당되는 Transform 을 수행하는데 활용된 기술입니다. <br/>\
위 기술은 정형 데이터를 중심으로 Sub String 기능 중심의 자동화 분류 의미 분석 기술을 활용했고, ETL 상용 솔루션인 Dataflow 솔루션의 TA 기능을 활용하여 비정형 텍스트 데이터를 정형화 추출하였습니다. <br/>\
이외 비정형 데이터인 Scan, Image File 등은 OCR 분석 도구등을 활용하여 텍스트 분석을 위한 추출 데이터로 활용 하였습니다. \
',

'응급환자의 소중한 생명을 지키기 위해 응급 의료시스템은 BCMS 체계, PS-LTE, NEDIS 시스템등으로 구성되어 있습니다. <br/>\
업무 연속성을 유지하기 위해 ISO 22301 기반 BCMS 체계를 구축하였고 <br/>\
재난 시에도 통신을 유지할 수 있도록 PS-LTE Push To Talk 단말기를 지급/보급하였습니다. <br/>\
환자가 내원하고 나서는 환자의 정보와 병원의 병상 정보를 국립 중앙의료원의 NEDIS 시스템을 통해 전송합니다.\
',

'전자서명이 없는 의무 기록은 그 자체로 법적 효력이 없고, 병원 직인을 찍고 병원에서 관리하는 직인 대장과 대조하여 정보가 일치할 시 그 효력을 갖게 됩니다. <br/>\
하지만, 전자서명이 되어 있는 의무기록은 그 자체로 법적 효력을 갖고, 이를 그 자체로 증빙 할 수 있기 때문에 EMR 간 데이터 대 데이터로 연계, 효력유지 할 수 있도록 하는 역할을 합니다. \
',

'급변하는 ICT 환경으로 인해 의료 정보시스템 또한 영향을 미쳐, 기존의 HL7 CDA 프로토콜이 변화화는 환경 적응에 한계로 인해 개발된 클라우드, 모바일, IoT 등 다양한 의료 환경 대응 위한 HL7 최신 국제 표준입니다. \
',

'암 빅데이터 플랫폼에서 분석의 목적은 암 종별 라이브러리 구축과 이를 통한 예측, 연구등 활용입니다. <br/>\
분석시 사용된 알고리즘은 나이브베이즈 알고리즘 입니다. 이를 통해 데이터간 연관 관계를 정의 하여 정형 데이터간의 관계를 정의 했습니다.\
',

'종양의 크기, 환자의 나이등등 주어진 자료를 토대로 암 종별 라이브러리와 대조하여 암 여부를 진단 하는 용도로 사용되었습니다. <br/>\
종종 확보된 데이터가 적어 현실 대비 너무 적은 확률값 도출시 라플라스 스무딩으로 보정하여 정상 수치로 올려 활용하였습니다.\
',

'응급의료체계에서 비즈니스 연속성은 응급 환자의 골든 타임을 지키기위해 응급환자 발생부터 사후 관리 까지 모든 라이프 사이클상 의료와 ICT 기술의 결합의 연속성 유지를 말합니다. 재난 상황등 연속성이 유지 되지 않을시엔 PS-LTE를 활용하여 연속성을 유지합니다. <br/>\
이로 인한 효과는 환자의 소중한 생명을 살릴수 있는 확률을 단 1%라도 높이기 위한 노력으로 인해 응급환자의 안전과 생명을 지킬 수 있는 효과가 있습니다.\
',

'개인정보 익명화를 위한 기법으로 크게 가명처리, 총계처리, 삭제처리 가 있습니다. 가명처리는 다른 이름으로 대체하는 방법이고, 총계처리는 수학적 기법을 이용해 은닉하는 기법입니다. 마지막으로 삭제처리는 주요 식별 정보를 삭제합니다. <br/>\
이는 개인정보 비식별 조치 가이드라인에 기재되어 있는 내용으로 이외에 범위처리, 마스킹 처리 등이 존재합니다. <br/>\
개인정보 익명화는 의료 마이데이터 구축과 정보 제공 활성화를 위해 중요한 기술입니다. 최근 데이터 3법 개정으로 인해 가명처리가 된 데이터에 대해 가명데이터를 활용 할 수 있게 되었는데, 이를 활용하기 위한 선결 조건이 바로 익명화 방법입니다. <br/>\
정보 제공활성화를 위해선 데이터를 제공하는 정보 주체에게 안전하게 이용할 것이라는 신뢰감을 주어야 하는데, 해당 기술이 위 역할을 맡게 됩니다.\
',

'병원업무에 인공지능/클라우드를 적용하여 발전 시킬 수 있는 방법은 AI 판독과 진료정보 공유 시스템 적용입니다. <br/>\
AI 판독은 다른 말로 TeleRadiology 라고도 하는데, X-Ray,CT,MRI등 환자의 영상정보를 기반으로 CNN, RNN 등 기술을 이용하여 AI가 판독에 도움을 주는 기술입니다. <br/>\
다음으로 진료정보 공유 시스템 적용입니다. 이를 활용하여 정부 종합 전산센터의 Pulbic Cloud인 G-Cloud를 활용하여 공중망간 환자 진료 정보와 영상정보를 주고 받을 수 있는 클라우드 시스템을 활용하여 병원업무 체계를 선진화 시킬 수 있다고 생각합니다.<br/><br/>\
AI 유전진단 시스템 -> 부족한 유전의학 전문의 공백 감당\
',

'Data, Network, AI 측면으로 말씀 드리겠습니다. <br/>\
Data 측면으로는 기존 의료기관간 이동시 데이터를 전달하는 방식은 대부분 대면 방식이었다면, 포스트 코로나 시대를 맞아 비대면 방식의 데이터 전달 방향으로 발전할 것입니다. <br/>\
Network 측면으로는 비대면, 원격 진료를 강화 하기 위해 Private 5G 의료망등을 구축하여 Digital Twin 기술, AR 기술등을 활용한 원격 진료의 현실화 방향으로 발전할 것입니다. <br/>\
AI 측면으로는 환자의 Vital Sign 을 기존의 대면 방식이 아닌, AI 카메라를 이용해 자동으로 측정, 기입 하는 비대면 방식으로 발전할 것으로 생각듭니다. \
',

'의료 프로젝트와 일반 프로젝트의 PM의 역할과 중요한 자질은 대동소이 합니다. <br/>\
PM 의 경험을 빗대어 답변 드리자면 PM의 역할은 프로젝트를 성공적으로 수행시키기 위해 팀원관리와 결과물에 대한 관리를 철저히 수행하는 것이고, 이를 위해 필요한 중요한 자질은 바로 솔선수범하는 자세라고 생각합니다. <br/>\
의료 프로젝트에선 주 고객층이 의료인이 될 것이고, 일반 프로젝트는 주 고객층이 이외 고객층이 된다는 점이 가장 큰 차이점입니다. \
',

'암 빅데이터 플랫폼 사업은 개인정보보호를 준수한 표준화된 암종별 빅데이터 구축 및 확산을 주 목적으로한 사업이었습니다. <br/>\
개인정보보호를 위해 정형, 비정형 데이터 암호화, 비식별처리 기술을 사용하였고, 비식별 처리가 된 소중한 정보를 활용하기 위해서 주로 나이브베이즈 알고리즘 기반의 텍스트 분석 기술을 사용했습니다.\
',

'네 그렇습니다. 먼저 응급 의료를 중심으로 진료 정보를 병원간 연계 인프라를 구성하고, 환자의 진료 정보를 활용해 암 빅데이터 플랫폼을 통한 라이브러리를 구축하고, 진료 정보 공유 시스템을 통해 의료 마이데이터 중심 의료 ICT 기술 기반 사회를 구축하는 점에서 연관성이 있는 사업들입니다.\
',

'의료 기기에 대한 표준은 참여했던 프로젝트 특성상 현업에서 다루진 않았지만 학습했던 내용을 기반으로 설명드리겠습니다. <br/>\
프로세스 : IEC 62304 <br/>\
관리 : ISO 14971 <br/>\
제품 : IEC 60601 \
',

'국내 마이데이터 산업은 금융 분야가 가장 활발하고 그다음으로 의료 분야가 활발한 움직임이 있습니다. <br/>\
금융 분야에선 금융위에서 발간한 금융 분야 마이데이터 서비스 가이드라인과 기술 가이드라인이 존재하고 <br/>\
의료 분야에선 보건복지부에서 발간한 보건의료 데이터 활용 가이드라인이 존재 합니다. <br/>\
보건의료 데이터 활용 가이드라인의 주요 내용은 가명 처리를 중심으로 개념, 방법, 활용대상 등으로 구성됩니다. <br/>\
보건의료 데이터 관련 마이데이터 활성화 방안은 법,제도 개편과 특화 플랫폼 구축입니다. <br/>\
의료법 우선주의로 인해 개인 정보보호법에 의해 개방되어있는 마이데이터가 의료법에 가려 활용되지 못하는 상황과 기술 및 각종 규제 장벽 준비 기간을 효율적으로 줄일 수 있는 방법이 특화 플랫폼 준비라고 설명 드릴수 있습니다.\
',

'AI 적용으로 인한 업계의 경험과 지식을 무용지물로 만드는 두려움이 있습니다. <br/>\
혁신은 많은 것들의 기대를 불러 일으키지만 실제 그 일에 종사하고 있는 종사자들을 두려움으로 몰고가는 것은 피할 수 없는 현실입니다. <br/>\
이를 극복하기 위해선 업역을 충분히 존중하며 대체가 아닌 도움의 영역으로 해당 기술이 자리잡아야 한다고 생각합니다.\
',

'진료정보공유 시스템에서 PM의 역할은 크게 내부적 관리와 외부적 관리를 말씀 드릴 수 있습니다. <br/>\
먼저 내부적 역할으로는 과제관리 중심으로 팀을 운영하였으며 팀원은 PM인 저와 PL2명 그리고 PL당 개발자 3명씩 편성되었고, 이외에 임상병리 전문가인 간호인력이 2명 편성되었습니다.<br/>\
그리고 외부적으로는 해당 사업의 중앙기관인 사회정보 보장원과의 커뮤니케이션, G-Cloud 이용을 위한 정부통합 전산센터와의 소통, 끝으로 마련한 해당 시스템을 지역 병원에 홍보하고 참여를 이끌기 위한 활동들을 주로 수행하였습니다.\
',

'빅데이터 처리는 수집, 정제, 적재, 분석, 시각화 과정으로 처리되게 됩니다. <br/>\
먼저 정형, 비정형, 반정형 데이터를 수집 하는 과정인 수집 과정을 거쳐 <br/>\
수집한 데이터를 적재하기 위해 불용 데이터를 제거하는 정제 단계 <br/>\
다음으로 정제된 데이터를 분석하기 위해 저장소에 적재하는 단계 <br/>\
적재된 데이터를 의미있는 자료로 분석하는 단계 <br/>\
끝으로 이를 사용자에게 제공하기 위한 시각화 단계로 구성됩니다. <br/><br/>\
암 빅데이터 플랫폼에서 적용한 기술을 답변드리자면, <br/>\
수집 단계에서 정규화 되지 않은 Table로 인해 분석이 어려운 이슈를 해결하기 위해 데이터베이스 정규화를 시행했고, <br/>\
분석과정에서 데이터간 연관 관계를 확률로 표현하기 위해 나이브 베이즈 알고리즘 기술을 활용하였습니다.\
',

'표준 서식은 HL7 프로토콜의 CDA, FHIR 이 존재하고, <br/>\
표준 기능으로는 입력 표준 화면 설계나 엔진, 인터페이스를 표준화 하는것을 의미합니다. <br/>\
끝으로 표준 용어로는 한국형 질병분류 체계인 KCD-7, EDI 그리고 한국형 외상환자 분류체계인 K-TAS 가 있습니다.\
',

'우선 QM은 QA와 QC의 합해진 형태로 해석이 됩니다. <br/>\
각각을 설명드리자면 QM 은 요구사항, 표준을 식별하여 준수할 수 있는 입증방법을 문서로 명시하는 프로세스이고 <br/>\
QA 는 품질 측정치 결과와 품질 요구사항을 감시하는 프로세스 입니다. <br/>\
끝으로 QC 는 성과 평가, 실행 결과를 감시하고 기록하는 프로세스 입니다. <br/>\
덧붙여, 품질을 측정하는 방법은 QC7 도구들을 활용합니다.\
',

'데이터 측면의 고려사항은 각 지역병원간 분산된 환경에서의 실시간 데이터 전송으로 인한 과부화와 분산 환경 데이터 정합성을 고려하여야 하고, <br/>\
어플리케이션 측면으로는 응급 의료 특성상 24시간 365일 중단시간 최소화를 위해 Hot site 수준의 Application 기술적 운영체계를 고려사항으로 꼽을 수 있습니다.\
',

'의료인 측면과 환자를 대상으로 하여 설문지 형태로 만족도 조사를 하였고, <br/>\
의료인 측면에서는 진료정보 공유 방식 변경에 대한 업무 만족도와 제공 자료 품질 측면을 중심으로 조사하였고, <br/>\
환자를 대상으로는 이전 경험 대비 만족도를 중심으로 조사하였습니다. \
',

'데이터 표준화 방법은 HL7 프로토콜의 CDA 표준을 사용하였습니다. <br/>\
이를 표준화하기 위해 암 빅데이터 플랫폼 2차 사업에서 하둡 기반의 상용 솔루션을 도입하였고, <br/>\
제가 참여한 3차 사업에서는 도입했던 상용 솔루션의 한계로 인해 분석/추출 부분을 별도로 개발하여 데이터 표준화에 도구로 사용하였습니다. \
',

'QC7은 데이터 품질관리를 위한 7가지 도구를 말합니다. <br/>\
인과관계도, 산점도, 관리도, 히스토그램 등으로 구성되어 있고 <br/>\
언어데이터 문제 분석을 위한 신QC7도구 또한 존재하는데, 위의 구성은 친화도, 연관도, 계통도 등으로 구성되어 있습니다. \
',

'HL7은 이기종 의료정보시스템간 정보 호환 가능을 위해 표준을 제정한 표준화 기구입니다. <br/>\
HL7에서 발표한 규격으로, HL7규격, CDA규격, FHIR 규격이 존재합니다. <br/>\
각각의 특징은 HL7v2 는 EDI 기반 ,HL7v3 는 XML 기반, CDA 규격은 범용성 확장, FHIR 규격은 IoT 기기 수용이 특징입니다.\
',

'의무기록고도화 프로젝트에서 사용한 개발 방법론은 객체 지향 개발 방법론을 사용하였고, SDLC는 나선형 기반으로 진행되었습니다. <br/>\
추가적으로 내부 언어는 Java, 외부 연계 모듈은 JSON 으로 구성되어 있었습니다.\
',

'첫째, 데이터 형식 측면으로 XML은 트리구조, JSON은 Name/Value 구조입니다. <br/>\
둘째, 성능 측면으로는 XML은 상대적으로 느린 반면, JSON은 상대적으로 빠릅니다. <br/>\
셋째, 취급가능한 컨텐츠 유형으로는 XML은 텍스트, 숫자, 이미지, 차트등을 취급하고, JSON은 텍스트와 숫자를 취급합니다. \
',

'AI를 의료에 적용할 수 있는 방안은 정책적 측면과 비즈니스적 측면으로 나눌 수 있습니다. <br/>\
첫째, 정책적 측면에서 AI 적용으로 인해 발생 할 수 있는 결정권, 책임 소재를 명확히 하여야 합니다. <br/>\
둘째, 비즈니스적 측면에서 AI의 충분한 학습을 위해 병원 데이터 Silo 현상을 해결하여 학습 데이터 기반을 조성해야 합니다.\
',

'기계학습 측면에서 성능 검증을 수행한 후, 하이퍼 파라미터 측면에서 성능 검증을 수행합니다. <br/>\
먼저 기계 학습 측면에서는 지도학습의 성능 검증인 혼동 행렬이나, ROC Curve를 통해 결과 값에 대한 성능 검증을 수행 합니다. <br/>\
다음으로 하이퍼 파라미터 측면으로 판독 의사의 최종 결정 이벤트를 통해 이를 성능 검증하게 됩니다.\
',

'전국 총 예산 300억에 10개 지역으로 나누어, 각각 30억 예산 규모에 제가 진행한 기관의 상세 규모는 사업기간 2년 2개월, 인원 PL둘 개발자 여섯, 임상병리 인력 2명에 100MM 규모였습니다.',

'100MM 중 PL 2명, 개발자 6명 총 8명으로 구성되어 수치적으로 계산할땐 12.5개월이 걸리지만, 타 프로젝트 완료시점 대기로 인한 계산결과 총 20일의 버퍼를 고려하여 14개월로 산정하였고, 프로젝트를 성공적으로 수행할 수 있었습니다.\
',

'진료정보 공유사업의 총괄 PM은 따로 있었고, 저는 시스템 구축 분야의 PM으로 활동했습니다.',

'의료 마이데이터는 현재 초기 단계입니다. <br/>\
마이데이터 성숙도 수준을 0~4단계로 조회, 저장, 전송요구, 대리활용, 전산업활용 단계로 나뉘는데, 현재 의료 마이데이터는 1단계인 단순 조회 및 저장만 가능한 수준입니다. <br/>\
이를 해결하기 위해 법제도적으론 개인정보보호법 2차 개정, 기술적으론 의료 보안관제 시스템 확대를 진행중입니다.\
',

'기술적 측면과 정책적 측면으로 나누어 설명드릴 수 있습니다. <br/>\
먼저 기술적 측면입니다. 급변하는 의료 IT 환경에 따라 의료 마이데이터 규격또한 IoT, AI 등 신기술 수용가능한 HL7의 가장 최근 버전인 FHIR 버전으로 표준화 방향성을 기술 설계 해야한다고 생각합니다. <br/>\
다음으로 정책적 측면입니다. 현재 국가에선 EMR 인증제도를 실시하고 있습니다. 현재 상급종합병원 중심의 위 인증제도를 지역병원까지 확장시켜 국가 의료 데이터 표준화 정책 설계 해야한다고 생각합니다.\
',

'JSON의 장점은 Name, Value 구조로 XML에 비해 단순한 구조가 장점이고, <br/>\
단점은 텍스트, 숫자 이외에 이미지, 차트등 저장할 수 있는 XML에 비해 JSON 은 텍스트, 숫자만 저장할 수 있는 스키마 구조인 것이 단점입니다.\
',

'ETL과 ELT 차이점에 대해 설명드리겠습니다. <br/>\
첫째, 프로세스 측면의 차이점입니다. ETL은 추출->변환-> 적재 프로세스를 거치고, ELT는 추출->적재->변환 프로세스 를 거치게 됩니다. <br/>\
둘째, 스테이징 단계에서 차이점입니다. ETL은 소스, DW 사이에 스테이징 단계를 수행하고, ELT는 DW 활용하여 스테이징 단계를 활용하지 않습니다. <br/>\
셋째, 개인정보 보호 측면에서 차이점입니다. ETL은 개인정보 보호규정을 준수 할수 있는 반면, ELT는 개인정보 보호규정을 준수할 수 없습니다.\
',

'최초 병원 정보 전산화는 1980년대 EDI 보험 청구 전산화를 계기로 시작되었습니다. <br/>\
2000년대 초반에는 OCS 위주로 병원 시스템 설치를 진행하였고 <br/>\
2000년대 후반에는 OCS와 더불어 전자 기록 시스템인 EMR과 영상 기록 시스템인 PACS를 추가적으로 내포시켜 발전되었습니다. <br/>\
2010년대 초반에는 전사적 전산화를 위해 EHR로 발전하였고 <br/>\
2010년대 후반에는 OS 종속성을 탈피하는 방향으로 병원 정보 시스템이 발전하였습니다. <br/>\
끝으로 현재는 원격의료, PHR 등 환자 중심 의료시스템 체계로 발전 중입니다.\
',

'병원간의 정보 공유는 상급 종합병원 중심으로는 잘되고 있는 편이나, 지역 병원 차원까지는 그 영향이 끼치지 않는 현황입니다. <br/>\
이를 해결하기 위해 법/제도 측면, 기술 지원 측면으로 진료 정보 공유 사업인 "마이차트"사업을 계속해서 진행중입니다. \
',

'제 생각은 PACS 시스템 선 수출 후 OCS/EMR 점진적 확장 전략을 세워야 한다고 생각합니다. <br/>\
PACS 시스템은 OCS/EMR 과 달리 국가별 문화, 프로세스의 영향을 받지 않기 때문에 Localization이 상대적으로 수월하다고 생각이 들고, 실제로도 국내 병원 정보 시스템 수출의 대부분은 PACS 시스템 수출이 되고 있는 현황입니다. <br/>\
PACS 시스템 선제 수출을 통한 레퍼런스를 확보하고 이를 기반으로 OCS/EMR 솔루션 또한 점진적으로 수출하는 장기적 전략을 세우고 실행하는 것이 좋은 전략이라 생각합니다.\
',

'병원 정보 시스템은 한번 구축하고나서 대규모 업데이트 없이 20~30년을 그대로 사용하는 추세입니다. 그렇기 때문에 C/S 기반의 3-Tier 아키텍처, C, VisualBasic, PB 등 개발 언어가 여전히 사용되고 있습니다. <br/>\
하지만, 최근에 구축하는 병원 정보 시스템의 경우에는 중소/스타트업 기업을 중심으로 Python, Java등 비교적 Trendy 한 언어를 중심으로 개발되고 있는 현황입니다. <br/>\
다음으로 해외 구축 솔루션 방안에 대해 설명드리겠습니다. <br/>\
병원의 주요 촬영 장비는 외산화가 되어있고, 이를 위해 장비 Progarm은 해외 벤더에 의존하여 사용중입니다. <br/>\
하지만 OCS/EMR과 같이 법,제도적, 문화적 요소를 반영해야 하는 솔루션은 2000년대를 기점으로 하여 국산 소프트웨어를 통해 활용중인 현황입니다. <br/>\
종합하자면, 촬영 장비는 외산 중심, OCS/EMR은 국산 중심이며, 촬영 장비 SW 또한 국산화 하기 위해 정부에서 바이오 헬스케어 전략 산업 정책등 많은 지원을 하고 있습니다.\
',

'기존 개인정보 보호법에선 특정분야(금융, 의료, 행정) 일반적 규정이 부재했으므로 의료정보는 개인정보보호법에 의해 데이터를 전송할 수 있는 법적 근거가 부재하였습니다. <br/>\
이를 해결하기 위해 최근 개인정보 보호법 2차 개정에선 개인정보 전송 요구권을 포함 시켜 이를 해결하려는 법적 움직임을 취하고 있습니다.\
',

'응급의료법에 제5조2항에 의거하여 응급의료에 필요한 데이터를 동의 없이 협조받을 수 있어, 응급의료 데이터는 진료정보공유사업에서의 데이터 전송과 달리 동의 없이 전송, 통계, 활용 가능합니다.\
',

'본인 정보 활용에 동의한 것만으로 현재 건강상태를 기반으로 암종별 발병 확률과 이를 줄이기 위한 방안을 통해 발병률을 줄이는 혜택을 받게 됩니다.\
',

'제가 참여한 3차 사업에서는 유방암, 폐암, 대장암을 다뤘었고, 각각 4천만, 4천만, 1억 개의 데이터를 취급하였습니다. \
',

'강화 학습기반의 Action, Reward, State로 구성되어 AI 스스로 최적의 경로를 검색해주는 기술입니다. <br/>\
이를 활용하여 환자의 Golden Time 내 병원으로 이송을 가능케 하는 기술입니다.\
',

'CNN 기술과 R-CNN 기술이 있습니다. <br/>\
이를 이용하여 CT, X-Ray, MRI 와 같은 영상정보를 AI가 판독하여 결과를 제시합니다.\
',

'G-Cloud는 정부통합전산센터에서 운영하는 국내 최대의 공공전용 클라우드 입니다. <br/>\
제가 참여했던 진료정보 공유시스템, 암 빅데이터 센터의 데이터는 G-Cloud를 활용하여 데이터를 저장하였습니다.\
',

'의료 정보시스템 감리에 대해 설명드리겠습니다. <br/>\
첫째, 법적근거는 전자정부법 57조 이외에 의료법, 전자의무기록법, 국민건강증진법등을 근거로 실시합니다. ,br/>\
둘째, 감리 대상은 EMR, OCS, PAC, EHR, HIS 등 병원 정보시스템 전 범위를 대상으로 시행합니다. <br/>\
셋째, 의료 정보시스템 감리의 특징은 의료 정보 시스템 통한 수익화 구조 여부 판단, 개인정보 흐름에 대한 중점적 확인이 의료 정보시스템 감리의 특징입니다.\
',

'업무 측면과 기술 측면으로 말씀 드릴 수 있습니다. <br/>\
먼저 업무적 측면입니다. Paperless를 위해 별도의 진료정보 공유 시스템을 활용해야 하기 때문에 이에 대한 업무 과중을 야기하고, 이를 위한 해결방안으로는 지역 병원에서 이를 적용할 시 RPA 측면의 설계가 필요하다고 생각합니다. <br/>\
다음으로 기술 측면입니다. 개인정보의 병원간 전송으로 인한 보안 이슈가 존재합니다. 이를 해결하기 위해 개인정보의 안전한 전송이 필요한데, 지역 병원에서는 이를 모두 따르기 어려운 상황입니다. 상급 종합병원 PM으로 이를 해결하기 위해서 지역 병원에 의료 보안관제를 홍보하였고, 이에 참여하여 보안성 이슈를 해결할 수 있었습니다.\
',

'의료 마이데이터는 의료분야의 정보주체가 자기 결정권을 기반으로 수집, 제공등 지정을 통해 서비스를 받는 데이터 형태를 말합니다. <br/>\
의료 마이데이터 활용 사례는 진료 정보 공유 시스템 통한 환자 정보 이동, 암 빅데이터 플랫폼을 활용한 환자 건강 상태 예측 등이 있습니다.\
',

'의료 관련 개인정보 보호는 개인정보 보호법 자율점검을 기반으로 보호합니다. <br/>\
년 1회 실시하는 개인정보 보호 자율점검을 통해 관리적, 물리적, 기술적 보호 조치를 점검합니다.\
',

'제가 경험한 의료 분야의 AI 적용 사례는 AI구급차와 AI판독이 있습니다. <br/>\
첫째, AI 구급차는 환자의 Golden Time을 지키기 위해 최적의 경로를 Q-Learning 기반의 AI Pathfinding Algorithm을 활용하여 최적의 경로를 제시해주는 기술입니다. <br/>\
둘째, AI 판독은 CNN, R-CNN 기술을 활용하여 판독사의 판독을 Assist 역할의 기술입니다.\
',

'첫째, 캡슐화 입니다. 접근제어의 규칙을 통해 프로그래머간 책임을 분리할 수 있기 때문입니다. <br/>\
둘째, 추상화 입니다. 클래스 추상화를 통해 본질적 문제에 집중할 수 있기 때문입니다. <br/>\
셋째, 다형성 입니다. 동적 바인딩 통한 생산성을 향상 시킬 수 있기 때문입니다.\
',

'CBD 개발방법론의 절차는 요구파악, 분석 및 설계, 구현, 테스트 로 진행되며 <br/>\
요구파악 단계에서는 요구사항기술서, UsecaseModel <br/>\
분석 및 설계 단계에서는 아키텍처 기술서, ERD 설계서 <br/>\
구현 단계에서는 코딩규칙, 프로그래밍 가이드 <br/>\
테스트 단계에서는 테스트 계획서와 보고서가 산출물로 존재합니다.\
',

'의료 SW품질 요소는 경영 측면과 데이터 측면으로 나눌 수 있습니다. <br/>\
경영 측면의 SW품질 요소는 실시간 발생하는 환자 정보를 활용하여 병원의 수익과 직접성을 근거로 품질관리를 수행하며 <br/>\
데이터 측면의 SW품질 요소는 개인정보 안전 보관 차원에서 DQM 기반으로 품질관리를 수행합니다. <br/>\
제가 참여한 프로젝트에선 대부분 DQM 기반의 데이터 측면의 품질관리를 위주로 경험하였습니다.\
',

'첫째, 예산 규모입니다. 전국 프로젝트 300억 규모, 본원 프로젝트 규모 30억 규모로 진행되었습니다. <br/>\
둘째, 인력 규모입니다. 진료정보 공유시스템 구축 PM으로 참여하여 PL 2, 개발자 각각 3 총 8명의 ICT 인력과 임상 전문가 인력 2명으로 진행되었습니다. <br/>\
셋째, 규모산정 방식입니다. 규모산정 방식은 100MM로 진행되었고, 총 프로젝트 기간 2년 2개월중 시스템 개발 구축기간은 14개월로 진행, 20일정도의 버퍼를 두고 진행하였습니다.\
',

'가명정보는 가명키에 의해 재식별이 가능한 정보고, 익명정보는 어떠한 방법으로도 재식별이 불가능한 정보입니다. <br/>\
제가 수행한 프로젝트에서 진료정보공유 시스템에선 재식별 필요성이 있기때문에 가명 정보를 사용하였고, 암 빅데이터 플랫폼 구축 프로젝트에선 민감정보의 은닉을 위해 익명 정보를 활용하였습니다.\
',

'암 빅데이터 플랫폼 구축 절차는 본원 플랫폼 구축, 지역 플랫폼 구축, 플랫폼간 연계 구축 순서로 진행되었고, 제가 참여한 부분은 지역 플랫폼 구축과 연계 구축 부분의 PL로 참여하였습니다. <br/>\
빅데이터 시각화는 시간, 분포, 공간, 관계, 비율 등의 기준으로 시각화를 수행하였고, 사용한 툴은 가장 무난한 오픈소스인 FineReport를 사용하였습니다.\
',

'ETL 주기는 1주일이었고, 데이터량은 유방암 4천만, 폐암 4천만, 대장암 1억 건이었습니다. <br/>\
성능에 대한 이슈는 복합질병 추출에 대한 이슈가 있었고, 해당 부분을 자체 개발하여 해결하였습니다. \
',

'첫째, 재사용 대상의 차이점입니다. 객체지향 방법론은 소스코드 형태의 재사용을 하지만, CBD 방법론은 바이너리 형태의 재사용을 기반으로 개발합니다. <br/>\
둘째, 재사용 관점의 차이점입니다. 객체지향 방법론은 논리적 측면인 클래스를 재사용하지만, CBD 방법론은 물리적측면인 컴포넌트를 재사용합니다. <br/>\
셋째, 목적에 따른 차이점입니다. 객체지향 방법론은 재사용을 통한 효과적인 개발에 초점을 둔다면, CBD 방법론은 개발보다는 조립에 초점을 둡니다.\
',

'KT G-Cloud를 사용했었고, KT G-Cloud는 평창올림픽 CDC 개소 시점인 2016년 10월에 보안인증을 받은 클라우드로, 보안에 대한 대책은 이를 활용하였습니다.\
',

'PS-LTE의 5G 도입 위한 국가 측면 발전 사항입니다. <br/>\
첫째, 기술적 고려 사항입니다. Private 5G 재난망 전용으로 도입하여 지연시간을 감소시켜 원활한 통신 품질 보장해야합니다. <br/>\
둘째, 산업적 고려 사항입니다. LTE 망에서 5G SA 망으로 전환할 시 기반 인프라가 전부 교체되어야 하며, 이를 위한 소재, 부품, 장비 등 국산화를 위한 방향성으로 고려해야 합니다.\
',

'AI구급차는 응급의료 시스템 구축시 AI구급차와 통신연계하기 위한 병원측면의 API 설계를 수행하였습니다. <br/>\
직접 구축하진 않았지만 해당 사업 참여함으로써 알게된 사실 기반으로 말씀드리자면 AI 구급차는 통신장애가 생길시 보급된 PTT 단말기를 통하여 PS-LTE망을 이용하여 통신합니다.\
',

'SOA 는 서비스 기반 아키텍처이고, EAI와 ESB는 애플리케이션간 연동위한 방법입니다. <br/>\
EAI 는 Adapter 기반의 연동 솔루션이고, ESB 는 HTTP, XML 과같은 방식으로 연동하는 솔루션입니다. <br/>\
제가 참여했던 암 빅데이터 플랫폼의 Region 간 연동을 위해 ESB 를 활용하였습니다.\
',

'데이터 값, 데이터 구조, 데이터 관리 프로세스를 대상으로 CIO, DA, Modeler, DBA, User 관점으로 데이터 관리 및 개선활동 하였습니다.<br/>\
성숙도 모델은 DQM3 를 활용하였고, 5단계인 최적화 단계를 목표로 관리하였습니다. <br/>\
DQM을 하기 위해 사용한 솔루션은 국내 민간 솔루션인 SDQ를 사용하였습니다.\
',

'DQM을 위해 비투엔사의 SDQ(Smart Data Quality) 솔루션을 활용하였습니다.\
',

'DQC-S는 데이터 품질 고도화 위한 보안 인증이며, Level 1~4 로 접근제어, 암호화, 작업결재, 취약점 분석으로 구성되어 있습니다. \
',

'비식별 표준은 IEEE 20889를 기반으로 학습하였고, 이를 기반으로 실무에 맞추어 활용하였습니다. <br/>\
상세 활용 내역은 가명화, 일반화, 무작위화를 중심으로 사용하였습니다.\
',

'PM인 저를 중심으로 상위 이해관계자와 하위 이해관계자간 이슈에 대해 설명드리겠습니다. <br/>\
상위 이해관계자인 사회보장 정보원의 인사이동으로 인해 프로젝트 중간에 센터장이 바뀌었습니다. 이로 인해 해당 사업에 대한 방향성이 흔들릴 수 있었으나, PM으로써 커뮤니케이션 능력을 통해 이를 최소화 하였습니다. <br/>\
하위 이해관계자인 지역 병원의 참여율 저조 이슈가 있었습니다. 이를 위해 비대면 홍보, 교육 활동 및 보안성 강화를 위해 의료 ISAC 가입 홍보를 병행하여 해결하였습니다.\
',

'PMBOK 6버전에서 프로젝트 위험관리는 긍정적 위험과 부정적 위험으로 분류합니다. 긍정적 위험 관리는 위험을 활용하는 방안을, 부정적 위험 관리는 위험을 회피하는 방안을 제시합니다. <br/>\
실무에서의 위험관리는 프로젝트 진행중 발생 가능한 위험을 예측하여 위험 관리 대장을 작성후 이를 우선순위화 하여 이슈 트래킹하는 방법으로 관리하였습니다.\
',

'형상 관리 대상 식별, 통제, 감사, 기록 순서로 관리합니다. <br/>\
프로젝트 도중 변경사항이 발생할 시엔 형상관리 통제 위원회인 CCB 를 통해 변경 여부에 대한 판단을 의뢰한 경험이 있습니다.\
',

'첫째, 개념 비교입니다. 변화 관리는 프로젝트 결과물로 인한 변화에 대한 교육을 말하며, 변경관리는 프로젝트 산출물에 대한 추적 관리입니다. <br/>\
둘째, 대상 비교입니다. 변화 관리는 이해관계자를 대상으로 시행되며, 변경관리는 개발자를 위해 수행됩니다. <br/>\
셋째, 산출물 비교입니다. 변화 관리는 교육,홍보 등 수행 내역에 대한 보고서가 산출물이고, 변경관리는 버전 변경 내역이 산출물입니다.\
',

'모의 훈련은 총 3번의 통합 테스트 가운데 3차 통합 테스트를 모의훈련으로 진행하였습니다. <br/>\
1차 통합 테스트에선 거점 병원과 지역 병원간 진료정보 중심 테스트 <br/>\
2차 통합 테스트에선 거점 병원과 지역 병원간 영상 정보 추가 테스트 <br/>\
3차 통합 테스트에선 화상 회의 플랫폼을 활용하여 환자 발생 시뮬레이션 중심 모의 훈련을 하였습니다.<br/><br/>\
대상 모집 > 1,2차 통합테스트 > 환경 구축 > 모의 훈련 순서로 진행하였습니다. 이때 모든 과정은 비대면 중심으로 수행하였습니다.\
',

'일반 정보 시스템과 의료 정보 시스템 감리 차이점입니다. <br/>\
첫째, 대상입니다. 의료 정보 시스템 감리의 대상은 OCS, EMR, EHR, HIS 등 병원정보 시스템을 기반으로 하거나, 해당 사업의 구축한 정보시스템을 기반으로 수행됩니다. <br/>\
둘째, 법적근거입니다. 전자정부법 57조 이외에 의료법, 국민건강증진법, 의료법등 의 법적근거를 통해 의료 정보 시스템 감리를 수행합니다. <br/>\
셋째, 특징입니다. 의료 정보 시스템 감리는 비즈니스 측면과 개인정보 측면에서의 차이점이 존재하는데, 제가 경험한 진료정보 공유시스템 감리에선 개인정보 흐름에 집중하여 감리를 대응하였습니다.\
',

'진료 정보 공유 시스템은 30억 예산이므로 3단계 감리 대상이었고, 감리 시기는 요구사항 수집 이후, 분석 설계 이후, 개발 이후 시점에 감리를 받았습니다. <br/>\
감리원은 총 5분이 오셨고, 월요일 부터 금요일 까지 일주일간 수행되었습니다. <br/>\
종료단계 감리에서 부적합 사례는 나오지 않았으며, 권고 조치사항이 10건 정도 존재 하였으나 빠른 시간내에 시정조치 하였습니다.\
',

'DB 암호화는 API, Plug in, TDE, OS 암호화 방식이 있으며, 응급의료정보시스템에선 OS 암호화 기반의 솔루션을 사용하였습니다.\
',

'크자패병 : 오버타임, 자원 추가\
',

'30억 3단계 대상 / 요구사항 수집 이후, 분석 설계 이후, 개발 이후 / 5일간, 5명 \
',

'진료 정보 시스템의 특성상 개인정보 분야의 감리를 중점적으로 다루었고, 종료단계 감리에서 권고사항 10개 정도 존재하였으니 빠른 시간내에 이를 시정조치하였습니다.\
',

'PS-LTE 스펙에 대해 말씀드리겠습니다. <br/>\
700MHz 주파수 대역, 최대 1Gbps 속도, 전송지연 10ms 의 통신 스펙을 지니고 있습니다. <br/>\
구성요소론 D2D, GCSE, IOPS, MCPTT 가 존재합니다.\
',

'응급의료 시스템 적용시 D2D 통신과 GCSE 통신 테스트를 수행 하였는데, 무전 통신 특성을 감안했을때, 체감되는 지연현상은 없었습니다. \
',

'DW 와 Data Lake의 차이점에 대해 설명드리겠습니다. <br/>\
첫째, 개념 차이점입니다. DW는 정형 데이터를 적재하는 저장소 이고, Data Lake는 비정형 데이터를 포함하는 적재 저장소입니다. <br/>\
둘째, 프로세스 차이점입니다. DW는 OLTP 프로세스를 사용하고, Data Lake는 OLAP 프로세스를 사용합니다. <br/>\
셋째, 저장기술 차이점입니다. DW는 주로 RDBMS 를 사용하고, Data Lake는 NoSQL 을 주로 사용합니다.\
',

'JSON은 Name과 Value로 이루어진 반정형 형태의 데이터 전송 기술이고, SOAP은 XML 기반의 Header와 Body로 이루어진 웹 상 데이터 전송 프로토콜 입니다. <br/>\
JSON을 전송하는 프로토콜은 REST 이고, SOAP의 전송 대상은 XML 기반의 반정형 데이터입니다.\
',

'상위 이해관계자와 하위 이해관계자와의 의사소통으로 나누어 설명 드리겠습니다. <br/>\
먼저 상위 이해관계자는 본 사업의 주관 기관인 사회보장 정보원이 있었고, 주간보고와 월간보고를 통해 의사소통 했습니다. <br/>\
다음으로 하위 이해관계자는 본 사업의 참여 기관인 지역 의료기관이 있었고, 비대면 중심의 교육, 기술지원을 통해 의사소통 했습니다.\
',

'관리적 체계와 기술적 체계로 나눌 수 있습니다.<br/>\
의료기관의 개인정보를 보호하기 위해 의료기관 내 CISO를 지정하고, 개인정보위원회를 구성 및 개인정보보호법에 따라 연 1회 내부직원 교육을 통해 개인정보 보호체계를 갖춥니다. <br/>\
기술적으론 의료기관 전용 보안관제 센터인 의료 ISAC(Information Sharing & Analysis Center) 에 가입하여 의료개인정보보호를 위해 기술지원을 받아 소중한 개인정보를 보호하는 체계를 갖추게 됩니다.\
',

'의료 ISAC 은 의료기관의 정보 공유, 분석 센터로 의료기관 전용 보안관제 센터입니다. 사회보장정보원에서 주관하여 운영하고 있고, 사업 초기엔 상급 종합병원 중심으로 가입자가 이루어졌지만, 진료정보 공유시스템 확장을 위해 현재 지역병원까지 가입 범위가 확장, 홍보 되고 있는 현황입니다.\
',

'시간, 분포, 공간, 관계등을 기준으로 데이터를 해석하여 목적에 따라 제공하는 기술을 의미합니다. <br/>\
실무 경험으론, 암 빅데이터 센터 구축시 활용하였고, 이를 위해 가장 무난한 툴인 Fine Report 오픈소스를 활용하였습니다.\
',

'데이터 표준화는 데이터를 원칙적으로 활용하기 위한 전사적 활동이고, 데이터 표준, 조직 구성, 표준화 절차로 구성됩니다. <br/>\
데이터 표준화중 어려웠던 점은 주 상병명 분류였습니다. 암 빅데이터 플랫폼 프로젝트 당시 환자 한명당 주 상병명이 하나만 존재하는 스키마를 구성하였는데, 의료 전문가의 입장에서 복합 상병 입력이 불가피 하였고, <br/>\
이를 해결하기 위해 복합상병을 위한 데이터 분석 프로그램을 별도로 개발하였습니다.\
',

'AI 데이터 셋 오류를 해결하기 위해 Active Learning 기법을 활용해야 한다고 생각합니다. <br/>\
Active Learning 기법을 위해 큐레이터로 의료인이 참여하여 최적화된 레이블 데이터를 반복 학습하여 데이터 셋 오류를 최소화 할 수 있습니다.\
',

'WBS를 실제상황에 맞춰 변경하였고, 총괄PM과 합의하여 최종 결정 후 변경하였습니다. \
',

'1단계 사전검토, 2단계 비식별 조치, 3단계 적정성 평가, 4단계 사후 관리가 있습니다. <br/>\
제가 참여한 암 빅데이터 플랫폼에서의 비식별 처리는 전송대상에 대한 사전검토를 실시하고, 가명,총계,삭제처리 중심으로 비식별조치를 실시, 비식별조치 가이드라인을 근거로 적정성 평가, 이후 상위 기관인 암 빅데이터 플랫폼 센터에 데이터를 전달함으로써 해당 기관에서 사후 관리를 이관하였습니다.\
',

'실제값과 예측값의 Positive Negative 결과에 따라 나뉩니다. <br/>\
실제값과 예측값을 순서로 Positive Positive 일 경우 TP <br/>\
Positive Negative 일경우 FP <br/>\
Negative Positife 일경우 FN <br/>\
Negative Negative 일경우 TN 입니다.\
',

'주요 성능 지표는 Accuracy, Precsion, Recall 이 있습니다. <br/>\
Accuracy 는 맞게 검출한 비율을 나타내고, Precision 은 예측한것에 대한 양성 비율을 나타내고, Recall은 실제 값중 양성 비율을 나타냅니다. \
',

'진료 정보 공유시스템 구축당시 상위 사업 기관인 사회보장정보원에서의 내부 인사이동으로 인해 프로젝트 중간에 사업 담당자가 바뀐 적이 있습니다. <br/>\
담당자 변경으로 인한 요구사항 변경이 요구되었고, 고객과 조율 끝에 좀처럼 결론을 맺지 못하자, 본사 형상관리 위원회를 통해 조정하였던 적이 있습니다.\
',

'형상관리와 버전관리의 차이점에 대해 설명드리겠습니다. <br/>\
첫째 개념 차이점입니다. 형상관리는 SW SDLC 단계 산출물 관리 활동이며, 버전관리는 개발 산출물에 대한 관리활동입니다. <br/>\
둘째 절차 차이점입니다. 형상관리는 식별, 통제, 감사, 기록 으로 이루어지며, 버전관리는 개발, Branch Update, Master Update 순서로 이루어집니다.\
',

'소프트웨어 개발시 특정 시점의 완전한 산출물 기준선입니다. <br/>\
계획단계엔 기능적 기준선, 요구분석 단계에는 분배적 기준선, 설계 단계에는 설계적 기준선 등 SDLC 단계 따라 각기 다른 기준선이 존재합니다.\
',

'첫째, 요구사항관리입니다. 요구사항 수집은 프로젝트의 첫단추이기에 가장중요하다고 생각합니다. <br/>\
둘째, 인력관리입니다. 모든 프로젝트는 인력에서 시작하고, 인력에서 끝이 나기 때문에 가장 중요한 자산이라고 생각합니다. <br/>\
셋째, 동기부여관리입니다. 솔선수범 자세와 적절한 보상체계를 통한 프로젝트 팀원의 사기 진작과 함께 해당 프로젝트를 성공시킨 경험이 있습니다.\
',

'뉴노멀은 코로나 19로 인해 새로워진 일상을 의미합니다. <br/>\
앞서 말씀드린 뉴노멀은 의료기관간 비대면 접점을 줄이기 위한 새로워진 업무 일상을 의미합니다.\
',

'EMR 인증심사는 신청 > 일정 조율 > 인증심사 단계로 이루어집니다. <br/>\
인증심사는 총 5일간 진행되며 통상 2일은 문서 심사, 3일은 실사 중심으로 진행됩니다. <br/>\
EMR 인증심사제도의 활성화 방안은 수가인센티브제, 의료마이데이터 서비스 기업 육성 중심으로 활성화 할 수 있습니다.\
',

'의료 마이데이터는 환자가 자기결정권을 행사하여 데이터 제공 및 서비스 이용 가능한 데이터 체계를 의미합니다. <br/>\
의료 마이데이터 성공을 위한 고려사항으론 법,제도 측면에서 의료법 상충 부분 보완을 고려할 수 있고, 기술적 측면에선 의료 마이데이터 전용 플랫폼 구축이 있습니다. <br/>\
다음으로 이를 위한 기술사의 역할으론 법,제도 측면에서의 문제를 해결하기 위한 해당 분야의 협회 활동이 있으며, 기술적 측면에선 안전한 환경 구축을 위한 기술 자문 및 지도 역할이 존재합니다.\
',

'첫째, 국민의 안전, 보건, 복지와 환경의 보전이라고 생각합니다. 이는 제가 속한 기관이 의료기관이다 보니 자연스레 눈길이 가고, 마침 첫번째 강령이기에 가장 중요하다고 생각이 들었습니다. <br/>\
둘째, 비밀의 보전 유지 입니다. 사람은 자신의 위치에 걸맞는 인격과 품격을 겸비해야한다고 생각합니다. 그렇기에 기술사로써 직무상 얻은 정보와 지식을 가치있게 사용해야 함이 중요하다고 생각합니다.\
',

'의료 시스템 감리는 정보 시스템 감리 절차대로 진행이 됩니다. <br/>\
계약 절차, 착수 회의, 현장 감리, 종료회의, 조치확인 절차로 이루어집니다. 제가 감리대응을 직접 수행했던 진료정보 공유 시스템 감리 대응에 대해 상세 설명해도 되겠습니까? <br/><br/>\
진료정보 공유시스템은 30억 규모로 3단계 감리 대상이었으며 요구수집 이후, 분석 및 설계 이후, 개발 이후 총 3번 감리를 받았고, 해당 시스템에선 개인정보의 보안성과 흐름도를 중점적으로 감리 받았던 경험이 있습니다.\
',

'비식별화는 개인정보 활용을 위한 비식별키가 없인 재식별이 불가능하게 변형한 데이터 변환 조치를 말합니다. <br/>\
비식별 조치가 된 개인정보의 재식별성 검증을 위한 모델이 바로 프라이버시 보호 모델입니다. 해당 모델은 k-익명성, l-다양성, t-근접성으로 구성되어 있습니다. 각각의 상세 설명을 해도 되겠습니까? <br/><br/>\
k-익명성은 연결 공격 방지 차원, l-다양성은 동질성 공격, 배경지식 공격 방지 차원, t-근접성은 쏠림 공격, 유사성 공격 방지 차원에서 내성 설계를 확인하는 검증 모델입니다.\
',

'우선 크게 양방향 암호화 기법과 단방향 암호화 기법이 존재합니다. <br/>\
양방향 암호기법은 암호키가 하나인 대칭키, 암호키가 2개인 비대칭키로 나뉘고 대칭키는 EMR 전자서명에, 비대칭키는 EMR 전자봉투에 활용하였습니다. <br/>\
단방항 암호기법은 해쉬 암호기법이 있고, 데이터내 특정 Column 암호처리를 위해 사용되었습니다. \
',

'우선 이해관계자는 환자, 의료기관, 국가 측면으로 나눌 수 있습니다. <br/>\
먼저 환자에겐 진료 정보 전송 패러다임을 Paperless 측면 서비스를 제공하였습니다. <br/>\
다음으로 의료기관 측면입니다. 의료기관간 데이터 전송을 통한 협업 현실화 가치를 제공하였습니다. <br/>\
마지막으로 국가 측면입니다. 본 사업 구축을 통해 의료 마이데이터 인프라 기반을 제공하였습니다. \
',

'DB 튜닝은 SW 튜닝과 HW 튜닝 순서로 이루어집니다. <br/>\
먼저 SW 튜닝에선 Index, PK 설계 등을 기반으로 수행되고, 이를 위해 사용자 인터뷰를 기반으로 해결 지점을 Tracking 해야 합니다. <br/>\
다음으로 HW 튜닝에선 Memory, Cache 증설, 용량 증설등이 수행되고, 이를 위해 비용기반 우선순위를 정해 튜닝해야 합니다. 실무 경험을 좀 더 말씀드려도 되겠습니까? <br/><br/>\
간혹 기술 수준이 낮은 조직에선 DB 성능 이슈 발생시 HW 증설부터 고려하는 경우가 있습니다. OCS/EMR 개발 구축당시 이러한 이슈가 있었지만, 근본적인 문제인 SW 적 튜닝을 먼저 고려하는 것을 제안하였고, SW 튜닝을 먼저 실시하며 이슈를 해결한 경험이 있습니다.\
',

'VR 수술교육, 원격의료, 디지털 치료제가 있습니다. <br/>\
첫째, VR 수술교육입니다. 이를 통해 양질의 의료 교육 기대효과가 있고, 이를 위해 현실과 거의 동일한 환경을 만드는 기술 요소를 고려해야합니다. <br/>\
둘째, 원격의료입니다. 이를 통해 의료 취약지역 서비스 제공 기대효과가 있고, 이를 위해 통신 지연시간 감소, 개인정보 유출 이슈 해결을 고려해야합니다. <br/>\
셋째, 디지털 치료제입니다. 이는 코로나 19로 인한 국민 심리 치료효과가 있습니다. 이를 위해선 치료효과 고도화를 위한 전문성 반영 요소를 고려해야합니다.\
',

'국가에선 AI + X 산업 프로젝트를 진행중이며, 2021년엔 총 11개의 과제를 선정하였습니다. <br/>\
이중 의료분야 과제는 의료비 심사 영상 판독 실증랩 구성,솔루션 개발, 감염병 예측 모델 개발, 의료자원 관리 솔루션 개발이 있습니다.\
',

'의료분야 규제샌드 박스 통한 실증특례는 막을수 없는 변화의 흐름이라고 생각합니다. <br/>\
다만 현재 정부에선 선적용 후규제를 주장하고 있지만, 이는 매우 위험한 판단이라 생각합니다. 따라서 조금 늦더라도 예상되는 문제점을 최대한 도출하여 선규제 후적용이 필요하다고 생각합니다.\
',

'관리적 부분과 기술적 부분으로 나누어 말씀 드릴 수 있습니다. <br/>\
우선 관리적 부분은 코로나 19로 인한 비대면 환경 통합 테스트 진행의 어려움이었고, 기술적 부분은 비대면 환경으로 인한 지역 병원 시스템 이슈 발생시 기술지원의 이슈트래킹 및 의사소통 수단 어려움이 있었습니다.\
',

'첫째, 개념 차이점입니다. 마이데이터는 정보주체인 환자의 정보 주권 기반의 서비스를 말하고, 진료 정보 공유 시스템은 환자 정보를 기관간 공유 하는 시스템을 말합니다. <br/>\
둘째, 이해관계자 차이점입니다. 마이데이터는 환자, 의료기관, 서비스 기관이 이해관계자로 작용하고, 진료 정보 공유 시스템은 환자, 의료기관이 이해관계자로 작용합니다. \
',

'첫째, 관리체계 수립 및 운영 <br/>\
둘째, 보호대책 요구사항 <br/>\
셋째, 개인정보 처리 단계별 요구사항으로 보안성 검토하였습니다. 추가 설명해도 되겠습니까? <br/><br/>\
관리체계 수립을 위해 기반 마련, 위험 관리, 운영, 점검 및 개선을 실시하였고 <br/>\
보호대책 요구사항을 위해 정책,조직,자산 관리, 인적 보안, 외부자 보안, 물리 보안 점검을 실시했고 <br/>\
개인정보 처리 단계별 요구사항을 위해 수집, 이용, 제공, 파기 Life Cycle 을 기준으로 관리하였습니다.\
',
];