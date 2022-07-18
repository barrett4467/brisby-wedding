import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import img from "../images/engagement3.jpg";

const Main = styled.div`
    color: #1e1c29;
    background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${img});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    // background-attachment: fixed;
    background-position: 50% 50%;
    margin: -10px;
    }
    background
`
const Content = styled.div`
    // text-align: right;
    position: relative;
    top: 300px;
    padding: 10px;
`
const Names = styled.h1`
    text-align: left;
    width: 40px;
`

function About () {
    return (
        <Main>
            <Navbar />
                <Content>
                    <Names>Rebecca Barrett & Dylan Brisby</Names>
                    <h3>We can't wait to share our special day with you</h3>
                </Content>
        </Main>
    )
}

export default About; 