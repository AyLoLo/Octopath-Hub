import React from "react";
import { useState } from "react";

function Traveler({traveler, partWithTraveler}) {

    const [toggleInfo, setToggleInfo] = useState(true)

    function HandleClick() {
        setToggleInfo(!toggleInfo)
    }
    
    return (
        <li className="cards__item">
          <div className="card">
            <img onClick={HandleClick} src={toggleInfo ? traveler.sprite : traveler.image} alt={traveler.name} className="card__image"/>
            <div className="card__content" >
              <div className="card__title">{traveler.name}</div>
              <p className="card__text" >{toggleInfo ? traveler.quote : traveler.bio }</p>
              <div className="card__detail">
                <p>{traveler.job}</p>
                </div>
            </div>
          </div>
        </li>
      );
}

export default Traveler;