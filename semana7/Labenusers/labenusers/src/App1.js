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
    inputNome: ""
  };

  componentDidMount() {
    this.pegarNome();
  }

  mudaInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
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

  criarPlaylist = () => {
    const body = {
      nome: this.state.inputNome
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Nome adicionado com sucesso");
        this.setState({ inputNome: "" });
        this.pegarNome();
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
        <button onClick={this.criarPlaylist}>Enviar</button>
        {componentesNome}
      </div>
    );
  }
}
