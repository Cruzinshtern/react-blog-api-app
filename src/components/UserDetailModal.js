import React from "react";
import style from "../styles/UserDetailModal.module.css"

const UserDetailModal = ({userDetail, setUserDetail}) => {

    const close = () => {
        setUserDetail(null);
    }

    return (
        <div className={style.user_modal_wrapper}>
            <div className={style.user_modal_box}>
                <p>{userDetail.name}</p>
                <button onClick={close}>CLose</button>
            </div>
        </div>
    )
}

export default UserDetailModal;
