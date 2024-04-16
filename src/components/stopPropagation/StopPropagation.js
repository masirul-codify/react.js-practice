import React from 'react'

export default function StopPropagation() {

   const handleClickParent = (parent) => {
        console.log('Parent Event:', parent);
    };

   const handleClickChild = (child) => {
        child.stopPropagation();
        console.log('Child Event:', child);
    }

  return (
    <div>
      <div className='parent' onClick={handleClickParent}>
        <div>
            <button className='child'  onClick={handleClickChild}>+</button>
        </div>
      </div>
    </div>
  )
}
