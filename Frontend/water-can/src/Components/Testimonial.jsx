import { FaStar } from 'react-icons/fa';

function Testimonial({ name, date, rating, review }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      className="px-6 md:px-40 py-5"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h2 className="text-[#121516] text-[22px] font-bold leading-tight tracking-[-0.015em]">
          What Our Customers Say
        </h2>
      </div>
      <article className="flex flex-col gap-3 rounded-lg border border-[#dde1e3] bg-white p-4">
        <div className="flex items-center gap-2">
          <h3 className="text-[#121516] text-base font-bold leading-tight">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                aria-label={i < rating ? 'Filled star' : 'Empty star'}
              />
            ))}
          </div>
        </div>
        <p className="text-[#6a7881] text-sm font-normal leading-normal">{formattedDate}</p>
        <p className="text-[#121516] text-sm font-normal leading-normal">{review}</p>
      </article>
    </section>
  );
}

export default Testimonial;