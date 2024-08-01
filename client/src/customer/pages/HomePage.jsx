import React from 'react'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import MainCrousel from '../components/MainCrousel/MainCrousel'
import { womenClosthes } from '../../data/women.clothes'
import { green, grey, yellow } from '@mui/material/colors'
import { menClothes } from '../../data/mens.clothes'
import { kids } from '../../data/kids'
import { seasonalCollection } from '../../data/seasonalCollection'




const HomePage = () => {
  return (
    <div>
        <MainCrousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeCarousel data= {womenClosthes} sectionName={"SHOP FOR WOMEN"} textColor={grey[800]}/>
            <HomeCarousel data= {menClothes} sectionName={"SHOP FOR MEN"} textColor={grey[800]}/>
            <HomeCarousel data= {kids} sectionName={"SHOP FOR KIDS"} textColor={grey[800]}/>
            <HomeCarousel data= {seasonalCollection} sectionName={"SEASONAL COLLECTIONS"} textColor={grey[800]}/>
            <HomeCarousel data= {womenClosthes} sectionName={"FLASH SALE"} textColor={green[500]}/>
            
        </div>
    </div>
  )
}

export default HomePage