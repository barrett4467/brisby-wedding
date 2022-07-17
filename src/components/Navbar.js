import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/details">Details</Link>
                <Link to="/registry">Registry</Link>
                <Link to="/rsvp">RSVP</Link>
                <Link to="/photos">Photos</Link>
            </div>
        )
}


export default Navbar;
