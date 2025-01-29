"use client";
import React from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        emulateTouch
        autoFocus={false}
        interval={4000}
        transitionTime={600}
        className="rounded-xl shadow-lg"
      >
        {heroImages.map((image) => (
          <div key={image.alt} className="flex justify-center items-center">
            <Image
              src={image.imgUrl}
              alt={image.alt}
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
        ))}
      </Carousel>

      {/* Decorative Arrow */}
      <div className="hidden xl:block absolute -left-16 bottom-0">
        <Image
          src="/assets/icons/hand-drawn-arrow.svg"
          alt="arrow"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;