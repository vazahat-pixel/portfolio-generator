import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroForm from '../MultiStepForm/HeroForm'
import AboutForm from '../MultiStepForm/AboutForm'
import SkillsForm from '../MultiStepForm/SkillsForm'
import ServicesForm from '../MultiStepForm/ServicesForm'
import ProjectsForm from '../MultiStepForm/ProjectsForm'
import TestimonialsForm from '../MultiStepForm/TestimonialsForm'
import BlogForm from '../MultiStepForm/BlogForm'
import ContactForm from '../MultiStepForm/ContactForm'
import Review from '../MultiStepForm/Review'
import { portfolioAPI } from '../../pages/api'

const PortfolioForm = ({ selectedTemplate, setPortfolioData }) => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        // Hero Section
        name: '',
        title: '',
        tagline: '',
        profileImage: '',
        
        // About Section
        bio: '',
        email: '',
        phone: '',
        location: '',
        socials: {
            linkedin: '',
            github: '',
            twitter: ''
        },
        
        // Skills
        skills: [],
        
        // Services
        services: [
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' }
        ],
        
        // Projects
        projects: [
            { title: '', image: '', description: '' },
            { title: '', image: '', description: '' },
            { title: '', image: '', description: '' }
        ],
        
        // Testimonials
        testimonials: [
            { quote: '', author: '' }
        ],
        
        // Blog
        blog: {
            title: '',
            summary: ''
        },
        
        // Contact
        contact: {
            message: '',
            email: '',
            phone: ''
        }
    })

    const steps = [
        { title: 'Hero', component: HeroForm },
        { title: 'About', component: AboutForm },
        { title: 'Skills', component: SkillsForm },
        { title: 'Services', component: ServicesForm },
        { title: 'Projects', component: ProjectsForm },
        { title: 'Testimonials', component: TestimonialsForm },
        { title: 'Blog', component: BlogForm },
        { title: 'Contact', component: ContactForm },
        { title: 'Review', component: Review }
    ]

    const updateFormData = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }))
    }

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = async () => {
        try {
            const portfolioData = {
                ...formData,
                templateId: selectedTemplate.id,
                createdAt: new Date().toISOString(),
            }
            
            const response = await portfolioAPI.createPortfolio(portfolioData)
            setPortfolioData(prev => [...prev, response])
            navigate('/professionals')
        } catch (error) {
            console.error('Error creating portfolio:', error)
            alert('Error creating portfolio. Please try again.')
        }
    }

    const CurrentStepComponent = steps[currentStep].component

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className={`text-sm font-medium transition-transform duration-300 ${
                                    index <= currentStep ? 'text-white' : 'text-gray-200'
                                }`}
                            >
                                {step.title}
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                            className="bg-white h-2 rounded-full transition-all duration-300"
                            style={{
                                width: `${((currentStep + 1) / steps.length) * 100}%`
                            }}
                        ></div>
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-transform transform hover:scale-105 duration-300">
                    <CurrentStepComponent
                        data={formData}
                        updateData={updateFormData}
                    />

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 0}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                                currentStep === 0
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            Previous
                        </button>

                        {currentStep < steps.length - 1 ? (
                            <button
                                onClick={nextStep}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-transform duration-300 transform hover:scale-105"
                            >
                                Create Portfolio
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioForm