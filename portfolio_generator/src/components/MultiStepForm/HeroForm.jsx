import React from 'react'

const HeroForm = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ [field]: value })
  }

  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Hero Section</h2>
      <p className="text-gray-600 mb-8">Tell us about yourself</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-green-200"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Title *
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Senior Full Stack Developer"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tagline
          </label>
          <input
            type="text"
            value={data.tagline}
            onChange={(e) => handleChange('tagline', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Creating amazing digital experiences"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Image URL
          </label>
          <input
            type="url"
            value={data.profileImage}
            onChange={(e) => handleChange('profileImage', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/profile.jpg"
          />
          {data.profileImage && (
            <div className="mt-2">
              <img 
                src={data.profileImage} 
                alt="Profile preview" 
                className="w-20 h-20 rounded-full object-cover border"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroForm