import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import { useHistory } from "react-router"
import ProfileTrips from "./ProfileTrips"
import styled from "styled-components"


const StyleListTrip = styled.div`
padding: 8px;
`

export const ListTripsPage = () => {

    const [trips, setTrips] = useState ([])

      useEffect(() => {     
          axios
          .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips")
          .then((res) => {
              console.log(res.data.trips)
              setTrips(res.data.trips)          
          })
      }, [])
  
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    const goToApplicationFormPage = () => {
        history.push("/application")
    }
    return (
        <StyleListTrip>
            {trips.map((id) => {
                return <ProfileTrips id={id}/>
            })}

            
<ProfileTrips/>               
            <p>
                <button onClick={goToHome}>Voltar para home</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
          
            </p>
        </StyleListTrip>
    )
}