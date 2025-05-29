import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import FotoCindy from '../assets/FotoTeam/Cindy.jpg';

const teamMembers = [
  {
    photo: FotoCindy,
    name: 'Insania Cindy Puan F',
    role: 'Software Engineer',
    description:
      'There are many variations of passages of Lorem Ipsum available',
    bgColor: '#A9D6E5',
    socialLinks: {
      github: 'https://github.com/insanniaa',
      instagram: 'https://www.instagram.com/insanniaa/',
      email: 'insanniaacindy@gmail.com',
    },
  },
  {
    photo:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Muhammad Deryl Tazreva',
    role: 'Software Engineer',
    description:
      'There are many variations of passages of Lorem Ipsum available',
    bgColor: '#F2B5A0',
    socialLinks: {
      github: 'https://github.com/deryltazreva',
      instagram: 'https://www.instagram.com/deryltazrevaa/',
      email: 'deryltazreva@gmail.com',
    },
  },
  {
    photo:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Raisha Isma Aulia',
    role: 'Software Engineer',
    description:
      'There are many variations of passages of Lorem Ipsum available',
    bgColor: '#E9C89F',
    socialLinks: {
      github: 'https://github.com/RaishaIsma',
      instagram: 'https://www.instagram.com/raishaiaa',
      email: 'raishaismaaulia@gmail.com',
    },
  },
  {
    photo:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Reiki Syahmaulana Mirzha',
    role: 'Software Engineer',
    description:
      'There are many variations of passages of Lorem Ipsum available',
    bgColor: '#D9B9B3',
    socialLinks: {
      github: 'https://github.com/reikisyah',
      instagram: 'https://www.instagram.com/reiq.s',
      email: 'reiky.mirzha321@gmail.com',
    },
  },
  {
    photo:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Nur Ramadhani Putri W',
    role: 'Software Engineer',
    description:
      'There are many variations of passages of Lorem Ipsum available',
    bgColor: '#8C7AE6',
    socialLinks: {
      github: 'https://github.com/Ririe13',
      instagram: 'https://www.instagram.com/ririe_rx',
      email: 'putriwldr329@gmail.com',
    },
  },
  {
    photo:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Nur Rochmat Zawawi',
    role: 'Software Engineer',
    description:
      'There are many variations of passages of Lorem Ipsum available',
    bgColor: '#A3E6B1',
    socialLinks: {
      github: 'https://github.com/Zawnr/',
      instagram: 'https://www.instagram.com/zawawi_nur/',
      email: 'rochmat27nurza@gmail.com',
    },
  },
];

export default function OurTeam() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 mt-4">
          Meet the Searcheer Team
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-12">
          Searcheer is developed by a dedicated team of six students from two
          prestigious institutions
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-14 items-start">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard key={member.name + idx} {...member} />
        ))}
      </div>

      {/* Team Description */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center text-gray-700 mb-14 space-y-3">
        <p className="text-sm sm:text-base">
          Our team is a group of passionate students driven by creativity,
          innovation, and a commitment to excellence. We bring together diverse
          skills and experiences to build solutions that make a real difference.
        </p>
        <p className="text-sm sm:text-base">
          United by shared values and a bold vision, we work together to push
          boundaries, embrace new ideas, and turn challenges into opportunities.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
        {/* Left: Text and Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            You Will Grow, You Will Succeed. We Promise That
          </h2>
          <p className="mb-6 text-gray-700 text-sm sm:text-base">
            Ready to transform your job search experience? Join thousands of
            students and fresh graduates who are already using Searcheer to find
            their dream careers. Because when you search better, your career
            sounds louder.
          </p>
          {/* Kontak info */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
            {/* Call */}
            <div className="flex items-start gap-3 sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.75a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-.75A.75.75 0 006 10v2c0 3.771 3.229 7 7 7h2a.75.75 0 00.75-.75V17a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2A15.75 15.75 0 013 5.75z"
                />
              </svg>
              <div>
                <div className="font-bold text-lg sm:text-xl mb-1 text-black">
                  Call for inquiry
                </div>
                <div className="text-base sm:text-lg text-black">
                  +62 832-330-432
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 7.75v8.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.25v-8.5A2.25 2.25 0 014.5 5.75h15a2.25 2.25 0 012.25 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.75l8.25 5.5 8.25-5.5"
                />
              </svg>
              <div>
                <div className="font-bold text-lg sm:text-xl mb-1 text-black">
                  Send us email
                </div>
                <div className="text-base sm:text-lg text-black">
                  kramulous@sbcglobal.net
                </div>
              </div>
            </div>
            {/* Jam */}
            <div className="flex items-start gap-3 sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle
                  cx={12}
                  cy={12}
                  r={9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              <div>
                <div className="font-bold text-lg sm:text-xl mb-1 text-black">
                  Opening hours
                </div>
                <div className="text-base sm:text-lg text-black">
                  Mon - Fri: 10AM - 10PM
                </div>
              </div>
            </div>
            {/* Office */}
            <div className="flex items-start gap-3 sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                />
                <circle cx={12} cy={9} r={2.5} />
              </svg>
              <div>
                <div className="font-bold text-lg sm:text-xl mb-1 text-black">
                  Office
                </div>
                <div className="text-base sm:text-lg text-black">
                  19 North Road Piscataway, NY 08854
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="bg-yellow-400 rounded-2xl p-6 sm:p-8 shadow flex flex-col justify-center items-center max-w-md w-full mx-auto">
          <h3 className="font-bold text-white text-xl sm:text-2xl mb-1">
            Contact Info
          </h3>
          <div className="text-white mb-6 text-sm sm:text-base">
            Need additional resources?
          </div>
          <form className="space-y-5 text-left">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="text-white font-semibold mb-1 block text-sm sm:text-base"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Your name"
                  className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="text-white font-semibold mb-1 block text-sm sm:text-base"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white font-semibold mb-1 block text-sm sm:text-base"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your E-mail address"
                className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white font-semibold mb-1 block text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={4}
                className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-3 font-semibold text-sm sm:text-base hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
