var question = question.concat(
'자료구조',
'트라이(Trie)',
'정렬 알고리즘',
'[정렬 알고리즘]- Selection sort',
'[정렬 알고리즘]- Bubble sort',
'[정렬 알고리즘]- Insertion sort',
'[정렬 알고리즘]- Shell sort',
'[정렬 알고리즘]- Merge sort',
'최단경로 알고리즘',
'[최단경로 알고리즘]- 다익스트라(Dijkstra) 알고리즘',
'[최단경로 알고리즘]- 플로이드(Floyd) 알고리즘',
'[최단경로 알고리즘]- 벨만-포드(Bellman-Ford algorithm) 알고리즘',
'[최단경로 알고리즘]- A* 알고리즘',
'최소신장트리',
'[최소신장트리]- 크루스칼(Kruskal) 알고리즘',
'[최소신장트리]- 프림(Prim) 알고리즘',
'AVL 트리',
'기계학습 종류',
'[기계학습]- 유전자 알고리즘',
'[기계학습]- 신경망 알고리즘',
'[기계학습]- Feed Forward Neural Network',
'[기계학습]- 분석모델평가',
'[기계학습]- 분류모델생성알고리즘',
'[기계학습]- 앙상블 학습법',
'[기계학습]- 과대적합(Overfitting)',
'[기계학습]- 과소적합(underfitting)',
'[기계학습]- TensorFlow',
'[기계학습]- 강화학습',
'[기계학습]- 역강화학습',
'[기계학습]- 모방학습',
'[기계학습][비지도 학습]- GAN',
'[기계학습][비지도 학습]- DCGAN',
'연합학습',
'딥러닝',
'[딥러닝]- 한계점',
'[딥러닝]- 역전파 알고리즘',
'[딥러닝]- 경사감소법(Gradient Descent)',
'[딥러닝]- 컨텍스트 딥러닝(Context Based Deep Learning)',
'[딥러닝]- ANN',
'[딥러닝]- CNN(Convolutional Neural Networks)',
'[딥러닝]- RNN(Recurrent Neural Networks)',
'[딥러닝]- LSTM(Long Short Term Memory)',
'[딥러닝]- GRUs',
'[딥러닝]- DNN(Deep Neural Network 심층망))',
'[딥러닝]- R-CNN',
'[딥러닝]- 경량 딥러닝 기술',
'[딥러닝]- 알고리즘 경량화',
'Q-러닝',
'모라벡의 역설(Moravec\'s Paradox)',
'몬테 카를로 트리 탐색(MCTS)',
'튜링테스트',
'해싱',
'추정이론(estimation theory)',
'가설검정 (Statistical Hypothesis Testing)',
'[가설검정]- 혼동행렬(오차행렬)',
'베이즈 정리',
'CCW(CounterClockWise) 알고리즘',
'BASE64',
);

