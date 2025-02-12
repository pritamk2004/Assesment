# **WaysAhead Global - Official Project Documentation**

## **📌 Overview**
WaysAhead Global is a full-stack AI-powered platform offering job listings, chatbot assistance, AI-driven analytics, and interactive services. This project is built using **React.js**, **Node.js (Express.js)**, **MongoDB**, and **Material UI**.

## **🔧 Tech Stack**
- **Frontend:** React.js, Material UI, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** Context API
- **Authentication:** JWT-based authentication
- **Deployment:** Netlify (Frontend), Render (Backend), MongoDB Atlas (Database)

---

## **📂 Project Structure**
```
waysahead-global/
│── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # Authentication Context
│   │   ├── pages/           # Individual pages
│   │   ├── App.js           # Main Application
│   │   ├── theme.js         # Theme Settings
│── backend/                 # Node.js Backend
│   ├── models/              # MongoDB Models
│   ├── routes/              # API Routes
│   ├── controllers/         # Business Logic
│   ├── server.js            # Main Server File
│── README.md                # Documentation
```

---

## **💻 Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/waysahead-global.git
cd waysahead-global
```

### **2️⃣ Setup Backend**
```bash
cd backend
npm install
```
- Create a `.env` file and add:
```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```
- Start the backend:
```bash
npm start
```

### **3️⃣ Setup Frontend**
```bash
cd frontend
npm install
```
- Start the frontend:
```bash
npm start
```

---

## **🚀 Deployment**
### **1️⃣ Deploy Frontend to Netlify**
```bash
cd frontend
npm run build
netlify deploy --prod
```
- Ensure Netlify CLI is installed: `npm install -g netlify-cli`
- Login to Netlify: `netlify login`
- Link your project: `netlify init`

### **2️⃣ Deploy Backend to Render**
- Push backend code to GitHub:
```bash
cd backend
git init
git add .
git commit -m "Deploy backend"
git push origin main
```
- Go to **Render.com** and create a new Web Service.
- Connect your GitHub repo and deploy.

### **3️⃣ Use MongoDB Atlas**
- Create a MongoDB Atlas cluster.
- Update `.env` with MongoDB URI.

---

## **📖 Additional Notes**
- **Testing:** Jest for backend testing.
- **Docker Support:** Available for easy deployment.
- **Future Enhancements:** AI-powered recommendations & analytics.

📩 **Need Help?** Contact kundupritam608@gmail.com

---

🚀 **Project Ready for Production!**

