import React, { useEffect, useState } from "react";
import userData from "./data";
import { useNavigate,useLocation } from "react-router-dom";
import { AccountInput, SignUpContainer } from "./LoginsStyle";
import axios from "axios";


const Finish = () => {

}

const SignUP = ({setUserData}) => {
    const navigate = useNavigate();
    const [userPassword , setUserPassword] = useState({password : '',repassword : ''})
    const [newUserInfo , setNewUserInfo] = useState({ // 회원가입 페이지 아이디, 비번 입력 값  갱신
        id : '', 
        password : '',
    });
    const[failedMsg , setFailedMsg] = useState('');
    const[pwCheckMsg , setPwCheckMsg] = useState('');
    const[successMsg, setSuccessMsg] = useState('');

    const newUser = (key) => (e) => { //회원가입 페이지 아이디, 비번 입력 값 받아오기
        if(key === 'id')  setNewUserInfo({...newUserInfo, [key] : e.target.value });
        setUserPassword({...userPassword,[key] : e.target.value})
    }

    // 기존 userData 의 id 값과 중복여부 체크 , 빈칸 입력시 경고, 비밀번호체크 , 제대로 입력했을 경우 회원데이터에 추가
    const createNewUser = () => {
        let password = userPassword.password

        if(!newUserInfo.id || !password) return alert('아이디 비밀번호를 입력하세요!'); //빈칸시 
      
        password !== userPassword.repassword ? alert('비밀번호를 확인하세요!') : // 비밀번호 다를시1
        setNewUserInfo({...newUserInfo, password}) // 같으면 서버로 값 넘겨준다.
       
        axios.post('http://localhost:4848/login',{...newUserInfo})
        .then(res => {
            setSuccessMsg(res.data)
            
        })
        .catch(err => setFailedMsg(err.response.data) )
    }
    useEffect( () => {
        console.log('새로고침ㅋ')
    },[successMsg])

    const [inputText, setInputText] = useState("");
    const onChangeInput = e => {
      setInputText(e.target.value);
    };
    const onReset = () => {
      setInputText("");
    };
    
    return(
        <> 
            <SignUpContainer>
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
                    <AccountInput>
                        <input  type="password" onChange={newUser('repassword')} required/>
                        <label for="pw">비밀번호 확인</label>
                        <span className="input_msg">{userPassword.password !== userPassword.repassword ? '비밀번호를 확인해주세요!' : '' }</span>
                        
                    </AccountInput>
                    <div className="success">{successMsg}</div>
                    <button className="join_btn" onClick={createNewUser}>가입하기</button>
                    
                    <div className="move_login" onClick={ () => navigate('/login')}>로그인하기</div>
                </div>
            </SignUpContainer>
        </>
    )
}

export  default SignUP;