# Express PostgreSQL CRUD API

This is a simple Express.js REST API connected to PostgreSQL. It supports full CRUD operations on a `users` table.

## Setup Instructions

1. Clone the repository and run:

```bash
npm install
```

2. Create a `.env` file with the following:

```
DATABASE_URL=your_postgres_connection_string
PORT=3000
```

3. Create the users table in PostgreSQL:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

4. Run the server:

```bash
npm run dev
```

## API Endpoints

- `GET /users`: Fetch all users
- `GET /users/:id`: Get a user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update a user
- `DELETE /users/:id`: Delete a user

## Error Handling

- 404 for routes not found
- 500 for internal server errors
- 400 for missing inputs

## To-Do

- Add reconnection logic in `db.js`
- Use more robust validation middleware like `Joi`
