import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import menu_open from '../../assets/menuIcon.png'
import menu_close from '../../assets/closeIcon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsOpen(true);
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsOpen(false);
  }

  return (
    <div className='navbar'>
      <span>Portfolio</span>

      {!isOpen && (
        <img 
          src={menu_open} 
          onClick={openMenu} 
          alt="open menu" 
          className="nav-mob-open"
        />
      )}

      <ul ref={menuRef} className='nav-menu'>
        <img 
          src={menu_close} 
          onClick={closeMenu} 
          alt="close menu" 
          className="nav-mob-close" 
        />

        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
          </AnchorLink>
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about"); closeMenu(); }}>About me</p>
          </AnchorLink>
        </li>

        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => { setMenu("services"); closeMenu(); }}>Frontend Solutions</p>
          </AnchorLink>
        </li>

        <li className={menu === "experience" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#experience'>
            <p onClick={() => { setMenu("experience"); closeMenu(); }}>Experience</p>
          </AnchorLink>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar