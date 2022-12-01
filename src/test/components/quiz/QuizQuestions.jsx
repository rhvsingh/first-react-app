import React from 'react'

import Question from './Question'

import QuizStyles from '../../pages/quizapp.module.css'

const QuizQuestions = ({ data,checkAnswers }) => {
    return (
        <form onSubmit={checkAnswers}>
            <div>
                {data.map((item, i) => <Question details={item} key={i} />)}
            </div>
            <button className={QuizStyles.checkAnswerButton} type='submit'>Check Answers</button>
        </form>
    )
}

export default QuizQuestions