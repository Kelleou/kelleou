import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import {useState} from "react";
import kel2 from '../../assets/images/kel2.PNG'

const About = () => {
    const [letterClass] = useState('text-animate')

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={"ABOUT ME".split('')}
                    idx={1}
                    /> 
                </h1>
                <p>
                    I am a second-year computer science student at University of Toronto.
                    I am currently completing a CS Specialist program with intended focuses in web technologies and artificial intelligence.
                </p>
                <p>
                    Besides coding, I also love to draw! &#40; I drew all the little characters on this website : &#41;
                    <br/>
                    I also love food. I love cooking new recipes and eating out.
                </p>
            </div>

            <div className='text-zone-1'>
                <h2>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={"SKILLS & COURSES".split('')}
                    idx={1}
                    /> 
                    <br/>
                </h2>
                <p1>
                    <strong>Projects: </strong> Click the github icon on the left to see all my projects!
                    <br/>
                    <strong>Programming Languages: </strong> Java, Python, JavaScript, HTML, R, MIPS assembly 
                    <br/>
                    Currently learning: C, C++
                    <br/>
                    <strong>IDEs:</strong> Visual Studio Code, IntelliJ, PyCharm
                    <br/>
                    <strong>Tools:</strong> React.js, Node.js, Google Firebase, Git
                    <br/>
                    <strong>Courses:</strong> <br/>
                    First Year Courses: &#40;CSC110, CSC111 &#41;  <br/>
                    Software Design &#40;CSC207&#41; <br/>
                    Theory of Computation &#40;CSC236&#41; <br/>
                    Computer Organization &#40;CSC258&#41;
                </p1>
            </div>
            <img className="kel2-container" alt="kel" />
        </div>
    )
}

export default About