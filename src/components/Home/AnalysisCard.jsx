import React from 'react';
import Recommendations from './Recommendations';

export default function AnalysisCard({ result }) {
  const dummy = {
    compatibility_analysis: {
      overall_score: 25,
      tips: [
        'Analysis performed with limited capabilities. Consider uploading a more detailed CV.',
      ],
      matched_skills: [],
      missing_skills: [],
    },
    cv_analysis: {
      ats_score: 74.5,
      language_detected: 'en',
    },
    job_analysis: {
      title: 'Software Engineer',
    },
  };
  const data = result?.result_data || dummy;
  const { compatibility_analysis, cv_analysis, job_analysis } = data;

  const overallMatchScore = compatibility_analysis?.overall_score ?? 0;
  const matchedSkills = compatibility_analysis?.matched_skills ?? [];
  const missingSkills = compatibility_analysis?.missing_skills ?? [];
  const tips = compatibility_analysis?.tips ?? [];

  const isFallback =
    compatibility_analysis?.analysis_metadata?.fallback_mode === true ||
    (tips &&
      tips.some(
        (tip) =>
          typeof tip === 'string' &&
          tip.toLowerCase().includes('limited capabilities')
      ));

  let scoreColor = 'bg-blue-600';
  if (overallMatchScore < 40) scoreColor = 'bg-red-500';
  else if (overallMatchScore < 70) scoreColor = 'bg-yellow-500';
  else scoreColor = 'bg-green-600';

  const [showRecommendations, setShowRecommendations] = React.useState(false);

  return (
    <div className="max-w-3xl w-full mx-auto bg-white rounded-xl shadow-lg p-8 border-l-8 border-yellow-400 relative z-10 mt-6 mb-10">
      {isFallback && (
        <div className="mb-4 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-300">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01"
              />
            </svg>
            Analysis performed with limited data. Please upload a more detailed
            CV for better results.
          </span>
        </div>
      )}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Here's Your Career Match Report
      </h1>
      {/* Score & Analysis Result */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Analysis Result</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-base text-gray-900">
            Overall Match Score
          </span>
          <span className="font-semibold text-base text-blue-600">
            {overallMatchScore}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className={`${scoreColor} h-2 rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${overallMatchScore}%` }}
          />
        </div>
      </div>
      {/* Skill Analysis */}
      <h2 className="text-lg font-bold mb-3">Skill Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
        <div className="bg-green-50 border border-green-200 rounded p-4 min-h-[140px]">
          <h4 className="font-semibold mb-2 text-green-700 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Matched Skills
          </h4>
          {matchedSkills.length > 0 ? (
            <ul className="list-disc list-inside text-green-700 text-sm">
              {matchedSkills.map((skill, i) => (
                <li key={i}>{Array.isArray(skill) ? skill[0] : skill}</li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-400">No matched skills detected.</span>
          )}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 min-h-[140px]">
          <h4 className="font-semibold mb-2 text-yellow-700 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01"
              />
            </svg>
            Skills to Improve
          </h4>
          {missingSkills.length > 0 ? (
            <ul className="list-disc list-inside text-yellow-700 text-sm">
              {missingSkills.map((skill, i) => (
                <li key={i}>{Array.isArray(skill) ? skill[0] : skill}</li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-400">No skill gaps detected.</span>
          )}
        </div>
      </div>
      {/* Recommendation Level Section */}
      <h2 className="text-lg font-bold mt-6 mb-2 flex items-center gap-3">
        Recommendation Level
        {compatibility_analysis?.recommendation_level && (
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
              ${compatibility_analysis.recommendation_level.toLowerCase().includes('strong') ? 'bg-green-100 text-green-700 border border-green-300' :
                compatibility_analysis.recommendation_level.toLowerCase().includes('moderate') ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                'bg-red-100 text-red-700 border border-red-300'}
            `}
          >
            {compatibility_analysis.recommendation_level.replace('_', ' ')}
          </span>
        )}
      </h2>
      {/* Tips to improve */}
      {tips.length > 0 && (
        <div className="mb-2">
          <span className="font-semibold text-gray-700 block mb-1">Tips to improve:</span>
          <p className="text-gray-700 text-sm">
            {tips.map((tip, i) => (
              <span key={i} className="block mb-1">
                {tip}
              </span>
            ))}
          </p>
        </div>
      )}
      {tips.length === 0 && (
        <p className="text-gray-700 text-sm">
          Your CV has a good match with this job description. With some improvements, you can increase your chances.
        </p>
      )}
      {showRecommendations && (
        <div className="mt-10">
          <Recommendations analysisId={result?.id} />
        </div>
      )}
      <div className="mt-4 text-center">
        <button
          onClick={() => setShowRecommendations((prev) => !prev)}
          className="text-blue-600 hover:underline font-semibold px-4 py-2 inline-block transition-colors duration-150 border-0 bg-transparent shadow-none outline-none focus:outline-none"
        >
          {showRecommendations ? 'Hide Recommendation' : 'View Recommendation Job'}
        </button>
      </div>
    </div>
  );
}
