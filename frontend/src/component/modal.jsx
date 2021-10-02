import { createPortal } from "react-dom";
import '../styles/modal.css'
import InfoUpdateModal from '../views/myPage/infoUpdateModal';
import UserDeleteModal from '../views/myPage/userDeleteModal';

function Modal(props) {
  const userInfo = {
    'userId': props.userId,
    'userName': props.userName,
    'userNickName': props.userNickName,
    'userEmail': props.userEmail,
    'userTel': props.userTel,
  }
  console.log(props)

  return createPortal(
    <div className="modalWrapper">
      <div className="modalOverlay">
        <div className="modalInner">
          {(props.modalType === "InfoUpdateModal") &&
            <InfoUpdateModal
              onClose={props.onClose}
              {...userInfo}
            />
          }
          {(props.modalType === "UserDeleteModal") &&
            <UserDeleteModal
              onClose={props.onClose}
            />
          }
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;