import React, { useContext } from 'react'
import CounterContext from '../../context/Context';


function Increment() {

  const counterContext = useContext(CounterContext)

  return (
    <button onClick={()=> counterContext.dispatch({type: 'INCREMENT'})} className='btn btn-info ms-1'>+</button>
  )
}

export default Increment; 