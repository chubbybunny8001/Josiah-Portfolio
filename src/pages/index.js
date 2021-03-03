import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AboutMeSection from '../components/AboutMeSection';
import Projects from '../components/ProjectsSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/ProjectsSection/Data';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AboutMeSection />
            <Projects {...homeObjOne}/>
            <Projects {...homeObjTwo}/>
            <Projects {...homeObjThree}/>
            <Experience />
            <Footer />
        </>
    )
}

export default Home
