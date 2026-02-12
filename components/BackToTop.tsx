
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-6 z-[95] p-3 rounded-2xl bg-[#0a0c10]/80 backdrop-blur-xl border border-white/10 text-white shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 active:scale-95 group ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTop;
