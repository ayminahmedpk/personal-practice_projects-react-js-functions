// Written as old code, without worrying about React18 strict mode's double rendering

import React, { useEffect } from 'react'

const Child = (props) => {

  // Strict mode kill these. Must do more research.
  // Effects are applied/executed in order.


  // Runs only on first mount
  useEffect(() => {console.log('[Mounted] (componentDidMount)');}, []);
  
  // shouldComponentUpdate (only when count changes, not unimporant variable)
  // also on first mount, because technically count was changed (it was set)
  useEffect(() => {
    console.log('[Count changed] (shouldComponentUpdate - true)');
  }, [props.count] )
  
  // componentDidUpdate (any re-render, but also on first render)
  useEffect(() => {console.log('[Render] (componentDidUpdate + first render)');});

  // Runs only unmount
  useEffect(() => {
    return (() => {console.log('[Unmount] (componentWillUnmount)')})
  }, []);

  return (
    <div className="component">
      <p>Child</p>
    </div>      
  )
}

export default Child;