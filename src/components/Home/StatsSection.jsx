import React from 'react';

export default function StatsSection() {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* Statistik */}
      <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 md:gap-12 justify-center items-center w-full max-w-2xl mx-auto text-yellow-400 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-yellow-400 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
            {/* Job Listings Icon */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 3.5V7M8 3.5V7"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-white text-lg sm:text-xl font-bold">4,850</div>
            <div className="text-white text-sm sm:text-base opacity-80">
              Job Listings
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-yellow-400 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
            {/* Active Users Icon */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="9"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="17"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M2 21v-2a4 4 0 014-4h2m8 0h2a4 4 0 014 4v2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-white text-lg sm:text-xl font-bold">1,250</div>
            <div className="text-white text-sm sm:text-base opacity-80">
              Active Users
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-yellow-400 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
            {/* CV Match Icon */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect x="7" y="11" width="2" height="2" fill="currentColor" />
              <rect x="11" y="11" width="2" height="2" fill="currentColor" />
              <rect x="15" y="11" width="2" height="2" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-white text-lg sm:text-xl font-bold">2,400</div>
            <div className="text-white text-sm sm:text-base opacity-80">
              CV Match
            </div>
          </div>
        </div>
      </div>
      {/* Pro Tip */}
      <div className="text-xs text-white opacity-90 text-center max-w-lg">
        Pro tip: Recruiters usually spend 6–8 seconds on your CV. Make sure your
        top 3 strengths are visible right away.
      </div>
    </div>
  );
}
