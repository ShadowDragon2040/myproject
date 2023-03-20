import ImageSlider from "./ImageSlider";
import containerStyles from "./GalleryElements";
const Gallery = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
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