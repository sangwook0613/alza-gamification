import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'
import '../../styles/gameDesc.css';
import { useMediaQuery } from 'react-responsive'


function GameDetailPage(props) {
  // console.log(props.location.state)
  const type = props.match.params.category
  const gameId = props.match.params.gameId
  const ds = props.location.state.ds
  const algo = props.location.state.algo
  

  //게임 메뉴
  const [showGames, setShowGames] = useState(false);
  const openGames = (e) => {
    setShowGames(showGames => !showGames);
  }


  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })


  return(
    <div>
      <div className={isDesktopOrLaptop ? "game-header" : "game-header-res"}>
        { type === "ds" ?
          <h1 className="game-title">{ds[gameId-1].title}</h1>
          :
          <h1 className="game-title">{algo[gameId-1].title}</h1>
        }
      </div>
      
        <div className={isDesktopOrLaptop ? "game-play" : "game-play-res"}>
          게임 들어갈 위치
        </div>
      {/* <Container>
      </Container> */}

      <div className={isDesktopOrLaptop ? "show-game-menu" : "hide-game-menu"}>
        <div className={`menu ${showGames ? "" : "closed"}`}>
          <div className="stack button">
            <Link to={{
                pathname: "/game/ds/1",
                state: {
                  ds: ds,
                  algo: algo
                }
              }} className="game-atag">
              <div className="size-outline">
                <img src={ds[0].img} alt="" className="game-img"/>
                <p className="game-type">스택</p>
              </div>
            </Link>
          </div>
          <div className="queue button">
            <Link to={{
                pathname: "/game/ds/2",
                state: {
                  ds: ds,
                  algo: algo
                }
              }} className="game-atag">
              <div className="size-outline">
                <img src={ds[1].img} alt="" className="game-img"/>
                <p className="game-type size1">큐</p>
              </div>
            </Link>
          </div>
          <div className="graph button">
            <Link to={{
                pathname: "/game/ds/3",
                state: {
                  ds: ds,
                  algo: algo
                }
              }} className="game-atag">
              <div className="size-outline">
                <img src={ds[2].img} alt="" className="game-img"/>
                <p className="game-type size2">그래프</p>
              </div>
            </Link>
          </div>
          <div className="tree button">
            <Link to={{
                pathname: "/game/ds/4",
                state: {
                  ds: ds,
                  algo: algo
                }
              }} className="game-atag">
              <div className="size-outline">
                <img src={ds[3].img} alt="" className="game-img"/>
                <p className="game-type">트리</p>
              </div>
            </Link>
          </div>
          <div className="sort button">
           <Link to={{
                pathname: "/game/algo/1",
                state: {
                  ds: ds,
                  algo: algo
                }
              }} className="game-atag">
              <div className="size-outline">
                <img src={algo[0].img} alt="" className="game-img"/>
                <p className="game-type">정렬</p>
              </div>
            </Link>
          </div>
          <div className="mid button">
            <Link to={{
                pathname: "/game/algo/2",
                state: {
                  ds: ds,
                  algo: algo
                }
              }} className="game-atag">
              <div className="size-outline">
                <img src={algo[1].img} alt="" className="game-img"/>
                <p className="game-type">탐색</p>
              </div>
            </Link>
          </div>
          { showGames === false ?
            <div className="main button" onClick={openGames}>Menu</div>
            :
            <div className="main button" onClick={openGames}>Close</div>
          }
       </div>
      </div>

      <div className={isDesktopOrLaptop ? "go-to-study" : "go-to-study-res"}>
       { type === "ds" ?
          <Link to={`/study/${type}/${ds[gameId-1].id}`} className="game-atag">
              <button className="after-study">관련 학습 하러가기</button>
          </Link>
          :
          <Link to={`/study/${type}/${algo[gameId-1].id}`} className="game-atag">
              <button className="after-study">관련 학습 하러가기</button>
          </Link>
        }
      </div>

      <div>

      </div>
    </div>
  )
} 
  

export default GameDetailPage;