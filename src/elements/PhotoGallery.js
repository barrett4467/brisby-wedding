import React from "react";
import styled from "styled-components";
import { useState } from "react";

const galleryWrap = styled.div`

`
const Single = styled.div`

`

const PhotoGallery = (galleryImages) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModel] = useState(false);

    return (
        <div>
            <galleryWrap>
                {
                    // console.log(galleryImages.galleryImages)
                    galleryImages.galleryImages.map((slide, index) => {
                        return (
                            <Single key={index}>
                                <img src={slide.img}/>
                            </Single>
                        )
                    })
                }
            </galleryWrap>
        </div>
    )
}


export default PhotoGallery;