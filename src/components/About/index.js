import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import {useState} from "react";

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
                    I am currently completing a CS Specialist program with intended focus in web technologies and artificial intelligence.
                </p>
                <p>
                    Besides coding, I also love to draw! &#40; I drew all the little characters on this website! &#41;
                    I also love food. I love cooking new recipes at home and eating out.

                </p>
            </div>

        </div>
    )
}

export default About