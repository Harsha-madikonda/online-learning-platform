import React from "react";

function Home() {

  const handleClick = () => {
    alert("Please login first to access courses");
  };

  const courses = [
    {
      name: "Python",
      image: "https://www.infoworld.com/wp-content/uploads/2025/04/3535570-0-09663300-1743749680-shutterstock_1389877574-100928926-orig.jpg?resize=1536%2C864&quality=50&strip=all"
    },
    {
      name: "Java",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      name: "Web Development",
      image: "https://as2.ftcdn.net/v2/jpg/19/48/42/31/1000_F_1948423161_4E969iq04YIsB6FPQkiCK8tMsAzsGgck.jpg"
    },
    {
      name: "Data Science",
      image: "https://t.ctcdn.com.br/Sy80CZqFClE4rKAeEqWi7rOi1No=/1024x576/smart/i11582.jpeg"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://inoxoft.com/wp-content/uploads/2024/04/Cover-1920x820.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px"
      }}
    >
      {/* Heading */}
      <h1 style={{ textAlign: "center", color: "white" }}>
        Welcome to Online Learning Platform 🚀
      </h1>

      <p style={{ textAlign: "center", color: "white" }}>
        Learn top skills from best courses
      </p>

      {/* Course Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "50px"
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={handleClick}
            style={{
              width: "250px",
              height: "150px",
              borderRadius: "10px",
              backgroundImage: `url(${course.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
            }}
          >
            {course.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;