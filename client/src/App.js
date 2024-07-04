import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import MainCarousel from './customer/components/HomeCrousel/MainCrousel'
import HomeCart from './customer/components/HomeCart/HomeCart'

function App() {
  return (
    <div>
      <Navigation/>
  
      <MainCarousel/>
      <HomeCart/>
    </div>
  )
}

export default App