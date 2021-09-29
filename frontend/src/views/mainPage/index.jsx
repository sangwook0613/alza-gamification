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
        <div className="test5 bounce"></div>

        <div className="test-desc">
          <h1>알짜배기</h1>
          <h5 className="desc">게임으로 배우는 알고리즘과 자료구조</h5>
          <button className="startBtn">시작하기</button>
        </div>

        <section class="flex scene">
        <div class="confetti">
          <figure class="confetti__image">
            <svg viewBox="-225 -225 450 450" role="presentational" />
          </figure>
          <button class="button confetti__button" type="button">
            <span class="button__text">
              click me
            </span>
          </button>
        </div>
      </section>

        


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