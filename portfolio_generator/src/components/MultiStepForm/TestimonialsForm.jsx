import React from 'react'

const TestimonialsForm = ({ data, updateData }) => {
  const addTestimonial = () => {
    if (data.testimonials.length < 3) {
      updateData({
        testimonials: [...data.testimonials, { quote: '', author: '' }]
      })
    }
  }

  const removeTestimonial = (index) => {
    if (data.testimonials.length > 1) {
      const updatedTestimonials = data.testimonials.filter((_, i) => i !== index)
      updateData({ testimonials: updatedTestimonials })
    }
  }

  const updateTestimonial = (index, field, value) => {
    const updatedTestimonials = [...data.testimonials]
    updatedTestimonials[index] = {
      ...updatedTestimonials[index],
      [field]: value
    }
    updateData({ testimonials: updatedTestimonials })
  }

  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Testimonials</h2>
      <p className="text-gray-600 mb-8">Add client testimonials (1-3 recommended)</p>

      <div className="space-y-6">
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Testimonial {index + 1}
              </h3>
              {data.testimonials.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeTestimonial(index)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quote *
                </label>
                <textarea
                  value={testimonial.quote}
                  onChange={(e) => updateTestimonial(index, 'quote', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What did the client say about your work?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  value={testimonial.author}
                  onChange={(e) => updateTestimonial(index, 'author', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Client Name"
                  required
                />
              </div>
            </div>
          </div>
        ))}

        {data.testimonials.length < 3 && (
          <button
            type="button"
            onClick={addTestimonial}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
          >
            + Add Another Testimonial
          </button>
        )}
      </div>
    </div>
  )
}

export default TestimonialsForm