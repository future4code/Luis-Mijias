import React from "react"
import { useHistory } from "react-router"

export const LoginPage = () => {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    const goToAdminHomePage = () => {
        history.push("/adminhome")
    }
    return (
        <div>
            <p>Tela Login</p>
            <br></br>
            <h1>Login</h1>
            <iframe src="https://giphy.com/embed/YkIWPijxvxSxWrRzux"
                width="480"
                height="270"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <p>
            <button onClick={goToHome}>Voltar para Home</button>
            <button onClick={goToAdminHomePage}>Logar</button>
           
            </p>
        </div>
    )
}