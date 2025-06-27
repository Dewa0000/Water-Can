import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="bg-[#f0f3f4] min-h-[50vh] flex flex-col justify-center items-center text-center px-6"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <h1 className="text-[32px] md:text-[40px] font-bold text-[#121516] mb-4">
        Pure Water, Delivered Fast
      </h1>
      <p className="text-base md:text-lg text-[#6a7881] max-w-xl mb-6">
        Subscribe or order 20L water cans with just a few taps. Fresh. Reliable. Affordable.
      </p>
      <Link
        to="/products"
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 hover:text-white transition"
        aria-label="Order water cans now"
      >
        <span className="truncate">Order Now</span>
      </Link>
    </section>
  );
}

export default Hero;