import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import tree_thumnail from '../../../assets/study/tree_thumnail.jpg'
// import tree1 from '../../assets/tree1.PNG'
import tree2 from '../../../assets/study/tree2.PNG'
import tree3 from '../../../assets/study/tree3.PNG'
import tree4 from '../../../assets/study/tree4.PNG'
import tree5 from '../../../assets/study/tree5.PNG'

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

function Tree() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      트리 게임하기
    </Tooltip>
  )
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1>Tree</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/ds/4",
                    state: {
                      ds: ds,
                      algo: algo,
                    }
                  }} >
                    <img src={treegameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={tree_thumnail} alt="" style={{ width: "70%" }} />
            </div>
            <h2>트리란?</h2>
            <p>
              트리는 계층적 데이터를 저장하고 활용하기 위한 자료구조에요.
            </p>
            <p>
              좀 더 쉬운 이해를 위해, 어떤 회사의 구성원 계층 구조를 떠올려 볼까요?
            </p>
            <p>
              일반적으로 회사는 사장(CEO) 혹은 회장이 있고, 그 아래 많은 임원(CTO, CFO, COO 등)들이 있어요.
            </p>
            <p>
              그 임원들은 또 각각 조직들을 가지고, 각 조직들은 관리자 혹은 구성원들로 이루어진 계층 구조를 가지고 있지요.
            </p>
            <p>
              위 사진을 함께 보면 조금 더 쉽게 이해가 가겠죠?
            </p>
            <p>
              음, 여전히 트리가 무엇인지 감이 안 잡히신다구요? 그럼 아래 내용을 계속 읽어보면서 하나하나 배워볼까요?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={tree2} alt="" style={{ width: "90%" }} />
            </div>
            <h2>트리의 구성 및 용어 표현</h2>
            <p style={{ fontWeight: "bold" }}>노드, 에지</p>
            <p>
              트리는 노드(Node)와 에지(Edge)로 구성되어 있어요.
            </p>
            <p>
              회사를 다시 예로 들어본다면 CEO, CTO 등 각각은 노드이며 각각의 연결은 에지가 되는 거에요.
            </p>
            <p>
              이때 연결된 노드들은 부모-자식 간의 관계로 나누어 구분할 수 있는데요.
            </p>
            <p>
              CEO 노드는 CFO와 CTO 노드의 부모(Parent) 노드이고, 반대로 CFO와 CTO는 CEO의 자식(Child) 노드라고 할 수 있지요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              차수(Degree)
            </p>
            <p>
              차수란 어떤 노드가 가지고 있는 가짓수를 의미해요.
            </p>
            <p>
              어떤 노드에 연결되어 있는 자식 노드의 수로 보시면 쉽게 이해 가실거에요!
            </p>
            <p style={{ fontWeight: "bold" }}>
              레벨(level)
            </p>
            <p>
              가장 위에 있는 노드의 레벨을 1이라고 하면, 순차적으로 내려오는 순서를 의미해요
            </p>
            <p style={{ fontWeight: "bold" }}>
              높이(Height) 또는 깊이(Depth)
            </p>
            <p>
              트리 레벨의 최대값을 의미해요
            </p>
            <hr />

            <h2 style={{ marginTop: "50px" }}>트리의 종류</h2>
            <p>
              트리는 목적에 따라 다양하게 종류가 나누어 지는데요. 몇 가지 중요한 트리에 대해 설명해 드릴게요!
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={tree3} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              1. 이진 트리
            </p>
            <p>
              이진 트리는 자식 노드가 최대 2개인 트리를 말해요.
            </p>
            <p>
              이진 트리는 단순히 데이터를 저장하는 용도로 사용되는 것이 아니라,
            </p>
            <p>
              자료를 더 빠르게 정리하고 원하는 데이터를 찾을 수 있도록 하기 위해 사용해요.
            </p>
            <img src={tree5} alt="" />
            <p style={{ fontWeight: "bold" }}>
              2. 순서 트리(Ordered Tree)와 비순서 트리(Oriented Tree)
            </p>
            <p>
              트리는 노드의 위치에 따라서도 분류가 가능해요.
            </p>
            <p>
              노드들의 배열 순서가 고정되어 위치의 의미가 중요한 트리를 순서 트리라고 하고,
            </p>
            <p>
              계층의 개념은 있으나 순서는 의미가 없는 트리를 비순서 트리라고 해요.
            </p>
            <hr />

            <img src={tree4} alt="" />
            <h2>실생활 예</h2>
            <p>
              트리는 위에서 설명한 회사 구조 뿐만 아니라 다른 곳에서도 쉽게 찾아볼 수 있어요.
            </p>
            <p>
              대표적으로 여러분이 사용하는 컴퓨터의 폴더 구조도 사실 트리 구조에요.
            </p>
            <p>
              폴더안에는 다른 폴더들이 있고, 또 그 폴더 안에는 다른 폴더들이 있을 수 있잖아요?
            </p>
            <p>
              한 폴더가 부모 노드라고 생각하면, 그 안에 들어있는 다른 폴더들은 자식 노드가 될 거에요!
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1>Tree</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={tree_thumnail} alt="" style={{ width: "70%" }} />
            </div>
            <h2>트리란?</h2>
            <p>
              트리는 계층적 데이터를 저장하고 활용하기 위한 자료구조에요.
            </p>
            <p>
              좀 더 쉬운 이해를 위해, 어떤 회사의 구성원 계층 구조를 떠올려 볼까요?
            </p>
            <p>
              일반적으로 회사는 사장(CEO) 혹은 회장이 있고, 그 아래 많은 임원(CTO, CFO, COO 등)들이 있어요.
            </p>
            <p>
              그 임원들은 또 각각 조직들을 가지고, 각 조직들은 관리자 혹은 구성원들로 이루어진 계층 구조를 가지고 있지요.
            </p>
            <p>
              위 사진을 함께 보면 조금 더 쉽게 이해가 가겠죠?
            </p>
            <p>
              음, 여전히 트리가 무엇인지 감이 안 잡히신다구요? 그럼 아래 내용을 계속 읽어보면서 하나하나 배워볼까요?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={tree2} alt="" style={{ width: "90%" }} />
            </div>
            <h2>트리의 구성 및 용어 표현</h2>
            <p style={{ fontWeight: "bold" }}>노드, 에지</p>
            <p>
              트리는 노드(Node)와 에지(Edge)로 구성되어 있어요.
            </p>
            <p>
              회사를 다시 예로 들어본다면 CEO, CTO 등 각각은 노드이며 각각의 연결은 에지가 되는 거에요.
            </p>
            <p>
              이때 연결된 노드들은 부모-자식 간의 관계로 나누어 구분할 수 있는데요.
            </p>
            <p>
              CEO 노드는 CFO와 CTO 노드의 부모(Parent) 노드이고, 반대로 CFO와 CTO는 CEO의 자식(Child) 노드라고 할 수 있지요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              차수(Degree)
            </p>
            <p>
              차수란 어떤 노드가 가지고 있는 가짓수를 의미해요.
            </p>
            <p>
              어떤 노드에 연결되어 있는 자식 노드의 수로 보시면 쉽게 이해 가실거에요!
            </p>
            <p style={{ fontWeight: "bold" }}>
              레벨(level)
            </p>
            <p>
              가장 위에 있는 노드의 레벨을 1이라고 하면, 순차적으로 내려오는 순서를 의미해요
            </p>
            <p style={{ fontWeight: "bold" }}>
              높이(Height) 또는 깊이(Depth)
            </p>
            <p>
              트리 레벨의 최대값을 의미해요
            </p>
            <hr />

            <h2 style={{ marginTop: "50px" }}>트리의 종류</h2>
            <p>
              트리는 목적에 따라 다양하게 종류가 나누어 지는데요. 몇 가지 중요한 트리에 대해 설명해 드릴게요!
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={tree3} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              1. 이진 트리
            </p>
            <p>
              이진 트리는 자식 노드가 최대 2개인 트리를 말해요.
            </p>
            <p>
              이진 트리는 단순히 데이터를 저장하는 용도로 사용되는 것이 아니라,
            </p>
            <p>
              자료를 더 빠르게 정리하고 원하는 데이터를 찾을 수 있도록 하기 위해 사용해요.
            </p>
            <img src={tree5} alt="" />
            <p style={{ fontWeight: "bold" }}>
              2. 순서 트리(Ordered Tree)와 비순서 트리(Oriented Tree)
            </p>
            <p>
              트리는 노드의 위치에 따라서도 분류가 가능해요.
            </p>
            <p>
              노드들의 배열 순서가 고정되어 위치의 의미가 중요한 트리를 순서 트리라고 하고,
            </p>
            <p>
              계층의 개념은 있으나 순서는 의미가 없는 트리를 비순서 트리라고 해요.
            </p>
            <hr />

            <img src={tree4} alt="" />
            <h2>실생활 예</h2>
            <p>
              트리는 위에서 설명한 회사 구조 뿐만 아니라 다른 곳에서도 쉽게 찾아볼 수 있어요.
            </p>
            <p>
              대표적으로 여러분이 사용하는 컴퓨터의 폴더 구조도 사실 트리 구조에요.
            </p>
            <p>
              폴더안에는 다른 폴더들이 있고, 또 그 폴더 안에는 다른 폴더들이 있을 수 있잖아요?
            </p>
            <p>
              한 폴더가 부모 노드라고 생각하면, 그 안에 들어있는 다른 폴더들은 자식 노드가 될 거에요!
            </p>
          </Container>
        </div>
      }

    </div>
  )
}

export default Tree