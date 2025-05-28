import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full bg-[#050f4b] flex items-center px-8 py-3 rounded-tr-xl rounded-tl-xl shadow-sm">
      {/* Logo dan Brand */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8 w-8" draggable="false" />
        <span className="text-white text-xl font-semibold">Searcheer</span>
      </div>
      {/* Menu Tengah */}
      <ul className="flex-1 flex items-center justify-center gap-10 ml-8">
        <li>
          <Link to="/" className={`text-white font-medium border-b-2 transition pb-1 ${pathname === "/" ? "border-white" : "border-transparent"} hover:border-white`}>
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="text-[#8192c7] hover:text-white transition">Jobs</a>
        </li>
        <li>
          <a href="#" className="text-[#8192c7] hover:text-white transition">About Us</a>
        </li>
        <li>
          <a href="#" className="text-[#8192c7] hover:text-white transition">Our Team</a>
        </li>
      </ul>
      {/* Auth Button */}
      <div className="flex items-center gap-3">
        <Link to="/login" className="text-white px-4 py-1 rounded hover:underline transition">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-[#4873f7] text-white px-6 py-1.5 rounded-lg font-semibold hover:bg-[#3559be] transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
