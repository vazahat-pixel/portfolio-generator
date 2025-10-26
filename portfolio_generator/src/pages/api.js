const API_BASE_URL = 'http://localhost:3001'

export const portfolioAPI = {
  // Create new portfolio
  createPortfolio: async (data) => {
    const response = await fetch(`${API_BASE_URL}/portfolios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  },

  // Get all portfolios
  getAllPortfolios: async () => {
    const response = await fetch(`${API_BASE_URL}/portfolios`)
    return await response.json()
  },

  // Get portfolio by ID
  getPortfolioById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`)
    return await response.json()
  },

  // Update portfolio
  updatePortfolio: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  },

  // Delete portfolio
  deletePortfolio: async (id) => {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
      method: 'DELETE',
    })
    return await response.json()
  },
}