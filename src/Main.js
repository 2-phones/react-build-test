import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import userData from "./data";


const Main = () => {
    const navigate = useNavigate();
  
    return(

        <container>
            <Nav navigate={navigate}/>
            <div>zzzz</div>
        </container>
   
   )}

const Style = styled.div`
    padding : 25px;
    .logingo{
        font-size : 35px;
        cursor : pointer;
    };
`

const Nav = ({navigate}) => {
    return(
        <div className="nav-menu">
            <Style>
            <div className="logingo" 
            onClick={ (e) => {e.stopPropagation(); navigate('/login')} }>로그인하기</div>
            </Style>
        </div>

    )}

export default Main