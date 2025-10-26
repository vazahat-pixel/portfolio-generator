import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TemplateA from '../components/templates/TemplateA'
import TemplateB from '../components/templates/TemplateB'
import { portfolioAPI } from './api'

const PortfolioPage = () => {
  const { id } = useParams()
  const [portfolio, setPortfolio] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPortfolio()
  }, [id])

  const fetchPortfolio = async () => {
    try {
      const data = await portfolioAPI.getPortfolioById(id)
      console.log('Fetched portfolio data:', data) // Debug log
      setPortfolio(data)
    } catch (error) {
      console.error('Error fetching portfolio:', error)
      setError('Portfolio not found')
    } finally {
      setLoading(false)
    }
  }

  const renderTemplate = () => {
    if (!portfolio) return null

    console.log('Rendering template with data:', portfolio) // Debug log

    switch (portfolio.templateId) {
      case 1:
        return <TemplateA data={portfolio} />
      case 2:
        return <TemplateB data={portfolio} />
      default:
        return <TemplateA data={portfolio} />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  if (error || !portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Not Found</h1>
          <p className="text-gray-600 mb-6">
            The portfolio you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/professionals"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Portfolios
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio-page">
      {renderTemplate()}
    </div>
  )
}

export default PortfolioPage