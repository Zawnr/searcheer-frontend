import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1935]">
      <Navbar />
      {/* Konten Home */}
      <div className="max-w-4xl mx-auto mt-32 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Searcheer</h1>
        <p className="text-xl text-white/80 mb-8">
          Temukan pekerjaan impianmu dan mulai langkah baru menuju masa depan yang lebih cerah bersama Searcheers.
        </p>
        {/* Bisa tambahin tombol Explore atau CTA lain di sini */}
      </div>
    </div>
  );
}
