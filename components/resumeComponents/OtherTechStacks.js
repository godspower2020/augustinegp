import React from 'react'

const OtherTechStacks = ({otherTechStack}) => {
  return (
    <div className=''>
        <p style={{color: otherTechStack.color}}>{otherTechStack.name}</p>
    </div>
  )
}

export default OtherTechStacks