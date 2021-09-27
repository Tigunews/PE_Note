var answer = 
[
// 경력
'진료 정보 공유시스템 구축시 이슈 사항과 대응 방안을 설명드리겠습니다. <br/>\
크게 상호연계성, 보안성, 사업 참여율 3가지 이슈가 존재하였습니다. <br/>\
병원간 EMR 데이터 호환 불가능 이슈가 발생하는 상호연계성 이슈가 발생하였고 이를 해결하기 위해 HL7-CDA 기반의 상호 연동 표준을 적용하였고, API를 통해 EMR 연계 모듈을 개발하였습니다. <br/>\
다음으로 기존 저장매체가 아닌 Public 망을 통한 환자 정보 전송으로 인해 관리적으론 개인정보 전송 대상이기때문에 정보보호조치가 의무적으로 부과 되었고 이를 해결하기 위해 의료보안 관제인 ISAC 참여를 유도하였습니다. 기술적 보안조치로는 접근 통제와 환자의 고유식별번호 체계 수립, 정보 분산이 요구되었고, 이를 해결하기 위해 환자 데이터를 암호화 하였고, SSL, 인증서를 통한 안정적 통신, 그리고 연계 역할을 하는 서버 백신 도입과 주기적인 백업 계획 수립으로 대응하였습니다.\
마지막으로 사업 참여율입니다. 지역 의료기관의 기술력/재정 부재와 데이터 사일로 현상으로 인해 사업 참여율이 저조했고, 이를 극복하기 위해 비대면 교육 및 기술지원 체계 구상, 전체 의료범위가 아닌 응급의료체계 범위를 우선적으로 범위를 집중하여 커뮤니티를 구성하고 참여를 적극 유도하였습니다. 결과적으로 지역 의료기관 70% 참석율 성적을 냄으로써 꽤나 큰 성과를 냈습니다.\
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
기존 의료 시스템에서는 의료진 중심 업무 형태로 서비스가 제공되었다면, 마이데이터는 의료진에서 환자로 중심의 이동이 이루어졌습니다. 환자에게 가장 필요한 정보가 무엇이며, 그 정보가 다시 의료진에게 피드백 되어 선순환 구조를 만드느게 가장 중요한 사항입니다. <br/>\
병원에 내부에 있는 의료진과 병원외에 있는 환자를 연갈하기 위한 디바이스 중심으로 서비스 디자인 기술이 필요합니다. <br/>\
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

'지역 예산 300억에 본원 진행 프로젝트는 30억 규모에 100MM 정도의 사업이었고, PM인 저를 보함하여 2명의 PL 6명의 개발자, 2명의 임상병리 전문가로 구성되어 진행됐습니다.\
',

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

'EAI 는 Enterprise Application Integration 으로 Point to Point 혹은 Hub and Spoke 토폴로지로 Adapter를 이용하여 기업 어플리케이션을 연동하는 방식을 말합니다. <br/>\
구성요소로는 Adapter, EAI Platform, Message Queuing, Data Format Transformation 이 존재합니다.<br/>\
ESB 는 SOAP Web Service 기술을 이용하여 내/외부 정보 시스템 통합,관리,사용을 지원하는 SOA 지원 미들웨어 플랫폼 솔루션입니다. <br/>\
구성요소로는 Interaction Link, SOAP, Runner 기술, ESB 패턴이 있습니다. <br/>\
두 기술간의 관계는 EAI 의 이기종 통합대상이 많아지자 시스템을 분리하여 표준화 하기 위해 등장한 기술이 ESB로, 기술적 전후 관계 입니다.\
',

'SOA는 서비스 지향 설계 방식으로 서비스 단위로 개발을하고, 개발된 서비스들을 공유함으로써 재사용성을 늘리고 유연성을 확보하는 아키텍처입니다. <br/>\
MSA 또한 작은 단위의 서비스로 소프트웨어를 구성함으로써 민첩하고 유연한 설계를 할 수 있도록 하는 아키텍처입니다. <br/>\
비슷해보이지만, 이 두 아키텍처의 차이점이 존재합니다. 먼저 재가용성 측면입니다. SOA에서는 각팀에서 개발한 서비스를 팀의 자산으로 귀속시키는 반면, MSA에서는 모든 서비스가 공유되며 독립적으로 실행되는 것을 지양한다는 점에서 차이점이 존재합니다.\
다음으로 통신 방식 측면입니다. SOA 는 SOAP, EAI, ESB 등 서비스간 통합적이고 공통적인 방식으로 구성 및 통신 하지만, MSA는 Restful API 방식으로 서비스 제공자가 외부로 나타낸 API를 통해 통신합니다. \
',

'SOAP는 Simple Object Access Protocol 으로, 일반적으로 널리 알려진 HTTP, HTTPS, SMTP 등을 통해 XML 기반의 메시지를 네트워크상에서 교환하는 프로토콜입니다. <br/>\
구성요소로 메시지 루트 요소인 SOAP Envelope 아래 필수 하위요소인 SOAP Body, 선택적 하위 요소인 SOAP Header로 구성되며 SOAP Body 아래엔 오류 보고용도로 SOAP Fault 또한 존재합니다.\
',

'RESTful API는 별도의 인프라가 필요없고, HTTP 프로토콜 표준을 최대한 활용한다는 장점이 존재하고, 관련 표준이 부재하고, 사용할 수 있는 메소드가 HTTP Method 4가지 밖에 없다는 단점이 존재합니다. <br/>\
RESTful API의 필요성은 애플리케이션 분리 및 통합, 다양한 클라이언트 수용 위한 멀티 플랫폼 지원 측면에서 필요한 기술입니다.\
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

'응급환자 생명의 Golden Time을 지키기 위해 ISO 22301 기반의 BCMS 체계를 구축하여 어떠한 상황속에서도 업무 연속성이 유지 될 수 있도록 시스템을 구성하였으며 <br/>\
재난 상황시에도 응급의료 기관간 통신 할 수 있도록 PS-LTE 망을이용한 Push to Talk 단말기 보급 <br/>\
FTP를 이용한 실시간 가용 병상 정보 전달, XML, JSON을 이용한 응급환자 분류 체계 및 진료 종합 결과 전달, 이외 영상정보 전달을 위해 DICOM 규격을 활용하였습니다. \
',

'전자서명이 없는 의무 기록은 그 자체로 법적 효력이 없고, 병원 직인을 찍고 병원에서 관리하는 직인 대장과 대조하여 정보가 일치할 시 그 효력을 갖게 됩니다. <br/>\
하지만, 전자서명이 되어 있는 의무기록은 그 자체로 법적 효력을 갖고, 이를 그 자체로 증빙 할 수 있기 때문에 EMR 간 데이터 대 데이터로 연계, 효력유지 할 수 있도록 하는 역할을 합니다. \
',

'급변하는 ICT 환경으로 인해 의료 정보시스템 또한 영향을 미쳐, 기존의 HL7 CDA 프로토콜이 변화화는 환경 적응에 한계로 인해 개발된 클라우드, 모바일, IoT 등 다양한 의료 환경 대응 위한 HL7 최신 국제 표준입니다. \
',

];