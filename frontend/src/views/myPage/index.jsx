import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../lib/store/store';
import Modal from '../../component/modal';
import profile_img from '../../assets/user.png';
import './myPage.css';

const MyPage = (props) => {
  const userId = props.match.params.username
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const [userInfoUpdateModalOn, setUserInfoUpdateModalOn] = useState(false)
  const [userDeleteModalOn, setUserDeleteModalOn] = useState(false)
  const [userInfo, setUserInfo] = useState({
    'userId': '',
    'userName': '',
    'userNickName': '',
    'userEmail': '',
    'userPhone': '',
  })
  const dispatch = useDispatch()
  const matchInfo = {
    'userId': '아이디',
    'userName': '이름',
    'userNickName': '닉네임',
    'userEmail': '이메일',
    'userTel': '전화번호',
  }

  const handleUserInfoUpdateModal = () => {
    console.log('userInfoUpdateModalOn')
    setUserInfoUpdateModalOn(!userInfoUpdateModalOn)
  }
  const handleUserDeleteModal = () => {
    console.log('userDeleteModalOn')
    setUserDeleteModalOn(!userDeleteModalOn)
  }

  useEffect(() => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(getUserInfo(userId, body))
      .then((res) => {
        console.log('getUserInfo', res)
        const data = res.payload.data
        setUserInfo({
          'userId': data.userId,
          'userName': data.userName,
          'userNickName': data.userNickName,
          'userEmail': data.userEmail,
          'userTel': data.userTel,
        })
    })
  }, [userId])

  let array = []
  let i = 0
  
  for (const key in userInfo) {
    i++
    const value = userInfo[key] ? userInfo[key] : '-'
    array.push(
      <li key={i}>
        <div className="user-info-key">{matchInfo[key]}</div>
        <input className="user-info-input" type="text" placeholder={value}/>
      </li>
    )
  }
  
  return (
    <>
      <h1>{userId} 마이페이지</h1>
      <div >
        <button onClick={handleUserInfoUpdateModal}>회원정보 수정</button>
        <button>비밀번호 변경</button>
        <button onClick={handleUserDeleteModal}>회원 탈퇴</button>
      </div>
      <section className="mypage-main">
        <section className="user-board">
          <div className="profile">
            <div className="profile-img-circle">
              <img className="profile-img" src={profile_img} alt="profile" />
            </div>
          </div>
          <div className="board-info">
            <div>
              달성률
            </div>
            <div>
              Badge
            </div>
          </div>
        </section>
        <ul className="user-info">
          {array}
        </ul>
      </section>
      <div>
        {userInfoUpdateModalOn &&
          <Modal
          modalType="InfoUpdateModal"
          onClose={handleUserInfoUpdateModal}
          {...userInfo}
          />
        }
        {userDeleteModalOn &&
          <Modal
          modalType="UserDeleteModal"
          onClose={handleUserDeleteModal}
          {...userInfo}
          />
        }
      </div>
    </>
  )
};

export default MyPage;