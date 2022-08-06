import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import breakpoints from "../elements/breakpoints";
import img from "../images/engagement7.jpg";
import "../index.css";


const Main = styled.div`

    @media only screen and ${breakpoints.device.xs}{
        position: relative;
        text-align: center;
    }
    @media only screen and ${breakpoints.device.sm}{
    }
    @media only screen and ${breakpoints.device.lg}{
        background: url(${img});
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;

        width: 100%;
        height: 100%;
        margin: -10;
    }
`

const Content = styled.div`
    @media only screen and ${breakpoints.device.xs}{
        top: 10px;
        text-align: center;
        color: #3b0512;
    }
    `
    const Names = styled.h1`
        @media only screen and ${breakpoints.device.xs}{
            position: absolute;
            text-align: center;
            letter-spacing: 6px;
            font-size: 26px;
            width: 100%;
            margin-top: 14%;
        }
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
            border: 1px solid #3b0512;
        }
`
const Greeting = styled.div`
    @media only screen and ${breakpoints.device.xs}{
        position: relative;
        top: -10px;
        text-align: center;
        font-weight: bold;
    }
`
const H3 = styled.h3`
    @media only screen and ${breakpoints.device.xs}{
        display: none;
    }
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
`
const Date = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 1%;
`
const RSVP = styled.button`
    background-color: #faf9f6;
    color: #3b0512;
    border: 1px solid #3b0512;
    border-radius: 5px; 
    width: 6em;
    padding: 1%;
    margin: 1%;

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
                    <Img />
                    <Greeting>
                        <H3> are getting married</H3>
                        <Date> October 15th, 2022  4pm </Date>
                        <RSVP onClick={()=> navigate("/brisby-wedding/rsvp")}>RSVP</RSVP>
                    </Greeting>
                </Content>
        </Main>
    )
}

export default About; 