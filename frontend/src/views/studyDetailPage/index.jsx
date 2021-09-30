import { useParams, Link } from 'react-router-dom'

import stack_thumnail from '../../assets/study/stack_thumnail.jpg'
// import stack1 from '../../assets/study/stack1.PNG'
import stack2 from '../../assets/study/stack2.PNG'
import stack3 from '../../assets/study/stack3.jpg'

import queue_thumnail from '../../assets/study/queue_thumnail.png'
import queue1 from '../../assets/study/queue1.PNG'
import queue3 from '../../assets/study/queue3.jpg'

import graph_thumnail from '../../assets/study/graph_thumnail.jpg'
import graph1 from '../../assets/study/graph1.png'
import graph2 from '../../assets/study/graph2.PNG'
import graph3 from '../../assets/study/graph3.PNG'
import graph4 from '../../assets/study/graph4.PNG'
import graph5 from '../../assets/study/graph5.PNG'
import graph6 from '../../assets/study/graph6.png'

import tree_thumnail from '../../assets/study/tree_thumnail.jpg'
// import tree1 from '../../assets/tree1.PNG'
import tree2 from '../../assets/study/tree2.PNG'
import tree3 from '../../assets/study/tree3.PNG'
import tree4 from '../../assets/study/tree4.PNG'
import tree5 from '../../assets/study/tree5.PNG'

import sort_thumnail from '../../assets/study/sort_thumnail.jpg'
import bubble_sort from '../../assets/study/bubble_sort.PNG'
import insertion_sort from '../../assets/study/insertion_sort.PNG'
import selection_sort from '../../assets/study/selection_sort.PNG'

import graphtraversal_thumnail from '../../assets/study/graphTraversal_thumnail.png'
import graphtraversal1 from '../../assets/study/graphtraversal1.jpg'
import DFS from '../../assets/study/DFS.gif'
import BFS from '../../assets/study/BFS.gif'

// import binarysearch_thumnail from '../../assets/binarysearch_thumnail.jpg'
import binarysearch1 from '../../assets/study/binarysearch1.png'
import binarysearch2 from '../../assets/study/binarysearch2.jpg'
import binarysearch3 from '../../assets/study/binarysearch3.PNG'
import binarysearch4 from '../../assets/study/binarysearch4.PNG'
import { Container } from 'react-bootstrap'
import '../../styles/studyCard.css';


function Stack() {
  return (
    <div id="study">
      <h1>Stack</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        {/* 링크 나중에 걸기. */}
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={stack_thumnail} alt="" style={{width:"50%"}}/>
        </div>
        <h2>스택이란?</h2>
        <p>
          스택은 배열의 끝에서만 데이터를 접근할 수 있는 자료 구조에요.
        </p>
        <p>
          먼저 들어온 항목이 나중에 나가는 구조 (후입선출; last in, first out)를 가지고 있어요. 즉, 항목의 삽입과 삭제가 한쪽 끝에서만 이루어지죠.
        </p>
        <p>
          책상위에 쌓여있는 책이나 싱크대에 쌓여있는 접시를 생각해 보면 이해하기 쉬울 거에요!
        </p>
        <p>
          책이 쌓여 있으면 아래에 있는 책을 꺼내기 위해 위에 있는 것을 먼저 꺼내야 하겠죠?
        </p>
        <p>
          스택도 먼저 들어온 항목을 꺼내기 위해서는 나중에 들어온 항목부터 꺼내줘야 해요
        </p>
        <hr />
        {/* <img src={stack1} alt=""/> */}
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={stack2} alt="" style={{width:"70%"}}/>
        </div>
        <h2>스택의 동작</h2>
        <p>
          스택의 동작은 아래와 같이 이루어져요. 위 그림을 함께 참고하며 생각해보세요.
        </p>
        <p style={{ fontWeight: "bold" }}>
          삽입 :
        </p>
        <p>
          top은 가장 최근에 들어온 항목의 위치. 즉, 현재 스택 맨 끝에 있는 값의 위치를 의미해요.
        </p>
        <p>
          스택에 새로운 값을 삽입하기 위해서는 top을 1만큼 증가시키고 그 위치에 값을 넣어줘요
        </p>
        <p style={{ fontWeight: "bold" }}>
          삭제 :
        </p>
        <p>
          스택에 있는 항목을 삭제할 때는 top의 위치에서 항목을 삭제한 후 top의 위치를 1만큼 감소시켜줘요.
        </p>
        <hr />
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={stack3} alt=""/>
        </div>
        <h2>실생활 예</h2>
        <p>
          위에서 설명한 책, 접시 같은 상황 이외에도 다양한 상황을 예로 들어볼 수 있을거에요.
        </p>
        <p>
          혹시 프링글X 라는 과자를 드셔보셨나요?
          통 가장 아래에 있는 과자를 먹기 위해서는 위에서부터 하나씩 꺼내 먹을 수 밖에 없어요. 가장 먼저 들어간 과자를 먹기 위해서는
          뒤에 들어온 과자부터 먹어야 하는거죠.
        </p>
        <p>
          어때요. 이제 스택에 대해 감이 좀 잡히시나요?
          주변에 눈을 돌려 스택과 같은 구조가 무엇이 있는지 여러분이 직접 한번 찾아보세요!
        </p>
      </Container>
    </div>
  )
}

