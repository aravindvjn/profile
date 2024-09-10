import React from "react";
import react from "./assests/react.png";
import node from "./assests/node.png";
import express from "./assests/express.png";
import postgresql from "./assests/postgresql.png";
import mongodb from "./assests/mongodb.png";

const Skills = () => {
  return (
    <div className="home-content">
      <h4>
        <strong>SKILLS</strong>
      </h4>
      <br />
      <h5>Favourites</h5>
      <div className="skills-img">
        <img src={react} alt="" />
        <img src={node} alt="" />
        <img src={express} alt="" />
        <img src={mongodb} alt="" />
        <img src={postgresql} alt="" />
      </div>
      <br />
      <div className="skills-notes">
        <strong>Web Development : </strong> Proficient in building full-stack
        applications using the MERN stack
        <br />
        <br />
        <strong>Backend : </strong> RESTful APIs with Node.js and Express,
        working with MongoDB and PostgreSQL for database management.
        <br />
        <br />
        <strong>Frontend : </strong> Expertise in creating responsive and
        dynamic user interfaces with React, utilizing modern JavaScript (ES6+),
        CSS, and HTML.
        <br />
        <br />
        <strong>Version Control : </strong> Experienced in using Git for version
        control.
        <br />
        <br />
        <strong>Programming Knowledge : </strong> Comfortable with the basics of
        Java, C++, C, Python, and Dart for problem-solving and general
        development tasks.
      </div>
    </div>
  );
};

export default Skills;
