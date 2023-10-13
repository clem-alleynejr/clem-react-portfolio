import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
// import Logo from './Logo'
import Loader from 'react-loaders'
import projectsData from '../../data/projects.json'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Clem Alleyne'.split('')
  const jobArray = 'Full Stack Developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={project.cover}
                className="project-image"
                alt="project"
              />
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone-home">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}> </span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div className="text-zone-about">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About Me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Having worked in the structural engineering industry and recently
            completing a rigorous full-stack software engineering intensive
            program, I aim to leverage my technical background to transition
            into software development, recognizing its vital role in society. As
            a problem solver at heart, I have always been drawn to math and
            logic-based challenges. Professionally, I’ve worn many hats
            including project manager, structural analyzer/designer, and tower
            climber/inspector.
          </p>
          <br />
          <p>Languages | JavaScript, TypeScript, C#, HTML, CSS, Python, EJS</p>
          <p>
            Libraries and Frameworks | Express.js, Django, React.js, Node.js,
            Mongoose, Bootstrap
          </p>
          <p>Database | PostgreSQL, MongoDB</p>
          <p>Other | AWS, RESTful Routing JSON, GitHub, Trello, Figma</p>
        </div>

        <div className="text-zone-projects">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Projects'.split('')}
              idx={15}
            />
          </h1>
          <div className='tiles'>{renderProjects(projectsData.projects)}</div>
        </div>
      </div>

      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Home
