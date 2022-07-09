import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Popup from "./Popup";
import { useState } from "react";

function RSVP () {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <Navbar />
            <h1>Chief Hosa Lodge</h1>
            <h3>Golden, Colorado</h3>
            <h3>October 15th, 2022</h3>
            <p>*insert countdown timer here*</p>
            <button onClick={() => setButtonPopup(true)}>Respond here</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                <h3>Popup</h3>
            </Popup>

            <Link to="/details">view details</Link>
        </div>
    )
}

export default RSVP; 