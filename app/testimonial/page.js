"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Areeba",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Amazing service! Truly loved the experience.",
    rating: 5,
  },
  {
    name: "Fatima",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Highly satisfied. Would recommend to everyone.",
    rating: 4,
  },
  {
    name: "Hamza",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great customer support and fast delivery!",
    rating: 5,
  },
  {
    name: "Ali",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "Good quality products and timely delivery.",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.065 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" data-aos="fade-up">
      {/* Header under navbar */}
      <header className="bg-gray-300 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-700">Testimonial</h1>
      </header>

      {/* Main Section */}
      <main className="flex-grow bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-1 text-gray-700" data-aos="fade-down">
            How Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto" data-aos="fade-up">
            We value every feedback from our customers. Here’s what they have to say about us.
          </p>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-yellow-300 transition-all duration-300 text-center h-[360px] flex flex-col justify-between font-bold transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />

                  <h4 className="font-semibold text-gray-800 text-center">{item.name}</h4>

                  <p className="italic text-gray-600 mt-2 mb-6 flex-grow flex items-center justify-center">
                    "{item.text}"
                  </p>

                  <StarRating rating={item.rating} />
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation arrows with AOS animation */}
            <div
              className="swiper-button-prev text-yellow-400 absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer z-10 transition-transform duration-300 hover:scale-110"
              data-aos="fade-right"
              style={{ fontSize: "18px" }}
            >
              {/* Custom arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </div>

            <div
              className="swiper-button-next text-yellow-400 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer z-10 transition-transform duration-300 hover:scale-110"
              data-aos="fade-left"
              style={{ fontSize: "18px" }}
            >
              {/* Custom arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </Swiper>

          {/* Custom Pagination container */}
          <div className="custom-pagination flex justify-center mt-8"></div>
        </div>
      </main>

      {/* Styling for swiper pagination dots and navigation */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #facc15; /* yellow-400 */
          opacity: 0.6;
          transition: transform 0.3s ease;
          margin: 0 8px !important; /* more spacing */
        }
        .swiper-pagination-bullet:hover {
          transform: scale(1.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        /* Remove default swiper navigation arrows, since we use custom */
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
