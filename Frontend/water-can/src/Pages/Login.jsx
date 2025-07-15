import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com/";

    try {
      const response = await fetch(`${backendUrl}/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id); // 👈 Add this line here
      console.log('Login successful:', data);
      navigate('/'); // Redirect to home or dashboard

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-[#121516] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome Back to AquaSwift</h2>
            {error && <p className="text-red-500 text-center px-4">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#121516] text-base font-medium leading-normal pb-2">Email Address</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                    value={formData.email}
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
                    placeholder="Enter your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121516] focus:outline-0 focus:ring-0 border border-[#dbe1e6] bg-white focus:border-[#dbe1e6] h-14 placeholder:text-[#617989] p-[15px] text-base font-normal leading-normal"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <p className="text-[#617989] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer" onClick={() => navigate('/forgot-password')}>
                Forgot Password?
              </p>
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#279aec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Log In</span>
                </button>
              </div>
              <p className="text-[#617989] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Or log in with</p>
              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f3f4] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] grow"
                    onClick={() => alert('Google login not implemented')}
                  >
                    <span className="truncate">Continue with Google</span>
                  </button>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f3f4] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] grow"
                    onClick={() => alert('Facebook login not implemented')}
                  >
                    <span className="truncate">Continue with Facebook</span>
                  </button>
                </div>
              </div>
              <p className="text-[#617989] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer" onClick={() => navigate('/register')}>
                Don't have an account? Sign Up
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;