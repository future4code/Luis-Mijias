import React from 'react'
import logo from '../../assets/logo.png'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { LogoImage, ScreenContainer } from '../LoginPage/style'
import SignUpForm from "./SignUpform"



const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (        
        <ScreenContainer>
            <h1>Página de Cadastro</h1>
            <LogoImage src={logo} />
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage