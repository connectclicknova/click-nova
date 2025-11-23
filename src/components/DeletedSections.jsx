import React from 'react'

const DeletedSections = () => {
  return (
    <>
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
    </>
  )
}

export default DeletedSections
