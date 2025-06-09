import React from 'react';

export default function JobSortSelect({ sort, setSort }) {
  return (
    <div className="relative inline-block">
      <select
        className="border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm appearance-none"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="latest">Sort by latest</option>
        <option value="salary">Sort by salary</option>
        <option value="relevance">Sort by relevance</option>
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        ▼
      </span>
    </div>
  );
}
