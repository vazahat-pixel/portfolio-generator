import React from 'react'

const TemplateB = ({ data, preview = false }) => {
  const portfolioData = data || {
    name: 'John Doe',
    title: 'Professional Title',
    tagline: 'Your amazing tagline here'
  }

  if (preview) {
    return (
      <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto text-white">
        <div className="text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-white border-opacity-30">
            <span className="font-bold text-lg">JD</span>
          </div>
          <h3 className="text-xl font-bold mb-2">
            {portfolioData.name}
          </h3>
          <p className="font-medium mb-2 opacity-90">
            {portfolioData.title}
          </p>
          <p className="text-sm opacity-80">
            {portfolioData.tagline}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-pink-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {portfolioData.profileImage && (
            <img 
              src={portfolioData.profileImage} 
              alt={portfolioData.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white border-opacity-30"
            />
          )}
          <h1 className="text-5xl font-bold mb-4">{portfolioData.name}</h1>
          <p className="text-2xl mb-6">{portfolioData.title}</p>
          {portfolioData.tagline && (
            <p className="text-xl opacity-90">{portfolioData.tagline}</p>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {portfolioData.bio}
              </p>
              <div className="space-y-3">
                {portfolioData.email && (
                  <div className="flex items-center">
                    <span className="font-medium w-20">Email:</span>
                    <a href={`mailto:${portfolioData.email}`} className="text-orange-400 hover:text-orange-300">
                      {portfolioData.email}
                    </a>
                  </div>
                )}
                {portfolioData.phone && (
                  <div className="flex items-center">
                    <span className="font-medium w-20">Phone:</span>
                    <span className="text-gray-300">{portfolioData.phone}</span>
                  </div>
                )}
                {portfolioData.location && (
                  <div className="flex items-center">
                    <span className="font-medium w-20">Location:</span>
                    <span className="text-gray-300">{portfolioData.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {portfolioData.socials?.linkedin && (
                  <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
                    <span className="mr-2">🔗</span> LinkedIn
                  </a>
                )}
                {portfolioData.socials?.github && (
                  <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                    <span className="mr-2">💻</span> GitHub
                  </a>
                )}
                {portfolioData.socials?.twitter && (
                  <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-200">
                    <span className="mr-2">🐦</span> Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {portfolioData.skills && portfolioData.skills.length > 0 && (
        <section id="skills" className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-orange-600 hover:to-pink-600 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {portfolioData.services && portfolioData.services.length > 0 && (
        <section id="services" className="py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-500 to-pink-500 p-6 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white opacity-90 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {portfolioData.projects && portfolioData.projects.length > 0 && (
        <section id="portfolio" className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {portfolioData.testimonials && portfolioData.testimonials.length > 0 && (
        <section id="testimonials" className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
            <div className="space-y-8">
              {portfolioData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-500 to-pink-500 p-8 rounded-lg">
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {portfolioData.blog && portfolioData.blog.title && (
        <section id="blog" className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{portfolioData.blog.title}</h2>
            {portfolioData.blog.summary && (
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {portfolioData.blog.summary}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          {portfolioData.contact?.message && (
            <p className="text-xl mb-8 opacity-90">{portfolioData.contact.message}</p>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {portfolioData.contact?.email && (
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Me
              </a>
            )}
            {portfolioData.contact?.phone && (
              <a 
                href={`tel:${portfolioData.contact.phone}`}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Call Me
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Portfolio created with Portfolio Generator</p>
        </div>
      </footer>
    </div>
  )
}

export default TemplateB