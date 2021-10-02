import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/gameCard.css';
import stack from '../../assets/game/stack.png'
import queue from '../../assets/game/queue.png'
import graph from '../../assets/game/graph.png'
import tree from '../../assets/game/tree.png'
import sort from '../../assets/game/sort.png'
import mid from '../../assets/game/mid.png'


function GamePage(props) {
  const ds = [
    {id: 1, title: '스택: 별과자 완전 범죄', sort: 'Stack', img: stack, content: '형의 별과자가 너무 탐났던 사피. 음성인식 로봇 알자의 도움을 받아 몰래 훔쳐먹자! 훔쳐먹고 나서 후환이 두려워진 사피. 알자의 도움을 받아 과자를 원상복구 하자!'},
    {id: 2, title: '큐: 산타를 도와라', sort: 'Queue', img: queue, content: '크리스마스를 앞두고 한창 준비 중인 산타마을. 컨베이어 벨트가 끊어져 선물들이 다 섞여버렸다! 산타를 도와 문제를 해결하고 큐 개념을 같이 학습해봐요!!' },
    {id: 3, title: '그래프: 완전 그래프 완성시키기', sort: 'Graph', img: graph, content: '동물들이 길을 잃고 섞여버렸다! 우리 올바른 순서대로 동물들을 정렬시켜볼까요? 아쉽게도 간장이는 다음 시즌에서 만나보실 수 있습니다. 양념이와 치킨이 정렬!' },
    {id: 4, title: '트리: 공통 조상 찾기', sort: 'Tree', img: tree, content: '동물들이 길을 잃고 섞여버렸다! 우리 올바른 순서대로 동물들을 정렬시켜볼까요? 아쉽게도 간장이는 다음 시즌에서 만나보실 수 있습니다. 양념이와 치킨이 정렬!' },
  ]

  const algo = [
    {id: 1, title: '정렬: 동물 이동시키기', sort: 'Sort', img: sort, content: '동물들이 길을 잃고 섞여버렸다! 우리 올바른 순서대로 동물들을 정렬시켜볼까요? 아쉽게도 간장이는 다음 시즌에서 만나보실 수 있습니다. 양념이와 치킨이 정렬!' },
    {id: 2, title: '이분탐색: 도둑을 잡아라!', sort: 'Mid', img: mid, content:  '도둑을 잡았더니 이분탐색 개념이 머리속에 쏙쏙!? 목격자 이분탐씨와 함께 김싸피 순경을 도와 도둑을 잡아봐요!!' },
  ]

  let array = [];
  let array2 = [];

  if (props.match.params.category === "ds") {
    for (let i = 0; i < ds.length; i++) {
      array.push(
          <div className="gamecard-container" key={ds[i].id}>
            <div className="gamecard">
              <div className="game-details">		
                <h1>{ds[i].title}</h1>
                <h3>{ds[i].sort}</h3>		
                <p className="information">{ds[i].content}</p>
                <div className="control"> 
                  <Link to={{
                    pathname: `ds/${ds[i].id}`,
                    state: {
                      ds: ds,
                      algo: algo
                    }
                  }}>
                    <button className="custom">
                      <i className="fas fa-play"></i>
                      <span className="text">Start</span>
                    </button>
                  </Link>
                </div>
              </div>           
              <div className="game-image">
                <img src={ds[i].img} alt=""></img>
              </div>      
            </div>	       
            <hr />
          </div>
      )
    }
    return (
      <div className="gamelist-container">
        <h1>자료구조</h1>
        {array}
      </div>
    )
  } else if (props.match.params.category === "algo") {
    for (let i = 0; i < algo.length; i++) {
      array2.push(
          <div className="gamecard-container" key={algo[i].id}>
            <div className="gamecard">
              <div className="game-details">		
                <h1>{algo[i].title}</h1>
                <h3>{algo[i].sort}</h3>		
                <p className="information">{algo[i].content}</p>
                <div className="control">
                  <Link to={{
                    pathname: `algo/${algo[i].id}`,
                    state: {
                      ds: ds,
                      algo: algo
                    }
                  }}>
                    <button className="custom">
                      <i className="fas fa-play"></i>
                      <span className="text">Start</span>
                    </button>
                  </Link>
                </div>
              </div>           
              <div className="game-image">
                <img src={algo[i].img} alt=""></img>
              </div>        
            </div>
            <hr />	       
          </div>
      )
    }
    return (
      <div className="gamelist-container">
        <h1>알고리즘</h1>
        {array2}
      </div>
    )
  }
}


export default GamePage;
