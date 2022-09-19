import React from 'react'
import { useState } from 'react'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false)

  return (
    <article className='faq' onClick={() => setIsAnswerShowing(!isAnswerShowing)}>
        <div className="faq__question">
            <h4>{question}</h4>
            <button className="faq__icon">
                {isAnswerShowing ? <FiChevronUp/> : <FiChevronDown/> }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