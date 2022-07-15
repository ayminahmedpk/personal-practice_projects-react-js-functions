import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
  return (
    <div className="component">
      <p>Child</p>
      <Grandchild/>
    </div>
  )
}

export default Child