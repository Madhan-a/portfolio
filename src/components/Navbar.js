import React, { useState } from 'react'
import'./Navbar.css'
import logo from'../components/image.png'
import MobileNav from './MobileNav';

const Navbar = () => {
    const[openMenu,setOpenMenu]=useState(false);

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }
    
  return (
    <>
    <MobileNav isopen={openMenu} toggleMenu={toggleMenu}/>
    
    <nav className='nav-wrapper'>
        <div className='nav-content'>
         <img src={logo} alt="" className='logo'/>
            
            <ul>
                <li>
                    <a className='menu-item' href='/Hero'>Home</a>
                </li>
                <li>
                    <a className='menu-item'href='/Skills'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'href='/Work'>Education</a>
                </li>
                <li>
                    <a className='menu-item'href='/Contact'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            </ul>
            <button className='menu-btn' onClick={toggleMenu}>
                <span
                class={'material-symbols-outlined'}
                 style={{fontSize:'1.8rem'}}>{openMenu ? "close":"menu"}</span></button>
          
        </div>
    </nav>
    </>
  )
}

export default Navbar