var answer = answer.concat(
// 자료구조 
'# 암기 <br/>\
- 유형 : 단선비파 <br/>\
- 선 : 리연스큐덱 <br/>\
- 비 : 트글 <br/>\
- 파 : 순색직 <br/><br/>\
# 유형<br/>\
- 단순구조 : 정수,실수,문자,문자열 <br/>\
- 선형구조 : 리스트, 연결리스트(단순,이중,원형), 스택, 큐 덱<br/>\
- 비선형구조 : 트리(일반,이진(힙)), 그래프(방향, 무방향) <br/>\
- 파일 : 순차파일, 색인, 직접 <br/><br/>\
# 선형자료구조 : 데이터 저장시 연속적인 기억공간에 배정을 하는 자료구조 <br/><br/>\
# 비선형 자료구조 : 데이터 저장시 비연속적인 기억공간에 배정을 하는 자료구조\
',

// Trie
'# 정의 : 키값 직접 표현 않는 자료구조<br/>\
- 키 탐색을 위해 킷값을 직접 표현하지 않고 키를 구성하는 문자나 숫자의 순서로 킷값을 표현한 자료 구조. reTRIEval이라는 단어에서 유래<br/><br/>\
# 암기 <br/>\
- 구성 : 루브엘 <br/><br/>\
# 특징 <br/>\
- 초고속 검색 : 키값 부분 검색 가능, 리프 도달전 확인가능 <br/>\
- 연관배열 : 문자열의 동적집합, 연관배열에 사용 <br/>\
- 차수와 크기결정 : 차수(by 키값 문자수, 트라이크기 : by 키값의 기수와 키필드 길이) <br/>\
- 노드구성 : 노드는 키값 갖지X, 위치가 키역할, 노드 삽입/삭제시 분열과 병합X <br/><br/>\
# 구성 <br/>\
- Root Node : 시작점, Blank <br/>\
- Branch Node : Left / Right 2개 Child, 자식노드 포인터만 저장, 값 저장 X<br/>\
- Element Node : 데이터(문자열)저장, 문자열 대신 텍스트에서 위치로 지정 가능 <br/><br/>\
<img src = "./img/Trie.png" style = "max-width:100%; height:auto;">\
',

// 정렬 알고리즘
'# 정의 : 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘 <br/><br/>\
<img src = "./img/SortAL_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/정렬알고리즘_5.png" style = "max-width:100%; height:auto;">\
',

// Selection sort
'<img src = "./img/SelectionSort.png" style = "max-width:100%; height:auto;">\
',

// [정렬 알고리즘]- Bubble sort
'# 정의 : 인접 두 원소 자리바꿈 반복 정렬 알고리즘<br/>\
- 인접한 두 원소 차례대로 비교 및 자리 바꿈 반복 알고리즘 <br/><br/>\
# 특징 <br/>\
- 안정적 정렬 : 인접한 데이터 비교 <br/>\
- 제자리 정렬 : 별도 공간 상수개만 사용 <br/>\
- 내부 정렬 : 모든 데이터 주기억장치에 저장한 후 정렬하는 방식 <br/>\
- 수행시간 : 최선 O(n), 최악 O(n^2), 평균 O(n^2) <br/><br/>\
# Flag <br/>\
- 중간 과정 정렬 종료 <br/>\
- 값 전체에 대해 위치 교환 이루어지지 않은 경우 flag값 설정\
- Flag X : 전체 Loop <br/>\
- Flag O : 안쪽 Loop 키 값 교환시 flag 설정 <br/><br/>\
# Source Code <br/>\
1. Flag X <br/>\
<img src = "./img/BubbleSort_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Flag O <br/>\
<img src = "./img/BubbleSort_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 3교시 4번 \
',

// Insertion sort
'<img src = "./img/InsertionSort.png" style = "max-width:100%; height:auto;">\
',

// Shell sort
'<img src = "./img/ShellSort.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ShellSort_1.png" style = "max-width:100%; height:auto;">\
',
  
// Merge sort
'# 정의 : 분할과 정복이용 정렬 <br/>\
-  전체 원소를 하나의 단위로 분할한 후 분할한 원소를 다시 병합하는 정렬방식 <br/><br/>\
# 특징 <br/>\
- 시간복잡도 : O(nlogn) <br/>\
- 공간복잡도 : 배열값 기준 O(n) <br/><br/>\
# 절차 <br/>\
1. 분할 <br/>\
- 정렬 데이터를 반으로 나눔 <br/>\
- 나누어진 하위 집합 크기가 2이상이면 재귀 실행 <br/>\
2. 정복(병합) <br/>\
- 같은 집합인 하위데이터 집합 병합 정렬 수행 <br/>\
- 데이터 집합이 하나될 때까지 재귀 <br/><br/>\
# 코드 <br/>\
<img src = "./img/MergeSortCode.png" style = "max-width:100%; height:auto;">\
',

// 최단경로 알고리즘
'# 정의 : 두 정점사이 가장 짧은 경로<br/>\
- 정점(노드)과 간선으로 이루어진 그래프에서 두 정점 사이의 가장 짧은 경로 <br/><br/>\
# 유형 <br/>\
- 다익스트라 : 최소비용 경로설정, 욕심쟁이 기법 <br/>\
- A* : 휴리스틱 순서 탐색 <br/>\
- 플로이드 : 동적계획법 기반, 고차원 기법 <br/><br/>\
# 특징 : 모든 정점 1회 순회, 싸이클 생성 금지 <br/><br/>\
# 활용 <br/>\
- 다익스트라 : NW 라우팅 경로 설계 <br/>\
- A* : 2D 길찾기 <br/><br/>\
<img src = "./img/Floyd.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/AStar.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// [최단경로 알고리즘]- 다익스트라 알고리즘
'# 정의 : 모든 지점까지 최단거리 알고리즘 <br/>\
- 그래프 상에서 단일 출발점에서 모든 지점까지의 최단거리를 구하는 알고리즘, 최단거리 알고리즘인 Shortest Path Problem 중의 하나 <br/><br/>\
# 특징 <br/>\
- 시작 정점에서 다른 모든 정점으로의 최단 거리<br/>\
- 기반이론 : Greedy 알고리즘(최소비용의 인접 정점 선택) <br/>\
- 시간복잡도 : O(n^2) <br/><br/>\
# 절차 <br/>\
1. 거리값 설정 : d값 계산, 무한대 표시 <br/>\
2. 방문상태 설정 : 최단경로 정점 선택 <br/>\
3. 반복 <br/>\
4. 완료 <br/><br/>\
# 활용 <br/>\
- 네트워크 라우팅 경로 설계 : 링크스테이트 라우팅<br/>\
- OSPF(Open Shortest Path First) 라우팅 프로토콜 <br/>\
- 지능형 교통 분야 (GIS) <br/><br/>\
# 고려사항 <br/>\
- 최선 경로 여부 <br/>\
- 수행시간 분석 : 입력자료의 상태에 따라 수행시간의 편차가 큼 <br/>\
-> 해결책 : 알고리즘 평가시 최악,평균,최선 등으로 구분하여 수행능력을 분석<br/><br/>\
* GAS -> VAS <br/>\
<img src = "./img/Dijkstra.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Dijkstra_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 선택 정점에서 주변 노드의 비용 모드 재계산 후 최소 비용 노드 선택\
',

// [최단경로 알고리즘]- 플로이드 알고리즘
'# 정의 : 동적 계획법 접근, 최단경로 알고리즘 <br/>\
- 동적 계획법 접근으로, 그래프 상의 모든 두 정점을 잇는 경로의 최소 비용을 구하는 알고리즘<br/><br/>\
# 특징 : 모든 정점에서 다른 모든 정점으로의 최단거리 <br/>\
- 기반이론 : 동적프로그래밍 -> 더 빨리 수행 <br/>\
- 시간복잡도 : O(n^3)\
',

// [최단경로 알고리즘]- 벨만포드 알고리즘
'# 정의 : 가중치가 음수이더라도 최단 경로를 구할 수 있는 알고리즘<br/><br/>\
# 특징 : 시작 정점에서 다른 모든 정점으로의 최단거리, 간선의 가중치 음수 허용 <br/>\
- 시간복잡도 : O(VE) v = 정점, e = 간선 <br/>\
- 활용 : 네트워크 라우팅경로 설계(거리벡터 라우팅)\
',

// [최단거리알고리즘]- A* 알고리즘
'# 정의 : 해당 시점에서 특정영역 이동 시 목적하는 방향을 보고 다음 목적지 선택하는 휴리스틱 알고리즘<br/><br/>\
# 조건 : 최초 시작 정점이 주어짐, 최단경로 보장(단, h*(n) <= h(n)일 경우), 알고리즘 평가함수 사용 <br/><br/>\
# 특징 <br/>\
- 시작 정점에서 목표 정점으로의 최단거리 <br/>\
- 휴리스틱 함수 활용 <br/>\
- 최적경로 탐색위한 평가 함수 사용 <br/>\
- 시스템 자원 가장 적게 사용 <br/>\
- f^(n) = g(n) + h^(n) => g(n) : 출발노드로부터 노드 n까지의 경로비용<br/>\
- h^(n) : 노드 n으로부터 목표 노드 까지의 예측 경로 비용 <br/><br/>\
# 활용 : 네비게이션, 전략시뮬레이션 게임에서의 길찾기 <br/><br/>\
# 고려사항<br/>\
- 컴퓨팅 리소스 낭비, 경로 존재 여부 사전 파악 불가 <br/>\
- 특정 레벨단위로 다익스트라 알고리즘 교차적용하여 연산 수를 줄이고 비교항목을 최소화하는 하이브리드 탐색 알고리즘의 도입 가능 \
',

// 최소신장트리
'# 정의 : Minimum Spanning Tree, MST <br/>\
- 신장트리, 그래프내의 모든 정점이 사이클이 없이 연결되어 있는 트리<br/><br/>\
# 원칙 <br/>\
- 비용 값이 적은 간선부터 우선 선택하여 트리를 구성 <br/>\
- 사이클 형성 금지, 간선수가 n-1개가 되면 중단 (모든 정점 1회방문) <br/><br/>\
# 활용 <br/>\
- 도로건설 : 도시모두 연결하면서 길이 최소<br/>\
- 통신 : 전화 케이블망 <br/>\
- 배관 : 파이프 총 길이 최소 <br/><br/>\
# 유형 <br/>\
- 프림 : 선택 정점 집합과 연결된 최소 간선 선택 <br/>\
- 크루스칼 <br/><br/>\
<img src = "./img/최소신장트리_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/최소신장트리_2.png" style = "max-width:100%; height:auto;">\
',

// [최소신장트리]- 크루스칼 알고리즘
'# 정의 : 최초의 정점 없이, 최소간선을 하나씩 추가하여 MST를 생성해 나가는 알고리즘 <br/><br/>\
# 코드 <br/><br/>\
<img src = "./img/Kruscal_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Kruscal_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Kruscal_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 : 욕심쟁이 기법, 시간복잡도 O(|V|^2)\
',

// [최소신장트리]- 프림 알고리즘
'# 정의 : 시작 정점에서 부터 출발하여 비용간선트리 집합을 단계적으로 확장하는 방식<br/><br/>\
# 코드 <br/>\
<img src = "./img/Prim_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 (E = 간선수, V = 정점수)<br/>\
1. 욕심쟁이 기법 <br/>\
2. 평균복잡도 <br/>\
- O(V^2) <br/>\
- 이진합 이용시 : O(ElogV)<br/>\
- 피보나치 힙 이용시 : O(E+VlogV) => 가장 빠름 <br/><br/>\
# 원리 <br/>\
- 임의 정점 선택 <br/>\
- 연결 가능 정점 중 최소 비용 선택 & 선택가능 집합에서 제외 <br/>\
- 다른 정점 가는 비용과 비교 후 더 작으면 갱신 <br/>\
- n(정점수)-1 반복\
',

// AVL Tree
'# 정의 : 균형인수, 회전기법, 이진 탐색트리 <br/>\
- AVL = Adelson-Velskii, Landis <br/>\
- 1962년 G.M. Adelson-Velskii와 E.M. Landis가 논문 "An algorithm for organization of information"에서 발표 <br/>\
- 균형잡힌 이진 탐색 트리이며 n개의 원소에 대하여 O(log n)의 시간 복잡도, O(n)의 공간복잡도 <br/>\
- 균형인수(Balance factor)가 2레벨 이상인 경우 회전(Rotation)기법을 이용, 높이 균형을 유지 <br/><br/>\
# 구성요소 <br/>\
1. 회전(Rotation) <br/>\
- 이진 트리의 균형을 유지하기 위한 기법 <br/>\
- LL회전, RR회전, LR회전, RL회전, L회전, R회전 <br/>\
- 종류 : 단순회전, 이중회전 <br/><br/>\
2. 균형인수(Balance factor) <br/>\
- 좌 지식노드와 우 자식노드의 높이 차이 <br/>\
- -1 ~ 1의 범위 유지 <br/><br/>\
3. 트리높이(Tree Height) <br/>\
- 트리에 속한 노드의 최대 레벨 <br/><br/>\
4. 트리레벨(Tree Level) <br/>\
- 동일한 높이에 속한 노드의 집합 <br/><br/>\
# 회전 종류 <br/>\
<img src = "./img/AVL.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/AVL_LL.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/AVL_RR.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/AVL_LR.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/AVL_RL.png" style = "max-width:100%; height:auto;"><br/><br/>\
',
  
// 기계학습 종류
'<img src = "./img/ML_Model.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 아이리포 23회 3교시 6번\
',

// [기계학습]- 유전자 알고리즘
'# 정의 : 자연계 진화 현상 모방 최적해 탐색 알고리즘 <br/>\
- 자연계의 진화 현상을 모방한 최적해 탐색 알고리즘으로써, 제한된 시간 안에서 효율적으로 복잡한 문제의 해결을 위해 사용되는 알고리즘.<br/><br/>\
# 암기 <br/>\
- 특징 : 집확적적성 <br/>\
- 구성 : 개유세연적 <br/>\
- 절차 : 선교돌대개적 <br/>\
-> 선 : 적순토엘 <br/>\
-> 교 : 단복일 <br/>\
-> 돌 : 정동 <br/><br/>\
# 특징 <br/>\
- 집합기반 <br/>\
- 확률기반 <br/>\
- 적합도함수만을 사용 <br/>\
- 적용용이 <br/>\
- 성능우수 <br/>\
- 병렬성 : 개체군 안 여러개체들 동시 탐색 공간 다양한 방향 탐색 <br/>\
- 비선형 문제 <br/><br/>\
# 구성 <br/>\
- 개체군(Initial Population) : 입력값 집합 > 이진인코딩, Value 인코딩, 트라인코딩 <br/>\
- 유전자형(Gene) : 개체군의 유전정보 표현, 기호열 > 이진스트링, 상수 스트링, 실수 스트링 <br/>\
- 세대(Generation) : 유전자들의 생성과 소멸을 담은 하나의 주기 <br/>\
- 연산 : 최적해를 찾기 위한 유전자 조작 유전자 진화 과정 > 선택, 교배(교차), 돌연변이 <br/>\
- 적합도 함수(Fitness Function) : 최적화하고자 하는 각 개체가 주어진 문제에서 얼마나 적합할지를 평가하기 위한 기준 함수 <br/><br/>\
# 절차(Cycle) <br/>\
- 선택(Selection) : 적합도 비례전략, 순위 전략, 토너먼트 선택 전략, 엘리트 보전 전략 <br/>\
- 교배(Crossover) : 단순교차, 일점교차, 균등교차, 산술교차 <br/>\
- 돌연변이(Mutation) : 정적변이, 동적변이 => 재생산 <br/>\
- 대치(Subsitution) <br/>\
- 개체군(Population) <br/>\
- 적합도함수(Fitness Evaluation)<br/><br/>\
# 유전자 알고리즘 흐름 <br/>\
1. 초기 집합 생성 <br/>\
2. 적합도 계산 <br/>\
3. 자손생성 <br/>\
4. 자손적합도 계산(선.교.변.대) <br/>\
계산. 종료조건 판결(참/거짓) <br/>\
6. 이동 <br/>\
7. 종료 <br/><br/>\
# 자손 적합도 계산에서 주로 사용하는 연산 <br/>\
1. 선택 : 룰렛 휠 선택, 토너먼트 선택, 순위 기반 <br/>\
2. 교차 : 1점교차, 다점교차, 균등교차, 싸이클 교차, 순서 교차, PMX(Partially Matched Crossover), 산술적교차, 휴리스틱 교차, 간선 재결합 <br/>\
3. 변이 : 1/100, 0.5, 100 등 작은 확률로 발생시킴 <br/>\
4. 대치 : 부모세대의 가장 우수한 해를 보존\
',

// [기계학습]- 신경망 알고리즘
'# 정의 : 사람 두뇌 모델, 처리 알고리즘 <br/>\
- 사람의 두뇌를 모델로 하여 여러 정보를 처리하는데 있어서 두뇌와 비슷한 방식으로 처리하기 위한 알고리즘 <br/><br/>\
# 구성 <br/>\
- 노드 : 전달자 역할 <br/>\
- 층 : 입력층, 은닉층(학습,전파,활성화), 출력층 <br/>\
- 전달(활성화)함수 <br/>\
- 가중치 : 연결강도-활성함수 입력값 <br/><br/>\
# 학습유형 <br/>\
1. 이진 입력 <br/>\
- 지도 : Hopfield NW <br/>\
- 비지도 : ART Model <br/>\
2. 실수 입력 <br/>\
- 지도 : 퍼셉트론, 다중 퍼셉트론 <br/>\
- 비지도 : 경쟁학습 <br/><br/>\
# 알고리즘 유형 <br/>\
1. Feed Forward Neural Network <br/>\
- 전방전달 신경망 <br/>\
- 입>은>출 <br/>\
- 이진구조, 퍼셉트론, 시그모이 등 <br/>\
2. BackPropagation <br/>\
- 역전파 <br/>\
- 출>은 <br/>\
3. Rcurrent Neural Network <br/>\
- Context unit 부분 통해 hidden node 들과 양방향 통신 통해 output node 만듦\
',

// [기계학습]- Feed Forward Neural Network
'# 정의 : 일방향 전달 방식 인공 신경망 / 은닉층 / 노드간 사이클 x <br/>\
- 은닉층에서 노드 간에 싸이클을 형성하지 않고 일방향으로 정보를 전달하는 방식의 인공 신경망 <br/><br/>\
* 라이지움 86회 1교시 6번 \
',

// [기계학습]- 분석모델평가
'# 정의 : 데이터 마이닝 모델 타당성 평가 검증 방법 <br/>\
- 데이터 마이닝 통해 생성된 모델의 에러율 예측 통해 모델의 타당성 평가 검증 방법 <br/><br/>\
# 암기 : PCB <br/><br/>\
# 유형 <br/>\
- Train Validation : 훈련집합, 테스트집합, 검증집합 통해 정확도 검증하는 기법, Training Set(모델학습), Validation Set(모델선택), Test Set(모델평가) <br/>\
- Cross Validation : 데이터를 K개의 집합으로 나누어 검증한 결과의 평균치로 모델 검증하는 방법, 재 샘플링기법, Training Set(모델학습), Test Set(모델평가) <br/>\
- BootStrap : 전체 데이터에서 무작위 복원추출로 훈련집합 생성하여 검증하는 방법, 재 샘플링 기법 <br/>\
-> Bootstrap Sample T회(중복허용) 반복 측정 후 평균값으로 최종평가, Training Set(오류예측) <br/><br/>\
<img src = "./img/분석모델평가.png" style = "max-width:100%; height:auto;">\
',

// [기계학습]- 분류모델생성알고리즘
'# Bagging : Bootstrap 결합 예측 모형 알고리즘 <br/>\
- 주어진 데이터에서 여러개의 Bootstrap 자료를 생성하고, 각 자료를 모델링 한 후 결합(Bootstrap Aggregating)하여 최종 예측 모형을 만드는 알고리즘 <br/>\
1) Row 데이터에서 Bootstrap 데이터 추출 <br/>\
2) 추출 반복하여 n개의 데이터 생성 <br/>\
3) 각 데이터 모델링하여 모델 생성 <br/>\
4) 단일모델을 결합하여 bagging 모델 생성 <br/><br/>\
# Boosting : 가중치 적용 예측모형 알고리즘<br/>\
- 잘못 분류된 개체들에 가중치를 적용하여 새로운 분류 규칙을 만들고, 이 과정을 반복해 최종 예측 모형을 만드는 Boosting(변형) 알고리즘 <br/>\
1) Row 데이터에 동일 가중치로 모델 생성 <br/>\
2) 생성 모델 인한 오분류 데이터 수집 <br/>\
3) 오분류 데이터에 높은 가중치 부여 <br/>\
4) 이 과정을 반복해 모델의 정확성 향상 <br/><br/>\
# 암기 <br/>\
- 절차 <br/>\
-> Bagging : 추데모결 <br/>\
-> Boosting : 모오가반 <br/><br/>\
<img src = "./img/분류모델생성알고리즘_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/분류모델생성알고리즘_2.png" style = "max-width:100%; height:auto;">\
',

// [기계학습]- 앙상블 학습법
'# 정의 : 단일 학습모델 성능보완 <br/>\
- 주어진 데이터로부터 여러개의 모델을 학습한 다음, 예측시 여러 모델의 예측 결과들을 종합해 사용하여 정확도를 높이는 방법 <br/><br/>\
# Overview <br/>\
<img src = "./img/AL_16_1.PNG" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/EnsembleOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 종류 <br/>\
1. Voting : 학습결과 종합 <br/>\
<img src = "./img/EnsembleVoting.png" style = "max-width:100%; height:auto;"><br/>\
* KNN : K-Nearest Neighbor <br/>\
* SVM : Support Vector Machine <br/><br/>\
2. Bagging : 반복적 샘플링 투표 <br/>\
<img src = "./img/EnsembleBagging.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/EnsembleRandomForest.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Boosting : 오분류 데이터 가중치 <br/>\
<img src = "./img/EnsembleBoosting.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 아이리포 23회 1교시 3번\
',

// [기계학습]- 과대적합
'# 정의 : 모델이 훈련 데이터에 너무 잘 맞지만 일반성이 떨어지는 경우 발생',

// [기계학습]- 과소적합
'# 정의 : 모델이 너무 단순해서 데이터의 내재된 구조를 학습하지 못할 때 발생',

// TensorFlow 
'# 정의 : 머신러닝 오픈소스 라이브러리 <br/>\
- Google에서 만든, 딥러닝 프로그램을 쉽게 구현할 수 있도록 다양한 기능을 제공해주는 라이브러리 <br/>\
<img src = "./img/TensorFlowAPI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Tensor : 다차원 배열 데이터 표현 방식 <br/>\
- Dataflow Graph : 텐서 형태 데이터 딥러닝 연산 <br/>\
- Tensor Board : 딥러닝 학습과정 추적 <br/>\
- Data Model : 미리 학습된 데이터 목록 <br/><br/>\
* 122회 1교시 6번\
',
  
// 강화학습
'# 정의 : Reinforcement Learning <br/>\
- Agent가 어떤 상태에서 행동을 수행할 때마다 그 성능에 대한 피드백을 제공하는 보상 함수를 통해 학습하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ReinforcementLearning.png" style = "max-width:100%; height:auto;"><br/>\
- 주어진 보상 함수를 통해 최적 정책을 계산 <br/><br/>\
* 라이지움 84회 4교시 4번\
',
  
// 역강화학습
'# 정의 : Inverse Reinforcement Learning <br/>\
- Agent의 정책이나 행동 이력을 통해 그 행동을 설명하는 보상 함수를 구하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/InverseReinforcementLearning.png" style = "max-width:100%; height:auto;"><br/>\
- 최선의 행동 이력(최적 정책)을 입력으로 보상 함수를 찾음 <br/><br/>\
# 비교 <br/>\
<img src = "./img/ReinforceInverseCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 84회 4교시 4번\
',
  
// 모방학습
'# 정의 : Imitation Learning <br/>\
- 학습자로 하여금 최상의 성능을 달성하기 위해 전문가의 행동을 모방하려고 하는 순차적 작업 <br/><br/>\
# 특징 <br/>\
- 직접적 보상 요구 x <br/>\
- 정책 직접적 설계 <br/><br/>\
# 종류 <br/>\
1. 행동복제(시출정학생) : 전문가를 통해 쌍으로 이뤄진 상태 및 동작 시퀀스 시연 궤적을 수집하여 정책을 지도하는 알고리즘 <br/>\
<img src = "./img/BehaviorCloning.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 견습학습(기IRL기) : 전문가의 시연으로부터 보상 함수를 만들고 계산된 보상 함수를 통해 최적의 정책을 학습하는 알고리즘 <br/>\
<img src = "./img/ApprenticeshipLearning.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 84회 4교시 4번\
',
  
// GAN
'# 정의 : 대립 통한 훈련학습 모델 <br/>\
- Generative Adversarial Network <br/>\
- 서로 대립하는 Generator, Discriminator 두 개의 네트워크를 생성하여 대립 과정 통해 성능을 강화하는 비지도 학습 모델 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/GAN.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 신경망 <br/>\
- 생성자 : 샘플 Data 생성 <br/>\
- 구별자 : 입력된 Data Fake, Real 판별<br/><br/>\
2. 이론 <br/>\
- 내쉬 균형 : 수학적 균형점 <br/><br/>\
3. 학습 설명 <br/>\
- 반복 학습 : 확률 분포에 맞춰 반복<br/>\
- 판별 불가 모델 생성 : 확률분포 차이x -> 분류모델 학습 모델 반복 진행 <br/><br/>\
4. 기초자료 <br/>\
- Real Images : 생성, 실제 비교 <br/><br/>\
* 아이리포 23회 3교시 6번\
',
  
// DCGAN
'# 정의 : 안정적 학습을 위한 GAN <br/>\
- Deep Convolution GAN <br/>\
- GAN의 Fully Connected layer를 제거하고 Convolution Layer와 배치 정규화 구조를 사용하여 안정적인 학습이 가능한 GAN 알고리즘 <br/><br/>\
# 구성요소 <br/>\
1. 네트워크 구조 <br/>\
- Convolution : 특징 추출 합성곱 / Feature Map, stride, padding <br/>\
- Fractional-Strieded Convolution : Input Padding 이후 Convolution 수행 <br/>\
- 배치 정규화 : 활성화 함수 값 정규분포화 (평균 0, 분산 1) <br/><br/>\
2. 활성화 함수 <br/>\
- ReLu : 생성자 모든층 / y = max(0,z) <br/>\
- Tanh : 마지막 결과 도출 <br/>\
- Leaky ReLu : 판별자 모든층 / f(x) = max(0,01x, x) <br/><br/>\
* 아이리포 23회 3교시 6번\
',

// 연합학습
'# 정의 : 데이터가 아닌 학습모델을 취합해 AI를 구현하는 방식 <br/>\
- 구글이 처음 제시한 모델로, 사용자 단말기에서 데이터 학습이 이뤄지고, 이러한 학습 결과는 중앙에 모여져 학습 결과를 재취합해 AI를 구현하는 인공지능 기술 <br/>\
- 기존처럼 데이터를 중앙에 모아서 학습하는 것이 아니라 사용자 기기에서 학습한 모델을 중앙으로 취합하는 학습 모델 <br/><br/>\
# 처리방식 비교 <br/>\
<img src = "./img/Federated_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Federated_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 1교시 11번 \
',

// 딥러닝 
'# 정의 : 기계학습 기반 인공지능 알고리즘 / 인간신경망 / 데이터 학습<br/>\
- 인간 신경망을 묘사하여, 데이터를 학습하는 기계학습 기반의 인공지능 알고리즘 <br/>\
- 축적된 데이터를 통계학과 학률이론을 이용하여 최적해를 구하는 방식으로 지능을 구현하는 방식 <br/><br/>\
# 암기 <br/>\
- 생 : RDD <br/>\
- 판 : DCR <br/><br/>\
# 배경 <br/>\
- 알고리즘 : Overfitting 문제 - Drop-out 알고리즘으로 극복<br/>\
- 확률,통계 : 베이즈 이론 기반, 수학 이론 고도화 <br/>\
- 빅데이터 : 모바일 퍼스트 도래, 스마트폰 학습데이터 증가 <br/>\
- 컴퓨팅파워 : GPGPU, 분산처리시스템, HPC등 하드웨어 성능 발전 <br/>\
- Tranining Data 부족 <br/>\
- 사라지는 경사 현상 <br/>\
=> 빅데이터, HW 기술 발달, 사전학습, 조기멈춤, Dropout <br/><br/>\
# 역사 : 헤비안학습 > 퍼셉트론 > 역전파 알고리즘 > SVMs > e딥러닝 <br/><br/>\
# 알고리즘 <br/>\
1. 생성모델 <br/>\
- RBM : DBN기본 개념 <br/>\
- DBN : 필기체 <br/>\
- DQN : 감성 <br/><br/>\
2. 판별모델 <br/>\
- DNN : 자연어, 음성인식 <br/>\
- CNN : 영상, 이미지 <br/>\
- RNN : 음성 <br/><br/>\
- DNN : 심층신경망, 입력/출력 계층 사이 복수 은닉계층 구성 인공신경망, 자연어처리, 음성인식 <br/>\
- CNN : 합성곱신경망, 최소한의 전처리를 사용하도록 설계된 다계층 퍼셉트론의 한 종류, 영상 분석 <br/>\
- RNN : 순환신경망, 인공신경망 구성 유닛 사이의 연결이 Directed cycle 구성 신경망, 음성인식 <br/>\
- RBM : 제한볼츠만머신, 볼츠만 머신에서 층간 연결을 제외시킨 모델(볼츠만 머신은 Fully Connected 방식으로 전체 layer가 연결되어 있음) <br/>\
- DBN : 심층신뢰신경망 : 기계학습 그래프 생성모형으로 잠재변수의 다중 계층 이루어진 심층 신경망, RBM 이용, 영상, 음성, 자연어 처리 등 전 분야 <br/>\
- DQN : 심층 Q네트워크, 심층 강화 학습 통해 인간 수준 제어 가능하게 한 신경망, 하이브리드 디자인 <br/><br/>\
# 활용 <br/>\
- VPA : IBM 왓슨, 애플 시리, 구글 나우, MS 코타나, 아마존 에코 <br/>\
- 지능형 검색 : 바이두 딥스피치(RNN 이용) <br/>\
- 페이스북 딥페이스 <br/>\
- 번역 : ETRI 지니 <br/>\
- 자율주행차 : 애플 CarPlay(자동차 전용OS), 아우디 RS7기반 자율주행자동차 <br/><br/>\
# 비교 <br/>\
- 기계학습 : 특징 추출기를 사람에 개발해야 하고 학습하는 데이터에 따라 매번 다시 개발되어야 하여 비효율적 <br/>\
- 딥러닝 : 학습 모델에 특징추출과 분류기가 통합 <br/><br/>\
<img src = "./img/DeepLearning.png" style = "max-width:100%; height:auto;">\
',

// [딥러닝]- 한계점 
'# 한계점 <br/>\
1. Dataset 편향성 <br/>\
- Google, Open Image Dataset 객체별 보유 영상 <br/>\
- 인간의 필요에 의한 편향적 왜곡 (Garbage In, Garbage Out) <br/><br/>\
2. 설명 가능성 부재 <br/>\
- Black Box 모델 채택 인한 내부구조 설명 어려움 <br/>\
- Mission Critical 영역 활용 어려움 <br/><br/>\
3. 확장성 부재 <br/>\
- 폴라니의 역설 : AI는 암묵지를 학습하는 수준에 이르지 못함 <br/>\
- 모라벡의 역설 : 사람에게 쉬운 것은 인공지능에겐 어렵다 <br/><br/>\
4. 효율성 부재 <br/>\
- 인간의 뇌 (1000억개 뉴런, 100조개의 시냅스망 신경처리 20와트 수준) <br/>\
- 인간 신경망 모방 -> 20만 와트 전기 필요 <br/><br/>\
5. 가치전도 <br/>\
- 인간 고유 가치 체계 역행 우려 <br/>\
- 부정적 학습 위험성 <br/><br/>\
# 해결기술 <br/>\
1. Dataset 편향성 해결기술, GAN<br/>\
<img src = "./img/GAN_0.PNG" style = "max-width:100%; height:auto;"><br/><br/>\
- Generative Adversial Networks, 생성적 적대 신경망 알고리즘 <br/>\
- 거짓 이미지 생성 대립 통한 정확한 결과 도출 알고리즘 <br/><br/>\
2. 결과 시각화 기술(설명가능성 부재) <br/>\
<img src = "./img/ClassActivation_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 영상 인식시 판단에 중요한 부분 시각화 강조 설명 <br/><br/>\
* 라이지움 86회 4교시 1번 \
',

// [딥러닝]- 역전파 알고리즘
'# 정의 : 다층 퍼셉트론 학습에 사용되는 통계적 기법 <br/><br/>\
# 특징 : 지도 학습을 이용, 출력층의 오차를 역전파하여 은닉층을 학습함으로써 다층 퍼셉트론 문제 해결 <br/><br/>\
# 절차 <br/>\
- 학습 벡터로부터 실제 출력값을 출력 <br/>\
- 목적값과 실제 출력값의 차이인 오차를 계산하여 각 층에 전달하는 전파(Propagation) <br/>\
- 전파된 오차이용 가중치 수정 <br/><br/>\
<img src = "./img/역전파AL.png" style = "max-width:100%; height:auto;">\
',

// [딥러닝]- 경사감소법
'# 정의 : 여러개 은닉충 가지는 피드포워드 신경망 학습 대표적 알고리즘<br/>\
- 여러개의 은닉층을 가지는 피드포워드 신경망을 학습시킬 때 사용되는 대표적 알고리즘으로 미분의 개념을 최적화 문제에 적용, 에러 함수의 local minimum을 찾는 방법<br/><br/>\
',

// [딥러닝]- 컨텍스트 딥러닝
'# 정의 : 감정, 상황적 맥락 이해<br/>\
- 컴퓨터가 스스로 인간의 인지 능력을 확보하는 기술, 컴퓨터에게 사람의 감정과 상황적 맥락을 이해시키는 기술 <br/>\
- 분석 통해 On Demand 서비스 제공 위해 딥러닝 기술 이용, 전자정부 접목위해 한국정보사회진흥원이 제시한 2015 전자정부 IT 10대 트랜드<br/><br/>\
# 암기 : 학입이추 <br/><br/>\
# 절차 <br/>\
- 학습 데이터 구성 : 어휘별 유사도 측정 <br/>\
- 문장 입력 : 문장 형태소 분석 <br/>\
- 문장 이해 : TF 기반 Candidate Context를 탐색 <br/>\
- 컨텍스트 추출 : 확장사전 및 패턴 기반 <br/><br/>\
# 목적 <br/>\
1) 사물인터넷, 빅데이터, Open Data 서비스 연계 <br/>\
2) 국가 재정약화, 인구노령화, 경기침체, 스타트업 육성 어려움등 국가 다양한 과제 해결 <br/>\
3) 다양한 개인의 의도, Contet수집 -> 데이터로 의미있는 정보 생산, 공공데이터 개방 통한 가치 창출 기회 제공 -> 문제점 조기 파악, 선제적 대응\
',

// [딥러닝]- ANN
'# 정의 : 사람 신경망 모방 기계학습 알고리즘<br/>\
- Artificial Neural Network <br/>\
- 인공신경망, 사람의 신경망 원리와 구조를 모방하여 만든 기계학습 알고리즘 <br/><br/>\
# 구성요소 : 자극,신호(Input Data) / 임계값(Weight) / 행동(Output)<br/><br/>\
# 문제점<br/>\
1) 학습과정에서 파라미터 최적값을 찾기 어려움. <br/>\
2) Overfitting 에 따른 문제 (학습시간이 너무 느리다) <br/>\
<img src = "./img/AL2_1_1.PNG" style = "max-width:100%; height:auto;">\
',

// [딥러닝]- CNN 
'# 정의 : 영상 적용 인공신경망의 종류 <br/>\
- Convolutional Neural Networks <br/>\
- 컨볼루션 신경망은 영상에 적용이 용이하도록 만들어진 인공신경망의 종류이며, 컨볼루션 레이어와 폴링 레이어 구조를 가진 알고리즘 <br/>\
- 하나 또는 여러개의 컨볼루션 레이어와 그 위에 올려진 일반적인 인공 신경망 레이어들로 이루어져 컨볼루션 레이어에서 전처리를 수행하는 구조를 가진 인공신경망 <br/><br/>\
# 특징 <br/>\
- 2차원 입력 데이터에 적합한 구조(영상, 음성) <br/>\
- 3-tier Layer 구성 : Convolution Layer, Pooling Layer, Classifier <br/>\
- 전처리(Pre-Processing) 중요 -> 최적의 Feature map 구성 위한 Convolution Filter 학습 모델 <br/>\
- 최대한 작은 Complexity를 가지면서 우수한 filter를 표현하기 위한 CNN의 핵심 아이디어 -> Sparse interactions, Parameter sharing, Equivalent representation <br/><br/>\
# 구성 (1,2 반복) <br/>\
1) Convolution Layer : 특징추출, 다수필터 통과, 다수 특징맵(Featured Map)형성, Convolution 연산(합성곱), Relu(Rectified Linear Units)함수, Padding <br/>\
2) Pooling Layer : Subsampling, 추상화, 자원 축소, Max pooling, Average Pooling <br/>\
3) Feedforwad Layer : 분류, Fully Connected MLP <br/><br/>\
# 사례 : 구글포토(검색DB + 오픈이미지데이터셋 활용, 초인간적 이미지 인식(Super Human Recognition) 연구방향)<br/><br/>\
<img src = "./img/CNN.png" style = "max-width:100%; height:auto;">\
',

// [딥러닝]- RNN
'# 정의 : Directed Cycle 구성 신경망 <br/>\
- 인공신경망을 구성하는 유닛 사이의 연결이 Directed Cylce을 구성하는 신경망 <br/><br/>\
# 특징 <br/>\
- 연속 입력 데이터 적용 용이 (음성,언어인식)<br/>\
- 연속 정보 흐름 반양 : 과거 학습 정보 지식이 후행 영향(전행 히든 노드 값 저장 후 후행 입력값으로 사용)<br/><br/>\
# 절차 <br/>\
- Recurrent Weight : 진행결과 후행 활용<br/>\
- Sequential data 학습 : 문맥 이해 <br/>\
- BPTT(Back-Propagation Through Time) : 오류 역전파<br/><br/>\
# 한계 <br/>\
- 장기 의존성 문제(Problem of Long-Term Dependencies) <br/>\
- 오류역전파 거리 늘어나면서 Grant값 폭증/사라짐(사라지는 경사현상)<br/><br/>\
# 대응 : LSTM(Long Short Term Memory) 및 GRU(Gated Recurrent Unit)<br/><br/>\
<img src = "./img/RNN.png" style = "max-width:100%; hegiht:auto;">\
',

// LSTM
'# 정의 : 장기 기억 가능 알고리즘 <br/>\
- 장기 의존성 문제를 극복하고자 설계된 특별한 종류의 순환 신경망으로 오랫동안 정보를 기억 가능 알고리즘 <br/><br/>\
# 구성 : 상호작용위한 4개층 포함 모듈 <br/>\
- 신경망층(Neural Network Layer) <br/>\
- 요소별 연산(Pointwise Operation) <br/>\
- 벡터 전달(Vector Transfer) <br/>\
- 연관/복사(Concatenate/Copy) <br/><br/>\
# 동작방식 : 4개의 층간 gate구조로 정보를 수정(시그모이드 함수)하거나 그냥 흘러 보내 정보 장기간 보관 가능 <br/>\
=> 셀 스테이트(cell state), forget gate layer, input gate layer, update cell state, output gate layer <br/><br/>\
<img src = "./img/LSTM.png" style = "max-width:100%; hegiht:auto;">\
',

// [딥러닝(Deep Learning)]- GRUs
'# 정의 : LSTM 변형 알고리즘 <br/><br/>\
# 특징 : Update Gate, Reset Gate추가하여 과거의 정보를 어떻게 반영할 지 결정 <br/><br/>\
# Update Gate : 과거 상태를 반영하는 Gate <br/><br/>\
# Reset Gate : 현시점 정보와 과거시점 정보의 반영여부 결정 <br/><br/>\
# 장점 : LSTM 한계 극복 <br/><br/>\
# 단점 : 메모리와 결과값의 컨트롤이 불가능\
',

// [딥러닝]- DNN
'# 정의 : 여러개 은닉층 인공신경망 <br/>\
- 입력층(Input Layer)과 출력층(Output Lyaer)사이에 여러개의 은닉층 (Hidden Layer)들로 이뤄진 인공신경망 (Artifical Neural Network, ANN) <br/><br/>\
',

// [딥러닝]- R-CNN
'# 정의 : 객체 탐색 기술 <br/>\
- Region CNN, 영상 속의 어떤 객체(Label)가 어디에(x, y) 어느 크기로(w, h) 존재하는지를 찾는 기술. 객체탐지 딥러닝 기술중의 하나. R-CNN, Fast R-CNN, Faster R-CNN, SSD가 있음.',

// 경량 딥러닝
'# 정의 : 알고리즘 효율화, 경량화 기술 <br/>\
-  알고리즘 자체를 적은 연산과 효율적인 구조로 설계하여, 기존 모델의 정확도는 최대한 유지하면서 기존 모델 대비 효율을 극대화하기 위한 딥러닝 경량화 기술 <br/><br/>\
# 암기 <br/>\
- 모: Res(파라x), Squeeze(합성곱 필터 감소), Dense(Feature Map 쌓기) <br/>\
- 합 : Mobile( 채널 합성곱 -> 픽셀 합성곱 나눔), Shuffle (입력부 개선) <br/>\
- 자 : NetAdapt(Budget 여러개,점진적), MNasNet(모바일, 정확 속도 균형) <br/><br/>\
# 필요성 <br/>\
- Need : IoT Device 확대, Edge Computing, 지능형 Device Needs 확대 <br/>\
- Solution : 기존 학습의 정확도 유지, 연산 간소화 및 복잡도 감소 <br/>\
- Effect : 학습 모델의 손쉬운 적용, 지연시간 감소, 네트워크 트래픽 감소 <br/><br/>\
# 종류 (모합자)<br/>\
1. 모델 구조 변경 기술 <br/>\
- ResNet : 문제의 정의를 바꾸어 파라미터 없이 바로 연결 <br/>\
- SqueezeNet : 합성곱 필터 감소, Fire Module 기법 <br/>\
- DenseNet : Feature map 쌓아가는 기법 (기존 : 더하기) <br/><br/>\
2. 효율적 합성곱 필터 기술 <br/>\
- MobileNet : 채널 단위 합성곱 후, 한 픽셀에 대해 합성곱 나눔 <br/>\
- ShuffleNet : 입력부 정보 연산 및 흐름 개선 방법 <br/><br/>\
3. 경량모델 자동탐색 기술 <br/>\
- NetAdapt : Budget 여러개 나누어 일정만큼 만족하는 조건 점진적 탐색 방식 <br/>\
- MNasNet : 모바일 환경 탐색, 속도 정보 명시적 포함, 정확도 속도 균형 탐색 <br/><br/>\
* KPC 91회 2교시 2번\
',

// 알고리즘 경량화 
'# 정의 :  모델 크기 경량화 기법 <br/>\
- 기존 알고리즘의 불필요한 파라미터를 제거하거나, 파라미터의 공통된 값을 공유하거나 파라미터의 표현력을 잃지 않으면서 기존 모델의 크기를 줄이는 알고리즘 경량화 기법 <br/><br/>\
# 종류 (압지하)<br/>\
1. 모델 압축 기술 <br/>\
- 가중치 가지치기 : 작은 가중치 0으로 설정 <br/>\
- 이진화 : 가중치 값 이진 형태 변환 <br/><br/>\
2. 지식 종류 기술 <br/>\
- 앙상블 기법 : 학습된 다수의 큰 네트워크 -> 작은 하나의 네트워크에 지식 전달 <br/><br/>\
3. 하드웨어 가속화 기술 <br/>\
- TPU, VPU, GPU : 벡터/행렬 연산 병렬 처리 연산 전용 하드웨어 기술 <br/><br/>\
* KPC 91회 2교시 2번\
',

// Q-러닝 
'# 정의 : Q함수 강화학습 기법 <br/>\
- 주어진 상태에서 주어진 행동을 수행하는 것이 가져다 줄 효용의 기대값을 예측하는 함수인 Q 함수를 학습하는 강화학습기법',

// 모라벡의 역설
'# 정의 : 인간 어려움, 컴퓨터 쉬움 / 인간 무의식 쉬움, 오히려 어려움 <br/>\
- 로봇 공학자 한스 모라벡(Hans Moravec)이 주장한 것으로 인간에게 어려운 수학 연산은 쉽게 컴퓨터가 처리하지만, 인간이 무의식적으로 수행하는 쉬운 문제는 오히려 처리하기 어려운 현상<br/><br/>\
# 발생원인 <br/>\
- 학습방법 차이 (경험 기반, 계산 기반) <br/>\
- 정의 내리기 어려움 <br/><br/>\
# 현황 <br/>\
- 약한 인공지능 : 주어진 조건/환경 따라 최적결정/대안찾는 인공지능 => 모라벡 역설 근거하여 안면인식, 가치판단 불가 <br/>\
- 강한 인공지능 : 독립된 자아의식 가지고 스스로 가치 판단하는 인공지능 => 모라벡 역설 반박하여 안면인식, 가치판단, 독자적 의사결정 가능 단계 진입<br/><br/>\
# 극복 방안 <br/>\
- Deep Learning <br/>\
- Computing Power \
',

// 몬테 카를로 트리 탐색
'# 정의 : 트리 시뮬레이션 선택 방법 <br/>\
- 트리에서 무작위 시뮬레이션을 통해 최선의 선택(Optimal Decision)을 내리기 위한 방법 <br/>\
- 소-최대 알고리즘의 성능을 개선하여 전체 경로 탐색이 불가능할 때 효율적 경로 탐색이 가능한 알고리즘 <br/><br/>\
# 핵심개념 <br/>\
- 정책(Policy) : 확장단계에서 가장 높은 승률을 예측, 트리 검색의 "폭"을 제한 <br/>\
- 가치(Value) : 현재의 승산을 나타내는 역할, 트 검색의 "깊이"제한 역할 <br/><br/>\
# 절차(Cycle) <br/>\
1. 선택 <br/>\
2. 확장 : 경로 예측 후 게임트리 확장 <br/>\
3. 시뮬레이션 <br/>\
4. 역전파 <br/><br/>\
# 구글 알파고 <br/>\
- 구성 : MCTS <br/>\
- 정책(Policy) 망 : 자가학습 <br/>\
- 가치(Value)망 : 최적 Output 도출 <br/>\
- 강화학습 <br/>\
- CPU 1202 개 <br/>\
- GPU 176ro <br/>\
- 분산 컴퓨팅 <br/>\
- 인공지능 <br/><br/>\
# 주요 정책 <br/>\
- Tree Policy : 기존재 Search tree에서 Leaf 노드 선택/생성 <br/>\
- Default Policy : 주어진 non-terminal state에서 value 추정 정책 <br/>\
- Best Child Selection : 최선 승률 예측 자식 노드 선택 정책 <br/><br/>\
# 적용 위한 3조건 <br/>\
- 게임의 최대/최소 점수값 존재 <br/>\
- 게임규칙 정해져있으며 완전 정보 게임이어야 함 <br/>\
- 게임길이 제한되어 비교적 빨리 끝나야 함 <br/><br/>\
<img src = "./img/MCTS.png" style = "max-width: 100%; height: auto;"><br/><br/>\
',

// 튜링테스트
'# 정의 : 사람, 기계 구분 테스트 <br/>\
- 주어진 문제 해결적 사고 상황에서 판단자가 기계(컴퓨터)의 출력과 사람의 출력을 구별할 수 없다면, 그 기계는 인간과 같은 사고를 하였다고 규정할 수 있다는 테스트<br/><br/>\
# 테스트 절차 <br/>\
1. 컴퓨터 화면을 통해 문자로만 대화 <br/>\
2. A,B 모두 사람이라고 주장 <br/>\
3. 격리된 다수의 심사원이 A,B중 어느 쪽이 사람인지에 대한 평가를 함 <br/>\
4. 어느쪽이 사람인지 구분할 수 없을 경우, A,B 둘다 인간 수준의 사고능력 가진것으로 판정\
',

// 해싱
'# 정의 : 저장, 검색 수행기법 / Table / Function <br/>\
- Hash Table 저장공간에 Hash Function 을 이용하여 저장과 검색을 수행하는 기법 <br/><br/>\
# 특징 <br/>\
- 검색속도 빠름, 기억공간 소모 많음 <br/>\
- 키-주소 변환 필요 (DAM-직접접근 파일 구성시 사용) <br/><br/>\
# 구성요소 <br/>\
- Keys <br/>\
- Hash Function <br/>\
- Buckets <br/><br/>\
# Hash Table <br/>\
1. 개념 : Bucket으로 구성된 기억공간 <br/><br/>\
2. 구성요소 <br/>\
- Bucket : 한 개 이상 데이터 저장 공간 / 한 개 Address <br/>\
- Slot : 한 개 데이터 저장 공간 <br/>\
- Collision : Home addredss 동일 현상 <br/>\
- Synoyms : 동일한 홈 주소 데이터 집합 <br/>\
- Overflow : Bucket 범위 <br/><br/>\
# Hash Function <br/>\
1. 개념 : 수학식 구성, 임의 길이 -> 고정길이 출력 함수 <br/>\
- Input : Hash Key / Output : Bucket home address <br/><br/>\
2. Algorithm <br/>\
- 제산법 : 나머지 값 <br/>\
- 기수변환법 : 임의의 기수로 변환 <br/>\
- 폴딩법 : 여러조각 나눔후 임의 연산 <br/>\
- 계수분석법 : 고르게 형성 위한 추출 <br/>\
- 제곱법 : 키값 제곱후 중간부분 사용 <br/><br/>\
# Overflow 처리기법 <br/>\
1. 개방주소법 : 다른 주소도 개방 <br/>\
- 선형 검색법 <br/>\
- 2차 검색법 <br/>\
- 무작위 검색법 <br/>\
- 이중해싱 <br/><br/>\
2. 폐쇄주소법 : 다른 주소 개방 안하니 Chaining으로 해결 <br/>\
- 해시 체이닝 <br/>\
- 동거자 <br/>\
- 독립 오버플로 구역 <br/><br/>\
3. 재해싱 : 새로운 해싱함수를 이용하여 새로운 홈 주소 추출 <br/><br/>\
* 그리타 \
',

// 추정이론
'# 정의 : 모집단 성질 유추 방법<br/>\
- 표본에 들어있는 정보에 의거해서 모집단의 성질을 유추하는 통계적 추론 방법 <br/><br/>\
# 종류 <br/>\
- 점 추정 : 미지의 모수를 하나의 수치로 지정하는 방법 (제품의 불량율은 1%다)<br/>\
- 구간 추정 : 모수가 포함될 것으로 예상되는 구간을 지정하는 방법 (제품의 불량율 추정시 불량율은 10.5%)<br/>\
',

// 가설검정
'# 정의 : 가설 채택 여부 결정 통계적 분석 방법<br/>\
- 모집단의 특성에 대한 어떤 가설을 설정한 뒤 표본관찰을 통하여 그 가설에 대한 채택여부를 결정하는 통계적 분석방법 <br/><br/>\
# 종류 <br/>\
- 귀무가설(H0) : 일반적으로 맞다고 가정하는 가설, 기각 목표<br/>\
- 대립가설(H1) : 입증하여 주장하고자 하는 가설, 채택 목표 <br/>\
* p-value : 관찰 데이터가 귀무가설과 양립하는 정도를 0~1 사이 수치로 표현한 것 <br/><br/>\
# 오류 종류 <br/>\
- 1종 오류 (소비자/알파) : 음인데 양으로 (확진)<br/>\
- 2종 오류 (소비자/배타) : 양인데 음으로 (정상)<br/><br/>\
* KPC 94회 1교시 12번\
',

// [가설검정]- 혼동행렬(Confusion Matrix)
'# 정의 : 예측값 일치여부 행렬 분류 모델 평가 기법<br/>\
- 오류분포표 <br/>\
- 데이터 분석에서 잘못된 예측의 영향을 간편하게 파악하기 위해 예측된 값과 실제 값이 일치하는지 여부를 행렬을 분류하는 모델 평가 기법 <br/><br/>\
# 암기 <br/>\
- 행실열예 <br/>\
- TP FP(1종)FN(2종) TN <br/><br/>\
- Percision <br/>\
- Accuracy <br/>\
- SFFS <br/><br/>\
# 구성 <br/>\
- 행 : 실제값 <br/>\
- 열 : 모델의 예측값 <br/>\
- 예측값 : Positive / Negative <br/>\
- 비교결과 : True / False(예측한 값과 실제 값의 비교 결과) <br/><br/>\
<img src = "./img/ConfusionMatrix_1.png" style = "max-width:100%; hegiht:auto;"><br/>\
<img src = "./img/ConfusionMatrix_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* FN(1종 오류) : 알파 위험, 오탐 <br/>\
* FP(2종 오류) : 베타 위험, 미탐 <br/>\
* 한 알고리즘의 분석 : 혼동 행렬 <br/>\
* 두개 알고리즘 비교분석 : ROC Curve <br/><br/>\
<img src = "./img/ConfusionMatrix_3.png" style = "max-width:100%; hegiht:auto;">\
',

// 베이즈 정리 
'# 정의 : 조건부, 주변부 확률분포 연관 이론 <br/>\
- 확률변수의 조건부(conditional) 확률분포와 주변부(marginal) 확률분포를 연관 짓는 확률이론<br/>\
- 어떤 사건의 관측 전의 원인의 가능성과 관측 후의 원인의 가능성 사이의 고나계를 설명하는 확률이론 <br/>\
- n개의 서로 배반인 사건 A1, A2, ... An 중 하나는 반드시 일어난다고 할 때, 임의의 사건 B에 의해 사건 A가 일어날 조건부 확률 <br/><br/>\
<img src = "./img/베이즈_1.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_2.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_4.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_5.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
<img src = "./img/베이즈_6.png" style = "max-width:100%; hegiht:auto;">\
',

// CCW 알고리즘
'# 정의 : 외적 이용, 세점 위치 판단 알고리즘 <br/>\
- 벡터의 외적을 이용하여 평면상에 세 점이 있을 때 점들의 위치 관계를 판단할 수 있는 알고리즘.<br/>\
다각형 넓이 구하기, 정점의 위치판단, 두 선분의 교차여부 판단에 사용',

// BASE64
'# 정의 : 8비트 이진 데이터를 6비트 이진 데이터로 치환하여 인코딩 처리 <br/>\
- 아스키 코드표에 표시되어 있는 수치를 2진수로 변경시켜 한 문자당 8bit로 표현된 문자를 쭉 연결하여 청ㅁ부터 다시 6it씩 끊어서 base 64 테이블에 나와있는 수치대로 치환하는 무손실 압축 암호기법중 하나<br/><br/>\
# 절차 <br/>\
- 아스키 코드 매핑 <br/>\
- 2진수 변환 <br/>\
- 6bit 단위 변환 <br/>\
- 10진수 변환 <br/>\
- Base 64테이블 메칭 <br/>\
- 패딩연산 (원본 비트수 mod3 만큼 "="문자로 패딩)<br/><br/>\
<img src = "./img/AL_48_1.PNG" style = "max-width:100%; height:auto;">\
',
);
