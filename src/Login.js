import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import userData from "./data";
import { LoginContainer,Logininput,LoginModal } from "./LoginsStyle";




const Login = ({userDatas}) => {
    const [userInfo, setUserInfo ] = useState({
        id : '',
        password : '',
    });
    const [isLogin , setIsLogin] = useState(false);
    const idInputCheck = (key) => (e) => {
        setUserInfo({...userInfo, [key]: e.target.value});
    };
    const enterCheck = (e) => {
        if(e.key === 'Enter') return btnClick()
    }
    
// 함수내용 : 로그인 인풋이 빈값인경우 와 유저 데이터의 정보와 맞지않는경우 경고 모달, 로그인 인풋값 과 유저 데이터 맞을시 성공
    const btnClick = (e) => { 
        const checkUser = userDatas.filter( (user) => user.id === userInfo.id && user.password === userInfo.password);
        console.log(checkUser)
        if(!userInfo.id || !userInfo.password ) return alert('please id & password enter!')
        if(!checkUser.length) return alert('아이디 비번 확인하샘!');
        return setIsLogin(!isLogin)
       
    };
   
    return (
        <>
        {!isLogin ? <LoginUi idInputCheck={idInputCheck} enterCheck = {enterCheck}  btnClick={btnClick} /> 
        : <Loggedin/> }

        </>
    )
}



const LoginUi = ({idInputCheck, btnClick , enterCheck }) => {
    const navigate = useNavigate();
    return  (
        <LoginContainer>
            <LoginModal>
                <div className="login_modal">
                <h2>로그인</h2>
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
                    onKeyPress={enterCheck}
                    required
                    />
                    <label for="id">USER PW</label>
                </div>
                </Logininput>
                <ul className="userInfo_box">
                    <li className="userInfo_searcht"><input type="checkBox"/> 로그인유지</li>
                    <li className="userInfo_searcht">ID/PW 찾기</li>
                    <li  className="userInfo_join" onClick= { () => navigate('/signup' ) }> 회원가입</li>
                </ul>
                <div className="login">
                    <button className="login-Btn"onClick={btnClick }>로그인</button>
                    <button className="social_Login">
                        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                        <span className="brand"> Google Login </span>
                    </button>
                    <button className="social_Login">
                        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                        <sapn className="brand">Naver Loign</sapn>
                    </button>
                    <button className="social_Login">
                        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                        <sapn className="brand">Instagram Login</sapn> 
                    </button>
                    <button className="social_Login">
                        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                        <sapn className="brand">Kakao Login</sapn> 
                    </button>
                </div>
                </div>
            </LoginModal>
        </LoginContainer>
    )
}

const Loggedin = () => {
    return(
        <LoginContainer>
            <LoginModal>
                <h2>로그인 완료 되었습니다!</h2>
            </LoginModal>
        </LoginContainer>
    )
}




export default Login