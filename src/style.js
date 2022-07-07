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
    height : 50px;
    border-radius : 10px;
    &#pwinput{
        margin-top : 20px;
    };
`;

const LoginBtn = styled.button`
    width : 80%;
    height : 50px;
    margin-top : 30px;
    background : black;
    color : #ffff;
    border-radius: 20px;
`


export {LoginStr,Container,LoginModal,IDPWinput,LoginBtn}