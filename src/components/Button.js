import React, { useContext } from 'react'


const Button = ({values,handleClick, handleClear}) => {
  
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