import React from 'react'

import Parent from './Parent';
import Child from './Child';

const Grandparent = () => {

  return (
    <div className="component">
      <p>Grandparent</p>
      <Parent>
        <Child/>
      </Parent>
    </div>
  )
}

export default Grandparent;