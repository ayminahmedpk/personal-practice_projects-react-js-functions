

import { useState } from "react";


const useCount = () => {

  let [count, setCount] = useState(0);
  
  const decrement = () => {setCount(prevCount => prevCount - 1)};
  const increment = () => {setCount(prevCount => prevCount + 1)};
  
  return [count, increment, decrement];
  
}


export default useCount;