import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState('');

  const formatDate = (input) => {
    const date = new Date(input);
    if (isNaN(date)) return 'Invalid date';
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Please Login Again');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`${backendUrl}/auth/me`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUserData(data || {});
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await fetch(`${backendUrl}/checkout/my-orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();

        if (res.ok) {
          setOrders(data || []);
        } else {
          setError(data.message || 'Unable to fetch orders');
        }
      } catch (err) {
        setError('Something went wrong. Try again later.');
      }
    };

    fetchOrders();
  }, [navigate]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await fetch(`${backendUrl}/checkout/my-subscriptions`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();

        if (res.ok) {
          setSubscriptions(data || []);
        } else {
          setError(data.message || 'Unable to fetch subscriptions');
        }
      } catch (err) {
        setError('Something went wrong. Try again later.');
      }
    };

    fetchSubscriptions();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex grow flex-col">
        <div className="flex-1 justify-center py-4 px-4 sm:px-6 md:px-10">
          <div className="layout-content-container flex flex-col max-w-full sm:max-w-[960px]">
            <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
              <p className="text-[#121516] text-2xl sm:text-[32px] font-bold">
                My Account
              </p>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Personal Info */}
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold px-2 sm:px-4 pt-2 sm:pt-4">Personal Information</h3>
            <div className="px-2 sm:px-4">
              <p className="text-sm sm:text-base">Name: {userData.fullName || 'N/A'}</p>
              <p className="text-sm sm:text-base">Email: {userData.email || 'N/A'}</p>
              <p className="text-sm sm:text-base">Phone Number: {userData.phoneNumber || 'N/A'}</p>
            </div>

            {/* Orders */}
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold px-2 sm:px-4 pt-4">Order History</h3>
            <div className="px-2 sm:px-4 py-2">
              <div className="overflow-x-auto border rounded-xl">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-3 text-left">Order ID</th>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2 text-sm">{order.id}</td>
                        <td className="px-4 py-2 text-sm">{formatDate(order.date)}</td>
                        <td className="px-4 py-2 text-sm">
                          <span className="bg-[#f0f3f4] px-3 py-1 rounded-full text-xs font-medium">
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subscriptions */}
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold px-2 sm:px-4 pt-4">Subscription</h3>
            <div className="px-2 sm:px-4 py-2">
              <div className="overflow-x-auto border rounded-xl">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-3 text-left">Subscription ID</th>
                      <th className="px-4 py-3 text-left">Start Date</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map((sub, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2 text-sm">{sub.id}</td>
                        <td className="px-4 py-2 text-sm">{formatDate(sub.startDate)}</td>
                        <td className="px-4 py-2 text-sm">
                          <span className="bg-[#f0f3f4] px-3 py-1 rounded-full text-xs font-medium">
                            {sub.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm">{sub.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Logout */}
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold px-2 sm:px-4 pt-4">Account Settings</h3>
            <div
              className="flex items-center justify-between px-2 sm:px-4 py-3 cursor-pointer"
              onClick={handleLogout}
            >
              <p className="text-sm sm:text-base">Log Out</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
