import React from 'react'
import Header from '../../components/Header'
import AboutWrapper from '../../images/about-wrapper.jpg'
import AboutUs from '../../components/AboutUs'
import Mission from '../../components/Mission'
import Testimonials from '../../components/Testimonials'
import './about.css'

const About = () => {
  return (
    <>
      <Header title='About Us' image={AboutWrapper}></Header>
      <AboutUs/>
      <Mission/>
      <Testimonials/>
    </>
  )
}

export default About