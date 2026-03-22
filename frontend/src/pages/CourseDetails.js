import React from "react";
import { useLocation } from "react-router-dom";

function CourseDetails() {
  const { state } = useLocation();

  if (!state) {
    return <h2>No Course Data</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        backgroundColor: "#f0f4f8"
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h1>{state.title}</h1>

        <p><b>Description:</b> {state.description}</p>
        <p><b>Instructor:</b> {state.instructor}</p>

        <hr />

        <h3>Introduction</h3>
        <p>{state.introduction}</p>

        <h3>Topics</h3>
        <p>{state.topics}</p>

        <h3>Conclusion</h3>
        <p>{state.conclusion}</p>
      </div>
    </div>
  );
}

export default CourseDetails;