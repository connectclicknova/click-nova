import React from 'react';
import SEO from '../components/SEO';
import FloatingContactButton from '../components/FloatingContactButton';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen" style={{paddingTop: '100px'}}>
      <SEO 
        title="About Click Nova - India's Leading Digital Marketing Agency | 150+ Happy Clients | Expert Team"
        description="Discover Click Nova - India's premier digital marketing agency since 2018. With 50+ expert professionals and 150+ successful projects, we specialize in social media marketing, Google Ads, Facebook Ads, SEO services, website development, mobile app development, and custom software solutions. Award-winning team delivering innovative, ROI-driven digital marketing strategies."
        keywords="about click nova, click nova digital marketing, best digital marketing agency India, top digital marketing company, digital marketing agency team, expert digital marketers, certified digital marketing professionals, social media marketing experts, Google ads specialists, Facebook advertising experts, SEO experts India, website development company, mobile app developers, software development services, digital agency portfolio, marketing agency experience, trusted digital marketing partner, award winning digital agency"
        canonical="https://www.clicknova.in/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">Click Nova</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate digital marketers dedicated to helping businesses succeed in the ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg className="w-3/4 h-3/4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with innovative digital marketing strategies that drive growth,
                increase brand visibility, and deliver measurable ROI. We believe in creating lasting partnerships
                built on trust, transparency, and exceptional results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital marketing agency recognized for transforming businesses through
                data-driven strategies, cutting-edge technology, and creative excellence. We envision a future
                where every business can leverage the full potential of digital marketing to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Integrity',
                description: 'We operate with honesty and transparency in all our client relationships and business practices.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
                title: 'Innovation',
                description: 'We constantly explore new technologies and strategies to stay ahead of digital marketing trends.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                ),
                title: 'Excellence',
                description: 'We are committed to delivering exceptional quality in every project and exceeding expectations.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Collaboration',
                description: 'We work closely with our clients as partners, fostering open communication and teamwork.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                title: 'Results-Driven',
                description: 'We focus on measurable outcomes that directly impact our clients\' business growth and success.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
                title: 'Continuous Learning',
                description: 'We invest in ongoing education and development to ensure we stay at the forefront of our industry.',
              },
            ].map((value, index) => {
              const valueColors = [
                { bg: 'bg-gradient-to-br from-blue-100 to-sky-200', text: 'text-blue-700' },
                { bg: 'bg-gradient-to-br from-orange-100 to-orange-200', text: 'text-orange-700' },
                { bg: 'bg-gradient-to-br from-cyan-100 to-cyan-200', text: 'text-cyan-600' },
                { bg: 'bg-gradient-to-br from-sky-100 to-blue-200', text: 'text-sky-700' },
                { bg: 'bg-gradient-to-br from-indigo-100 to-indigo-200', text: 'text-indigo-700' },
                { bg: 'bg-gradient-to-br from-violet-100 to-blue-200', text: 'text-violet-700' },
              ];
              const valueColor = valueColors[index % valueColors.length];
              return (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200">
                <div className={`w-16 h-16 ${valueColor.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-8 h-8 ${valueColor.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals leading our mission to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                bio: '15+ years of experience in digital marketing strategy and business development.',
              },
              {
                name: 'Michael Chen',
                role: 'Chief Marketing Officer',
                bio: 'Expert in SEO, content marketing, and data-driven campaign optimization.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Creative Director',
                bio: 'Award-winning creative with a passion for compelling brand storytelling.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-sky-700 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that showcase our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Happy Clients' },
              { number: '8+', label: 'Years in Business' },
              { number: '15+', label: 'Team Members' },
              { number: '100%', label: 'Client Retention' },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default About;
