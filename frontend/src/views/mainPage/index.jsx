import React from 'react';
import play from '../../assets/mainphoto.png'
import test from '../../assets/test.png'
import test2 from '../../assets/test2.png'
import '../../styles/main.css';
const MainPage = (props) => {
  
  return (
    <>
      <div className="main-container">
        <div className="test"></div>
        {/* <div className="test2"><img src={test} alt="" className="test3"></img></div> */}
        <div className="test2"><img src={test2} alt="" className="test3"></img></div>
        <div className="test4"></div>
        <div className="test5"></div>

        <div className="main-desc">
          <h1>알짜배기</h1>
          <h5 className="desc">게임으로 배우는 알고리즘과 자료구조</h5>
          <button className="startBtn">시작하기</button>
        </div>


        {/* <div className="main-image">
          <img src={play} alt=""/>
        </div>
        <div className="main-desc">
          <h1>알짜배기</h1>
          <h5 className="desc">게임으로 배우는 알고리즘과 자료구조</h5>
          <button className="startBtn">시작하기</button>
        </div> */}
      </div>
    </>
  )
};

export default MainPage;