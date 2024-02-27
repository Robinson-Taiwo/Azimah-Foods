import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from './Navbar';
import chicken from '../assets/icons/chicken.svg';
import meat from '../assets/icons/meat.svg';
import down from '../assets/icons/down.svg';

import fish from '../assets/icons/fish.svg';
import turkey from '../assets/icons/turkey.svg';

import fs from '../assets/images/fs.png';
// import { galleryData } from './data';

import tfm from '../assets/images/tfm.png';
import appetite from '../assets/images/appetite.png';
import logistics from '../assets/images/logistics.jpeg';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
import image9 from '../assets/images/image9.jpeg';
import image10 from '../assets/images/image10.jpeg';
import image11 from '../assets/images/image11.jpeg';
import image12 from '../assets/images/image12.jpeg';
import image13 from '../assets/images/image13.jpeg';
import image14 from '../assets/images/image14.jpeg';
import image15 from '../assets/images/image15.jpeg';
import hotdog from '../assets/images/hotdog.jpeg';
import cwings from '../assets/images/cwings.jpg';
import herringfish from '../assets/images/herringfish.jpeg';
import hakefish from '../assets/images/hakefish.jpeg';
import mackrel from '../assets/images/mackrel.jpeg';
// import logo from "../assets/icons/getlinked.svg"
import instagram from "../assets/icons/mdi_instagram.svg"
import x from "../assets/icons/x.svg"
import call from "../assets/icons/call.svg"
import location from "../assets/icons/location.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"

import { Parallax } from 'react-parallax';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import ScrollTo from "gsap/ScrollToPlugin"



interface HomeProps { }

