import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/main.css';
// import logo from '../assets/logo3.png'

function Navi(props){

  const router = useHistory();
  const username = props.state.username

  const logout = () => {
    sessionStorage.clear();
    props.dispatch({type: "LOGOUT"});
    router.push("/");
  }

  const handleClickLogout = () => {
    logout()
  }

  return (
    <Navbar expand="lg">
    <Container>
      <div className="logo"> 
        {/* <NavLink to="/" className="nav-text"><img src={logo} alt="" className="logo-test" /></NavLink> */}
        <NavLink to="/" className="nav-text">알짜배기</NavLink>
      </div>

      <div className="content-navbar">
        <NavDropdown title="게임" id="basic-nav-dropdown"  className="nav-text content">
          <div className="game-dropdown">
            <NavLink to="/game/ds" className="nav-text">자료구조</NavLink>
            <NavLink to="/game/algo" className="nav-text">알고리즘</NavLink>
          </div>
        </NavDropdown>
        <NavDropdown title="학습" id="basic-nav-dropdown"  className="nav-text content" >
          <div className="study-dropdown">
            <NavLink to="/study/ds" className="nav-text">자료구조</NavLink>
            <NavLink to="/study/algo" className="nav-text">알고리즘</NavLink>
          </div>
        </NavDropdown>
        { username ? 
        <div className="text-middle content"><NavLink to={'/mypage/' + username} className="nav-text">마이페이지</NavLink></div>
        :
        <></>
        }
      </div>
      <div className="auth-navbar">
        {username ?
            <div className="text-middle nav-text cursor" onClick={handleClickLogout}>로그아웃</div>
          :
          <>
            <div className="content text-middle"><NavLink to='/login' className="nav-text">로그인</NavLink></div>
            <div className="content text-middle"><NavLink to='/signup' className="nav-text">회원가입</NavLink></div>
          </>
        }
      </div>
  
    </Container>
    </Navbar>
  )
}

function statetoprops(state) {
  return {
    state: state
  }
}

export default connect (statetoprops)(Navi);