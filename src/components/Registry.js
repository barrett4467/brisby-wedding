import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import img from "../images/engagement5.jpg";
import breakpoints from "../elements/breakpoints";


const GlobalStyle = createGlobalStyle`
    body {
        background-color: #faf9f6;
        text-align: center;
    }
`
const Main = styled.div`
    text-align: center;
`
const Img = styled.img`
    @media only screen and ${breakpoints.device.xs}{
        background-image: url(${img});
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        width: 87%;
        height: 318px;
        margin: 10px;
        margin-top: 28%;
    }
`
const Content = styled.div`
    background-color: rgba(217, 216, 212, 0.6); 
    text-align: center;
    margin: 0 auto;
    margin-top: 60px;
    padding: 1%;
    width: 95%;
`
const RegistryBTN = styled.button`
    background-color: #faf9f6;
    color: #3b0512;
    border: 1px solid #3b0512;
    border-radius: 5px; 
    width: 10em;
    padding: 1%;
    margin: 0 auto;
    &:hover {
        background-color: #d4d3d2;
    }

`


const H1 = styled.h1`
    letter-spacing: 3px;
`
function Registry () {
    return (
        <div>
            <GlobalStyle />
            <Main>
                <Navbar />
                <Content>
                    <Img />
                    <H1>A NOTE ON GIFTS</H1>
                    <p>Your presence at our wedding is the greatest gift of all. However, if you'd like to bless us with a gift we would greatly appreciate a contribution to our honeymoon fund.</p>
                    <p>We look forward to celebrating our wedding day with you!</p>
                    <a href="https://www.travelersjoy.com/beccalovesdylan" target="_blank" rel="noopener noreferrer">
                        <RegistryBTN>Honeymoon Registry</RegistryBTN>
                    </a>
                </Content>

            </Main>
        </div>
    )
}

export default Registry; 