import React, {useRef, useState} from 'react';
import {Button,Modal, Form} from "react-bootstrap";
import '../App.css'
import './login.css'
import {useNavigate} from 'react-router-dom';

import { signup, login, logout, isLoggedIn } from "../DataModel";

function LogIn() {
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();


    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/home')
            setLoading(false);
        } catch {
            alert("Error Loggin in!");
        }
    }

    async function handleLogout() {
        setLoading(true);
        await logout();
        setLoading(false);
    }


    return (
        <div className="contain">
            <div className="LoginForm">
                <div className="LoginContainer">

                        <div className="fields">
                            <div className="labelInput"><text >用户名</text></div>

                        <input className="inputField" ref={emailRef} placeholder="邮箱" />
                        </div>
                    <div className="fields">
                        <div className="labelInput"><text>密码</text></div>

                        <input className="inputField" ref={passwordRef} type="password" placeholder="密码" />
                    </div>


            <div className="buttonDiv">
                <button onClick={handleLogin}>Log In</button>
                {/*<button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>*/}
                {/*<div>Currently logged in as: { currentUser?.email } </div>*/}
            </div>
                </div>
            </div>
        // </div>
    );
}

export default LogIn;
