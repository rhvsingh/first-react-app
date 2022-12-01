import React from 'react'

import QuizStyles from '../../pages/quizapp.module.css'

const QuizStart = (props) => {

    function startQuiz() {
        props.quizStart(true)
    }

    return (
        <div className={QuizStyles.frontQuiz}>
            <h1>Quiz App</h1>
            <p>Give answers and check your score</p>
            <button className={QuizStyles.quizStartButton} onClick={startQuiz}>Start quiz</button>
        </div>
    )
}

export default QuizStart