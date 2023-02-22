import React, { useContext } from 'react'
import CounterContext from '../../context/Context'

function Zero() {

const counterContext = useContext(CounterContext)

  return (
    <button className='btn btn-warning'>{counterContext.count}</button>
  )
}

export default Zero