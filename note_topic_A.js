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

'PMO란 발주자 관점에서 프로젝트의 성공과 산출물 품질확보를 위해 프로젝트 지식영역 전체에 걸쳐 프로젝트를 오케스트레이션 하는 조직입니다. <br/>\
장점은 발주자 관리역량이 부족할 경우 발주자와 수행업체사이 프로젝트가 잘 진행 될 수 있도록 성공시키는데 큰 역할을 합니다. <br/>\
단점은 PMO가 특정 개인 역량에 의존하는 경향이 많다는 점을 들 수 있습니다. 이로인해 역량이 부족한 인력으로 PMO가 구성될 경우 속칭 프로젝트가 산으로 가는 경우를 경험해봤습니다. <br/>\
제가 PMO 역할을 한다면 기술사로서 고객과 프로젝트 수행조직 사이에 조율을 원활히 하여 프로젝트가 성공될 수 있도록 노력할 것입니다.\
',

'ISP는 정보화사업을 추진하기전에 다양한 대안을 검토하여 최적 대안을 모색하고, 기본적인 아키텍처 방향과 예산을 도출하는 활동이며 <br/>\
개발은 ISP의 결과를 근거로 상세 아키텍처를 설계하고 최종 시스템을 구축하는 과정으로 ISP를 통해 수립된 방향성을 구체화하여 시스템을 구축하는 것이 개발이라고 말씀드릴 수 있겠습니다.\
',

'머신러닝은 AI 알고리즘이 부정확한 예측을 반환하면 엔지니어가 개입하여 조정해야하는 학습 방식이고, <br/>\
딥러닝은 알고리즘이 자체 신경망을 통해 예측의 정확성 여부를 스스로 판단 할 수있는 학습 방식입니다. <br/>\
머신러닝의 대표적 알고리즘은 지도, 비지도, 강화 학습으로 분류되고, 딥러닝 알고리즘은 인공신경망 활용 방식에 따라 CNN, RNN, LSTM 등이 존재합니다.\
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

'관리적 측면으로는 자원 보유여부 Region 영역 차이점과 책임 모델 차이점이 있고, 기술적 측면으로는 보안 커버리지 차이점이 있습니다. <br/>\
상세히 설명 드리자면, 일반 시스템은 시스템 주체와 관리대상이 동일한 Region 에 있는 반면, Cloud 시스템은 구축 종류에 따라 상이하여 관리 Point 가 다릅니다. 일반 시스템은 단일 책임 모델이고, 클라우드 시스템은 공유 책임 모델입니다. <br/>\
보안 커버리지측면에선 일반 시스템은 Memory, Slack 영역, Image Dump 등 모든 영역의 보안 커버리지 대상이 되지만, 클라우드 보안에선 Memory 영역만 커버리지에 해당됩니다. <br/>\
대표적인 클라우드 보안 모델은 CWPP, CSPM, CASB, SECaaS 등이 있습니다. \
',

'장점으로 낮은진입비용, 빠르고 유연한 개발, 호환성, 신뢰성과 안정성이 존재하고, 단점으로는 빈약한 문서, 불확실한 로드맵, 지적 재산권 문제가 존재합니다. <br/>\
향후 발전 방향은 4차 산업에 Service, Platform, Infra 측면에 기여하는 방향으로 발전할 것이며 Service 측면으로는 현대화, 디지털 전환, Bigdata, Cloud, AI 활용 촉진하는 방향으로 발전될 전망입니다.\
',

'품질관리란 프로젝트 환경안에서 조직의 품질관리 시스템을 구현하기 위하여 정책과 절차를 활용하고, 상황에 따라 수행조직을 대신하여 실행되는 지속적인 프로세스 개선 활동을 말합니다. <br/>\
품질관리의 문제점은 지나치게 문서화에 집중되어 있는 현행 프로세스에 문제가 있다고 생각합니다. 이를 해결하기 위해선 문서화를 최소화 하여 개발 및 테스트에 집중할 수 있는 환경을 만들어 주는 것이 PM 으로써 프로젝트 품질을 높이는 해결방안이라고 생각합니다.\
',

