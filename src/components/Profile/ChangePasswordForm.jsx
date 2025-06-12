import React, { useState } from 'react';
import { BASE_URL } from '../../utils/api';

export default function ChangePasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [notif, setNotif] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!newPassword) {
      errors.newPassword = 'Password baru wajib diisi.';
    } else if (newPassword.length < 6) {
      errors.newPassword = 'Password minimal 6 karakter.';
    }
    if (!confirmNewPassword) {
      errors.confirmNewPassword = 'Konfirmasi password wajib diisi.';
    } else if (confirmNewPassword !== newPassword) {
      errors.confirmNewPassword =
        'Konfirmasi password tidak cocok dengan password baru.';
    }
    return errors;
  };

  const [fieldError, setFieldError] = useState({});

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setNotif({ message: '', type: '' });
    const errors = validateForm();
    setFieldError(errors);
    if (Object.keys(errors).length > 0) return;

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
      const res = await fetch(`${BASE_URL}/users/me/password`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
          className={`mb-3 text-sm ${
            notif.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {notif.message}
        </div>
      )}
      <form className="space-y-4" onSubmit={handleChangePassword}>
        <div>
          <input
            type="password"
            placeholder="New password"
            className={`w-full px-4 py-3 border rounded-xl ${
              fieldError.newPassword ? 'border-red-400' : 'border-gray-300'
            }`}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            minLength={6}
            required
            autoComplete="new-password"
          />
          {fieldError.newPassword && (
            <div className="text-xs text-red-400 mt-1">
              {fieldError.newPassword}
            </div>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm new password"
            className={`w-full px-4 py-3 border rounded-xl ${
              fieldError.confirmNewPassword
                ? 'border-red-400'
                : 'border-gray-300'
            }`}
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            minLength={6}
            required
            autoComplete="new-password"
          />
          {fieldError.confirmNewPassword && (
            <div className="text-xs text-red-400 mt-1">
              {fieldError.confirmNewPassword}
            </div>
          )}
        </div>
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