const Home: React.FC<HomeProps> = () => {

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

    const section1Ref = useRef<HTMLDivElement>(null); // Assuming section1 is a div

    const handleScrollToSection = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Use scrollIntoView
        }
    };




    return (
        <div className='home-container'>
            <div className="navbar">

                <Navbar handleScrollToSection={handleScrollToSection} />
            </div>

            {/* bgImage="/ffba.png" */}

            <Parallax strength={100} >

                <div id='section0' className="hero-section-overlay">


                    <div className="hero-container">

                        <div className="hero-section-content">

                            <h1 className="hero-content-heading">
                                Experience Freshness, Variety, and Quality at Azimah Cold Food Store.
                            </h1>

                            <div className="hero-content-subheading">
                                Delight your senses with an exquisite array of frozen treasures from succulent chicken to ocean-fresh seafood.
                            </div>

                            <button onClick={() => handleScrollToSection("section2")} className="asc-ctas border-white text-white">
                                <img src={down} className='down-icon' alt="" />
                            </button>


                        </div>

                        <div className="hero-section-image-container">

                            {/* <img src={fs} alt="" className="image1" /> */}
                            {/* <img src={tfm} alt="" className="image2" /> */}
                            {/* <img src={appetite} alt="" className="image3" /> */}
                        </div>


                    </div>



                </div>


            </Parallax>

            <div className="blur-blue">

            </div>


            <section id="section1" ref={section1Ref} className="categories-section">

                <img src={tfm} alt="" className="wm-image" />


                <img src={appetite} alt="" className="wm-image2" />

                <img src={fs} alt="" className="wm-image3" />




                <h1 className="cs-heading">
                    Frozen food Categories
                </h1>

                <h4 className="cs-subheading">

                    Indulge in a frosty feast with our curated selection of frozen delights. Dive into a world where freshness meets frozen perfection
                </h4>


                <ul className="frozen-food-categories">

                    <li className="ff-category">

                        <img src={chicken} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Chicken
                        </h2>

                        <p>Our chicken is always a delight</p>
                    </li>

                    <li className="ff-category">

                        <img src={meat} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Meat
                        </h2>

                        <p>fresh meat at your reach</p>
                    </li>

                    <li className="ff-category">

                        <img src={fish} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Fish
                        </h2>

                        <p>Feast on any kind of  fresh fish you need</p>

                    </li>

                    <li className="ff-category">

                        <img src={turkey} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Turkey
                        </h2>

                        <p>Owe sell frozen turkey too</p>
                    </li>


                </ul>




            </section>


            <section id='section2' className="about-section">



                <div className="about-section-content">

                    <div className="asc-heading">
                        About Us
                    </div>

                    <div className="asc-subheading">
                        our Journey
                    </div>

                    <p className="asc-text">
                        Welcome to Azimah Cold Food Store Nigeria Limited, a culinary haven for frozen food enthusiasts. Our journey began in 2014 at the Mandate exit gate in Ilorin, Kwara State, Nigeria. From these roots, we have rapidly grown to become a key player in the vibrant frozen food market.
                    </p>

                    <button className="asc-cta">
                        learn more...
                    </button>

                </div>

                <div className="about-section-image">

                    <img src={logistics} alt="" className="logistics" />

                </div>



            </section>



            <div className="gallery-section">

                <div className="gs-heading">Gallery/Facilities</div>




                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image10} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image11} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image12} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image13} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image14} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image15} alt="" />
                    </div>
                </div>




            </div>

            <section className="featured-products">

                <h1 className="fp-heading">
                    Our Featured Products
                </h1>

                <div className="fp-container">

                    <div className="product-container">

                        <img src={hakefish} alt="" className="product-image" />
                        <div className="pc-overlay4">


                            <p className="product-text">
                                chicken
                            </p>
                        </div>


                    </div>




                    <div className="product-container">

                        <img src={herringfish} alt="" className="product-image" />
                        <div className="pc-overlay4">


                            <div className="product-text">
                                Herring Fish
                                <p>(panla)</p>

                            </div>

                        </div>


                    </div>






                    <div className="product-container">

                        <img src={mackrel} alt="" className="product-image" />

                        <div className="pc-overlay4">

                            <p className="product-text">
                                chicken
                            </p>
                        </div>


                    </div>


                    <div className="product-container">

                        <img src={mackrel} alt="" className="product-image" />
                        <div className="pc-overlay4">


                            <p className="product-text">
                                chicken
                            </p>
                        </div>


                    </div>




                    <div className="product-container">

                        <img src={hotdog} alt="" className="product-image" />
                        <div className="pc-overlay4">


                            <p className="product-text">
                                chicken
                            </p>
                        </div>


                    </div>



                    <div className="product-container">

                        <img src={cwings} alt="" className="product-image" />
                        <div className="pc-overlay4">


                            <p className="product-text">
                                chicken
                            </p>
                        </div>


                    </div>


                    <div className="product-container">

                        <img src={tfm} alt="" className="product-image" />
                        <div className="pc-overlay4">


                            <p className="product-text">
                                chicken
                            </p>
                        </div>


                    </div>


                </div>



            </section>



            <section className="contacts-section">


            </section>

            <div className='section-footer'>

                <div className="footer-first-div">
                    <div className="footer-first-section-col">

                        <div className="footer-first-header">

                            <img src={x} className='footer-logo' alt="" />


                            <p className="footer-text">
                                Getlinked Tech Hackathon is a technology
                                innovation program established by a group
                                of organizations with the aim of showcasing
                                young and talented individuals in the field
                                of technology
                            </p>
                        </div>


                        <div className="demacate">
                            Terms of Use <span className='patition'></span>  Privacy Policy
                        </div>

                    </div>




                    <div className="footer-col">

                        <h2>Useful Links</h2>

                        <p>Overview</p>
                        <p>Timeline</p>

                        <p>FAQs</p>
                        <p>Register</p>

                        <div>
                            <h6 className='footer-socials' >follow us</h6>

                            <img src={instagram} alt="" />
                            <img src={x} alt="" />
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />


                        </div>
                    </div>

                    <div className="footer-contacts">

                        <h1>Contact Us</h1>

                        <div>
                            <img src={call} alt="" />

                            <p>+234  6707653444</p>
                        </div>


                        <div>
                            <img src={location} alt="" />

                            <h2> 27,Alara Street
                                Yaba 100012
                                Lagos State</h2>
                        </div>

                    </div>



                </div>


                <div className="reserved">

                    <p >
                        All rights reserved. © getlinked Ltd.
                    </p>
                </div>



            </div>



        </div>
    )
}

export default Home