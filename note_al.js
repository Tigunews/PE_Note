var question = question.concat(
'자료구조',
'[자료구조]- 선형구조',
'[선형]- Stack',
'[선형]- Queue',
'[선형]- Priority Queue',
'[비선형]- Heap',
'[알고리즘 설계]- Back Tracking',
'[알고리즘 설계]- 분할과정복',
'[알고리즘 설계]- Greedy',
'[알고리즘 설계]- 동적계획법',
'트라이(Trie)',
'정렬 알고리즘',
'[정렬 알고리즘]- Selection sort',
'[정렬 알고리즘]- Bubble sort',
'[정렬 알고리즘]- Insertion sort',
'[정렬 알고리즘]- Shell sort',
'[정렬 알고리즘]- Merge sort',
'[정렬 알고리즘]- Quick sort',
'최단경로 알고리즘',
'[최단경로 알고리즘]- 다익스트라(Dijkstra) 알고리즘',
'[최단경로 알고리즘]- 벨만-포드(Bellman-Ford algorithm) 알고리즘',
'[최단경로 알고리즘]- 플로이드(Floyd) 알고리즘',
'[최단경로 알고리즘]- A* 알고리즘',
'최소신장트리',
'[최소신장트리]- 크루스칼(Kruskal) 알고리즘',
'[최소신장트리]- 프림(Prim) 알고리즘',
'[Tree]- AVL Tree',
'[Tree]- Multiway Search Tree',
'[Tree]- B Tree',
'[Tree]- B Plus Tree',
'[Tree]- B Star Tree',
'[Tree]- 2 3 Tree',
'[Tree]- Red Black Tree',
'방향성 비순환 그래프',
'[방향성 비순환 그래프]- 위상 정렬',
'[AI]- 인공지능 특이점',
'[AI]- 인공지능 데이터 평가',
'[AI]- 기계학습',
'[AI]- 지도학습',
'[AI]- Clustering',
'[AI]- 능동학습',
'[AI][지도학습]- 머신러닝 예측모델',
'[AI][지도학습]- 성능검증',
'[AI][지도학습][성능검증]- Cross Validation',
'[AI][지도학습][성능검증]- 혼동행렬(오차행렬)',
'[AI][지도학습][성능검증]- ROC Curve',
'[AI][지도학습]- 분류모델생성알고리즘',
'[AI][지도학습][AL]- ANN',
'[AI]- DNN',
'[AI][지도학습][AL]- SVM',
'[AI]- 비지도 학습',
'[AI][비지도학습]- 차원축소',
'[AI][비지도학습][AL]- PCA Algorithm',
'[AI][비지도 학습]- GAN',
'[AI][비지도 학습]- DCGAN',
'[AI]- 강화학습',
'[AI][강화학습]- 심층강화학습',
'[AI]- 역강화학습',
'[AI][AL]- 유전자 알고리즘',
'[AI]- 전문가 시스템',
'[AI][Classifier][AL]- Perceptron',
'[AI][Classifier][AL]- Activation Function',
'[AI]- Feed Forward Neural',
'[AI][Classifier][AL]- Backpropagation',
'[AI][Classifier][AL]- Gradient Descent',
'[AI][Classifier][AL]- Optimizer',
'[AI]- 비용함수, 손실함수',
'[AI][Classifier][AL]- KNN',
'[AI][Classifier]- 로지스틱 회귀분석',
'[AI][Clustering][AL]- DBSCAN',
'[AI][Clustering][AL]- EM Clustering',
'[AI][Clustering][AL]- Dendrogram CLustering',
'[AI][Clustering][AL]- K-means',
'[AI][Clustering][AL]- SOM',
'[AI][AL]- MCTS',
'[AI]- Object Detection',
'[AI][AL]- CNN',
'[AI][CNN]- Efficient NET, DET',
'[AI][AL]- R-CNN',
'[AI][AL][R-CNN]- Fast RCNN',
'[AI][AL][R-CNN]- Faster RCNN',
'[AI][AL][R-CNN]- YOLO',
'[AI][AL]- RNN',
'[AI][AL][RNN]- BRNN',
'[AI][AL]- LSTM',
'[AI][AL]- GRU',
'[AI][AL]- GNN',
'[AI]- 딥러닝',
'[AI][DeepLearning]- 딥러닝 한계점',
'[AI][DeepLearning]- 컨텍스트 딥러닝',
'[AI][DeepLearning]- 튜링테스트',
'[AI][DeepLearning]- Vanishing Gradient Problem',
'[AI][DeepLearning]- Drop Out',
'[AI]- F1-Score',
'[AI]- Bias',
'[AI]- One-Hot Encoding',
'[AI]- Softmax 함수',
'[AI]- NPU',
'[AI]- Deep Fake',
'[AI]- Hyper Prameter',
'[AI]- Computer Vision',
'[AI][Computer Vision]- OpenCV',
'[AI]- 머신러닝 파이프라인',
'[AI]- Active Learning',
'[AI]- AutoML',
'[AI]- 역기능',
'[AI]- 인공지능 편향',
'[AI]- 인공지능 감성지능',
'[AI]- 앙상블 학습법',
'[AI]- Fitting',
'[AI][Fitting]- Overfitting',
'[AI][Fitting]- Underfitting',
'[AI]- Python',
'[AI][DL FW]- (1) TensorFlow',
'[AI][DL FW]- (2) PyTorch',
'[AI]- 모방학습',
'[AI]- 연합학습',
'[AI]- 딥러닝 경량화',
'[AI][딥러닝 경량화]- 경량 딥러닝 기술',
'[AI][딥러닝 경량화]- 알고리즘 경량화',
'[AI][알고리즘 경량화]- 지식 증류',
'[AI][AL]- Q-러닝',
'[AI]- 모라벡의 역설(Moravec\'s Paradox)',
'[AI]- 인공지능 서비스 플랫폼',
'[AI]- 인공지능 소프트웨어 보안 취약성',
'[AI]- AI Flow',
'[AI]- XAI',
'[AI][지식표현]- 생성규칙',
'[AI][지식표현]- 의미망',
'[AI][의미망]- 프레임',
'[AI][지식표현]- 논리',
'[AI]- 클라우드 활용 AI구축 모델',
'[AI]- AI 프로젝트',
'[AI][정책]- 한국판 AI 윤리기준', 
'[AI]- 인공지능 규범 동향',
'[AI]- 인공지능 국가전략',
'[AI]- 인공지능 개인정보보호 자율점검표',
'[AI]- 적대적 공격',
'[AI]- 음성비서',
'[AI]- Pre-Crime',
'[AI]- 지능형 로봇',
'[AI]- 초대규모 AI',
'[AI]- NLP',
'[AI][NLP]- NER',
'[AI][NLP]- 워드 임베딩',
'[AI][NLP]- TF-IDF',
'[AI][NLP]- Word2Vec',
'[AI][NLP]- Attention',
'[AI][NLP]- Transformer',
'[AI][NLP]- BERT',
'[AI][NLP]- GPT-3',
'[AI]- 전이학습',
'[AI][비지도][자기지도]- Downstream Task',
'[AI]- 추천 시스템',
'[AI][정책]- AI 조달 가이드라인',
'[AI]- Digital Cartel',
'[AI]- 인공지능 성능 지표',
'[AI][성능지표]- IoU',
'CCW(CounterClockWise) 알고리즘',
);

