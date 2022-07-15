import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div className="component">
      <p>Parent</p>
      <Child/>
    </div>
  )
}

export default Parent