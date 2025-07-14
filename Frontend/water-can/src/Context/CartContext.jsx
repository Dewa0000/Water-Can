// CartContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProd(){
      const backendUrl = 
      import.meta.env.VITE_BACKEND_URL ||
      "https://water-can-backend.onrender.com";
      try{
        const res = await fetch(`${backendUrl}/cart`);
        const data = await res.json();
        setCart(Array.isArray(data.items) ? data.items : []);

        console.log(data.items);
      }catch(err){
        console.log("Failure in fetching products:", err.message)
      }
    }
    fetchProd();
  },[])

  const syncCartWithBackend = async (updatedCart) => {
  try {
    const cleanedCart = updatedCart.map(item => ({
      productID: item._id,
      qty: item.qty
    }));

    await fetch("http://localhost:5000/cart/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cleanedCart })
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
  console.log("Updated Cart:", updatedCart);

  setCart(updatedCart);
  syncCartWithBackend(updatedCart); // ✅ sync with backend
};


  const removeFromCart = (product) => {
  let updatedCart;

  const exists = cart.find((item) => item._id === product._id);
  if (!exists) return;

  if (exists.qty === 1) {
    updatedCart = cart.filter((item) => item._id !== product._id);
  } else {
    updatedCart = cart.map((item) =>
      item._id === product._id ? { ...item, qty: item.qty - 1 } : item
    );
  }
  console.log("Updated Cart:", updatedCart);

  setCart(updatedCart);
  syncCartWithBackend(updatedCart); // ✅ sync with backend
};


  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);