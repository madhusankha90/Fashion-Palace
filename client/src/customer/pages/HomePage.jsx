import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import MainCrousel from '../components/MainCrousel/MainCrousel'



const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <MainCrousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeCarousel/>
            <HomeCarousel/>
            <HomeCarousel/>
            <HomeCarousel/>
            <HomeCarousel/>
        </div>
    </div>
  )
}

export default HomePage