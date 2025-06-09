import React, { useState } from 'react';
import * as EmailJS from '@emailjs/browser';

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: formData.firstName + ' ' + formData.lastName,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_email: 'reiky.mirzha321@gmail.com',
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your EmailJS credentials
    EmailJS.send(
      'service_e84bxyo',
      'template_zesuqi9',
      templateParams,
      'erEMVhcjL38nMrdd7'
    ).then(
      (response) => {
        console.log('EmailJS success:', response.status, response.text);
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      }
    );
  };

  return (
    <div className="bg-yellow-400 rounded-2xl p-6 sm:p-8 shadow flex flex-col justify-center items-center max-w-md w-full mx-auto">
      <h3 className="font-bold text-white text-xl sm:text-2xl mb-1">
        Contact Info
      </h3>
      <div className="text-white mb-6 text-sm sm:text-base">
        Need additional resources?
      </div>
      <form className="space-y-5 text-left w-full" onSubmit={handleSubmit}>
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
              value={formData.firstName}
              onChange={handleChange}
              required
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
              value={formData.lastName}
              onChange={handleChange}
              required
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
            value={formData.email}
            onChange={handleChange}
            required
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
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-600 text-white rounded-md py-3 font-semibold text-sm sm:text-base hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="text-green-600 mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2">
            Failed to send message. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
