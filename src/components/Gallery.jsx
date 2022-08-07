import React from "react";
import styled from "styled-components";

const Wrapper = styled(({ className, children }) => (
    <div className={className}>
        {children}
    </div>
))`
    height: 0 !important;
    min-height: 100% !important;
    min-width: 100% !important;
    position: relative !important;
    padding-top: 50% !important;
`;

const GalleryWrapper = styled(({ className, children }) => {
    let offsetX = 0;
    let offsetY = 0;

    const Square = styled.div`
        position: absolute !important;
        height: ${p => (p.i==0? '100':'50')}% !important;
        width: ${p => (p.i==0? '50':'25')}% !important;
        left: ${p => (p.i==0? '0':(50+~~((p.i-1)/2)*25))}% !important;
        top: ${p => (p.i==0? '0':(50*((p.i-1)%2)))}% !important;
        padding-left: ${p => (p.i==0? 0:8)}px !important;
        padding-top: ${p => (p.i!=0 && p.i%2==0? 8:0)}px !important;
    `;

    const images = children.slice(0, 5).map((child, i) => {
        if (i == 0) {
            return <Square key={i} i={i}>{child}</Square>
        } else {
            return <Square key={i} i={i}>{child}</Square>
        }
    })

    console.log(images)
    return (
        <div className={ className }>
            {images}
        </div>
    )
})`
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 10px;
`;

export const Gallery = (props) => {
    return (
        <Wrapper>
            <GalleryWrapper>
                <Image src={props.img[0]}/>
                <Image src={props.img[1]}/>
                <Image src={props.img[2]}/>
                <Image src={props.img[0]}/>
                <Image src={props.img[1]}/>
            </GalleryWrapper>
        </Wrapper>
    )
}

export default Gallery;