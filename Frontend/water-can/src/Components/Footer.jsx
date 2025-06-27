import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }} className="flex justify-center bg-blue-900 text-white py-10 px-5">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 text-center @container">
          {/* Brand and Links Section */}
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-between">
            {/* Brand Section */}
            <div className="flex items-center gap-2">
              <img
                className="h-24 w-auto rounded"
                src="https://i.postimg.cc/sX07K31m/Chat-GPT-Image-Jun-26-2025-05-18-08-PM.png"
                alt="AquaSwift logo"
              />
              <h1 className="text-xl font-bold">AquaSwift</h1>
            </div>
            {/* Policy Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-300 text-base font-normal leading-normal min-w-40 hover:text-blue-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-300 text-base font-normal leading-normal min-w-40 hover:text-blue-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: 'Instagram',
                icon: <FaInstagram size={24} />,
                href: 'https://www.instagram.com/yourusername',
              },
              {
                name: 'WhatsApp',
                icon: <FaWhatsapp size={24} />,
                href: 'https://wa.me/91XXXXXXXXXX', // Replace with real WhatsApp number
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300"
                aria-label={`${social.name} link`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          {/* Copyright */}
          <p className="text-gray-300 text-base font-normal leading-normal mt-4">
            © {new Date().getFullYear()} AquaSwift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;