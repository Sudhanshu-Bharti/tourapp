import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showSearchButton, setShowSearchButton] = useState(false);
  const router = useRouter();

  const handleModelClick = () => {
    setShowSearchButton(true);
  };

  const handleSearchButtonClick = () => {
    // Redirect to the search page
    router.push("/search").then(() => {
      // Scroll to the end of the page after the navigation
      window.scrollTo(0, document.body.scrollHeight);
    });
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
          onClick={handleModelClick} // Call handleModelClick when model is clicked
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
