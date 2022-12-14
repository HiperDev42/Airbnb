import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  const Square = styled.div`
        position: absolute !important;
        height: ${(p) => (p.i === 0 ? '100' : '50')}% !important;
        width: ${(p) => (p.i === 0 ? '50' : '25')}% !important;
        left: ${(p) => (p.i === 0 ? '0' : (50 + ~~((p.i - 1) / 2) * 25))}% !important;
        top: ${(p) => (p.i === 0 ? '0' : (50 * ((p.i - 1) % 2)))}% !important;
        padding-left: ${(p) => (p.i === 0 ? 0 : 8)}px !important;
        padding-top: ${(p) => (p.i !== 0 && p.i % 2 === 0 ? 8 : 0)}px !important;
    `;

  const images = children.slice(0, 5).map((child, i) => {
    if (i === 0) {
      return <Square key={i} i={i}>{child}</Square>;
    }
    return <Square key={i} i={i}>{child}</Square>;
  });

  return (
    <div className={className}>
      {images}
    </div>
  );
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

export function Gallery({ img }) {
  return (
    <Wrapper>
      <GalleryWrapper>
        <Image src={img[0]} />
        <Image src={img[1]} />
        <Image src={img[2]} />
        <Image src={img[0]} />
        <Image src={img[1]} />
      </GalleryWrapper>
    </Wrapper>
  );
}

Gallery.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Gallery;
