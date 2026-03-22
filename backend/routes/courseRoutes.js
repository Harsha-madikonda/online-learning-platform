const express = require("express");
const router = express.Router();

const {
  getCourses,
  addCourse,
  deleteCourse
} = require("../controllers/courseController");

const authMiddleware = require("../middleware/authMiddleware");

// 📥 Get all courses
router.get("/", authMiddleware, getCourses);

// ➕ Add course (admin only)
router.post("/add", authMiddleware, addCourse);

// 🗑 Delete course (admin only)
router.delete("/:id", authMiddleware, deleteCourse);

module.exports = router;