'블록체인은 기존 중앙집중식 저장방식의 보안적 한계를 탈피하고자 엔드포인트를 각 참여자로 분산시킨 탈 중앙화 P2P 분산원장 구현 기술을 의미합니다. <br/>\
이를 업무에 적용하기 위해선 업무의 특징을 파악하여 블록체인의 유형인 Public, Private 블록체인 구현 여부를 결정하고 참여자 범위를 정한 후 기존의 중앙 집중 방식을 탈 중앙화 하는데 활용할 수 있습니다. <br/>\
최근 보건 의료 관련 블록체인 활용 사례는 코로나 백신 증명서인 Coov 시스템이 블록체인으로 구현되었습니다.\
',

'정보관리 기술사가 된다면 IT 기술을 통한 사회발전을 위해 국가적 측면과 사회적 측면에서 장기적으로 활동, 기여하고 싶습니다. <br/>\
먼저 국가적 측면입니다. 의료 IT 분야는 제도/제약 문제와 IT 기술 융합에 대한 불안감으로 인해 산업 발전에 어려움을 겪고 있습니다. 이를 장기적으로 해결하기 위해 현재 정부에서 진행중인 바이오 헬스 산업 혁신전략 과 같은 국가 정책의 기술자문 위원으로 장기적으로 참여하여 보건 의로 디지털 전환에 기여하겠습니다. <br/>\
다음으로 사회적 측면입니다. 기술사로서의 가치제공과 스마트 헬스케어 보급화를 위해 해당 분야 BoB 멘토진으로 참여하여 스마트 헬스케어의 보급화를 앞당기도록 하겠습니다. <br/>\
끝으로 제가 정보관리 기술사가 된다면, 지도,개발,감리,운영 등 다양한 활동을 통해 국가 의로 ICT 기술의 발전과 국민의 생명과 안전을 보호하는 선배 기술사님들의 발자취를 따라가도록 노력하겠습니다. <br/>\
감사합니다. \
',

'공공 S/W 대기업 참여제한 제도는 중소기업 육성을 위한 바람직한 제도라고 생각합니다. <br/>\
하지만 이면으론 대기업이 규모가 크다는 이유만으로 참여제한의 역차별이 발생함으로써 국내 레퍼런스를 쌓지 못하고 해외에서 사업 경쟁력이 떨어지는 부분도 존재하는 이면 또한 존재합니다.\
',

'유찰로 인한 재공고 사업, 국가 안보 관련 사업, 공항,철도등 사회기반 시설 사업, 민간투자형 SW 사업, 과기정통부 장관 고시 공공사업이 있습니다. <br/>\
추가적으로 최근 개인정보, 위치정보, 사생활 영역 추가, 과기정통부 장관 권한을 국가 기관장에 위임하는 SW 진흥법 48조 개정안이 발제된 적이 있습니다.\
',

'Validation 은 사용자 관점에서 시스템 검증활동을 의미하고, Verification 은 개발자 관점에서의 시스템 검증활동을 의미합니다. <br/>\
V 모델을 사례로 들자면, 인수,회귀 테스트는 Validation 성향이 강한 테스트이고, 단위,통합,시스템 테스트는 Verification 성향이 강한 테스트입니다. \
',

'메타버스의 장점은 실감형 컨텐츠를 즐기는 것에 그치지 않고 새로운 또하나의 세계를 창조했다는 점을 장점으로 꼽을수 있습니다. <br/>\
이러한 장점이외에 존재하는 문제점은 가상 자산 소유권 문제, Privacy 문제와 아바타 의한 성희롱 같은 윤리적인 문제가 존재합니다. <br/>\
이를 해결하기 위해선 가상 자산 소유권 문제를 해결하기 위한 NFT, Block Chain 기술이 존재하며, Privacy 침해 문제를 해결하기 위한 메타버스 보안 기술, 성희롱 같은 윤리적인 문제를 해결하기 위한 메타버스 실명제 등이 존재합니다.\
',

