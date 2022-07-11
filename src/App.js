import './App.css';
import {login2 } from './login2';
import Login from './Login.js';
import Main from './main.js';
import SignUP from './SignUp';
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUP/>} />
      </Routes>
    </div>
  );
}

export default App;
