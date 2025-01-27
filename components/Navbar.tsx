import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navIcons = [
  { src: 'assets/icons/search.svg', alt: 'search' },
  { src: 'assets/icons/black-heart.svg', alt: 'heart' },
  { src: 'assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
      <nav className="max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 py-3 flex items-center justify-between">
        {/* Logo Section */}
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
    </header>
  )
}

export default Navbar

