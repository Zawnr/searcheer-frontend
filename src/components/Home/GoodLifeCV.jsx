import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '12k+',
    title: 'Clients worldwide',
    description:
      'Students and professionals from around the globe trust our AI-powered CV analysis to enhance their career prospects.',
  },
  {
    number: '20k+',
    title: 'Active resume',
    description:
      'CVs analyzed and improved through our intelligent matching system, helping job seekers stand out in competitive markets.',
  },
  {
    number: '18k+',
    title: 'Companies',
    description:
      'Partner companies and job listings available on our platform, offering diverse opportunities across multiple industries.',
  },
];

export default function GoodLifePage() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:items-center md:justify-start gap-12">
        {/* Kiri: Foto */}
        <motion.div
          className="flex-1 flex justify-start items-center min-w-[320px] max-w-[500px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=80"
            alt="Good Life Begins With A Good CV"
            className="rounded-3xl object-cover w-[440px] h-[340px] max-w-full"
            style={{ minWidth: 300, minHeight: 220 }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
            }}
          />
        </motion.div>
        {/* Kanan: Konten */}
        <motion.div
          className="flex-1 flex flex-col justify-center max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Good Life Begins <br className="hidden md:block" />
            With A Good CV
          </motion.h2>
          <motion.p
            className="mb-10 text-[#3D3D3D] text-xl md:text-2xl leading-relaxed max-w-[540px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your dream job starts with knowing your worth — and showing it
            right. Let Searcheer help you analyze, improve, and align your CV
            with what companies are really looking for.
          </motion.p>
          <motion.div
            className="flex flex-row items-center gap-7"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.a
              href="#"
              button="true"
              className="bg-[#eab82a] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[rgb(234,184,42)] transition shadow-lg"
              whileHover={{
                scale: 1.06,
                boxShadow: '0 8px 32px 0 rgba(234,184,42,0.18)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              Lets Analyze
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-14">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="space-y-3 md:space-y-4 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 + idx * 0.15 }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 32px 0 rgba(244,199,98,0.10)',
            }}
          >
            <motion.h3
              className="text-4xl md:text-5xl font-extrabold text-[#F4C762] mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              {stat.number}
            </motion.h3>
            <motion.h4
              className="text-xl md:text-2xl font-bold text-black mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.25 + idx * 0.1 }}
            >
              {stat.title}
            </motion.h4>
            <motion.p
              className="text-gray-700 text-base md:text-lg mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            >
              {stat.description}
            </motion.p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
