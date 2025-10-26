import React from 'react'
// AboutForm component for the "About Me" Section !!
const AboutForm = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ [field]: value })
  }
  // Handle all social links changes
  const handleSocialChange = (platform, value) => {
    updateData({
      socials: {
        ...data.socials,
        [platform]: value
      }
    })
  }

  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
      <p className="text-gray-600 mb-8">Share your background and contact information</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio *
          </label>
          <textarea
            value={data.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us about yourself, your experience, and your passions..."
            required
          />
        </div>
        {/* Contact Information Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="New York, NY"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn
              </label>
              <input
                type="url"
                value={data.socials.linkedin}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GitHub
              </label>
              <input
                type="url"
                value={data.socials.github}
                onChange={(e) => handleSocialChange('github', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://github.com/username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Twitter
              </label>
              <input
                type="url"
                value={data.socials.twitter}
                onChange={(e) => handleSocialChange('twitter', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://twitter.com/username"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutForm