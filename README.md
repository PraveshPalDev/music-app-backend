# 🎵 Music App Backend (Node.js + Express)

This is the backend service for the Music App built with **Node.js**, **Express**, and **ES Modules**. It provides a RESTful API structure, with clean project architecture, proper error and success handling, and environment-based configuration.

---

## 🚀 Features

- ✅ Express + ES Module support
- ✅ MVC Folder Structure
- ✅ Global Error & Success Response Handlers
- ✅ Environment-based config using `.env`
- ✅ Routes Versioning (`/api/v1`)
- ✅ SQLite / MongoDB / PostgreSQL Ready (you can plug in any)
- ✅ Middlewares support

---

## 📁 Project Structure

backend/
├── src/
│ ├── config/ # Environment configuration
│ │ └── config.js
│ ├── controllers/ # Route handlers
│ │ └── user.controller.js
│ ├── middlewares/ # Error/Success middlewares
│ │ ├── error.middleware.js
│ │ └── success.middleware.js
│ ├── routes/ # Route definitions
│ │ ├── index.js
│ │ └── user.routes.js
│ ├── utils/ # Common utilities
│ │ ├── apiErrorHandler.js
│ │ └── apiResponseHandler.js
│ └── app.js # Express App setup
├── .env # Environment variables
├── package.json
└── server.js # Server entry point

## 📦 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/PraveshPalDev/backend_initial_template
cd backend_initial_template/backend
```

### 2. Install node modules

npm install

### 3. Create a .env file in the root:

PORT=8000
DATABASE_URL=mongodb://localhost:27017/music-app
JWT_SECRET=your_jwt_secret

### 4. Run the Server

cd src/nodemon.server.js

### 5. Run the Server

http://localhost:8000/api

### 5. ✅ Response Format

{
"statusCode": 200,
"data": [...],
"message": "Users fetched successfully",
"success": true
}

### 5. ✅ Error Format

{
"statusCode": 404,
"message": "No users found",
"errors": [],
"success": false,
"data": null
}

### 5. ✅ ✨ Author

Pravesh Kumar Pal

### 6. ✅ ✨ This project is licensed under the MIT License.

Let me know if you'd like to include DB setup, JWT authentication, or Swagger API docs too.