var answer = answer.concat(
// 자료구조 
'# 개념 : 자료 집합 / 논리 정의 규칙 나열 / 자료 처리 효율적 표현 구조 <br/>\
- 자료의 집합으로 각 원소들이 논리적으로 정의된 규칙에 의해 나열되며 자료에 대한 처리를 효율적으로 수행할 수 있도록 자료를 구분하여 표현한 구조 <br/><br/>\
# 유형 (<font color = "red">단선비파</font>)<br/>\
- 단순구조 : 정수,실수,문자,문자열 <br/>\
- 선형구조 : 리스트, 연결리스트(단순,이중,원형), 스택, 큐 덱<br/>\
- 비선형구조 : 트리(일반,이진(힙)), 그래프(방향, 무방향) <br/>\
- 파일 : 순차파일, 색인, 직접 <br/><br/>\
# 선형자료구조 : 연속적 배정, 1:1 <br/><br/>\
# 비선형 자료구조 : 비연속적 배정, 1:N,N:M, 관계표현 <br/><br/>\
* 125회 관리 1교시 3번\
',
  
// 선형구조
'<img src = "./img/LineaerStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 1교시 3번 <br/>\
* KPC 96회 3교시 6번\
',
  
// Stack
'# 정의 : 선형리스트 구조의 특별한 형태로 데이터 삽입과 삭제가 한쪽 끝(Top)에서만 일어나는 선형구조 <br/><br/>\
# 연산유형 <br/>\
- 전위 유형 : A + B -> + A B <br/>\
- 중위 유형 : A + B -> A + B <br/>\
- 후위 유형 : A + B -> A B + <br/><br/>\
# 후위 유형 연산 사례 <br/>\
- 문제 : 4 5 + 2 3 * - <br/>\
- 결과 : 4 / 4 5 / 4 5 + / 9 2 / 9 2 3 / 9 2 3 * / 9 6 - / 3 <br/><br/>\
# 연산 표기 방법 <br/>\
<img src = "./img/Mid2End.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 3교시 6번\
',

// Queue
'# 정의 : 선형 리스트 / Rear 삽입, Front 삭제 / 선입선출 자료구조 <br/>\
- 선형 리스트의 한쪽에서는 삽입 작업이 이루어지고 다른 한쪽에서는 삭제 작업이 이루어지도록, 선입선출 자료구조 <br/><br/>\
# 구성요소 <br/>\
- Front : Queue 전단 <br/>\
- Rear : Queue 후단 <br/>\
- createQueue() : n개 원소 큐 생성 <br/>\
- deleteQueue() : 큐 제거(메모리 해제) <br/>\
- isFull() : 가득 차있는지 확인(배열만 해당) <br/>\
- isEmpty() : 공백인지 확인 <br/>\
- Enqueue : 후단 데이터 삽입 <br/>\
- Dequeue : 전단 데이터 삭제 <br/><br/>\
# 종류 <br/>\
- 선형큐 : 배열 선형 사용 <br/>\
- 순환큐 : 배열 순환 사용 <br/>\
- Linkedlist 큐 : 연결리스트 사용 <br/><br/>\
# DEQ (Double-Ended Queue) <br/>\
<img src = "./img/DEQ.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 3교시 1번\
',

// Priority Queue
'# 정의 : 우선순위 부여 / FIFO x / 자료구조 <br/>\
- 데이터에 우선순위를 부여하여 FIFO 방식이 아닌, 우선순위가 높은 데이터가 먼저 나가는 자료구조 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PriorityQueue.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구현유형 <br/>\
<img src = "./img/PriorityQueueType.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 3교시 1번\
',

// Heap
'# 정의 : 완전 이지트리 / Node / Key 값 가장 큰,작은 / 찾기 위한 자료구조 <br/>\
- 완전 이진트리에 있는 Node 중에서 Key 값이 가장 큰 Node나 가장 작은 Node를 찾기 위한 자료구조 <br/><br/>\
# 유형 <br/>\
1. Max Heap <br/>\
- 개념 : 부모 Node의 키 값이 자식 Node의 키 값보다 항상 크거나 같은 완전 이진트리 <br/>\
- 연산 : 원소의 개수 만큼 삭제 연산 수행, 큰 수 부터 POP 내림 차순 정렬 <br/>\
<img src = "./img/MaxHeap.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Min Heap <br/>\
- 개념 : 부모 Node의 키 값이 자식 Node의 키 값보다 항상 작거나 같은 완전이진트리 <br/>\
- 연산 : 원소의 개수만큼 삭제 연산을 수행하여 작은수 부터 POP하여 오름차순으로 정렬 수행 <br/>\
<img src = "./img/MinHeap.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 공간 복잡도 : O(n) <br/>\
- 시간 복잡도 : O(nlogn) <br/>\
- 장점 : 평균 시간 복잡도 우수, 추가메모리 x <br/>\
- 단점 : 데이터 구조 따른 효율 저하 <br/><br/>\
* 124회 관리 3교시 2번\
',
  
// Back Tracking
'# 정의 : DFS, Pruning / 후보해 충족 / 모든 해 찾는 알고리즘 <br/>\
- 깊이 우선 탐색(DFS)에 Pruning(가지치기) 기법을 이용하여 여러 후보해 중에서 특정 조건을 충족시키는 모든 해를 찾는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BackTracking.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 사례 <br/>\
<img src = "./img/BacktrackingExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 응용 1교시 9번\
',

// [AL 종류]- 분할과정복
'# 정의 : 나누고 각각 해결 -> 해도출 알고리즘 <br/>\
- 문제를 더 이상 나눌 수 없을 때까지 나누고, 이렇게 나누어진 문제들을 각각 품으로써 전체 문제의 답을 얻는 알고리즘 <br/><br/>\
# 과정 <br/>\
- 분할 : 2개 이상 하위 문제로 나눔 <br/>\
- 정복 : 분할된 하위 문제를 해결 <br/>\
- 결합 : 정복된 답을 취합 <br/><br/>\
# 사례 <br/>\
- 병합정렬 <br/><br/>\
* 라이지움 86회 4교시 4번 \
',

// [AL 종류]- Greedy
'# 정의 : 현시점 가장 유리한 해법 선택 알고리즘 <br/>\
- 미리 정한 기준에 따라서 매번 현시점에서 가장 유리한 해법을 선택하는 알고리즘 <br/><br/>\
# 특징 <br/>\
- 최적해 미보장 <br/>\
- 빠른 최적화 <br/>\
- 설계 간단 <br/><br/>\
# 과정 <br/>\
- 해선택 <br/>\
- 실행 가능성 검사 <br/>\
- 해 검사 <br/><br/>\
# 사례 <br/>\
- 거스름돈 계산 <br/>\
- 크루스칼 <br/>\
- 허프만 코딩 <br/>\
- 다익스트라 <br/><br/>\
<img src = "./img/coincount.png" style = "max-width:100%; height:auto;"><br/>\
* 라이지움 86회 4교시 4번\
',

// [AL 종류]- 동적계획법
'# 정의 : 부분으로 전체 해석 (귀납적) 알고리즘 <br/>\
- 어떤 문제가 여러개의 반복되는 부분 문제로 이루어질 때, 각 단계에 있는 부분 문제의 답을 기반으로 전체의 답을 구하는 방법 <br/><br/>\
# 과정 <br/>\
- 분할 <br/>\
- 해 탐색 <br/>\
- 최적해 <br/><br/>\
# 사례 <br/>\
- 피보나치 수열 <br/><br/>\
* 라이지움 86회 4교시 4번\
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
'# 정의 : 일정한 순서 열거 / 알고리즘 <br/>\
- 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘 <br/><br/>\
<img src = "./img/SortAL.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/DataSort.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/StableNotStableSort.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/SortAL_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/정렬알고리즘_5.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 시간복잡도 <br/>\
<img src = "./img/SortTimeComplex.png" style = "max-width:100%; height:auto;">\
',

// Selection sort
'# 정의 : <font color = "red">현재 위치</font>에 들어갈 값을 <font color = "red">찾아서</font> 자리바꿈하는 방식의 정렬 <br/><br/>\
# 도식 <br/>\
<img src = "./img/SelectionSortGraphic.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 매커니즘 <br/>\
1. 전체 데이터 중 가장 작은 데이터를 찾아서 첫 번째 데이터와 자리바꿈 <br/>\
2. 1번에서 정렬한 데이터 외의 나머지 데이터들로 1번 과정 반복 <br/>\
3. 모든 데이터의 정렬이 끝나면 종료 <br/><br/>\
# 소스코드 <br/>\
<img src = "./img/SelectionSortSourceCode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 시간복잡도 : O(n^2) <br/>\
- 공간복잡도 : O(n) <br/><br/>\
* 122회 응용 4교시 2번\
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
'# 정의 : 현재 위치에서, 그 이하의 배열들을 비교하여 자신이 들어갈 위치를 찾아, 그 위치에 삽입하는 알고리즘 <br/><br/>\
# 도식 <br/>\
<img src = "./img/InsertionSortGraphic.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 매커니즘 <br/>\
1. 정렬 되어 있는 부분집합에 새로운 데이터가 삽입될 위치를 확인 <br/>\
2. 데이터를 삽입 후 정렬되어있는 부분집합을 확장 <br/>\
3. 데이터가 정렬 시 종료 <br/><br/>\
# 소스코드 <br/>\
<img src = "./img/InsertionSortSourceCode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 시간복잡도 : O(n^2) <br/>\
- 공간복잡도 : O(n) <br/><br/>\
* 122회 응용 4교시 2번\
',

// Shell sort
'<img src = "./img/ShellSort.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ShellSort_1.png" style = "max-width:100%; height:auto;">\
',
  
// Merge sort
'# 정의 : 분할과 정복이용 정렬 <br/>\
-  전체 원소를 하나의 단위로 분할한 후 분할한 원소를 다시 병합하는 정렬방식 <br/><br/>\
# 특징 <br/>\
- 비교기반 안정 정렬 알고리즘, 1945년 폰노이만 개발 <br/>\
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
  
// Quick Sort
'# 정의 : 분할정복 알고리즘의 하나로, Pivot 중심 정렬 알고리즘 <br/><br/>\
# 도식 <br/>\
<img src = "./img/QuickSortGraphic1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/QuickSortGraphic2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 매커니즘 <br/>\
1. pivot과 left(l), right(r) 플래그 설정 <br/>\
2. pivot 기준으로 l은 증가, r은 감소시키며, pivot을 초가, 미만되는 숫자 발견 시 정지 <br/>\
3. l, r 교체 <br/>\
4. l이 r보다 클 경우 pivot과 r을 교체 <br/>\
5. pivot 기준으로 좌/우 데이터를 1~4번 과정 반복 <br/><br/>\
# 소스코드 <br/>\
<img src = "./img/QuickSortSourceCode.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/QuicSortPartition.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- 시간복잡도 : O(nlogn) <br/>\
- 공간복잡도 : O(n) <br/><br/>\
* 122회 응용 4교시 2번\
',

// 최단경로 알고리즘
'# 정의 : 두 정점사이 가장 짧은 경로<br/>\
- 정점(노드)과 간선으로 이루어진 그래프에서 두 정점 사이의 가장 짧은 경로 <br/><br/>\
# 유형 <br/>\
- 다익스트라 : 최소비용 경로설정, 욕심쟁이 기법 <br/>\
- A* : 휴리스틱 순서 탐색 <br/>\
- 플로이드 : 동적계획법 기반, 고차원 기법 <br/><br/>\
# 특징 : 모든 정점 1회 순회, 싸이클 생성 금지 <br/><br/>\
# 알고리즘간 비교 <br/>\
<img src = "./img/PathFindAlgorithmCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 6번\
',

// [최단경로 알고리즘]- 다익스트라 알고리즘
'# 정의 : 단일 출발 / 단일 정점 갱신 / 최단경로 알고리즘 <br/>\
- 한 정점에서부터 단계별 단일 정점 갱신하여 다른 모든 정점으로의 최단 경로를 구하는 알고리즘 <br/><br/>\
# 특징 <br/>\
- 시작 정점에서 다른 모든 정점으로의 최단 거리<br/>\
- 기반이론 : Greedy 알고리즘(최소비용의 인접 정점 선택) <br/>\
- 시간복잡도 : O(ElogE)<br/><br/>\
# 절차 <br/>\
- 초기화 : 모든 정점 경로 길이 무한대 설정 <br/>\
- 추가 : 시작 정점 길이 0으로 초기화 후 최단 경로 추가 <br/>\
- 갱신 : 추가된 정점의 인접 정점에 대한 경로, 최단 경로 갱신 <br/>\
- 비교 : 이전 경로 길이와 비교 후 수정 or 무시 <br/>\
- 반복 : 그래프 내 모든 정점 최단 경로 완성시 까지 반복 <br/><br/>\
# 다익스트라 알고리즘 한계 <br/>\
<img src = "./img/DijkstraLimit.png" style = "max-width:100%; height:auto;"><br/>\
- 경로1) A-B-C 경로2) A-C <br/>\
- 기존 다익스트라 알고리즘은 A-C 로 경로 확정 <br/>\
- 다익스트라 알고리즘 구현 조건이 양수 가중치 전제이기 때문 <br/><br/>\
# 활용 <br/>\
- 네트워크 라우팅 경로 설계 : <font color = "red">링크스테이트 라우팅</font><br/>\
- OSPF(Open Shortest Path First) 라우팅 프로토콜 <br/>\
- 지능형 교통 분야 (GIS) <br/><br/>\
# 고려사항 <br/>\
- 최선 경로 여부 <br/>\
- 수행시간 분석 : 입력자료의 상태에 따라 수행시간의 편차가 큼 <br/>\
-> 해결책 : 알고리즘 평가시 최악,평균,최선 등으로 구분하여 수행능력을 분석<br/><br/>\
# 코드 <br/>\
<img src = "./img/Dijkstra.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* GAS -> VAS </font><br/><br/>\
# 사례 <br/>\
<img src = "./img/Dijkstra_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 6번\
',

// [최단경로 알고리즘]- 벨만포드 알고리즘
'# 정의 : 음수 가중치 / 사이클 비허용 / 단일 출발 / 다중 정점 갱신 / 최단경로 알고리즘 <br/>\
- 한 정점에서 부터 단계별 다중 정점 갱신하여 다른 모든 정점의 최단 경로를 구하는 음수 가중치 허용, 사이클 비허용 알고리즘 <br/><br/>\
# 특징 <br/>\
- 시작 정점에서 다른 모든 정점으로의 최단거리 <br/>\
- 간선의 가중치 음수 허용 <br/>\
- 시간복잡도 : O(VE) <br/><br/>\
# 활용 <br/>\
- 네트워크 라우팅경로 설계 : <font color = "red">거리벡터 라우팅</font> <br/><br/>\
# 코드 <br/>\
<img src = "./img/BellmanFordCode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 사례 <br/>\
<img src = "./img/BellmanFordeExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 6번\
',

// [최단경로 알고리즘]- 플로이드 알고리즘
'# 정의 : 동적 계획법 접근, 최단경로 알고리즘 <br/>\
- 동적 계획법 접근으로, 그래프 상의 모든 두 정점을 잇는 경로의 최소 비용을 구하는 알고리즘<br/><br/>\
# 특징 : 모든 정점에서 다른 모든 정점으로의 최단거리 <br/>\
- 기반이론 : 동적프로그래밍 -> 더 빨리 수행 <br/>\
- 시간복잡도 : O(n^3)<br/><br/>\
# 소스코드 <br/>\
<img src = "./img/Floyd.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 6번\
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
- 특정 레벨단위로 다익스트라 알고리즘 교차적용하여 연산 수를 줄이고 비교항목을 최소화하는 하이브리드 탐색 알고리즘의 도입 가능 <br/><br/>\
# 코드 <br/>\
<img src = "./img/AStar.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 6번\
',

// 최소신장트리
'# 정의 : Minimum Spanning Tree, MST <br/>\
- 신장트리, 그래프내의 모든 정점이 사이클이 없이 연결되어 있는 트리<br/><br/>\
# 유형 <br/>\
- kruskal(간선) : 정렬, 비교, 선택, 검증 <br/>\
- Prim(정점) : 임의선택, 인접선택, 비교, 검증 <br/><br/>\
<img src = "./img/최소신장트리_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/최소신장트리_2.png" style = "max-width:100%; height:auto;">\
',

// [최소신장트리]- 크루스칼 알고리즘
'# 정의 : 최초의 정점 없이, 최소간선을 하나씩 추가하여 MST를 생성해 나가는 알고리즘 <br/><br/>\
<img src = "./img/Kruscal_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Kruscal_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 : 욕심쟁이 기법, 시간복잡도 O(|V|^2)\
',

// [최소신장트리]- 프림 알고리즘
'# 정의 : 시작 정점에서 부터 출발하여 비용간선트리 집합을 단계적으로 확장하는 방식<br/><br/>\
# 특징 (E = 간선수, V = 정점수)<br/>\
1. 욕심쟁이 기법 <br/>\
2. 평균복잡도 <br/>\
- O(V^2) <br/>\
- 이진합 이용시 : O(ElogV)<br/>\
- 피보나치 힙 이용시 : O(E+VlogV) => 가장 빠름 <br/><br/>\
# 원리 : 선택, 갱신, 비교, 반복\
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
<img src = "./img/AVL_RL.png" style = "max-width:100%; height:auto;">\
',

// Multiway Search Tree
'# 정의 : 트리의 노드가 m개 이하의 가지를 가질 수 있는 탐색 트리 <br/>\
- 노드 안에 여러개의 자료를 가질 수 있고, 서브 트리 역시 여러개 가질수 있는 트리 자료구조 <br/><br/>\
# 특징 <br/>\
- 이진 탐색 트리 확장 / 높이 감소 목적 <br/>\
- 2개 이상 자식 보유 가능 (3,4원 탐색트리...) <br/><br/>\
# 구조 <br/>\
<img src = "./img/MultiwaySearchTreeStructure.png" style = "max-width:100%; height:auto;">\
',

// B Tree
'# 정의 : 균등한 응답속도 보장 / 데이터 정렬 / 순차 접근 / 트리형 자료구조 / Skewed 현상 적음 <br/>\
- 데이터를 정렬하여 탐색, 삽입, 삭제 및 순차 접근이 가능토록 유지하는 트리형 자료구조 <br/><br/>\
# B Tree 진화 과정 <br/>\
<img src = "./img/BTreeFamily.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 개념도 <br/>\
<img src = "./img/BTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 7가지 조건 <br/>\
1. 탐색 노드는 1/2 이상 채워져야 하며, Leaf Node는 같은 Level 존재 <br/>\
2. 탐색, 추가, 삭제는 Root Node로 부터 시작 <br/>\
3. 노드 내 값은 오름차순 유지 <br/>\
4. 공백이거나 높이 1이상인 m-원 탐색 트리 <br/>\
5. 루트와 리프를 제외한 내부 노드 최소 m/2, 최대 m 개 서브트리 가지며, 적어도 m/2-1개 키 값 가짐 <br/>\
6. 루트는 그 자체 리프가 아닌 이상 적어도 두개의 서브트리 가짐 <br/>\
7. 모든 리프는 같은 레벨에 있음 (균형 트리) <br/><br/>\
# 특징 <br/>\
- 구조 : Root ~ Leaf 동일 높이 <br/>\
- 순차접근 : 중위 순회 <br/>\
- 직접접근 : 트리 순회 <br/>\
- 속도 : 보통 (소량 데이터 유리) <br/>\
- 중복성 : 없음 <br/>\
- 노드키 이동 기준 : m/2 <br/>\
- 노드관리 : Leaf < Branch,Root / 저장 관리 복잡 <br/><br/>\
# 비교 <br/>\
<img src = "./img/BTreeFamilyCompare.png" style = "max-width:100%; height:auto;">\
',

// B Plus Tree
'# 정의 : 50 -> 67% / 트리 분할 횟수 줄인 / B 트리 개선 자료구조 <br/>\
- B 트리 50% 공간 활용도를 67% 공간 활용도로 개선하여 트리 분할 횟수를 줄인 B 트리 개션 자료구조 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BPlusTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# B 트리와 차이점 (조건) <br/>\
1. 루트 서브트리 개수 : [0,2] or [m/2,m] <br/>\
2. 로트, 리프 제외한 노드 서브트리 : [m/2,m] <br/>\
3. 모든 리프 동일 레벨 존재, 파일의 순차 세트로 리스트 연결됨 <br/>\
4. 리프가 아닌 노드에 있는 키값의 수 = 서브트리수 -1 <br/>\
5. 순차 액세스, 직접 액세스 모두 이용 <br/>\
6. 모든 키 단말과 내부 두 곳 에 존재 <br/><br/>\
# 구성요소 <br/>\
- Index Set : 키, 포인터만 존재 (경로제공 목적) <br/>\
- Sequence Set : 데이터만 존재 (정렬) <br/><br/>\
# 특징 <br/>\
- 구조 : Index set, Sequence set(Data) <br/>\
- 순차접근 : Leaf 노드만 검색 <br/>\
- 직접접근 : Index Set 순회 검색 <br/>\
- 속도 : 순차검색 빠름 <br/>\
- 중복성 : Index set, Sequence Set, 중복 키 <br/>\
- 노드키 이동기준 : 1/2 <br/>\
- 노드 관리 : 모든 노드 크기 동일, 삭제될 노드는 Leaf 존재 \
',

// B Star Tree
'# 정의 : 키값 2/M -> 2/3 <br/>\
- B Tree 에서 최소 2/M의 키 값을 가져야한다는 점을 2/3으로 변경한 트리 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/BStarTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 조건 <br/>\
1. 리프를 제외한 모든 노드는 m개의 서브트리 이상 가질 수 없음 <br/>\
2. 루트를 제외한 모든 노드는 2/3 이상 채워져야 함 <br/>\
3. 루트와 리프를 제외한 모든 노드는 적어도 (2m-2)/3 +1 개의 서브트리 가짐 <br/>\
4. 노드가 가득차면 분할하는 대신 이웃한 형제 노드 재배치 <br/>\
5. 한 노드가 가득차고 인접 노드까지 모두 가득 찰 때까지 분할 지연 <br/>\
6. 순차 엑세스와 직접 엑세스 모두 이용 <br/>\
7. 각 리프 키값 보유량 : [2m-2/3, m-1] <br/><br/>\
# 특징 <br/>\
- 구조 : Overflow 형제 노드 분열, Underflow 형제 노드 결합 <br/>\
- 순차접근 : 중위 순회 <br/>\
- 직접접근 : 트리 순회 검색 <br/>\
- 속도 : B Tree 보다 빠름 <br/>\
- 중복성 : 탐색키 중복성 없음 <br/>\
- 노드키 이동기준 : 2/3 <br/>\
- 노드 관리 : 리프 아닌 노드크기가 더 크고, 저장공간 관리 복잡\
',

// 2 3 Tree
'# 정의 : 2,3 child / binary search tree <br/>\
- Leaf 노드가 아닌 노드가 2개 또는 3개의 child를 가지는 노드로 이루어진 binary search tree <br/><br/>\
# 개념도 <br/>\
<img src = "./img/23Tree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Left subtree : 작은 값 <br/>\
- Mid subtree : 중간 값 <br/>\
- Right subtree : 큰 값 <br/><br/>\
# 삽입 연산 <br/>\
1. 일반 삽입 <br/>\
<img src = "./img/23TreeInsert1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/23TreeInsert3.png" style = "max-width:100%; height:auto;"><br/>\
- 항상 Leaf Node로 삽입 <br/>\
- Leaf Node 2-Node라면, 3-Node로 만듦 <br/><br/>\
2. Leaf Full <br/>\
<img src = "./img/23TreeInsert2.png" style = "max-width:100%; height:auto;"><br/>\
- Promote Middle <br/>\
- 원노드 분리 <br/><br/>\
# 삭제 연산 <br/>\
<img src = "./img/23TreeDelete1.png" style = "max-width:100%; height:auto;"><br/>\
1. 자매 노드 3 node 존재 <br/>\
- 자매노드로 부터 빌려와 채우기 <br/>\
- 부모 거쳐서 빌려옴 <br/>\
- 자매노드 값 -> 부모 / 부모 -> 해당 자리 <br/><br/>\
2. 자매 노드 3 node 미존재 <br/>\
- 부모 노드 2 node화 <br/>\
- key 조정 <br/><br/>\
3. 부모 노드 3 node 미존재 <br/>\
- 2 node 형태 리빌딩 <br/><br/>\
4. 높이 변화 삭제 과정 <br/>\
<img src = "./img/23TreeDelete2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 이진 탐색트리 비교 <br/>\
<img src = "./img/BST_23Tree_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 문제점 <br/>\
- 2-Node, 3-Node 비교 필요, 횟수 증가 <br/>\
- 3-Node Null Pointer 공간 부담 \
',

// Red Black Tree
'# 정의 : 자가 균형 이진 탐색 트리 / Red Black Marking <br/>\
- 자가 균형 이진 탐색 트리로써 대표적으로 연관 배열 등을 구현하는 데 쓰이는 자료구조 <br/><br/>\
# 특성 <br/>\
- Worst-case Guarantees <br/>\
- 실시간 처리 유용 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/RedBlackTree.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 조건 <br/>\
- Root Proerty : 루트 노드의 색깔은 Black <br/>\
- External Property : 모든 External node Black <br/>\
- Internal Property : Red노드의 자식은 Black (No Double Red) <br/>\
- Depth Property : 모든 리프 노드에서 Black Depth 는 같다 <br/><br/>\
# 원리 <br/>\
- Restructuring > Recoloring <br/>\
<img src = "./img/RedBlackTreeInsert.png" style = "max-width:100%; height:auto;">\
',

// 방향성 비순환 그래프
'# 정의 : 개별 요소 특정 방향 / 비순환 그래프 / DAG 알고리즘 적용, 블록체인 3.0 기반 기술 <br/>\
- 개별 요소들이 특정한 방향을 향하고 있으며, 서로 순환하지 않는 구조로 짜여진 그래프<br/><br/>\
# 특징 <br/>\
- 유향 비순환 그래프 <br/>\
- 여러개 트랜잭션 개별 요소들끼리 상호 연결 <br/>\
- 몬테 카를로(MCMC; Markov Chain Monte Carlo) 알고리즘 사용 <br/><br/>\
# 활용 사례 <br/>\
- 아이오타 : IoT 시대 M2M Application 위함 암호 화폐 <br/>\
- 하이퍼캐시 : 비블록체인 사이드체인 제공, 상이한 블록체인간 자유 전달 암호 화폐 <br/>\
- 로커스 체인 : PC, 모바일 환경 초당 수천 트랜잭션 처리 성능 블록체인 플랫폼 <br/>\
- 해시그래프 : 연결 리스트 방식 -> 불특정 노드 가십(Gossip) 전달 방식 작동 알고리즘 <br/><br/>\
* 125회 관리 4교시 4번\
',

// 위상 정렬
'# 개념 : 유향 그래프 실행순서 위배x / 모든 정점 나열 정렬 <br/>\
- 유향 그래프 각 정점 실행 순서 위배하지 않으면서 모든 정점을 나열하는 정렬 <br/><br/>\
# 구성요소 <br/>\
- 정점 <br/>\
- 간선 <br/>\
- 진입차수 <br/>\
- 진출차수 <br/>\
- 위상순서 <br/><br/>\
# 메커니즘 <br/>\
- 진입차수 0 정점 선택 <br/>\
- 선택된 정점과 부속된 모든 간선 삭제 <br/>\
- 반복 <br/><br/>\
# 수행방식 <br/>\
- 깊이우선 탐색 <br/>\
- 큐 이용 <br/><br/>\
# 사례 <br/>\
<img src = "./img/TopologicalAlignment.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# 코드 <br/>\
<img src = "./img/TopologicalAlignmentCode.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 4교시 4번\
',
  
// 인공지능 특이점
'# 정의 : 인공지능 > 인간 시점 <br/>\
- 인간이 스스로 만든 인공지능 기술을 이해하거나 따라잡지 못하는 미래의 한계점, 즉 인공지능이 인간의 두뇌를 뛰어넘는 시점 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SingularityGraph.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 방향성 <br/>\
- 인공지능 기술의 진보 : 튜링 테스트 통과 <br/>\
- 인공지능 확장 : Brain 대체 <br/>\
- 데이터베이스 : 데이터기반 인공지능 결합 진보 <br/>\
- 유전자 기술 : 단백질 접힘 시뮬레이션, DNA 서열 분석 <br/><br/>\
# 엑소브레인 SW <br/>\
- 개념 : 내 몸 바깥에 있는 인공두뇌, 기계가 자연어를 이해하고 지식을 학습해 생산하는 인간과 기계와의 의사소통을 뛰어넘어 지식 소통이 가능한 인공지능 SW <br/>\
- 기술요소 : NLU 및 응답(ETRI), 자가학습 KB 및 추론(솔트록스), 인간모사 학습 지능 원천(KAIST), 자율 협업 지능(ETRI) <br/><br/>\
# Deppview <br/>\
- 개념 : 대규모 이미지,영상을 분석하여 내용 이해 및 상황 예측을 실시간으로 수행, 대규모 시각 빅데이터의 분석 및 예측 가능한 컴퓨터 비전 기술 <br/>\
- 기술요소 : 수집관리 기술(DB Bank), 대규모 처리 기술(처리 파이프라인), 내용 분석 기술(다차원 시각데이터 분석 및 이해 SW) <br/><br/>\
* 108회 관리 3교시 6번\
',
  
// 인공지능 데이터 평가
'# 정의 : 정합성, 품질 검증 평가 활동 <br/>\
- 인공지능 서비스를 위한 데이터 수집, 가공, 모델링 절차에 맞는 데이터 정합성 및 품질을 검증하는 평가활동 <br/><br/>\
# 목적 <br/>\
- 인공지능 모델 및 서비스 응용 개발 지원 <br/>\
- 양질의 학습 세트 확보 통한 인공지능 데이터 활용도 제고 <br/><br/>\
# 고려사항 <br/>\
- 응집성과 다양성 : Trade Off, 기준치, 공개 데이터 셋 산포도 측정 기준 <br/>\
- 분류성 : 클래스 분류 수준, Bayes Error 추정 방법 측정 <br/>\
- 계산성 : 계산 용이성, Random Projection, Bootstrapping 통계 기법, 낮은 계산 복잡도 <br/><br/>\
# 방법 <br/>\
1. 대상별 평가방법 <br/>\
- 자연어 데이터 : 기계어 번역 후 편집시 국립국어원 표기법 준수 <br/>\
- 이미지 데이터 : 데이터 분류 체계 및 검수 자동화 작업 도구 가능 확인 <br/>\
- 영상 데이터 : 원시 영상 데이터 속성 지침 준수여부 <br/>\
- 지식베이스 : 국가법령 상/하위 구조 체제 준수 여부 <br/>\
- 오픈 데이터 : 사용자 접근 용이성 <br/><br/>\
2. 데이터 관리 측면 평가방법 <br/>\
- AI Data Governence : 원천 데이터 선정 및 수집시 저작권 확인 <br/>\
- 데이터 품질 : 편향에 대한 검증 절차 및 방법론 부여 <br/>\
- 정합성 : 표준화, 큐레이션, 라벨링을 통한 전차리 후 심층 학습 모델 평가 <br/>\
- 보안 : 데이터 접근 및 사용자별 보안 통제 거버넌스 수립 <br/><br/>\
# 동향 <br/>\
- NIA : 이노베이션 허브, 학습용 데이터 250만개 <br/>\
- 표준, 검증 체계 : 인공지능표준연구원 설립, AI 데이터 상호운용성 평가센터 설립 <br/><br/>\
* 122회 응용 1교시 10번\
',
  
// 기계학습
'# 정의 : 인공지능 / 컴퓨터 학습 / 알고리즘 <br/>\
- 인공지능의 한 분야로, 컴퓨터가 학습할 수 있도록 알고리즘과 기술을 개발하는 분야 <br/><br/>\
# 근본 원리 <br/>\
- 균등의 원리 : 데이터 관측전 불필요한 가정 최소화 <br/>\
- 오캄의 원리 : 단순한 모델 우선순위 <br/>\
- 양보의 원리 : 학습 성능 향상에 관계하는 원리, 이익이 있으면 손해를 보는 것도 있다. <br/><br/>\
# 구성요소 : 입력 데이터, 출력 데이터, 학습 데이터, 기계학습 알고리즘, 예측 모델 <br/><br/>\
# 종류 <br/>\
<img src = "./img/ML_Model.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 활용 <br/>\
<img src = "./img/ML_Useage.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Flow <br/>\
<img src = "./img/MLSheet.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# 동향 <br/>\
- Pattern Recognition : Engineering Features <br/>\
- ML&DL : LEarning Features & Engineering to Learn <br/>\
- Meta-Learning : Learning to learn <br/>\
- Artifical General Intelligence <br/><br/>\
* 아이리포 23회 3교시 6번\
',
  
// 지도학습
'# 정의 : 훈련데이터 / 하나의 함수 유추 <br/>\
- 훈련데이터로부터 하나의 함수를 유추해내기 위한 기계학습의 한 방법 <br/><br/>\
# 종류 <br/>\
- 신경망 : 인간 두뇌 세포 모방 개념 <br/>\
- 은닉 마르코프 모델 : 시스템이 관측될 수 없는 은닉된 상태의 직접적인 원인 + 관찰가능한 결과, 통계적 마르코프 모형중 하나 <br/>\
- 결정 트리 : 의사 결정 규칙, 결과를 트리 구조로 도식화 <br/>\
- 다층 신경망 : 입력층과 출력층 사이에 하나이상의 중간층이 존재하는 신경망 <br/>\
- SVM : 데이터가 사상된 공간에서 경계선과 가장 근접한 데이터간의 거리가 가장 큰 경계를 식별하는 알고리즘 <br/>\
<img src = "./img/SVM_Overview.png" style = "max-width:100%; height:auto;"><br/>\
- 베이시안 망 : 주어진 의사결정 문제의 영역 지식을 확률적으로 표현 <br/>\
- CNN : 컴퓨터 비전 위한 Convolution , Pooling, Fully Connected Layer 통한, 특징 추출, 차원 축소, 이미지 분류, 인식 가능한 신경망 알고리즘 <br/>\
<font color = "red">* 컴퓨터 비전 : 기계의 시각에 해당하는 부분을 연구하는 컴퓨터 과학 분야 </font><br/><br/>\
# 평가 <br/>\
- Cross Validation : 훈련데이터로부터 하나의 함수가 유추되고 나면 함수에 대한 평가를 통해 파라미터를 최적화 (훈련, 검증, 테스트 집합) <br/>\
- 정밀도(Precision), 재현율(Recall) 측정 : Precesion = tp / (tp+fp), Recall = tp / (tp+fn) <br/><br/>\
# 활성화 함수 적용시 고려사항 <br/>\
- 문제의 결과가 직선일 경우 : 선형 함수 <br/>\
- 2개를 분류하는 문제일 경우 : ReLU와 그 변형된 활성화 함수 <br/>\
- 3개 이상을 분류해야할 경우 : Softmax와 그 변형된 활성화 함수 <br/>\
- 신경망에서 활성화 함수 적용할 경우 : 1개 이상의 비선형 함수 사용 \
',
  
// Clustering 
'# 정의 : 비지도 / 유사 특성 / 집단화 / 거리차이 최소화 <br/>\
- 비지도 학습의 일종으로, 상호 간 유사 특성을 갖는 데이터들을 집단화로 묶고 중심과의 거리 차이를 최소화 하는 기법 <br/><br/>\
# 유형 <br/>\
- K-means Clustering : <font color = "red">Centroid</font> 기반 중심 찾아가는 방식 <br/>\
- EM-Clustrering : <font color = "red">Gaussian Mixture</font> 모델 기반 / E-step, M-step / 반복 군집 형성 <br/>\
- Dendrogram Clustering : 각 단계의 군집이 </font color = "red">어떻게 형성되는지 확인</font>하고 형성된 군집의 유사성 수준이 평가 가능한 다이어그램 \
',
  
// 능동학습
'# 정의 : Data 부족 / UnLabeled Data 선별 / Auto Labeling 기법 <br/>\
- Data 부족 해결하기 위해 UnLabeled Data를 선별하여 자동 학습하는 Auto Labeling 기법 <br/>\
- 초기 라벨링된 일부 데이터를 이용해 모델 학습한 이후, 추가적인 데이터 인위적 선별, 활용하는 기계학습 모델 <br/><br/>\
# 프로세스 <br/>\
<img src = "./img/ActiveLearningProcess.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/ActiveLearningProcessDetail.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
1. 모델 기반 <br/>\
- Uncertainty Sampling : 확신도 낮은 데이터 선별 <br/>\
- Query By Commitee : 불일치 높은 데이터 선별<br/>\
- Expected Impact : 변화 많은 데이터 선별 <br/><br/>\
2. 데이터 기반 <br/>\
- Density Weighted Method : 밀집 지역 데이터 선별 <br/>\
- Core-set approach : 분포 데이터 선별 <br/>\
- Learning Loss : Loss 데이터 선별 <br/><br/>\
# 능동 학습, 자동 레이블 비교 <br/>\
<img src = "./img/ActiveLearningAutoLabel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 활용방안 <br/>\
- 학습 데이터 절감 : 랜덤 데이터 Annotation 보다 40% 절감 <br/>\
- 학습 데이터 분류 : 초기 데이터, 전문지식 데이터 분류 가능 <br/>\
- 학습 데이터 통합 : 레코드단 중복제거, 룰셋 적용 <br/><br/>\
* 123회 응용 1교시 4번\
',
  
// 머신러닝 예측모델
'# 정의 : 라벨 / 미래 데이터 예측 모델 <br/>\
- 라벨이 있는 훈련데이터로 모델을 학습하여 경험하지 못한 데이터나 미래의 데이터에 대한 예측하는 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MLPrevisonModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 일반적 절차 <br/>\
<img src = "./img/MLPrevisonModelProcess.png" style = "max-width:100%; height:auto;"><br/>\
- 전처리 : 결측값 다루기, 범주형 데이터 다루기, 샘플링, 피처 스케일링, 피처 선택, 차원 축소 <br/>\
- 학습 : 교차검증, 성능메트릭, 하이퍼 파라미터 최적화, 모델 선택, 앙상블 학습 <br/>\
- 평가, 예측 : 모델 성능 측정, 초기 테스트 데이터 사용, 성능 만족시 사용 <br/><br/>\
# 전처리 기법 <br/>\
- 결측값 다루기 : 샘플 및 피처 제거, 결측값 보정 <br/>\
- 범주형 데이터 다루기 : 명목형/순위형 피처 매핑, 분류 라벨 인코딩, 명목형 피처 원핫 인코딩 <br/>\
- 피처 스케일링 : 정규화, 표준화 <br/>\
- 피처 선택 : L1 정규화가 있는 희소 솔루션 찾기, 그리드 서치 알고리즘, 랜덤 포레스트 <br/>\
- 차원 축소 : PCA, LDA <br/><br/>\
* KPC 97회 관리 3교시 6번\
',
  
// [기계학습]- 성능검증
'# 정의 : 적합성, 경제성, 타당성 <br/>\
- 머신러닝 모델의 적합성, 경제성, 타당성 판단을 위한 평가 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ML_Evaluation.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형 <br/>\
1. Overfit / Underfit 평가 방법 <br/>\
- Hold out : 일정부분 분리, 학습 모델 검증 방법 <br/>\
- Resampling : 데이터양 부족, 학습 데이터 세트를 반복적 샘플링 수행 방법 <br/>\
-> Cross Validation, Bootstrap <br/><br/>\
2. 주요 척도 <br/>\
- Confusion Matrix : 예측, 실제 Value 비교로 이루어진 시각화 매트릭스 <br/><br/>\
* 라이지움 85회 관리 2교시 2번\
',
  
// Cross Validation
'# 정의 : Train, Dataset을 나누어 검증하는 방법 <br/><br/>\
# 필요성 <br/>\
- Test Set Data 고정 <br/>\
- Test Set Overfitting 문제점 발생 <br/><br/>\
# 특징 <br/>\
1. 장점 <br/>\
- 평가 활용 : 데이터 편중 방지, 일반화 모델 생성 <br/>\
- 훈련 활용 : 정확도 향상, 데이터 부족 Underfitting 방지 <br/><br/>\
2. 단점 : Iteration 횟수 증가, 분석 시간 증가 <br/><br/>\
# 기본 알고리즘 <br/>\
<img src = "./img/HoldOut.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Hold Out Method : Training Set으로 훈련하고 빼놓았던 Validation Set으로 검증하는 기법 <br/><br/>\
<font color = "red">* 중간에 훈련 데이터를 변경 가능 </font><br/>\
* Parameter 구할 때 씀 <br/><br/>\
1. Exhaustive CV <br/>\
- Leave-p-Out CV(LpOCV) : nCp 개 가능한 만큼 반복 (n:전체, p:Validation Set 데이터 수) <br/>\
- Leave-One-Out CV(LOOCV) : 전체 샘플 수 만큼 반복 (LpOCV p = 1경우) <br/>\
<img src = "./img/LOOCV.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Non-Exhaustive CV <br/>\
- K-fold CV(KFCV) : Random, k개 subset 균등 분할(가장 널리 쓰임) <br/>\
<img src = "./img/KFCV.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Repeated Learning-Testing(RLT) : Random, 비복원 추출(LpOCV 근사) <br/>\
<img src = "./img/RLT.png" style = "max-width:100%; height:auto;"><br/><br/>\
<font color = "red">* Exhaustive CV : 가능한 모든 경우의 수 만큼 수행 -> 연산 많아짐 <br/>\
* Non-Exhaustive CV : Random 부분 추출 기법, Exhaustive CV 근사치 <br/>\
* RLT 에서 Random 복원 추출 (중복 허용)인 경우가 Monte-Carlo CV </font><br/><br/>\
* 라이지움 87회 관리 2교시 2번\
',
  
// 혼동행렬(Confusion Matrix)
'# 정의 : 예측값 일치여부 행렬 분류 모델 평가 기법<br/>\
- 오류분포표 <br/>\
- 데이터 분석에서 잘못된 예측의 영향을 간편하게 파악하기 위해 예측된 값과 실제 값이 일치하는지 여부를 행렬을 분류하는 모델 평가 기법 <br/><br/>\
# 구성 (<font color = "red">예(PN) 실(TF) </font>)<br/>\
<img src = "./img/ConfusionMatrix.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 성능평가 항목 <br/>\
<img src = "./img/ConfusionMatrixList.png" style = "max-width:100%; hegiht:auto;"><br/>\
<font color = "red">* FN(1종 오류) : 알파 위험, 오탐 / 코로나 음인데 양 <br/>\
* FP(2종 오류) : 베타 위험, 미탐 / 코로나 양인데 음 <br/>\
* 한 알고리즘의 분석 : 혼동 행렬 <br/>\
* 두개 알고리즘 비교분석 : ROC Curve(FP, TP Rate), AUC(ROC 밑면적) </font><br/><br/>\
# 1,2종 오류 줄이는 방법 <br/>\
- 1종 오류 : 임계치 높여, 구체적, 민감, 오류줄이고 품질 향상 <br/>\
- 2종 오류 : 임계치 낮춤, 표본 수 늘림 <br/>\
- 일반적 조치 : 1종 오류 최소화 임계치 맞춘 후, 표본 수 늘려 2종 오류 낮춤 <br/><br/>\
<img src = "./img/ConfusionMatrix_3.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* ITPE 8회 관리 3교시 2번\
',

// ROC Curve
'# 정의 : 임계값 / TPR, FPR / 분류모델 성능 그래프 <br/>\
- Receiver Operating Characteristics Curve <br/>\
- 모든 분류 임계값에서 참 양성 비율(TPR), 허위 양성 비율(FPR)의 매개 변수를 표시를 통해 분류 모델의 성능을 보여주는 그래프 <br/><br/>\
<a href = "https://angeloyeo.github.io/2020/08/05/ROC.html">참고문헌</a><br/><br/>\
# Graph <br/>\
<img src = "./img/ROCCurve.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 특성 <br/>\
- True Positive Rate, False Positive Rate : Threshold 의해 결정 <br/>\
- ROC Curve 점 의미 : Threshold별 FTR, TPR 확인 <br/>\
- ROC Curve 휜 정도 의미 : 클래스 구별 정도 <br/><br/>\
* ITPE 8회 관리 3교시 2번\
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
  
// [딥러닝]- ANN
'# 정의 : 사람 신경망 모방 기계학습 알고리즘<br/>\
- Artificial Neural Network <br/>\
- 인공신경망, 사람의 신경망 원리와 구조를 모방하여 만든 기계학습 알고리즘 <br/><br/>\
# 구성요소 : 자극,신호(Input Data) / 임계값(Weight) / 행동(Output)<br/><br/>\
# 문제점<br/>\
1) 학습과정에서 파라미터 최적값을 찾기 어려움. <br/>\
2) Overfitting 에 따른 문제 (학습시간이 너무 느리다) <br/><br/>\
# 학습유형 <br/>\
1. 디지털 입력 <br/>\
- 지도학습 : Hopfield NW : 훈련 데이터로 부터 올바르게 추측하는 것<br/>\
- 자율학습 : Art Model : 입력값, 목표치 x, 데이터의 주요 특징 요약, 설명 <br/>\
- 지도/자율학습 결합 : Carpenter NW : 목표값 표시 여부 상고나 없이 모두 훈련에 사용 <br/><br/>\
2. 아날로그 입력 <br/>\
- 지도학습 : Percetion, multilayer percetion <br/>\
- 자율학습 : Competitive learning, SOM <br/><br/>\
<img src = "./img/AL2_1_1.PNG" style = "max-width:100%; height:auto;">\
',
  
// [딥러닝]- DNN
'# 정의 : 여러개 은닉층 인공신경망 <br/>\
- 입력층(Input Layer)과 출력층(Output Lyaer)사이에 여러개의 은닉층 (Hidden Layer)들로 이뤄진 인공신경망 (Artifical Neural Network, ANN) <br/><br/>\
',
  
// SVM
'# 정의 : 가장 근접한 데이터 / 가장 큰 경계 식별 <br/>\
- 데이터가 사상된 공간에서 경계선과 가장 근접한 데이터(Support Vector)간의 거리가 가장 큰 경계를 식별하는 알고리즘(Maximum Margin Hyper plane)<br/><br/>\
# 구성요소 <br/>\
- Suppor Vector : 분류 경계에 가장 가까운곳에 위치한 데이터 <br/>\
- Margin : 분류경계에 가장 가까운 데이터로부터 분류 경계까지의 거리 <br/>\
- Hyperplane : 다차원의 공간의 구분을 위해 결정되는 n-1 평면 <br/>\
- Kernel Trick : 비선형 패턴 분리 위한 차원확대 Feature Space 변환 하고 경계값 찾는 방법 <br/>\
- Slack : 잘못 분류된 데이터 포인트를 본래 속하는 클래스로 비용을 들어 이동 시키는 값 <br/><br/>\
# 장단점 <br/>\
- 장점 : 높은 정확도, 범주,수치 예측 문제, 노이즈 영향x, Overfitting x, 신경망보다 사용 쉬움 <br/>\
- 단점 : 최적 모델 찾기 어려움, 커널 함수 따라 성능 차이, 데이터셋 속성수 많으면 느림, 복잡한 해석 <br/><br/>\
# 활용 사례 : 텍스트, 이미지, 의료정보, 문자 분류 \
',
  
// 비지도 학습
'# 정의 : 목표치 x / 구성 파악 / 기계학습 <br/>\
- 입력 값에 대한 목표치가 주어지지 않으며, 데이터가 어떻게 구성되었는지를 알아내는 문제의 범주에 속하는 기계학습의 한 방법 <br/><br/>\
# 알고리즘 <br/>\
- 군집화 : 밀접하게 관련된 데이터들의 그룹을 찾는 기법 <br/>\
- K-Means : 군집별 중심값에서 데이터의 거리를 측정하며 유사그룹 데이터를 분류 <br/>\
- 계층적 군집화 : 전체 데이터를 계층 구조로 분할 <br/>\
- SOM : 대뇌피질의 시각피질을 모델화 <br/>\
- PCA : 분포된 데이터들의 주성분을 가장 잘 표현할 수 있는 벡터를 찾는 기법 <br/>\
- ICA : 다변량의 신호를 통계적으로 독립된 하부 성분으로 분리 계산 방법 \
',
    
// 차원축소
'개념 : 차원의 저주 <br/>\
- 벡터의 차원이 높아짐에 따라 생길 수 있는 문제점 방지 위한 축소 기법 <br/><br/>\
# 기법 <br/>\
- PCA(Principal Component Analysis) : 데이터의 최적 표현 위한 데이터 축소, 분산 최대 축 <br/>\
<img src = "./img/PCA.png" style = "max-width:100%; height:auto;"><br/><br/>\
- ICA(Independent Component Analysis) : 독립성 최대가 되는 벡터 찾기 <br/>\
<img src = "./img/ICA.png" style = "max-width:100%; height:auto;"><br/><br/>\
- LDA(Linear Discriminant Analysis) : 데이터의 최적 분류의 견지에서 데이터 축소 \
<img src = "./img/LDA.png" style = "max-width:100%; height:auto;">\
',
  
// PCA Algorithm
'# 정의 : 주성분 표현 / 벡터 찾기 <br/>\
- 분포된 데이터들의 주성분을 가장 잘 표현할 수 있는 벡터를 찾는 기법 <br/><br/>\
# 프로세스 <br/>\
- 공분산 계산 : 입력데이터 X의 평균, 공분산 계산 <br/>\
- 고유벡터 계산 : 고유치 분석 통한 공분산의 고유치 행렬과 고유 벡터 행렬 계산 <br/>\
- 고유치 선택 : 고유치 값이 큰 것부터 순서대로 선택 <br/>\
- 변환행렬 생성 : 선택한 고유치에 대응되는 고유벡터를 열벡터로 가지는 변환 행렬 생성 <br/>\
- 선형변환 : 선형변환에 의해 특정 데이터 얻음 <br/><br/>\
# 응용사례 <br/>\
- 얼굴인식, 지문인식 <br/><br/>\
# 안면 인식 알고리즘 종류 비교 <br/>\
- PCA(Principal Component Analysis) : 1차 얼굴 인식 <br/>\
- ICA(Independent Component Analysis) : 2차 얼굴 인식 <br/>\
- FDA(Fisher Discriminant Analysis) : 특징 분류 (ex. 남,여) \
',

// GAN
'# 정의 : Generator, Discriminator / 대립 과정 / 성능 강화 / 비지도 학습 모델 <br/>\
- Generative Adversarial Network <br/>\
- 서로 대립하는 Generator, Discriminator 두 개의 네트워크를 생성하여 대립 과정 통해 성능을 강화하는 비지도 학습 모델 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/GAN.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 신경망 <br/>\
- 생성자 : 샘플 Data 생성 <br/>\
- 구별자 : 입력된 Data Fake, Real 판별<br/><br/>\
2. 이론 <br/>\
- 내쉬 균형 : 경쟁자 대응 따라 최선 선택시, 서로가 자신의 선택을 바꾸지 않음 <br/><br/>\
3. 학습 설명 <br/>\
- 반복 학습 : 확률 분포에 맞춰 반복<br/>\
- 판별 불가 모델 생성 : 확률분포 차이x -> 분류모델 학습 모델 반복 진행 <br/><br/>\
4. 기초자료 <br/>\
# 학습 원리 <br/>\
<img src = "./img/GAN_LossFunction.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/GANDetail.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Real Images : 생성, 실제 비교 <br/><br/>\
# 문제점 <br/>\
- 모드 진동 : Generator와 Discriminator 번갈아 학습 <br/>\
- 모드 붕괴 : Generator가 Discriminator 속이는 것에만 집중, 전체 데이터 분포 학습하지 못하고 일부만 학습하게 되는 현상 <br/><br/>\
# GAN 활용 모델 <br/>\
1. Generic GAN <br/>\
- DCGAN : Discriminator, Generator CNN 적용 / Fake Image 생성 <br/>\
- CGAN : Condition 추가 적용 / 특정 숫자 이미지 생성 <br/>\
2. Text to Image GAN <br/>\
- Stack GAN : 입력된 문장, 단어 해석 이미지 생성 <br/>\
- Attn GAN(Attention) : 설명 관련 단어 집중 <br/><br/>\
3. Image to Image GAN <br/>\
- Cycle GAN : 다른 스타일 Image 변환 / 밤->낮, 모네풍->피카소풍 <br/>\
- Disco GAN : 객체간 특성 관계 파악 / 가방 이미지, 유사한 느낌 신발 검색 <br/>\
- Star GAN : 도메인 동시 변환 / 이미지 변환 특화<br/>\
- Fusion GAN : 최소 패치 훈련 / 객체 -> 원하는 모양 <br/>\
<img src = "./img/GAN_Type.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 아이리포 23회 3교시 6번\
',
  
// DCGAN
'# 정의 : Fully Connected Layer 제거 / Convolution Layer / 배치 정규화 / 안정적 학습 GAN <br/>\
- Deep Convolution GAN <br/>\
- GAN의 Fully Connected layer를 제거하고 Convolution Layer와 배치 정규화 구조를 사용하여 안정적인 학습이 가능한 GAN 알고리즘 <br/><br/>\
# 개념도(<font color = "red">RTLS</font>) <br/>\
<img src = "./img/DCGAN_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 네트워크 구조 <br/>\
- Convolution : 특징 추출 합성곱 / Feature Map, stride, padding <br/>\
- Fractional-Strided Convolution : Image Upsampling <br/>\
- 배치 정규화 : 활성화 함수 값 정규분포화 (평균 0, 분산 1) <br/><br/>\
2. 활성화 함수 <br/>\
- ReLu : 생성자 모든층 / y = max(0,z) <br/>\
- Tanh : 마지막 결과 도출 <br/>\
- Leaky ReLu : 판별자 모든층 / f(x) = max(0.01x, x) <br/><br/>\
# 한계 <br/>\
- 장기간 학습시 Oscilating mode 발생(핑퐁) <br/>\
- 장기간 학습시 Collapse 문제 발생 <br/><br/>\
* 아이리포 23회 3교시 6번\
',
  
// 강화학습
'# 정의 : Agent, State, Action, Reward <br/>\
- Reinforcement Learning <br/>\
- Agent가 어떤 상태에서 행동을 수행할 때마다 그 성능에 대한 피드백을 제공하는 보상 함수를 통해 학습하는 알고리즘 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ReinforcementLearning.png" style = "max-width:100%; height:auto;"><br/>\
- 주어진 보상 함수를 통해 최적 정책을 계산 <br/><br/>\
# 주요기법 <br/>\
- MDP(Markov Decision Process) : 강화학습의 문제를 표현하는 알고리즘 <br/>\
- Markove Chain : MDP에서 액션과 상태가 없다고 가정, 상태에서 상태로 전이하는 Matrix 주어질 경우 무한대의 시간이 흐른후 모두 Sleep 하는 것 <br/>\
- Q-Learning : Q함수는 어떤 상태 s에서 액션 a를 수행하고, 최적의 규칙에 따라 액션을 수행할 때 <font color = "red">미래에 예상되는 전체 보상의 최대값</font>을 나타내는 함수 <br/>\
- DQN(Deep Q Network) : 구글이 딥마인드가 개발한 딥러닝과 강화학습의 Q러닝을 조합한 기법 <br/><br/>\
# 활용 분야 : 게임, 로봇제어, 자율주행, 금융서비스(수익율) <br/><br/>\
* 라이지움 84회 4교시 4번\
',
  
// 심층강화학습
'# 정의 : 시행 착오 알고리즘 / 누적 보상 함수 / 신경망 디자인 가속화 학습<br/>\
- Deep Reinforcement Learning <br/>\
- Deep Learning + Reifnorcement Learning <br/>\
- 강화학습의 정책 또는 가치함수를 심층 신경망으로 구성하는 기법 <br/>\
- 자율적 에이전트가 강화 학습의 시행 착오 알고리즘과 누적 보상 함수를 이용해 신경망 디자인을 가속화하는 방식의 인공지능 학습 <br/><br/>\
# 유형 <br/>\
1. 싱글 에이전트 <br/>\
- Q-러닝 기반 : 매 상태,행동 pair에 대한 Q 값 기반 행동 결정 / DQM <br/>\
- 정책경사기반 : 어떤 상태에서 어떤 행동을 취할지 결정하는 정책 직접 구함 / TRPO <br/><br/>\
2. 멀티 에이전트 <br/>\
- Q-러닝 기반 MARL 알고리즘 : 로컬 Q-함수 신경망, 전역 Q-함수 신경망을 최적의 공동행동 학습 목표로 종단간 학습 / QMIX <br/>\
- 정책경사기반 MARL 알고리즘 : 에이전트가 해야하는 행동을 출력하는 정책 함수를 경사 상승법 통한 직접 학습 방식 / 액터-크리틱 알고리즘 <br/><br/>\
3. 분산강화학습 <br/>\
- IMPALA : 2018 딥마인드 발표, Actor, Learner 구성 구조 / IMPALA <br/>\
- APE-X : 2018 구글 발표, 경험 공유 멀티 액터 / Ape-X DQN <br/><br/>\
* 라이지움 88회 관리 1교시 13번\
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
  
// 유전자 알고리즘
'# 정의 : 적응 탐색 / 최적화 문제 해결 <br/>\
- 자연세계의 진화현상에 기반한 계산 모델로 진화론의 적자생존과 자연선택의 유전학에 근거한 적응 탐색과 최적화 문제 해결을 위한 알고리즘 <br/><br/>\
# Darwin 이론기반 구성요소 <br/>\
- 적응도(fitness) : 개체가 장래의 세대에 여향을 주는 범위 결정 <br/>\
- 생식 오퍼레이터 : 개체가 다음세대에 자손을 생성 <br/>\
- 유전자 오퍼레이터 : 부모의 유전자 정보로부터 자손의 유전자 정보 결정 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/GenericAlgorithm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 개체군 : 입력값들의 집합 / 이진 인코딩, value 인코딩 <br/>\
- 적합도 함수 : 얼마나 적합할지 평가 위한 기준 함수 <br/>\
- 선택 : 다음 세대의 개체군 형성 위한 염색체 선정 / 룰렛휠, Rank, 토너먼트 <br/>\
- 교배 교차 : 새로운 자식을 형성 과정 / 단순, 이점, 균등교배 (80~95%) <br/>\
- 돌연변이 : 자식에서 임의의 몇개 비트 값 변경 / 주요기법, 0.5~1% 낮은 값 <br/><br/>\
# 프로세스 <br/>\
1. 선택(Selection) 연산 <br/>\
- 개념 : 적합도 계산 바탕, 두 부모 염색체 선택 <br/>\
- 기법 : 룰렛휠, 순위, 토너먼트 선택 <br/><br/>\
2. 교차(CrossOver) 연산 <br/>\
- 개념 : 택된 두 개의 부모 염색체로부터 하나의 자손 염색체 생성 <br/>\
- 기법 : 임의 Divison Point 기준, 부모 혼합 <br/><br/>\
3. 변이(Mutation) 연산 <br/>\
- 개념 : 일정 변이 확률 따라 자손 염색체 일부 값 변이 <br/><br/>\
4. 대체(Substitution) <br/>\
- 개념 : 새로운 자손 염색체 개체군 포함 <br/><br/>\
# 유전 알고리즘, 강화학습 비교 <br/>\
<img src = "./img/GneticReinforcementCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 1교시 8번\
',
  
// 전문가 시스템
'# 정의 : 전문가 지식 활용 / IF-THEN 구조 / 전방향, 역방향 질의 / 인공지능 시스템 <br/>\
- 전문가가 가진 지식을 지식베이스 기반으로 축적하고 IF-THEN 구조의 전방향, 역방향 질의를 통해 전문가의 지식을 활용하는 인공지능 시스템 <br/><br/>\
# 구성요소 <br/>\
- 규칙추출 : if then else, 베이즈 정리 <br/>\
- 추론기관 : 역방향 추론 기본 활용 (규칙 해석기 + 스케쥴러) <br/>\
- 설명부 시스템 : 추론과정 타당성 설명 <br/>\
- 지식 베이스 : 전문가의 지식 표현 <br/><br/>\
# 추론기법 <br/>\
- 전방향 추론 : 데이터 지향, 결과 항상 True, 추론의 건전성 <br/>\
- 역방향 추론 : 목표 지향, 겨롸 false 가능, 유사추론, 휴리스틱\
',
  
// Perceptron
'# 정의 : Pattern을 분류하기 위해 제안한 신경 회로망 모델 <br/><br/>\
# 학습규칙 : 실제 출력물과 목표 출력 간의 차이 감소를 위한 가중치 조정 규칙 <br/><br/>\
# 분류구조 <br/>\
<img src = "./img/Perceptron.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. Input Layer <br/>\
- Input : 학습을 위한 기초데이터 입력계층 <br/><br/>\
2. Hidden Layer <br/>\
- Weights : 활성화 함수의 입력값으로 사용되는 뉴런간의 연결계수 <br/>\
- Net Input Function : 입력값과 가중치의 곱을 모드 합한 값 <br/>\
- Activation Function : 임계값을 이용 뉴런의 활성화 여부 결정하기 위해 사용 <br/>\
- Criticl Point : 어떠한 갑싱 활성화 되기 위한 최소값 <br/><br/>\
3. Output Layer <br/>\
- Output : 학습을 통해 도출된 결과값을 출력하는 계층 \
',
  
// Activation Function
'# 정의 : input layer, output layer, thrshold, transfer function <br/>\
- 신경망 알고리즘의 input layer의 값을 output node로 출력할 때, 출력값의 임계치(threshold)를 계산하여 output을 출력하는 일종의 전환 함수(transfer function) <br/><br/>\
# 구성요소 <br/>\
- NET : 가중치 합 <br/>\
- f(NET) : 결과 값 <br/>\
- Weight <br/>\
- x : input 값 <br/>\
- Output : 최종 값 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/ActivationFunctionOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형 <br/>\
1. 은닉층 <br/>\
<img src = "./img/ActivationFunctionHiddenLayer.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 출력층 <br/>\
<img src = "./img/ActivationFunctionOutputLayer.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/ActivationFunction.png" style = "max-width:100%; height:auto;"><br/><br/>\
* NET : 입력과 연결 강도의 가중 합 <br/>\
- Softmax function : 0~1 결과 도출, 전체 합 1, 출력값 지수함수 적용 정규화 <br/><br/>\
* ITPE 7회 관리 2교시 1번 \
',

// [기계학습]- Feed Forward Neural Network
'# 정의 : 일방향 전달 방식 인공 신경망 / 은닉층 / 노드간 사이클 x <br/>\
- 은닉층에서 노드 간에 싸이클을 형성하지 않고 일방향으로 정보를 전달하는 방식의 인공 신경망 <br/><br/>\
* 라이지움 86회 1교시 6번 \
',
  
// Backpropagation
'# 정의 : 경사하강 관찰 / 가중치 이동 <br/>\
- 가중치들 각각에 대해 별도의 경사하강을 관찰하고, 누적오차 감소에 가장 큰 기여를 하는 가중치 한 개 값을 이동시키는 방법을 반복하여 해를 찾아가는 알고리즘 <br/><br/>\
# 특징 : 지도 학습을 이용, 출력층의 오차를 역전파하여 은닉층을 학습함으로써 다층 퍼셉트론 문제 해결 <br/><br/>\
# 절차 <br/>\
- 피드포워드 <br/>\
- 오류 역전파 계산 <br/>\
- 가중치 조정 <br/>\
- 반복수행 <br/><br/>\
# 문제점, 해결방안 <br/>\
- 문제점 : Sigmoid 함수 문제(기울기 문제) <br/>\
- 해결방안 : ReLU사용 (min max 조정) <br/><br/>\
<img src = "./img/역전파AL.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 응용 2번\
',

// Gradient Descent
'# 정의 : 신경망 학습 / 손실함수 / 편미분 / 최적점 탐색 <br/>\
- 신경망 학습에서 손실함수의 편미분 통한 전역 국부 최적점 탐색 기법 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/GradientDescentXY.png" style = "max-width:100%; height:auto;"><br/>\
- 초기값 : 경사하강 시작점 <br/>\
- 손실함수 : 경사 하강법 대상 함수 <br/>\
- 기울기 : 함수의 특정지점 미분값 <br/>\
- 학습율 : 이동 보폭 결정 <br/>\
- 모멘텀 : 경사하강 방향 결정 <br/><br/>\
# 절차 <br/>\
- 시작점 선택 : 초기 시작점 선택 / 초기 Weight, 하이퍼파라미터 <br/>\
- 기울기 계산 : 특정지점 편미분 / ∂F(X)/∂x <br/>\
- 가중치 갱신 : 학습율 반영 가중치 값 갱신 / W -∂F(X)/∂x <br/>\
- 이동 : 모멘텀과 학습율 고려 이동 보폭 확정 <br/>\
- 최소값 선택 : 전역 최소 지점 계산 및 결정 <br/><br/>\
# 경사하강법 유형 <br/>\
<img src = "./img/GradientDescentType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Gradient Descent 한계 극복 알고리즘 <br/>\
<img src = "./img/GradientDescentOptimizer.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 문제점 <br/>\
1. Local, Global Minimum/Maximum 문제 <br/>\
-> Initial Point 다양하게 설정 <br/><br/>\
2. Gradient Vanishing Problem <br/>\
- weight 변화 줄어들어, 학습 효과 감소 현상 <br/>\
-> ReLU 사용 : 활성화 영역 항상 1의 도함수 값 <br/><br/>\
* 라이지움 88회 관리 3교시 3번 <br/>\
* 119회 1교시 9번\
',

// Optimizer
'# Overview <br/>\
<img src = "./img/Optimizer.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 종류 <br/>\
1. 기본 <br/>\
- GD, SGD : 일반적인 경사 하강법 <br/><br/>\
2. 관성 <br/>\
- Momentum : 이동방향으로 관성을 적용하여 추가 이동 <br/>\
- NAG : 이동방향으로 기울기 만큼 추가 이동 보정 <br/><br/>\
3. Step Size <br/>\
- Adagrad : 실제값과 멀면 Step size 증가 방식 <br/>\
- Rmsprop : Step size 변동의 불완전성 해결 <br/><br/>\
4. Hybrid <br/>\
- Adam : Momentum + Adagrad / 기울기, Step size 모두 고려 <br/><br/>\
# 개선방안 <br/>\
- 조기 종료 : 수렴 하지 못하는 현상 방지 / 강제 수렴 <br/>\
- 규제 강화 : 여러 파라미터 대한 규제 강화 / 과적합 감소 <br/><br/>\
* 라이지움 88회 관리 3교시 3번\
',

// 비용함수, 손실함수
'# 정의 : 최적 매게변수 탐색 <br/>\
- 신경망 성능의 나쁨을 나타내는 지표로, 알고리즘이 얼마나 잘못하고 있는지를 표현하는 지표 <br/><br/>\
# 특징 : 제곱(양수), 최소화(합 최소), 경사하강법(비용 최소) <br/><br/>\
# 절차 <br/>\
<img src = "./img/CoastFunctionMechanishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 개요도 <br/>\
<img src = "./img/LossFunction.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 종류 <br/>\
1. MSE (평균제곱오차) Mean Squared Error <br/>\
<img src = "./img/MSE.png" style = "max-width: 100%; height: auto;"><br/>\
*Pi 실제값, Yi 예측값<br/><br/>\
2. RMSE (평균제곱근오차) Root MSE<br/>\
- 속도 향상 <br/>\
<img src = "./img/RMSE.png" style = "max-width: 100%; height: auto;"><br/><br/>\
3. CEE (교차엔트로피) Cross Entropy Error <br/>\
- 원-핫 인코딩 경우 사용 <br/>\
- y : 신경망 출력, t : 정답 레이블 <br/>\
<img src = "./img/CEE.png" style = "max-width: 100%; height: auto;"><br/><br/>\
4. Mini-Batch <br/>\
- 무작위 뽑아 학습 <br/>\
<img src = "./img/MiniBatch.png" style = "max-width: 100%; height: auto;"><br/><br/>\
* 라이지움 87회 관리 1교시 6번 <br/>\
* KPC 94회 1교시 2번\
',

// KNN
'# 정의 : Fingerprint / 기존 클러스터 / Instance 기반 거리 / 많은 속성 <br/>\
- 새로운 Fingerprint를 기존 클러스터 내의 모든 데이터와 Instance 기반거리를 측정하여 가장 많은 속성을 가진 클러스터에 할당하는 분류 알고리즘 <br/><br/>\
# 거리 <br/>\
- 유클리디안 거리 : 점과 점의 최단 거리 <br/>\
- 마할라노비스의 거리 : 확률분포 고려한 거리, 화이트닝 변환 사용 <br/>\
- 코사인 유사도 : 내적 공간의 두 백터간 각도 코사인값 이용한 유사한 정도 <br/><br/>\
# 동작 원리 <br/>\
- FingerPrint 확인 : 새로운 입력 값 확인 <br/>\
- 명목변수기반 그룹 분류 : 기존의 저장되어 있는 데이터 셋의 label화 <br/>\
- 거리측정 : 유클리디안 거리 <br/>\
- K값 선정 : 양의 정수값, 정렬된 거리 중 가장 가까운 K개 데이터 선정 <br/>\
- 클러스터 매칭 : 명목 데이터의 경우 다수결 기반의 클러스터 매칭 수행 <br/><br/>\
# 장단점 <br/>\
1. 장점 <br/>\
- 효율성 : 잡음 있는 경우 사용 가능 <br/>\
- 결과 일관성 : 훈련데이터 크기가 클 경우 효율적 <br/>\
- 간단한 학습 : 모형 단순, 쉬운 구현 <br/>\
- 유연한 경계 : 거리의 변형, 가중치 적용 용이 <br/><br/>\
2. 단점 <br/>\
- 성능 가변성 : K값 선정에 따라 알고리즘의 성능이 좌우됨 <br/>\
- 높은 자원 요구량 : 데이터 셋 전체를 읽어서 메모리에 기억 <br/>\
- 고비용 : 모든 훈련 샘플과의 거리를 계산 <br/>\
- 공간예측 부정확 : 영향변수 적용이 어려움 <br/><br/>\
# 활용방안 <br/>\
- 위치 측위 : 이동객체 위치에서 AP 신호 강도 측정 / RADAR <br/>\
- 선호도 분류 : 사용자 추천정보 기반 성향 및 구매 패턴 분류 / 추천상품 연계 <br/>\
- 데이터 필터링 : 포털의 중복, 유사 게시글 필터링 / 문서분류 (빈발 항목 집합, 빈발 단어 집합등) <br/>\
- 고속도로 통행시간 예측 : TCS 교통량 및 DRSC 구간 통행시간의 실시간 자류 KNN기반 분석 / DRSC 활용, 통행시간 예측\
',

// 로지스틱 회기분석
'# 개념 : 관측치 집단 분류 / 예측 모형 개발 / 통계기법 <br/>\
- 분석하고자 하는 대상들이 두 집단 혹은 그 이상의 집단으로 나누어진 경우에 개별 관측치들이 어느 집단에 분류될 수 있는가를 분석하고 이를 예측하는 모형을 개발하는데 사용되는 통계기법 <br/><br/>\
# 유형 <br/>\
- 다항 로지스틱 회귀 : 다수 범주 <br/>\
- 서수 로지스틱 회귀 : 다수 범주 + 순서 <br/><br/>\
# 로지스틱 회기분석 원리 <br/>\
<img src = "./img/LogisticFunction.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 로지스틱, 선형 회기분석 비교 <br/>\
<img src = "./img/LogisticLinearRegression.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 1교시 13번\
',
  
// DBSCAN
'# 정의 : 반경 x / 점 n개 이상 <br/>\
- Density Based Spatial Clustering of Application With Noise <br/>\
- 어느 점을 기준으로 반경 x내에 점이 n개 이상 있으면 하나의 군집으로 인식하는 방식 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/DBSCAN.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/DBSCAN_Detail.png" style = "max-width:100%; height:auto;">\
',
  
// EM Clustering
'# 정의 : Gaussian Mixture / E-Step / M-Step <br/>\
- Gaussian Mixture 모델을 기반으로 E-Step과 M-Step을 반복하여 군집형성 알고리즘 <br/><br/>\
# 기술요소 <br/>\
- Initialize : K개의 가우시안 분포 임의 형성 <br/>\
- E-Step(Expectation) : 주어진 가우시안 분포에 대하여 각 샘플의 분포 소속 확률 추정 <br/>\
- M-Stemp(Maximization) : x들의 부분에 대해 속할 확률 최대 되도록 각각 가우시안 분포 조정 <br/><br/>\
# K-Means, EM 비교 <br/>\
<img src = "./img/KMeansEM.png" style = "max-width:100%; height:auto;">\
',
  
// Dendrogram Clustering
'# 정의 : 배타적 그룹 / 큰 군집 작은 군집 포함 <br/>\
- 전체 데이터를 몇 개의 배타적 그룹으로 나누는 대신, 큰 군집이 작은 군집을 포함하는 형태로 계층을 이루도록 군집화를 수행하여 그 구조를 살펴보는 방법 <br/><br/>\
# 방법 <br/>\
- 병합적 방법 : 상향식 / N-1번 <br/>\
- 분할적 방법 : 하향식 / 2^N-1 -1번<br/><br/>\
# 개념도 <br/>\
<img src = "./img/Dendrogram.png" style = "max-width:100%; height:auto;">\
',
  
// K-Means
'# 정의 : k개 클러스터 / 거리, 분산 최소화 <br/>\
- 주어진 데이터를 사전 정의된 k개의 클러스터로 묶는 알고리즘, 각 클러스터와 거리차이와 분산을 최소화하는 방식으로 동작 <br/><br/>\
# 특징 <br/>\
- Data 중심점 : 중복x, 상호배타적 <br/>\
- 거리기반 : 군집 중심과 거리 최소화 <br/>\
- 데이터군 양자화 : 분할시 발생 오류 최소화 <br/>\
- 속도 및 구현 : 빠른 결과 산출, 구현 용이성 <br/><br/>\
# 절차(<font color = "red">KC군계재반</font>) <br/>\
- k 정의 : 군집수 k 정의 <br/>\
- Centroids 선택 : 초기 k 개 군집의 중심 (Centroids) 선택 <br/>\
- 군집 할당 : 각 관측 값들 가장 가까운 중심의 군집에 할당 <br/>\
- n차 계산 : 새로운 군집의 중심 계산 <br/>\
- 재 분류 : 재 정의된 중심값 기준, 거리기반 군집 재분류 <br/>\
- 반복 : 군집 경계가 변경되지 않을 때까지 반복 <br/><br/>\
* 101회 관리 4교시 5번\
',
  
// SOM
'# 정의 : 저차원 격자 / 고차원 데이터 / 군집 도출 방법 <br/>\
- Self Organized Map <br/>\
- 사람이 눈으로 볼 수 있는 저차원 격자에 고차원 데이터의 각 개체들이 대응하도록 인공신경망과 유사한 방식의 학습을 통해 군집을 도출해내는 기법 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/SOM_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- 입력층 : 입력 벡터를 받는 층 <br/>\
- 경쟁층 : 격자형태로 배치 <br/>\
- 가중치 : 연결강도 <br/>\
- 뉴런 : 격자 배치 노드 <br/><br/>\
# 알고리즘 <br/>\
- 연결강도 초기화 (유클리드 거리 사용) <br/>\
- 입력벡터, 프로토타입 벡터 사이 유사도 계산 <br/>\
- 반복 횟수가 최대 횟수가 아니면 현재 입력 벡터를 처음 벡터 설정하고 재수행 <br/><br/>\
* KPC 121회 합숙 1일차 1교시 7번\
',

// MCTS
'# 정의 : 정책망(폭), 가치망(깊이) / 게임 시뮬레이션 <br/>\
- 모든 트리 노드를 대상으로 하는 대신 게임 시뮬레이션을 통해 가장 가능성이 높아 보이는 방향으로 행동을 결정하는 탐색 방법 <br/><br/>\
# 절차 <br/>\
- 선택 : 현재 상태에서 특정 경로를 예측 <br/>\
- 확장 : 경로 예측 후 해당 지점에서 게임 트리 확장 <br/>\
- 시뮬레이션 : 시뮬레이션 종료 까지 임의 경로 예측 <br/>\
- 역전파 : 노드 가치 역전파, 승산 가능성 예측 \
',

// Object Detection
'# Overview <br/>\
<img src = "./img/ObjectDetectionOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 유형<br/>\
1. 2-Stage : Localization + Classfication 순차적 해결 <br/>\
- Region Proposlas : 위치 제안 <br/>\
- Feature Extractor : 각각의 위치 대한 Feature 추출 <br/>\
- Classification + Regression(바운딩 박스 예측 문제) : 분류 및 정확히 조정 <br/><br/>\
2. 1-Stage : Localization + Classification 한번에 해결 <br/>\
- Feature Extractor <br/>\
- Classification + Regreesion <br/><br/>\
# 2-Stage 방식 예시 <br/>\
<img src = "./img/2StageType.png" style = "max-width:100%; height:auto;">\
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
<img src = "./img/CNN.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 한계점 <br/>\
- 영상 내 다중 객체 인식에 한계 <br/>\
- 낮은 객체 인식 속도 <br/>\
-> 극복방안 : R-CNN, YOLO <br/><br/>\
# 발전 동향 <br/>\
<img src = "./img/CNN_Growth.png" style = "max-width:100%; height:auto;">\
',
  
// Efficient Net, Det
'# 정의 : CNN 성능화 효율 향상 모델 / Object Detection 분야 <br/><br/>\
# Efficient Net : <font color = "red">Compound Scaling</font> 통해 적은 파라미터수 가지고 정확성, 효율성 향상시킨 Image Classification Model <br/>\
-> Efficient Det : Efficient Net을 Backbone으로 하고, <font color = "red">BiFPN</font>과 <font color = "red">Compound Scaling</font>을 조합하여 적은 파라미터수로 더욱 좋은 성능을 보여주는 Object Detection 모델 <br/><br/>\
# Efficient Seg : Semantic Segmentation 분야 Efficient Net 적용 <br/><br/>\
<font color = "red">* FPN -> PANet -> Fully Connected -> BiFPN <br/>\
* Compound Scaling : Depth/Resolution 고정, Width 값 변화 테스트 </font><br/><br/>\
* 123회 관리 1교시 3번 \
',
  
// [딥러닝]- R-CNN
'# 정의 : 객체 탐색 기술 <br/>\
- 입력 영상 내 사물 인식을 위해 사물의 영역 탐지 및 사물 특징 추출, 분류 CNN 기반 신경망 알고리즘 <br/><br/>\
# 영상 객체인식 알고리즘 종류 <br/>\
<img src = "./img/ObjectDetectionAlgorithms.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
<img src = "./img/RCNN_Flow.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 관리 3교시 5번\
',
  
// Fast RCNN
'<img src = "./img/FastRCNN.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 95회 관리 3교시 5번\
',
  
// Faster RCNN
'# 정의 : Region Proposal, Classification 단계적 순차적 수행 / 2-Stage / 객체 탐지 인공신경망 모델 <br/>\
- Regional Proposal(관심영역 추출) 단계와 Classification 단계를 순차적으로 수행하는 대표적인 2-Stage 객체 탐지 인공신경망 모델 <br/><br/>\
# 특징 <br/>\
- Fast R-CNN과 SPP-net의 장점 결합 <br/>\
- 정확도 향상 및 기존 R-CNN 계열에 비해 속도 향상 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/FasterRCNN_Structure.png" style = "max-width:100%; height:auto;"><br/>\
- Regional Proposal Layer : 다수의 객체가 존재하는 위치 후보 검출 <br/>\
- 객체위치 후보 : Regional Proposal Layer로 부터 추출된 객체 위치 후보 <br/>\
- Regression : 경계 박스(객체 위치) 정보 추출 <br/>\
- Classifier : 객체 분류 정보 추출 <br/><br/>\
<img src = "./img/FasterRCNN.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 관리 1교시 4번 <br/>\
* KPC 95회 관리 3교시 5번\
',
  
// YOLO
'# 정의 : Regional Proposal, Classification 동시 수행 / 1-Stage 객체 탐지 인공신경망 모델 <br/>\
- You Only Look Once <br/>\
- Regional Proposal(관심영역 추출)과 Classification을 동시에 수행함으로써 정확도보다는 빠른 속도를 특징으로 하는 1-Stage 객체 탐지 인공신경망 모델 <br/><br/>\
# 특징 <br/>\
- 최초 실시간 객체 탐지 모델 <br/>\
- 2015년 제안, 최근 YOLO v4 <br/>\
- 하나의 네트워크, 경계박스 위치 검출 및 객체 분류 동시 수행 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/YOLO_Structure.png" style = "max-width:100%; height:auto;"><br/>\
- Convolution Layer : 다양한 크기 경계박스, 객체의 분류 정보 출력 <br/>\
- Feature Maps : Convolution Layer 로부터 추출된 특징 정보 <br/>\
- Output : 경계 박스와 분류 정보 포함 <br/><br/>\
<img src = "./img/YOLO.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 관리 1교시 4번 <br/>\
* KPC 95회 관리 3교시 5번\
', 

// [딥러닝]- RNN
'# 정의 : Directed Cycle 구성 신경망 <br/>\
- 인공신경망을 구성하는 유닛 사이의 연결이 Directed Cylce을 구성하는 신경망 <br/><br/>\
# 특징 <br/>\
- 연속 입력 데이터 적용 용이 (음성,언어인식)<br/>\
- 연속 정보 흐름 반양 : 과거 학습 정보 지식이 후행 영향(전행 히든 노드 값 저장 후 후행 입력값으로 사용)<br/><br/>\
# 구성도, 구성요소 <br/>\
<img src = "./img/RNN.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 절차 <br/>\
- Recurrent Weight : 진행결과 후행 활용<br/>\
- Sequential data 학습 : 문맥 이해 <br/>\
- BPTT(Back-Propagation Through Time) : 오류 역전파<br/><br/>\
# 문제점 <br/>\
- 장기 의존성 문제(Problem of Long-Term Dependencies) <br/>\
- 사라지는 경사 현상 : 오류역전파 거리 늘어나면서 Grant값 폭증/사라짐<br/><br/>\
# 극복방안 <br/>\
- LSTM(Long Short Term Memory)<br/>\
- GRU(Gated Recurrent Unit) : OutputGate 생략 간소화 버전 <br/><br/>\
# RNN, LSTM, GRU 도식 <br/>\
<img src = "./img/RNN_LSTM_GRU.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* 120회 응용 1교시 2번\
',
  
// BRNN
'# 정의 : 역방향, 미래 시점 데이터 활용 <br/>\
- RNN의 역방향의 연결이 존재하지 않아 미래 시점인 데이터는 추론 시 활용할 수 없는 점을 개선하여 양방향 연결을 구현한 RNN <br/><br/>\
# 구조도 <br/>\
<img src = "./img/BRNN.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 구성요소 <br/>\
- Input Layer : 입력값을 Forward, Backword Hidden Layer 모두 전달 <br/>\
- Hidden Layer(Forward) : 일반적인 RNN과 같이 입력값을 받아서 BPTT 수행 <br/>\
- Hidden Layer(Backward) : Input Layer로부터 Forwad Layer와 동일한 입력값을 받아 방향만 반대로 BPTT를 수행 <br/>\
- Output Layer : Forward, Backward Hidden Layer 모두를 반영하여 결과 출력 <br/><br/>\
# 활용 <br/>\
- 음성인식시 RNN 학습 속도 개선 <br/>\
- 번역, 필기체 인식 등에서 미래시점의 데이터 추론 <br/><br/>\
* 라이지움 88회 관리 1교시 10번\
',

// LSTM
'# 정의 : 장기 기억 가능 알고리즘 <br/>\
- RNN의 장기 의존성 문제를 해결하기 위해 Forget, Input, Output 3가지의 Gate를 통해 데이터의 정보를 업데이트 하는 알고리즘 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/LSTM_Detail.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 구성요소 <br/>\
- Forget Gate : 장기 상태의 어느 부분을 삭제할지 제어 <br/>\
- Input Gate : 현재 상태의 input을 얼마나 기억할 것인지 계산 <br/>\
- Output Gate : 계산된 값중 얼마나 다음단계에 보낼 것인지 계산 <br/><br/>\
* KPC 97회 1교시 3번\
',

// [딥러닝(Deep Learning)]- GRU
'# 정의 : RNN의 장기 의존성 문제를 해하기 위해 Reset, Update 2가지의 Gate를 통해 데이터의 정보를 업데이트 하는 알고리즘 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/GRU.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 구성요소 <br/>\
1. Reset Gate <br/>\
- 이전 Hidden state와 입력을 받아 Sigmoid 처리 <br/>\
- 이전 Hidden state에서 얼마나 값을 반영할지 결정 <br/><br/>\
2. Update Gate <br/>\
- 이전 정보를 어느 정도만 유지하여 새로운 STate 계산하여 결정 <br/><br/>\
* KPC 97회 1교시 3번\
',

// GNN
'# 정의 : 노드간 연결성 / 엣지 구성 / 그래프 데이터 학습 알고리즘 <br/>\
- Graph Neural Network <br/>\
- 노드와 노드간의 연결성을 나타내는 엣지로 구성된 그래프 데이터에 적합한 학습 알고리즘 <br/><br/>\
# Tasks (<font color = "red">GEN</font>)<br/>\
- Graph Level : 전체 그래프에 대해 분류, 회귀 문제 해결 <br/>\
- Edge Level : 노드들 연결 여부 및 연결 관계 파악 <br/>\
- Node Level : 각 노드에 대한 분류, 회귀 문제 해결 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/GNN.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 학습 과정 (<font color = "red">TACR</font>)<br/>\
- 변환 : 비유클리드 공간, 신경망 학습 형태, 인접 행렬(노드간), 노드 특징행렬(노드 속성)<br/>\
- 취합(Aggregate) : 각 레이어, 타겟 노드 인접 이웃노드들의 <font color = "red">은닉 변수 정보 취합</font> <br/>\
- 업데이트(Combine) : 타겟 노드 + 은닉 변수 -> <font color = "red">타겟 노드 업데이트</font> <br/>\
- 생성(Readout) : <font color = "red">모든</font> 노드 은닉 변수 결합, <font color = "red">그래프 단위</font> 은닉변수 생성 <br/><br/>\
* ITPE 124회 합숙 1일차 8번\
',

// 딥러닝 
'# 정의 : 비지도 + 지도 / 사람처럼 <br/>\
- 지도학습과 능동적인 비지도학습이 결합되어 컴퓨터가 마치 사람처럼 스스로 학습할 수 있는 기계학습 기법 <br/><br/>\
# 활용분야 <br/>\
- 패턴인식, 자언여처리, 자동제어, 로보틱스, 컴퓨터 비전, 가상현실, 데이터 마이닝, 시멘틱 웹, 인공신경망 모델링, DNN <br/><br/>\
# 알고리즘 <br/>\
- DNN, CNN, RNN, 제한볼츠만 머신, DBN <br/><br/>\
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
  
// 튜링테스트
'# 정의 : 사람, 기계 구분 테스트 <br/>\
- 주어진 문제 해결적 사고 상황에서 판단자가 기계(컴퓨터)의 출력과 사람의 출력을 구별할 수 없다면, 그 기계는 인간과 같은 사고를 하였다고 규정할 수 있다는 테스트<br/><br/>\
# 테스트 절차 <br/>\
1. 컴퓨터 화면을 통해 문자로만 대화 <br/>\
2. A,B 모두 사람이라고 주장 <br/>\
3. 격리된 다수의 심사원이 A,B중 어느 쪽이 사람인지에 대한 평가를 함 <br/>\
4. 어느쪽이 사람인지 구분할 수 없을 경우, A,B 둘다 인간 수준의 사고능력 가진것으로 판정\
',
  
// Vanishing Gradient Problem
'# 정의 : 국부해, Sigmoid/Squash, ReLu/Leaky ReLu, DBN/Pre-Training <br/>\
- 심층신경망의 역전파 알고리즘을 이용한 학습시 앞쪽의 은닉층으로 오차가 거의 전달되지 않는 현상 <br/><br/>\
# 발생원인 <br/>\
- Layer 깊이 측면 : 복잡한 문제 해결 위한 층 확장 / 국부해 수렴, 최적해 수렴시 반복 계산 증가 <br/>\
- 활성함수 측면 : Sigmoid 함수의 "Squash"특성 / 역전파시 최대 미분값 0.25, 층 반복시 0 수렴 <br/>\
<font color = "red">* Squash : Input을 매우 작은 범위의 Output Range로 매핑시키는 방식 </font><br/><br/>\
# 해결방안 <br/>\
1. 학습 효율 측면 <br/>\
- LSTM 활용 : Forgot Gate, 장기의존성 문제 해결 <br/>\
- DBN 활용 : 사전학습 기반, Fine Tuning 이전 Pre-Training 수행, 예측 값 정확성 개선 <br/><br/>\
2. 활성함수 개선 측면 <br/>\
- ReLU 함수 활용 : 미분값 보존, x > 0일 경우 역전파 값 상수(1) 유지 <br/>\
- Leaky ReLU 활용 : 음의 값 활용, ReLU의 0 이하 값 손실, "Dying ReLU" 문제 개선 <br/><br/>\
* KPC 92회 관리 3교시 5번\
',
  
// Drop Out
'# 정의 : Overfitting, Voting/Co-Adaption, 축소신경망, Mini-Batch 경사 감소법 <br/>\
- 심층신경망의 입력층과 은닉층의 임의 확률 기준 노드 제거, 축소 신경망 학습 통한 공동적은(Co-Adaption) 문제 해결, 규제화(Regulation)기법 <br/><br/>\
# 수행효과 : Voting 효과, 공동적응 방지 <br/><br/>\
# 수행원리 <br/>\
- 신경망 축소 : 입력, 은닉층 노드 제거 <br/>\
- 신경망 복원 : 노드 제거된 축소 신경망 학습 <br/>\
- 제거 노드 복원 후 테스트 수행 <br/><br/>\
# 유형 <br/>\
- Feed Forward : 초기 입력 노드 대상 <br/>\
- Back Propagation : 출력 노드 대상 <br/>\
- 시,공간 : 시,공간적 연관성 고려 \
',
  
// F1-Score
'# 정의 : 분류성능 평가지표 측정 / 정밀도, 재현율 조화 평균<br/>\
- 모델의 분류성능 평가지표를 측정하기 위한 정밀도와 재현율의 조화 평균의 값 <br/><br/>\
# Precision, Recall<br/>\
<img src = "./img/F1ScorePrecisionRecall.png" style = "max-width:100%; height:auto;"><br/>\
- Precision(정밀도) = TP / (TP + FP) <br/>\
- Recall(재현율) = TP / (TP + FN) <br/>\
- Accuracy(정확도) = (TP + TN) / (TP + FN + FP + TN) <br/><br/>\
# 도식 및 지표도출 <br/>\
<img src = "./img/F1ScoreDetail.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 평가지표 유형 <br/>\
1. Fall-out <br/>\
- FPR(False Positive Rate) : 실제 False인 Data 중에서 모델이 True라고 예측한 비율 (음성인데 양성) <br/>\
-> FP / (FN + FP) <br/><br/>\
2. ROC(Receiver Operating Characteristic Curve) <br/>\
- 임계 값들 기준으로 Recall-Fallout 변화 시각화 <br/>\
- 왼쪽 위 모서리에 가까울 수록 모델 성능 우수 (x:FP, y:TP)<br/><br/>\
3. AUC(Area Under Curve)<br/>\
- ROC Curve 아래의 면적 값 이용 비교 <br/>\
- 최대값 = 1, 좋은모델 (Fall-out < Recall)일수록 1에 가까운 값 수렴 <br/><br/>\
# 예상 문제 <br/>\
<img src = "./img/F1ScoreExample.png" style = "max-width:100%; height:auto;">\
',
  
// Bias
'# 정의 : 편향된 데이터 학습, 최초 데이터의 디지털 가공 과정, 알고리즘 모델 자체 XAI <br/>\
- 머신 러닝 인공지능에서 한쪽으로 치우쳐진 결과의 특성 <br/><br/>\
# 원인 : 편향된 데이터 학습, 최초 데이터 디지털 가공 과정, 알고리즘 모델 자체 <br/><br/>\
# 대응방안 <br/>\
- 정부 : 설명 요구할 권리 규정, 자동화된 의사결정 제한 권리 <br/>\
- 기업 : 기업 AI 윤리 수립, 정보 품질 진단과 감리, 설명가능 AI의 개발 및 설계, Bias 인식 알고리즘 개발 \
',
  
// One-Hot Encoding
'# 정의 : 범주형 변수 / 하나만 True <br/>\
- 범주형 변수에 대해 단 하나의 값만 True이고 나머지는 모두 False인 인코딩 기법 <br/><br/>\
# 동작원리 <br/>\
<img src = "./img/OneHotEncodingMechanishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 122회 응용 2교시 2번 <br/>\
* 라이지움 88회 관리 4교시 4번\
',
  
// Softmax 함수
'# 정의 : 0~1 정규화 / 합 1<br/>\
- 입력받은 값을 출력으로 0~1사이의 값으로 모두 정규화하며 출력 값들의 총합은 항상 1이 되는 특성을 가진 함수 <br/><br/>\
* 122회 응용 2교시 2번 <br/>\
* 라이지움 88회 관리 4교시 4번\
',
  
// NPU
'# 정의 : 머신러닝 기반 차세대 반도체 / 저전력,고성능 <br/>\
- 딥러닝 알고리즘 연산을 수행하는데 필요한 모든 제어 및 산술 논리를 구현하는 머신러닝 기반의 차세대 반도체 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/NPU_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Processing Engine : 머신러닝 데이터 입출력,연산을 처리하는 H/W <br/>\
- 데이터 전송 : Process Engine간 데이터 통신 및 병렬 처리 <br/>\
- 딥러닝 알고리즘 : 입력데이터를 딥러닝 알고리즘 활요하여 출력값 처리 <br/><br/>\
# GPU NPU 비교 <br/>\
<img src = "./img/GPUNPU.png" style = "max-width:100%; height:auto;">\
',
  
// Deep Fake
'# 정의 : GAN 이용 / 중첩 결합 / 가공 콘텐츠 생성 합성기술 <br/>\
- GAN(Generative Adversial Network)을 이용해 원본 이미지나 동영상 위에 다른 영상을 중첩하거나 결합하여 원본과는 다른 가공 컨텐츠를 생성하는 합성기술 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/DeepFake.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요기술 <br/>\
1. 데이터 <br/>\
- 수집, 훈련 : Source Video, Target Video 수집 > GAN 이용 > Fake, Real 수준 학습 <br/>\
- 프레임 적용, 합성 : Target Video 프레임 단위 적용 후 LSTM 활용 영상 재생성 <br/><br/>\
2. 알고리즘 <br/>\
- GAN : 모션 패턴 모델링, 3D 모델 재구성 처리 <br/>\
- LSTM : Residual Frame(현재, 이전 프레임 차 표현), CNN LSTM 기반 RNN 이용 벡터화 처리 <br/><br/>\
# 이슈 및 진화 방향 <br/>\
<img src = "./img/DeepFakeIssue.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 124회 합숙 1일차 1교시 6번\
',

// Hyper Parameter
'# 정의 : 의도적 설정 파라미터 <br/>\
- 신경망 학습을 통해서 튜닝 또는 최적화 해야 하는 주 변수가 아니라, 학습 진도율이나 Mini-batch 크기, 훈련 반복 횟수, 가중치 초기화 방법 등 인간의 </font color = "red">선험적 지식</font>으로 설정을 하는 변수 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/HyperParameterOverview.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 종류 <br/>\
1. 네트워크 구조 관련 <br/>\
- Hidden Layer, Unit 개수 : 훈련 데이터 대한 학습 최적화 결정 변수 <br/>\
<img src = "./img/NumberofHiddenLayerandUnits.png" style = "max-width:100%; hegiht:auto;"><br/>\
- Dropout : Overfitting 피하기 위한 정규화기법 <br/>\
<img src = "./img/DropOut.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
2. Training Algorithm 관련 <br/>\
- Learning Rate : gradient 방향 이동 속도 (Big Learning Rate, Just right, Too small)<br/>\
- Mini-batch 크기 : Data 나누는 크기 <br/>\
- Cost function : MSE, RMSE <br/>\
- Regulation Parameter : Overfitting 문제 피하기 위해 사용 <br/>\
- Training 반복 횟수 : 학습 조기 종료 결정 변수 <br/>\
- Weight initialization : 학습 성능 결정 변수 <br/><br/>\
# 비교 <br/>\
<img src = "./img/ParameterHyperParameter.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
# 튜닝방법 <br/>\
<img src = "./img/HyperParameterTunning.png" style = "max-width:100%; hegiht:auto;"><br/><br/>\
* KPC 97회 응용 1교시 16번<br/>\
* 120회 관리 4교시 3번\
',

// Computer Vision
'# 정의 : 영상 처리 기술 / 사람 처럼 사물 인지 / 수학적 알고리즘 / 추출, 분석 기술 <br/>\
- 영상 처리 기술을 활용하여 컴퓨터가 사람처럼 사물을 인지하고 의미 있는 정보를 수학적 알고리즘을 통하여 추출, 분석하는 기술 <br/><br/>\
# Process <br/>\
<img src = "./img/ComputerVisionProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
1. 전처리 <br/>\
- Gray Scale : 다중 채널 -> 단일 채널 <br/>\
- 이진화 : Black(0), White(255) <br/>\
- 확대/축소 : 이미지 크기 변경 <br/><br/>\
2. 특징 추출 (<font color = "red">스시서</font>)<br/>\
- STIP(Space-Time Interest Points) : 행동 인식, <font color = "red">관심점</font> 선택 추출 기법 <br/>\
- SIFT(Scale-Invariant Feature Transform) : 크기, 회전 <font color = "red">불변</font> 특징 추출 알고리즘 <br/>\
- SURF(Speed-Up Robust Features) : <font color = "red">적분</font> 영상 사용, 관심점과 영역 계산 <br/><br/>\
3. 탐지/분할 <br/>\
- PCA(Principa Component Anlaysis) : 고차원 -> 저차원 표변 변환 <br/>\
- Neural Network : 뉴런 상호작용, 생물학적 반복 학습 과정 모형화 <br/><br/>\
4. 분류 <br/>\
- SOM(Self-Organizing Map) : 저차원 격자, 고차원 데이터 대응, 군집 도출 기법 <br/>\
- SVM : 근접 데이터 거리 가장 큰 경계 식별, 분류 알고리즘 <br/>\
- K-Means : 군집별 중심값에서 중심 거리 기반 데이터 분류 군집 알고리즘 <br/><br/>\
* ITPE 7회 관리 1교시 7번 \
',
  
// OpenCV
'# 정의 : 컴퓨터 비전 프로그래밍 이미지 프로세싱 라이브러리, 오픈소스 BSD <br/>\
- 실시간 컴퓨터 비전을 목적으로 한 영상처리와 컴퓨터 비전 프로그래밍 분야의 대표적인 이미지 프로세싱 라이브러리 <br/><br/>\
# 특징 : 컴퓨터 비전 구현, BSD 라이선스, 다양한 플랫폼 지원 <br/><br/>\
# 알고리즘 <br/>\
- 이진화, 노이즈 제거, 외곽선 검출, 패턴인식, 기계학습, ROI(측정 범위 설정), 이미지 변환, 하드웨어 가속 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/OpenCVStrcture.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 1교시 7번\
',
  
// 머신러닝 파이프라인
'# 정의 : 수집, 예측, 제공 / 전과정 순차적 처리 / 머신러닝 아키텍처 <br/>\
- 데이터 수집에서 예측 제공 단계까지의 전 과정을 순차적으로 처리하는 머신러닝의 아키텍처 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/MLPipeline.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 단계 <br/>\
1. 데이터 흡수 <br/>\
- Data Lake : 예측 위한 정형, 비정형 라이브 수집 데이터 <br/>\
- ETL : 그대로 사용 or 동결된 데이터 집합 <br/><br/>\
2. 데이터 준비 <br/>\
- Normalization : 교육에 이용할 수 있도록 일관성 확보 <br/>\
- Bias Analysis : 모델 포함된 편향 제거 <br/><br/>\
3. 모델 교육 <br/>\
- Hyper Parameterization : 모델 정확도 향상 위한 학습 튜닝 기법 <br/>\
- Model Paralleization : 병렬성 활용, 여러 CPU, GPU 노드 작업 분산 <br/><br/>\
4. 예측 제공 : 학습된 모델 배치하여 예측, 서비스 제공 단계 <br/><br/>\
# 이점 : 무인 실행, 재사용 가능, 추적 및 버전 관리 <br/><br/>\
* 121회 관리 1교시 13번\
',
  
// Active Learning
'# 정의 : 원시 데이터 -> 레이블 데이터 확보 / 낮은 비용 지능형 시스템 구현 / 데이터 큐레이션, 기계학습 기법 <br/>\
- 레이블이 없는 대규모 원시 데이터로부터 지도학습에 최적화된 레이블 데이터를 반복적으로 확보하여 낮은 비용으로 지능형 시스템을 구현하기 위한 데이터 큐레이션 및 기계학습 기법 <br/><br/>\
# 프로세스 <br/>\
<img src = "./img/ActiveLearningProcess.png" style = "max-width:100%; height:auto;"><br/>\
- 초벌 기계 학습 : 레이블 없는 대규모 데이터 셋 + 소량의 학습용 레이블 데이터 <br/>\
- 예측 / 분류 : 레이블 없는 대규모 데이터에 대한 예측/분류 <br/>\
- 재학습용 후보 데이터 선정 : 전문 큐레이터, 후보 데이터 선정 <br/>\
- 품질향상/개선 : 증강된 데이터 <br/><br/>\
# 효과 : 모델 성능 향상, 샘플링 활용(적절한 개체 선택하는 샘플링 문제 활용 가능) \
',
  
// AutoML
'# 개념 : 데이터 특징 추출, 하이퍼파라미터 / 소모적, 반복적 / 자동화 ML Process <br/>\
- 기계학습 파이프라인에서 데이터의 특징 추출, 하이퍼파라미터 설정 등 소모적이고 반복적인 작업을 자동화하는 머신러닝 프로세스 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/AutoMLMachanism.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 프로세스 (<font color = "red">피하신</font>)<br/>\
- Feature Engineering Automation : <font color = "red">Raw Data</font>를 머신러닝 모델에 적합하게 변형 <br/>\
- Hyper Parameter Optimization : 사용자 직접 설정 값, 훈련 제어 <font color = "red">파라미터</font> <br/>\
- Neural Architecture Search : 가장 효과적 훈련할 수 있는 <font color = "red">신경망</font> 자동 탐색 방법 <br/><br/>\
# 주요기법 <br/>\
- Feature Engineering Automation : PCA, K-means clustering, Min-Max Scaling, BoW, Domain ENG <br/>\
- Hyper Parameter Optimization : Manual, Grid, Random Search, Bayesian Optimization, GD <br/>\
- Neural Architecture Search : 검색 공간,검색 전략, 성능 추적 전략, 진화 알고리즘, 강화학습 <br/><br/>\
# 활용방안 <br/>\
- 고품질 학습 데이터 생성 : 데이터 사이언티스트 개입 최소, 손실함수 및 교차 검증 오류 최소화 <br/>\
- 커스텀 ML 모델 개발 : 신경망 알고리즘 자동적 개선, 고도화 모델 개발 <br/>\
- AI 서비스 통합 : API 형태 내외부 공개, 데이터 분석서비스와 통합 인공지능 서비스 구축 <br/><br/>\
# 사례 <br/>\
- Google(Cloud AutoML) : 전이학습, NAS 기술 기반 AutoML <br/>\
- Azure(Azure ML) : 머신러닝 Work flow 단계별 도구 <br/>\
- AWS(Amazon SageMaker) : Traffic Auto Scaling 기능 내장 <br/><br/>\
<font color = "red">* Google AI, H2O.Ai, Auto-Sklearn, ML Box, Auto-Keras, TPOT, Pycaret <br/>\
같은게 있는 간글 키워드로 쓰심 좋을거 같고, <br/>\
커뮤니티에선 H2O, Pycaret 가 좀 언급 되는거 같아요. <br/>\
많이 쓰이는 기술이여서 관련된 주제에서 AutoML을 키워드로 쓰시는것도 좋을거 같아요. </font><br/><br/>\
* ITPE 8회 관리 1교시 4번 <br/>\
* 라이지움 88회 1교시 관리 2번\
',
  
// 인공지능 역기능
'# 사회적 문제 <br/>\
- 가짜 뉴스 (로봇 저널리즘)<br/>\
- Spam Mail / News <br/><br/>\
# 개인화 부작용 <br/>\
- Filter Bubble <br/>\
- 강제적 맞춤 서비스 <br/><br/>\
# 기술적 문제 <br/>\
- AI 블랙박스 이슈 : 기술적 한계 <br/>\
- AI 편향성 유입 : 훈련 데이터 사회/문화/정치 반영 <br/><br/>\
# 강한인공지능 <br/>\
- 인지, 자율성 판단, 제어 불가능 <br/>\
- 트롤리 딜레마 <br/>\
- 데이터 편향 <br/><br/>\
# 양극화 확대 <br/>\
- 화이트칼라 일자리 위협 <br/>\
- 일자리 축소 실업율 증가 <br/><br/>\
* 아이리포 23회 관리 4교시 4번\
',
  
// 인공지능 편향
'# 정의 : 인공지능 / 의도 다른 결과 내리는 현상 <br/>\
- 머신러닝과 인공지능 분석결과가 의도와는 다른 의사결정을 내리는 현상 <br/><br/>\
# Overview <br/>\
<img src = "./img/AI_Bias_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 데이터 수집 편향성 <br/>\
1. 원인 <br/>\
- 수집의 한계 : 현실 세계 수집 가능 데이터 한계 / 과적합 등 결과도출 <br/>\
- 사회 문화적 제약 : 대중의 관심사 제약 / 새로운 관심사 부적합 결과 제공 <br/>\
- 편향 데이터 축적 : 과거 이력 우선 수집 / 과적합 편중 발생 <br/>\
- 높은 복잡도 모델 : 낮은 Bias, 높은 Variance / 분산 정도 따른 편향 Trade Off 발생 <br/><br/>\
2. 극복 방안 <br/>\
- 데이터 다양화 : 가상 자료 생성, 라벨 데이터 생성 <br/>\
- 샘플링 데이터 확대 : 데이터 편향 검증 (타당도, 신뢰도) <br/><br/>\
# 학습 데이터 편향성 원인 <br/>\
1. 원인 <br/>\
- 전처리 및 데이터 가공 : 과거 경험 부합(신규 결과 부합), 과도한 전처리(정제 과정 중 손실) <br/>\
- 데이터 가공 인한 복잡도 변경 : 복잡도 낮은 함수(Under Fitting), 복잡도 높은 함수(Over Fitting) <br/><br/>\
2. 극복 방안 <br/>\
- 데이터 최적화 기법 : 변수선택 최적화, 편향 축소 <br/>\
- 데이터 전처리 : SSDP(데이터 전처리 자동화), 정규화(과다 적합 해결, 예측력 강화) <br/><br/>\
# 학습 모델 편향성 <br/>\
1. 원인 <br/>\
- 도메인 벗어난 데이터 유입 : 분석 모형 최초 범위 Outleir(신규 유형 -> 초기 모델 사용 분석) <br/>\
- 학습 데이터 부족 : 데이터 자체 부족(분류 분석 편향 결과 도출) <br/>\
- 강화 데이터 편향 : 특정 분야 쏠림 학습(필터 버블 현상) <br/><br/>\
2. 극복 방안 <br/>\
- 학습 검증 : 학습 조기 종료, 앙상블, 모델 검증(Cross Validation) <br/>\
- 최적화 검증 : 유전자 알고리즘(국부해 극복), 필터버블 현상 대응(데이터 추가 생성), 준지도 학습 추가(신규 데이터 유형 분류 추가) <br/><br/>\
* 117회 관리 4교시 6번\
',
  
// 인공지능 감성지능
'# 정의 : 감성지능 + 인공지능 / 감정 구별 / 새로운 사고 행동 결정 <br/>\
- 감성지능과 인공지능의 결합, 스스로 보유한 감정을 기반으로 자신과 타인의 감정 구별 및 새로운 사고와 행동을 결정하는 인공지능 <br/><br/>\
# 확산배경 <br/>\
- 기존 인공지능 기반 서비스 확산 한계 <br/>\
- 비대면, 대화형 서비스 활용증가 <br/><br/>\
# 구성요소 <br/>\
- 자기 인식 능력 : 자신의 기분,감정,취향이 타인에게 미치는 영향 이해 능력 <br/>\
- 자기 관리 능력 : 성취 지향성, 정서적 자기 통제력, 긍정적 관점등 관리 능력 <br/>\
- 관계 관리 능력 : 갈등관리, 멘토링, 리더쉽, 팀워크 등 인간관계 형성 능력 <br/>\
- 타인 인식 능력 : 타인의 감정 이해 및 반응 대응 처리 능력 <br/><br/>\
# 기술요소 <br/>\
1. 감정 인식 기술 <br/>\
- 입력 기술 : 심혈관계(ECG/EKG), 피부(GSR/SKT), 중추신경계(EEG) <br/>\
- 분석 기술 : Support Vecor Machine, Kernel-based Mahcine <br/><br/>\
2. 감정 생성 기술 <br/>\
- 감정 합성 기술 : NLU, LNP, NLG, WaveNet(스피치 생성) <br/>\
- 감정 반응 생성 : 외부 자극 특정 패턴, 의사결정 트리, 3D 감성 모델 <br/><br/>\
3. 감성 증강 기술 <br/>\
- 규칙기반 학습 : EML(Emotion-augmented ML) <br/>\
- 유형기반 평가 : 감성 군집화, OCC(Ortony, Clore, Collins) 감성 평가 모델 <br/><br/>\
# 활용 분야 <br/>\
- 자동차 산업 : 감성 인식, 감성 주행, 최적화 환경 <br/>\
- 로봇 산업 : 반려 로봇, 대화형 서비스 <br/>\
- 헬스케어 산업 : 치료 목적 공유, 감정 컨트롤 도움, 건강지수 계산, 신경질환 진단 <br/>\
- 고객 지원 서비스 산업 : AI 면접, AI 콜센터<br/>\
- 교육 산업 : 언어 학습, 개인 맞춤형 교육 시스템 <br/><br/>\
* KPC 97회 관리 3교시 2번\
',

// [기계학습]- 앙상블 학습법
'# 정의 : 단일 하습 예측 결과 결합 / 예층 성능 제고 / 머신러닝 기법 <br/>\
- 여러개의 학습 분류기의 예측결과를 결합하여 예측 성능을 높이는 머신러닝 기법 <br/><br/>\
# Overview <br/>\
<img src = "./img/EnsembleOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 학습방식 <br/>\
- 학습방식 : 학습데이터, 모델링, 투표, 모델평가 <br/>\
- 수행절차 : 앙상블 생성, 선택, 결합 <br/><br/>\
# 종류 <br/>\
1. Voting : 학습결과 종합 <br/>\
<img src = "./img/EnsembleVoting.png" style = "max-width:100%; height:auto;"><br/>\
* KNN : K-Nearest Neighbor <br/>\
* SVM : Support Vector Machine <br/><br/>\
2. Bagging : 반복적 샘플링 투표 <br/>\
- Bagging <br/>\
<img src = "./img/EnsembleBagging.png" style = "max-width:100%; height:auto;"><br/>\
* 결측치가 존재할 경우 우수 <br/><br/>\
- Random Forest <br/>\
<img src = "./img/EnsembleRandomForest.png" style = "max-width:100%; height:auto;"><br/>\
* 중간에 에러 발생시 다음단계로 에러가 전파되는 의사결정트리 한계 극복 <br/><br/>\
3. Boosting : 오분류 데이터 가중치 <br/>\
<img src = "./img/EnsembleBoosting.png" style = "max-width:100%; height:auto;"><br/>\
* 데이터 많은 경우 유용 <br/><br/>\
* 120회 관리 3교시 3번<br/>\
* 아이리포 23회 1교시 3번\
',

// [기계학습]- Fitting
'<img src = "./img/Fitting.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/FittingVarianceBias.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 8회 관리 1교시 2번\
',

// Over Fitting
'# 개념 : 적은 데이터 / 정확 학습 / 저편향, 고분산 <br/>\
- 샘플 데이터만 가지고 학습을 한 결과 너무 정확하게 학습이 된 상태 <br/><br/>\
# 특징 <br/>\
- 성능 : 훈련세트(좋음), 검증세트(낮음) <br/>\
- 학습결과 : 모델 학습 오류 < 테스트 데이터 오류 <br/>\
- 원인 : 잘못된 데이터, 복잡한 학습 모델, 부족한 학습 데이터 <br/>\
- 해결 방안 : Dropout, Early Stopping, Cross Validation <br/><br/>\
* ITPE 8회 관리 1교시 2번\
',

// Under Fitting
'# 개념 : 데이터 적음, 학습 적음 / Decision Boundary 근접 x 상태 / 고편향, 저분산 <br/>\
- 데이터가 너무 적거나 학습이 제대로 이루어지지 않아 Decision Boundary에 근접하지 못한 상태 <br/><br/>\
# 특징 <br/>\
- 성능 : 훈련세트(낮음), 검증세트(낮음) <br/>\
- 학습결과 : 일부 특성만 학습, 학습 오류 줄이지 못함 <br/>\
- 원인 : 많은 규제, 단순 학습 모델, 부족한 학습 데이터 <br/>\
- 해결방안 : 파라미터가 더 많은 모델 변경, 학습 알고리즘 성능, ReLu <br/><br/>\
* ITPE 8회 관리 1교시 2번\
',

// Python
'# 정의 : 인공지능 시대에 최적화된 인터프리터 언어 <br/>\
- 간결구조, 라이브러리 기반의 오픈소스 개발언어 제공하는 인터프리터 언어 <br/><br/>\
# 특징 <br/>\
- 장점 : 인터프리터 언어, 플랫폼 독립적, 오픈소스, 멀티 패러다임, 메모리 자동 관리, 동적 타입언어 <br/>\
- 단점 : 느린 속도, 모바일,웹 취약, 설계 제약 <br/><br/>\
# 자료형 <br/>\
1. 기본자료형 <br/>\
- int, float, str, bool <br/><br/>\
2. 군집 자료형 <br/>\
- complex : 실수 + 허수 / -7 + 2j<br/>\
- List : 여러가지 Object 데이터 집합 / [1,2,3] <br/>\
- Tuple : 불변 Object 집합 (1,2,3) <br/>\
- Dictionary : Key, Value / {\'name\' : \'Hong\', \'Phone\' : 010} <br/>\
- Set : 유일값 집합 / set("Hello") <br/><br/>\
# 자료형 확인 <br/>\
- 확인 : print(type(a)) -> class \'str\' <br/>\
- 검사 : if(str(type(a)) == class \'str\' ... <br/><br/>\
# 활용 분야 <br/>\
1. 개발 분야 <br/>\
- 수치 연산 프로그래밍 : NumPy <br/>\
- 데이터베이스 프로그래밍 : Pickle 모듈 <br/><br/>\
2. 분석 분야 <br/>\
- 데이터 분석 : Panda 모듈 분석 <br/>\
- 사물 인터넷 : 라즈베리 파이 제어 도구 <br/><br/>\
# R언어 Python 비교 <br/>\
<img src = "./img/R_Python_Comapre1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/R_Python_Comapre2.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 1교시 10번 <br/>\
* 122회 2교시 1번\
',

// TensorFlow 
'# 정의 : 다양한 디바이스 / 풍부 기술 / 2015 구글 / 오픈소스 딥러닝 프레임워크 <br/>\
- 다양한 디바이스를 지원하고 풍부한 기능 및 기술 지원으로 널리 사용되고 있는 2015년 구글이 공개한 오픈 소스 딥러닝 프레임워크 <br/>\
<img src = "./img/TensorFlowAPI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- High-Level 딥러닝 모델 구현 API : 모델 내부 대한 지식 없이도 함수 형태 사용 가능 <br/>\
- 풍부한 개발자 지원 : 양질의 문서 제공, 커뮤니티 지원 활발 <br/>\
- 오픈 소스 : 소스, 문서 공개, 커스터마이징 및 튜닝 가능 <br/>\
- 특징 : 세밀 제어, 코드 사용 복잡 <br/>\
- 프레임워크 구성 : 라이브러리(정의 및 런타임), 계산 그래프 <br/>\
- 메커니즘 : 정적 선언 및 실행(Define-and-run) <br/>\
- 병렬처리 : 분산 학습 과정 대한 코딩 필요 <br/>\
- 시각화 : 풍부한 학습과정, 성능 시각화 제공(Tensor Board) <br/>\
- 모델 배포 : REST API 통한 즉각 배포(TensorFlow Serving) <br/>\
- 코드 작성 : 다양한 빌트인 API, 디버깅 메소드 필요, 빠른 수정 어려움 <br/>\
- 프로젝트 : Magenta, Sonnet, Ludwig <br/><br/>\
# 구성요소 <br/>\
- Tensor : 다차원 배열 데이터 표현 방식 <br/>\
- Dataflow Graph : 텐서 형태 데이터 딥러닝 연산 <br/>\
- Tensor Board : 딥러닝 학습과정 추적 <br/>\
- Data Model : 미리 학습된 데이터 목록 <br/><br/>\
* 122회 1교시 6번\
',

// PyTorch
'# 정의 : 간결, 쉬운 사용성 / 페이스북 / 2017년 / 오픈소스 딥러닝 프레임워크 <br/>\
- 간결함과 쉬운 사용성을 강점으로 확대되고 있는 페이스북이 개발하여 2017년 공개한 가장 최근에 등장한 오픈소스 딥러닝 프레임워크 <br/><br/>\
# 특징 <br/>\
- HighLevel 딥러닝 모델 구현 API : 모델 내부 지식 없어도 함수 형태 사용 가능 <br/>\
- 풍부한 개발자 지원 : 양질의 문서, 커뮤니티 지원 활발 <br/>\
- 오픈소스 : 소스, 문서 공개, 커스터마이징, 튜닝 가능 <br/>\
- 사용 쉽고, 직관적, 단순 <br/>\
- 기능 제한 존재 <br/><br/>\
# 세부사항 <br/>\
- 프레임워크 구성 : 동적 계산 그래프, 미분 수행 <br/>\
- 매커니즘 : 동적 선언 및 실행 (Define By Run) <br/>\
- 병렬처리 : 분산 모델 학습 구현 최적화 <br/>\
- 시각화 : 최소한의 제한된 시각화 기능(Visdom-3rd) <br/>\
- 모델 배포 : 배포위한 백엔드 서버 필요, 웹 배포 프레임워크 제공 x <br/>\
- 코드 작성 : Python 과 유사한 코드, 쉽고 빠른 수정 <br/>\
- 프로젝트 : CheXNet, PYRO, Horizon <br/><br/>\
# 기타 딥러닝 프레임워크 <br/>\
- Keras(3위) : 초보자 유리, 쉽고 간단 사용, 모델 변경 어려움 <br/>\
- Sonnet(4위) : DeepMind 개발 TensorFlow 기반 상위 Library <br/>\
- MXNet(5위) : 빠른 모델 학습, 유연한 코드 작성, 다양 언어 지원 <br/><br/>\
* ITPE 6회 1교시 10번\
',
  
// 모방학습
'# 정의 : 최상 성능 위해 / 전문가 행동 모방 / 순차적 작업 <br/>\
- Imitation Learning <br/>\
- 학습자로 하여금 최상의 성능을 달성하기 위해 전문가의 행동을 모방하려고 하는 순차적 작업 <br/><br/>\
# 특징 <br/>\
- 직접적 보상 요구 x <br/>\
- 정책 직접적 설계 <br/><br/>\
# 종류 <br/>\
1. 행동복제(<font color = "red">시출정학생</font>) : 전문가를 통해 쌍으로 이뤄진 상태 및 동작 시퀀스 시연 궤적을 수집하여 정책을 지도하는 알고리즘 <br/>\
<img src = "./img/BehaviorCloning.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 견습학습(IRL > RL) : 전문가의 시연으로부터 보상 함수를 만들고 계산된 보상 함수를 통해 최적의 정책을 학습하는 알고리즘 <br/>\
<img src = "./img/ApprenticeshipLearning.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 84회 4교시 4번\
',
  
// 연합학습
'# 정의 : 데이터가 아닌 학습모델을 취합해 AI를 구현하는 방식 <br/>\
- 저장 데이터를 직접 공유하지 않는 다수의 로컬 기기와 하나의 중앙 서버가 협력하여 AI 모델을 학습하는 분산형 머신러닝 <br/><br/>\
# 처리방식 비교 <br/>\
<img src = "./img/Federated_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Federated_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- 전역 모델 분배 : 서버, 사전 정의한 최적 참여자 선정 > 각 단말 작업 관련 정보 전달 <br/>\
- 지역 모델 갱신 : 단말에 저장된 개인 데이터 사용, 로컬 AI 모델 생성 <br/>\
- 지역 모델 취합 : 로컬 AI 모델 결과값(파라미터) 압축, 암호화 하여 서버로 전달 <br/>\
- 전역 모델 갱신 : 취합된 값 이용, 전역 모델 갱신 <br/><br/>\
# 기술요소 <br/>\
1. 알고리즘 <br/>\
- FedSGD : 로컬 파라미터 평균 계산 > 수렴 까지 반복 <br/>\
- FedAVG : 각 단말 K만큼 반복 후 전달 > 수렴시간 단축(Batch Size학습) <br/><br/>\
2. 프라이버시 보호기술 <br/>\
- 차등정보보호 : 원래 데이터 수학적 노이즈 추가 > 노출 방지 <br/>\
- 동형암호 : 복호화 없이 연산 암호기술 <br/>\
- 다자간 계산 : 단말 전달값 노출x, 전체 합 알 수 있는 방법 <br/><br/>\
# 분산 학습과 연합학습 비교 <br/>\
<img src = "./img/DatacenterFederateLearningCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 86회 1교시 11번 \
',
  
// 딥러닝 경량화
'# 정의 : 기존 모델 줄이는 분야 / 제거, 공유 <br/>\
- 기존 알고리즘의 불필요한 파라미터를 제거하거나, 파라미터의 공통된 값을 가지고 공유하거나, 파라미터의 표현력을 잃지 않으면서 기존 모델의 크기를 줄이는 연구 분야 <br/><br/>\
# 필요성 <br/>\
- Need : IoT Device 확대, Edge Computing, 지능형 Device Needs 확대 <br/>\
- Solution : 기존 학습의 정확도 유지, 연산 간소화 및 복잡도 감소 <br/>\
- Effect : 학습 모델의 손쉬운 적용, 지연시간 감소, 네트워크 트래픽 감소 <br/><br/>\
# 동향 <br/>\
1. 국내 <br/>\
- 하이퍼 커넥트(양자화 / 이미지 세그멘테이션) <br/>\
- 한국 정보통신연구원(Mobile, Sqeeze / 엣지 분석 기술) <br/><br/>\
2. 해외 <br/>\
- 텐서플로(Mobile, MNasNet, Sqeeze / 양자화 경량화) <br/>\
- NVIDIA(GPGPU, 고속 GPU 상호연결) <br/><br/>\
* KPC 91회 2교시 2번\
',

// 경량 딥러닝
'# 정의 : 알고리즘 구조 개선 / 알고리즘 효율화, 경량화 기술 <br/>\
- 알고리즘 자체를 적은 연산과 효율적인 구조로 설계하여, 기존 모델의 정확도는 최대한 유지하면서 기존 모델 대비 효율을 극대화하기 위한 딥러닝 경량화 기술 <br/><br/>\
# 암기 <br/>\
- 모(RSD): Res(파라x), Squeeze(합성곱 필터 감소), Dense(Feature Map 쌓기) <br/>\
- 합(MS) : Mobile( 채널 합성곱 -> 픽셀 합성곱 나눔), Shuffle (입력부 개선) <br/>\
- 자(NM) : NetAdapt(Budget 여러개,점진적), MNasNet(모바일, 정확 속도 균형) <br/><br/>\
# 종류 (모합자)<br/>\
1. 모델 구조 변경 기술 <br/>\
<img src = "./img/ResNet.png" style = "max-width:100%; height:auto;"><br/>\
- ResNet : Short Path 연결, 기울기 소실x, 계층을 깊이 개선(지름길) <br/>\
<img src = "./img/SqueezeNet.png" style = "max-width:100%; height:auto;"><br/>\
- SqueezeNet : 합성곱 필터 감소(3*3->1*1), Fire Module 기법 <br/>\
<img src = "./img/DenseNet.png" style = "max-width:100%; height:auto;"><br/>\
- DenseNet : Feature Map 더하기 -> 쌓기, 모든층 정보 취득 가능 <br/><br/>\
2. 효율적 합성곱 필터 기술 <br/>\
<img src = "./img/MobileNet.png" style = "max-width:100%; height:auto;"><br/>\
- MobileNet : 채널별 개별 합성곱 표현 <br/>\
<img src = "./img/ShuffleNet.png" style = "max-width:100%; height:auto;"><br/>\
- ShuffleNet : 점별 합성곱시 특정 영역 채널 연산, 그룹 Shuffle <br/><br/>\
3. 경량모델 자동탐색 기술 <br/>\
<img src = "./img/NetAdapt.png" style = "max-width:100%; height:auto;"><br/>\
- NetAdapt : Budget 여러개 나누어 일정만큼 만족하는 조건 점진적 탐색 방식 <br/>\
<img src = "./img/MNasNET.png" style = "max-width:100%; height:auto;"><br/>\
- MNasNet : Controller, Trainer, Reward, RL Pareto 최적 솔루션 <br/><br/>\
* KPC 91회 2교시 2번\
',

// 알고리즘 경량화 
'# 정의 : 파라미터 제거, 공유 / 모델 크기 경량화 기법 <br/>\
- 기존 알고리즘의 불필요한 파라미터를 제거하거나, 파라미터의 공통된 값을 공유하거나 파라미터의 표현력을 잃지 않으면서 기존 모델의 크기를 줄이는 알고리즘 경량화 기법 <br/><br/>\
# 종류 (압지하)<br/>\
1. 모델 압축 기술 <br/>\
- 가중치 가지치기 : 작은 가중치 0으로 설정 <br/>\
- 이진화 : 가중치 값 이진 형태 변환 <br/><br/>\
2. 지식 증류 기술 <br/>\
- 앙상블 기법 : 학습된 다수의 큰 네트워크 -> 작은 하나의 네트워크에 지식 전달 <br/><br/>\
3. 하드웨어 가속화 기술 <br/>\
- TPU, VPU, GPU : 벡터/행렬 연산 병렬 처리 연산 전용 하드웨어 기술 <br/><br/>\
* KPC 91회 2교시 2번\
',
  
// 지식 증류
'# 정의 : 큰 모델 파라미터 활용 학습 / Teacher NW / Student NW <br/>\
- Knowledge Distillation <br/>\
- 미리 학습된 큰 모델(Teacher Network)을 통해 새로운 모델(Student Network) 생성시 파라미터를 활용해 학습시간을 줄이는 기법 <br/><br/>\
# 등장배경 <br/>\
- 환경 최적화 : 딥러닝 모델 환경 <> 실제 적용 환경 <br/>\
- 앙상블 측면 : 다량 유저 배포 어려움, 새로운 방식 앙상블 제시 <br/><br/>\
# 매커니즘 <br/>\
<img src = "./img/KnowledgeDistillationMechanishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. Model <br/>\
- Teacher Network : 복잡한 고도 학습 모델 <br/>\
- Student Network : 단순한 적용 학습 모델 <br/><br/>\
2. Function <br/>\
- Activation Function : 입력값 활성화 여부 결정, Soft max <br/>\
- Loss Function : Teacher Model의 Soft label 과 Student Model 예측 비교 <br/><br/>\
# 동작원리 <br/>\
- Soft Label : 출력값의 분포 Soft화 (10^-6, 0.9, 0.1, 10^9 -> 0.05, 0.3, 0.2, 0.005) <br/>\
- Distilliation Loss : Teacher Network 학습 후 Student Network 학습 <br/><br/>\
# 기존 학습 비교 <br/>\
<img src = "./img/KnowledgeDistillationCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 응용 1교시 9번\
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

// 인공지능 서비스 플랫폼 
'# 정의 : 인공지능 활용 서비스 개발 도구 <br/>\
- AI as a Service <br/>\
- 인공지능 서비스에 활용되는 기계학습 라이브러리, 인터페이스, 소프트웨어 제공하는 인프라 유기적 집합 <br/><br/>\
# 암기 <br/>\
- AI성능 3요소 : 알데컴 (알고리즘, 데이터, 컴퓨팅파워) <br/><br/>\
# 개념도 (<font color = "red">ECIC전</font>)<br/>\
<img src = "./img/AIServicePlatform.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 기술(학상언시인) <br/>\
- 학습 및 추론기술 : 지식표현, 지식베이스 <br/>\
- 상황이해 : 감정이해, 공간이해, 협력지능, 자가이해, 자연어 처리 <br/>\
- 언어 이해기술 : 자연어처리, 질의응답, 음성처리, 자동통번역 <br/>\
- 시각 이해기술 : 내용기반 영상검색, 행동인식, 시각지식 <br/>\
- 인식 및 인지기술 : 휴먼라이프 이해, 인지아키텍처 <br/><br/>\
# 현황 <br/>\
- <font color = "red">Google</font> Machine learning Platform : 2016.03. 발표, <font color = "red">범용 인공지능</font> 플랫폼, 방대한 데이터 기반 <br/>\
- <font color = "red">Facebook</font> Manager Platform with <font color = "red">Chatbot</font> : 2016.04. 개인 맞춤형 AI 플랫폼 <br/>\
- <font color = "red">Amazon</font> : Alexsa Voice Service <font color = "red">클라우드 기반 생활 맞춤</font>형 : 블루투스 스피커 echo 내 탑재됨 <br/>\
- <font color = "red">IBM Waton</font> Health Platform : <font color = "red">의료</font> 전문 지능형 플랫폼 길병원 온톨로지 <br/>\
- <font color = "red">GE</font> Predix Platform : 산업현장 정보 분석, <font color = "red">산업 현장</font> 데이터 + 기존 사업 <font color = "red">경험 노하우</font>\
',
  
// 인공지능 소프트웨어 보안 취약성
'# 인공지능 소프트웨어 보안 취약성 (이취익보)<br/>\
<img src = "./img/AI_SW_Week.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 3교시 4번\
',

// [AI]- AI Flow
'<img src = "./img/AI_Flow.jpg" style = "max-width:100%; height:auto;"><br/><br/>\
# Top Down 방식 <br/>\
1. Perception(1958) : 뇌의 신경활동 수식 모델화, 컴퓨터에게 처리시키는 초보적 뉴럴 네트워크 <br/>\
2. 기호처리 방식(1960) : 규칙이나 수식을 프로그램화, 사고 논리등 사람이 행하는 정보처리 수행 <br/>\
3. 룰베이스 접근방식(1980) : 전문가의 지식이나 노하우를 규칙화하여 컴퓨터에게 처리 수행하게 함 <br/><br/>\
# Bottom Up  방식 <br/>\
1. 통계,확률론적 접근(2000) : 방대한 데이터 베이스 이론에 근거한 통계적 수법으로 스스로 규칙을 생성하고 정보 처리 <br/>\
2. 뇌 과학적 접근(2006) : 뇌 과학의 연구 성과를 도입하여 보다 뇌의 신경활동을 충실히 재현 <br/><br/>\
* 라이지움 86회 4교시 1번 \
',
  
// [AI]- XAI
'# 정의 : 설명가능한 Ai <br/>\
- 사용자가 인공지능 시스템의 동작과 최종 결과를 이해 가능하도록 설명 해주는 기술(금융보안원 정의) <br/><br/>\
# 배경 <br/>\
- AI 편향 : 입력, 학습데이터 기반 <br/>\
- AI 부작용 : AI 부작용, 오류 도출(Overfit, Underfit) <br/>\
- GDPR 제22조 : 설명받을 권리 <br/><br/>\
# 구성요소 <br/>\
- 훈련데이터 : 사진들<br/>\
- 설명 모델 : ML <br/>\
- 설명 인터페이스 : 결과, 근거 <br/>\
- 사용자 : (과정, 성공, 실패)이해, 신뢰<br/><br/>\
# 구현 기술 방법 <br/>\
- 심층 설명 학습 : 심층 신경망 설명 가능한 특징 기술 / 터미널 노드 특징 맵핑 <br/>\
- 해석 가능한 모델 : 인과 관계 모델 구축 기술 / BPL, AND-OR Graph <br/>\
- 모델 귀납 : 설명 가능한 데이터를 통한 모델로 추론하는 기술 / SA(Sensitive Analysis) <br/><br/>\
* KPC 93회 1교시 11번 <br/>\
* KPC 94회 4교시 4번 \
',

// 생성 규칙
'# 정의 : IF THEN 형식 추론 규칙 <br/>\
- Production Rule <br/>\
- "조건-행동", "전제-결론"의 규칙 형태로 나타내는 지식 표현 방식으로 "IF A THEN B"형식의 추론 규칙 <br/>\
- A는 조건부, B는 결론부로 정의 <br/><br/>\
# 사례 <br/>\
- 프로덕션 시스템<br/>\
- IF 불이 나면 THEN 소방서 신고 \
',

// 의미망
'# 정의 : Node, Arc, Link 네트워크 구조<br/>\
- Semantic Network <br/>\
- 특정 객체나 개념을 표현하기 위한 노드(Node), 그리고 노드 간의 관계를 표현하기 위한 호(Arc,Link)로 구성되는 네트워크 구조 <br/>\
<img src = "./img/SemanticNetwork.png" style = "max-width: 100%; height: auto;">\
',

// 프레임 
'# 정의 : 구조, 틀 표현 자료구조 <br/>\
- 의미망의 한 종류로서 객체와 그 속성의 구조를 기술 <br/>\
- 어떤 대상, 객체에 대한 여러개의 상황정보를 하나의 구조화된 틀로 표현할 수 있는 자료구조 <br/><br/>\
<img src = "./img/Frame.png" style = "max-width: 100%; height: auto;">\
',

// 논리
'# 정의 : 인간의 사고과정과 유사한 지식 표현 <br/>\
- Logic <br/>\
- 형식적인 논리식을 이용해 지식베이스 구축 인간의 사고과정과 유사 <br/>\
- 추론과정의 완전성 보장 논리는 명제 논리와 서술 논리로 나뉨 <br/><br/>\
# 종류 <br/>\
1. 명제 논리 <br/>\
- 참이나 거짓 추론을 수행할 수 있는 형식적 논리체게 <br/>\
- ~P(not), P^Q(and), P|Q(or) <br/><br/>\
2. 술어 논리 <br/>\
- 명제에 존재하는 "주어"와 "술어"의 구조로부터 "주어"가 될 수 있는 대상에 대해 한정 기호를 사용하는 논리 <br/>\
- 논리의 단위가 명제가 아닌 객체(Object)와 술어(Predicate) <br/>\
- "John lives in a yellow house" <br/>\
- LIVE(JOHN,HOUSE)^COLOR(HOUSE,YELLOW) <br/><br/>\
<img src = "./img/PredicateLogic.png" style = "max-width: 100%; height: auto;">\
* 122회 1교시 12번\
',

// 클라우드 활용 AI구축 모델 
'# LoB (Line of Business) : MaaS<br/>\
- 개발툴, 시각/음성/자연어 등 특화 솔루션 API 및 서비스 <br/><br/>\
# 개발환경 : PaaS <br/>\
- Workflow : 공유,협업 및 자동화 도구, Jupyter, Anaconda, GitHub, VSTS <br/>\
- IDE : Open API, PyCharm, Microsoft VSCode <br/>\
- 라이브러리 : 고급 수학연산(NumPy), 컴퓨터 비전(OpenCV), 언어번역(OpenNMT) <br/><br/>\
# 인프라 : IaaS <br/>\
- ML 플랫폼 : Apache MXNet, TensorFlow, Caffe, CNTK, Keras <br/>\
- 알고리즘 : 지도, 비지도, 강화학습 <br/>\
- Data : 구조/비구조적 DB, 빅데이터 플랫폼, 클라우드 기반 DB <br/>\
- Compute : 서버, GPU, 특수HW, VM, 컨테이너 및 서비스 컴퓨팅 <br/><br/>\
* 아이리포 24회 3교시 2번\
',

// AI 프로젝트
'# 과업내용 <br/>\
1. AI 프로젝트 기획 <br/>\
- 종합계획 수립 : Big Picture Design, 타당성분석, 우선과제 선정 <br/>\
- 비즈니스 이해 : 업무목표수립, 현황 평가, 마이닝 목표수립, 계획수립 <br/><br/>\
2. Data Pipeline <br/>\
- Data 이해 : 초기데이터 수집,기술, 데이터 탐색,품질검증 <br/>\
- Data 전처리 : 데이터 설정,선택,정제 <br/><br/>\
3. ML Pipeline <br/>\
- 모델링 : 자원 투입시기, 업무분장, 소통관리 <br/>\
- 평가 : 결과평가, 프로세스 재검토 <br/>\
- 배포 : 전개계획, 모니터링, 유지보수 계획 \
',

// 한국판 AI 윤리기준
'# 정의 : 인간성 위한 인공지능 구현 / 과학기술정보통신부 제안 / 인공지능 윤리기준 <br/>\
- 인간성을 위한 인공지능 구현을 목표로 인공지능의 모든 개발과 활용 과정에서 지켜야 할 3대 기본원칙과 10대 핵심요건을 주된 내용으로 하는 과학기술정보통신부가 제안한 인공지능 윤리기준<br/><br/>\
# 3대 기본 원칙 (<font color = "red">인기사</font>) <br/>\
- 인간 존엄성 원칙 <br/>\
- 기술의 합목적성 원칙 <br/>\
- 사회의 공공선 원칙 <br/><br/>\
# 10가지 핵심조건(<font color = "red">인프다 침공연 데책안투</font>) <br/>\
- 인권보장 : <font color = "red">인간중심</font>, 인간의 권리와 자유 보장, 사람중심 서비스 <br/>\
- 프라이버시 보호 : <font color = "red">사생활 보호</font>, 개인정보 오용 최소화 <br/>\
- 다양성 존중 : 다양성, 접근성 보장, <font color = "red">비차별성</font>, 편향, 차별 최소화 <br/>\
- 침해금지 : <font color = "red">인간 무해</font>한 목적으로 활용 <br/>\
- 공공성 : 공공성 증진, 인류의 <font color = "red">공동 이익</font> 목적, 순기능 극대화, 교육 <br/>\
- 연대성 : 집단간 연대성, <font color = "red">이해 관계자 참여</font> 기회 보장, 국제사회 협력 <br/>\
- 데이터 관리 : <font color = "red">목적</font> 외 용도 활용 금지, 데이터 <font color = "red">편향</font> 최소화, 품질, <font color = "red">위험관리</font> <br/>\
- 책임성 : 책임의 <font color = "red">명확화</font>, 주체별 책임 <br/>\
- 안전성 : <font color = "red">잠재적 위험 방지</font>, 안전 보장 <br/>\
- 투명성 : <font color = "red">설명 가능성</font>, 활용 내용 및 유의사항 사전 교체 <br/><br/>\
* 라이지움 90회 관리 2교시 4번 <br/>\
* ITPE 6회 관리 1교시 12번\
',  
 
// 인공지능 규범 동향
'# 규범 동향 <br/>\
1. 주요 국가별 <br/>\
- EU : 전자인간 인정 <br/>\
- 미국 : 학계중심, 정부, 기술자 공동 설계 <br/>\
- 영국 : 정부 위원회 구성 촉구 <br/>\
- 일본 : 창작물 저작권 인정 <br/>\
- 한국 : 로봇윤리헌장 제정 위원회, 로봇윤리헌장 발표 <br/><br/>\
2. 민간 연구기관 (<font color= "red">O공 I휴 M친 C위</font>)<br/>\
- Open Roboethics initiative : 연구, 공론화 <br/>\
- IEET : 트랜스 휴머니즘 비영리 단체, 미래비전 연구 <br/>\
- MIRI : 버클리대 소재 연구소, 인간 친화적 인공지능 위한 연구 <br/>\
- CSER : 로봇의 위험성 연구 <br/><br/>\
# 윤리 규범 동향 <br/>\
- OECD : 인공지능 권고안 마련, G20 정상선언문 반영 <br/>\
- EU : 신뢰할 수 있는 인공지능 윤리 가이드라인 <br/>\
- UNESCO : 인공지능 윤리에 대한 권고사항 초안 <br/>\
- 일본 : 인간중심 인공지능 사회 원칙 제시 <br/>\
- 미국 : AI 활용 대한 구글 원칙 제정 <br/><br/>\
* ITPE 6회 1교시 12번 <br/>\
* 아이리포 23회 4교시 3번\
',
   
// 인공지능 국가전략 
'# 정의 : 2019년 12월 17일 경제,사회 전반의 혁신 프로젝트로서 과학기술정보통신부를 비롯한 전 부처가 참여해서 마련한 전략 <br/><br/>\
# 내용 <br/>\
1. 생태계 구축 <br/>\
- AI 인프라 : 공공 민간데이터<br/>\
- AI 기술 경쟁력 : 반도체 기술 중심<br/>\
- 과감한 규제 혁신 : 포괄적 네거티브 규제<br/>\
- AI 스타트업 : AI 올림픽 <br/><br/>\
2. 활용 <br/>\
- 교육 : 관련학과 증설 <br/>\
- 전산업 활용 : 대형 AI 융합 프로젝트 <br/>\
- 디지털 정부 : 차세대 지능정부 구현 <br/><br/>\
3. 사람중심 구현 <br/>\
- 포용적 일자리 안전망 : 취업 지원제도 <br/>\
- AI 역기능 및 윤리 확립 : 사이버 침해 대응체계 고도화 \
',

// 인공지능 개인정보보호 자율점검표
'# 정의 : 인공지능 기술 적용 / 개인정보 처리 안 <br/>\
- 지능정보사회에서 인공지능 기술이 적용된 새로운 서비스가 도입,확산됨에 따라 개인정보 침해 등 다양한 사회적 문제 발생 우려시 개인정보 처리의 안 <br/><br/>\
# 기반 <br/>\
- 법규 : 개인정보보호법 상 보호 원칙 <br/>\
- 설계 : PbD(사초내균전투존) <br/>\
- 윤리 : AI 윤리기준(인프다침공연데책안투) <br/><br/>\
# 6대 원칙(<font color = "red">공적안투참책</font>) <br/>\
- 적법성 : 수집, 이용, 제공 근거 적법, 명확 원칙 <br/>\
- 안전성 : 안전 처리 관리 원칙 <br/>\
- 투명성 : 알기 쉽게 제공 원칙 <br/>\
- 참여성 : 소통체계, 정보주체 권리 보장 원칙 <br/>\
- 책임성 : 처리 대한 책임 원칙 <br/>\
- 공정성 : 수집 목적 맞게 처리, 차별,편향 최소화 원칙 <br/><br/>\
# 총괄 흐름도 <br/>\
1. 단계별 점검 <br/>\
- 기획 설계 : PbD, PIA <br/>\
- 개인정보 수집 : 수집 동의, 수집 근거, 고지 <br/>\
- 개인정보 이용,제공 : 근거확인, 가명정보 허용 범위 기준 준수 <br/>\
- 개인정보 보관,파기 : 안전 보관,관리, 지체없이 파기 <br/><br/>\
2. 상시 점검 <br/>\
- AI 서비스 관리 감독 : 정기 교육, 관리,감독 <br/>\
- AI 서비스 이용자 보호 및 피해구제 : 처리방침 투명공개, 이용자 권리행사 요구 절차 마련 <br/>\
- 개인정보 자율보호 활동 : 자율적 보호활동 <br/>\
- AI 윤리 점검 : 지속 점검 개선 <br/><br/>\
* 125회 관리 3교시 4번\
',
  
// 적대적 공격
'# 정의 : 적대적 교란, 오분류 발생, 공격기술 <br/>\
- 머신러닝의 심층신경망을 이용한 모델에 적대적 교란을 적용하여 오분류를 발생시키는 공격 기술 <br/><br/>\
# Overview <br/>\
<img src = "./img/AdversalAttackOverview.png" style = "max-width: 100%; height: auto;"><br/><br/>\
# 공격유형 <br/>\
1. 회피 공격(Evasion Attack) <br/>\
- 개념 : 최소한의 변조로 추론과정에서 데이터를 교란시켜 머신러닝 속이는 기법 <br/>\
- 종류 : GAN based 기술 <br/>\
- 사례 : 자율주행 적대적 스티커 <br/><br/>\
2. 중독 공격(Poisoning Attack) <br/>\
- 개념 : 악의적 학습 데이터 이용한 모델 공격 기법 <br/>\
- 종류 : SVM Poisoning, Anomaly Detection System <br/>\
- 사례 : 챗봇 편향 데이터 중독 <br/><br/>\
3. 탐색적 공격(Exploratory Attacks) <br/>\
- 전도 공격(Model Inversion Attack) : 입력, 결과값 통한 학습데이터 추출 <br/>\
- 모델 추출 공격(Model Extraction Attack) : 입력, 결과값 통한 모델 추출 <br/>\
- 종류 : Model Inversion, Model Extraction via APIs <br/><br/>\
# 대응방안 <br/>\
<img src = "./img/AdversalPortect.png" style = "max-width: 100%; height: auto;"><br/>\
1. 회피 공격(Evasion Attack) <br/>\
- 데이터 구별 이진분류기 이용한 판별 <br/>\
- MagNet : 적대적 예제에서 신경망 분류기 보호 위한 프레임 워크 <br/>\
- Highly Confident Near Neighbro(HCNN) 알고리즘 활용 <br/><br/>\
2. 중독 공격(Poisoning Attack) <br/>\
- 편향성 제거 위한 양질의 데이터 제공 <br/>\
- Input Layer Black list 정책 적용 <br/><br/>\
3. 탐색적 공격(Exploratory Attacks) <br/>\
- 모델 역추적성 문제 대응 위한 XAI 적용 <br/>\
- 모방모델 대안 필요 <br/><br/>\
* 123회 관리 2교시 2번 <br/>\
* 119회 응용 2교시 3번\
',
  
// 음성비서
'# 정의 : 언어 이해 / 자동제공 / AI 비서 <br/>\
- 머신 러닝, 음성 인식, 문장 분석, 상황인지 등 인공지능 기술과 첨단 기술의 결합으로 사용자의 언어를 이해하고 사용자가 원하는 지시 사항을 수행하는 기능을 자동으로 제공하는 AI 비서 서비스 <br/><br/>\
# 기반기술 <br/>\
1. 음성인식 디바이스 <br/>\
- Zero UI : 사용자 Interaction, Interface <br/>\
- STT(Speech to Text) : HMM, DNN, RNN <br/><br/>\
2. AI Platform <br/>\
- 머신러닝 : 빅데이터 기반 문장 학습 <br/>\
- 자연어 분석 : 형태소 단위로 잘라 의존관계 파악 <br/><br/>\
3. Third Service <br/>\
- 공유 서비스 인터페이스 표준 : W3C SOAP, REST, RSS 표준 <br/>\
- 교환 데이터 표준 : W3C XML, JSON 표준 \
',
  
// Pre-Crime
'# 정의 : 인공지능을 통한 예방 구현 <br/>\
- 다양한 치안 데이터 수집 및 딥러닝 통한 분석을 통해 범죄가 일어나기 전 사건을 예측하여 범죄자를 식별, 추적, 차단하는 최첨단 치안 시스템 <br/><br/>\
# 구성요소 <br/>\
<img src = "./img/PreCrime.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 사례 <br/>\
- 국내 : 음란물 차단, 전자발찌, 범죄분석, 주가조작 <br/>\
- 해외 : 미국(PrePol;자동출동), 영국(OASys;재범), 일본(CCTV+행위분석;절도행위에측,범죄자 추적), 중국(AI+안면인식;안면인식 AI선글라스, 범죄자예측) <br/><br/>\
* 120회 응용 1교시1 번\
',
  
// 지능형 로봇 
'# 정의 : 인간 모방 / 자율적 동작 <br/>\
- 인간을 모방하여 외부 환경을 인식하고 상황을 판단하여 자율적으로 동작하는 지능형 기계 로봇 <br/><br/>\
# 유형 <br/>\
- 산업 제조용 <br/>\
- 개인 서비스 <br/>\
- 전문 서비스 : 의료 복지, 군사용 <br/>\
- 로봇 기반 <br/><br/>\
# 기술 요소 <br/>\
- 인식 및 제어 : 조작제어, 위치인식, 환경인식 <br/>\
- 구동 및 자율주행 : 자율주행, 센서/액츄에이터, 플랫폼 <br/>\
- 구동/센싱 : 스마트 그리퍼, 센서기술 <br/>\
- 로봇운용 SW : 머신 비전 기반, 영상 분석, 인터랙티브 SW <br/>\
- 센서기술 : 관성 측정, 액티브 비컨, 초음파, 시각, 촉각, 청각 <br/><br/>\
* KPC 95회 응용 3교시 8번\
',

// 초대규모 AI
'# 정의 : 인공신경망 파라미터 / 수천억 이상 / 종합적 추론 가능 / 범용 AI 모델 <br/>\
- 인공신경망의 파라미터를 수천억 이상 단위로 대폭 증가시켜 종합적 추론이 가능한 범용 AI 모델 <br/><br/>\
# 경쟁력 확보 전략 <br/>\
1. 컴퓨터 자원 (슈퍼 컴퓨터 지원 전략 마련)<br/>\
- 학습시간 증가 : 슈퍼 컴퓨터 지원(민간 AI 학습) <br/>\
- 고성능 자원 필요 : 추론검정 등 테스트 단계 컴퓨팅 자원 지원 <br/><br/>\
2. 데이터 (상징적 초대규모 데이터 구축)<br/>\
- 대규모 데이터, 성능 향상(Open AI) : 절대적 데이터 양 확대 지원 <br/>\
- 데이터셋 라벨링 부담 : 모델 선정, 데이터 민관 협업 구축 <br/><br/>\
3. 알고리즘/모델 (한국어 모델 평가체계 구축 지원) <br/>\
- 연구(대형화), 서비스(경량화) : 대형화(연구계 추진), 경량화(조기 확보 사업화 기반 마련) <br/>\
- 자연어 분야 성능평가(GLUE) 측정 : 한국어 자연어 이해분야 성능 평가 기준 필요 <br/><br/>\
# 핵심 전략 <br/>\
1. 슈퍼컴퓨터 지원 전략 마련 <br/>\
- 초대규모 모델 인프라 지원 : 국가차원 인프라 지원 <br/>\
- 지속가능한 지원 모델 선정 : 정부 주도 센터 건립 or 민간 클라우드 협업 <br/>\
- 전방위적 컴퓨팅 자원 지원 : 학습 과정(현재), 추론 과정(추가) <br/><br/>\
2. 대규모 데이터 셋 구축 <br/>\
- 초대규모 데이터 구축 지원 : 정부 차원 데이터 구축 <br/>\
- 수요 및 분야별 특성에 맞는 차등 구축 <br/>\
- 데이터 연계 구축 : AI Hub + 연구용 연계 데이터셋 구축 <br/><br/>\
3. 우리나라 전용 모델 성능 평가 체계 구축 지원 <br/>\
- 국내 전용 평가 체계 필요 : GLUE, SuperGLUE 벤치마크 데이터셋 활용 평가 <br/>\
- 보조금, 컴퓨팅 자원 지원 : 민간 주도 한국어 모델 벤치마크 데이터 셋 구축 <br/><br/>\
# 사례 <br/>\
- GPT-3(오픈 AI) : 수천억 단위 파라미터, 데이터 수 확장, 퓨샷러닝 기반 언어 모델 <br/>\
- 하이퍼클로바(네이버) : GPT-3 대비 파라미터, 데이터 수 확장, 한국어 기반 언어 모델 <br/><br/>\
* ITPE 합숙 124회 5일차 6번\
',
  
// NLP
'# 정의 : 인간의 언어를 컴퓨터로 이해, 해석하는 기술 <br/>\
- Natural Language Processing <br/>\
- 인간의 언어 현상을 기계적으로 분석해 컴퓨터가 이해 가능한 형태로 만드는 자연언어 이해/변환 과정 혹은 그러한 형태를 다시 인간이 이해 가능한 언어로 표현하는 제반기술 <br/><br/>\
# 인공지능과 관계 <br/>\
- NLP(Processing) : 음성 처리 <br/>\
- NLU(Understanding) : 기계 이해 변환 (NLP 일부분) <br/>\
- NLG(Generation) : 다시 자연어로 변환 (NLP 일부분) <br/><br/>\
# 구성도 <br/>\
<img src = "./img/NLP_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/NLP_Overview2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 발전과정 <br/>\
<img src = "./img/NLP_Growth.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. NLU(<font color = "red">형구의담</font>) <br/>\
- 형태소 분석(Morphological Analysis) : 형태소 인식 / 나는 날다 <br/>\
- 구문 분석(Syntax Analysis, Parsing) : 품사 정보 분석 / 나(명사)는(전성어미) 날다(동사) <br/>\
- 의미 분석(Semantic Analysis) : 문장 성분간 의미 파악 / 사람(비행기)이 사과를 먹는다 <br/>\
- 담론 분석(Disource Analysis) : 문맥 속에서 의미 분석 / 우승해서 울었다, 슬퍼서 울었다 <br/><br/>\
2. NLG(<font color = "red">담문어문형</font>) <br/>\
- 담론 생성 : 질문답변 위한 상황적합한 자연어로 변환 / 자유 문장<br/>\
- 문장 계획 : 질문에 적합한 자연어 문법 계획 및 생성 / 평서문, 요약문 등... <br/>\
- 어휘 선택 : 생성된 문장에서 구문(명사, 동사, 형용사 및 부사)을 선택 / 구어체 문어체 <br/>\
- 문장 생성 : 구문 규칙 따라 올바른 문장 텍스트 생성 / 1차 생성 <br/>\
- 형태 생성 : 문장 텍스트 상황 오류 검출, 최종 문장 확인 과정 / 최종 확인 <br/><br/>\
# 기술요소 <br/>\
1. NLU <br/>\
- One-Hot Vector Encoding : 단어를 벡터화 <br/>\
- Word Embedding : One-Hot Vector 보완 기술, CBOW(빈칸), SKIN-GRAM(주변단어) <br/><br/>\
2. 대화 관리 <br/>\
- 대화 관리 : Open Domain(다양한 형태 주제), Close Domain(한정적 주제) <br/>\
- 답변 생성 : 검색기반 모델(기계학습 기반), 생성기반 모델(말뭉치 학습) <br/><br/>\
3. NLG <br/>\
- Discourse Generation : 적합한 자연어 변환 과정 <br/>\
- Sentance Planning : 질문에 적합한 자연어 문법을 계획 및 생성 <br/><br/>\
# 처리 분야 <br/>\
<img src = "./img/NLP_ProcessArea.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 4번\
',
  
// NER
'# 정의 : 엔티티 인식 추출 분류 기법 <br/>\
- Named Entity Recognition <br/>\
- 문자열 안에서 NE의 위치를 알아내고, 사전 정의한 카테고리에 따라 알맞게 분류하는 작업 <br/><br/>\
# 유형 <br/>\
- Generic NEs : 인물, 장소, 명칭 해당 <br/>\
- Domain-specific NEs : 단백질, 효소, 유전자 등 전문 분야 용어 해당 <br/><br/>\
# Tagging System (BIESO, BIO(자주쓰임))<br/>\
- Begin : 개체명이 시작 <br/>\
- Inside : 토큰이 개체명 중간에 존재 <br/>\
- End : 개체명의 마지막 위치 <br/>\
- Singleton : 하나의 토큰이 하나의 개체명일 때 <br/>\
- Outside : 개체명이 아닐 경우 <br/>\
<img src = "./img/BEISO_System.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구현 방법 <br/>\
- 규칙기반 : Domain-specific 사전 적용, 패턴 적용 접근 (높은 정확도, 낮은 재현율) <br/>\
- 비지도 학습 : 문맥유사도 기반 Clustering (지도학습 비교 얕은 지식 의존) <br/>\
- 변수 기반 지도학습 : Feature base 지도학습 <br/><br/>\
# 구조 <br/>\
- 입력 분산 표현 : Pre-trained Word embedding <br/>\
- Context Encoder : CNN, RNN <br/>\
- Tag Decoder : Softmax, RNN <br/><br/>\
* 123회 관리 4교시 4번\
',
  
// 워드 임베딩
'# 정의 : 단어 특성 / 벡터화 / 유사도 계산 기법 <br/>\
- 전체 단어들 간의 관계에 맞춰 해당 단어의 특성을 갖는 벡터로 바꿔주는 단어들 사이의 유사도 계산하는 기법  <br/><br/>\
# 유형 <br/>\
<img src = "./img/Embedding.png" style = "max-width:100%; height:auto;"><br/>\
# 기술발전 측면 분류<br/>\
1. 통계적 모델 <br/>\
- TDM : 행렬 표현, 수치화 단어 비교, 수량 한계 <br/>\
- TF-IDF : 문서내 출현 빈도, 문서 출현 역빈도<br/>\
- One-Hot Encoding : 문자 -> 숫자 기본 방법, 유사도 파악 어려움 <br/><br/>\
<font color = "red">* TDM : Term-Document Matrix <br/>\
* TF-IDF : Term Frequency-Inverse Document Frequency </font><br/><br/>\
2. N-gram 모델 <br/>\
- CBOW : 앞뒤 단어 통한 유추, 컨텍스트에서 단어 평균 적용 Softmax <br/>\
- Skip-gram : 입력 단어 통한 유추, 컨텍스트에서 단어 1:1 대응 Softmax <br/><br/>\
3. NN 모델 <br/>\
- Word2Vec : 단어 벡터 평면 배치, 신경망 연산, CBOW, skip-gram <br/>\
- BERT : 딥러닝 모델 적용, 범용 언어 모델 <br/><br/>\
# 임베딩 수준 측면 분류 <br/>\
1. 단어 수준 임베딩 <br/>\
- Word2Vec : CBOW + Skip-gram <br/>\
- FastText : n-gram character 적용, 여러개 단어 잘라 벡터 표현 <br/>\
- ELMo : 사전 훈련 언어 모델 사용, 양방향 적용 방법 (<font color = "red">Bank Account, River Bank</font>)<br/><br/>\
2. 문장 수준 임베딩 <br/>\
- BERT : 사전학습 모델, 성능 향상, 양방향, Transformer Decoder, 빈간 추론 <br/>\
- GPT : 데이터셋, 매개변수, 단방향, Transformer Encoder, 문장 생성 <br/>\
<font color = "red">* ELMo : Embedding from Language Models <br/>\
* BERT : Bidirectional Encoder Representations from Transformer <br/>\
* GPT : Generative Pre-trained Transformer </font><br/><br/>\
<hr width = "100%" color = "blue"  noshade/>\
# 정의 : 단어간 유사도, 중요도 파악 / 저차원 실수 벡터 맵핑 / 가깝게 배치 / 자연어 처리 모델링 기술 <br/>\
- 단어간 유사도 및 중요도 파악을 위해 단어 저차원의 실수 벡터로 맵핑하여 의미적으로 비슷한 단어를 가깝게 배치하는 자연어 처리 모델링 기술 <br/><br/>\
# 종류 : 희소표현(Sparse Representation), 밀집표현(Dense Representation) <- 공간 낭비 해결위해 대표적으로 사용 <br/><br/>\
# Dense Representation Embedding 유형 <br/>\
<img src = "./img/DenseBasedEmbedding.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 프로세스 <br/>\
<img src = "./img/WordEmbeddingProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
<hr width = "100%" color = "blue"  noshade/><br/>\
# 구성 방식 <br/>\
- 워드 클라우드 : 관심사, 키워드, 개념 빈도수 카운트 시각화 <br/>\
- N-gram Model : Unigram(현재 단어), Bi-gram(바로 전 단어 까지), Tri-gram(3단어) <br/>\
- 토픽 모델링 : 단어, 말뭉치(corups) 주체, 키워드별 묶음, 비지도 학습 (LDA, 베이즈이론) <br/><br/>\
# 유형 <br/>\
- 통계 기반 : TDM, TF-IDF, One-hot Encoding <br/>\
- NN 기반 : Word2Vec, BERT <br/>\
- 단어 수준 : Word2Vec, Fast Text, ELMO(Embedding from Language Models) <br/>\
- 문장 수준 임베딩 : BERT <br/><br/>\
* 124회 관리 4교시 1번 <br/>\
* 123회 관리 4교시 4번<br/>\
* KPC 96회 관리 4교시 5번\
',
  
// TF-IDF
'# 개념 : TF, DF, IDF 수치화 / 통계적 단어 특성 추출 알고리즘 <br/>\
- 여러 문서에서 단어의 중요도를 단어빈도 TF(Term Frequency), 문서빈도 DF(Document Frequency), 역문서 빈도 IDF(Inverse Document Frequency) 수치화 하고 이를 기반으로 단어의 중요도를 수치화 평가 하는 통계적 단어 특성 추출 알고리즘 <br/><br/>\
# 구성요소 <br/>\
- TF : 문서 내부 단어 출현횟수 수치화 <br/>\
- DF : 문서집합에서 특정단어 출현되는 문서 개수 <br/>\
- IDF : 문서빈도 / 단어빈도 + 1 <br/>\
- TF-IDF : TF * IDF <br/><br/>\
# 예제 <br/>\
<img src = "./img/TFIDFExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 산출식 <br/>\
<img src = "./img/TFIDFCalc.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 89회 관리 1교시 8번 <br/>\
* KPC 96회 관리 4교시 5번\
',
  
// Word2Vec
'# 개념 : 단어 벡터 / 컴퓨터 인식 / 워드 임베딩 <br/>\
- 단어를 벡터 평면에 배치하여 컴퓨터가 인식할 수 있도록 문맥적 의미를 보존하는 워드 임베딩 기법 <br/><br/>\
# 신경망 연산 <br/>\
- 은닉 벡터(h) = 입력(x) x 입력 가중치 행렬(w) <br/>\
- 출력(y) = 은닉 벡터(h) x 출력 가중치 행렬(w) <br/><br/>\
# Word2Vec 학습 모델 <br/>\
<img src = "./img/Word2VecLearningModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# TF-IDF, Word2Vec 비교 <br/>\
<img src = "./img/TF_IDF_Word2Vec.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 96회 관리 4교시 5번\
',

// Attention
'# 정의 : Encoder, Decoder 사이 위치 / Embedding Vector 가중치 계산 / Decoder 확률 예측 성능향상 메커니즘 <br/>\
- Encoder, Decoder 사이에 위치하여 Input Data 에 대해 Embedding Vector의 가중치를 계산하여 Decoder의 확률 예측 성능을 향상 시키는 메커니즘 <br/><br/>\
# 메커니즘 <br/>\
<img src = "./img/AttentionMechanishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Softmax : 주어진 Sequence에서 집중할 Sequence 예측하는 확률값, 다음 Sequence 추측 <br/>\
- tanh : 출력 범위 -1 ~ 1 Sigmoid 활성 함수 확장 형태 <br/>\
- weight : Encoder의 Sequence 결정위한 가중치 <br/><br/>\
* KPC 81회 관리 4교시 6번\
',
  
// Transformer
'# 정의 : RNN 탈피 / seq2seq의 인코더, 디코더 모델 / 셀프 어텐션 구조 / 자연어 처리 모델 <br/>\
- RNN을 탈피하고 seq2seq의 인코더-디코더 모델과 셀프 어덴션 구조만으로 구현한 자연어 처리 모델 <br/><br/>\
# 등장배경 <br/>\
- RNN 인코더-디코더 모델 한계 : 정보손실, 긴 문장 오류, 병렬 불가 <br/>\
- RNN + Attention 모델 : 인코더 결과물 재참조, 연관 단어 집중, 품질 향상, RNN사용 여전히 느림 <br/>\
- Transformer 등장 : RNN 구조 탈피, Self-Attention 매커니즘, 병렬처리 가능 <br/><br/>\
# 특징 <br/>\
- 2017년 구글 "All you need is Attention" <br/>\
- RNN 보다 우수 <br/>\
- BERT GPT 기반 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/Transformer.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성도 <br/>\
<img src = "./img/TransformerNetworkStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 입력 <br/>\
- Positional Encoding : 입력단어 위치 값 추가, 사인, 코사인 함수 이용, RNN 미사용 극복 <br/><br/>\
2. 인코더 <br/>\
- Encoder Self-Attention : 입력 토큰 병렬, 이전 어텐션 참조 <br/>\
- Feed Forward NN : 완전 연결망, 잔차 이용, 정규화 수행 <br/><br/>\
3. 디코더 <br/>\
- Masked Self-Attention : 입력 토큰 병렬, 현재 이후 단어 마스킹 <br/>\
- Encoder-Decoder Attention : Self Attention x, E-D 결합 <br/>\
- Feed Foward NN : 인코더 구조와 동일 <br/><br/>\
4. 출력 <br/>\
- Linear Layer : 디코더 출력 벡터화 Fully Connected <br/>\
- Softmax : 출력단어 예측 <br/><br/>\
* ITPE 7회 관리 3교시 3번 <br/>\
* 123회 관리 4교시 4번\
',
  
// BERT
'# 정의 : Transformer 인코더 / Fine-Tunning / 양방향 / NLP Model <br/>\
- Transformer의 인코더 구조로 구성되어 Fine-Tunning 된 양방향 자연어 처리모델 <br/>\
- 2018년 구글에서 공개한 Language Representation Model로 언어 표현을 사전 훈련하는 방법 <br/><br/>\
# 특징 <br/>\
- 활용 : 문장 중간 단어 검색 기능 / 자연어 처리 분야 대부분 <br/>\
- 양방향 속성 : Masked Language Model 사용 <br/>\
- 다이나믹 임베딩 : 동일 단어 다른 임베딩, 중의성 해소 <br/>\
- 활성화 함수 : LeRu 대신 GELU(Geussian Error Linear Units) 사용 <br/>\
- Fine Tuning : 기학습 모델 기반, 변형하여 Weight Update 방법 <br/><br/>\
# 구조 <br/>\
- Token Embedding : Char 단위 임베딩, Sub-Word 생성 <br/>\
- Segment Embedding : 토큰 시킨 단어 다시 하나의 문장 생성 <br/>\
- Position Embedding : 토큰을 순서대로 인코딩 <br/><br/>\
# 이전 모델 비교 <br/>\
<img src = "./img/BERT_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 4교시 4번\
',
  
// GPT-3
'# 정의 : Transformer 디코더 구조 / Few Shot Learning / 순방향 / NLP Model <br/>\
- Generation Pre-trained Transformer 3 <br/>\
- Transformer의 디코더 구조로 구성되어 Few  Shot Learning된 순방향 자연어 처리 모델 <br/>\
- 딥러닝을 이용해 자연스러운 텍스트를 생성하는 자기 회귀 언어 모델 <br/><br/>\
# 특징 <br/>\
- 활용 : 다음단어 찾기 / 기사 작성, 음성비서, 프로그래밍 코드 작성 <br/>\
- few-shot 러닝을 이용한 언어 예측 모델 <br/>\
- 개발사 : Open API <br/>\
- 프로세스 : few-shot 러닝(훈련-검증-테스트) 단계 <br/>\
- 수행 task : 언어 관련 문제풀이, 작문, 번역, 웹코딩 <br/><br/>\
<font color = "red">* Few-shot Learning : 적은 데이터 효율 학습, Training set(구분), Support Set(클래스), Query image(종류) </font><br/><br/>\
* 123회 관리 4교시 4번\
',

// 전이학습
'# 정의 : 다른 모델 학습 결과 전이 / 데이터 확보 / 훈련시간 단축 / 머신러닝 기법 <br/>\
- 기존의 학습된 모델과 비슷한 유형의 다른 모델로 학습된 결과를 옮겨서 부족한 데이터를 통한 학습이나 훈련 시간을 단축시키는 머신러닝 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/TransferLearningStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 전이학습 유형 분류 <br/>\
<img src = "./img/TransferLearningType.png" style = "max-width:100%; height:auto;"><br/>\
1. 적용범위 <br/>\
- Task 전이 : 응용 분야가 변경되는 경우 (영상->음성) <br/>\
- Domain 전이 : 데이터 확률분포가 다른 경우(영불 번역기 -> 영한 번역기) <br/><br/>\
2. 데이터셋 Label 여부 <br/>\
- 귀납(Inductive) : Multi-task(일반화된 모델 만든 후 특화 Layer 분리법), Self-Taught(원본데이터 변환, Feature 만든 후 Linear Classifier 학습) <br/>\
- 변형(Transductive) : Source Data의 Label 이용 Target Daata에 맞도록 학습 <br/>\
- 자율(Unsupervised) : Unlabled Data간 학습 진행 <br/><br/>\
# 주요 학습 기법 <br/>\
- Fine-tuned CNN : 미리 학습된 CNN의 마지막 Fully Connected Layer만 변경 분류 실행 <br/>\
- Pre-Trained Model : 미리 학습된 모델의 가중치를 새로운 모델에 적용 <br/>\
- Domain Adaption : 풍부한 데이터 바탕, 도메인 구분능력 약하게 학습, Targert Data 분류 가능 구축 <br/>\
- Layer Re-Use : 기존 모델 일부 Layer 재사용, 부족 Data Domain 모델 구축 활용 <br/><br/>\
* ITPE 1회 1교시 1번\
',

// Downstream Task
'# 정의 : Pre Train된 Upstream 기반 학습방법 <br/>\
<img src = "./img/TransferLearningStream.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Downstream 학습방식 <br/>\
- Fintetunning : Downstream 전체 사용, 모델 전체 Downstream 맞게 업데이트 <br/>\
- Zero-shot Learning : Dwonstream 사용 x, 모델이 바로 Downstream Task 수행 <br/>\
- One-shot Learning : Downstream task 한 건만 사용, 모델 전체 1건 데이터 맞게 업데이트 <br/>\
- Few-shot Learning : Downstream task 몇 건만 사용, 모델 전체 몇 건 데이터 맞게 업데이트 \
',
   
// 추천 시스템
'# 정의 : 아이템 제공 시스템 / 정보 필터링 <br/>\
- 정보 필터링을 사용하여 사용자에게 흥미로운 정보 아이템을 제공하는 시스템(TTA) <br/><br/>\
# 유형 <br/>\
1. CBF(Contents Based Filtering) <br/>\
- 개념 : 비슷한 유형 추천 알고리즘 <br/>\
- 종류 : User-based(사용자 프로필/사용자 프로필 수집 한계), Item-based(유사 상품/데이터 셋 구성 어려움) <br/><br/>\
2. CF(Collaborate Filtering) <br/>\
- 개념 : 사용자, 아이템 프로파일 데이터 없이 사용자의 과거 행동 데이터 가지고 유사도 측정, 추천하는 알고리즘 <br/>\
- 종류 : Memory-based(사용자/아이템간 유사도), Model-based(기계학습, 베이시안, 클러스터링 + CF), Hybrid Filtering(CBF+CF) <br/>\
- 한계점 : Cold Start 문제, 높은 계산량 <br/><br/>\
# 문제점 <br/>\
- Cold Start : 사전 데이터 없을 때 문제점 <br/>\
- Sparsity Problem : 차원의 저주 <br/>\
- Information Utilization Problem : Log Data 숨은 정보 이용 쉽지 않음 / 데이터 임퓨테이션(별점 결측치 평점으로 대체) <br/><br/>\
# Cold Start 대응 <br/>\
- Hybrid Filtering : 가용 데이터 중심, CBF,CF 혼용 <br/>\
- CBF->CF 단계적 적용 : 초기(CBF), 축적후(CF) <br/>\
- 인기 아이템 추천 : 초기(인기아이템), 축적후(재추천) <br/><br/>\
* KPC 90회 관리 3교시 4번\
',

// AI 조달 가이드라인
'# Over view <br/>\
<img src = "./img/AI_Support_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# SI, AI 조달 비교 <br/>\
<img src = "./img/SIAI.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요이슈 <br/>\
<img src = "./img/AI_Support_Issue.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 개선방향 <br/>\
- AI 특성 맞춤형 정책 <br/>\
- 구축 모델에 대한 충분한 검토 <br/>\
- 지속적, 신속한 유지보수, 위험관리 <br/><br/>\
* KPC 93회 관리 4교시 6번\
',

// Digital Cartel
'# 정의 : 인공지능 알고리즘 / 정보교환, 가격조정, 모니터링 / 사람 개입없이 수행 / 기업의 담합 행위 <br/>\
- 인공지능 알고리즘에 기반하여 정보교환, 가격 조정 및 모니터링 등의 과정을 사람의 직접적 개입 없이 수행하는 기업의 담합 행위 <br/><br/>\
# 특징 <br/>\
- 이익 극대화 : 기업이 알고리즘 이용 하여 가격, 공급량 조절, 이윤 추구 <br/>\
- 정보 비대칭 : 알고리즘 통한 공급자, 소비자간 정보 비대칭 발생 <br/>\
- 빠른 속도 : 인간 인지 불가 속도 <br/><br/>\
# 유형 (<font color = "red">MHPA</font>)<br/>\
1. Messenger <br/>\
- 합의 형태 : 명시적 합의(알고리즘이 사람의 명령 수동적 수행) <br/>\
- 합의 근거 : 직접 근거 <br/>\
- 법적 책임 : 일반적으로 위법 <br/><br/>\
2. Hub and Spoke <br/>\
- 합의 형태 : 묵시적 합의(온라인 플랫폼이 제시한 가격 일괄 수용) <br/>\
- 합의 근거 : 정황 근거 <br/>\
- 법적 책임 : 위법 적발 가능 <br/><br/>\
3. Predictable Agent <br/>\
- 합의 형태 : 합의 없음(알고리즘으로 경쟁업체 행위 예측 대응) <br/>\
- 합의 근거 : 추가 시점 <br/>\
- 법적 책임 : 불명확 <br/><br/>\
4. Autonomous Machine <br/>\
- 합의 형태 : 합의 없음(인공지능끼리 스스로 판단 담합) <br/>\
- 합의 근거 : 증거 확인 불가 <br/>\
- 법적 책임 : 처벌 근거 부재 <br/><br/>\
# 대응방안 <br/>\
- 알고리즘 감사제도 : 공적 감사, 불확실성 최소화<br/>\
- 법적 지위 부여 : 인격 부여, 법적 공백 최소화 <br/>\
- 규제 고도화 : RegTech 통한 효율적 감독 수행 <br/>\
- 소비자의 대응 수단 : 소비자의 소비를 AI가 대신 수행, 협상력 제고 <br/><br/>\
# 알고리즘 (<font color = "red">모평신자</font>) <br/>\
- 모니터링 알고리즘 : 경쟁업체 가격 실시간 수집, 담합 이탈 감시 <br/>\
- 평행 알고리즘 : 가격 결정 소프트웨어 이용, 가격 동기화 <br/>\
- 신호 알고리즘 : 가격 인상 신호 실시간 송수신, 공동 가격 조정 유도 <br/>\
- 자가학습 알고리즘 : 인공지능이 시장 데이터 학습, 분석으로 내린 결정이 담합 초래 <br/><br/>\
* ITPE 7회 관리 1교시 9번\
',

// [AI]- 인공지능 성능 지표
'<img src = "./img/AIDegree.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 4교시 6번\
',

// [AI][성능지표]- IoU
'# 정의 : 경계 상자 교차영역 / 넓이 이용 / 인식 성능 지표 <br/>\
- Intersection Over Union <br/>\
- 영상, 이미지의 객체 탐지 모델에서 예측된 경계상자와 실제 참값(Ground Truth) 경계상자의 교차 영역의 넓이를 이용한 인식성능 지표 <br/><br/>\
# 상세 설명 <br/>\
<img src = "./img/IOU_Detail.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 4교시 6번\
',
  
// CCW 알고리즘
'# 정의 : 외적 이용, 세점 위치 판단 알고리즘 <br/>\
- 벡터의 외적을 이용하여 평면상에 세 점이 있을 때 점들의 위치 관계를 판단할 수 있는 알고리즘.<br/>\
다각형 넓이 구하기, 정점의 위치판단, 두 선분의 교차여부 판단에 사용',
);
