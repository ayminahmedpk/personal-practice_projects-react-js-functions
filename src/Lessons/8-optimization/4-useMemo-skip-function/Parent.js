import React, {useMemo, useState } from 'react'

const Parent = () => {
  
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const decrementOne = () => {setCountOne(prevCount => prevCount - 1);};
  const incrementOne = () => {setCountOne(prevCount => prevCount + 1);};
  
  const decrementTwo = () => {setCountTwo(prevCount => prevCount - 1);};
  const incrementTwo = () => {setCountTwo(prevCount => prevCount + 1);};

  
  const expensiveFunction = () => {
    console.log('Expensive function executed - ', Math.floor(Math.random()*100))
    return countTwo * 10;
  };

  // 2. With useMemo, we can make memoize the value of countTwoTenfold and use
  //    that value instead - thus making expensiveFunction() run only when
  //    needed (when countTwo changes), not automatically at every single
  //    re-render.
  const countTwoTenfold = useMemo(expensiveFunction, [countTwo]);
  

  // 1. Since countTwoTenfold requires expensive function to execute, every time
  //    this component re-renders for any reason (eg, countOne changing), the
  //    expensive function will run whether needed or not.
  // const countTwoTenfold = expensiveFunction();
  

  return (
      <div className='component'>
        <p>Parent</p>
        <p>Count One: {countOne}</p>
        <div>
          <button onClick={decrementOne}>{'<'}</button>
          <button onClick={incrementOne}>{'>'}</button>
        </div>
        <p>Count Two: {countTwo}</p>
        <p>Count Two Tenfold: {countTwoTenfold}</p>
        <div>
          <button onClick={decrementTwo}>{'<'}</button>
          <button onClick={incrementTwo}>{'>'}</button>
        </div>
      </div>
  )
}

export default Parent;