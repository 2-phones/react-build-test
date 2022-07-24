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
        margin: 50px;
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
        .input_msg{
            position:absolute;
            left: 10px;
            top : 95px;
            color: red;
            font-size: 13px;
        }
        label {
            position: absolute;
            left : 0px;
            top : 35px;
            color : #999;
            transition : all 0.5s ease;
        }
        
        input:focus + label {
            top : 40px;
            font-size : 13px;
            color: blue;
        }
        input:focus {
            border-bottom: 1px solid blue;
        }
       
        
        /* input:valid + label::before {
            content: '✓';
            color: green;
} */
   
`


export {AccountInput , Container, }