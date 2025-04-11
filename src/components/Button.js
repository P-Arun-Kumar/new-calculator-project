import React, { useContext } from 'react'
import CalculatorContext from './CalculatorContext'


const Button = ({values}) => {
  let {handleClick,handleClear} = useContext(CalculatorContext)
  let handleFunction=(values) =>{
    console.log(values)
    if(values == 'C') {
      handleClear(values)
    }
    else {
      handleClick(values)
    }
  }
  return (
    <button onClick={()=>handleFunction(values)}>{values}</button>
  )
}

export default Button