import React, { useState } from 'react'
import Display from './Display'
import ButtonElement from './ButtonElement'
import CalculatorContext from './CalculatorContext'
const Calculator = () => {
    let [input,setInput] = useState('')
    let handleClick = (values) =>{
        if(values== "=") {
            try {
                setInput(eval(input).toString())
            } catch (error) {
                setInput("ERROR")
            }
           
        }
        else {
            setInput(input+values)
        }
        
    }
    let handleClear= () =>{
        setInput('')
    }
    let data = {
        input,
        handleClick,
        handleClear
    }

  return (
    <CalculatorContext.Provider value={data}>
    <div className='calculator'>
        <h1>Calculator</h1>
        <Display />
        <ButtonElement />
    </div>
    </CalculatorContext.Provider>
  )
}

export default Calculator