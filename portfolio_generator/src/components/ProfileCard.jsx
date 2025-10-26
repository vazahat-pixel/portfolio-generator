import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ professional }) => {
  const {
    id,
    name,
    title,
    bio,
    profileImage,
    skills = [],
    location
  } = professional

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={profileImage || '/default-avatar.png'}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiNFNUU1RTUiLz4KPHBhdGggZD0iTTMyIDM2QzM2LjQxODMgMzYgNDAgMzIuNDE4MyA0MCAyOEM0MCAyMy41ODE3IDM2LjQxODMgMjAgMzIgMjBDMjcuNTgxNyAyMCAyNCAyMy41ODE3IDI0IDI4QzI0IDMyLjQxODMgMjcuNTgxNyAzNiAzMiAzNloiIGZpbGw9IiM5QzlDOUMiLz4KPHBhdGggZD0iTTMyIDY0QzQzLjA0NTcgNjQgNTIgNTUuMDQ1NyA1MiA0NEM1MiAzMi45NTQzIDQzLjA0NTcgMjQgMzIgMjRDMjAuOTU0MyAyNCAxMiAzMi45NTQzIDEyIDQ0QzEyIDU1LjA0NTcgMjAuOTU0MyA2NCAzMiA2NFoiIGZpbGw9IiM5QzlDOUMiLz4KPC9zdmc+'
            }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">{name}</h3>
            <p className="text-blue-600 font-medium truncate">{title}</p>
            {location && (
              <p className="text-gray-500 text-sm truncate">{location}</p>
            )}
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {bio?.substring(0, 120)}...
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {skills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  +{skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Link
          to={`/portfolio/${id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard