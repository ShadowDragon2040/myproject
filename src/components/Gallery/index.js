import ImageGallery from 'react-image-gallery';
import React, { useState } from 'react';
import {
InfoContainer,
InfoWrapper,
Heading,
TopLine,
Subtitle
} from './GalleryElements'
import {Fullscreen} from './gallerycomponent/src/controls/Fullscreen';
import {LeftNav} from './gallerycomponent/src/controls/LeftNav';
import {RightNav} from './gallerycomponent/src/controls/RightNav';
import {PlayPause} from './gallerycomponent/src/controls/PlayPause';
import {SVG} from './gallerycomponent/src/SVG';
//import {SwipeWrapper} from './gallerycomponent/src/SwipeWrapper';
export const homeObjOne={
  id:'tools',
  lightBg:false,
  lightText:true,
  lightTextDesc:false,
  headline:'Cég bemutató',
  topLine:'Industár.kft',
  imgStart:false,
  img:require('../../images/industar-kft-front.jpg'),
  alt:'Car',
  dark:true,
  primary:true,
  darkText:true,
};

const images = [
  {
    original: 'https://static3.depositphotos.com/1005951/212/i/600/depositphotos_2120235-stock-photo-husky-portrait.jpg',
    thumbnail: '',
  },
  {
    original: 'https://static3.depositphotos.com/1005951/212/i/600/depositphotos_2120235-stock-photo-husky-portrait.jpg',
    thumbnail: '',
  },
  {
    original: 'https://static3.depositphotos.com/1005951/212/i/600/depositphotos_2120235-stock-photo-husky-portrait.jpg',
    thumbnail: '',
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="carousel-container">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={true}
        showNav={true}
        startIndex={currentIndex}
        onSlide={(index) => setCurrentIndex(index)}
        renderItem={(item) => (
          <div className="carousel-image-container">
            <img src={item.original} alt={item.originalAlt} className="carousel-image" />
          </div>
        )}
      />
    </div>
  );
}

export default Gallery





