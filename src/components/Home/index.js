import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Kel from "./Kel";
const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = "Hi, I am Kelly".split('')


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={1}
                    /> 
                    ! </h1>
                <h2>A Second-Year Computer Science Student at University of Toronto</h2>
                <Link to="about" className="flat-button"> MORE ABOUT ME</Link>
            </div>
            <Kel />
        </div>
    );
}

export default Home