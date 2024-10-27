import './Experience.css'
import ExpCard from './ExpCard';

const Experience = () => {
    const expCardsData = [
        {
            heading: 'Full-Stack Developer',
            subHeading: 'Freelance',
            timeSpan: 'June 2023 - Present',
            desc1: '- Full-stack freelancer dedicated to crafting intuitive, user-friendly websites and continually expanding skills.',
            desc2: '- Gained hands-on project management experience, by leading teams to successful project outcomes.'
        },
        {
            heading: 'Web-Developer Intern',
            subHeading: 'Duranz IT Solutions',
            timeSpan: 'July 2023 - Sep 2023',
            desc1: '- I developed Rentellar, a comprehensive SaaS application, utilizing Next.js, Golang, and MongoDB.',
            desc2: '- This project provided valuable hands-on experience in Agile Software Development principles.'
        },
        {
            heading: 'Open-Source Contributor',
            subHeading: 'GSSOC',
            timeSpan: 'May 2023 - Aug 2023',
            desc1: '- Active contributor to open source projects, recognized within the top 1% and ranked among the top 200 contributors nationwide out of 17,000.',
            desc2: '- Emphasized the value of technical documentation and gained proficiency in multiple programming languages.'
        },
        {
            heading: 'Front-end Developer',
            subHeading: 'Raise Digital',
            timeSpan: 'July 2022 - Nov 2022',
            desc1: '- I completed a remote internship with Raise Digital, where I gained foundational knowledge in web development and design.',
            desc2: '- I learned basic backend logic.'
        }
    ];
    return (
        <section className="experienceSection">
            <div className="expHead">Experience</div>
            <div className='experienceContainer' id='experience'>
                {expCardsData.map((cardData, index) => (
                    <ExpCard
                        key={index}
                        heading={cardData.heading}
                        subHeading={cardData.subHeading}
                        timeSpan={cardData.timeSpan}
                        desc1={cardData.desc1}
                        desc2={cardData.desc2}
                    />
                ))}
            </div>

        </section>
    )
}

export default Experience