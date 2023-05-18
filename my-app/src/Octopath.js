import React from "react";
import Traveler from "./Traveler";

function OctopathContainer({travelers}){

  const traveler = travelers.map((traveler) => {
    return <Traveler key={traveler.id} traveler={traveler}/>
})

    return (
      <body className="body-travelers">
        <div className="main-layout2">
          <h1 className="originLand">From The Land of Orsterra! Their Fates Intertwine!</h1>
          <ul className="cards">
            {traveler}
          </ul>
        </div>
      </body>
    )
}

export default OctopathContainer;