import React from 'react';
import TeamMemberCard from '../components/OurTeam/TeamMemberCard';
import ContactInfo from '../components/OurTeam/ContactInfo';
import FotoCindy from '../assets/images/Team/Cindy.jpg';
import FotoDeryl from '../assets/images/Team/Deryl.jpg';
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineAccessTime,
  MdOutlineLocationOn,
} from 'react-icons/md';

const teamMembers = [
  {
    photo: FotoCindy,
    name: 'Insania Cindy Puan F',
    role: 'Universitas Brawijaya',
    description: 'Machine Learning Engineer',
    bgColor: '#A9D6E5',
    socialLinks: {
      github: 'https://github.com/insanniaa',
      instagram: 'https://www.instagram.com/insanniaa/',
      email: 'insanniaacindy@gmail.com',
    },
  },
  {
    photo: FotoDeryl,
    name: 'Muhammad Deryl Tazreva',
    role: 'Universitas Brawijaya',
    description: 'Machine Learning Engineer',
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
    role: 'Universitas Brawijaya',
    description: 'Machine Learning Engineer',
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
    role: 'Politeknik Negeri Banyuwangi',
    description: 'Front-End Developer',
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
    role: 'Politeknik Negeri Banyuwangi',
    description: 'Front-End Developer',
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
    role: 'Universitas Brawijaya',
    description: 'Back-End Developer',
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-14 items-start">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
            {/* Call */}
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0">
                <MdOutlinePhone size={30} className="text-blue-500" />
              </span>
              <div>
                <div className="font-bold text-lg sm:text-xl mb-1 text-black">
                  Call for inquiry
                </div>
                <div className="text-base sm:text-lg text-black">
                  +62 81230658657
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0">
                <MdOutlineEmail size={30} className="text-blue-500" />
              </span>
              <div>
                <div className="font-bold text-lg sm:text-xl mb-1 text-black">
                  Send us email
                </div>
                <div className="text-base sm:text-lg text-black">
                  reiky.mirzha321@gmail.com
                </div>
              </div>
            </div>
            {/* Jam */}
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0">
                <MdOutlineAccessTime size={30} className="text-blue-500" />
              </span>
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
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0">
                <MdOutlineLocationOn size={30} className="text-blue-500" />
              </span>
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
        <ContactInfo />
      </div>
    </div>
  );
}
