// Add these imports at the top
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]); // Add this
  const [error, setError] = useState('');

  // ... existing useEffects for userData and orders ...

  // Add this new useEffect for subscriptions
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
        const res = await fetch(`${backendUrl}/user-subscription/my-subscriptions`, {
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
        }
      } catch (err) {
        console.error('Fetch subscription error:', err.message);
      }
    };

    fetchSubscriptions();
  }, []);

  // ... rest of your component ...

  return (
    <div>
      {/* ... existing JSX ... */}
      
      {/* Personal Information section */}
      
      {/* Order History section */}
      
      {/* Add this new My Subscriptions section */}
      <h3 className="text-[#121516] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-2 pt-2 sm:pt-4">
        My Subscriptions
      </h3>
      <div className="px-2 sm:px-4 py-2 sm:py-3 @container">
        <div className="overflow-x-auto rounded-xl border border-[#dbe1e6] bg-white">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-white">
                <th className="table-subscription-column-1 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                  Plan
                </th>
                <th className="table-subscription-column-2 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                  Date
                </th>
                <th className="table-subscription-column-3 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[80px] sm:w-60 text-xs sm:text-sm font-medium leading-normal">
                  Status
                </th>
                <th className="table-subscription-column-4 px-2 py-2 sm:px-4 sm:py-3 text-left text-[#121516] w-[100px] sm:w-[400px] text-xs sm:text-sm font-medium leading-normal">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {(subscriptions || []).map((subscription, index) => (
                <tr key={index} className="border-t border-t-[#dbe1e6]">
                  <td className="table-subscription-column-1 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                    {subscription.planTitle}
                  </td>
                  <td className="table-subscription-column-2 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                    {new Date(subscription.date).toLocaleDateString()}
                  </td>
                  <td className="table-subscription-column-3 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[80px] sm:w-60 text-xs sm:text-sm font-normal leading-normal">
                    <button className="flex min-w-[60px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-6 sm:h-8 px-2 sm:px-4 bg-[#f0f3f4] text-[#121516] text-xs sm:text-sm font-medium leading-normal w-full">
                      <span className="truncate">{subscription.status}</span>
                    </button>
                  </td>
                  <td className="table-subscription-column-4 h-[50px] sm:h-[72px] px-2 py-1 sm:px-4 sm:py-2 w-[100px] sm:w-[400px] text-[#617889] text-xs sm:text-sm font-normal leading-normal">
                    {subscription.planPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <style>
          {`
            @container(max-width: 120px) {
              .table-subscription-column-1 { display: none; }
            }
            @container(max-width: 240px) {
              .table-subscription-column-2 { display: none; }
            }
            @container(max-width: 360px) {
              .table-subscription-column-3 { display: none; }
            }
            @container(max-width: 480px) {
              .table-subscription-column-4 { display: none; }
            }
          `}
        </style>
      </div>
      
      {/* Account Settings section */}
    </div>
  );
}

export default MyAccount;