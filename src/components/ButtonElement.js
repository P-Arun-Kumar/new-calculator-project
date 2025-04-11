import React, { useContext } from 'react'
import Button from './Button'
import CalculatorContext from './CalculatorContext'

const ButtonElement = () => {
    
    let buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        '0','.','=','+',
    ]
  return (
    <div className='button-elements'>
        
        {buttons.map((btn)=>(
            <Button key={btn} values={btn} />
        ))}
        <Button values={"C"}/>
    </div>
  )
}

export default ButtonElement