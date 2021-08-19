import React from "react"
import { useHistory } from "react-router"
import useForm from "../hooks/useForm"

export const ApplicationFormPage = () => {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }

    const cadastrar = () => {
        console.log("Formulário enviado!")

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
            <form onSubmit={cadastrar}>
                <br />
                <br />
                <input
                    placeholder="Escolha uma Viagem"
                />
                <br />
                <br />
                <input
                    placeholder="Nome"
                />
                <br />
                <br />
                <input
                    placeholder="Idade"
                />
                <br />
                <br />
                <input
                    placeholder="Texto de Candidatura"
                />
                <br />
                <br />
                <input
                    placeholder="Profissão"
                    
                />
                <br />
                <br />
                <input
                    placeholder="Escolha um País"
                    
                />
                <br/>
                <br/>
                <button>Inscrever-se</button>
                <br />
            </form>

            <br />
            <br />
            <br />
            <br />
            <button onClick={goToHome}>Voltar para Home</button>
        </div>
    )
}