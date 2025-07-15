import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const backendUrl =
      import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com/";

    async function fetchCart() {
      try {
        const res = await fetch(`${backendUrl}/cart/${userId}`);
        const data = await res.json();
        setCart(Array.isArray(data.items) ? data.items : []);
        console.log("Fetched Cart:", data.items);
      } catch (err) {
        console.error("Failure in fetching cart:", err.message);
      }
    }

    fetchCart();
  }, []);

  const syncCartWithBackend = async (updatedCart) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const cleanedCart = updatedCart.map(item => ({
      productID: item._id,
      qty: item.qty
    }));

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com/";

    try {
      await fetch(`${backendUrl}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, items: cleanedCart })
      });
    } catch (err) {
      console.error("Failed to sync cart with backend:", err.message);
    }
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    let updatedCart;

    if (exists) {
      updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }

    setCart(updatedCart);
    syncCartWithBackend(updatedCart);
  };

  const removeFromCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    if (!exists) return;

    let updatedCart;
    if (exists.qty === 1) {
      updatedCart = cart.filter((item) => item._id !== product._id);
    } else {
      updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty - 1 } : item
      );
    }

    setCart(updatedCart);
    syncCartWithBackend(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
