import React from 'react'

const TechStack = ({techStack}) => {

  return (
    <div className=''>
      <p style={{color: techStack.color}}>{techStack.name}</p>
    </div>
  )
}

export default TechStack