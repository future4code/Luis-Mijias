
import axios from "axios"
import React, { useEffect } from "react"
import { useHistory } from "react-router"


const useProtectedPage = () => {
    const history = useHistory()

    useEffect (() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            console.log("Você nao está logado!!")
            history.push('/login')
        }
    },[])
}

export const TripDetailsPage = () => {

    const history = useHistory()
    const goToHomePage = () => {
        history.push("/")
    }
    useProtectedPage()

    useEffect(() =>{
        const token = localStorage.getItem("token")
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/0aQ9retlt9zxpeo40G2M",{
            headers: {
                auth: "token"

            }
        })
        .then((response) => {
            console.log("Deu certo",response.data)
           

        })
        .catch((error) => {
            console.log("Deu erro:",error.response)
        })

    },[])
    return (
        <div>
            <h1>Detalhes da Viagem </h1>
            <br></br>
            <p>Detalhes da viagem LabeX</p>

            <iframe src="https://giphy.com/embed/amBRT2aistuOKDaoJM"
                width="384"
                height="480"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <br></br>
            <button onClick={goToHomePage}>Sair</button>
            <p>
         
            </p>
        </div>
    )
}