import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../lib/store/store';
import { onNicknameValidation } from '../signupPage/validation';
import { connect } from 'react-redux';

const InfoUpdateModal = (props) => {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const [email, setEmail] = useState(props.userEmail)
  const [phoneNum, setPhoneNum] = useState(props.userTel)
  const [nickname, setNickname] = useState(props.userNickName)
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('')
  const dispatch = useDispatch()
  console.log(props)

  
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
    console.log(nickname, phoneNum, email, '도대체 뭐라고나오길래 undefined야?')
    console.log('Submit')
    const body = {
      accessToken,
      refreshToken,
      userId,
      userNickName: nickname,
      userTel: phoneNum,
      userEmail: email,
    }
    if (checkValidation()) {
      props.dispatch({type: 'UPDATE_MYPAGE', payload: body});
      dispatch(updateUserInfo(body))
        .then((res) => {
          console.log(res)
          // console.log(res.data, 'axios로 받아오는 data는 없다')
          alert('수정되었습니다')
          props.onClose()
        })
        .catch((err) => {
          console.log(err)
          alert('에러발생')
        })
    } else {
      alert('올바르게 작성해주세요!')
    }
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

// export default InfoUpdateModal;

function statetoprops(state) {
  return {
    state: state
  }
}

export default connect (statetoprops)(InfoUpdateModal);