import React from 'react';
import { motion } from 'framer-motion';
import logoNada from '../../assets/images/Logo/LogoNada.png';

const testimonials = [
  {
    stars: 5,
    title: 'Perfect CV Analysis',
    text: 'The CV analysis tool provided detailed insights that helped me improve my resume significantly. Within a week of making the suggested changes, I started getting more interview calls.',
    name: 'Marco Kihn',
    role: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    stars: 5,
    title: 'Streamlined Job Search',
    text: 'The platform made my job search incredibly efficient. The CV feedback was spot-on, and the job matching feature helped me find relevant positions quickly.',
    name: 'Kristin Hester',
    role: 'Marketing Manager',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    stars: 5,
    title: 'Game-Changing Tool',
    text: 'This service transformed my job search experience. The CV analysis highlighted areas I needed to improve, and the suggestions were practical and effective. Highly recommend!',
    name: 'Zion Cisneros',
    role: 'Business Analyst',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex space-x-1 text-yellow-400 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 md:h-6 md:w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#eaf5f4] py-20 px-4">
      <motion.h2
        className="text-5xl font-bold text-center mb-3 text-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        Testimonials from Our Customers
      </motion.h2>
      <motion.p
        className="text-center text-lg mb-14 max-w-3xl mx-auto text-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
      >
        Discover what our users say about their success stories. From CV
        improvements to landing dream jobs, see how our platform has helped
        professionals advance their careers.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 8px 32px 0 rgba(63,103,249,0.10)',
            }}
          >
            <div>
              <motion.div
                initial={{ scale: 0.8, rotate: -6, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + i * 0.1,
                  type: 'spring',
                  stiffness: 120,
                }}
              >
                <StarRating count={t.stars} />
              </motion.div>
              <motion.h3
                className="font-bold text-2xl text-black mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                {t.title}
              </motion.h3>
              <motion.p
                className="italic text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
              >
                {t.text}
              </motion.p>
            </div>
            <div className="flex items-end mt-auto pt-2 relative">
              <motion.img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover mr-3 shadow-lg"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.15,
                  type: 'spring',
                  stiffness: 120,
                }}
              />
              <div className="flex-1 min-w-0">
                <motion.p
                  className="font-bold text-black leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  {t.name}
                </motion.p>
                <motion.p
                  className="text-gray-500 text-base leading-tight"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.1 }}
                >
                  {t.role}
                </motion.p>
              </div>
              <motion.img
                src={logoNada}
                alt="quote"
                className="ml-auto w-10 h-10 object-contain -translate-y-5"
                style={{ minWidth: 36, minHeight: 36 }}
                initial={{ rotate: -30, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + i * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
