import React from 'react'
import Header from '../../components/Header'
import ContactWrapper from '../../images/contact-wrapper.jpg'
import ContactPage from '../../components/ContactPage'
import FAQs from '../../components/FAQs'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title='Contact Us' image={ContactWrapper}></Header>
      <ContactPage/>
      <FAQs/>
    </>
  )
}

export default Contact