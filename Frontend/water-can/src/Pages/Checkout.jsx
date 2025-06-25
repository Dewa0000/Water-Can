import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      alert("Fill all required fields");
      return;
    }

    // Simulate order placement
    console.log("Order placed:", { ...form, cart });

    // Clear cart
    setCart([]);

    // Navigate to thank you / success
    navigate("/thank-you");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-inter font-bold mb-4">Checkout</h2>

      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="notes"
          placeholder="Any notes (optional)"
          value={form.notes}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="mt-4">
          <h3 className="font-semibold">Total: ₹{total}</h3>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
