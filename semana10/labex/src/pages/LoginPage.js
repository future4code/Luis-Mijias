import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  

  const history = useHistory()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const onSubmitLogin = (event) => {
    event.preventDefault()
    console.log(email, password)
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/adminhome");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });
  };

  return (
    <div>
<h1>Tela de login</h1>
<iframe src="https://giphy.com/embed/YkIWPijxvxSxWrRzux"
                width="480"
                height="270"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <form onSubmit={onSubmitLogin}>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
        required
        type="email"        
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
        required
        pattern={"^.{6,}"}
        title={"Numero minimo de caracteres aceitos 6 !!"}
      />
      <button >Logar</button>
      </form>
    </div>
  )
}






