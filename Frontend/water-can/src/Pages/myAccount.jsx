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
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com";
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(`${backendUrl}/checkout/my-subscription`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (res.ok) {
          setSubscriptions(data || []);
        } else {
          setError(data.message || "Unable to fetch subscriptions");
        }
      } catch (err) {
        setError("Something went wrong. Try again later.");
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
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121516] tracking-light text-[32px] font-bold leading-tight min-w-72">My Account</p>
            </div>
            {error && <p className="text-red-500 text-center px-4">{error}</p>}
            <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Personal Information</h3>
            <div className="px-4">
              <p className="text-[#121516] text-base font-normal leading-normal pb-3 pt-1">Name: {userData.fullName || 'N/A'}</p>
              <p className="text-[#121516] text-base font-normal leading-normal pb-3 pt-1">Email: {userData.email || 'N/A'}</p>
              <p className="text-[#121516] text-base font-normal leading-normal pb-3 pt-1">Phone Number: {userData.phoneNumber || 'N/A'}</p>
            </div>
            <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Order History</h3>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#dbe1e6] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 px-4 py-3 text-left text-[#121516] w-[400px] text-sm font-medium leading-normal">
                        Order ID
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 px-4 py-3 text-left text-[#121516] w-[400px] text-sm font-medium leading-normal">
                        Date
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 px-4 py-3 text-left text-[#121516] w-60 text-sm font-medium leading-normal">
                        Status
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 px-4 py-3 text-left text-[#121516] w-[400px] text-sm font-medium leading-normal">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-t border-t-[#dbe1e6]">
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 h-[72px] px-4 py-2 w-[400px] text-[#617889] text-sm font-normal leading-normal">
                          {order.id}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 h-[72px] px-4 py-2 w-[400px] text-[#617889] text-sm font-normal leading-normal">
                          {formatDate(order.date)}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f3f4] text-[#121516] text-sm font-medium leading-normal w-full">
                            <span className="truncate">{order.status}</span>
                          </button>
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 h-[72px] px-4 py-2 w-[400px] text-[#617889] text-sm font-normal leading-normal">
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
            <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Subscription</h3>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#dbe1e6] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 px-4 py-3 text-left text-[#121516] w-[400px] text-sm font-medium leading-normal">
                        Subscription ID
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 px-4 py-3 text-left text-[#121516] w-[400px] text-sm font-medium leading-normal">
                        Start Date
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 px-4 py-3 text-left text-[#121516] w-60 text-sm font-medium leading-normal">
                        Status
                      </th>
                      <th className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 px-4 py-3 text-left text-[#121516] w-[400px] text-sm font-medium leading-normal">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map((sub, index) => (
                      <tr key={index} className="border-t border-t-[#dbe1e6]">
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-120 h-[72px] px-4 py-2 w-[400px] text-[#617889] text-sm font-normal leading-normal">
                          {sub.id}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-240 h-[72px] px-4 py-2 w-[400px] text-[#617889] text-sm font-normal leading-normal">
                          {formatDate(sub.startDate)}
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f3f4] text-[#121516] text-sm font-medium leading-normal w-full">
                            <span className="truncate">{sub.status}</span>
                          </button>
                        </td>
                        <td className="table-3bb596e1-1bf8-494a-b1e5-70e45a551698-column-480 h-[72px] px-4 py-2 w-[400px] text-[#617889] text-sm font-normal leading-normal">
                          {sub.amount}
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
            <h3 className="text-[#121516] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Account Settings</h3>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer" onClick={handleLogout}>
              <p className="text-[#121516] text-base font-normal leading-normal flex-1 truncate">Log Out</p>
              <div className="shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
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