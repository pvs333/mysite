import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div className='navbar'>
        <ul className="nav-menu">
            <li>
                Blog
            </li>
            <li>
                Projects
            </li>
            <text style={{fontFamily: 'BigFont', fontSize: '90px', color: '#FD2A39'}} className={'logo'}>
                VISWASURYA PALKUMAR
            </text>
            <li>
                Designs
            </li>
            <li>
                Contact
            </li>
        </ul>
    </div>
  )
}

export default NavBar