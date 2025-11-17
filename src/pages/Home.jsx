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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20 overflow-hidden" aria-label="Hero section">
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 flex items-center justify-center shadow-2xl">
                <svg className="w-3/4 h-3/4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-16">
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

      {/* CLICK NOVA Meaning Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wider">
                OUR DNA
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Power of <span className="text-primary relative">
                CLICK NOVA
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4" stroke="#2286b6" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every letter represents a commitment to excellence and innovation
            </p>
          </div>

          {/* Main Grid - Vertical Stacked Cards */}
          <div className="max-w-5xl mx-auto space-y-8">
            {[
              { letter: 'C', word: 'CREATIVITY', icon: '🎨', description: 'Innovative solutions that set you apart from the competition', color: 'from-purple-500 to-purple-600', borderColor: 'border-purple-500', hoverBorderColor: 'hover:border-purple-500' },
              { letter: 'L', word: 'LOYALTY', icon: '🤝', description: 'Building long-term partnerships based on trust and dedication', color: 'from-blue-500 to-blue-600', borderColor: 'border-blue-500', hoverBorderColor: 'hover:border-blue-500' },
              { letter: 'I', word: 'INNOVATION', icon: '💡', description: 'Cutting-edge strategies that drive measurable growth', color: 'from-indigo-500 to-indigo-600', borderColor: 'border-indigo-500', hoverBorderColor: 'hover:border-indigo-500' },
              { letter: 'C', word: 'COLLABORATION', icon: '👥', description: 'Working together as one team towards your success', color: 'from-cyan-500 to-cyan-600', borderColor: 'border-cyan-500', hoverBorderColor: 'hover:border-cyan-500' },
              { letter: 'K', word: 'KNOWLEDGE', icon: '📚', description: 'Expert insights and industry-leading guidance', color: 'from-teal-500 to-teal-600', borderColor: 'border-teal-500', hoverBorderColor: 'hover:border-teal-500' },
              { letter: 'N', word: 'NURTURING', icon: '🌱', description: 'Growing your business with care and attention to detail', color: 'from-green-500 to-green-600', borderColor: 'border-green-500', hoverBorderColor: 'hover:border-green-500' },
              { letter: 'O', word: 'OPPORTUNITY', icon: '🚀', description: 'Creating new possibilities for your brand to thrive', color: 'from-emerald-500 to-emerald-600', borderColor: 'border-emerald-500', hoverBorderColor: 'hover:border-emerald-500' },
              { letter: 'V', word: 'VISIONARY', icon: '🎯', description: 'Forward-thinking approach to digital transformation', color: 'from-orange-500 to-orange-600', borderColor: 'border-orange-500', hoverBorderColor: 'hover:border-orange-500' },
              { letter: 'A', word: 'AGILITY', icon: '⚡', description: 'Quick adaptation to market changes and trends', color: 'from-rose-500 to-rose-600', borderColor: 'border-rose-500', hoverBorderColor: 'hover:border-rose-500' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-l-4 ${item.borderColor} ${item.hoverBorderColor} hover:border-l-8 cursor-pointer`}
              >
                <div className="flex items-start gap-6">
                  {/* Left Side - Letter Circle */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <span className="text-3xl font-black text-white">{item.letter}</span>
                      </div>
                      {/* Icon Badge */}
                      <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl">{item.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {item.word}
                      </h3>
                      {/* Arrow */}
                      <svg 
                        className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Number Badge */}
                  <div className="hidden lg:block flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-sm font-bold text-primary group-hover:text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar on Hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              These values define who we are and how we serve our clients every single day
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg group cursor-pointer"
            >
              Learn more about our story
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
                { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-blue-500' },
                { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-500' },
                { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'hover:border-cyan-500' },
                { bg: 'bg-green-100', text: 'text-green-600', border: 'hover:border-green-500' },
                { bg: 'bg-amber-100', text: 'text-amber-600', border: 'hover:border-amber-500' },
                { bg: 'bg-rose-100', text: 'text-rose-600', border: 'hover:border-rose-500' },
                { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-500' },
                { bg: 'bg-teal-100', text: 'text-teal-600', border: 'hover:border-teal-500' },
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
                { bg: 'bg-gradient-to-br from-green-100 to-green-200', text: 'text-green-600' },
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
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
