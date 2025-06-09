import React from 'react';

export default function JobPagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  // Logika: Hanya tampilkan max 5 halaman + "..." jika >5
  const getPages = () => {
    let pages = [];

    if (totalPages <= 5) {
      // Semua halaman ditampilkan
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= 3) {
      pages = [1, 2, 3, 4, '...', totalPages];
    } else if (page >= totalPages - 2) {
      pages = [
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pages = [1, '...', page - 1, page, page + 1, '...', totalPages];
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 py-8">
      <button
        className="px-3 py-1 rounded-lg border border-gray-200 bg-white text-gray-600 disabled:opacity-50"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        &lt;
      </button>
      {getPages().map((p, idx) =>
        p === '...' ? (
          <span key={idx} className="px-2 text-gray-400 select-none">
            ...
          </span>
        ) : (
          <button
            key={p}
            className={`px-3 py-1 rounded-lg border ${
              page === p
                ? 'bg-blue-600 text-white border-blue-600 font-bold'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
            }`}
            onClick={() => onChange(p)}
            disabled={p === page}
          >
            {p}
          </button>
        )
      )}
      <button
        className="px-3 py-1 rounded-lg border border-gray-200 bg-white text-gray-600 disabled:opacity-50"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
