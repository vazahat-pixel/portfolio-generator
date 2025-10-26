import React from 'react'

const ProjectsForm = ({ data, updateData }) => {
  const updateProject = (index, field, value) => {
    const updatedProjects = [...data.projects]
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    }
    updateData({ projects: updatedProjects })
  }

  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Projects</h2>
      <p className="text-gray-600 mb-8">Showcase your best work</p>

      <div className="space-y-8">
        {data.projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Project {index + 1}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="E-commerce Platform"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Image URL
                </label>
                <input
                  type="url"
                  value={project.image}
                  onChange={(e) => updateProject(index, 'image', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/project.jpg"
                />
                {project.image && (
                  <div className="mt-2">
                    <img 
                      src={project.image} 
                      alt="Project preview" 
                      className="w-32 h-20 object-cover rounded border"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe the project, your role, and technologies used..."
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

export default ProjectsForm