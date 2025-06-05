import React, { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      {faqs.map((item, idx) => (
        <div key={idx} className="mb-2">
          <button
            className={`flex w-full items-center justify-between px-6 py-4 rounded-lg transition bg-white hover:bg-gray-50 border border-gray-200 focus:outline-none ${
              openFaq === idx ? "bg-[#d4f2ec] border-teal-200" : ""
            }`}
            onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            aria-expanded={openFaq === idx}
          >
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg text-teal-700" style={{ minWidth: "32px" }}>
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <span className="font-semibold text-base text-left">{item.question}</span>
            </div>
            <span className="text-2xl text-teal-700">{openFaq === idx ? "–" : "+"}</span>
          </button>
          {openFaq === idx && (
            <div className="bg-[#d4f2ec] px-12 py-4 border-t border-teal-100 text-gray-700 text-sm animate-fade-in">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
