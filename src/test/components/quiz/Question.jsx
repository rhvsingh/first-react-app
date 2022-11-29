import React from 'react'

const Question = ({ details }) => {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    let options=[];
    let i;
    for(i = 0; i < details.incorrect_answers.length; i++) {
        options[i] = details.incorrect_answers[i];
    }
    options[i] = details.correct_answer
    let shuffledArray = shuffleArray(options)

    function handleClick() {
        console.log('Select')
    }
    return (
        <div className='question-container py-1'>
            <div className="question-content">
                {details.question}
            </div>
            <ul className='d-flex gap-2 my-1'>
                {shuffledArray.map((item, i) => <li key={i} onClick={handleClick}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Question