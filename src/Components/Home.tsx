import React, { useEffect, useRef, } from 'react';
import Navbar from './Navbar';
import chicken from '../assets/icons/chicken.svg';
import meat from '../assets/icons/meat.svg';
import down from '../assets/icons/down.svg';
import fish from '../assets/icons/fish.svg';
import turkey from '../assets/icons/turkey.svg';
import fs from '../assets/images/fs.png';
// import hd from '../assets/images/hd.png';
import raw from '../assets/images/raw-fish.jpg';
import bvrf from '../assets/images/bvrf.jpg';
import aboutfish from '../assets/images/aboutfish.jpg';


import cw from '../assets/images/cw.png';
// import fis from '../assets/images/fis.png';
import phone from "../assets/icons/phone.svg"
import locate from "../assets/icons/locate.svg"
import mail from "../assets/icons/mail.svg"
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
import herringfish from '../assets/images/herringfish.jpeg';
import hakefish from '../assets/images/hakefish.jpeg';
import mackrel from '../assets/images/mackrel.jpeg';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import { Carousel } from 'antd';


// Initialize AOS with optional configuration
AOS.init({
    duration: 800, // Duration of animations
    easing: 'ease-in-out', // Easing function for animations
    once: true, // Only initialize once
});

// Optional: Add event listener for when AOS is initialized
AOS.refresh();


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

            <section id='section0' className="afs">

                <div className="afs-content">


                    <h1>
                        Experience Freshness & Variety at Azimah Cold Food Store.
                    </h1>

                    <h2>
                        Delight your senses with an exquisite array of frozen treasures from succulent chicken to ocean-fresh seafood.
                    </h2>


                    <div className="afs-cta">

                        <button>
                            About
                        </button>
                    </div>


                </div>


                <div className="afs-images">

                    <div className="one-box">
                        <img className="afs-image" src={bvrf} alt="" />
                    </div>
                    <div className="two-box">
                        <img className="afs-image" src={raw} alt="" />

                    </div>
                    <div className="two-box">
                        <img className="afs-image" src={aboutfish} alt="" />

                    </div>
                    <div className="one-box">
                        <img className="afs-image" src={tfm} alt="" />

                    </div>


                </div>

                <div className="button-cont w-[100vw] left-[0rem] bottom-[1rem] absolute ">

                    <button onClick={() => handleScrollToSection("section1")} className="asc-ctas animate-bounce phone:w-fit desktop:px-[0.7rem] desktop:py-[0.7rem]  phone:px-[0.4rem] py-[0.4rem] bg-black desktop:text-[0.9rem] wide:text-[1rem] rounded-[50%]  mt-[4rem] border-[2px] ">
                        <img src={down} className='down-icon' alt="" />
                    </button>

                </div>


            </section>



            <div className="blur-blue">

            </div>


            <section id="section1" ref={section1Ref} className="categories-section">



                <img src={appetite} alt="" className="wm-image2" />

                <img src={fs} alt="" className="wm-image3" />




                <h1 data-aos="fade-up" className="cs-heading">
                    What We Offer
                </h1>

                <h4 className="cs-subheading">

                    Indulge in a frosty feast with our curated selection of frozen delights. Dive into a world where freshness meets frozen perfection
                </h4>


                <ul className="frozen-food-categories">

                    <li className="ff-category" data-aos="fade-up">

                        <img src={chicken} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Chicken
                        </h2>

                        <p className='cate' >Our chicken is always a delight</p>
                    </li>

                    <li className="ff-category" data-aos="fade-up">

                        <img src={meat} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Meat
                        </h2>

                        <p className='cate' >fresh meat at your reach</p>
                    </li>

                    <li className="ff-category" data-aos="fade-up">

                        <img src={fish} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Fish
                        </h2>

                        <p className='cate' >Feast on any kind of  fresh fish you need</p>

                    </li>

                    <li className="ff-category" data-aos="fade-up">

                        <img src={turkey} alt="chicken-icon" className="ff-icon" />

                        <h2>
                            Turkey
                        </h2>

                        <p className='cate' >we sell frozen turkey too</p>
                    </li>


                </ul>




            </section>


            <section id='section2' className="about-section">


                <div className="about-section-content">

                    <div data-aos="fade-up" className="asc-heading ">
                        ABOUT US
                    </div>

                    <div data-aos="fade-up" className="asc-subheading">
                        our Journey
                    </div>

                    <p data-aos="fade-up" className="asc-text">
                        Welcome to Azimah Cold Food Store Nigeria Limited, a culinary haven for frozen food enthusiasts. Our journey began in 2014 at the Mandate exit gate in Ilorin, Kwara State, Nigeria. From these roots, we have rapidly grown to become a key player in the vibrant frozen food market.
                    </p>

                    <Link data-aos="fade-up" to="/about" className="asc-cta">
                        learn more...
                    </Link>

                </div>

                <div className="about-section-image">

                    <img data-aos="fade-up" src={logistics} alt="" className="logistics" />

                </div>



            </section>

            <div className="wave-container">
                <svg className="wave" viewBox="0 0 1440 200">
                    <path fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,37.3C640,21,800,43,960,58.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>



            <div className="gallery-section">

                <div data-aos="fade-up" className="gs-heading">Gallery/Facilities</div>

                <h2 data-aos="fade-up" className="galllery-subheading">
                    Explore Our Modern Facilities and Diverse Gallery – Where Freshness Meets Innovation. Witness the Journey of Quality Frozen Foods Through a Visual Feast of Our State-of-the-Art Facilities.
                </h2>

                <>
                    <Carousel data-aos="fade-up" className='carousel' autoplay>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image1} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image2} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image3} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image4} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image5} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image6} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image7} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image8} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image9} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image10} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image11} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image12} alt="" />
                        </div>
                        <div>
                            <img className="h-carousel-item max-w-full rounded-lg" src={image13} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={image14} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={image15} alt="" />
                        </div>

                    </Carousel>
                </>



            </div>




            <section id="section4" className="contacts-section">

                <h1 data-aos="fade-up" className="get-in-touch">
                    Get In Touch
                </h1>

                <h2 data-aos="fade-up" className="contact-subheading">
                    Contact Us for Inquiries, Orders, and Explore the Frosty World of Our Cold Room Specialties. Your Gateway to Exceptional Frozen Delights Awaits
                </h2>


                <div data-aos="fade-up" className="contact-body">

                    <div className="contact-box">

                        <div data-aos="fade-up" className="cb-icon-container">

                            <img src={locate} alt="" className="cb-icon" />
                        </div>


                        <div data-aos="fade-up" className="cb-content">

                            <div className="cbc-head">
                                ADDRESS
                            </div>

                            <div className='cb-text-cont' >
                                <p className="cb-text">
                                    2nd Gate exist mandate market ilorin(ilorin Branch)
                                </p>

                                <p>Owode market opposit femtech it(Offa Branch)</p>


                            </div>

                        </div>


                    </div>

                    <div data-aos="fade-up" className="contact-box">

                        <div className="cb-icon-container">

                            <img src={phone} alt="" className="cb-icon" />
                        </div>


                        <div className="cb-content">


                            <div className="cbc-head">
                                PHONE
                            </div>

                            <div className='cb-text-cont ' >

                                <p className="cb-text ">
                                    hop on a call and get to us right away. we are always available to listen
                                </p>

                                <p className="cb-text ">
                                    +234 6707653444
                                </p>


                            </div>

                        </div>



                    </div>
                    <div data-aos="fade-up" className="contact-box">
                        <div className="cb-icon-container">

                            <img src={mail} alt="" className="cb-icon" />
                        </div>


                        <div className="cb-content">


                            <div className="cbc-head">
                                EMAIL
                            </div>

                            <div className='cb-text-cont' >
                                <p className="cb-text">
                                    2nd Gate exist mandate market ilorin(ilorin Branch)
                                </p>
                            </div>

                        </div>


                    </div>


                </div>



            </section>


            <section id='section3' className="featured-products">

                <h1 data-aos="fade-up" className="fp-heading">
                    Our Featured Products
                </h1>


                <h2 className="fp-subheading">
                    Explore Our Premium Selection of Frozen Food Products. Elevate Your Culinary Experience with Unparalleled Quality and Flavor."





                </h2>

                <div className="fp-container">

                    <div data-aos="fade-up" className="product-container">

                        <div className="pc-header">

                            <img src={hakefish} alt="" className="product-image" />
                        </div>




                        <p className="product-text">
                            Hake fish
                        </p>

                    </div>




                    <div data-aos="fade-up" className="product-container">

                        <img src={herringfish} alt="" className="product-image" />


                        <div className="product-text">

                            <p> Herring Fish (panla)</p>



                        </div>


                    </div>






                    <div data-aos="fade-up" className="product-container">

                        <img src={mackrel} alt="" className="product-image" />


                        <p className="product-text">
                            Mackrel fish
                        </p>


                    </div>


                    <div data-aos="fade-up" className="product-container">

                        <img src={cw} alt="" className="product-image" />

                        <p className="product-text">
                            Chicken Wings
                        </p>


                    </div>




                    <div data-aos="fade-up" className="product-container">

                        <img src={hotdog} alt="" className="product-image h-[89%] " />

                        <p className="product-text">
                            Hotdog
                        </p>


                    </div>





                    <div data-aos="fade-up" className="product-container">

                        <img src={tfm} alt="" className="product-image h-[89%] " />

                        <p className="product-text">
                            Hotdog
                        </p>


                    </div>

                </div>



            </section>





            <Footer />

        </div>
    )
}

export default Home