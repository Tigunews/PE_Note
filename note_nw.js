var question = question.concat(
'OSI 7 계층',
'서비스 프리미티브(Service Primitive)',
'[Layer2]- Service',
'[Layer2]- 오류제어',
'[Layer2][오류제어][FEC]- 해밍코드',
'[Layer2][오류제어][BEC]- CRC',
'[Layer2][오류제어][BEC]- Parity Check',
'[Layer2][오류제어][BEC]- Check Sum',
'[Layer2][흐름제어]- Sliding Window',
'[Layer2][흐름제어]- Stop and Wait',
'[Layer2][접근제어]- CSMA/CD',
'[Layer2][접근제어]- CSMA/CA',
'[Layer2]- Collison Domain',
'[Layer3]- 공증교환 데이터망(PSDN) 방식',
'[Layer3]- 회선교환',
'[Layer3]- 패킷교환',
'[Layer3]- 패킷데이터 네트워크 계층 오류',
'[Layer4]- TCP',
'[Layer4][TCP]- DTLS',
'[Layer4][TCP]- TLS',
'DNS',
'IP Tunneling',
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
'Subnet',
'Subnetting',
'Supernetting',
'전송부호화',
'[전송부호화]- 소스코딩',
'[소스코딩]- 압축기술',
'[소스코딩][압축기술]- Huffman Coding',
'[소스코딩][압축기술]- MPEG',
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
'[측위기술]- LBS',
'[측위기술]- IPS',
'[측위기술]- LDT',
'[측위기술]- GPS',
'[측위기술]- SBAS',
'[측위기술]- RTLS',
'라이파이(Li-Fi)',
'SON',
'BcN',
'CDN',
'CDN, ADN',
'IEEE 802.15.x',
'USB4.0',
'5G 이동통신',
'[5G]- 3GPP Release 16',
'[5G]- MEC',
'[MEC]- SSL Offloading',
'[5G]- 5GX',
'[5G]- Open Lan',
'6G',
'[6G]- Wifi 7',
'Wifi 6',
'Wifi 6e',
'재난안전통신망(Disaster Security Communication Network, 재난망)',
'토르 네트워크(Tor Network)',
'비지상네트워크(NTN, Non-Terrestrial Network)',
'eMTC',
'Network Storage',
'자가망 구축 가이드라인',
'QoS',
'[QoS]- 통합 서비스',
'[QoS]- 차등 서비스',
'[QoS][차등][Queuing]- Priority Queue',
'[QoS][차등][Queuing]- Custom Queue',
'FTP',
'[FTP]- FTPS',
'[FTP]- SFTP',
'Socket',
'공공무선 통신망',
'NOS',
'대역확산',
'NW 가상화',
'[NW 가상화]- VPN',
'[NW 가상화]- NFV',
'[NW 가상화]- SDN',
'[NW 가상화]- Open flow',
'유무선 전력전송',
'망분리',
'망연계',
'망중립성',
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
1. 물리 (네트워크 액세스)<br/>\
- 세부내용 : 기계적, 전기적, 기능적, 절차적 <br/>\
- 역할 : 물리적 장비, 전송 신호 방식 정의 <br/>\
- Ethernet, IEEE802, RS-232C <br/>\
- PDU : Bit <br/><br/>\
2. 데이터링크 (네트워크 액세스)<br/>\
- 세부내용 : 신뢰성 <br/>\
- 역할 : 논리적 연결 링크 확립/해제, 오류/순서/흐름 제어 <br/>\
- 프로토콜 : ARP, RARP, X.25<br/>\
- PDU : Frame <br/><br/>\
3. 네트워크 (인터넷)<br/>\
- 세부내용 : 연결관리, 교환 <br/>\
- 역할 : 라우팅, 트래픽 제어, 연결 설정/유지 <br/>\
- 프로토콜 : IP, ICMP, IGMP <br/>\
- PDU : Packet <br/><br/>\
4. 전송 (전송)<br/>\
- 세부내용 : 종단간 투명 통신 <br/>\
- 역할 : 에러 복구/흐름 제어, 공유 회선 다중화/집중화, 주소지정 <br/>\
- 프로토콜 : TCP, UDP <br/>\
- PDU : Segment <br/><br/>\
5. 세션 (응용)<br/>\
- 세부내용 : 대화 구성, 제어 <br/>\
- 역할 : 연결 설정 및 해제, 흐름/오류제어, 다중화, 전송 방향 설정 <br/>\
- 프로토콜 : RTP, NetBIOS, RARP, X.26 <br/>\
- PDU : Message <br/><br/>\
6. 표현 (응용)<br/>\
- 세부내용 : 응용, 세션 계층간 통신을 위한 표현/변환 <br/>\
- 내용 : 코드 변환/번역, 데이터 형식 지정, 구문검색, 데이터 암호화/압축, 문맥 관리 <br/>\
- 프로토콜 : SSL, XDR <br/>\
- PDU : Message <br/><br/>\
7. 응용 (응용)<br/>\
- 세부내용 : 응용프로그램, 사용자간 인터페이스 <br/>\
- 역할 : 파일정송, 가상 터미널 등 <br/>\
- 프로토콜 : FTP, SMTP, SNMP, Telnet, DNS, HTTP <br/>\
- PDU : Message <br/><br/>\
* 라이지움 86회 3교시 6번 <br/><br/>\
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
'# 오류제어 : 통신 에러 보정기술 <br/>\
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
* 라이지움 87회 관리 3교시 6번\
',

// [패킷데이터 네트워크 계층 오류]- 오류제어
'# 정의 : 신뢰성 확보 위한 통신 에러 제어 기법 <br/>\
- 데이터링크(hop to hop, 라우터), 전송계층(peer to peer) 에러제어 <br/>\
- 디지털 데이터 송수신 데이터가 외부간섭, 노이즈, 시간지연 등에 의해 변형, 손실, 순서 어긋남 등의 통신 장애에부터 통신 오류의 검출, 복구, 정정등 데이터 통신에서 신뢰성을 확보하기 위한 통신 에러 제어 기법 <br/><br/>\
# 발생원인 <br/>\
- 감쇠(Attenuation) : 거리증가 인한 신호 약해지는 현상 <br/>\
- 지연왜곡(Delay Distortion) : 한 전송매체에 여러 신호 전달시 주파수 따라 속도 달라짐, 유선 다발<br/>\
- 상호 변조 잡음(Intermodulation Noise) : 서로 다른 주파수 한 전송매체 공유시 주파수 간 합이나 차로 인해 새로운 주파수 생성되는 현상 <br/>\
- 충격잡음(Impluse Noise) : 번개와 같은 외부 충격이나 기계적 통신 시스템에서의 결함등 발생되는 잡음 <br/><br/>\
# 방식 <br/>\
1. FEC (순방향 오류 정정,검출) <br/>\
- Parity Check <br/>\
- Check sum <br/>\
- Block sum Check <br/>\
- 해밍거리 : 비교되는 두 패킷의 2진 비트수에서 일치 않는 개수 <br/>\
- CRC <br/><br/>\
2. BEC (후방향 오류 정정) : ARQ(자동 재전송 요구) <br/>\
- Stop and Wait : 하나의 프레임 단위 송/수신 후 오류 검사 (Ack, Nak) <br/>\
- Go-Back-N : 프레임 순서 동일 / Sliding Window / 오류 패킷 이후 재전송  요구  <br/>\
- Selective Repeat : 프레임 순서 상관 없음 / Sliding Window / 오류발생 프레임만 재전송 요구 <br/><br/>\
* Sliding window : 두 개의 네트워크 호스트간의 패킷의 흐름을 제어하기 위한 방법. 윈도우에 포함하는 모두 패킷을 전송하고 패킷 전달이 확인(Ack)되면 윈도를 슬라이딩하여 다음 패킷을 연속적으로 전송 <br/>\
* Window 는 Buffer 크기 <br/><br/>\
* 그리타\
',
  
//[패킷데이터 네트워크 계층 오류]- 해밍코드
'# 정의 : 패리티비트(Parity Bit)에 의한 오류검출 및 오류정정까지 가능한 코드 <br/><br/>\
# 2^p >= d + p + 1 (d:데이터 비트수, p:패리티 비트수) <br/><br/>\
# Byte Order <br/>\
- Little Endian : Host Byte Order <br/>\
- Big Endian : Network Byte Order <br/><br/>\
<img src = "./img/BigLittleCompare.png" style = "max-width:100%; height:auto;"><br/><br/>\
# LSB, MSB <br/>\
- LSB : Least Significiant Bit <br/>\
- MSB : Most Significiant Bit <br/><br/>\
# 특징 : 해밍거리(Hamming Distance) = 송신 데이터와 수신 데이터의 각 대응 비트가 서로 다른 비트 수 <br/><br/>\
* 오류비트 2비트까지 검출가능, 1만 수정가능\
',

// [패킷 데이터 네트워크 계층 오류]- CRC
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

// [패킷데이터 네트워크 계층 오류]- Parity Check
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

// [패킷데이터 네트워크 계층 오류]- Check Sum
'# 정의 : 수신측 합산 검사 방법 / 전송측 합계 보수화 전송<br/>\
- 전송 데이터의 맨 마지막에 모든 데이터를 다 합한 합계를 보수화하여 전송, 수신 측에서는 모든 수를 합산하여 보수화 한 후 모두 0일 때 수용하는 검사 방법 <br/>\
- 송신 측에서 전송할 데이터를 16비트 워드 단위 구분, 1의 보수를 취하고 그 합에 대한 결과를 전송 <br/>\
- 수신 측에서 같은 합을 해보아 오류를 검출하는 방식, 간단하나 워드 순서 바뀌는 오류 검출X, 점차 CRC로 대체중 <br/><br/>\
<img src = "./img/CheckSum_1.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/CheckSum_2.png" style = "max-width:100%; height:auto;">\
',

// Sliding Window
'# 정의 : 일정한 윈도우 크기 이내에서 한번에 여러 패킷을 송신하고, 이들 패킷에 대하여 단지 한 번의 ACK 로써 수신 확인을 하며, 윈도우 크기를 변경시키며 흐름제어를 하는 기법 <br/><br/>\
# 특징 <br/>\
- 전송크기 : Window 크기 <br/>\
- 장점 : 전송 효율 좋음 <br/>\
- 단점 : 오류발생이 가능하므로 Go-Back-N, Selective 재전송등 해결방안 필요 <br/><br/>\
* 라이지움 87회 관리 3교시 6번\
',
 
// Stop and Wait
'# 정의 : 송신측에서 한번에 1개의 Frame을 송신후 수신측에서 Frame 검사후 ACK 혹은 NAK 전송하여 송신측은 수신측의 회신 올떄까지 기다리고 ACK 오면 다음 Frame 전송, NAK면 재전송 기법 <br/><br/>\
# 특징 <br/>\
- 전송크기 : 1 Frame <br/>\
- 장점 : 구현용이, 한 개의 버퍼만 필요 <br/>\
- 단점 : 전송 효율이 떨어짐 <br/><br/>\
* 라이지움 87회 관리 3교시 6번\
',
 
// CSMA/CD
'# 정의 : 이더넷(유선)환경에서 Signal 전압의 강도를 통해 채널이 사용중인지 확인하고 트래픽이 없으면 패킷을 송출하는 LAN의 매체 점유 기법 <br/><br/>\
# 특징 <br/>\
- 동작원리 <br/>\
<img src = "./img/CSMACD_Flow.png" style = "max-width:100%; height:auto;"><br/><br/>\
- 표준 : IEEE 802.3 <br/>\
- 구조 : 버스형, 트리형 <br/>\
- 주요 원리 : 충돌 회피 전략 <br/>\
- 특징 : 충돌시 일정시간 대기, 이더넷 기반 널리사용 <br/>\
- 장점 : 간단, 견고, 대역폭 효율 <br/>\
- 단점 : 부하시 지연시간 급증, 빈도 따른 충돌 발생 <br/><br/>\
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
* 라이지움 88회 관리 4교시 6번\
',

// [TCP-Protocol]- DTLS
'# 정의 : 데이터그램 전송 프로토콜 <br/>\
- Datagram Transport Layer Security <br/>\
- 데이터그램 형식의 콘텐츠를 애플리케이션끼리 주고받을 때 안전하게 전송할 수 있도록 고안된 통신 프로토콜 <br/><br/>\
# 특징 <br/>\
- 무결성, 인증, 정보은닉 제공 <br/>\
- 양쪽 종단간 네트워크에서 전송중인 데이터 악성행위 방지 <br/>\
- SSL(Secure Socket Layer), TLS(Transport Layer Security) 기술 토대로 만들어짐 <br/>\
- TLS와 유사한 보안 강도 제공 <br/>\
- 일반적으로 UDP를 사용하기 떄문에 패킷 재조합에 대한 로직 구현 난이도 존재 <br/><br/>\
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

// [TCP-Protocol]- TLS
'# 정의 <br/>\
- Transport Layer Security <br/>\
- 컴퓨터 네트워크에 통신 보안을 제공하기 위해 설계된 암호 규약 <br/>\
- SSL(Security Socket Layer)가 표준화 되면서 바뀐 이름 <br/><br/>\
# 특징 <br/>\
- 전송계층 종단간 보안과 데이터 무결성 확보 <br/>\
- 웹브라우징, 전자메일, 인스턴트 메신저, VoIP 적용 <br/>\
- 패킷 암호화로 인한 정보 탈취부분 강점 <br/>\
- 기밀성 우선이므로 스니핑 공격 강점 <br/>\
- 송신자간 데이터 교환 Event 약점 <br/>\
- 개인정보유출, 기밀정보유출, DDoS, APT, 악성공격 무력화 <br/><br/>\
# 구성요소 <br/>\
0. Stack <br/>\
- 하위 레코드 계층 : 단편화, 압축, 무결성 보호, 암호화 <br/>\
- 상위 계층 : Handshake 관련 프로토콜 <br/><br/>\
1. Protocol <br/>\
- Handshake : 서버, 클라이언트 상호 인증 <br/>\
- Change Chiper Spec : 현재 동작중인 보안 매개변수 변경 <br/>\
- Alert : Handshake 과정중 상대방 암호 방식 지원 불가 알람 <br/>\
- Record : 메시지 수납하여 TLS record 단위로 운반 <br/><br/>\
# 절차 <br/>\
- 지원 가능한 알고리즘 서로 교환 <br/>\
- 키 교환, 인증 <br/>\
- 대칭키 암호로 암호화하고 메시지 인증 <br/><br/>\
# 개발 역사 <br/>\
- SSL 2.0(1995.2) : 넷스케이프 SSL 규악 만듦<br/>\
- SSL 3.0(1996) : 2.0 버전 보안결함 <br/>\
- TLS 1.0(1999) : SSL 3.0 기반 표준화 \
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
# 동작과정 <br/>\
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
# 암기 <br/>\
- 특징 : 주이보Q플I에 <br/>\
- 전환 : 듀라,터네,트개 <br/><br/>\
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
# 구조 : version, Traffic Class, Flow Label, Payload, Length, Next Header, Hot Limit, Source Address, Destination, Address <br/><br/>\
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
<img src = "./img/IP_Header.png" style = "max-width:100%; height:auto;"><br/>\
<font color = "red">기본헤더(40Byte) > 확장 헤더 > 상위 계층 라우터</font><br/><br/>\
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
'# 구현망 측면 IPv6 전환기술 (듀터트)<br/>\
1. Dual Stack (라우팅 관점) : 양립 / 호환성 / 고갈 <br/>\
<img src = "./img/DualStack.png" style = "max-width:100%; height:auto;"><br/><br/>\
2. Tunneling (NW 관점) : 통과 / 익명 / 복잡 <br/>\
<img src = "./img/Tunneling.png" style = "max-width:100%; height:auto;"><br/><br/>\
3. Translation (G/W 관점) : 연동 / 듀얼스택x / 특성반영한계 <br/>\
<img src = "./img/Translation.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주소변환 측면 IPv6 전환 기술 (헤전응)<br/>\
1. 헤더변환 방식 : 변환 / 속도 / 별도 G/W <br/>\
2. 전송계층 릴레이 방식 : 세션 중간 / Fragment, ICMP 변환 용이 / 내장 IP 변환 <br/>\
3. 응용계층 Gateway 방식 : ALG 은닉, 성능 향상 / 헤더변환 단점 해소 / ALG 모드 별도 실행 <br/>\
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
- 혼합 : 손실/무손실 모두 사용 / 정보손실o, 압축률 높음 \
',
  
// Huffman Coding
'# 정의 : 빈도수 기반 무손실 압축기술<br/>\
- 데이터를 구성하는 단위 정보들의 빈도수를 기반으로 하여 각 단위 정보를 표현한 무손실 압축기술 <br/><br/>\
# 절차 <br/>\
1. 압축 <br/>\
- 초기화 : 출현 빈도수 따라 나열 <br/>\
- 해 선택 : 빈도수 낮은 두개의 노드 선택, 결합, 두 노드 위 부모 노드 새로 생성 <br/>\
- 실행 가능성 검사 : 리프 노드 조건 만족 검사 <br/>\
- 최종해 검사 : Huffman 트리 완성 여부, 반복 수행 <br/><br/>\
2. 해제 <br/>\
- 버퍼 준비 : 임시 저장용 버퍼 준비 <br/>\
- 비트 해석 : 아직 읽지 않은 부분 남아 있을 경우 비트 Read <br/>\
- 비트 순회 : 읽은 비트가 Leaf 노드가 될 떄까지 이진 탐색트리 순회 <br/><br/>\
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
# 암기 : 물아인네멀 <br/><br/>\
<img src = "./img/WAVE_2.png" style = "width:100%; height:auto;"><br/><br/>\
# 통신 스택 <br/>\
- WSMP(Wave Short Message Protocol) : 안전한 통신 메시지 전달하는 전송 계층 <br/>\
- TCP/UDP : 안전보다는 시급성이 필요한 메시지 전달하는 전송 계층 <br/>\
- LLC(Logical Link Cotrol) : TCP/UDP, WSMP를 스위칭 위한 논리적 링크 제어하는 데이터 링크 계층 <br/>\
- WAVE MAC : 다수의 통신 채널의 코디네이션을 담당하는 물리 계층 <br/>\
- WAVE PHY : 무선 데이터 프레임 송수신을 담당하는 물리 계층 <br/><br/>\
# 통신 스펙 <br/>\
1) 주파수 : 5.85 Ghz ~ 5.925 Ghz <br/>\
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
'<img src = "./img/LowPowerWireless.png" style = "max-width:100%; height:auto;">\
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
# 기술요소 <br/>\
<img src = "./img/IPS_Tech.png" style = "max-width:100%; height:auto;"><br/>\
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

