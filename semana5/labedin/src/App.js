import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'
import luisfoto from "./img/luisfoto.png"
import guhringfoto from "./img/guhring.png"
import gtmericolfoto from "./img/gtmericol.png"
import CardPequeno from "./components/CardPequeno/CardPequeno"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados Pessoais</h2>
        <CardGrande 
          imagem={luisfoto} 
          nome="Luis Carlos Nogueira Mijias" 
          descricao="
          Sou estudante da Labenu e curso gestão de TI na FAM estou no quarto semestre eu adoro tecnologia meu objetivo é me tornar desenvolvedor."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={gtmericolfoto} 
          nome="Gt Mericol" 
          descricao="Aprendiz de mecânica Geral" 
        />
        
        <CardGrande 
          imagem={guhringfoto} 
          nome="Guhring Tools" 
          descricao="Programador e Operador CNC" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        /> 
           
      </div>

      <div className ="page-section-container">
           <CardPequeno
        nome="LuisCarlos@gmail.com"
        descricao="Santo André - SP" 
        />
        </div>       
    </div>
  );
}

export default App;
