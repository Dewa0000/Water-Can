import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-blue-100 min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
        Pure Water, Delivered Fast.
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        Subscribe or Order 20L water cans with just a few taps. Fresh. Reliable. Affordable.
      </p>
      <Link
        to="/products"
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl transition"
      >
        Order Now
      </Link>
    </section>
  );
}

export default Hero;
