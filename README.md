# 🛍️ E-Shop (Backend)

**E-Shop** is a backend service for an e-commerce platform focused on selling clothing. It is built using **Node.js**, **Express**, **MongoDB**, and uses **JWT** for user authentication. This backend provides APIs for user registration, login, product handling, image uploads, and order management.

---

## ✨ Features

- User authentication (JWT-based)
- Secure password storage with Bcrypt
- RESTful API for managing:
  - Users
  - Products
  - Orders
- Image uploading using Multer
- Cross-Origin Resource Sharing (CORS) enabled
- Environment variable management with dotenv

---


---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Uploads**: Multer
- **Security**: Bcrypt
- **Development**: Nodemon

---

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prashant-8008/server.git
   cd server

2.**Install dependencies:**

 bash
  -npm install

  
**Set up .env file:**

Create a .env file in the root directory and add:


PORT=5000
MONGO_URI=mongodb://localhost:27017/eshop
JWT_SECRET=your_jwt_secret_key
Run the server:

**Development mode:**

bash

npm run dev


**Production mode:**

bash

npm start

🚀 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register - 	Register a user
POST	/api/auth/login	  -Login user
GET	/api/products	  -Get all products
POST	/api/products -	Create new product
GET	/api/orders	  -Get user orders

Full API documentation coming soon...

📦 Dependencies
=> axios – Promise-based HTTP client

=> bcryptjs – Password hashing

=> cors – CORS middleware

=> dotenv – Environment variable loader

=> express – Node.js web framework

=> jsonwebtoken – JWT token management

=> mongoose – MongoDB ODM

=> multer – File upload middleware

Dev Dependency:

=> nodemon – Auto-restarts server on changes

📌 Notes
Ensure MongoDB is running locally or use MongoDB Atlas.

Image uploads are stored in /uploads directory. Make sure this folder is writable.

Don’t forget to set a strong JWT_SECRET in production.

🤝 Contributing
Feel free to fork this repo and submit pull requests. If you find bugs or have suggestions, please open an issue.
