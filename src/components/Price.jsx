import React from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs'
import Card from '../pages/UI/Card'

const Price = () => {
  return (
    <section className="price">
        <div className="container">
            <div className="heading">
                <span className="icon"><BsFillBagCheckFill/></span>
                <h3>price list</h3>
            </div>
            <div className="price__container">
                <Card className='price__card'>
                    <h4>standard</h4>
                    <p>$150</p>
                    <ul className='price__card-lists'>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                    <button className='price__btn'>purchase</button>
                </Card>
                <Card className='price__card'>
                    <h4>master</h4>
                    <p>$250</p>
                    <ul className='price__card-lists'>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                        <li>Feature 5</li>
                        <li>Feature 6</li>
                    </ul>
                    <button className='price__btn'>purchase</button>
                </Card>
                <Card className='price__card'>
                    <h4>pro</h4>
                    <p>$400</p>
                    <ul className='price__card-lists'>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                    <button className='price__btn'>purchase</button>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Price