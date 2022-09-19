import React from 'react'
import {Link} from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className='header'>
        <div className="container header__container">
            <div className="header__content">
                <h2>Challenge your body, <br /> Feel Good</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolores blanditiis fugit a aut sunt?</p>
                <div className="cta">
                    <Link to="/signIn" className='btn'>get started</Link>
                    <Link to="/signUp" className='btn btn-primary'>sign up</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader