import React from 'react';

export default function JobDescription({
  jobDescription,
  setJobDescription,
  error,
}) {
  return (
    <div className="bg-white rounded-lg p-8 text-black flex flex-col items-center justify-center shadow-lg w-full max-w-md min-h-[320px]">
      <h3 className="text-lg font-semibold mb-2 text-center">
        Job Description
      </h3>
      <p className="text-center text-gray-500 mb-4 leading-relaxed text-sm max-w-[320px]">
        Enter the job description to match against your CV
      </p>
      <textarea
        id="jobDescription"
        rows={6}
        placeholder="Copy and paste the job description from the job posting.."
        className={`w-full p-2 border rounded resize-none min-h-[120px] ${error ? 'border-red-600' : 'border-gray-300'}`}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
