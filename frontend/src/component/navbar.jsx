import {Link, NavLink} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../styles/main.css';

function Navi(){
  const username = ""
  return (
    // <div className="navbar">
    //   <div><Link to='/' >로고</Link></div>
    //   <div className="content-navbar">
    //     <div className="content">
    //       <div><Link to='#'>게임</Link></div>
    //       <div className="sub-content">
    //         <div><Link to='/game/ds'>자료구조</Link></div>
    //         <div><Link to='/game/algo'>알고리즘</Link></div>
    //       </div>
    //     </div>
    //     <div className="content"><Link to='/study'>학습</Link></div>
        // { username ? 
        //   <div><Link to={'/mypage/' + username}>마이페이지</Link></div>
        //   :
        //   <></>
        // }
    //   </div>
      // <div className="auth-navbar">
      //   {username ?
      //       <div>로그아웃</div>
      //     :
      //     <>
      //       <div className="content"><Link to='/login' >로그인</Link></div>
      //       <div className="content"><Link to='/signup' >회원가입</Link></div>
      //     </>
      //   }
      // </div>
    // </div>

    <Navbar bg="light" expand="lg">
    <Container>
      <NavLink to="/">E-RUN</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="게임" id="basic-nav-dropdown">
            <div>
              <NavLink to="/game/ds">자료구조</NavLink>
              <NavLink to="/game/algo">알고리즘</NavLink>
            </div>
          </NavDropdown>
          <NavDropdown title="학습" id="basic-nav-dropdown">
            <NavLink to="/study/ds">자료구조</NavLink>
            <NavLink to="/study/algo">알고리즘</NavLink>
          </NavDropdown>
          { username ? 
          <div className="text-middle"><NavLink to={'/mypage/' + username}>마이페이지</NavLink></div>
          :
          <></>
           }
          <div className="auth-navbar">
            {username ?
                <div className="text-middle">로그아웃</div>
              :
              <>
                <div className="content text-middle"><NavLink to='/login' >로그인</NavLink></div>
                <div className="content text-middle"><NavLink to='/signup' >회원가입</NavLink></div>
              </>
            }
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navi;