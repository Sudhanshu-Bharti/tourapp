'use client'
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showSearchButton, setShowSearchButton] = useState(false);

  const handleModelClick = () => {
    setShowSearchButton(true);
  };

  const handleSearchButtonClick = () => {
    console.log("Search button clicked");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <Spline
          scene="https://prod.spline.design/xqt9kHIXWASrN1NJ/scene.splinecode"
          className="w-full h-full"
          onClick={handleModelClick} 
        />
        {showSearchButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-white py-2 px-4 rounded-lg shadow-lg text-gray-900 font-bold text-lg"
              onClick={handleSearchButtonClick} 
            >
              Search
            </button>
          </div>
        )}
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
