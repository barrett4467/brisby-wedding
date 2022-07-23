import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Popup from "./Popup";
import { useState } from "react";
import Countdown from "../elements/Countdown";
import RSVPform from "../elements/Rsvpform";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #faf9f6;
        text-align: center;
    }

`
const ContentWrapper = styled.div`
    background-color: rgba(217, 216, 212, 0.6); 
    margin: 0 auto;
    margin-top: 60px;
    padding: 1%;
    width: 95%;
    border-radius: 15px;
    text-align: center;
`
const Content = styled.div`
    margin: 0 auto;
    // text-align: left;
`
const H1 = styled.h1`
    letter-spacing: 3px;
`
const RSVPButton = styled.button`
    background-color: #faf9f6;
    color: #3b0512;
    border: 1px solid #3b0512;
    border-radius: 5px; 
    width: 8em;
    padding: 1%;
    margin-top: 10px;
    &:hover {
        background-color: #d4d3d2;
    }
`
const Details = styled(Link)`
    text-decoration: none;
    color: #3b0512;
    &:hover {
        color: #dfac7a;
    }
`

function RSVP () {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <GlobalStyle />
            <Navbar />
            <ContentWrapper>
                <Content>
                    <H1>CHIEF HOSA LODGE</H1>
                    <h3>Golden, Colorado</h3>
                    <h3>October 15th, 2022</h3>
                    <p>Please respond by September 15th</p>
                    <Details to="/brisby-wedding/details">View details</Details>
                    <br></br>
                    <RSVPButton onClick={() => setButtonPopup(true)}>Respond here</RSVPButton>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                        <RSVPform />
                    </Popup>

                </Content>
            </ContentWrapper>
        </div>
    )
}

export default RSVP; 