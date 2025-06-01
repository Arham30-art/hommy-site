'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <header className="bg-gray-200 shadow-md p-3 relative z-50">
      <nav
        className="container mx-auto px-5 py-2 flex justify-between items-center"
        data-aos="fade-down"
      >
        {/* Logo */}
        <div className="flex items-center space-x-5" data-aos="fade-right">
          <Image src="/images/1.png" alt="Logo" width={50} height={50} />
          <span className="text-black text-xl font-bold">Hommy</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black" data-aos="fade-up">
          <li>
            <Link href="/" className="hover:text-green-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500">About Us</Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-green-500">Product</Link>
          </li>
          <li>
            <Link href="/testimonial" className="hover:text-green-500">Testimonial</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" data-aos="zoom-in">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Cart and Login Buttons */}
        <div className="flex items-center space-x-3 relative" data-aos="fade-left">
          {/* Cart Button */}
          <Link href="/cart" className="relative">
            <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.5l1.664 9.32a1.5 1.5 0 001.478 1.18h9.216a1.5 1.5 0 001.478-1.18l1.572-7.86H5.25m14.25 0h-3.75m-6 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          {/* Login Button */}
          <Link href="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Glassy + Closes on Click) */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-white/30 backdrop-blur-md shadow-2xl p-5 z-20 rounded-b-xl border border-white/30 transition-all duration-300 ease-in-out"
          data-aos="fade-down"
        >
          <ul className="space-y-3 text-black font-semibold text-lg">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-white/20 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-white/20 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-white/20 transition"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/testimonial"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-white/20 transition"
              >
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
