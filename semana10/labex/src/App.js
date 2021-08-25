import React from "react"
import { AdminHomePage } from "./pages/AdminHomePage"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import { ErrorPage } from "./pages/ErrorPage"
import { ListTripsPage } from "./pages/ListTripsPage"
import { TripDetailsPage } from "./pages/TripDetailsPage"
import { ApplicationFormPage } from "./pages/ApplicationFormPage"
import { CreateTripPage } from "./pages/CreateTripPage"

export default function App() {
  return (
    <BrowserRouter>
    <Switch>

   

    <Route exact path = {"/"}>
    <HomePage/>
    </Route >

    <Route exact path = {"/adminhome"}>
     <AdminHomePage/>
     </Route>


    <Route exact path = {"/login"}>
     <LoginPage/>
     </Route>

     <Route exact path = {"/trips"}>
     <ListTripsPage/>
     </Route>

     <Route exact path = {"/details"}>
     <TripDetailsPage/>
     </Route>

     <Route exact path = {"/application"}>
     <ApplicationFormPage/>
     </Route>

     <Route exact path = {"/createtrip"}>
     <CreateTripPage/>
     </Route>

     <Route>
       <ErrorPage/>
     </Route>


     
   
   </Switch>
    </BrowserRouter>
  )
}


