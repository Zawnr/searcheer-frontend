import React from 'react';

export default function TeamMemberCard({
  photo,
  name,
  role,
  description,
  bgColor,
  socialLinks,
}) {
  return (
    <div className="rounded-xl shadow border border-gray-100 bg-white overflow-hidden flex flex-col items-center w-full max-w-xs mx-auto">
      <div
        className="relative w-full flex justify-center"
        style={{ backgroundColor: bgColor, height: 135 }}
      >
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 28 }}>
          <img
            src={photo}
            alt={name}
            className="h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] object-cover rounded-full border-4 border-white shadow"
            draggable="false"
            style={{ background: '#fff' }}
          />
        </div>
      </div>

      {/* Bagian bawah: konten card */}
      <div className="flex flex-col justify-end flex-1 pt-20 pb-7 px-5 text-center w-full">
        <h3 className="text-lg font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-base text-blue-900 mb-1">{role}</p>
        <p className="text-xs text-gray-500 mb-4">{description}</p>
        <div className="flex gap-4 justify-center">
          {/* GITHUB */}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black text-gray-400 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
            >
              {/* GitHub SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 
                8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04
                -.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                -.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73
                1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108
                -.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47
                -2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322
                3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404
                2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77
                .84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823
                1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565
                21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          )}
          {/* INSTAGRAM */}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 text-gray-400 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
            >
              {/* Instagram SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75
                5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75
                5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25
                0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0
                0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5
                0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                />
              </svg>
            </a>
          )}
          {/* EMAIL */}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="hover:text-blue-600 text-gray-400 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
            >
              {/* Email SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1.4 2L12 13.25 4.4 6h15.2zM4 18V8.4l7.29 7.3a1 1 0 001.42 0L20 8.4V18H4z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
