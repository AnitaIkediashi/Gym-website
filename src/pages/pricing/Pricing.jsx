import React from 'react'
import Header from '../../components/Header'
import PriceWrapper from '../../images/image1.jpg'
import Price from '../../components/Price'
import './pricing.css'

const Pricing = () => {
  return (
    <>
      <Header title='Pricing' image={PriceWrapper}></Header>
      <Price/>
    </>
  )
}

export default Pricing