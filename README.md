E-shop
E-shop is a modern, full-stack e-commerce web application focused on clothing and fashion. Built with React for the frontend and Express/MongoDB backend, it provides user authentication, product management, and order history features.

Features
User registration and login with JWT authentication

Manage account details



Responsive design with a clean yellow-themed UI

Backend APIs built with Express and MongoDB

Password encryption with bcrypt

Secure file uploads via multer

Technologies & Dependencies
Frontend: React, React Router DOM

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JSON Web Tokens (JWT), bcryptjs

File Uploads: multer

Environment Management: dotenv

HTTP Requests: axios

Development: nodemon

Security: CORS enabled

Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/e-shop.git
cd e-shop
Install dependencies for both frontend and backend:

bash
Copy
Edit
npm install
Create a .env file in the root folder with environment variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the development server

bash
Copy
Edit
npm run dev
API Endpoints (examples)
POST /api/auth/register — Register a new user

POST /api/auth/login — Login user

GET /api/orders — Get user order history

PUT /api/account/manage — Update account info

DELETE /api/account/delete — Delete user account

Usage
Register a new account

Log in to access account management and order history

Manage your profile information

Browse and shop clothing items (to be implemented)

Folder Structure
bash
Copy
Edit
/backend
  /models
  /routes
  /controllers
/frontend
  /src
    /components
    /pages
    /styles
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

