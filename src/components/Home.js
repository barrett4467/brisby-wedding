import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import img from "../images/engagement7.jpg";
import "../index.css";

const Main = styled.div`
    background:  url(${img});
    background-size: cover;
    background-position: 50% 50%;
    width: 100vw;
    height: 100vh;
    margin: -10px;
    }
`
// linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ),

const Content = styled.div`
    // padding: 10px;
    position: relative;
    top: 20px;
    margin-left: 40px;
    color: #3b0512;
    // color: white;
`
const Names = styled.h1`
    position: relative;
    top: 50px;
    text-align: left;
    letter-spacing: 10px;
    width: 40px;
`
const Greeting = styled.div`
    position: relative;
    top: 164px;
    right: 28px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
`
const RSVP = styled.button`
    background-color: #faf9f6;
    color: #3b0512;
    border: 1px solid #3b0512;
    border-radius: 5px; 
    width: 6em;
    padding: 1%;

    &:hover {
        background-color: #d4d3d2;
    }

`

const About = (props) => {
    const navigate = useNavigate();

    return (
        <Main>
            <Navbar />
                <Content>
                    <Names>BECCA & DYLAN</Names>
                    <Greeting>
                        <h3> are getting married</h3>
                        <h4> October 15th, 2022 | 4pm </h4>
                        <RSVP onClick={()=> navigate("/brisby-wedding/rsvp")}>RSVP</RSVP>
                    </Greeting>
                </Content>
        </Main>
    )
}

export default About; 