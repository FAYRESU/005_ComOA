// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// POST endpoint
app.post("/api/greet", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.json({ message: `สวัสดีคุณ ${name}! ยินดีต้อนรับจาก backend.` });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
