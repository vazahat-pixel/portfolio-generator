import React from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateA from './TemplateA'
import TemplateB from './TemplateB'

const TemplateSelection = ({ onTemplateSelect }) => {
  const navigate = useNavigate()
    // Define available templates data here
  const templates = [
    {
      id: 1,
      name: 'Modern Minimal',
      description: 'Clean and professional design with modern aesthetics',
      component: TemplateA,
      preview: 'modern'
    },
    {
      id: 2,
      name: 'Creative Bold',
      description: 'Vibrant and creative design for showcasing personality',
      component: TemplateB,
      preview: 'creative'
    }
  ]
  // Handle all template selection logic here
  const handleTemplateSelect = (template) => {
    onTemplateSelect(template)
    navigate('/form')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-100 to-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Choose Your Portfolio Template
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto font-medium">
            Select a design that best represents your professional style and personality
          </p>
        </div>
        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
              onClick={() => handleTemplateSelect(template)}
            >
              <div className="p-8 bg-white border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700">
                    {template.preview}
                  </span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                    Select Template
                  </button>
                </div>
              </div>
              {/* Template Preview that showcases the selected temp*/}
              <div className="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center backdrop-blur-sm">
                <div className="transform group-hover:scale-105 transition-transform duration-300 w-full max-w-md">
                  <template.component 
                    preview={true}
                    data={{
                      name: 'Vazahat Qureshi',
                      title: 'Professional Title',
                      tagline: 'Your amazing tagline here'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TemplateSelection