import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/Context/CartContext';
import Home from '../src/Pages/Home';
import ProductsPage from '../src/Pages/Products';
import Cart from '../src/Pages/Cart';
import CheckoutPage from '../src/Pages/Checkout';
import ThankYouPage from '../src/Pages/ThankYouPage';
import NotFound from '../src/Pages/NotFound';
import ServicesPage from '../src/Components/Services';
import ContactPage from '../src/Pages/Contact';
import SubscriptionPage from '../src/Pages/Subscription';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProtectedRoute from './Components/protectedRoutes';
import MyAccount from './Pages/myAccount';

function App() {
  return (
    <CartProvider>
      <Router>
        <div
          className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
          style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={
                  <ProtectedRoute><Cart /></ProtectedRoute>
                  } />
                <Route path="/checkout" element={
                  <ProtectedRoute><CheckoutPage /></ProtectedRoute>
                  } />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path='/account' element={<ProtectedRoute>
                  <MyAccount/>
                </ProtectedRoute>}></Route>
                <Route path='/subscription-checkout'></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;