import React from 'react'
import About1 from '../images/about1.jpg'
import {GiJumpingRope} from 'react-icons/gi'

const AboutUs = () => {
  return (
    <section className="about-us">
        <div className="container">
            <div className="heading">
                <span className='icon'><GiJumpingRope/></span>
                <h3>who we are</h3>
            </div>
            <div className="about-us__container">
                <div className="about-us__image">
                    <img src={About1} alt="about us" />
                </div>
                <div className="about-us__content">
                    <h4>What we do</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur obcaecati accusamus accusantium provident id dolorum, qui tempora corporis. Molestias, quam!</p>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure temporibus a ratione? Adipisci inventore id, aspernatur quam, corporis, itaque libero quasi culpa excepturi dolore eos soluta iste. A animi harum magni aliquam, placeat provident quos labore voluptatem nesciunt deleniti?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs