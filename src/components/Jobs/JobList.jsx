import React from 'react';
import JobCard from './JobCard';

export default function JobList({ jobs, loading, error }) {
  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">Loading jobs...</div>
    );
  }
  if (error) {
    return <div className="py-10 text-center text-red-500">{error}</div>;
  }
  if (!jobs || jobs.length === 0) {
    return (
      <div className="py-10 text-center text-gray-400">No jobs found.</div>
    );
  }

  // Grid 1 kolom, padding kanan kiri diperbaiki
  return (
    <div className="grid grid-cols-1 gap-4 px-2 sm:px-4 md:px-8">
      {jobs.map((job) => (
        <JobCard key={job.job_id || job.id} job={job} />
      ))}
    </div>
  );
}
