🔑 JWT Decoder
A simple and powerful web application that decodes JSON Web Tokens (JWTs) without verification. Easily enter a JWT and view its decoded payload and header in a user-friendly format.

📌 Features
✅ Decode JWT tokens without verification
✅ Simple and intuitive UI for entering and viewing JWT data
✅ Backend API to handle JWT decoding
✅ No need for manual token creation—works with tokens from jwt.io


🏗 Tech Stack
🔹 Frontend (React + Vite)
⚡ React.js (Vite setup) – Fast UI rendering
📡 Axios – API requests handling
🎨 Basic CSS (No Tailwind CSS) – Clean UI

🔸 Backend (Node.js + Express)
🚀 Express.js – Backend framework
🔑 jsonwebtoken – JWT decoding
📩 body-parser – Handles JSON requests
🔓 CORS – Enables cross-origin requests

🚀 Project Setup
📂 1️⃣ Backend Setup
# Navigate to the backend folder
cd backend  

# Install dependencies
npm install  

# Start backend server
node index.js  


🌐 2️⃣ Frontend Setup
# Navigate to the frontend folder
cd frontend  

# Install dependencies
npm install  

# Start frontend server
npm run dev  

⚙️ How It Works
1️⃣ User copies a JWT token from jwt.io
2️⃣ Pastes the token into the frontend input field
3️⃣ Frontend sends the token to the backend (/decode API)
4️⃣ Backend decodes the JWT without verification
5️⃣ Decoded data is displayed beautifully in the frontend


![Alt Text](C:\Users\pgole\Documents\GitHub\JWT-Decoder\Screenshot 2025-02-19 024331.png)
