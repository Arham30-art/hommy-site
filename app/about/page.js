"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="bg-yellow-100 text-black min-h-[500px] flex items-center justify-between px-10">
        <div className="max-w-xl" data-aos="fade-right">
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-6">
            Since 2010, we've been crafting beautifully designed pieces that blend function and elegance to transform your home.
          </p>
          <button className="bg-black text-white px-6 py-3 hover:bg-yellow-500 rounded-lg transition-colors duration-300 flex items-center">
            Learn More <span className="text-xl ml-2">&#8594;</span>
          </button>
        </div>

        {/* Image with fixed size and background color */}
        <div className="hidden md:block relative w-[500px] h-[400px] rounded-lg bg-white shadow-lg" data-aos="fade-left">
          <Image
            src="/images/10.avif"
            alt="Furniture Showcase"
            fill
            style={{ objectFit: "cover", borderRadius: "0.5rem" }}
          />
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-100 py-20 px-10 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="zoom-in">
            The FurniFlex Journey Story
          </h2>

          <div className="grid gap-16">
            {/* 1 - Humble Beginnings */}
            <div className="md:flex items-center gap-8" data-aos="fade-up">
              <Image
                src="/images/11.jpg"
                alt="From Humble Beginnings"
                width={400}
                height={300}
                className="rounded-full border-4 border-white shadow-md"
              />
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">From Humble Beginnings</h3>
                <p>
                  Our story began in 2010 in a small workshop, driven by a passion for creating beautiful and comfortable furniture.
                </p>
              </div>
            </div>

            {/* 2 - Milestones and Achievements */}
            <div className="md:flex items-center gap-8 flex-row-reverse" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="/images/14.jpeg"
                alt="Milestones"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">Milestones and Achievements</h3>
                <p>
                  Over the years, we’ve reached several significant milestones, including new stores, product expansions, and design innovations.
                </p>
              </div>
            </div>

            {/* 3 - Innovation and Growth */}
            <div className="md:flex items-center gap-8" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/images/16.jpeg"
                alt="Innovation"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">Innovation and Growth</h3>
                <p>
                  Innovation is at the heart of everything we do. From 2016 onwards, we’ve introduced eco-friendly furniture and smart space solutions.
                </p>
              </div>
            </div>

            {/* 4 - Global Reach */}
            <div className="md:flex items-center gap-8 flex-row-reverse" data-aos="fade-up" data-aos-delay="300">
              <Image
                src="/images/15.jpeg"
                alt="Global Reach"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">Our Global Reach</h3>
                <p>
                  Today, we serve customers around the world with a wide distribution network and a commitment to quality.
                </p>
              </div>
            </div>

            {/* 5 - Looking Ahead */}
            <div className="md:flex items-center gap-8" data-aos="fade-up" data-aos-delay="400">
              <Image
                src="/images/17.jpeg"
                alt="Looking Ahead"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">Looking Ahead</h3>
                <p>
                  As we look to the future, our mission remains the same – to craft beautiful, functional, and sustainable furniture for every home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
