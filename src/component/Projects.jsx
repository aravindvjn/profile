import React, { useState } from "react";
import projects from "../Data/Data";
import Animation from "./Wrapper/Animation";
import { motion } from "framer-motion";
const Projects = () => {
  const [getId, setGetId] = useState();
  return (
    <Animation>
      <div className="home-content">
        <h4>
          <strong>PROJECTS</strong>
        </h4>
        <span style={{ fontSize: "12px", opacity: "0.8", fontStyle: "italic" }}>
          Total : {projects.length}
        </span>
        <br />
        <div className="whole-projects">
          {projects.map((project, index) => {
            return (
              <div key={index} className="each-project">
                <div onClick={() => setGetId(index === getId ? "" : index)}>
                  <h6>{project.name}</h6>
                  <svg
                    style={{
                      cursor: "pointer",
                      transform: `${
                        index === getId ? "rotateX(180deg)" : "none"
                      }`,
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e8eaed"
                  >
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </div>
                {index === getId && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="project-desc"
                  >
                    <p>{project.content}</p>
                    <a
                      href={project.githubLink}
                      alt={project.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </motion.div>
                )}
              </div>
            );
          })}
          {projects.length > 6 && <h6 id="scroll-down">Scroll down</h6>}
        </div>
      </div>
    </Animation>
  );
};

export default Projects;
