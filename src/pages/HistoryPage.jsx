import React, { useEffect, useState } from 'react';
import { getUserCVs } from '../utils/api';

export default function HistoryPage() {
  const [cvs, setCvs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const data = await getUserCVs(token);
        setCvs(data);
      } catch (err) {
        setError(err.message || 'Gagal mengambil riwayat CV.');
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!cvs || cvs.length === 0)
    return <div className="text-center py-10 text-gray-500">Belum ada riwayat upload CV.</div>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">CV Upload History</h1>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">File Path</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Uploaded At</th>
          </tr>
        </thead>
        <tbody>
          {cvs.map((cv, idx) => (
            <tr key={cv.id} className="text-center">
              <td className="py-2 px-4 border-b">{idx + 1}</td>
              <td className="py-2 px-4 border-b">{cv.file_path}</td>
              <td className="py-2 px-4 border-b">{cv.status || '-'}</td>
              <td className="py-2 px-4 border-b">{cv.created_at ? new Date(cv.created_at).toLocaleString() : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
