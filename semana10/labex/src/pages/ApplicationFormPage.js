import React from "react"
import { useHistory } from "react-router"

export const ApplicationFormPage = () => {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    return (
        <div>
            <p>Aplicando para vaga
            </p>
            <br></br>
            <h1>Inscrever-se para uma viagem</h1>
            <iframe
                src="https://giphy.com/embed/l0HlHLCqPLdy4ZGmI"
                width="480"
                height="350"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <p>
                <button onClick={goToHome}>Voltar para Home</button>
                <button>Inscrever</button>
            
            </p>
        </div>
    )
}