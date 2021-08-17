import React from "react"
import { useHistory } from "react-router"

export const HomePage = () => {
    const history = useHistory ()

    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToListTripsPage = () => {
        history.push("/trips")
        }
    
    return (
        <div>
            <p>Tela HomePage </p>
            <br></br>
            <h1>HomePage LabeX</h1>
            <iframe src="https://giphy.com/embed/5xtDarqCp0eomZaFJW8"
                width="480"
                height="360"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
            >
            </iframe>
            <p>
           <button onClick={goToListTripsPage}>Ver Viagens</button>
           <button onClick={goToLoginPage}>Login Admin</button>
            </p>
        </div>
    )
}