// 5G 이동통신
'# 정의 : 대한민국 퍼스트 무버 <br/>\
- 차세대 초고속 저지연 이동통신 / 2017년 12월 3GPP 릴리즈 15 / 엄격 기준 ITU IMT-2020<br/><br/>\
<img src = "./img/5G_2.jpg" style = "width:100%; height:auto;"><br/><br/>\
# 주파수 분류 <br/>\
<img src = "./img/5GFR1FR2.png" style = "width:100%; height:auto;"><br/><br/>\
* FR2 커버리지 극복방안 <br/>\
- 셀의 개수 증가 <br/>\
- 빔포밍 기술 적용 (건물, 빌딩, 구조물 많을 경우 커버리지 안정성 저하)\
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
- 차세대 네트워크인 5G가 산업,경제,일상 모든 영역에서 무한한 가능성을 열고, 생활 혁신을 이끈다는 의미 (SKT) <br/><br/>\
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
  
// 6G
'# 정의 : 초성능, 초대역, 초공간, 초정밀, 초신뢰, 초지능, THz <br/>\
- 6세대 무선 네트워크 <br/><br/>\
# KPI / 전략과제 (성대공정지현)<br/>\
- 초성능 : 1Tbps / Tbps 급 무선 통신 기술<br/>\
- 초대역 : 1THz(지원대역), ~30GHz(대역폭) / 6G 주파수 확보기술 개발<br/>\
- 초공간 : ~10Km(지원고도), 1,000km/h(이동속도) / 3차원 공간 이동체 브로드밴드 <br/>\
- 초정밀 : 0.1 us(무선), ~5ms(유선) / 초저지연, 고정밀, 고가용 <br/>\
- 초지능 : AI 기반 지능형 네트워크 / 지능형 무선 액세스 네트워크<br/>\
- 초현실 : 3차원 미디어, Tangible 미디어 / 시공간 초월 미디어 <br/><br/>\
# 주요기술 <br/>\
- 주파수 기술 : THz, OFDM(New Waveform), 스펙트럼 공유(AI 동적공유) <br/>\
- NW 토폴로지 기술 : 지상/비지상 NW, IAB(Integration of Access and Backhaul) <br/>\
- 고신뢰성 기술 : HW 수준 보안/고신뢰 AI(Secure-by-Design, OSS 보안 강화, 적대적 머신러닝 대응 AI) <br/>\
- Duplex 통신 기술 : 상호 배타적 통신(안테나) <br/>\
- 최적화 기술 : Comprehensive AI <br/>\
- 만물지능 인터넷 : SPlit Compute(전체 네트워크 가용연산자원 활용) <br/><br/>\
# 5G 비교 <br/>\
<img src = "./img/5G6G.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 이동통신 기술의 한세대를 통상 10년으로 칭함 \
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
# Wifi 6비교 <br/>\
<img src = "./img/Wifi67.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
# 기술요소 <br/>\
1. PHY <br/>\
- OFDMA : 부반송파를 분할하여 다수의 단말이 동시에 사용 <br/>\
- MU-MIMO : 제각기 하나 이상의 안테나를 갖춘 무선 단말들이 서로 통신 <br/>\
- Beam Forming : 안테나가 특정 단말에 국한되게 하는 전송 기술 <br/><br/>\
2. MAC <br/>\
- BSS Color : Color 코드를 사용해 공간을 재사용, AP 충돌 방지 <br/>\
- CCA 레벨 제어 : 각 단말기에 전송되는 파워를 조절 <br/>\
- Target Wake Time : Access Time 조절 및 단말간의 무선 경쟁 회피 <br/><br/>\
# 6GHz 대역 장점 <br/>\
- 가용 채널 수 증가 <br/>\
- 160MHz 대역폭을 실질 활용 <br/>\
- 다른 무선기기에 의한 간섭영향 감소 <br/>\
- Gbps급 체감속도를 실현, 5G 이동통신에 가까운 지연 특성 지원 <br/>\
- OFDMA를 활용한 초연결 특성 확보 <br/><br/>\
* 123회 응용 1교시 7번 <br/>\
',

