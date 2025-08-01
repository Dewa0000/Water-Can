import React from "react";
import { useState, useEffect } from "react";

const useFetchSubscriptionPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlans() {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com/";

      try {
        setLoading(true);
        const res = await fetch(`${backendUrl}/subscription/plans`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        setPlans(data);
        setError(null);
      } catch (err) {
        console.log("Error fetching subscription plans:", err.message);
        setError(err.message);
        setPlans([]); // Empty array if API fails
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

  return { plans, loading, error };
};

export default useFetchSubscriptionPlans; 