import React, { useState, useRef } from "react";
import HomeCart from "../HomeCart/HomeCart";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const HomeCarousel = ({data,sectionName,textColor}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    767: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0,10).map((item, index) => (
    <HomeCart product={item} key={index} />
  ));

  const slidePrev = () => {
    if (carouselRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current && activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div>
      <h2 className="text-3xl font-extrabold py-5" style={{color:textColor}}>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          duration={2000}
        />
        {activeIndex !== 0 && (
          <button
            onClick={slidePrev}
            className="z-50 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 py-2 rounded-md hover:bg-gray-400 active:bg-gray-300 h-[4rem] w-[2rem]"
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon />
          </button>
        )}
        {activeIndex !== items.length - 5 && (
          <button
            onClick={slideNext}
            className="z-50 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 py-2 rounded-md hover:bg-gray-400 active:bg-gray-300 h-[4rem] w-[2rem]"
            aria-label="next"
          >
            <KeyboardArrowRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeCarousel;
