import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel({ images, altText }) {
  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="w-100"
            src={image}
            alt={altText || "Car Image"}
            height={200}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
