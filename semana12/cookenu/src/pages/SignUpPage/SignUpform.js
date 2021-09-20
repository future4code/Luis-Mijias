import React, {useState} from "react"
import { Button, TextField } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { InputsContainer , SignUpFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import { signUP } from "../../services/user"
import { CircularProgress } from "@material-ui/core"


const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
       signUP(form, clear, history, setRightButtonText, setIsLoading)
    }


    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                    value={form.name}
                    name={'name'}
                    onChange={onChange}
                    label={'Nome'}
                    variant={'outlined'}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}
                    />
                    <TextField
                    value={form.email}
                    name={'email'}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    type={'email'}
                    fullWidth
                    required
                    margin={'normal'}                    
                    />
                    <TextField
                    value={form.password}
                    name={'password'}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    type={'password'}
                    fullWidth
                    required
                    margin={'normal'}                    
                    />
                    <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                    >
                        {isLoading? <CircularProgress
                        color={"inherit"}
                        size={24}
                        /> : <>Fazer Cadastro</> }
                    </Button>
                
                </InputsContainer>
            </SignUpFormContainer>

        </form>
    )
}

export default SignUpForm