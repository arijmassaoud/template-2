import { PrimaryButtons } from '../../components/index'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-main'>
      <video autoPlay muted loop className="background-video">
        <source src="../../assets/images/bg-video.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
      <div className='hero-text'>
    <h6 className='hero-subtitle'>Welcome To Cyborg </h6>
    <h4 className='hero-title'> <em>Browse</em> Our Popular Games Here</h4>
       <PrimaryButtons>
       Browse Now
       </PrimaryButtons>
      
      </div>

    </div>
  )
}

export default Hero