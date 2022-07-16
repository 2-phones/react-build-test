import './App.css';
import Login from './Login.js';
import Main from './main.js';
import SignUP from './SignUp';
import { Routes,Route,Link } from 'react-router-dom';
import { useState } from 'react';
import userData from './data';

function App() {
  // 상태 끌어올리기 사용해서 login, singup 같은 user데이터 공유하도록 한다.
  const [userDatas , setUserData ] = useState([...userData]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login userDatas={userDatas}/>} />
        <Route path="/signup" element={<SignUP setUserData={setUserData}/>} />
      </Routes>
    </div>
  );
}

export default App;
