import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HowItWorks from '../components/Home/HowItWorks';
import RecentJobs from '../components/Home/RecentJobs';
import BrowseCategory from '../components/Home/BrowseCategory';
import GoodLifeCV from '../components/Home/GoodLifeCV';
import Testimonials from '../components/Home/Testimonials';

export default function HomePage() {
  return (
    <div className="w-full max-w-full mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <HowItWorks />
      <RecentJobs />
      <BrowseCategory />
      <GoodLifeCV />
      <Testimonials />
    </div>
  );
}
