import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';

type NavBarProps = {
  onSectionSelect: (section: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({ onSectionSelect }) => {
  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li onClick={() => onSectionSelect('Main')} style={{ cursor: 'pointer' }}>
          Home
        </li>
        <li onClick={() => onSectionSelect('Projects')} style={{ cursor: 'pointer' }}>
          Projects
        </li>
      </ul>
    </div>
  );
};

export default NavBar;