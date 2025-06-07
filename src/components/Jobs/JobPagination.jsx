import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

export default function JobPagination({ current = 1, total = 2, onChange }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {/* Tombol angka */}
      <div className="flex gap-2">
        {[...Array(total)].map((_, idx) => {
          const page = idx + 1;
          const isActive = page === current;
          return (
            <button
              key={page}
              onClick={() => onChange && onChange(page)}
              className={`w-8 h-8 rounded font-bold border 
                ${
                  isActive
                    ? 'bg-[#FFCD38] text-[#000957] border-[#FFCD38]'
                    : 'bg-white text-[#000957] border-[#D9D9D9]'
                }
                transition`}
            >
              {page}
            </button>
          );
        })}
      </div>
      {/* Tombol Next */}
      <button
        onClick={() => current < total && onChange && onChange(current + 1)}
        className="flex items-center gap-2 px-4 h-8 border border-[#D9D9D9] rounded bg-white text-[#000957] font-bold text-base hover:bg-[#f5f5f5] transition"
        disabled={current === total}
      >
        Next <FiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
