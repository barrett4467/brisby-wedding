import React from "react";
import Navbar from "./Navbar";
import photo1 from "../images/engagement1.jpg";
import photo2 from "../images/engagement2.jpg";
import photo3 from "../images/engagement3.jpg";
import photo4 from "../images/engagement4.jpg";
import photo5 from "../images/engagement5.jpg";
import photo6 from "../images/engagement7.jpg";
import photo7 from "../images/engagement8.jpg";
import photo8 from "../images/engagement9.jpg";
import photo9 from "../images/engagement10.jpg";
import photo10 from "../images/engagement11.jpg";
import photo11 from "../images/engagement12.jpg";
import photo12 from "../images/engagement13.jpg";
import photo13 from "../images/engagement14.jpg";
import photo14 from "../images/engagement15.jpg";
import photo15 from "../images/engagement16.jpg";
import photo16 from "../images/engagement17.jpg";
import photo17 from "../images/engagement18.jpg";
import photo18 from "../images/engagement19.jpg";
import photo19 from "../images/engagement20.jpg";
import photo20 from "../images/engagement21.jpg";
import photo21 from "../images/engagement22.jpg";
import photo22 from "../images/engagement23.jpg";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #faf9f6;
        text-align: center;
    }

`
const ImageContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    float: left;
`
const PhotoCards = styled.div`
    // padding: 1%;
    width: 30%;
    border-radius: 10px;
    float: left;
    margin: 5px;
`
const Photo = styled.img`
    width: 100%;
    border-radius: 10px;
    
`

function Photos () {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
            <h1>Photos</h1>
            {/* <PhotoGallery
                galleryImages={galleryImages}
            /> */}
            <ImageContainer>
                <PhotoCards>
                    <Photo src={photo1}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo2} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo3}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo4} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo5}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo6} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo7}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo8} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo9}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo10} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo11}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo12} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo13}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo14} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo15}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo16} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo17}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo18} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo19}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo20} />
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo21}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={photo22} />
                </PhotoCards>
            </ImageContainer>
        </div>
    )
}

export default Photos; 