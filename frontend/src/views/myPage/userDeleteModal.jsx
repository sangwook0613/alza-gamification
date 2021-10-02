import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../lib/store/store';

const UserDeleteModal = (props) => {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const dispatch = useDispatch()
  console.log(props)

  const onSubmit = () => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(deleteUser(userId, body))
      .then((res) => {
        console.log(res)
        alert('정상적으로 탈퇴되었습니다. 그동안 알짜배기를 이용해주셔서 감사합니다.')
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
        sessionStorage.removeItem('userId')
        props.onClose()
        // props.history.push('/game')
      })
      .catch((err) => {
        console.log(err)
        alert('에러발생')
      })
  }

  return (
    <>
      <span style={{fontWeight: 'bold'}}>회원정보 수정</span>
      <hr />
      <span style={{display: 'block', marginBottom: '25px'}}>
        정말 탈퇴하시겠습니까??
      </span>
      <div className="form-btn">
        <button className="delete-btn" onClick={onSubmit}>탈퇴</button>
        <button className="cancel-btn" onClick={props.onClose}>취소</button>
      </div>
    </>
  )
};

export default UserDeleteModal;