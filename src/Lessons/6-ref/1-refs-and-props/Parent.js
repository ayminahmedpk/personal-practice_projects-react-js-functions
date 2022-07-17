import React, { useEffect } from 'react'
import { useRef } from 'react';

import Child from './Child';

const Parent = () => {
  
  const inputRef = useRef(null);

  useEffect(() => {inputRef.current.focus();}, []);

  return (
    <div className='component'>
      <p>Parent</p>
      <input ref={inputRef} type="text" />
      <Child inputRef={inputRef}/>
    </div>
  )
};

export default Parent;