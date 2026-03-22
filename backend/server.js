const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors"); // ✅ ADD THIS

dotenv.config();
connectDB();

const app = express();

// ✅ ADD THIS
app.use(cors());

app.use(express.json());

// 🔐 Auth Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// 📚 Course Routes
const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port " + process.env.PORT);
});