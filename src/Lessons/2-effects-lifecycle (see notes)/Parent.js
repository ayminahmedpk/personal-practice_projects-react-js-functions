import React from 'react'
import { useState } from 'react';

import Child from './Child';

import ChildHacky from './ChildHacky';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [unimportant, setUnimportant] = useState(0);
  const [childMounted, setChildMounted] = useState(false);
  const [childHackyMounted, setChildHackyMounted] = useState(false);
  
  const makeUpdate = () => {setCount(Math.floor(Math.random() * 100));}
  const updateUnimportant= () => {setUnimportant(Math.floor(Math.random() * 100));}

  const toggleChild      = () => {setChildMounted(!childMounted)}
  const toggleChildHacky = () => {setChildHackyMounted(!childHackyMounted)}

  return (
    <div className="component">
      <p>Parent</p>
      <p>Parent count: {count}</p>
      <div> <button onClick={makeUpdate}>Update count</button></div>
      <p>Unimportant count: {unimportant}</p>
      <div> <button onClick={updateUnimportant}>Update unimporant count</button></div>
      <br/>
      <div> <button onClick={toggleChild}>Toggle Child</button> </div>
      {/* <div> <button onClick={toggleChildHacky}>Toggle Child (Hacky)</button> </div> */}
      {childMounted ? 
        (
          <Child
            count      = {count}
            setCount   = {setCount}
            unimportant = {unimportant}
          />
        )
        : ''
      }
      {/*       
      {childHackyMounted ? 
        (
          <ChildHacky
            count      = {count}
            setCount   = {setCount}
            unimportant = {unimportant}
          />
        )
        : ''
      } */}
    </div>
  )
}

export default Parent;