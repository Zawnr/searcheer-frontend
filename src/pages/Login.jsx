import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selamat datang, ${email || 'user'}!`);
    navigate('/');
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-1 text-white leading-tight">
        Welcome Back
      </h2>
      <h3 className="text-lg font-semibold mb-3 text-white/80">
        Login to your account
      </h3>
      <p className="mb-8 text-white/80 text-base">
        Discover the best job opportunities and continue your journey with
        Searcheers.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email address or username"
            className="w-full px-4 py-3 bg-[#39455a] text-white border border-[#9CA3AF] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-[#39455a] text-white border border-[#9CA3AF] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base pr-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-xl"
            onClick={() => setShowPass((s) => !s)}
            tabIndex={-1}
            aria-label="Show password"
          >
            {showPass ? '🙈' : '👁️'}
          </button>
        </div>
        {/* Remember me */}
        <div className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="accent-yellow-400 w-4 h-4 rounded"
          />
          <label
            htmlFor="remember"
            className="text-white/90 cursor-pointer text-sm"
          >
            Remember me
          </label>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#232d3b] font-semibold py-3 rounded-xl text-lg transition shadow-md"
        >
          Log in
        </button>
      </form>
      <p className="mt-8 text-center text-white/70 text-sm">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="text-yellow-400 font-medium">
          Sign up
        </Link>
      </p>
    </>
  );
}
