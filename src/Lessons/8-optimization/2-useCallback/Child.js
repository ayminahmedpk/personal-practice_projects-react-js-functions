import React from 'react'

const Child = (props) => {
  return (
    <div className='component'>
        <p>Child</p>
        <p>Parent text: {props.text}</p>
        <input type="text" value={props.text} onChange={props.writeText}/>
      </div>
  )
}

// export default Child;
export default React.memo(Child);

// Will update on text change (prop changed) but not on count change (props
// unchanged).

// 3. Since the prop writeText's memoized version was received, it does not get
//    recreated at every parent re-render, avoiding unwanted failure of prop
//    equality check and hence the unnecessary re-render.