import { useState } from "react";
import {
    sliderStyles,
    slideStyles,
    rigthArrow,
    leftArrow,
    dotsContainer,
    dotsStyles
} from './GalleryElements';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <sliderStyles>
      <leftArrow onClick={goToPrevious}>-</leftArrow>
      <rigthArrow onClick={goToNext}>+</rigthArrow>
      <div style={slideStylesWidthBackground}></div>
      <dotsContainer>
        {slides.map((slide, slideIndex) => (
            <dotsStyles key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            o
            </dotsStyles>
        ))}
        </dotsContainer>
    </sliderStyles>
  );
};

export default ImageSlider;