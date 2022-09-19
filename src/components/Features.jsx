import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'
import {features} from '../data'

const Features = () => {
  return (
    <section className='features'>
        <div className="container">
            <div className="heading">
                <span className='icon'><GiShoppingCart/></span>
                <h3>Features</h3>
            </div>
            <div className="features__container">
                {
                    features.map(({id, image, title, price, button}) => {
                        return (
                            <article className='feature__box' key={id}>
                                <div className="feature__box-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h4>{title}</h4>
                                <div className="price">{price}</div>
                                <button className='btn btn-primary'>{button}</button>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Features