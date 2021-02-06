import React from "react";
import style from "../styles/User.module.css"

const User = ({user, setUserDetail}) => {

    const openModal = () => {
        setUserDetail(user);
    }

    return (
        <div className={style.user_card} onDoubleClick={openModal}>
            <h2>Name: {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}

export default User;
