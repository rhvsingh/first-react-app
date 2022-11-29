import React from 'react'

const QuizStart = (props) => {

    function startQuiz() {
        props.quizStart(true)
    }

    return (
        <div className="frontQuiz">
            <h1>Quiz App</h1>
            <p>Give answers and check your score</p>
            <button onClick={startQuiz}>Start quiz</button>
        </div>
    )
}

export default QuizStart