import React from 'react'
import logo from '../../assets/logo.png'
import { LogoImage, ScreenContainer } from '../LoginPage/style'
import SignUpForm from "./SignUpform"



const SignUpPage = () => {
    return (
        <ScreenContainer>
            <h1>Página de Cadastro</h1>
            <LogoImage src={logo} />
            <SignUpForm />
        </ScreenContainer>
    )
}

export default SignUpPage