'전자화폐 발행 및 관리 업무에 대한 모니터링 기술이 필요하다고 생각합니다. <br/>\
머지포인트 사태의 핵심은 해당 기업이 전자금융거래법에 의거해 신고 하여 운영이 되어야 하는 업체가 이른바 무허가 영업을 지속했기 때문에 벌어진 사태로 요약할 수 있습니다. <br/>\
이러한 법적 음영지대를 기술적으로 해소하기 위해 자발적 신고에 의존하는 것이 아닌, 기술적 모니터링 체계를 갖추어야 한다고 생각합니다.\
',

'특정 개발자의 프로젝트 이해도 부족으로 인해 일정 지연 현상에 대한 위험이 있었으며 이를 해결하기 위해 어려운 상황임을 앎에도 불구하고 프로젝트를 성공적으로 수행하기 위해 본사 CCB에 참석하여 프로젝트 팀원을 충원 받은 경험이 있습니다. <br/>\
PM으로써 인원을 충원 받기 위해 요청하는 것은 다소 부담되는 일이었지만 이대로 계속 프로젝트를 수행했을시 팀원들이 밤낮없이 수고함에도 불구하고 프로젝트가 결과적으로 실패로 끝날 것이 불보듯 뻔했기에, 어려운 결정을 했습니다. 대부분의 프로젝트가 최상의 조건에서 진행되지는 않기 때문에 PM의 역할은 프로젝트의 진행 현황을 진단하고 필요한 요소들을 적시에 공급하는 통찰력을 가져야 한다고 생각합니다.\
',

'마이데이터는 정보주체가 개인정보 결정권을 가지고 스스로 개인정보를 수집하거나 제3자에게 제공할 수 있는 데이터를 말합니다. <br/>\
특징으로는 권한, 제공, 활용 측면으로 말씀드릴 수 있습니다. 권한은 개인이 데이터를 관리할 수 있는 권한을 의미하며, 제공은 표준화된 API를 통해 Machine Readable 한 개방형 형식을 이용합니다. 끝으로 활용은 개인이 데이터 종속없이 서비스 제공자를 변경함을 의미합니다. <br/>\
마이데이터 활용분야는 우리나라에선 주로 금융권 중심으로 핀테크 기업의 서비스 제공 형태로 활용되며, 제가 속한 의료업계에서는 마이데이터를 통해 병원간 환자 데이터 전송, 병력 통한 미래 질병 예측 등으로 활용됩니다. 이를 이루기위해 기반이 되는 사업이 바로 제가 참여했던 진료정보 공유시스템 구축, 암 빅데이터 플랫폼 구축 사업입니다.\
',

'쿠버네티스는 컨테이너화된 애플리케이션을 자동으로 배포, 스케일링, 로드밸런싱 및 관리해주는 오픈소스 오케스트레이션 플랫폼을 말합니다. <br/>\
구성요소로는 Master Node와 Work Node로 구성되며 Master Node 는 노드관리, 스케줄링, 활동 조율등을 담당하며, Work Node는 쿠버네트 클러스터 내 워커 머신으로써 동작하는 물리적인 컴퓨팅 시스템을 관리합니다. <br/>\
다른 오케스트레이션 툴로는 Doker Swarm, MS 사의 Mesos 등이 있습니다.\
',

'경영은 행정학을 기업에 맞게 변화시킨 학문이고, 경제학은 재화 가치에 대해 연구하는 학문입니다. \
',

'효율성은 프로젝트 성공에 대한 정성적인 지표이고, 효과성은 프로젝트 성공에 대한 정량적인 지표입니다. <br/>\
자세히 말씀드리자면, 효율성은 성공을 전제로 한 프로젝트에 자원의 사용 정도를 표현하며, 효과성은 프로젝트 성공에 대한 성공 / 실패에 대한 영향으로 표현합니다. \
',

'Safety 는 계획되지 않은 침입에 대한 대비이며, Security 는 계획된 침입에 대한 대비를 말합니다. <br/>\
Safety의 대표적인 표준은 산업 안전 표준인 IEC 61508 이있고, Security 의 대표적인 표준은 클라우드 보안 표준인 ISO 27017 이 있습니다.\
',

