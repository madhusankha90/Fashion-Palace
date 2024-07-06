import React from "react";
import HomeCart from "../HomeCart/HomeCart";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { colors } from "@mui/material";
import { Label } from "@headlessui/react";

const HomeCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    767: { items: 3 },
    1024: { items: 5 },
  };
  const items = [1, 1, 1, 1, 1, 1, 1].map((item) => <HomeCart />);

  return (
    <div className="relative px-4 lg-px-8">
      <div className="relative p-5 ">
        <AliceCarousel
          //autoPlay
          //autoPlayInterval={1500}
          items={items}
          infinite
          disableButtonsControls
          //disableDotsControls
          responsive={responsive}
        />
        <button variant="contained"
          className="z-50 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 py-2 rounded-sm hover:bg-gray-400"
          aria-label="previous">
            <KeyboardArrowLeftIcon />
        </button>
        <button
          variant="contained"
          className="z-50 absolute top-1/2 right-0 transform -translate-y-1/2  bg-gray-200 py-2 rounded-sm hover:bg-gray-400"
          aria-label="next"
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
