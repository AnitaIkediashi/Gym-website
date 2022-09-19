import React from 'react'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import About2 from '../images/about2.jpg'

const Mission = () => {
  return (
    <section className="mission">
        <div className="container">
            <div className="heading">
                <span className="icon"><GiEarthAfricaEurope/></span>
                <h3>our mission</h3>
            </div>
            <div className="mission__container">
                <div className="mission__container-content">
                    <h4>our mission</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate beatae natus accusantium alias! Ut libero soluta ullam voluptate magni aliquid tempora maxime labore veritatis incidunt!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora nulla repellendus iste, quis blanditiis error, deserunt doloribus, corporis molestias dolor modi mollitia natus similique. Amet harum consectetur quisquam minima, accusantium sequi quos, inventore, voluptatum asperiores delectus illo earum natus!</p>
                </div>
                <div className="mission__container-image">
                    <img src={About2} alt="mission-image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission