import React from 'react'

import Child from './Child';

const Parent = () => {

  return (
    <div className="component">
      <p>Parent</p>
      <Child
        overriddenProp = 'overridden value'
        numberProp     = {7}
        stringProp     = {5}
      />
    </div>
  )
}

export default Parent;