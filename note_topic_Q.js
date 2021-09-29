var question =
[
// 토픽
'경력기반으로 자기소개',
'감리와 PMO의 차이점 설명',
'감리절차에 대해 아는대로 설명해주세요',
'자기역량이 드러났던 프로젝트에 대해 소개해주세요',
'프로젝트를 많이 수행하셨는데, 위험과 이슈에 대한 차이를 말해주세요',
'FP에 대해 들어보셨죠? 데이터 기능과 트랜잭션 기능을 어떻게 처리하나요?',
'FP 산정 시 초반에는 정확한 공수 산정이 힘들텐데요. 어떻게 수행하나요?',
'FP 실제 산정에 대해 말씀해주세요',
'ITSM과 SLA도 수행하셨는데요, Incident와 Problem에 대해 비교해주세요',
'인공지능에서 지도학습, 비지도학습, 강화학습을 설명해주세요',
'[인공지능 학습 후속 질문]- 그럼 클러스터링은 어떤 방법이죠?',
'최근 삼성에서 워치를 발표했습니다. 독자적인 OS를 포기하고 구글의 안드로이드 플랫폼을 사용하게 되었는데 견해가 어떤지 묻고 싶습니다.',
'자신이 했던 프로젝트 중에서 가장 내세울만한 프로젝트, 그리고 잘 안되었던 프로젝트 그리고 잘 안되었던 프로젝트에서 극복한 내용 기반으로 소개해달라',
'프로젝트 진행시 관리기법 말해보고, 프로젝트 관리시에 중요하다고 생각하는 것 말해보라',
'가상화 기술 관련해서 쿠버네티스 도커 스웜 같은 기술이 사용 되는데 가상화 기술의 적용 방안, 현업에서 사용 방안에 대해서 말해보세요',
'[가상화 추가 질문]- 모든 것을 다 가상화할 수는 없을텐데 이 점에 대해서는 어떻게 생각하시나요?',
'가상화 중에서도 전가상화, 부분 가상화가 있는데 설명해달라',
'영상정보처리기기 접근 절차와 기록 항목에 대해서 설명해보세요',
'코로나 관련 예약 시스템의 문제 원인 및 해결 방안에 대해 설명해보세오',
'재난 안내 관련하여 많은 서비스를 하고 있는데 지연되는 이유에 대해서 설명해보세요',
'수석감리원의 조건에 대해서 말씀해보세요',
'상주감리 기준에 대해서 말씀해보세요',
'CBD 개발방법론에 대해 설명해보세요',
'[CBD] CBD 수행시 고려해야할 사항 3가지 설명해보세요',
'아키텍처에 대해 설명해보세요',
'[아키텍처] 아키텍처 방법론에 대해서 설명해보세요',
'[아키텍처] ATAM 과 Trade Off를 어떻게 해야 하는지 기능과 보안 측면에서 설명하세요',
'[아키텍처][ATAM] 선정 기준이 무엇인지 설명해보세오',
'통계학 관련된 내용인데 확률통계와 기술통계에 대해 설명해보세요.',
'PMO가 무엇인지, 역할설명 및 장단점',
'ISP와 개발과의 관계',
'머신러닝과 딥러닝을 비교',
'개발자 관점에서 머신러닝과 딥러닝 설명',
'프로젝트 종료가 얼마남지 않은 상황에서 지연을 만회하기 위해 인력을 다수 투입하는 상황에 대해 어떻게 생각하는지? 그리고 그 이유는?',
'PM이나 PL을 많이 한것으로 보이는데, PM의 관리역량중 가장 중요한 것이 무엇이라고 생각하며 그 이유는?',
'정규화는 왜 하나요?',
'개발을 많이 하신것 같은데, 주로 사용하는 언어가 무엇이죠?',
'파이썬 아시나요?',
'IoT에 대해 설명하시오',
'DevOps의 개념',
'기술사 공부는 얼마나 했는가? 어떻게 공부했나? (학원인지, 독학인지)',
'기술사 지원 계기',
'영상처리 시스템의 구성에 대하여 설명해주세요',
'영상 압축에 대하여 원리 중심으로 설명해주세요',
'테스트 케이스에 대하여 설명해주세요',
'테스트 오라클에 대하여 설명해주세요',
'UML 도구 써보셨나요? UML에 대해서 설명해보세요',
'[UML] 그러면 UML의 종류에는 몇 개가 있죠?',
'양자내성암호에 대해 설명해보세요',
'딥러닝 관련 인공지능의 다양한 기술에 대해 아는대로 설명해주세요.',
'공공데이터 품질을 관리하는 방법에 대해 설명해주세요',
'공공기관 블록체인 도입가이드라인 항목에 대해 설명부탁합니다.',
'블록체인에서 원장에 대해 설명해주시기 바랍니다.',
'Safety, Security, 품질 표준에 대해 설명해주세요',
'가용성과 연속성 보장을 위한 구체적인 방법에 대해 설명 부탁드립니다.',
'시스템 전환과 관련하여 Parallel 방식과 Instance 방식이 있는데 차이점을 설명해주세요',
'CMMI와 SP인증을 유사점과 차이점을 설명하시오.',
'인공지능 ODD에 대해 설명하고 인공지능 알고리즘에 대해 설명해주세요.',
'감리란 무엇인지 말씀해보세요',
'[감리] 3단계 감리와 2단계 감리의 차이점을 말씀해보세요',
'[감리] 감리를 초반에 수행할 때와 후반에 수행할 때의 장잔점에 대해 말씀해보시오',
'PMO의 역할과 필요성',
'CMMI에 대해 설명하고 사전/사후 품질로 분류',
'블록체인 기술 설명',
'오픈소스 유형 설명',
'DB 튜닝 방안 설명',
'스마트 시티 정의, 스마트 시티 국내사례와 해외 사례 비교 국내 스마트 시티가 왜 안되는지 개인 의견',
'설계감리시 중점 점검사항은?',
'상주감리와 PMO 차이는?',
'프라이빗 블록체인과 퍼블릭 블록체인 중 보안관점에서 어느것이 유리한가요?',
'[블록체인] 향후 블록체인의 지속성, 발전을 어떻게 보는지요?',
'운영감리에 대해 설명해주세요',
'기술사 공부계기와 학습방법은?',
'기술사를 왜 지원하게 되었는가? 기술사는 어떤 사람이 되어야 한다고 생각하는가?',
'클라우드 보안이 일반 시스템과 다른 점이 무엇인가? 중요한 점이 무엇인가?',
'오픈소스 소프트웨어의 장단점과 향후 어떻게 발전할 것인가?',
'품질관리에 대해서 설명하고 문제점과 개선방안을 설명하시오',
'블록체인이 무엇인지 설명하고 업무에 어떻게 적용할 수 있는지?',
'기술사로써 현재 업무를 장기적으로 어떻게 발전 시켜 나갈 것인가?',
'공공 S/W 대기업 참여제한에 대해 어떻게 생각하시는지요?',
'대기업 참여제한 예외 사항은 무엇입니까?',
'Validation 과 Verification의 차이점은 무엇입니까?',
'메타버스의 장점, 메타버스의 문제점, 해결방안',
'머지포인트 사태 재발되지 않도록 기술적인 대책',
];