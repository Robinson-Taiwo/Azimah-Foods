import { useState, FC, useEffect } from "react";
// import React from 'react';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import menu from "../assets/icons/menu.svg"
import close from "../assets/icons/close.svg"
import "./Navbar.css";
import { Link } from "react-router-dom";

interface NavbarProps {
    handleScrollToSection: (sectionId: string) => void;
}
// using gsap to locate the active link and scroll to it
const Navbar: FC<NavbarProps> = ({ handleScrollToSection }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleItemClick: (sectionId: string) => void = (sectionId) => {
        handleScrollToSection(sectionId);
        setActiveItem(sectionId);

        setClicked(false)
    };


    // defining the scrolled state for storing the status of the scrolling
    const [scrolled, setScrolled] = useState(false);

    const [clicked, setClicked] = useState<Boolean>(false)


    const handleClicked = () => {
        setClicked(!clicked)
        console.log(clicked)
    }

    useEffect(() => {
        // defining the handlescroll  function so that isScrolled is when the window.scrollY is greater than 0
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            // console.log(window.scrollY)
            // setting the scrolled value to the value of the  current scroll Y position
            setScrolled(isScrolled);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <div className={`navbar-container ${scrolled ? "isScrolled" : "navbar-container"}`} >

            <div className="navbar-section-logo">
                LOGO
            </div>

            <div className="ham-menu">
                <img onClick={handleClicked} src={menu} alt="" className="menu-bar" />
            </div>

            <div className={clicked ? "phone-menu" : "navbar-section-links"}>
                <div className="navbar-section-items">


                    <div className="links-small">
                        <div 

                            className="hidden-bug">
                            <img onClick={handleClicked} src={close} alt="" className="close-bar" />
                        </div>


                        <Link to="/"
                            onClick={() => handleItemClick('section0')}
                            className={`navbar-item ${activeItem === 'section0' ? 'active' : ''}`}
                        >

                            <p>                        Home
                            </p>

                            {activeItem === 'section0' && <div className="active-line"></div>}
                        </Link>

                        <div
                            onClick={() => handleItemClick('section1')}
                            className={`navbar-item ${activeItem === 'section1' ? 'active' : ''}`}
                        >
                            Categories
                            {activeItem === 'section1' && <div className="active-line"></div>}
                        </div>
                        <div
                            onClick={() => handleItemClick('section2')}
                            className={`navbar-item ${activeItem === 'section2' ? 'active' : ''}`}
                        >
                            About
                            {activeItem === 'section2' && <div className="active-line"></div>}
                        </div>
                        <div
                            onClick={() => handleItemClick('section3')}
                            className={`navbar-item ${activeItem === 'section3' ? 'active' : ''}`}
                        >
                            Products
                            {activeItem === 'products' && <div className="active-line"></div>}
                        </div>

                    </div>



                    <div className="but-c">

                        <div
                            onClick={() => handleItemClick('contact')}
                            className={`navbar-item-contact ${activeItem === 'contact' ? 'active' : ''}`}
                        >
                            Contact us

                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Navbar;
