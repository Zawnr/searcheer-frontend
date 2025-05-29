import React from 'react';

export default function LoginNotification({ message, type }) {
  if (!message) return null;

  const baseStyle = 'p-4 mb-4 rounded text-center text-sm font-semibold';
  const typeStyles = {
    success: 'bg-green-100 text-green-800 border border-green-300',
    error: 'bg-red-100 text-red-800 border border-red-300',
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
  };

  return (
    <div
      className={`${baseStyle} ${typeStyles[type] || typeStyles.info}`}
      role="alert"
    >
      {message}
    </div>
  );
}
