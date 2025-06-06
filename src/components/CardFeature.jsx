import React from 'react';

export default function CardFeature({ icon, title, desc }) {
  return (
    <div className="rounded-2xl shadow-md bg-white px-6 py-6 flex flex-col items-center text-center">
      <span className="text-3xl mb-3">{icon}</span>
      <span className="font-bold">{title}</span>
      <span className="text-xs mt-1 text-gray-500">{desc}</span>
    </div>
  );
}
