"use client"; // Mark this as a Client Component
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // For programmatic navigation
import { Dialog, Transition } from '@headlessui/react'; // For the search modal

const Navbar = () => {
  const router = useRouter(); // Initialize the router
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // State for search modal

  // Open and close the search modal
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  // Handle wishlist button click
  const handleWishlistClick = () => {
    router.push('/wishlist'); // Navigate to the wishlist page
  };

  // Handle user button click
  const handleUserClick = () => {
    router.push('/profile'); // Navigate to the profile page
  };

  // Nav icons with onClick handlers
  const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search', onClick: openSearchModal },
    { src: '/assets/icons/black-heart.svg', alt: 'heart', onClick: handleWishlistClick },
    { src: '/assets/icons/user.svg', alt: 'user', onClick: handleUserClick },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
      <nav className="max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/icons/logo.svg"
            width={28}
            height={28}
            alt="logo"
          />
          <span className="text-xl font-bold text-gray-800">
            Track<span className="text-teal-600">MyAmazon</span>
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {navIcons.map((icon) => (
            <button
              key={icon.alt}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label={icon.alt}
              onClick={icon.onClick} // Attach the onClick handler
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Search Modal */}
      <Transition appear show={isSearchModalOpen} as={React.Fragment}>
        <Dialog as="div" onClose={closeSearchModal} className="fixed inset-0 z-50">
          {/* Overlay */}
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title as="h3" className="text-lg font-bold text-gray-800">
                    Search Products
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={closeSearchModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <Image
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>

                {/* Search Input */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Search Button */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Search initiated');
                      closeSearchModal();
                    }}
                    className="w-full py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                  >
                    Search
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;