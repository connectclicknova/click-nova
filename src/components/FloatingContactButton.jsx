import React from 'react';
import { Link } from 'react-router-dom';

const FloatingContactButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 bg-secondary text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center gap-2 font-semibold text-sm sm:text-base group"
      aria-label="Get in Touch"
    >
      <svg 
        className="w-5 h-5 sm:w-6 sm:h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        />
      </svg>
      <span className="hidden sm:inline">Get in Touch</span>
      <span className="sm:hidden">Contact</span>
    </Link>
  );
};

export default FloatingContactButton;
