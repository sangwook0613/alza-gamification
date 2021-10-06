import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import queue_thumnail from '../../../assets/study/queue_thumnail.png'
import queue1 from '../../../assets/study/queue1.PNG'
import queue3 from '../../../assets/study/queue3.jpg'

import graphgameimage from '../../../assets/game/graph.png'
import midgameimage from '../../../assets/game/mid.png'
import queuegameimage from '../../../assets/game/queue.png'
import sortgameimage from '../../../assets/game/sort.png'
import stackgameimage from '../../../assets/game/stack.png'
import treegameimage from '../../../assets/game/tree.png'

import '../../../styles/studyCard.css';

const ds = [
  {id: 1, title: '스택: 별과자 완전 범죄', sort: 'Stack', img: stackgameimage, content: '형의 별과자가 너무 탐났던 사피. 음성인식 로봇 알짜의 도움을 받아 몰래 훔쳐먹자! 훔쳐먹고 나서 후환이 두려워진 사피. 알짜의 도움을 받아 과자를 원상복구 하자!'},
  {id: 2, title: '큐: 산타를 도와라', sort: 'Queue', img: queuegameimage, content: '크리스마스를 앞두고 한창 준비 중인 산타마을. 컨베이어 벨트가 끊어져 선물들이 다 섞여버렸다! 산타를 도와 문제를 해결하고 큐 개념을 같이 학습해봐요!!' },
  {id: 3, title: '그래프: 보물 찾기 대모험', sort: 'Graph', img: graphgameimage, content: '다리를 연결하고 보물을 찾아가는 Graph Game! 보물을 찾아가며 그래프의 주요 특징들을 차근차근 배워가요~~' },
  {id: 4, title: '트리: 공통 조상 찾기', sort: 'Tree', img: treegameimage, content: '그들 사이에 있는 복잡한 관계는? 우리 함께 공통 조상을 찾아봐요! 제한시간이 많지 않으니 서둘러야 할거에요~ 그럼 이제 시작해볼까요?' },
]

const algo = [
  {id: 1, title: '정렬: 동물의 왕국', sort: 'Sort', img: sortgameimage, content: '동물들이 길을 잃고 섞여버렸다! 우리 올바른 순서대로 동물들을 정렬시켜볼까요? 아쉽게도 간장이는 다음 시즌에서 만나보실 수 있습니다. 양념이와 치킨이 정렬!' },
  {id: 2, title: '이분탐색: 도둑을 잡아라!', sort: 'Mid', img: midgameimage, content:  '도둑을 잡았더니 이분탐색 개념이 머리속에 쏙쏙!? 목격자 이분탐씨와 함께 김싸피 순경을 도와 도둑을 잡아봐요!!' },
]

function Queue() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      큐 게임하기
    </Tooltip>
  )
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1>Queue</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/ds/2",
                    state: {
                      ds: ds,
                      algo: algo,
                    }
                  }} >
                    <img src={queuegameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue_thumnail} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐란?</h2>
            <p>
              큐는 배열에 항목이 들어온 순서대로 접근 가능한 자료구조에요. 먼저 들어온 항목이 먼저 나가는 구조 (선입선출; first in, first out)
              를 가지고 있어요.
            </p>
            <p>
              은행 업무를 보기위해 기다리는 것이나 롤러코스터를 타려고 줄을 서는 것을 생각해보면 좀 더 쉽게 이해할 수 있을 거에요!
              롤러코스터를 타기 위해 줄을 먼저 선 사람이 먼저 탈 수 있겠죠? 큐의 동작과 아주 흡사해요!
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue1} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐의 동작</h2>
            <p>
              큐의 동작은 아래와 같이 이루어져요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삽입 :
            </p>
            <p>
              rear는 가장 최근에 입력된 값을 가리켜요.
            </p>
            <p>
              큐에 새로운 항목을 삽입하기 위해서는 rear를 한 칸 앞으로 이동한 후 그 위치에 삽입해줘요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삭제 :
            </p>
            <p>
              front는 가장 먼저 삭제될 노드를 가리켜요.
            </p>
            <p>
              큐에 있는 항목을 제거할 때에는 front 위치에서 항목을 제거한 후 한 칸 앞으로 이동해요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue3} alt="" />
            </div>
            <h2>실생활 예</h2>
            <p>
              큐의 또다른 예시는 뭐가 있을까요?
            </p>
            <p>
              대부분의 줄을 서는 행위는 큐의 예시라고 볼 수 있을 것 같아요.
            </p>
            <p>
              톨게이트를 통과하는 차량들,
              티켓을 사기위해 줄을 서서 기다리는 사람들, 편의점 물품을 진열할 때 앞에서 부터 채워넣는 행위들이 모두 실생활에서 볼 수 있는
              큐의 예시랍니다.
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1>Queue</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue_thumnail} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐란?</h2>
            <p>
              큐는 배열에 항목이 들어온 순서대로 접근 가능한 자료구조에요. 먼저 들어온 항목이 먼저 나가는 구조 (선입선출; first in, first out)
              를 가지고 있어요.
            </p>
            <p>
              은행 업무를 보기위해 기다리는 것이나 롤러코스터를 타려고 줄을 서는 것을 생각해보면 좀 더 쉽게 이해할 수 있을 거에요!
              롤러코스터를 타기 위해 줄을 먼저 선 사람이 먼저 탈 수 있겠죠? 큐의 동작과 아주 흡사해요!
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue1} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐의 동작</h2>
            <p>
              큐의 동작은 아래와 같이 이루어져요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삽입 :
            </p>
            <p>
              rear는 가장 최근에 입력된 값을 가리켜요.
            </p>
            <p>
              큐에 새로운 항목을 삽입하기 위해서는 rear를 한 칸 앞으로 이동한 후 그 위치에 삽입해줘요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삭제 :
            </p>
            <p>
              front는 가장 먼저 삭제될 노드를 가리켜요.
            </p>
            <p>
              큐에 있는 항목을 제거할 때에는 front 위치에서 항목을 제거한 후 한 칸 앞으로 이동해요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue3} alt="" />
            </div>
            <h2>실생활 예</h2>
            <p>
              큐의 또다른 예시는 뭐가 있을까요?
            </p>
            <p>
              대부분의 줄을 서는 행위는 큐의 예시라고 볼 수 있을 것 같아요.
            </p>
            <p>
              톨게이트를 통과하는 차량들,
              티켓을 사기위해 줄을 서서 기다리는 사람들, 편의점 물품을 진열할 때 앞에서 부터 채워넣는 행위들이 모두 실생활에서 볼 수 있는
              큐의 예시랍니다.
            </p>
          </Container>
        </div>
      }
    </div>
  )
}

export default Queue