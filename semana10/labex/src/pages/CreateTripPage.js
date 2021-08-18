import React from "react"
import { useHistory } from "react-router"
export const CreateTripPage = () => {
    
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }

    return (
        <div>
             <p>Tela Criando Viagens </p>
            <br></br>
            <h1>Criando viagens LabeX</h1>
            <iframe
                src="https://giphy.com/embed/Ezq0m2bkVnLBS"
                width="480"
                height="314"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <p>
                <button>Criar</button>
                <button onClick={goToHome}>Voltar para home</button>
            
            </p>
        </div>
    )
}