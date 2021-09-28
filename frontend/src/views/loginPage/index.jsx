import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { loginUser } from '../../lib/store/store';


import stack_thumnail from '../../assets/study/stack_thumnail.png'
import logo from '../../assets/user.png'

const LoginPage = (props) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onIdHandle = (e) => {
    setId(e.currentTarget.value)
  }
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value)
  }

  const setToken = (payload) => {
    sessionStorage.setItem('accessToken', payload['jwt-access-token'])
    sessionStorage.setItem('refreshToken', payload['jwt-refresh-token'])
  }

  const setUserId = (payload) => {
    sessionStorage.setItem('userId', payload)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    let body = {
      userId: id,
      password: password,
    }
    dispatch(loginUser(body))
      .then((res) => {
        console.log(res)
        alert(`반갑습니다! ${res.payload.data.userName}님`)
        setToken(res.payload.headers)
        setUserId(res.payload.data.userId)
        props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
        alert('아이디 혹은 비밀번호가 잘못되었습니다.')
      })
  }

  return (
    <>
      <div style={{display:"flex", height:"90%"}}>
        <div style={{width:"50%"}}>
          <img src={stack_thumnail} alt="" style={{width:"100%", height:"100%"}}/>
        </div>
        <div style={{width:"50%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          
          <img src={logo} alt="" style={{width:"10%", marginBottom:"50px"}}/>
          
          <form
            className="loginForm"
            onSubmit={onSubmit}
            style={{ width:"40%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
          >
            
            <div id="id_line">
              <i className="fas fa-user" id="idIcon"></i>
              <input type="text" style={{width:"100%"}} value={id} onChange={onIdHandle} placeholder="아이디"
              />
            </div>

            <div id="pw_line">
            <i className="fas fa-lock" id="pwIcon"></i>
              <input type="password" style={{width:"100%"}} value={password} onChange={onPasswordHandle} placeholder="패스워드"/>
            </div>

            <button className="etcBtn" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default withRouter(LoginPage);