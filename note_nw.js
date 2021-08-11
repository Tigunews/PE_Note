var question = question.concat(
'OSI 7 계층',
'서비스 프리미티브(Service Primitive)',
'[Layer2]- Service',
'[Layer2]- 회선제어',
'[Layer2]- 오류제어',
'[Layer2][오류제어][FEC]- 해밍코드',
'[해밍코드]- 해밍거리',
'[Layer2][오류제어][BEC]- CRC',
'[Layer2][오류제어][BEC]- Parity Check',
'[Layer2][오류제어][BEC]- Check Sum',
'흐름제어',
'[흐름제어]- Sliding Window',
'[흐름제어]- Stop and Wait',
'[Layer2][접근제어]- CSMA/CD',
'[Layer2][접근제어]- CSMA/CA',
'[Layer2]- Frame Relay',
'[Layer2]- Collison Domain',
'[Layer3]- 공증교환 데이터망(PSDN) 방식',
'[Layer3]- 회선교환',
'[Layer3]- 패킷교환',
'[Layer3]- 패킷데이터 네트워크 계층 오류',
'[Layer3]- 라우팅',
'[Layer3]- 거리벡터 라우팅',
'[Layer3]- 링크스테이트 라우팅',
'[Layer3]- IGMP',
'Layer4',
'[Layer4]- Service',
'[Layer4]- TCP 혼잡제어',
'[Layer4]- TCP',
'[Layer4][TCP]- SSL/TLS',
'[Layer4][UDP]- DTLS',
'DHCP',
'DNS',
'IP Tunneling',
'Web RTC',
'[Web RTC]- RTSP',
'[Web RTC]- RTP',
'[Web RTC]- SCTP',
'[Internet]- 인터넷 프로토콜 3단계 주소체계',
'[Internet]- HTTP/2.0',
'[Internet]- HTTP/3.0',
'[HTTP/3.0]- QUIC',
'[Internet]- IPSec',
'Network IP(Subnetting, Supernetting)',
'[Internet]- IPv6',
'[IPv6]- 헤더구성',
'[IPv6]- 전환기술',
'[IPv6]- 패킷 단편화',
'[IPv6]- ICMPv6',
'[IPv6]- 보안취약성 및 대응방안',
'VLSM',
'Subnet',
'Subnetting',
'Supernetting',
'정보이론',
'대역확산',
'전송부호화',
'[전송부호화]- 소스코딩',
'[소스코딩]- 압축기술',
'[소스코딩][무손실 압축]- Run Length Coding',
'[소스코딩][무손실 압축]- Huffman Coding',
'[소스코딩][혼합 압축]- MPEG',
'[전송부호화]- 채널코딩',
'[전송부호화]- 라인코딩',
'Modbus',
'필드버스(Fieldbus)',
'[필드버스(Fieldbus)]- IEEE802.11i, IEEE 802.11ac, IEEE 802.11ah(M2M-Wifi), IEEE 803.af(Super Wifi)',
'[무선통신]- Wi-SUN',
'[무선통신]- Wi-Fi Positioning System',
'[무선통신]- 와이파이 헤일로(W-Fi HaLow)',
'[무선통신]- 와이파이 콜링 서비스(Wi-Fi calling Service)',
'[무선통신]- 패시브 와이파이(Passive wifi)',
'[무선통신]- 인지무선(Cognitive Radio)',
'[무선통신]- IEEE 802.11p',
'[무선통신]- C-V2X',
'[무선통신]- Gigabit WLAN',
'[무선통신]- 저전력 무선통신 비교',
'[무선통신][저전력]- 블루투스 5',
'[무선통신][저전력]- UWB',
'[측위기술]- LBS',
'[측위기술]- IPS',
'[측위기술]- LDT',
'[측위기술]- GPS',
'[측위기술][GPS]- 위성항법기술',
'[측위기술][GPS]- SBAS',
'[측위기술]- RTLS',
'라이파이(Li-Fi)',
'SON',
'BcN',
'CDN',
'CDN, ADN',
'IEEE 802.15.x',
'USB4.0',
'이동통신 발전역사',
'5G 이동통신',
'[5G]- 5G NSA',
'[5G]- 5G SA',
'[5G]- 3GPP Release 16',
'[5G]- MEC',
'[MEC]- SSL Offloading',
'[5G]- 5GX',
'[5G]- Open Lan',
'[5G]- Network Slicing',
'[5G]- Private 5G',
'지능형 초연결망',
'6G',
'[6G]- 6G 추진 전략',
'[6G]- Wifi 7',
'Wifi 6',
'Wifi 6e',
'재난 안전 통신망',
'[재난 안전 통신망]- LTE-M',
'[재난 안전 통신망]- LTE-R',
'[재난 안전 통신망]- RAN Sharing',
'D2D',
'토르 네트워크(Tor Network)',
'비지상네트워크(NTN, Non-Terrestrial Network)',
'eMTC',
'Network Storage',
'자가망 구축 가이드라인',
'QoS',
'[QoS]- WFQ',
'[QoS]- 통합 서비스',
'[QoS]- 차등 서비스',
'[QoS][차등][Queuing]- Priority Queue',
'[QoS][차등][Queuing]- Custom Queue',
'FTP',
'[FTP]- FTPS',
'[FTP]- SFTP',
'Socket',
'NOS',
'NW 가상화',
'[NW 가상화]- VPN',
'[NW 가상화]- NFV',
'[NW 가상화]- SDN',
'[NW 가상화]- Open flow',
'[NW 가상화]- SD WAN',
'[NW 가상화]- SDR',
'SASE',
'유무선 전력전송',
'망분리',
'망연계',
'망중립성',
'ISO 19626',
);

