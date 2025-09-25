import React from 'react'
import './Hero.css'
import logo from '../../assets/logo.png'

function Main() {
  return (
    <div className='hero'>
      <img src={logo} style={{width: '340px', height: '76px'}} alt="Logo"/>
      <ul className='hero-selectionMenu'>
        <li>
          <a href="https://github.com/pvs333">
            GitHub
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="https://www.linkedin.com/in/viswasurya-palkumar/">
            LinkedIn
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="https://pvs333.itch.io/">
            itch.io
          </a>
        </li>
      </ul>
      <text>
        viswasuryapalkumar@gmail.com
      </text>
    </div>
  )
}

export default Main