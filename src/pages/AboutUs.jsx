import React from 'react';
import CardFeature from '../components/About/CardFeature';
import FaqAccordion from '../components/About/FaqAccordion';
import bgBlurTeam from '../assets/images/Bg/bg-blur-team.png';

// DATA: FAQ
const faqs = [
  {
    question: 'Can I upload a CV?',
    answer:
      'Yes, absolutely! Searcheer supports CV uploads in PDF format that are ATS-friendly and written in English. Simply click the upload button, select your CV file, and our AI will automatically extract and analyze the content. Make sure your CV follows standard formatting for the best analysis results.',
  },
  {
    question: 'How long will the analysis process take?',
    answer:
      'The CV analysis process typically takes 2-3 minutes depending on the complexity of your CV and the job description you’re matching against. Our AI needs time to: Extract your PDF, Identify skills and qualifications using NLP, Calculate similarity scores with job requirements, Generate personalized feedback and recommendations.',
  },
  {
    question: 'What does the analysis process involve?',
    answer:
      'Our comprehensive analysis includes several advanced steps: Extraction, Skill Identification, Job Matching, Gap Analysis, Success Prediction, Personalized Recommendations.',
  },
  {
    question: 'Do you provide services for fresh graduates and students?',
    answer:
      'Yes, we specialize in helping students and fresh graduates! Searcheer was specifically designed to address the unique challenges faced by final-year students preparing for internships and entry-level positions, fresh graduates entering the job market for the first time, career changers, and international students unfamiliar with local job market standards.',
  },
  {
    question: 'What file formats do you support?',
    answer:
      'Currently, we support PDF format for CV uploads to ensure maximum compatibility with our analysis algorithms.',
  },
  {
    question: 'How accurate is your job matching algorithm?',
    answer:
      'Our algorithm leverages advanced Natural Language Processing (NLP) and machine learning models to provide accurate job matching and recommendations.',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Absolutely! We prioritize your privacy and use industry best practices to keep your data secure and confidential.',
  },
  {
    question: 'Can I analyze multiple job descriptions with one CV?',
    answer:
      'Currently, our platform provides instant job recommendations based on your CV analysis. We’re planning to introduce this feature in future updates.',
  },
  {
    question: "What if my CV doesn't match any job descriptions well?",
    answer:
      'Don’t worry! We will give you recommendations to improve your CV and skills.',
  },
];

// DATA: How it works cards
const features = [
  {
    icon: '👤',
    title: 'Create Account',
    desc: 'Create your account in minutes to get started with personalized career support.',
  },
  {
    icon: '📄',
    title: 'Upload Resume',
    desc: 'Upload your ATS-friendly CV and paste the job description you’re targeting — we’ll do the rest.',
  },
  {
    icon: '💼',
    title: 'Find Jobs',
    desc: 'Our AI analyzes your CV and provides a match score, skill gap feedback, and best-fit job suggestions.',
  },
  {
    icon: '✅',
    title: 'Apply Job',
    desc: 'Update your CV with our insights and apply to the right jobs — smarter, faster.',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Section: Hero + Title */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-2">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14 mt-4">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Kiri: Judul besar */}
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-3xl md:text-[2.2rem] font-bold mb-6 leading-tight">
              Search Better, Career Louder! <br />
              Your AI-powered CV analysis platform for smarter job matching.
            </h2>
          </div>
          {/* Kanan: Box Who We Are + Problem */}
          <div className="flex-1 flex">
            <div className="bg-gray-100 rounded-xl shadow px-6 py-5 w-full text-[0.96rem] leading-snug">
              <b>Who We Are</b>
              <p className="mt-1">
                At Searcheer, we understand the challenges that students and
                fresh graduates face when entering the competitive job market.
                Born from the collaborative efforts of talented minds from
                Politeknik Negeri Banyuwangi and Universitas Brawijaya, we're on
                a mission to bridge the gap between academic preparation and
                industry expectations.
              </p>
              <b className="block mt-4">The Problem We Solve</b>
              <p className="mt-1">
                Did you know that 63% of job seekers in Indonesia struggle with
                high experience requirements, while 58% face barriers due to
                educational prerequisites? Many talented individuals spend
                countless hours applying to positions that don’t align with
                their qualifications, leading to prolonged job searches and
                missed opportunities.
              </p>
            </div>
          </div>
        </div>
        {/* Bawah dua kolom */}
        <div className="mt-12">
          <b className="block mb-1">Our Solution</b>
          <p className="mb-1">
            Searcheer revolutionizes the job search process through cutting-edge
            Natural Language Processing (NLP) and machine learning technology.
            Our platform analyzes your CV against job descriptions, providing:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>
              <b>Intelligent CV Analysis</b> – Deep evaluation of your skills
              and qualifications using BERT and Sentence Transformers
            </li>
            <li>
              <b>Personalized Feedback</b> – Detailed insights on skill gaps and
              areas for improvement
            </li>
            <li>
              <b>Smart Job Matching</b> – AI-powered recommendations for
              positions that truly fit your profile
            </li>
            <li>
              <b>Success Prediction</b> – Data-driven assessment of your
              application success likelihood
            </li>
          </ul>
          <b className="block mb-1">Our Vision</b>
          <p>
            We envision a world where every student and fresh graduate can
            confidently navigate their career journey, armed with data-driven
            insights and personalized guidance. Through Searcheer, we're making
            career preparation more inclusive, objective, and effective.
          </p>
        </div>
      </div>

      {/* Section Gambar Blur di bawah Our Vision */}
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full max-w-6xl h-[330px] rounded-2xl shadow-md overflow-hidden bg-gray-200 flex items-center justify-center relative">
          <img
            src={bgBlurTeam}
            alt="Searcheer Team Blur"
            className="object-cover w-full h-full absolute inset-0"
            style={{ opacity: 0.85, zIndex: 0 }}
            draggable="false"
          />
        </div>
      </div>

      {/* Section: How it works */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2">How it works</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Follow these simple steps to get started with Searcheer and improve
          your job search experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {features.map((item) => (
            <CardFeature key={item.title} {...item} />
          ))}
        </div>
      </div>

      {/* Section: Video/Card */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div
          className="rounded-2xl overflow-hidden shadow-md relative"
          style={{ background: 'none' }}
        >
          {/* Background image absolute */}
          <img
            src={bgBlurTeam}
            alt="Team Blur"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.85, zIndex: 0 }}
            draggable="false"
          />
          {/* Overlay konten (relative z-10) */}
          <div className="w-full h-[330px] md:h-[330px] flex items-center justify-center relative z-10">
            {/* Play button */}
            <button className="rounded-full bg-white/80 w-16 h-16 flex items-center justify-center shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
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
          <div className="w-full bg-black/80 text-white grid grid-cols-1 md:grid-cols-3 gap-0 text-sm relative z-10">
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
                  <a
                    href="#"
                    className="block text-teal-200 text-xs mt-1 underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section: FAQ */}
      <div className="max-w-4xl mx-auto px-4 my-14">
        <h2 className="text-3xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-xs text-gray-500 mb-6">
          All you need to know about using Searcheer for your career journey
        </p>
        <FaqAccordion faqs={faqs} />
        <div className="mt-6 text-center text-xs text-gray-500">
          Have more questions? Contact our support team for additional
          resources.
        </div>
      </div>
    </div>
  );
}
