import React from 'react';
import {
  LuSprout,
  LuCylinder,
  LuShoppingBag,
  LuHardHat,
  LuHotel,
  LuGraduationCap,
  LuCoins,
  LuBus,
} from 'react-icons/lu';

const categories = [
  {
    name: 'Agriculture',
    count: 1254,
    icon: <LuSprout size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Metal Production',
    count: 816,
    icon: <LuCylinder size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Commerce',
    count: 2082,
    icon: <LuShoppingBag size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Construction',
    count: 1520,
    icon: <LuHardHat size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Hotels & Tourism',
    count: 1022,
    icon: <LuHotel size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Education',
    count: 1496,
    icon: <LuGraduationCap size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Financial Services',
    count: 1529,
    icon: <LuCoins size={44} className="text-yellow-400 mb-4" />,
  },
  {
    name: 'Transport',
    count: 1244,
    icon: <LuBus size={44} className="text-yellow-400 mb-4" />,
  },
];

export default function BrowseCategory() {
  return (
    <section className="bg-[#FFF8EE] py-20 px-4">
      <h2 className="text-4xl font-bold text-black text-center mb-3">
        Browse by Category
      </h2>
      <p className="text-center text-lg text-black mb-14 max-w-3xl mx-auto">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a
        massa elementum id scel...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow flex flex-col items-center border border-gray-100 p-10 min-h-[240px]"
          >
            {cat.icon}
            <h3 className="font-bold text-xl text-black text-center mb-2">
              {cat.name}
            </h3>
            <span className="bg-[#E6F3F8] text-[#F4C762] font-semibold rounded-2xl px-6 py-2 mt-auto whitespace-nowrap min-w-[88px] text-center">
              {cat.count} jobs
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
