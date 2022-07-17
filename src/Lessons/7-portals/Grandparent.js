import React, { useState } from 'react'

import ParentOne from './ParentOne';
import ParentTwo from './ParentTwo';

const Grandparent = () => {

  const [isParentOneRendered, setParentOneRendered] = useState(false);

  const setParentOneRenderedTrue = () => {setParentOneRendered(true)}

  return (
    <div className='component'>
      <p>Grandparent</p>
      <ParentOne renderedHandler={setParentOneRenderedTrue}/>
      <ParentTwo shouldRenderChild={isParentOneRendered}/>
    </div>
  )
};

export default Grandparent;