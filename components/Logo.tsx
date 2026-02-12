
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 100 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* The "Q IT" Rounded Container */}
        <rect x="5" y="10" width="90" height="40" rx="20" fill="#60a5fa" className="opacity-90" />
        <circle cx="25" cy="30" r="18" fill="#3b82f6" />
        
        {/* Q Power Icon */}
        <path d="M25 18V28" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 22C16.5 24 16 27 16.5 30C17.5 35 22 38 27 37.5C32 37 35.5 32 35 27C34.5 24.5 33 22.5 31 21" stroke="white" strokeWidth="3" strokeLinecap="round" />
        
        {/* IT Text */}
        <text x="52" y="38" fill="white" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif">IT</text>
        
        {/* Connection ripples */}
        <circle cx="75" cy="30" r="12" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="75" cy="30" r="8" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="75" cy="30" r="4" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
      </svg>
    </div>
  );
};

export default Logo;
