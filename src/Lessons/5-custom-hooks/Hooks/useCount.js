

import { useState } from "react";


const useCount = () => {

  let [count, setCount] = useState(0);
  
  const decrement = () => { setCount(prevCount => prevCount - 1) } ;
  const increment = () => { setCount(prevCount => prevCount + 1) } ;
  const reset     = () => { setCount(0)                          } ;
  
  return [count, increment, decrement, reset];

}


export default useCount;