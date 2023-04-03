import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>      
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery


/*
import ImageSlider from "./ImageSlider";
import containerStyles from "./GalleryElements";
const Gallery = () => {
  const slides = [
    { url: "https://magyarmezogazdasag.hu/sites/default/files/styles/default_crop/public/uploads/2022-09//the-lucky-neko-uepn9yctcy0-unsplash_0.jpg?itok=QqQMQsX7", title: "beach" },
    { url: "https://cms.static.marquardmedia.hu/data/cikk/224/224688.1200x630.jpg", title: "boat" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsnD26Hx4k9gcVRxHubbTDMgeBPKrIMzx6w&usqp=CAU", title: "forest" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblntF9MWtb-CMuaRLimkesv0L1_lQrzOYdQ&usqp=CAU", title: "city" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflZRYU-MSepyrreZnGFX-G7pZ2mtGrnfH5w&usqp=CAU", title: "italy" },
  ];

  return (
    <div>
        <containerStyles>
            <ImageSlider slides={slides} />
        </containerStyles>
    </div>
  );
};

export default Gallery;
*/