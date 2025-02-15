Simple Patient Registration System
This is a simple patient registration system built with React (Vite + TypeScript) and Supabase for authentication and data storage. The system allows users to register, log in, and access a dashboard to manage patient records.
Features
User Authentication (Signup and Login)
Dashboard for managing patient records
Responsive design with Tailwind CSS
Hosted on GitHub Pages
Tech Stack
Frontend: React, Vite, TypeScript, Tailwind CSS
Backend: Supabase (for authentication and database)
Deployment: GitHub Pages
Installation and Setup
Prerequisites
Node.js and npm installed on your machine
Supabase account for backend setup
Clone the Repository
bash
Copy
Edit
git clone https://github.com/foomz/patient-registration.git
cd patient-registration
Install Dependencies
bash
Copy
Edit
npm install
Environment Variables
Create a .env file in the root directory and add your Supabase configuration:
ini
Copy
Edit
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Run the Application Locally
bash
Copy
Edit
npm run dev
Open your browser and go to http://localhost:5173.
Build and Deploy
To build and deploy the application to GitHub Pages:
bash
Copy
Edit
npm run build
npm run deploy
Usage
Navigate to /signup to create a new account.
Navigate to /login to access your dashboard.
The dashboard allows you to manage patient records easily.
Sample Test Data
To test the system, use the following:
Test Email: test@example.com
Test Password: password123
Project Structure
css
Copy
Edit
src/
├── components/
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── Signup.tsx
├── App.tsx
└── main.tsx
Coding Best Practices
Clean and maintainable code with TypeScript
Organized folder structure for scalability
Consistent use of React hooks and state management
Written Assessment
1. Approach to Implementing Features
I began by setting up the React application using Vite for a faster development experience. I used React Router for navigation and integrated Supabase for authentication and database management. Tailwind CSS was chosen for a responsive UI design.
2. Challenges Encountered and Solutions
One challenge was deploying the app to GitHub Pages. The routing issue was resolved by switching from BrowserRouter to HashRouter. Another challenge was configuring environment variables securely, which was addressed using .env files.
3. Frameworks, Tools, and Technologies
Vite for fast development and optimized builds
React Router for navigation
Supabase for backend services (authentication and database)
Tailwind CSS for responsive UI design
4. Data Privacy and Compliance
User authentication data is securely managed using Supabase, which complies with modern security standards. Environment variables are used to protect sensitive information.
5. Future Enhancements
Adding more robust form validations for better user experience.
Implementing role-based access control for enhanced security.
Integrating data analytics for patient records.
Improving UI/UX design with animations and advanced styling.
