import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
        return (
            <div>
                <h1>Becca + Dylan</h1>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/photos">Photos</Link>
                <Link to="/wedding">Wedding</Link>
                <Link to="/registry">Registry</Link>
                <Link to="/rsvp">RSVP Here!</Link>
            </div>
        )
}


export default Navbar;
