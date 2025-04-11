import React from 'react'
import Button from './Button'

const ButtonElement = ({handleClick, handleClear}) => {
    let buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        '0','.','=','+',
    ]
  return (
    <div className='button-elements'>
        
        {buttons.map((btn)=>(
            <Button key={btn} values={btn}  handleClick={handleClick} handleClear={handleClear}/>
        ))}
        <Button values={"C"} handleClick={handleClick} handleClear={handleClear}/>
    </div>
  )
}

export default ButtonElement