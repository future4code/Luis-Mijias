import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password);
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
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Logar</button>
    </div>
  );
};







// import axios from "axios"
// import React, { useState } from "react"
// import { useHistory, BrowserRoute, Route, Switch } from "react-router"

// export const LoginPage = () => {
//     const history = useHistory()
//     const goToHome = () => {
//         history.push("/")
//     }
//     const goToAdminHomePage = () => {
//         history.push("/adminhome")
//     }
//     const [email, setEmail] = useState("")
//     const [ password, setPassword] = useState("")

//     const history = useHistory()

//     const onChangeEmail = (event) => {
//         setEmail(event.target.value)
//     }
//     const onchangePassword = (event) => {
//         setPassword(event.target.value)
//     }

//     const onSubmitLogin = () => {
//         console.log(email,password)
//         const body = {
//             email: email,
//             password: password
//         }
//         axios
//         .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
//         body
//         )

//         .then((response) => {
//             console.log("Deu certo",response.data.token)
//             localStorage.setItem("token",response.data.token)
//             history.push("/details")

//         })
//         .catch((error) => {
//             console.log("deu errado", error.response)
//         })
//     }

//     return (
//         <div>
//             <p>Tela Login</p>
//             <br></br>
//             <h1>Login</h1>
//             <iframe src="https://giphy.com/embed/YkIWPijxvxSxWrRzux"
//                 width="480"
//                 height="270"
//                 frameBorder="0"
//                 class="giphy-embed"
//                 allowFullScreen>
//             </iframe>
//             <br/>
//             <input
//             placeholder="email"
//             type="email"
//             value={email}
//             onChange={onChangeEmail}
//             />
//             <input
//             placeholder="password"
//             type="password"
//             value={password}
//             onChange={onchangePassword}
//             />

            
//             <p>
            
//             <button onClick={onSubmitLogin}>Logar</button>
//             <br/>
//             <br/>
//             <br/>
//             <button onClick={goToHome}>Voltar para Home</button>

//             <button onClick={goToAdminHomePage}>Ir  Admin sem logar</button>
           
//             </p>
//         </div>
//     )
// }