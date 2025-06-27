import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f3f4] px-10 py-3 bg-white shadow-md"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-4 text-[#121516]">
        <div className="size-4">
         
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-auto rounded"
                src="https://i.postimg.cc/sX07K31m/Chat-GPT-Image-Jun-26-2025-05-18-08-PM.png"
                alt="AquaSwift logo"
              />
              <h2 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em]">
                AquaSwift
              </h2>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Navigation Links and Buttons */}
      <div className="flex flex-1 justify-end gap-8">
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
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#121516]"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          <div className="absolute top-[60px] left-0 right-0 bg-white border-b border-[#f1f3f4] shadow-md md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              {['Services', 'Products', 'Subscription', 'Contact-us'].map((item) => (
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
            </div>
          </div>
        )}

        {/* Order Now and Cart Buttons */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/products"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 hover:text-white transition"
            aria-label="Order water cans now"
          >
            <span className="truncate">Order Now</span>
          </NavLink>
          <NavLink
            to="/checkout"
            className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#f0f3f4] text-[#121516] hover:bg-blue-600 hover:text-white transition"
            aria-label={`View cart with ${totalItems} items`}
          >
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;