'Privacy 는 개인에 대해 민감정보를 말하고, 개인정보는 개인 식별 가능한 정보를 말합니다. <br/>\
Privacy 는 다소 주관적인 요소의 기준이 존재하지만, 개인정보는 개인 식별이라는 비교적 객관적인 기준을 갖고 있습니다. <br/>\
둘간의 관계를 정의 한다면 개인정보가 Privacy 보다 더 큰 개념이라고 정리할 수 있습니다.\
',

'통계는 데이터에 대한 처리를 연구하는 학문이고, 데이터 마이닝은 대용량의 데이터로부터 의미를 추출하는 학문입니다. <br/>\
통계에서는 주로 정형 데이터를 다루고, 데이터 마이닝에서는 이를 확장한 정형 데이터 이외에 비정형, 반정형 데이터까지 취급합니다. <br/>\
또한 통계에서는 주로 데이터의 인과관계를 발견하는 한편, 데이터 마이닝에선 예측 모델을 만들어 미래의 데이터를 예측 합니다. <br/>\
제가 수행했던 빅 데이터 플랫폼 프로젝트에선 데이터 마이닝을 활용한 환자의 미래 건강을 예측하였습니다.\
',

'정형, 반정형, 비정형 데이터를 나누는 기준은 스키마의 유무와 연산 유무로 나눌 수 있습니다. <br/>\
정형 데이터는 스키마가 존재하고, 연산이 가능한 데이터 <br/>\
반정형 데이터는 스키마가 존재하나, 연산이 불가능한 데이터 <br/>\
비정형 데이터는 스키마가 존재하지 않고, 연산 또한 불가능한 데이터라 말씀 드릴 수 있습니다. <br/>\
각각의 의료 데이터 사례로는 정형 데이터는 환자 상병명, 반정형 데이터는 HL7 Protocol 통신 기초기술인 XML,JSON, 비정형 데이터는 DICOM, 수술촬영 Image 등이 있습니다.\
',

'Quality 는 기본 특성 및 기능들이 요구사항을 충실이 이행하는 수준이고 <br/>\
Grade는 기능적으로 동일한 용도로 사용되지만 차등 항목 구별 위해 부여된 순위 입니다. <br/>\
프로젝트 관리 측면에서 Quality와 Grade에 대한 해석은 낮은 Quality 는 문제거리가 되지만, 낮은 Grade는 요구사항 수준에 따라 문제거리가 됩니다.<br/>\
현실적인 적정 Quality와 Grade를 정하는 것이 프로젝트 성공에 중요한 요인이며, 고객과의 의사소통이 잘 되지 않을때 종종 Gold Platting 현상이 발생하기도 합니다.\
',

'이슈와 위험은 프로젝트에 영향을 미치는 문제의 관점은 같으나, 시점 측면에서 차이점이 존재합니다. <br/>\
이슈는 현재 프로젝트에 장애 혹은 도움이 되는 영향을 미치는 문제를 말하며 <br/>\
위험은 원치 않는 결과를 초래하게 될 발생 가능한 미래사건을 말합니다. <br/>\
그러므로 이슈는 당장 해결 및 분석 해야할 대상이며, 위험은 통제 대상입니다. 추가로 위험관리는 긍정적 대상과 부정적 대상의 관리로 나뉩니다.\
',

'형상관리, 변경관리, 버전관리의 관계를 정리하자면, 형상관리가 변경관리와 버전관리를 포함합니다. <br/>\
형상관리는 소스코드 뿐 아니라 개발환경, 빌드 구조 등 전반적인 환경에 대한 관리 체계를 말합니다. <br/>\
변경관리는 소스코드 변경사항에 대한 관리를 의미하며, <br/>\
끝으로 버전관리는 변경사항을 버전이란 개념을 통해 관리하는 것을 의미합니다. <br/>\
변경관리는 주로 텍스트 형태로 변경점을 공지하며, 버전관리는 보통 숫자와 소수점을 이용해 나타냅니다. <br/>\
대표적인 형상관리 상용 툴로는 SVN, Git이 있습니다.\
',

