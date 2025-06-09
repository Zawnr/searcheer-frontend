import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LuBriefcase, LuClock, LuWallet, LuMapPin } from 'react-icons/lu';

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const id = job.job_id || job.id;
  const title = job.title;
  const company = job.company || job.industry || 'Unknown Company';
  const category = job.category || job.industry || '-';
  const type = job.type || job.employment_type || '-';
  const salary = job.salary || job.salary_range || '-';
  const location = job.location || '-';

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 shadow flex flex-col gap-2 border border-gray-100 hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-1">{title}</h2>
      <div className="text-sm text-gray-500 mb-2">{company}</div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 gap-2">
        <div className="flex flex-wrap gap-3 items-center text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            <LuBriefcase className="w-5 h-5 text-[#FFCD38]" /> {category}
          </span>
          <span className="flex items-center gap-1">
            <LuClock className="w-5 h-5 text-[#FFCD38]" /> {type}
          </span>
          <span className="flex items-center gap-1">
            <LuWallet className="w-5 h-5 text-[#FFCD38]" /> {salary}
          </span>
          <span className="flex items-center gap-1">
            <LuMapPin className="w-5 h-5 text-[#FFCD38]" /> {location}
          </span>
        </div>
        <button
          onClick={() => navigate(`/jobs/${id}`)}
          className="bg-[#FFCD38] text-black font-bold rounded-lg px-6 py-2 text-sm hover:bg-yellow-300 transition ml-0 md:ml-4 whitespace-nowrap"
        >
          Job Details
        </button>
      </div>
    </div>
  );
}
