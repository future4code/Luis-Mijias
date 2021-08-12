import axios from "axios"
import React, { useState , useEffect } from "react" 
import { Imagem ,Container, Profile } from "./styled"

export const HomePage = () => {

    const [profile,setProfile] = useState({})

    useEffect(()=>{
        getProfile()
    },[])

    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luis-Mijias-Lovelace/person")
        .then((res) => {
            setProfile(res.data.profile)
              console.log(res.data.profile)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    const choosePerson = () => {
        console.log("Botão de escolha")
    }
    return(
        <Container>
           
            <Profile> 
            <h2>{profile.name} </h2>
           <h3>Idade ={profile.age}</h3>
           
            <Imagem src = {profile.photo} ></Imagem>
           
            <p>{profile.bio}</p>
            <button onClick={choosePerson}>Gostei</button>
            <button onClick={choosePerson}>Tô fora</button>
            </Profile>

            
        </Container>
    )
}

