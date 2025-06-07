import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLoadingText from './AnimatedLoadingText';
import bgBlurGelap from '../../assets/images/Bg/bg-blur-gelap.png';

export default function AnalyzingView() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/analysis-result');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section
      className="text-white px-8 py-16 flex flex-col items-center min-h-screen"
      style={{
        backgroundImage: `url(${bgBlurGelap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Match Your CV with Your Dream Job!
      </h1>
      <p className="max-w-3xl text-center mb-10">
        Upload your CV and paste the job description you’re aiming for. Searcher
        will analyze them using AI, show your match score, suggest improvements,
        and recommend other relevant job opportunities.
      </p>
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          <AnimatedLoadingText text="Analyzing your CV with AI magic..." />
        </h2>
        <p className="mb-6">
          Matching your skills to the job description. Hang tight!
        </p>
        <div className="flex justify-center space-x-12 text-yellow-400 text-center">
          <div>
            <div className="text-3xl font-bold">4,850</div>
            <div>Job Listings</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1,250</div>
            <div>Active users</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2,400</div>
            <div>CV Match</div>
          </div>
        </div>
      </div>
    </section>
  );
}
