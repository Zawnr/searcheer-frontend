import React from 'react';
import { motion } from 'framer-motion';

import { LuBriefcase, LuUsers, LuBuilding2 } from 'react-icons/lu';

export default function StatSection() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 max-w-3xl mx-auto text-white text-sm sm:text-base"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500 rounded-full flex items-center justify-center w-16 h-16">
          <LuBriefcase size={36} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-2xl">4,850</div>
          <div className="text-gray-200">Job Listings</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500 rounded-full flex items-center justify-center w-16 h-16">
          <LuUsers size={36} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-2xl">1,250</div>
          <div className="text-gray-200">Active Users</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500 rounded-full flex items-center justify-center w-16 h-16">
          <LuBuilding2 size={36} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-2xl">2,400</div>
          <div className="text-gray-200">CV Match</div>
        </div>
      </div>
    </motion.div>
  );
}
