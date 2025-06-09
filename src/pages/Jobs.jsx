import React, { useEffect, useState } from 'react';
import JobSidebar from '../components/Jobs/JobSidebar';
import JobList from '../components/Jobs/JobList';
import JobPagination from '../components/Jobs/JobPagination';
import JobSortSelect from '../components/Jobs/JobSortSelect';
import { getJobs } from '../utils/api';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({});
  // Pagination & sort tetap ada, tapi tidak dikirim ke backend kalau backend belum support
  const [sort, setSort] = useState('latest');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10; // Hanya untuk tampilan, tidak dikirim ke backend

  // Reset ke page 1 kalau filters/sort berubah
  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  useEffect(() => {
    setLoading(true);
    setError('');

    // Hanya kirim filter yang diizinkan backend
    const allowedFilterKeys = [
      'employment_type',
      'required_experience',
      'location',
      'function',
    ];
    const sanitizedFilters = Object.fromEntries(
      Object.entries(filters).filter(([k]) => allowedFilterKeys.includes(k))
    );
    // Debug (opsional)
    // console.log('filters sent to backend:', sanitizedFilters);

    getJobs(sanitizedFilters)
      .then((res) => {
        const data = res.jobs || res.data || res || [];
        setJobs(data);
        setTotal(data.length);
      })
      .catch((err) => setError(err.message || 'Failed to fetch jobs'))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-7 px-2">Jobs</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-[270px] shrink-0 mb-4 md:mb-0">
            <JobSidebar filters={filters} setFilters={setFilters} />
          </div>
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Sort & Hasil */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 px-2">
              <span className="font-semibold text-gray-800 text-base mb-2 sm:mb-0">
                {loading
                  ? 'Loading jobs...'
                  : `Showing ${jobs.length} of ${total} results`}
              </span>
              <JobSortSelect sort={sort} setSort={setSort} />
            </div>
            {/* List */}
            <div className="bg-white rounded-2xl p-5 shadow min-h-[200px]">
              <JobList jobs={jobs} loading={loading} error={error} />
            </div>
            {/* Pagination (frontend only) */}
            <div className="flex justify-end mt-3">
              <JobPagination
                page={page}
                totalPages={Math.ceil(total / limit)}
                onChange={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
