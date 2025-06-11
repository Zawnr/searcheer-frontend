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
    setShowValidation(true);
    setAtsMessage('');
    setShowAtsPopup(false);
    setShowIndoPopup(false);

    // Validasi form manual dulu
    const { valid, foundIndo, foundCvError } = validate({
      selectedFile,
      jobTitle,
      jobDescription,
      setCvError,
      setJobTitleError,
      setJobDescError,
    });

    // Kalau detect Indo, buka popup Indo DAN JANGAN LANJUT ANALISIS
    if (foundIndo) {
      setShowIndoPopup(true);
      setLoading(false);
      return;
    }

    // Error file CV (kosong/bukan PDF)
    if (foundCvError) {
      setShowAtsPopup(false);
      setAtsMessage('');
      return;
    }

    if (!valid) {
      setShowAtsPopup(false);
      setAtsMessage('');
      return;
    }

    setLoading(true);
    setCvError('');
    setJobTitleError('');
    setJobDescError('');

    try {
      const token = localStorage.getItem('token');
      const uploadRes = await uploadCV(selectedFile, token);

      // ATS warning dari upload response
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

      const msgLower = errMsg.toLowerCase();

      // Kata kunci error yang TIDAK boleh trigger popup ATS
      const isFileNotFound =
        msgLower.includes('file tidak ditemukan') ||
        msgLower.includes('please upload') ||
        msgLower.includes('belum upload') ||
        msgLower.includes('file not found') ||
        msgLower.includes('harus diupload') ||
        msgLower.includes('required') ||
        msgLower.includes('pdf format') ||
        msgLower.includes('max 10mb');

      // Pattern error untuk bahasa Indonesia dari ML
      const isIndoCV =
        msgLower.includes('cv detected as id') ||
        msgLower.includes('cv terdeteksi bahasa indonesia') ||
        msgLower.includes('bahasa indonesia') ||
        msgLower.includes('why english is important');

      let triggeredIndo = false;
      let triggeredAts = false;

      if (isFileNotFound) {
        setCvError(errMsg);
        triggeredAts = false;
      } else if (isIndoCV) {
        setShowIndoPopup(true);
        triggeredIndo = true;
        setAtsMessage('');
        setShowAtsPopup(false);
        return; // pastikan proses error handling stop di sini
      } else if (
        msgLower.includes(
          'analisis gagal karena input tidak valid dari layanan ml'
        )
      ) {
        // Jika error ML generic (input tidak valid), treat as Indo warning
        setShowIndoPopup(true);
        setAtsMessage('');
        setShowAtsPopup(false);
        return;
      } else {
        // Error pada job title/desc
        if (msgLower.includes('title')) {
          setJobTitleError(errMsg);
          if (
            msgLower.includes('english') ||
            msgLower.includes('bahasa') ||
            msgLower.includes('indo')
          ) {
            triggeredIndo = true;
          }
        }
        if (msgLower.includes('description')) {
          setJobDescError(errMsg);
          if (
            msgLower.includes('english') ||
            msgLower.includes('bahasa') ||
            msgLower.includes('indo')
          ) {
            triggeredIndo = true;
          }
        }

        // ATS popup error
        if (
          !msgLower.includes('title') &&
          !msgLower.includes('description') &&
          !isFileNotFound &&
          !isIndoCV
        ) {
          setAtsMessage(
            errMsg.replace(
              'Sorry, Your CV is not ATS-friendly..',
              'Sorry, our CV analysis service is temporarily unavailable. Please try again later!'
            )
          );
          triggeredAts = true;
        }
      }

      setShowAtsPopup(triggeredAts);
      setShowIndoPopup(triggeredIndo);
      // Hilangkan popup ATS jika popup Indo aktif
      if (triggeredIndo) setShowAtsPopup(false);
      if (!triggeredAts && !triggeredIndo) {
        setShowAtsPopup(false);
        setShowIndoPopup(false);
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
      {/* ATS Error */}
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

      {/* Language Warning */}
      <AlertPopup
        visible={showIndoPopup}
        type="indo"
        title="Language Warning"
        description="We detected that your Job Title, Description, or CV is not in English. For optimal results, please use English."
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
