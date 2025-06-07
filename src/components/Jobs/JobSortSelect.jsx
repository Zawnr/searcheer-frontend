import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function JobSortSelect() {
  return (
    <div className="relative inline-block">
      <select className="border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm appearance-none">
        <option>Sort by latest</option>
        <option>Sort by salary</option>
        <option>Sort by relevance</option>
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <FiChevronDown size={18} />
      </span>
    </div>
  );
}
