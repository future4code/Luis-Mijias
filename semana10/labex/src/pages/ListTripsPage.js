import React from "react"
import { useHistory } from "react-router"

export const ListTripsPage = () => {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    const goToApplicationFormPage = () => {
        history.push("/application")
    }
    return (
        <div>
            <p>Tela de Viagems </p>
            <br></br>
            <h1>Viagens LabeX</h1>
            <iframe
                src="https://giphy.com/embed/7vQZanyufdRe0"
                width="480"
                height="356"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <p>
            
            </p>
            <iframe
                src="https://giphy.com/embed/3o6gDUsnPH5wwhdASQ"
                width="480"
                height="480"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <p>
                <button onClick={goToHome}>Voltar para home</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
          
            </p>
        </div>
    )
}