import React from 'react'

import Question from './Question'

const QuizQuestions = ({ data,checkAnswers }) => {
    return (
        <form onSubmit={checkAnswers}>
            <div>
                {data.map((item, i) => <Question details={item} key={i} />)}
            </div>
            <button type='submit'>Check Answers</button>
        </form>
    )
}

export default QuizQuestions