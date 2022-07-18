import React, { useState } from 'react'

import Child from './Child'

const Parent = () => {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const decrement = () => {setCount(prevCount => prevCount - 1);};
  const increment = () => {setCount(prevCount => prevCount + 1);};

  const writeText = (event) => {setText(event.target.value);};

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
        <Child text={text}/>
      </div>
  )
}

export default Parent;