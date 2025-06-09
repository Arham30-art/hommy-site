'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: '',
  })

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 89.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 129.99,
      quantity: 2,
    },
  ])

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed! Thank you, ' + form.firstName)
  }

  const incrementItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decrementItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1
        className="text-4xl font-bold text-center bg-gray-200 py-8 rounded-xl mb-10"
        data-aos="fade-up"
      >
        Checkout Page
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Shipping Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/3 bg-white p-6 rounded-xl shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          {Object.keys(form).map((field) => (
            <label key={field} className="block mb-4">
              <span className="block font-medium capitalize">{field}</span>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          ))}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div
          className="lg:w-1/3 bg-white p-6 rounded-xl shadow-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 pb-4 border-b"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No items in cart</p>
          )}
          <hr className="my-4" />
          <h3 className="text-lg font-bold text-right">Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}