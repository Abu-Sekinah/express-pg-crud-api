# Express + PostgreSQL CRUD API

## 📦 Description
A minimal RESTful API using Express.js and PostgreSQL that supports CRUD operations on a `users` table.

## 🛠 Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create `.env` File
```env
DATABASE_URL=postgresql://username:password@localhost:5432/your_database
PORT=3000
```

### 3. Setup PostgreSQL Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

### 4. Start the Server
```bash
npm run dev
```

## 📡 API Endpoints

### POST /users
Creates a new user.
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### GET /users
Returns all users.

### GET /users/:id
Returns a single user by ID.

### PUT /users/:id
Updates a user by ID.

### DELETE /users/:id
Deletes a user by ID.

## 🧪 Error Handling
- Missing fields return 400.
- SQL/database issues return 500.
- Not found returns 404.

## 🧹 To-Do
- Add input validation with a library like `joi`.
- Implement database reconnection logic.
