import React from 'react'
import {Link, NavLink} from 'react-router-dom'  
import {FiLinkedin, FiTwitter} from 'react-icons/fi'
import {RiGithubLine} from 'react-icons/ri'
import {links} from '../data'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <article className='footer__box'>
                <Link to="/" className='logo'><h1>GYM</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam atque dignissimos, tempore maxime rem delectus!</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/anita-ikediashi-a61668188" target='_blank'><FiLinkedin/></a>
                    <a href="https://twitter.com/Anita_ikediashi" target='_blank'><FiTwitter/></a>
                    <a href="https://github.com/AnitaIkediashi" target='_blank'><RiGithubLine/></a>
                </div>
            </article>

            <article className='footer__box'>
                <h4>Quick Links</h4>
                <ul className='footer__links'>
                    {
                        links.map(({name, path}, index) => {
                            return (
                            <li key={index}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                            )
                        })
                    }
                </ul>
            </article>

            <article className="footer__box">
                <h4>Subscribe for newsletters</h4>
                <form>
                    <input type="text" placeholder='Email' />
                    <button className='btn btn-primary'>Subscribe</button>
                </form>
            </article>
        </div>
        <small>Copyright &copy; 2022 designed by Anita Ifeoma Ikediashi</small>
    </footer>
  )
}

export default Footer