'use client';

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

export default function CartPage() {
  const { cartItems, incrementItem, decrementItem, removeFromCart } = useCart();

  const shippingCost = 10.0;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const total = subtotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
        <h2 className="text-3xl font-semibold mb-4">Your cart is empty!</h2>
        <Link href="/product" className="text-yellow-500 font-medium hover:underline">
          <button className="text-white bg-black px-4 py-2 rounded hover:text-black hover:bg-yellow-400 transition">
            Go to Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row max-w-5xl mx-auto gap-10">
      {/* Cart items list */}
      <div className="flex-1 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-5 flex items-center gap-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              {/* Product Name */}
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.name}</p>

              {/* Price × quantity = line total */}
              <p className="mt-1 font-medium">
                ${Number(item.price).toFixed(2)} x {item.quantity} = $
                {(Number(item.price) * item.quantity).toFixed(2)}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => decrementItem(item.id)}
                  disabled={item.quantity <= 1}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
              aria-label="Remove item"
            >
              <FiTrash2 size={24} />
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-96 bg-white rounded-lg shadow p-6 sticky top-20 h-fit space-y-6">
        <h2 className="text-2xl font-bold border-b pb-4">Order Summary</h2>

        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-lg">
          <span>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-xl font-bold border-t pt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Link href="/checkout">
          <button className="w-full bg-yellow-400 text-white py-3 rounded hover:bg-yellow-500 transition font-semibold">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
