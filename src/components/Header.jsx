import React from 'react'

const Header = ({title, image}) => {
  return (
    <header className='hero'>
        <div className="header__wrapper">
            <div className="header__container-image">
                <img src={image} alt="header container image" />
            </div>
            <h2>{title}</h2>
        </div>
    </header>
  )
}

export default Header