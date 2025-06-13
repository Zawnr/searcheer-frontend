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
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">CV Upload History</h1>
      <div className="space-y-4">
        {cvs.map((cv, idx) => (
          <div
            key={cv.id}
            className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-800">CV #{idx + 1}</div>
                  <div className="text-sm text-blue-700 font-medium break-all">
                    {cv.original_name || (cv.file_path ? cv.file_path.split('/').pop() : '-')}
                  </div>
                </div>
                <div className="flex items-center mt-2 sm:mt-0 space-x-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${cv.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                  >
                    {cv.status || 'uploaded'}
                  </span>
                  <span className="text-xs text-gray-400">{cv.created_at ? new Date(cv.created_at).toLocaleString() : '-'}</span>
                </div>
              </div>
            </div>
            {/* Optional: tombol copy path */}
            <button
              className="ml-4 px-2 py-1 text-xs bg-blue-50 hover:bg-blue-100 rounded text-blue-600 border border-blue-100"
              onClick={() => navigator.clipboard.writeText(cv.file_path)}
              title="Copy file path"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
