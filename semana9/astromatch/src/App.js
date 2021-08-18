import  React, { useState }  from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"

export default function App(){

  const [telaAtual, setTelaAtual] = useState("HomePage")



  const escolherTela = () => {
    switch (telaAtual) {
      case "MatchesPage":
        return <MatchesPage/>
       case "HomePage":
         return <HomePage/>
         default: 
         return <div>erro</div>
    }
  }

  const MatcheTela = (telaAtual) => {
    setTelaAtual("MatchesPage")
  }

  const HomeTela = (telaAtual) => { 
    setTelaAtual("HomePage")
  }
  return (
    <div>         
      Astromatch
      <button onClick = {HomeTela}>HomePage</button>
      <button onClick = {MatcheTela}>Matches</button>
      {escolherTela()}
    </div>
    
  )
}



