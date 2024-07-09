import React, { useState, useRef } from "react";
import HomeCart from "../HomeCart/HomeCart";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    767: { items: 3 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1, 1, 1,1,1,1,1].map((item, index) => <HomeCart key={index} />);

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
    <div className="px-4 lg:px-8">
      <div className="relative p-5 border">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        <button
          onClick={slidePrev}
          className="z-50 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 py-2 rounded-sm hover:bg-gray-400 active:bg-gray-300"
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          onClick={slideNext}
          className="z-50 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 py-2 rounded-sm hover:bg-gray-400 active:bg-gray-300"
          aria-label="next"
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
