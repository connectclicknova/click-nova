import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import LogoVideo from '../assets/logo-animate.mp4'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services', hasDropdown: true, dropdownType: 'services' },
    { path: '/portfolio', label: 'Portfolio', hasDropdown: true, dropdownType: 'portfolio' },
    { path: '/about', label: 'About' },
    { path: '/training', label: 'Training' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  const portfolioItems = [
    { label: 'Websites', path: '/portfolio/websites' },
    { label: 'Logo', path: '/portfolio/logo' },
    { label: 'Creative Designs', path: '/portfolio/creative-designs' },
  ];

  const megaMenuData = {
    websiteServices: [
      { label: 'Custom Web Development', path: '/services/custom-web-development' },
      { label: 'E-Commerce Development', path: '/services/ecommerce-development' },
      { label: 'CMS Development', path: '/services/cms-development' },
      { label: 'Responsive Web Design', path: '/services/responsive-web-design' },
      { label: 'Landing Page Design', path: '/services/landing-page-design' },
      { label: 'Website Redesign', path: '/services/website-redesign' },
      { label: 'Web Maintenance', path: '/services/web-maintenance' },
    ],
    digitalMarketing: [
      { label: 'SEO Services', path: '/services/seo-services' },
      { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
      { label: 'PPC Advertising', path: '/services/ppc-advertising' },
      { label: 'Content Marketing', path: '/services/content-marketing' },
      { label: 'Email Marketing', path: '/services/email-marketing' },
      { label: 'Influencer Marketing', path: '/services/influencer-marketing' },
      { label: 'Online Reputation Management', path: '/services/online-reputation-management' },
      { label: 'Marketing Analytics', path: '/services/marketing-analytics' },
    ],
    creativeBranding: [
      { label: 'Logo Design', path: '/services/logo-design' },
      { label: 'Brand Identity', path: '/services/brand-identity' },
      { label: 'Graphic Design', path: '/services/graphic-design' },
      { label: 'UI/UX Design', path: '/services/ui-ux-design' },
      { label: 'Video Production', path: '/services/video-production' },
      { label: 'Animation Services', path: '/services/animation-services' },
      { label: 'Print Design', path: '/services/print-design' },
    ],
    businessSolutions: [
      { label: 'Business Consulting', path: '/services/business-consulting' },
      { label: 'IT Consulting', path: '/services/it-consulting' },
      { label: 'CRM Solutions', path: '/services/crm-solutions' },
      { label: 'ERP Solutions', path: '/services/erp-solutions' },
      { label: 'Cloud Services', path: '/services/cloud-services' },
      { label: 'Cybersecurity', path: '/services/cybersecurity' },
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
    ],
  };

  const videoRef = useRef(null);

  const handleEnded = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 2500); // 2500ms delay before repeating
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{height: '80px'}}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <video
              ref={videoRef}
              className="w-[230px]"
              src={LogoVideo}
              autoPlay
              muted
              playsInline
              onEnded={handleEnded}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-gray-700 hover:text-secondary transition-colors duration-300 font-medium ${
                    isActive(link.path) ? 'text-secondary border-b-2 border-secondary' : ''
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasDropdown && link.dropdownType === 'services' && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                    style={{ top: '100%' }}
                  >
                    <div className="w-screen max-w-6xl bg-white shadow-2xl rounded-lg border border-gray-200">
                      <div className="grid grid-cols-4 gap-8 p-8">
                        {/* Website Services Column */}
                        <div>
                          <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider border-b-2 border-[#fc8d00] pb-2">Website Services</h3>
                          <ul className="space-y-2">
                            {megaMenuData.websiteServices.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.path}
                                  className="text-gray-600 hover:text-[#fc8d00] hover:pl-2 transition-all duration-200 text-sm block py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Digital Marketing Column */}
                        <div>
                          <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider border-b-2 border-[#fc8d00] pb-2">Digital Marketing</h3>
                          <ul className="space-y-2">
                            {megaMenuData.digitalMarketing.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.path}
                                  className="text-gray-600 hover:text-[#fc8d00] hover:pl-2 transition-all duration-200 text-sm block py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Creative & Branding Column */}
                        <div>
                          <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider border-b-2 border-[#fc8d00] pb-2">Creative & Branding</h3>
                          <ul className="space-y-2">
                            {megaMenuData.creativeBranding.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.path}
                                  className="text-gray-600 hover:text-[#fc8d00] hover:pl-2 transition-all duration-200 text-sm block py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Business Solutions Column */}
                        <div>
                          <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider border-b-2 border-[#fc8d00] pb-2">Business Solutions</h3>
                          <ul className="space-y-2">
                            {megaMenuData.businessSolutions.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.path}
                                  className="text-gray-600 hover:text-[#fc8d00] hover:pl-2 transition-all duration-200 text-sm block py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Portfolio Dropdown */}
                {link.hasDropdown && link.dropdownType === 'portfolio' && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                    style={{ top: '100%' }}
                  >
                    <div className="bg-white shadow-2xl rounded-lg border border-gray-200 min-w-[200px]">
                      <ul className="p-4 space-y-2">
                        {portfolioItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.path}
                              className="text-gray-600 hover:text-[#fc8d00] hover:pl-2 transition-all duration-200 text-sm block py-2"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal - Slide from Right */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Slide-in Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img src={Logo} alt="Click Nova" className="w-[180px]" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-primary focus:outline-none cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-3 space-y-1 overflow-y-auto h-[calc(100%-80px)]">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown && link.dropdownType === 'services' ? (
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Services Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-3 pr-1 py-1 space-y-2">
                        {/* Website Services */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider px-3 py-1 border-b border-secondary/30">
                            Website Services
                          </h4>
                          <div className="space-y-0.5 mt-1">
                            {megaMenuData.websiteServices.map((item, index) => (
                              <Link
                                key={index}
                                to={item.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block px-3 py-1.5 text-xs text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Digital Marketing */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider px-3 py-1 border-b border-secondary/30">
                            Digital Marketing
                          </h4>
                          <div className="space-y-0.5 mt-1">
                            {megaMenuData.digitalMarketing.map((item, index) => (
                              <Link
                                key={index}
                                to={item.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block px-3 py-1.5 text-xs text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Creative & Branding */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider px-3 py-1 border-b border-secondary/30">
                            Creative & Branding
                          </h4>
                          <div className="space-y-0.5 mt-1">
                            {megaMenuData.creativeBranding.map((item, index) => (
                              <Link
                                key={index}
                                to={item.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block px-3 py-1.5 text-xs text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Business Solutions */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider px-3 py-1 border-b border-secondary/30">
                            Business Solutions
                          </h4>
                          <div className="space-y-0.5 mt-1">
                            {megaMenuData.businessSolutions.map((item, index) => (
                              <Link
                                key={index}
                                to={item.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block px-3 py-1.5 text-xs text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : link.hasDropdown && link.dropdownType === 'portfolio' ? (
                  <div>
                    <button
                      onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isMobilePortfolioOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Portfolio Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobilePortfolioOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-3 pr-1 py-1">
                        {portfolioItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsMobilePortfolioOpen(false);
                            }}
                            className="block px-3 py-1.5 text-xs text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-secondary/10 hover:text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Get Started Button */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-primary text-white text-center mt-3 shadow-md hover:shadow-lg hover:bg-secondary transition-all duration-300 cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
