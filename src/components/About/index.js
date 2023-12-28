import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import kel2 from '../../assets/images/kel2.PNG'

const About = () => {
  const [letterClass] = useState('text-animate')

  return (
    <div className="about-page grid md:grid-cols-7 gap-20">
      <span></span>
      <span className="col-span-3">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'ABOUT ME'.split('')}
            idx={1}
          />
        </h1>
        <p>
          I am a third year computer science student at University of Toronto
          who is passionate about solving real-world problems and committed to
          continuous learning. I am actively seeking summer 2024 internship
          opportunities to apply my skills and contribute innovative solutions
          to the tech industry! Apart from coding, I also love to paint and
          draw. I have interest in UI design and hope to blend art andn
          technology to create compelling and user-focused interfaces!
        </p>
      </span>

      <span className="col-span-3">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'SKILLS & COURSES'.split('')}
            idx={1}
          />
        </h1>
        <p>
          Programming Languages: Java, Python, C, SQL, JavaScript, HTML, CSS
          <br />
          IDEs: Visual Studio Code, IntelliJ, PyCharm
          <br />
          Tools & Framework: React.js, Angular, Node.js, Firebase, Git, GitHub
          <br />
          <details>
            <summary>Courses</summary>
            <p>
              Software Design (CSC207) <br />
              Theory of Computation (CSC236) <br />
              Computer Organization (CSC258) <br />
              Software Tools and Systems Programming (CSC209) <br />
              Programming on the Web (CSC309) <br />
              Introduction to Software Engineering (CSC301) <br />
              Algorithm Design, Analysis & Complexity (CSC373) <br />
              Introduction to Databases (CSC343)
              <br />
            </p>
          </details>
        </p>
      </span>
    </div>
  )
}

export default About
