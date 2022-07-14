import React from 'react'

const Child = (props) => {
  return (
    <div className="component">
      <p>Child</p>
      <button onClick={props.decrementHandler}>{'<'}</button>
      <button onClick={props.incrementHandler}>{'>'}</button>
      <p>Count: {props.count}</p>
    </div>
  )
}

export default Child