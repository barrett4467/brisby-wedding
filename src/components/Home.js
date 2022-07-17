import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Main = styled.button`
    background: red;
`
function About () {
    return (
        <div>
            <Navbar />
            <Main>
                <h1>Rebecca Barrett & Dylan Brisby</h1>
                <h3>We can't wait to share our special day with you</h3>
            </Main>
        </div>
    )
}

export default About; 