var answer = answer.concat(
// OSI 7 Layer
'# 정의 : 개방형 시스템간 상호 통신 프로토콜 <br/>\
- ISO 7498 <br/>\
- 개방형 시스템간의 상호 통신을 위한 프로토콜/참조 모델/정의된 레이어 <br/>\
- 통신망을 통한 상호접속에 필요한 제반 통신절차를 정의하고 이 가운데 비슷한 기능을 제공하는 모듈을 동일 계층으로 분할하여 모두 7계층으로 분할한 모델 <br/><br/>\
# 원칙 <br/>\
- 복잡도 : 적절한 수의 계층으로 나눠 복잡도 최소화 <br/>\
- 상호작용 : 서비스 접점에 경계를 두어 상호작용 최소화 <br/>\
- 계층구분 : 기능,프로세서,기술적 측면에서 비슷한 계층끼리 묶음 <br/>\
- 인터페이스 : 상하 계층간 소통을 위한 인터페이스 제공 <br/>\
- 영향도 : 한 계층의 변형이 다른 계층에 영향을 주지 않도록 함 <br/><br/>\
# 계층별 설명 <br/>\
<img src = "./img/OSI7Layer.png" style = "max-width:100%; height:auto;"><br/><br/>\
7. 응용 (응용)<br/>\
- 사용자, NW 간 연결 / 데이터 생성 <br/>\
- 프로토콜 : FTP, SMTP, SNMP, Telnet, DNS, HTTP <br/>\
- PDU : Message <br/><br/>\
6. 표현 (응용)<br/>\
- 데이터 형식 규정 <br/>\
- 프로토콜 : JPEG, MPEG, XDR, SMB <br/>\
- PDU : Message <br/><br/>\
5. 세션 (응용)<br/>\
- 인증 및 서비스 제공 <br/>\
- 프로토콜 : RTP, NetBIOS, RARP, X.26 <br/>\
- PDU : Message <br/><br/>\
4. 전송 (전송)<br/>\
- 프로세스 간의 데이터 전송 <br/>\
- 프로토콜 : TCP, UDP <br/>\
- PDU : Segment <br/><br/>\
3. 네트워크 (인터넷)<br/>\
- 데이터 경로설정 스위칭, 라우팅 <br/>\
- 프로토콜 : IP, ICMP, IGMP <br/>\
- PDU : Packet <br/><br/>\
2. 데이터링크 (네트워크 액세스)<br/>\
- 네트워크 기기 간의 데이터 전송 <br/>\
- 프로토콜 : ARP, RARP, X.25<br/>\
- PDU : Frame <br/><br/>\
1. 물리 (네트워크 액세스)<br/>\
- 시스템 간 물리적 연결, 전기 신호 변환 <br/>\
- Ethernet, IEEE802, RS-232C <br/>\
- PDU : Bit <br/><br/>\
* 124회 관리 3교시 5번 <br/>\
* 라이지움 86회 3교시 6번 <br/>\
* 꿀닥 \
',
  
// 서비스 프리미티브
'# 정의 : 개념적인 연동 규약 / 서비스만 주안점 <br/>\
- OSI 기본 참조 모델에서, 서비스 이용자와 제공자간의 상호 동작시 제공하는 서비스만을 주안점으로 규정한 개념적인 연동 규약 <br/><br/>\
# 표현 (계동방파)<br/>\
1. 계층 <br/>\
- 개념 : 서비스 제공 계층 표시 <br/>\
- 종류 : L(Link), N(Network), T(Transport), S(Session) <br/><br/>\
2. 동작이름 <br/>\
- 개념 : 수행되는 동작이름 <br/>\
- 종류 : CONNECT(연결 설정), DATA(데이터 전송), DISCONNECT(연결 해제) <br/><br/>\
3. 프리미티브 방향 <br/>\
- 개념 : 서비스 사용자, 제공자 간의 기능 호출 <br/>\
- 종류 : Request, Indication, Response, Confirm <br/><br/>\
4. 파라미터<br/>\
- 개념 : 주소, 사용자데이터, 원하는 서비스 형태, 데이터 최대 크기 등 <br/>\
- 종류 : IP Address, Port, Data Length <br/><br/>\
# 동작 원리 (RIRC)<br/>\
<img src = "./img/ServicePrimitive_0.png" style = "max-width:100%; height:auto;"><br/>\
1. Request <br/>\
- 설명 : 클라이언트가 서버에 서비스 요구 <br/>\
- 종류 <br/>\
1) CONNECT.Request <br/>\
2) DATA.Request <br/>\
3) DISCONNECT.Request <br/>\
- 예시 : 발신자가 전화번호를 누름 <br/><br/>\
2. Indication <br/>\
- 설명 : 서버에 서비스 요구가 도착했음을 통지 <br/>\
- 종류 <br/>\
1) CONNECT.Indication <br/>\
2) DATA.Indication <br/>\
3) DISCONNECT.Indication <br/>\
- 예시 : 전화방이 전화기의 위치를 찾아 수신자 전화벨이 울리도록 함 <br/><br/>\
3. Response <br/>\
- 설명 : 서비스가 클라이언트에 응답 <br/>\
- 종류 <br/>\
1) CONNECT.Response <br/>\
2) DATA.Response <br/>\
3) DISCONNECT.Response <br/>\
- 예시 : 수신자가 전화를 받으면서 통화 버튼을 누름(Response). 전화망에 의해 바로 인지 <br/><br/>\
4. Confirm <br/>\
- 설명 : 클라이언트에 응답이 도착했음을 통지 <br/>\
- 종류 <br/>\
1) CONNECT.Confirm <br/>\
2) DATA.Confirm <br/>\
3) DISCONNECt.confirm <br/>\
- 예시 : 통화버튼을 누르면 발신자 귀에 발신음이 끊어지면서 (Confirm) 수신자와 통화상태임을 확인 <br/><br/>\
# 서비스 프리미티브 표현 예시 <br/>\
T.CONNECT.Request(Called address, Calling address, ... user data) <br/>\
- transport 계층(T) 에서 접속 (CONNECT)를 요구 하면서 착,발신 주소(Called address, Calling address) 및 사용자 데이터(user data)를 송부함 <br/><br/>\
* KPC 85회 1교시 10번 \
',

// Layer 2 Service
'# 회선제어 : 수신 단말, 송신 단말 프레임 흐름 정도 조절 <br/>\
- ENQ/ACK, Polling <br/><br/>\
# 오류제어 : 통신 에러 보정기술 <br/>\
- FEC : Hamming Code, Read-Solomon Code, Convolutional Code, Turbo Code <br/>\
- BEC : (검출) Parity Check, Block Sum, CRC / (재전송) Stop N Wait, Go Back N, Selective Repeat <br/><br/>\
# 흐름제어 <br/>\
- Sliding Window : 윈도우 크기 기반 여러 패킷 일괄 ACK <br/>\
- Stop and Wait : 1 Frame 단위 통신 <br/><br/>\
# 주소지정 <br/>\
- MAC : 상호 통신을 위해 할당하는 이름 <br/>\
- LLC : 두 장비간의 링크 설정, 프레임 송수신 방식과 상위 레이어 프로토콜 종류 알리는 역할 <br/><br/>\
# 접근제어 <br/>\
- CSMA/CD : 이더넷 환경에서 채널 사용중인지 확인하고 점유 기법 <br/>\
- CSMA/CA : 충돌 미리 예측 후 가능성 최소화 액세스 방법 <br/><br/>\
# Protocol : SDLC, HDLC <br/><br/>\
* ITPE 합숙 124회 4일차 2교시 3번 <br/>\
* 라이지움 87회 관리 3교시 6번\
',

// 회선제어
'# 정의 : 반이중 전송 링크 / 회선 공유 / 충돌 없이 통신 / 제어 규칙 <br/>\
- 반이중 전송링크에서 여러 스테이션이 회선을 공유하며 충돌 없이 데이터 통신 위한 제어 규칙 <br/>\
- 수신 단말이 허용 가능한 속도보다 송신 단말이 더 빠르게 프레임을 전송하지 않도록 흐름의 정도를 제어하는 기능 <br/><br/>\
# 방법 <br/>\
1. ENQ/QCK <br/>\
<img src = "./img/ENQACK.png" style = "max-width:100%; height:auto;"><br/>\
- 송신측에서 데이터 ENQ 프레임 요청 <br/>\
- 수신측 ACK 응답 <br/><br/>\
2. Polling <br/>\
<img src = "./img/Polling.png" style = "max-width:100%; height:auto;"><br/>\
- Polling Mode : Secondary Station 전송, Primary Station Polling 응답(NAK/Message) <br/>\
- Selection Mode : Primary Station 전송, Select Frame 전송, ACK 응답 메시지 전송 <br/><br/>\
* ITPE 합숙 124회 4일차 2교시 3번\
',

// 오류제어
'# 정의 : 신뢰성 확보 위한 통신 에러 제어 기법 <br/>\
- 데이터링크(hop to hop, 라우터), 전송계층(peer to peer) 에러제어 <br/>\
- 디지털 데이터 송수신 데이터가 외부간섭, 노이즈, 시간지연 등에 의해 변형, 손실, 순서 어긋남 등의 통신 장애에부터 통신 오류의 검출, 복구, 정정등 데이터 통신에서 신뢰성을 확보하기 위한 통신 에러 제어 기법 <br/><br/>\
# 발생원인 (<font color = "red">감지상충</font>)<br/>\
- 감쇠(Attenuation) : <font color = "red">거리증가</font> 인한 신호 약해지는 현상 <br/>\
- 지연왜곡(Delay Distortion) : 한 전송매체에 여러 신호 전달시 <font color = "red">주파수 따라</font> 속도 달라짐, 유선 다발<br/>\
- 상호 변조 잡음(Intermodulation Noise) : 서로 다른 주파수 한 전송매체 공유시 <font color = "red">주파수 간</font> 합이나 차로 인해 새로운 주파수 생성되는 현상 <br/>\
- 충격잡음(Impluse Noise) : 번개와 같은 <font color = "red">외부 충격</font>이나 기계적 통신 시스템에서의 결함 등 발생되는 잡음 <br/><br/>\
# 방식 <br/>\
1. FEC <br/>\
- Hamming Code, Read-Solomon Code, Convolutional Code, Turbo Code <br/><br/>\
2. BEC <br/>\
- (검출) Parity Check, Block Sum, CRC <br/>\
- (재전송) Stop N Wait, Go Back N, Selective Repeat <br/><br/>\
* 그리타\
',
  
// 해밍코드
'# 정의 : 패리티비트(Parity Bit)에 의한 오류검출 및 오류정정까지 가능한 코드 <br/><br/>\
# 2^p >= d + p + 1 (d:데이터 비트수, p:패리티 비트수) <br/><br/>\
# Byte Order <br/>\
- Little Endian : Network Byte Order <br/>\
- Big Endian : Host Byte Order <br/><br/>\
<img src = "./img/BigLittleCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
# LSB, MSB <br/>\
- LSB : Least Significiant Bit <br/>\
- MSB : Most Significiant Bit <br/><br/>\
# 활용 사례 <br/>\
1. 데이터 복구 <br/>\
- SSD : ECC(Error Correction Code), SLC 구조의 NAND Flash 경우 활용 <br/><br/>\
2. 암호화 <br/>\
- 디지털 저작권 보호 : 데이터 은닉기법 <br/>\
- QKD : CV-QKD(Continous Variable) <br/><br/>\
<font color = "red">* 오류비트 2비트까지 검출가능, 1만 수정가능 </font><br/><br/>\
* 125회 응용 2교시 2번\
',

// 해밍거리
'# 정의 : Bit 유사도 수치화 / Data 사이 거리 <br/>\
- 네트워크 통신시 수신된 Bit간 유사도를 수치화하기 위해 측정한 Data사이의 거리 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/HammingDistance.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 계산로직 <br/>\
- 데이터 수신 : A,B 데이터 수신 > 데이터 정렬 <br/>\
- 비교 : A,B 데이터 차이 측정 <br/>\
- 정리 : 거리측정 <br/><br/>\
# 활용사례 <br/>\
- AI : 유사도 측정 위한 협업필터링, 추천 시스템 Data 분석 <br/>\
- 보안 : 전진오류수정을 위한 해밍코드 구현시 핵심 요소 활용 <br/><br/>\
* 122회 응용 1교시 4번\
',

// CRC
'# 정의 : Modulo-2 연산(XOR)을 기반으로 오류를 검출하는 방식 <br/>\
- Cyclic Redundancy Check <br/><br/>\
# 암기 <br/>\
- 패리티비트수 = 최고차수 = divisor 자리수-1<br/><br/>\
# 특징 <br/>\
- 동기식 전송에 주로 사용<br/>\
- 집단 오류 검출 가능<br/>\
- 검출율 높아 가장 많이 사용 방식<br/><br/>\
# 적용사례 : HDLC 프레임의 FCS<br/><br/>\
<img src = "./img/CRC_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CRC_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CRC_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// Parity Check
'# 정의 : 추가 1비트 오류 판단 / 짝수개 오류 검출 불가 / Block Sum 검사 이용 <br/>\
- 데이터의 끝에 한 비트를 추가하여 1의 개수로 오류 유무 판단, Parity Check의 경우는 짝수 개의 오류는 검출이 불가, Block Sum 검사 이용해 해결 <br/><br/>\
# 유형 <br/>\
- 짝수 패리티 : 전송비트내 1의 개수가 짝수 <br/>\
- 홀수 패리티 : 전송비트내 1의 개수가 홀수 <br/>\
- 단순 패리티 검사 <br/>\
- 2차원 패리티 검사 <br/>\
- VRC(Vertical Redundancy Check) : 수직 패리티 체크 방식, 전송 비트들 중 수직에 대한 1의 bit수를 짝수 혹은 홀수 되도록 하는 방식 <br/>\
- LRC(Longitudinal Redundancy Check) : 수평 패리티 체크 방식, 전송 4비트들 일정량의 블록으로 묶어 블록의 맨 마지막에 패리티 부여 방식 <br/><br/>\
<img src = "./img/Parity_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Parity_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Parity_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Parity_4.png" style = "max-width:100%; height:auto;">\
',

// Check Sum
'# 정의 : 수신측 합산 검사 방법 / 전송측 합계 보수화 전송<br/>\
- 전송 데이터의 맨 마지막에 모든 데이터를 다 합한 합계를 보수화하여 전송, 수신 측에서는 모든 수를 합산하여 보수화 한 후 모두 0일 때 수용하는 검사 방법 <br/>\
- 송신 측에서 전송할 데이터를 16비트 워드 단위 구분, 1의 보수를 취하고 그 합에 대한 결과를 전송 <br/>\
- 수신 측에서 같은 합을 해보아 오류를 검출하는 방식, 간단하나 워드 순서 바뀌는 오류 검출X, 점차 CRC로 대체중 <br/><br/>\
<img src = "./img/CheckSum_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CheckSum_2.png" style = "max-width:100%; height:auto;">\
',

// 흐름제어
'# 정의 : 송,수신 속도 차이 / 관리 기술 <br/>\
- 더 빠른 송신자가 느린 수신자를 제압하지 못하도록 두 노드 간 데이터 전송 속도를 관리하는 기술 <br/><br/>\
# 방식 <br/>\
- Stop and Wait : 1개씩 수신, 프레임 전송 방식 <br/>\
- Rate-based : 임계값 관리 흐름제어 <br/>\
- Sliding Window : 여러개 프레임 동시 전송 기법 <br/><br/>\
* 125회 응용 3교시 1번\
',

// Sliding Window
'# 정의 : 일정한 윈도우 크기 이내에서 한번에 여러 패킷을 송신하고, 이들 패킷에 대하여 단지 한 번의 ACK 로써 수신 확인을 하며, 윈도우 크기를 변경시키며 흐름제어를 하는 기법 <br/><br/>\
# 특징 <br/>\
- 전송크기 : Window 크기 <br/>\
- 장점 : 전송 효율 좋음 <br/>\
- 단점 : 오류발생이 가능하므로 Go-Back-N, Selective 재전송등 해결방안 필요 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SlidingWindow.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 3교시 1번 <br/>\
* 라이지움 87회 관리 3교시 6번\
',
 
// Stop and Wait
'# 정의 : 송신측에서 한번에 1개의 Frame을 송신후 수신측에서 Frame 검사후 ACK 혹은 NAK 전송하여 송신측은 수신측의 회신 올떄까지 기다리고 ACK 오면 다음 Frame 전송, NAK면 재전송 기법 <br/><br/>\
# 특징 <br/>\
- 전송크기 : 1 Frame <br/>\
- 장점 : 구현용이, 한 개의 버퍼만 필요 <br/>\
- 단점 : 전송 효율이 떨어짐 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/StopAndWait.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 3교시 1번 <br/>\
* 라이지움 87회 관리 3교시 6번\
',
 
// CSMA/CD
'# 정의 : 이더넷(유선)환경에서 Signal 전압의 강도를 통해 채널이 사용중인지 확인하고 트래픽이 없으면 패킷을 송출하는 LAN의 매체 점유 기법 <br/><br/>\
# 특징 <br/>\
- 동작원리 <br/>\
<img src = "./img/CSMACD_Flow.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 표준 : IEEE 802.3 <br/>\
- 구조 : 버스형, 트리형 <br/>\
- 주요 원리 : 충돌 탐지 전략 <br/>\
- 특징 : 충돌시 일정시간 대기, 이더넷 기반 널리사용 <br/>\
- 장점 : 간단, 견고, 대역폭 효율 <br/>\
- 단점 : 부하시 지연시간 급증, 빈도 따른 충돌 발생 <br/><br/>\
# 유형 <br/>\
1. 1 Persistent <br/>\
<img src = "./img/OnePersistent.png" style = "max-width:100%; height:auto;"><br/>\
- 특징 : Idle 상태 즉시 프레임 전송 <br/>\
- 장점 : 충돌 회피 <br/>\
- 단점 : 충돌 확률 높음 <br/><br/>\
2. P Persistent <br/>\
<img src = "./img/PPersistent.png" style = "max-width:100%; height:auto;"><br/>\
- 특징 : 1 Persistent, Non Persistent 장단점 상호 보완 <br/>\
- 장점 : 충돌 위험 낮춤 <br/>\
- 단점 : 회선 효율 저하 <br/><br/>\
3. Non Persistent <br/>\
<img src = "./img/NonPersistent.png" style = "max-width:100%; height:auto;"><br/>\
- 특징 : 회선 감지 <br/>\
- 장점 : 즉시 전송 <br/>\
- 단점 : 회선 효율 저하 <br/><br/>\
* 125회 응용 4교시 1번 <br/>\
* 라이지움 87회 관리 3교시 6번\
',
 
// CSMA/CA
'# 정의 : 무선 환경에서 물리층에서 충돌이 일어날 것을 미리 예측하고 충돌발생 가능성을 송신전에 최소화하는 액세스 방법 <br/><br/>\
# 특징 <br/>\
- 동작원리 <br/>\
<img src = "./img/CSMACA_Flow.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 표준 : IEEE 802.11 <br/>\
- 구조 : 무선, 한개의 버퍼만 필요 <br/>\
- 주요 원리 : 신호 확인 후 데이터 전송 <br/>\
- 특징 : 경쟁 방식, 구조 단순, 무선 인프라 사용 <br/>\
- 장점 : 충돌한 패킷 낭비 감소, 에러 제어 용이 <br/>\
- 단점 : 고속 부적합, 전송효율 저하, 속도 느림 <br/><br/>\
* 라이지움 87회 관리 3교시 6번\
',

// Frame Relay
'# 정의 : WAN / 링크 레이어 프로토콜 / 가상 회선 / 전용선 취급 / 패킷 모드 전송 서비스 <br/>\
- 장거리 통신망(WAN)에서 사용하는 링크 레이어 프로토콜중의 하나로 하나의 물리적인 회선에 여러 논리적인 회선인 가상 회선을 만들어 마치 전용선처럼 취급하는 패킷 모드 전송 서비스 <br/>\
- CSU, Static Routing, 본사 지사 통신 <br/><br/>\
# 프로토콜 <br/>\
1. 기본 프로토콜 <br/>\
- 구조 : Flag(8) / Address(16) / Data(Variable) / FCS(16) / Flag(8) <br/>\
- Flag : 프레임 시작 끝 위치, 프레임 구분 <br/>\
- FCS : 프레임 에러 검색, 에러 발생 프레임 제거 <br/><br/>\
2. 제어 프로토콜 <br/>\
- 구조 : Flag / Address / Control / Information / FCS / Flag <br/>\
- 제어부 존재, 에러 제어, 흐름제어 수행 <br/><br/>\
# 토폴로지 <br/>\
1. Hub and Spoke <br/>\
- Remote Router들의 PVC가 중앙 Router 연결 구조 <br/>\
<img src = "./img/FrameRelayHubAndSpoke.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Full Mesh <br/>\
- 모든 Router가 상호간 PVC로 연결된 구조 <br/>\
<img src = "./img/FullMesh.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Partial Mesh <br/>\
- Hub and Spoke, Full-Mesh 혼합 구조 <br/>\
<img src = "./img/FrameRelayPartialMesh.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Frame Relay, X.25 비교 <br/>\
<img src = "./img/FrameRelayX25Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 124회 관리 1교시 10번\
',
 
// Collison Domain
'# 정의 : 이더넷 통신 원리로서 CSMA/CD 동작 중 Level2 계층 통신 단위인 Frame 전송하게 되면 반드시 발생하는 Collision을 적절히 논리적으로 분할하는 영역 <br/><br/>\
# CSMA/CD 작동방식과 Collison Domain 관계 <br/>\
+ CSMA/CD : IEEE 802.3, LAN Ethernet, Detection <br/>\
- Carrier Sense : 공통 통신 회선 사용 여부 확인 <br/>\
- Multiple Access : 평등 송신, 우선권 없음 <br/>\
- Collison Detection : 충돌 검출시, 재전송 -> <font color = "Red">충돌 줄이기 위한 Collison Domain 분할 필요</font><br/>\
- BackOff Algorithm : 재전송(랜덤 시간 대기), 포기(15회) <br/><br/>\
* 라이지움 87회 응용 1교시 11번\
',
  
// 공증교환 데이터망(PSDN) 방식
'<img src = "./img/PSDN.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 88회 응용 2교시 7번\
',

// 회선교환
'# 정의 : 사전 수립<br/>\
- 데이터 전송 시 통신 경로(회선)를 사전에 수립하여 전송하는 교환 방식 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/CircuitSwitching.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동작원리 <br/>\
- 전송전 : 두 노드간 회선 수립 <br/>\
- 전송중 : 회선 독점적 사용 <br/>\
- 전송후 : 사용한 회선 자원 반납 <br/><br/>\
* 라이지움 88회 응용 2교시 7번\
',
  
// 패킷교환
'# 정의 : <br/>\
- 전송할 데이터를 일정한 크기의 블록(패킷)으로 분리하여 패킷별 통신 경로를 수립하여 전송하는 교환 방식 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/PacketSwitching.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동작원리 <br/>\
- 경로수립 : 중계노드에서 패킷별 최적 경로 수립하여 다음 노드로 전송 <br/>\
- 트래픽 제어 : 효율, 안정 전송 위한 통제 <br/>\
- 에러 제어 : 패킷 유실 최소화, 유실된 패킷 복구 위한 에러제어 <br/><br/>\
* 라이지움 88회 응용 2교시 7번\
',
  
// 패킷데이터 네트워크 계층 오류 
'# 패킷(Packet) : 데이터 비트의 덩어리, 데이터 전송단위, 데이터와 제어신호가 포함된 2진수의 비트그룹 <br/><br/>\
# 오류제어 : 전송된 패킷의 부호적 오류를 검출하고 정확하게 재현하는 기법 <br/><br/>\
# 패킷데이터 네트워크 계층오류 : 네트워크 상에 전송된 패킷(데이터)에 대하여 부호적 오류를 검출하고 오류를 보정하여 정확한 패킷을 재현하는 기법 <br/><br/>\
# 오류발생 원인 <br/>\
1. 지연 <br/>\
- 개념 : NW 혼잡상황으로 인한 패킷지연 <br/>\
- 혼잡제어 기술 활용, Slow Start, Fast retransmission, Fast Recovery <br/><br/>\
2. 손실 <br/>\
- 개념 : 패킷 도달하지 않는 현상 <br/>\
- 오류검출기법, 오류복구기법 활용 <br/><br/>\
3. 순서오류 <br/>\
- 개념 : 의도와 순서 바뀌는 현상 <br/>\
- 순서제어 기법 활용 <br/><br/>\
* 그리타\
',

// 라우팅
'# 정의 : 네트워크 / 최적 경로 선택 과정 <br/>\
- 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정 <br/><br/>\
# 유형 <br/>\
1. 정적 라우팅 <br/>\
- 개념 : 테이블 경로를 수동으로 추가해야하는 프로세스 <br/>\
- 장점 : 라우터 CPU 오버헤드x, 저렴한 라우팅 <br/>\
- 단점 : 대규모 경우 관리자 수동 추가 리소스 작업 소요 많음<br/><br/>\
2. 기본 라우팅 <br/>\
- 개념 : 모든 라우터를 단일 라우터 (다음 홉)로 보내도록 구성하는 방법 <br/><br/>\
3. 동적 라우팅 <br/>\
- 개념 : 라우팅 테이블에서 경로의 현재 상태에 따라 경로를 자동으로 조정 방법 <br/>\
- 유형 : 거리벡터 라우팅 (Hop기반), 링크스테이트 라우팅(오류 경로 반영) \
',

// 거리벡터 라우팅
'# 정의 : 일정 시간 / 라우팅 정보 교환 / 최적 경로 설정 라우팅 방식 <br/>\
- 각 라우터가 인접한 라우터와 경로교환을 주기적 갱신정보로 라우팅 경로 결정 기법 <br/><br/>\
# 특징 <br/>\
- 분산적 : 각 노드 직접 연결 계산, 이웃 알림<br/>\
- 반복적 : 라우팅 정보 반복 수신 <br/>\
- 비동기적 : 제각각 동작 계산 <br/><br/>\
# 동작 방식 <br/>\
<img src = "./img/DisntanceVectorRoutingProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- 송신 노드로부터 테이블 정보 수신 <br/>\
- 송신 노드로부터 수신 받은 테이블 정보, 수신 노드 사이 비용 고려, 정보반영 <br/>\
- 변경 전,후 테이블 정보 비교 <br/>\
- Hop Count 변경 or 유지 <br/><br/>\
# 알고리즘 <br/>\
- RIP : Max Hop Boradcast / 30초 <br/>\
- IGRP : RIP 단점 보완, 갱신주기, 포트 / 90초 <br/><br/>\
# 특징 <br/>\
- 경로 설정 방법 : Hop 기반 라우터 거리 계산 <br/>\
- 알고리즘 : 벨만포드 <br/>\
- 라우팅 테이블 정보 : 아웃 라우팅 정보 <br/>\
- 프로토콜 : RIP, IGRP <br/>\
- Routing 구성 : 최대 15 Hop 이내 범위 <br/>\
- NW 환경 : 소규모 NW 환경 구성 <br/>\
- 장점 : 라우팅 테이블 크기 감소, 구성 간단, 단순 알고리즘 <br/>\
- 단점 : 대역폭 낭비, Coverage Time 느림 <br/><br/>\
# 거리벡터 한계점인 루핑 해결방안 <br/>\
- Maximum Hop Count : 최대 Hop Count를 15로 설정 <br/>\
- Hold Down Timer : 타이머 종료할 때, 정성경로 처리만 Update <br/>\
- Split Horizon : 인접간 루핑 방지 가능 <br/>\
- Route Poisoning : 다운 네트워크 값 메트릭 16 고정, 무시 <br/>\
- Poison Reverse : Split Horizon, Route Poisoning 혼합 방법 <br/><br/>\
* 124회 관리 1교시 11번\
',

// 링크스테이트 라우팅
'# 정의 : 토폴로지 DB, SPF / 라우팅 경로 결정 기법 <br/>\
- 한 라우터가 목적지까지 모든 경로를 알고 토폴로지 DB 기반 SPF 이용한 라우팅 경로 결정기법 <br/><br/>\
# 특징 <br/>\
- 경로 설정 기법 : 다른 라우터까지 최단 경로 계산 <br/>\
- 알고리즘 : 다익스트라 <br/>\
- 라우팅 테이블 정보 : 네트워크 전체 <br/>\
- 프로토콜 : OSPF, EIGRP <br/>\
- Routing 구성 : 최소 경로 Routing Area, Back Bone Area <br/>\
- NW 환경 : 대규모 및 BGP의 Inter-AS 연결 <br/>\
- 장점 : Coverage 빠름, Overhead 감소 <br/>\
- 단점 : 라우팅 테이블 증가, CPU 부하 발생 \
',

// IGMP
'# 정의 : 서브넷 멀티케스팅 / 멤버십 제어 / 3계층 프로토콜 <br/>\
- Internet Group Management Protocol <br/>\
- 서브넷(로컬 네트워크) 상의 멀티케스팅 멤버십 제어(그룹 관리)를 위한 3계층 프로토콜 <br/><br/>\
# 동작 메커니즘 <br/>\
1. 그룹 가입 (Joining) <br/>\
<img src = "./img/IGMP_Joining.png" style = "max-width:100%; height:auto;"><br/>\
- 호스트, 라우터 그룹 ID 목록 가짐 <br/>\
- 호스트 그룹에 소속되는 프로세스 가짐 <br/>\
- 그룹 가입 희망 프로세스 발생 <br/>\
- Membership Report 메시지 전송 <br/><br/>\
2. 멤버쉽 유지(Monitroing & Continuation) <br/>\
<img src = "./img/IGMP_MonitoringContinuation.png" style = "max-width:100%; height:auto;"><br/>\
- 멀티캐스트 라우터, 주기적 일반 질의 메시지 전송 <br/>\
- 멤버십 유지 : Membership Report 회신 <br/>\
- 멤버십 중단 : 응답 않음 <br/><br/>\
3. 그룹 탈퇴 (Leaving) <br/>\
<img src = "./img/IGMP_Leaving.png" style = "max-width:100%; height:auto;"><br/>\
- 종료 : Leave Report 메시지 송신 <br/>\
- 멀티캐스트 라우터 : 특별 질의 메시지 송신, 해당 그룹 탈퇴여부 결정 <br/><br/>\
# 메시지 유형 <br/>\
1. Query (0x11) <br/>\
- General : 멤버십 상태 확인, 유지 여부 질의 <br/>\
- Special : 멤버십 탈퇴 요청시 탈퇴 여부 결정 <br/><br/>\
2. Membership Report (0x12, 16, 22) <br/>\
- 멤버 가입 요청 전달, 가입 희망 Group ID 포함 메시지 전송 <br/><br/>\
3. Leave Report (0x17) <br/>\
- 멤버 탈퇴 요청 전달, 탈퇴 대상 Group ID 포함 메시지 전송 <br/><br/>\
# 기타 기능 <br/>\
- IGMP Snooping : 라우터, 호스트 사이 스위치 IGMP 메시지 듣도록하는 기능 (IPTV) <br/>\
- IGMP Querier Election : 동일 LAN에 여러 멀티캐스트 라우터 존재시, 가장 낮은 주소 라우터 Querier 역할 집중 기능 <br/><br/>\
* ITPE 8회 관리 1교시 9번\
',

// Layer 4
'# (TCP Layer4) 정의 : 프로세스 / 신뢰성 / 전송 계층 <br/>\
- 프로세스간의 신뢰성 있는 데이터 전송을 담당하는 계층 <br/><br/>\
# 프로토콜 <br/>\
- TCP : 신뢰성 연결지향형 프로토콜 <br/>\
- UDP : 비신뢰성 비연결형 프로토콜 <br/>\
- SCTP : 연결지향, 혼잡제어, 순차적 메시지 전송 보장 프로토콜 <br/><br/>\
* 125회 응용 3교시 2번 \
',

// Layer4 Service
'<img src = "./img/TransportLayerService.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 3교시 1번\
',

// TCP 혼잡제어
'# 정의 : 유입 트래픽 / 용량 초과x / 유지 메커니즘 <br/>\
- 네트워크로 유입되는 사용자 트래픽(데이터에 대한 표현)의 양이 네트워크 용량을 초과하지 않도록 유지시키는 메커니즘 <br/><br/>\
# 메커니즘 (<font color = "red">슬컨패패</font>)<br/>\
<img src = "./img/CongestionControl.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성 <br/>\
- Slow Start : CNWD 크기 전송시마다 2배씩 증가, ACK 실패시 감소 <br/>\
- Congestion Avoidance : ACK 수신시 마다 CNWD선형적으로 증가 전송 <br/>\
- Fast Retransmission : 송신자에게 다음 수신알 Sequence Number 알려주고, 그 이후 Slow start <br/>\
- Fast Recovery : Fast Retransmission 통해 손실 세그먼트 전송 후, Congestion Avoidance 수행 방식 <br/><br/>\
# 알고리즘 분류 <br/>\
- 손실기반 : 패킷 손실, 타임아웃, ACK 손실 발생 판단 / Tahoe, Reno <br/>\
- 지연기반 : 측정한 RTT 값 늘어나는 경우 판단 / TCP Vegas, Fast TCP <br/>\
- 하이브리드 : 손실 기반 혼잡 제어, 지연 기반 혼잡제어 융합 / CTCP(Compound), DCTCP(Data Center) <br/><br/>\
* ITPE 합숙 125회 관리 1교시 13번\
',
  
// TCP
'# 정의 : 신뢰성 데이터 전송 규격 <br/><br/>\
# 연결수립 <br/>\
<img src = "./img/TCP_Connection.png" style = "max-width:100%; height:auto;"><br/>\
- SYN : 클라이언트가 요청을 위한 세그먼트 전송 / SYN-SENT (클라이언트) <br/>\
- SYN+ACK : 서버에 연결허락 / SYN-RECEIVED (서버) <br/>\
- ACK : 클라이언트에서 연결 설정 / ESTABLISHED (양단) <br/><br/>\
# 연결종료 <br/>\
<img src = "./img/TCP_Disconnection.png" style = "max-width:100%; height:auto;"><br/>\
- FIN : 클라이언트 연결 종료 / FIN-WAIT1(클라이언트), CLOSE-WAIT(서버) <br/>\
- ACK : 서버에서 연결종료 응답 / FIN-WIAT2(클라이언트), LASK-ACK(서버) <br/>\
- FIN : 서버에서 종료 알림 / TIME-WAIT(클라이언트) <br/>\
- ACK : 클라이언트에서 최종 종료 알림 / CLOSED(양단) <br/><br/>\
# 연결 재설정 발생 유형 <br/>\
1. TCP 연결 거부 (Deny Connection) <br/>\
<img src = "./img/DenyConnection.png" style = "max-width:100%; height:auto;"><br/>\
- 서버 해당 포트 Listen 아닐 경우, RST 전송 거부 <br/><br/>\
2. TCP 연결 강제종료 (Abort Connection) <br/>\
<img src = "./img/AbortConnection.png" style = "max-width:100%; height:auto;"><br/>\
- 클라이언트 오류 발생, 특정 이벤트 시 연결 종료하지 않고 RST 전송하여 강제종료 <br/><br/>\
3. TCP 유휴 세션종료 (Idle Connection) <br/>\
<img src = "./img/IdleConnection.png" style = "max-width:100%; height:auto;"><br/>\
- 기존 세션이 장기간 연결 유지할 경우, 반대편에서 세션 강제종료 <br/><br/>\
# TCP UDP 비교 <br/>\
<img src = "./img/TCPUDPCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 3교시 2번 <br/>\
* 라이지움 88회 관리 4교시 6번\
',

// [TCP-Protocol]- TLS
'# 정의 : 웹 브라우저, 서버 양단 통신 / TCP 전송 보안 채널 형성 / 네트워크 통신 보안 프로토콜 <br/>\
- Transport Layer Security <br/>\
- 웹 브라우저와 서버 양단 통신시 응용 계층 및 TCP 전송계층 사이에서 보안 채널 형성하여 컴퓨터 네트워크에 통신 보안을 제공하는 프로토콜 <br/><br/>\
# 개발 역사 <br/>\
- SSL 2.0(1995.2) : 넷스케이프 SSL 규악 만듦<br/>\
- SSL 3.0(1996) : 2.0 버전 보안결함 <br/>\
- TLS 1.0(1999) : SSL 3.0 기반 표준화 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SSL_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 암호 알고리즘 <br/>\
- 비대칭키 : DH/DHE-DSS/RSA, RSA, DH, Fortezza / 인증 보안 <br/>\
- 대칭키 : RC4, RC5, IDEA, DES, 3DES, ChaCha20, Camellia / 기밀성 <br/>\
- Hash 함수 : HMAC-SHA384, HMAc-md5, HMAC-SHA / 무결성 <br/><br/>\
# Protocol Stack <br/>\
<img src = "./img/SSL_Stack.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Protocol (<font color = "red">HaCAR</font>) <br/>\
- Handshake : 암호 알고리즘 결정, 키분배 방법, 인증 <br/>\
- Alert : Handshake 과정중 상대방 암호 방식 지원 불가 알람 <br/>\
- Change Cipher Spec Protocol : 암호화 알고리즘, 보안 정책 조절 프로토콜 <br/>\
- Record : 메시지 압축(캡슐), 구조화 > TCP Packet 변환 > Header 추가(세션/전송 사이) <br/><br/>\
# 절차 <br/>\
<img src = "./img/SSL_Process.png" style = "max-width:100%; height:auto;"><br/>\
1. Initial <br/>\
- Client Hello : Client SSL Version, Client 생성 난수, 세션 식별자 ,Cipher Suit List <br/>\
- Server Hello : Server SSL Version, Server 생성 난수, 세션 식별자, Cipher Suit 선택 <br/><br/>\
2. Server 전송 <br/>\
- Server Certified : 서버 인증서, 공개키 대한 정보 인증서 전달 <br/>\
- Certificate Request : 서버에서 인증서 요청 <br/>\
- Server Hello Done : 모두 전송 <br/><br/>\
3. Client 전송 <br/>\
- Client Certificate : 인증서 송수신 <br/>\
- Client Key Exchange : 세션 키 생성용 Pre-master Secret을 서버 공개키로 암호화 전송 <br/>\
- Client Finish : 서버에 Change Cipher Spec 전송 후 Finish <br/><br/>\
4. Server 수신 <br/>\
- Certificate Verify : 전자서명 발송, 서버 검증 <br/>\
- Server Finish : Client에 Change Cipher Spec 전송하고 Finish <br/><br/>\
* ITPE 8회 관리 3교시 1번\
',

// DTLS
'# 정의 : 데이터그램 전송 프로토콜 <br/>\
- Datagram Transport Layer Security <br/>\
- 데이터그램 형식의 콘텐츠를 애플리케이션끼리 주고받을 때 안전하게 전송할 수 있도록 고안된 통신 프로토콜 <br/><br/>\
# 특징 <br/>\
- 무결성, 인증, 정보은닉 제공 <br/>\
- 양쪽 종단간 네트워크에서 전송중인 데이터 악성행위 방지 <br/>\
- SSL(Secure Socket Layer), TLS(Transport Layer Security) 기술 토대로 만들어짐 <br/>\
- TLS와 유사한 보안 강도 제공 <br/>\
- 일반적으로 UDP를 사용하기 떄문에 패킷 재조합에 대한 로직 구현 난이도 존재 <br/><br/>\
# Handshake <br/>\
<img src = "./img/DTLS.png" style = "max-width:100%; height:auto;"><br/><br/>\
# TCP 프로토콜 암호화 동향 <br/>\
- 과거 SSL / 현재 TLS <br/>\
- 웹브라우징, 인스턴트 메시징, VoIP 사용 <br/><br/>\
# 데이터 그램 <br/>\
- Header + Payload <br/>\
- 빠른 전송이 필요하지만 신뢰성 까지는 필요 없는 통신에 주로 사용 <br/>\
- UDP(User Datagram Protocol), 대표적인 데이터그램 <br/><br/>\
# 활용 사례 <br/>\
- 오픈 소스에 포함되어 사용 (GnuTLS, OpenSSL DTLS1.2 포함) <br/>\
- VPN 클라이언트 <br/>\
- WebRTC 지원 브라우저 <br/>\
- VOIP 서비스 <br/>\
- 게임 스트리밍 클라이언트 \
',

// DHCP
'# 정의 : 일정 시간 유효 / 임대 개념 IP 할당 관리 / 프로토콜(<font color = "red">RFC-2131</font>) <br/>\
- 네트워크 관리자가 조직의 중앙에서 일정한 시간 동안만 유효하도록 하는 임대 개념의 IP 주소를 할당하고 관리할 수 있도록 해 주는 프로토콜 <br/><br/>\
# 특징 <br/>\
- Client/Server 방식 동작 <br/>\
- Transport Layer의 UDP 기반 <br/>\
- 관리 용이성 및 보안성 강화 <br/><br/>\
# 종류 <br/>\
- Automatic Allocation : 클라이언트에게 영구적인 IP 할당 기법 <br/>\
- Dynamic Allocation : 한정된 시간 할당 기법(재사용 자동) <br/>\
- Manual Allocation : Client IP 네트워크 관리자 할당, DHCP 그 주소 할당 기법 <br/><br/>\
# 동작절차 (<font color = "red">UDP 67 Port / UDP 68 Port</font>)<br/>\
1. 할당(임대) 절차 (<font color = "red">DORA</font>) <br/>\
- Discover(<font color = "red">BootP</font>) : DHCP 서버 <font color = "red">찾기</font> 위한 메시지 브로드캐스팅 <br/>\
- Offer : DHCP 서버 <font color = "red">알림</font> 위한 메시지 브로드캐스팅 <br/>\
- Request : 네트워크 <font color = "red">정보 요청</font> 위해 메시지 브로드캐스팅 <br/>\
- Ack : Request 메시지 수신 후, <font color = "red">응답 메시지</font> 브로드캐스팅 <br/><br/>\
2. 임대기간 연장 절차 (<font color = "red">RA</font>) (1차 50%, 2차 85%)<br/>\
- Request : IP Lease Time 절판시 유니캐스팅 <br/>\
- Ack : Lease Pool <br/>\
<font color = "red">* 연장 실패시 재할당 </font><br/><br/>\
3. IP 주소 반납 절차 <br/>\
- Release : 유니캐스팅 전달 <br/><br/>\
* KPC 117회 대비 합숙 2일차 1교시 7번\
',
 
// DNS
'# 정의 : 호스트의 도메인 이름을 IP 주소로 전환하는 분산형 이름 질의 시스템 <br/><br/>\
# 구조 <br/>\
<img src = "./img/DNSStruct.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 리소스 레코드 종류 <br/>\
- NS : 네임서버 위치 <br/>\
- A : Host -> IP <br/>\
- PTR : IP -> Host <br/>\
- MX : 메일을 MX 레코드로 지정한 호스트로 전송 <br/>\
- CNAME : 별칭 도메인 이름을 실제 도메인 이름에 매핑함 <br/><br/>\
# 재귀 쿼리, 반복 쿼리 <br/>\
1. 재귀 쿼리 <br/>\
- 응밥 못할 경우 다른 서버에게 질의 <br/>\
- example.microsoft.com 예시 : Root DNS -> .com DNS -> microsoft.com Server <br/><br/>\
2. 반복 쿼리 <br/>\
- 다른 네임 서버 목록 전달 방식 <br/>\
- 다른 DNS 서버에게 같은 질의 반복 <br/><br/>\
* 라이지움 87회 응용 2교시 5번\
',
  
// IP Tunneling
'# 정의 : 개별 통신망, IP 통신 규약 / 캡슐화, 역 캡슐화<br/>\
- 개별통신망 환경에서 사용하는 통신 규약을 IP 통신 규약으로 캡슐화/역캡슐화하여 가상의 터널을 형성하고 안전하게 데이터를 송수신 하는 기술 <br/><br/>\
# 매커니즘 <br/>\
1. 패킷 송신 <br/>\
2. 캡슐화 : Router 에서 터널구간의 IP 헤더 삽입 <br/>\
3. 터널 전송 : 인터넷 구간 가상 터널 내 전송 <br/>\
4. 역캡슐화 : Router에서 터널 구간의 IP 헤더 제거 <br/>\
5. 패킷 수신 <br/><br/>\
# 기술유형 <br/>\
1. Layer 2 <br/>\
- PPTP : 사용자 인증, 캡슐화 제공 <br/>\
- L2TP : 사용자 인증, 데이터 압축, 암호화 기능, UDP 사용 <br/><br/>\
2. Layer 3 <br/>\
- GRE : 종단 라우터간 가상 시리얼 링크 인터페이스 생성 필요 <br/>\
- IPSec : AH, ESP, IKE 제공, VPN, 터널 모드 <br/><br/>\
# 활용사례 <br/>\
- VPN <br/>\
- Handover <br/>\
- IPv4,6 전환 <br/><br/>\
* 라이지움 82회 응용 1교시 13번\
',

// [Web 3.0]- WebRTC
'# 정의 : No Plugin Service <br/>\
- Web Realtime Communication <br/>\
- Google 개발 <br/>\
- 웹 브라우저 별도 Plugin 없이 실시간 음성, 영상통화, 파일공유 서비스 제공하는 웹 서비스 <br/><br/>\
# 아키텍처 <br/>\
- Peer Connection <br/>\
- 세션관리 <br/>\
- 음성, 비디오 엔진 <br/>\
- 전송, 음성/영상 캡처 <br/>\
- Network I/O 모듈 <br/><br/>\
# Stack <br/>\
<img src = "./img/WebRTCStack.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술 요소 <br/>\
1. API : Media Stream, RTCPeerConnection, RTCDataChannel <br/><br/>\
2. 통신 <br/>\
- STUN(Session Traversal Utilities for NAT) : 공인 IP, 포트 확인 프로토콜 / <font color = "red">유일 식별정보 반환</font><br/>\
- TURN(Traversal Using Relay NAT) : STUN 대안, 네트워크 미디어 <font color = "red">중개 서버</font> 이용 <br/>\
- ICE(Interactive Connectivity Establishment) : P2P 연결 <font color = "red">최적 경로</font> 찾아주는 프레임워크 <br/>\
- SDP(Session Description Protocol) : 해상도, 형식, 코덱등 컨텐츠 <font color = "red">초기 인수</font> 설명 프로토콜 <br/>\
- STRP, JSEP <br/><br/>\
3. 보안 : TLS/SSL <br/><br/>\
4. 코덱 : llbc, Isac, Opus, VP8 <br/><br/>\
5. 지터 : NetEQ, 비디오 지터 버퍼 <br/><br/>\
# 한계점 <br/>\
- 브라우저간 호환성 : adapter.js 라이브리 없이 호환성 장담 x <br/>\
- 표준성 : 시그널링 서버에 대한 명시적 표준 없음 <br/>\
- UDP 동작 : 속도는 빠르지만, 데이터 손실 발생 가능성 <br/><br/>\
# 동향 <br/>\
- MS : Skype for Web Messagin Service (WebRTC 수용) <br/>\
- Amazon : 태블릿 PC 킨들 파이어에 WebRTC 세션을 통한 기술지원담당자 연결기능 제공 <br/>\
- FaceBook Linkedin : 기존 FaceBook에서 메신저 분리 <br/>\
- 하이퍼커넥트 : 국내벤처, 전세계 무료 메시지, 무료 영상 통화<br/><br/>\
# 개념도 <br/>\
<img src = "./img/WebRTCOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WebRTC.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 통신 유형 <br/>\
<img src = "./img/WebRTC_Type.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 123회 관리 1교시 9번 \
',

// RTSP
'# 정의 : 스트리밍 서비스 / 요구, 응답, 연결 설정, 스트림 재생 / 제어 담당 프로토콜 <br/>\
- Real-Time Streaming Protocol <br/>\
- 인터넷 상 스트리밍 서비스에 있어서, 서비스에 대한 요구, 응답이나 서비스 연결 설정, 스트림 재생과 관련된 각종 제어 담당 프로토콜 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/RTSP_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
- OPTIONS : 서버 요청 <br/>\
- DESCRIBE : 미디어 정보 요청 <br/>\
- SETUP : 미디어 정보 전달 방법 정의 요청 <br/>\
- PLAY : 미디어 재생 <br/>\
- PAUSE : 미디어 일시 정지 <br/>\
- RECORD : 미디어 녹화 <br/>\
- ANNOUNCE : 실시간 미디어 설명 업데이트 요청 <br/>\
- TEARDOWN : 미디어 세션 종료 <br/>\
- GET_PARAMETER : URL 미디어의 변수값 요청 <br/>\
- SET_PARAMETER : URL 미디어의 변수값 설정 요청 <br/>\
- REDIRECT : 다른 서버 연결 요청 <br/><br/>\
<font color = "red"># 기술요소</font> <br/>\
- UDP : TCP 비해 안정성 떨어짐, 속도 빠름, 데이터 수신여부 미확인 <br/>\
- RTP : Multi Cast, Uni Cast 에서 음성, 화상, 모의 데이터 E2E Transport 제공 <br/>\
- SDP : 멀티세션 참여 위한 광고, 실시간으로 멀티미디어 세션 정의 <br/><br/>\
# RTP RTCP 동작과정 <br/>\
<img src = "./img/RTP_RTCP.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 합숙 123회 2일차 관리 1교시 13번\
',

// RTP
'# 정의 : Stream Data 전송 / E2E Protocol <br/>\
- Real-time Transport Protocol <br/>\
- 오디오나 비디오 같은 실시간 스트림 데이터를 전송하기 위한 표준화된 End to End Protocol <br/><br/>\
# 동작원리 <br/>\
<img src = "./img/RTP_Mechanishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Header 구조 (<font color = "red">VPSTSM</font>)<br/>\
- Version(2bit) : RTP 버전 <br/>\
- Payload Type(7bit) : Data Type (0=PCM, 3=GSM, 7=LPC, 33=MPEG2) <br/>\
- Sequence Number(16bit) : RTP Packet마다 1씩 증가하여 전송 <br/>\
- Time Stamp(32bit) : RTP data packet의 첫 번째 byte의 sampling 시간 <br/>\
- Synchronization Source Identifier(32bit) : RTP Stream Source 식별자 <br/>\
- Miscellaneous Fields : 이외 잡다한 필드 <br/><br/>\
# 특징 <br/>\
- UDP 동작 : 빠르게 데이터 전달 <br/>\
- 시간특성 데이터 전송 : 실시간 응용, 시간 정보, 매체 동기화 <br/>\
- RTCP와 함께 동작 : RTCP 와 함께 QoS, 세션 정보 제공 <br/>\
- 데이터 포맷 : 오디오(PCM, GSM, MP3, MPEG, H.264) <br/>\
- 시간정보/동기화 기능 <br/><br/>\
* 98회 응용 1교시 6번\
',

// SCTP 
'# 정의 : TCP 신뢰성 / UDP 실시간성 / <font color = "red">멀티 스트리밍, 멀티 호밍</font> / RFC2960 표준 프로토콜 <br/>\
- Stream Control Transmission Protocol <br/>\
- TCP의 신뢰성 있는 연결 및 전송의 장점과 UDP의 실시간 데이터 전송의 장점을 취한 멀티스트리밍과 멀티호밍을 지원하는 RFC2960 표준의 프로토콜 <br/><br/>\
# 구조도 <br/>\
<img src = "./img/SCTP_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- Verification Tag : Association별로 할당, 세션 식별자 사용 <br/>\
- TSN : 세션에 대한 흐름제어 및 오류 복구 위해 사용 <br/>\
- SSN : 수신단 SCTP에서 Stream 별 순서화 위해 사용 <br/><br/>\
<font color = "red"># 절차</font> <br/>\
1. 연결 절차 <br/>\
- INT > INT-ACK > COOKIE-ECHO > COOKIE-ACK <br/>\
- COOKIE 이용, TCP-SYN(blind attack) 문제 해결 <br/><br/>\
2. 종료 절차 <br/>\
- SHUTDOWN > SHUTDOWN-ACK > SHUTDOWN-CMPL <br/>\
- TCP의 half-open closing 해결 <br/><br/>\
# SCTP Muti Streaming, Multi Homing <br/>\
1. Multi Streaming <br/>\
- 하나의 세션에 서비스별 다수 스트림 전송 <br/>\
- TCP의 HOL(Head Of Line) 해결 <br/><br/>\
2. Multi Homing <br/>\
- 두개 이상의 인터페이스 다중 경로 지원 <br/><br/>\
* 116회 응용 1교시 8번 \
',

// 인터넷 프로토콜 3단계 주소체계
'# 정의 : 인터넷 망 구성요소 식별 체계<br/>\
- 인터넷에 연결된 여러 망들의 구성 요소들을 각각 식별하기 위한 체계로, 인터넷에 연결된 특정 호스트는 TCP/IP 인터넷 식별자 체계에 의해서 식별 <br/><br/>\
# 주소변환 사유 <br/>\
- Domain name : 인식의 용의성 <br/>\
- IP : Unique, 전세계 고유식별, 라우팅 호출 <br/>\
- Physical : 1,2계층 식별가능 HW주소(MAC, LAN cardID)<br/><br/>\
# 구성 <br/>\
- Domain name : 사용자 관점의 이름 체계, 도메인 네임 서버 사용 (DNS)<br/>\
- IP address : 특정 망에 연결된 특정 호스트가 다른 망과 인터 네트워킹 될 때 형성된 가상 망인 인터넷 내에서 유일하게 식별될 수 있도록 하는 주소 -> 32bit or 128bit <br/>\
- Physical address : 물리적 망에 접속된 각 장치에 대한 유일한 물리적 하드웨어 주소, Ethernet 주소 또는 하드웨어 주소 -> 제조사 코드 (3byte) + 일련번호(3byte) <br/><br/>\
<img src = "./img/인터넷프로토콜3단계주소체계_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/인터넷프로토콜3단계주소체계_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/인터넷프로토콜3단계주소체계_3.png" style = "max-width:100%; height:auto;">\
',

// HTTP/2.0
'# 정의 : 보안 개선 / IETF <br/>\
- WWW(World Wide Web)의 네트워크 프로토콜인 HTTP의 차세대 표준 (RFC 7540)<br/>\
- HTTP 1.1 의 성능 및 보안 문제점을 개선하여 국제 인터넷 표준화 기구(IETF)에서 개발한 차세대 웹 통신 표준 프로토콜<br/><br/>\
# 등장배경(HTTP 1.1문제점) <br/>\
- 순차접근 > 속도저하, 비효율적 헤더크기, Polling > 로딩지연 <br/><br/>\
# 주요기능 <br/>\
- Multiplexing <br/>\
- Header Compression => HPACK기술이용, 허프만 코딩 <br/>\
- Server Push <br/>\
- Stream Priority <br/><br/>\
# 한계점 <br/>\
- 웹서버와 클라이언트(Browser)간의 호환성이 전제요구 <br/>\
- 서버와 클라이언트로 판올림 되어야하지만 현재 사용중인 서버를 판올림하기가 쉽지 않음 <br/><br/>\
# 해결 방안 <br/>\
- 서버측 Reverse Proxy를 이용해 HTTP/2가 지원되는 서버의 경우 HTTP/2 프로토콜을 사용할 수 있도록 분기처리 하여 점진적으로 웹의 성능 향상 가능 <br/><br/>\
* HPACK : Binary 형태, 헤더 명과 헤더 값을 쌍으로 갖는 테이블 구조를 Dictionary에 저장하는 형태로 구성, 동적으로 개인됨 <br/>\
* Dictionary에 저장되는 문자열은 허프만 코딩 압축방식이 사용됨 <br/>\
* 스트림 우선순위 기준 : 의존성(Dependency), 가중치(Weight)\
',
 
// HTTP 3.0
'# 정의 : HTTP-over-QUIC <br/>\
- HTTP 연결 및 전송 지연을 최소화 하기 위해 TCP+TLS 조합 대신 UDP+TLS 조합을 이용하는 보안 및 향상된 성능을 제공하는 UDP 기반 전송 계층 프로토콜 <br/><br/>\
# 스택구조 <br/>\
<img src = "./img/HTTP3Stack.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동작과정 (<font color = "red">CRCRSR CRSR CRRCRSR</font>)<br/>\
<img src = "./img/HTTP3ProtocolAction.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/HTTP3ProtocolConnection.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 119회 1교시 4번\
',
  
// QUIC
'# 정의 : UDP 스트림 기반 다중화 전달 프로토콜 <br/>\
- 구글에서 제안한 UDP 상에서 동작하는 스트림기반 다중화 서비스 제공하는 전달 프로토콜 <br/><br/>\
# 손실방지 기법 유형 <br/>\
1. ACK <br/>\
<img src = "./img/QUIC_ACK.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Timeout <br/>\
<img src = "./img/QUIC_Timeout.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 손실감지 및 복구 설명 <br/>\
<img src = "./img/QUIC_Process.png" style = "max-width:100%; height:auto;"><br/><br/>\
# BBR 알고리즘 <br/>\
- Bottleneck Bandwidth and RTT <br/>\
- QUIC에서의 혼잡 제어 방식, 손실될 패킷 이동경로, 미리 예측한 트래픽 의한 속도 저하 방지 알고리즘 <br/>\
<img src = "./img/BBR.png" style = "max-width:100%; height:auto;">\
',

// IPSec
'# 정의 : 인증헤더, 인증헤더 이용 IP 보안 프로토콜 <br/>\
- TCP/IP 프로토콜 IP 계층에서 무결성과 인증을 보장하는 인증헤더(AH)와 기밀성을 보장하는 ESP를 이용한 IP 보안 프로토콜 (IPv6부터 기본 제공)<br/><br/>\
# 특징 <br/>\
- 접근제어 <br/>\
- 무결성 <br/>\
- 인증제어 <br/>\
- 재전송 공격방지 <br/><br/>\
# 구성요소 <br/>\
1. IPSec 정책 <br/>\
- SPD(Security Policy Database) : 패킷에 대한 보안 정책을 적용, 모든 트래픽 처리시에 참조 <br/>\
- SAD(Security Authentication Database) : 미리 설정되어야 할 보안 요소 데이터 관리 <br/><br/>\
2. 프로토콜 <br/>\
- AH(Authentication Header) : IP 패킷을 인증하기 위해 필요한 정보를 포함하는 방법 <br/>\
- ESP(Encapsulation Security Paylod) : 기밀성, 무결성 제공 / AH 기능에 추가기능 포함 프로토콜<br/><br/>\
3. 키관리 매커니즘 <br/>\
- IKE(Internet Key Exchange) : 보안 연관 생성하기 위한 프로토콜 / IPSec을 위한 SA(Security Association) 생성 <br/><br/>\
4. Packet 인터셉터 <br/>\
- PIM(Packet Interceptor Module) : TCP/IP 스택에서 패킷을 가로채서 IPSec Engine 입력으로 사용 <br/><br/>\
5. IPSec 엔진 <br/>\
- IEM(IPSec Engine Module) : 사용자 정의한 Rule 기반 동작, X.509 인증서 이용 암호화/복호화 서비스 수행 <br/><br/>\
# VPN 적용 <br/>\
1. 터널링 <br/>\
- 개념 : Site to Site, Original IP 데이터 그램 전체 패킹, New IP 추가 <br/>\
- 기술 : Packing UnPacking <br/><br/>\
2. 캡슐화 <br/>\
- 개념 : End to End, IP 헤더 제외한 Payload 암호화 패킹한 뒤 Original IP 정보 그대로 전송 <br/>\
- Payload 암호화 패킹 <br/><br/>\
3. 인증 <br/>\
- 개념 : IPSec 보안연결 설정 위한 Key 교환 <br/>\
- 기술 : SA(IKE,인증서), AH(MD5, SHA-1), ESP(RFC 2406) <br/><br/>\
4. 암호화 <br/>\
- 개념 : 암호화 알고리즘 활용하여 IP Packet 처리 <br/>\
- 기술 : ESP(DES, 3DES, SEED, AES) <br/><br/>\
# IPSec 장단점 <br/>\
1. 장점 <br/>\
- 모든 트래픽에 대한 보안 제공 <br/>\
- 모든 트래픽의 IP 통과 제어 <br/>\
- End User 에게 투명 <br/>\
- 높은 보안수준 유지가능 <br/>\
- 다양한 환경 적용, 독립적 운영 <br/>\
- 다양한 인터넷 접속기술 활용 가능 <br/>\
- 고객사 고유정책 반영 가능 <br/><br/>\
2. 단점 <br/>\
- 높은 초기도입 비용, 각 지사VPN 장비 필요 <br/>\
- 트래픽 제어 및 QoS 기능 미약 <br/>\
- 지속적인 관리비용 발생, 대규모 접속환경 미약 <br/>\
- 개인적으로 사용하기엔 복잡함 <br/>\
- 추가 Header 사용으로 Packet Fragmentation 증가, Throughput 저하 <br/>\
- IP Traffic에 국한, Multi protocol 지원 애로 <br/><br/>\
# 사례 <br/>\
<img src = "./img/IPSec_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 정보관리 104회 2교시 3번 \
',
  
// Networ IP
'# 정의 : 효율적 라우팅, 물리 주소 일치 주소 <br/>\
- 인터넷 상에서 라우팅을 효율적으로 하기 위해 물리적인 네트워크 주소와 일치하는 32비트(IPv4) 혹은 128비트(IPv6) 주소체계 <br/><br/>\
# 할당기법 <br/>\
<img src = "./img/NetworkIPOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 세부설명 <br/>\
1. IP 네트워크 구성 <br/>\
- 슈퍼네팅 : 두개 이상의 네트워크 하나의 네트워크로 합치는 기법 <br/>\
- 서브네팅 : 고정된 크기의 Subnet Mask를 사용하여 네트워크 그룹을 나누어 IP를 할당하는 기법 <br/><br/>\
2. IP 주소 할당 <br/>\
- VLSM : 고정길이가 아닌 다양한 길이의 서브넷 마스크를 만드는 기술 <br/>\
- CIDR : 부족한 IP 주소를 해결하기 위해 만들어진 주소 지정 시스템 <br/><br/>\
3. 할당기술 <br/>\
- 고정할당 : 특정 IP를 임의의 기준에 따라 할당 방법 <br/>\
- 유동할당 : DHCP, 일정시간동안 유호하도록 하는 임대개념의 IP 주소 할당 관리 프로토콜 <br/><br/>\
* 아이리포 18회 컴퓨터시스템응용 \
',

// IPv6
'# 정의 : 128비트 확장 인터넷 프로토콜 주소 <br/>\
- IPv4의 주소 고갈 문제를 해결하기 위하여 기존의 IPv4 주소 체계를 128비트 크기로 확장한 차세대 인터넷 프로토콜 주소 <br/><br/>\
# 특징 <br/>\
- 128 Bit 주소 <br/>\
- 보안 문제 해결 (인증성, 기밀성, 무결성) <br/>\
- IPv4와 호환성 <br/>\
- 주소의 확장성, 융통성, 연동성 <br/>\
- 실시간 흐름 제어로 향상된 멀티미디어 기능 지원 <br/>\
- 등급별, 서비스별로 패킷을 구분할 수 있어 QoS 보장 <br/><br/>\
# 구성 <br/>\
- 128비트 = 16 * 8 <br/>\
- 16진수 표현, ":" 구분 <br/>\
- Ex) 01DA : FF01 : 0000 : 0000 : 0000 : 00FF : FA21 : 3C5A <br/><br/>\
# 주소체계 <br/>\
- 유니캐스트 : 1:1 통신 <br/>\
- 멀티캐스트 : 1:N 통신 <br/>\
- 애니캐스트 : 1:1 통신(가장가까이 있는) <br/><br/>\
# 확산 로드맵 : 확산기 (14~17), 성숙기 (18~22) <br/><br/>\
# IPv4 IPv6 비교 <br/>\
<img src = "./img/IPv4_IPv6.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 효율적인 데이터 포맷 : 헤더 고정으로 인한 효율성 제고 <br/>\
- 확장된 주소 공간 : 128비트 <br/>\
- QoS 지원 능력 : 플로우 레이블을 이용하여 서비스별 품질 제어 가능 <br/>\
- 보안 강화 : 인증, 데이터의 무결성, 데이터의 비밀성 제공을 위한 IPSec 확장헤더 필수사항 <br/><br/>\
<img src = "./img/NW_14_3.PNG" style = "max-width:100%; height:auto;">\
',

// [IPv6]- 헤더구성
'# 헤더 구성 <br/>\
<font color = "red">* IPv4 : 버랭토스랭 아플오 티프체 <br/>\
* IPv6 : 버터플 페네홉 </font><br/>\
<img src = "./img/IP_Header.png" style = "max-width:100%; height:auto;"><br/>\
* 기본헤더(40Byte) > 확장 헤더 > 상위 계층 라우터<br/>\
* Identification(8) : 데이터그램 일련번호<br/>\
* flags(3) : 분열 특성 <br/>\
* Fragment Offset(13) : 조각나기 전 원래 데이터그램의 8바이트 단위 위치 <br/>\
* Time to live(8) : IP 패킷 수명 <br/>\
* Protocol(8) : 상위  계층 프로토콜 데이터 포함 (1-ICMP, 2-IGMP, 6-TCP, 8-EGP, 17-UDP, 89-OSPF<br/>\
* Option : 가변길이 Bit <br/>\
* Flow Label(20) : IP 연결지향적 프로토콜 사용 <br/><br/>\
- 헤더길이 필드 제거 <br/>\
- 서비스 유형 필드 -> 트래픽 클래스 필드 <br/>\
- 식별, 플래그, 프래그먼트 옵셋 필드 제거 <br/>\
- TTL 필드는 홉 제한이라고 함 <br/>\
- 프로토콜 필드 -> 넥스트 헤더 <br/>\
- 헤더 검사합 제거 <br/>\
- 옵션 필드는 확장 헤더로 구현<br/><br/>\
# 확장 헤더 <br/>\
<img src = "./img/IPv6_ExtendHeader.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/IPv6_ExtendHeader_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
',

// [IPv6]- 전환기술
'# 구현망 측면 IPv6 전환기술 (<font color = "red">듀터트</font>)<br/>\
1. Dual Stack (라우팅 관점) : 양립 / 호환성 / 고갈 <br/>\
<img src = "./img/DualStack.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Tunneling (NW 관점) : 통과 / 익명 / 복잡 <br/>\
<img src = "./img/Tunneling.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Translation (G/W 관점) : 연동 / 듀얼스택x / 특성반영한계 <br/>\
<img src = "./img/Translation.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주소변환 측면 IPv6 전환 기술 (<font color = "red">헤전응</font>)<br/>\
1. 헤더변환 방식 : 변환 / 속도 / 별도 G/W <br/>\
2. 전송계층 릴레이 방식 : 세션 중간 / Fragment, ICMP 변환 용이 / 내장 IP 변환 <br/>\
3. 응용계층 Gateway 방식 : ALG 은닉, 성능 향상 / 헤더변환 단점 해소 / ALG 모드 별도 실행 <br/><br/>\
* KPC 94회 4교시 6번\
',

// 패킷 단편화
'# 정의 : L2, L3 / 다양한 크기 적응, 공정한 액세스 / PDU 나눔 동작 <br/>\
- L2, L3 계층에서 기억장치 낭비 축소, NW 통신시 다양한 크기 제약 적응, 공정한 액세스를 위해 프로토콜의 기본 교환 단위인 PDU(Protocol Data Unit)을 더 작은 단위로 나누는 동작 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PacketFragmentOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# IPv4 패킷 단편화 <br/>\
<img src = "./img/PacketFragmentIPv4.png" style = "max-width:100%; height:auto;"><br/>\
- Length : Maximum = MTU <br/>\
- ID : Data Group(동일해야 함) <br/>\
- FragFlag : 0(마지막), 1(진행) <br/>\
- Offset : 순서 재결합 위한 위치 명시 <br/><br/>\
# IPv6 패킷 단편화 <br/>\
<img src = "./img/PacketFragmentIPv6.png" style = "max-width:100%; height:auto;"><br/>\
- IP 단편화 필요 없음 : 라우팅 효율 높임 <br/>\
- 단편화 제어 필드 -> 확장 헤더 방식 변경 <br/>\
- 발신지에서만 단편화 시행 <br/><br/>\
* ITPE 6회 응용 4교시 6번\
',

// ICMPv6
'# 정의 : TCP/IP / IP 패킷 처리 문제 / 알림 프로토콜 <br/>\
- Internet Control Message Protocol <br/>\
- TCP/IP에서 IP 패킷을 처리할 때 발생되는 문제를 알려주는 프로토콜 <br/><br/>\
# 추가기능 <br/>\
- PMTUD(Path MTU Discovery) : MTU 값이 가장 적은 링크의 MTU 값 확인 과정 <br/>\
- MLD(Multicast Listener Discovery) : 멀티캐스트 그룹 호스트 확인, 관리 <br/>\
- NDP(Neighbor Discovery Protocol) : IPv6 통한 MAC 주소 알아내고, 통신 가능 제공 <br/><br/>\
* IPTE 6회 응용 4교시 6번\
',

// [IPv6]- 보안취약성 및 대응방안
'<a href = "./doc/IPv6SEC.pdf">참고문헌</a><br/><br/>\
# Dual Stack (상터라패)<br/>\
- 보안수준 상이 / 스니핑 / 인증기술<br/>\
- 의도않은 터널링 유도 / 스푸핑 / 접근제어 <br/>\
- 라우팅 위장 공격 / 스푸핑 / 접근제어 <br/>\
- 패킷 조작 삽입 / DDoS / 침입탐지 <br/><br/>\
# Tunneling (터로방릴) <br/>\
- 비인가 터널 생성 / 권한탈취 / 터널링 패킷 필터, 정책 생성 <br/>\
- 로킹은닉 / 플러딩 / 인증 <br/>\
- 방화벽 우회 / DDoS / SEND CGA <br/>\
- 릴레이 오용, 라우터 위장 / 스니핑,스푸핑 / 인가 인증 적용 <br/><br/>\
# 프로토콜 (헤필패I) <br/>\
- 확장 헤더 공격 / DDoS / 필터링 <br/>\
- 필터링 미수행 / 스니핑 / 주소반영 <br/>\
- 멀티/애니캐스트 패킷오류 유도 / 플러딩 / 패킷 필터링<br/>\
- IPSec 환경 공통 미정의 / 권한탈취 / 키관리 공통 정책 <br/><br/>\
# 연동환경 (토전릴자) <br/>\
- 토폴리지 복잡도 상승 유도 / Ingress 필터링 유도 / 정기적 최적화 <br/>\
- 잘못된 전환 매커니즘 / 스니핑 / 전환 공통 통일 정책 <br/>\
- 6to4 라우터 릴레이 보안 오용 / DDoS / 주소간 라우터 <br/>\
- NAT-PT 박스에 대한 자원 고갈 / DDoS / 포티인증, 주소인증(SEND) 수행 <br/><br/>\
* KPC 94회 4교시 6번\
',

// VLSM
'# 정의 : 가변길이 / 네트워크 주소 낭비 / 설계 기법 <br/>\
- Variable Length Subnet Mask <br/>\
- 고정 길이의 서브넷 마스크를 적용하지 않고, 각 서브넷마다 가변 길이의 값을 적용하여 네트워크 주소의 낭비를 막는 네트워크 설계 기법 <br/><br/>\
# 구성방식 (C Class 가정) <br/>\
- NET ID(24) / SUBNET ID(가변길이 N) / HOST ID(8-N) <br/><br/>\
# 효과 <br/>\
- 인터넷 주소 절약 : 다양한 서브넷 마스크 사용 <br/>\
- 라우팅 속도 개선 : 라우팅 테이블 감소, 빠른 패킷 전달 <br/>\
- 브로드캐스팅 트래픽 감소 : 브로드캐스팅 범위 축소, 네트워크 트래픽 감소 <br/><br/>\
# 절차 (<font color = "red">NW > Host > Host ID > 우선순위 > Subnet Mask > IP </font>)<br/>\
- Network 분석 : 지사별 필요 Network 개수 식별 <br/>\
- Host 개수 식별 : 지사별 필요 Host 개수 식별 <br/>\
- Subnet 별 Host ID 개수 식별 : 2^n, 필요한 Host ID bit 수 계산 <br/>\
- IP 부여 우선순위 결정 : 내림차순 <br/>\
- Subnet Mask 계산 : Host 필요 개수 기반 계산 <br/>\
- 사용 IP 결정 : 각 Subnet 별 사용가능 IP 범위 결정 <br/><br/>\
* ITPE 8회 관리 4교시 3번\
',

// Subnet
'# 동일 NW 작은 그룹 나누기 위해 그룹화; IP 주소 공간의 낭비 문제 해결위해 등장한 네트워크<br/><br/>\
# 구성(4) : 서브넷 마스크, G/W, Net id, Host ID <br/><br/>\
<img src = "./img/Subnet_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnet_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnet_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnet_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnet_5.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnet_6.png" style = "max-width:100%; height:auto;">\
',

// Subnetting 
'# 정의 : 하나의 NW를 여러개의 서브넷으로 분할하는 주소 이용의 효율화 기법 <br/>\
- Subnet Mask를 통해 2단계 계층(Classful)에서 3단계 계층(Classless)구조로 변화 적용 <br/><br/>\
# 공식 <br/>\
- 이용자수(y) = 2^x -2 <br/><br/>\
<img src = "./img/Subnetting_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnetting_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnetting_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnetting_4.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnetting_5.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Subnetting_6.png" style = "max-width:100%; height:auto;">\
',

// Supernetting
'# 정의 : 두 개 이상의 네트워크를 하나의 네트워크로 합치는 기법으로 서브네팅의 반대되는 개념<br/><br/>\
# 특징 <br/>\
- 255.255.255.248.0 을 서브넷 마스크로 사용한다면 5개 네트워크의 어떤 호스트 ID를 사용하더라도 하나의 물리적 NW에서 통신 가능 <br/>\
- CIDR는 기존의 클래스 A,B,C 네트워크 주소 개념 무시, Ipv4의 주소 공간을 효율적으로 할당할 수 있게 됨 <br/>\
- ISP는 자신이 할당 받은 주소 공간 중에서 Clients 요구하는 양 만큼만 잘라서 공급 가능 <br/><br/>\
* 필요 호스트 비트수 파악 : 큰 Host수 NW부터 할당 <br/>\
- Class 초과 => CDIR <br/>\
- Class 미만 => VLSM <br/>\
- IP 할당 : 각 NW의 NW ID, Subnet Mask, Host ID, Host 수 도출\
',

// 정보이론
'# 정의 : 많은 데이터 저장,통신 / 데이터 정량화 / 응용수학 분야 <br/>\
- 최대한 많은 데이터를 매체에 저장하거나 채널을 통해 통신하기 위해 데이터를 정량화하는 응용수학의 분야 <br/><br/>\
# 샤논의 제1정리(정보원 부호화 정리) <br/>\
- 무손실 압축 하한 제시 <br/>\
- L(정보원 평균 부호길이) >= H(정보원 엔트로피) <br/><br/>\
# 샤논의 제2정리(채널 부호화 정리) <br/>\
- 어떤 한계(용량) 내에 오류확률을 줄일 수 있는 부호화 및 변조 기법이 반드시 존재함 <br/>\
- R(정보 전송률) < C(채널 용량) <br/><br/>\
# 샤논의 제3정리(샤논-히틀리 정리) <br/>\
- 주어진 채널을 통해 신뢰성 있게 전달할 수 있는 최대 정보량 <br/>\
- C = Wlog2(1+S/N) <br/>\
- W(가용 대역폭), S(수신 신호 전력), N(잡음 전력) <br/><br/>\
* 125회 관리 4교시 2번\
',

// 대역확산
'# 정의 : 외부 전파 내성 / 넓은 주파수 변조 방식 <br/>\
- 무선 채널에서 여러 신호가 경쟁하면서 공유할 때 외부의 전파 잡음에 강하도록 넓은 주파수 대역으로 분산시키는 일종의 변조 방식 <br/>\
<font color = "red">* 샤논정리 : 어떤 정보원이 채널용량보다 작은 정보율을 가지고 있다면, 에러/잡음을 최소화할 수 있는 부호화 과정이 반드시 존재한다는 정리 </font><br/><br/>\
# 유형 <br/>\
<img src = "./img/SpreadSpectrumType.png" style = "max-width:100%; height:auto;"><br/>\
- 직접확산 (Direct Sequence) : PN Code / CDMA (802.11b) <br/>\
- 주파수도약 (Freqency Hopping) : +주파수합성기 / Bluetooth (802.15.1) <br/>\
- 시간도약 (Time Hopping) : 랜덤한 Time Slot / 혼합 사용 <br/><br/>\
# 상세 설명 <br/>\
1. DSSS <br/>\
<img src = "./img/DSSS.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. FHSS <br/>\
<img src = "./img/FHSS.png" style = "max-width:100%; height:auto;"><br/><br/>\
# DSSS, FHSS 비교 <br/>\
<img src = "./img/DSFS.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 1교시 8번\
',

// 전송부호화
'# 정의 : 아날로그 -> 디지털 / 수학적 매핑, 변환 기법 <br/>\
- 아날로그 형태 정보(음성, 영상 등)를 디지털 형태로 효율적 변환 위한 수학적 매핑 및 변환 기법 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/TransportCodingOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 응용 3교시 6번\
',

// 소스코딩
'# 정의 : 효율적 전송 / 중복 정보 제거 / 데이터 줄이는 과정 및 기법 <br/>\
- 통신 시스템 상에서 효율적 정보 전송을 위해 전송하려는 원천 데이터에서 불필요한 정보 및 중복 정보를 제거하여 전송 데이터를 줄이는 과정 및 기법 <br/><br/>\
# 특징 <br/>\
- 아날로그 -> 디지털 신호 변경 <br/>\
- 데이터 압축 <br/>\
- 시스템 대역폭에서 고속 전송 <br/>\
- 압축 부호화 <br/><br/>\
# 부호화 기법 <br/>\
1. 원천 정보 형태 분류 <br/>\
- 영상 부호화 : JPEG, MPEG <br/>\
- 오디오 부호화 : PCM, DM <br/><br/>\
2. 코드 길이 일정 여부 <br/>\
- 고정 길이 부호화 : FLC(Fixed Length Coding, ASCII Code) <br/>\
- 가변 길이 부호화 : 모스 부호 <br/><br/>\
3. 데이터 손실 여부 <br/>\
- 무손실 압축 부호화 : 허프만코딩, 런렝스 코딩 <br/>\
- 손실 압축 부호화 : JPEG, MPEG <br/><br/>\
* ITPE 6회 응용 3교시 6번\
',

  
// 압축기술
'# 정의 : 데이터 저장공간과 전송대역폭의 효과적 이용을 위해 데이터 크기를 줄이는 기법 <br/><br/>\
# 종류 <br/>\
<img src = "./img/ComressionTech.png" style = "max-width:100%; height:auto;"><br/>\
- 무손실 : 압축전 = 복원데이터 / 정보손실x, 압축률 낮음<br/>\
- 손실 : 압축전 <> 복원데이터 / 정보손실o, 압축률 높음<br/>\
- 혼합 : 손실/무손실 모두 사용 / 정보손실o, 압축률 높음 <br/><br/>\
# 종류 상세 <br/>\
1. 무손실 압축 <br/>\
- Run Length Coding : 연속적으로 나타나는 정보, <font color = "red">반복 횟수</font>로 표현 <br/>\
- Huffman Coding : <font color = "red">높은 빈도</font> 수는 <font color = "red">적은 비트</font>,<font color = "red"> 낮은 빈도</font>수 <font color = "red">많은 비트</font> 할당 <br/>\
- LZW : 반복해서 나타난 어구는 <font color = "red">사전에 등록된 위치 정보</font>로 치환 <br/><br/>\
2. 손실 압축 <br/>\
- 변환 코딩 : <font color = "red">변환 함수</font> 통해 데이터 영역(Domain) 변환 <br/>\
- 예측 코딩 : <font color = "red">직전 정보</font>와 비슷한 성질(ADPCM, DPCM, Motion Compensation) <br/>\
- 양자화 : <font color = "red">미리 정의된 양자</font> 성질 이용, 데이터 부호화 <br/><br/>\
3. 혼합 압축 <br/>\
- MPEG / H.264 : 동영상 압축을 위해 <font color = "red">손실/무손실</font> 기법 결합 <br/>\
- JPEG : <font color = "red">정지 영상</font> 압축 코딩 국제 표준 <br/><br/>\
* ITPE 합숙 124회 1일차 관리 1교시 5번\
',

// Run Length Coding
'# 정의 : 연속 길이 정보 표현 / 정보 압축 기술 <br/>\
- 동일 데이터가 자주 연속되는 경우, 데이터 값과 연속되어 있는 길이 만으로 정보를 표현하여 정보량을 줄이는 방식 <br/><br/>\
# 특징 <br/>\
- 무손실 압축 <br/>\
- 반복 데이터 유리 : BMP, PCX 파일 포맷 사용<br/>\
- 분포 분석/예측 : 엔트로피 계산, 자료 불 특정성 분석, 예측 <br/><br/>\
# 절차 <br/>\
- 데이터 스트림 입력 <br/>\
- 반복 데이터별로 카운트, 저장 <br/>\
- 데이터 스트림 종료 <br/>\
- 압축 (데이터&반복횟수 기록) <br/><br/>\
# 사례 <br/>\
- ABAAAAABCBDDDDDDDABC (20 Bytes) <br/>\
- AB*A5BCB*D7ABC (14 Bytes) <br/><br/>\
* ITPE 합숙 124회 1일차 1교시 5번\
',
  
// Huffman Coding
'# 정의 : 빈도 수 기반 / 다른 길이 비트 매칭 / 무손실 압축 방식 <br/>\
- 동일한 데이터의 등장하는 빈도에 따라 다른 길이의 비트를 매칭하여 완성해가는 무손실 압축 방식 <br/><br/>\
# 절차 <br/>\
1. 압축 <br/>\
- 초기화 : 출현 빈도수 따라 나열 <br/>\
- 해 선택 : 빈도수 낮은 두개의 노드 선택, 결합, 두 노드 위 부모 노드 새로 생성 <br/>\
- 실행 가능성 검사 : 리프 노드 조건 만족 검사 <br/>\
- 최종해 검사 : Huffman 트리 완성 여부, 반복 수행 <br/><br/>\
2. 해제 <br/>\
- 버퍼 준비 : 임시 저장용 버퍼 준비 <br/>\
- 비트 해석 : 아직 읽지 않은 부분 남아 있을 경우 비트 Read <br/>\
- 비트 순회 : 읽은 비트가 Leaf 노드가 될 때 까지 이진 탐색트리 순회 <br/><br/>\
# 예제 <br/>\
<img src = "./img/HuffmanCodingEx1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/HuffmanCodingEx2.png" style = "max-width:100%; height:auto;">\
',
  
// MPEG
'# 정의 : 공간/시간적 동영상 압축 알고리즘 <br/>\
- 정지영상의 압축/복원인 JPEG를 동영상에 적용시켜 공간적 압축 뿐만이 아니라 시간적 압축 기법을 적용한 표준 동영상 압축 알고리즘 <br/><br/>\
# 특징 <br/>\
- 공간 : 화면내 압축 <br/>\
- 시간 : 화면간 압축 <br/><br/>\
# 공간적 압축기법 <br/>\
1. 색차, 공간주파수 연관성 : 상관도, 색차 비례 관계 <br/><br/>\
2. 적용 알고리즘 <br/>\
- DCT(Discrete Cosine Transform) : 이산 코사인 변환으로 높은 공간 주파수 필터링 <br/>\
- 양자화 : 인간이 구별하기 힘든 범위내에서 DCT 계수 반올림 <br/><br/>\
3. 절차 <br/>\
- 분할 : 기존 영상 분할 구성 <br/>\
- 변환 : 2차원 평면 공간의 컬러 정보 -> 2차원 주파수 정보 (푸리에 변환) <br/>\
- 처리 : 인간이 구별하기 힘든 범위내 DCT 계수 반올림 <br/>\
<font color = "red">\
* 푸리에 변환(Fourier Transform) : 시간, 공간에 대한 함수를 주파수 성분으로 분환하는 변환 <br/><br/>\
</font>\
# 시간적 압축기법 <br/>\
1. Motion Estimation <br/>\
- 메크로 블록 설정 : 16*16 분할 <br/>\
- 메크로 블록 검색 : 동일 매크로 블럭 검색 및 확인 <br/>\
- Motion Vector 산출 : 변화 블록 움직임 Vector 화 <br/><br/>\
2. Motion Compensation <br/>\
- 매크로 블록 복사 : 프레임 이동 위치 공지 및 보상 영상 구성 <br/>\
- 움직임 보상 : 모든 매크로 블록 모션 벡터 근거, 복사되어 보상 영상 구성 <br/>\
- 부호화 : 보상 영상, 원래 프레임 통한 움직임 좌표 저장(데이터양 적음) <br/><br/>\
* 116회 응용 4교시 6번\
',

// 채널코딩
'# 정의 : 오류 검출 및 정정 / 잉여 비트 추가 / 복원 과정 <br/>\
- 디지털 전송 채널 상의 잡음, 간섭 등에 의해 발생되는 오류를 검출 및 정정하기 위해 송수신 양측에 의해 합의된 잉여 비트를 추가하고 복원하는 과정 <br/><br/>\
# 특징 <br/>\
- 목적 : 전송단계에서 발생 가능 오류 최소화 <br/>\
- 기능 : 에러 검출(패리티), 에러 정정 <br/><br/>\
# 변조 기법 <br/>\
1. 오류 검출, 정정 <br/>\
- 오류 검출 : Parity, CRC, Checksum <br/>\
- 오류 정정 : FEC, BEC <br/><br/>\
2. 코딩기술 <br/>\
- 파형 코딩 : 직교 신호, 대척 신호 <br/>\
- 구조화 코딩 : Block Coding, Non Block Coding <br/><br/>\
3. 기억여하 <br/>\
- 블록 코드 : 해밍코드, RS Code <br/>\
- 비블록 코드 : Convolutional Code, Turbo Code <br/><br/>\
* ITPE 6회 응용 3교시 6번\
',

// 라인코딩
'# 정의 : 동기 재생, 오류 검출 / 2진 Bit 디지털 데이터 -> 디지털 신호 / 변환 과정 <br/>\
- 수신 측의 원활한 동기 재생과 오류 검출을 위해 2진 Bit의 디지털 데이터를 신호 전달을 위한 의미 있는 디지털 신호(기저대역 신호, 전기적 신호) 로 변환하는 과정 <br/><br/>\
# 특징 <br/>\
- 전송 제약 극복 및 수신 측 동기 재생 용이 <br/>\
- 높은 대역 효율 <br/>\
- 높은 전력 효율 <br/>\
- 비트 동기 정보 포함 <br/><br/>\
# 유형 <br/>\
<img src = "./img/LineCodingType.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 응용 3교시 6번\
',

// Modbus
'# 정의 : 디바이스간 통신 산업용 프로토콜 <br/>\
- 자동화 디바이스간 통신 1979년에 개발된 산업용 프로토콜 (시리얼 통신 위한 어플리케이션 계층 프로토콜 => TCP/IP, UDP 확대) <br/>\
- 기계 자동화 및 제어를 위해 PLC(Programmable Logic Controller)용으로 제작된 시리얼 통신 프로토콜 <br/><br/>\
# 암기 <br/>\
- Protocol 유형 : 라토(RATO) <br/><br/>\
# 특징 <br/>\
- Royalty Free & 공개 프로토콜 <br/>\
- 설치와 유지보수 용이 <br/>\
- 산업용 De-facto 표준 <br/>\
- Simple & Robust Protocol <br/>\
- 비트 단위 또는 워드(16bits) 단위 정보조작용이 <br/>\
- Master-Slave 기반 <br/>\
- 다양한 NW 연동(RS232, RS422, RS485, TCP/IP) <br/><br/>\
# 동작방식 <br/>\
- Master : 산업용 터치 HMI 기기, PC등 상위기기, Request(수행)<br/>\
- Slave(TCPPORT나 PLC등, 수동적, Response 수행) <br/><br/>\
# 프로토콜 유형 <br/>\
- Modbus RTU : 바이너리형식 데이터 표현, 속도 빠름, 공백으로 프레임 구분, 0x00~0xFF 문자사용, RS-232(1:1), RS-485(다수장치) <br/>\
- Modbus ASCII : ASCII문자 표현, RTU 대비 저속, ":"끝문자(CR,LF) 프레임 구분, RS-232(1:1), RS-485(다수장치) <br/>\
- Modbus TCP : TCP/IP 버전(502port), 하위 계층 체크섬 보호, Ethernet <br/>\
- Modbus over TCP : RTU 같이 페이로드에 체크섬 포함된 Modbus TCP와 다른 버전 Ethernet <br/><br/>\
# 프레임 구조 <br/>\
- Modbus-RTU ASCII : ADU(Addressing(Salve ID)) + PDU(Function code, Data) + Error Check(CRC) <br/>\
- Modbus-TCP : ADU=Header(MBAP(Transaction ID, Protocol ID, Length, UnitID)) + PDU(Function Code, Data) <br/>\
* Function Code : Modbus 프로토콜에서 제공하는 명령어 집합 코드 <br/>\
* Data : Function Code 따라 구조 다름, 기본구조 = Start Address, Length, Byte count, Data <br/><br/>\
# 취약점 <br/>\
- CMD 이용 Dos 공격 <br/>\
- MITM <br/>\
- HMI로 부터 송신된 Illegal Command <br/>\
-> Secure Modbus : 암호화된 MBAP + PDU(TS(타임스탬프), FC, Data)) <br/><br/>\
<img src = "./img/Modbus_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Modbus_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/Modbus_3.png" style = "max-width:100%; height:auto;"><br/><br/>\
* RTU : Remote Terminal Unit <br/>\
* PDU : Protocol Data Unit <br/>\
* ADU : Application Data Unit <br/>\
* MBAP : Modbus Application Protocol <br/>\
* 보안취약 : 경량 보안 적용필요 데이터 모델은 제조사마다 조금 다름\
',

// Fieldbus
'# 정의 : 생산라인 적용 통신 시스템 <br/>\
- 산업 현장을 뜻하는 필드(Field)와 통신을 뜻하는 버스(Bus)의 합성어로, 주로 생산 라인에 적용할 수 있는 통신 시스템 전체를 이르는 용어',

// IEEE 802.11i, IEEE 802.11ac, IEEE 802.11ah(M2M-Wifi), IEEE 803.af(Super Wifi)
'IEEE 802.11I: 보안, WEP, WPA, WPA2<br/>\
IEEE 802.11ac: Channel Bonding,256QAM, 8개 Spatial stream, Multi-user MIMO, A-MPDU, 2.4GHz 기술과(11b,11g)와의 호환성 포기<br/>\
IEEE 802.11ad: Beamforming<br/>\
IEEE 802.11af: 방송 유휴 주파수 이용, GDB 기반 채널 액세스<br/>\
IEEE 802.11ah: power saving, 한 AP당 STA를 지원하는 수의 증가<br/>\
IEEE 802.11ai: fast initial link setup, secure link setup within 100ms',

// Wi-SUN
'# 정의 : 1Km, 저전력 무선 통신 표준 규격 <br/>\
- Wireless Smart Utility Network, NB-IoT 보다 2배 빠른 저전력 무선 통신 규격 <br/>\
- 최대 약 1km 정도 거리에서 상호 통신을 실행하는 국제전기전자기술협회(IEEE) 저전력 무선 통신 표준 규격 <br/>\
- 물리층 IEEE 802.15.4g, MAC층 IEEE 802.15.4e로 규격화되어 있으며, 스마트미터(차세대 전력량계)용 무선 방식으로 인증받고 있는 통신 규격 <br/><br/>\
# 특징<br/>\
- IEEE 802.15 : 900MHz 비면허대역, 최고 300kbps 속도<br/>\
- 전파도달거리 약 5km<br/>\
- 통신사 제공 서비스가 아니라 자체 자가망 구축 형태로 서비스가 0.02sec Latency <br/>\
- 스마트미터 및 가정용 에너지 관리 시스템(HEMS)와 가전제품을 연계하는 HAN 용으로 사용/적용함 <br/><br/>\
# Stack <br/>\
- WI-SUN PHY(Layer 1) <br/>\
- WI-SUN (Layer 2) <br/>\
- WI-SUN Interface (Layer 3,4) <br/>\
- Application (Layer 5~7) <br/><br/>\
# 기술요소 <br/>\
1. 근거리 무선 전송 기술 : Scalable 한 전송속도 제공(40~1,000kpbs)<br/>\
- 전송거리 확장(1km)<br/>\
- 음영지역해소<br/>\
- Mesh Routing 보장<br/>\
- 저전력/저가격 <br/>\
- In/Outdoor 연결 <br/><br/>\
2. IEEE 802.15.4g SUN PHY-Layer : 900MHz 대역 RFID/USN 주파수 대역 사용 <br/><br/>\
3. IEEE 802.15.4e MAC-Layer : 멀티홉/멀티PHY 지원, ZigBee NW 계층 및 응용 프로파일 연동 <br/><br/>\
# 활용 : 원격 누전 감시 시스템, 에너지 절감 시스템, 재난 방지용 감지 시스템 <br/><br/>\
* IEEE 802.15.4g PHY-Layer : FSK, OFDM, 900MHz 대역 RFID/USN 주파수 대역 사용 <br/>\
* IEEE 802.15.4e MAC-Layer : Multi-hop 및 Multi-PHY 지원, Zigbee 응용 프로파일 호환\
',

// Wi-fi Positioning System
'# 정의 : Wi-fi 위치 정보 추적 기술 <br/>\
- GPS 사용X 단말, 위치추척 불가 장소에서 Wifi AP 정보 이용 사용자 위치 정보 얻어내는 기술 <br/><br/>\
# 암기 : 수측위 L 운 <br/><br/>\
# 기술 <br/>\
- 무선 AP 정보 수집/분석 : SSID, MAC, Single/Noise Strength <br/>\
- 측위 알고리즘 : Skyhook, Centroid, KT의 EFDA <br/>\
- 위치 DB 구축 : AP를 Key값으로 한 DB:Tagging, Height <br/>\
- LBS 연동 / 표준화 : 단말 내 App, FW 계층 연동 : LBS 인증 시스템 시설정보 시스템 연동 표준화 <br/>\
- 운영 및 관리 : 모니터링 업데이트 <br/><br/>\
<img src = "./img/실내측위방식.PNG" style = "max-width:100%; width:auto;">\
',

// Wi-Fi Halow 
'# 정의 : 와이파이 얼라이언스 IoT 전용 무선 통신 규격 <br/>\
- 와이파이 얼라이언스에서 사물인터넷용으로 제안한 새로운 무선랜 통신 규격으로 현재 표준화 진행 중인 와이파이 표준 IEEE802.11ah를 채용한 장치<br/><br/>\
# 특징 <br/>\
- 장거리 : 900MHz, Wi-Fi 대비 2배 이상의 연결 커버리지 <br/>\
- 저전력 : 각종 센서 <br/>\
- 호환성 : 기존 무선랜 기술과 호환\
',

// Wi-Fi Calling Service
'# 정의 : Wi-Fi 환경 이동전화 서비스 <br/>\
- Wi-Fi 네트워크 환경에서 Subscribe Identification Module(SIM) 카드에 부여된 자신의 이동전화번호를 그대로 사용하여 음성전화 및 문자의 착발신이 가능한 이동전화 서비스 <br/><br/>\
# 암기 <br/>\
- 기술-보안 : 이아섹에이 <br/>\
- 기반 : 이아핸폰 <br/><br/>\
# 기술요소 <br/>\
1. 보안 및 사용자 인증 <br/>\
- ePDG : 보안상 문제 있는(Untrusted) Wifi NW를 Trust하게 함 <br/>\
- IKEv2 : SIM에 자격정보이용 단말기와 ePDG사이에 IPSec 터널 생성 IETF 프로토콜 <br/>\
- IPSec <br/>\
- AAA/HSS : ePDG는 단말 접속요청을 받으면 HSS(Home Subscriber Server)로 부터 인증정보 가져와 단말기의 SIM 정보를 AAA를 통해 상호 인증을 수행 <br/>\
2. 기반기술 <br/>\
- EPC(Evolved Packet Core) : 통해 인증, 과금, End-To-End 연결관리 <br/>\
- IMS : 이동통신과 다른 IP NW간 상호운용 위해 인터넷과 유/무선 환경을 통합 All-IP화 하는 핵심 망 기술 <br/>\
- 핸드오버 <br/>\
- 와이파이콜링 지원OS 탑재폰 : SIM 카드 통한 사용자 인증, 트래픽의 보안처리 위한 ePDG 구축, EPC구조 확장, 핸드오버 위한 시스템 <br/><br/>\
# 동향 <br/>\
1. 해외(T-Mobile) : E911주소 등록시 911 전화시 발신자 현재 위치정보 자동으로 담당자에게 제공 <br/>\
2. 국내<br/>\
- Olleh : 앱 설치를 통해 WiFi망에서 음성통화 절반과금 <br/>\
- LG U+ : 스마트폰으로 와이파이 네트워크 환경에서 인터넷 전화 서비스를 이용할 수 있는 앱 제공 <br/><br/>\
# 발전방향 <br/>\
- 서비스 커버리지 확대 <br/>\
- 통화품질 <br/>\
- 핸드오프 <br/>\
- 통화량 제어 <br/>\
- 위치정보 제공 <br/><br/>\
<img src = "./img/WifiCallingService_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WifiCallingService_2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/WifiCallingService_3.png" style = "max-width:100%; height:auto;">\
',

// Passive Wi-Fi
'# 정의 : 후방산란 데이터 전달 기술 / 전력소비 RF 수신 장치 별도 분리 <br/>\
- 전력소비가 많은 와이파이의 단점을 개선하여 사물인터넷(IoT)에서의 센서 정보 수집에 사용 가능도록 전력을 많이 소비하는 RF수신 장치를 별도 분리하고 후방산란 방식으로 데이터를 전달하는 기술',
 
// 인지무선
'# 정의 : 스펙트럼 지능 분석 / 최적 주파수, 변조방식, 출력 선택 / 통신방식 <br/>\
- Cognitive Radio<br/>\
# 암기 : 특징3 잉동오! / 기술2 S인, 센결공이 / 종류2 DS / 절차 스전간이 / IEEE802.22 <br/><br/>\
# 특징 <br/>\
- 잉여 주파수 대역 확보 : 간섭회피를 위한 주파수 구간 확보, 주파수 효율 활용 <br/>\
- 동적 주파수 선택 : Adaptive 통신, 스케줄링 기법, 자원 할당기법, QoS <br/>\
- 오버레이 통신 : 기존 사용자의 시간적/공간적 이동을 확인, 간섭을 주지 않는 범위에서 주파수를 공유 <br/>\
- IEEE802.22b 표준 : 2011.08. WRAN(Wireless Regional Area Network) 표준으로 채택 (ETRI) <br/><br/>\
<img src = "./img/CongitiveRadio.PNG" style = "width:100%; height:auto;"><br/><br/>\
# 동작 원리 <br/>\
- 스펙트럼 센싱 : 1차 서비스가 사용치 않는 스펙트럼 Hide 스캐닝 <br/>\
- 스펙트럼 생성 : 인지무선 서비스가 스펙트럼 Hole을 사용 <br/>\
- 충돌 발생 : 1차 서비스가 전송을 시작하여 1차 서비스와 인지무선 서비스간의 간섭 발생 <br/>\
- 스펙트럼 재설정 : 인지무선 서비스가 다른 스펙트럼 Hole로 이동 <br/><br/>\
# 주요 기술 <br/>\
1. 기반기술 <br/>\
- SDR(Software Defined Radio) : 광대역 신호처리 HW 토대 SW 다운 다기능 수행 기술 <br/>\
- 인지기술 : 주변정보 지속 수집 스스로 학습 대체기술 -> DB접속 방식, 센싱 방식 <br/>\
2. 핵심 기술<br/>\
- 스펙트럼 센싱 : 스펙트럼 검출 -> 정합필터, 에너지검파, 특징추출 <br/>\
- 스펙트럼 결정 : 동적 주파수 선택 -> 송신전력수준, 경로손실, 우선사용자활동 형태 <br/>\
- 스펙트럼 공유 : 잉여 주파수 대역 확보 -> 중앙형/분산형 <br/>\
- 스펙트럼 이동성 : 충돌회피방지 -> 스펙트럼 핸드오프 <br/><br/>\
# 표준 : IEEE 802.22.WRAN <br/><br/>\
# 동적 절차 <br/>\
- 스캐닝 : Spectrum Hole로 이동 <br/>\
- CR 서비스 전송 : 인지무선서비스가 Spectrum Hole <br/>\
- 간섭발생 : 1차 서비스와 인지무선서비스간의 간섭발생 <br/>\
- CR 서비스 이동 : Spectrum Hole로 이동 <br/><br/>\
# 활용 및 전망 : TV 화이트 스페이스 이용 IEEE802.11.af, 802.11.ag 적용 가능 \
',

// IEEE 802.11p
'# 정의 : WAVE / 자동차 적용 무선 통신 표준 <br/>\
- IEEE가 제정한 자동차에 적용할 수 있는 Wi-Fi/DRSC 기반의 V2X 표준, WAVE로도 불림 <br/><br/>\
# Stack <br/>\
<img src = "./img/WAVE_2.png" style = "width:100%; height:auto;"><br/><br/>\
- WSMP(Wave Short Message Protocol) : 안전한 통신 메시지 전달하는 전송 계층 <br/>\
- TCP/UDP : 안전보다는 시급성이 필요한 메시지 전달하는 전송 계층 <br/>\
- LLC(Logical Link Cotrol) : TCP/UDP, WSMP를 스위칭 위한 논리적 링크 제어하는 데이터 링크 계층 <br/>\
- WAVE MAC : 다수의 통신 채널의 코디네이션을 담당하는 물리 계층 <br/>\
- WAVE PHY : 무선 데이터 프레임 송수신을 담당하는 물리 계층 <br/><br/>\
# 통신 스펙 <br/>\
1) 주파수 : 5.795 Ghz ~ 5.815 Ghz <br/>\
2) 최대 주행 속도 : 200 Km/h <br/>\
3) 최대 전송거리 : 1 Km <br/>\
4) 최대 대역폭 : 27 Mbps / 54 Mpbs <br/><br/>\
* 86회 라이지움 모의고사 1교시 1번\
',

// C-V2X
'# 정의 : 3GPP / 상,하향 링크 / 차량 단말간 직접 통신 / 차량용 무선 전송 기술 표준 <br/>\
- 3GPP 에서 제정된 자율주행 차량용 무선 전송 기술 표준으로, 이동통신 기지국과 단말간 종래의 상향/하향 링크와 더불어 차량 단말간 직접 통신 링크를 지원하는 기술 <br/><br/>\
# 특징 : 보안성(ISO, ETSI), 고속지원(500Km/h) <br/><br/>\
# C-V2X 전송모드 <br/>\
- LTE Direct : 챠랑, 보행자, 도로 인프라가 직접 통신 (5.9GHZ) <br/>\
- LTE Boradcast : 구축된 LTE Network 기반 <br/><br/>\
# 현황 <br/>\
- 5G-V2X : 3GPP, 5GAA 표준화 상용화 로드맵 <br/>\
- Connected Car : C-V2X 활용 기술 <br/>\
- 정보 서비스 : 차량 통신의 클라우드 로컬간 공유 지연성 갱신 <br/><br/>\
<img src = "./img/DSRC_V2X.png" style = "max-width:100%; height:auto;">\
* 121회 관리 1교시 9번\
',
 
// Gigabit WLAN
'# 정의 : IEEE 802.11n 초고속 무선랜 후속으로 Gigabit 수준의 무선 전송 서비스 <br/><br/>\
# 키워드 : QAM, MU-MIMO, OBSS Management, Channel Bounding, Beamforming <br/><br/>\
# 기술요소 <br/>\
1. 운용성 향상 <br/>\
- 무선전송 향상 : High order, 제한된 Channel Feedback, Cooperative MU-MIMO <br/>\
- 무선접속 제어향상 : 멀티유저 전송 MAC, MU-MIMO Protection <br/><br/>\
- Overlapping BSS Management : 각 AP지원하는 STA에게 데이터 송신 및 QoS보장 기술 <br/>\
- Interoperability : Collision 회피 Protection 방안 <br/><br/>\
2. 성능향상 <br/>\
- 변조방식 향상 : 64QAM -> 264QAM <br/>\
- 채널향상 기술 : Channel Coding, BCH부호당 300->600Mbps 처리 <br/>\
- Multi Channel : 호환성 위한 40MHz 전송, 최대 160MHz 까지 확장 <br/>\
- Channel Access : Sub-Channel 효율성, 호환성, 연동성 <br/><br/>\
# 발전 동향 <br/>\
- IEEE P802.11ah : IOT <br/>\
- IEEE P802.11ax : 고집적 환경 <br/>\
- IEEE P802.11ay : 부스터 통한 단거리 <br/>\
- IEEE P802.11az : 실내 위치 측위 <br/><br/>\
* STA : Station <br/>\
* BSS(Basic Service Set) : 기본적 무선랜 환경 <br/>\
* SDMA(Space Division Multiple Access) : 공간분할 다중 액세스 <br/>\
* MAC(Medium Access Control) : Datalink Layer 단위 <br/>\
* CCA(Clear Channel Assessment) : 무선 LAN 채널 감지기능 <br/>\
* QAM(Quadrature Amplitude Modulation) : 직교 진폭 변조(제한범위 고속신호) <br/>\
* BCH(Bitcoin Cash) <br/>\
* 122회 응용 4교시 5번\
',
 
// 저전력 무선통신
'# 유형 <br/>\
<img src = "./img/LowPowerWirelessType.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 비교 <br/>\
<img src = "./img/LowPowerWireless.png" style = "max-width:100%; height:auto;">\
',
  
// 블루투스 5
'# 정의 : 기존 4세대 대비 4배 확장된 거리, 2배의 속도 향상, 8배 Broadcast 용량을 제공하는 통신 규격 <br/><br/>\
# 기술 변화 <br/>\
<img src = "./img/Bluetooth5.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 기술 <br/>\
- 고속 전송 기술(2Mbps) : 1Msym/s -> 2Msym/s (2배 개선) <br/>\
- 원거리 전송 기술(1Km) : FEC 도입, 간섭 내성 강화 <br/>\
- Advertising 개선 : 긴 패킷 Chaining <br/>\
- 실내측위 : AoA, AoD, Beacon <br/><br/>\
* KPC 96회 응용 3교시 8번\
',

// UWB 
'# 정의 : 펄스신호 사용 / 넓은 주파수 대역 / 근거리 무선통신 <br/>\
- Ultra Wide Band <br/>\
- IEEE 802.15.4a / 4z <br/>\
- 짧은 시간의 펄스 신호를 사용하여 넓은 주파수 대역으로 데이터를 송수신하는 근거리 무선통신 <br/><br/>\
# 특징 <br/>\
- 보안성 : 물리계층 암호화 <br/>\
- 신뢰성 : 협대역 페이딩 <br/>\
- 실시간성 : 초당 200~1000회 갱신 <br/>\
- 정확성 : 수 cm 오차 범위 <br/>\
- 호환성 : Bluetooth, Wi-Fi등 다른 대역폭 지원 <br/>\
- 저전력성 : Pulse Radio, 주파수 폭 형성 <br/><br/>\
# 측위기술 종류 <br/>\
1. 전파 도달 <font color = "red">시간</font> 이용 방식 <br/>\
- TWR(Two Way Raging) : UWB 사용 <br/>\
- TDOA(Time Difference Of Arrival) : UWB 사용 <br/><br/>\
2. 전파 송수신 <font color = "red">각도</font> 이용 방식 <br/>\
- AoA(Angle of Arrival) <br/><br/>\
3. 수신 전계 <font color = "red">강도</font> 활용 방식 <br/>\
- RSSI(Receive Signal strength Indicator) : 정확도 떨어짐, 송수신 메시지 시간정보 보낼 수 없을 때 사용 <br/><br/>\
# UWB 측위기술 종류 <br/>\
1. TWR <br/>\
- 개념 : 신호 전송 시간 측정 > 양단 거리 계산 > 삼각 측량 위치 파악 기술 <br/>\
- 특징 : 비동기, 양방향 <br/><br/>\
2. TDOA <br/>\
- 개념 : 지속적 Broad cast > 다수 Anchor Data 수집 > 측위 서버 위치 계산 <br/>\
- 특징 : 동기, 단방향 <br/><br/>\
# UWB, Wi-Fi 비교 (<font color = "red">속거대주</font>)<br/>\
<img src = "./img/UWB_Wifi_Compare.png" style = "max-width:100%; height:auto;">\
',
  
// LBS
'# 정의 : 사용자 / 알려진 존재 파악 가능 / 위치 정보 근거 서비스 <br/>\
- Location Based Service <br/>\
- 이동 중에 있는 사용자가 그들의 지리학적 위치, 소재 또는 알려진 존재에 대해 파악할 수 있는 위치 정보에 근거한 서비스<br/><br/>\
# 개념도 <br/>\
<img src = "./img/LBS_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
1. LDT - 무선 측위 기술<br/>\
- Location Determination Technology <br/>\
- 개념 : <font color = "red">사용자의 위치파악</font> 목적 사용 기술 <br/>\
- 요소 기술 : GPS, Cell ID <br/><br/>\
2. LEP - LBS Platform <br/>\
- Location Enable Platform <br/>\
- 개념 : 위치정보를 관리, <font color = "red">부가기능</font>들 종합적 제공 <br/>\
- 요소기술 : MMDB, 공간 인덱싱, 인증,접근통제 <br/><br/>\
3. LAP - LBS 응용 <br/>\
- Location Application Program <br/>\
- 개념 : 위치기반 서비스 제공 위한 <font color = "red">컨텐츠</font> 처리, 운영 필요기술 <br/>\
- 요소기술 : GIS, L-CRM, Location Trigger Marketing <br/><br/>\
# 유형 <br/>\
- 네트워크 기반 : Cell-ID <br/>\
- 위성신호 기반 : GPS <br/>\
- Wi-Fi 신호 기반 : Wi-Fi AP, WPS <br/>\
- 혼합 측위 기반 : XPS <br/><br/>\
* 98회 응용 4교시 1번\
',

// IPS
'# 정의 : GPS 실내용 버전 <br/>\
- Indoor Positioning System <br/>\
- 실내에서 모바일이 수신하는 센서,전파로 건물 내 위치와 이동경로를 측정하는 시스템 <br/><br/>\
# 특징 <br/>\
- 디바이스 모빌리티 확장 : RTLS 제공 / 애플 iBeacon <br/>\
- 실내외 네트워킹 연계 : GPS, Cell-ID 결합 / 참조 포인트 <br/>\
- 산업간 융복합 플랫폼 구축 : 경로 추적, 서비스 모니터링 / 스마트 팩토리 <br/>\
- 다양한 사용자 경험 제공 : 향상된 UX/UI 제공 / VR,AR,옴니채널,O2O <br/><br/>\
# Radio 기반 측위 기술 <br/>\
1. 기지국 기반 <br/>\
- Cell ID : 위상, 전계강도, 패턴매칭 <br/>\
- FingerPrint : 위치 RSSI 값 측정, 테이블 생성 <br/><br/>\
2. WLAN 기반 <br/>\
- WPS : SSID, MAC, FIngerprint, GPS 음영 측위 <br/>\
- RSSI : 전압레벨, 무선주파수 송수신 전력 거리 측정 <br/><br/>\
3. WPAN 기반 <br/>\
- Zigbee : 저전력, 다수 노드 클러스터링 <br/>\
- Bluetooth : 50m, 지오펜싱 기반 전파멥 <br/><br/>\
# Non-Radino 기반 측위 기술 <br/>\
1. 센서 기반 <br/>\
- 자기장 센서 : 스마트폰 자기장 센서, 내부 자기장 지도 비교 <br/>\
- 관성 센서 : 가속도, 방향계, 상대 위치 측위 <br/><br/>\
2. 주파수 기반 <br/>\
- RFID : RFID Tag, Bluetooth, Wifi <br/>\
- 적외선 : 적외선 센서, 고유 ID, IrDA 컨트롤러 <br/><br/>\
3. 영상 기반 <br/>\
- 비주얼 마커 : 위치 좌표 디코딩 <br/>\
- CCTV : 실시간 영상, 이미징 정보 <br/><br/>\
* WPS (Wifi Positioning System) <br/>\
* RSSI (Received Signal Strength Indicator) : 수신 신호 세기/강도 <br/>\
* UWB (Ultra Wideband) : 3.1~10.6GHz 넓은 주파수 대역 <br/><br/>\
* 119회 관리 4교시 1번\
',

// LDT
'# 정의 : Location Determination Technology <br/>\
- 위치기반 서비스 제공을 위해 모바일 단말의 위치를 측정하는 위치 확인 기술 <br/><br/>\
# 종류 <br/>\
- 네트워크 <br/>\
- 위성신호 <br/>\
- Wi-Fi <br/>\
- 혼합 <br/><br/>\
# 인프라 유형별 종류 <br/>\
1. 네트워크 기반 <br/>\
- Cell ID / Sector ID : 기지국 ~ 단말기 간의 거리 측정 <br/>\
- AoA(Angle of Arrival) : <font color ="red">2개 이상</font>의 기지국과 단말기간 <font color ="red">도달 각</font> 정보 측정 <br/>\
- TDoA(Time Difference of Arrival) : <font color ="red">3개 이상</font>의 기지국과 단말 간의 <font color ="red">도달 시간</font> 정보 측정 <br/><br/>\
2. 위성 신호 기반 (SBA) <br/>\
- SA GPS : 독자적 위성 신호 <br/>\
- MS-Based GPS : 최초 GPS 위성정보에서 독자적 <br/>\
- MS-Assisted GPS : 최초 GPS 위성정보 + 위치측위 정보까지 서버 통해 전달 <br/>\
* MS : Mobile Station <br/><br/>\
# 실내 측위 기술 <br/>\
<img src = "./img/LDT_Tech.png" style = "max-width:100%; height:auto;">\
',
  
// GPS
'# 정의 : 인공위성을 이용한 정확한 위치파악 시스템 <br/>\
- Global Positioning System <br/>\
- 지구상의 어느곳에나 인공위성에서 보내는 정보를 수신하여 정지 또는 이동하는 물체의 위치를 측정할 수 있는 전천후 위치측정 시스템 <br/><br/>\
# 구성요소 <br/>\
- 우주부분 : GPS 위성, 원자 시계 <br/>\
- 제어부분 : 관제국, 송신 시스템 <br/>\
- 사용자 부분 : 안테나, 수신기, 소프트웨어 <br/><br/>\
# 종류 <br/>\
- Stand-alone GPS : 수신기 하나만으로 측정 <br/>\
- D-GPS(Differential) : 일정영역별 측정 <br/>\
- LAD-GPS(Local Area) : 좁은 영역 높은 정확도 <br/>\
- WAD-GPS(Wide Area) : 지역적, 비용적 한계 극복 \
',

// 위성항법기술
'# 정의 : GPS + 정밀전자지도 / 측위기술 / 위경도 파악 기술 <br/>\
- GPS, 정밀전자지도와 구조적 기하학적 오류를 보정하는 보정시스템으로 이루어진 삼각측량 기법 등의 기술을 활용한 사물의 위경도 파악기술 <br/><br/>\
# 구성요소 <br/>\
- 위성항법 인프라 : GPS, 지상제어국, 정밀전자지도 <br/>\
- 위성항법 보정 시스템 : 보정 정보생성기술, 무결성 정보 생성기술(SBAS, DGPS) <br/>\
- 위성항법 측위기술 : 삼각 측량 (24개 위성중 3개 위성과의 거리) <br/><br/>\
# 한계점 <br/>\
1. 위성위치 오차 <br/>\
- 구조적 오차 : 위성, 수신기간 측정된 거리 오차 <br/>\
- 기하학적 오차 : 축위시 이용되는 위성 배치 상황 발생 오차 <br/>\
- 선택적 이용성 오차 : 미국방성 정책적 판단 의한 고의 오차 <br/><br/>\
2. 위성음영지역 <br/>\
- 터널등 GPS 신호 음영 지역 <br/><br/>\
3. 동적지도 불완전성 <br/>\
- 동적지도 실시간 업데이트 한계 : V2X 통신 <br/><br/>\
# 보완방안 <br/>\
1. 위성오차 한계점 보완 <br/>\
- Differencial GPS 기술 : 가까운 거리 GPS 수신기 곹옹 오차 상쇄 <br/>\
- SBAS : GPS 오차 보정, 정지궤도 위성 통한 정확안 위치정보 전달 시스템 <br/><br/>\
2, 위성음영지역 보완측면 <br/>\
- GNSS RSE : 터널 및 지하차도 GNSS RSE 설치 V2I 기술 <br/>\
- 관성항법시스템 : 차량의 움직임 관성센서 복합 계산, IMU, INS <br/>\
<font color = "red">* IMU : Inertial Measurement Unit <br/>\
* INS : Inertial Navigation System </font><br/><br/>\
3. 동적지도 업데이트 보완 <br/>\
- C-ITS 구축 및 이용 : V2X, V2I, V2P, V2C 이용 실시간 업데이트 <br/><br/>\
* 116회대비 JUD 2교시 \
',
  
// SBAS
'# 정의 : 초정밀 GPS 보정 시스템 <br/>\
- Satelite based Augment System <br/>\
- 기존의 GPS 오차(17~37m)를 1m 이내로 보정하여 항공기에 정밀 위치 정보를 제공하는 위성 기반 항법 시스템 <br/><br/>\
# DGPS 비교 <br/>\
<img src = "./img/SBAS_DGPS.png" style = "max-width:100%; height:auto;">\
',
 
// RTLS
'# 정의 : 특정 객체 위치 실시간 <font color ="red">추적</font> / LBS 제공 기술 <br/>\
- 제한적인 범위의 실내 또는 실외에서 특정 사물이나 사람에 대한 인식 및 위치를 실시간으로 추적하여 위치정보기반의 서비스를 제공하는 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/RTLS_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구현기술 <br/>\
<img src = "./img/RTLS_Tech.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 분야별 서비스 <br/>\
- 사물 : 고가물품 관리, 화물 및 장비 추적 <br/>\
- 생물 : 애완동물관리, 성범죄자 추적 <br/><br/>\
* 120회 응용 1교시 13번\
',
 
// Li-Fi
'# 정의 : 광원 신호기반 통신 기술 <br/>\
- Light Fidelity <br/>\
- LED 전구 이용 초고속 통신 가능케 해주는 새로운 초고속 통신 규격, 빛 또는 전자파 스펙트럼의 일부라는 점에 착안, 전구와 같은 광원을 신호 증폭 거점으로 사용하는 기술 <br/><br/>\
# 암기 <br/>\
- 기술 : 디동오 <br/>\
- 구성 : 컨램리(포앰리)피 <br/>\
- 스펙 : 파주속원기 <br/><br/>\
# 기술 <br/>\
- DLight 모듈 : 전구빛 주파수 변형저장 <br/>\
- Dongle <br/>\
- OFDM 방식 <br/><br/>\
# 구성 <br/>\
- 서버/인터넷 <br/>\
- Stream Content <br/>\
- LED Lamp <br/>\
- Receiver Donggle : Photo Detector, Amplication and Processing, Received App Data <br/>\
- PC <br/><br/>\
# 문제점 <br/>\
- 빛이 가려지면 안됨 <br/>\
- 마이크로칩 추가 투자 <br/>\
- 장애물 통과 어려움 <br/><br/>\
# 전망 : 인빌딩, 통신주파수 사용 어려운 시설, 주파수 대역 고갈로 전망 좋음 <br/><br/>\
# 스펙 <br/>\
- 파장 : 780nm ~ 380nm의 가시광 파장 <br/>\
- 주파수 : 380Thz ~ 750Thz, 무선 통신 주파수보다 1만배 이상 넓은 폭 <br/>\
- 속도 : 10GBps, 와이파이 100Mbps의 100배, LTE-A 150Mbps의 66배 <br/>\
- 원리 : 광원 점멸 -> 1/0 <br/>\
- 기술 : SIM-OFDM(Subcarriser Index Modulation-OFDM기술; 수천개의 데이터 스트림을 병렬적으로 전송하는 방식 (IEEE 국제 표준 VLC-PHY) <br/><br/>\
<img src = "./img/LIFI.png" style = "max-width:100%; height:auto;">\
',

// SON
'# 정의 : 환경변화 전파특성 보완 기지국 운용 통신 장비 + 인공지능 기술<br/>\
- Self Organizing Netowrk <br/>\
- 주변 환경에 민감한 전파의 특성을 보완하고 보다 효율적 안정적인 기지국 운용을 위해 인공지능 기술을 통신장비에 접목한 기술 (3GPP 제안 자율 네트워킹 규격) <br/><br/>\
# 암기 <br/>\
- 기능 : 최설치 <br/><br/>\
# 기능(3) <br/>\
- 자가 설정 : 탐지, 결정(최적 알고리즘), 재설정 <br/>\
- 자가 최적화 : 이웃노드의 재설정 <br/>\
- 자가 치유 : 재설정 모니터링 대응 <br/><br/>\
# 구성요소 <br/>\
1. Detection <br/>\
2. Decide Action <br/>\
3. Re-Configuration <br/>\
4. Monitoring Impacts of Re-Configuration <br/><br/>\
# 유사개념 <br/>\
- IBM : self-CHOP : Self-configuration, Self-Healing, Self-Protection <br/>\
-> 참조모델 : MAPE-K : Monitor, Analyze, Plan, Execute and Knowledge <br/><br/>\
<img src = "./img/SON.png" style = "width:100%; height:auto;">\
',

// BcN
'# 정의 : All IP<br/>\
- Broadband Coverage Network <br/>\
- 통신,방송, 인터넷 융합 서비스 언제 어디서나 끊김 없이 통합한 NW <br/><br/>\
# 특징 <br/>\
- 통합 융합화 <br/>\
- 광대역화 : HD급 동영상 멀티미디어서비스 제공가능 대역폭 제공 (50~100Mbps) <br/>\
- Platform 독립적 <br/>\
- 개방화 <br/><br/>\
# 계층별 요소 기술 (5) <br/>\
- 응용(2) : Open API, 서비스 컨버전스 <br/>\
- 제어(3) : Soft Switch, IMS, Diameter AAA <br/>\
- 전달(4) : IPv6, GMPLS, WDM, Multicast <br/>\
- 접속(5) : FTTH, MIMO, AON, PON, Smart Antenna <br/>\
- 단말(3) : MID, UWB, RFID\
',

// CDN
'# 정의 : 컨텐츠 전송 가상망<br/>\
- Contents Delivery Network <br/>\
- 컨텐츠 제공업자(CP)웹 서버 집중 용량이 크거나 사용자 요구 잦은 컨텐츠 ISP 측 설치 CDN 서버에 미리저장, CDN 서버로부터 최적 경로로 사용자 컨텐츠 전달 하기 위한 오버레이 NW: 컨텐츠 전송 가상망 <br/><br/>\
# 구성 : CDN SP, CP(Conetnt Provider), ISP, User <br/>\
<img src = "./img/CDN_Tech.png" style = "width:100%; height:auto;">\
# 효과 <br/>\
1. CP 측면 <br/>\
- 웹성능 향상 : 컨텐츠 분산 처리 <br/>\
- 비용 절감 : Load Balancing인한 OPEX 절감 <br/><br/>\
2. ISP 측면 <br/>\
- 네트워크 성능 향상 : 병목현상 해결 인한 성능 향상 <br/>\
- 보안 효율 향상 : 비용 절감, 보안 효율 향상, DDoS 공격 방어 <br/><br/>\
3. 사용자 측면 <br/>\
- 신속한 서비스 속도 : 사용자 근접거리 Cache 서버 <br/>\
- 품질 및 비용 절약 : 품질 및 서비스 이용시 시간 절약 만족도 <br/><br/>\
# 기술 <br/>\
1. CP 측면 기술 <br/>\
- 콘텐츠 배포 : 분산 저장, 동일 컨텐츠 정확히 배포 <br/>\
- 동기화 기술 : 컨텐츠 변경시 즉각 반영 기술<br/><br/>\
2. ISP 측면 기술 <br/>\
- Caching : Pull 모델, Push 모델, Pull&Push 모델 <br/>\
- GSLB : 클라이언트에게 컨텐츠 찾는 적절 서버 연결 <br/>\
- LB : 서버별 트래픽 분산 통한 웹 고객 서비스 성능 향상 기술 (Product(기업), Service(Outsourcing))<br/>\
- 분산 : 분산 데이터 처리 기술 요구 (Grid Computing, Virtualization) <br/><br/>\
3. User 측면 기술 <br/>\
- 스트리밍 : 대용량 멀티미디어 즉시 실행 (Multicasting, OnDemand)<br/><br/>\
# GSLB(redirection) 기능 (DHML) <br/>\
- DNS Redirection : DNS 질의에 대해 캐시서버IP 제공 <br/>\
- HTTP Redirection : HTTP 302 응답에 캐시 서버 IP 제공 <br/>\
- Meta Redirection : ASX 파일 요청시 위치 정보에 캐시서버IP 제공 <br/>\
- L4 Switch Redirection : 클라이언트가 근원 서버 연결 시도시 Edge Site의 L4 스위치가 캐시서버로 연결\
',
  
'<img src = "./img/CDNADN.png" style = "width:100%; height:auto;">\
',

// WPAN 
'# 정의 : adhoc 기반 무선 NW 기술 / 10m 이내 <br/>\
- WPAN (Wireless Personal Area Network) / IEEE 802.15.x <br/>\
- 10m 이내 짧은 거리 존재 컴퓨터 및 주변기기, 휴대폰, 가전제품 등 디지털 장비를 식별하고 기기사이 데이터 전송 및 제어가 가능한 adhoc 기반 무선 NW 기술<br/><br/>\
# 암기 : 802.15 블공고저메보가 <br/><br/>\
# 주요 기술 <br/>\
- Ad-hoc NW <br/>\
- 저전력 통신 기술 <br/>\
- 비교적 단거리/빠른속도 <br/>\
- 간섭 최소화 <br/>\
- 저비용 : 센서 분산위한 저비용 Chip <br/><br/>\
# IEEE 802 표준 위원회의 워킹 그룹 > IEEE 802.15 : 무선 개인 통신망 (WPAN) 표준을 규정하는 전기전자 기술 협회(IEEE) <br/>\
- 태스크 그룹 1 : WPAN/블루투스 <br/>\
- 태스크 그룹 2 : 공존(Coexsistence) <br/>\
- 태스크 그룹 3 : 고속 WPAN <br/>\
- 태스크 그룹 4 : 저속 WPAN <br/>\
- 태스크 그룹 5 : 메쉬 네트워킹 <br/>\
- 태스크 그룹 6 : 보디 에어리어 네트워크 <br/>\
- 태스크 그룹 7 : 가시광선 통신 <br/><br/>\
<img src = "./img/WPAN_1.png" style = "width:100%; height:auto;"><br/><br/>\
<img src = "./img/WPAN_2.png" style = "width:100%; height:auto;">\
',

// USB 4.0
'# 정의 : Thunderbolt 3 호환 및 Double bandwidth 를 사용하여 40 Gbp 의 전송 대역폭을 지원하는 USB 기술',

// 이동통신 발전역사
'<img src = "./img/MobileCommunicationHistory.png" style = "width:100%; height:auto;">\
* ITPE 7회 관리 3교시 1번 \
',

// 5G 이동통신
'# 정의 : 대한민국 퍼스트 무버 <br/>\
- 차세대 초고속 저지연 이동통신 / 2017년 12월 3GPP 릴리즈 15 / 엄격 기준 ITU IMT-2020<br/><br/>\
<img src = "./img/5G_2.jpg" style = "width:100%; height:auto;"><br/><br/>\
# 개념도 <br/>\
<img src = "./img/5G_Overview.png" style = "width:100%; height:auto;"><br/><br/>\
# 주요기술 <br/>\
1. eMBB (초고속) <br/>\
- enhanced Mobile BroadBand <br/>\
- 주파수 : 3.5GHz, 2.8GHz(mmWave) <br/>\
- 직교분할 다중 전송 : 5G OFDM <br/>\
- 3D Beamforming : 기지국, 단말간 수직, 수평 3D 빔 사용, 집중 조사 <br/>\
- Massive MIMO : 동일 전파 자원 동시 서비스, 수십~수백개 안테나 기술 <br/>\
- SA, NSA : 5G, LTE 망 동시 사용 <br/><br/>\
2. URLLC (초저지연, 고신뢰) <br/>\
- Ultra Reliable Low Latency Communication <br/>\
- Network Slicing : 네트워크 분할 서비스 <br/>\
- MEC : 초저지연 서비스 <br/>\
- SDN/NFV : 코어망 최적 운용 <br/><br/>\
3. mMTC (초연결) <br/>\
- massive Machine Type Communication <br/>\
- 수용용량 : 1Km2 10만 > 100만 <br/>\
- 가변적 채널 대역폭 할당 : 15KHz 고정 OFDM 부반송파 2^n 비율 확장 <br/>\
- eMTC : LTE-M, NB-IoT 장점 결합 <br/>\
- NB-IoT : 150kbps 기반 IoT 전용 통신 기술 <br/><br/>\
# 주파수 분류 <br/>\
<img src = "./img/5GFR1FR2.png" style = "width:100%; height:auto;"><br/><br/>\
* FR2 커버리지 극복방안 <br/>\
- 셀의 개수 증가 <br/>\
- 빔포밍 기술 적용 (건물, 빌딩, 구조물 많을 경우 커버리지 안정성 저하)\
',

// NSA
'# 정의 : Control Plane 4G(eNB) / User, Data Plane 5G(gNB) / 3GPP Release 15 기반 / 5G 기술 <br/>\
- <font color = "red">C4U5 </font><br/>\
- Control Plane의 동작은 4G 기지국(eNB)을 활용하고, User/Data Plane의 동작은 5G 기지국(gNB)을 이용하는 LTE 코어망을 활용한 3GPP Release 15기반 5G 구현 기술 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/5GNSA.png" style = "width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- Release : 3GPP Releas 15(Option 3) <br/>\
- Master Node : eNB (Evolved NodeB) <br/>\
- Control Plane : MME(Mobility Management Entity), 가입자 관리, 위치등록, 인증 신호 처리 <br/>\
- User/Data Plane : SGW(Serving GW), PGW(Packet GW), 통화 설정 관리, 핸드오버 IP, 이동성 <br/>\
- 적용 : Public 5G 초기 상용화 <br/><br/>\
<font color = "red">* EPC(Evolved Packet Core) : 3GPP LTE망에서 코어 네트워크 구조 <br/>\
* UE(User Equipment) : User 단말 수 </font><br/><br/>\
* ITPE 7회 관리 3교시 1번\
',

// SA
'# 정의 : Control Plane, User/Data Plane / 5G 기지국(gNB) / 3GPP Release 15 기반 / 단독형 5G 구현 기술 <br/>\
- 4G 기지국(eNB)를 이용하지 않고 Control Plane과 User/Data Plane의 동작을 오직 5G 기지국(gNB)과 5G Core망을 이용하는 3GPP Release 15기반 단독형 5G 구현 기술 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/5GSA.png" style = "width:100%; height:auto;"><br/><br/>\
# 특징 <br/>\
- Release : 3GPP Release 15(Option 2) <br/>\
- Master Node : gNB(Next Generation NodeB) <br/>\
- Control Plane : AMF(Access and Mobility management Function), 이동성 관리 기능, 단말 접속 관리 <br/>\
- User/Data Plane : UPF(User Plane Function), 단일 Plane(SGW, PGW) <br/>\
- 적용 : Private 5G 적용 유리 <br/><br/>\
* ITPE 7회 관리 3교시 1번\
',
 
// 3GPP Release 16
'# 기술 진화 <br/>\
- Release 15(2017하 ~ 2019상) : 5G 세대전환 <br/>\
- Release 16(2018하 ~ 2020상) : 5G 서비스 확장 <br/>\
- Release 17(2020상 ~ 2021_1) : 5G 서비스 고도화 <br/>\
- Release 18(2021하 ~ 2023하) : 6G 이행 단계 <br/><br/>\
# 주요 성능개선 <br/>\
- 초고신뢰, 초저지연 통신 개선 : 기지국간 협력 통신(CoMP) 지원 <br/>\
- MU-MIMO : 멀티안테나 통한 안정성, 커버리지 <br/>\
- 주파수 활용 기술 개선 : CA(carrier aggregation), 주파수 2개 1개처럼 <br/>\
- 모빌리티 기능 개선 : 핸드오버 성능 개선 <br/><br/>\
# 주요 기능 확장 <br/>\
- TSN(시간 민감형 네트워킹) : 정확한 시간 동기화 개선 <br/>\
- 5G-V2X : 자율주행 통신 성능 표준화 <br/>\
- 5G GPS : 80%시간, 실내3미터, 실외 10미터 오차범위 <br/>\
- 5G 방송(enTV) : 시속 250Km 방송시청 신뢰성 \
',

// MEC
'# 정의 : 사용자 근처 서비스 캐싱 컨텐츠 전개 기술<br/>\
- 무선 기지국에 분산 클라우드 컴퓨팅 기술 적용하여, 서비스와 캐싱 컨텐츠를 이용자 단말에 가까이 전개함으로써 모바일 코어망의 혼잡을 완화하는 기술<br/><br/>\
# 구성도 <br/>\
<img src = "./img/MEC_0.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. MEC 호스팅 인프라 <br/>\
- 하드웨어 자원 : 스위치, 스토리지, 서버들의 HW 자원 <br/>\
- 가상화 레이어 : 응용플랫폼 추상화 <br/><br/>\
2. MEC 응용플랫폼 <br/>\
- 가상화 관리자 : IaaS 도구 제공, 멀티태넌시 실시간 환경 <br/>\
- 응용플랫폼 서비스 : 미들웨어 서비스, 인프라 서비스 <br/>\
* 멀티태넌시 : 여러 사용자를 가진 아키텍처 <br/><br/>\
3. MEC 응용 : 벤더, 통신사업자, 제3의 서비스 사업자들로부터 제공 <br/><br/>\
# 4G, 5G MEC 망구성 비교 <br/>\
<img src = "./img/4G5GMEC.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 5G 에서 엣지 컴퓨팅 구현 <br/>\
- 5G Core User Plane인 UPF 분산화 <br/>\
- 어느지역에서나 MEC 구축 가능 <br/>\
- 셀사이트 / 통신국사 / 기업빌딩내 구축 <br/>\
* User Plane Function <br/><br/>\
# 특징 <br/>\
<img src = "./img/MEC_Characteristic.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 표준화 현황 <br/>\
- ETSI MEC : 통합 MEC App 서비스 제공 <br/>\
- ITUT-T IEC : 보안 요구사항, 시험방법 정의 <br/>\
- 3GPP : 5G 표준화 MEC 추가, Release 15에서 주요 스팩, 기능 정비 <br/><br/>\
* KPC 91회 관리 2교시 1번 <br/>\
* KPC 96회 관리 3교시 2번\
',
  
// SSL Offloading
'# 정의 : SSL 인증서 로드 밸런서 배치 <br/>\
- SSL 인증서를 로드 밸런서에 배치하여 백엔드 별 인증서 배포 및 암호화/복호화 수행을 최소화하여 서비스의 성능을 향상시키는 인프라 기술<br/>\
# 구성요소 <br/>\
- Public NW Layer : 인증서 배치, TLS Termination <br/>\
- Private NW Layer : HTTP 통신, 클라우드 환경 변경시 관련 설정 불필요 <br/><br/>\
# 효과 <br/>\
- 인증서 관리 측면 : 간소화, 배치 최소화 <br/>\
- 성능적 층면 : 암/복호 최소화, AutoScaling 유연성 증가 <br/><br/>\
* KPC 90회 관리 1교시 9번\
',

// [5G 이동통신]- 5GX
'# 정의 : 생활 혁신 / 5G / 산업,경제,일상 <br/>\
- 차세대 네트워크인 5G가 산업,경제,일상 모든 영역에서 무한한 가능성을 열고, 생활 혁신을 이끈다는 의미 (SKT) \
',

// [5G 이동통신]- Open Lan
'# 정의 : 개방형 무선접속 네트워크 <br/>\
- 무선 기지국 연결에 필요한 인터페이스와 기지국 운용체계(OS)를 개방형 표준으로 구축하는 무선접속 네트워크 <br/><br/>\
# 특징 <br/>\
- 네트워크 장비 HW 종속성 탈피 <br/>\
- 유연한 기술 진화 표방 5G 핵심 기술 <br/>\
- 프런트홀 인터페이스에 개방 표준 도입 <br/><br/>\
# 구성요소 <br/>\
- RU : 원격 기지국 장치 <br/>\
- DU : 데이터 처리 분산 장치 <br/>\
- 프런트홀 : 안테나를 이용해 이용자에게 RU와 DU 구간 연결에 필요한 기술 <br/><br/>\
# 기대효과 <br/>\
- 유연성 증가 : 다양한 밴더의 RU, DU 조합가능 <br/>\
- 중소기업 진출 : 5G 인프라 구축 비용 절감으로 인한 진입장벽 낮아짐 <br/>\
- 가상화 기술 적용 <br/>\
- SW 분리 : 차세대 기술 적용 유리, 비용 절감 예상 <br/><br/>\
# 기업 현황 : 구글, MS, FaceBook <br/><br/>\
<img src = "./img/OpenLan.jpg" style = "max-width:100%; height:auto;">\
',

// Network Slicing
'# 정의 : 물리적 하나 네트워크 / 논리적 분리 서비스 / 특화 적용 / 5G NW 핵심 기술<br/>\
- 물리적으로 하나의 네트워크를 통해 Device, Access, Transport, Core를 포함하여 End-to-End로 논리적으로 분리된 네트워크를 만들어 서로 다른 특성을 갖는 다양한 서비스들에 대해 그 서비스에 특화된 전용 네트워크를 제공하는 5G 네트워크의 핵심 기술 <br/><br/>\
# 특징 <br/>\
- 자원의 분리 <br/>\
- 맞춤형 <br/>\
- 독립적 관리 <br/>\
- 경제성 <br/><br/>\
# 구성도 <br/>\
<img src = "./img/5GNetworkSlice.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NetworkSlicingStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
- NFVI : 물리적 H/W 자원, VNF 실행 지원 <br/>\
- NFVs : SW 개발된 네트워크 기능 집합 <br/>\
- MANO(Managent & Orchestration) : 물리/SW적 자원관리 전달, VNF 관리 <br/>\
- E2E Networking : NFV 인프라, VNF 연결 포워딩 그래프 <br/><br/>\
* 118회 관리 1교시 10번 \
',

// Private 5G
'# 정의 : 특정 지역 도입 서비스 / 특화 맞춤형 5G 네트워크 <br/>\
- 특정지역(건물, 공장)등에 한해 사용가능한 5G망으로서, 해당지역에서 도입하고자 하는 서비스에 특화된 맞춤형 네트워크 <br/><br/>\
# 구축 유형 <br/>\
<img src = "./img/Private5GStructure.png" style = "max-width:100%; height:auto;"><br/><br/>\
1. 독립형 <br/>\
- 기업 자가 구축형 : 기업내 5G NW Full Set(gNB, UPF, 5GC, CP, UDM, MEC) 구축(Local 5G 주파수) <br/>\
- 이통사 구축형 : 이통사 자기 면허 주파수 5G LAN 구축 <br/><br/>\
2. 공유형 <br/>\
- RAN Sharing : 물리(UPF, 5GC, CP, UDM, MEC) 논리(gNB) <br/>\
- RAN and Control Sharing : 물리(UPF, MEC), 논리(gNB, 5GC, CP, UDM) <br/>\
- End to End Network Slicing : 물리(gNB), 논리(gNB, UPF, 5GC, MEC, UDM) <br/><br/>\
# 구축 주체, 도입 방식 <br/>\
1. Type 1 <br/>\
- 구축 주체 : 수요기업 <br/>\
- 서비스 제공 : 수요기업 한정 <br/>\
- 도입방식 : 수요기업이 자가망 설치자로 신고 <br/>\
- 주파수 공급방식 : 수요기업에 주파수 지정 <br/>\
- 예시 : 사업장 5G 특화망 운영, 자사 사용 <br/><br/>\
2. Type 2 <br/>\
- 구축 주체 : 수요기업 <br/>\
- 서비스 제공 : 수요기업 + 협력사, 방문객 <br/>\
- 도입방식 : 수요기업이 기간 통신사업자 등록 <br/>\
- 주파수 공급방식 : 수요기업에 주파수 할당 <br/>\
- 예시 : 사업장 5G 특화망 운영, 건물 입주 스타트업, 방문객 사용 <br/><br/>\
3. Type 3 <br/>\
- 구축 주체 : 제3자 등 <br/>\
- 서비스 제공 : 수요기업 + 협력사, 방문객 <br/>\
- 도입방식 : 제3자 등이 기간 통신사업자로 등록 <br/>\
- 주파수 공급방식 : 제3자 등에 주파수 할당 <br/>\
- 예시 : 대형경기장 VR,AR 기업 5G 특화망 설치 운영, 서비스 제공 <br/><br/>\
# 주파수 공급대역 <br/>\
<img src = "./img/Private5GFrequency.png" style = "max-width:100%; height:auto;"><br/>\
- 28GHz 대역(우선공급) : 이동통신 주파수 인접 (28.9~28.5GHz (600MHz폭) 공급 <br/>\
- 6GHz 이하 대역(추후 검토) : 지역 공동사용 B2B 주파수 추가 확보방안 검토 <br/><br/>\
# 현황 <br/>\
- 독일 : 제조업체 중심, 3.7~3.8GHz 대역 특화망 면허 공급 <br/>\
- 일본 : 5G 지역확산 목적, 28.2~28.3GHz, 4.6~4.8GHz, 28.3~29.1GHz <br/>\
- 영국 : 산업체 특화망 구축, 실내 커버리지 확대, 3.8~4.2GHz <br/>\
- 국내 : 5G 특화망(B2B) 구축 주체 이통사만 허용, 시정 불투명, 실내용 장비 개발 지연 (실증,시범사업 수준) <br/><br/>\
# 활용예시 <br/>\
<img src = "./img/Private5GExample.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 합숙 124회 4일차 2교시 6번\
',

// 지능형 초연결망 
'# 정의 : NW 기술 + SDx 기술 / 초연결 네트워크 <br/>\
- 5G, IoT, Wi-Fi 네트워크 기술과 SDN/NFV 기반의 지능형기술을 기반으로 모든 사람과 사물을 신경망과 같이 유기적으로 구축하여 혁신적 서비스 창출을 지원하는 초연결 네트워크 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/InteligenceHyperConectivity.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 <br/>\
- SDN : Control Plane, Data Plane, Open API, NW 제어 융복합 서비스 환경 <br/>\
- NFV : Router, FW, Switch , NW Virtualization, 물리 -> 논리, 유연 제어, 상호 운용성 <br/>\
- NW 지능 기술 : AI, 자율의사, 정책결정, 자동제어, 수동->자동, 자원 최적화 <br/>\
- 초저지연 기술 : 민감형 통신, 지연시간 확정, QoS, Critical Service(Factory, 의료) <br/>\
- 양자 암호 통신 : 양자 특성, 초고속 보안, QKD, 신뢰성 통신 <br/><br/>\
# 사업 모델 <br/>\
<img src = "./img/InteligenceHyperConectivityBM.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 8회 관리 1교시 10번\
',
  
// 6G
'# 정의 : 최대 전송 용량, 5배 1Tbps / 체감 속도, 10배 1Gbps / 6세대 무선 이동 통신 기술 <br/>\
- 5G의 20Gbps보다 5배 빠른 1Tbps 최대 전송 용량과 10배 우수한 1Gbps 사용자 체감 속도 등을 지원하는 차세대 이동 통신 기술 <br/><br/>\
# KPI / 전략과제 (<font color = "red">성대공정지현</font>)<br/>\
<img src = "./img/5G6G_GraphicCompare.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/5G6G.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요기술 <br/>\
- 주파수 기술 : THz, OFDM(New Waveform), 스펙트럼 공유(AI 동적공유) <br/>\
- NW 토폴로지 기술 : 지상/비지상 NW, IAB(Integration of Access and Backhaul) <br/>\
- 고신뢰성 기술 : HW 수준 보안/고신뢰 AI(Secure-by-Design, OSS 보안 강화, 적대적 머신러닝 대응 AI) <br/>\
- Duplex 통신 기술 : 상호 배타적 통신(안테나) <br/>\
- 최적화 기술 : Comprehensive AI <br/>\
- 만물지능 인터넷 : Split Compute(전체 네트워크 가용연산자원 활용) <br/><br/>\
# 6G Pilot Project <br/>\
- 초성능 : 인터랙티브 미디어 / XR, 오감 몰입형, 가상공간 <br/>\
- 초대역 : 스마트 공장 / 디지털 트윈 <br/>\
- 초공간 : Near Space Service / 저궤도 위성, 6G 광대역 <br/>\
- 초정밀 : 초정밀 원격제어 / 드론, 원격 의료 <br/>\
- 초지능 : 자율주행, 스마트 시티 / 초엣지 모빌리티, 초지능 로봇 <br/><br/>\
# 6G 핵심기술개발 주요내용 <br/>\
<img src = "./img/6GCoreTech.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 1교시 8번\
',

// 6G 추진 전략
'# 비전 : 상상이 현실이 되는 6G 시대 선도 <br/><br/>\
# 목표 <br/>\
- 세계 최초 6G 상용화 위한 핵심 기술 확보 <br/>\
- 6G 글로벌 시장 주도 기반 마련 <br/><br/>\
# 추진 전략 <br/>\
- 차세대 6G <font color = "red">기술 선점</font> : 전략과제, 기술 교류, 시범 서비스 추진<br/>\
- 고 부가가치 <font color = "red">특허 확보</font> : R&D 성과 국제표준 반영, 국제 표준화 리더십 확보 추진 <br/>\
- 연구, 산업<font color = "red">기반 조성</font> 병행 : 부품, 장비 국산화, 고급 실무인력 양성 <br/><br/>\
* ITPE 7회 관리 3교시 1번\
',
  
// Wifi 7
'# 정의 : IEEE 802.11be, 비면허대역, CA 기술적용, 30Gbps <br/>\
- 기존의 Wifi 6보다 3배 빠르고 초 실감 미디어 컨텐츠를 안정적으로 전송하는 차세대 무선통신 기술 <br/><br/>\
# 특징 <br/>\
- 5G 음영지역 해소 <br/>\
- 초고속 / 초저지연 <br/>\
- 비 면허 주파수 대역 확대 : 규제 완화, 6Ghz대역 (5,925 ~ 7,125 MHz) <br/><br/>\
# 성능목표 <br/>\
- 최대속도 : 30Gbps 이상 <br/>\
- 최대 대역폭 : 320Mhz 이상 <br/>\
- 지원 주파수 : 2.4Ghz, 5Ghz, 6Ghz <br/>\
- 하위 호환성 : IEEE 802.11 장비 지원 <br/><br/>\
# Wifi 6 비교 <br/>\
<img src = "./img/Wifi67.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/Wifi67Compare1.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/Wifi67Compare2.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* EHT : Extremely High Throughput <br/>\
* HEW : High Efficiency WLAN </font><br/><br/>\
* 125회 응용 1교시 1번 <br/>\
* KPC 96회 응용 1교시 16번\
',
  
// Wifi 6
'# 정의 : IEEE 802.11.ax(Wifi Alliance), High Efficiency Wireless <br/>\
- IEEE 802.11.ac 대비 평균 Throughput 4배 이상 향상되어 밀집환경에서 더 많은 사용자에게 안정적인 Throughput을 제공하는 Wireless LAN 차세대 기술 <br/><br/>\
# 기술요소 <br/>\
1. PHY 매커니즘 <br/>\
- 빔포밍 : 안테나의 빔이 특정 단말에게만 국한되게 하는 스마트 안테나의 한 방식 <br/>\
- MU-MIMO : Trigger Frame 기반 정해진 시간 간경에 따라 전송하는 기술 <br/>\
- OFDMA : 부반송파를 다중 사용자가 분할하여 사용하는 기술 <br/><br/>\
2. MAC 매커니즘 <br/>\
- BSS Color 기술 : Color 기반으로 공간 재사용, 단말기가 속한 AP 관할 BSS확인 <br/>\
- CCA 레벨 제어 : 각 단말기에 전송되는 파워 조절 기술 <br/>\
- Target Wake Time : Access Time 조절 및 절전을 통한 불필요 전송 방지 <br/><br/>\
* 123회 응용 1교시 7번 <br/>\
* KPC 92회 응용 1교시 15번\
',
  
// Wifi 6e
'# 정의 : 6GHz 추가 Wifi 6 <br/>\
- IEEE 802.11.ax 규격을 바탕으로 Wifi 6의 2.4GHz와 5GHz 대역에 추가적으로 6GHz 대역을 포함한 무선통신 표준 <br/><br/>\
# 6GHz 확장 배경 <br/>\
- 전 세계 여러나라들 비면허 사용 위해 6GHz 개방 <br/><br/>\
# Stack <br/>\
<img src = "./img/Wifi6EStack.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술요소 (<font color = "red">OMB BCT</font>)<br/>\
1. PHY <br/>\
- OFDMA : 부반송파를 분할하여 <font color = "red">다수의 단말</font>이 동시에 사용 <br/>\
- MU-MIMO : 제각기 하나 이상의 안테나를 갖춘 무선 단말들이 <font color = "red">서로 통신</font> <br/>\
- Beam Forming : 안테나가 특정 단말에 <font color = "red">국한</font>되게 하는 전송 기술 <br/><br/>\
2. MAC <br/>\
- BSS Color : Color 코드를 사용해 공간을 재사용, <font color = "red">AP 충돌 방지</font> <br/>\
- CCA 레벨 제어 : 각 단말기에 전송되는 <font color = "red">파워 조절</font> <br/>\
- Target Wake Time : Access Time 조절 및 단말간의 <font color = "red">무선 경쟁 회피</font> <br/><br/>\
# 6GHz 대역 장점 <br/>\
- 가용 채널 수 증가 <br/>\
- 160MHz 대역폭을 실질 활용 <br/>\
- 다른 무선기기에 의한 간섭영향 감소 <br/>\
- Gbps급 체감속도를 실현, 5G 이동통신에 가까운 지연 특성 지원 <br/>\
- OFDMA를 활용한 초연결 특성 확보 <br/><br/>\
* 123회 응용 1교시 7번 <br/>\
',
 
// 재난 안전 통신망
'# 정의 : 공공안전 통신 / 그룹통신, 단말간 직접 통화 / 생존성 요구기능 지원 통신망 <br/>\
- Public Safety - Long Term Evolution <br/>\
- 공공안전 통신에 필요한 기능들을 수용한 기술 방식으로서, 그룹통신, 단말간 직접 통화, 망 생존성 등의 요구기능을 지원하는 통신망 <br/><br/>\
# Overview <br/>\
<img src = "./img/PublicWirelessCommunication.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 목적 <br/>\
- 재난대응 능력 제고 : 통합적 재난 대응 <br/>\
- 정확한 의사소통 : 멀티미디어 활용 <br/>\
- 중복투자 해소 : 효율적 운영 관리 <br/>\
- 단일 통신망 통합 : 골든 타임 확보 <br/>\
- 재난안전통신망 활용 : 일상 재난 예방 <br/>\
- 경제적 효율성 : 중복투자 방지 <br/><br/>\
# 기술요소 <br/>\
<img src = "./img/PS-LTE_OverView.png" style = "max-width:100%; height:auto;"><br/>\
- MCPTT : 그룹통신 (PTT) <br/>\
- RAN-Sharing : 무선통신망 통합/상호 기지국 공유 운영 <br/>\
- All-IPv6 : 시스템 효율화, 확장성, IPv4 연계 <br/>\
- eMBMS : 통화폭주  해소, LTE 기반 방송 기술, 재난시 상황 전파 <br/>\
- 드론 영상 스트리밍 : 현장대응역량 강화 <br/>\
- 확장가능 인프라 : 업그레이드 지속 확장 가능, 3GPP Rel. 15 core Upgrade <br/><br/>\
# 기대효과 <br/>\
- 정보관리 : 기관 다중 상황전파, 입체적 재난대응, 초동대응, 전달체계 간소화 <br/>\
- 자원관리 : 현장 통합 지휘, 동원자원 탄력 배치, 실시간 동원자원 탐색/활용 <br/><br/>\
* ITPE 8회 응용 3교시 6번 <br/>\
* 120회 응용 1교시 3번\
',

// LTE-M
'<img src = "./img/LTE-M_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 1교시 3번\
',

// LTE-R
'<img src = "./img/LTE-R_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 1교시 3번\
',

// RAN Sharing
'# 정의 : 서비스 커버리지 확장 / 사업자간 무선 Access 자원 / 공유 기술 <br/>\
- 서비스 커버리지 확장에 대한 제약 사항을 극복하기 위해 사업자간 무선 Access 자원을 공유하는 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/RANSharingOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 목적 <br/>\
1. 망구성 측면 <br/>\
- 최적화 망 구축 : 통합된 공공안전망 구성 <br/>\
- 간섭 최소화 : PS-LTE, LTE-R, LTE-M 망간 간섭 최소화 <br/>\
- 비용 절감 : 하나의 기지국, 여러 망 동시 활용 <br/><br/>\
2. 망활용 측면 <br/>\
- 서비스 연속성 확보 : 중복 지역 간섭 최소화, 연속성 보장 <br/>\
- 재난 피해 감소 : 통합망 통한 신속한 재난 통보 통한 인명, 재산 피해 감소 <br/>\
- 주파수 활용 : 20Mhz 대역 공공안전망 주파수 대역 온전히 확보 <br/><br/>\
# 기술방식 <br/>\
1. MORAN(Multi-Operator RAN) <br/>\
- RAN 요소만 공유, 주파수 공유 x <br/>\
<img src = "./img/MORAN.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. MOCN(Multi-Operator Core Network) <br/>\
- RAN 요소 + 주파수 공유 <br/>\
<img src = "./img/MOCN.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. GWCN(Gateway Core Network) <br/>\
- MOCN + NW 요소 공유 <br/>\
<img src = "./img/GWCN.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 응용 2교시 5번\
',

// D2D
'# 정의 : 인프라 이용 x / 인접 단말간 트래픽 전달 / 분산 통신 기술 <br/>\
- 인프라를 직접 이용하지 않고 인접한 단말 간 트래픽을 직접 전달하는 분산형 통신 기술 <br/><br/>\
# 서비스 시나리오 <br/>\
1. 상업용 서비스 <br/>\
- 광고 : 단말간 탐색, D2D 사용자 알림 <br/>\
- SNS : 관심사항 주변 전송 <br/>\
- 게임 : 게임 정보 단말간 통신 <br/><br/>\
2. 공공안전 서비스 <br/>\
- 공공 안전 및 재난망 서비스 : 셀룰러 불가능 경우, 긴급 상황 인접 단말간 통신 <br/><br/>\
# 통신 유형 <br/>\
1. 단말 위치 <br/>\
- Intra Cell : D2D 단말 모두 같은 셀 내 위치 <br/>\
- Inter Cell : D2D 단말 다른 셀 위치 <br/><br/>\
2. 기지국 제어 방법 <br/>\
- Basic Mode D2D : 기지국 제어 받아 데이터 송수신 <br/>\
- Relay Mode D2D : 하나의 단말이 릴레이 동작, 제어기능 수행 방식 <br/><br/>\
3. 디바이스 네트워크 구성 <br/>\
- 1:1 D2D : 단말 2대 1:1 통신 <br/>\
- Group D2D : D2D 단말 네트워크 구성, 멀티캐스트 통한 데이터 송수신 <br/>\
- Coordination D2D : 응용서버, 통신 장치 추가, 서비스 위한 수집, 전송 기능 수행 <br/><br/>\
# 운용 시나리오 <br/>\
1. In-Network Coverage Scenario <br/>\
<img src = "./img/InNetworkCoverageScenario.png" style = "max-width:100%; height:auto;"><br/>\
- 단말기 모두 기지국의 커버리지 내 존재 <br/><br/>\
2. Out-Of-Network Coverage Scenario <br/>\
<img src = "./img/OutOfNetworkCoverageScenario.png" style = "max-width:100%; height:auto;"><br/>\
- 독립적 단말간 탐색 및 통신 수행 <br/><br/>\
3. Partial Network Coverage Scenario <br/>\
<img src = "./img/PartialNetworkCoverageScenario.png" style = "max-width:100%; height:auto;"><br/>\
- 커버리지내 단말 : 동기 맞춰 D2D 통신 수행 <br/>\
- 커버리지 외 단말 : 별도 동기 절차, 별개 시간/주파수 기준 따라 통신 수행 <br/><br/>\
# 활용분야 <br/>\
1. 통신 <br/>\
- 시선 통신 : 모바일 메신져 결합, 새로운 형태 모바일 서비스 <br/><br/>\
2. 모바일 디바이스 <br/>\
- 스마트폰 자료 전송 : 스마트폰에서 디바이스로 자료 전송 <br/>\
- 즉석 자료 공유 : 회의, 그룹 실시간 자료 공유 <br/><br/>\
3. 무선 재난 통신 <br/>\
- PS-LTE : 긴급재난시 통신 시스템 파괴시, 기지국 단독 중계 가능 기술 <br/>\
- 위치기반 서비스 : D2D 셀룰러 네트워크 위치기반 자원 할당 기술 <br/><br/>\
* 125회 응용 4교시 2번\
',

// 토르 네트워크
'# 정의 : 프라이버시, 보안 보장 익명성 네트워크<br/>\
- 여러 중계서버(라우터)를 통해 패킷을 전송, 트래픽 분석이나, IP주소 추적을 불가능하게 하여 프라이버시와 보안을 보장하는 익명성 네트워크<br/><br/>\
# 구성요소 <br/>\
1. 핵심요소 <br/>\
- Cell : Tor를 통과하는 고정된 크기의 패킷 / 512 바이트 패킷  <br/>\
- Circuit : 입구, 중간, 출구 노드 / TLS 암호화 AES 디피헬만 <br/>\
- OR(Onion Router) : 각 노드 <br/>\
- OP(Onion Porxy) : 지연 방지, Circuit 설정, 해제 역할 / Circuit, OR 정보 저장 <br/>\
- Directory 서버 : OR, Circuit 정보 저장 서버 <br/>\
2. 기술요소 <br/>\
- Tor Browser <br/>\
- Diffine Hellman AES 암호화 : K=G^(xy) mod P 로 Key 공유, 임의키 생성 대칭키 알고리즘 <br/>\
- Socks I/F : 가상회로 데이터 전송 <br/>\
- Obfs proxy, Flash proxy : Tor Traffic -> Http Traffic Convert / 중계서버 검열 우회 <br/><br/>\
<img src = "./img/TOR.jpg" style = "max-width:100%; height:auto;">\
',

// 비지상 네트워크
'# 정의 : 저궤도 위성 이용, 50Mbps급 이상 고속 이동통신 구현 기술 <br/>\
- 지구 전역을 커버하는 저궤도 위성으로 통신 음영지역을 제로에 가깝게 줄이고 차세대 드론 등 융합서비스 등장을 촉진시키는 혁신 통신기술. 저궤도 통신위성에 통신용 기지국 또는 중계기를 탑재해 지상 단말기와 50Mbps급 이상의 고속 이동통신을 가능케 함',

// eMTC
'# 정의 : IoT 전용 통신 기술 / 이동성 / 지속성 <br/>\
- LTE Cat, M1 <br/>\
- 사물인터넷 전용 통신 기술로, 뛰어난 이동성과 긴 배터리 지속시간이 장점 <br/><br/>\
# 활용 분야 <br/>\
- 스마트 원격 관제 사업 <br/>\
- 침수피해 사전 예방 <br/>\
- 스마트 하천 관리 <br/>\
- 농업용 배수펌프장 <br/>\
- 교통 시설물 관리 \
',

// Network Storage
'# 종류<br/>\
1. DAS <br/>\
- Direct Attached Storage <br/>\
- 서버와 저장 장치를 직접 연결 (소형/소규모에 적합) <br/><br/>\
2. NAS<br/>\
- Network Attached Storage <br/>\
- 서버와 저장장치가 이더넷 등의 LAN 네트워크로 연결 (중규모에 적합) <br/><br/>\
3. SAN <br/>\
- Storage Area Netowrk <br/>\
- 서버와 저장장치를 Fiber Channel Switch를 이용해 고속 연결한 데이터 전용망 (대규모에 적합) <br/><br/>\
<img src = "./img/NetworkStorage.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 최근 H/W vender 들이 SAN을 지원하는 솔루션을 경쟁적으로 출시하고 있는 상황 <br/>\
* 시스템, 운영체제, Storage 타입과 상관없이 사용할 수 있는 SAN의 상호 운영성 보장이 지원될 전망 <br/>\
* 각 기업체 환경과 요구사항에 맞는 저장장치 환경을 구축하는 것이 중요 <br/><br/>\
* 122회 1교시 7번 \
',

// 자가망 구축 가이드라인 
'# 정의 : 과기정통부, 자가망 사용 범위 기준 제시 <br/>\
- 과기정통부가 제시한 법률에 근거한 자가망 사용 범위와 기준 제시 가이드 라인 <br/><br/>\
# 배경 <br/>\
1. 지자체측 <br/>\
- 수천 km에 이르는 자가망 보유 <br/>\
- 행정업무와 폐쇄회로 CCTV등 시민 안전에 활용 <br/>\
- 내부 업무로 제한 비효율적 의견 <br/>\
- IoT, Wifi 무선 기술 발전 <br/>\
- 인터넷망 연결인한 시민 복지 향상 <br/><br/>\
2. 통신사업자측 <br/>\
- 자가망 = 인트라넷 개념 <br/>\
- 통신사업 진입 규제 의미 <br/>\
- 시장개입 요소 <br/><br/>\
# 주요내용 <br/>\
- 자가망 활용주체 "법인"으로 한정 <br/>\
- 합법 요소 : 통신사와 계약시 <br/>\
- 불법 요소 : 자가망에 공공 와이파이 공유기 연동 활용 <br/><br/>\
<img src = "./img/자가망1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/자가망2.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/자가망3.png" style = "max-width:100%; height:auto;">\
',
 
// QoS
'# 정의 : 한정, 효율 사용 / 정책별 제어 / 종단간 품질 향상 기술 <br/>\
- Quality of Service <br/>\
- 한정된 네트워크 망의 대역폭을 효율적으로 사용하게 하고, 네트워크 트래픽을 정책 별로 제어하여 인턴세 종단간 서비스 품질을 향상 시키는 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/QoSOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요 요소(<font color = "red">대지패지</font>) <br/>\
- 대역폭 : 특정 App 할당 NW 자원량 / 확장, DWDM, MPEG4 <br/>\
- 지연 : End-To-End 패킷 소요시간 / 라우팅 고속화, MPLS, CDN <br/>\
- 패킷 손실 : 전달 과정 중 유실, 간섭 / 혼잡, 회피, IPv6 <br/>\
- 지터 : 최초 신호 왜곡 정도 / Dos, DDoS 대응, 전용선 <br/><br/>\
# 요소 기술 <br/>\
1. Queuing <br/>\
<img src = "./img/FIFO_Queue.png" style = "max-width:100%; height:auto;"><br/>\
- FIFO Queueing : 하나의 큐 모든 클래스 트래픽 저장 <br/>\
- Priority Queueing : 여러개 FIFO 큐 사용, 다른 클래스 매핑 <br/>\
- WRR(Weighted RR) : 가중치 부여 RR 방식 <br/>\
<img src = "./img/WFQ.png" style = "max-width:100%; height:auto;"><br/>\
- WFQ(Weighted Faire Queueing) : Priority 큐 변형, 가중치 부여 <br/><br/>\
2. Buffer 관리 <br/>\
- RED(Random Early Detction) : 혼잡 발생전 랜덤 패킷 폐기 <br/>\
- WRED(Weighted RED) : 가중치 부여, RED 함수 적용 <br/><br/>\
* 125회 관리 3교시 3번 <br/>\
* 125회 관리 1교시 10번 <br/>\
* KPC 121회 합숙 2일차 2교시 4번\
',

// WFQ
'# 정의 : Fair Queuing 변현 / 특정 기준 가중치 / 같은 양 트래픽 가진 플로우간 차별 / 스케쥴링 기법 <br/>\
- Weighted Fair Queuing <br/>\
- 특정 기준에 따라 가중치를 정하여 같은 양의 트래픽을 가진 플로우 간에서도 차별을 두는 스케쥴링 기법 <br/><br/>\
# 특징 <br/>\
- 적은양 트래픽 우선 처리 : 많은양 트래픽 용량 공유, 대역폭 동일 나누거나 비례 분배 <br/>\
- 구현 방식 의존적 가중치 결정 : TOS Field중 IP precedence 비트 사용하여 구현 <br/>\
- 확장성 한계 : PQ 비슷한 특성, 고속 네트워크 환경 확장성 어려움 <br/><br/>\
# 메커니즘 <br/>\
<img src = "./img/WFQ_Mecahnishm.png" style = "max-width:100%; height:auto;"><br/><br/>\
# WFQ 확장 <br/>\
1. CBWFQ(Class-Base WFQ) <br/>\
- 클래스 기준 큐 구분, 64개 큐잉 <br/>\
<img src = "./img/CBWFQ.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. LLQ(Low Latency Queue) <br/>\
- CBWFQ + Queuing 기법, 우선(PQ), 나머지(CBWFQ) <br/>\
<img src = "./img/LLQ.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 3교시 3번 <br/>\
* 125회 관리 1교시 10번\
',
 
// 통합 서비스
'# 정의 : RSVP를 이용한 통합서비스 모델 <br/>\
- 개별 종단간 개별 트래픽 흐름단위로 경로상의 라우터 자원을 미리 예약함으로써 종단간 QoS를 보장하는 모델<br/><br/>\
# 구조 <br/>\
* RSVP : Resource Reservation Protocol<br/>\
<img src = "./img/통합서비스.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동작 원리 <br/>\
1. 송신 호스트 PATH 전달 (트래픽 요구사항) <br/>\
2. 라우터 PATH 메시지 지나가는 경로상태 기록 <br/>\
3. 수신 호스트 RESV 메시지 전송 <br/>\
4. 망 노드, 요구사항 가능여부 결정 <br/>\
5. 불가능시, 수신자에게 전송후 종료 <br/><br/>\
* 125회 관리 3교시 3번 <br/>\
* KPC 94회 1교시 3번\
',
 
// 차등 서비스
'# 정의 : DSCP 마킹 통한 서비스 차별화 모델 <br/>\
- 패킷의 DS(Differentiated Service) 필드에 DSCP(DS Code Point)를 마킹하여 서비스 클래스별 PHB(Per Hop Behavior) 우선순위를 정하여 QoS를 보장하는 서비스 모델 <br/><br/>\
# 구조 <br/>\
<img src = "./img/차등서비스.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 통합, 차등 서비스 비교 <br/>\
<img src = "./img/통합차등비교.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 3교시 3번\
',
  
// Priority Queue
'# 정의 : 4개 구분 / 차등 서비스 / Starvation 발생 <br/>\
- FIFO 큐잉 단점인 차등화된 서비스를 제공하지 못하는 문제를 해결하기 위해 4개의 트래픽 클래스로 구분하고 우선순위에 따라 서비스하는 큐잉 기법 <br/><br/>\
# 동작 원리 <br/>\
- High, Medium, Normal, Low 4개 큐 설정 (20,40,60,80) <br/>\
- 높은 우선순위 처리 후 낮은 우선순위 패킷 처리 <br/>\
- 높은 우선순위 도착시 선점 <br/><br/>\
* KPC 91회 관리 1교시 5번\
',
  
// Custom Queue
'# 정의 : Starvation 해결 / 16개 트래픽 클래스 / RR / 공평, 패킷 <br/>\
- Starvation 해결 위해 16개의 트래픽 클래스를 구분하고 각 클래스별 큐를 Round-Robin 방식으로 서비스 하는 큐잉 기법 <br/><br/>\
# 동작 원리 <br/>\
- PQ 보다 클래스 세분화, 최대 16개까지 사용가능 <br/>\
- 클래스별로 사용할 Bandwidth 퍼센트 지정 <br/>\
- 모든 큐 동일 우선순위 유지, 클래스별 순환 패킷 서비스 <br/><br/>\
* KPC 91회 관리 1교시 5번\
',
 
// FTP
'# 정의 : File Transfer Protocol <br/>\
- TCP/IP 프로토콜을 기반으로 서버, 클라이언트 사이에서 파일 송수신을 하기 위한 프로토콜 <br/><br/>\
# 전송구조 : Command Channel, Data Channel <br/><br/>\
# 전송모드 <br/>\
<img src = "./img/FTP_Mode.png" style = "max-width:100%; height:auto;"><br/><br/>\
# FTP, FTPS, SFTP 비교 <br/>\
<img src = "./img/FTP_FTPS_SFTP.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 2교시 2번\
',
 
// FTPS
'# 정의 : FTP Secure <br/>\
- FTP(App) + SSL(Trans) <br/>\
- TCP/IP 프로토콜을 기반으로 하는 FTP 프로토콜의 확장으로 SSL 보안 소켓 계층을 추가하여 데이터의 안전한 전송을 가능하게 하는 파일 전송 프로토콜 <br/><br/>\
# 특징 <br/>\
- 주요요소 : 공개키기반, 3가지 인증모드, 다양한 암호 알고리즘 / RSA, x.509 <br/>\
- Stack 구조 <br/>\
<img src = "./img/FTPS_Stack.png" style = "max-width:100%; height:auto;"><br/>\
- 보안성 : End to End 보안 / RFC 2246 취약 <br/><br/>\
* 116회 2교시 2번\
',
 
// SFTP
'# 정의 : SSH FTP <br/>\
- FTP + Tunneling <br/>\
- TCP 보안 채널(터널링)을 형성하여, 데이터의 안전한 전송을 가능하게 하는 파일 전송 프로토콜 <br/><br/>\
# 특징 <br/>\
- 주요요소 : 인증, 기밀성유지, 무결성 / BlowFish, 3DES <br/>\
- SSH 형식 : length(4) / padding(1~8), type(1), data, crc(4) <br/>\
- 키 구성 : 호스트키(공개키,개인키), 세션키(공유키(복사키)) <br/>\
- Stack 구조 <br/>\
<img src = "./img/SFTP_Stack.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 2교시 2번\
',
 
// Socket
'# 정의 : 응용프로그램간의 실시간 정보의 교환 기술 <br/>\
- 소프트웨어로 작성된 추상적인 개념의 통신 접속점을 이용하여 데이터 송수신하는 통신 기술<br/><br/>\
# 유형 <br/>\
- TCP : 양방향, 실시간, 연결지향, 신뢰성 <br/>\
- UDP : 단방향, 대용량, 비연결성, 비신뢰적 <br/>\
- Web : Browser Interface TCP 라인, 실시간, HTML5 API <br/><br/>\
# Process <br/>\
<img src = "./img/SocketProcess.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 기술 <br/>\
<img src = "./img/SocketFunction.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 116회 3교시 6번\
',
 
// NOS
'# 정의 : NW 환경에서 원활한 통신 보장위한 운영체제 <br/>\
- 네트워크 환경에서 서버와 클라이언트간의 원활한 통신을 보장하기 위해 자원 공유 서비스 및 클라이언트의 관리 기능을 제공하는 운영체제 <br/><br/>\
# 아키텍처 <br/>\
<img src = "./img/NOS_Architecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
<img src = "./img/NOS_Specefication.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 동향 <br/>\
- 개방형 네트워킹 기술 구현 : 포워딩 기능과 제어 기능 분리 <br/>\
- 소프트웨어 중심 네트워킹 기술 구현 : 개방형 인터페이스 제공 구조 <br/><br/>\
* 120회 응용 1교시 6번\
',
  
// NW 가상화
'# 정의 : 자원 활용 극대화 <br/>\
- 물리적인 네트워크를 하나 이상의 논리적인 네트워크로 세분화하는 기술 <br/><br/>\
# VLAN (1~2)<br/>\
- 정의 : 단일 물리적 네트워크를 복수의 논리적 네트워크로 분할하여 서로 다른 Broadcast 도메인을 형성하는 가상화 기술 <br/>\
- 구성요소 : 스위치, 라우터, Access Port, Trunk Port, Broadcast Domain <br/><br/>\
# VPN (2~7)<br/>\
- 정의 : Public망에서 암호화 기술을 이용하여 전용선 망과 같은 회선 서비스를 제공하는 기술 <br/>\
- 구성요소 : 공중망, 터널링, 암호화, MPLS(2), IPSEC(3), SSL(4) <br/><br/>\
# NFV (7)<br/>\
- NW 장비에서 제공하는 기능을 추상화 하여 범용서버에서 네트워크 기능을 구현하는 기술 <br/>\
- OSS/BSS, VNFs, NFVI, MANO, E2E 네트워킹 <br/>\
<img src = "./img/NFV_Structure.png" style = "max-width:100%; height:auto;"><br/>\
* OSS/BSS(Operations Support Systems) : 네트워크 재고, 서비스 프로비저닝, 네트워크 구성, 장애관리 <br/><br/>\
# 비교 <br/>\
1. 기술 비교 <br/>\
<img src = "./img/NWVirutlaizationTechCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. 서비스 비교 <br/>\
<img src = "./img/NWVirutlaizationServiceCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 87회 응용 4교시 5번\
',

// VPN
'# 정의 : 터널 / 공중망, 사설망 / 네트워크 서비스<br/>\
- 암호화된 터널을 통해 인터넷에 연결함으로써 공중망(인터넷망)을 사설망(전용회선)처럼 이용할 수 있는 네트워크 서비스 <br/><br/>\
# 특징 <br/>\
- 투명성 제공, 경제성, 커스터마이징 <br/><br/>\
# 기술요소 <br/>\
- 터널링 : 패킷 가상경로 설정 <br/>\
- 암호화 : 패킷 암호화, 기밀성 제공, 공개키 암호화 방식 <br/>\
- 인증 : MAC, 해시함수 이용, 메시지 인증, 무결성 <br/>\
- 접근 제어 : 패킷 필터링 통한 회선 접근 제어 <br/><br/>\
# 구현 <br/>\
<img src = "./img/VPN_Type.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 6회 관리 1교시 7번\
',
  
// NFV
'# 정의 : 네트워크 기능 / 여러 사용자 사용 가능 / 네트워크 장비 가상화 기술 <br/>\
- 하나의 물리적인 네트워크 기능을 여러 사용자 및 장치가 사용 가능하도록 네트워크 기능을 가상화하는 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/NFV_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 서비스체인 <br/>\
- 가상화 인프라 Manager : 하드웨어 장비 및 가상화 레이어 제어 및 관리 <br/>\
- VNF Manager : 가상화된 네트워크 제어 및 관리 <br/>\
- Orchestrator : 리소스 제어 <br/><br/>\
2. 하드웨어 장비 <br/>\
- NFVI : 컴퓨팅, 네트워크, 스토리지 장비 등 하드웨어 리소스 <br/>\
- 가상화 레이어 : 논리적 통합 <br/>\
- VNFs : 라우팅, 방화벽 등 네트워크 기능 제공 <br/><br/>\
# 특징 <br/>\
1. 활용 <br/>\
- 전체 구조 : 디바이스와 기능 분리 <br/>\
- 구조 관리 : 오케스트레이션 기능 <br/>\
- 목적 : 전용 Appliance 기능 가상화, 일반 서버 재배치 <br/>\
- 동기 : 특정 장비 귀속 네트워크 기능 서버 재배치 <br/>\
- 적용 위치 : Service Provider Network <br/>\
- 효과 : 경제성, 유연성/신속성, 개방성 <br/><br/>\
2. 기술 <br/>\
- 응용분야 : 라우터, 방화벽, 게이트웨이, CDN, WAN가속기, SLA <br/>\
- 디바이스 : 스위치 활용 <br/>\
- 플랫폼 : OPNFV <br/>\
- 프로토콜 : 없음 <br/>\
- 표준화 기구 : ETSI NFV Working <br/><br/>\
# SDN NFV 비교 <br/>\
<img src = "./img/SDN_NFV.png" style = "max-width:100%; height:auto;"><br/>\
* NFV : ETSI NFV Working Group <br/><br/>\
* 아이리포 23회 관리 1교시 10번\
',
  
// SDN
'# 정의 : 제어부 / 데이터부 / 네트워킹 가상화 기술 <br/>\
- 네트워크 장비의 제어부와 데이터부를 분리하여 소프트웨어적으로 제어하는 네트워크 <br/><br/>\
# 구성요소 <br/>\
- Application : SDN 운영, 활용, 구동 레이어(4~7Layer) / NMS, Python <br/>\
- Control plane : Openflow 통한 네트워크 장비 제어 / SDN Controller, Southbound API <br/>\
- Data Plane : 실제 Data 통신 수행 Device Layer / SDN Switch, VXLAN <br/><br/>\
# 특징 <br/>\
1. 활용 <br/>\
- 전체 구조 : Plane간 구분으로 Control 기능 강화 <br/>\
- 구조 관리 : Openflow 기반 통신 <br/>\
- 목적 : 제어(중앙 집중화 관리), 데이터 분리 <br/>\
- 동기 : 중앙화 관리, 유연성 확보 <br/>\
- 적용 위치 : 기업 본사/지사, 캠퍼스, 데이터 센터 <br/>\
- 효과 : NW 기반 비즈니스 확대, 투자, 운영비용 절감 <br/><br/>\
2. 기술 <br/>\
- OpenFlow : 스위치, 라우터 프로그램 지원 Open API <br/>\
- CLI : NW 관리자 스위치/라우터 구성 I/F <br/>\
- SNMP : 정보의 원격수정 관리 프로토콜 <br/>\
- XMPP : XML 이용, 메시징 라우팅 스트리밍 프로토콜 <br/>\
- Netconf : XML 이용, 기기 상태 구성 효울 접근 <br/>\
- Open Stack : 클라우드 컴퓨팅 위한 오픈소스 소프트웨어 <br/>\
- 가상화 S/W API : 하이퍼바이저, VM API <br/>\
<font color = "red">* SNMP : Simple Network Management Protocol <br/>\
* XMPP : Extensible Messageing and Presence Protocol </font><br/><br/>\
3. 기능 <br/>\
- 흐름제어 : 트래픽 흐름 정의, 경로 경유 정의 <br/>\
- 네트워크 I/F 제공 : Program 통한 L/B, 접근제어 <br/>\
- 보안 : Controller, Switch 간 SSL 통신 <br/>\
- 가상화 : Multi-tenant 네트워크 생성, 운영 가상 네트워크 구현 <br/>\
- 핵심구성 : Flow Table, Controller, OpenFlow Protocol(SSL) <br/><br/>\
# 구성도 <br/>\
<img src = "./img/SDN_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# Network Slice <br/>\
<img src = "./img/5GNetworkSlice.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 라이지움 88회 응용 3교시 6번\
',
  
// Open flow
'# 정의 : SDN 컨트롤러, 네트워크 장치간 인터페이스 / 프로그래밍 네트워크 제어 기술 <br/>\
- SDN의 컨트롤러와 네트워크 장치간의 인터페이스 규격으로 패킷을 제어하는 기능과 전달하는 기능을 분리하고 프로그래밍을 통해 네트워크를 제어하는 기술 <br/><br/>\
# 모형 <br/>\
<img src = "./img/OpenFlowModel.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
<img src = "./img/OpenFlowComponent.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 절차 <br/>\
- Flow Entry 있는 경우 <br/>\
<img src = "./img/OpenflowFlow1.png" style = "max-width:100%; height:auto;"><br/><br/>\
- Flow Entry 없는 경우 <br/>\
<img src = "./img/OpenflowFlow2.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 라우팅 방식 <br/>\
1. Hop by hop <br/>\
- Controller 서비스별 계산 경로 파악 <br/>\
- 구성 유연성, 효율 Up to 100% <br/>\
- 확장성 문제 발생 <br/><br/>\
2. Over Lay <br/>\
- Controller 모든 경로 제어 x, 터널링 기술(L2,L3) 이용 <br/>\
- 대규모 네트워크, 기존 IP 적용 가능 <br/>\
- 기존 네트워크와 같은 효율 수준 <br/><br/>\
* KPC 23회 관리 4교시 2번\
',

// SD WAN
'# 정의 : WAN / Data Plane, Control Plane / 분리 가상화 <br/>\
- 광역 네트워크(WAN)에서 데이터(Data Plane)와 제어 영역(Control Plane)을 분리하여 가상화된 오버레이 네트워크 구성 기술 <br/><br/>\
# 부각 배경 <br/>\
- Remote Work 인한 WAN 구간 병목구간 발생 / LAN -> WAN <br/>\
- SaaS 이용증가 <br/><br/>\
# 특징 <br/>\
- 네트워크 가상화 : NFV 활용, 다양한 기능 수행 가능 <br/>\
- WAN 회선 비용 절감 : 기존 인터넷 회선 + 저렴 회선 추가 > 대역폭 향상 및 비용 절감 <br/>\
- 어플리케이션 관리 : Layer 7기반 QoS 수행 <br/>\
- 중앙 집중형 제어 : SD-WAN Controller 통한 QoS 및 네트워크 토폴로지 관리 <br/><br/>\
# 구조 <br/>\
<img src = "./img/SDWAN.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">* 기존 MPLS에 비해 상대적 저렴한 회선 추가 위해 SD-WAN 구성 </font><br/><br/>\
# 기술요소 <br/>\
1. 장비 측면 <br/>\
- SD-WAN Controller : 액세스 노드 정책 설정, 토폴로지 관리 <br/>\
- SD-WAN CPE : 오버레이 네트워크 생성 위한 라우팅 및 터널링 엔진 <br/><br/>\
2. 기술 측면(<font color = "red">패듀어세</font>) <br/>\
- Dynamic Path Switching : 성능 저하시 다른 경로 선택 <br/>\
- Packet Duplication : 중요 패킷 경우 중복 전송 <br/>\
- Link Aggregation : 물리적 여러 회선 -> 논리적 하나 회선 <br/>\
- Network Segmentation : Segment별 VLAN 할당 <br/><br/>\
# 기능 <br/>\
1. SD-WAN Orchestration <br/>\
- 클라우드 기반 중앙 집중형 관리 <br/>\
- 정책 기반 SD-WAN 오버레이 운영 <br/>\
- Network Overlay 설정 <br/>\
- Backhual Traffic 감소 <br/>\
- 가시성 <br/><br/>\
2. Traffic Control <br/>\
- Traffic Steering <br/>\
- Dynamic Path Control(Switching) <br/>\
- Tunnel Bounding (Packet Duplication) <br/><br/>\
3. 보안 <br/>\
- Zone Based Firewall <br/>\
- 클라우드 보안 솔루션과 통합 <br/><br/>\
# SD-WAN, SD-WAN 2.0 비교 <br/>\
<img src = "./img/SDWANCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 4교시 1번\
',

// SDR
'# 정의 : 소프트웨어 조작 / 셀룰러, PCS, 와이브로, 무선 LAN, 위성통신 / 하나 단말기 이용 통신 기술 <br/>\
- 단말기나 칩 등 하드웨어를 바꾸지 않고 소프트웨어 조작만으로 셀룰러, PCS, 와이브로, 무선 LAN, 위성통신과 같은 다양한 무선 통신서비스를 하나의 단말기에서 이용할 수 있도록 하는 네트워크 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/SDR.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 요소기술 <br/>\
- 소자 : 변환(A/D,D/A), 광대역 RF, 디지털 IF, FPGA, DSP, SDR Processor <br/>\
- 소프트웨어 : 소프트웨어구조(SCA), 미들웨어(VM, CORBA, JAVA), OS(RTOS), Description Langauge(UML, XML) <br/>\
- 통신 : NW(HandOver, 탐지), 다운로드(OTA Download Protocol), 보안 및 인증 <br/>\
- 시스템 기술 : 하드웨어 Abstraction, 하드웨어 플랫폼(SDR Test Bed, Smart Anthena), 소프트웨어 플랫폼 <br/><br/>\
# SDR 기술진화 단계 비교 <br/>\
<img src = "./img/SDR_Revolution.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 125회 관리 1교시 12번\
',

// SASE
'# 정의 : 모바일 클라우드 환경 / SD-WAN, 네트워크 가상화 기술, 보안 기술 / 차세대 네트워크 서비스 모델 <br/>\
- Secure Access Service Edge <br/>\
- 모바일 클라우드 환경에 대응하기 위하여 SD-WAN등 여러 네트워크 가상화 기술과 보안 기술을 융합한 차세대 클라우드 기반 네트워크 서비스 모델 <br/><br/>\
# 구성요소 <br/>\
1. NW 가상화 <br/>\
- SD-WAN : N/W, WAN 설정 <br/>\
- MPLS : Laeyr 2 NW <br/>\
- IP Tunneling : 암호화, 인증 <br/><br/>\
2. NW 서비스 <br/>\
- SD-Branch : Orchestration <br/>\
- WAP Optimize : WAN 변경 설정 <br/>\
- Zero Trust : Default Deny Model <br/><br/>\
3. Cloud 보안 <br/>\
- CASB : Broker 보안 <br/>\
- SECaaS : Cloud 보안 <br/>\
- VMI : 가상 IPS <br/><br/>\
4. Cloud 서비스 <br/>\
- NaaS : NW 서비스 <br/>\
- CDN : 컨텐츠 제공 <br/>\
- Cloud SWG : 인프라 보안 <br/><br/>\
# 기대효과 <br/>\
- 비용절감 : CAPEX, OPEX 절감, 단일 플랫폼 전략 사용 지출 <br/>\
- 구축용이 : 복잡성 완화, 성능 최적화, 아키텍처 단순화 클라우드 활용 \
',
  
// 유무선 전력전송
'# Overview <br/>\
<img src = "./img/LienPowerOverview.png" style = "max-width:100%; height:auto;"><br/><br/>\
** POE(Power Over Ethernet) ** <br/>\
# 정의 : 네트워크에 연결된 장비들에 별도 전원 공급 라인 없이, 이더넷 케이블 하나로 데이터와 전원을 동시에 공급하는 기술 <br/><br/>\
# 구성요소 <br/>\
- Injecter : 직류전압, 데이터 인가 <br/>\
- Picker : 입력전원/데이터 구분 처리 <br/>\
- Endspan : PoE 스위치 <br/>\
- Midspan : 전력 공급 기능 없는 장치 <br/>\
- Splitter : 케이블에서 전원/데이터 분리하여 Non-PoE 제품 지원 <br/><br/>\
# PoE Type <br/>\
1. Spare Pair Feed : Spare Cable 사용, 모든 Lan 핀 사용 <br/>\
<img src = "./img/PoESparePairFeed.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Phantom Feed : Data Cable 사용 <br/>\
<img src = "./img/PoEPhantomFeed.png" style = "max-width:100%; height:auto;"><br/><br/>\
** WPT(Wireless Power Transfer) ** <br/>\
# 정의 : 선이 없는 전기 에너지의 전송을 지칭 <br/><br/>\
# 종류 <br/>\
<img src = "./img/WPT_Compare.png" style = "max-width:100%; height:auto;"><br/><br/>\
* KPC 93회 응용 4교시 8번\
',
  
// 망분리
'# 정의 : 접근제어 / 유출차단 / 업무, 인터넷 망 차단 조치 <br/>\
- 외부 인터넷망을 통한 불법적인 접근과 내부정보 유출을 차단하기 위해 업무망과 외부 인터넷망을 분리하는 망 차단 조치(개인정보의 기술적,관리적 보호조치 기준 제4조(접근통제) 제6항) <br/><br/>\
# 관련 규정 <br/>\
1. 공공 <br/>\
- 국가정보보안 기본지침 제 33조 : 업무망 보안관리 <br/>\
- 내부, 외부망 분리 <br/><br/>\
2. 민간부문 <br/>\
- 개인정보보호법 시행령 제48조의 2 제1항 제2호 <br/>\
- 100만(개인정보), 100억(전년도 매출), 개인정보 저장 PC <br/><br/>\
3. 금융기업 <br/>\
- 전자금융감독규정 <br/>\
- 15-3 : 업무용 PC 인터넷 차단 <br/>\
- 15-4 : 시스템 운영,개발,보안용 PC 물리적 분리 <br/>\
- 시행세칙 2조 2 : 망분리 적용 예외 개정(21.01.01.) <br/><br/>\
# 유형 <br/>\
<img src = "./img/NetworkDistributionDetail.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NetDistribution.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 문제점 <br/>\
1. 구축/운영 문제 <br/>\
- 물리적 : 공간 차지, 비용 상승, 신규 망 구축, 관리 비용 증가, 전환 장치 필요 <br/>\
- 논리적 : 하드웨어 성능 필요, 가상환경 호환성 <br/>\
- 효율성 저하 <br/>\
- 업무 영역별 규제 획일적 적용 <br/><br/>\
2. 산업혁신 저해 <br/>\
- 신기술 활용 불가 <br/>\
- 핀테크 성장 저해 <br/>\
- 초연결 사회 역행 <br/>\
- 데이터 활용 비효율적 <br/><br/>\
# 해결방안 <br/>\
1. 제도 보완 <br/>\
- 비 중요 처리 시스템 클라우드 이관 가능 : 전자금융감독 1차 개정(2016) <br/>\
- 금융권 클라우드 확대 방안 : 금융위 (2018) <br/>\
- 중요 시스템 클라우드 이관 가능 : 전자금융감독 1차 개정 (2019) <br/><br/>\
2. 구축/운영 <br/>\
- 데이터 단위 망분리 체계 도입 : 중요도별 망분리 규제 적용 <br/>\
- 개발 분야 망분리 제외 : 클라우드/오픈소스 활용 증대 <br/><br/>\
3. 산업혁신 <br/>\
- 망분리 예외 적용 : 카카오 뱅크, 금융기술 연구소 망분리 예외 인정 <br/><br/>\
# 주요현황 <br/>\
- 전자금융감독규정 제 15조 1항 예외적용 완화 (2020.10 시행) <br/>\
<img src = "./img/NetDistributionCurrent.png" style = "max-width:100%; height:auto;"><br/><br/>\
* ITPE 7회 관리 2교시 2번 <br/>\
* 라이지움 88회 관리 1교시 4번\
',
  
// 망연계
'# 개념 : 업무망 컴퓨터와 인터넷 컴퓨터간 안전한 데이터 전달 기술 <br/><br/>\
# 기술요소 <br/>\
<img src = "./img/NetConnection.png" style = "max-width:100%; height:auto;">\
',
  
// 망중립성
'# 정의 : 네트워크 사업자, 정부, 동등 취급 <br/>\
- 모든 네트워크 사업자와 정부는 인터넷을 통해 발생하는 데이터 트래픽을 동등하게 취급하고, 대상, 내용, 유형, 사용자, 플랫폼, 전송방식에 따른 어떠한 차별도 없이 동등하게 처리해야 하는 원칙 <br/><br/>\
# 찬성 반대 <br/>\
- 찬성(CP) : 중립 / ISP 차별 우려 / 요금 상승 / 품질 저하 <br/>\
- 반대(ISP) : 효율적 망운영 / 5G 잠재력 향상 <br/><br/>\
# 정책이슈 <br/>\
1. 인터넷 개념 <br/>\
- 규제대상 검토 : 지능 정보 출현 <br/>\
- 서비스의 확장 : 5G 네트워크 슬라이싱 활용 <br/>\
- 지능정보 서비스 : 자율주행차, 헬스케어 등 <br/><br/>\
2. 관리형 서비스 <br/>\
- 최선형 인터넷 : 개념의 정교화, 최선형(Best Effort) 망 보호 이슈 예상 <br/>\
- 망간 영향도 증가 : 프리미엄 인터넷의한 차별성 <br/><br/>\
3. 불공정 행위 <br/>\
- 신규 사업모델 등장 : 생태계 내 제휴 <br/>\
- 경쟁체제 내 불공정성 : 경쟁 이슈 발생가능 유사 서비스 범위 검토 필요 <br/><br/>\
# 시사점 <br/>\
1. 규제 측면 <br/>\
- 불공정 행위 요소 제재 : 시장 지속적 모니터링 <br/>\
- 규제의 중립성 : 찬반 고려, 산업 성장 가능성 규정 수립 <br/>\
- 관리형 서비스 통제 : 차별 금지, 서비스 제공 조건 5G 환경 적합성 <br/><br/>\
2. 서비스 측면 <br/>\
- 차별성 없는 서비스 제공 : 다양한 토신 사용 주체, 네트워크 접근 보장 <br/>\
- 지속발전 가능성 고려 : 통신 서비스 지속적 혁신 <br/>\
- 예외 사항 : Mission Critical Service(재난망, 자율주행, 원격의료) <br/><br/>\
# 대응방안 <br/>\
1. 요금 측면 <br/>\
- 이용자 요금제 개편 : 정액제 -> 종량제 전환 <br/>\
- 플랫폼 사업자 망 이용 운영체계 개선 : 스타트업비용 개선 <br/><br/>\
2. 컴플라이언스 측면 <br/>\
- 모니터링 체계 구축 : 투명성 확보, 행위 지속적 감시 및 감독 <br/>\
- 합리적인 규제 적용 : 투명한 트래픽 관리 기준 적용, 합리성 확보 <br/><br/>\
# 망중립성 및 인터넷 트래픽 관리에 관한 가이드라인 개정안 (20.12.28) <br/>\
- 예외조건 명확화 : 특수 서비스 개념 도입 -> 시장의 불확실성 해소 기대 <br/>\
- 특수 서비스 제공 조건 구체화 : ISP 서비스 적정 수준 유지, 특수 서비스 망중립성 원칙 회피 금지 <br/>\
- 투명성 강화 : 통신사(정보 공개대상 확대), 정부(인터넷 접속 서비스 품질 점검) 근거 마련 <br/><br/>\
* 123회 관리 4교시 1번\
',

// ISO 19626
'# 정의 : 분산 환경 / 신뢰 통신 <br/>\
- 한국주도 국제 표준 <br/>\
- 물리적 세계와 사이버 세계가 연결되어 분산된 비즈니스 환경에서 신뢰성 있는 데이터 Set(정보, 문선)의 흐름을 책임지는 전자적 통신 <br/><br/>\
# 특징 <br/>\
- 완전성 : 전 구간, 단대단(E2E) <br/>\
- 안전성 : IoT, 클라우드, 블록체인, AI 내외부 정보전달 <br/>\
- 가시성 : 통신 구간별 무결성 증거, 데이터 신뢰성 확보 <br/><br/>\
# Architecture <br/>\
<img src = "./img/ISO19626Architecture.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성 <br/>\
- 19626-1 : Fundamentals <br/>\
- 19626-2 : Application and its Services <br/>\
- 19626-3 : Interoperability <br/>\
- 19626-n : Fast Track ETSI Project <br/><br/>\
* 117회 응용 2교시 4번\
',
);
