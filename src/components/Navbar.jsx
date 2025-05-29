import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0D1953] px-6 md:px-14 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Searcheer Logo" className="h-9 w-9" />
        <span className="text-white text-lg font-bold">Searcheer</span>
      </div>

      {/* Navigation links */}
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
            className="block px-4 py-3 md:px-6 md:py-2 text-white/80 hover:text-white font-medium"
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
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
            to="/team"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 md:px-6 md:py-2 text-white/80 hover:text-white font-medium"
          >
            Our Team
          </NavLink>
        </li>
        {/* Close button */}
        <li className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-white text-2xl focus:outline-none"
          >
            &times;
          </button>
        </li>
        {/* Mobile Login/Register buttons */}
        <li className="md:hidden flex flex-col gap-3 px-6 py-4">
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
        </li>
      </ul>

      {/* Hamburger button for mobile */}
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
