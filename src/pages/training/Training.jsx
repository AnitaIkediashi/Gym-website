import React from 'react'
import Header from '../../components/Header'
import TrainingWrapper from '../../images/training-wrapper.jpg'
import Classes from '../../components/Classes'
import Teams from '../../components/Teams'
import './training.css'

const Training = () => {
  return (
    <>
      <Header title='Training Session' image={TrainingWrapper}></Header>
      <Classes/>
      <Teams/>
    </>
  )
}

export default Training