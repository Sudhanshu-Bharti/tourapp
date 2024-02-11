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

   
      <div className="bg-favBlue-200 p-4 rounded-md md:col-span-2 mt-48">
        <h2 className="text-xl font-semibold mb-4">Explore More</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-favBlue-500 hover:underline">Adventure Tours</a></li>
          <li><a href="#" className="text-favBlue-500 hover:underline">Historical Sites</a></li>
          <li><a href="#" className="text-favBlue-500 hover:underline">Cultural Experiences</a></li>
          <li><a href="#" className="text-favBlue-500 hover:underline">Wildlife Safaris</a></li>
        </ul>
      </div>

      <div className="bg-favBlue-200  p-4 rounded-md md:col-span-2 mt-48 ml-96">
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
