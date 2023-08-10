import React, { useState } from "react";

function TravelerForm({addTraveler, updateFormData}){

    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <div className="magic-body">
            <body className="magic-card">
                <h2>Summon Traveler</h2>
                {formSubmitted ? <h1>The Sacred Flame Awakens!</h1> : 
                <form className="contact-form" onSubmit={(event => {
                    addTraveler(event)
                    setFormSubmitted(formSubmitted => !formSubmitted)
                })}>
                    <div className="form-group">
                        <label for="travelername">Traveler Name:</label><br></br>
                        <input onChange={updateFormData} type="text" id="name" name="travelername "></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="travelersprite">Traveler Sprite Url:</label><br></br>
                        <input onChange={updateFormData} type="text" id="sprite" name="travelersprite"></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="travelerimage">Traveler Image Url: </label><br></br>
                        <input onChange={updateFormData} type="text" id="image" name="travelerimage"></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="travelerquote">Traveler Quote:</label><br></br>
                        <input onChange={updateFormData} type="text" id="quote" name="travelerquote"></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="travelerbio">Traveler Bio:</label><br></br>
                        <input onChange={updateFormData} type="text" id="bio" name="travelerbio"></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="travelerjob">Traveler Job:</label><br></br>
                        <input onChange={updateFormData} type="text" id="job" name="travelerjob"></input><br></br>
                    </div>
                        <button type="submit">Add Traveler</button>
                </form>}
            </body>
    </div>
    )
}

export default TravelerForm