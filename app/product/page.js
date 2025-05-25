"use client";

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '../context/CartContext';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 text-center" data-aos="fade-down">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Elegant Furniture</h2>
      <p className="text-gray-600">Stylish & comfortable pieces for every room</p>
    </section>
  );
}

function CategoryFilter({ categories, activeCategory, setActiveCategory, setActivePage }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setActivePage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border-2
              ${
                activeCategory === category
                  ? 'bg-yellow-400 border-yellow-400 text-white'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-yellow-400 hover:bg-yellow-100'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

function ProductList({ items, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {items.map(item => (
        <div
          key={item.id}
          className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow transform hover:shadow-yellow-400 hover:scale-105"
          data-aos="zoom-in"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-shadow hover:shadow-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-blue-600 font-bold mt-1">
              {item.price} <span className="line-through text-gray-500">{item.discount}</span>
            </p>
            <p className="text-yellow-500">
              {'★'.repeat(Math.floor(item.rating))}
              {'☆'.repeat(5 - Math.floor(item.rating))}
            </p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-yellow-400 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Pagination({ totalPages, activePage, setActivePage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10 gap-2" data-aos="fade-up">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setActivePage(i + 1)}
          className={`px-4 py-2 rounded-full border-2 transition-colors
            ${
              activePage === i + 1
                ? 'bg-yellow-400 border-yellow-400 text-white'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-yellow-100 hover:border-yellow-400'
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default function Product() {
  const [activePage, setActivePage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const furnitureData = [
    { id: 1, name: 'Modern Sofa', price: 499, discount: 599, rating: 4.5, category: 'Sofas', image: '/images/sofa.jpeg' },
    { id: 2, name: 'Wooden Chair', price: 129, discount: 149, rating: 4.0, category: 'Chairs', image: '/images/wooden.jpeg' },
    { id: 3, name: 'Glass Coffee Table', price: 219, discount: 249, rating: 4.2, category: 'Tables', image: '/images/glass.jpeg' },
    { id: 4, name: 'Designer Bed', price: 899, discount: 999, rating: 4.8, category: 'Beds', image: '/images/designer.jpeg' },
    { id: 5, name: 'Wooden Cupboard', price: 79, discount: 99, rating: 4.3, category: 'Cupboards', image: '/images/cupboard1.jpeg' },
    { id: 6, name: 'Modern Bed', price: 199, discount: 229, rating: 4.1, category: 'Beds', image: '/images/modern.jpeg' },
    { id: 7, name: 'Stylist Cupboard', price: 699, discount: 799, rating: 4.7, category: 'Cupboards', image: '/images/cupboard2.jpeg' },
    { id: 8, name: 'Expensive Bed', price: 89, discount: 109, rating: 4.4, category: 'Beds', image: '/images/expensive.jpeg' },
    { id: 9, name: 'Plastic chair', price: 249, discount: 299, rating: 4.6, category: 'Chairs', image: '/images/plastic.jpeg' },
    { id: 10, name: 'Modern chair', price: 119, discount: 139, rating: 4.2, category: 'Chairs', image: '/images/classic.jpeg' },
    { id: 11, name: 'Office Desk', price: 349, discount: 399, rating: 4.5, category: 'Tables', image: '/images/office.jpeg' },
    { id: 12, name: 'Expensive Cupboard', price: 159, discount: 179, rating: 4.3, category: 'Cupboards', image: '/images/cupboard3.jpeg' },
    { id: 13, name: 'Luxury Sofa', price: 599, discount: 699, rating: 4.9, category: 'Sofas', image: '/images/45.jpeg' },
    { id: 14, name: 'Classic Dining Chair', price: 149, discount: 169, rating: 4.4, category: 'Chairs', image: '/images/dining.jpeg' },
    { id: 15, name: 'Elegant Side Table', price: 199, discount: 219, rating: 4.6, category: 'Tables', image: '/images/Elegant.jpeg' },
    { id: 16, name: 'Dining Table', price: 89, discount: 99, rating: 4.5, category: 'Tables', image: '/images/diningT.jpeg' },
  ];
  

  const categories = ['All', ...new Set(furnitureData.map(item => item.category))];
  const filteredItems = activeCategory === 'All' ? furnitureData : furnitureData.filter(item => item.category === activeCategory);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setActivePage={setActivePage}
      />
      <main className="container mx-auto px-4 py-4">
        <ProductList items={currentItems} addToCart={addToCart} />
        <Pagination totalPages={totalPages} activePage={activePage} setActivePage={setActivePage} />
      </main>
    </div>
  );
}
