import React, { useEffect, useState } from 'react';
import { getUserCVs } from '../utils/api';
import { FiCheckCircle, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function HistoryPage() {
  const [cvs, setCvs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');
  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Filtered data
  const filteredCVs = cvs
    ? cvs.filter(cv => {
        let statusMatch =
          filterStatus === 'all' ||
          (filterStatus === 'completed' && cv.status === 'completed') ||
          (filterStatus === 'incomplete' && cv.status !== 'completed');
        let dateMatch = true;
        if (filterDate && cv.created_at) {
          // Ambil tanggal lokal (bukan UTC) dari created_at
          const cvDateObj = new Date(cv.created_at);
          const cvDate = cvDateObj.getFullYear() + '-' + String(cvDateObj.getMonth() + 1).padStart(2, '0') + '-' + String(cvDateObj.getDate()).padStart(2, '0');
          dateMatch = cvDate === filterDate;
        }
        return statusMatch && dateMatch;
      })
    : [];

  // Batasi hanya 10 data history terbaru
  const limitedCVs = filteredCVs.slice(0, 10);
  const paginatedCVs = filteredCVs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredCVs.length / itemsPerPage);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!cvs || cvs.length === 0)
    return <div className="text-center py-10 text-gray-500">Belum ada riwayat upload CV.</div>;

  return (
    <motion.div
      className="max-w-3xl mx-auto py-10 px-2 sm:px-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-3xl font-bold mb-8 text-center text-blue-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        CV Upload History
      </motion.h1>
      {/* Filter controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between px-2">
        <div>
          <label className="mr-2 font-medium text-blue-900">Status:</label>
          <select
            className={`border rounded px-2 py-1 text-sm transition focus:ring-2 focus:ring-blue-200 focus:border-blue-400 
              ${filterStatus === 'completed' ? 'bg-green-100 text-green-700 border-green-300' : filterStatus === 'incomplete' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' : 'bg-white text-blue-900 border-gray-300'}`}
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">inComplete</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-medium text-blue-900">Tanggal:</label>
          <input
            type="date"
            className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            value={filterDate}
            onChange={e => setFilterDate(e.target.value)}
          />
        </div>
      </div>
      <motion.div
        className="overflow-x-auto rounded-xl shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
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
            {paginatedCVs.map((cv, idx) => (
              <motion.tr
                key={cv.id}
                className="border-t border-gray-100 hover:bg-blue-50/30 transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <td className="py-2 px-4 text-sm text-gray-700 font-semibold">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                <td className="py-2 px-4 text-sm text-blue-900 font-medium break-all">{cv.original_name || (cv.file_path ? cv.file_path.split('/') .pop() : '-')}</td>
                <td className="py-2 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${cv.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {cv.status === 'completed' ? (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Completed
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" /></svg>
                        inComplete
                      </>
                    )}
                  </span>
                </td>
                <td className="py-2 px-4 text-xs text-gray-500">{cv.created_at ? new Date(cv.created_at).toLocaleString() : '-'}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="px-3 py-1 rounded border bg-blue-100 text-blue-900 font-semibold disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-2 py-1 font-medium text-blue-900">Page {currentPage} of {totalPages}</span>
          <button
            className="px-3 py-1 rounded border bg-blue-100 text-blue-900 font-semibold disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </motion.div>
  );
}
