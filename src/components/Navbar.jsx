import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-[#0D1953] px-6 md:px-14 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Searcheer Logo" className="h-9 w-9" />
        <span className="text-white text-lg font-bold">Searcheer</span>
      </div>
      <ul className="flex-1 flex justify-center gap-8 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white/90 hover:text-white font-medium ${
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
            className="text-white/80 hover:text-white font-medium"
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white/90 hover:text-white font-medium ${
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
            className="text-white/80 hover:text-white font-medium"
          >
            Our Team
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <NavLink
          to="/login"
          className="px-4 py-1 rounded-lg text-white bg-transparent hover:bg-white/10 font-medium"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="px-5 py-1 rounded-lg text-white font-medium bg-[#2f52cf] hover:bg-[#4e79f0] transition"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
}
