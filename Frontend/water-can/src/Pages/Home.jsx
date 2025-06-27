import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
      
        <main className="flex flex-1 flex-col">
          <Hero />
          <Testimonial
            name="Priya Sharma"
            date="2023-08-15"
            rating={5}
            review="AquaSwift has been a lifesaver! Their water is always fresh, and the delivery is prompt and reliable. Highly recommend!"
          />
        </main>
    
      </div>
    </div>
  );
}

export default Home;