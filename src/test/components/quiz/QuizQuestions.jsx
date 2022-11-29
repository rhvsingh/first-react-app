import React from 'react'

import Question from './Question'

const QuizQuestions = ({data}) => {
  return (

    <div>
        {data.map((item,i)=><Question details={item} key={i} />)}
    </div>
  )
}

export default QuizQuestions