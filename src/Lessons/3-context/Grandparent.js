import React from 'react'
import { useState } from 'react'

import Parent from './Parent'

import MyContext from './MyContext'

const Grandparent = () => {

  const [count, setCount] = useState(0);
  const decrement = () => { setCount(count - 1) };
  const increment = () => { setCount(count + 1) };

  return (
    <MyContext.Provider value={{count, decrement, increment}}>
      <div className="component">
        <p>Grandparent</p>
        <p>Count: {count}</p>
        <Parent/>
      </div>
    </MyContext.Provider>

  )
}

export default Grandparent