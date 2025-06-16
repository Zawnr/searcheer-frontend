import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobRecommendations } from "../../utils/api";
import { FaHippo } from "react-icons/fa";
import { FaBriefcase, FaMoneyBill, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

function CapybaraProgressLoader() {
  const [progress, setProgress] = useState(0);
  const messages = [
    "Capybara is sniffing the best jobs for you...",
    "Still searching, please pet the capybara for luck!",
    "Almost there... Capybara is reading your CV.",
    "Capybara found a cool job... checking more!",
    "One moment, the jobs are being gathered by capybara!",
    "Capybara is having a coffee break, but still working for you!",
    "Capybara: patience = best result!"
  ];
  
  // --- Progress Bar Animation ---
  useEffect(() => {
    const totalDuration = 89 * 1000; 
    const tick = 100; 
    const increment = 100 / (totalDuration / tick);
    let p = 0;
    const interval = setInterval(() => {
      p += increment;
      setProgress(Math.min(p, 100));
      if (p >= 100) clearInterval(interval);
    }, tick);
    return () => clearInterval(interval);
  }, []);

  // --- Message berdasarkan progress ---
  const numStages = messages.length - 1;
  let stage = Math.min(numStages - 1, Math.floor((progress / 100) * numStages));
  if (progress >= 100) stage = numStages; // Terakhir
  

  const barWidth = 320;
  const capyPos = Math.min(progress, 100) / 100 * (barWidth - 54);

  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center py-12">
      <div className="mb-10 relative w-[320px] h-20 flex items-end justify-start">
        <div className="absolute left-0 bottom-8 w-full h-7 bg-yellow-100 rounded-full overflow-hidden border-2 border-yellow-300">
          <div
            className="h-full bg-yellow-300 transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div
          className="absolute -top-2 left-0 transition-all duration-200"
          style={{
            transform: `translateX(${capyPos}px)`
          }}
        >
          <FaHippo className="text-[54px] text-yellow-700 drop-shadow-[0_5px_6px_rgba(140,90,0,0.08)] animate-capywalk" />
        </div>
        <style>
          {`
            @keyframes capywalk {
              0%, 100% { transform: scale(1) rotate(-5deg);}
              35% { transform: scale(1.08, 0.96) rotate(6deg);}
              60% { transform: scale(0.98, 1.06) rotate(-3deg);}
            }
            .animate-capywalk { animation: capywalk 1.1s infinite; }
          `}
        </style>
      </div>
      <div className="mt-3 text-center text-yellow-800 font-semibold text-lg min-h-[28px] animate-pulse select-none">
        {messages[stage]}
      </div>
    </div>
  );
}


export default function Recommendations({ analysisId }) {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!analysisId) return;
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const data = await getJobRecommendations(analysisId, token);
        setJobs(data);
      } catch (err) {
        setError(err.message || "Gagal mengambil rekomendasi.");
      }
      setLoading(false);
    }
    fetchData();
  }, [analysisId]);

  if (loading)
    return (
      <div className="w-full max-w-5xl mx-auto py-10 px-2">
        <h1 className="text-2xl font-bold mb-6 text-center">Job Recommendations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <CapybaraProgressLoader />
        </div>
      </div>
    );

  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  if (!jobs || jobs.length === 0)
    return (
      <div className="text-center py-10 text-gray-500">
        There are no job recommendations for this analysis result.
      </div>
    );

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-center">Job Recommendations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={String(job.job_id)}
            className="rounded-xl shadow-lg bg-white p-6 flex flex-col h-full border hover:shadow-2xl transition"
          >
            <div className="flex-1">
              <div className="font-bold text-lg mb-1">{job.title || "-"}</div>
              <div className="text-sm text-gray-600 mb-3">
                {job.industry || "-"}
              </div>
              <div className="flex flex-col gap-2 text-[15px] text-gray-700">
                <div className="flex items-center gap-2">
                  <FaBuilding size={18} className="text-yellow-500" />
                  {job.industry || "-"}
                </div>
                <div className="flex items-center gap-2">
                  <FaBriefcase size={18} className="text-yellow-500" />
                  {job.employment_type || "-"}
                </div>
                <div className="flex items-center gap-2">
                  <FaMoneyBill size={18} className="text-yellow-500" />
                  {job.salary_range || "-"}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt size={18} className="text-yellow-500" />
                  {job.location || "-"}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button
                className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-white rounded-md font-semibold py-2 shadow"
                onClick={() => navigate(`/jobs/${job.job_id}`)}
              >
                Job Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
