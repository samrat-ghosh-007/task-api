# 🛠️ Backend – Points Claim System

This is the backend API for the Points Claim System task, built with Node.js, Express, and MongoDB. It provides endpoints for random user selection, points claiming, leaderboard, and user claim history.

---

## 🔗 Live API URL

- 🌐 [https://task-api-0c09.onrender.com](https://task-api-0co9.onrender.com)

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS

---

## 📦 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/samrat-ghosh-007/task-api.git
cd task-api
```

### 2.  Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root directory and add the following variables:
```bash
MONGO_URI=your_mongodb_uri
```

### 4. Start the Server
```bash
node server.js
```

The backend will start at: http://localhost:5000

## 🧪 API Endpoints

| Method | Endpoint                   | Description                        |
|--------|----------------------------|------------------------------------|
| GET    | `/api/users/random`        | Returns random users               |
| GET    | `/api/users/leaderboard`   | Gets the points leaderboard        |
| GET	   | `/api/users`               |	Get all users                      |
| POST   | `/api/claim`               | Claims points for a user           |
| POST   | `/api/users`               | Adds new user                      |

## 🌐 CORS Configuration

The backend uses dynamic CORS to control which origins (frontends) can access the API.

### ✅ Allowed Origins

Based on the `NODE_ENV`, the following origins are allowed:

- In **development** (`NODE_ENV=development`):
  - `http://localhost:3000` &nbsp;🧑‍💻 (React local dev server)

- In **production** (`NODE_ENV=production`):
  - `https://task-frontend-azure.vercel.app`
  - `https://task-frontend-hf2ww8tpm-samrat-ghoshs-projects-350a7834.vercel.app`

### ⚙️ How It Works

The CORS middleware checks the `origin` of each request:

```js
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      'https://task-frontend-azure.vercel.app',
      'https://task-frontend-hf2ww8tpm-samrat-ghoshs-projects-350a7834.vercel.app'
    ]
  : ['http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: false
};

app.options('*', cors());
```

## 🧾 License

This project is submitted as part of a technical internship task.  
Developed by **Samrat Ghosh**.




