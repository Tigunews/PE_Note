var question = question.concat(
'분리발주',
'분할발주',
'소프트웨어 영향 평가 제도',
'넛지(Nudge) 이론',
'정보시스템 하드웨어 규모산정 지침',
'Philip Crosby의 품질경영 성숙도 모델 5단계',
'KANO Model',
'마세라티 문제(Maserati Problem)',
'앰비언트 커머스(Ambient Commerce)',
'ISO 20547',
'SW사업저장소',
'군집분석',
'IT 투자 평가 항목',
'정보시스템 계약 체결',
'[Agile]- InnerSource',
'EAI',
'COBIT 5.0',
);

var answer = answer.concat(
// 분리발주
'# 정의 : 각각 발주,계약 형태 / HW SW <br/>\
- HW, SW 및 시스템 통합 등을 일괄 계약하지 않고 각각 발주,계약하는 형태 <br/><br/>\
# 암기 <br/>\
- 소산법 20조 <br/>\
- 5억 5천만 <br/><br/>\
# 목적 <br/>\
- SW 산업 진흥법령 및 SW산업관련법 제도의 지속적 정비 <br/>\
- SW 사업체질 개선 <br/>\
- SW 시장 활성화 제고 <br/><br/>\
# 유형 <br/>\
- HW와 SW 분리발주 <br/>\
- 패키지 SW 분리발주 <br/>\
- SW개발부문 분리발주 <br/><br/>\
# 근거 : 소산법20조 국가기관등의 SW사업 계약, 미래부 고시 <br/><br/.\
# 대상 <br/>\
1. 1차조건 <br/>\
- 국가기관등이 발주하는 SW 사업의 총 사업규모가 5억원 이상(VAT 포함)인 사업 <br/>\
2. 2차조건 <br/>\
- 조달청 종합 쇼핑몰 등록 SW가 포함된 경우 (5천만원 미만 포함) <br/>\
- SW 가격이 단일 5천만원 이상 또는 동일 SW의 다량구매로 5천만원을 초과하고, SW품질인증(GS) CC NEP NET 국가인증을 획득한 SW또는 국갖어보원 검증/지전 SW(전자정부법 50조)가 포함된 경우 또는 행정업무용 SW선정(전자정부법 50조) 제품 <br/><br/>\
# 대상예외 <br/>\
- 현저한 비용 상승 <br/>\
- 정보 시스템과 통합 불가 <br/>\
- 사업기간내 미완성(현저한 사업지연) <br/>\
- 현저하게 비효율적 <br/><br/>\
# SW 선정 <br/>\
- BMT 수행 <br/><br/>\
# 활성화 방안 <br/>\
- 하자 유지보수의 안전장치 마련 (SW임치제 활성화, SW 등록제(개발 실명제), SW 분리발주가이드라인 제정, 발주자 업무지원 강화 <br/><br/>\
* 일괄발주 비교 <br/><br/>\
* 업무 처리 절차 <br/>\
1) 사업 계획 수립 및 비용 산정 <br/>\
2) 분리발주 대상 SW 조사 및 검토 <br/>\
3) 제외사유 검토(비통완효) - 조달청 사업 경우 제외 사유 적용시 조달청 사전 검토 요청<br/>\
4) 사업결정 - 순위 결정\
',

// 분할발주
'# 정의 : 프로세스별 분리 발주 / 전문화 목적<br/>\
- 분석/설계, 개발인력 전문화 목적으로 설계와 개발 프로세스를 분리하여 발주하는 형태 <br/><br/>\
# 암기 <br/>\
- K: SW제값주기, 하도급 <br/>\
- 대상 : 15.1.1 시행 <br/>\
- 2단계 : 요기/상개 <br/>\
- 3단계 : 요/설/개 <br/><br/>\
# 목적 <br/>\
- SW 산업구조 선진화<br/>\
- 요구개발과 개발 성과물간의 차이범위 최소화<br/>\
- 견적의 정밀도를 계량화하여 일과 비용간 불일치 해소<br/><br/>\
# 배경 <br/>\
- 기획/설계 부실 <br/>\
- 무책임한 과업변경<br/>\
- 부당하도급<br/>\
- SW 산업경쟁력 악화<br/>\
- SW 기술자 이탈 <br/>\
- SW 기술자 근로 환경 악화 <br/>\
- SW 산업경쟁력 악화<br/><br/>\
# 분할유형 <br/>\
- 역리할 - 역할발주, 분리발주, 분할발주 <br/>\
- 2단계 : 요건정의(ISMP), 기본설계(논리설계) / 상세설계(물리설계), 개발) <br/>\
- 3단계 : 요건정의(ISMP), 설계, 개발 <br/><br/>\
# 국내 IT 산업 문제점 <br/>\
- 산업구조 : 대형 IT 기업의 내부거래 의존성, 수직젖 다단계 하도급 구조, 우수인력 기피<br/>\
- 발주방식 : 일괄발주방식 비효율, 발주사 발주역량 부족, 품질<br/><br/>\
# 위험요소(4) <br/>\
- 기간지연<br/>\
- 발주업무증가<br/>\
- 발주혼란/책임전가<br/>\
- 현 예산제도 지원 미흡<br/><br/>\
# 성공전략 <br/>\
1. 1단계 PMO <br/>\
- 요구사업:Biz요구분석<br/>\
- 정보기술 구조 정의<br/>\
- 응용 모델 정의<br/>\
- 시스템 기본설계<br/>\
- RFP 작성<br/>\
2. 2단계 PMO <br/>\
- 개발사업:상설<br/>\
- 코시<br/>\
- 통시<br/>\
- 구인 <br/><br/>\
# 활성화 방안<br/>\
- 1단계 사업에 전체 예산의 30%<br/>\
- 2단계 사업에 70%를 배정하고 <br/>\
- 초과되는 사업은 2차년도 별도 예산으로 신청하는 방안<br/>\
- 예산은 SW 사업대가기준을 기준으로 배분<br/>\
- 설계가 끝나면 개발단계에서 임의로 바꿀 수 없도록 하는 기획동결(freezing) 제도적 장치 도입 방안<br/><br/>\
* 2015년 국내 시범적용 사업(3)<br/>\
- 조달청 : e-발주지원 통합관리 시스템 (33.9억원)<br/>\
- 우정사업본부 : 보험고객 정보통합시스템 구축 (14.2억원) <br/>\
- 대구도시 철도공사 : 한국채택 국제회계기준 통합회계 시스템(11.8억원) <br/><br/>\
* 2016년 30~100억 사업<br/>\
* 2017년 30억 이상 모든 사업\
# 분할발주FW : 기부공 - 기능분할(패키지SW), 부품분할, 공정분할(요설구시운) => (협의)분할발주=공정분할(광의)기능/부품분할 포함<br/><br/>\
',

// 소프트웨어 영향 평가 제도
'# 정의 : 영향 평가 개선 의견 제시 제도 / 산업 위축 방지 / 공공정보화사업 기획단계 <br/>\
- 공공과 민간 간의 불필요한 경쟁 및 소프트웨어 산업 위축을 방지하기 위하여 공공정보화사업 기획단계에서 민간시장 침해 등 소프트웨어산업 생태계에 미치는 영향을 평가하여 개선의견을 제시하는 제도(미래부, 2015년 5월 시행) <br/><br/>\
# 암기 <br/>\
- SW 중심사회 실현전략 <br/>\
- 기획단계 <br/>\
- 유형 : 기대 <br/><br/>\
# 배경 <br/>\
- 기관 공동 상용형 : 개발업체 도산위기 및 민간 시장 축소 <br/>\
- 대국민 서비스형 : 유사 민간 서비스와 불필요 경쟁 및 민간시장 축소 <br/><br/>\
# 근거 <br/>\
- 소프트웨어 중심사회 실현전략(2014.07.23.) 일환으로 공공 SW 사업의 민간시장 침해여부를 사전 검증/평가 SW 영향평가제도 2015.05. 본격화 <br/>\
- 미래부 발표 "국가정보화 시행계획 작성지침"에 추진 근거 반영(2015.03.31.)<br/><br/>\
# 대상 <br/>\
- 기관 : 중앙행정기관 등 55개 기관 및 광역자치단체 17개 기관 <br/>\
- 사업 : 전체 정보화 사업, SW 기획/구축/운영/유지보수/정보화정책지원 사업(신규/계속 포함) <br/>\
- 적용범위평가프로세스 : 정보사업계획수립 > 사업내용확인 > 구축목적확인 > 시스템이용범위 확인 > 국가필수시스템여부 > 서비스대상확인 > 대국민 or 기관공동 or 제외<br/><br/>\
# 유형 <br/>\
- 기관공동사용형 : SW 산업계 파급효과, 사업 추진 필요성 <br/>\
- 대국민서비스형 : 민간 유사서비스 침해여부, 추진사업의 공공성 <br/><br/>\
# 결과활용 : 기재부 차년도 정보화 예산 심의시 검토 및 반영 <br/><br/>\
# 현황 <br/>\
- 2014 SW 중심사회 실현전략 : 미래부, 도입논의, 정부 SW산업 공생 발전 시스템 형성 <br/>\
- 2015 시행가이드 배포 <br/>\
- 2017 SW산업 진흥법 개정 발의 : 과기정통부-의무화, SW 강국 생태계 조성, SW 경쟁력 강화 <br/><br/>\
* 시사점 <br/>\
- 적용범위 : 연구개발과제 제외, NIA 중심 협조체계 <br/>\
- 평가프로세스 개선 : 부실방지, 정성적 평가기준 보완, 우선순위 <br/>\
- 법적근거강화 : 의무수시 <br/>\
- 인력 : 전담팀 <br/><br/>\
<img src = "./img/공공소프트웨어영향평가.png" style = "max-width:100%; height:auto;">\
',

// Nudge 이론
'# 정의 : 유연한 방식 선택 설계 이론<br/>\
- 심리학과 행동경제학 분야의 용어로, 상대방의 행동을 변화시키는 유연한 방식의 선택 설계 이론 <br/><br/>\
# 원리 (D실매체피인)<br/>\
1. Default <br/>\
- 내용 : 사람들은 많은 노력이 필요하지 않는 선택을 하는 경향이 있기 때문에 디폴트옵션을 선택하는 경우가 많음 <br/>\
- 사례 : 대부분 사람들은 프로그램을 설치할 때 커스터마이징 옵션을 사용하지 않고 프로그램에서 제시하는 베이직 옵션을 선택 <br/><br/>\
2. 실수예측(Expecting Error) <br/>\
- 내용 : 사람들은 필연적으로 실수를 범하기 마련, 자동화 등을 통한 작은 개입을 통해 반복적인 실수를 최소화할 수 있음 <br/>\
- 사례 : 이메일 첨부파일 누락 재확인 사례 <br/><br/>\
3. 매핑(Mapping) <br/>\
- 내용 : 복잡하고 어려운 선택을 하는 상황에서는 최적의 판단을 내리기 어려움 <br/>\
- 사례 : 전기,가스비 총액 / 시간대별 소비량 X <br/><br/>\
4. 의사결정 체계화(Structure complex Choices) <br/>\
- 내용 : 선택의 기준 축소,단순화 시키는 방법 선택 <br/>\
- 사례 : 넷플릭스 소비자 취향 기반 추천 <br/><br/>\
5. 피드백(FeedBack) <br/>\
- 내용 : 사용자들의 행동이 잘 되고 있는지 아닌지의 여부에 대한 피드백 제공 <br/>\
- 사례 : 도로 선의 간격 착시로 인한 자동차 감속 <br/><br/>\
6. 인센티브(Incentive) <br/>\
- 내용 : 인센티브로 인한 유도 가능 <br/>\
- 사례 : 스마트 온도계 예상 절약 금액 공지 \
',

// 정보시스템 하드웨어 규모산정 지침
'# 정의 : 하드웨어에 대한 예산 수립 지침 <br/>\
- TTA(한국 정보통신기술협회)에서 공개한 지침. 하드웨어에 대한 예산 수립시 필요<br/><br/>\
# 유형 <br/>\
1. 수치계산법 : 사용자수등 요소로 규모산정 후 보정치 적용 <br/>\
- 장점 : 근거 명확, 간단 산정 <br/>\
- 단점 : 보정치에 대한 정확한 근거 제시 어려움, 보정치 의존도 높음 <br/><br/>\
2. 참조법 <br/>\
- 업무량 : 사용자수 ,DB 크기 따라 유사 시스템 규모 참조 <br/>\
- 장점 : 안전 <br/>\
- 단점 : 근거 제시시 미약 <br/><br/>\
3. 시뮬레이션법 : 작업부하 모델링 후 시뮬레이션 <br/>\
- 장점 : 상대적 정확한 값 <br/>\
- 단점 : 시간, 비용 많이 소요 <br/><br/>\
# CPU 규모산정 : {시스템영역(System Area) + (사용자당 필요 메모리 * 동시사용자수)} * 버퍼 캐쉬보정 * 시스템 여유율 <br/><br/>\
# 디스크 규모 산정 (내장디스크) : (시스템 OS영역 + 응용프로그램 영역 + SWAP 영역) * 파일 시스템 오버헤드 * 시스템 디스크 여유율 <br/><br/>\
# 디스크 규모 산정 (외장디스크) : (데어텽역+ 백업영역) * 파일 시스템 오버헤드 * RAID 여유율 * 데이터 디스크 여유율 <br/><br/>\
<img src = "./img/하드웨어규모산정_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/하드웨어규모산정_2.png" style = "max-width:100%; height:auto;">\
',

// Philip Crosby의 품질경영 성숙도 모델 5단계 
'불확실성(Uncertainty), 인지(Awakening), 이해(Enlightenment), 지혜(Wisdom), 확신(Certainty)의 품질경영 성숙도 모델 5단계',

// KANO Model
'# 정의 : 상품 기획 분석 방법 / 기대(x) / 충족(y)<br/>\
- 어떤 상품을 기획할 때 각각 구성요소에 대해 소비자가 기대하는 것과 충족 시키는 것 사이의 주관적 관계, 요구사항의 만족, 불만족에 의한 객관적 관계를 설정하여 분석하는 방법 <br/><br/>\
# 특징 <br/>\
- 품질의 이원적 인식 : 만족, 불만족이라는 주관적, 객관적 요소 고려<br/>\
- 품질 개선 : 고객만족 또는 불만족 영향도의 정도에 따른 개선 <br/>\
- ROI 평가 : KANO 그래프를 통해 사용자 만족도 측면에서의 기존 기능 향상의 투자수익률(ROI)평가 <br/><br/>\
<img src = "./img/KANO.PNG" style = "max-width:100%; height:auto;">\
',

// 마세라티 문제
'# 정의 : 과도 몰입 문제 현상 <br/>\
- 현재 구매 능력이 없음에도 고가의 마세라티 차량 모델과 색상을 고민하는 바와 같이, 현실적으로 발생할 확률이 희박한 상황을 가정하여 기술적 요소에 과도하게 몰입하는 문제 현상. 엔지니어만 있는 스타트업에서 발생하는 기술편향을 비유하며 유사 개념으로 “보트 네이밍” 존재',

// 엠비언트 커머스 
'# 정의 : 자동적 정보 제공 상거래 <br/>\
- E-Commerce와 기존 점포를 IT의 힘으로 조합한 것으로, 예를 들면 센서 반응에 연동하여 인공지능(AI)이 작동해 고객에게 자동적으로 (키보드나 레지를 사용하지 않고 ) 추천 상품이나 결제 방법에 관한 정보를 제공',

// ISO 20547
'# 정의 : 아키텍처 모델 표준 / 빅데이터 프레임 워크 / 운용 프로세스 <br/>\
- 빅데이터 참조 아키텍처 표준 빅데이터 시스템의 구축을 위한 프레임워크 및 운용 프로세스에 대해 정의한 참조 아키텍처 모델 표준',

// SW사업저장소
'# 정의 : 발주자 역량 강화 제도 / SW사업 정보 수집 분석 <br/>\
- 국가기관등에서 추진되는 SW사업정보를 수집 및 분석하여, SW사업 추진시 예산수립, 비용산정, 요구사항 도출 등을 위한 사업정보를 제공하고 이를 통해 발주자 역량을 강화하기 위한 제도 <br/><br/>\
# 등장 배경 <br/>\
- SW 사업 대가기준 고시가 폐지 및 민간이양됨에 따라 객관적, 정량적 대가산정 근거 마련 필요 <br/><br/>\
# 관련 규정 <br/>\
- 소프트웨어 산업 진흥법 제22조(소프트웨어 사업의 대가지급) <br/><br/>\
# SW 사업정보 저장소 <br/>\
- 수행환경 정보 : CBD, 전자정부프레임워크 / 사업수행 적용 기술 및 도구, DB, 적용방법론, 개발도구 등 <br/>\
- 비용/일정, 규모/공수 : FP/MM 방식, SW기술자 노임단가 / 사업기간, 계약금액, 기능점수, 투입인력의 등급 및 인원 <br/>\
- 품질특성 정보 : SLA, ISO 9126 품질특성 / 신뢰도, 성능, 분산처리, 결함수, 결함유형, 품질점검 <br/><br/>\
',

// 군집분석
'# 정의 : 사전 정보 없는 경우 값 기반 유사성 이용 분석법 <br/>\
- 모집단 또는 범주에 대한 사전 정보가 없는 경우 주어진 관측 값들 사이의 거리 또는 유사성을 이용하는 분석법 <br/>\
- 전체 데이터를 집단으로 그룹화하여 각 집단의 성격 파악, 데이터 전체의 구조 이해 지원 분석법 <br/><br/>\
# 특징 <br/>\
- 탐색적인 기법 : 주어진 자료에 대한 사전 정보 없이 의미있는 자료 구조를 찾아낼 수 있음 <br/>\
- 이식성 : 거리만 잘 정의되면 모든 종류의 자료에 적용할 수 있음 <br/>\
- 초기 군집수 K 결정 : 초기 군집수 K의 결정이 어려움 <br/><br/>\
# 군집분석의 과정 <br/>\
- 거리측도 선택 : 유사성 판단 / 유클리디안 거리 <br/>\
- 절차 선택 : 계층, 비계층 / 단일, K-Means <br/>\
- 군집의 수 결정 : 계층, 비계층 / 결합 거리, 분산합계 <br/>\
- 평가 : 신뢰성, 타당성 <br/><br/>\
# 군집의 유형 <br/>\
1. 거리 중심 <br/>\
- 계층적 군집 : 중복 허용x  <br/>\
- K-means : 개채간 유사성 <br/>\
- SOM(Self Oragnizing Map) : 저차원 뉴런, 지도 형상화 <br/><br/>\
2. 자원축소 <br/>\
- 주성분분석(PCA) : 새로운 변수 창출 <br/>\
- MDS(MultiDimensional Scaling) : 다차원 척도법 <br/><br/>\
<img src = "./img/판별군집비교.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 1교시 5번\
',

// IT 투자 평가 항목 
'# 정량적 평가 항목 <br/>\
1. EVA (Economic Value Added) <br/>\
- 정보화로 인한 수익 총합 - 정보화 투자 총합 <br/>\
- 투자에 대한 장기적 가치 창출 관점에서 기업 성과 측정 <br/><br/>\
2. TCO (Total Cost of Ownership) <br/>\
- 기업의 IT 투자 직접 비용, 간접 비용을 통합하여 평가 <br/>\
- 운영비, 기술 지원, 유지 보수 등 간접 비용 증가에 따라 도입 <br/><br/>\
3. EVS (Economic Value Source) <br/>\
- 기업 가치 창출 원천을 4가지로 한정 하고 원천별 효과 분ㅇ석 <br/>\
- 시간과 위험의 가치를 명시적으로 고려, 측정 <br/><br/>\
4. TEI (Total Economic Impact) <br/>\
- 직접적인 비용, 효과 분석 및 미래의 잠재적 이익 추가 평가<br/>\
- 비용, 이익, 유연성 3가지 핵심 여역 평가 및 위험 판단 <br/><br/>\
5. TVO (Total Value of Opportunity) <br/>\
- IT 조직, 경영진, 재무 조직 간 합의점 제공을 위한 평가 항목 <br/>\
- 비용/수익 분석, 불확실성, 조직 진단, 선진 사례 분석 포함 <br/><br/>\
# 정성적 평가 항목 <br/>\
1. IO (Information Orientation) <br/>\
- 정보행동/가치, 정보 관리 실행, 정보 기술 실행의 3역량 평가 <br/>\
- 3역량의 상호 작용을 통한 시너지 효과 창출 통한 성과 향상 <br/><br/>\
2. IPM (IT Portfolio Management) <br/>\
- 기업의 IT 포트폴리오 관련 모든 활동을 가치, 효익으로 구분 <br/>\
- IT 자원, 투자, 프로젝트의 우선순위 관리 통한 효율성 확보 <br/><br/>\
3. IE (Information Economics) <br/>\
- IT와 비즈니스 관리자의 합의 통하 전략적 우선 순위 부여 <br/>\
- 양측 관리자간 우선 결정 요인 목록화 후 중요도, 위험 평가 <br/><br/>\
4. BCG Matrix <br/>\
- 시장의 성장률과 기업의 시장 점유율을 고려한 평가 <br/>\
- Cach cow, Dog, Question mark, Star로 분류 하여 전략 수립 <br/><br/>\
5. Value Chain <br/>\
- 기업의 부가 가치 발생 활동을 주 활동, 보조활동으로 분류 <br/>\
- 주활동(구매, 생산, 물류, 마케팅, A/S) <br/>\
- 지원활동(기획, 조달, 개발) 등으로 분류, 구성 <br/><br/>\
# 복합 평가 <br/>\
- 다중접근 : BSC, IT-BSC <br/>\
- 통계산술 : ROV(Real Option Valuation), AIE(Applied Information Economics) <br/><br/>\
* 122회 3교시 5번\
',

// 정보시스템 계약 체결
'# 협상에 의한 체결 방식 <br/>\
1. 정의 : 다수 공급자에게 제안서 제출 받아 평가 방식 <br/><br/>\
2. 근거 : 지방자치단체를 당사자로 하는 계약에 관한 법률 시행령 43조 1항 <br/><br/>\
3. 특징 <br/>\
- 지식기반 사업등의 계약 : 높은 지식 고부가가치 사업 우선 적용가능 <br/>\
- 경쟁적 대화에 의한 계약 <br/><br/>\
4. 절차 : 정량적 -> 정성+가격 -> 협상 적격자 선정<br/>\
- 입찰공고 <br/>\
- 제안요청서 교부 <br/>\
- 제안서 제출<br/>\
- 제안서 평가 <br/>\
- 협상 적격자 및 협상 순위 선정 <br/>\
- 협상 적격자 통지 <br/>\
- 협상 절차 <br/>\
- 협상 진행 <br/>\
- 계약 체결과 이행 <br/><br/>\
5. 평가항목 배점한도 <br/>\
- 정량적 평가분야(수행경험,경영상태,인력) : 20점 / 계약담당자가 평가, 전체 배점의 30% 초과 불가 <br/>\
- 정성적 평가분야(기술지식능력,사업수행계획,지원기술,사후관리) : 60점 / 평가위원이 평가 <br/>\
- 입찰가격 평가분야 : 20점 / 평점산식 <br/><br/>\
# 품질등에 따른 낙찰자 결정 방식 <br/>\
1. 정의 : 행정안전부장관이 정하는 기준에 따라 그 물품의 입찰가격 외에 품질,규격 등을 종합적으로 고려하여 예정가격 이하로서 가장 경제성이 있는 입찰한 자를 낙찰자로 선정하는 방법 <br/><br/>\
2. 근거 : 지방자치단체를 당사자로 하는 계약에 관한 법률 시행령 45조 1항 <br/><br/>\
3. 특징 <br/>\
- 평가기준 열람 : 입찰 참가자 열람 <br/>\
- 품질 등 표시서 제출 : 물품의 품질,성능,효율 표시 <br/>\
- 낙찰자 결정 : 개찰일 10일 이내 결정 <br/><br/>\
<img src = "./img/나라장터.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 4교시 2번\
',
  
// InnerSource
'# 정의 : 사내 소프트웨어 오픈소스 개발 방법론 <br/>\
- 어느 부서에 속해 있든지 상관없이 협력할 수 있는 사람들과 커뮤니티를 만들어, 소스 코드의 공개범위를 확대해 협업하는 개발문화 <br/><br/>\
# 구성요소 <br/>\
- Contributor : 소스코드 외부 반영 <br/>\
- Community Manager : 시스템 관리 감독 <br/>\
- Project Manager : 사내 개발자 <br/>\
- Control System : Source 관리 시스템 <br/><br/>\
# 기술요소 <br/>\
- 인프라 : Git, SVN <br/>\
- 보안 : DRM, VPN <br/>\
- 개발문화 : Agile, CI/CD <br/>\
- 지식관리 : Wiki <br/><br/>\
* 아이리포 23회 1교시 13번\
',
  
// EAI
'# 정의 : E-비지니스를 위한 기본 인프라 <br/>\
- 기존 Point to point Interface의 한계를 극복하여, 기업 내 상호 연관된 모든 어플리케이션을 손쉬운 확장성으로 연결하여 필요 정보를 중앙 집중적으로 통합, 사용할 수 있는 환경을 구축하기 위한 방법 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/EAI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 통합유형 <br/>\
- Point to Point : 1:1 통합 <br/>\
- Hub & Spoke : 중앙집중형 <br/>\
- Messaging Bus : Middleware <br/>\
- Hybrid : Hub&Spoke + Messaging Bus 혼합 <br/>\
- Peer to Peer : 각 어플리케이션 Peer Seerverr P2P \
',
  
// COBIT 5.0
'# 정의 : Enterprise IT Governance 프레임워크 BP <br/>\
- 조직이 IT 거버넌스와 관리를 위한 자신들의 목적을 달성하는 것을 지원하는 Cobit 4.1을 계승하고 Risk IT와 Val IT를 통합하는 종합적인 프레임워크 <br/><br/>\
# 원칙 (통이비인거) <br/>\
- 통합 프레임워크 : Best Practice 연계 <br/>\
- 이해관계자의 가치제고 지향 : 가치창출 위해 존재 <br/>\
- 비즈니스 초점 : 거버넌스, 매니지먼트 의사결정 연계 <br/>\
- 인에이블러 기반 : Enabler 총체적 접근 방법 <br/>\
- 거버넌스와 관리 분리 : 다른 구조, 목적 <br/><br/>\
# 핵심영역 <br/>\
<img src = "./img/COBIT5.png" style = "max-width:100%; height:auto;">\ 
',
);
