import React, { useState } from "react";

function TravelerForm({addTraveler, updateFormData}){

    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <div>
            <h2>Summon Traveler</h2>
            {formSubmitted ? <h1>The Sacred Flame Awakens!</h1> : 
            <form onSubmit={(event => {
                addTraveler(event)
                setFormSubmitted(formSubmitted => !formSubmitted)
            })}>
                <label for="travelername">Traveler Name:</label><br></br>
                <input onChange={updateFormData} type="text" id="name" name="travelername "></input><br></br>

               <label for="travelersprite">Traveler Sprite:</label><br></br>
               <input onChange={updateFormData} type="text" id="sprite" name="travelersprite"></input><br></br>

                <label for="travelerimage">Traveler Image Url: </label><br></br>
                <input onChange={updateFormData} type="text" id="image" name="travelerimage"></input><br></br>
                
                <label for="travelerquote">Traveler Quote:</label><br></br>
                <input onChange={updateFormData} type="text" id="quote" name="travelerquote"></input><br></br>

                <label for="travelerbio">Traveler Bio:</label><br></br>
                <input onChange={updateFormData} type="text" id="bio" name="travelerbio"></input><br></br>

                <label for="travelerjob">Traveler Job:</label><br></br>
                <input onChange={updateFormData} type="text" id="bio" name="travelerjob"></input><br></br>

                <button type="submit">Add Traveler</button>
            </form>}
        </div>
    )
}

export default TravelerForm