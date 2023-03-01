import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
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

            alert(JSON.stringify(response))
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
        <MyContainer>
            <h1>Login</h1>
            <Form className="login">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Entrez l'email..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>
        </MyContainer>
    )
}


const MyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    height: 100vh;
    .login {
        width: clamp(300px, 400px, 60vw);
    }
`
