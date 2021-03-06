import {useState, useEffect} from 'react';
import UserList from "./components/UserList";
import PostsModal from "./components/PostsModal";


import './App.css';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState(null);

  const getAllUsers = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(URL);
    setUsers(response.data)
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className="App">
      <UserList users={users} setUserDetail={setUserDetail}/>
      {userDetail ? <PostsModal userDetail={userDetail} setUserDetail={setUserDetail}/> : ''}
    </div>
  );
}

export default App;
