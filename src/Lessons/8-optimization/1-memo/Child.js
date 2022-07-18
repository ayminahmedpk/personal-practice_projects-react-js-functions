import React from 'react'

const Child = (props) => {
  return (
    <div className='component'>
        <p>Child</p>
        <p>Parent text: {props.text}</p>
      </div>
  )
}

// export default Child;
export default React.memo(Child);

// Will update on text change (prop changed) but not on count change (props
// unchanged).