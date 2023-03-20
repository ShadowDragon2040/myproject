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