import React from 'react'
import { useContext } from 'react'

import MyContext from './MyContext';

const Grandchild = () => {

  // A single line replaces MyContext.Consumer wrapper, and having to return
  // the component wrapped in a function's return statement.
  const value = useContext(MyContext);

  return (
    <div className="component">
      <p>Grandchild</p>
      <button onClick={value.decrement}>{'<'}</button>
      <button onClick={value.increment}>{'>'}</button>
      <p>Count: {value.count}</p>
    </div>
  )
}

export default Grandchild