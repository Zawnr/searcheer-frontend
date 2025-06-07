import React from 'react';
import JobCard from './JobCard';

export default function JobList({ jobs }) {
  return (
    <div className="flex flex-col gap-5">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
