var question = question.concat(
// Part 2
'이것은 직원 휴게실 사진입니다.',
'이것은 야외시장 사진입니다.',
'이것은 부두의 사진입니다.',
'이것은 공사장의 사진입니다.',
'이것은 관광지의 사진입니다.',
'진열장 안에 디저트가 있습니다.',
'가로등 아래에 휴지통이 있습니다.',
'계산대에 고객이 있습니다.',
'계산대 뒤에 점원이 있습니다.',
'울타리를 따라 나무들이 있습니다.',
'TV 맞은편에 탁자가 있습니다.',
'남자는 백발이다.',
'남자는 콧수염이 있다.',
'남자는 머리가 짧다.',
'남자는 턱수염이 있다.',
'여자는 금발이다.',
'여자는 곱슬머리이다.',
'여자는 양 갈래로 땋은 머리이다.',
'여자는 하나로 묶은 머리이다.',
'여자는 정장을 착용하고 있습니다.',
'여자는 평상복을 착용하고 있습니다.',
'보고있다.',
'들고있다.',
'마주보고 있다.',
'손을 뻗고 있다.',
'지불하고 있다.',
'구부리고 있다.',
'사고 있다.',
'쉬고 있다.',
'건너고 있다.',
'무릎을 꿇고 있다.',
'사진 중앙에, 안경쓴 남자가 컴퓨터를 하고 있습니다. 그는 백발입니다.',
'왼쪽에, 파란색 셔츠를 입은 다른 남자가 전화를 하고 있습니다.',
'사진 오른쪽에 있는 흰색 셔츠를 입은 여자는 서랍을 뒤지고 있습니다.',
'뒤쪽엔, 창문 위로 닫혀 있는 블라인드가 보입니다.',
'이 사람들은 모두 바빠보입니다.',
'컴퓨터로 작업하다',
'키보드에 타자를 치다',
'컴퓨터 화면을 보다',
'전화 통화하다',
'서류를 파일로 정리하다',
'회의를 하다',
'복사하다',
'발표(연설)하다',
'여러 줄로 책상에 앉다',
'무언가를 설명하다',
'무언가를 가리키다',
'책장을 넘기다',
'책장에서 책을 꺼내다',
'벽에 걸려 있다',
'천장에 매달려 있다',
'벽에 세워져 있다',
'책상에 정리되어 있다',
'바닥에 쌓여 있다',
'벽에 붙어 있다',
'칸막이로 벽이 나눠져 있다',
'매우 바빠 보이다',
'매우 친해 보이다',
'매우 집중해 보이다',
'매우 중요해 보이다',
'~에게 돈을 건네다',
'비닐봉지를 들다',
'주변을 둘러보다',
'가판대에 무언가를 진열하다',
'저울에 음식의 무게를 재다',
'계산대에서 지불하다',
'상품을 가리키다',
'선반에서 상품을 꺼내다',
'쇼핑카트를 밀다',
'상품을 잡으러 손을 뻗치다',
'신발을 신어 보다',
'차례를 기다리다',
'주문을 받다',
'식탁에서 식사하다',
'손님에게 음식을 서빙하다',
'앞치마를 입다',
'메뉴를 보다',
'카트 안에(테이블 위에) 놓여 있다',
'선반에(가판대에) 진열되어 있다',
'식물로 장식되어 있다',
'선반에 걸려 있다',
'가게에 설치되어 있다',
'선반에 쌓여 있다',
'게시판에 붙어 있다',
'인기 있는 곳처럼 보이다',
'잘 정리되어 있다',
'쇼핑하기에 좋은 장소처럼 보이다',
'이것은 야외 카페/레스토랑 사진이다',
'2명의 사람이 테이블에 앉아있다.',
'왼쪽에 앉은 남자는 핑크색 셔츠를 입고 있고, 제스처를 취하고 있다.',
'중앙에 있는 여자는 스카프를 매고 있고 남자를 보고 있다.',
'그들은 모두 백발이다.',
'오른쪽에 서있는 앞치마를 두른 여자는 펜과 메모지를 들고 있다.',
'그녀는 주문을 받는 것 처럼 보인다.',
'모두 웃고있다.',
'그들은 좋은 시간을 보내는 것처럼 보인다.',
'한 늙은 남자가 크게 웃고있다.',
'네 코(이마)에 뭐가 묻었다.',
'내 치아 사이에 뭐가 꼈니?',
'한 늙은 여자가 등에 아이를 업고 있다.',
'그녀의 스타킹에 올이 나갔다',
'이 사진은 카페를 보여줍니다.',
'검정색 앞치마를 두른 여자는 진열장 뒤에 서있습니다.',
'그녀는 주문을 받는것 같습니다.',
'사진 오른쪽에, 초록색 셔츠를 입고있는 남자는 여자를 보고 있습니다.',
'뒤쪽에, 메뉴판이 벽에 걸려있습니다.',
'진열장이 비어있습니다.',
'음식이 다 팔린것 같습니다.',
'자전거(오토바이)를 타다',
'인도를 걷다',
'가방을 메고 있다',
'가게를 지나가다',
'길을 묻다',
'무리 지어 서다',
'횡단보도에 서 있다',
'걸어서 지나가다',
'횡단보도를 건너다',
'바닥을 닦다',
'거리를 쓸다',
'지붕이 달린 버스 정류장에서 기다리다',
'버스 정류장에서 기다리다',
'표를 사다',
'매표소에 서 있다',
'플랫폼을 떠나다(들어오다)',
'역에서 나오다',
'역으로 들어오다',
'난간에 기대다',
'버스(기차)에서 내리다',
'버스(기차)에 타다',
'줄 서서 기다리다',
'버스(지하철)를 기다리다',
'차에 타다',
'역(버스 정류장)으로 들어오고 있다',
'역(버스 정류장)으로 나가고 있다',
'길을 따라 주차되어 있다',
'차고에 주차되어 있다',
'빌딩 입구에 설치되어 있다',
'빌딩에 걸려 있다',
'공사 중이다',
'교차로에 있다',
'사람들로 붐비다',
'유명한 관광지처럼 보이다',
'이것은 거리 사진입니다.',
'많은 사람들이 횡단보도에 있습니다',
'왼쪽에 한 남자는 흰색 셔츠를 입고 배낭을 매고 있습니다.',
'그의 근처에 2개의 가방을 매며 걸어가는 한 여자가 있습니다.',
'신호등 불빛은 흰색입니다.',
'사진 뒤쪽에, 많은 차들과 건물들이 보입니다.',
'이 거리는 많은 사람들로 붐빕니다',
'큰 도시의 시내로 보입니다',
'이것은 버스 정류장 사진입니다',
'버스가 버스 정류장에 들어오고 있습니다.',
'몇몇 사람들이 버스를 타기 위해서 줄을 서 있습니다.',
'그 중 한 명은 비닐봉지를 들고 있고, 다른 남자는 벤치에서 일어서고 있습니다.',
'버스 정류장 옆에 큰 사진이 보입니다',
'유명 선글라스 브랜드 광고로 보입니다',
'버스 정류장 주위에 많은 나무들이 심어져 있고, 뒤로 흰색 건물이 보입니다.',
'많은 사람들로 붐비지 않고, 큰 도시는 아닌것 같아 보입니다.',
'벤치에 앉아 있다',
'길을 따라 걷다',
'개를 산책시키다',
'유모차를 밀다',
'사진을 위해 포즈를 취하다',
'꽃에 물을 주다',
'바다에서 수영하다',
'해변에서 일광욕하다',
'비치 파라솔 아래에 눕다',
'모래에서 놀다',
'배를 타다',
'노를 젓다',
'낚시대로 낚시하다',
'길을 따라 산행하다',
'악기를 연주하다',
'공연에 박수치다',
'무대에서 공연하다',
'줄 맞춰서 의자에 앉다',
'마이크에 대고 노래하다',
'미술 작품을 감상하다',
'경기장에서 경기를 보다',
'울타리를 따라 심어져 있다',
'해변 여기저기에 흩어져 있다',
'부두에 묶여있다',
'물에 떠 있다',
'느긋해 보이다',
'평화로워 보이다',
'소풍에 좋은 날씨이다',
'이것은 아름다운 공원 사진입니다',
'대부분의 사람들이 벤치에 앉아 있습니다.',
'사진 오른쪽에, 흰 셔츠를 입은 남자가 앉아 있고, 다른 남자가 그를 사진찍어 주고 있습니다.',
'카메라를 들고 있는 남자는 파란색 모자를 쓰고 있고 빨간 자켓을 그의 허리에 둘렀습니다.',
'그리고 다른 모든 사람들은 짝을 지어 앉아 있습니다.',
'사진 앞쪽에, 꽃들이 줄지어 있습니다.',
'공원 대부분 잔디로 덮여있습니다.',
'이곳은 다소 평화로워보입니다.',
'이것은 공원 사진입니다.',
'사진 중앙에 많은 사람들이 큰 분수대 앞에 서있습니다.',
'그들은 사진찍기 위해 포즈를 취하고 있습니다.',
'몇몇 여자들이 사진 오른편에 모여 있습니다.',
'그들중 한명은 초록색 우산을 들고 있습니다.',
'앞쪽엔, 빨간 셔츠를 입은 한 남자가 가방을 들고 여자들을 바라보고 있습니다.',
'큰 탑과 나무들이 분수대 안에 있습니다.',
'이 곳은 유명 관광지 처럼 보입니다',
'이것은 몇몇 사람들이 야외 계단에서 서있거나 앉아있는 사진입니다.',
'사진속 몇몇 사람들은 서로 대화 하고 있습니다.',
'다른 몇몇 사람들은 핸드폰을 하고 있습니다.',
'사진 중앙에 벤치에 앉아있는 남자는 오렌지색 민소매 셔츠와 베이지색 바지를 입고 있습니다.',
'그는 어깨길이 머리입니다.',
'그리고 그는 핸드폰으로 무언가를 읽고 있는 것 처럼 보입니다.',
'이 사진은 학교 캠퍼스에서 찍힌것 처럼 보입니다.',
'사진속 모든 사람은 대학생처럼 보입니다.',
'이것은 부둣가 사진입니다.',
'사진속 대부분 사람들은 부두를 따라 걷고 있습니다.',
'왼쪽에 있는 여자는 난간에 기대고 있고 바다를 보고 있는 것 같습니다.',
'사진 중앙에 또다른 여자와 아이는 손잡고 있습니다.',
'사진 오른편에, 빨간 셔츠를 입고있는 남자는 컵을 들고 있습니다.',
'몇몇 사람이 부두 끝 흰 건물로 걸어가는 것 또한 보입니다.',
'하늘은 맑고 아름다운 화창한 날시입니다.',
'이것은 공원 사진입니다.',
'사진 중앙에, 4 명의 그룹이 있습니다.',
'그들은 가족처럼 보입니다.',
'아빠는 카메라를 오른손에 쥐고 있고, 엄마는 땅에 무릎을 대고 있습니다.',
'두 여자아이가 그들 근처에 있습니다.',
'가족 뒤에, 유모차를 끌고 있는 여자가 있습니다.',
'나는 또한 공원 주변에 몇몇 사람들이 보입니다.',
'사진 오른쪽에, 아름다운 꽃이 중앙 잔디에 심어져 있습니다.',
'몇몇 사람들이 사진 왼쪽을 바라보고 있는것을 볼때, 무언가 있는것 같습니다.',
'이것은 사무실/로비 사진 입니다.',
'테이블 주위로 4명의 사람이 앉아 있습니다.',
'모든 사람은 정장을 입고 있습니다.',
'그들은 회의를 하는 것 같스니다.',
'왼쪽의 두 남자는 문서를 보고 있습니다.',
'오른쪽의 두 여자는 다리를 꼰채로 무언가를 보고 있습니다.',
'4명의 사람 뒤로, 큰 흰색 기둥과 비어있는 초록색 의자들이 있습니다.',
'사진속 사람들은 다소 바빠보입니다.',
'이것은 백화점 안에 있는 가방 가게 사진입니다.',
'많은 색깔의 가방들이 선반과 진열대에 진열되어 있습니다.',
'사진 왼편에, 등에 가방을 맨 남자가 있습니다.',
'그는 카운터에서 무언가를 사고 있는 것 같습니다.',
'그의 뒤에 빨간 바지를 입은 다른 한남자는 가게를 둘러보고 있습니다.',
'사진 앞쪽에, 제복을 입은 두 남자가 가게를 지나고 있습니다.',
'이 가게는 현대적이거 트랜디해 보입니다.',
'이것은 거리 사진입니다',
'많은 가게와 차에서 나오는 빛이 보입니다.',
'사진 앞쪽에, 몇몇 사람들이 줄지어서 횡단보도를 건너고 있습니다.',
'그들은 뿌옇게 보입니다.',
'그들은 빨리 걷는것 처럼 보입니다.',
'거리에 있는 안전조끼를 입은 사람 또한 보입니다.',
'그는 교통정리를 하는 것 같습니다.',
'그의 옆에, 한 남자가 지나고 있고, 까만 차가 모퉁이를 돌고 있습니다.',
'몇몇 자동차는 보행자를 기다리고 있습니다.',
'이 사진은 많은 사람들과 자동차로 붐벼보압니다.',
'이 편의점은 모퉁이 근방에 있습니다.',
'크리스마스가 금방입니다.',

// Part 4
'브리스톨 컨벤션 센터에서 열릴 것이고, 11월 3일 아침 9시에 시작합니다.',
'될 것 같습니다. 정오부터 오후 2시까지 점심시간이니 그때 전화하실 수 있어요',
'물론입니다! 그는 수중 개인 코칭에 대한 워크숍을 오후 2시부터 3시까찌 진행합니다.',
'그리고 나서, 오후 4시부터 5시까지 근육 회복 프로그램에 관해 발표할 예정입니다.',
);