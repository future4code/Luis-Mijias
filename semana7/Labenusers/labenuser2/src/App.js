import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaUsuario from "./Components/TelaListaUsuarios";
import styled from "styled-components";



export default class App extends React.Component {
state = {
  telaAtual: "cadastro"
}
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
       default:
         return <div>Erro! Não encontramos a página!!</div>   
    }
  }
  irParaCadastro = () => {
    this. setState({telaAtual:"cadastro"})


  }
  
  irParaLista = () => { 
    this.setState({telaAtual: "lista"})
  }

  render(){
  return (
    <div>
 <h1>Labenuser</h1>
 {this.escolheTela()}
    </div>
  );
  
}
}

