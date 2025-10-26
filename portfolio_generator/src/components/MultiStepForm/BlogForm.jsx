import React from 'react'

const BlogForm = ({ data, updateData }) => {
    // Handle changes to blog fields
  const handleChange = (field, value) => {
    updateData({
      blog: {
        ...data.blog,
        [field]: value
      }
    })
  }
// BlogForm component for the "Blog" Section !!
  return (
    <div className="slide-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Blog</h2>
      <p className="text-gray-600 mb-8">Share your blog information (optional)</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            value={data.blog.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="My Tech Blog"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Summary
          </label>
          <textarea
            value={data.blog.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Share what your blog is about..."
          />
        </div>
      </div>
    </div>
  )
}

export default BlogForm