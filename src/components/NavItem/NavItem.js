import './NavItem.css'
const NavItem = (props) => {
  return (
    <li className="nav-item">{props.children}</li>
  )
}
const NavItemDropdown = (props) => {
    return (
      <li className="nav-item dropdown">{props.children}</li>
    )
  }
const Button = (props) => {
    return (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">{props.children}</button>
    
    )
  }


export default NavItem
export {NavItemDropdown}
export {Button}
