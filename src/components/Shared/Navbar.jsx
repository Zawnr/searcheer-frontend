import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import logo from '../../assets/images/Logo/logo.png';
import { BASE_URL } from '../../utils/api';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
    const onStorage = () => setIsLoggedIn(!!localStorage.getItem('token'));
    window.addEventListener('storage', onStorage);
    // Fetch user info if logged in
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${BASE_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Click outside dropdown menu to close
  useEffect(() => {
    function handleClickOutside(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/login');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0D1953] px-6 md:px-14 py-3 flex items-center justify-between relative">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Searcheer Logo" className="h-9 w-9" />
        <span className="text-white text-lg font-bold">Searcheer</span>
      </div>
      {/* Mobile menu button */}
      <button
        className="ml-auto flex flex-col items-center justify-center w-10 h-10 bg-transparent focus:outline-none md:hidden"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        {/* Hamburger icon: 3 horizontal bars, white and thinner */}
        <span className="block w-7 h-0.5 bg-white mb-1 rounded transition-all"></span>
        <span className="block w-7 h-0.5 bg-white mb-1 rounded transition-all"></span>
        <span className="block w-7 h-0.5 bg-white rounded transition-all"></span>
      </button>
      {/* Desktop menu */}
      <ul
        className="hidden md:flex justify-center gap-6 md:gap-8 items-center w-full"
        id="primary-navigation"
      >
        <li>
          <NavLink to="/" className={({ isActive }) => `block px-4 py-3 md:px-6 md:py-2 text-white/90 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={({ isActive }) => `block px-4 py-3 md:px-6 md:py-2 text-white/80 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }) => `block px-4 py-3 md:px-6 md:py-2 text-white/90 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/our-team" className={({ isActive }) => `block px-4 py-3 md:px-6 md:py-2 text-white/80 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>Our Team</NavLink>
        </li>
      </ul>
      {/* Desktop pojok kanan */}
      <div className="hidden md:flex items-center gap-3 relative">
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className="px-5 py-2 rounded-lg text-white bg-transparent hover:bg-white/10 font-medium transition">Login</NavLink>
            <NavLink to="/register" className="px-5 py-2 rounded-lg text-white font-medium bg-[#2f52cf] hover:bg-[#4e79f0] transition">Register</NavLink>
          </>
        ) : (
          <div ref={userMenuRef} className="relative">
            <button className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-[#232d3b] text-lg hover:opacity-90 border-2 border-yellow-300 shadow transition" style={{ outline: 'none' }} onClick={() => setShowDropdown((s) => !s)} aria-label="User menu" tabIndex={0}>
              {user?.username ? user.username[0].toUpperCase() : <FiUser size={20} />}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl py-2 z-50" style={{ minWidth: 140 }}>
                <NavLink to="/profile" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 font-medium" onClick={() => setShowDropdown(false)}>Account</NavLink>
                <NavLink to="/history" className="block px-5 py-2 text-gray-800 hover:bg-gray-100 font-medium" onClick={() => setShowDropdown(false)}>History</NavLink>
                <button onClick={handleLogout} className="block w-full text-left px-5 py-2 text-red-500 hover:bg-gray-100 font-medium">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#0D1953] flex flex-col h-full w-full md:hidden animate-fade-in">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Searcheer Logo" className="h-8 w-8" />
              <span className="text-white text-lg font-bold">Searcheer</span>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white text-2xl focus:outline-none">&times;</button>
          </div>
          {isLoggedIn && user && (
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
              <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-[#232d3b] text-lg">{user.username[0].toUpperCase()}</div>
              <span className="text-white font-semibold text-base">{user.username}</span>
            </div>
          )}
          <nav className="flex-1 flex flex-col gap-1 px-6 pt-4">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `block py-2 text-white/90 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>Home</NavLink>
            <NavLink to="/jobs" onClick={() => setIsOpen(false)} className={({ isActive }) => `block py-2 text-white/90 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>Jobs</NavLink>
            <NavLink to="/about-us" onClick={() => setIsOpen(false)} className={({ isActive }) => `block py-2 text-white/90 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>About Us</NavLink>
            <NavLink to="/our-team" onClick={() => setIsOpen(false)} className={({ isActive }) => `block py-2 text-white/90 hover:text-white font-medium ${isActive ? 'font-bold underline underline-offset-4' : ''}`}>Our Team</NavLink>
          </nav>
          {isLoggedIn && (
            <div className="border-t border-white/20 mt-4 pt-4 flex flex-col gap-1 px-6 pb-6">
              <NavLink to="/profile" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 py-2 text-white font-semibold ${isActive ? 'underline underline-offset-4' : ''}`}><FiUser className="inline-block" /> Profile</NavLink>
              <NavLink to="/history" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 py-2 text-white font-semibold ${isActive ? 'underline underline-offset-4' : ''}`}><svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> History</NavLink>
              <button onClick={() => { setIsOpen(false); handleLogout(); }} className="flex items-center gap-2 py-2 text-red-400 font-semibold bg-transparent hover:text-red-500 transition text-left"><svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" /></svg> Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
