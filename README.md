# 📋 Nebs-IT MERN Full-Stack Assessment

A fully responsive **Notice Board System** developed as a practical assessment for Nebs-IT Solution Ltd. This application allows HR and admin staff to seamlessly create, manage, and publish notices to specific departments or individual employees.

## 🚀 Live Demonstration

- **Frontend (Live UI):** https://nebs-assessment.vercel.app/
- **Backend (API):** https://nebs-assessment-1.onrender.com
> **Note:** To see the raw API data directly, you can visit: [https://nebs-assessment-1.onrender.com/api/notices](https://nebs-assessment-1.onrender.com/api/notices)
---

## ✨ Key Features

- **Responsive UI:** Pixel-perfect implementation of the provided Figma design using Tailwind CSS.
- **Notice Management:** View a paginated list of notices with filtering capabilities.
- **Create Notice:** A comprehensive form with validation to publish new notices.
- **Real-time Feedback:** Success modals and validation error handling.
- **Status Toggling:** Instantly toggle notices between "Published" and "Unpublished" states.
- **Database Persistence:** All data is securely stored in MongoDB.
- **Dockerized:** Fully containerized application for easy setup and deployment.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **HTTP Client:** Native Fetch API
- **State Management:** React Hooks (`useState`, `useEffect`)

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **CORS:** Cross-Origin Resource Sharing enabled

### **DevOps & Tools**
- **Containerization:** Docker & Docker Compose
- **Proxy:** Vite Proxy (configured for local development)

---

## 📂 Project Structure

```bash
nebs-assessment/
├── backend/                 # Express API Logic
│   ├── models/              # Mongoose Schemas (Notice.js)
│   ├── server.js            # Server Entry Point & Routes
│   ├── Dockerfile           # Backend Image Configuration
│   └── package.json         # Backend Dependencies
├── frontend/                # React UI Logic
│   ├── src/
│   │   ├── assets/          # Images (Logo.png, Profile.png)
│   │   └── App.jsx          # Main Application Component
│   ├── public/              # Static Assets
│   ├── Dockerfile           # Frontend Image Configuration
│   └── vite.config.js       # Proxy & Build Configuration
└── docker-compose.yml       # Orchestration for DB, Backend, Frontend
```
---
## 🔐 Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env` files.

**1. Backend Configuration**

Create a file named `.env` inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/nebs-db
# Note: If using MongoDB Atlas, replace the URI with your connection string.
```
**2. Frontend Configuration**

Create a file named `.env` inside the `Fronntend/` folder:
```
VITE_API_URL=http://localhost:5000/api
# Note: For production deployment, update this to your live backend URL (e.g., [https://nebs-assessment-1.onrender.com/api])
```

---

## ⚙️ Installation & Setup

### Option 1: Using Docker (Recommended)

This method automatically sets up the Database, Backend, and Frontend in isolated containers.

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-link>
    cd nebs-assessment
    ```

2.  **Run the application:**

    ```bash
    docker-compose up --build
    ```

3.  **Access the App:**

      - **Frontend:** `http://localhost:5173`
      - **Backend API:** `http://localhost:5000`
      - **Database:** Running internally on port `27017`

### Option 2: Manual Setup

If you do not have Docker installed, follow these steps to run the services individually:

**1. Backend Setup**

Navigate to the backend folder, install dependencies, and start the server.

```bash
cd backend
npm install
npm start
```
**2. Frontend Setup**

Open a new terminal window, navigate to the frontend folder, and start the client.

```bash
cd frontend
npm install
npm run dev
```
