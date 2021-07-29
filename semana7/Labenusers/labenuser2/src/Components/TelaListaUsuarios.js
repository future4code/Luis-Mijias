import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardUsuario = styled.div `
    border: 1px solid black;
    padding: 10px;
    background-color: rgb(255, 255, 128);
    margin: 10px;
    color: red;
    width: 40vw;
    display: flex;
    justify-content: space-between;
    
    `

export default class TelaListaUsuario extends React.Component {
    state = {
        usuarios:[]
    }


    componentDidMount(){
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "luis-mijias-lovelace"
            }
        })
        .then((res)=> {
            console.log(res)
            this.setState({usuarios: res.data})
        })

        .catch((err) => {
            console.log(err)
            alert("Erro, tente novamente!!")
        })
    }
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,{headers:{ Authorization: "luis-mijias-lovelace" }})
        .then((res)=>{
            console.log(res)
            alert("Usuário Deletado!!")
            this.pegarUsuarios()
        })
        .catch((err)=>{
            console.log(err.response.data)
            alert("Ocorreu um Erro . Tente novamente.")
        })
    }

    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return<CardUsuario>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>apagar</button>
                </CardUsuario>
        })
        return(
            <div>                       
              <p>Tela Lista de Usuários</p>
              <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button> 
              <h2>Lista de Usuários</h2> 
              {listaUsuarios}
            </div>
        )
    }
}