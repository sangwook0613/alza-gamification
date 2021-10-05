import React from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import '../styles/main.css';
// import logo from '../assets/logo3.png'

function Navi(props){

  const router = useHistory();
  const userId = props.state.userid

  const logout = () => {
    sessionStorage.clear();
    props.dispatch({type: "LOGOUT"});
    router.push("/");
  }

  const handleClickLogout = () => {
    logout()
  }

  const handleClickLogoutRes = () => {
    logout()
    document.getElementById("hamberger").click()
  }

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  // const username = sessionStorage.getItem('userId')

  const clickNav = (e) => {
    document.getElementById("hamberger").click()
    // console.log(document.getElementById("hamberger").className)
    // console.log(document.getElementById("responsive-navbar-nav").className)
    // document.getElementById("hamberger").className = "navbar-toggler"
    // document.getElementById("hamberger").className = "navbar-toggler collapsed"
    // document.getElementById("responsive-navbar-nav").className = "navbar-collapse collapse show"
    // document.getElementById("responsive-navbar-nav").className = "navbar-collapse collapse"
    // navbar-toggler collapsed
    // navbar-collapse collapse
  }
  return (
    <>
      {isDesktopOrLaptop &&
        <Navbar expand="lg">
          <Container>
            <div className="logo">
              {/* <NavLink to="/" className="nav-text"><img src={logo} alt="" className="logo-test" /></NavLink> */}
              <NavLink to="/" className="nav-text">알짜배기</NavLink>
            </div>

            <div className="content-navbar">
              <NavDropdown title="게임" id="basic-nav-dropdown" className="nav-text content">
                <div className="game-dropdown">
                  <NavLink to="/game/ds" className="nav-text">자료구조</NavLink>
                  <NavLink to="/game/algo" className="nav-text">알고리즘</NavLink>
                </div>
              </NavDropdown>
              <NavDropdown title="학습" id="basic-nav-dropdown" className="nav-text content" >
                <div className="study-dropdown">
                  <NavLink to="/study/ds" className="nav-text">자료구조</NavLink>
                  <NavLink to="/study/algo" className="nav-text">알고리즘</NavLink>
                </div>
              </NavDropdown>
              {userId ?
                <div className="text-middle content"><NavLink to={'/mypage/' + userId} className="nav-text">마이페이지</NavLink></div>
                :
                <></>
              }
            </div>
            <div className="auth-navbar">
              {userId ?
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
      }
      {isTabletOrMobile &&
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <div className="logo">
              {/* <NavLink to="/" className="nav-text"><img src={logo} alt="" className="logo-test" /></NavLink> */}
              <NavLink to="/" className="nav-text">알짜배기</NavLink>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamberger" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="게임" id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item><NavLink to="/game/ds" className="nav-text">자료구조</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/game/algo" className="nav-text">알고리즘</NavLink></NavDropdown.Item> */}
                  <div style={{ paddingBottom: "8px" }}>
                    <NavLink to="/game/ds" className="nav-text" onClick={clickNav}>자료구조</NavLink>
                  </div>
                  <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <NavLink to="/game/algo" className="nav-text" onClick={clickNav}>알고리즘</NavLink>
                  </div>
                  <div >
                    {/* <NavDropdown.Item href="/game/ds">자료구조</NavDropdown.Item> */}
                    {/* <hr style={{margin:"0"}}/> */}
                    {/* <NavDropdown.Item href="/game/algo">알고리즘</NavDropdown.Item> */}
                    <NavDropdown.Divider />
                  </div>
                </NavDropdown>
                <NavDropdown title="학습" id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item href="/study/ds">자료구조</NavDropdown.Item>
                    <hr style={{ margin: "0" }} />
                    <NavDropdown.Item href="/study/algo">알고리즘</NavDropdown.Item> */}
                  <div style={{ paddingBottom: "8px" }}>
                    <NavLink to="/study/ds" className="nav-text" onClick={clickNav}>자료구조</NavLink>
                  </div>
                  <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <NavLink to="/study/algo" className="nav-text" onClick={clickNav}>알고리즘</NavLink>
                  </div>
                  <NavDropdown.Divider />
                </NavDropdown>
                {userId ?
                  <NavLink to={'/mypage/' + userId} className="nav-text" onClick={clickNav} style={{ paddingTop: "8px", paddingBottom: "8px" }}>마이페이지</NavLink>
                  :
                  <NavLink to='/login' className="nav-text" onClick={clickNav} style={{ paddingTop: "8px", paddingBottom: "8px" }}>로그인</NavLink>
                }
                {userId ?
                  <div onClick={handleClickLogoutRes} style={{ paddingTop: "8px", paddingBottom: "8px" }}>로그아웃</div>
                  :
                  <NavLink to='/signup' className="nav-text" onClick={clickNav} style={{ paddingTop: "8px", paddingBottom: "8px" }}>회원가입</NavLink>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </>
  )
}

function statetoprops(state) {
  return {
    state: state
  }
}

export default connect (statetoprops)(Navi);