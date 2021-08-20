import React from "react"
import styled from "styled-components"


const ProfileTripsContainer = styled.div`
    margin: 16px;
    border: 1px solid black;
    :hover {
        background-color: rgba(0,0,0,0.5);
    }
`

const ProfilePicture = styled.img`
    width: 50%;
    display: block;
    align-items: center;
`
const ProfileInfo = styled.div`
    padding: 0 16px;
`

function ProfileTrips(){
    return(
        <ProfileTripsContainer>
            <ProfilePicture src = {"https://picsum.photos/200/100"}/>
              
            
            <ProfileInfo>        
                <p>Nome da viagem</p>
                <p>descriçao da viagem</p>
                <p>Planeta a ser visitado</p>
                <p>duraçao da viagem</p>
                <p>data da viagem</p>
            </ProfileInfo>
        </ProfileTripsContainer>

    )
}

export default ProfileTrips