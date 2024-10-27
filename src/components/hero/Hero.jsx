import './Hero.css'
import HeroImg from '/images/HeroImg2.png'

const Hero = () => {
  return (
    <section className='heroSection' id='home'>
      <div className="heroLeft">
        <div className='h_1'>FULL-STACK DEVELOPER</div>
        <div className='h_2'>Tanishak Agarwal</div>

        <div className="h_3">
          I&lsquo;m a freelance full-stack web developer, crafting digital solutions from frontend design to backend logic.
        </div>

      </div>

      <div className="heroRight">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  )
}

export default Hero