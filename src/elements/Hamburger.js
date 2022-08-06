import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.css";

function Hamburger(props){
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/brisby-wedding/details">
                Details
            </a>
            <a className="menu-item" href="/brisby-wedding/rsvp">
                RSVP
            </a>
            <a className="menu-item" href="/brisby-wedding/registry">
                Registry
            </a>
            <a className="menu-item" href="/brisby-wedding/photos">
                Photos
            </a>


            
        </Menu>
    );
};

export default Hamburger;