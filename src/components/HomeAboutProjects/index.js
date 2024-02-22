import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import projectsData from '../../data/projects.json'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const HomeAboutProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Clem Alleyne,'.split('')
  const jobArray = 'Full Stack Developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
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
      <div className="container home-about-projects-page">
        <main className="text-zone-home">
          <section className="greeting-and-photo">
            <h1 className="greeting">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _13`}>i,</span>
              <br />
              <span className={`${letterClass} _14`}>I</span>
              <span className={`${letterClass} _15`}>'</span>
              <span className={`${letterClass} _16`}>m</span>
              <span className={`${letterClass} _17`}> </span>
              <span className="greeting-name">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={18}
                />
              </span>
              <br />
              <span className="greeting-job">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={31}
                />
              </span>
            </h1>
            <img src="/images/profile-photo.jpg" className="photo"></img>
          </section>

          <section className="contacts">
            <ul>
              <li className="linkedin">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/clem-alleyne/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                  <h2>LinkedIn</h2>
                </a>
              </li>
              <li className="github">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/clem-alleynejr"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  <h2>GitHub</h2>
                </a>
              </li>
              <li className="email">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                <h2>clem.alleynejr@gmail.com</h2>
              </li>
              <li className="location">
                <FontAwesomeIcon icon={faLocationDot} color="#4d4d4e" />
                <h2>
                  Edmonton, Alberta <br />
                  (Open to Relocate)
                </h2>
              </li>
            </ul>
          </section>
        </main>

        <main className="text-zone-about">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About Me'.split('')}
              idx={12}
            />
          </h1>
          <p className="summary">
            Having worked in the structural engineering industry and recently
            completing a rigorous full-stack software engineering intensive
            program, I aim to leverage my technical background to transition
            into software development, recognizing its vital role in society. As
            a problem solver at heart, I have always been drawn to math and
            logic-based challenges. Professionally, I’ve worn many hats
            including project manager, structural analyzer/designer, and tower
            climber/inspector.
          </p>
          <section className="skills">
            <p>Languages | JavaScript, TypeScript, HTML, CSS, Python, EJS</p>
            <p>
              Libraries and Frameworks | Express.js, Django, React.js, Node.js,
              Mongoose, Bootstrap
            </p>
            <p>Database | SQL, PostgreSQL, NoSQL, MongoDB</p>
            <p>Other | DOM Manipulation, AWS, RESTful Routing JSON, GitHub, Trello, Figma</p>
          </section>
        </main>

        <main className="text-zone-projects">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Projects'.split('')}
              idx={12}
            />
          </h1>
          {renderProjects(projectsData.projects)}
        </main>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default HomeAboutProjects
