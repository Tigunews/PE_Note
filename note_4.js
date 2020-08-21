var question = question.concat(
// 0
'분리발주',
// 1
'[자기주권형 신원증명]- 자기주권 신원(SSI;Self-Sovereign Identity) 10대 원칙',
// 2
'Subnetting, Supernetting',
// 3
'분산원장 기술(DLT)',
// 4
'가상메모리 관리기법',
// 5
'캐시메모리 사상기법',
// 6
'[RTE]-사이클론 모델',
// 8
'NAND Flash-Memory',
// 9
'RTE',
);

var answer = answer.concat(
// 0
'# 정의 : 공개 경쟁입찰과 조달구매로 제값주고 SW를 구매하는 제도 / 2010년 SW 산업 진흥법 <br/><br/>\
<img src = "./img/분리발주대상조건.PNG" width = "350"><br/><br/>\
<img src = "./img/일괄발주분리발주비교.PNG" width = "350"><br/><br/>\
# 분리발주 예외 사항 <br/>\
- 분리발주로 인해 정보시스템 통합이 불가능 <br/>\
- 현저한 비용상승 초래 <br/>\
- 현저한 사업기간 지연 우려 <br/>\
- 현저한 비효율적 판단 등 이유에 해당할 경우 <br/><br/>\
* 분리발주대상 SW 품목별 제외사유서를 작성해 제출 <br/><br/>\
# 사례 <br/>\
- 차세대 에듀파인<br/>\
- 차세대 사회보장성 시스템<br/>\
- 우편물정보시스템 <br/><br/>\
',
// 1
'1 Existence –사용자는독립적존재이어야한다<br/>\
2 Control–사용자는그들의신원정보에대한통제권을가져야한다<br/>\
3 Access –사용자는그들의신원데이터에접근가능해야한다<br/>\
4 Transparency–시스템과알고리즘은투명해야한다<br/>\
5 Persistence–신원정보는장기간저장되어야한다<br/>\
6 Portability–신원정보와서비스는이동가능해야한다<br/>\
7 Interoperability–신원정보는가능한널리사용되어야한다<br/>\
8 Consent –사용자는그들의신원정보사용에대해동의하여야한다<br/>\
9 Minimize –Claim 의사용은최소화되어야한다<br/>\
10 Protection–사용자의권리는보호되어야한다<br/>\
',
// 2
'** Subnetting ** <br/><br/>\
# 정의 : 할당된 네트워크 ID의 IP주소를 가지고 내부적으로 여러개의 그룹으로 만드는 과정 <br/><br/>\
# 구성요소 <br/>\
- Subnet Mask : 주어진 IP 주소를 네트워크 환경에 맞게 나누어 주기 위하여 씌워주는 이진수의 조합 <br/>\
- Gateway : 컴퓨터와 공중 통신망, LAN과 공중통신망 등을 접속하는 장치 <br/>\
- Net id : 전체의 네트워크에서 각각의 네트워크를 구분하기 위해 사용하는 주소 <br/>\
- Host id : 하나의 네트워크에서 각각의 호스트를 구분하기 위해서 사용하는 주소 <br/><br/>\
# 절차 <br/>\
1. 필요 네트워크 수 결정 <br/>\
2. 필요한 네트워크 ID를 만들기 위해 전환할 bit수 결정 <br/>\
3. 서브넷 마스크 계산 <br/>\
4. 서브넷 ID 계산 <br/>\
5. 서브넷별 호스트 ID의 범위 계산 <br/><br/>\
# 특징 <br/>\
- 관리성 : 네트워크를 분할하여 체계적으로 관리 <br/>\
- 보안성 : 그룹별로 네트워크를 분할하여 높은 보안성 확보 <br/>\
- 신속성 : 내부에서 브로드캐스트 문제를 해결함으로써 속도의 향상 <br/>\
- 효율성 : 외부에서 하나의 IP로 확인됨으로써 라우팅 정보를 줄일 수 있음 <br/><br/>\
** Supernetting ** <br/><br/>\
# 정의 : 다수의 작은 네트워크를 하나의 큰 네트워크로 통합하는 것 <br/><br/>\
# 필요성 <br/>\
- 효율성 : 네트워크 주소 할당시 상위 클래스로 병합하는 대신 서브넷 조정으로 병합 가능 <br/>\
- 주소부족해결 : 상위 클래스 IP를 부여하는 대신 소속 클래스 IP 사용가능하여 상위 클래스 IP 보존 가능 <br/>\
- 성능향상 : 라우터에서 라우팅 테이블 관리가 쉬워져 네트워크 성능 향상 <br/>\
',
// 3
'# 정의 : 네트워크 노드에 분산되어 있는 원장을 동기화하기 위해 상태 변경(일반적으로 업데이트)을 안전하게 제안, 검증 및 기록할 수 있게 하는 프로세스 및 관련 기술 <br/><br/>\
# 국내외 표준 동향 <br/>\
- ISO : 2019년 5월 이후 블록체인 유즈케이스와 블록체인 상호운용성 표준화 중 <br/>\
- ITU-T : 2017년 부터 블록체인 표준화 시작, SG-17, FG-DLT 가장 활발히 활동 <br/>\
- W3C, IEEE : 2016년부터 활동, 타기관에 비해 미흡한 수준 <br/>\
- ETSI(유럽) : 2018년 허가형 분산원장에서 산업 규격 그룹을 설립, 응용, 적용과 규정 준수, 응용 시나리오의 3개 표준 진행중 <br/>\
- NIST(미국) : 블록체인 기술의 상위레벨 기술적 요소 개요 제공 <br/>\
- DIN(독일) : 블록체인 기술을 사용하여 개인 데이터 처리를 위한 표준화 모델 작업중 <br/>\
- TTA(한국) : 2017년부터 블록체인 표준 개발, 2019년 PG1006을 신설하여 본격적인 국내 표준 개발 시작 <br/>\
',
// 4
'# 가상 메모리 : 사용자에게 주기억 장치보다 큰 용량의 가상 기억 공간을 제공하는 기억장치 관리 기법 <br/><br/>\
# 계층 구조 <br/>\
<img src = "./img/가상메모리계층구조.PNG" width = "350"><br/><br/>\
# 관리기법 <br/>\
- 할당기법(How much) : 각프로세스 주기억 장치 할당량, 각 프로세스 실행중 할당량 변화 / 고정기법, 가변기법 <br/>\
- 호출기법(When) : 프로그램의 한 블럭을 언제 주 기억장치에 적재할 것인가 / 요구호출, 예측 호출 <br/>\
- 교체기법(Who) : 주기억 장치에 공간이 없는 경우 어느 블록을 교체할 것인가 / FIFO, OPT, LFU, MFU, LRU <br/>\
- 배치기법(Where) : 프로그램의 한 블록을 주기억장치의 어디에 적재시킬 것인가 / First, Best, Next, Worst Fit <br/><br/>\
<img src = "./img/페이지기법세그먼트기법.PNG" width = "350"><br/><br/>\
',
// 5
'# 정의 : 캐시메모리와 주기억 장치 사이의 데이터 이동을 위하여 캐시 메모리와 주기억장치를 매핑하는 기술 <br/><br/>\
# 직접사상 <br/>\
- 특징 : 캐시메모리의 특정 라인에 주기억장치의 각 블록이 적재, 캐시메모리와 주기억장치가 1:1로 대응하는 구조 <br/>\
- 장점 : 회로구현이 용이하고 간단함. 처리속도 빠름 <br/>\
- 단점 : CPU 접근시 캐시 메모리 접근 실패율(Miss Rate) 높음 <br/>\
<img src = "./img/DirectMapping.PNG" width = "350"><br/><br/>\
# 연관사상 <br/>\
- 특징 : 캐시메모리에 데이터를 적재할 시 데이터와 그 데이터의 주기억장치 주소도 함께 저장하는 방식 <br/>\
- 장점 : 캐시 적중률이 높음 <br/>\
- 단점 : 구현회로가 복잡하고 처리속도가 느림 <br/>\
<img src = "./img/AssociativeMapping.PNG" width = "350"><br/>\
캐시메모리 Index 003에 Address와 Data 입력 <br/><br/>\
# 집합연관 사상 <br/>\
- 특징 : 직접사상과 연관사상의 조합, 캐시 메모리의 한 Index에 2개 이상의 서로 다른 데이터 블록 저장하여 하나의 Set 형성 <br/>\
- 장점 : 캐시 적중률 높음 <br/>\
- 단점 : 구현회로 및 구조가 복잡 <br/>\
<img src = "./img/Set_AssociativeMapping.PNG" width = "350"><br/>\
',
// 6
'# 정의 : RTE 하부 구조로 LifeCycle을 줄여 RTE 달성하기 위해 지휘(lead), 관리(Manage), 운영(Operate) 관점에서 기업이 단축해야할 10개의 종단간 사이클을 정의한 모델 <br/><br/>\
# 암기 : 모델 자외 시목마자 구주수고 <br/><br/>\
# 구성 <br/>\
- Lead(2) : 자본 및 투자활동, 외부 환경변화 기업 경영전략 수립<br/>\
- Manage(4) : 시정위협, 대응전략, 목표달성, 조직개편, 마케팅~양산화, 자료수집~보고 <br/>\
- Operation(4) : 구매~대금, 주문~판매, 수요~자원, 고객수요~서비스 <br/><br/>\
# 참고사항 : 수요에서 자원배분, 고객 수요에 따른 서비스 제공 <br/><br/>\
',
// 8
'# 정의 : 반도체의 셀이 직렬로 배열되어있는 플래시 메모리의 한 종류 <br/><br/>\
# 특징 <br/>\
- 수직 구조이기 때문에 좁은 면적에 많은 셀을 만들 수 있어 대용량화 가능 <br/>\
- 데이터 순차검색으로 인해 노어 플래시보다 읽기속도 느리지만, 별도의 셀의 주소를 기억할 필요가 없어 쓰기속도는 훨씬 빠르다 <br/>\
- 소형화, 대용량화가 가능하기 때문에 다양한 모바일 기기 및 전자제품의 저장장치로 사용 <br/>\
',
// 9
'# 정의 : 기업활동이 글로벌화되고 기술의 발전으로 수명이 짧아지는 현실에 대응하기 위한 실시간 기업모델 <br/><br/>\
# 암기 : ADA <br/><br/>\
<img src = "./img/RTE.PNG" width = "350"><br/><br/>\
',
);
