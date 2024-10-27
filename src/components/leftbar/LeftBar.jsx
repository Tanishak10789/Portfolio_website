import './LeftBar.css'
import tanishaklogo from '/images/tanishaklogo.jpg'
// import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const LeftBar = () => {
    return (

        <section className='leftBar'>
            <div className="leftBarTop">
                <div className="A_logo">
                    <img src={tanishaklogo} width={"55px"} alt="A_logo" />
                </div>
            </div>

            <div className="leftBarMiddle">
                <p>LETS GO - 2024</p>
            </div>

            <div className="leftBarBottom">
                <div className="socialIcons">
                    <a href="https://github.com/Tanishak10789"><FaGithub /></a>
                </div>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/tanishak-agarwal-2b6196258/"><FaLinkedin /></a>
                </div>
                {/* <div className="socialIcons">
                    <a href="https://twitter.com/Aryanjainy"><BsTwitterX /></a>
                </div>
                <div className="socialIcons">
                    <a href="https://www.instagram.com/aryan_.__.___/"><FaInstagram /></a>
                </div> */}
                <div className="socialIcons">
                    <a href="https://wa.me/+919252129989"><FaWhatsappSquare /></a>
                </div>
            </div>
        </section >
    )
}

export default LeftBar