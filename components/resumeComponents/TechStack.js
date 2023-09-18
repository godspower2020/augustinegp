import React from 'react'

const TechStack = ({techStack}) => {

  return (
    <div className='tech-stack'>
      <p style={{color: techStack.color}}>{techStack.name}</p>
    </div>
  )
}

export default TechStack