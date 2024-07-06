import React from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import MainCarousel from "./customer/components/HomeCrousel/MainCrousel";
import HomeCarousel from "./customer/components/HomeCarousel/HomeCarousel";

function App() {
  return (
    <div>
      <Navigation />

      <MainCarousel />
      <HomeCarousel />
    </div>
  );
}

export default App;
