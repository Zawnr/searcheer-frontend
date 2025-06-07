import React from 'react';

export default function AnalysisCard() {
  const overallMatchScore = 72;
  const matchedSkills = [
    'Python Programming',
    'Data Analysis',
    'Machine Learning Basics',
    'SQL Database',
    'Team Collaboration',
    'Problem Solving',
  ];
  const skillsToImprove = [
    'Deep Learning Frameworks (TensorFlow/PyTorch)',
    'Natural Language Processing',
    'Cloud Computing (AWS/Azure)',
    'Data Visualization (Tableau/Power BI)',
  ];

  return (
    <div className="max-w-3xl w-full mx-auto bg-white rounded-xl shadow-lg p-8 border-l-8 border-yellow-400 relative z-10 mt-6 mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Here's Your Career Match Report
      </h1>
      <h2 className="text-lg font-bold mb-3">Analysis Result</h2>
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-base text-gray-900">
          Overall Match Score
        </span>
        <span className="font-semibold text-base text-blue-600">
          {overallMatchScore}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${overallMatchScore}%` }}
        />
      </div>
      <p className="text-gray-700 text-sm mb-6">
        Your CV has a good match with this job description. With some
        improvements, you can increase your chances.
      </p>

      <h3 className="font-semibold text-gray-900 mb-4">Skill Analysis</h3>
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
          <ul className="list-disc list-inside text-green-700 text-sm">
            {matchedSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
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
          <ul className="list-disc list-inside text-yellow-700 text-sm">
            {skillsToImprove.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="text-blue-600 hover:underline font-semibold">
          View all recommendations
        </button>
      </div>
    </div>
  );
}
