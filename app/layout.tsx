import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'TrackMyAmazon',
  description: 'An Amazon Price Tracker monitors prices and alerts users to drops for smarter shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        Using a soft gradient background for a fresh, modern feel.
      */}
      <body className={`${inter.className} bg-gradient-to-r from-teal-50 to-indigo-50 text-gray-900 min-h-screen flex flex-col`}>
        <Navbar />
        
        {/* Main wrapper for the page content */}
        <main className="w-full max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 py-6 flex-1">
          {children}
        </main>

        {/* Simple footer to conclude the layout */}
        <footer className="w-full bg-white/80 backdrop-blur-md py-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-700 tracking-wide">
            &copy; {new Date().getFullYear()} TrackMyAmazon — All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
