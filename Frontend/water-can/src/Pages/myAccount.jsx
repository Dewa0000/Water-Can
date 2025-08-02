import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]); // New state for subscriptions
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Please Login Again');
        navigate('/login');
        return;
      }
      console.log('JWT Token in localStorage:', token);

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
        console.log('Fetched user data:', data);
        setUserData(data || {});
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No token found, redirecting to login...');
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
          console.log('Order Data:', data);
        } else {
          console.error('Error fetching orders:', data.message || data.error);
          setError(data.message || 'Unable to fetch orders');
        }
      } catch (err) {
        console.error('Fetch order error:', err.message);
        setError('Something went wrong. Try again later.');
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No token found, redirecting to login...');
        navigate('/login');
        return;
      }

      try {
        const res = await fetch(`${backendUrl}/checkout/my-subscriptions`, { // Assume this endpoint
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();

        if (res.ok) {
          setSubscriptions(data || []);
          console.log('Subscription Data:', data);
        } else {
          console.error('Error fetching subscriptions:', data.message || data.error);
          setError(data.message || 'Unable to fetch subscriptions');
        }
      } catch (err) {
        console.error('Fetch subscription error:', err.message);
        setError('Something went wrong. Try again later.');
      }
    };

    fetchSubscriptions();
  }, []);

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
              <p className="text-[#121516] text-2xl sm:text-[32px] font-bold leading-tight tracking-[-0.015em]">
                My Account
              </p>
            </div>
            {error && <p className="text-red-500 text-center px-2 sm:px-4">{error}</p>}
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
              Personal Information
            </h3>
            <div className="px-2 sm:px-4">
              <p className="text-[#121516] text-sm sm:text-base font-normal leading-normal pb-1 sm:pb-3 pt-1">
                Name: {userData.fullName || 'N/A'}
              </p>
              <p className="text-[#121516] text-sm sm:text-base font-normal leading-normal pb-1 sm:pb-3 pt-1">
                Email: {userData.email || 'N/A'}
              </p>
              <p className="text-[#121516] text-sm sm:text-base font-normal leading-normal pb-1 sm:pb-3 pt-1">
                Phone Number: {userData.phoneNumber || 'N/A'}
              </p>
            </div>
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
              Order History
            </h3>
            <div className="px-2 sm:px-4 py-2 sm:py-3 @container">
              <div className="overflow-x-auto rounded-xl border border-[#dbe1e6] bg-white">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                        Order ID
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                        Date
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[80px] sm:w-60 text-xs sm:text-sm font-medium leading-normal">
                        Status
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(orders || []).map((order, index) => (
                      <tr key={index} className="border-t border-t-[#dbe1e6]">
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                          {order.id}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                          {order.date}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[80px] sm:w-60 text-xs sm:text-sm font-normal leading-normal">
                          <button className="flex min-w-[60px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-6 sm:h-8 px-2 sm:px-4 bg-[#f0f3f4] text-[#121516] text-xs sm:text-sm font-medium leading-normal w-full">
                            <span className="truncate">{order.status}</span>
                          </button>
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                          {order.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <style>
                {`
                  @container(max-width: 120px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 { display: none; }
                  }
                  @container(max-width: 240px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 { display: none; }
                  }
                  @container(max-width: 360px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 { display: none; }
                  }
                  @container(max-width: 480px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 { display: none; }
                  }
                `}
              </style>
            </div>
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
              Subscription
            </h3>
            <div className="px-2 sm:px-4 py-2 sm:py-3 @container">
              <div className="overflow-x-auto rounded-xl border border-[#dbe1e6] bg-white">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                        Subscription ID
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                        Start Date
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[80px] sm:w-60 text-xs sm:text-sm font-medium leading-normal">
                        Status
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(subscriptions || []).map((subscription, index) => (
                      <tr key={index} className="border-t border-t-[#dbe1e6]">
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                          {subscription.id}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                          {subscription.startDate}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[80px] sm:w-60 text-xs sm:text-sm font-normal leading-normal">
                          <button className="flex min-w-[60px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-6 sm:h-8 px-2 sm:px-4 bg-[#f0f3f4] text-[#121516] text-xs sm:text-sm font-medium leading-normal w-full">
                            <span className="truncate">{subscription.status}</span>
                          </button>
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                          {subscription.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <style>
                {`
                  @container(max-width: 120px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 { display: none; }
                  }
                  @container(max-width: 240px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 { display: none; }
                  }
                  @container(max-width: 360px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 { display: none; }
                  }
                  @container(max-width: 480px) {
                    .table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 { display: none; }
                  }
                `}
              </style>
            </div>
            <h3 className="text-[#121516] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
              Account Settings
            </h3>
            <div
              className="flex items-center gap-4 bg-white px-2 sm:px-4 py-2 sm:py-3 justify-between cursor-pointer"
              onClick={handleLogout}
            >
              <p className="text-[#121516] text-sm sm:text-base font-normal leading-normal flex-1 truncate">
                Log Out
              </p>
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  sm:width="24px"
                  sm:height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;