import React from "react"
import styled from "styled-components"



const ListTripsContainer = styled.div`
  display: flex;
   align-items: center;
   border-bottom: 1px solid gray;
    :hover {
        background-color: rgba(300,0,0,0.2);
    }
`

const GoodTrip = styled.img`
   border-radius: 50%;
   margin-right: 8px;
   height: 30px;
`


function ProfileTrips(props) {   
    return(
        <ListTripsContainer>
            <GoodTrip src = "https://picsum.photos/id/1/200/300"/>
         <p></p>
        </ListTripsContainer>
    )
}

export default ProfileTrips