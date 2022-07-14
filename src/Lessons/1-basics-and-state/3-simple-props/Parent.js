import React from 'react'
import { useState } from 'react';

import Child from './Child';

const StatefulComponent = () => {

  const [count, setCount] = useState(0);

  const incrementHandler = () => setCount(count + 1);
  const decrementHandler = () => setCount(count - 1);

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