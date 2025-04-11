import React, { useState } from 'react'
import newquestions from './NewData'
import questions from '../data'
const NewQuizApp = () => {
  let [currentIndex,setCurrentIndex]= useState(0) // 
  let [marks,setMarks] = useState(0)
  let [isfinished,setIsfinished]=useState(false)
  let currentQuestion = newquestions[currentIndex]
  console.log(marks)
  console.log(isfinished)
  let handleNext = () => {
    setCurrentIndex(currentIndex+1)
    if(currentIndex == questions.length) {
      setIsfinished(true)
    }
  } 
  let handleOptions =(option) =>{
    if(option === currentQuestion.answer){
      setMarks(marks+1)
    }
  }
  let handleRestart = () => {
    setCurrentIndex(0)
    setIsfinished(false)
    setMarks(0) 
  }
  return (
    <div>
      <h1>Quiz Application</h1>
      {isfinished ? (<div>
        <h1> Your Score: {marks}</h1>
        <button onClick={handleRestart}>Restart</button>
        </div>) : ( <div>
          <div className='questions'>
      <h1>{currentQuestion.question}</h1>
      <div>
      {currentQuestion.options.map((option)=>(
        <button onClick={()=>handleOptions(option)}>
          {option}
        </button>
      ))}
      </div>
      <button onClick={handleNext}>Next</button>
      </div>
          </div>)
      
    }
    </div>
  )
}

export default NewQuizApp