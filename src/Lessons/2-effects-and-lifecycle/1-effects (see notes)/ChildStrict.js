// Written with a hack keeping React18's strict mode double rendering in mind

import React, { useEffect, useRef } from 'react'

const ChildStrict = (props) => {

  // Strict mode mounts twice (mount -> unmount -> mount.)
  // Local state doesn't persist beyond first unmount.
  // However, since Refs persist regardless of unmounts / rerenders, use Refs
  // to skip first unnecessary mount/unmount.

  const effectOneMatters = useRef(false);
  const effectTwoMatters = useRef(false);

  
  // effectOne - componentDidMount
  // Runs only once on proper final mount (not first mount or future rerenders)
  useEffect(() => {
    if(effectOneMatters.current === true) {
      console.log('The proper final mount - not rerender');
    }
    return () => {
      effectOneMatters.current = true;
    }
  }, []);

  // Runs only once on proper final unmount (not first unmount)
  useEffect(() => {
    return () => {
      if(effectTwoMatters.current === false) {
        effectTwoMatters.current = true;
        return;
      }
      else {
        console.log('The proper final unmount');
      }
    }
  }, []
  )





  
  
  // componentDidUpdate (but also on first render)
  // useEffect(() => {console.log('[Render]');});
  
  // shouldComponentUpdate (only when count changes, not unimporant)
  // useEffect(() => {
  //   console.log('[Count changed]');
  // }, [props.count] )

  // Runs only on mount and final unmount
  // useEffect(() => {
  //   return (() => {console.log('[Unmount]')})
  // }, []);

  return (
    <div className="component">
      <p>ChildStrict (Hacky)</p>
    </div>      
  )
}

export default ChildStrict;