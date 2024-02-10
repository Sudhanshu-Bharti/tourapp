'use client'
import React, { useState } from "react";
import Footer from "./components/Footer";
import Spline from '@splinetool/react-spline';
import RouteIntro from "./components/RouteIntro";

export default function Home() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleSearchButtonClick = () => {
    console.log('Button clicked');
    setShowSearchBox(!showSearchBox);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow relative">
        <Spline
          scene="https://prod.spline.design/xqt9kHIXWASrN1NJ/scene.splinecode"
          className="w-full h-full"
        />

      </div>
     
      <RouteIntro/>
      <footer className="mt-auto">
        <Footer />
      </footer> 
        <span className="w-full min-h-screen bg-favBlue">
          fidsn
        </span>
    </div>
  );
}
