import React from "react";
import Traveler from "./Traveler";

function TravelersContainer({travelers}) {

    const traveler = travelers.map((traveler) => {
        return <Traveler key={traveler.id} traveler={traveler}/>
    })

  return (
    <body className="body--travelers">
     <div className="main-layout1">
        <h1 className="originLand">From Across The Lands! They Carve Their Own Path!</h1>
        <ul className="cards">
          {traveler}
        </ul>
      </div>
    </body>
  );
}

export default TravelersContainer;