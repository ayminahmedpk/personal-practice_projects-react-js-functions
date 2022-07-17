import React from 'react'

const Child = (props) => {
  
  console.log(props.inputNode);

  return (
    <div className='component'>
      <p>Child</p>
      <button onClick={() => {props.inputNode.focus()}}>Focus</button>
    </div>
  )
};

export default Child;