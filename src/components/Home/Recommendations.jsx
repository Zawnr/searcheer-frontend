import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobRecommendations } from "../../utils/api";
import { FaHippo, FaBriefcase, FaMoneyBill, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

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

  const numStages = messages.length - 1;
  let stage = Math.min(numStages - 1, Math.floor((progress / 100) * numStages));
  if (progress >= 100) stage = numStages; 

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

        if (Array.isArray(data)) {
          setJobs(data);
        } else if (Array.isArray(data?.data)) {
          setJobs(data.data);
        } else {
  
                    setJobs([]);
          if (process.env.NODE_ENV !== "production") {
            console.warn("Unexpected jobs API response:", data);
          }
        }
      } catch (err) {
        setError("Gagal memuat rekomendasi. Coba refresh atau cek koneksi kamu.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [analysisId]);

  if (loading) {
    return <CapybaraProgressLoader />;
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="text-3xl mb-4">😢</div>
        <div className="text-red-600 font-semibold mb-3">{error}</div>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-yellow-900 px-5 py-2 rounded-xl mt-2 transition"
          onClick={() => window.location.reload()}
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="text-3xl mb-4">🤷‍♂️</div>
        <div className="text-yellow-700 font-semibold mb-2">Belum ada rekomendasi yang cocok ditemukan.</div>
        <div className="text-yellow-700">Coba perbarui CV kamu atau lakukan analisis ulang!</div>
      </div>
    );
  }

  // Card Rekomendasi Pekerjaan
  return (
    <div className="w-full max-w-3xl mx-auto grid grid-cols-1 gap-6 py-8 px-2">
      {jobs.map((job, i) => (
        <div
          key={job.id || i}
          className="bg-white/80 border border-yellow-300 rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-yellow-700 text-2xl" />
            <span className="font-semibold text-lg text-yellow-800">{job.title || "Job Title"}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-yellow-800 mt-1">
            <span className="flex items-center gap-1"><FaBuilding /> {job.company || "-"}</span>
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location || "-"}</span>
            {job.salary && (
              <span className="flex items-center gap-1"><FaMoneyBill /> {job.salary}</span>
            )}
          </div>
          <div className="mt-2 text-yellow-900 text-[15px]">
            {job.summary || job.description || "Deskripsi tidak tersedia."}
          </div>
          <div className="flex flex-row gap-3 mt-4">
            {job.url && (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 px-6 rounded-lg transition"
              >
                Lihat Detail
              </a>
            )}
            <button
              onClick={() => navigate(`/jobs/${job.id || i}`)}
              className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 py-2 px-6 rounded-lg border border-yellow-400"
            >
              Simpan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

