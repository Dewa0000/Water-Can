import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function NotFound() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-[#121516] text-[32px] font-bold leading-tight tracking-[-0.015em]">
                Page Not Found
              </h1>
            </div>
            <p className="text-[#6a7881] text-sm font-normal leading-normal p-4">
              Sorry, the page you’re looking for doesn’t exist. Try returning to the homepage or
              exploring our products.
            </p>
            <NavLink
              to="/"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] mt-4 mx-4 hover:bg-blue-600 hover:text-white transition"
              aria-label="Return to homepage"
            >
              <span className="truncate">Back to Home</span>
            </NavLink>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default NotFound;