import React, { useState } from "react";
import projects from "../Data/Data";
const Projects = () => {
  const [getId, setGetId] = useState();
  return (
    <div className="home-content">
      <h4>
        <strong>PROJECTS</strong>
      </h4>
      <span style={{ fontSize: "12px", opacity: "0.8", fontStyle: "italic" }}>
        Total : {projects.length}
      </span>
      <br />
      <div className="whole-projects">
        {projects.map((project) => {
          return (
            <div key={project.id} className="each-project">
              <div 
                onClick={() => setGetId(project.id === getId ? "" : project.id)}
              >
                <h6>{project.name}</h6>
                <svg
                  style={{ cursor: "pointer",transform:`${project.id === getId ? "rotateX(180deg)": "none"}` }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#e8eaed"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </div>
              {project.id === getId && (
                <div className="project-desc">
                  <p>{project.content}</p>
                  <a
                    href={project.githubLink}
                    alt={project.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              )}
            </div>
          );
        })}
        {projects.length > 6 && <h6 id="scroll-down">Scroll down</h6>}
      </div>
    </div>
  );
};

export default Projects;
