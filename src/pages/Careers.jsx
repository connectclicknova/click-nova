import React, { useState } from 'react';
import ApplicationModal from '../components/ApplicationModal';
import SEO from '../components/SEO';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const jobOpenings = [
    {
      id: 1,
      title: 'App Developer',
      department: 'Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'We are looking for a talented App Developer to join our team and create innovative mobile applications for iOS and Android platforms.',
      responsibilities: [
        'Design and build advanced applications for iOS and Android platforms',
        'Collaborate with cross-functional teams to define and design new features',
        'Work on bug fixing and improving application performance',
        'Continuously discover, evaluate, and implement new technologies',
        'Maintain code quality, organization, and automation'
      ],
      requirements: [
        'Proven experience in mobile app development (React Native, Flutter, or native)',
        'Strong knowledge of mobile UI/UX principles',
        'Experience with RESTful APIs and third-party libraries',
        'Familiarity with cloud message APIs and push notifications',
        'Understanding of Agile development methodologies',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Website Developer',
      department: 'Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Join our creative team as a Website Developer to build responsive, user-friendly websites that drive business results.',
      responsibilities: [
        'Develop and maintain responsive websites using modern frameworks',
        'Implement website designs and ensure cross-browser compatibility',
        'Optimize websites for maximum speed and scalability',
        'Collaborate with designers and backend developers',
        'Write clean, maintainable, and well-documented code',
        'Stay updated with emerging web technologies'
      ],
      requirements: [
        'Strong proficiency in HTML, CSS, JavaScript',
        'Experience with modern frameworks (React, Vue, or Angular)',
        'Knowledge of responsive design and mobile-first development',
        'Understanding of SEO principles and best practices',
        'Experience with version control systems (Git)',
        'Good understanding of web performance optimization'
      ]
    },
    {
      id: 3,
      title: 'Software Developer',
      department: 'Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'We are seeking a skilled Software Developer to design, develop, and maintain software solutions that meet our clients\' needs.',
      responsibilities: [
        'Design, develop, and test software applications',
        'Write clean, scalable, and efficient code',
        'Troubleshoot, debug, and upgrade existing software',
        'Collaborate with team members to determine software requirements',
        'Create technical documentation for reference and reporting',
        'Participate in code reviews and maintain code quality standards'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Proficiency in one or more programming languages (Java, Python, C#, etc.)',
        'Experience with database technologies (SQL, NoSQL)',
        'Strong understanding of software development lifecycle',
        'Knowledge of cloud platforms (AWS, Azure, or GCP)',
        'Excellent analytical and problem-solving skills'
      ]
    }
  ];

  const handleApply = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setIsApplicationModalOpen(true);
  };

  const handleSendResume = () => {
    setSelectedJobTitle('');
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="min-h-screen" style={{paddingTop: '100px'}}>
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        jobTitle={selectedJobTitle}
        jobOpenings={jobOpenings}
      />
      <SEO 
        title="Careers at Click Nova - App Developer, Website Developer, Software Developer Jobs"
        description="Join Click Nova's team! Current job openings: App Developer for mobile app development, Website Developer for web development, Software Developer for software development. Build your career with a leading digital marketing agency."
        keywords="app developer jobs, website developer careers, software developer openings, mobile app developer vacancy, web developer jobs, software engineer positions, digital marketing agency careers"
        canonical="https://www.clicknova.in/careers"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join <span className='text-primary'>Our Team</span></h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build your career with Click Nova and be part of a dynamic team that's shaping the future of digital innovation.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-200 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                Work on cutting-edge projects using the latest technologies and tools in the industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Be part of a supportive team that values collaboration, creativity, and continuous learning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Enjoy opportunities for professional development, training, and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Current Openings</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Explore exciting opportunities to grow your career with us
          </p>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-sky-200 text-blue-700">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="mt-4 md:mt-0 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300 font-medium cursor-pointer"
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  {selectedJob === job.id && (
                    <div className="mt-6 space-y-6 border-t pt-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4 mt-6">
                        <button
                          onClick={() => handleApply(job.title)}
                          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300 font-medium shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Don't See the Right Position?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button
            onClick={handleSendResume}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg cursor-pointer"
          >
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
