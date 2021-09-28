var answer = 
[
// 토픽
'',

'첫째 : 감리, 효율성 향상, 안전성 확보, 3자적 관점, IT 시스템 구축 및 운영 종합점검, 문제점 개선 활동, 공공 시스템 구축시 전자정부법 57조 1항 의거 의무사항 <br/>\
둘째 : PMO, 정보화사업 발주자 관점, 프로젝트 이행 지원 조직, 공공 PMO - 전자정부법 62조 2항 의거 권고 사항 <br/>\
셋째 : 광정관리(일정/범위) 특화된 관리활동 수행, 산출물관리(부수적 업무 수행) \
',

'예비조사 (감리계획서) → 현장감리 (감리수행결과보고서) → 시정조치확인 (시정조치확인보고서) 순으로 진행합니다.\
',

'',

'- 위험 : 발생하기 전의 사건 <br/>\
- 이슈 : 발생한 이후 사건 <br/><br/>\
- 위험은 위험분석을 통해 정성적분서으로 우선순위를, 정량적 분석으로 수치를 표현하여 대응 <br/>\
- 이슈는 이슈관리 대장을 통해 발생한 사건에 대해 대응 \
',

'- 데이터 기능 : 데이터 베이스 논리적 위치에 따라 내부, 외부 ILF, EIF 로 처리 <br/>\
- 트랜잭션 기능 : 트랜잭션 특성에 따라 EI, EO, EQ 를 통해 처리 <br/>\
- 소프트웨어 산정기법으로 사용 \
',

'- FP산정시 초반에 정확한 공수가 안되는 이유 : 정확한 수치에 대한 근거 부족 <br/>\
- 비슷한 기존 프로젝트 존재시 벤치마크, 없을시 전문가 산정 <br/>\
- 상황이 여의치 않을시 정확한 수치 기반이 어려운 프로젝트 초반에는 간이법을, 어느정도 프로젝트 구체화 되는 후반에는 정통법을 이용하여 수행 \
',

'* 민간 업체에서 업무를 해서 FP 사용 경험 x, 하지만 학습 기반 말씀 드리겠습니다 <br/>\
- FP 공수 산정을 통해 1FP 약 55만원 비용 통해 산정, 프로젝트 규모 따라 다르게 산정?? \
',

'- Incident : 헬프 데스크를 통해 처리되는 민원 처리 <br/>\
- Problem : 근본적인 원인에 대한 관리 <br/><br/>\
- Incident를 통해 처리되는 이슈중에 근본적인 분석이 필요한 내용을 담당자에게 전달, 근본적인 원인 분석하고 처리 \
',

'- 지도 학습 : 레이블 / Classifier <br/>\
- 비지도 학습 : 레이블x / Clustering <br/>\
- 강화 학습 : Action, State, Reward / 강화학습의 Reward를 레이블로 보는가에 따라 지도학습으로 분류하기도 함 \
',

'- 사전정보 없이 비슷한 특성 묶는 비지도 학습 원리 <br/>\
- 대표적으로 거리 기준 Centroid 기반인 k-means 알고리즘이 있으며 이외, DBSCAN, GAN 등이 있습니다. \
',

'- 예로부터 SW 플랫폼 시장은 관련 업계의 쟁취 대상이었습니다. <br/>\
- 하지만 현재 IT 공룡이라 불리는 Apple과 Google의 풍부한 3rd Party, 고객층 등을 고려했을시 이들과 경쟁하여 플랫폼을 쟁취한다면 더할나위 없겠지만 <br/>\
- 투자대비 성과 측면, CAPEX, OPEX 절감 측면에서 플랫폼을 포기하고 Device 에 집중하여 시장을 공략할 선택 할 수 밖에 없을 것이라 생각 듭니다. \
',

'',

'- 관리기법 : 간트차트, CCM 등이 있지만 현실적으로 많이 사용했던 것은 WBS 변형한 일정표 <br/>\
- 프로젝트시 가장 중요 : 인적 자원관리, 소프트웨어도 사람이 만드는 것인 만큼 사람의 특성, 성향을 파악하는 것이 중요, 위를 기반으로 개발 Task 할당 중요 \
',

'- 가상화 아닌 서버기반일 경우 스케일 아웃, 업이 안되어 확장성 문제 있음, 컨테이너 기반 POD 구성, 레파지토리에 저장하고 배포하는 형식 사용 함 <br/>\
- 최근 코로나19 예방접종 사전 예약 시스템과 같은 경우도 가상화를 사용하면 부하로 인한 시스템 대응 좋음\
',

'* 네 면접관님 말씀이 맞습니다 <br/>\
- 이러한 부분은 모든 데이터 동기화가 되어야하는 DBMS 와 같은 부분은 어려운 사실이다. <br/>\
- 이를 극복하기 위해 분산 환경 동기화를 위한 SAGA Pattern, Message Queueing 과 같은 기술을 통해 극복이 가능 하다 \
',

'- 전체 가상화와 부분가상화는 크게 명령어 전달 방식에 따라 명령 해석을 직접 전달하는 베어 메탈 방식은 전체 가상화, 이와 달리 API 를 통해 OS 명령어를 제어하는 방식이 바로 부분 가상화 입니다. <br/>\
- 전체 가상화는 Guest OS를 수정하지 않아도 되는 방식이고, 반대로 부분 가상화는 Guest OS를 수정하여야만 가상화가 가능한 방식입니다. \
',

'영상정보처리기기, 즉 CCTV는 경찰관이 범죄등의 수사시 요청될 수 있습니다. <br/>\
접근 절차는 공공기관의 경우 사전에 공문을 통해 접근 할 수 있습니다. <br/><br/>\
기록 항목은 유형(이용, 제공, 열람, 파기), 이용/제공 형태, 기간 및 파기 일자 등을 기록하게 됩니다\
',

'문제 원인은 특정 시간대에 사용자가 집중적으로 몰려 웹 서비스가 제대로 동작하지 않는 현상입니다. <br/><br/>\
해결 방안은 트래픽 제어 솔루션 도입을 통해 사용자를 대기 상태로 조치하는 방법이 있습니다. 정부에서 시행하는 것처럼 생년월일 뒷자리로 구분하여 사용자를 분산하는 방법도 있습니다. \
',

'재난 안내 메시지는 셀브로드캐스팅이나 PS-LTE를 통해 안내 가능합니다. <br/>\
지연 되는 이유는 PS-LTE는 LTE 망을 기반으로 서비스 하고 있기 때문에 도서지역이나 산간지역 경우 LTE 서비스가 정상적으로 동작이 안되는 경우 상대적으로 다른 사용자에 비해 서비스가 지연될 수 있습니다.\
',

'수석감리원은 수석감리사 국가공인자격 자격을 취득하거나 정보기술 분야의 기술사 취득 후 일정 교육을 수료시 조건이 해당됩니다.\
',

'상주감리의 기준에 대해 정보시스템 감리기준에 의거하여 정의, 실시시기, 인력배치 측면으로 설명 드리겠습니다. <br/>\
먼저 정의 입니다. 상주감리의 정의는 감리대상사업 현장에 상주하거나, 주기적으로 투입되는 감리원이 사업의 위험요소 및 산출물 검토, 자문등을 수행하는 감리를 말하며 <br/>\
다음으로 실시시기 입니다. 소프트웨어 진흥법 48조 2항에 따라 대기업 소프트웨어 사업자의 참여가 제한되거나, 그밖에 감리대상사업의 위험도 난이도가 높다고 판단되는 경우 실시하게 되며, <br/>\
마지막으로 인력배치 입니다. 상주감리를 하는 경우 감리법인은 1) 사업비 20억원 이상 감리 3회이상 2) PM or QA 경력 3년이상 3) 그밖에 발주자가 인정한 수석감리원 중 어느하나에 해당되는 수석감리원을 상주감리원으로 배치하여야 합니다. \
',

'CBD 방법론은 기 개발된 SW 컴포넌트를 조립, 새로운 시스템을 구축하는 방식으로 객체지향의 단점인 SW 재사용성을 극대화한 개발 방법론 입니다. <br/>\
대표적인 특징으로는 생산성, 고품질, 재사용과 대치성 등이 있습니다. \
',

'첫번째, 명확한 도메인 설계를 통해 컴포넌트를 구성해야 합니다. 내부 업무 프로세스 분석을 통해 도메인을 분석하고 설계하여 컴포넌트화 해야 합니다. <br/>\
두번째, 이해관계자의 명확한 식별을 통해서 요구사항을 구체화 해야 합니다. 업무 분장표나 업무 내역을 확인하여 이해 관계자를 명확히 식별하고 그에 따른 요구사항을 구체화하여 도메인 설계시 활용해야 합니다. ,<br/>\
세번째, CVS나 SVN을 통해 형상관리를 수행하여 컴포넌트를 관리하여 생산성 향상을 수행해야 합니다. \
',

'프로그램/시스템 컴포넌트, 컴포넌트 간의 상호관계 구조이며 이들을 설계하기 위한 지침과 원리 \
',

'MVC, C-S 모델 -> 아키텍처 유형 <br/>\
SAAM, ATAM, CBAM, EATAM, ADR, ARID\
',

'ATAM 은 품질속성 만족시키는 판단 뿐만 아니라, 품질속성간 서로 어떻게 상충, 즉 Trade-Off 하며 작용하는지 밝힙니다. <br/>\
이를 기능과 보안 측면에서 설명하자면, 기능의 편의성이 높아질 수록 보안성은 낮아지는 이해상충 관계에 있습니다. <br/>\
이를 실무적으로 적용하는 방안으로는, 기능과 보안에 대해 우선순위화하여 Trade-Off 해야하고, BIA를 통해 장애시 발생되는 비용기반으로 우선순위를 결정합니다.\
',

'개인 독립적으로 결정할 수 있는 부분은 아니며, 조직내에서 브레인스토밍, 인터뷰, 워크샵을 통해 조직내의 합의를 도출해야 합니다.\
',

'우선 확률통계와 기술통계는 모집단과 표본집단의 해석의 방향성에 따라 구분 할 수 있습니다. <br/>\
먼저 확률 통계는 표본집단의 데이터가 모집단에 얼마나 정확하게 예측을 했냐를 확률적, 정량적인 방법으로 계산한 통계 방식을 말하며 <br/>\
기술 통계는 반대로 모집단의 데이터의 성질을 유지한채 표본집단에 기술하기 위한 통계적 방식을 말합니다. <br/>\
확률 통계는 조건부 확률, 베이즈 정리, 이산/연속확률 분포등 이 존재하며, 기술통계는 범주, 수치를 통한 기술 방법이 존재합니다. \
',

'PMO란 발주자 관점에서 프로젝트의 성공과 산출물 품질확보를 위해 프로젝트 지식영역 정체에 걸쳐 프로젝트를 오케스트레이션 하는 조직입니다. <br/>\
장점은 발주자 관리역량이 부족할 경우 발주자와 다양한 수행업체사이에서 프로젝트가 잘 진행될 수 있도록 역할을 하여 프로젝트를 성공시키는데 도움이 된다는 점이며 <br/>\
단점은 PMO가 특정 개인 역량에 의존하는 경향이 많다는 점을 들 수 있습니다. 이로인해 역량이 부족한 인력으로 PMO가 구성될 경우 속칭 프로젝트가 산으로 가는 경우를 경험해봤습니다. <br/>\
제가 PMO 역할을 한다면 기술사로서 고객과 프로젝트 수행조직 사이에 조율을 원활히 하여 프로젝트가 성공될 수 있도록 노력할 것입니다.\
',

'ISP는 정보화사업을 추진하기전에 다양한 대안을 검토하여 최적 대안을 모색하고, 기본적인 아키텍처 방향과 예산을 도출하는 활동이며 <br/>\
개발은 ISP의 결과를 근거로 상세 아키텍처를 설계하고 최종 시스템을 구축하는 과정으로 ISP를 통해 수립된 방향성을 구체화하여 시스템을 구축하는 것이 개발이라고 말씀드릴 수 있겠습니다.\
',

'머신러닝은 AI 알고리즘이 부정확한 예측을 반환하면 엔지니어가 개입하여 조정해야하는 학습 방식이고, <br/>\
딥러닝은 알고리즘이 자체 신경망을 통해 예측의 정확성 여부를 스스로 판단 할 수있는 학습 방식입니다. \
',

'개발자 관점 머신러닝 개발은 정확한 예측 반환을 목적으로 프로그래밍을 해야하는 분야이며 <br/>\
딥러닝 개발은 오류에 대해 스스로 이해 할 수 있도록 자기 주도 학습 목적으로 프로그래밍을 해야하는 분야 입니다.\
',

'프로젝트 지연시 인력을 다수 투입하는 것에는 반대합니다. 신규인력이 프로젝트를 학습하는데 시간이 소요되며, 의사소통 체계가 복잡해져 시간이 더 소요될 수 있기때문에 인력을 많이 투입한다고 해서 프로젝트 일정이 단축된다고 생각하지 않습니다. <br/>\
저 역시 많은 프로젝트에서 지연 상황을 겪었으며, 인력을 다수 투입하기 보다는 사내의 기술 문제 해결 전문조직을 투입해서 문제를 해결하고 인력 투입시 공수기반이 아닌 역량기반으로 Cross Functional한 인력을 선정해서 투입하여 효과를 본 적이 있습니다.\
',

'저는 이해관계자 관리가 가장 중요하다고 생각합니다. 물론 프로젝트의 목표는 일정과 범위관리가 중요하다는 것은 알고 있으나, 고객, 사업자, 인플루언서등 여러 이해관계자가 관련된 대형 프로젝트에서는 이해관계자관리를 잘하면 일정과 범위관리가 연쇄적으로 수월하게 해결되는 경험을 한 적이 있습니다. <br/>\
예를 들어서 고객과 친분있는 특정 업체가 자신들의 제품을 프로젝트에 무조건 반영하고자 한 사례가 있었는데 저희는 고객과 프로젝트 제품 요건에 대해 충분히 논의하여 결국 프로젝트에 적합한 제품을 도입한 적이 있습니다. <br/>\
또한 해당 업체의 제품을 분석하여 더 적절한 타 사업에 기회를 제공함으로써 모두 좋은 관계를 가져갈 수 있었습니다. \
',

'정규화는 테이블 분리를 통해 데이터 중복을 제거하여 DB 이상현상을 방지하기 위해 수행합니다. <br/>\
1차 정규화부터 5차 정규화 까지 수행하며 보통 3정규화까지는 한번에 도출이 됩니다. <br/>\
제가 정규화를 수행했던 경험을 말씀 드려도 되겠습니까? (아니요 괜찮습니다.) \
',

'네 제가 개발하기위해 주로 사용했던 언어는 OCS/EMR 프로그래밍 당시 절차 지향 언어인 ProC 언어를 주로 사용했고, <br/>\
취미로 했었던 1인 게임 개발시에는 객체 지향 언어인 C++ 언어를 주로 사용하였습니다. \
',

'네 파이썬은 대화식 기반 인터프리터 언어로써 강력한 라이브러리를 보유하고 있는 장점으로 인해 다른 프로그래밍 언어에 비해 높은 직관성과 편리한 기능을 장점을 필두로 프로그래머들 사이에서 필수적으로 공부해야할 언어로 알고 있습니다. <br/>\
추가로 최근 파이썬을 이용하여 소규모 RPA를 수행한 경험이 있습니다. \
',

'사물인터넷 기술은 제품에 NW 기능을 탑재하여, 제품의 상태정보를 집 안밖에서 조회, 제어를 수행하는 기술로서 해당 서비스를 운영하기 위해 센서, 네트워크 클라우드 자원을 필요로하는 기술입니다. \
',

'개발, 운영조직의 사일로 현상을 방지하고, TimeToMarket 적시 적용하기 위해 도입하는 개발과 운영이 융합된 환경, 문화이자 체계 입니다. <br/>\
스몰 릴리즈, 배포 자동화를 위해 DevOps 단계별 툴을 활용하는데, 제가 수행한 프로젝트에서는 Git 으로 형상관리, Jenkins로 빌드, Sonarqube로 정적 코드 분석, 이슈관리 Jira, 장애 및 이상징후 알림 Slack을 적용하였습니다. 이상입니다. \
',

'기술사 공부는 약 2년했습니다. 기술사 공부는 방대한 지식량으로 인해 혼자 공부하기 보단, 집단지성에 참여하여 공부하는 것이 더 효율적이라 생각들어, 학원을 등록하여 공부했습니다. <br/>\
집단 지성에 참여하여 제가 강한 부분을 나누고, 반대로 약한 부분을 도움 받아 오늘 면접관님 앞에 서게 된 것 같습니다. 이러한 학습 메커니즘은 훗날 기술사가 되어서도 몸에 베어 기술을 배우고 나누고 삶에 활용하는데 큰 도움이 될 것으로 생각됩니다. \
',

'사내에도 기술사분이 많은데, 전문성을 갖추고 사회공헌에 기여하는 모습을 동경하게 되어 기술사를 취득하고 싶어 공부를 시작하였습니다. 그리고 기술사회 활동을 통해 더 많은 훌륭한 선배 기술사님들과 인적 네트워크를 이어나가고 싶습니다. \
',

'크게 3가지로 분류가 가능합니다. 입력부, 전송부, 처리부로 입력부는 CCTV 또는 센서나 카메라 장비입니다. 전송부에서는 영상정보를 압축하기위한 코덱으로 HW 코덱, SW 코덱으로 정보를 전송합니다. 처리부에서는 DVR, NVR 등 정보의 저장과 활용을 하게 됩니다. \
',

'영상 압축은 크게 무손실, 손실 압축으로 분류가 됩니다. <br/>\
그리고 압축을 위한 원리로는 이전 프레임, 현재 프레임, 다음 프레임을 참조하여 변하지 않는 영상화소를 생락하거나 인접화소간 압축을 통하여 정보를 줄일 수 있게 됩니다. <br/>\
압축을 위한 프로토콜로 H.264, MPEG4등을 사용합니다. \
',

'테스트를 위한 하나의 서식으로 입력값, 출력값, 예상되는 결과값과 환경에 대한 정보등을 기록하는 문서입니다. 테스트를 수행하기 위한 기본으로 테스트 케이스를 모아 테스트 슈트로 만들어지며, 테스트 케이스는 테스트를 진행하며 성공 실패의 판단과 기록을 하는 핵심입니다.\
',

'테스트 오라클은 테스트 수행결과를 판단하기 위해 미리 정의한 참 값을 대입하여 비교하는 방법입니다. <br/>\
유형으로는 참 오라클, 샘플링 오라클, 휴리스틱 오라클 등이 있고, <br/>\
참 오라클은 회귀 테스트, 임베디드SW에 주로사용, 샘플링 오라클은 연구용 SW, 인공지능에 주로사용, 휴리스틱 오라클은 통계 분석하는데 주로 사용하는 방법입니다. <br/>\
테스트 오라클의 구성으로는 요구 명세서, 시스템 제약, 자동화 도구, 테스트 케이스, TestDB, 분석 및 보고, 개선활동 등이 있습니다.\
',

'Microsoft 사의 Visio Program을 사용해봤습니다. UML은 Unified Modeling Language의 약자로 일반적으로 객체지향에서 많이 사용하는 프로세스 및 요구사항 설계 도구입니다. <br/>\
대표적으로 Class Diagram, Activity Diagram, Sequence Diagram 이 존재합니다.\
',

'제가 학습했던 UML 2.2 기준으로는 크게 Structure Diagram과 Behavior Diagram으로 분류되어 각각 7개, 8개씩 존재하여 총 15개의 UML 종류가 존재합니다.\
',

'양자 컴퓨팅 기술로 인해 기존에 수학적으로 안전하다고 여겼던 알고리즘이 Shore, Grover 알고리즘을 통해 불완전 해지며, 이를 극복하기 위해 등장한 알고리즘입니다. <br/>\
종류로는 다변수 기반, 코드 기반, 격자 기반, 아이소제니 기반, 해쉬 기반 등 존재합니다.\
',

'스파크 신경망, 엣지AI, 트랜스포머, 퓨샷러닝, 액티브러닝, 자기지도학습 등이 있습니다. <br/>\
추가로 말씀드리면, 최근 초거대 AI가 이슈가 되고 있습니다. 오픈AI사의 GPT-3가 등장한 이후 국내에서도 2040억개 파라미터로 학습 가능한 네이버클로바가 공식적으로 발표되어 검색엔진 최적화 등에 사용되고 있습니다. \
',

'우선 표준화를 적용해야 합니다. 1차적으로 범정부 데이터 표준을 준수하고, 기관 데이터 표준과 DB 데이터 표준을 순차적으로 적용해야 합니다. <br/>\
현재 범정부 표준 용어가 500여개에 불과하기 때문에 정부차원에서 추가 확보 노력이 필요하며, 현업에서는 기관 표준을 엄격하게 적용하는 노력이 필요합니다. <br/>\
오류진단 전문 SW를 도입하여 금액/수량/날짜/코드 등 오류를 진단해야 합니다. 아울러 구조진단과 업무규칙등도 SW를 통해서 진단하고 오류율을 개선해야 합니다.\
',

'1장 블록체인 기술 개요, 2장 블록체인 암호기술 가이드라인을 중심으로 용어 정의, 약어, 체크리스트, 참고문헌 으로 구성되어 있습니다.\
',

'블록체인 원장은 트랜잭션의 생성 과정에 참여한 모든 개체의 식별자 및 전자서명, 재전송 공격을 방지 하기위한 데이터를 포함한 저장소입니다. <br/>\
주요기술으로는 해시기술을 활용한 머클트리가 존재합니다. \
',

'Safety 표준으로는 산업기계 측면에서 IEC 61508, 자율주행자동차 관련 ISO 26262가 있습니다. <br/>\
Security 표준으로는 정보보안 거버넌스인 ISO 27014, 클라우드 보안 표준 ISO 27017, 27018 이 있습니다. <br/>\
품질 표준으로는 제품 품질 표준과 프로세스 품질 표준으로 나뉘는데, 제품 품질 표준은 ISO 9126, 12119, 14598 등이 있고, 프로세스 품질 표준은 ISO 27017, CMMI, SPICE 등이 있습니다. <br/>\
품질 표준은 기존 여러개로 산재되어 있던 표준들이 최근 통합 표준으로 합쳐지는 추세 입니다. 제품 품질 표준은 ISO 25000 (SQuaRE) 표준으로, 프로세스 품질 표준은 ISO 33000 표준으로 통합되는 추세입니다. \
',

'시스템 위험과 영향도 분석을 정량적으로 실시하여 우선순위를 도출했습니다. 전체 시스템을 실시간 운영하기 위해서는 비용이 많이 들기 때문에 우선순위 기반으로 도출된 핵심업무 위주로 대체시스템을 사전 테스트하여 전환기간동안 가용성과 연속성을 보장하였습니다.\
',

'Parallel 방식은 전환 사이트 양단에 동일 장비를 구축하는 Active / Active 방식입니다. 가용성 서비스 연속성을 보장할 수 있지만 ROI 측면에서 비용이 많이 듭니다. <br/>\
Isntance 방식은 한 쪽을 테스트한 후 일시에 전환하는 Active / Stand by 방식입니다. 저희는 블루그린, 카나리 방식의 전환기술을 적용 서비스 연속성을 유지하며 전환을 추진하고자 노력하였습니다.\
',

'CMMI와 SP 인증의 유사점은 SW 개발 조직의 SW 개발 프로세스 역량 및 성숙도를 측정하는 인증 모델 표준 입니다. <br/>\
차이점은 CMMI는 인증 등급으로 연속적 모델 6레벨, 단계적 모델 5레벨로 구성되어 있으며 SP 인증은 3레벨로 구성되어 있습니다. <br/>\
CMMI는 해외 인증심사이고, SP 인증은 국내 인증 심사 입니다. CMMI와 SP인증의 각 등급은 매핑 되어있습니다.\
',

'인공지능 ODD는 2차원 Image, 영상에 등장하는 특정 객체를 인식하는 기술입니다. <br/>\
ODD 관련 인공지능 알고리즘으로는 Convolution Layer와 Pooling Layer로 구성된 CNN, Region 기반으로 Object Detction 을 수행하는 R-CNN, 이미지를 분할하지 않고 전체 Level 기반에서 Feature Map을 추출하는 Fast R-CNN, Fast R-CNN과 SPP-net의 장점을 결합한 2-Stage 기반의 Faster R-CNN, 마지막으로 Reginoal Proposal 과 Classification 을 1-Stage로 동시에 수행하는 Yolo가 있습니다. <br/>\
적용 분야에서 요구하는 속도와 정확도에 따라 적합한 알고리즘을 선택합니다. \
',

'정보시스템의 품질 보증을 위하여 제3자 관점에서 수행하는 종합적인 감사활동입니다. <br/>\
전자정부법 57조에 의거하며, 단계로써는 예비조사, 현장감리, 시정조치 확인이 있으며 각 단계를 수행하면 감리보고서와 시정조치 확인 보고서를 작성합니다.\
',

'3단계 감리는 프로젝트 요구사항 정의, 분석설계, 종료 단계에서 수행하는 감리이고, 2단계 감리는 요구사항 정의를 분석 설계 단계에서 동시에 수행하는 절차가 함축된 감리를 말합니다. <br/>\
2단계 감리를 수행할 수 있는 조건은 사업비가 20억 이하이거나 개발 기간이 6개월 미만인 정보시스템 구축 사업에 대해서 가능합니다.\
',

'감리를 초반에 수행할때의 장점은 감리 수행을 통해 결함을 초반에 발견할 수 있는 장점이 있고, 단점은 프로젝트 초반에 집중해야할 요구사항 정의, 분석 설계등의 정보시스템 개발에 쏟아야 할 에포트를 감리준비에 집중해야 하는 단점이 있습니다. <br/>\
감리를 후반에 수행할때의 장점은 산출물이 갖추어진 상태에서 감리를 수행하므로 감리 준비에 많은 에포트를 쏟지 않는 장점이 있고, 단점은 결함을 후반에 발견하기 때문에 수정시 비용과 시간이 많이 발생하는 단점이 있습니다. \
',

'PMO는 전자정부법 64조에 의해 발주자 관점에서 프로젝트 통합관리, 이슈관리, 기업의 목표 달성을 위한 전략적인 관리체계 유지하는 조직입니다. <br/>\
PMO는 Weather, Coach, Control Tower(이슈, 변경관리까지 통제) 가 있습니다. \
',

'CMMI는 Acq/Dev/Serv 관점으로 나눌 수 있고 통상 Development로 보기 때문에 개발자 관점에서 CMMI는 소프트웨어 능력 및 성숙도 측정 및 지속적 개선 모델입니다. <br/>\
Stage 5단계로 구분되며 1단계 초기화, 2단계 관리단계의 PP, PMC, MA, CM, PPQA, REQM 프로세스가 있으며 3단계는 정의 단계로 RD, RSKM, VER< VAL로 심화 세분되며 4단계는 정량적인 프로세스 2개와 5단계는 최적화 2개가 있습니다. <br/>\
이중 2~3단계는 사전 품질관리 활동이며 4~5단계는 정량화, 최적화는 사후 품질관리 활동 프로세스입니다.\
',

'기존의 데이터 저장 방식인 중앙집중 방식이 아닌, P2P 기반의 개별 블록 기반으로 데이터를 저장하는 분산 저장 시스템 핵심 기술입니다. <br/>\
세대 별로 1세대, 2세대, 3세대로 나뉘며 1세대는 단순 통화/화폐로써의 역할을 수행하고, 2세대는 스마트 계약 플랫폼 제공, 3세대는 의사결정 및 업무 영역 확대가 그 특징입니다. <br/>\
이외에도 참여자와 개설자의 참여범위에 따라 Public Block Chain과 Private Block Chain으로 구별되며, <br/>\
분산 환경에서 데이터 일관성 유지를 위해 합의 알고리즘이 사용됩니다.\
',

'오픈소스는 라이선스 종류에 따라 허용적 라이선스, 약한 카피레프트 라이선스, 강한 카피레프트 라이선스로 분류 됩니다. <br/>\
허용적 라이선스는 수정,배포,전환이 자유로운 라이선스로, Apache, BSD 계열 라이선스가 이에 해당됩니다. <br/>\
약한 카피레프트 라이선스는 의무 사항내에서 전환이 가능한 라이선스로 EPL, LGPL 계열 라이선스가 이에 해당됩니다. <br/>\
끝으로 강한 카피레프트 라이선스는 제공된 형태 그대로 사용해야하는 라이선스이고, GPL 계열이 이에 해당됩니다. <br/>\
MIT, Apache, BSD 계열의 라이선스 사용율은 증가 추세이며, 비교적 자유도가 떨어지는 GPL 및 LGPL 라이선스 사용률은 감소하고 있는 추세입니다.\
',

'모델링 관점에서의 DB 설계 튜닝, 환경 관점에서의 DBMS 튜닝, 응용프로그램 관점에서 SQL 튜닝이 존재합니다. \
DB 설계 튜닝 대표 기법으로는 반 정규화, 분산 파일 배치가 있고 <br/>\
DBMS 튜닝 대표 기법으로는 Buffer, Cache 크기를 늘리는 방안이 있습니다. <br/>\
마지막으로 SQL 튜닝 대표 기법으로는 Hash, Join, Hint 등을 사용하는 방안이 있습니다. <br/>\
이외 시스템 데이터베이스 튜닝 기법으로는 CPU, Memory, Storage, NW 튜닝 기법이 존재합니다.\
',

'도시의 교통, 물류, 통합등을 위하여 ICT 기술을 접목한 지능형 도시 <br/>\
해외 사례로는 EU의 Euro 2020 Stragety, 미국의 Smart City Initiative 정책이 있고, 국내 사례로는 스마트 챌린지 사업을 말씀 드릴 수 있습니다. <br/>\
국내 스마트 시티 실패 요인은 스마트 시티 요소 기술에 대한 표준화 미흡과 보안성 우려, 민관정 협력 부족이 원인입니다.\
',

'설계감리에서는 과업대비표, 요구사항 추적표 등을 중점적으로 검사합니다. <br/>\
설계감리는 요구정의 이후 설계단계 전후로 투입되는 시점이므로 사용자 요구사항이 요구사항 정의서에 모두 반영되어 있는지와 향후 종료단계 감리에서 적합, 부적합 등을 판단할 수 있는지 확인하는 절차입니다. \
',

'상주감리는 전자정부법 57조에 의거하여 제 3자의 독립적인 위치에서 사업의 위험관리, 기술자문, 일정관리 등을 수행하며 <br/>\
PMO는 Project Management Office의 약자로써 전자정부법 64조에 의거하여 대기업의 공공 SW 참여 제한으로 인하여 중소기업의 사업관리 능력을 보완하고, 발주기관의 사업관리 통제를 위임받아 수행하는 조직입니다. <br/>\
특히 PMO는 발주사의 포트폴리오까지 모두 고려하여 사업관리를 수행하므로 발주사의 관점에서 관리감독 업무를 수행합니다.\
',

'Public 블록체인이 더 유리하다고 생각합니다. <br/>\
Private 블록체인은 Public 블록체인에 비해 상대적으로 적은 노드에 의해 합의가 진행되기 때문에 일부 중앙화로 인해 보안성이 낮아질 가능성이 있습니다.\
때문에 Private 블록체인은 참여자 관리에 심혈을 기울여 이를 극복해야하는 과제가 주어집니다.\
',

'블록체인은 탈중앙화라는 특징때문에 기존 중개기관 역할의 순차적 대체 측면에서 기술 발전, 활용의 지속성을 말씀 드릴 수 있습니다. <br/>\
또한 한간에선 블록체인의 발전은 암호화폐에 대한 시장의 과열된 분위기가 식으며 블록체인에 겨울이 왔다는 시각도 있으나, 이는 Public 블록체인에 국한된 시각이며 Private 블록체인을 중심으로 산업 적용을 노력하는 다양한 시도를 보아 지속적 발전이 기대된다. <br/>\
최근 Private 블록체인 주목 사례는 COVID 19 백신 인증서, 메타버스 내부 경제 구상에 사용될 NFT, 한국 은행에서 지속적으로 실험중인 CBDC를 들 수 있습니다.\
',

'개발 완료 후 인도된 정보시스템에 대해 유지보수를 제외한 운영기획 및 관리, 모니터링, 테스트, 사용자 지원을 포함한 정보시스템의 정상적 운영에 필요한 제반 활동에 대한 감리입니다. <br/>\
점검 분야는 릴리즈 및 배포, 테스트 지원, 장애 등이 있습니다.\
',

'기술사 공부 계기는 좀처럼 탄력을 받지 못하는 의료분야 ICT 기술 접목을 IT 정보관리 분야에 대한 고도전문지식을 겸비하여 국가 의료 ICT 디지털 전환에 이바지하고 싶어 학습을 시작하게 됐습니다. <br/>\
학습방법은 독학과 학원등록을 고민하던 중 기술사 공부와 향후 기술사가 되고 나서의 핵심은 집단지성이란 것을 느끼고, 학원을 등록하여 같은 뜻을 가진 멘티들과 집단지성을 바탕으로 기출 문제 분석, 토픽 토론 등 학습 활동 중심으로 하였습니다. <br/>\
기술사가 되고 나서도 기술사로서의 가치제공을 위해 많은 사람들과 좋은 관계를 맺어 ICT 산업의 국가적 발전을 위해 이바지하고 싶습니다.\
',

'제가 주로 활동하고 있는 의료 IT 업계는 법/제도 문제와 IT 기술 융합 대한 막연한 두려움으로 인해 산업 발전이 더딘 분야입니다. <br/>\
이러한 상황속에서 각 분야의 선배 기술사님들께서 고도의 전문지식과 실무경험에 입각하여 응용하시는 모습을보고 이러한 모습을 본받고자 정보관리 기술사에 지원하게 됐습니다. <br/>\
기술사는 자신의 분야에서 고도의 전문지식과 실무경험에 입각하여 응용 및 국민의 생명과 안전을 보호할 수 있는 마음가짐을 가진 사람이 되어야 한다고 생각합니다.\
',

];