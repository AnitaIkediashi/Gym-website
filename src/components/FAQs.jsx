import React from 'react'
import {AiOutlineQuestion} from 'react-icons/ai'
import { faqs } from '../data'
import FAQ from '../components/FAQ'

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container">
            <div className="heading faqs__heading">
                <span className="icon"><AiOutlineQuestion/></span>
                <h3>faq's</h3>
            </div>
            <div className="faqs__container">
                {
                    faqs.map(({id, question, answer}) => {
                        return (
                            <FAQ key={id} question={question} answer={answer}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs