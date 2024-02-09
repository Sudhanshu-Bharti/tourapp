'use client'
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

export default function Sliding() {
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        fetchRandomImages();
    }, []);

    const fetchRandomImages = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/random?count=3', {
                headers: {
                    Authorization: 'I2oCJE4XO98nikE0eew2Zr2-0K6I_uMZwteHJ_UvXhs', // Replace with your Unsplash Access Key
                },
            });
            const data = await response.json();
            const imageUrls = data.map((item: { urls: { regular: any; }; }) => item.urls.regular);
            setRandomImages(imageUrls);
        } catch (error) {
            console.error('Error fetching random images:', error);
        }
    };

    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {randomImages.map((imageUrl, index) => (
                        <CarouselItem key={index} style={{ backgroundImage: `url(${imageUrl})` }}>
                            {/* You can place content inside the CarouselItem if needed */}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
