import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterNotification from '../components/Notification/RegisterNotification';
import { register } from '../utils/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [fieldError, setFieldError] = useState({});
  const [registerSuccess, setRegisterSuccess] = useState(false);

  function validateForm() {
    const errors = {};
    if (!email) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email))
      errors.email = 'Invalid email format.';

    if (!username) errors.username = 'Username is required.';
    else if (username.length < 3)
      errors.username = 'Username must be at least 3 characters.';

    if (!password) errors.password = 'Password is required.';
    else if (password.length < 6)
      errors.password = 'Password must be at least 6 characters.';

    if (!confirm) errors.confirm = 'Password confirmation is required.';
    else if (password !== confirm)
      errors.confirm = 'Password and confirmation must match.';

    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: '', type: '' });
    const errors = validateForm();
    setFieldError(errors);
    if (Object.keys(errors).length > 0) {
      console.log('Register validation errors:', errors);
      return;
    }
    try {
      console.log('Register attempt:', { email, username });
      await register({ email, username, password });
      setNotification({
        message:
          'Registration successful! Please check your email to confirm/activate your account.',
        type: 'success',
      });
      setRegisterSuccess(true);
      console.log('Register success:', email);
    } catch (err) {
      setNotification({
        message: err.message || 'Registration failed!',
        type: 'error',
      });
      console.error('Register error:', err);
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-1 text-white leading-tight text-center sm:text-left">
        Grow your career with us
      </h2>
      <h3 className="text-lg font-semibold mb-3 text-white/80 text-center sm:text-left">
        Discover endless job opportunities
      </h3>
      <p className="mb-8 text-white/80 text-base text-center sm:text-left">
        Find your dream job and take a new step toward a brighter future with
        Searcheer.
      </p>
      <RegisterNotification
        message={notification.message}
        type={notification.type}
      />

      {registerSuccess && (
        <div className="mt-6 flex flex-col items-center">
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-semibold text-[#232d3b] transition shadow text-base"
          >
            Open Gmail
          </a>
          <p className="text-white/70 text-sm text-center">
            Click the button above to open Gmail and confirm your account.
          </p>
          <p className="text-white/70 text-xs mt-2 text-center">
            If you don't use Gmail, check your inbox/spam in your email provider.
          </p>
          <p className="text-white/70 text-xs mt-2 text-center">
            Already confirmed?{' '}
            <Link to="/login" className="text-yellow-400 underline">
              Login here
            </Link>
          </p>
        </div>
      )}

      {!registerSuccess && (
        <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 bg-[#39455a] text-white border ${
                fieldError.email ? 'border-red-400' : 'border-[#9CA3AF]'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {fieldError.email && (
              <div className="text-xs text-red-400 mt-1">
                {fieldError.email}
              </div>
            )}
          </div>
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Create your username"
              className={`w-full px-4 py-3 bg-[#39455a] text-white border ${
                fieldError.username ? 'border-red-400' : 'border-[#9CA3AF]'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {fieldError.username && (
              <div className="text-xs text-red-400 mt-1">
                {fieldError.username}
              </div>
            )}
          </div>
          {/* Passwords */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Password */}
            <div className="relative flex-1">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Create password"
                className={`w-full px-4 py-3 bg-[#39455a] text-white border ${
                  fieldError.password ? 'border-red-400' : 'border-[#9CA3AF]'
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base pr-12`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {/* Confirm password */}
            <div className="relative flex-1 mt-4 sm:mt-0">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm password"
                className={`w-full px-4 py-3 bg-[#39455a] text-white border ${
                  fieldError.confirm ? 'border-red-400' : 'border-[#9CA3AF]'
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-[#a0aec0] text-base pr-12`}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-xl"
                onClick={() => setShowConfirm((s) => !s)}
                tabIndex={-1}
                aria-label="Show password"
              >
                {showConfirm ? '🙈' : '👁️'}
              </button>
              {fieldError.confirm && (
                <div className="text-xs text-red-400 mt-1">
                  {fieldError.confirm}
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-white/70 pl-1 text-center sm:text-left">
            Use at least 6 characters with a combination of letters, numbers & symbols
          </p>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#232d3b] font-semibold py-3 rounded-xl text-lg transition shadow-md"
          >
            Sign up
          </button>
        </form>
      )}

      <p className="mt-8 text-center text-white/70 text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-yellow-400 font-medium">
          Sign in
        </Link>
      </p>
    </>
  );
}
