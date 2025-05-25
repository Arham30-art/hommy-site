"use client"
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      className="opacity-0 animate-fadeIn"
      style={{ animationFillMode: 'forwards', animationDuration: '1s', animationTimingFunction: 'ease-in' }}
    >
      {/* Subscribe Section with Background Image */}
      <div
        className="max-w-5xl mx-auto my-10 rounded-xl overflow-hidden bg-cover bg-center text-white px-6 py-16"
        style={{ backgroundImage: "url('/images/3.avif')" }}
      >
        {/* Overlay with fade up animation */}
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Subscribe and earn 30% off
          </h2>

          {/* Input with Button Inside */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full py-3 px-4 pr-32 rounded-full text-black bg-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-green-600 text-white font-semibold px-5 rounded-full hover:bg-green-700 hover:scale-105 transition transform duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Green Footer Section */}
      <div className="bg-gray-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Text */}
          <div className="animate-fadeInUp delay-100">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/1.png" alt="Hommy Logo" width={50} height={50} />
              <span className="text-white font-semibold text-lg">Hommy</span>
            </div>

            <p className="text-sm">
              Bringing you the best furniture with quality and love.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="animate-fadeInUp delay-200">
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Catalogue</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="animate-fadeInUp delay-300">
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Support Center</li>
              <li>Feedback</li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="animate-fadeInUp delay-400">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition duration-300 transform hover:scale-110">
                <FaTiktok aria-label="TikTok icon" />
                TikTok
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-pink-400 transition duration-300 transform hover:scale-110">
                <FaInstagram aria-label="Instagram icon" />
                Instagram
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300 transform hover:scale-110">
                <FaFacebook aria-label="Facebook icon" />
                Facebook
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white mt-10 pt-4 text-center text-sm">
          © 2025 Hommy. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: forwards;
          animation-duration: 1s;
          animation-timing-function: ease-in;
        }
        .animate-slideUp {
          animation-name: slideUp;
          animation-fill-mode: forwards;
          animation-duration: 1s;
          animation-timing-function: ease-out;
        }
        .animate-fadeInUp {
          animation-name: slideUp;
          animation-fill-mode: forwards;
          animation-duration: 1s;
          animation-timing-function: ease-out;
          opacity: 0;
          animation-delay: 0s;
          animation-fill-mode: forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </footer>
  )
}
