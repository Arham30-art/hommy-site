'use client'

import { useCart } from '../context/CartContext'
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Checkout() {
  const { cartItems } = useCart() // 👈 cartItems context se le rahe hain
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: '',
  })

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed! Thank you, ' + form.firstName)
    // Optionally: clear cart context items here if needed
  }

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#ccc',
          padding: '40px 20px',
          borderRadius: '12px',
          color: '#333',
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          userSelect: 'none',
          marginBottom: '30px',
        }}
        data-aos="fade-up"
      >
        Checkout Page
      </div>

      <div
        style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        {/* Shipping Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2>Shipping Details</h2>
          {['firstName', 'lastName', 'address', 'zipCode', 'city'].map(
            (field) => (
              <label
                key={field}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
                <input
                  type="text"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '8px',
                    fontSize: '16px',
                    marginTop: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                  }}
                />
              </label>
            )
          )}
          <button
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div
          style={{
            flex: '1 1 300px',
            border: '1px solid #ddd',
            borderRadius: '2rem',
            padding: '20px',
            backgroundColor: '#fafafa',
            height: 'fit-content',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              padding: '5px',
              textAlign: 'center',
            }}
          >
            Order Summary
          </h1>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  fontSize: '16px',
                }}
              >
                <p>
                  {item.name} (x{item.quantity})
                </p>
                <p>${item.price * item.quantity}</p>
              </div>
            ))
          ) : (
            <p
              style={{ textAlign: 'center', color: '#888', marginTop: '10px' }}
            >
              No items in cart
            </p>
          )}
          <hr
            style={{
              margin: '20px 0',
              border: 'none',
              borderTop: '1px solid #ddd',
            }}
          />
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}
