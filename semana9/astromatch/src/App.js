import  React  from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"

export default  class App extends React.Component {

  //Renderizaçao Condicional
  // Estado que diz qual é a tela que está aparecendo
  // Função pra mudar a tela

  state = {
    currentScreen: "MatchesPage"
    // currentScreen: "HomePage"
  }

  selectPage = () => {
    switch (this.state.currentScreen){
      case "MatchesPage":
        return <MatchesPage/>
       case "HomePage":
         return <HomePage/>
         default: 
         return  <MatchesPage/>
    }
  }
render(){
  return (
    <div>
      {this.selectPage()}
    </div>
    
  )
}
}
