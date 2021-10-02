import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import '../styles/main.css';
import logo from '../assets/logo3.png'

import { useMediaQuery } from 'react-responsive'

function Navi() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const username = sessionStorage.getItem('userId')
  // const username = ''


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
              {username ?
                <div className="text-middle content"><NavLink to={'/mypage/' + username} className="nav-text">마이페이지</NavLink></div>
                :
                <></>
              }
            </div>
            <div className="auth-navbar">
              {username ?
                <div className="text-middle nav-text">로그아웃</div>
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="게임" id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item><NavLink to="/game/ds" className="nav-text">자료구조</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/game/algo" className="nav-text">알고리즘</NavLink></NavDropdown.Item> */}
                  {/* <NavLink to="/game/ds" className="nav-text">자료구조</NavLink>
                  <br />
                  <NavLink to="/game/algo" className="nav-text">알고리즘</NavLink> */}
                  <div >
                    <NavDropdown.Item href="/game/ds">자료구조</NavDropdown.Item>
                    {/* <hr style={{margin:"0"}}/> */}
                    <NavDropdown.Item href="/game/algo">알고리즘</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </div>
                </NavDropdown>
                <NavDropdown title="학습" id="collasible-nav-dropdown">
                  <div style={{backgroundColor:"#6B76FF"}}>
                    <NavDropdown.Item href="/study/ds">자료구조</NavDropdown.Item>
                    <hr style={{margin:"0"}}/>
                    <NavDropdown.Item href="/study/algo">알고리즘</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                  </div>
                  
                </NavDropdown>
                {username ?
                  <Nav.Link href={'/mypage/' + username} className="nav-text">마이페이지</Nav.Link>
                  :
                  <Nav.Link href='/login' className="nav-text">로그인</Nav.Link>
                }
                {username ?
                  <Nav.Link>로그아웃</Nav.Link>
                  :
                  <Nav.Link href='/signup' className="nav-text">회원가입</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }

    </>
  )
}

export default Navi;