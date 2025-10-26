import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import { portfolioAPI } from './api'

const ProfessionalsList = ({ portfolioData, setPortfolioData }) => {
    const [professionals, setProfessionals] = useState([])
    const [filteredProfessionals, setFilteredProfessionals] = useState([])
    const [filters, setFilters] = useState({
        skills: [],
        role: ''
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProfessionals()
    }, [])

    useEffect(() => {
        filterProfessionals()
    }, [filters, professionals])

    const fetchProfessionals = async () => {
        try {
            const data = await portfolioAPI.getAllPortfolios()
            setProfessionals(data)
            setPortfolioData(data)
        } catch (error) {
            console.error('Error fetching professionals:', error)
        } finally {
            setLoading(false)
        }
    }

    const filterProfessionals = () => {
        let filtered = professionals

        if (filters.role) {
            filtered = filtered.filter(prof => 
                prof.title?.toLowerCase().includes(filters.role.toLowerCase())
            )
        }

        if (filters.skills.length > 0) {
            filtered = filtered.filter(prof =>
                filters.skills.every(skill =>
                    prof.skills?.some(s => s.toLowerCase().includes(skill.toLowerCase()))
                )
            )
        }

        setFilteredProfessionals(filtered)
    }

    const allSkills = [...new Set(
        professionals.flatMap(prof => prof.skills || [])
    )]

    const handleSkillFilter = (skill) => {
        setFilters(prev => ({
            ...prev,
            skills: prev.skills.includes(skill) 
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }))
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
                    <p className="mt-6 text-gray-700 font-medium animate-pulse">Loading professionals...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with gradient text */}
                <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
                    <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Professional Portfolio Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover amazing professionals and their incredible work
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center px-8 py-4 mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                    >
                        Create Your Portfolio
                    </Link>
                </div>

                {/* Filters with glass effect */}
                <div className="backdrop-blur-md bg-white/80 rounded-3xl shadow-xl p-8 mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Role Filter */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-700">
                                Filter by Role
                            </label>
                            <input
                                type="text"
                                value={filters.role}
                                onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
                                placeholder="e.g., Developer, Designer"
                                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            />
                        </div>

                        {/* Skills Filter */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-700">
                                Filter by Skills
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {allSkills.slice(0, 10).map(skill => (
                                    <button
                                        key={skill}
                                        onClick={() => handleSkillFilter(skill)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                                            filters.skills.includes(skill)
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active Filters with animations */}
                    {(filters.role || filters.skills.length > 0) && (
                        <div className="mt-6 flex flex-wrap gap-3 animate-fadeIn">
                            {filters.role && (
                                <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm bg-blue-100 text-blue-800 transform hover:scale-105 transition-transform duration-300">
                                    Role: {filters.role}
                                    <button
                                        onClick={() => setFilters(prev => ({ ...prev, role: '' }))}
                                        className="ml-2 text-blue-600 hover:text-blue-800"
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            {filters.skills.map(skill => (
                                <span key={skill} className="inline-flex items-center px-4 py-2 rounded-xl text-sm bg-purple-100 text-purple-800 transform hover:scale-105 transition-transform duration-300">
                                    {skill}
                                    <button
                                        onClick={() => handleSkillFilter(skill)}
                                        className="ml-2 text-purple-600 hover:text-purple-800"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            <button
                                onClick={() => setFilters({ skills: [], role: '' })}
                                className="text-sm text-gray-600 hover:text-gray-800 underline transform hover:scale-105 transition-transform duration-300"
                            >
                                Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* Professionals Grid with animations */}
                {filteredProfessionals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                        {filteredProfessionals.map((professional, index) => (
                            <div key={professional.id} 
                                     className="transform hover:scale-105 transition-all duration-300"
                                     style={{ animationDelay: `${index * 100}ms` }}>
                                <ProfileCard professional={professional} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 backdrop-blur-md bg-white/80 rounded-3xl shadow-xl">
                        <div className="text-gray-400 text-7xl mb-6 animate-bounce">👥</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            No professionals found
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            {professionals.length === 0 
                                ? "No portfolios have been created yet. Be the first to create one!"
                                : "No professionals match your current filters."
                            }
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                        >
                            Create Your Portfolio
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfessionalsList