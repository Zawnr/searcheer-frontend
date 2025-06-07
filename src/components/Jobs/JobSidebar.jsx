import React from 'react';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';

export default function JobSidebar() {
  return (
    <aside className="bg-[#fffbe7] rounded-2xl p-6 w-full shadow">
      {/* Search by Job Title */}
      <div className="mb-5">
        <label className="block text-xs font-bold mb-2">
          Search by Job Title
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Job title or company"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none text-sm bg-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-5">
        <label className="block text-xs font-bold mb-2">Location</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FiMapPin size={20} />
          </span>
          <select
            className="w-full pl-10 pr-7 py-2 rounded-lg border border-gray-200 text-sm bg-white appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Choose city
            </option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Boston</option>
          </select>
          {/* Dropdown arrow */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FiChevronDown size={18} />
          </span>
        </div>
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-xs font-bold mb-2">Category</label>
        <div className="flex flex-col gap-2">
          {[
            'Commerce',
            'Telecommunications',
            'Hotels & Tourism',
            'Education',
            'Financial Services',
          ].map((cat) => (
            <label className="flex items-center text-sm" key={cat}>
              <input type="checkbox" className="mr-2" />
              {cat} <span className="ml-auto text-xs text-gray-400">10</span>
            </label>
          ))}
        </div>
        <button className="bg-[#FFCD38] w-full mt-2 rounded-lg py-1 text-sm font-bold">
          Show More
        </button>
      </div>

      {/* Job Type */}
      <div className="mb-5">
        <label className="block text-xs font-bold mb-2">Job Type</label>
        <div className="flex flex-col gap-2">
          {[
            'Full Time',
            'Part Time',
            'Freelance',
            'Seasonal',
            'Fixed-Price',
          ].map((type) => (
            <label className="flex items-center text-sm" key={type}>
              <input type="checkbox" className="mr-2" />
              {type} <span className="ml-auto text-xs text-gray-400">10</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <label className="block text-xs font-bold mb-2">Experience Level</label>
        <div className="flex flex-col gap-2">
          {['No-experience', 'Fresher', 'Intermediate', 'Expert'].map(
            (level) => (
              <label className="flex items-center text-sm" key={level}>
                <input type="checkbox" className="mr-2" />
                {level}{' '}
                <span className="ml-auto text-xs text-gray-400">10</span>
              </label>
            )
          )}
        </div>
      </div>
    </aside>
  );
}
