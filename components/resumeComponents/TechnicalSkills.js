import React from 'react'

const TechnicalSkills = ({ technicalSkill: {name, color} }) => {
  return (
    <div className=''>
        <p style={{color: color}}>{name}</p>
    </div>
  )
}

export default TechnicalSkills