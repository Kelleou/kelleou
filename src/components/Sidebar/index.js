import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="nav-bar flex flex-col items-center justify-between p-5">
      <nav>
        <ul>
          <li>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
              <FontAwesomeIcon icon={faHome} color="var(--icons)" />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="var(--icons)" />
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="projects-link"
              to="/projects"
            >
              <FontAwesomeIcon icon={faLaptopCode} color="var(--icons)" />
            </NavLink>
          </li>
          <li>
            <a
                className="linkedin-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kellyou03/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="var(--icons)" />
            </a>
          </li>
          <li>
            <a
            className="github-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kelleou"
            >
              <FontAwesomeIcon icon={faGithub} color="var(--icons)" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
