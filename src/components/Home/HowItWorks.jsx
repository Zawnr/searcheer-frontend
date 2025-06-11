import React from 'react';
import { motion } from 'framer-motion';
import ManIcon from '../../assets/Icons/IconHSW/Man.png';
import CloudIcon from '../../assets/Icons/IconHSW/Cloud.png';
import MagnifierIcon from '../../assets/Icons/IconHSW/Magnifier.png';
import ChecklistIcon from '../../assets/Icons/IconHSW/Checklist.png';

const steps = [
  {
    icon: ManIcon,
    title: 'Create account',
    desc: 'Create your account in minutes to get started with personalized career insights.',
  },
  {
    icon: CloudIcon,
    title: 'Upload Your CV & Job Description',
    desc: 'Upload your ATS-friendly CV and paste the job description you’re targeting — we’ll do the rest.',
    highlight: true,
  },
  {
    icon: MagnifierIcon,
    title: 'Get Your Match Report',
    desc: 'Our AI analyzes your CV and provides a match score, skill gap feedback, and tailored job recommendations.',
  },
  {
    icon: ChecklistIcon,
    title: 'Improve & Apply Confidently',
    desc: 'Update your CV with our insights and apply to the right jobs — smarter and more confidently.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#000957] py-12 px-2">
      <motion.h2
        className="text-white text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        How Searcheer work
      </motion.h2>
      <motion.div
        className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-start md:gap-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={
              step.highlight
                ? 'flex flex-col items-center bg-white rounded-2xl shadow-lg px-5 py-7 md:px-12 md:py-9 min-w-[90vw] max-w-[98vw] md:min-w-[340px] md:max-w-[400px] z-10'
                : 'flex flex-col items-center bg-transparent px-3 py-5 md:px-4 md:py-4 min-w-[80vw] max-w-[96vw] md:min-w-[220px] md:max-w-[300px]'
            }
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
          >
            {/* Gambar icon */}
            <div
              className="flex items-center justify-center mb-4 md:mb-5"
              style={{ height: 72 }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />
            </div>
            <div>
              <h3
                className={`text-center font-semibold mb-2 ${
                  step.highlight
                    ? 'text-gray-900 text-base md:text-xl'
                    : 'text-white text-sm md:text-lg'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-center ${
                  step.highlight ? 'text-gray-500' : 'text-gray-300'
                } text-xs md:text-base leading-relaxed max-w-[320px]`}
              >
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
