import React from 'react';

export default function Logo() {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      className="mr-3"
    >
      {/* Left Curly Brace */}
      <path 
        d="M 30 20 C 30 20, 20 20, 20 30 L 20 40 C 20 45, 15 50, 10 50 C 15 50, 20 55, 20 60 L 20 70 C 20 80, 30 80, 30 80"
        stroke="#FF3366"
        strokeWidth="6"
        fill="none"
      />
      
      {/* Right Curly Brace */}
      <path 
        d="M 70 20 C 70 20, 80 20, 80 30 L 80 40 C 80 45, 85 50, 90 50 C 85 50, 80 55, 80 60 L 80 70 C 80 80, 70 80, 70 80"
        stroke="#6B46C1"
        strokeWidth="6"
        fill="none"
      />

      {/* Stack Shape */}
      <rect x="35" y="30" width="30" height="8" rx="2" fill="#FF3366" />
      <rect x="35" y="46" width="30" height="8" rx="2" fill="#FF3366" opacity="0.8" />
      <rect x="35" y="62" width="30" height="8" rx="2" fill="#6B46C1" />
    </svg>
  );
} 