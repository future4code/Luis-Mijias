import axios from "axios"
import React, { useState, useEffect } from "react"
import { Imagem, Container, Profile } from "./styled"

export const HomePage = () => {

    const [profile, setProfile] = useState({})
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luismijias-lovelace/person"

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile)
                console.log(res.data.profile)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const choosePerson = (choice) => {
        const headerPerson = { "Content-Type": "application/json" }
        const urlPerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luismijias-lovelace/choose-person"
        const body = {
            "id ": profile.id,
            "choice": choice
        }

        console.log("Botão de escolha")
        axios.post(urlPerson, body)
            .then((res) => {
                console.log("then:", res)
                getProfile()
            })

            .catch((error) => {
                console.log("error:", error)
            })
    }

    return (
        <Container>
            <Profile>
                <h2>{profile.name} </h2>
                <h3>Idade ={profile.age}</h3>

                <Imagem src={profile.photo} ></Imagem>

                <p>{profile.bio}</p>
                <button onClick={() => choosePerson(true)}>Gostei</button>
                <button onClick={() => choosePerson(false)}>Tô fora</button>
            </Profile>


        </Container>
    )
}

