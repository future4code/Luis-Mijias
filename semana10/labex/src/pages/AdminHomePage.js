
import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const useProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token === null) {
      console.log("Você não está logado!")
      history.push("/login")
    }
  }, []);
};

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
    const goToTripDetailsPage = () => {
        history.push("/details")
    }

  useProtectedPage()



  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC",
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response)
      });
  }, []);
  return(
   <div>
            <p>Bem vindo a tela de Adminstrador</p>
            <br></br>
            <h1>Tela Admin</h1>
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
                <button onClick={goToTripDetailsPage}>Detalhe das Viagens</button>
            </p>

   </div>)
}






