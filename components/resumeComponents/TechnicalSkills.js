import React from 'react'

const TechnicalSkills = ({ technicalSkill: {name, color} }) => {
  return (
    <div className='technical-skills'>
        <p style={{color: color}}>{name}</p>
    </div>
  )
}

export default TechnicalSkills