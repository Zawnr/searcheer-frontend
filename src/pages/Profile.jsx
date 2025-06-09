import React, { useState, useEffect } from 'react';
import ChangePasswordForm from '../components/Profile/ChangePasswordForm';

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
    fetch('http://localhost:3000/users/me', {
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
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-10 px-2">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#0d1953]">
          Your Account
        </h1>

        {loading && <div className="mb-6 text-gray-500">Loading...</div>}
        {error && (
          <div className="mb-6 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        {!loading && !error && user && (
          <div className="mb-8 w-full flex flex-col items-center">
            {/* Avatar Dummy */}
            <div className="w-20 h-20 mb-4 rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-bold text-[#0d1953] shadow">
              {user.username?.[0]?.toUpperCase() || (
                <span className="text-gray-400">?</span>
              )}
            </div>
            <div className="mb-1 text-lg text-gray-700 font-semibold">
              {user.username}
            </div>
            <div className="mb-2 text-gray-500">{user.email}</div>
          </div>
        )}

        {/* Tombol show/hide change password */}
        {!loading && !error && (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-[#232d3b] font-semibold px-6 py-2 rounded-xl transition mb-2 shadow"
            onClick={() => setShowChangePass((s) => !s)}
          >
            {showChangePass ? 'Cancel' : 'Change Password'}
          </button>
        )}

        {showChangePass && (
          <div className="w-full mt-4">
            <ChangePasswordForm />
          </div>
        )}
      </div>
    </div>
  );
}
