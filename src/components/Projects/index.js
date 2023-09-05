import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import projectsData from '../../data/projects.json'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(projectsData)

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
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectsData.projects)}</div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Projects
