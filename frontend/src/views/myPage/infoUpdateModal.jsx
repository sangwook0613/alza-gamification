import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { signupUser, checkUserId } from '../../lib/store/store';
import { onNicknameValidation } from '../signupPage/validation';

const InfoUpdateModal = (props) => {
  console.log(props)
  const userInfo = {
    '아이디': props.userId,
    '이름': props.userName,
    '닉네임': props.userNickName,
    '이메일': props.userEmail,
    '전화번호': props.userTel,
  }

  const [email, setEmail] = useState(props.userEmail)
  const [phoneNum, setPhoneNum] = useState(props.userTel)
  const [nickname, setNickname] = useState(props.userNickName)
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('')
  const dispatch = useDispatch()
  
  const onNicknameHandle = (e) => {
    setNickname(e.currentTarget.value)
  }
  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value)
  }
  const onPhoneNumHandle = (e) => {
    setPhoneNum(e.currentTarget.value)
  }

  const validNickname = (e) => {
    setNicknameErrorMessage(onNicknameValidation(e.target.value))
  }

  const checkValidation = () => {
    if (nicknameErrorMessage === "" && nickname !== "") {
      return true
    }
    return false
  }

  const onSubmit = () => {
    console.log('Submit')
  }

  return (
    <>
      <span style={{ fontWeight: 'bold' }}>회원정보 수정</span>
      <hr />
      <ul className="info-update-form">
        <li>
          <div className="info-update-title">아이디</div>
          <input
            className="info-update-input"
            type="text"
            value={props.userId}
            disabled
          />
        </li>
        <li>
          <div className="info-update-title">이름</div>
          <input
            className="info-update-input"
            type="text"
            value={props.userName}
            disabled
          />
        </li>
        <li>
          <div className="info-update-title">닉네임</div>
          <input
            className="info-update-input"
            type="text"
            value={nickname}
            onBlur={validNickname}
            onChange={onNicknameHandle}
            placeholder={nickname}
          />
        </li>
        {
          nicknameErrorMessage ? 
          <p id="errormessage">{nicknameErrorMessage}</p>
          :
          <></>
        }
        <li >
          <div className="info-update-title">이메일</div>
          <input
            className="info-update-input"
            type="email"
            value={email}
            onChange={onEmailHandle}
            placeholder={email ? email : '이메일'}
          />
        </li>
        <li >
          <div className="info-update-title">전화번호</div>
          <input
            className="info-update-input"
            type="text"
            value={phoneNum}
            onChange={onPhoneNumHandle}
            placeholder={phoneNum ? phoneNum : '전화번호'}
          />
        </li>
      </ul>
      <div className="form-btn">
        <button className="update-btn" onClick={onSubmit}>수정</button>
        <button className="cancel-btn" onClick={props.onClose}>취소</button>
      </div>
    </>
  )
};

export default InfoUpdateModal;