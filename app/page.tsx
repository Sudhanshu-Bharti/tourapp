'use client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showSearchButton, setShowSearchButton] = useState(false);

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
        />
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          onMouseEnter={() => setShowSearchButton(true)}
          onMouseLeave={() => setShowSearchButton(false)}
        >
          {showSearchButton && (
            <button className="bg-white py-2 px-4 rounded-lg shadow-lg text-gray-900 font-bold text-lg pointer-events-auto">
              Search
            </button>
          )}
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
