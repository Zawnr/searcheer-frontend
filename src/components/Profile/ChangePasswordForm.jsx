import React, { useState } from 'react';

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [notif, setNotif] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setNotif({
        message: 'Konfirmasi password tidak cocok dengan password baru.',
        type: 'error',
      });
      return;
    }
    const token = localStorage.getItem('token');
    if (!token) {
      setNotif({
        message: 'Anda harus login terlebih dahulu.',
        type: 'error',
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/users/me/password', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
          confirmNewPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal mengganti password');
      setNotif({
        message: data.message || 'Password berhasil diubah.',
        type: 'success',
      });
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (err) {
      setNotif({
        message: err.message || 'Gagal mengganti password!',
        type: 'error',
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow max-w-md w-full mt-6 mx-auto">
      <h2 className="text-xl font-bold mb-4">Change Password</h2>
      {notif.message && (
        <div
          className={`mb-3 text-sm ${notif.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
        >
          {notif.message}
        </div>
      )}
      <form className="space-y-4" onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Old password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <input
          type="password"
          placeholder="New password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength={6}
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
          minLength={6}
          autoComplete="new-password"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#232d3b] font-semibold py-3 rounded-xl text-lg transition shadow-md"
          disabled={loading}
        >
          {loading ? 'Changing...' : 'Change Password'}
        </button>
      </form>
    </div>
  );
}
