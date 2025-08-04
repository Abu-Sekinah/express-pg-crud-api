require("dotenv").config();
const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/users", usersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
