import React from "react";
import styled from "styled-components";


const Container = styled.div`
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
        margin-bottom: 80px;
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
        margin : 50px;
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
    
        input:invalid {
            border-bottom: 2px solid red;
        }
        
        input:invalid + label {
            color: red;
        }
   
`


export {AccountInput , Container, }