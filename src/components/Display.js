import React, { useContext } from 'react'
import CalculatorContext from './CalculatorContext'

const Display = () => {
  let {input} = useContext(CalculatorContext)
  return (
    <input type='text' value={input} readOnly/>
  )
}

export default Display