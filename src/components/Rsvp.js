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
                    <p>Please respond by September 17th</p>
                    <button onClick={() => setButtonPopup(true)}>Respond here</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                        <RSVPform />
                    </Popup>

                    <Link to="/details">view details</Link>
                </Content>
            </ContentWrapper>
        </div>
    )
}

export default RSVP; 