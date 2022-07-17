import React from 'react'

const Child = (props) => {
  
  return (
    <div className='component'>
      <p>Child</p>
      <button onClick={() => {props.inputRef.current.focus()}}>Focus</button>
    </div>
  )
};

export default Child;