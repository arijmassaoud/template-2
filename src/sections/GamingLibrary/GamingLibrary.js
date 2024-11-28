import './GamingLibrary.css'
import {GamingLibraryCard, SectionHeader,SectionWrapper } from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'
const GamingLibrary = () => {
  const Games=[GamingLibraryData.map(game=>{
    return <GamingLibraryCard key={game.id} src={game.src} title={game.title} category={game.category} date_added={game.date_added} hours_played={game.hours_played} downloaded={game.downloaded} />
  })]
  return (
    <>
    <SectionWrapper >

         < SectionHeader> Your Gaming  </SectionHeader>
              
         
          <div className='most-popular-items'>
            {Games}
          </div>
  
   </SectionWrapper>
   </>
  )
}

export default GamingLibrary