import React from "react";
import Navbar from "./Navbar";
import PhotoGallery from "../elements/PhotoGallery";
import photo1 from "../images/engagement1.jpg";
import photo2 from "../images/engagement2.jpg";
import photo3 from "../images/engagement3.jpg";
import photo4 from "../images/engagement4.jpg";
import photo5 from "../images/engagement5.jpg";
import photo6 from "../images/engagement6.jpg";
import styled from "styled-components";


const ImageContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`
const Photo = styled.img`
    width: 30%;
`

function Photos () {
    return (
        <div>
            <Navbar />
            <h1>Photos</h1>
            {/* <PhotoGallery
                galleryImages={galleryImages}
            /> */}
            <ImageContainer>
                <Photo src={photo1}/>
                <Photo src={photo2} />
                <Photo src={photo3}/>
                <Photo src={photo4} />
                <Photo src={photo5}/>
                <Photo src={photo6} />
            </ImageContainer>
        </div>
    )
}

export default Photos; 