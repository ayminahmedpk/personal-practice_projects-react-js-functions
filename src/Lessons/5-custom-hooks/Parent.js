import React from 'react'

import useCount from './Hooks/useCount';

const Parent = () => {
  
  const [count, increment, decrement, reset] = useCount();
  
  return (
    <div className='component'>
      <p>Parent</p>
      <p>Count: {count}</p>
      <div>
        <button onClick={decrement}>{'<'}</button>
        <button onClick={increment}>{'>'}</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
};

export default Parent;