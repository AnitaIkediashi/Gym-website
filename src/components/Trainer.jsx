import React from 'react'
import Card from '../pages/UI/Card'

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className='trainer'>
        <div className="trainer__image">
            <img src={image} alt={name} />
        </div>
        <div className="trainer__socials">
            {
                socials.map(({icon}, index) => {
                    return (
                        <small key={index}>{icon}</small>
                    )
                })
            }
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        
    </Card>
  )
}

export default Trainer