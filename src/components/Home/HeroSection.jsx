import React, { useState } from 'react';
import UploadCV from './UploadCV';
import JobDescription from './JobDescription';
import { useNavigate } from 'react-router-dom';
import bgBlurGelap from '../../assets/images/Bg/bg-blur-gelap.png';

// Icon React
import { LuBriefcase, LuUsers, LuBuilding2 } from 'react-icons/lu';

export default function HeroSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [cvError, setCvError] = useState('');
  const [jobDescError, setJobDescError] = useState('');

  const navigate = useNavigate();

  const validateInputs = () => {
    let valid = true;
    if (!selectedFile) {
      setCvError('Please upload a PDF file.');
      valid = false;
    } else {
      setCvError('');
    }
    if (!jobDescription.trim()) {
      setJobDescError('Please enter a job description.');
      valid = false;
    } else {
      setJobDescError('');
    }
    return valid;
  };

  const handleAnalyzeClick = () => {
    if (!validateInputs()) return;
    navigate('/analyzing');
  };

  return (
    <section
      className="w-full min-h-[700px] pt-10 md:pt-16 pb-8 md:pb-14 px-2 sm:px-4 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgBlurGelap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-8 mb-4 tracking-tight leading-tight">
        Match Your CV with Your Dream Job!
      </h1>
      <p className="text-gray-200 text-base sm:text-lg text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Upload your CV and paste the job description you’re aiming for.
        Searcheer will analyze them using AI, show your match score, suggest
        improvements, and recommend other relevant job opportunities.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch mb-7 md:mb-8 w-full max-w-3xl">
        <UploadCV
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          error={cvError}
          setError={setCvError}
        />
        <JobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          error={jobDescError}
        />
      </div>
      <div className="text-gray-300 text-center max-w-3xl mx-auto mb-7 text-xs sm:text-sm">
        Searcheer uses Natural Language Processing (NLP) to compare your CV
        content with job requirements. Get objective feedback, skill gap
        insights, and tailored job recommendations — all in one place.
      </div>
      <div className="flex justify-center w-full mb-7">
        <button
          onClick={handleAnalyzeClick}
          className="bg-[#3F67F9] hover:bg-blue-700 transition text-white font-semibold px-7 py-2 rounded-xl text-base"
          style={{ minWidth: '0', width: 'auto' }}
        >
          Analyze CV
        </button>
      </div>

      {/* Stat Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 max-w-3xl mx-auto text-white text-sm sm:text-base">
        {/* 1 */}
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full flex items-center justify-center w-16 h-16">
            <LuBriefcase size={36} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-2xl">4,850</div>
            <div className="text-gray-200">Job Listings</div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full flex items-center justify-center w-16 h-16">
            <LuUsers size={36} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-2xl">1,250</div>
            <div className="text-gray-200">Active Asers</div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full flex items-center justify-center w-16 h-16">
            <LuBuilding2 size={36} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-2xl">2,400</div>
            <div className="text-gray-200">CV Match</div>
          </div>
        </div>
      </div>
    </section>
  );
}
