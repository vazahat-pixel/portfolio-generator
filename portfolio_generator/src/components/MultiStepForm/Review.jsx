import React from 'react'

const Review = ({ data }) => {
  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Your Portfolio</h2>
      <p className="text-gray-600 mb-8">Please review all information before submitting</p>

      <div className="space-y-8">
        {/* Hero Section Review */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Hero Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Name:</strong> {data.name}
            </div>
            <div>
              <strong>Title:</strong> {data.title}
            </div>
            <div>
              <strong>Tagline:</strong> {data.tagline || 'Not provided'}
            </div>
            <div>
              <strong>Profile Image:</strong> {data.profileImage ? 'Provided' : 'Not provided'}
            </div>
          </div>
        </div>

        {/* About Section Review */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About Me</h3>
          <div className="space-y-2">
            <div><strong>Bio:</strong> {data.bio.substring(0, 100)}...</div>
            <div><strong>Email:</strong> {data.email}</div>
            <div><strong>Phone:</strong> {data.phone || 'Not provided'}</div>
            <div><strong>Location:</strong> {data.location || 'Not provided'}</div>
          </div>
        </div>

        {/* Skills Review */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Services Review */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Services</h3>
          <div className="space-y-4">
            {data.services.map((service, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <strong>{service.title}</strong>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Review */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Projects</h3>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <strong>{project.title}</strong>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Review */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Testimonials</h3>
          <div className="space-y-4">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <p className="italic">"{testimonial.quote}"</p>
                <strong>- {testimonial.author}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800 text-center">
          Ready to create your amazing portfolio? Click "Create Portfolio" below!
        </p>
      </div>
    </div>
  )
}

export default Review