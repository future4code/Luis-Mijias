import { Button, TextField } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { InputsContainer , SignUpFormContainer } from './styled'
import useForm from '../../hooks/useForm'

const SignUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', password: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
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
                        Fazer Cadastro
                    </Button>
                
                </InputsContainer>
            </SignUpFormContainer>

        </form>
    )
}

export default SignUpForm