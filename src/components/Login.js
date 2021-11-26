import React, {useRef, useState} from 'react';
import {Button,Modal, Form} from "react-bootstrap";
import '../App.css'
import './login.css'
import {useNavigate} from 'react-router-dom';

import { signup, login, logout, useAuth } from "../DataModel";

function LogIn() {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
    const navigate = useNavigate();


    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        setLoading(true);
        // try {
        //     await login(emailRef.current.value, passwordRef.current.value);
        // } catch {
        //     alert("Error!");
        // }
        setLoading(false);
        await login(emailRef.current.value, passwordRef.current.value);

        navigate('/home');


    }

    async function handleLogout() {
        setLoading(true);
        // try {
        //     await logout();
        // } catch {
        //     alert("Error!");
        // }
        await logout();
        setLoading(false);
    }

// function Login(){
//     // const [email, setEmail] = useState('')
//     // const [pass, setPass] = useState('')
//     // const [sucess,setSucess] = useState(false)
//     const [ loading, setLoading ] = useState(false);
//
//     const email = useRef();
//     const pass = useRef();
//     const navigate = useNavigate();
//
//
//     const currentUser = useAuth();
//
//
//     const handleLogin = async ()=>{
//         setLoading(true);
//         try {
//             await LogInApp(email.current.value, pass.current.value);
//         } catch {
//             alert("Error!");
//         }
//         setLoading(false);
//         }
//
//     async function handleLogout() {
//         setLoading(true);
//         try {
//             await logout();
//         } catch {
//             alert("Error!");
//         }
//         setLoading(false);
//     }
//
//     return(
//         <div className="container">
//             <div className="LoginForm">
//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>邮箱</Form.Label>
//                     <Form.Control
//                         type="email"
//                         placeholder="输入邮箱"
//                         className="loginInputCell"
//                         ref={email}
//                         // onChange={(e)=> setEmail(e.target.value)}
//                     />
//                     {/*<Form.Text className="text-muted">*/}
//                     {/*    We'll never share your email with anyone else.*/}
//                     {/*</Form.Text>*/}
//                 </Form.Group>
//
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>密码</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="输入密码"
//                         ref={pass}
//                     />
//                 </Form.Group>
//                 <div>Currently logged in as: { currentUser?.email } </div>
//
//                 <Button center variant="primary" type="submit" onClick={handleLogin}>
//                     登陆
//                 </Button>
//                 <Button center variant="primary" type="submit" onClick={handleLogout}>
//                     退出
//                 </Button>
//                 <div>Currently logged in as: { currentUser?.email } </div>
//
//             </Form>
//             </div>
//         </div>
//     )
// }

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
                <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
                {/*<button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>*/}
                {/*<div>Currently logged in as: { currentUser?.email } </div>*/}
            </div>
                </div>
            </div>
        // </div>
    );
}

export default LogIn;
