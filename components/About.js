import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaTruck, FaShieldAlt, FaWallet } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
   <section className='pt-16'>
     <div className="text-gray-900 -mt-30 py-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        {/* Center - Heading & Paragraph */}
        <div
          className="max-w-3xl text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
            WE PRIORITIZE CUSTOMER SATISFACTION
          </h2>
          <p className="text-black text-lg">
            We strive to provide our customers with the best possible shopping
            experience.
          </p>
        </div>

        {/* Main Grid: Cards (Left) + Image (Right) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cards */}
          <div className="space-y-6 md:col-span-2">
            <div
              className="bg-white p-6 rounded-xl shadow-md hover:bg-green-500 hover:shadow-2xl transition duration-300 hover:text-white cursor-pointer flex items-start gap-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <FaTruck className="text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold">
                  Fast and Free Shipping
                </h3>
                <p className="mt-2">
                  We offer fast and free shipping for our loyal customers.
                </p>
              </div>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md hover:bg-green-500 hover:shadow-2xl transition duration-300 hover:text-white cursor-pointer flex items-start gap-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <FaShieldAlt className="text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Product Guarantee</h3>
                <p className="mt-2">
                  Exchange the goods you've purchased if a product defect is
                  found.
                </p>
              </div>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md hover:bg-green-500 hover:shadow-2xl transition duration-300 hover:text-white cursor-pointer flex items-start gap-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <FaWallet className="text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Easy Installment</h3>
                <p className="mt-2">
                  Play lighter installments; transactions become easier.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative h-[300px] md:h-[400px] w-full md:w-[350px] rounded-xl shadow-xl overflow-hidden"
            data-aos="fade-left"
          >
            <Image
              src="/images/7.jpg"
              alt="About"
              fill
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </div>
   </section>
  );
}
