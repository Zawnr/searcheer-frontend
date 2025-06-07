import React from 'react';
import AnalysisCard from './AnalysisCard';
import StatsSection from './StatsSection';
import HowItWorks from './HowItWorks';
import RecentJobs from './RecentJobs';
import BrowseCategory from './BrowseCategory';
import GoodLifeCV from './GoodLifeCV';
import Testimonials from './Testimonials';
import bgBlurGelap from '../../assets/images/Bg/bg-blur-gelap.png';

export default function AnalysisResult() {
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
        <AnalysisCard />
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
