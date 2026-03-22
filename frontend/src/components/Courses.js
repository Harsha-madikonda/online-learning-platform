import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [topics, setTopics] = useState("");
  const [conclusion, setConclusion] = useState("");

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  // 📥 Fetch Courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCourses(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line
  }, []);

  // ➕ Add Course
  const addCourse = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/courses/add",
        {
          title,
          description,
          instructor,
          introduction,
          topics,
          conclusion
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Course added successfully");

      setTitle("");
      setDescription("");
      setInstructor("");
      setIntroduction("");
      setTopics("");
      setConclusion("");

      fetchCourses();

    } catch (error) {
      alert(error.response?.data?.message || "Error adding course");
    }
  };

  // 🗑 Delete Course
  const deleteCourse = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Course deleted");
      fetchCourses();

    } catch (error) {
      alert(error.response?.data?.message || "Error deleting");
    }
  };

  // 👉 Open Course Details
  const openCourse = (course) => {
    navigate("/course-details", { state: course });
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f0f4f8" // 🌈 Page Background
      }}
    >
      <h2 style={{ textAlign: "center" }}>Courses</h2>

      {/* Logout */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={logout}>Logout</button>
      </div>

      {/* ADMIN FORM */}
      {role === "admin" && (
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <h3>Add Course</h3>

          <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
          <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
          <input placeholder="Instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} /><br /><br />

          <input placeholder="Introduction" value={introduction} onChange={(e) => setIntroduction(e.target.value)} /><br /><br />
          <input placeholder="Topics" value={topics} onChange={(e) => setTopics(e.target.value)} /><br /><br />
          <input placeholder="Conclusion" value={conclusion} onChange={(e) => setConclusion(e.target.value)} /><br /><br />

          <button onClick={addCourse}>Add Course</button>
        </div>
      )}

      {/* COURSES GRID */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {courses.map((course) => (
          <div
            key={course._id}
            style={{
              width: "250px",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              backgroundColor: "#ffffff", // 🎨 Card color
              borderLeft: "5px solid #007bff" // 💡 Highlight
            }}
            onClick={() => openCourse(course)}
          >
            <h3 style={{ color: "#007bff" }}>{course.title}</h3>
            <p>{course.description}</p>
            <p><b>{course.instructor}</b></p>

            {role === "admin" && (
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;