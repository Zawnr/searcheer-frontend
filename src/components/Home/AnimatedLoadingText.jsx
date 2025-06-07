import React, { useState, useEffect } from 'react';

export default function AnimatedLoadingText({ text }) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {text}
      {'.'.repeat(dotCount)}
    </span>
  );
}
