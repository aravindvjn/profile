import React from "react";
import Animation from "./Wrapper/Animation";

const Education = () => {
  return (
    <Animation>
      <div className="home-content">
        <h4>
          <strong>EDUCATION</strong>
        </h4>
        <br />
        <p className="educat">Degree</p>
        <p>
          <strong>B.Tech in Civil Engineering</strong>
          <br />
          NSS College Of Engineering
          <br />
          Palakkad
          <br />
          (2021-2025)
        </p>
        <br />
        <p className="educat">Course/Certifications</p>
        <p>
          <strong>The Complete 2024 Web Development Bootcamp</strong>
          <br />
          By Dr. Angela Yu, Developer and Lead Instructor
          <br />
          Udemy
        </p>
      </div>
    </Animation>
  );
};

export default Education;
