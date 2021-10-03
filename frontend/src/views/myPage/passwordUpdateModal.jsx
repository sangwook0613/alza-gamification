import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onPasswordValidation, onConfirmPasswordValidation } from '../signupPage/validation';
import { updatePassword } from '../../lib/store/store';

const PasswordUpdateModal = (props) => {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('')
  const dispatch = useDispatch()
  
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onConfirmPasswordHandle = (e) => {
    setConfirmPassword(e.currentTarget.value)
  }

  const validPassword = (e) => {
    setPasswordErrorMessage(onPasswordValidation(e.target.value))
    setConfirmPasswordErrorMessage(onConfirmPasswordValidation(e.target.value, confirmPassword))
  }
  const validConfirmPassword = (e) => {
    setConfirmPasswordErrorMessage(onConfirmPasswordValidation(password, e.target.value))
  }
  const checkValidation = () => {
    if (passwordErrorMessage === "" && confirmPasswordErrorMessage === "") {
      if (password !== "" && confirmPassword !== "") {
        return true
      }
    }
    return false
  }

  const onSubmit = () => {
    if (checkValidation()) {
      const body = {
        accessToken,
        refreshToken,
        userId,
        newPassword: password,
      }
      dispatch(updatePassword(body))
        .then((res) => {
          console.log(res)
          alert('비밀번호가 변경되었습니다.')
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
      <span style={{ fontWeight: 'bold' }}>비밀번호 변경</span>
      <hr />
      <ul className="info-update-form">
        <li>
          <div className="info-update-title">새 비밀번호</div>
          <input
            className="info-update-input"
            type="password"
            value={password}
            onBlur={validPassword}
            onChange={onPasswordHandle}
            placeholder={password}
          />
        </li>
        {
          passwordErrorMessage ? 
          <p id="errormessage">{passwordErrorMessage}</p>
          :
          <></>
        }
        <li>
          <div className="info-update-title">새 비밀번호 확인</div>
          <input
            className="info-update-input"
            type="password"
            value={confirmPassword}
            onBlur={validConfirmPassword}
            onChange={onConfirmPasswordHandle}
            placeholder={confirmPassword}
          />
        </li>
        {
          confirmPasswordErrorMessage ? 
          <p id="errormessage">{confirmPasswordErrorMessage}</p>
          :
          <></>
        }
      </ul>
      <div className="form-btn">
        <button className="update-btn" onClick={onSubmit}>수정</button>
        <button className="cancel-btn" onClick={props.onClose}>취소</button>
      </div>
    </>
  )
};

export default PasswordUpdateModal;