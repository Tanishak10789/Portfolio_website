import './Projects.css'
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ imgUrl, name, description, liveLink, githubLink }) => {
    return (
        <div className='projectCard'>
            <img src={imgUrl} className='projectImg' alt="projectImg" />
            <div className="projectName">{name}</div>
            <div className="projectDescription">{description}</div>
            <div className="liveNgit">
                <a href={liveLink} className="liveLink">Live<FaExternalLinkAlt /></a>
                <a href={githubLink} className="gitHubLink"><FaGithub /></a>
            </div>

        </div>
    )
}

ProjectCard.propTypes = {
    imgUrl: PropTypes.string.isRequired, // URL of project image (required)
    name: PropTypes.string.isRequired, // Name of the project
    description: PropTypes.string.isRequired, // Project description (required)
    liveLink: PropTypes.string.isRequired, // URL for live demo (required)
    githubLink: PropTypes.string.isRequired, // URL for GitHub repo (required)
};

export default ProjectCard