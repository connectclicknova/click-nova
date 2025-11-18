import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" style={{paddingTop: '100px'}}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg className="w-32 h-32 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-12 border-t border-gray-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="text-primary hover:text-primary-dark transition-colors duration-300">
              Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/about" className="text-primary hover:text-primary-dark transition-colors duration-300">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/training" className="text-primary hover:text-primary-dark transition-colors duration-300">
              Training
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/contact" className="text-primary hover:text-primary-dark transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
