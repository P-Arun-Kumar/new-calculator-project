import React, { useContext } from 'react'

const Display = ({input}) => {
  
  return (
    <input type='text' value={input} readOnly/>
  )
}

export default Display