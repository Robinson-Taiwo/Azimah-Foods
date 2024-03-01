import React from 'react'
import instagram from "../assets/icons/mdi_instagram.svg"
import x from "../assets/icons/x.svg"
import call from "../assets/icons/call.svg"
import location from "../assets/icons/location.svg"
import facebook from "../assets/icons/facebook.svg"
import linkedin from "../assets/icons/linkedin.svg"
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (

        <div className='section-footer'>

            <div className="footer-first-div">
                <div className="footer-first-section-col">

                    <div className="footer-first-header">

                        <img src={x} className='footer-logo' alt="" />


                        <p className="footer-text">
                            Azimah Cold Food Store Nigeria Limited is a vibrant business that began its journey in 2014. Located at the Mandate exit gate in Ilorin, Kwara State, Nigeria, it has swiftly established itself as a prominent player in the frozen food market.
                        </p>
                    </div>


                    <div className="demacate">
                        Terms of Use <span className='patition'></span>  Privacy Policy
                    </div>

                </div>




                <div className="footer-col">

                    <h2>Useful Links</h2>

                    <Link className='lmao' to="/" >Home</Link>
                    <Link className='lmao' to="/about">About Us</Link>



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

                        <p>+234 6707653444</p>
                    </div>


                    <div>
                        <img src={location} alt="" />

                        <h2>2nd Gate exist mandate market ilorin(ilorin Branch)</h2>

                        <h2>Owode market opposit femtech it(Offa Branch)</h2>
                    </div>

                </div>



            </div>


            <div className="reserved">

                <p >
                    All rights reserved. © Azimah Ltd.
                </p>
            </div>



        </div>

    )
}

export default Footer