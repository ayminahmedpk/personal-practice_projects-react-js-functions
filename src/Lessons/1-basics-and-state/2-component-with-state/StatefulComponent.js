import React from 'react'
import { useState } from 'react';

const StatefulComponent = () => {

  const [count, setCount] = useState(0);

  const incrementHandler = () => setCount(count + 1);
  const decrementHandler = () => setCount(count - 1);

  return (
    <div className="component">
      <button onClick={decrementHandler}>{'<'}</button>
      <button onClick={incrementHandler}>{'>'}</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default StatefulComponent