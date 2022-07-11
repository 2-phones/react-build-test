import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import user from "./data";


const Login = () => {
    const [userID, setUserID ] = useState('');
    const [userPW, setUserPW ] = useState('');

    const idInputCheck = (i) => {
        const inputID = i.target.value;
        setUserID(inputID);
    };

    const pwInputCheck = (pw) => {
        const inputPW = pw.target.value;
        setUserPW(inputPW);
    };

// 함수내용 : 아이디,비번 값이 다 입력된경우? user.map 조건문 실행 , 하나라도 입력안된경우 ? id미입력시 id입력 모달, pw미입력시 pw 입력모달 
    const btnClick = () => { 

        userID && userPW ? (user.map(el => {
            el.id === userID && el.pw === userPW ? alert('성공') : 
            ( el.id === userID ? alert('비밀번호를 확인해주세요!') : alert('존재하지 않는 아이디입니다!') ); }))
        : ( userID ? alert('비밀번호를 입력하세요!') : alert('아이디를 입력하세요!'));
        console.log(user);
       
    };
   
    return (
        <>
            <LoginUi 
            idInputCheck={idInputCheck} 
            pwInputCheck={pwInputCheck} 
            btnClick={btnClick} />
        </>
    )
}



const LoginUi = ({idInputCheck, pwInputCheck, btnClick}) => {
    const navigate = useNavigate();
    return  (
        <container>
        <h3>로그인</h3>
        <div className="id-pw">
            <input 
            id="idInput" 
            type="text" 
            onChange={idInputCheck}
            placeholder="아이디를 입력하세요"/>
            <label for="id">Your ID</label>
        </div>
        <div className="id-pw">
            <input 
            id="pwInput" 
            type="password" 
            onChange={pwInputCheck}
            placeholder="비밀번호를 입력하세요"/>
            <label for="id">Your PW</label>
        </div>
        <div className="login-btn">
            <button 
            className="login-Btn" 
            onClick={btnClick }
            >로그인</button>
        </div>
        <div className="signup-idpwserach">
            <button onClick={ () => navigate("/signup")} >회원가입</button>
            <div>id/pw찾기</div>
        </div>
        <div className="social-Login">
            <button className="social-Login google">
                <span><FontAwesomeIcon icon={faGoogle} /></span>
                <span> Google Login </span>
            </button>
            <button className="social-Login naver">
                Naver Loign
            </button>
            <button className="social-Login instagram">
                <FontAwesomeIcon icon={faInstagram} /> Instagram Login
            </button>
            <button className="social-Login kakao">
                Kakao Login
            </button>
        </div>
    </container>
    )
}

export default Login