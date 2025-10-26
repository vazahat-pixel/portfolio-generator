import React from 'react'

const TemplateA = ({ data, preview = false }) => {
  const portfolioData = data || {
    name: 'John Doe',
    title: 'Professional Title',
    tagline: 'Your amazing tagline here'
  }

  if (preview) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">JD</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {portfolioData.name}
          </h3>
          <p className="text-blue-600 font-medium mb-2">
            {portfolioData.title}
          </p>
          <p className="text-gray-600 text-sm">
            {portfolioData.tagline}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {portfolioData.profileImage && (
            <img 
              src={portfolioData.profileImage} 
              alt={portfolioData.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white border-opacity-20"
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
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {portfolioData.bio}
              </p>
              <div className="space-y-3">
                {portfolioData.email && (
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 w-20">Email:</span>
                    <a href={`mailto:${portfolioData.email}`} className="text-blue-600 hover:text-blue-800">
                      {portfolioData.email}
                    </a>
                  </div>
                )}
                {portfolioData.phone && (
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 w-20">Phone:</span>
                    <span className="text-gray-700">{portfolioData.phone}</span>
                  </div>
                )}
                {portfolioData.location && (
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 w-20">Location:</span>
                    <span className="text-gray-700">{portfolioData.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect With Me</h3>
              <div className="space-y-3">
                {portfolioData.socials?.linkedin && (
                  <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900">
                    <span className="mr-2">🔗</span> LinkedIn
                  </a>
                )}
                {portfolioData.socials?.github && (
                  <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                    <span className="mr-2">💻</span> GitHub
                  </a>
                )}
                {portfolioData.socials?.twitter && (
                  <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-600">
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
        <section id="skills" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-200 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {portfolioData.services && portfolioData.services.length > 0 && (
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {portfolioData.projects && portfolioData.projects.length > 0 && (
        <section id="portfolio" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {portfolioData.testimonials && portfolioData.testimonials.length > 0 && (
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Testimonials</h2>
            <div className="space-y-8">
              {portfolioData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {portfolioData.blog && portfolioData.blog.title && (
        <section id="blog" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{portfolioData.blog.title}</h2>
            {portfolioData.blog.summary && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {portfolioData.blog.summary}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          {portfolioData.contact?.message && (
            <p className="text-xl mb-8 opacity-90">{portfolioData.contact.message}</p>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {portfolioData.contact?.email && (
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Me
              </a>
            )}
            {portfolioData.contact?.phone && (
              <a 
                href={`tel:${portfolioData.contact.phone}`}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Me
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Portfolio created with Portfolio Generator</p>
        </div>
      </footer>
    </div>
  )
}

export default TemplateA