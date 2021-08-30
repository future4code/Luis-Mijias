import React from 'react'
import { LogoImage, ScreenContainer,  InputsContainer, SignUpButtonContainer } from './style'
import logo from "../../assets/logo.png"
import { Button, OutlinedInput, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import {goToSignUp} from '../../routes/coodinator'

const LoginPage = () => {
    const history = useHistory()
    

    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
            <SignUpButtonContainer>
                <Button
                onClick={() => goToSignUp(history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
                >ou cadastre-se aqui !!!
                </Button>
            </SignUpButtonContainer>
            
        </ScreenContainer>
    )
}

export default LoginPage