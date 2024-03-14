import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import AOS from 'aos';

import Footer from './Footer';
import "./About.css"

// Initialize AOS with optional configuration
AOS.init({
    duration: 800, // Duration of animations
    easing: 'ease-in-out', // Easing function for animations
    once: true, // Only initialize once
});

// Optional: Add event listener for when AOS is initialized
AOS.refresh();
const About: React.FC = () => {




    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                <section className="about-hero">

                    <div className="about-hero-overlay">

                        <div className="about-hero-heading-container">

                            <h1 data-aos="fade-up" data-aos-delay="100" className="about-hero-big-heading">
                                ABOUT AZIMAH LTD.
                            </h1>

                            <h2 data-aos="fade-up"  data-aos-delay="300" className="about-hero-subheading">
                                Learn more about what Azimah has to offer and our Journey in full. Be part of the experience
                            </h2>



                        </div>
                    </div>

                </section>




            </div>

            <div className="about-the-beginning">

                <div className="the-beginning-text-container">



                    <p  data-aos="zoom-in" data-aos-delay="600" >
                        <span className='capitalize' >A</span>zimah Cold Food Store Nigeria Limited is a vibrant business that began its journey in 2014. Located at the Mandate exit gate in Ilorin, Kwara State, Nigeria, it has swiftly established itself as a prominent player in the frozen food market. With a commitment to excellence, Azimah Cold Food Store has expanded its operations to encompass three branches strategically positioned across Kwara State.
                    </p>


                </div>

                <div className="the-beginning-image">

                    <div className="the-bimage-overlay">

                    </div>

                </div>


            </div>


            <div className="about-the-beginning-two">

                <div className="the-journey">



                    <p>
                        <span className='capitalize' >R</span>egistered with the Corporate Affairs Commission, Azimah Cold Food Store operates in full compliance with Nigerian business regulations. Their product offerings are a testament to their dedication to providing superior quality. Customers can delight in an array of frozen delights, ranging from succulent frozen chicken and delectable frozen seafood to top-notch frozen fish. Notably, Azimah Cold Food Store takes great pride in being a trusted distributor of the esteemed Valentine chicken brand.
                    </p>


                </div>

                <div className="the-beginning-image-two  second-class">

                    <div className="the-bimage-overlay-two">

                    </div>

                </div>


            </div>


            <div className="about-the-beginning">

                <div className="the-beginning-text-container">



                    <p>
                        <span className='capitalize' >A</span>s an enterprise driven by ambition and a passion for customer satisfaction, Azimah Cold Food Store experiences consistent growth day by day. Their relentless pursuit of excellence positions them as formidable competitors in the market, continually striving to surpass rivals. Embracing growth opportunities, this dynamic business continues to forge ahead, captivating customers with their exceptional range and unwavering commitment to quality.
                    </p>


                </div>

                <div className="the-beginning-image-three">

                    <div className="the-bimage-overlay">

                    </div>

                </div>



            </div>


            <div className="about-last-section">

                <div className="about-last-overlay">

                    <h1 className="our-commitment">
                        Our Commitment
                    </h1>

                    <p>

                        Azimah Cold Food Store's success story is anchored in its ability to navigate the fiercely competitive business landscape while maintaining a steadfast focus on meeting customer demands. As they continue to expand their presence and reputation, Azimah Cold Food Store remains committed to redefining the frozen food industry in Kwara State, Nigeria.
                    </p>
                </div>


            </div>







            <Footer />
        </div>
    )
}

export default About