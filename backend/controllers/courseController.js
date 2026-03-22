const Course = require("../models/Course");

// 📥 GET ALL COURSES
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➕ ADD COURSE (Admin only)
const addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      introduction,
      topics,
      conclusion
    } = req.body;

    const course = new Course({
      title,
      description,
      instructor,
      introduction,
      topics,
      conclusion
    });

    await course.save();

    res.status(201).json({ message: "Course added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🗑 DELETE COURSE (Admin only)
const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);

    res.json({ message: "Course deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCourses,
  addCourse,
  deleteCourse
};