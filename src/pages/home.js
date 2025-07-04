import React from 'react';

import Banner from "../components/Banner";
import SocialLink from "../components/SocialLink";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Programming from "../components/Programming";
import Projects from "../components/Projects";
import Award from "../components/Award";
import Certificates from "../components/Certificates";
import Extracurricular from "../components/Extracurricular";
import Visuals from "../components/Visuals";
import Footer from "../components/Footer";
import Research from "../components/Research";


function Home(props) {
    return (
        <div>
            <Banner/>
            <SocialLink/>
            <About/>
            <Experience/>
            <Education/>
            <Research/>
            <Programming/>
            <Projects/>
            <Award/>
            <Certificates/>
            <Extracurricular/>
            <Visuals/>
            <Footer/>
        </div>
    );
}

export default Home;