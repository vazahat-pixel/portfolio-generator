import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TemplateSelection from '../components/templates/TemplateSelection'
import PortfolioForm from '../components/Portfolio_form/PortfolioForm'
import ProfessionalsList from './ProfessionalsList'
import PortfolioPage from './PortfolioPage'

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [portfolioData, setPortfolioData] = useState([])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route 
            path="/" 
            element={
              <TemplateSelection 
                onTemplateSelect={setSelectedTemplate} 
              />
            } 
          />
          <Route 
            path="/form" 
            element={
              <PortfolioForm 
                selectedTemplate={selectedTemplate}
                setPortfolioData={setPortfolioData}
              />
            } 
          />
          <Route 
            path="/professionals" 
            element={
              <ProfessionalsList 
                portfolioData={portfolioData}
                setPortfolioData={setPortfolioData}
              />
            } 
          />
          <Route 
            path="/portfolio/:id" 
            element={<PortfolioPage />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App