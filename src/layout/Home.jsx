import Navbar from './Navbar';
import Hero from '../section/Hero';
import About from '../section/About';
import Project from '../section/Project';
import {Toaster} from 'react-hot-toast'
import Contact from '../section/Contact';
import Footer from '../section/Footer';
import Experience from '../section/Experience';

const Home = () => {
    return (
        <div>
            <Toaster/>
            <Navbar />
            <Hero/>
            <About/>
            <Project/>
            <Experience/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;