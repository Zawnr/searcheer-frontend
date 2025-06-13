import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginNotification from '../components/Notification/LoginNotification';
import { login } from '../utils/api';

export default function Login() {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [fieldError, setFieldError] = useState({});
  const navigate = useNavigate();

  function validateForm() {
    const errors = {};
    if (!credential) errors.credential = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(credential))
      errors.credential = 'Invalid email format.';

    if (!password) errors.password = 'Password is required.';
    else if (password.length < 6)
      errors.password = 'Password must be at least 6 characters.';
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: '', type: '' });
    const errors = validateForm();
    setFieldError(errors);
    if (Object.keys(errors).length > 0) {
      console.log('Login validation errors:', errors);
      return;
    }
    try {
      console.log('Login attempt:', credential);
      const result = await login(credential, password);
      localStorage.setItem('token', result.token);
      setNotification({
        message: `Welcome, ${result.user?.username || credential || 'user'}!`,
        type: 'success',
      });
      setTimeout(() => {
        navigate('/');
      }, 1500);
      console.log('Login success:', result);
    } catch (err) {
      setNotification({
        message: err.message || 'Login failed!',
        type: 'error',
      });
      console.error('Login error:', err);
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-1 text-white leading-tight text-center sm:text-left">
        Welcome Back
      </h2>
      <h3 className="text-lg font-semibold mb-3 text-white/80 text-center sm:text-left">
        Login to your account
      </h3>
      <p className="mb-8 text-white/80 text-base text-center sm:text-left">
        Discover the best job opportunities and continue your journey with
        Searcheers.
      </p>
      <LoginNotification
        message={notification.message}
        type={notification.type}
      />
      <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your email address"
            className={`w-full px-4 py-3 bg-[#39455a] text-white border ${
              fieldError.credential ? 'border-red-400' : 'border-[#9CA3AF]'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base`}
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            autoComplete="username"
          />
          {fieldError.credential && (
            <div className="text-xs text-red-400 mt-1">
              {fieldError.credential}
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Enter your password"
            className={`w-full px-4 py-3 bg-[#39455a] text-white border ${
              fieldError.password ? 'border-red-400' : 'border-[#9CA3AF]'
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base pr-12`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
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
          {fieldError.password && (
            <div className="text-xs text-red-400 mt-1">
              {fieldError.password}
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2">
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
