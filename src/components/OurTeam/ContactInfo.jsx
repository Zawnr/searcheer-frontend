import React from 'react';

export default function ContactInfo() {
  return (
    <div className="bg-yellow-400 rounded-2xl p-6 sm:p-8 shadow flex flex-col justify-center items-center max-w-md w-full mx-auto">
      <h3 className="font-bold text-white text-xl sm:text-2xl mb-1">
        Contact Info
      </h3>
      <div className="text-white mb-6 text-sm sm:text-base">
        Need additional resources?
      </div>
      <form className="space-y-5 text-left w-full">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="text-white font-semibold mb-1 block text-sm sm:text-base"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Your name"
              className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="text-white font-semibold mb-1 block text-sm sm:text-base"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Your last name"
              className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-white font-semibold mb-1 block text-sm sm:text-base"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your E-mail address"
            className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-white font-semibold mb-1 block text-sm sm:text-base"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message..."
            rows={4}
            className="rounded-md px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md py-3 font-semibold text-sm sm:text-base hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
