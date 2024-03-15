import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBriefcase,
  faClose,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <>
      <div className='mobileButtons'>
      <FontAwesomeIcon
        onClick={() => setShowMobileNav(false)}
        icon={faClose}
        className={`close-icon ${showMobileNav ? 'mobile-show' : ''}`}
      />
      <FontAwesomeIcon
        onClick={() => setShowMobileNav(true)}
        icon={faBars}
        className={`hamburger-icon ${showMobileNav ? 'mobile-show' : ''}`}
      />
      </div>
      <div className={`nav-bar ${showMobileNav ? 'mobile-show' : ''}`}>
        <nav>
          <NavLink
            onClick={() => setShowMobileNav(false)}
            exact="true"
            activeclassname="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            Home /
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            About Me /
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            Projects
          </NavLink>
          <NavLink
            onClick={() => setShowMobileNav(false)}
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            Contact
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/clem-alleyne/"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
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
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
