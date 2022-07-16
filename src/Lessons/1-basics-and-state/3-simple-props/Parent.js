import React from 'react'
import { useState } from 'react';

import Child from './Child';

const StatefulComponent = () => {

  const [count, setCount] = useState(0);

  // setCount using accepting function rather than object, similar to setState
  // better for operations based on previous values
  const incrementHandler = () => setCount(prevCount => prevCount + 1);
  const decrementHandler = () => setCount(prevCount => prevCount - 1);

  return (
    <div className="component">
      <p>Parent</p>
      <Child
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        count={count}
      />
    </div>
  )
}

export default StatefulComponent