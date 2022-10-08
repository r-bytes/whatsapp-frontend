import React from 'react'
import styled from "styled-components"
import { Button } from "@material-ui/core"

const Login = () => {
    const signIn = () => {

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
                    type="submit"
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

`

const LoginContainer = styled.div`

`

const LoginText = styled.div`

`

const LoginButton = styled(Button)`

`