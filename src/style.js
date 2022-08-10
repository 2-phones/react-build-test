import React from "react";
import styled from "styled-components";

const LoginStr = styled.h3`
    
`

const Container = styled.div`
    display :flex;
    justify-content:center;
    align-items: center;
`;

const LoginModal = styled.div`
    width : 500px;
    height : 600px;
    border: 1px solid black
`;

const IDPWinput = styled.input`
    width : 80%;
    height : 40px;
    border-radius : 10px;
    font-size : 20px;
    padding-left : 10px;
    &#pwinput{
        margin-top : 20px;
    };
`;

const LoginBtn = styled.button`
    width : 100%;
    height : 70%;
    border : 0;
    background : #ffffff;
    display :flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
> Button { 
    width : 80%;
    height : 50px;
    margin-top : 15px;
    background : ${ props => props.color ? props.color : '#ffffff'};
    color : black;
    font-size: 20px;
    border-radius: 20px;
    cursor : pointer;
   }
   .login-Btn {
       margin-top : 0px;
       margin-bottom : 60px;
       background : black;
       color : #ffffff;
   }
   > .social-Login {

   }
   > Button:active{
    background : #e8eaf6;
   }
`
const SocialLogin = styled(LoginBtn)`
    background : #ffffff;
    > :nth-child(1) {
        margin-top : 25px;
    }
`



export {LoginStr,Container,LoginModal,IDPWinput,LoginBtn,SocialLogin,}