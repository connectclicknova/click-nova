import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FreeQuoteModal from '../components/FreeQuoteModal';
import SEO from '../components/SEO';

const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Build your online presence with engaging posts, ads, and campaigns on Facebook, Instagram, LinkedIn, and more.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      ),
      features: [
        'Social Media Strategy Development',
        'Content Creation & Curation',
        'Community Management',
        'Social Media Advertising',
        'Influencer Marketing',
        'Analytics & Performance Reporting',
      ],
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Rank higher on Google, attract organic traffic, and grow your business with proven SEO strategies for your brand.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      ),
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Technical SEO Audits',
        'Link Building Strategies',
        'Local SEO Services',
        'SEO Performance Tracking',
      ],
    },
    {
      title: 'Website Design & Development',
      description: 'Get a responsive, modern website that looks great, loads fast, and converts visitors into customers.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Website Maintenance',
        'Performance Optimization',
      ],
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Drive sales and increase brand visibility with high-performing Google Ads and targeted PPC campaigns.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      features: [
        'Google Ads Management',
        'Display Advertising',
        'Shopping Campaigns',
        'Remarketing Campaigns',
        'Conversion Optimization',
        'ROI Tracking & Reporting',
      ],
    },
    {
      title: 'Logo Designing',
      description: 'Stand out with unique, memorable logo designs that perfectly represent your brand identity and values.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      ),
      features: [
        'Custom Logo Design',
        'Multiple Design Concepts',
        'Unlimited Revisions',
        'Brand Identity Guidelines',
        'Vector File Formats',
        'Fast Turnaround Time',
      ],
    },
    {
      title: 'Branding & Graphic Design',
      description: 'Create a strong brand with professional graphic design for all of your marketing materials.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      features: [
        'Brand Identity Development',
        'Business Card Design',
        'Brochure & Flyer Design',
        'Social Media Graphics',
        'Marketing Collateral',
        'Print & Digital Design',
      ],
    },
    {
      title: 'Content Marketing',
      description: 'Attract and engage customers through valuable, SEO-friendly content that builds trust and drives results.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      features: [
        'Content Strategy & Planning',
        'Blog Writing & Publishing',
        'Video Content Production',
        'Infographic Design',
        'E-books & Whitepapers',
        'Content Distribution',
      ],
    },
    {
      title: 'Email Marketing',
      description: 'Reach your audience directly with strategic email campaigns that nurture leads and increase conversions.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      features: [
        'Email Strategy Development',
        'List Building & Segmentation',
        'Newsletter Design & Creation',
        'Automation Workflows',
        'A/B Testing',
        'Performance Analytics',
      ],
    },
    {
      title: 'Keyword Research & Strategy',
      description: 'Target the right keywords to reach your ideal customers and get better search engine results.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      ),
      features: [
        'Comprehensive Keyword Research',
        'Competitor Analysis',
        'Search Intent Analysis',
        'Keyword Difficulty Assessment',
        'Content Gap Analysis',
        'Long-tail Keyword Discovery',
      ],
    },
    {
      title: 'Online Reputation Management',
      description: 'Protect and grow your brand\'s credibility with review management, monitoring, and positive reputation building.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
      features: [
        'Review Monitoring & Management',
        'Brand Mention Tracking',
        'Crisis Management',
        'Positive Review Generation',
        'Reputation Repair Strategies',
        'Social Listening',
      ],
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track your success with detailed analytics, reports, and insights that help you make smarter marketing decisions.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      features: [
        'Website Analytics Setup',
        'Conversion Tracking',
        'Custom Dashboard Creation',
        'Monthly Performance Reports',
        'Competitor Analysis',
        'ROI Measurement',
      ],
    },
    {
      title: 'AI Video Creation',
      description: 'Create professional, engaging videos using AI technology that captivates your audience and drives engagement.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      ),
      features: [
        'AI-Powered Video Generation',
        'Automated Video Editing',
        'Text-to-Video Conversion',
        'Custom Branding & Styling',
        'Multiple Format Export',
        'Social Media Optimization',
      ],
    },
    {
      title: 'Software Development',
      description: 'Build custom software solutions tailored to your business needs with cutting-edge technology and best practices.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      features: [
        'Custom Software Development',
        'Web Application Development',
        'API Development & Integration',
        'Database Design & Management',
        'Software Maintenance & Support',
        'Quality Assurance & Testing',
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful, user-friendly mobile apps for iOS and Android that deliver exceptional user experiences.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Ongoing Support & Updates',
      ],
    },
    {
      title: 'Facebook Ads Management',
      description: 'Reach your ideal audience with strategic Facebook advertising campaigns that drive engagement and conversions.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      ),
      features: [
        'Campaign Strategy & Setup',
        'Audience Targeting & Segmentation',
        'Ad Creative Development',
        'A/B Testing & Optimization',
        'Budget Management',
        'Performance Tracking & Reporting',
      ],
    },
    {
      title: 'Instagram Ads Management',
      description: 'Engage audiences with visually stunning Instagram ad campaigns that convert followers into customers.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      features: [
        'Instagram Story Ads',
        'Feed & Carousel Ads',
        'Reels Advertising',
        'Shopping Ads Setup',
        'Influencer Collaboration',
        'Instagram Analytics',
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{paddingTop: '100px'}}>
      <SEO 
        title="Digital Marketing Services - Social Media, Google Ads, Website Development | Click Nova"
        description="Expert digital marketing services including social media marketing, Facebook ads, Google ads, Instagram ads, YouTube ads, SEO, PPC advertising, website development, ecommerce websites, mobile app development, and software development."
        keywords="digital marketing services, social media marketing, Facebook ads management, Google ads services, Instagram ads, YouTube advertising, SEO services, PPC advertising, website development services, ecommerce website development, mobile app development services, software development, content marketing, email marketing"
        canonical="https://www.clicknova.in/services"
      />
      <FreeQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20" aria-label="Services hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Digital Marketing <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Best digital marketing agency offering comprehensive services including social media marketing, Google ads, Facebook ads, Instagram ads, website development, ecommerce solutions, mobile app development, and software development to help your business thrive online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = [
                { bg: 'bg-gradient-to-br from-green-100 to-emerald-200', text: 'text-green-700', border: 'hover:border-green-400', shadow: 'hover:shadow-green-200' },
                { bg: 'bg-gradient-to-br from-orange-100 to-orange-200', text: 'text-orange-600', border: 'hover:border-orange-400', shadow: 'hover:shadow-orange-200' },
                { bg: 'bg-gradient-to-br from-teal-100 to-teal-200', text: 'text-teal-600', border: 'hover:border-teal-400', shadow: 'hover:shadow-teal-200' },
                { bg: 'bg-gradient-to-br from-emerald-100 to-green-200', text: 'text-emerald-700', border: 'hover:border-emerald-400', shadow: 'hover:shadow-emerald-200' },
                { bg: 'bg-gradient-to-br from-amber-100 to-orange-200', text: 'text-amber-700', border: 'hover:border-amber-400', shadow: 'hover:shadow-amber-200' },
                { bg: 'bg-gradient-to-br from-lime-100 to-green-200', text: 'text-lime-700', border: 'hover:border-lime-400', shadow: 'hover:shadow-lime-200' },
                { bg: 'bg-gradient-to-br from-cyan-100 to-teal-200', text: 'text-cyan-700', border: 'hover:border-cyan-400', shadow: 'hover:shadow-cyan-200' },
                { bg: 'bg-gradient-to-br from-green-100 to-teal-200', text: 'text-green-700', border: 'hover:border-green-400', shadow: 'hover:shadow-green-200' },
                { bg: 'bg-gradient-to-br from-orange-100 to-amber-200', text: 'text-orange-700', border: 'hover:border-orange-400', shadow: 'hover:shadow-orange-200' },
              ];
              const color = colors[index % colors.length];
              return (
              <div
                key={index}
                className={`bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 ${color.border} flex flex-col group`}
              >
                <div className={`w-16 h-16 ${color.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-8 h-8 ${color.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium shadow-md hover:shadow-lg w-full cursor-pointer"
                >
                  Get Free Quote
                </button>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your success every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business, goals, and target audience to create a tailored strategy.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive digital marketing plan aligned with your objectives.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement campaigns with precision and attention to detail for optimal results.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor, analyze, and refine strategies for maximum performance.',
              },
            ].map((process, index) => {
              const stepColors = [
                'bg-gradient-to-br from-green-600 to-emerald-700',
                'bg-gradient-to-br from-purple-500 to-purple-600',
                'bg-gradient-to-br from-cyan-500 to-cyan-600',
                'bg-gradient-to-br from-green-500 to-green-600',
              ];
              return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${stepColors[index]} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored digital marketing solutions for diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'E-commerce',
              'Healthcare',
              'Real Estate',
              'Technology',
              'Finance',
              'Education',
              'Hospitality',
              'Professional Services',
            ].map((industry, index) => {
              const industryColors = [
                'hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-700',
                'hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600',
                'hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600',
                'hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600',
                'hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600',
                'hover:bg-gradient-to-r hover:from-rose-500 hover:to-rose-600',
                'hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600',
                'hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600',
              ];
              return (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg text-center hover:text-white transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-transparent hover:scale-105 hover:shadow-xl ${industryColors[index % industryColors.length]}`}
              >
                <p className="font-medium">{industry}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's create a custom strategy that drives real results for your business
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
