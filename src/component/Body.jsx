
import Home from './Home'
import Education from './Education'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'

const Body = (props) => {
  return (
    <div className='col-lg-7 body-class'>
      {props.renderPage === '1' && <Home />}
      {props.renderPage === '4' && <Education />}
      {props.renderPage === '5' && <Contact />}
      {props.renderPage === '2' && <Skills />}
      {props.renderPage === '3' && <Projects />}
    </div>
  )
}

export default Body
