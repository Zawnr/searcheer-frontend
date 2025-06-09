import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FiTag,
  FiClock,
  FiBriefcase,
  FiMapPin,
  FiCheckCircle,
} from 'react-icons/fi';
import JobOverviewCard from '../components/JobDetails/JobOverviewCard';
import { getJobDetail } from '../utils/api';

export default function JobDetails() {
  const { id } = useParams(); // pastikan route-nya /jobs/:id
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getJobDetail(id)
      .then((data) => setJob(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-xl">Loading job details...</div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg">{error || 'Job not found.'}</div>
      </div>
    );
  }

  // Convert backend fields to frontend naming if necessary
  const overviewData = {
    department: job.department || '-',
    type: job.type || job.employment_type || '-',
    category: job.category || job.function || '-',
    experience: job.experience || job.required_experience || '-',
    degree: job.degree || job.required_education || '-',
    salary: job.salary || job.salary_range || '-',
    location: job.location || '-',
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafd]">
      {/* Header */}
      <div className="bg-[#0D1953]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10">
          <h1 className="text-4xl font-bold text-center text-white mb-1">
            Job Details
          </h1>
        </div>
      </div>
      {/* MAIN CONTENT */}
      <div className="flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 py-10">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-7">
            <Link to="/jobs" className="hover:underline cursor-pointer">
              Jobs
            </Link>
            <span className="mx-2">{'>'}</span>
            <span>{job.title}</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT */}
            <main className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h2 className="font-bold text-2xl">{job.title}</h2>
                {job.remote && (
                  <span className="px-3 py-1 rounded-xl bg-[#e7f2ff] text-[#1766d9] text-xs font-semibold ml-2">
                    Remote
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {job.company || job.company_profile || '-'}
              </div>
              <div className="flex flex-wrap gap-5 items-center mb-7 text-[#21213b] text-sm">
                <span className="flex items-center gap-1">
                  <FiTag className="w-4 h-4 text-[#FFCD38]" />{' '}
                  {job.category || job.function}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock className="w-4 h-4 text-[#FFCD38]" />{' '}
                  {job.type || job.employment_type}
                </span>
                <span className="flex items-center gap-1">
                  <FiBriefcase className="w-4 h-4 text-[#FFCD38]" />{' '}
                  {job.salary || job.salary_range}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-4 h-4 text-[#FFCD38]" /> {job.location}
                </span>
              </div>
              {/* Description */}
              <section className="mb-8">
                <h3 className="font-semibold text-lg mb-2">Job Description</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  {job.description}
                </p>
              </section>
              {/* Requirements */}
              {Array.isArray(job.requirements) && (
                <section className="mb-8">
                  <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                  <ul className="flex flex-col gap-2 pl-1">
                    {job.requirements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-800"
                      >
                        <FiCheckCircle className="w-4 h-4 mt-[3px] text-[#1766d9]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {/* Benefits */}
              {Array.isArray(job.benefits) && (
                <section className="mb-8">
                  <h3 className="font-semibold text-lg mb-2">Benefits</h3>
                  <ul className="flex flex-col gap-2 pl-1">
                    {job.benefits.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-800"
                      >
                        <FiCheckCircle className="w-4 h-4 mt-[3px] text-[#1766d9]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {/* About */}
              {job.about && (
                <section>
                  <h3 className="font-semibold text-lg mb-2">About</h3>
                  <div className="rounded-xl bg-[#fff7e2] p-5 text-sm text-gray-800 whitespace-pre-line">
                    {job.about}
                  </div>
                </section>
              )}
            </main>
            {/* SIDEBAR */}
            <aside className="w-full lg:w-[290px] flex-shrink-0">
              <JobOverviewCard job={overviewData} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
