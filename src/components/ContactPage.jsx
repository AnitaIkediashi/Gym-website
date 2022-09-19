import React from 'react'
import Card from '../pages/UI/Card'
import {BsGlobe, BsFillTelephoneFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'


const ContactPage = () => {
  return (
    <section className="contact">
        <div className="container">
            <div className="contact__container">
                <div className="left">
                    <Card className="left__card">
                        <span><GoLocation className='left__card-icon'/></span>
                        <address>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, non.
                        </address>
                    </Card>

                    <Card className="left__card">
                        <span><BsGlobe className='left__card-icon'/></span>
                        <p>www.gym.com</p>
                    </Card>

                    <Card className="left__card">
                        <span><BsFillTelephoneFill className='left__card-icon'/></span>
                        <p>123520087</p>
                    </Card>

                </div>
                <div className="right">
                    <form>
                        <div className="form__input">
                            <input type="text" placeholder='Full Name' required/>
                        </div>
                        <div className="form__input">
                            <input type="email" placeholder='Email' required/>
                        </div>
                        <div className="form__input">
                            <textarea placeholder='Message'></textarea>
                        </div>
                        <button type='submit' className='right__form-btn'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPage