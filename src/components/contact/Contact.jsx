
import portfolio from '/images/tanishakimage.jpeg';

// import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="contact_section_left">
        <div className="contact_image">
          <img src={portfolio} alt="" />
        </div>
        <div className="contact_logos">
          <div className="contact_icons">
            <a href="https://github.com/Tanishak10789"><FaGithub /></a>
          </div>
          <div className="contact_icons">
            <a href="https://www.linkedin.com/in/tanishak-agarwal-2b6196258/"><FaLinkedin /></a>
          </div>
          <div className="contact_icons">
            <a href="https://wa.me/+919252129989"><FaWhatsappSquare /></a>
          </div>
        </div>
      </div>
      <div className="contact_section_right">
        <div className="thnxmsg">
          Thank you for visiting <span>:)</span> <br />
          Feel free to reach out if you have any questions or would like to discuss potential collaborations.
        </div>
        <form  className="contact_form" autoComplete="off">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="tel" placeholder='Ph.no' />
          <textarea placeholder='Message' />
          <button className='smbtBTN' type="submit"> Send &gt; </button>
        </form>
      </div>

    </section>
  )
}

export default Contact