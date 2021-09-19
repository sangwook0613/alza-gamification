import React, { useState } from 'react';
import { withRouter } from 'react-router';

const LoginPage = (props) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  

  const onIdHandle = (e) => {
    setId(e.currentTarget.value)
  }
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <>
      <h1>로그인</h1>
      <form action="">
        
        <label>아이디</label>
        <input type="text" value={id} onChange={onIdHandle} />

        <label>비밀번호</label>
        <input type="password" value={password} onChange={onPasswordHandle} />
      </form>
    </>
  )
};

export default withRouter(LoginPage);