import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { signupUser } from '../../lib/store/store';

const SignupPage = (props) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const dispatch = useDispatch()
  

  const onIdHandle = (e) => {
    setId(e.currentTarget.value)
  }
  const onNameHandle = (e) => {
    setName(e.currentTarget.value)
  }
  const onNicknameHandle = (e) => {
    setNickname(e.currentTarget.value)
  }
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onConfirmPasswordHandle = (e) => {
    setConfirmPassword(e.currentTarget.value)
  }
  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value)
  }
  const onPhoneNumHandle = (e) => {
    setPhoneNum(e.currentTarget.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      let body = {
        userId: id,
        password: password,
        userName: name,
        userNickName: nickname,
        userTel: phoneNum,
        userEmail: email,
      }
      dispatch(signupUser(body)).then((res) => {
        console.log(res)
        alert('정상적으로 가입되었습니다!')
        props.history.push('/login')
      })
    } else {
      alert('비밀번호가 일치하지 않습니다!')
    }
  }


  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        
        <label>아이디</label>
        <input type="text" value={id} onChange={onIdHandle} />
        <button>중복확인</button>

        <label>이름</label>
        <input type="text" value={name} onChange={onNameHandle} />

        <label>닉네임</label>
        <input type="text" value={nickname} onChange={onNicknameHandle} />

        <label>비밀번호</label>
        <input type="password" value={password} onChange={onPasswordHandle} />

        <label>비밀번호 확인</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandle}
        />
        
        <label>이메일</label>
        <input type="email" value={email} onChange={onEmailHandle} />

        <label>전화번호</label>
        <input type="text" value={phoneNum} onChange={onPhoneNumHandle} />

        <button type="submit">회원가입</button>
      </form>
    </>
  )
};

export default withRouter(SignupPage);