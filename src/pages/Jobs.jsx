import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

    // Map frontend filters to backend params
    const filterMap = {
      q: 'q', // search query
      location: 'location',
      category: 'function', // category (array) -> function
      type: 'employment_type', // type (array) -> employment_type
      level: 'required_experience', // level (array) -> required_experience
    };

    // Build sanitized filters for backend
    const sanitizedFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
      const backendKey = filterMap[key];
      if (!backendKey) return;
      // Only send if value is not empty
      if (Array.isArray(value) && value.length > 0) {
  
        sanitizedFilters[backendKey] = value[0];
      } else if (
        !Array.isArray(value) &&
        value !== '' &&
        value !== undefined &&
        value !== null
      ) {
        sanitizedFilters[backendKey] = value;
      }
    });

    // Only send 'q' if not empty
    if ('q' in sanitizedFilters && sanitizedFilters['q'] === '') {
      delete sanitizedFilters['q'];
    }

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
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-7 px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Jobs
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            className="w-full md:w-[270px] shrink-0 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          >
            <JobSidebar filters={filters} setFilters={setFilters} />
          </motion.div>
          {/* Main Content */}
          <motion.div
            className="flex-1 flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          >
            {/* Sort & Hasil */}
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-semibold text-gray-800 text-base mb-2 sm:mb-0">
                {loading
                  ? 'Loading jobs...'
                  : `Showing ${jobs.length} of ${total} results`}
              </span>
              <JobSortSelect sort={sort} setSort={setSort} />
            </motion.div>
            {/* List */}
            <motion.div
              className="bg-white rounded-2xl p-5 shadow min-h-[200px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <JobList jobs={jobs} loading={loading} error={error} />
            </motion.div>
            {/* Pagination (frontend only) */}
            <motion.div
              className="flex justify-end mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <JobPagination
                page={page}
                totalPages={Math.ceil(total / limit)}
                onChange={setPage}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
