import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SubscriptionCheckout() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    // Get the selected plan from localStorage
    const planData = localStorage.getItem('selectedSubscriptionPlan');
    if (planData) {
      setSelectedPlan(JSON.parse(planData));
    } else {
      // If no plan selected, redirect back to subscription page
      navigate('/subscription');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://water-can-backend.onrender.com';
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${backendUrl}/user-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          planDetails: selectedPlan
        })
      });

      if (response.ok) {
        // Clear the selected plan from localStorage
        localStorage.removeItem('selectedSubscriptionPlan');
        // Navigate to success page
        navigate('/subscription-success');
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Subscribe to {selectedPlan.title}</h1>
        <p className="mb-4">Price: {selectedPlan.price}/month</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Notes (optional)"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscriptionCheckout;