
import github from './assests/github.png'
import linkedin from './assests/linkedin.png'
import mail from './assests/gmail.png'
import Footer from './Footer';


const Home = () => {
  const year=new Date().getFullYear()-2003;
  return (
    <div className='home-content'>
      <h4><strong>Hai, I'm Aravind Vijayan</strong></h4>
      <h5>A Full Stack Developer</h5>
      <br/>
      <p>I am a passionate {year || 21} year old Full-Stack Web Developer, specializing in the MERN stack. With a strong foundation in both front-end and back-end technologies, I build responsive, user-friendly web applications from concept to deployment. My goal is to create seamless and efficient digital experiences, constantly pushing the boundaries of innovation and best practices in web development.</p>
      <div className="home-links">
        <a href="https://github.com/aravindvjn"><img src={github} alt="github" /><p>Github</p></a>
        
        <a href="https://www.linkedin.com/in/aravind-vijayan-aa0a27214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <img src={linkedin} alt="linkedin" />
        <p>LinkedIn</p></a>
        <a href="mailto:aravind284479@gmail.com"><img src={mail} alt="mail" /> <p>E-mail</p></a>
        
      </div>
      <Footer />
    </div>
  )
}

export default Home
