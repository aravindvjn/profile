import React from "react";
import github from "./assests/githubClr.png";
import gmailClr from "./assests/gmailClr.png";
import whatsapp from "./assests/whatsapp.png";
import linkedinClr from "./assests/linkedinClr.png";
import instagram from "./assests/instagram.png";

const Contact = () => {
  return (
    <div className="home-content">
      <h4>
        <strong>CONTACT</strong>
      </h4>
      <br/>
      <div className="contact-div">
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B917559027982&text&type=phone_number&app_absent=0" className="contact-child-div">
          <img src={whatsapp} alt="whatsapp" />
          <p>WhatsApp</p>
        </a>
        <a target="_blank" href="https://github.com/aravindvjn" className="contact-child-div">
          <img src={github} alt="github" />
          <p>Github</p>
        </a>
        <a target="_blank" href="mailto:aravind284479@gmail.com" className="contact-child-div">
          <img src={gmailClr} alt="gmail" />
          <p>e-Mail</p>
        </a>
        <a target="_blank" href="https://www.instagram.com/arawindh?igsh=MXY1eGY5em1iNmcxYw==" className="contact-child-div">
          <img src={instagram} alt="instagram" />
          <p>Instagram</p>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/aravind-vijayan-aa0a27214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-child-div">
          <img src={linkedinClr} alt="linked in" />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
