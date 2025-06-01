'use client';
import About from '@/components/About';
import MainSection from '@/components/MainSection';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Testimonials from '@/components/Testimonial';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hommy - Make Your Room Comfortable & Useful</title>
      </Head>
      {/* Hero Section */}
      <section className="bg-gray-400 text-white relative overflow-hidden">
        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side (Text) */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p className="text-yellow-400 font-bold mb-4">
              Affordable Price, Good Quality
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Make Your Room <br /> Comfortable & Useful
            </h1>
            <p className="text-lg mb-8 text-white">
              With a focus on design and functionality, Hommy offers a balance
              between comfort and practicality.
            </p>
            {/* Buttons */}
            <div
              className="flex space-x-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="bg-black hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition">
                Shop Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-green-500 border border-green-500 px-4 py-2 rounded-full flex items-center space-x-2 transition">
                <span>See Videos</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side (Image) */}
          {/* Image */}
          <div
            className="rounded-xl overflow-hidden shadow-lg w-[250px] h-[300px] md:w-[450px] md:h-[600px]"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <Image
              src="/images/7.avif"
              alt="About"
              width={450}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <MainSection />
      <About />
      <br /> <br /> <br /> <br />
      <Testimonials />
    </>
  );
};

export default Home;
