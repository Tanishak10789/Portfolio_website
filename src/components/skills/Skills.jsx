import './Skills.css'
// front end
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";


// backend
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

//orhers
import { IoLogoFigma } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiCanva } from "react-icons/si";

const Skills = () => {
    return (
        <section className='skillSection' id='skills'>
            <section className="innerSkillSection">
                <div className="skillLeft">
                    <h1>My Skills</h1>
                </div>

                <div className="skillRight">
                    <div className="skillRow">
                        <div className='skillRowHeading'>Front-end</div>
                        <div className="skills">
                            <FaReact className='skillIcon' />
                            <IoLogoJavascript className='skillIcon' />
                            <TiHtml5 className='skillIcon' />
                            <IoLogoCss3 className='skillIcon' />
                            <RiNextjsFill className='skillIcon' />
                            <SiTailwindcss className='skillIcon' />
                            <FaBootstrap className='skillIcon' />

                        </div>
                    </div>
                    <div className="skillRow">
                        <div className='skillRowHeading'>Back-end</div>
                        <div className="skills">
                            <FaNodeJs className='skillIcon' />
                            <SiExpress className='skillIcon' />
                            <FaGolang className='skillIcon' />
                            <BiLogoPostgresql className='skillIcon' />
                            <SiMongodb className='skillIcon' />
                        </div>
                    </div>
                    <div className="skillRow">
                        <div className='skillRowHeading'>Languages & Tools</div>
                        <div className="skills">
                            <IoLogoFigma className='skillIcon' />
                            <SiPostman className='skillIcon' />
                            <TbBrandCpp className='skillIcon' />
                            <SiCanva className='skillIcon' />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Skills