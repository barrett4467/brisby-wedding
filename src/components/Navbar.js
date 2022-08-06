import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import breakpoints from "../elements/breakpoints";
import Hamburger from "../elements/Hamburger";
import { slide as Menu } from "react-burger-menu";

const LittleNav =styled.div`
@media only screen and ${breakpoints.device.xs}{

    }
@media only screen and ${breakpoints.device.sm}{
    display: none;
}
`
const BigNav = styled.div `
    @media only screen and ${breakpoints.device.xs}{
        display: none;
    }
    @media only screen and ${breakpoints.device.sm}{
        display: inline-block;;
    }
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
    &:hover {
        color: #dfac7a;
    }
`


function Navbar() {
        return (
            <div>
            <LittleNav >
                    <Hamburger/>
            </LittleNav>
            <BigNav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/brisby-wedding/details">Details</StyledLink>
                <StyledLink to="/brisby-wedding/rsvp">RSVP</StyledLink>
                <StyledLink to="/brisby-wedding/registry">Registry</StyledLink>
                <StyledLink to="/brisby-wedding/photos">Photos</StyledLink>
            </BigNav>
        
            </div>
        )
}


export default Navbar;
