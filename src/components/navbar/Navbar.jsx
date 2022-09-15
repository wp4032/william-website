import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion'
import './navbar.css'
import logo from '../../assets/logo white.png';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#ventures">Ventures</a></p>
    <p><a href="#science">Science</a></p>
    <p><a href="#design">Design</a></p>
    <p><a href="#news">News</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="william__navbar">
      <div className="william__navbar-links">
        <div className="william__navbar-links_logo">
            <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className="william__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="william__navbar-sign">
        <a href="mailto: williampan@stanford.edu"> <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} type="button">Contact</motion.button> </a>
      </div>
      <div className="william__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="william__navbar-menu_container scale-up-center">
            <div className="william__navbar-menu_container-links">
              <Menu />
              <div className="william__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>  
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar