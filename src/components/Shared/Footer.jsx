import React from 'react';
import logo from '../../assets/images/Logo/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0D1953] text-white py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-6 md:px-0">
        <div className="flex-1 min-w-[180px]">
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Searcheer Logo" className="h-7" />
            <span className="font-bold text-lg">Searcheer</span>
          </div>
          <p className="text-sm">
            Empowering students and fresh graduates with AI-driven CV analysis
            and job matching. Bridge the gap between your skills and industry
            expectations with our intelligent platform.
          </p>
        </div>
        <div className="flex-1 min-w-[120px]">
          <b>Company</b>
          <ul className="text-sm mt-2">
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[120px]">
          <b>Job Categories</b>
          <ul className="text-sm mt-2">
            <li>Telecommunications</li>
            <li>Hotels & Tourism</li>
            <li>Construction</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[120px]">
          <b>Job Categories</b>
          <ul className="text-sm mt-2">
            <li>Marketing & Sales</li>
            <li>Finance & Accounting</li>
            <li>Healthcare</li>
            <li>IT & Software</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-4 opacity-80">
        © 2025 Searcheer | Design Team CC25-CF092. All rights reserved.
        <br />
        Built with ❤️ by Politeknik Negeri Banyuwangi & Universitas Brawijaya
      </div>
    </footer>
  );
}
