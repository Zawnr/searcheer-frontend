import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AnalysisCard from './AnalysisCard';
import StatsSection from './StatsSection';
import HowItWorks from './HowItWorks';
import RecentJobs from './RecentJobs';
import BrowseCategory from './BrowseCategory';
import GoodLifeCV from './GoodLifeCV';
import Testimonials from './Testimonials';
import bgBlurGelap from '../../assets/images/Bg/bg-blur-gelap.png';
import { getAnalysisResult } from '../../utils/api';

export default function AnalysisResult() {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Unauthorized. Please login.');
      setLoading(false);
      return;
    }
    if (!id) {
      setError('No result ID provided.');
      setLoading(false);
      return;
    }
    getAnalysisResult(id, token)
      .then((res) => {
        if (isMounted) {
          setResult(res?.data || res); // pastikan data masuk
        }
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch analysis result');
      })
      .finally(() => setLoading(false));
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-lg text-gray-600">Loading analysis result...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  // Tampilkan jika data sudah ada
  return (
    <div className="min-h-screen w-full bg-[#f5f7f6]">
      <section
        className="w-full flex flex-col items-center py-16"
        style={{
          backgroundImage: `url(${bgBlurGelap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <AnalysisCard result={result} />
        <StatsSection />
      </section>
      <section className="bg-[#000957] py-12 px-2">
        <HowItWorks />
      </section>
      <section className="bg-[#f9f9f9] py-12">
        <RecentJobs />
      </section>
      <section className="bg-[#FFF8EE] py-12">
        <BrowseCategory />
      </section>
      <section className="bg-[#fcfcfc] py-12">
        <GoodLifeCV />
      </section>
      <section className="bg-[#f5f7f6] py-12">
        <Testimonials />
      </section>
    </div>
  );
}
