import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookmarkPlusIcon from './BookmarkPlusIcon';
import icon1 from '../../assets/Icons/IconRSA/1.png';
import icon2 from '../../assets/Icons/IconRSA/2.png';
import icon3 from '../../assets/Icons/IconRSA/3.png';
import icon4 from '../../assets/Icons/IconRSA/4.png';
import { LuBriefcase, LuClock, LuWallet, LuMapPin } from 'react-icons/lu';
import { getJobs } from '../../utils/api';

const localIcons = [icon1, icon2, icon3, icon4];

const InfoIcon = ({ type }) => {
  switch (type) {
    case 'briefcase':
      return <LuBriefcase className="w-5 h-5 text-blue-500" />;
    case 'clock':
      return <LuClock className="w-5 h-5 text-blue-500" />;
    case 'wallet':
      return <LuWallet className="w-5 h-5 text-blue-500" />;
    case 'location':
      return <LuMapPin className="w-5 h-5 text-blue-500" />;
    default:
      return null;
  }
};

export default function RecentJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    setLoading(true);
    getJobs()
      .then((data) => {
        // Jika respons API array langsung, gunakan; jika {data: ...}, gunakan .data
        const jobsArray = Array.isArray(data) ? data : data?.data || [];
        setJobs(jobsArray);
        setBookmarked(Array(jobsArray.length).fill(false));
      })
      .catch((err) => setError(err.message || 'Failed to load jobs.'))
      .finally(() => setLoading(false));
  }, []);

  const toggleBookmark = (idx) => {
    setBookmarked((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Recent Jobs Available
        </motion.h2>
        <a
          href="/jobs"
          className="text-black font-semibold underline hover:text-blue-600 text-base"
        >
          View all
        </a>
      </div>
      {/* Animated job cards */}
      {loading ? (
        <div className="py-16 text-center text-lg text-gray-500">
          Loading jobs...
        </div>
      ) : error ? (
        <div className="py-16 text-center text-lg text-red-500">{error}</div>
      ) : (
        <div className="space-y-7">
          {jobs.slice(0, 4).map((job, idx) => {
            const id = job.job_id || job.id;
            const title = job.title;
            const company = job.company || job.industry || 'Unknown Company';
            const category = job.category || job.industry || '-';
            const type = job.type || job.employment_type || '-';
            const salary = job.salary || job.salary_range || '-';
            const location = job.location || '-';

            // Gunakan icon lokal urutan idx
            const companyLogo = localIcons[idx % localIcons.length];
            const time = 'Just now';

            return (
              <motion.div
                key={id}
                className="bg-white rounded-2xl border border-gray-100 px-7 py-6 flex flex-col shadow-sm hover:shadow-lg relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.15 }}
              >
                <button
                  className="absolute top-6 right-7 outline-none"
                  onClick={() => toggleBookmark(idx)}
                  aria-label="Bookmark"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  <BookmarkPlusIcon filled={bookmarked[idx]} size={32} />
                </button>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  {/* Kiri: Logo & konten */}
                  <div className="flex flex-row flex-1 min-w-0">
                    {/* Logo perusahaan */}
                    <div className="flex flex-col justify-center">
                      <img
                        src={companyLogo}
                        alt="Company Logo"
                        className="w-12 h-12 rounded-full bg-gray-200 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = companyLogo;
                        }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center pl-4">
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold rounded-lg px-3 py-1 mb-2 mt-1 w-fit">
                        {time}
                      </span>
                      <div className="font-bold text-xl text-gray-900 leading-tight mb-0">
                        {title}
                      </div>
                      <div className="text-gray-500 text-base mb-3">
                        {company}
                      </div>
                      <div className="flex flex-row items-end justify-between mt-2">
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-700 text-base font-medium">
                          <span className="flex items-center gap-2">
                            <InfoIcon type="briefcase" />
                            <span>{category}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <InfoIcon type="clock" />
                            <span>{type}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <InfoIcon type="wallet" />
                            <span>{salary}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <InfoIcon type="location" />
                            <span>{location}</span>
                          </span>
                        </div>
                        <div className="ml-6 hidden md:block">
                          <button
                            className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm rounded-lg px-6 py-2 font-semibold shadow min-w-[110px]"
                            onClick={() => navigate(`/jobs/${id}`)}
                          >
                            Job Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden justify-end mt-4">
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm rounded-lg px-6 py-2 font-semibold shadow min-w-[110px]"
                      onClick={() => navigate(`/jobs/${id}`)}
                    >
                      Job Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
