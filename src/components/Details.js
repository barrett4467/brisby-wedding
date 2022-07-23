import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Photo from "../images/engagement4.jpg";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #faf9f6;
        text-align: center;
    }

`
const Photo1 = styled.img`
    position: relative;
    top: 20px;
    width: 50%;
    margin: 3%;
`
const Content = styled.div`
    text-align: left;
`
const H1 = styled.h1`
    letter-spacing: 3px;
`
const H3 = styled.h3`
    letter-spacing: 3px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #3b0512;
    &:hover {
        color: #dfac7a;
    }
`
const A = styled.a`
    text-decoration: none;
    color: #3b0512;
    &:hover {
        color: #dfac7a;
    }
`
function Details () {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
                <Photo1 src= {Photo} alt="dylan and I"/>
                <Content>
                    <H1>DETAILS</H1>
                    <p>Our wedding is going to be held at the historic Chief Hosa Lodge in Golden Colorado October 15th, 2022 at 4 o'clock in the afternoon.</p> 
                    <p>Please <StyledLink to="/brisby-wedding/rsvp" target="_blank">RSVP</StyledLink> before September 15th</p>

                    <H3>DIRECTIONS |</H3><p> The venue is located at 27661 Genesee Lane, Golden, CO 80401. Take interstate 70 west from Golden, CO and exit on 253. Turn left on Moss Rock Road and continue onto Genesee Drive. The Lodge will be on your right. 
                    </p>

                    <H3>PARTY |</H3><p> Please join us for cocktails and an evening of dancing immedietly following the ceremony. Catering will be provided by Piggin' Out Smokehouse. Please contact <A href="mailto: barrett4467@gmail.com">Becca</A> if you have any dietary restrictions (gluten-free, vegetarian, etc.) or have any additional questions!  </p>
                    
                    <H3>ABOUT THE LODGE |</H3><p>The Chief Hosa Lodge, designed by architect Jules Jacques Benois Benedict became the city’s first mountain lodge opening in 1918. Using timber and stone from the immediate area, Benedict designed the lodge to blend into the hillside. He named the lodge after a Southern Arapaho tribal leader who was given the honorary title ‘Hosa’ by the Ute tribe, which meant ‘peaceful and beautiful’. </p>

            </Content>

        </div>
    )
}

export default Details; 