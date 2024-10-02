import React from 'react'
import Logo from "../src/assets/header/Logo.png"

function Header() {
  return (
   <>
   <section className="header-main-sec">
    <div className="container">
      <div className="headr-row">
        <div className="main-logo">
            <img src={Logo} alt="" />
        </div>

        <div className="nav-options">
          <ul className='nav-ul'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Service</li>
            <li>Property</li>
            <li>Contact</li>
          </ul>
        </div>

        <a href="#" className="get-start">
        Get Started
        </a>
      </div>
    </div>
   </section>
   </>
  )
}

export default Header