'인시던트 관리는 비즈니스 관점, 문제 관리는 서비스 관점의 문제 해결 활동입니다. <br/>\
인시던트 관리는 SLA 위반하지 않도록 비즈니스 영향 최소 활동이고 <br/>\
문제 관리는 그 근본 원인을 해결함과 동시에 재발방지 차원의 IT 서비스 가용성 높이는 활동입니다. \
',

'컴파일러는 전체 소스코드를 보고 명령어를 수집하고 재구성하는 반면 <br/>\
인터프리터는 소스코드의 각 행을 연속적으로 분석하며 실행합니다. <br/>\
컴파일러 프로그래밍 언어는 C, C++ 이며, 인터프리터 프로그래밍 언어는 Python, JavaScript 등이 있습니다. <br/>\
최근 인공지능 관련 프로그래밍 언어는 막강한 라이브러리와 낮은 진입 장벽과 유연성, 플랫폼 독립적인 인터프리터 언어가 주목받고 있는 추세입니다. \
',

'상위 레벨 테스트는 사용자 관점 테스트이고, 하위 레벨 테스트는 개발자 관점 테스트 입니다. <br/>\
상위 레벨 테스트로는 인수, 사용자 테스트가 있고, 하위 레벨 테스트로는 단위, 통합 테스트가 있습니다. \
',

'아키텍처는 소프트웨어 주요 설계 구조이고 <br/>\
프레임 워크는 다른 소프트웨어 프로젝트가 개발될 수 있는 뼈대 구조입니다. <br/>\
플랫폼은 소프트웨어의 실행환경이고 <br/>\
라이브러리는 미리 특정 기능에 대해 구현된 API를 모은 집합이라 할 수 있습니다. <br/>\
주요 아키텍처는 MVC, 프레임워크는 Spring Framework, 플랫폼은 Java 등이 있습니다. \
',

'Measure 는 단일지표이고, Matric 은 복합 지표입니다. <br/>\
추가적으로 Measure 는 측정하는 값 자체에 중심을 두고, Metric 은 측정 항목에 중심을 둡니다.\
',

'인터넷은 1개 이상의 네트워크가 연결되어 있는 상태를 말하며, 웹은 1개 이상의 사이트가 연결되어있는 인터넷 서비스 상태를 말합니다.\
',

'오버라이딩은 하위 클래스에서 상위 클래스 메소드를 재정의 함을 말하고, 오버로딩은 동일 이름의 메소드를 Argument 형태를 변경하여 여러개로 정의 하는 기법을 의미합니다. <br/>\
오버라이딩의 특징은 확장성과 유연성이고, 오버로딩의 특징은 개발 편의성 입니다. \
',

'추상화는 객체에서 공통된 속성과 행위를 추출하여 본질적 개발에 집중하는 개념이고 상속이나 인터페이스를 통해 구현합니다. <br/>\
정보은닉은 데이터를 외부로부터 보호하는 것을 의미합니다. <br/>\
객체지향 프로그래밍에서 정보은닉을 하는 방법을 캡슐화라고 하며 클래스 내/외부 접근제어를 접근 한정자를 통해 정의하는 기법을 말합니다. \
',

'응집도는 단일 모듈 내의 기능 집적도를 말하며, 결합도는 모듈간의 관련성을 말합니다. <br/>\
응집도는 우연,논리,시점,절차 등의 단계가 존제하며, 결합도는 자료형,스탬프,제어,외부연계 등의 단계가 존재합니다.\
',

'오류는 결함의 원인이 되는것으로 일반적으로 소프트웨어 개발자, 분석가 등 사람에 의한 발생한 실수를 의미하며 <br/>\
결함은 오류로 인한 소프트웨어 제품에 발생한 현상을 의미합니다. <br/>\
끝으로 장애는 제때 해결되지 않은 결함의 누적으로 인해 서비스 운영에 영향을 미치는 상태를 말합니다.\
',

'UI 는 사용자가 제품/서비스와 상호작용할 수 있는 매개체이고 <br/>\
UX 는 사용자가 제품/서비스를 직간접적으로 이용하면서 느끼는 종합적인 만족을 의미합니다. <br/>\
위 둘의 가장큰 차이점은 디자인 원리인데, UI 디자인 원리는 신속성, 편의성이 주를 이루며, UX 디자인의 원리는 사용자의 경험 이해성, 충족성을 만족할만한 UI를 디자인 하는데 중점을 둡니다.\
',

