# 🏡 RateHaven Backend – Property Rental Platform API

This is the backend service for **RateHaven**, a full-stack property rental platform. It provides RESTful APIs for user authentication, property management, and booking operations.

## 🔗 Frontend Repo
➡️ [FP-0510-02-FE (Frontend)](https://github.com/mishbahulmunir96/FP-0510-02-FE)

---

## 🚀 Features

- ✅ RESTful API using Express.js
- 🔐 User registration and login (JWT Auth)
- 🏘️ CRUD operations for properties
- 📅 Booking/reservation system
- 🧾 Middleware for route protection
- 🛡️ Input validation with Express-validator
- 🗄️ PostgreSQL + Prisma ORM
- 🌐 CORS, dotenv, and error handling

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **JWT (JSON Web Token)**
- **Express-validator** (Validation)
- **Dotenv**, **Cors**, etc.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mishbahulmunir96/FP-0510-02-BE.git
cd FP-0510-02-BE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and fill it based on `.env.example`, for example:

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/ratehaven
JWT_SECRET=your_jwt_secret_key
```

### 4. Set up and migrate the database

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the development server

```bash
npm run dev
```

Server will run at: `http://localhost:8000`


## 🧑‍💻 Developer

**Mishbahul Munir**  
💼 Fullstack Web Developer  
🔗 [LinkedIn](https://linkedin.com/in/mishbahulmunir)  
🌐 [Portfolio](https://ratehaven.my.id)  
🐙 [GitHub](https://github.com/mishbahulmunir96)

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
