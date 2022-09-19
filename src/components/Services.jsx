import React from 'react'
import {services} from '../data'
import {GiGymBag} from 'react-icons/gi'

const Services = () => {
  return (
    <section className='services'>
        <div className="container">
            <div className="heading">
                <span className='icon'><GiGymBag/></span>
                <h3>services</h3>
            </div>
            <div className="service__container">
                {
                    services.map(({id, image, text}) => {
                        return (
                            <article className='service__box' key={id}>
                                <img src={image} alt={text} />
                                <p>{text}</p>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Services