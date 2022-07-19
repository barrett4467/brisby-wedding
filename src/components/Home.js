import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import img from "../images/engagement5.jpg";
import "../index.css";

const Main = styled.div`
    color: #black;
    background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${img});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: 50% 50%;
    margin: -10px;
    }
`

const Content = styled.div`
    // padding: 10px;
    position: relative;
    top: 20px;
    margin-left: 40px;
    color: #3b0512;
    font-family: 'Homemade Apple', cursive;
`
const Names = styled.h1`
    text-align: left;
    letter-spacing: 5px;
    width: 40px;
`
const Greeting = styled.h1`
    left: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    transition: roate90;
`

function About () {
    return (
        <Main>
            <Navbar />
                <Content>
                    <Names>Becca & Dylan</Names>
                    <Greeting>We can't wait to share our special day with you!</Greeting>
                </Content>
        </Main>
    )
}

export default About; 