import React from 'react';
import Slider from 'react-slick';
import {
Slider
} from './GalleryElements'
const Gallery = () => {

  const images = [
    { url: 'https://example.com/image1.jpg', alt: 'Image 1' },
    { url: 'https://example.com/image2.jpg', alt: 'Image 2' },
    { url: 'https://example.com/image3.jpg', alt: 'Image 3' },
  ];

  return (
    <Slider>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
