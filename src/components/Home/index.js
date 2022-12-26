import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Logo from "./Logo";
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['K','e','l','l','y']


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, I am&nbsp;
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={1}
                    /> 
                    ! </h1>
                <h2>Second Year Computer Science Student at University of Toronto</h2>
                <Link to="/contact" className="flat-button"> Contact me</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home