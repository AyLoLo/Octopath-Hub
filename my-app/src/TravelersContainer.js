import React from "react";
import Traveler from "./Traveler";

function TravelersContainer({travelers}) {

    const traveler = travelers.map((traveler) => {
        return <Traveler key={traveler.id} traveler={traveler}/>
    })

  return (
    <div>
      <h1 className="originLand">From Across The Lands! They Carve Their Own Path!</h1>
      <ul className="cards">
        {traveler}
      </ul>
    </div>
  );
}

export default TravelersContainer;