'마스터 데이터는 기준 데이터로써 일관성 유지가 목적이고, 메타 데이터는 데이터를 위한 데이터로써 대표적인 예로 스키마를 들 수 있습니다.\
',

'저작권은 학문, 예술영역에 대한 창작물에 대한 지식 재산권이고,  <br/>\
산업 재사권은 산업분야의 창작물에 대한 지식 재산권입니다. <br/>\
끝으로 신지식 재산권은 반도체 배치설계나 SW 개발 등의 전통 범주에 속하지 않는 것들에 대한 지식 재산권입니다.\
',

'관리적 관점과 기술적 관점으로 나눌 수 있습니다. <br/>\
우선 관리적 관점으로는 의료기관 개인정보 자율점검에 의존으로 인한 문제점을 제시 할 수 있습니다. <br/>\
다음으로 기술적 관점으로는 기존 시스템 대비 4차 산업혁명이후 증가하고 있는 의료 End Point 증가에 따른 보안 취약점 노출을 말씀 드릴 수 있습니다. <br/>\
이에 대한 해결방안으로 관리적 관점으로는 ISMS 등 보안인증 항목에 대한 권고사항이 아닌 필수사항으로 변경하여 이를 해결할 수 있고, <br/>\
기술적 관점으로는 IoT 보안에 대한 항목을 의료기기에 맞춰 적용하는 방안이 존재합니다. \
',

'DRS 구축시 고려사항은 비즈니스 측면과 시스템 측면으로 말씀 드릴 수 있습니다. <br/>\
비즈니스 측면으로는 비용성, 가치성, 안정성을 고려하여야 하고, 시스템 측면으로는 운용성, 복구성, 확장성을 고려하여야 합니다. <br/>\
DRS 구축 절차는 업무 영향 분석, 복구 전략 수립, 복구 계획 수립, 모의 훈련 단계로 구축할 수 있습니다.\
',

'물리적 망분리의 논점에 대한 해결방안은 제도적 측면과 기술적 측면으로 나누어 설명드릴 수 있습니다. <br/>\
먼저 제도적 측면입니다. 중요도에 따른 차등적 물리적 망분리를 제도화 함으로써 소중한 정보를 보호하고, 병원측에선 기술도입 비용을 최소화 할 수 있도록 제도를 정비하는 방법이 있습니다. <br/>\
이를 기술적 측면으로 구체적으로 확장시키면, 데이터 단위 망분리 체계를 도입하는 기술적 방안을 통해 해당 이슈에 대한 해결방안이 될 수 있습니다. \
',

'첫번째 개념비교 입니다. Monolithic 아키텍처는 하나의 애플리케이션 내에 모든 서비스 내포구조이고, MSA는 비즈니스 로직마다 서비스 분리 구조 입니다. <br/>\
두번째 특징비교 입니다. Monolithic 아키텍처는 유지보수성,확장성이 상대적으로 낮고, 특정 언어에 의존되는 특징이 존재하나, MSA는 유지보수성, 확장성이 상대적으로 높고 다양한 언어를 한 애플리케이션 내에 동시 사용할 수 있습니다.\
',

'API Gateway, Container, API Server 입니다. <br/>\
API Gateway는 LoadBalancing, Container는 환경,인프라 가상화 단위, API Server 는 서비스의 개별 배포/관리를 담당합니다.\
',

'CNN 은 전체 Image에서 FeatureMap을 추출하는 기술이고, R-CNN 은 Region 내에서 FeatureMap을 추출하는 기술입니다. <br/>\
CNN의 속도 한계를 위해 R-CNN 방법이 등장하였으며, 위와 같은 2-Stage 기술은 Fast R-CNN, Faster R-CNN으로 발전하게 됩니다.\
',

'규제 샌드박스는 신기술, 신서비스의 시장 진출 위한 시장 진출 기회를 제공하거나 실증 테스트 허용 제도 입니다.\
',

