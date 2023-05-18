import Traveler from "./Traveler"
import React from "react"

function OctopathTwoContainer({travelers}){
    
    const traveler = travelers.map(traveler => {
        return <Traveler key={traveler.id} traveler={traveler} />
    })
    
    return (
      <div>
            <h1 className="originLand">In The Land Of Solistia! The Paths Intertwine Again! </h1>
            <ul className="cards">
            {traveler}
            </ul>
      </div>
    )
}

export default OctopathTwoContainer;