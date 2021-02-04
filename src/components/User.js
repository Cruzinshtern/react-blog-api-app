import React from "react";
import style from "../styles/User.module.css"

const User = ({user, setUserDetail}) => {

    const userInfo = () => {
        setUserDetail(user);
    }

    return (
        <div className={style.user_card} >
            <h2>Name: {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <div>
                <button onClick={userInfo}>More info</button>
                <button>Posts</button>
            </div>
        </div>
    )
}

export default User;
