"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hommy - Exclusive Furniture</title>
      </Head>

    

      {/* ✅ Existing Main Section */}
      <section className="bg-white text-gray-900 min-h-screen py-12">
        <div
          className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
          data-aos="fade-up"
        >
          <div className="text-green-600 font-extrabold text-4xl md:text-5xl">
            Exclusive Furniture
          </div>

          <div className="text-left text-black text-lg md:text-xl px-4 max-w-xl">
            We offer a wide variety of furniture products to suit your unique style and needs.
          </div>

          <button className="border-2 border-black text-green-600 px-5 py-3 rounded-md flex items-center space-x-3 hover:bg-yellow-600 hover:text-white transition-transform transform hover:scale-105 shadow-md">
            <span className="font-semibold text-lg">Discover Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="container mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div
            className="md:col-span-3 border shadow-2xl rounded-2xl overflow-hidden relative min-h-[450px] min-w-[220px] group cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Image
              src="/images/5.avif"
              alt="Bedroom"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
              quality={90}
              priority
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-black px-6 py-3 rounded-lg text-center font-semibold text-lg">
              <b>Bedroom</b>
              <p className="text-sm mt-1">156 items</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 flex flex-col space-y-8">
            {/* Image Area */}
            <div
              className="relative bg-gray-200 h-56 md:h-72 rounded-2xl w-full overflow-hidden group cursor-pointer shadow-xl"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Image
                src="/images/7.avif"
                alt="Living Room"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                quality={90}
                priority
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-black px-6 py-3 rounded-lg text-center font-semibold text-lg">
                <b>Living Room</b>
                <p className="text-sm mt-1">126 items</p>
              </div>
            </div>

            {/* Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="relative rounded-2xl shadow-xl overflow-hidden h-44 group cursor-pointer"
                data-aos="fade-left"
                data-aos-delay="450"
              >
                <Image
                  src="/images/8.jpeg"
                  alt="Work Space"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-2xl"
                  quality={90}
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-black px-6 py-3 rounded-lg text-center font-semibold text-lg">
                  <b>Workspace</b>
                  <p className="text-sm mt-1">150 items</p>
                </div>
              </div>

              <div
                className="relative rounded-2xl shadow-xl overflow-hidden h-44 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Image
                  src="/images/9.jpeg"
                  alt="Kitchen"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-2xl"
                  quality={90}
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-black px-6 py-3 rounded-lg text-center font-semibold text-lg">
                  <b>Kitchen</b>
                  <p className="text-sm mt-1">156 items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
