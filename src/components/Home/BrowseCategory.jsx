import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.h2
        className="text-4xl font-bold text-black text-center mb-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        Browse by Category
      </motion.h2>
      <motion.p
        className="text-center text-lg text-black mb-14 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
      >
        Explore job opportunities across various industries and find positions
        that match your skills and career goals.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow flex flex-col items-center border border-gray-100 p-10 min-h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 + idx * 0.12 }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 32px 0 rgba(244,199,98,0.10)',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: 0.18 + idx * 0.1,
                type: 'spring',
                stiffness: 120,
              }}
            >
              {cat.icon}
            </motion.div>
            <motion.h3
              className="font-bold text-xl text-black text-center mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.22 + idx * 0.1 }}
            >
              {cat.name}
            </motion.h3>
            <motion.span
              className="bg-[#E6F3F8] text-[#F4C762] font-semibold rounded-2xl px-6 py-2 mt-auto whitespace-nowrap min-w-[88px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.26 + idx * 0.1 }}
            >
              {cat.count} jobs
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
