'use client'
import React, { useState } from "react";
import Footer from "./components/Footer";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  // const handleModelClick = () => {
  //   setShowSearchButton(true);
  // };

  const handleSearchButtonClick = () => {
    console.log('Button clicked');
    setShowSearchBox(!showSearchBox);
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative">
        <div className="sticky top-0 z-10">
        </div>
        <Spline
          scene="https://prod.spline.design/xqt9kHIXWASrN1NJ/scene.splinecode"
          className="w-full h-full"
        />
        {showSearchBox && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Search box content */}
            <input
              type="text"
              placeholder="Enter your search query"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleSearchButtonClick}
            >Close
            </button>
          </div>
        </div>
      )}
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
