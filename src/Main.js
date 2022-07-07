import React from "react";
import styled from "styled-components";
import {LoginStr,Container,LoginModal,IDPWinput,LoginBtn} from './style.js';



const Main = () => {
return(
    <Container>
        <LoginModal>
            <LoginStr>
               로그인
            </LoginStr>
            <IDPWinput id="idinput" type="text" placeholder=" 아이디를 입력하세요"/>
            <IDPWinput id="pwinput" type='password' placeholder=" 비밀번호를 입력하세요"/>
            <LoginBtn>로그인</LoginBtn>
        </LoginModal>
    </Container>
)
}

export default Main;