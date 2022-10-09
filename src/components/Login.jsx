import React from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { GoogleButton } from "react-google-button"
import { UserAuth } from "../context/AuthContext";


const Login = () => {
    const { googleSignIn } = UserAuth()
    
    const signIn = async () => {
        try {
            await googleSignIn()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LoginWrapper>
            <LoginContainer>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="whatsapp" 
                />
                <LoginText>
                    <h1> Sign in to WhatsApp </h1>
                </LoginText>
                <LoginButton
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </LoginContainer>
        </LoginWrapper>
    )
}

export default Login

const LoginWrapper = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`

const LoginContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 1px 3px;

    & img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
`

const LoginText = styled.div`

`

const LoginButton = styled(GoogleButton)`
    margin: 0 auto;
    margin-top: 50px;
` 