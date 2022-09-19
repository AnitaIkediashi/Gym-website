import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'
import { useState } from 'react'


const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const menuBtnClicked = () => setIsNavShowing(!isNavShowing)
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}><h1>GYM</h1></Link>
            <ul className={isNavShowing ? 'nav__links active' : 'nav__links'}>
                {
                  links.map(({name, path}, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={path} className={({isActive}) => isActive ? 'active-link' : ''} onClick={menuBtnClicked}>{name}</NavLink>
                      </li>
                    )
                  })
                }
            </ul>
            <div className="hamburger-btn" onClick={menuBtnClicked}>
              {isNavShowing ? (<FaTimes/>) : (<FaBars/>)}
            </div>
        </div>
    </nav>
  )
}

export default NavBar