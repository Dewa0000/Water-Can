import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Order Confirmed!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for your order. Your water cans will be delivered soon.</p>

      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-all">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
