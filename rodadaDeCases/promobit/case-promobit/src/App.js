import React from "react"
import DetalhesDoFilme from "./pages/DetalhesDoFilme/DetalhesDoFilme"
import ListaDeFilmes from "./pages/ListaDeFilmes/ListaDeFilmes"
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial"

export default class App extends React.Component {
  state = {
    currentScreen: "inicio"

  }

  selectPage = () => {
    switch (this.state.currentScreen) {
      case "inicio":
        return <PaginaInicial />
      case "lista":
        return <ListaDeFilmes />
      case "detalhes":
        return <DetalhesDoFilme />
      default:
        return <PaginaInicial />
    }
  }
  render() {
    return (
      <div>
        {this.selectPage()}

      </div>
    )
  }
}


