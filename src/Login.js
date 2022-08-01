import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import userData from "./data";
import { LoginContainer,Logininput } from "./LoginsStyle";



const Login = ({userDatas}) => {
    const [userInfo, setUserInfo ] = useState({
        id : '',
        password : '',
    });
  

    const idInputCheck = (key) => (e) => {
        setUserInfo({...userInfo, [key]: e.target.value});
    };
    
// 함수내용 : 로그인 인풋이 빈값인경우 와 유저 데이터의 정보와 맞지않는경우 경고 모달, 로그인 인풋값 과 유저 데이터 맞을시 성공
    const btnClick = () => { 
        const checkUser = userDatas.filter( (user) => user.id === userInfo.id && user.password === userInfo.password);
        console.log(checkUser)
        if(!userInfo.id || !userInfo.password ) return alert('please id & password enter!')
        if(!checkUser.length) return alert('아이디 비번 확인하샘!');
        
        return alert('성공');
       
    };
   
    return (
        <>
            <LoginUi 
            idInputCheck={idInputCheck} 
            btnClick={btnClick} 
            />
        </>
    )
}



const LoginUi = ({idInputCheck, btnClick }) => {
    const navigate = useNavigate();
    return  (
        <LoginContainer>
        <div className="login_modal">
        <h3>로그인</h3>
        <Logininput>
        <div className="id_pw">
            <input 
            id="idInput" 
            type="text" 
            onChange={idInputCheck('id')}
            required
            />
            <label for="id">USER ID</label>
        </div>
        </Logininput>
        <Logininput>
        <div className="id_pw">
            <input 
            id="pwInput" 
            type="password" 
            onChange={idInputCheck('password')}
            required
            />
            <label for="id">USER PW</label>
        </div>
        </Logininput>
        <div className="login-btn">
            <button 
            className="login-Btn" 
            onClick={btnClick }
            >로그인</button>
        </div>
        <div className="signup_idpwserach">
            <button onClick= { () => navigate('/signup' ) }> 회원가입</button>
            <div>id/pw찾기</div>
        </div>
        <div className="social_Login">
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
        </div>
    </LoginContainer>
    )
}




export default Login