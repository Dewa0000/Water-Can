import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Section */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-3xl">💧</span>
          <h1 className="text-xl font-bold">AquaSwift</h1>
        </div>

        {/* Contact Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX" // Replace with real WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <p className="text-center text-sm mt-4 text-gray-300">
        &copy; {new Date().getFullYear()} AquaSwift. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
