import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    image: '/images/10.jpeg',
    message: "I was able to find the perfect pieces for my home, and the quality of the items I received was exceptional. Thank you.",
    stars: 5,
    name: "Paula Momra",
    role: "Designer",
  },
  {
    image: '/images/11.jpeg',
    message: "I had a great shopping experience and would highly recommend it to anyone looking for stylish, high-quality furniture.",
    stars: 5,
    name: "Judith Rodriguez",
    role: "Architect",
  },
  {
    image: '/images/12.jpeg',
    message: "I was so impressed with the selection of furniture. They have a great variety of styles and colors to choose from. I’ll definitely be shopping here again.",
    stars: 5,
    name: "Alex Buckmaster",
    role: "Homeowner",
  },
];

export default function Testimonials() {
  return (
    <div className='bg-gray-200 py-12 px-4 md:px-0'> 
      <section className="max-w-10xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-2">Testimonials</h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            How happy they are with our services
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 transition duration-300 hover:bg-green-700 hover:text-white hover:scale-105 cursor-pointer"
            >
              {/* Image */}
              <div className="w-24 h-24 mx-auto mb-2 relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.role}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
              {/* Name */}
              <h1 className="text-center font-bold mb-1">{item.name}</h1>
              <p className="text-center text-sm mb-3">{item.role}</p>

              {/* Message */}
              <p className="mb-4 italic text-center">"{item.message}"</p>

              {/* Stars */}
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(item.stars)].map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button className="border-2 border-green-600 text-black px-6 py-3 rounded-md font-semibold transition duration-300 hover:bg-yellow-600 hover:text-white hover:border-green-700">
            See More
          </button>
        </div>
      </section>
    </div>
  );
}
