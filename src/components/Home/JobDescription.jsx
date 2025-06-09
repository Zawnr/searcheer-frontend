import React from 'react';

export default function JobDescription({
  jobTitle,
  setJobTitle,
  jobDescription,
  setJobDescription,
  errorTitle,
  errorDesc,
  showValidation,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-[430px] px-8 py-8 flex flex-col gap-2">
      <label className="font-semibold text-lg text-[#232d3b] mb-2">
        Job Title
      </label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="e.g. Backend Developer"
        className={`w-full px-4 py-2 mb-2 border ${
          showValidation && errorTitle ? 'border-red-400' : 'border-gray-300'
        } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base`}
        autoComplete="off"
      />
      {showValidation && errorTitle && (
        <div className="text-xs text-red-500 mb-1">{errorTitle}</div>
      )}

      <label className="font-semibold text-lg text-[#232d3b] mb-2 mt-2">
        Job Description
      </label>
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
        className={`w-full px-4 py-3 border ${
          showValidation && errorDesc ? 'border-red-400' : 'border-gray-300'
        } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[110px] text-base resize-y`}
        autoComplete="off"
      />
      {showValidation && errorDesc && (
        <div className="text-xs text-red-500">{errorDesc}</div>
      )}
    </div>
  );
}
