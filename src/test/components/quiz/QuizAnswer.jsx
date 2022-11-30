import React from 'react'

import QuizStyles from '../../pages/quizapp.module.css'

const QuizAnswer = ({ quizReset, data }) => {
    let scoreCount = 0
    return (
        <div>
            {
                data.map((details, i) => {
                    return (
                        <div className={QuizStyles.questionContainer} key={i}>
                            <div className={QuizStyles.questionContent}>
                                {details.question}
                            </div>
                            <ul className={'d-flex my-1 gap-1 answer ' + QuizStyles.quizOptions}>
                                {details.options.map((item, i) => {

                                    if (item.isSelected) {
                                        if (details.correct_answer === item.option) {
                                            scoreCount += 1
                                        }
                                    }
                                    return (
                                        <li key={i} className={item.isSelected ? details.correct_answer === item.option ? QuizStyles.correct : QuizStyles.wrong : details.correct_answer === item.option ? QuizStyles.correct : QuizStyles.optionsLeft}>{item.option}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
            }
            <div>You scored {scoreCount}/{data.length} correct answers <button onClick={() => { quizReset(false) }}>Play again</button></div>
        </div>
    )
}

export default QuizAnswer