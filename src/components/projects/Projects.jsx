import ProjectCard from './ProjectCard'
import './Projects.css'
import MovieSite from '/images/MovieSite.png'
import LegalYodhaImg from '/images/LegalYodhaImg.png'
import AxsImg from '/images/AxsImg.png'
import WanderStoriesImg from '/images/WanderStoriesImg.png'
import ClientPortfolioImg from '/images/ClientPortfolioImg.png'
import CaraImg from '/images/CaraImg.png'



const Projects = () => {

    const projects = [
        {
            imgUrl: MovieSite,
            name: 'MovieFreak',
            description: 'Discover your next favorite film with our curated movie database, featuring reviews, ratings, and personalized recommendations.',
            liveLink: 'https://movie-website-zeta-sand.vercel.app/',
            githubLink: '#'
        },
        {
            imgUrl: LegalYodhaImg,
            name: 'Legal Yodha',
            description: 'Developed a responsive website to bring a legal and accounting firm online, projecting professionalism and expertise.',
            liveLink: 'https://legal-yodha.vercel.app/',
            githubLink: '#'
        },
        {
            imgUrl: AxsImg,
            name: 'AXS',
            description: 'Experimented with Three.js to increase user interactivity and overall website design. Made use of technical documentation and online resources to make it hapen.',
            liveLink: 'https://axs-3js.vercel.app/',
            githubLink: '#'
        },
        {
            imgUrl: WanderStoriesImg,
            name: 'Wander Stories',
            description: 'Travel Blogging Website providing a platform with great User Interface for them to read and share travel blogs with WEB3 technology integrated. ',
            liveLink: 'https://aryan5464.github.io/WanderStories/',
            githubLink: '#'
        },
        {
            imgUrl: ClientPortfolioImg,
            name: 'Client Portfolio',
            description: 'Portfolio Website for a Canadian clients.',
            liveLink: 'https://client-portfolio-freelance.vercel.app/',
            githubLink: '#'
        },
        {
            imgUrl: CaraImg,
            name: 'E-commerce Website',
            description: 'Cara is a 100% responsive e-commerce website making it compatible with all the devices.',
            liveLink: 'https://ecommerce-website-project-phi.vercel.app/',
            githubLink: '#'
        },
        // Add more project objects as needed
    ];

    return (
        <section className='projectSection' id='projects'>
            <div className='projectSectionHeading'>Projects Worked On</div>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index} // Add a unique key prop for each ProjectCard
                        imgUrl={project.imgUrl}
                        name={project.name}
                        description={project.description}
                        liveLink={project.liveLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects