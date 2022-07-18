import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import img from "../images/engagement3.jpg";

const Main = styled.div`
    background-image: url(${img});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    margin: -10px;
    // }
`

function About () {
    return (
        <Main>
            <Navbar />
                <h1>Rebecca Barrett & Dylan Brisby</h1>
                <h3>We can't wait to share our special day with you</h3>
        </Main>
    )
}

export default About; 