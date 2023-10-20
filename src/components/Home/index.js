import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faLinkedin,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
// import Logo from './Logo'
import Loader from 'react-loaders'
import projectsData from '../../data/projects.json'
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

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
                  Open App
                </button>
                <button
                  className="btn gitHubButton"
                  onClick={() => window.open(project.sourceCode)}
                >
                  View GitHub Repository
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
          <section className="greeting-and-photo">
            <h1 className="greeting">
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

            <img src="/images/profile-photo.jpg" className="photo"></img>
          </section>

          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/clem-alleyne/"
                className="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                <h2>LinkedIn</h2>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/clem-alleynejr"
                className="github"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                <h2>GitHub</h2>
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              <h2>clem.alleynejr@gmail.com</h2>
            </li>
            {/* <li>
              <FontAwesomeIcon icon={faPhone} color="#4d4d4e" />
              <h2>(780) 932-5363</h2>
            </li> */}
            <li>
              <FontAwesomeIcon icon={faLocationDot} color="#4d4d4e" />
              <h2>
                Edmonton, Alberta <br />
                (Open to Relocate)
              </h2>
            </li>
          </ul>
        </div>

        {/* <div className="text-zone-about">
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
          <p>Languages | JavaScript, TypeScript, HTML, CSS, Python, EJS</p>
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
          <div className="tiles">{renderProjects(projectsData.projects)}</div>
        </div> */}
      </div>

      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Home
