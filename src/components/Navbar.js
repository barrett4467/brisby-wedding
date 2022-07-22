import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div `
    height: 3%;
    width: 75px;
`
const StyledLink = styled(Link)`
    position: relative;
    top: 10px;
    left: 20px;
    text-decoration: none;
    padding: 2px;
    color: #3b0512;
    font-size: 20px;
    letter-spacing: 2px;
    margin-left: 10px;
    margin-right: 10px;
    // hover: #f2ce92;
`


function Navbar() {
        return (
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/brisby-wedding/details">Details</StyledLink>
                <StyledLink to="/brisby-wedding/rsvp">RSVP</StyledLink>
                <StyledLink to="/brisby-wedding/registry">Registry</StyledLink>
                <StyledLink to="/brisby-wedding/photos">Photos</StyledLink>
            </Nav>
        )
}


export default Navbar;
