const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,

  // 🆕 New Fields
  introduction: String,
  topics: String,
  conclusion: String
});

module.exports = mongoose.model("Course", courseSchema);