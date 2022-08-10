import React from "react";
import styled from "styled-components";

/// 회원가입 sytle
const SignUpContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 50px;
    h1{
        margin-top : 40px;
    }
    .acc_modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 650px;
        height: 650px;
        border: solid 1px black;
    }
    .join_btn{
        width: 450px;
        height: 40px;
        background: black;
        color : #ffffff;
        margin-bottom: 30px;
        font-size:15px;
        border-radius : 15px;
        cursor: pointer;
    }
    .input_msg{
            position: absolute;
            left : 10px;
            top: 95px;
            color: red;
            font-size: 13px;
        }
    .success {
        margin : 30px;
        color: green;
    }
    .move_login{
        cursor: pointer;
    }
    
  
`

const AccountInput = styled.div`
position: relative;

    input{
            width: 450px;
            height: 40px;
            margin-top: 50px;
            outline: none;
            border:none;
            border-bottom: 1px solid #999;
        }
        
        label {
            position: absolute;
            left : 0px;
            top : 55px;
            color : #999;
            transition : all 0.5s ease;
        }
       
        
        input:focus + label,
        input:valid + label {
            top : 40px;
            font-size : 13px;
            color: steelblue;
        }
    
        /* input:invalid {
            border-bottom: 2px solid red;
        } */
        
        /* input:invalid + label {
            color: red;
        } */
   
`

// Login style

const LoginContainer = styled.div`
    display:flex;
    justify-content: center;
    margin : 50px;
`
const LoginModal = styled.div`

        border: 1px solid black;
        width : 600px;
        height : 650px;

    .userInfo_box {
        display:flex;
        justify-content : space-evenly;
        list-style: none;
        margin-right : 50px;
        cursor: pointer;
    } 

    button {
        width : 360px;
        height : 35px;
        margin : 15px;
        border-radius : 15px;
        font-size : 18px;
        cursor: pointer;
    }
    .social_Login {
        display:flex;
        flex-direction : column;
        align-items : center;
    }
    .login-Btn {
        background : black;
        color : #ffffff;
    }
`


const Logininput = styled.div`
    position: relative;

     input {
        width : 360px;
        height : 30px;
        margin : 20px;
        outline : none;
        border: none;
        border-bottom : 1px solid ;
        font-size : 15px;
    }

    label {
            position: absolute;
            left : 20%;
            top : 25px;
            color : #999;
            transition : all 0.5s ease;
        }

    input:focus + label,
    input:valid + label {
            top : 5px;
            font-size : 13px;
            color: steelblue;
        }


`

const FinishModal = styled.div`
    
`


export {AccountInput , SignUpContainer, LoginContainer , Logininput ,  LoginModal, }