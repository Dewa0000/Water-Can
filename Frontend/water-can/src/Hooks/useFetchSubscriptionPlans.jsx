import { useState, useEffect } from "react";

const useFetchSubscriptionPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlans() {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com";
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(`${backendUrl}/subscription/my-subscription`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setPlans(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching subscription plans:", err.message);
        setError(err.message || "Failed to fetch subscription plans");
        setPlans([]); // Reset to empty array on error
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []); // Empty dependency array for one-time fetch

  return { plans, loading, error };
};

export default useFetchSubscriptionPlans;