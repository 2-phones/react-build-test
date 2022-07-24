import React, { useState } from "react";
import userData from "./data";
import { useNavigate,useLocation } from "react-router-dom";
import { AccountInput, Container } from "./LoginsStyle";
import axios from "axios";


const SignUP = ({setUserData}) => {
    const navigate = useNavigate();
    const [newUserInfo , setNewUserInfo] = useState({ // 회원가입 페이지 아이디, 비번 입력 값  갱신
        id : '', 
        password : '',
    });
    const[failedMsg , setFailedMsg] = useState('');
    const[successMsg, setSuccessMsg] = useState('');

    const newUser = (key) => (e) => { //회원가입 페이지 아이디, 비번 입력 값 받아오기
        setNewUserInfo({...newUserInfo, [key] : e.target.value });
    }

    // 기존 userData 의 id 값과 중복여부 체크 , 빈칸 입력시 경고, 제대로 입력했을 경우 회원데이터에 추가
    const createNewUser = () => {
        
        // const checkUser = userData.filter( (user) => user.id === newUserInfo.id);
        // console.log(checkUser)
        // setNewUserInfo('');
        // if(!newUserInfo.id && !newUserInfo.password) return alert('아이디 비밀번호를 입력하세요!');
        // if(checkUser.length) return alert('중복된 아이디 입니다!');
        // setUserData([...userData,newUserInfo]);
        // setNewUserInfo({id: '' , password : ''})
        console.log(newUserInfo)
        axios.post('http://localhost:4848/login',{...newUserInfo})
        .then(res => setSuccessMsg(res.data))
        .catch(err => setFailedMsg(err.response.data) )
        
    }

    const [inputText, setInputText] = useState("");
    const onChangeInput = e => {
      setInputText(e.target.value);
    };
    const onReset = () => {
      setInputText("");
    };
    
    return(
        <> 
            <Container>
                <div className="acc_modal">
                    <h1>회원가입</h1>
                    <AccountInput>
                        <input type="text" onChange={newUser('id')} required/>
                        <label for='id'>아이디</label>
                        <span className="input_msg">{failedMsg}</span>
                    </AccountInput>
                    <AccountInput>
                        <input  type="password" onChange={newUser('password')} required/>
                        <label for="pw">비밀번호</label>
                    </AccountInput>
                    <div className="success">{successMsg}</div>
                    <button className="join_btn" onClick={createNewUser}>가입하기</button>
                    
                    <div className="move_login" onClick={ () => navigate('/login')}>로그인하기</div>
                </div>
            </Container>
        </>
    )
}

export  default SignUP;