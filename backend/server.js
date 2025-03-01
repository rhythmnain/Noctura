const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./routes/auth.routes");
const excuseRoutes = require("./routes/excuse.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware setup
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // ✅ Updated CORS configuration
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/excuses", excuseRoutes);
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Noctura API!");
});

// Database connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/noctura";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
