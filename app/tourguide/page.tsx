import React from 'react'
import TourCard from '../components/TourCard'
import Guide1 from '../../public/57.jpg'
const images = [
  '/57.jpg',
  '/57.jpg',
  '/57.jpg',
];

export default function page() {
  return (
    <div className=' flex-wrap w-80 h-60'>
      
        <div><TourCard src={images[0]} Location={'Mumbai'} Guide={'Best Rated'} Language={'Hindi'} Name={'Kanchana'} Year={'2020'} /></div>
        <div><TourCard src={images[0]} Location={'Mumbai'} Guide={'Best Rated'} Language={'Hindi'} Name={'Kanchana'} Year={'2020'} /></div>
        <div><TourCard src={images[0]} Location={'Mumbai'} Guide={'Best Rated'} Language={'Hindi'} Name={'Kanchana'} Year={'2020'} /></div>
        <div><TourCard src={images[0]} Location={'Mumbai'} Guide={'Best Rated'} Language={'Hindi'} Name={'Kanchana'} Year={'2020'} /></div>
      
    </div>
  );
}
// grid grid-col-2 m-23 grid-flow-col gap-4
