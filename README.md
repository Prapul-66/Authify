# 🔐 MERN Authentication System

A full-stack authentication system built using the MERN stack (MongoDB, Express, React, Node.js).

This project includes:

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Responsive Frontend UI
- ✅ Secure Password Hashing (bcrypt)

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv

### Frontend
- React.js
- React Router DOM
- Axios
- Responsive CSS

---

## 📂 Project Structure

Auth/
│
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
├── components/
└── App.js


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/Prapul-66/Auth.git

cd Auth


---

### 2️⃣ Backend Setup

cd backend
npm install


Create a `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

### 3️⃣ Frontend Setup

cd frontend
npm install
npm start


---

## 🔐 Authentication Flow

1. User registers → Password hashed using bcrypt
2. User logs in → JWT token generated
3. Token stored in localStorage
4. Protected routes verify token using middleware
5. Access granted if token is valid

---

## 📸 Features

- Secure password hashing
- JWT-based authentication
- Protected API routes
- Clean responsive UI
- Axios API integration

---

## 🌍 Future Improvements

- Add Logout functionality
- Add Refresh Tokens
- Add User Roles (Admin/User)
- Deploy to Render & Vercel

---

## 👨‍💻 Author

**Prapul**

GitHub: https://github.com/Prapul-66

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!


