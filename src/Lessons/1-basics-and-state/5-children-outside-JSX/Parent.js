import React from 'react'

const Parent = (props) => {

  return (
    <div className="component">
      <p>Parent</p>
      {props.children}
    </div>
  )
}

export default Parent;