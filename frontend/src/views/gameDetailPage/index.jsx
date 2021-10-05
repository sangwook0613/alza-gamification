import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import Unity, { UnityContext } from "react-unity-webgl";
import { getUserStage, updateUserStage } from '../../lib/store/store';
import '../../styles/gameDesc.css';

const gameName = {
  1: "stack",
  2: "queue",
  3: "graph",
  4: "tree",
  5: "sort",
  6: "binarysearch",
}

const gameObjectName = {
  1: "Canvas",
  4: "Canvas",
  6: "GameManager",
}

function GameDetailPage(props) {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const type = props.match.params.category
  const gameId = props.match.params.gameId
  const ds = props.location.state.ds
  const algo = props.location.state.algo
  // useRef 사용
  let stageId = useRef(0)
  let currentStage = useRef(0)
  const dispatch = useDispatch()
  let gameKey = parseInt(gameId)
  if (type === "algo") {
    gameKey += 4
  }

  //게임 메뉴
  const [showGames, setShowGames] = useState(false);
  const openGames = (e) => {
    setShowGames(showGames => !showGames);
  }

  // 반응형 조절
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })

  // 현재 게임 stage를 어디까지 클리어했었는지 받아오기 
  useEffect(() => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(getUserStage(userId, gameKey, body))
      .then((res) => {
        console.log('getUserStage', res)
        stageId.current = parseInt(res.payload.data.stageId)
        currentStage.current = parseInt(res.payload.data.curStage)
        console.log(stageId, stageId.current)
        console.log(currentStage, currentStage.current)
    })
  }, [accessToken, dispatch, gameKey, refreshToken, userId])


  const handleUpdateUserStage = (stageNum) => {
    console.log('updateUserStage')
    const body = {
      accessToken,
      refreshToken,
      stageId: stageId.current,
      userId,
      gameCode: gameKey,
      curStage: stageNum,
    }
    dispatch(updateUserStage(body))
      .then((res) => {
        console.log('updateUserStage', res)
    })
  }

  const unityContext = new UnityContext({
    loaderUrl: `/unity/${gameName[gameKey]}/build.loader.js`,
    dataUrl: `/unity/${gameName[gameKey]}/build.data`,
    frameworkUrl: `/unity/${gameName[gameKey]}/build.framework.js`,
    codeUrl: `/unity/${gameName[gameKey]}/build.wasm`,
  });

  
  unityContext.on("SetStage", () => {
    console.log("Stage button setting", currentStage.current, gameObjectName[gameKey]);
    unityContext.send(gameObjectName[gameKey], "SetStageFromReact", currentStage.current); 
  });

  unityContext.on("Stage1Clear", () => {
    console.log("Stage 1 Clear");
    handleUpdateUserStage(1)
  });
  
  unityContext.on("Stage2Clear", () => {
    console.log("Stage 2 Clear");
    handleUpdateUserStage(2)
  });
  
  unityContext.on("Stage3Clear", () => {
    console.log("Stage 3 Clear");
    handleUpdateUserStage(3)
  });


  return(
    <div>
      <div className={isDesktopOrLaptop ? "game-header" : "game-header-res"}>
        { type === "ds" ?
          <h1 className="game-title">{ds[gameId-1].title}</h1>
          :
          <h1 className="game-title">{algo[gameId-1].title}</h1>
        }
      </div>
      
        <Unity className={isDesktopOrLaptop ? "game-play" : "game-play-res"} unityContext={unityContext} />
        {/* <div className={isDesktopOrLaptop ? "game-play" : "game-play-res"}>
          게임 들어갈 위치
        </div> */}
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