// src/components/Home/AlertPopup.jsx
import React from 'react';

export default function AlertPopup({
  visible,
  type = 'ats',
  title = 'Your CV is not ATS-friendly',
  description = 'The ATS (Applicant Tracking System) cannot read your CV properly. This may reduce your chances of passing the automated screening process.',
  suggestions = [],
  onClose,
}) {
  if (!visible) return null;

  // Warna Header berdasarkan type
  const colorMap = {
    ats: 'bg-[#F56C6C]', // merah ATS
    indo: 'bg-[#1FC2FF]', // biru warning bahasa
    info: 'bg-yellow-400',
    error: 'bg-red-600',
  };
  const headerBg = colorMap[type] || colorMap.ats;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="rounded-[30px] shadow-2xl w-full max-w-md mx-auto relative"
        style={{ minWidth: 340 }}
      >
        {/* HEADER */}
        <div
          className={`${headerBg} rounded-t-[30px] px-8 py-5 flex items-center justify-between`}
        >
          <h2 className="text-white text-2xl font-extrabold text-left">
            {title}
          </h2>
          <button
            className="text-white text-2xl ml-3 font-bold hover:text-gray-200"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {/* BODY */}
        <div className="bg-[#313e5b] rounded-b-[30px] px-7 py-8 flex flex-col items-center gap-4">
          <div className="text-gray-100 text-base font-medium text-left w-full mb-5">
            {description}
          </div>
          {Array.isArray(suggestions) && suggestions.length > 0 && (
            <div className="bg-white rounded-xl border-l-[8px] border-yellow-400 p-5 w-full">
              <ul className="list-disc pl-4 text-gray-700 text-sm">
                {suggestions.map((s, i) => (
                  <li key={i} className="mb-1">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
