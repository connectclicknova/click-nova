import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FreeQuoteModal from '../components/FreeQuoteModal';
import SEO from '../components/SEO';
import FloatingContactButton from '../components/FloatingContactButton';

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Click Nova - Best Digital Marketing Agency in India | #1 Social Media, Google Ads & Website Development Company"
        description="Click Nova is India's leading digital marketing agency offering expert social media marketing, Google Ads, Facebook Ads, Instagram Ads, YouTube Ads, SEO services, website development, ecommerce solutions, mobile app development, and custom software development. Get guaranteed results with the best digital marketing company. Contact us for a free consultation!"
        keywords="digital marketing agency, best digital marketing agency, digital marketing company, top digital marketing agency in India, social media marketing, social media marketing agency, Facebook ads agency, Google ads management, Instagram advertising, YouTube ads, TikTok marketing, LinkedIn ads, Twitter marketing, SEO services, search engine optimization, local SEO, SEO company, PPC advertising, pay per click management, website development, web design company, ecommerce website development, online store development, Shopify development, WordPress development, mobile app development, iOS app development, Android app development, software development company, custom software solutions, AI video creation, video marketing, content marketing, email marketing, influencer marketing, brand strategy, logo design services, graphic design agency, UI UX design, conversion rate optimization, online reputation management, lead generation services, marketing automation, analytics and reporting, Click Nova, clicknova.in, digital agency near me, affordable digital marketing, ROI focused marketing, performance marketing agency, growth marketing, startup marketing agency, small business marketing, enterprise marketing solutions"
        canonical="https://www.clicknova.in/"
      />
      <FreeQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden" style={{paddingTop: '80px'}}>
        {/* Video Background */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls={false}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          >
            <source src="https://ik.imagekit.io/dlekfhyrb/Videos/click-nova-hero-section-video.mp4" type="video/mp4" />
          </video>
          
          {/* Lighter Overlay - Video should be visible through this */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                    Empowering your Digital Growth with Expert Solutions
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
                    Click Nova blends smart marketing with powerful web development to help your brand grow by tailored solutions.
                  </p>
                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
                    >
                      Get Started
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Stats Cards */}
                {/* <div className="hidden lg:flex flex-col gap-4 ml-auto">
                  <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-6 rounded-2xl shadow-xl min-w-[280px]">
                    <div className="text-5xl font-bold mb-2">4,000+</div>
                    <div className="text-lg font-medium">Website Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-6 rounded-2xl shadow-xl min-w-[280px]">
                    <div className="text-5xl font-bold mb-2">18+</div>
                    <div className="text-lg font-medium">Years of Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-6 rounded-2xl shadow-xl min-w-[280px]">
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div className="text-lg font-medium">Skilled Employees</div>
                  </div>
                </div> */}
              </div>

              {/* Mobile Stats - Below content */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:hidden">
                <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-4 sm:p-6 rounded-xl shadow-xl text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">4,000+</div>
                  <div className="text-sm sm:text-base font-medium">Website Projects</div>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-4 sm:p-6 rounded-xl shadow-xl text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">18+</div>
                  <div className="text-sm sm:text-base font-medium">Years of Experience</div>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-4 sm:p-6 rounded-xl shadow-xl text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">50+</div>
                  <div className="text-sm sm:text-base font-medium">Skilled Employees</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - New Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <p className="text-secondary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">OUR SERVICES</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Expert Digital Services<br />to Grow your Brand
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl">
                  From strategy to execution, we offer a full range of digital marketing and web development services tailored to help your brand thrive online.
                </p>
              </div>
              <div>
                <Link
                  to="/services"
                  className="inline-block border-2 border-secondary text-secondary px-5 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                ),
                title: 'Digital Marketing',
                description: 'Comprehensive digital marketing strategies to boost your online presence and drive results.',
                number: '01'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Google Ads',
                description: 'Drive targeted traffic with high-performing Google Ads campaigns that maximize ROI.',
                number: '02'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                ),
                title: 'Facebook Ads',
                description: 'Reach your ideal audience with strategic Facebook advertising campaigns.',
                number: '03'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                title: 'Instagram Ads',
                description: 'Engage audiences with visually stunning Instagram ad campaigns that convert.',
                number: '04'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                ),
                title: 'AI Video Creation',
                description: 'Create professional AI-powered videos that captivate and engage your audience.',
                number: '05'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: 'Website Development',
                description: 'Build responsive, modern websites that look great and convert visitors into customers.',
                number: '06'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                ),
                title: 'Software Development',
                description: 'Custom software solutions tailored to your business needs and objectives.',
                number: '07'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
                title: 'Mobile App Development',
                description: 'Create powerful mobile apps for iOS and Android that users love.',
                number: '08'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                ),
                title: 'Logo Designing',
                description: 'Stand out with unique, memorable logo designs that perfectly represent your brand.',
                number: '09'
              },
            ].map((service, index) => (
              <div key={index} className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                  {service.number}
                </div>

                {/* Icon Background */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/5 transition-colors duration-300">
                  <svg className="w-7 h-7 sm:w-9 sm:h-9 text-secondary group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-secondary text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="mt-8 sm:mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-primary hover:text-secondary transition-colors duration-300 group"
            >
              View All Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">ABOUT CLICK NOVA</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Your Trusted Digital Marketing Partner
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Click Nova emerged from a simple idea: businesses deserve a digital marketing
                  partner that truly understands their unique challenges and aspirations. What started as a small
                  team of three has grown into a full-service digital marketing agency with over 50 professionals.
                </p>
                <p>
                  Over the years, we've helped more than 150+ businesses across various industries transform their
                  digital presence and achieve remarkable growth. Our success is built on a foundation of
                  transparency, innovation, and unwavering commitment to client success.
                </p>
                <p>
                  Today, Click Nova stands as a trusted partner for businesses looking to navigate the complex
                  world of digital marketing with confidence and achieve sustainable, measurable results.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:text-secondary transition-colors duration-300 font-semibold group"
                >
                  Learn More About Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-primary/20 flex items-center justify-center shadow-xl">
                <svg className="w-3/4 h-3/4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <p className="text-secondary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">WHY CHOOSE US</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  What Makes Us<br />Stand Out
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl">
                  We combine creativity, technology, and strategy to deliver exceptional results that drive your business forward.
                </p>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Proven Results',
                description: 'Track record of delivering measurable ROI for clients',
                number: '01',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Expert Team',
                description: 'Certified professionals with years of industry experience',
                number: '02',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: 'Fast Execution',
                description: 'Quick turnaround times without compromising quality',
                number: '03',
                gradient: 'from-orange-500 to-orange-600'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Custom Solutions',
                description: 'Tailored strategies that fit your unique business goals',
                number: '04',
                gradient: 'from-cyan-500 to-cyan-600'
              },
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                  {feature.number}
                </div>

                {/* Icon Background */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-secondary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">OUR PROCESS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              How We Work
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures success at every stage of your digital journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business, goals, and target audience to create a tailored strategy',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                )
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop comprehensive digital marketing plans aligned with your objectives',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                )
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement campaigns with precision, creativity, and data-driven insights',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                )
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor, analyze, and refine for maximum performance',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                )
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                {/* Connector Line (except for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" style={{zIndex: 0}}></div>
                )}
                
                <div className="relative bg-white">
                  {/* Circle with Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10">
                      <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {process.icon}
                      </svg>
                    </div>
                  </div>

                  {/* Small Icon Box Below */}
                  {/* <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {process.icon}
                      </svg>
                    </div>
                  </div> */}

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{process.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-secondary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">TESTIMONIALS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                company: 'TechStart Solutions',
                review: 'Click Nova transformed our digital presence completely. Their Google Ads campaigns increased our leads by 250% in just 3 months. Highly recommend their services!',
                rating: 5,
                image: 'RK'
              },
              {
                name: 'Priya Sharma',
                company: 'Fashion Boutique',
                review: 'The team at Click Nova is exceptional! Their Instagram and Facebook ads strategy helped us reach our target audience effectively. Our sales have doubled since we started working with them.',
                rating: 5,
                image: 'PS'
              },
              {
                name: 'Amit Patel',
                company: 'Real Estate Group',
                review: 'Professional, responsive, and results-driven. Click Nova developed an amazing website for us and their SEO services got us ranking on the first page. Worth every penny!',
                rating: 5,
                image: 'AP'
              },
              {
                name: 'Sneha Reddy',
                company: 'Fitness Studio',
                review: 'Their social media marketing expertise is outstanding. We saw a 300% increase in engagement and our membership grew significantly. Thank you Click Nova team!',
                rating: 5,
                image: 'SR'
              },
              {
                name: 'Vikram Singh',
                company: 'E-commerce Store',
                review: 'Click Nova built our e-commerce website and mobile app. The quality of work and attention to detail is remarkable. Our online sales have skyrocketed!',
                rating: 5,
                image: 'VS'
              },
              {
                name: 'Meera Desai',
                company: 'Healthcare Clinic',
                review: 'Best digital marketing agency we have worked with! Their Facebook ads brought us quality leads and their team is always available to help. Extremely satisfied with the results.',
                rating: 5,
                image: 'MD'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed italic">"{review.review}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {review.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">{review.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary via-blue-700 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
            Let's discuss how we can help you achieve your digital marketing goals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
            >
              Schedule a Free Consultation
            </Link>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default Home;
