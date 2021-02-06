import React, {useEffect, useState} from "react";
import style from "../styles/UserDetailModal.module.css"
import axios from "axios";

const PostsModal = ({userDetail, setUserDetail}) => {
    const [posts, setPosts] = useState([]);

    const close = () => {
        setUserDetail(null);
    }

    const getPosts = async () => {
        const authorId = userDetail ? userDetail.id : null
        const URL = `https://jsonplaceholder.typicode.com/user/${authorId}/posts`
        const response = await axios.get(URL);
        setPosts(response.data)
    }

    useEffect(() => {
        getPosts();
    }, [userDetail])

    return (
        <div className={style.user_modal_wrapper}>
            <div className={style.user_modal_box}>
                {posts.map(post => {
                    return (
                        <div>{post.title}</div>
                    )
                })}
                <button onClick={close}>CLose</button>
            </div>
        </div>
    )
}

export default PostsModal;
