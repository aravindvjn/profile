import github from "./assests/github.png";
import linkedin from "./assests/linkedin.png";
import mail from "./assests/gmail.png";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const year = new Date().getFullYear() - 2003;
  const texts = ["Full Stack Web Developer", "Cybersecurity Enthusiast", "React Native Developer"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isShocking, setIsShocking] = useState(false);
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShocking(true);
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setIsShocking(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="home-content">
      <h4>
        <strong>Hai, I'm Aravind Vijayan</strong>
      </h4>
      <h5 className={isShocking ? "shock" : ""}>{currentText}</h5>
      <br />
      <p>
        I am a passionate {year || 22} year old Full-Stack Web Developer skilled
        in{" "}
        <strong>
          React with TypeScript, Next.js, Node.js, Express.js, PostgreSQL, and
          Tailwind CSS
        </strong>
        . With a strong foundation in both front-end and back-end technologies,
        I build responsive, user-friendly web applications from concept to
        deployment. While my expertise is in web development, I also have
        experience with <strong>React Native</strong> for cross-platform mobile
        development. As a <strong>Cybersecurity Enthusiast</strong>, I am also
        exploring security practices to enhance application safety. My focus is
        on creating seamless and efficient digital experiences while continually
        pushing the boundaries of innovation and best practices in web
        development.
      </p>
      <div className="home-links">
        <a target="_blank" href="https://github.com/aravindvjn">
          <img src={github} alt="github" />
          <p>Github</p>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/aravind-vijayan-aa0a27214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          {" "}
          <img src={linkedin} alt="linkedin" />
          <p>LinkedIn</p>
        </a>
        <a target="_blank" href="mailto:aravind284479@gmail.com">
          <img src={mail} alt="mail" /> <p>E-mail</p>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
