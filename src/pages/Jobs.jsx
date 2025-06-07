import React, { useState } from 'react';
import JobSidebar from '../components/Jobs/JobSidebar';
import JobList from '../components/Jobs/JobList';
import JobSortSelect from '../components/Jobs/JobSortSelect';
import JobPagination from '../components/Jobs/JobPagination';

export default function Jobs() {
  // Dummy data (isi sendiri nanti)
  const [jobs] = useState([
    {
      id: 1,
      title: 'Forward Security Director',
      company: 'Bauch, Schuppe and Schulist Co',
      category: 'Hotels & Tourism',
      type: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA',
    },
    {
      id: 2,
      title: 'Regional Creative Facilitator',
      company: 'Wisox - Becker Co',
      category: 'Media',
      type: 'Part time',
      salary: '$28000-$32000',
      location: 'Los- Angeles, USA',
    },
    {
      id: 3,
      title: 'Internal Integration Planner',
      company: 'Mraz, Quigley and Feest Inc.',
      category: 'Construction',
      type: 'Full time',
      salary: '$48000-$50000',
      location: 'Texas, USA',
    },
    {
      id: 4,
      title: 'District Intranet Director',
      company: 'VonRueden - Weber Co',
      category: 'Commerce',
      type: 'Full time',
      salary: '$42000-$48000',
      location: 'Florida, USA',
    },
    {
      id: 5,
      title: 'Corporate Tactics Facilitator',
      company: 'Cormier, Turner and Flatley Inc',
      category: 'Commerce',
      type: 'Full time',
      salary: '$38000-$40000',
      location: 'Boston, USA',
    },
    {
      id: 6,
      title: 'Forward Accounts Consultant',
      company: 'Miller Group',
      category: 'Financial services',
      type: 'Full time',
      salary: '$45000-$48000',
      location: 'Boston, USA',
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-[#0D1953]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white text-center">Jobs</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-[270px]">
          <JobSidebar />
        </div>
        {/* Job List & Filter */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
            <div className="text-gray-600 text-base">
              Showing 1-6 of 10 results
            </div>
            <JobSortSelect />
          </div>
          <JobList jobs={jobs} />
          <JobPagination />
        </div>
      </div>
    </div>
  );
}
