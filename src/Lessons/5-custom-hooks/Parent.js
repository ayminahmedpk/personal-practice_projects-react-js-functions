import React from 'react'

import useCount from './Hooks/useCount';

const Parent = () => {
  
  const [count, increment, decrement] = useCount();
  
  return (
    <div className='Component'>
      <p>Parent</p>
      <p>Count: {count}</p>
      <div>
        <button onClick={decrement}>{'<'}</button>
        <button onClick={increment}>{'>'}</button>
      </div>
    </div>
  )
};

export default Parent;