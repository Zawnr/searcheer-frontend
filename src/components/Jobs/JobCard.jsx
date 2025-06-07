import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTag, FiClock, FiBriefcase, FiMapPin } from 'react-icons/fi';

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 shadow flex flex-col gap-2 border border-gray-100 hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-1">{job.title}</h2>
      <div className="text-sm text-gray-500 mb-2">{job.company}</div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 gap-2">
        <div className="flex flex-wrap gap-3 items-center text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            <FiTag className="w-4 h-4 text-[#FFCD38]" /> {job.category}
          </span>
          <span className="flex items-center gap-1">
            <FiClock className="w-4 h-4 text-[#FFCD38]" /> {job.type}
          </span>
          <span className="flex items-center gap-1">
            <FiBriefcase className="w-4 h-4 text-[#FFCD38]" /> {job.salary}
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin className="w-4 h-4 text-[#FFCD38]" /> {job.location}
          </span>
        </div>
        <button
          onClick={() => navigate(`/jobs/${job.id}`)}
          className="bg-[#FFCD38] text-black font-bold rounded-lg px-6 py-2 text-sm hover:bg-yellow-300 transition ml-0 md:ml-4 whitespace-nowrap"
        >
          Job Details
        </button>
      </div>
    </div>
  );
}
