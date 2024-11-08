import React from "react";
import react from "./assests/react.png";
import node from "./assests/node.png";
import express from "./assests/express.png";
import postgresql from "./assests/postgresql.png";

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
        <img src={postgresql} alt="" />
      </div>
      <br />
      <div className="skills-notes">
        <p>
          <strong>Web Development : </strong> Proficient in building full-stack
          applications using <strong>React with TypeScript</strong>,
          <strong> Node.js</strong>, <strong>Express</strong> and 
          <strong> PostgreSQL</strong> for high-performance, scalable solutions.
        </p>
        <p>
          <strong>Backend : </strong> Skilled in creating RESTful APIs with
          Node.js and Express, managing database with PostgreSQL, and
          implementing secure authentication with <strong>JWT</strong>.
        </p>
        <p>
          <strong>Frontend : </strong> Expertise in building responsive, dynamic
          user interfaces using React with TypeScript, styled with{" "}
          <strong>Tailwind CSS</strong>, and utilizing modern JavaScript (ES6+),
          CSS, and HTML.
        </p>
        <p>
          <strong>Version Control : </strong> Experienced in using Git for
          version control.
        </p>
        <p>
          <strong>Programming Knowledge : </strong> Comfortable with the basics
          of Java, C++, C, Python, and Dart for problem-solving and general
          development tasks.
        </p>
      </div>
    </div>
  );
};

export default Skills;
