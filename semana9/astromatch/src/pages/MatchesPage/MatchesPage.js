import React from "react"
import {Imagem} from "./styled"




export const MatchesPage = () => {
    return(
        <div>
            MatchesPage
            <br></br>
            <div>fulano</div> 
            <Imagem  src = "https://picsum.photos/400/400?a=1"></Imagem>
            <div>beltrano</div>
            <Imagem  src = "https://picsum.photos/400/400?a=2"></Imagem>
            <div>cicrano</div>
            <Imagem  src = "https://picsum.photos/400/400?a=3"></Imagem>
            <div>alano</div>
            <Imagem  src = "https://picsum.photos/400/400?a=4"></Imagem>
            <br></br>
            <button>Limpar Matches</button>
        </div>
    )
}