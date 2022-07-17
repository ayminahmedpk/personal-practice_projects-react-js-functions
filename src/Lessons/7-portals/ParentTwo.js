import React from 'react'
import { createPortal } from 'react-dom';

import Child from './Child';

const ParentTwo = (props) => {

  return (
    <div className='component'>
      <p>ParentTwo</p>
      {
        props.shouldRenderChild ?
        createPortal(<Child/>, document.querySelector('.portal')) :
        ''
      }
    </div>
  )
};

export default ParentTwo;