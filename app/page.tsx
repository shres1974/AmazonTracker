import React from 'react';
import Image from 'next/image';
import Searchbar from '@/components/Searchbar';
import HeroCarousel from '@/components/HeroCarousel';
import { getAllProducts } from '@/lib/actions';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      {/* Top (Hero) Section */}
      <section className="pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left text content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2">
              <p className="text-sm text-teal-700 font-semibold uppercase tracking-wider">
                Smart Shopping Starts Here
              </p>
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Discover the Potential of 
              <span className="text-teal-600"> TrackMyAmazon </span>
            </h1>

            <p className="mt-5 text-gray-700">
              Maximize your savings with real-time product analytics, 
              price tracking, and insightful alerts for all your favorite items.
            </p>

            <div className="mt-6">
              <Searchbar />
            </div>
          </div>

          {/* Carousel side */}
          <div className="flex justify-center">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Trending Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts?.map((product:Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;