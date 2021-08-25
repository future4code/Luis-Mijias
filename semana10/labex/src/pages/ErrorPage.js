import React from "react"
import { useHistory } from "react-router"

export const ErrorPage = () => {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    return (
        <div>
            <p>Escreveu algo errado na URL favor conferir </p>
            <br></br>
            <h1>Error Page</h1>
            <iframe
                src="https://giphy.com/embed/TqiwHbFBaZ4ti"
                width="480"
                height="480"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <p>
             <button onClick={goToHome}>Ir para Home</button>
            </p>
        </div>
    )
}