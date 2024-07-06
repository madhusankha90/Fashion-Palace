import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import Navigation from '../components/Navigation/Navigation'


const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <MainCarousel/>

        <div>
            <HomeCarousel/>
        </div>
    </div>
  )
}

export default HomePage