function Queue() {
  return (
    <div id="study">
      <h1>Queue</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={queue_thumnail} alt="" style={{width:"60%"}}/>
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
          <img src={queue1} alt="" style={{width:"60%"}}/>
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
          <img src={queue3} alt=""/>
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
  )
}

function Graph() {
  return (
    <div id="study">
      <h1>Graph</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graph_thumnail} alt="" style={{width:"60%"}}/>
        </div>
        <h2>그래프란?</h2>
        <p>
          그래프는 공집합이 아닌 정점(Vertex)의 유한집합 V와 두 정점의 연결선이 간선(Edge)의 집합 E로 구성되는 특수한 형태의 자료구조에요

        </p>
        <p>
          설명이 조금 어렵게 느껴지시나요? 그럼 조금 더 자세히 알아보도록 할까요?
        </p>
        <hr />
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graph1} alt="" style={{width:"60%"}}/>
        </div>
        <h2>그래프의 구성 및 용어 표현</h2>
        <p style={{ fontWeight: "bold" }}>
          정점(Vertex)
        </p>
        <p>
          위 그림에서, 각각의 숫자에 해당하는 부분을 바로 정점이라고 해요.
        </p>

        <p style={{ fontWeight: "bold" }}>
          간선(Edge)
        </p>
        <p>
          정점과 정점사이에 연결되어 있는 선이 보이시나요? 이 선을 바로 간선이라고 해요. 그래프는 정점과 간선으로 이루어져 있다고
          할 수 있죠.
        </p>

        <p style={{ fontWeight: "bold" }}>
          인접(Adjacent)
        </p>
        <p>
          어떤 정점과 정점을 연결하는 간선이 존재할 때, 그 정점들은 서로 "인접해 있다"고 해요.
        </p>

        <hr />
        <h2 style={{ marginTop: "50px" }}>그래프의 종류</h2>
        <p>
          그래프는 방향에 따라 무방향 그래프와 방향 그래프, 간선이 어떻게 연결되었는지에 따라 부분 그래프, 완전 그래프로 나눌 수 있어요.

        </p>
        <p>
          하나하나 알아보도록 할까요?
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graph2} alt="" style={{width:"40%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          1. 무방향 그래프 (Undirected Graph)
        </p>
        <p>
          무방향 그래프는 말 그대로 간선에 방향이 없는 그래프에요. 간선으로 연결된 노드는 서로 인접해 있죠.
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graph3} alt="" style={{width:"13%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          2. 방향 그래프 (Directed Graph)
        </p>
        <p>
          방향 그래프는 정점과 정점을 연결하는 간선에 방향을 표시하는 선이 있는 그래프에요.
        </p>
        <p>
          정점 A에서 정점 B 를 연결하는 방향 그래프가 있다면,
          A에서 B로 가는 경로는 있지만 B에서 A로 가는 경로는 존재하지 않아요.
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graph4} alt="" style={{width:"40%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          3. 부분 그래프 (Sub Graph)
        </p>
        <p>
          부분 그래프는 어떤 그래프에 대해 일부 정점과 간선으로만 이루어진 그래프를 말해요.
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graph5} alt="" style={{width:"40%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          4. 완전 그래프 (Complete Graph)
        </p>
        <p>
          정점을 잇는 간선이 더 이상 존재하지 않는 그래프에요.
        </p>
        <p>
          즉 간선의 개수가 최대인 그래프라고 할 수 있죠. 위 그림을 같이 참고하면
          더욱 쉽게 이해할 수 있을 거에요.
        </p>
        <hr />
        <img src={graph6} alt="" />
        <h2>실생활 예</h2>

        <p>
          가장 대표적으로 차량의 네비게이션을 그래프의 예로 들 수 있을 것 같아요.
        </p>
        <p>
          네비게이션에는 한 지점에서 목적지로 가는 경로가 여러가지 있고,
          가장 빨리 갈 수 있는 방법을 안내해주죠.
        </p>
        <p>
          현재 위치와 목적지를 각각 정점이라고 생각한다면, 목적지까지 향하는 경로들을 간선이라고 할 수 있겠네요!
        </p>
      </Container>
    </div>
  )
}

function List() {
  return (
    <div id="study">
      <h1>List</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <img src="" alt="" />
        <h2>리스트란?</h2>
        <p>
          리스트는 다량의 데이터를 다루는데 가장 단순한 방법이기 때문에 가장 빈번하게 사용되는 자료구조 중 하나인데요.
        </p>
        <p>
          구현 방법에 따라 순차리스트, 연결리스트 크게 두가지로 분류할 수 있어요.
        </p>
        <p>
          각각 어떤 차이점이 있는지 알아보도록 할게요~
        </p>
        <hr />
        <img src="" alt="" />
        <h2>순차리스트</h2>
        <p>
          순차리스트(Sequential List)는 구현할 자료들을 논리적인 순서대로 메모리에 연속하여 저장하는 자료구조에요.
        </p>
        <p>
          데이터가 컴퓨터 메모리에 저장될 때, 저장 시작 위치부터 빈 자리 없이 순서대로 저장된다는 뜻이죠.
        </p>
        <p>
          자료의 논리적인 순서와 물리적인 순서가 일치하는 구현 방식이라고 할 수 있어요!
        </p>
        <p>
          순차리스트의 이러한 특성 때문에, 데이터를 추가하거나 삭제하고 나면, 연속적인 순서를 유지하기 위해
          다른 데이터의 위치를 옮겨주는 작업이 필요해요.
        </p>
        <p>
          추가나 삭제가 많아지면 그만큼 시간이 많이 소요가 되겠죠?
        </p>
        <hr />

        <h2 style={{ marginTop: "50px" }}>연결리스트</h2>
        <p>
          연결리스트(Linked List)는 메모리에 저장된 물리적 위치나 순서와 상관없이, 연결로써 논리적인 순서를 표현하는 자료구조에요.
        </p>
        <p>
          순차리스트와 다르게, 각각의 독립적인 메모리에 저장되어 다음 주소값을 활용하여 마치 순차적으로 이루어진 것 처럼 표현되죠.
        </p>
        <p>
          주소에 대한 정보가 더 필요하기 때문에 순차리스트에 비해 복잡해 보이고 어려워 보일 수도 있는데 왜 연결리스트를 사용하는 것일까요?
        </p>
        <p>
          연결리스트는 특정 데이터를 삽입하거나 삭제할 때 주소값만 수정하면 되기 때문에 순차리스트에 비해 연산속도가 빨라요.
        </p>
        <p>
          즉, 단순 탐색은 순차리스트가 더 효율적이지만 데이터의 추가, 삭제 작업에서는 연결리스트가 효율적인 것이죠.
        </p>
      </Container>
    </div>
  )
}

function Tree() {
  return (
    <div id="study">
      <h1>Tree</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={tree_thumnail} alt="" style={{width:"70%"}}/>
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
          <img src={tree2} alt="" style={{width:"90%"}}/>
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
          <img src={tree3} alt="" style={{width:"50%"}}/>
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
  )
}

function Sort() {
  return (
    <div id="study">
      <h1>Sort</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={sort_thumnail} alt="" style={{width:"80%"}}/>
        </div>
        <h2>정렬이란?</h2>
        <p>
          알고리즘에서 정렬이란, 말 그대로 어떤 항목들로 이루어진 그룹을 조건에 맞춰 다시 배치시키는 것이에요.
        </p>
        <p>
          예를 들어, 무작위로 숫자로 이루어진 그룹이 있다고 하면 작은 순서에서 큰 순서로, 혹은 큰 순서에서 작은 순서로 정렬시킬 수 있어요.
        </p>
        <p>
          무작위로 나열된 단어들도, 정렬을 통해 사전순으로 볼 수 있게끔 만들수도 있고요.
        </p>
        <p>
          혹시 여러분은 정렬에도 여러가지 방식이 있다는 것을 아세요?
        </p>
        <p>
          숫자를 오름차순으로 정렬시키는 것도 여러가지 방식으로 할 수 있다는 거에요.
        </p>
        <p>
          아직 잘 감이 안잡히는 분들을 위해 제가 가장 대표적이고 간단한 몇가지 정렬에 대해 설명해 드릴게요!
        </p>
        <hr />
        <h2 style={{ marginTop: "50px" }}>정렬의 종류</h2>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={bubble_sort} alt="" style={{width:"50%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          1. 버블 정렬
        </p>
        <p>
          버블 정렬(bubble sort)은 인접한 두 항목을 비교하여 정렬하는 방식이에요.
        </p>
        <p>
          항목이 마치 수면 위로 거품처럼 올라오는 듯한 모습을 보이기 때문에 버블 정렬이라는 이름이 붙었다고 해요.
        </p>
        <p>
          버블 정렬이 어떻게 이루어지는지 한가지 예를 들어 설명해 볼까요?
        </p>
        <p>
          위 그림처럼 6개의 숫자 그룹이 주어진다고 생각해 볼게요. 그리고 우리는 작은 수부터 큰 수까지 오름차순으로 정렬하려고 해요.
        </p>
        <p>
          먼저, 첫번째 값과 두번째 값을 비교하여, 더 작은 값이 앞 쪽으로 오도록 위치를 변경해요. 위 그림처럼 11과 3을 비교하면 3이 더 작은값이니 위치가 변경되죠.
        </p>
        <p>
          그 다음으로 두번째 값과 세번째값을 비교하여 작은 값이 앞 쪽으로 오도록 만들어요. 지금 현재 두번째 값인 11과 세번째 값인 28을 비교하면, 이미 11이 더 작기 때문에 변화가 일어나지 않아요.
        </p>
        <p>
          이런식으로 계속 반복하다보면 마지막 값은 그룹에서 가장 큰 값이 위치하게 될 거에요.
        </p>
        <p>
          하지만, 아직 앞쪽은 정렬이 되지 않았기 때문에 맨 마지막 값(가장 큰 값)을 제외하고 다시 버블 정렬을 반복해서 해줘야해요.
        </p>
        <p>
          그렇게 총 5번의 버블 정렬을 마치고 나면, 오름차순으로 정렬된 결과를 확인할 수 있을 거에요.
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={selection_sort} alt="" style={{width:"50%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          2. 선택 정렬
        </p>
        <p>
          선택 정렬(selection sort)은 가장 작거나 큰 값을 찾아 위치를 바꾸는 방식으로 진행돼요.
        </p>
        <p>
          오름차순으로 정렬하는 것을 예로 한번 들어볼게요.
        </p>
        <p>
          먼저 그룹에서 가장 작은 값을 찾아요! 그 값과 가장 앞에 위치한 값의 위치를 변경하는거에요. 그럼 이젠 가장 작은 값이 제일 앞으로 오겠죠?
        </p>
        <p>
          두번째론 그 다음 큰 작은 값을 찾아 두 번째로 위치한 값과 위치를 바꾸는거에요. 그룹에서 두번째 작은 값이 두번째에 위치하게 되는거죠
        </p>
        <p>
          이런식으로 바꾸다보면, 위 그림과 같은 과정을 통해 최종적으로 오름차순으로 정렬된 결과를 얻을 수 있어요. 어렵지 않죠?
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={insertion_sort} alt="" style={{width:"50%"}}/>
        </div>
        <p style={{ fontWeight: "bold" }}>
          3. 삽입 정렬
        </p>
        <p>
          삽입 정렬(insertion sort)는 그룹 맨 처음 정렬된 부분에, 정렬되지 않은 다음 항목을 반복적으로 삽입하는 정렬이에요.
        </p>
        <p>
          손에 여러 장의 숫자 카드가 있다고 생각해 보세요.
        </p>
        <p>
          카드를 크기 순으로 정렬한다고 했을때, 카드를 한장 뽑아 기존 카드 사이의 올바른 자리에 삽입해가며 정렬하는거에요.
        </p>
        <p>
          즉 삽입 정렬을 다시 풀어서 얘기해보면, 모든 항목을 앞에서부터 차례대로 이미 정렬된 부분과 비교하여, 자신의 위치를 찾아 삽입하는 정렬이에요.
        </p>
        <p>
          위 그림을 예로 들어볼게요.
        </p>
        <p>
          11,3,28,43,9,4로 주어진 그룹이 있을때, 오름차순으로 정렬하기 위해 3 부터 앞에 값과 비교하는거에요. 11은 3보다 크기때문에 자리가 변경되죠.
        </p>
        <p>
          다음으로 28을 앞의 값들과 비교하는거에요. 11, 3 모두 28보다 작기 때문에 변화가 일어나지 않아요. 그 다음 순서인 43도 마찬가지에요.
        </p>
        <p>
          그 다음으로 9와 앞의 값들을 비교해요. 4는 43, 28, 11 보다 작기때문에 위치 변경이 일어나요. 하지만 3보다는 크기 때문에 3과 11 사이에 위치하게 되죠.
        </p>
        <p>
          이런 방식으로 그룹 끝까지 비교를 하게되면 가장 작은 값부터 순서대로 정렬돼요.
        </p>
        <p>
          버블정렬, 선택정렬, 삽입정렬을 알려드렸으니, 각각 어떤 차이점이 있는지 직접 정리해보세요! 공부하는데 큰 도움이 될 거에요
        </p>
      </Container>

    </div>
  )
}

function BinarySearch() {
  return (
    <div id="study">
      <h1>Binary Search</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={binarysearch2} alt="" style={{width:"80%"}}/>
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
          <img src={binarysearch1} alt="" style={{width:"70%"}}/>
        </div>
        <h2>장점과 단점</h2>
        <p>
          이분 탐색에 대해 이해가 되셨나요? 그렇다면 이분탐색의 장점과 단점은 무엇이 있는지 알아볼까요?
        </p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={binarysearch4} alt="" style={{width:"50%"}}/>
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
  )
}

function GraphTraversal() {
  return (
    <div id="study">
      <h1>Graph Traversals</h1>
      <Container style={{ width: "50%", textAlign: "left" }}>
        <div id="fixed">
          <button id="gameBtn">게임하기</button>
        </div>
        <img src={graphtraversal_thumnail} alt="" />
        <Link to={"/study/ds/3"}>그래프란?</Link>
        <br />
        <Link to={"/study/ds/4"}>트리란?</Link>
        <h2>그래프, 트리 탐색(BFS,DFS)</h2>
        <p>
          무방향 그래프 혹은 트리를 탐색하는 방법은 대표적으로 2가지가 있어요.
        </p>
        <p>
          DFS와 BFS가 바로 그것인데요. 각각 무엇을 의미하는지, 어떤 방식으로 탐색이 진행되는지 차근차근 알아볼까요?
        </p>
        <hr />
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={DFS} alt="" style={{width:"40%"}}/>
        </div>
        <h2>DFS란</h2>
        <p>
          DFS(Depth First Search)는 그래프와 트리에서 깊이를 우선으로 탐색하는 방법이에요.
        </p>
        <p>
          위의 그림을 참조하여 설명을 해 볼까요?
        </p>
        <p>
          10이란 값을 먼저 탐색했고, 그 다음으로는 6 - 3을 탐색하는 것을 보니 한가지 방향으로 먼저 탐색이 일어나네요.
        </p>
        <p>
          더 이상 깊이가 존재하지 않는다면 반대쪽 방향으로 탐색이 일어나구요.
        </p>
        <p>
          이처럼 한 쪽 끝까지 우선 탐색하는 것이 DFS 에요.
        </p>
        <hr />
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={BFS} alt="" style={{width:"40%"}}/>
        </div>
        <h2>BFS란</h2>
        <p>
          BFS(Breadth First Search)는 DFS와는 반대로 너비를 우선으로 탐색하는 방법이에요.
        </p>
        <p>
          더 깊은 위치를 탐색하기 이전에, 같은 깊이에 있는 위치를 탐색하는 것이죠.
        </p>
        <p>
          위 그림을 보면 한번에 이해할 수 있을 거에요.
        </p>
        <p>
          DFS와는 다르게 10이라는 값을 탐색 한 이후에, 그 값을 기준으로 같은 깊이에 있는 6, 14를 탐색하게 되죠.
        </p>
        <p>
          위에 나온 그림은 한가지 예시에 불과하고, 같은 깊이에 있는 값을 탐색하는 순서는 언제든지 바뀔수 있으니 참고만 하라구요!
        </p>
        <hr />
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={graphtraversal1} alt="" style={{width:"100%"}}/>
        </div>
        <h2>DFS와 BFS의 예</h2>
        <p>
          그럼 우리, DFS와 BFS에는 어떤 예제가 있는지 한번 생각해 보는 시간을 가져볼까요?
        </p>
        <p>
          DFS는 미로찾기를 떠올릴 수 있을것 같아요.
        </p>
        <p>
          미로의 출구를 찾고 싶을때, 최대한 한 방향으로 갈 수 있을 때 까지 쭉 가다가 더 이상 갈 수 없게되면 다시 가장 가까운 갈림길로
          돌아와서 그 갈림길 부터 다른 방향으로 탐색을 진행하는 것이 DFS라고 할 수 있을것 같아요.
        </p>
        <p>
          BFS는 최단 거리를 계산하고 싶을 때 사용할 수 있을 거에요. 
        </p>
        <p>
          모든 경로에 대해 한 단계 한 단계 탐색해 나가기 때문에,
          목적지 까지 최소한으로 걸리는 시간을 찾으려면 DFS 보다 BFS를 활용하는것이 효과적일 거에요!
        </p>
      </Container>
    </div>
  )
}

const struct_contents = [
  { id: 1, view: <Stack /> },
  { id: 2, view: <Queue /> },
  { id: 3, view: <Graph /> },
  { id: 4, view: <Tree /> },
  { id: 5, view: <List /> },
]

const algo_contents = [
  { id: 1, view: <Sort /> },
  // 이분탐색
  { id: 2, view: <BinarySearch /> },
  // DFS,BFS
  { id: 3, view: <GraphTraversal /> },
]

function StudyDetailPage() {
  var params = useParams();
  console.log(params)
  var id = Number(params.id);
  var view = null
  if (params.type === 'ds') {
    for (let i = 0; i <= struct_contents.length; i++) {
      if (id === struct_contents[i].id) {
        view = struct_contents[i].view
        break
      }
    }
  }
  else if (params.type === 'algo') {
    for (let i = 0; i <= algo_contents.length; i++) {
      if (id === algo_contents[i].id) {
        view = algo_contents[i].view
        break
      }
    }
  }


  return (
    <div>
      {view}
    </div>
  )
}

export default StudyDetailPage