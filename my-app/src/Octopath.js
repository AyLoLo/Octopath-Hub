import React from "react";
import Traveler from "./Traveler";

function OctopathContainer({travelers}){

  const traveler = travelers.map((traveler) => {
    return <Traveler key={traveler.id} traveler={traveler}/>
})

    return (
        <div>
        <h1 className="originLand">From The Land of Orsterra! Their Fates Intertwine!</h1>
        <ul className="cards">
          {traveler}
        </ul>
      </div>
    )
}

export default OctopathContainer;