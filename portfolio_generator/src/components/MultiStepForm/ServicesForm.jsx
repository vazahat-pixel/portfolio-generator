import React from 'react'

const ServicesForm = ({ data, updateData }) => {
  const updateService = (index, field, value) => {
    const updatedServices = [...data.services]
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value
    }
    updateData({ services: updatedServices })
  }

  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Services</h2>
      <p className="text-gray-600 mb-8">Describe the services you offer</p>

      <div className="space-y-8">
        {data.services.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Service {index + 1}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title *
                </label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => updateService(index, 'title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Web Development"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(index, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe what this service includes..."
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesForm