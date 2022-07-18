import React, { useCallback, useState } from 'react'

import Child from './Child'

const Parent = () => {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const decrement = () => {setCount(prevCount => prevCount - 1);};
  const increment = () => {setCount(prevCount => prevCount + 1);};

  // const writeText = (event) => {setText(event.target.value);};
  // 2. To solve this, send a memoized handler instead, using useCallback:
  const writeText = useCallback((event) => {setText(event.target.value);}, []);

  return (
      <div className='component'>
        <p>Parent</p>
        <p>Count: {count}</p>
        <div>
          <button onClick={decrement}>{'<'}</button>
          <button onClick={increment}>{'>'}</button>
        </div>
        <p>Text: {text}</p>
        <input type="text" value={text} onChange={writeText}/>
        {/* 1. As soon as writeText is passed as prop, basic memoization
            in child stops working. That is because every parent re-render will
            lead to a new instance of writeText function being created, and the
            reference equality in the prop check for the child will fail - thus
            triggering an unnecessary re-render.*/}
        <Child text={text} writeText={writeText}/>
      </div>
  )
}

export default Parent;