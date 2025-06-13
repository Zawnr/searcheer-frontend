import React, { useState, useEffect } from 'react';
import ChangePasswordForm from '../components/Profile/ChangePasswordForm';
import { BASE_URL } from '../utils/api';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [showChangePass, setShowChangePass] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Anda belum login.');
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`${BASE_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Gagal mengambil data user');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setError('');
      })
      .catch((err) => setError(err.message || 'Gagal mengambil data user'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-10 px-2 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white transition-all duration-1000"></div>
      <div className="relative z-20 w-full max-w-xl">
        <div className="backdrop-blur-2xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-10 flex flex-col items-center glass-panel transition-all duration-700 hover:scale-[1.025] hover:shadow-3xl">
          <h1 className="text-4xl font-extrabold mb-4 text-center text-[#22223b] drop-shadow-md tracking-tight">
            Your Account
          </h1>
          {loading && (
            <div className="mb-6 text-gray-500 animate-pulse">Loading...</div>
          )}
          {error && (
            <div className="mb-6 text-red-500 text-center font-medium animate-shake">
              {error}
            </div>
          )}
          {!loading && !error && user && (
            <div className="mb-8 w-full flex flex-col items-center">
              <div className="w-28 h-28 mb-4 rounded-full border-4 border-yellow-300 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-200 flex items-center justify-center text-5xl font-extrabold text-[#1d2439] shadow-lg ring-2 ring-white/80 transition-transform duration-500 hover:scale-110 hover:ring-yellow-400/80 cursor-pointer animate-avatar-bounce">
                {user.username?.[0]?.toUpperCase() || (
                  <span className="text-gray-400">?</span>
                )}
              </div>
              <div className="mb-1 text-2xl text-[#232d3b] font-bold drop-shadow flex items-center gap-2">
                {user.username}
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full ml-1 border border-yellow-300">
                  User
                </span>
              </div>
              <div className="mb-2 text-gray-700 font-medium text-base flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"
                  />
                </svg>
                <span className="bg-white/60 px-2 py-0.5 rounded text-sm border border-yellow-100 shadow-sm">
                  {user.email}
                </span>
              </div>
            </div>
          )}
          {!loading && !error && (
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-[#232d3b] font-semibold px-8 py-2 rounded-xl transition mb-3 shadow-xl border border-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2"
              onClick={() => setShowChangePass((s) => !s)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-1.104.896-2 2-2s2 .896 2 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.104.896-2 2-2z"
                />
              </svg>
              {showChangePass ? 'Cancel' : 'Change Password'}
            </button>
          )}
          {showChangePass && (
            <div className="w-full mt-4 animate-fade-in">
              <ChangePasswordForm />
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes avatar-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-avatar-bounce {
          animation: avatar-bounce 2.5s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </div>
  );
}
