import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Only Logo Image, Bigger Size */}
      <a href="/">
  <img
    src="https://i.postimg.cc/tgzCyNZm/Chat-GPT-Image-Jun-25-2025-11-04-55-PM.png" // replace with your logo URL
    alt="AquaSwift Logo"
    className="h-24 w-auto" // was h-16 — now bigger (h-24 = 6rem)
  />
</a>


      {/* Optional nav links (keep if needed, or remove for minimal look) */}
      <div className="space-x-6 hidden md:flex">
        <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
        <a href="/cart" className="text-gray-700 hover:text-blue-600">Cart</a>
        <a href="/checkout" className="text-gray-700 hover:text-blue-600">Checkout</a>
      </div>
    </nav>
  );
}


export default Navbar;
