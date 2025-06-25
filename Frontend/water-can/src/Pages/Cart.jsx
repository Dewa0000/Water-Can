import React from "react";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p>₹{item.price} x {item.qty}</p>
              </div>

              <div className="flex gap-2 items-center">
                <button
                  onClick={() => addToCart(item)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => removeFromCart(item)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
