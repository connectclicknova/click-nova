import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FreeQuoteModal from '../components/FreeQuoteModal';
import SEO from '../components/SEO';

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Click Nova - Best Digital Marketing Agency | Social Media, Google Ads & Website Development"
        description="Click Nova is the best digital marketing agency offering expert social media marketing, Facebook ads, Google ads, Instagram ads, YouTube ads, website development, ecommerce website solutions, mobile app development, and software development services to grow your business online."
        keywords="digital marketing agency, best digital marketing agency, social media marketing, Facebook ads, Google ads, Instagram ads, YouTube ads, software development, ecommerce website, website development, mobile app development, SEO services, PPC advertising, digital marketing services, online marketing agency"
        canonical="https://www.clicknova.in/"
      />
      <FreeQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden" style={{paddingTop: '100px', paddingBottom: '80px'}} aria-label="Hero section">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" aria-hidden="true"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}} aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Best Digital Marketing Agency
                <span className="text-primary block">Grow Your Business Online</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Click Nova is the best digital marketing agency offering expert social media marketing, Google ads, Facebook ads, Instagram ads, YouTube ads, website development, ecommerce website solutions, mobile app development, and software development services to transform your business with data-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-center font-medium"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-center font-medium"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 flex items-center justify-center shadow-2xl">
                <svg className="w-3/4 h-3/4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-700 via-sky-700 to-cyan-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Clients Served' },
              { number: '100%', label: 'Success Rate' },
              { number: '5.5M+', label: 'Leads Generated' },
              { number: '8+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLICK NOVA DNA Section - Simple & Professional */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our DNA</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              What <span className="text-primary">CLICK NOVA</span> Stands For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every letter represents our core values and commitment to your success
            </p>
          </div>

          {/* Grid Layout - 3 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { letter: 'C', word: 'CREATIVITY', description: 'Innovative solutions that set you apart', icon: '🎨' },
              { letter: 'L', word: 'LOYALTY', description: 'Building lasting partnerships', icon: '🤝' },
              { letter: 'I', word: 'INNOVATION', description: 'Cutting-edge digital strategies', icon: '💡' },
              { letter: 'C', word: 'COLLABORATION', description: 'Working together as one team', icon: '👥' },
              { letter: 'K', word: 'KNOWLEDGE', description: 'Expert insights and guidance', icon: '📚' },
              { letter: 'N', word: 'NURTURING', description: 'Growing your business with care', icon: '🌱' },
              { letter: 'O', word: 'OPPORTUNITY', description: 'Creating new possibilities', icon: '🚀' },
              { letter: 'V', word: 'VISIONARY', description: 'Forward-thinking approach', icon: '🎯' },
              { letter: 'A', word: 'AGILITY', description: 'Quick adaptation to changes', icon: '⚡' },
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary"
              >
                {/* Letter Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                      {item.letter}
                    </span>
                  </div>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.word}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 w-12 bg-gray-200 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              These values define how we serve our clients every day
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                ),
                title: 'Digital Marketing',
                description: 'Comprehensive digital marketing strategies to boost your online presence and drive results.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Google Ads',
                description: 'Drive targeted traffic with high-performing Google Ads campaigns that maximize ROI.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                ),
                title: 'Facebook Ads',
                description: 'Reach your ideal audience with strategic Facebook advertising campaigns.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                title: 'Instagram Ads',
                description: 'Engage audiences with visually stunning Instagram ad campaigns that convert.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                ),
                title: 'AI Video Creation',
                description: 'Create professional AI-powered videos that captivate and engage your audience.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: 'Website Development',
                description: 'Build responsive, modern websites that look great and convert visitors into customers.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                ),
                title: 'Software Development',
                description: 'Custom software solutions tailored to your business needs and objectives.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
                title: 'Mobile App Development',
                description: 'Create powerful mobile apps for iOS and Android that users love.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                ),
                title: 'Logo Designing',
                description: 'Stand out with unique, memorable logo designs that perfectly represent your brand.',
              },
            ].map((service, index) => {
              const colors = [
                { bg: 'bg-blue-100', text: 'text-blue-700', border: 'hover:border-blue-500' },
                { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-500' },
                { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'hover:border-cyan-500' },
                { bg: 'bg-sky-100', text: 'text-sky-600', border: 'hover:border-sky-500' },
                { bg: 'bg-amber-100', text: 'text-amber-600', border: 'hover:border-amber-500' },
                { bg: 'bg-rose-100', text: 'text-rose-600', border: 'hover:border-rose-500' },
                { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-500' },
                { bg: 'bg-violet-100', text: 'text-violet-600', border: 'hover:border-violet-500' },
                { bg: 'bg-orange-100', text: 'text-orange-600', border: 'hover:border-orange-500' },
              ];
              const color = colors[index % colors.length];
              return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 ${color.border} flex flex-col hover:scale-105`}
              >
                <div className={`w-16 h-16 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-8 h-8 ${color.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-block text-center bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium w-full cursor-pointer"
                >
                  Get Free Quote
                </button>
              </div>
            );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Click Nova?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Proven Results',
                description: 'Track record of delivering measurable ROI for clients',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Expert Team',
                description: 'Certified professionals with years of industry experience',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: 'Fast Execution',
                description: 'Quick turnaround times without compromising quality',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Custom Solutions',
                description: 'Tailored strategies that fit your unique business goals',
              },
            ].map((feature, index) => {
              const iconColors = [
                { bg: 'bg-gradient-to-br from-blue-100 to-blue-200', text: 'text-blue-600' },
                { bg: 'bg-gradient-to-br from-purple-100 to-purple-200', text: 'text-purple-600' },
                { bg: 'bg-gradient-to-br from-amber-100 to-amber-200', text: 'text-amber-600' },
                { bg: 'bg-gradient-to-br from-cyan-100 to-cyan-200', text: 'text-cyan-600' },
              ];
              const iconColor = iconColors[index];
              return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${iconColor.bg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <svg className={`w-10 h-10 ${iconColor.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-sky-700 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your digital marketing goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
