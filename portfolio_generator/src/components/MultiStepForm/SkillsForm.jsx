import React, { useState } from 'react'

const SkillsForm = ({ data, updateData }) => {
  const [skillInput, setSkillInput] = useState('')

  const addSkill = () => {
    if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
      updateData({
        skills: [...data.skills, skillInput.trim()]
      })
      setSkillInput('')
    }
  }

  const removeSkill = (skillToRemove) => {
    updateData({
      skills: data.skills.filter(skill => skill !== skillToRemove)
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
      <p className="text-gray-600 mb-8">Add your professional skills and technologies</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Skills
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="React, Node.js, Python..."
            />
            <button
              type="button"
              onClick={addSkill}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Skills</h3>
          {data.skills.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No skills added yet</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-full"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-blue-600 hover:text-blue-800 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillsForm