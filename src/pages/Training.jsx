import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrainingModal from '../components/TrainingModal';
import SEO from '../components/SEO';

const Training = () => {
  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);

  const courses = [
    {
      title: 'Full Stack Development',
      description: 'Master both front-end and back-end technologies to become a complete web developer.',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      topics: [
        'HTML, CSS, JavaScript',
        'React.js & Node.js',
        'Database Management (SQL & NoSQL)',
        'RESTful APIs & Authentication',
        'Version Control (Git)',
        'Deployment & DevOps Basics',
      ],
    },
    {
      title: 'Front-End Development',
      description: 'Learn to create stunning, responsive user interfaces with modern front-end technologies.',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      topics: [
        'HTML5 & CSS3 Advanced',
        'JavaScript ES6+',
        'React.js / Vue.js',
        'Responsive Design & Tailwind CSS',
        'State Management (Redux/Context API)',
        'Performance Optimization',
      ],
    },
    {
      title: 'Back-End Development',
      description: 'Build robust server-side applications and APIs with industry-standard technologies.',
      duration: '4 Months',
      level: 'Intermediate to Advanced',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      ),
      topics: [
        'Node.js & Express.js',
        'Database Design & Management',
        'RESTful & GraphQL APIs',
        'Authentication & Security',
        'Microservices Architecture',
        'Testing & Debugging',
      ],
    },
    {
      title: 'Website Development',
      description: 'Create professional websites from scratch using modern web development practices.',
      duration: '3 Months',
      level: 'Beginner',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      ),
      topics: [
        'Web Development Fundamentals',
        'HTML, CSS & JavaScript',
        'WordPress & CMS Platforms',
        'Responsive Web Design',
        'SEO Best Practices',
        'Website Hosting & Deployment',
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      duration: '5 Months',
      level: 'Intermediate',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      ),
      topics: [
        'React Native / Flutter',
        'Mobile UI/UX Design',
        'Native APIs & Device Features',
        'State Management',
        'Push Notifications & Firebase',
        'App Store Deployment',
      ],
    },
    {
      title: 'Software Development',
      description: 'Master software engineering principles and build scalable enterprise applications.',
      duration: '6 Months',
      level: 'Intermediate to Advanced',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      topics: [
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Design Patterns',
        'Software Architecture',
        'Agile Development Methodologies',
        'Testing & Quality Assurance',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Professional Training Programs - Web Development, Mobile App Development | Click Nova"
        description="Transform your career with Click Nova's comprehensive training programs. Learn Full Stack Development, Front-End Development, Back-End Development, Mobile App Development, Digital Marketing, and Software Development from industry experts."
        keywords="web development training, mobile app development courses, full stack developer training, front-end development course, back-end development training, digital marketing training, software development courses, programming training"
        canonical="https://www.clicknova.in/training"
      />
      <TrainingModal isOpen={isTrainingModalOpen} onClose={() => setIsTrainingModalOpen(false)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-primary">Training Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your career with our comprehensive training programs. Learn from industry experts
            and gain practical skills that employers are looking for.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const colors = [
                { bg: 'bg-gradient-to-br from-blue-100 to-blue-200', text: 'text-blue-600', border: 'hover:border-blue-400' },
                { bg: 'bg-gradient-to-br from-purple-100 to-purple-200', text: 'text-purple-600', border: 'hover:border-purple-400' },
                { bg: 'bg-gradient-to-br from-cyan-100 to-cyan-200', text: 'text-cyan-600', border: 'hover:border-cyan-400' },
                { bg: 'bg-gradient-to-br from-green-100 to-green-200', text: 'text-green-600', border: 'hover:border-green-400' },
                { bg: 'bg-gradient-to-br from-amber-100 to-amber-200', text: 'text-amber-600', border: 'hover:border-amber-400' },
                { bg: 'bg-gradient-to-br from-rose-100 to-rose-200', text: 'text-rose-600', border: 'hover:border-rose-400' },
              ];
              const color = colors[index % colors.length];
              return (
              <div
                key={index}
                className={`bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 ${color.border} flex flex-col group`}
              >
                <div className={`w-16 h-16 ${color.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-8 h-8 ${color.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {course.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {course.level}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg
                          className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsTrainingModalOpen(true)}
                  className="inline-block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium shadow-md hover:shadow-lg w-full cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the best learning experience with our comprehensive training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of practical experience',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                ),
                title: 'Hands-On Projects',
                description: 'Build real-world projects to strengthen your portfolio',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                ),
                title: 'Certification',
                description: 'Receive industry-recognized certificates upon completion',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: 'Career Support',
                description: 'Get job placement assistance and career guidance',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers with our training programs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Training;
