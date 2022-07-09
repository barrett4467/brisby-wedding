import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function RSVP () {
    function launchRSVP() {
        alert('clicked rsvp form');
    }
    return (
        <div>
            <Navbar />
            <h1>Chief Hosa Lodge</h1>
            <h3>Golden, Colorado</h3>
            <h3>October 15th, 2022</h3>
            <p>*insert countdown timer here*</p>
            <button onClick={launchRSVP}>Respond here</button>


            <Link to="/details">view details</Link>
        </div>
    )
}

export default RSVP; 