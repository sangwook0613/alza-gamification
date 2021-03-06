import React from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import '../styles/main.css';
import logo4 from '../assets/logo/logo4.png'

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

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
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

  const clickGame = (e) => {
    document.getElementById("basic-nav-dropdown1").click()
  }
  const clickStudy = (e) => {
    document.getElementById("basic-nav-dropdown2").click()
  }
  return (
    <>
      {isDesktopOrLaptop &&
        <Navbar expand="lg">
          <Container>
            <div className="logo">
              {/* <NavLink to="/" className="nav-text"><img src={logo} alt="" className="logo-test" /></NavLink> */}
              <NavLink to="/">
                <img src={logo4} alt="" style={{ width: "100px" }} />
                {/* <img src={logo7} alt="" style={{width:"100px", borderRadius:"20px"}}/> */}
                {/* <img src={logo5} alt="" style={{width:"100px", borderRadius:"20px"}}/> */}
                {/* <img src={logo10} alt="" style={{width:"150px", borderRadius:"20px"}}/> */}
              </NavLink>
            </div>

            <div className="content-navbar">
              <NavDropdown title="??????" id="basic-nav-dropdown1" className="nav-text content">
                <div className="game-dropdown">
                  <NavLink to="/game/ds" className="nav-text" onClick={clickGame}>????????????</NavLink>
                  <NavLink to="/game/algo" className="nav-text" onClick={clickGame}>????????????</NavLink>
                </div>
              </NavDropdown>
              <NavDropdown title="??????" id="basic-nav-dropdown2" className="nav-text content" >
                <div className="study-dropdown">
                  <NavLink to="/study/ds" className="nav-text" onClick={clickStudy}>????????????</NavLink>
                  <NavLink to="/study/algo" className="nav-text" onClick={clickStudy}>????????????</NavLink>
                </div>
              </NavDropdown>
              {userId ?
                <div className="text-middle content"><NavLink to={'/mypage/' + userId} className="nav-text">???????????????</NavLink></div>
                :
                <></>
              }
            </div>
            <div className="auth-navbar">
              {userId ?
                <div className="text-middle nav-text cursor" onClick={handleClickLogout}>????????????</div>
                :
                <>
                  <div className="content text-middle"><NavLink to='/login' className="nav-text">?????????</NavLink></div>
                  <div className="content text-middle"><NavLink to='/signup' className="nav-text">????????????</NavLink></div>
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
              <NavLink to="/">
                <img src={logo4} alt="" style={{ width: "70px" }} />
              </NavLink>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamberger" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="??????" id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item><NavLink to="/game/ds" className="nav-text">????????????</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/game/algo" className="nav-text">????????????</NavLink></NavDropdown.Item> */}
                  <div style={{ paddingBottom: "8px" }}>
                    <NavLink to="/game/ds" className="nav-text" onClick={clickNav}>????????????</NavLink>
                  </div>
                  <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <NavLink to="/game/algo" className="nav-text" onClick={clickNav}>????????????</NavLink>
                  </div>
                  <div >
                    {/* <NavDropdown.Item href="/game/ds">????????????</NavDropdown.Item> */}
                    {/* <hr style={{margin:"0"}}/> */}
                    {/* <NavDropdown.Item href="/game/algo">????????????</NavDropdown.Item> */}
                    <NavDropdown.Divider />
                  </div>
                </NavDropdown>
                <NavDropdown title="??????" id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item href="/study/ds">????????????</NavDropdown.Item>
                    <hr style={{ margin: "0" }} />
                    <NavDropdown.Item href="/study/algo">????????????</NavDropdown.Item> */}
                  <div style={{ paddingBottom: "8px" }}>
                    <NavLink to="/study/ds" className="nav-text" onClick={clickNav}>????????????</NavLink>
                  </div>
                  <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <NavLink to="/study/algo" className="nav-text" onClick={clickNav}>????????????</NavLink>
                  </div>
                  <NavDropdown.Divider />
                </NavDropdown>
                {userId ?
                  <NavLink to={'/mypage/' + userId} className="nav-text" onClick={clickNav} style={{ paddingTop: "8px", paddingBottom: "8px" }}>???????????????</NavLink>
                  :
                  <NavLink to='/login' className="nav-text" onClick={clickNav} style={{ paddingTop: "8px", paddingBottom: "8px" }}>?????????</NavLink>
                }
                {userId ?
                  <div className="cursor" onClick={handleClickLogoutRes} style={{ paddingTop: "8px", paddingBottom: "8px" }}>????????????</div>
                  :
                  <NavLink to='/signup' className="nav-text" onClick={clickNav} style={{ paddingTop: "8px", paddingBottom: "8px" }}>????????????</NavLink>
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