'FTP 보안의 종류는 계층에 따라 FTPS와 SFTP가 존재합니다. <br/>\
FTPS 는 OSI 7Layer 의 4계층인 전송계층의 SSL을 활용한 보안이고, <br/>\
SFTP 는 OSI 7Layer 의 5계층인 세션계층인 SSH를 활용한 보안입니다.\
',

'개인정보 비식별조치 가이드라인은 개인정보 유출 최소화를 위한 가이드라인입니다. <br/>\
제시된 비식별 조치 방법으론 가명처리, 총계처리, 삭제, 범주화, 데이터 마스킹 기법이 존재합니다.\
',

'OLTP, OLAP 의 차이점에 대해 비교설명 하겠습니다. <br/>\
첫째 데이터 구조 측면입니다. OLTP 는 비교적 복잡하고, OLAP 는 비교적 단순합니다. <br/>\
둘째 데이터 갱신 측면입니다. OLTP 는 동적 순간적으로 갱신하고, OLAP 는 정적 주기적으로 갱신합니다. <br/>\
셋째 데이터 특성 측면입니다. OLTP 는 트랜잭션 중심이고, OLAP 는 주제 중심입니다.\
',

'정보시스템 감리는 전자정부법 57조에 의거하여 제3자 관점에서의 정보시스템이 요구사항을 잘 수용하고 있는지 점검하는 제도입니다.\
진료정보 공유 시스템 프로젝트 당시 3단계 감리에 대응한 경력이 있습니다.\
',

'첫째, 법적 근거 비교입니다. 정보시스템 감리는 전자정부법 57조, PMO는 전자정부법 64조에 의거한 활동입니다. <br/>\
둘째, 관점 비교입니다. 정보시스템 감리는 제3자 관점에서의 활동, PMO는 개발사 관점에서의 활동입니다. <br/>\
셋째, 목적 비교입니다. 정보시스템 감리는 지도의 목적, PMO는 프로젝트 성공 견인의 목적을 두고 활동합니다.\
',

'정보관리 기술사로써 PM의 역할은 고도의 전문지식과 실무경험에 입각하여 이를 실무에 적용하기 위한 프로젝트 관리 지식을 바탕으로 프로젝트 성공을 견인하는 역할을 지니고 있습니다.\
',

'일정 지연의 원인이 내부적이냐, 외부적이냐에 따라 대응이 달라집니다. <br/>\
프로젝트 팀 내부에 원인이 존재할 경우, 연장 근무, 인원 추가등 방법이 있지만, 인원 추가는 프로젝트 원가 상승으로 인해 대부분 연장 근무를 택합니다. <br/>\
프로젝트 팀 외부에 원인이 존재할 경우 요구사항 증가에 따른 요인일 경우 고객과의 협상, 형상관리 위원회 보고서 제출 및 에스컬레이션 통한 해결을 시도합니다. \
',

'클라우드 보안 인증 제도는 클라우드 컴퓨팅 발전법 23조 2항에 따라 클라우드 컴퓨팅 서비스 제공자를 인증기관이 평가하는 제도 입니다. <br/>\
인증 절차는 준비, 평가, 인증, 사후관리 순서로 이루어집니다.\
',

'ESG 는 친환경, 사회 책임경영, 지배구조 개선을 기반으로 지속가능한 발전 경영전략입니다. 이를 의료업계에 적용한다면 다음과 같이 적용할 수 있습니다. <br/>\
첫째, 친환경 측면입니다. 의료환경 폐기물의 ICT 기술 결합하여 정확한 추적 조사 및 감시 체계를 통한 적용이 가능합니다. <br/>\
둘째, 사회 책임경영 측면입니다. 의료기관의 경영전략을 통해 의료서비스의 질을 높이는 측면으로 발전 하는 측면의 적용이 필요합니다. <br/>\
셋째, 지배구조 개선 측면입니다. 최근 간호사 태움문화가 언론을 통해 보도되고 있는 안타까운 일들이 많았습니다. ESG 의료업계 적용은 위와 같은 문화를 근절하는데 적용해야 합니다.\
',
];