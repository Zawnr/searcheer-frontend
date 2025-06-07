import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkPlusIcon from './BookmarkPlusIcon';
import logo1 from '../../assets/Icons/IconRSA/1.png';
import logo2 from '../../assets/Icons/IconRSA/2.png';
import logo3 from '../../assets/Icons/IconRSA/3.png';
import logo4 from '../../assets/Icons/IconRSA/4.png';
import { LuBriefcase, LuClock, LuWallet, LuMapPin } from 'react-icons/lu';

const jobs = [
  {
    id: 1,
    time: '10 min ago',
    title: 'Forward Security Director',
    company: 'Bauch, Schuppe and Schulist Co',
    logo: logo1,
    info: [
      { icon: 'briefcase', label: 'Hotels & Tourism' },
      { icon: 'clock', label: 'Full time' },
      { icon: 'wallet', label: '$40000-$42000' },
      { icon: 'location', label: 'New-York, USA' },
    ],
  },
  {
    id: 2,
    time: '12 min ago',
    title: 'Regional Creative Facilitator',
    company: 'Wisozk - Becker Co',
    logo: logo2,
    info: [
      { icon: 'briefcase', label: 'Media' },
      { icon: 'clock', label: 'Part time' },
      { icon: 'wallet', label: '$28000-$32000' },
      { icon: 'location', label: 'Los- Angeles, USA' },
    ],
  },
  {
    id: 3,
    time: '15 min ago',
    title: 'Internal Integration Planner',
    company: 'Mraz, Quigley and Feest Inc.',
    logo: logo3,
    info: [
      { icon: 'briefcase', label: 'Construction' },
      { icon: 'clock', label: 'Full time' },
      { icon: 'wallet', label: '$48000-$50000' },
      { icon: 'location', label: 'Texas, USA' },
    ],
  },
  {
    id: 4,
    time: '24 min ago',
    title: 'District Intranet Director',
    company: 'VonRueden - Weber Co',
    logo: logo4,
    info: [
      { icon: 'briefcase', label: 'Commerce' },
      { icon: 'clock', label: 'Full time' },
      { icon: 'wallet', label: '$42000-$48000' },
      { icon: 'location', label: 'Florida, USA' },
    ],
  },
];

const InfoIcon = ({ type }) => {
  switch (type) {
    case 'briefcase':
      return <LuBriefcase className="w-5 h-5 text-blue-500" />;
    case 'clock':
      return <LuClock className="w-5 h-5 text-blue-500" />;
    case 'wallet':
      return <LuWallet className="w-5 h-5 text-blue-500" />;
    case 'location':
      return <LuMapPin className="w-5 h-5 text-blue-500" />;
    default:
      return null;
  }
};

export default function RecentJobs() {
  const navigate = useNavigate();
  // Array untuk status bookmark setiap job
  const [bookmarked, setBookmarked] = useState(Array(jobs.length).fill(false));

  const toggleBookmark = (idx) => {
    setBookmarked((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">Recent Jobs Available</h2>
        <a
          href="#"
          className="text-black font-semibold underline hover:text-blue-600 text-base"
        >
          View all
        </a>
      </div>
      <div className="space-y-7">
        {jobs.map((job, idx) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-gray-100 px-7 py-6 flex flex-col shadow-sm hover:shadow-lg relative"
          >
            {/* Bookmark kanan atas */}
            <button
              className="absolute top-6 right-7 outline-none"
              onClick={() => toggleBookmark(idx)}
              aria-label="Bookmark"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <BookmarkPlusIcon filled={bookmarked[idx]} size={32} />
            </button>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              {/* Kiri: Logo & konten */}
              <div className="flex flex-row flex-1 min-w-0">
                {/* Logo */}
                <div className="flex flex-col justify-center">
                  <img
                    src={job.logo}
                    alt="logo"
                    className="w-12 h-12 rounded-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center pl-4">
                  {/* Badge waktu */}
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold rounded-lg px-3 py-1 mb-2 mt-1 w-fit">
                    {job.time}
                  </span>
                  <div className="font-bold text-xl text-gray-900 leading-tight mb-0">
                    {job.title}
                  </div>
                  <div className="text-gray-500 text-base mb-3">
                    {job.company}
                  </div>
                  {/* Info & tombol sejajar */}
                  <div className="flex flex-row items-end justify-between mt-2">
                    {/* Info */}
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-700 text-base font-medium">
                      {job.info.map((info, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <InfoIcon type={info.icon} />
                          <span>{info.label}</span>
                        </span>
                      ))}
                    </div>
                    {/* Tombol desktop */}
                    <div className="ml-6 hidden md:block">
                      <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm rounded-lg px-6 py-2 font-semibold shadow min-w-[110px]"
                        onClick={() => navigate(`/jobs/${job.id}`)}
                      >
                        Job Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tombol mobile: tampil di bawah info */}
              <div className="flex md:hidden justify-end mt-4">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm rounded-lg px-6 py-2 font-semibold shadow min-w-[110px]"
                  onClick={() => navigate(`/jobs/${job.id}`)}
                >
                  Job Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
