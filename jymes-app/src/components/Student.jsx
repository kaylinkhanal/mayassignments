"use client";

const StudentCard = ({ name, course }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{user}</h3>
      <p>Course: {course}</p>
    </div>
  );
};

export default StudentCard;
