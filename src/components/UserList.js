import React from "react";
import User from "./User";

const UserList = ({users, setUserDetail}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUserDetail={setUserDetail}/>)}
        </div>
    )
}

export default UserList;
