import React from "react";
import styled from "styled-components";
import {LoginStr,Container,LoginModal,IDPWinput,LoginBtn,SocialLogin} from './style.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
return(
    <Container>
        <LoginModal>
            <LoginStr>
               로그인
            </LoginStr>
            <IDPWinput id="idinput" type="text" placeholder=" 아이디를 입력하세요"/>
            <IDPWinput id="pwinput" type='password' placeholder=" 비밀번호를 입력하세요"/>
            <LoginBtn>
                <button className="login-Btn">로그인</button>
               
                <button className="social-Login google">
                <span><FontAwesomeIcon icon={faGoogle} /></span>
                <span> Google Login </span>
                </button>
                <button className="social-Login naver">Naver Loign</button>
                <button className="social-Login instagram">
                <FontAwesomeIcon icon={faInstagram} /> Instagram Login
                    </button>
                <button className="social-Login kakao">Kakao Login</button>
            </LoginBtn>
        </LoginModal>
    </Container>
)
}

export default Main;