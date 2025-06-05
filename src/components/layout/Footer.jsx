import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-slate-700 py-8 text-center border-t border-slate-300">
      <div className="container mx-auto px-6">
        <p>&copy; {currentYear} Searcheer. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with <span className="text-red-500">&hearts;</span> using React & Tailwind CSS
        </p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-sm hover:text-slate-900 mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm hover:text-slate-900 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;