import React from 'react';
import TourCard from '../components/TourCard';
import Guide1 from '../../public/57.jpg'; // Assuming this is a guide image

const images = [
  '/57.jpg',
  '/57.jpg',
  '/57.jpg',
];

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-11'>
      <TourCard 
        src={images[0]} 
        Location={'Mysuru'} 
        Guide={'Best Rated'} 
        Language={'Hindi'} 
        Name={'Rajesh'} 
        Year={'2020'} 
      />
      <TourCard 
        src={images[1]} 
        Location={'Chennai'} 
        Guide={'Local Expert'} 
        Language={'Tamil'} 
        Name={'Arvind'} 
        Year={'2021'} 
      />
      <TourCard 
        src={images[2]} 
        Location={'Coorg'} 
        Guide={'Experienced Guide'} 
        Language={'Kannada'} 
        Name={'Priya'} 
        Year={'2019'} 
      />
      <TourCard 
        src={images[3]} 
        Location={'Ooty'} 
        Guide={'Nature Enthusiast'} 
        Language={'English'} 
        Name={'Suresh'} 
        Year={'2018'} 
      />

      {/* Adventure Tours */}
      <div className="bg-blue-200 p-4 rounded-md md:col-span-2 mt-8">
        <h2 className="text-xl font-semibold mb-4">Adventure Tours</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">Mountain Trekking Expedition</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">River Rafting Adventure</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Jungle Safari Camping</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Desert Camel Riding Tour</a></li>
        </ul>
      </div>

      {/* Historical Sites */}
      <div className="bg-blue-200 p-4 rounded-md md:col-span-2 mt-8">
        <h2 className="text-xl font-semibold mb-4">Historical Sites</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">Ancient Civilization Ruins Tour</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Medieval Castle Exploration</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Museum and Heritage Walk</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Historic Battlefield Visit</a></li>
        </ul>
      </div>

      {/* Cultural Experiences */}
      <div className="bg-blue-200 p-4 rounded-md md:col-span-2 mt-8">
        <h2 className="text-xl font-semibold mb-4">Cultural Experiences</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">Traditional Dance Performance</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Cooking Class with Locals</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Artisan Workshop Tour</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Religious Festival Celebration</a></li>
        </ul>
      </div>

      {/* Wildlife Safaris */}
      <div className="bg-blue-200 p-4 rounded-md md:col-span-2 mt-8">
        <h2 className="text-xl font-semibold mb-4">Wildlife Safaris</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">Safari in the Serengeti</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Bird Watching Expedition</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Big Five Safari Adventure</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Marine Life Exploration</a></li>
        </ul>
      </div>

      <div className="bg-blue-200  p-4 rounded-md md:col-span-2 mt-48 ml-96">
        <h2 className="text-xl font-semibold mb-4">Featured Guides</h2>
        <div className="flex space-x-4">
          <div>
            <img src={Guide1.src} alt="Guide" className="w-16 h-16 rounded-full" />
            <p className="text-center">Rajesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
