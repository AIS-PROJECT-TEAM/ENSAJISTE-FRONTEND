import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import "../styles/Login.css";
import {HiOutlineMail,HiOutlineIdentification} from "react-icons/hi";
import {RiLockPasswordLine} from "react-icons/ri";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {


    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useNavigate();
    const { login , setUser} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        if(emailRef.current.value === ""){
            console.log("email is null")
            return;
        }

        if(passwordRef.current.value === ""){
            console.log("password is null")
            return;
        }

        var formData = new FormData();
        formData.append("email", emailRef.current.value);
        formData.append("password", passwordRef.current.value);

        const response = await login(formData);
        if(response.error){
            // handle error
        }else {
            var user = response.user;
            console.log(user);
            var role = user.roles[0].name;
            if(role === "Admin"){
                console.log("admin hh")
                history("/admin")
            }else if(role === "Student"){
                console.log("student hh")
                history("/student")
            }else if(role === "User"){
                console.log("user hh")
                history("user")
            }
            setUser(user);
        }


    }

    return (
        <div className="lbody">
        <div className="containerr">
        <div className="formss">
            <div className="form login">
                <span className="title">Login</span>

                <form action="#">
                    <div className="input-field">
               
          <HiOutlineMail/> 
            <input
              type="text"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
         
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                   < RiLockPasswordLine/><input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            
            />
                    </div>
                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label for="logCheck" class="text">Remember me</label>
                        </div>
                        
                        <a href="#" className="text">Forgot password?</a>
                    </div>

                    <div className="input-field button">
                        <input type="button" onClick={handleLogin} value="Submit"/>
                        
                    </div>
                </form>

                <div className="login-signup">
                    <span className="text">Not a member ?
                        <a href="./Register" class="text signup-link"> Sign Up</a>
                    </span>
                </div>
            </div></div></div></div>
            
    ) 
}