// 재난안전통신망
'# 정의 : 공공안전 재난 구조 (PPDR : Public Protection and Disaster Relief) 서비스를 제공하기 위해 사용되는 융합 통신망 기술 <br/>\
- 소방 또는 의료 등의 공공안전 업무를 위한 통신 서비스를 제공하는 네트워크이며, 관련 기관의 종사자가 재난 관련 기관의 종사자가 재난 발생시 뿐만 아니라 일상적인 기관의 고유 업무를 수행하기 위하여 활용하는 특수 통신망 <br/>\
- (TTA)화재, 홍수, 지진, 해일등 대형 재난 발생시 국가 차원의 신속하고 효율적인 재난 관리를 위해 재난 관련 기관에 적합한 무선 통신망을 구축하는 사업 <br/><br/>\
# 요구조건 : 생존 신뢰성, 재난 대응성, 보안성, 상호운용성 및 운영 효율성 <br/><br/>\
# 발전 방향 <br/>\
- 단기(2017) : PS-LTE 기반 재난안전통신망 구축을 완료 <br/>\
- 중기(2020) : 안정화 및 고도화 <br/>\
- 장기(2024) : 차세대 재난 안전통신망 방안 (5G등) 수립 <br/><br/>\
# 재난 안전 통신망 구축 사업<br/>\
1. 범위 <br/>\
- PS-LTE 기술방식의 전국 단일 자가망 구축<br/>\
- 철도망(LTE-R)<br/>\
- 해상망(LTE-M) 등 타 무선통신망과의 연계 <br/><br/>\
2. 정책추진과제 <br/>\
- 국제표준<br/>\
- 품질강화(사전품질인증제도, 보안인증제도 도입)<br/>\
- 재난IT산업 활성화(세계최초)<br/>\ 현행 무선망 SOP 보완(통합지휘용/자체업무용 분할) <br/><br/>\
3. AS-IS <br/>\
- TETRA(유럽) <br/>\
- APCO-P25(미국) 통해 구축 <br/>\
- 기타 UHF, VHF, TETRA, idEN, WiBro 등 다양한 규격의 무선통신 사용 <br/><br/>\
4. To-Be <br/>\
- 미래부 : 차세대 기술방식 선정, 주파수 공급지원 <br/>\
- 안행부 : 구축사업 추진, PS-LTE 통신 방식, 전용 주파수 대역 활용 <br/><br/>\
5. 기대효과 <br/>\
- 재난 대응 시간 단축 <br/>\
- 중복 투자 예방 <br/>\
- 국내 LTE 설비 투자 증가로 고용 창출 <br/><br/>\
6. 고려사항 <br/>\
- 동일채널 간섭(CCI : Co-Channel Interference) <br/>\
- 인접채널 간섭(ACI : Adjacent Channel Interference) <br/>\
- 부처간 협업 및 예산 확보, 전략적 접근 <br/><br/>\
* LTE-R, LTE-M : CCI => 기지국 하나 <br/><br/>\
* UHD방송 : ACI => 필터 적용 <br/><br/>\
* [2017.06] 공안전통신망포럼과 통신사, 철도 전문가가 수도권 일대에서 실시한 700MHz 전파 간섭 테스트에서 전파 간섭이 확인 <br/><br/>\
- UHD 방송과 보호대역이 2MHz 폭에 불과한 다운링크(773~783MHz)의 경우, 재난망 통신 어려웠고, 철도망도 영향을 받음, 콜드롭 우려 <br/>\
- 정부기술 기준필터 사용 불문 심각 <br/><br/>\
* 대응현황 및 시사점 <br/>\
- 미래창조 과학부 : 지상파 UHD기술 기준, 무선설비 기술기준 일부개정안 발표 but X <br/>\
- 단말 전문가 : 고성능 필터 의한 최적화 한계 존재, 전파 출력조절, 보호 대역 확대 외 대안 없다 판단 <br/>\
- 전파법 : 후순위 제공 서비스 주체가 전파 간섭 책임져야함. 지역마다 순서 달라 책임 주체 논의 필요\
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
'# 정의 : Quality of Service <br/>\
- 다른 응용 프로그램, 사용자, 데이터 흐름 등에 우선순위를 정하여, 데이터 전송에 특정 수준의 성능을 보장하기 위한 능력 \
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
* KPC 94회 1교시 3번\
',
 
