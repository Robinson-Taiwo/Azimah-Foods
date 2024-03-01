import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer';
import "./About.css"

const About: React.FC = () => {



    //  handling the navigation scrolling with gsap
    const sectionTargets = useRef<Record<string, HTMLElement>>({});

    useEffect(() => {
        sectionTargets.current = {
            section0: document.getElementById('section0')!,
            section1: document.getElementById('section1')!,
            section2: document.getElementById('section2')!,

        };
        gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin
    }, []);

    //   const section1Ref = useRef<HTMLDivElement>(null); // Assuming section1 is a div

    const handleScrollToSection = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Use scrollIntoView
        }
    };

    return (
        <div>

            <div className="navbar">

                <Navbar handleScrollToSection={handleScrollToSection} />
            </div>


            <div className="about-page">


            </div>



            <Footer />
        </div>
    )
}

export default About