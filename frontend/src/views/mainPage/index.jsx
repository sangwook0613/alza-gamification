import React from 'react';
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

        {/* <div className="test-desc">
          <h1>알짜배기</h1>
          <h5 className="desc">게임으로 배우는 알고리즘과 자료구조</h5>
          <button className="startBtn">시작하기</button>
        </div> */}

        <div className="test-desc">
          <h1>알짜배기</h1>
          <h5 className="desc">게임으로 배우는 <mark className="highlight">알</mark>고리즘과 <mark className="highlight">짜</mark>료구조</h5>
          <p>가장 중요한 기초 개념들을 모아 놓은 알짜배기에서</p>
          <p>당신의 프로그래밍 역량을 키워보세요!</p>
          <button className="startBtn">시작하기</button>
        </div>
        

      </div>
    </>
  )
};

export default MainPage;