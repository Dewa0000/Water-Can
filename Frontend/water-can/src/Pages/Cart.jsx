import { useCart } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-[#121516] text-[32px] font-bold leading-tight tracking-[-0.015em]">
                Your Cart
              </h1>
            </div>
            {cart.length > 0 ? (
              <div className="p-4">
                <div className="grid gap-4">
                  {cart.map((item, index) => (
                    <article
                      key={index}
                      className="flex justify-between items-center border-b border-[#dde1e3] py-2"
                    >
                      <div className="flex flex-col gap-1">
                        <p className="text-[#121516] text-base font-bold leading-tight">
                          {item.name} (x{item.qty})
                        </p>
                        <p className="text-[#6a7881] text-sm font-normal leading-normal">
                          ₹{item.price * item.qty}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="text-red-500 text-sm font-medium hover:text-red-700"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        Remove
                      </button>
                    </article>
                  ))}
                  <div className="flex justify-between text-[#121516] text-base font-bold leading-normal pt-2">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
                <NavLink
                  to="/checkout"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] mt-4 hover:bg-blue-600 hover:text-white transition"
                  aria-label="Proceed to checkout"
                >
                  <span className="truncate">Proceed to Checkout</span>
                </NavLink>
              </div>
            ) : (
              <p className="text-[#6a7881] text-sm font-normal leading-normal p-4">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;