import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = ({ images, altText }) => (
  <Carousel fade>
    {images.map((image) => (
      <Carousel.Item key={altText}>
        <img
          className="w-100"
          src={image}
          alt={altText || 'Car Image'}
          height={200}
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  altText: PropTypes.string.isRequired,
};

export default ImageCarousel;
