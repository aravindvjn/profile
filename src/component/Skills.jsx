import React from "react";
import react from "./assests/react.png";
import node from "./assests/node.png";
import express from "./assests/express.png";
import postgresql from "./assests/postgresql.png";
import nextjs from "./assests/nextjs.png";
import Animation from "./Wrapper/Animation";
const Skills = () => {
  return (
    <Animation>
      <div className="home-content">
        <h4>
          <span>SKILLS</span>
        </h4>
        <h5>Favourites</h5>
        <div className="skills-img">
          <img src={nextjs} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={postgresql} alt="" />
        </div>
        <br />
        <div className="skills-notes" style={{ paddingBottom: "20px" }}>
          <p>
            <strong>Web & Mobile Development</strong> : Proficient in building
            full-stack applications using <span>React with TypeScript</span>,
            <span> Next.js</span>,<span> Node.js</span>, <span>Express</span>{" "}
            and
            <span> PostgreSQL</span> for high-performance, scalable solutions.
            Skilled in developing cross-platform mobile applications using{" "}
            <span>React Native</span> for seamless iOS and Android experiences.
          </p>
          <p>
            <strong>Backend</strong> : Skilled in creating RESTful APIs with
            Node.js and Express, managing database with PostgreSQL, and
            implementing secure authentication with <span>JWT</span>.
          </p>
          <p>
            <strong>Frontend</strong> : Expertise in building responsive,
            dynamic user interfaces using React with TypeScript, Next.js, and
            React Native. Proficient in styling with <span>Tailwind CSS</span>,
            utilizing <span>Framer Motion</span> for animations, and leveraging
            modern JavaScript (ES6+), CSS, and HTML.
          </p>
          <p>
            <strong>Version Control</strong> : Experienced in using Git for
            version control.
          </p>
          <p>
            <strong>Cybersecurity</strong> :Enthusiastic about learning and
            applying cybersecurity practices to enhance application security and
            protect against vulnerabilities.
          </p>
          <p>
            <strong>Programming Knowledge</strong> : Comfortable with the basics
            of Java, C++, C, Python, and Dart for problem-solving and general
            development tasks.
          </p>
        </div>
      </div>
    </Animation>
  );
};

export default Skills;
