import React from 'react';

export default function BookmarkPlusIcon({
  filled = false,
  size = 28,
  ...props
}) {
  const color = filled ? '#F4C762' : '#7B8B9A';
  const plusStroke = 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Bookmark Shape */}
      <path
        d="M10 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v36l-14-10-14 10V6Z"
        fill="none"
        stroke={color}
      />
      {/* Plus Icon (moved up) */}
      <line
        x1="24"
        y1="13"
        x2="24"
        y2="27"
        stroke={color}
        strokeWidth={plusStroke}
      />
      <line
        x1="17"
        y1="20"
        x2="31"
        y2="20"
        stroke={color}
        strokeWidth={plusStroke}
      />
    </svg>
  );
}
