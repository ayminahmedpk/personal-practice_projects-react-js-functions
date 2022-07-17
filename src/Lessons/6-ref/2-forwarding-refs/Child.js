import React from 'react'

const Child = React.forwardRef((props, parentRef) => (
  <div className='component'>
    <p>Child</p>
    <input ref={parentRef} type="text" />
  </div>
));

export default Child;