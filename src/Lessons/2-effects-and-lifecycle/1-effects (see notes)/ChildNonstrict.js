// Written as old code, without worrying about React18 strict mode's double rendering

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLayoutEffect } from 'react';

const ChildNonstrict = (props) => {

  // Strict mode kill these. Must do more research.

  // Runs only on first mount
  useEffect(() => {console.log('[Mounted]');}, []);
  
  // componentDidUpdate (but also on first render)
  useEffect(() => {console.log('[Render]');});
  
  // shouldComponentUpdate (only when count changes, not unimporant)
  useEffect(() => {
    console.log('[Count changed]');
  }, [props.count] )

  // Runs only on mount and final unmount
  useEffect(() => {
    return (() => {console.log('[Unmount]')})
  }, []);

  return (
    <div className="component">
      <p>ChildNonstrict</p>
    </div>      
  )
}

export default ChildNonstrict;