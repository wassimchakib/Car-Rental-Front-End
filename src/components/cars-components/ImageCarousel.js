import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'flowbite-react';

const ImageCarousel = ({ images, altText }) => (
  <div className="h-[300px] xs:h-[400px] sm:h-[450px] md:h-[450px]">
    <Carousel slideInterval={3000}>
      {images && images.map((image) => (
        <img
          key={altText}
          src={image.url}
          alt={altText || 'Car Image'}
          className="h-full w-full"
        />
      ))}
    </Carousel>
  </div>
);

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  altText: PropTypes.string.isRequired,
};

ImageCarousel.defaultProps = {
  images: [],
};

export default ImageCarousel;
