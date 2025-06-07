import React from 'react';
import {
  FiTag,
  FiClock,
  FiBriefcase,
  FiMapPin,
  FiCheckCircle,
} from 'react-icons/fi';
import JobOverviewCard from '../components/JobDetails/JobOverviewCard';

export default function JobDetails() {
  const job = {
    title: 'Marketing Administrator',
    remote: true,
    company: 'Internet',
    category: 'Marketing',
    type: 'Full time',
    salary: '$15000-$18000',
    location: 'GB, WAR, Coventry',
    department: 'Marketplace',
    experience: 'Entry Level',
    degree: "Bachelor's Degree",
    description: `Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.

Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.`,
    requirements: [
      'Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu',
      'Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in',
      'Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames',
      'Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta',
      'Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta',
      'Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta',
    ],
    benefits: [
      'Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.',
      'Ornare varius faucibus nisi vitae cras ornare',
      'Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae',
      'Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae',
      'Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae',
    ],
    about: `Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.

Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.`,
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafd]">
      {/* Header */}
      <div className="bg-[#0D1953]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10">
          <h1 className="text-4xl font-bold text-center text-white mb-1">
            Job Details
          </h1>
        </div>
      </div>
      {/* MAIN CONTENT */}
      <div className="flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 py-10">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-7">
            <span className="hover:underline cursor-pointer">Jobs</span>
            <span className="mx-2">{'>'}</span>
            <span>{job.title}</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT */}
            <main className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h2 className="font-bold text-2xl">{job.title}</h2>
                {job.remote && (
                  <span className="px-3 py-1 rounded-xl bg-[#e7f2ff] text-[#1766d9] text-xs font-semibold ml-2">
                    Remote
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500 mb-4">{job.company}</div>
              <div className="flex flex-wrap gap-5 items-center mb-7 text-[#21213b] text-sm">
                <span className="flex items-center gap-1">
                  <FiTag className="w-4 h-4 text-[#FFCD38]" /> {job.category}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock className="w-4 h-4 text-[#FFCD38]" /> {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <FiBriefcase className="w-4 h-4 text-[#FFCD38]" />{' '}
                  {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-4 h-4 text-[#FFCD38]" /> {job.location}
                </span>
              </div>
              {/* Description */}
              <section className="mb-8">
                <h3 className="font-semibold text-lg mb-2">Job Description</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  {job.description}
                </p>
              </section>
              {/* Requirements */}
              <section className="mb-8">
                <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                <ul className="flex flex-col gap-2 pl-1">
                  {job.requirements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-800"
                    >
                      <FiCheckCircle className="w-4 h-4 mt-[3px] text-[#1766d9]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {/* Benefits */}
              <section className="mb-8">
                <h3 className="font-semibold text-lg mb-2">Benefits</h3>
                <ul className="flex flex-col gap-2 pl-1">
                  {job.benefits.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-800"
                    >
                      <FiCheckCircle className="w-4 h-4 mt-[3px] text-[#1766d9]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {/* About */}
              <section>
                <h3 className="font-semibold text-lg mb-2">About</h3>
                <div className="rounded-xl bg-[#fff7e2] p-5 text-sm text-gray-800 whitespace-pre-line">
                  {job.about}
                </div>
              </section>
            </main>
            {/* SIDEBAR */}
            <aside className="w-full lg:w-[290px] flex-shrink-0">
              <JobOverviewCard job={job} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
