import React, { use, useState } from 'react'
import questions from '../data'
const QuizApplication = () => {
    let [currentIndex,setCurrentIndex] = useState(0)
    let [marks,setMarks] = useState(0)
    let [isfinished,setIsfinished] = useState(false)
    let [selected,setSelected] = useState('')
    let currentQuestion = questions[currentIndex]
    let handleOptions=(option) =>{
        setSelected(option)
    }
    let handleNext= () => {
        if(selected === currentQuestion.answer) {
            setMarks(marks+1)
        }
        setSelected('')
        if(currentIndex+1 < questions.length) {
            setCurrentIndex(currentIndex+1)
        }else {
            setIsfinished(true)
        }
    }
    let handleRestart=() => {
        setCurrentIndex(0)
        setMarks(0)
        setSelected('')
        setIsfinished(false)
    }
  return (
    <div>
        <h1>Quiz Application</h1>
        {isfinished ? (<div>
            <h1>Your Score: {marks}</h1>
            <button onClick={handleRestart}>Restart Quiz</button>
            </div>) : (
                <div>
                    <h1>Q{currentIndex+1}. {currentQuestion.question}</h1>
                    <div>
                        {currentQuestion.options.map((option)=>
                            (<button onClick={()=>{handleOptions(option)}}>
                                {option}
                            </button>)
                        )}
                    </div>
                    <button onClick={handleNext}>
                        Next
                    </button>
                </div>
            )}
    </div>
  )
}

export default QuizApplication