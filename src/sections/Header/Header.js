import './Header.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { NavItem, Button, NavItemDropdown } from '../../components/index';

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt=''/>
        </Link>
        <Button>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/#" className="nav-link">Features</Link>
            </NavItem>
            <NavItemDropdown>
              <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Learn
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/#" className="dropdown-item">Learn Bootstrap</Link></li>
                <li><Link to="/#" className="dropdown-item">Where to go next</Link></li>
              </ul>
            </NavItemDropdown>
            <NavItem>
              <Link to="/Profile" className="nav-link">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="./index-ar.html" className="nav-link">عربي</Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
