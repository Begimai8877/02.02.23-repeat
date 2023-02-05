import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className='header__wrapper'>
        <div className='header__logo'>
            <NavLink to ='/' className='header__link' >
                LOGO
            </NavLink>
        </div>
        <nav className="header__nav">
            <NavLink to ="/" className="header__link">
                Home
            </NavLink>
            <NavLink to ="/about" className="header__link">
                About
            </NavLink>
            <NavLink to ="/cart" className="header__link">
                Cart
            </NavLink>
        </nav>
    </div>
  )
}

export default Header