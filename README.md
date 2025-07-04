# 🌍 WanderLust - Airbnb Clone

WanderLust is a full-stack web application inspired by Airbnb. It allows users to create, view, edit, and delete travel accommodation listings. Built using Node.js, Express.js, MongoDB, EJS, and deployed with Render, it follows the MVC architecture and includes cloud image storage via Cloudinary and interactive maps via Mapbox.

---

## 🚀 Features

- 🔐 User Authentication & Authorization
- 🏕️ Full CRUD functionality for listings
- 📝 User Reviews & Ratings
- 📷 Image uploads using Cloudinary
- 🗺️ Interactive maps with Mapbox
- 💾 MongoDB Atlas for cloud database
- 💡 EJS Templating with partials and layout inheritance
- 🎨 Responsive UI with Bootstrap
- 🗂️ Clean MVC project structure
- 🌐 Deployed using Render

---

## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML, CSS, JavaScript, Bootstrap
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** express-session, connect-flash
- **File Upload:** Multer, Cloudinary
- **Maps:** Mapbox GL JS
- **Deployment:** Render

---

## 📂 Project Structure

```
wanderlust/
├── models/             # Mongoose Schemas
├── routes/             # Express route handlers
├── controllers/        # Logic for each route (MVC)
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS)
├── utils/              # Middleware and helpers
├── app.js              # Main app entry point
└── package.json        # Dependencies
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YashKotra/WanderLust.git
cd WanderLust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

DB_URL=your_mongodb_atlas_connection_string
SESSION_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
```

### 4. Start the application

```bash
node app.js
```

The app will run on `http://localhost:3000`

---

## 🌐 Live Demo

🔗 [Deployed on Render]
https://wanderlust-zmn3.onrender.com/listings

---

## 🧑 Author

**Yash Kotra**  
🔗 GitHub: [@YashKotra](https://github.com/YashKotra)

---
