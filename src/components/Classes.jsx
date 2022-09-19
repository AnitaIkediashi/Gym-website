import React from 'react'
import {TbYoga} from 'react-icons/tb'
import Card from '../pages/UI/Card'
import { classes } from '../data'

const Classes = () => {
  return (
    <section className="classes">
        <div className="container">
            <div className="heading">
                <span className="icon"><TbYoga/></span>
                <h3>classes</h3>
            </div>
            <div className="classes__container">
                {
                    classes.map(({id, image, icon, time, title, para}) => {
                        return (
                            <Card className='classes__class' key={id}>
                                <div className="classes__class-image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="classes__class-icon">
                                    <span>{icon}</span>
                                    <small>{time}</small>
                                </div>
                                <h4>{title}</h4>
                                <p>{para}</p>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Classes