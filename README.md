# Patient Registration System

This project is a React-based patient registration system designed to manage patient information securely. It leverages Supabase for backend services, including authentication and database operations. The system is built with modern web development tools and follows best practices to ensure a robust and maintainable codebase.


## Features

User Authentication: Allows users to sign up and log in securely.
Patient Registration and Management: Users can register new patients, update existing patient information, and manage patient records.
Form Validation: Ensures that all required fields are filled out correctly.
Responsive Design: Utilizes Tailwind CSS to ensure the application is responsive and works well on various devices.
Toast Notifications: Provides feedback to users with success and error messages using React Hot Toast.


## Setup and Usage
### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Supabase Account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/<your-username>/patient-registration.git
    cd patient-registration
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your-supabase-url
    VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

### Deployment

To deploy the project to GitHub Pages:

1. Build the project:
    ```bash
    npm run build
    ```

2. Deploy to GitHub Pages:
    ```bash
    npm run deploy
    ```

3. Enable GitHub Pages in your repository settings, selecting the `gh-pages` branch as the source.

## Sample Test Data

You can use the following sample data to test the functionality:

```json
{
  "full_name": "John Doe",
  "date_of_birth": "1990-01-01",
  "gender": "male",
  "contact_number": "1234567890",
  "email": "john.doe@example.com",
  "medical_history": "No significant medical history.",
  "allergies": "None",
  "current_medications": "None",
  "address_line1": "123 Main St",
  "address_line2": "Apt 4B",
  "city": "Anytown",
  "state": "Anystate",
  "zip_code": "12345",
  "consent_given": true
}

##Technologies Used
React: For building the user interface.
Supabase: For backend services including authentication and database operations.
Tailwind CSS: For styling the components.
React Hot Toast: For displaying toast notifications.
Vite: For fast development and build tooling.
TypeScript: For type checking and improved developer experience.


##Future Enhancements
Implement role-based access control to restrict access to certain features based on user roles.
Add more detailed patient records and history.
Integrate with external APIs for additional functionalities.
Improve form validation and error handling.
Enhance the UI/UX with more interactive elements.
