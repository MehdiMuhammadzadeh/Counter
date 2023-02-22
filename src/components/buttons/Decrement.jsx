
import React, { useContext } from 'react'
import CounterContext from '../../context/Context';


function Decrement() {

  const counterContext = useContext(CounterContext)

  return (
    <button onClick={()=> counterContext.dispatch({type: 'DECREMENT'})} className='btn btn-secondary m-1'>-</button>
  )
}

export default Decrement; 



// import React, { useContext } from 'react'
// import CounterContext from '../../context/Context';
// const Decrement = () => {
//   const counterContext = useContext(CounterContext)
//   return (
//     <button onClick={()=> counterContex.dispatch({type: 'DECREMENT'})} className='btn btn-secondary m-1'>-</button>
//   )
// }

// export default Decrement;