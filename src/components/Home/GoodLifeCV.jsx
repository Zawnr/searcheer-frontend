import React from 'react';

const stats = [
  {
    number: '12k+',
    title: 'Clients worldwide',
    description:
      'Students and professionals from around the globe trust our AI-powered CV analysis to enhance their career prospects.',
  },
  {
    number: '20k+',
    title: 'Active resume',
    description:
      'CVs analyzed and improved through our intelligent matching system, helping job seekers stand out in competitive markets.',
  },
  {
    number: '18k+',
    title: 'Companies',
    description:
      'Partner companies and job listings available on our platform, offering diverse opportunities across multiple industries.',
  },
];

export default function GoodLifePage() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:items-center md:justify-start gap-12">
        {/* Kiri: Foto */}
        <div className="flex-1 flex justify-start items-center min-w-[320px] max-w-[500px]">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=80"
            alt="Good Life Begins With A Good CV"
            className="rounded-3xl object-cover w-[440px] h-[340px] max-w-full"
            style={{ minWidth: 300, minHeight: 220 }}
          />
        </div>
        {/* Kanan: Konten */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
            Good Life Begins <br className="hidden md:block" />
            With A Good CV
          </h2>
          <p className="mb-10 text-[#3D3D3D] text-xl md:text-2xl leading-relaxed max-w-[540px]">
            Your dream job starts with knowing your worth — and showing it
            right. Let Searcheer help you analyze, improve, and align your CV
            with what companies are really looking for.
          </p>
          <div className="flex flex-row items-center gap-7">
            <button className="bg-[#F4C762] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#eab82a] transition">
              Lets Analyze
            </button>
            <a
              href="#"
              className="text-[#F4C762] underline hover:text-[#eab82a] font-semibold text-lg"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-14">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-3 md:space-y-4 flex flex-col">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#F4C762] mb-0">
              {stat.number}
            </h3>
            <h4 className="text-xl md:text-2xl font-bold text-black mb-0">
              {stat.title}
            </h4>
            <p className="text-gray-700 text-base md:text-lg mt-0">
              {stat.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
