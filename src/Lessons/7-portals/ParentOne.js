import React, { useEffect } from 'react'

const ParentOne = (props) => {

  useEffect(() => {props.renderedHandler();}, [])

  return (
    <div className='component'>
      <p>ParentOne</p>
      <div className='portal'></div>
    </div>
  )
};

export default ParentOne;