import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgBlurGelap from '../../assets/images/Bg/bg-blur-gelap.png';
import { LuBriefcase, LuUsers, LuBuilding2 } from 'react-icons/lu';

export default function AnalyzingView() {
  const navigate = useNavigate();
  const [dotCount, setDotCount] = useState(1);

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, []);

  // Auto navigate to result
  useEffect(() => {
    const resultId = localStorage.getItem('lastResultId');
    console.log('AnalyzingView: resultId from localStorage:', resultId);
    const timer = setTimeout(() => {
      if (resultId) {
        console.log('Navigating to:', `/analysis-result/${resultId}`);
        navigate(`/analysis-result/${resultId}`);
      } else {
        console.log('Navigating to home: /');
        navigate('/');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  // Buat string titik
  const dots = '.'.repeat(dotCount);

  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${bgBlurGelap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center mt-6 mb-3 tracking-tight leading-tight drop-shadow-lg">
          Analyzing your CV with AI magic{dots}{' '}
          <span role="img" aria-label="magnifier">
            🔍
          </span>
        </h1>
        <p className="text-white text-lg md:text-xl text-center mb-2">
          Matching your skills to the job description. Hang tight!
        </p>
      </div>
      {/* Stat Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 max-w-3xl mx-auto text-white text-sm sm:text-base mt-14 mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full flex items-center justify-center w-14 h-14">
            <LuBriefcase size={30} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-xl">4,850</div>
            <div className="text-gray-200">Job Listings</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full flex items-center justify-center w-14 h-14">
            <LuUsers size={30} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-xl">1,250</div>
            <div className="text-gray-200">Active Users</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full flex items-center justify-center w-14 h-14">
            <LuBuilding2 size={30} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-xl">2,400</div>
            <div className="text-gray-200">CV Match</div>
          </div>
        </div>
      </div>
    </section>
  );
}
