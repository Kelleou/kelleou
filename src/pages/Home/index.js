import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters";
import './index.scss';
const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = "Hi, I am Kelly".split('')

    return (
        <div className="container md:mx-auto home-page flex h-screen">
            <div className="grid grid-cols-6 m-auto">
                <span></span>
                <span className="col-span-5">
                <span className="inline-block align-baseline ..."> </span>
                <h1> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={1}
                    /> 
                    ! </h1>
                <h2>A Third Year Computer Science Student at University of Toronto</h2>
                <Link to="about" className="flat-button"> MORE ABOUT ME</Link>
                </span>
            </div>
        </div>
    );
}

export default Home