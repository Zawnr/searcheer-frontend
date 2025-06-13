import React, { useEffect, useState } from 'react';
import { getUserCVs } from '../utils/api';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

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
    <div className="max-w-3xl mx-auto py-10 px-2 sm:px-0">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">CV Upload History</h1>
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-bold text-blue-900">No</th>
              <th className="py-3 px-4 text-left text-xs font-bold text-blue-900">Nama File</th>
              <th className="py-3 px-4 text-left text-xs font-bold text-blue-900">Status</th>
              <th className="py-3 px-4 text-left text-xs font-bold text-blue-900">Uploaded At</th>
            </tr>
          </thead>
          <tbody>
            {cvs.map((cv, idx) => (
              <tr key={cv.id} className="border-t border-gray-100 hover:bg-blue-50/30 transition">
                <td className="py-2 px-4 text-sm text-gray-700 font-semibold">{idx + 1}</td>
                <td className="py-2 px-4 text-sm text-blue-900 font-medium break-all">{cv.original_name || (cv.file_path ? cv.file_path.split('/').pop() : '-')}</td>
                <td className="py-2 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${cv.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {cv.status === 'completed' ? <FiCheckCircle className="mr-1" /> : <FiClock className="mr-1" />}
                    {cv.status || 'uploaded'}
                  </span>
                </td>
                <td className="py-2 px-4 text-xs text-gray-500">{cv.created_at ? new Date(cv.created_at).toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
