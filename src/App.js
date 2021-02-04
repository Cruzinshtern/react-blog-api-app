import {useState, useEffect} from 'react';
import UserList from "./components/UserList";
import UserDetailModal from "./components/UserDetailModal";

import './App.css';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(URL);
    setUsers(response.data)
  }

  return (
    <div className="App">
      <UserList users={users} setUserDetail={setUserDetail}/>
      {userDetail ? <UserDetailModal userDetail={userDetail} setUserDetail={setUserDetail}/> : ''}
    </div>
  );
}

export default App;
