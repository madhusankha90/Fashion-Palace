import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import MainCrousel from '../components/MainCrousel/MainCrousel'
import { womenClosthes } from '../../data/women.clothes'



const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <MainCrousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeCarousel data= {womenClosthes} sectionName={"SHOP FOR WOMEN"}/>
            <HomeCarousel data= {womenClosthes} sectionName={"SHOP FOR MEN"}/>
            <HomeCarousel data= {womenClosthes} sectionName={"SHOP FOR KIDS"}/>
            <HomeCarousel data= {womenClosthes} sectionName={"SEASONAL COLLECTIONS"}/>
            <HomeCarousel data= {womenClosthes} sectionName={"FLASH SALE"}/>
            
        </div>
    </div>
  )
}

export default HomePage