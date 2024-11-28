import  './Buttons.css'

const PrimaryButtons = (props) => {
  return (
    <div className='button primary-button'>
      <a href='/#'> {props.children}</a>
    </div>
  )
}
const SecondaryButtons = (props) => {
    return (
        <div className='button secondary-button'>
         <a href='/#'> {props.children}</a>
         </div>
    )
  }
export default PrimaryButtons
export {SecondaryButtons}