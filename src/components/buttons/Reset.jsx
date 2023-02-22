import React, { useContext } from 'react'
import CounterContext from '../../context/Context';

const Reset = () => {

  const counterContext =  useContext(CounterContext)

  return (
    <button onClick={()=> counterContext.dispatch({type: 'RESET'})} className='btn btn-dark w-25'>Reset</button>
  )
}

export default Reset;