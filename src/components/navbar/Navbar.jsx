import './Navbar.css'
import { SiNintendogamecube } from "react-icons/si";
import { FaSkullCrossbones } from "react-icons/fa";
import tanishak from '/images/2.png'
import tanishaklogo from '/images/tanishaklogo.png'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="navContainer">
      <div className="navLeft"><img src={tanishaklogo} width={90} alt="Aryan" /></div>

      <div className="navMid">
        <div className={`navMidLinks ${isOpen ? 'open' : ''}`}>

          <FaSkullCrossbones className={`navIcon ${isOpen ? 'show' : ''}`} onClick={toggleNav} />
          <a onClick={toggleNav} href="#home">Home</a>
          <a onClick={toggleNav} href="#about">About</a>
          <a onClick={toggleNav} href="#skills">Skills</a>
          <a onClick={toggleNav} href="#experience">Experience</a>
          <a onClick={toggleNav} href="#projects">Projects</a>
        </div>
        <SiNintendogamecube className={`navIcon ${!isOpen ? 'show' : ''}`} onClick={toggleNav} />
        <FaSkullCrossbones className={`navIcon ${isOpen ? 'show' : ''}`} onClick={toggleNav} />
      </div>

      <div className="navRight">
        <div className="GITbtn">
          Get in touch
        </div>
      </div>
    </section>

  )
}

export default Navbar