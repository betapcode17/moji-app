🌟 Moji App — Fullstack Social Network with Real-Time Chat

Moji App is a modern social networking application where users can register, log in, and chat in real-time.
The project is built from scratch using a secure JWT authentication system, combining a React frontend with an Express backend.

This project demonstrates a fully functional fullstack architecture with smooth communication between client and server, focusing on security, performance, and user experience.

🚀 Project Overview

This project includes a complete JWT-based authentication flow, featuring:

User Registration

Login

Access Token + Refresh Token flow

Auto-refreshing tokens with Axios Interceptors

Secure HttpOnly cookies

Protected API routes and protected frontend routes

Real-time chat using Socket.io

🛠️ Technologies Used
🎨 Frontend
Technology	Purpose
React + Vite	Frontend UI
JavaScript / TypeScript	Main programming language
Zustand	Global state management
Axios + Interceptors	API requests + token handling
React Router DOM	Routing & protected routes
Socket.io Client	Real-time chat
TailwindCSS (optional)	Fast and modern styling
⚙️ Backend
Technology	Purpose
Node.js + Express.js	REST API
JWT (JSON Web Token)	Authentication
bcrypt	Password hashing
HttpOnly / Secure Cookies	Refresh token storage
MongoDB + Mongoose	Database (optional setup)
Socket.io	Real-time communication
dotenv, CORS, middleware	Security & configuration
🔐 Authentication System Overview

Moji App uses a secure, industry-standard authentication workflow:

✔️ Access Token

Short-lived

Sent through the Authorization header

✔️ Refresh Token

Stored in HttpOnly cookies

Automatically used by Axios Interceptors to refresh the access token

Protected against XSS attacks

✔️ Protected Routes

Backend routes require valid access tokens

Frontend redirects unauthorized users

💬 Real-Time Chat Features

Built using Socket.io, the chat system supports:

Real-time message sending and receiving

“User online/offline” detection

Live conversation updates
