import React from 'react'
import { useState } from 'react';

import ChildNonstrict from './ChildNonstrict';

import ChildStrict from './ChildStrict';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [unimportant, setUnimportant] = useState(0);
  const [mountNonstrictChild, setMountNonstrictChild] = useState(false);
  const [mountStrictChild, setMountStrictChild] = useState(false);
  
  const makeUpdate = () => {setCount(Math.floor(Math.random() * 100));}
  const updateUnimportant= () => {setUnimportant(Math.floor(Math.random() * 100));}
  const toggleNonstrictChild = () => {setMountNonstrictChild(!mountNonstrictChild)};
  const toggleStrictChild = () => {setMountStrictChild(!mountStrictChild)};

  return (
    <div className="component">
      <p>Parent</p>
      <p>Parent count: {count}</p>
      <p>Unimportant count: {unimportant}</p>
      <div> <button onClick={makeUpdate}>Update tree</button></div>
      <div> <button onClick={updateUnimportant}>Update unimporant variable</button></div>
      <div> <button onClick={toggleNonstrictChild}>Toggle ChildNonstrict</button> </div>
      <div> <button onClick={toggleStrictChild}>Toggle ChildStrict (Hacky)</button> </div>
      {mountNonstrictChild ? 
        (
          <ChildNonstrict
            count      = {count}
            setCount   = {setCount}
            unimportant = {unimportant}
          />
        )
        : ''
      }
      {mountStrictChild ? 
        (
          <ChildStrict
            count      = {count}
            setCount   = {setCount}
            unimportant = {unimportant}
          />
        )
        : ''
      }
    </div>
  )
}

export default Parent;