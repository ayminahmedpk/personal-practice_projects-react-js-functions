import React from 'react'
import { useState } from 'react';

const StatefulComponent = () => {

  const [count, setCount] = useState(0);

  // setCount using accepting function rather than object, similar to setState
  // better for operations based on previous values
  const incrementHandler = () => setCount(prevCount => prevCount + 1);
  const decrementHandler = () => setCount(prevCount => prevCount - 1);

  return (
    <div className="component">
      <button onClick={decrementHandler}>{'<'}</button>
      <button onClick={incrementHandler}>{'>'}</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default StatefulComponent