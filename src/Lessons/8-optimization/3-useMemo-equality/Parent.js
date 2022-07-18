import React, {useMemo, useState } from 'react'

import Child from './Child'

const Parent = () => {
  
  const [count, setCount] = useState(0);

  const [textOne, setTextOne] = useState('');
  const [textTwo, setTextTwo] = useState('');

  const decrement = () => {setCount(prevCount => prevCount - 1);};
  const increment = () => {setCount(prevCount => prevCount + 1);};

  const writeTextOne = (event) => {setTextOne(event.target.value);};
  const writeTextTwo = (event) => {setTextTwo(event.target.value);};


  // 2. This isn't right, as the 'texts' props is an object, and even if its
  // value doesn't change at parent re-render, a new instance is created which
  // will lead to the shallow prop equality check to fail in the child,
  // triggering a re-render
  // const texts = {textOne, textTwo};

  // 3. To fix this, return a memoized object instead, which won't change unless
  //    textOne and/or textTwo change. Since useMemo accepts a function and
  //    memoizes its return value, simply encapsulate the object as the return
  //    value of a function.
  const texts = useMemo(() => ({textOne, textTwo}), [textOne, textTwo]);

  // 4. Trivia - this will NEVER update the texts after initial assignment
  // const texts = useMemo(() => ({textOne, textTwo}), []);

  return (
      <div className='component'>
        <p>Parent</p>
        <p>Count: {count}</p>
        <div>
          <button onClick={decrement}>{'<'}</button>
          <button onClick={increment}>{'>'}</button>
        </div>
        <p>Text: {textOne}</p>
        <input type="text" value={textOne} onChange={writeTextOne}/>
        <p>Text: {textTwo}</p>
        <input type="text" value={textTwo} onChange={writeTextTwo}/>
        
        {/* */}
        <Child texts={texts}/>
        
        {/* 1. The below worked fine, because primitives are evaluated properly
               by the shallow comparison of props. */}
        {/* <Child textOne={textOne} textTwo={textTwo}/> */}
      </div>
  )
}

export default Parent;