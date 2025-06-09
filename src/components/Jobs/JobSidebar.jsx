import React from 'react';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';

export default function JobSidebar({ filters, setFilters }) {
  // Handle perubahan input
  const handleInput = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle checkbox (multi value)
  const handleCheckbox = (e, type) => {
    setFilters((prev) => {
      const arr = prev[type] || [];
      if (e.target.checked) {
        return { ...prev, [type]: [...arr, e.target.value] };
      } else {
        return { ...prev, [type]: arr.filter((val) => val !== e.target.value) };
      }
    });
  };

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
            name="q"
            type="text"
            value={filters.q || ''}
            onChange={handleInput}
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
            name="location"
            value={filters.location || ''}
            onChange={handleInput}
            className="w-full pl-10 pr-7 py-2 rounded-lg border border-gray-200 text-sm bg-white appearance-none"
          >
            <option value="">Choose city</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Boston">Boston</option>
          </select>
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
              <input
                type="checkbox"
                value={cat}
                checked={filters.category?.includes(cat) || false}
                onChange={(e) => handleCheckbox(e, 'category')}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>
        {/* (Show More button tetap, tidak perlu aksi dulu) */}
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
              <input
                type="checkbox"
                value={type}
                checked={filters.type?.includes(type) || false}
                onChange={(e) => handleCheckbox(e, 'type')}
                className="mr-2"
              />
              {type}
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
                <input
                  type="checkbox"
                  value={level}
                  checked={filters.level?.includes(level) || false}
                  onChange={(e) => handleCheckbox(e, 'level')}
                  className="mr-2"
                />
                {level}
              </label>
            )
          )}
        </div>
      </div>
    </aside>
  );
}
