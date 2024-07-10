import React from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/components/Footer/Footer"

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
