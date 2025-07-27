import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const token = localStorage.getItem("token");

  return (
    <header className="bg-white border-b border-[#f1f3f4] px-4 py-3 shadow-md font-sans">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 max-w-[70%]">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              className="h-10 w-auto rounded"
              src="https://i.postimg.cc/sX07K31m/Chat-GPT-Image-Jun-26-2025-05-18-08-PM.png"
              alt="AquaSwift logo"
            />
            <h2 className="text-[#121516] text-lg font-bold leading-tight tracking-tight">
              AquaSwift
            </h2>
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {['Services', 'Products', 'Subscription', 'Contact', 'Login', 'Signup'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm font-medium text-[#121516] hover:text-blue-600 ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Order, Cart, Account */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/products"
            className="px-4 py-2 bg-[#c5dceb] text-sm font-bold rounded-full hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
          >
            Order Now
          </NavLink>

          <NavLink
            to="/cart"
            className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#f0f3f4] text-[#121516] hover:bg-blue-600 hover:text-white transition"
            aria-label={`Cart with ${totalItems} items`}
          >
            <FaShoppingCart size={20} />
            {token && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>

          {token && (
            <NavLink
              to="/account"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f0f3f4] text-[#121516] hover:bg-blue-600 hover:text-white transition"
              aria-label="Account"
            >
              <FaUser size={20} />
            </NavLink>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,80v48a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H216A8,8,0,0,1,224,80Z" />
              <path d="M224,176v48a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176a8,8,0,0,1,8-8H216A8,8,0,0,1,224,176Z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="w-full mt-3 flex flex-col gap-3 md:hidden border-t pt-4 border-[#f1f3f4]">
            {['Services', 'Products', 'Subscription', 'Contact', 'Login', 'Signup'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium text-[#121516] text-center hover:text-blue-600 ${
                    isActive ? 'text-blue-600 underline' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
