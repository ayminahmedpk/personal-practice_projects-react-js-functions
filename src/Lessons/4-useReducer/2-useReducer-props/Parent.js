import React, { useReducer } from 'react'

import Child from './Child'

import { MyReducer, initialState } from './Reducer/MyReducer'

const Parent = () => {
  const [state, dispatch] = useReducer(MyReducer, initialState);
  return (
    <div className="component">
      <p>Parent</p>
      <p>Count: {state.count}</p>
      <p>Text Value: {state.textValue}</p>
      
      {/* Showing that we can easily pass dispatch, rather than passing
          multiple handlers. The child component can import the action
          creators instead. */}
      <Child
        count     = {state.count}
        textValue = {state.textValue}
        dispatch  = {dispatch}
      />
    </div>
  )
}

export default Parent