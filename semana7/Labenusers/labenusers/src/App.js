import React from "react";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "luis-mijias-lovelace"
  }
};

export default class App extends React.Component {
  state = {
    name: [],
    email:[],
    inputNome: "",
    inputEmail:""
  };

  componentDidMount() {
    this.pegarNome();
    this.pegarEmail()
    
  }

  mudaInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };
  
  mudaInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };


  pegarNome = () => {
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({ name: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };
  pegarEmail = () => {
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({ email: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

 criarUsuario = () => {
    const body = {
      nome: this.state.inputNome,
      email: this.state.inputEmail     
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res)
        alert("Usuário adicionado com sucesso");
        this.setState({ inputNome: "" });
        this.setState({ inputEmail:"" });
        this.pegarNome();
        this.pegarEmail();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
 

  render() {
    const componentesNome = this.state.name.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });

    return (
      <div>
        <h1>labenusers</h1>
        <input
          value={this.state.inputNome}        
          onChange={this.mudaInputNome}
        />
        <br></br>
        <input
          value={this.state.inputEmail}        
          onChange={this.mudaInputEmail}
        />
        <button onClick={this.criarUsuario}>Enviar</button>
        {componentesNome}
      </div>
    );
  }
}
