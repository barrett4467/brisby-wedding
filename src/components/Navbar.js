import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div `
    height: 3%;
    width: 75px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 2px;
    color: #0a0a0a;
    font-size: 20px;
    // hover: #f2ce92;
`


function Navbar() {
        return (
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/details">Details</StyledLink>
                <StyledLink to="/registry">Registry</StyledLink>
                <StyledLink to="/rsvp">RSVP</StyledLink>
                <StyledLink to="/photos">Photos</StyledLink>
            </Nav>
        )
}


export default Navbar;
