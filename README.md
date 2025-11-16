# 🌟 Moji App — Modern Fullstack Social Network with Real-Time Chat

> **Instant messaging • Rock-solid security • Stunning UI**

Moji is a sleek, high-performance social networking app built from scratch, featuring secure JWT authentication and buttery-smooth real-time chat powered by Socket.IO.

*Real-time chat • Secure JWT + HttpOnly Cookies • Modern design*

---

### ✨ Key Features

| Feature                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| 🔐 Secure JWT Auth         | Short-lived Access Token + automatic silent refresh                        |
| 🍪 HttpOnly + Secure Cookies | Refresh tokens stored in cookies (fully XSS-proof)                       |
| ⚡ Real-Time Chat          | Socket.IO-powered instant messaging with typing indicators                 |
| 🟢 Online/Offline Status   | Live user presence detection                                               |
| 🛡️ Protected Routes        | Fully secured on both frontend and backend                                 |
| 🚀 Lightning Fast          | Built with Vite + React → sub-second load times                            |
| 🎨 Beautiful Modern UI     | Clean, responsive, mobile-first, Dark Mode ready                          |
| 💬 Smooth Messaging        | Seen status, message grouping, scroll-to-bottom, and more                 |

---

### 🛠️ Tech Stack

#### Frontend
| Technology            | Purpose                               |
|-----------------------|---------------------------------------|
| React + Vite          | Blazing-fast builds & HMR             |
| TypeScript            | Type safety & great developer experience |
| Zustand               | Lightweight & performant state management |
| Axios + Interceptors  | Automatic access token refresh        |
| React Router v6       | Protected routes & smooth navigation  |
| Socket.IO Client      | Real-time bidirectional communication |
| TailwindCSS           | Rapid, beautiful styling              |

#### Backend
| Technology               | Purpose                               |
|--------------------------|---------------------------------------|
| Node.js + Express        | Robust and scalable REST API          |
| JWT + Refresh Tokens     | Stateless authentication              |
| bcrypt                   | Secure password hashing               |
| HttpOnly/Secure Cookies  | Safe refresh token storage            |
| MongoDB + Mongoose       | Flexible NoSQL database               |
| Socket.IO                | Real-time engine                      |
| CORS + Middleware        | Security & request handling           |

---

### 📸 Screenshots

<div align="center">

**Login**  
<img src="https://github.com/user-attachments/assets/3c2bdeb5-b958-4148-bfc0-f36c4f24d1cf" alt="Login Screen" />

**Register**  
<img src="https://github.com/user-attachments/assets/d22b399f-9a40-4ec5-8214-72e9d34c6ef4" alt="Register Screen" />

**Home & Chat Interface**  
<img src="https://github.com/user-attachments/assets/64157e05-10be-4998-8747-eeac71e3532d" alt="Home and Chat" />

</div>

---

### 🚀 Quick Start (Ready in 2 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/moji-app.git
cd moji-app

# Backend
cd backend
cp .env.example .env
npm install
npm run dev

# Frontend (open a new terminal)
cd ../frontend
cp .env.example .env
npm install
npm run dev
