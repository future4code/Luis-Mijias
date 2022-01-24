import React from "react";

import DiaDaSortePage from "./pages/DiaDaSortePage/DiaDaSortePage";
import LotoFacilPage from "./pages/LotofacilPage/LotofacilPage";
import LotoManiaPage from "./pages/LotoManiaPage/LotoManiaPage";
import MegaSenaPage from "./pages/MegaSenaPage/MegaSenaPage";
import QuinaPage from "./pages/QuinaPage/QuinaPage";
import TimeManiaPage from "./pages/TimeManiaPage/TimeManiaPage";


export default class App extends React.Component{
  render() {
    return (
      <div>
        <MegaSenaPage />
        <DiaDaSortePage />
        <LotoFacilPage />
        <LotoManiaPage />
        <TimeManiaPage />
        <QuinaPage />
      </div>

    )
  }
}


