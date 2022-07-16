import React, { useState } from "react";
import userData from "./data";
import { useNavigate,useLocation } from "react-router-dom";


const SignUP = ({setUserData}) => {
    const navigate = useNavigate();
    const [newUserInfo , setNewUserInfo] = useState({ // 회원가입 페이지 아이디, 비번 입력 값  갱신
        id : '', 
        password : '',
    });

    const newUser = (key) => (e) => { //회원가입 페이지 아이디, 비번 입력 값 받아오기
        setNewUserInfo({...newUserInfo, [key] : e.target.value });
    }

    // 기존 userData 의 id 값과 중복여부 체크 , 빈칸 입력시 경고, 제대로 입력했을 경우 회원데이터에 추가
    const joinBtn = () => {
        const checkUser = userData.filter( (user) => user.id === newUserInfo.id);
        console.log(checkUser)
        if(!newUserInfo.id && !newUserInfo.password) return alert('아이디 비밀번호를 입력하세요!');
        if(checkUser.length) return alert('중복된 아이디 입니다!');
        setUserData([...userData,newUserInfo]);
    
    }
    return(
        <container>
            <div>
                <input type="text" placeholder="아이디" onChange={newUser('id')}/>
            </div>
            <div>
                <input type="password" placeholder="비밀번호" onChange={newUser('password')}/>
            </div>
            <button onClick={joinBtn}>가입ㄱㄱ</button>
            <button onClick={ () => navigate('/login')}>로그인페이지로</button>
            <button onClick={() => console.log(userData)}>클릭해보샘</button>
        </container>
    )
}

export  default SignUP;