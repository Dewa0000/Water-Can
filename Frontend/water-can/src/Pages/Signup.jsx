import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.agreeTerms) {
      setError('Please agree to the Terms and Conditions');
      return;
    }
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com/";

    try {
      const response = await fetch(`${backendUrl}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        }),
      });
      if (!response.ok) throw new Error('Registration failed');
      const data = await response.json();
      console.log('Registration successful:', data);
      navigate('/login'); // Redirect to login after success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
          <h2 className="text-[#121516] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create Your Account</h2>
          {error && <p className="text-red-500 text-center px-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121516] text-base font-medium leading-normal pb-2">Full Name</p>
                <input
                  name="fullName"
                  placeholder="Enter your full name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121516] text-base font-medium leading-normal pb-2">Email Address</p>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121516] text-base font-medium leading-normal pb-2">Phone Number</p>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121516] text-base font-medium leading-normal pb-2">Password</p>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121516] text-base font-medium leading-normal pb-2">Confirm Password</p>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row items-center">
                <input
                  name="agreeTerms"
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#dbe1e6] border-2 bg-transparent text-[#279dec] checked:bg-[#279dec] checked:border-[#279dec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe1e6] focus:outline-none"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <p className="text-[#121516] text-base font-normal leading-normal">
                  I agree to the <a href="#terms" className="text-blue-600">Terms and Conditions</a> and <a href="#privacy" className="text-blue-600">Privacy Policy</a>
                </p>
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#279dec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign Up Now</span>
              </button>
            </div>
            <p className="text-[#617989] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Already have an account? <a href="#login" className="text-blue-600" onClick={() => navigate('/login')}>Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;