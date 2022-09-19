import React from 'react'
import {BsFillPeopleFill} from 'react-icons/bs'
import {testimonials} from '../data'
import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {image, title, small, para} = testimonials[index];

    const prevTestimonialBtn = () => {
        setIndex(prev => prev - 1)

        if(index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonialBtn = () => {
        setIndex(prev => prev + 1)

        if(index >= testimonials.length - 1) {
            setIndex(0)
        }
    }
  return (
    <section className="testimonials">
        <div className="container">
            <div className="heading testimonial__heading">
                <span className="icon"><BsFillPeopleFill/></span>
                <h3>client's review</h3>
            </div>
            <div className="testimonial__container">
                <article className="testimonial__box">
                    <div className="testimonial__box-content">
                        <div className="testimonial__box-image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="testimonial__box-title">
                            <h4>{title}</h4>
                            <small>{small}</small>
                        </div>
                    </div>
                    <p>{`"${para}"`}</p>
                </article>         
            </div>
            <div className="testimonial__buttons">
                <button className='prev-btn' onClick={prevTestimonialBtn}><FiChevronLeft/></button>
                <button className='next-btn' onClick={nextTestimonialBtn}><FiChevronRight/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials