import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import userData from "./data";



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
        <container>
        <h3>로그인</h3>
        <div className="id-pw">
            <input 
            id="idInput" 
            type="text" 
            onChange={idInputCheck('id')}
            placeholder="아이디를 입력하세요"/>
            <label for="id">Your ID</label>
        </div>
        <div className="id-pw">
            <input 
            id="pwInput" 
            type="password" 
            onChange={idInputCheck('password')}
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
            <button onClick= { () => navigate('/signup' ) }> 회원가입</button>
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

const SignUP = ({setUserData}) => {
    const navigate = useNavigate();
    const [newUserInfo , setNewUserInfo] = useState({
        id : '', 
        password : '',
    });

    const newUser = (key) => (e) => {
        setNewUserInfo({...newUserInfo, [key] : e.target.value });
    }

    const joinBtn = () => {
        const checkUser = userData.filter( (user) => user.id === newUserInfo.id);
        console.log(checkUser)
        if(!newUserInfo.id && !newUserInfo.password) return alert('아이디 비밀번호를 입력하세요!');
        if(checkUser.length) return alert('중복된 아이디 입니다!')
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


export default Login