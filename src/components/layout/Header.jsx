import React, { useState } from 'react';
import { Link } from 'react-router-dom';   

import logoSrcFromAssets from '../../assets/images/logo.png'

function Header() {
  const logoSrc = logoSrcFromAssets; 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-custom-navy text-white shadow-md"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20"> 

          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <img className="h-8 w-auto sm:h-10" src={logoSrc} alt="Searcheer Logo" />
              <span className="font-bold text-xl sm:text-2xl tracking-tight">Searcheer</span>
            </Link>
          </div>

          {/* Bagian Tengah: Link Navigasi Desktop */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/jobs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Jobs</Link>
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            <Link to="/team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Team</Link>
          </nav>

          {/* Bagian Kanan: Tombol Aksi Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/register" className="bg-custom-light-blue hover:opacity-85 text-white px-4 py-2 rounded-md text-sm font-medium shadow">Register</Link>
          </div>

          {/* Tombol Menu Mobile (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2" // Tambah padding untuk area klik lebih baik
              aria-label="Open main menu"
              aria-expanded={isMobileMenuOpen} // Untuk aksesibilitas
              onClick={toggleMobileMenu}
            >
              {/* Ikon Hamburger atau Close berdasarkan state */}
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0' // Kontrol tinggi dan opacity untuk animasi
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Home</Link>
          <Link to="/jobs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Jobs</Link>
          <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>About Us</Link>
          <Link to="/team" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Our Team</Link>
          <hr className="my-2 border-gray-600" /> {/* Pemisah opsional */}
          <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Login</Link>
          <Link to="/register" className="bg-custom-light-blue hover:opacity-85 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium shadow mt-1" onClick={closeMobileMenu}>Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;