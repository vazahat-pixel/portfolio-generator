Portfolio Generator
A React-based portfolio generator that allows users to create professional portfolio websites by selecting templates and filling out multi-step forms.

✨ Features
- 2 Professional Templates: Modern Minimal & Creative Bold designs
- 8-Step Form: Comprehensive data collection
- Profile Gallery: Browse all created portfolios
- Advanced Filtering: Filter by skills and roles
- Responsive Design: Works on all devices
- Dynamic Portfolio Pages: Fully functional websites

🛠️ Tech Stack
- Frontend: React, React Router, React Hook Form
- Styling: Tailwind CSS
- Backend: JSON Server
- Icons: Lucide React

🚀 Quick Start
- Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

Installation
Clone the repository

bash
- git clone https://github.com/vazahat-pixel/portfolio-generator
- cd portfolio-generator
  
Install dependencies
- npm install
- Start backend server (Terminal 1)
- npx json-server --watch db.json --port 3001
- Start development server (Terminal 2)

bash
- npm run dev
- Open your browser
- Navigate to http://localhost:5173

📖 How to Use
- Select Template - Choose from 2 available designs
- Fill Form - Complete 8-step form with your information
- Create Portfolio - Submit to generate your portfolio
- View Gallery - Browse all created portfolios
- View Portfolio - Click to see complete website

🎨 Templates
- Template A - Modern Minimal
- Clean, professional design
- Blue and purple gradient theme
- Template B - Creative Bold
- Vibrant, creative design

Orange and pink gradient theme

📁 Project Structure
text
src/
├── components/
│   ├── MultiStepForm/     # All form step components
│   ├── Portfolio_form/    # Main form container
│   ├── templates/         # Portfolio templates
│   └── common/            # Reusable components
├── pages/                 # Main application pages
└── services/              # API service functions


🔧 API Endpoints
GET /portfolios - Get all portfolios
GET /portfolios/:id - Get portfolio by ID
POST /portfolios - Create new portfolio
PUT /portfolios/:id - Update portfolio
DELETE /portfolios/:id - Delete portfolio

🤝 Contributing
Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📞 Contact
Vazahat Qureshi - wazahatqureshi4@gmail.com
Project Link: https://github.com/vazahat-pixel/portfolio-generator