// 차등 서비스
'# 정의 : DSCP 마킹 통한 서비스 차별화 모델 <br/>\
- 패킷의 DS(Differentiated Service) 필드에 DSCP(DS Code Point)를 마킹하여 서비스 클래스별 PHB(Per Hop Behavior) 우선순위를 정하여 QoS를 보장하는 서비스 모델 <br/><br/>\
# 구조 <br/>\
<img src = "./img/차등서비스.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 통합, 차등 서비스 비교 <br/>\
<img src = "./img/통합차등비교.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
 
// 공공무선 통신망
'# 정의: 국김 편의 및 안전 확보 위안 LTE 기반 공공 무선통신망 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/PublicWirelessCommunication.png" style = "max-width:100%; height:auto;"><br/><br/>\
# PS-LTE <br/>\
<img src = "./img/PS-LTE_OverView.png" style = "max-width:100%; height:auto;"><br/><br/>\
# LTE-R <br/>\
<img src = "./img/LTE-R_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
# LTE-M <br/>\
<img src = "./img/LTE-M_Overview.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 1교시 3번\
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
 
// 대역확산
'# 정의 : 샤논 정리의 핵심 <br/>\
- 무선 채널에서 여러 신호가 경쟁하면서 공유할 때 외부의 전파 잡음에 강하도록 넓은 주파수 대역으로 분산시키는 일종의 변조 방식 <br/><br/>\
# 유형 <br/>\
- 직접확산 (Direct Sequence) : PN Code / CDMA (802.11b) <br/>\
- 주파수도약 (Freqency Hopping) : +주파수합성기 / Bluetooth (802.15.1) <br/>\
- 시간도약 (Time Hopping) : 랜덤한 Time Slot / 혼합 사용 <br/>\
<img src = "./img/DSSS.png" style = "max-width:100%; height:auto;"><br/><br/>\
<img src = "./img/FHSS.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 120회 응용 1교시 8번\
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
'# 정의 : 하나의 물리적인 네트워크 기능을 여러 사용자 및 장치가 사용 가능하도록 네트워크 기능을 가상화하는 기술 <br/><br/>\
# 개념도 <br/>\
<img src = "./img/NFV_Structure.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 구성요소 <br/>\
1. 서비스체인 <br/>\
- 가상화 인프라 Manager : 하드웨어 장비 및 가상화 레이어 제어 및 관리 <br/>\
- VNF Manager : 가상화된 네트워크 제어 및 관리 <br/>\
- Orchestrator : 리소스 제어 <br/><br/>\
2. 하드웨어 장비 <br/>\
- Device : 컴퓨팅, 네트워크, 스토리지 장비 등 하드웨어 리소스 <br/>\
- 가상화 레이어 : 논리적 통합 <br/>\
- VNF : 라우팅, 방화벽 등 네트워크 기능 제공 <br/><br/>\
# SDN NFV 비교 <br/>\
<img src = "./img/SDN_NFV.png" style = "max-width:100%; height:auto;"><br/><br/>\
* 아이리포 23회 관리 1교시 10번\
',
  
