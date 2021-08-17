import React from "react"
import { useHistory } from "react-router-dom"

export const AdminHomePage = () => {
    const history = useHistory()
    const gotoHomePage = () => {
        history.push("/")
    }
    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToCreateTripPage = () => {
        history.push("/createtrip")
    }

    return (
        <div>
            <p>Tela AdminHomePage</p>
            <br></br>
            <h1>Admin</h1>
            <iframe src="https://giphy.com/embed/NJC2AVN5Zqoqcf6gxn"
                width="480"
                height="397"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
            >
            </iframe>
            <p>
                <button onClick = {gotoHomePage}>Voltar para Home</button>
                <button onClick={goToLoginPage}>Log-out</button>
                <button onClick={goToCreateTripPage}>Criar Viagem</button>
            </p>

        </div>
    )
}