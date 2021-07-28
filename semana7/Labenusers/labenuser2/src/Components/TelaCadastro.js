import axios from "axios"
import React from "react"
import styled from "styled-components"

export default class TelaCadastro extends React.Component{
    state = {
        nome:"",
        email:""
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }
    handleEmail = (e) => {
        this.setState ({email: e.target.value})
    }

    fazerCadastro = () => {
        console.log(this.state)
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url,body,{
            headers:{
                Authorization: "luis-mijias-lovelace"
            }
        })
        .then((res) =>{
            console.log(res)
            alert("O usuáro foi cadastrado")
            this.setState({nome:"",email:""})

        })
        .catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }
    render(){
        return(
            <div>
        <p>Tela Cadastro</p>
        <button onClick={this.props.irParaLista}>Ir para lista de Usuários</button>
        <h2>Cadastro</h2>
        <input
         placeholder ={"nome"}
         value={this.state.nome}
         onChange={this.handleNome}
         
         />
        <input
         placeholder = {"email"}
         value={this.state.email}
         onChange={this.handleEmail}
         
         />
        <button 
        onClick={this.fazerCadastro}
        >Cadastrar</button>
        
            </div>
            
        )
    }
}