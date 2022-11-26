import React, {useState} from 'react';
import './css/Login.css';
import {Link} from "react-router-dom";
import {auth} from "../firebase";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <img className='login_logo'
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"
                    alt=""/>
            </Link>

            <div className="login_container">
                <h1> 로그인 </h1>

                <form>
                    <h5> 이메일 </h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                    <h5> 비밀번호 </h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>

                    <button onClick={signIn} className="login_signInButton"> 로그인 </button>
                </form>

                <p> 회원가입을 하시면 개인정보 사용에 대해...... </p>

                <button onClick={register} className="login_registerButton"> 회원가입하기 </button>
            </div>

        </div>
    );
}