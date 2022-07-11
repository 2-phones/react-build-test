import React, { useState } from "react";
import user from "./data";
import { useNavigate } from "react-router-dom";


const SignUP = () => {
    const navigate = useNavigate();
    const newData = {};
    const [newID , setnewID] = useState('');
    const [newPW , setnewPW] = useState('');
    const [users, setUsers] = useState(user);
    const arr = [];
    const userID = (id) => {
        const input = id.target.value
        setnewID(input)
            
        }
    const userPW = (pw) => {
        const input = pw.target.value;
        setnewPW(input);
    }
    
    const joinBtn = () => {
        // for(let i of user){
        //    i.id !== newData.id  ? users.push(newData)
        //    : alert('중복된 아이디입니다!');
        // };
        // newUser.push(newData);
        setUsers([...users,newID])
        console.log(users);
    }

    return(
        <container>
            <div>
                <input type="text" placeholder="아이디" onChange={userID}/>
            </div>
            <div>
                <input type="password" placeholder="비밀번호" onChange={userPW}/>
            </div>
            <button onClick={joinBtn}>가입ㄱㄱ</button>
            <button onClick={ () => navigate('/login')}>로그인페이지로</button>
            <button onClick={() => console.log(user)}>클릭해보샘</button>
        </container>
    )
}

export  { SignUP,users }