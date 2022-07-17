import React from 'react'

// import Child from './Child';

const Parent = () => {
  

  let inputNode = null;

  const setInputNode = (element) => {
    inputNode = element;
    // console.log(element);
  };

  // console.log(inputNode);

  return (
    <div className='component'>
      <p>Parent</p>
      <input ref={setInputNode} type="text" />
      <button onClick={() => {inputNode.focus()}}>Focus</button>
      {/* <button onClick={() => {console.log(inputNode)}}>Log Node</button> */}
      {/* Difficult to pass callback refs as props, since they don't exist at
          start, and when they do get assigned, it doesn't trigger rerender*/}
      {/* <Child inputNode={inputNode}/> */}
    </div>
  )
};

export default Parent;