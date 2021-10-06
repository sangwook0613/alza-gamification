import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import binarysearch1 from '../../../assets/study/binarysearch1.png'
import binarysearch2 from '../../../assets/study/binarysearch2.jpg'
import binarysearch3 from '../../../assets/study/binarysearch3.PNG'
import binarysearch4 from '../../../assets/study/binarysearch4.PNG'

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

function BinarySearch(props) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      이분탐색 게임하기
    </Tooltip>
  )
  
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1>Binary Search</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/algo/2",
                    state: {
                      ds: ds,
                      algo: algo,
                    }
                  }} >
                    <img src={midgameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch2} alt="" style={{ width: "80%" }} />
            </div>
            <h2>이분 탐색이란?</h2>
            <p>
              이분 탐색은 정렬된 배열 내에서 찾고자 하는 값의 위치를 찾는 탐색이에요.
            </p>
            <p>
              이진 탐색, 이진 검색 다 같은 말이죠.
            </p>
            <p>
              이분 탐색은 알고리즘의 각 단계에서 찾고자 하는 값과 배열 중간 요소를 비교해요.
            </p>
            <p>
              이때의 중간 요소란, 배열의 처음 위치와 마지막 위치에 대한 중간 위치에 있는 값을 의미해요.
            </p>
            <p>
              만약 찾고자 하는 값과 중간 요소가 일치한다면, 그 위치를 반환하게돼요.
            </p>
            <p>
              그렇다면 찾는 값이 중간요소보다 작거나 클때는 어떻게 될까요?
            </p>
            <p>
              찾는값이 중간 요소보다 작다면 중간 요소를 기준으로 왼쪽 배열에서 검색 과정을 반복해요.
            </p>
            <p>
              반대로 크다면 중간 요소를 기준으로 오른쪽 배열에서 검색 과정을 반복하죠.
            </p>
            <p>
              어때요, 어렵지 않죠?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch1} alt="" style={{ width: "70%" }} />
            </div>
            <h2>장점과 단점</h2>
            <p>
              이분 탐색에 대해 이해가 되셨나요? 그렇다면 이분탐색의 장점과 단점은 무엇이 있는지 알아볼까요?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch4} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              장점
            </p>

            <p>
              이분 탐색의 장점은 배열의 크기가 클 수록, 즉 자료가 많을수록 효율적이라는 거에요.
            </p>
            <p>
              배열에 값이 5개가 있다고 생각해 보세요.
            </p>
            <p>
              어떤 값을 찾으려고 할때, 앞에서부터 하나씩 비교해 가며 원하는 값을 찾는것과 이분 탐색을 통해 찾는것은 크게 시간적으로 차이가 없을 거에요.
            </p>
            <p>
              하지만 배열에 값이 1000개가 있다면? 훨씬 탐색 시간이 줄어들 거에요!
            </p>
            <img src={binarysearch3} alt="" />
            <p style={{ fontWeight: "bold" }}>
              단점
            </p>
            <p>
              반대로 단점은 무엇이 있을까요?
            </p>
            <p>
              이분 탐색은 배열에 들어가는 값들이 크기 순으로 정렬이 되어 있어야 한다는 단점이 있어요.
            </p>
            <p>
              이분 탐색 자체가 배열의 중간요소 값의 크기와 찾는 값의 크기를 비교 하는 탐색 방법이기 때문이에요.
            </p>
            <p>
              이분 탐색을 하기 위해서는 꼭 먼저 정렬을 해줘야한다는것. 잊지마세요!
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1>Binary Search</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch2} alt="" style={{ width: "80%" }} />
            </div>
            <h2>이분 탐색이란?</h2>
            <p>
              이분 탐색은 정렬된 배열 내에서 찾고자 하는 값의 위치를 찾는 탐색이에요.
            </p>
            <p>
              이진 탐색, 이진 검색 다 같은 말이죠.
            </p>
            <p>
              이분 탐색은 알고리즘의 각 단계에서 찾고자 하는 값과 배열 중간 요소를 비교해요.
            </p>
            <p>
              이때의 중간 요소란, 배열의 처음 위치와 마지막 위치에 대한 중간 위치에 있는 값을 의미해요.
            </p>
            <p>
              만약 찾고자 하는 값과 중간 요소가 일치한다면, 그 위치를 반환하게돼요.
            </p>
            <p>
              그렇다면 찾는 값이 중간요소보다 작거나 클때는 어떻게 될까요?
            </p>
            <p>
              찾는값이 중간 요소보다 작다면 중간 요소를 기준으로 왼쪽 배열에서 검색 과정을 반복해요.
            </p>
            <p>
              반대로 크다면 중간 요소를 기준으로 오른쪽 배열에서 검색 과정을 반복하죠.
            </p>
            <p>
              어때요, 어렵지 않죠?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch1} alt="" style={{ width: "70%" }} />
            </div>
            <h2>장점과 단점</h2>
            <p>
              이분 탐색에 대해 이해가 되셨나요? 그렇다면 이분탐색의 장점과 단점은 무엇이 있는지 알아볼까요?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch4} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              장점
            </p>

            <p>
              이분 탐색의 장점은 배열의 크기가 클 수록, 즉 자료가 많을수록 효율적이라는 거에요.
            </p>
            <p>
              배열에 값이 5개가 있다고 생각해 보세요.
            </p>
            <p>
              어떤 값을 찾으려고 할때, 앞에서부터 하나씩 비교해 가며 원하는 값을 찾는것과 이분 탐색을 통해 찾는것은 크게 시간적으로 차이가 없을 거에요.
            </p>
            <p>
              하지만 배열에 값이 1000개가 있다면? 훨씬 탐색 시간이 줄어들 거에요!
            </p>
            <img src={binarysearch3} alt="" />
            <p style={{ fontWeight: "bold" }}>
              단점
            </p>
            <p>
              반대로 단점은 무엇이 있을까요?
            </p>
            <p>
              이분 탐색은 배열에 들어가는 값들이 크기 순으로 정렬이 되어 있어야 한다는 단점이 있어요.
            </p>
            <p>
              이분 탐색 자체가 배열의 중간요소 값의 크기와 찾는 값의 크기를 비교 하는 탐색 방법이기 때문이에요.
            </p>
            <p>
              이분 탐색을 하기 위해서는 꼭 먼저 정렬을 해줘야한다는것. 잊지마세요!
            </p>
          </Container>
        </div>
      }

    </div>
  )
}

export default BinarySearch