import Navbar from './Navbar';
import Hero from '../section/Hero';
import About from '../section/About';
import Project from '../section/Project';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <About/>
            <Project/>
        </div>
    );
};

export default Home;