import React, { useState } from 'react';
import bgBlurTeam from '../../assets/images/Bg/bg-blur-team.png';

export default function VideoCard() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => setShowVideo(true);
  const handleCloseClick = () => setShowVideo(false);

  return (
    <div className="max-w-6xl mx-auto mt-8"> {/* TANPA px-4 */}
      <div className="rounded-2xl overflow-hidden shadow-md relative">
        {/* Background image absolute */}
        <img
          src={bgBlurTeam}
          alt="Team Blur"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.85, zIndex: 0 }}
          draggable="false"
        />
        {/* Overlay konten */}
        <div className="w-full h-[330px] flex items-center justify-center relative z-10 px-4"> {/* padding di sini */}
          {/* Play button */}
          <button
            className="rounded-full bg-white/80 w-16 h-16 flex items-center justify-center shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl"
            onClick={handlePlayClick}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-blue-500"
            >
              <circle cx="12" cy="12" r="12" fill="#e9f4fb" />
              <polygon points="10,8 16,12 10,16" fill="#3490ec" />
            </svg>
          </button>
          <div className="absolute w-full flex flex-col items-center justify-center top-2/3 left-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg">
              Good Life Begins With
              <br />A Good CV
            </h3>
          </div>
        </div>
        {/* Video Overlay */}
        {showVideo && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseClick}
            >
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/g0lXTbbGETI?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {/* Footer benefit */}
        <div className="w-full bg-black/80 text-white grid grid-cols-1 md:grid-cols-3 gap-0 text-sm relative z-10 px-4">
          {[
            'AI-powered CV analysis for better job matching',
            'Personalized feedback to improve your CV',
            'Smart job recommendations based on your profile',
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex gap-3 p-4 items-center border-t border-gray-800"
            >
              <span className="bg-teal-600 px-2 py-1 rounded text-white font-bold text-xs">
                {idx + 1}
              </span>
              <div>
                <div>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
