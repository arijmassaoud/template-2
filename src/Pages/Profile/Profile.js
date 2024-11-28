import './Profile.css'
import profileheader from '../../assets/images/profile.jpg'
import {MostPopular} from '../../sections/index'
const Profile = () => {
  return (
    <>
    
    <div className='profile-header'>
      <div className='row '>
      <div className='col-lg-4'>
        <img src={profileheader} alt=''></img>
      </div>
      <div className='col-lg-4 ' >
        
      <div className='off-btn'>
        Offline
      </div>
      <div className='profile-text'>
      <h4>Alan Smithee</h4>
      <p> You Haven't Gone Live yet .Go Live By Touching The Button Below.</p>
      </div> 

      <div className='live-stream'><a href='/#' alt='' > Start Live Stream </a></div>

      </div>
    

      <div className='col-lg-4 align-self-center'>
      <div className='gaming-statistics'>
        <ul>
          <li>Games Downloaded<span> 3</span></li>
          <li>Friends Online <span> 16</span></li>
          <li>Live Streams <span> None</span></li>
          <li style={{border:'none'}}>Clips <span > 29</span></li>
        </ul>
      </div>
      </div>
      </div>
       </div>
      
       <MostPopular/>
     
    </>
  )
}

export default Profile