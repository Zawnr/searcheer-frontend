import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import logo from '../../assets/images/Logo/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
    const onStorage = () => setIsLoggedIn(!!localStorage.getItem('token'));
    window.addEventListener('storage', onStorage);
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

      {/* Navigation links utama */}
      <ul
        className={`flex-1 md:flex justify-center gap-6 md:gap-8 items-center md:static absolute top-16 left-0 w-full md:w-auto bg-[#0D1953] md:bg-transparent transition-transform duration-300 ease-in-out transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-50 overflow-y-auto max-h-[calc(100vh-4rem)] md:max-h-full`}
        style={{ zIndex: 9999 }}
        id="primary-navigation"
        aria-expanded={isOpen}
      >
        <li>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 md:px-6 md:py-2 text-white/90 hover:text-white font-medium ${
                isActive ? 'font-bold underline underline-offset-4' : ''
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 md:px-6 md:py-2 text-white/80 hover:text-white font-medium ${
                isActive ? 'font-bold underline underline-offset-4' : ''
              }`
            }
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 md:px-6 md:py-2 text-white/90 hover:text-white font-medium ${
                isActive ? 'font-bold underline underline-offset-4' : ''
              }`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-team"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 md:px-6 md:py-2 text-white/80 hover:text-white font-medium ${
                isActive ? 'font-bold underline underline-offset-4' : ''
              }`
            }
          >
            Our Team
          </NavLink>
        </li>
        {/* Mobile menu untuk login/register/profile/logout */}
        <li className="md:hidden flex flex-col gap-3 px-6 py-4">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-white bg-transparent hover:bg-white/10 font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-white font-medium bg-[#2f52cf] hover:bg-[#4e79f0] transition"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-yellow-300 font-bold hover:bg-white/10 transition"
              >
                Profile
              </NavLink>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="block px-4 py-3 rounded-lg text-red-400 font-medium bg-transparent hover:bg-white/10 transition text-left"
              >
                Logout
              </button>
            </>
          )}
        </li>
        <li className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-white text-2xl focus:outline-none"
          >
            &times;
          </button>
        </li>
      </ul>

      {/* Desktop pojok kanan */}
      <div className="hidden md:flex items-center gap-3 relative">
        {!isLoggedIn ? (
          <>
            <NavLink
              to="/login"
              className="px-5 py-2 rounded-lg text-white bg-transparent hover:bg-white/10 font-medium transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-5 py-2 rounded-lg text-white font-medium bg-[#2f52cf] hover:bg-[#4e79f0] transition"
            >
              Register
            </NavLink>
          </>
        ) : (
          <div ref={userMenuRef} className="relative">
            {/* Avatar/User icon bulat */}
            <button
              className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-[#232d3b] text-lg hover:opacity-90 border-2 border-yellow-300 shadow transition"
              style={{ outline: 'none' }}
              onClick={() => setShowDropdown((s) => !s)}
              aria-label="User menu"
              tabIndex={0}
            >
              <FiUser size={20} />
            </button>
            {/* Dropdown menu */}
            {showDropdown && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl py-2 z-50"
                style={{ minWidth: 140 }}
              >
                <NavLink
                  to="/profile"
                  className="block px-5 py-2 text-gray-800 hover:bg-gray-100 font-medium"
                  onClick={() => setShowDropdown(false)}
                >
                  Account
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-5 py-2 text-red-500 hover:bg-gray-100 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hamburger for mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center text-white focus:outline-none"
        aria-label="Toggle menu"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </nav>
  );
}
