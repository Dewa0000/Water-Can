import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // New state for profile/icons dropdown

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const token = localStorage.getItem('token');

  return (
    <header
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f3f4] px-4 py-3 bg-white shadow-md sm:px-6 md:px-10"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-4 text-[#121516]">
        <div className="size-4">
          {/* Placeholder for logo SVG if needed */}
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-auto rounded sm:h-12"
                src="https://i.postimg.cc/sX07K31m/Chat-GPT-Image-Jun-26-2025-05-18-08-PM.png"
                alt="AquaSwift logo"
              />
              <h2 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] sm:text-xl">
                AquaSwift
              </h2>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Navigation Links and Buttons */}
      <div className="flex items-center gap-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {['Services', 'Products', 'Subscription', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[#121516] text-sm font-medium leading-normal hover:text-blue-600 ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          {!token && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-[#121516] text-sm font-medium leading-normal hover:text-blue-600 ${
                    isActive ? 'text-blue-600 underline' : ''
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `text-[#121516] text-sm font-medium leading-normal hover:text-blue-600 ${
                    isActive ? 'text-blue-600 underline' : ''
                  }`
                }
              >
                Signup
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#121516] p-2"
            aria-label="Toggle navigation menu"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white border-b border-[#f1f3f4] shadow-md md:hidden z-10">
            <div className="flex flex-col items-center gap-4 py-4">
              {['Services', 'Products', 'Subscription', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-[#121516] text-sm font-medium leading-normal hover:text-blue-600 ${
                      isActive ? 'text-blue-600 underline' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
              {!token && (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `text-[#121516] text-sm font-medium leading-normal hover:text-blue-600 ${
                        isActive ? 'text-blue-600 underline' : ''
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `text-[#121516] text-sm font-medium leading-normal hover:text-blue-600 ${
                        isActive ? 'text-blue-600 underline' : ''
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Signup
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}

        {/* Order Now, Cart, and My Account Buttons */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/products"
            className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 hover:text-white transition"
            aria-label="Order water cans now"
          >
            <span className="truncate">Order Now</span>
          </NavLink>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f0f3f4] text-[#121516] hover:bg-blue-600 hover:text-white transition md:hidden"
              aria-label="Toggle profile and cart menu"
            >
              <FaUser size={20} />
            </button>
            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#f1f3f4] shadow-md rounded-md md:hidden z-10">
                <NavLink
                  to="/cart"
                  className="flex items-center gap-2 px-4 py-2 text-[#121516] text-sm font-medium hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <FaShoppingCart size={16} />
                  <span>Cart ({totalItems})</span>
                </NavLink>
                {token && (
                  <NavLink
                    to="/my-account"
                    className="flex items-center gap-2 px-4 py-2 text-[#121516] text-sm font-medium hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FaUser size={16} />
                    <span>My Account</span>
                  </NavLink>
                )}
              </div>
            )}
          </div>
          <NavLink
            to="/cart"
            className="hidden md:flex relative items-center justify-center h-10 w-10 rounded-full bg-[#f0f3f4] text-[#121516] hover:bg-blue-600 hover:text-white transition"
            aria-label={`View cart with ${totalItems} items`}
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
              className="hidden md:flex relative items-center justify-center h-10 w-10 rounded-full bg-[#f0f3f4] text-[#121516] hover:bg-blue-600 hover:text-white transition"
              aria-label="Go to my account"
            >
              <FaUser size={20} />
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;