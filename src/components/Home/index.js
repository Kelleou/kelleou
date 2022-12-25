import { Link } from "react-router-dom";
import './index.scss';
const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, I am Kelly! </h1>
                <h2>Second Year Computer Science Student at University of Toronto</h2>
                <Link to="/contact" className="flat-button"> Contact me</Link>
            </div>

        </div>
    );
}

export default Home