// SDN
'# 정의 : 제어부 / 데이터부 <br/>\
- 네트워크 장비의 제어부와 데이터부를 분리하여 소프트웨어적으로 제어하는 네트워크 <br/><br/>\
# 구성요소 <br/>\
- Application : SDN 운영, 활용, 구동 레이어(4~7Layer) / NMS, Python <br/>\
- Control plane : 공통부, 어플리케이션 구성되어 네트워크 제어 / SDN Controller, Southbound API <br/>\
- Data Plane : Controller와 Application을 구동하기 위한 네트워크 장비 / SDN Switch, VXLAN <br/><br/>\
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
- 외부 인터넷망을 통한 불법적인 접근과 내부정보 유출을 차단하기 위해 업무망과 외부 인터넷망을 분리하는 망 차단 조치(개인정보의 기술적,관리적 보호조치 기준 제2조) <br/><br/>\
# 도입배경 <br/>\
- 2008년 옥션 해킹 1,800 만명 유출 <br/>\
- 2011년 Nate, Cyworld 해킹 3,500만명 유출 <br/><br/>\
# 관련 규정 <br/>\
1. 금융 감독원 <br/>\
- 법률 조항 : 전자 감독규정 제15조 (해킹 등 방지 대책) <br/>\
- 대상 : 금융기관 내부 시스템 접속 모든 단말기 <br/><br/>\
2. 개인정보 <br/>\
- 법률 조항 : 개인정보보호법 시행령 48조의2 (개인정보의 안전성 확보 조치에 관한 특례) <br/>\
- 대상 : 전년도 말 기준 직전 3개월간 이용자수 100만명 이상 / 매출액 100억원 이상 정보통신 서비스 제공자 <br/><br/>\
# 유형 <br/>\
<img src = "./img/NetworkDistributionDetail.png" style = "max-width:100%; height:auto;"><br/>\
<img src = "./img/NetDistribution.png" style = "max-width:100%; height:auto;"><br/><br/>\
# 주요현황 <br/>\
- 전자금융감독규정 제 15조 1항 예외적용 완화 (2020.10 시행) <br/>\
<img src = "./img/NetDistributionCurrent.png" style = "max-width:100%; height:auto;"><br/><br/>\
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
);
