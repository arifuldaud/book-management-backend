# 📚 Book Management System – Backend

A RESTful API for managing books and library operations, built with **Node.js, Express.js, TypeScript, and PostgreSQL**.

## 🚀 Project Overview

The Book Management System is a backend application designed to manage library resources efficiently. It provides an API structure for managing books, users, authentication, and library operations.

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT Authentication
- bcryptjs
- dotenv
- tsx

## 📁 Project Structure

```text
Book/
├── src/
│   ├── config/
│   ├── db/
│   ├── modules/
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to Project Directory

```bash
cd book-management-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_secret_key
```

### 5. Run Development Server

```bash
npm run dev
```

## 📡 API Features

Planned and developing features:

- Book Management (CRUD)
- User Management
- User Registration & Login
- JWT Authentication
- Password Hashing
- Library Book Borrowing
- Book Return Management

## 📖 API Endpoints

Planned Book API routes:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/books` | Create a book |
| GET | `/api/v1/books` | Get all books |
| GET | `/api/v1/books/:id` | Get a single book |
| PUT | `/api/v1/books/:id` | Update a book |
| DELETE | `/api/v1/books/:id` | Delete a book |

## 🔐 Security

- JWT-based authentication
- Password hashing with bcryptjs
- Environment variable configuration
- Protected API routes

## 🧑‍💻 Development Scripts

```bash
npm run dev
npm run build
npm start
```

## 📌 Project Status

🚧 **Work in Progress**

This project is currently under development. More features and API endpoints will be added gradually.

## 👨‍💻 Author

**DaudBD**

GitHub: [DaudBD](https://github.com/DaudBD)

---

⭐ If you find this project useful, consider giving it a star!