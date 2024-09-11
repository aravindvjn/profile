import React from "react";
import newsPageThumbnail from './assests/newsPageThumnail.jpg'
import simonGame from './assests/simonGame.png'


const Projects = () => {
  const projects = [
    {
      name: "News Web App",
      img: newsPageThumbnail,
      content:
        "I developed a responsive news web app using React.js, which fetches real-time news data from a public NewsAPI. The app allows users to browse the latest news articles, categorized by topic.It provides a clean interface for easy navigation, ensuring a seamless experience across devices.",
      link: "https://aravindvjn.github.io/demonews/",
      githubLink:"https://github.com/aravindvjn/demonews",
    },
    {
      name: "Simon: The Desktop Game",
      img: simonGame,
      content:
        "A web-based recreation of the classic Simon game, featuring four colored buttons. Players aim to match a progressively longer sequence of colors, providing a fun and challenging test of memory. Built using HTML, CSS, and JavaScript with jQuery.",
      link: "https://aravindvjn.github.io/simonGame/",
      githubLink : "https://github.com/aravindvjn/simonGame"
    },
    {
      name: "Loading..",
      img: "https://i.pinimg.com/originals/7e/2a/eb/7e2aeb1567e91bfc2404cecca6aceecd.gif",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ratione repudiandae, sapiente, ad libero ducimus ipsum iure distinctio similique molestias cum animi ea unde, adipisci maxime autem nostrum voluptas tempore.",
      link: "",
      githubLink : ""
    },
    {
      name: "Loading..",
      img: "https://i.pinimg.com/originals/7e/2a/eb/7e2aeb1567e91bfc2404cecca6aceecd.gif",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ratione repudiandae, sapiente, ad libero ducimus ipsum iure distinctio similique molestias cum animi ea unde, adipisci maxime autem nostrum voluptas tempore.",
      link: "",
      githubLink : ""
    },
   
  ];

  return (
    <div className="home-content">
      <h4>
        <strong>PROJECTS</strong>
      </h4>
      <br />
      <div className="whole-projects" >
        {projects.map((project) => {
          return (
            <div className="each-project" style={{marginTop:'-35px'}}>
              <hr />
              <h5>{project.name}</h5>
              <div>
                <a href={project.link} className="project-links">
                  <img src={project.img} alt="" />
                </a>

                <p>{project.content}</p>
               <a href={project.githubLink} >Source Code</a>
               <a href={project.link} style={{marginLeft:'20px'}}>Visit site</a>
               
              </div>
            </div>
          );
        })}
        {projects.length>2 && <h6 id="scroll-down">Scroll down</h6>}
      </div>
    </div>
  );
};

export default Projects;
