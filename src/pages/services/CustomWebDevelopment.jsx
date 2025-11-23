import { Link } from 'react-router-dom';
import Newsletter from '../../components/Newsletter';
import FloatingContactButton from '../../components/FloatingContactButton';

const CustomWebDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb and Hero Section */}
      <section className="bg-gray-50 py-6 sm:py-8 pt-[120px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              HOME
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
              SERVICES
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400 uppercase">Custom Web Development</span>
          </nav>

          {/* Hero Content */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Custom Web Development
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              Tailored Solutions for Your Unique Business Needs
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-4xl mb-6">
              At Click Nova, we specialize in creating custom web applications that perfectly align with your business objectives. Our expert developers combine cutting-edge technologies with innovative design to deliver scalable, secure, and high-performance web solutions that drive growth and enhance user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919398638314"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary border-2 border-secondary px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What We Offer */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              What We Offer
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: 'Full-Stack Development',
                  description: 'End-to-end development using modern frameworks like React, Node.js, Python, and more.'
                },
                {
                  title: 'Database Architecture',
                  description: 'Robust database design and implementation with MySQL, MongoDB, PostgreSQL, and others.'
                },
                {
                  title: 'API Development',
                  description: 'RESTful and GraphQL API development for seamless integration and data exchange.'
                },
                {
                  title: 'Cloud Integration',
                  description: 'Deploy and manage applications on AWS, Azure, Google Cloud, and other platforms.'
                },
                {
                  title: 'Third-Party Integration',
                  description: 'Seamless integration with payment gateways, CRMs, analytics tools, and more.'
                },
                {
                  title: 'Security & Performance',
                  description: 'Implementation of best security practices and performance optimization techniques.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 bg-primary rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Why Choose Click Nova for Custom Web Development?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: 'Expert Team',
                  description: 'Our developers have years of experience in building complex web applications.'
                },
                {
                  title: 'Agile Methodology',
                  description: 'We follow agile development practices for faster delivery and better collaboration.'
                },
                {
                  title: 'Scalable Solutions',
                  description: 'Build applications that grow with your business and handle increasing traffic.'
                },
                {
                  title: 'Ongoing Support',
                  description: 'We provide continuous maintenance and support to keep your application running smoothly.'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Use */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'Django', 'PHP', 'Laravel', 'Vue.js', 'Angular', 'MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-secondary hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project roadmap.' },
                { step: '02', title: 'Design & Prototyping', description: 'Create wireframes and prototypes for your approval before development.' },
                { step: '03', title: 'Development & Testing', description: 'Build your application with continuous testing and quality assurance.' },
                { step: '04', title: 'Deployment & Support', description: 'Launch your application and provide ongoing maintenance and updates.' }
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-gray-100 mb-2">{process.step}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default CustomWebDevelopment;
