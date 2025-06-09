import React, { useState } from 'react';
import UploadCV from '../UploadCV';
import JobDescription from '../JobDescription';
import { useNavigate } from 'react-router-dom';
import { uploadCV, analyzeCV } from '../../../utils/api';
import bgBlurGelap from '../../../assets/images/Bg/bg-blur-gelap.png';
import AlertPopup from '../AlertPopup';
import StatSection from './StatSection';
import { useCVValidation } from './useCVValidation';

export default function HeroSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [cvError, setCvError] = useState('');
  const [jobTitleError, setJobTitleError] = useState('');
  const [jobDescError, setJobDescError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [showAtsPopup, setShowAtsPopup] = useState(false);
  const [showIndoPopup, setShowIndoPopup] = useState(false);
  const [atsMessage, setAtsMessage] = useState('');

  const navigate = useNavigate();
  const { validate } = useCVValidation();

  const handleAnalyzeClick = async () => {
    setShowAtsPopup(false);
    setShowIndoPopup(false);
    setAtsMessage('');
    setShowValidation(true);

    const { valid, foundIndo, foundCvError } = validate({
      selectedFile,
      jobTitle,
      jobDescription,
      setCvError,
      setJobTitleError,
      setJobDescError,
    });

    if (foundIndo) setShowIndoPopup(true);
    if (foundCvError) {
      setAtsMessage(
        'Please upload a valid CV file (PDF, English, ATS-friendly).'
      );
      setShowAtsPopup(true);
    }

    if (!valid) return;

    setLoading(true);
    setCvError('');
    setJobTitleError('');
    setJobDescError('');
    try {
      const token = localStorage.getItem('token');
      const uploadRes = await uploadCV(selectedFile, token);

      if (
        uploadRes &&
        uploadRes.ats_score !== undefined &&
        uploadRes.ats_score < 70 &&
        !uploadRes.id
      ) {
        setAtsMessage(
          uploadRes && uploadRes.message
            ? uploadRes.message.replace(
                'Sorry, Your CV is not ATS-friendly.',
                'Sorry, our CV analysis service is temporarily unavailable. Please try again later!'
              )
            : 'Your CV is not ATS-friendly. Please improve your CV format as suggested below.'
        );
        setShowAtsPopup(true);
        setLoading(false);
        return;
      }

      const cvId = uploadRes.id || (uploadRes.data && uploadRes.data.id);
      if (!cvId) throw new Error('Failed to get cvId from server.');

      const analyzeRes = await analyzeCV({
        cvId,
        jobTitle,
        jobDescription,
        token,
      });

      const resultId = analyzeRes.id || (analyzeRes.data && analyzeRes.data.id);
      if (!resultId)
        throw new Error('Failed to get analysis result id from server.');

      localStorage.setItem('lastResultId', resultId);
      navigate('/analyzing');
    } catch (err) {
      let errMsg = err.message || 'Analysis failed.';
      if (
        err.response &&
        err.response.data &&
        Array.isArray(err.response.data.errors) &&
        err.response.data.errors.length > 0
      ) {
        errMsg = err.response.data.errors[0] || errMsg;
      }

      if (
        (!errMsg.toLowerCase().includes('title') &&
          !errMsg.toLowerCase().includes('description')) ||
        errMsg.toLowerCase().includes('cv')
      ) {
        setAtsMessage(
          errMsg.replace(
            'Sorry, Your CV is not ATS-friendly..',
            'Sorry, our CV analysis service is temporarily unavailable. Please try again later!'
          )
        );
        setShowAtsPopup(true);
      }

      if (errMsg.toLowerCase().includes('title')) {
        setJobTitleError(errMsg);
      } else if (errMsg.toLowerCase().includes('description')) {
        setJobDescError(errMsg);
      } else if (errMsg.toLowerCase().includes('cv')) {
        setCvError(errMsg);
      } else {
        setCvError(errMsg);
      }
    } finally {
      setLoading(false);
    }
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
      <AlertPopup
        visible={showAtsPopup}
        type="ats"
        title="Your CV is not ATS-friendly"
        description={
          atsMessage ||
          'The ATS (Applicant Tracking System) cannot read your CV properly. This may reduce your chances of passing the automated screening process.'
        }
        suggestions={[
          'Use simple formatting without complex tables or columns',
          'Choose standard fonts like Arial, Helvetica, or Times New Roman',
          'Avoid complex design elements such as graphics or images',
          'Ensure the document is a text-based PDF, not an image PDF',
          'Use clear headings (Experience, Education, Skills)',
        ]}
        onClose={() => setShowAtsPopup(false)}
      />

      <AlertPopup
        visible={showIndoPopup}
        type="indo"
        title="Language Warning"
        description="We detected that your Job Title or Description is not in English. For optimal results, please use English."
        suggestions={[
          'Most ATS systems are optimized for English language',
          'Keyword matching will be more accurate',
          'International standard for professional CVs',
          'Expands job opportunities globally',
          'Better parsing of technical terms and skills',
        ]}
        onClose={() => setShowIndoPopup(false)}
      />

      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-8 mb-4 tracking-tight leading-tight">
        Match Your CV with Your Dream Job!
      </h1>
      <p className="text-gray-200 text-base sm:text-lg text-center max-w-2xl mx-auto mb-6 md:mb-8">
        Upload your CV and paste the job description you’re aiming for.
        Searcheer will analyze them using AI, show your match score, suggest
        improvements, and recommend other relevant job opportunities.
      </p>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 justify-center items-stretch mb-8 w-full max-w-[1100px] mx-auto">
        <UploadCV
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          error={cvError}
          setError={setCvError}
          showValidation={showValidation}
        />
        <JobDescription
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          errorTitle={jobTitleError}
          errorDesc={jobDescError}
          showValidation={showValidation}
        />
      </div>

      <div className="flex justify-center w-full mb-7">
        <button
          onClick={handleAnalyzeClick}
          className="bg-[#3F67F9] hover:bg-blue-700 transition text-white font-semibold px-7 py-2 rounded-xl text-base"
          style={{ minWidth: '0', width: 'auto' }}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze CV'}
        </button>
      </div>

      <StatSection />
    </section>
  );
}
