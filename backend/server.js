const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001; // Render uses its own port mapping

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN, // Set this in Render to your Vercel URL
};

app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.post("/api/greet", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({ message: `Hello, ${name}! Greetings from the backend.` });
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
