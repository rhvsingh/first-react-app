import React from 'react'

import QuizStyles from '../../pages/quizapp.module.css'

const Question = ({ details }) => {

    function handleClick(e) {
        details.options.map(data => {
            return data.isSelected = data.option === e.target.value ? true : false
        })
    }
    return (
        <div className={QuizStyles.questionContainer}>
            <div className={QuizStyles.questionContent}>
                {details.question}
            </div>
            <ul className={'d-flex my-1 gap-1 ' + QuizStyles.quizOptions}>
                {details.options.map((item, i) => <li key={i} onClick={(e) => handleClick(e)}>
                    <label htmlFor={details.question + '_' + i}><input type="radio" name={details.question} id={details.question + '_' + i} value={item.option} />{item.option}</label></li>)}
            </ul>
        </div>
    )
}

export default Question