import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AboutMeSection from '../components/AboutMeSection';
import Projects from '../components/ProjectsSection';
import { gitHub, aboutMeData, whatIKnow  } from '../components/ProjectsSection/Data';
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
            <Experience />
            <Projects {...gitHub}/>
            <Projects {...whatIKnow}/>
            <Projects {...aboutMeData}/>
            <Footer />
        </>
    )
}

export default Home
