import React, { useState } from 'react';
import { authService, firebaseInstance } from 'fbase';

const Auth = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [newAccount, setNewAccount] = useState("false");
const [error, setError] = useState("");

const onChange = (event) => { //입력칸에 무언가를 입력했을 때 일어날 일
    const {target: {name, value}} = event //event로부터 (target) name, value를 가져온다
    if(name === "email"){
        setEmail(value);
    }else if(name === "password"){
        setPassword(value);
    }
}
const onSubmit = async(event) => { //버튼 눌렀을 때 일어날 일
    event.preventDefault();
    try {
        let data;
        if (newAccount) {
            // create new account
            data = await authService.createUserWithEmailAndPassword(email, password)
        }else {
            // log in
            data = await authService.signInWithEmailAndPassword(email, password)
        }
        console.log(data);
    }catch(error){
        setError(error.message);
    }
};
const toggleAccount = () => setNewAccount((prev) => !prev); //로그인 페이지에서 회원가입 페이지로 바뀜

    return ( 
        <div>
        <form onSubmit={onSubmit}>
            <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Password" required password={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
             {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
    </div>
    )
}

export default Auth;