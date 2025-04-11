import React, { useState } from 'react'
import Display from './Display'
import ButtonElement from './ButtonElement'
const Calculator = () => {
    let [input,setInput] = useState('')
    let handleClick = (values) =>{
        if(values== "=") {
            setInput(eval(input).toString())
        }
        else {
            setInput(input+values)
        }
        
    }
    let handleClear= () =>{
        setInput('')
    }
  return (
    <div className='calculator'>
        <h1>Calculator gjhgjhgh     </h1>
        <Display input={input}/>
        <ButtonElement handleClick={handleClick} handleClear={handleClear}/>
    </div>
  )
}

export default Calculator