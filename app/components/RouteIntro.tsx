import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Image1 from '/public/beautiful-girl-sitting-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg'
import Image2 from '/public/taj-mahal-agra-india.jpg'
import Image3 from '/public/udaipur-city-view-from-hotel-balcony-rajasthan-india.jpg'

export default function RouteIntro() {
  return (
    <div className=" bg-favBlue">
    <a className="text-blue-800 font-bold text-9xl lg:text-4xl bg-favBlue text-strong" href="#about">
      Your Hassle Free Tour Partner
    </a>
    <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image src={Image1} alt={'image 1'}>
            </Image>
          </CarouselItem>
          <CarouselItem>
            <Image src={Image2} alt={'image 1'}>
            </Image>
          </CarouselItem>
          <CarouselItem>
            <Image src={Image3} alt={'image 1'}>
            </Image>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        
      </Carousel>

    </div>
  )
}
