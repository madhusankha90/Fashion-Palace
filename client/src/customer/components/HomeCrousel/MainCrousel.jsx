import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincrouselData } from './MainCrouselData';

const MainCrousel = () => {
    
    const items = maincrouselData.map((item, index) => (
        <img
            key={index}
            className='cursor-pointer object-cover max-w-1400 max-h-500'
            role='presentation'
            src={item.image}
            alt=""
        />
    ));

    return (
        <AliceCarousel
            autoPlay
            autoPlayInterval={1500}
            items={items}
            infinite
            disableButtonsControls
            disableDotsControls
        />
    );
}

export default MainCrousel;
