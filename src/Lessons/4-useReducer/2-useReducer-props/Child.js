import React from 'react'

// Will need to import relevant action creators if we are to dispatch actions
// from this component
import {
  write     ,
  increment ,
  decrement ,
  reset     ,
} from './Reducer/MyActionCreators'

const Child = ({count, textValue, dispatch}) => {
  return (
    <div className="component">
      <p>Child</p>
      <p>Parent's count: {count}</p>
      <p>Parent's text Value: {textValue}</p>
      <div>
        <button onClick={() => {dispatch(decrement())}}>{'<'}</button>
        <button onClick={() => {dispatch(increment())}}>{'>'}</button>
      </div>
      <input
        type="text"
        value={textValue}
        onChange={(event) => {dispatch(write(event))}}
      />
      <div>
        <button onClick={() => {dispatch(reset())}}>Reset</button>
      </div>
    </div>
  )
}

export default Child